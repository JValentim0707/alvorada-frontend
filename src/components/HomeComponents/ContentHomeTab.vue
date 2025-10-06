<template>
  <div>
    <div class="text-2xl mb-1 font-primary"> Dog Breeds</div>
    <div class="flex w-[90px] h-[8px] bg-[#DB9945] mb-1"></div>
    <div class="text-lg mb-6 font-light text-[#332F29] font-primary"> Total Results: {{ selectedTab === 1 ? filteredBreeds.length : filteredFavorites.length }}</div>
  </div>
  <div class="flex justify-center">
    <div class="w-full max-w-3xl">
      <CustomTextField :customProps="textFieldProps" v-model="searchText"></CustomTextField>
    </div>
  </div>
  <CustomTabs v-model="selectedTab" :tabItems="homeContentTabs" :customProps="tabsProps">
    <template #tab-content>
      <div v-if="breedsLoader" class="!w-full !min-h-[500px] flex !justify-center !items-center"><CustomLoader :customProps="loaderProps" /></div>
      <div v-else>
        <v-tabs-window v-model="selectedTab" class="mt-6">
          <v-tabs-window-item :value="1">
            <div class="content-list-breeds !max-h-[500px] overflow-y-auto " v-if="filteredBreeds.length > 0">
              <div v-for="breed in filteredBreeds" class="mr-4 mb-4 cursor-pointer hover:bg-neutral-100" >
                <BreedsCard :favoriteBreeds="props.favoriteBreeds" :breedName="breed" @click="onSelectBreed(breed)"></BreedsCard>
              </div>
            </div>
            <div v-else class="!min-h-[500px] font-primary text-capitalize flex flex-col justify-center items-center text-gray-400">
              <div><v-icon icon="mdi-view-list" size="55"></v-icon></div>
              <span>no records found</span>
            </div>
          </v-tabs-window-item>
          <v-tabs-window-item :value="2">
            <div class="content-list-breeds !max-h-[500px] overflow-y-auto" v-if="filteredFavorites.length > 0">
              <div v-for="breed in filteredFavorites" class="mr-4 mb-4 cursor-pointer hover:bg-neutral-100" >
                <BreedsCard :favoriteBreeds="props.favoriteBreeds" :breedName="breed" @click="onSelectBreed(breed)"></BreedsCard>
              </div>
            </div>
            <div v-else class="!min-h-[500px] font-primary text-capitalize flex flex-col justify-center items-center">
              <div><v-icon icon="mdi-view-list" size="55"></v-icon></div>
              <span>no records found</span>
            </div>
          </v-tabs-window-item>
        </v-tabs-window>
      </div>
    </template>
  </CustomTabs>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue';

// Import Components
import CustomTabs from '../customComponents/CustomTabs.vue';
import CustomTextField from '../customComponents/CustomTextField.vue';
import CustomLoader from '../customComponents/CustomLoader.vue';
import BreedsCard from '../Card/BreedsCard.vue';

// Import Interfaces
import type { ITabsProps, ITabItem, ITextFieldProps, ILoaderProps } from '@/interfaces/customComponents';

const tabsProps: ITabsProps = {
  'align-tabs': 'end',
}

const textFieldProps: ITextFieldProps = {
  label: "Search",
  density: "compact",
  variant: "outlined",
  'append-inner-icon': "mdi-magnify"
}

const loaderProps: ILoaderProps = {
  indeterminate: true,
  size: '45'
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

const searchText = ref<string>('')

const props = defineProps<{
  allBreeds: string[],
  favoriteBreeds: string[],
  breedsLoader: boolean
}>()

const emit = defineEmits<{
  (e: 'openBreedDialog', breedName: string): void
}>()

const selectedTab = ref<number>(1)

const filteredBreeds = computed(() => props.allBreeds.filter((x: string) => x.toLocaleLowerCase().includes(searchText.value.toLocaleLowerCase())))
const filteredFavorites = computed(() => props.favoriteBreeds.filter((x: string) => x.toLocaleLowerCase().includes(searchText.value.toLocaleLowerCase())))

const onSelectBreed = (breedName: string) => {
  emit('openBreedDialog', breedName)
}

</script>

<style scoped>
.content-list-breeds {
  @apply flex flex-wrap w-full;
}
</style>