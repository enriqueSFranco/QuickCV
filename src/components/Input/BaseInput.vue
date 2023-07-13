<template>
  <label v-if="label">{{ label }}</label>
  <input v-bind="$attrs" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)"
    class="p-3 outline-none border-none rounded-lg bg-slate-800">
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
    modelValue: {
      type: [String, Number],
      default: ''
    }
  }
})
</script>