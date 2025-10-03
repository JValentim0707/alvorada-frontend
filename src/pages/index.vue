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
    <div class="flex flex-col w-[60%] h-[500px] overflow-y-auto">
      <div>
        <div class="text-2xl mb-1 font-primary"> Dog Breeds</div>
        <div class="flex w-[90px] h-[8px] bg-[#DB9945] mb-1"></div>
        <div class="text-lg mb-6 font-light text-[#332F29] font-primary"> Total Results: {{ allBreeds.length }}</div>
      </div>
      <div class="content-list-breeds" v-if="allBreeds.length > 0">
        <div v-for="breed in allBreeds" class="mr-4 mb-4 cursor-pointer hover:bg-neutral-100" >
          <CustomCard @click="openDogBreedDialog(breed)" :customProps="{ ...cardProps, cardText: breed }"> 
            <template #custom-card-content>
              <div class="flex flex-col justify-center items-center">
                <v-icon icon="mdi-dog" size="90"></v-icon>
                <div class="font-light text-2xl capitalize font-primary">{{ breed }}</div>
              </div>
            </template>
          </CustomCard>
        </div>
      </div>
    </div>
  </div>
  <BreedsImageDialog v-model="openDogDialog" :breedDialogImages="breedImages" :breedDialogTitle="selectedBreed"/>
</template>

<script lang="ts" setup>
import { onMounted, ref  } from 'vue';
import LogoBreeds from "../assets/logo-breeds.png"

// Import Functions
import { getAllBreeds, getBreedImages } from '@/service/breeds';

// Import Components
import CustomNavBar from '@/components/customComponents/CustomNavBar.vue';
import CustomButton from '@/components/customComponents/CustomButton.vue';
import CustomCard from '@/components/customComponents/CustomCard.vue'

// Import Dialogs
import BreedsImageDialog from '@/components/Dialogs/BreedsImageDialog.vue';

// Import Interfaces
import type { INavBarProps, IButtonProps, ICardProps, IDialog } from '@/interfaces/customComponents';

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
const cardProps: ICardProps = {
  cardProps: {
    height: "200",
    width: "200",
    color: "#DB9945",
    variant: "outlined"
  }
}

const allBreeds = ref<string[]>([])
const breedImages = ref<string[]>([])
const selectedBreed = ref<string>("")
const openDogDialog = ref<boolean>(false)

onMounted(async () => {
  allBreeds.value = await getAllBreeds()
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
</script>

<style scoped>

.content-container {
  @apply relative z-10 flex flex-col justify-start text-[#000000] items-start;
}

.content-list-breeds {
  @apply flex flex-wrap w-full;
}
</style>
