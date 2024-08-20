<template>
  <LayoutForm>
    <TextField type="text" name="name" :placeholder="'Carlos Enrique'" :label="'Nombre'"
      v-model="store.formData.name" />
    <TextField type="text" name="lastName" :placeholder="'Salinas Franco'" :label="'Apellidos'"
      v-model="store.formData.lastName" />
    <TextField type="text" name="job" :placeholder="'Frontend Developer'" :label="'Puesto'"
      v-model="store.formData.job" />
    <TextField type="email" name="email" :placeholder="'kike@gmail.com'" :label="'Correo electronico'"
      v-model="store.formData.email" />
  </LayoutForm>
  <footer class="w-full flex flex-grow items-end">
    <nav class="w-full flex items-center">
      <div class="w-full flex justify-end gap-4">
        <router-link :to="{ name: 'builder' }"
          class="shadow-lg outline outline-slate-200 text-slate-950 w-28 p-3 rounded-lg grid place-items-center capitalize">volver</router-link>
        <router-link :to="{ name: 'contact-forms' }"
          class="shadow-lg bg-slate-800 text-slate-200 w-28 px-3 py-2 rounded-lg grid place-items-center capitalize">siguiente</router-link>
      </div>
    </nav>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { storeToRefs } from 'pinia'
import LayoutForm from '@/layouts/LayoutForm.vue'
import { usePersonalInfo } from '@/stores/personal-info'
import TextField from '@/features/ui/atoms/TextField.vue'

export default defineComponent({
  name: 'FormPersonalInfo',
  components: {
    TextField,
    LayoutForm
  },
  setup () {
    const store = usePersonalInfo()
    const { formData } = storeToRefs(store)
    const { name, lastName, email, job } = formData.value

    store.updateForm({ name, lastName, job, email })
    return { store }
  }
})
</script>