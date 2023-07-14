<template>
  <form class="w-full flex flex-col gap-2 text-sm">
    <BaseInput type="text" :placeholder="'Carlos Enrique'" :label="'Nombre'" v-model="form.name" />
    <BaseInput type="text" :placeholder="'Salinas Franco'" :label="'Apellidos'" v-model="form.lastName" />
    <BaseInput type="text" :placeholder="'Frontend Developer'" :label="'Puesto'" v-model="form.job" />
    <BaseInput type="email" :placeholder="'kike@gmail.com'" :label="'Correo electronico'" v-model="form.email" />
  </form>
  <!-- <footer>
    <nav>
    </nav>
  </footer> -->
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
import { defineComponent, reactive } from 'vue'
import { PersonalInformation } from '@/shared/types.d'
import BaseInput from '@/components/Input/BaseInput.vue'

export default defineComponent({
  name: 'FormPersonalInfo',
  components: {
    BaseInput
  },
  setup () {
    const form: PersonalInformation = reactive({
      name: '',
      lastName: '',
      job: '',
      email: ''
    })

    return { form }
  }
})
</script>