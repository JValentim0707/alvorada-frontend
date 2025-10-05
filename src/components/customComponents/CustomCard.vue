<template>
    <v-card v-bind="props.customProps">
      <v-card-title><slot name="custom-card-title" /></v-card-title>
      <v-card-subtitle><slot name="custom-card-subtitle" /></v-card-subtitle>
      <v-card-item><slot name="custom-card-content" /></v-card-item>
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