<template>
  <div class="relative h-screen w-full">
    <CustomNavBar :customProps="navBarProps" />

    <div class="absolute inset-0 bg-cover bg-center bg-[url('@/assets/bg-home.jpg')]"></div>
    
    <div class="content-container">
      <div class="!pt-[120px] !pl-[80px]">
        <div class="text-5xl font-bold">Discover the <br> World of Dog Breeds</div>
        <div class="text-xl font-light !py-4">Because every dog is unique, but the right knowledge <br> makes a difference</div>
        <CustomButton class="font-primary !font-normal" :customProps="buttonProps" @click="scrollToSection('dogs-breeds')"></CustomButton>
      </div>
    </div>
  </div>
  <div id="dogs-breeds" class="flex flex-col w-full justify-center items-center bg-white !p-8">
    <div class="flex flex-col w-[60%]">
      <ContentHomeTab :allBreeds="allBreeds" :favoriteBreeds="favoriteBreeds" @openBreedDialog="openDogBreedDialog"></ContentHomeTab>
    </div>
  </div>
  <BreedsImageDialog 
    v-model="openDogDialog" 
    :breedDialogImages="breedImages" 
    :favoriteBreeds="favoriteBreeds" 
    :breedDialogTitle="selectedBreed"
    @updateFavoriteBreeds="updateFavoriteBreeds"
  />
</template>

<script lang="ts" setup>
import { onMounted, ref  } from 'vue';
import LogoBreeds from "../assets/logo-breeds.png"

// Import Functions
import { getAllBreeds, getBreedImages } from '@/service/breeds';
import { getAllFavoriteBreeds } from '@/service/favorite';

// Import Components
import CustomNavBar from '@/components/customComponents/CustomNavBar.vue';
import CustomButton from '@/components/customComponents/CustomButton.vue';
import ContentHomeTab from '@/components/HomeComponents/ContentHomeTab.vue';

// Import Dialogs
import BreedsImageDialog from '@/components/Dialogs/BreedsImageDialog.vue';

// Import Interfaces
import type { INavBarProps, IButtonProps } from '@/interfaces/customComponents';

const navBarProps: INavBarProps = {
  iconPath: LogoBreeds,
  iconWidth: 130,
  iconHeight: 130,
  navBarProps: {
    height: "100",
    color: "#FFE2C4"
  }
}

const buttonProps: IButtonProps = {
  buttonText: "Browse Breeds",
  buttonProps: {
    color: "#DB9945",
    height: "50",
    "append-icon": "$next"
  }
}

const allBreeds = ref<string[]>([])
const favoriteBreeds = ref<string[]>([])
const breedImages = ref<string[]>([])
const selectedBreed = ref<string>("")
const openDogDialog = ref<boolean>(false)

onMounted(async () => {
  allBreeds.value = await getAllBreeds()
  await updateFavoriteBreeds()
})

const openDogBreedDialog = async (breedname: string) => {
  openDogDialog.value = true
  selectedBreed.value = breedname
  breedImages.value = await getBreedImages(breedname)
}

const scrollToSection = (archorIdName: string) => {
  const el = document.getElementById(archorIdName);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
}

const updateFavoriteBreeds = async () => {
  favoriteBreeds.value = await getAllFavoriteBreeds()
}
</script>

<style scoped>

.content-container {
  @apply relative z-10 flex flex-col justify-start text-[#000000] items-start;
}
</style>
