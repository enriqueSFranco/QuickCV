<template>
  <div class="w-full h-screen dark:bg-slate-950 text-slate-50">
  <div class="h-screen w-full dark:bg-slate-950 text-slate-200">
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