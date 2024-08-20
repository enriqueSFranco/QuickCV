<template>
  <TransitionGroup name="fade" tag="ul" class="w-full relative flex flex-col gap-6">
    <!-- <li v-for="website of formData" :key="website.id">
      <LayoutForm>
        <header class="w-full">
          <template v-if="hasMultipleWebsites">
            <Icon :src="deleteIcon" :alt="'trash-icon'" @click="store.deleteWebsite({ id: website.id })"
              class="cursor-pointer" />
          </template>
</header>
<div class="w-full h-full flex items-center justify-between gap-4">
  <TextField type="text" :placeholder="'Github'" :label="'tipo'" />
  <TextField type="text" :placeholder="'https://github.com/enriqueSFranco'" :label="'Enlace'" v-model="website.url" />
</div>
</LayoutForm>
</li> -->
  </TransitionGroup>
  <footer class="w-full flex flex-grow items-end">
    <nav class="w-full flex items-center justify-between">
      <div class="flex items-center gap-2">
        <!-- <button @click="store.createWebsite"
          class="flex items-center justify-between gap-2 p-2 bg-orange-400 rounded-full">
          <Icon :src="addIcon" :alt="'add icon'" />
        </button> -->
        <span class="font-light text-gray-500">Agregar enlace</span>
      </div>
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
// import { useWebsite } from '@/stores/websites'
import deleteIcon from '@/assets/icons/delete.svg'
import addIcon from '@/assets/icons/add.svg'
import LayoutForm from '@/layouts/LayoutForm.vue'
import Icon from '@/features/ui/atoms/Icon.vue'
import TextField from '@/features/ui/atoms/TextField.vue'

export default defineComponent({
  const: 'FormContactForms',
  components: {
    TextField,
    Icon,
    LayoutForm
  },
  setup () {
    // const store = useWebsite()
    // const { formData, hasMultipleWebsites } = storeToRefs(store) // recuperamos el estado del store
    // store.updated()
    // return { store, formData, hasMultipleWebsites, addIcon, deleteIcon }
  }
})
</script>