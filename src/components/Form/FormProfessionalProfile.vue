<template>
  <LayoutForm>
    <BaseTextArea v-model="store.formData.summary" :placeholder="'perfil profesional'" />
  </LayoutForm>
  <footer class="w-full flex flex-grow items-end">
    <nav class="w-full flex items-center">
      <div class="w-full flex justify-end gap-4">
        <router-link :to="{ name: 'builder' }"
          class="shadow-lg outline outline-slate-200 text-slate-950 w-28 p-3 rounded-lg grid place-items-center capitalize">volver</router-link>
        <router-link :to="{ name: 'experience' }"
          class="shadow-lg bg-slate-800 text-slate-200 w-28 px-3 py-2 rounded-lg grid place-items-center capitalize">siguiente</router-link>
      </div>
    </nav>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import LayoutForm from '@/layouts/LayoutForm.vue';
import BaseTextArea from '../TextArea/BaseTextArea.vue'
import { useProfessinalProfile } from '@/stores/professionalProfile';

export default defineComponent({
  name: 'FormProfessionalProfile',
  components: {
    BaseTextArea,
    LayoutForm
  },
  setup () {
    const store = useProfessinalProfile()
    const formData = { summary: store.formData.summary }
    store.updateForm(formData)
    return { store }
  }
})
</script>