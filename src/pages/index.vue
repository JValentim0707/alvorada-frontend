<template>
  <div class="relative h-screen w-full">
    <CustomNavBar :customProps="navBarProps"></CustomNavBar>

    <div class="absolute inset-0 bg-cover bg-center bg-[url('@/assets/bg-home.jpg')]"></div>
    
    <div class="content-container">
      <div class="!pt-[120px] !pl-[80px]">
        <div class="text-5xl font-bold">Discover the <br> World of Dog Breeds</div>
        <div class="text-xl font-light !py-4">Because every dog is unique, but the right knowledge <br> makes a difference</div>
        <CustomButton class="font-primary !font-normal" :customProps="buttonProps"></CustomButton>
      </div>
    </div>
  </div>
  <div class="flex flex-col w-full justify-center items-center bg-white !p-8">
    <div class="flex flex-col">
      <div class="text-2xl mb-1 font-primary"> Dog Breeds</div>
      <div class="flex w-[90px] h-[8px] bg-[#DB9945] mb-8"></div>
      <div class="content-list-breeds">
        <CustomCard class="mr-4" :customProps="cardProps"></CustomCard>
        <CustomCard class="mr-4" :customProps="cardProps"></CustomCard>
        <CustomCard class="mr-4" :customProps="cardProps"></CustomCard>
        <CustomCard class="mr-4" :customProps="cardProps"></CustomCard>
        <CustomCard class="mr-4" :customProps="cardProps"></CustomCard>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref  } from 'vue';
import LogoBreeds from "../assets/logo-breeds.png"

// Import Functions
import { getAllBreeds } from '@/service/breeds';

// Import Components
import CustomNavBar from '@/components/customComponents/CustomNavBar.vue';
import CustomButton from '@/components/customComponents/CustomButton.vue';
import CustomCard from '@/components/customComponents/CustomCard.vue'

//Import Interfaces
import type { INavBarProps, IButtonProps, ICardProps } from '@/interfaces/customComponents';

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
  cardText: "Card Text",
  iconPath: "mdi-dog",
  iconSize: "50",
  cardProps: {
    height: "200",
    width: "200"
  }
}

onMounted(async () => {
  // allBreeds.value = await getAllBreeds()
  console.log("Mounteu")
})
</script>

<style scoped>

.content-container {
  @apply relative z-10 flex flex-col justify-start text-[#000000] items-start;
}

.content-list-breeds {
  @apply relative z-10 flex flex-row w-full;
}
</style>
