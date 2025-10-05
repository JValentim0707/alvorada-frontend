<template>
  <CustomCard :customProps="cardProps"> 
    <template #custom-card-content>
      <div v-if="props.favoriteBreeds.includes(breedName)" class="flex w-full justify-end"><v-icon icon="mdi-heart" color="#F20505" size="25"></v-icon></div>
      <div class="flex flex-col justify-center items-center">
        <v-icon icon="mdi-dog" size="90"></v-icon>
        <div class="font-light text-2xl capitalize font-primary">{{ breedName }}</div>
      </div>
    </template>
  </CustomCard>
</template>

<script lang="ts" setup>
import CustomCard from '../customComponents/CustomCard.vue';

// Import Interfaces
import type { ICardProps } from '@/interfaces/customComponents';

const cardProps: ICardProps = {
  height: "200",
  width: "200",
  color: "#DB9945",
  variant: "outlined"
}

const props = defineProps<{
  favoriteBreeds: string[],
  breedName: string
}>()
</script>