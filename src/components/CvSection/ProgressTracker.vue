<template>
  <header class="w-full h-10">
    <nav class="w-full h-full flex items-center justify-start gap-2">
      <router-link :to="{ name: 'home' }">
        <img :src="arrowLeft" alt="icon-arrow-left">
      </router-link>
      <h2 className='font-bold text-left text-md uppercase lg:text-xl'>Selecciona una sección para comenzar</h2>
    </nav>
  </header>
  <div class="w-full h-full">
    <ul class="divide-y divide-slate-800">
      <li v-for="cvSection of cvSections" :key="cvSection.id">
        <CvSection :payload="cvSection" />
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import data from '@/api/data.json'
import CvSection from './CvSection.vue';
import arrowLeft from '@/assets/icons/arrow-left-square.svg'

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