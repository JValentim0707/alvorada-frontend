<template>
  <v-text-field v-bind="props.customProps"></v-text-field>
</template>
<script lang="ts" setup>
import type { ITextFieldProps } from '@/interfaces/customComponents';

const props = defineProps<{
  customProps: ITextFieldProps
}>()
</script>