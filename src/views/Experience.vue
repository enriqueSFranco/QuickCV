<template>
  <LayoutView :title-view="'Destaca tu identidad profesional'"
    :subtitle-view="'Comparte tu trayectoria laboral, incluyendo el cargo que ocupaste, el nombre de la empresa, el período de tiempo y una breve descripción de las responsabilidades que tuviste.'">
    <FormExperience />
  </LayoutView>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import LayoutView from '@/layouts/LayoutView.vue'
import FormExperience from '@/components/Form/FormExperience.vue'

export default defineComponent({
  name: 'Experience',
  components: {
    LayoutView,
    FormExperience
  }
})
</script>