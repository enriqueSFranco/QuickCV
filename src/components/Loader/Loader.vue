<template>
  <div class="shadow-lg rounded w-[476px] h-full grid place-items-center bg-slate-50 opacity-75">
    <div class="w-2/3 relative grid place-items-center">
      <h2 class="text-gray-900 font-light">{{ text }}</h2>
      <div
        class="relative w-2/3 h-2 overflow-hidden after:absolute after: top-3 left-0 after:w-full after:h-2 after:rounded-lg after:bg-gray-900 after:animate-progress">
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Loader',
  props: {
    text: {
      type: String,
      default: 'cargando contenido'
    }
  },
  setup () {

  }
})
</script>