<template>
  <form class="w-full flex flex-col gap-4">
    <div class="w-full h-full flex items-center justify-between">
      <BaseInput type="text" :placeholder="'https://github.com/enriqueSFranco'" :label="'Enlace'" v-model="form.url" />
      <Icon :src="trash" :alt="'trash-icon'" />
    </div>
    <BaseInput type="text" :label="'Enlace'" v-model="form.url" />
  </form>
  <footer class="w-full flex flex-grow items-end">
    <nav class="w-full flex items-center justify-between">
      <button>agregar enlace</button>
      <div class="grid grid-cols-2">
        <router-link :to="{ name: 'builder' }">volver</router-link>
        <!-- <router-link :to="{ name: 'professional-profile' }">siguiente</router-link> -->
        <BaseButtonLink :label="'siguiente'" :name="'professional-profile'" />
      </div>
    </nav>
  </footer>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import trash from '@/assets/icons/delete.svg'
import Icon from '../Icon/Icon.vue'
import { ContactForm } from '@/shared/types.d'
import BaseInput from '../Input/BaseInput.vue'
import BaseButtonLink from '../Button/BaseButtonLink.vue'

export default defineComponent({
  const: 'FormContactForms',
  components: {
    BaseInput,
    BaseButtonLink,
    Icon
  },
  setup () {
    const form: ContactForm = reactive({
      id: crypto.randomUUID(),
      url: ''
    })
    return { form, trash }
  }
})
</script>