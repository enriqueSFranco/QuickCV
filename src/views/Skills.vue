<template>
  <LayoutView :title-view="'Destaca tu identidad profesional'"
    :subtitle-view="'No olvides resaltar tus habilidades tanto en el ámbito interpersonal como profesional, y mencionar las herramientas y tecnologías que dominas'"
    :icon="iconSkills">
    <FormSkills />
  </LayoutView>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import iconSkills from '@/assets/icons/einstein.svg'
import LayoutView from '@/layouts/LayoutView.vue'
import FormSkills from '@/components/Form/FormSkills.vue'

export default defineComponent({
  name: 'Skills',
  components: {
    LayoutView,
    FormSkills
  },
  setup () {
    return { iconSkills }
  }
})
</script>