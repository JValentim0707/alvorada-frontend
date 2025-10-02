<template>
  <v-card :text="props.customProps.cardText" v-bind="props.customProps.cardProps">
    <v-card-item class="flex justify-center items-center w-full h-full">
      <v-icon :icon="props.customProps.iconPath" :size="props.customProps.iconSize"></v-icon>
    </v-card-item>
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