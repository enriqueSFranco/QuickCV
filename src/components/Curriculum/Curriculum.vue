<template>
  <section class="w-full h-full bg-slate-100 flex flex-col items-center p-4">
    <template v-if="!loading">
      <!-- TODO: implementar componente de carga -->
      <div>cargando vista previa</div>
    </template>
    <canvas v-else id="the-canvas" class="shadow-lg rounded w-full h-full"> </canvas>
    <button>hola</button>
    <footer class="w-full flex flex-grow items-end justify-center">
      <button class="bg-slate-800 text-slate-50 rounded-full font-medium p-4">Descargar curriculum</button>
    </footer>
  </section>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { usePreviewCurriculum } from '@/stores/previewCV'

export default defineComponent({
  name: 'Curriculum',
  setup () {
    const previewCV = usePreviewCurriculum()
    const { loading } = storeToRefs(previewCV)
    onMounted(async () => {
      previewCV.renderPDF()
    })
    return { loading }
  }
})
</script>