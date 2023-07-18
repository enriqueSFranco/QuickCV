<template>
  <form class="w-full flex flex-col gap-4">
    <div v-for="website of formData" :key="website.id" class="w-full h-full flex items-center justify-between">
      <BaseInput type="text" :placeholder="'https://github.com/enriqueSFranco'" :label="'Enlace'" v-model="website.url" />
      <template v-if="hasMultipleWebsites">
        <Icon :src="trash" :alt="'trash-icon'" @click="store.deleteWebsite({ id: website.id })" class="cursor-pointer" />
      </template>
    </div>
  </form>
  <footer class="w-full h-12 flex flex-grow items-end">
    <nav class="w-full flex items-center justify-between">
      <button @click="store.createWebsite">agregar enlace</button>
      <div class="grid grid-cols-2">
        <router-link :to="{ name: 'builder' }">volver</router-link>
        <router-link :to="{ name: 'professional-profile' }">siguiente</router-link>
      </div>
    </nav>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { storeToRefs } from 'pinia'
import { useWebsite } from '@/stores/websites'
import trash from '@/assets/icons/delete.svg'
import Icon from '../Icon/Icon.vue'
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
    const store = useWebsite()
    const { formData, hasMultipleWebsites } = storeToRefs(store) // recuperamos el estado del store
    store.updated()
    return { store, formData, hasMultipleWebsites, trash }
  }
})
</script>