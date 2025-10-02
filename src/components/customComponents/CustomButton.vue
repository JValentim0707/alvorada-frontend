<template>
  <v-btn v-bind="props.customProps.buttonProps"> {{ props.customProps.buttonText }}</v-btn>
</template>

<script lang="ts" setup>
import type { IButtonProps } from '@/interfaces/customComponents';

defineOptions({
  name: 'CutomButton',
});


const props = defineProps<{
  customProps: IButtonProps
}>()

</script>