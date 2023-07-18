<template>
  <form class="w-full grid grid-cols-1 gap-5">
    <slot></slot>
  </form>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'LayoutForm'
})
</script>