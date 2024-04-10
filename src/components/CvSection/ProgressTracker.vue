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
      <li v-for="cvSection of data" :key="cvSection.id">
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
import { useEducation, usePersonalInformation, useProfessinalProfile } from '@/stores'
import CvSection from './CvSection.vue';
import arrowLeft from '@/assets/icons/arrow-left.svg'

export default defineComponent({
  name: 'ProgressTracker',
  components: {
    CvSection
  },
  setup () {
    const personalInformation = usePersonalInformation()
    const professionalProfile = useProfessinalProfile()
    const education = useEducation()
    const data = [
      {
        id: 0,
        title: 'Información personal',
        summary: 'Incluye tu nombre completo, información de contacto (teléfono, correo electrónico) y, opcionalmente, tu dirección.',
        href: 'personal-information',
        isComplete: !personalInformation.isComplete
      },
      {
        id: 1,
        title: 'Formas de contacto',
        summary: 'Un breve párrafo que resume tus habilidades, experiencia y objetivos profesionales.',
        href: 'contact-forms',
        isComplete: false
      },
      {
        id: 2,
        title: 'Educación',
        summary: 'Enumera tus grados académicos, instituciones educativas y fechas de obtención. Incluye honores académicos relevantes si los tienes.',
        href: 'education',
        isComplete: education.isComplete
      },
      {
        id: 3,
        title: 'Perfil profesional',
        summary: 'Un breve párrafo que resume tus habilidades, experiencia y objetivos profesionales.',
        href: 'professional-profile',
        isComplete: professionalProfile.isComplete
      },
      {
        id: 4,
        title: 'Experiencia laboral',
        summary: 'Enumera tus empleos anteriores en orden cronológico inverso, incluyendo el nombre de la empresa, tu título o puesto, las fechas de empleo y las responsabilidades y logros relevantes.',
        href: 'experience',
        isComplete: false
      },
      {
        id: 5,
        title: 'Habilidades',
        summary: 'Enumera tus habilidades relevantes, como conocimientos técnicos, competencias lingüísticas, habilidades informáticas, etc.',
        href: 'knowledge',
        isComplete: false
      }
    ]
    return { data, arrowLeft }
  }
})
</script>@/api/data