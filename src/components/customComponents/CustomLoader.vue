<template>
  <v-progress-circular v-bind="props.customProps"></v-progress-circular>
</template>
<script lang="ts" setup>
import type { ILoaderProps } from '@/interfaces/customComponents';

const props = defineProps<{
  customProps: ILoaderProps
}>()
</script>