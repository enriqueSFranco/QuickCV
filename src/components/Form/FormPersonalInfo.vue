<template>
  <form class="w-full flex flex-col gap-2">
    <BaseInput type="text" :label="'Nombre'" v-model="user.name" />
    <BaseInput type="text" :label="'Apellidos'" v-model="user.lastName" />
    <BaseInput type="text" :label="'Puesto'" v-model="user.job" />
    <BaseInput type="email" :label="'Correo electronico'" v-model="user.email" />
  </form>
  <footer>
    <nav>
      <router-link :to="{ name: 'builder' }">volver</router-link>
      <router-link :to="{ name: 'contact-forms' }">siguiente</router-link>
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
    const user: PersonalInformation = reactive({
      name: '',
      lastName: '',
      job: '',
      email: ''
    })

    return { user }
  }
})
</script>