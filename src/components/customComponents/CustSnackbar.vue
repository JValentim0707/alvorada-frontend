<template>
   <v-snackbar v-bind="props.customProps" max-width="60px">
    <slot name="snackbar-content"></slot>
   </v-snackbar>
</template>
<script lang="ts" setup>
import type { ISnackbarProps } from '@/interfaces/customComponents';

const props = defineProps<{
  customProps: ISnackbarProps
}>()

</script>