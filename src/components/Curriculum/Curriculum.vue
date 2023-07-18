<template>
  <section class="w-full h-full flex flex-col items-center">
    <canvas id="the-canvas" width="594" height="650" class="rounded-xl opacity-70 shadow-lg bg-slate-800/40"></canvas>
    <footer class="w-full flex flex-grow items-end justify-center">
      <button>descargar curriculum</button>
    </footer>
  </section>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import { usePersonalInformation } from '@/stores/personalInformation'
import { pageviewer } from '@/helpers/pageviewer'
import { useProfessinalProfile } from '@/stores/professionalProfile'

export default defineComponent({
  name: 'Curriculum',
  setup () {
    const personalInformationStore = usePersonalInformation()
    const professionalProfileStore = useProfessinalProfile()

    onMounted(() => {
      pageviewer({ text: { personalInformation: personalInformationStore.formData, professionalProfile: professionalProfileStore.formData } })
    })
  }
})
</script>