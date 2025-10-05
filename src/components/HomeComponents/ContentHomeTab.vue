<template>
  <div>
    <div class="text-2xl mb-1 font-primary"> Dog Breeds</div>
    <div class="flex w-[90px] h-[8px] bg-[#DB9945] mb-1"></div>
    <div class="text-lg mb-6 font-light text-[#332F29] font-primary"> Total Results: {{ selectedTab === 1 ? props.allBreeds.length : props.favoriteBreeds.length }}</div>
  </div>
  <CustomTabs v-model="selectedTab" :tabItems="homeContentTabs" :customProps="tabsProps">
    <template #tab-content>
      <v-tabs-window v-model="selectedTab" class="mt-6">
        <v-tabs-window-item :value="1">
          <div class="content-list-breeds !max-h-[500px] overflow-y-auto " v-if="props.allBreeds.length > 0">
            <div v-for="breed in props.allBreeds" class="mr-4 mb-4 cursor-pointer hover:bg-neutral-100" >
              <BreedsCard :favoriteBreeds="props.favoriteBreeds" :breedName="breed" @click="onSelectBreed(breed)"></BreedsCard>
            </div>
          </div>
        </v-tabs-window-item>
        <v-tabs-window-item :value="2">
          <div class="content-list-breeds !max-h-[500px] overflow-y-auto" v-if="props.favoriteBreeds.length > 0">
            <div v-for="breed in props.favoriteBreeds" class="mr-4 mb-4 cursor-pointer hover:bg-neutral-100" >
              <BreedsCard :favoriteBreeds="props.favoriteBreeds" :breedName="breed" @click="onSelectBreed(breed)"></BreedsCard>
            </div>
          </div>
        </v-tabs-window-item>
      </v-tabs-window>
    </template>
  </CustomTabs>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

// Import Components
import CustomTabs from '../customComponents/CustomTabs.vue';
import BreedsCard from '../Card/BreedsCard.vue';

// Import Interfaces
import type { ITabsProps, ITabItem, ICardProps } from '@/interfaces/customComponents';

const tabsProps: ITabsProps = {
  'align-tabs': 'end',
}

const cardProps: ICardProps = {
  height: "200",
  width: "200",
  color: "#DB9945",
  variant: "outlined"
}

const homeContentTabs = ref<ITabItem[]>([
  {
    title: "Breeds",
    value: 1
  },
  {
    title: "Favorites",
    value: 2
  }
])

const props = defineProps<{
  allBreeds: string[],
  favoriteBreeds: string[]
}>()

const emit = defineEmits<{
  (e: 'openBreedDialog', breedName: string): void
}>()

const selectedTab = ref<number>(1)

const onSelectBreed = (breedName: string) => {
  emit('openBreedDialog', breedName)
}

</script>

<style scoped>
.content-list-breeds {
  @apply flex flex-wrap w-full;
}
</style>