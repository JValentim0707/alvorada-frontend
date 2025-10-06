<template>
  <v-btn v-bind="props.customProps"> 
    <span v-if="props.buttonIcon"><v-icon :icon="props.buttonIcon"></v-icon></span>
    <span v-if="props.buttonText"> {{ props.buttonText }} </span>
  </v-btn>
</template>

<script lang="ts" setup>
import type { IButtonProps } from '@/interfaces/customComponents';

defineOptions({
  name: 'CutomButton',
});


const props = defineProps<{
  buttonText?: string,
  buttonIcon?: string,
  buttonIconSize?: string,
  customProps: IButtonProps
}>()

</script>