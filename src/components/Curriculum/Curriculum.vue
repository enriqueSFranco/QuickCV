<template>
  <section class="w-full h-full bg-slate-100 flex flex-col items-center p-4">
    <canvas id="the-canvas" class="bg-slate-50 shadow-lg opacity-70 rounded"></canvas>
    <footer class="w-full flex flex-grow items-end justify-center">
      <button class="bg-slate-800 text-slate-50 rounded-full font-medium p-4">Descargar curriculum</button>
    </footer>
  </section>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import { usePreviewCurriculum } from '@/stores/previewCV'

export default defineComponent({
  name: 'Curriculum',
  setup () {
    const previewCV = usePreviewCurriculum()
    onMounted(async () => {
      previewCV.renderPDF()
    })

  }
})
</script>