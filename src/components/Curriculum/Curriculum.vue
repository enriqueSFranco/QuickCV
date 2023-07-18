<template>
  <section class="w-full h-full flex flex-col items-center border border-slate-800 rounded-lg p-4">
    <h2>Curriculum</h2>
    <p>{{ store.formData.name }}</p>
    <p>{{ store.formData.lastName }}</p>
    <footer class="flex flex-grow items-end justify-center">
      <button>descargar curriculum</button>
    </footer>
  </section>
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