<template>
  <CustomDialog :customProps="dialogProps">
    <template #dialog-content>
      <div class="w-full h-full flex justify-center items-center">
        <CustomCard :customProps="{ color: '#ffffff', width: 'auto' }">
          <template #custom-card-title>
            <div class="flex flex col justify-between items-center">
              <div>
                <div class="text-2xl mb-1 capitalize font-normal font-primary">{{ props.breedDialogTitle }}</div>
                <div class="flex w-[42px] h-[8px] bg-[#DB9945] mb-1"></div>
              </div>
              <div v-if="!props.favoriteBreeds.includes(props.breedDialogTitle)" class="icon-container !p-4 cursor-pointer hover:bg-neutral-100 active:bg-neutral-200" @click="onAddFavoriteBreed">
                <v-icon icon="mdi-heart-outline" size="22"></v-icon>
              </div>
              <div v-else class="icon-container !border-[#F20505] bg-[#F20505] !p-4 cursor-pointer hover:bg-red-400 active:bg-neutral-200" @click="onRemoveFavoriteBreed">
                <v-icon icon="mdi-heart" color="white" size="22"></v-icon>
              </div>
            </div>
          </template>
          <template #custom-card-content>
            <div class="flex !gap-6">
              <div class="flex w-[300px] h-[300px]" v-for="breedImage in breedDialogImages">
                <v-img cover position="center center" :src="breedImage"></v-img>
              </div>
            </div>
          </template>
        </CustomCard>
      </div>
    </template>
  </CustomDialog>
</template>

<script lang="ts" setup>
// Import Interfaces
import type { IDialog } from '@/interfaces/customComponents';

// Import Components
import CustomDialog from '../customComponents/CustomDialog.vue';

// Import Functions
import { addBreedFavorite, removeBreedFavorite } from '@/service/favorite'

defineOptions({
  name: 'CustomBreedDialog',
});

const props = defineProps<{
  breedDialogTitle: string,
  breedDialogImages: string[],
  favoriteBreeds: string[]
}>()

const dialogProps: IDialog = {
  dialogProps: {
  }
}

const emit = defineEmits<{
  (e: 'updateFavoriteBreeds'): void
}>()

const onAddFavoriteBreed = async () => {
  const breedName: string = props.breedDialogTitle
  await addBreedFavorite(breedName)
  emit('updateFavoriteBreeds')
}

const onRemoveFavoriteBreed = async () => {
  const breedName: string = props.breedDialogTitle
  await removeBreedFavorite(breedName)
  emit('updateFavoriteBreeds')
}
</script>
<style scoped>

.icon-container {
  @apply w-[35px] h-[35px] rounded-full flex justify-center items-center !border border-[#332F29]
}

</style>