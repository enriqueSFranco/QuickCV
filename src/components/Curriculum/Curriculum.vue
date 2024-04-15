<template>
  <div class="w-full h-full bg-gray-200/50 flex flex-col items-center gap-4 p-4">
    <transition name="fade">
      <canvas v-show="!loading" id="the-canvas" class="shadow-lg rounded opacity-60 w-2/3 h-full z-10" />
    </transition>
    <transition name="fade">
      <Loader v-show="loading" :text="'cargando vista previa'" />
    </transition>
    <footer class="w-full flex flex-grow items-end justify-center">
      <button class="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-slate-50 rounded-lg font-medium p-4"
        @click="previewCV.dowloadPDF">Descargar
        curriculum</button>
    </footer>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { usePreviewCurriculum } from '@/stores/preview-cv'
import Loader from '@/components/Loader/Loader.vue'

export default defineComponent({
  name: 'Curriculum',
  components: { Loader },
  setup () {
    const previewCV = usePreviewCurriculum()
    const { loading } = storeToRefs(previewCV)

    onMounted(() => {
      previewCV.debounceRenderPDF()
    })
    return { previewCV, loading }
  }
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