<template>
  <form class="w-full flex flex-col gap-2 text-sm">
    <BaseInput type="text" name="name" :placeholder="'Carlos Enrique'" :label="'Nombre'" v-model="store.formData.name" />
    <BaseInput type="text" name="lastName" :placeholder="'Salinas Franco'" :label="'Apellidos'"
      v-model="store.formData.lastName" />
    <BaseInput type="text" name="job" :placeholder="'Frontend Developer'" :label="'Puesto'"
      v-model="store.formData.job" />
    <BaseInput type="email" name="email" :placeholder="'kike@gmail.com'" :label="'Correo electronico'"
      v-model="store.formData.email" />
  </form>
  <footer class="w-full flex flex-grow items-end">
    <nav class="w-full flex items-center">
      <div class="w-full grid grid-cols-2 justify-items-end">
        <router-link :to="{ name: 'builder' }"
          class="bg-slate-800 w-28 px-3 py-2 rounded-sm grid place-items-center capitalize">volver</router-link>
        <router-link :to="{ name: 'contact-forms' }"
          class="bg-slate-800 w-28 px-3 py-2 rounded-sm grid place-items-center capitalize">siguiente</router-link>
      </div>
    </nav>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { storeToRefs } from 'pinia'
import { usePersonalInformation } from '@/stores/personalInformation'
import BaseInput from '@/components/Input/BaseInput.vue'

export default defineComponent({
  name: 'FormPersonalInfo',
  components: {
    BaseInput
  },
  setup () {
    const store = usePersonalInformation()
    const { formData } = storeToRefs(store)
    store.updateForm({ name: formData.value.name, lastName: formData.value.lastName, job: formData.value.job, email: formData.value.email })
    return { store }
  }
})
</script>