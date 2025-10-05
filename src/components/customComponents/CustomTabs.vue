<template>
  <v-tabs v-model="internalValue" v-bind="props.customProps" class="font-primary" >
    <v-tab v-for="item in props.tabItems" :value="item.value">{{ item.title }}</v-tab>
  </v-tabs>
  <div>
    <slot name="tab-content"></slot>
  </div>
    
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'
import type { ITabsProps, ITabItem } from '@/interfaces/customComponents';

const props = defineProps<{
  customProps: ITabsProps,
  modelValue: number,
  tabItems: ITabItem[]
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: number): void
}>()

const internalValue = computed({
  get: () => props.modelValue,
  set: (val) => emit('update:modelValue', val),
})
</script>