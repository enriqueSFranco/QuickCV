<template>
  <div class="grid grid-cols-1 gap-4 p-8">
    <header class="w-full h-10">
      <nav class="w-full h-full flex items-center justify-start gap-2">
        <router-link :to="{ name: 'home' }"
          class="bg-slate-400/20 rounded-full w-8 h-8 grid place-items-center cursor-pointer">
          <img :src="arrowLeft" alt="icon-arrow-left">
        </router-link>
        <h2 className='font-bold text-left text-slate-950 text-md uppercase lg:text-xl'>Selecciona una sección para
          comenzar</h2>
      </nav>
    </header>
    <ul class="grid grid-cols-1 divide-y divide-slate-300">
      <li v-for="sectionCV of SECTIONS_CV" :key="sectionCV.id">
        <router-link :to="{ name: sectionCV.href }">
          <SectionCV :sectionCV="sectionCV" />
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
// import { useEducation, useProfessinalProfile } from '@/stores'
import SectionCV from './SectionCV.vue';
import { SECTIONS_CV } from '@/shared/constants.d';
import arrowLeft from '@/assets/icons/arrow-left.svg'

export default defineComponent({
  name: 'ProgressTracker',
  components: {
    SectionCV
  },
  setup () {
    // const professionalProfile = useProfessinalProfile()
    // const education = useEducation()

    return { arrowLeft, SECTIONS_CV }
  }
})
</script>