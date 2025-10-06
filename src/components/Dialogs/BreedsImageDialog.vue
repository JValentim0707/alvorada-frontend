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
            <CustomLoader v-if="breedimagesLoader" :customProps="loaderProps"></CustomLoader>
            <div v-else>
              <div class="flex !gap-6">
                <div class="flex flex-col w-[300px] h-[300px]" v-for="breedImage in breedDialogImages">
                  <v-img cover position="center center" :src="breedImage"></v-img>
                </div>
              </div>
            </div>
          </template>
        </CustomCard>
      </div>
    </template>
  </CustomDialog>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

// Import Utils Lib
import JSZip, { forEach } from "jszip";

// Import Interfaces
import type { IDialog, ILoaderProps, IButtonProps } from '@/interfaces/customComponents';

// Import Components
import CustomDialog from '../customComponents/CustomDialog.vue';
import CustomLoader from '../customComponents/CustomLoader.vue';
import CustomButton from '../customComponents/CustomButton.vue';

// Import Functions
import { addBreedFavorite, removeBreedFavorite } from '@/service/favorite'

defineOptions({
  name: 'CustomBreedDialog',
});

const props = defineProps<{
  breedDialogTitle: string,
  breedDialogImages: string[],
  favoriteBreeds: string[],
  breedimagesLoader: boolean
}>()

const dialogProps: IDialog = {
}

const buttonProps = ref<IButtonProps>({
  color: "#DB9945",
  height: "40",
  "append-icon": "mdi-download",
  loading: false,
})

const loaderProps: ILoaderProps = {
  indeterminate: true,
  size: '45'
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

const downloadImages = async () => {
  buttonProps.value.loading = true
  const zip = new JSZip();

  const breedName: string = props.breedDialogTitle
  const imagesToDownload: string[] = props.breedDialogImages

  let imageIndex: number = 0
  for (const image of imagesToDownload) {
    imageIndex++

    const res = await fetch(image)
    const blob: Blob = await res.blob()

    const name: string = `${breedName}-${imageIndex}.jpg`
    zip.file(name, blob)
  }

  const content: Blob = await zip.generateAsync({ type: "blob" });

  const link: HTMLAnchorElement = document.createElement("a")

  link.href = URL.createObjectURL(content)
  link.download = "imagens.zip"
  document.body.appendChild(link)

  link.click()
  document.body.removeChild(link)
  URL.revokeObjectURL(link.href)
   buttonProps.value.loading = false
}
</script>
<style scoped>

.icon-container {
  @apply w-[35px] h-[35px] rounded-full flex justify-center items-center !border border-[#332F29]
}

</style>