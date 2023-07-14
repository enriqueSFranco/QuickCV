<template>
  <div class="w-full flex flex-col gap-2">
    <label v-if="label">{{ label }}</label>
    <input v-bind="$attrs" :placeholder="placeholder" :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      class="p-3 outline-none border-none rounded-lg bg-slate-800 w-full">
  </div>
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