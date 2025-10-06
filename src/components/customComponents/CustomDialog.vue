<template>
  <v-dialog v-bind="props.customProps">
    <slot name="dialog-content" />
  </v-dialog>
</template>

<script lang="ts" setup>
import type { IDialog } from '@/interfaces/customComponents';

defineOptions({
  name: 'CustomDialog',
});

const props = defineProps<{
  customProps: IDialog
}>()
</script>