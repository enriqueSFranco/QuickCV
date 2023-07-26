<template>
  <form class="w-full h-full flex flex-col items-center justify-center gap-5 relative">
    <slot></slot>
  </form>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'LayoutForm'
})
</script>