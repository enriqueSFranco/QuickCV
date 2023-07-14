<template>
  <LayoutView :title-view="'perfil profesional'"
    :subtitle-view="'Comunica tus habilidades sobresalientes, trayectoria laboral y logros destacados en un breve resumen. Resalta tus principales fortalezas, tu dedicación por tu área de expertise y cómo puedes contribuir al crecimiento de una empresa.'">
    <FormProfessionalProfile />
  </LayoutView>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import LayoutView from '@/layouts/LayoutView.vue'
import FormProfessionalProfile from '@/components/Form/FormProfessionalProfile.vue';

export default defineComponent({
  name: 'ProfessionalProfile',
  components: {
    LayoutView,
    FormProfessionalProfile
  }
})
</script>