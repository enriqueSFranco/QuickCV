<template>
  <LayoutView :title-view="'Formación académica'"
    :subtitle-view="'Expón tu formación académica, indicando el título que has obtenido, la institución educativa en la que te has formado y el periodo de tiempo en el que has llevado a cabo tus estudios.'"
    :icon="educationIcon">
    <FormEducation />
  </LayoutView>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import LayoutView from '@/layouts/LayoutView.vue'
import FormEducation from '@/components/Form/FormEducation.vue'
import educationIcon from '@/assets/icons/education.svg'

export default defineComponent({
  name: 'Education',
  components: { LayoutView, FormEducation },
  setup () {
    return { educationIcon }
  }
})
</script>