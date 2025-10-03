<template>
  <v-btn v-bind="props.customProps.buttonProps"> 
    <span v-if="props.customProps.buttonIcon"><v-icon :icon="props.customProps.buttonIcon"></v-icon></span>
    <span v-if="props.customProps.buttonText"> {{ props.customProps.buttonText }} </span>
  </v-btn>
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