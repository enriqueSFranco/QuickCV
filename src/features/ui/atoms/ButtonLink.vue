<template>
  <div class="relative">
    <div class="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 blur opacity-75 rounded-lg leading-none">
    </div>
    <router-link :to="{ name }"
      class="relative inline-flex w-auto h-12 px-4 items-center justify-center capitalize z-20 bg-slate-950 rounded-lg">
      {{ label }}
    </router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BaseButtonLink',
  props: {
    name: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    }
  }
})
</script>