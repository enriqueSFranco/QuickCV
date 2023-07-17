<template>
  <form action="">
    <BaseTextArea v-model="store.formData.summary" :placeholder="'perfil profesional'" />
  </form>
  <footer class="w-full flex flex-grow items-end">
    <nav class="w-full flex items-center">
      <div class="w-full grid grid-cols-2 justify-items-end">
        <router-link :to="{ name: 'builder' }"
          class="bg-slate-800 w-28 px-3 py-2 rounded-sm grid place-items-center capitalize">volver</router-link>
        <router-link :to="{ name: 'experience' }"
          class="bg-slate-800 w-28 px-3 py-2 rounded-sm grid place-items-center capitalize">siguiente</router-link>
      </div>
    </nav>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import BaseTextArea from '../TextArea/BaseTextArea.vue'
import { useProfessinalProfile } from '@/stores/professionalProfile';

export default defineComponent({
  name: 'FormProfessionalProfile',
  components: {
    BaseTextArea
  },
  setup () {
    const store = useProfessinalProfile()
    const formData = { summary: store.formData.summary }
    store.updateForm(formData)
    return { store }
  }
})
</script>