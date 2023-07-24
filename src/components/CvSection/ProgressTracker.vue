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
      <li v-for="cvSection of cvSections" :key="cvSection.id">
        <router-link :to="{ name: cvSection.href }">
          <CvSection :payload="cvSection" />
        </router-link>
      </li>
      <!-- SECCIOÓN EN CONSTRUCCIÓN -->
      <div class="h-20">
        <h2 class="font-bold opacity-30">Nueva sección</h2>
      </div>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import data from '@/api/data.json'
import CvSection from './CvSection.vue';
import arrowLeft from '@/assets/icons/arrow-left.svg'

export default defineComponent({
  name: 'ProgressTracker',
  components: {
    CvSection
  },
  setup () {
    const cvSections = data.cv_sections
    return { cvSections, arrowLeft }
  }
})
</script>