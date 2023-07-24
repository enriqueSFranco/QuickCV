<template>
  <div class="w-full h-screen text-slate-200">
    <Navbar />
    <slot></slot>
  </div>
</template>

<script lang="ts">
import Navbar from '../components/Navbar/Navbar.vue'

export default {
  name: 'Layout',
  components: {
    Navbar
  }
}
</script>

<style scoped></style>