<template>
  <form class="w-2/3 h-full flex flex-col items-center justify-center gap-5">
    <slot></slot>
  </form>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'LayoutForm'
})
</script>