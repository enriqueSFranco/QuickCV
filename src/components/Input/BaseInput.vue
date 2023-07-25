<template>
  <label v-if="label" class="w-full h-full flex flex-col gap-2">
    <span>{{ label }}</span>
    <input v-bind="$attrs" :placeholder="placeholder" :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      class="w-full p-3 border-none rounded-lg bg-slate-50 outline outline-slate-200">
  </label>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BaseInput',
  props: {
    label: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: ''
    },
    modelValue: {
      type: [String, Number],
      default: ''
    }
  }
})
</script>