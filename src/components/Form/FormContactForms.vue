<template>
  <div v-for="website of formData" :key="website.id" class="w-full h-full grid place-items-center">
    <LayoutForm>
      <header class="w-full">
        <template v-if="hasMultipleWebsites">
          <Icon :src="trash" :alt="'trash-icon'" @click="store.deleteWebsite({ id: website.id })"
            class="cursor-pointer" />
        </template>
      </header>
      <div class="w-full h-full flex items-center justify-between gap-4">
        <BaseInput type="text" :placeholder="'Github'" :label="'tipo'" />
        <BaseInput type="text" :placeholder="'https://github.com/enriqueSFranco'" :label="'Enlace'"
          v-model="website.url" />
      </div>
    </LayoutForm>
  </div>
  <footer class="w-full flex flex-grow items-end">
    <nav class="w-full flex items-center justify-between">
      <button @click="store.createWebsite">agregar enlace</button>
      <div class="grid grid-cols-2 gap-4">
        <router-link :to="{ name: 'builder' }"
          class="shadow-lg outline outline-slate-200 text-slate-950 w-28 p-3 rounded-lg grid place-items-center capitalize">volver</router-link>
        <router-link :to="{ name: 'professional-profile' }"
          class="shadow-lg bg-slate-800 text-slate-200 w-28 px-3 py-2 rounded-lg grid place-items-center capitalize">siguiente</router-link>
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
import LayoutForm from '@/layouts/LayoutForm.vue'
import BaseInput from '../Input/BaseInput.vue'
import BaseButtonLink from '../Button/BaseButtonLink.vue'

export default defineComponent({
  const: 'FormContactForms',
  components: {
    BaseInput,
    BaseButtonLink,
    Icon,
    LayoutForm
  },
  setup () {
    const store = useWebsite()
    const { formData, hasMultipleWebsites } = storeToRefs(store) // recuperamos el estado del store
    store.updated()
    return { store, formData, hasMultipleWebsites, trash }
  }
})
</script>