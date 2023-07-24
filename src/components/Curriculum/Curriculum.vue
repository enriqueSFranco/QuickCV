<template>
  <section class="w-full h-full flex flex-col items-center gap-4">
    <span class="relative w-2/3 h-full">
      <canvas id="the-canvas" width="874" height="1050"
        class="absolute inset-0 w-full h-full opacity-70 bg-slate-400/20"></canvas>
    </span>
    <footer class="w-full flex flex-grow items-end justify-center">
      <button class="bg-slate-400/20 rounded-full font-medium p-4">Descargar curriculum</button>
    </footer>
  </section>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import { usePersonalInformation } from '@/stores/personalInformation'
import { useProfessinalProfile } from '@/stores/professionalProfile'
import { useWebsite } from '@/stores/websites'
import { pageviewer } from '@/helpers/pageviewer'

export default defineComponent({
  name: 'Curriculum',
  setup () {
    const personalInformationStore = usePersonalInformation()
    const professionalProfileStore = useProfessinalProfile()
    const websitesStore = useWebsite()

    onMounted(() => {
      pageviewer({ text: { personalInformation: personalInformationStore.formData, websites: websitesStore.formData, professionalProfile: professionalProfileStore.formData } })
    })

  }
})
</script>