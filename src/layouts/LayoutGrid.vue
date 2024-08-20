<template>
  <div class="w-full grid grid-cols-2">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'LayoutGrid'
})
</script>