<template>
  <textarea name="" id="" cols={30} rows="10" :placeholder="placeholder" :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    class="w-2/3 h-44 shadow-md overflow-y-auto bg-slate-200 outline-none rounded-lg p-3 resize-none"></textarea>
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