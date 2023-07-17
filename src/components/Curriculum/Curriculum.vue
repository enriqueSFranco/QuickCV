<template>
  <h2>Curriculum</h2>
  <p>{{ store.formData.name }}</p>
  <p>{{ store.formData.lastName }}</p>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { usePersonalInformation } from '@/stores/personalInformation'

export default defineComponent({
  name: 'Curriculum',
  setup () {
    const store = usePersonalInformation()

    return { store }
  }
})
</script>