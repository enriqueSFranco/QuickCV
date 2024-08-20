<template>
  <div class="w-full h-full bg-gray-200/50 flex flex-col items-center gap-4 p-4">

    <footer class="w-full flex flex-grow items-end justify-center">
      <button
        class="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-slate-50 rounded-lg font-medium p-4">Descargar
        curriculum</button>
    </footer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'LiveCV'
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity .5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>