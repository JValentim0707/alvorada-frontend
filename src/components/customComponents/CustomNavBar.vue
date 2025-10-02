<template>
  <v-app-bar :elevation="0" v-bind="props.customProps.navBarProps">
  <template v-slot:prepend>
    <v-img :src="props.customProps.iconPath" :width="props.customProps.iconWidth" :height="props.customProps.iconHeight"></v-img>

  </template>

  </v-app-bar>
</template>

<script lang="ts" setup>
import type { INavBarProps } from '@/interfaces/customComponents';

defineOptions({
  name: 'CustomNavBar',
});

const props = defineProps<{
  customProps: INavBarProps
}>()
</script>