<template>
  <textarea name="" id="" cols={30} rows="10" :placeholder="placeholder" :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    class="w-full h-44 overflow-y-auto bg-slate-50 outline outline-slate-200 rounded-lg p-3 resize-none"></textarea>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BaseTextArea',
  props: {
    modelValue: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    }
  }
})
</script>