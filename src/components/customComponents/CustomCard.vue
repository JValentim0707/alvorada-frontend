<template>
    <v-card v-bind="props.customProps.cardProps">
      <v-card-title><slot name="custom-card-title" /></v-card-title>
      <v-card-subtitle><slot name="custom-card-subtitle" /></v-card-subtitle>
      <v-card-item><slot name="custom-card-content" /></v-card-item>
      <!-- <v-card-item class="flex justify-center items-center w-full h-full">
        <div class="flex flex-col justify-center items-center">
          <v-icon v-if="props.customProps.iconPath" :icon="props.customProps.iconPath" :size="props.customProps.iconSize"></v-icon>
          <div class="font-light text-2xl capitalize font-primary">{{ props.customProps.cardText }}</div>
        </div>
      </v-card-item> -->
    </v-card>
</template>

<script lang="ts" setup>
import type { ICardProps } from '@/interfaces/customComponents';

defineOptions({
  name: 'CutomCard',
});

const props = defineProps<{
  customProps: ICardProps
}>()
</script>