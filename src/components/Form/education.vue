<template>
  <TransitionGroup name="fade" tag="ul" class="w-full relative flex flex-col gap-6">
    <li v-for="(form, idx) of formData" :key="form.id" class="w-full">
      <LayoutForm>
        <header class="w-full flex items-center justify-between text-sm font-bold">
          <div class="flex items-center gap-2">
            <span class="w-9 h-9 bg-slate-800 grid place-items-center rounded-full text-slate-50">{{ idx + 1 }}</span>
            <h2>{{ hasTitle(form.id) }}</h2>
          </div>
          <button v-if="hasMultipleForms" @click="educationStore.deleteForm(form.id)">
            <Icon :src="deleteIcon" :alt="'delete icon'" />
          </button>
        </header>
        <BaseInput :label="'Escuela'" :placeholder="'Escuela Superior de Computo'" v-model="form.school" />
        <BaseInput :label="'Carrera'" :placeholder="'Ingenieria en Sistemas Computacionales'" v-model="form.degree" />
        <div class="w-full flex justify-between items-center gap-4">
          <BaseInput :label="'Fecha de ingreso'" :placeholder="'2017'" v-model="form.dateInit" />
          <BaseInput :label="'Fecha de egreso'" :placeholder="'2022'" v-model="form.dateEnd" />
        </div>
      </LayoutForm>
    </li>
  </TransitionGroup>
  <footer class="w-full h-12 flex flex-grow items-end">
    <nav class="w-full flex items-center justify-between">
      <div class="flex items-center gap-2">
        <button @click="educationStore.createForm"
          class="flex items-center justify-between gap-2 p-2 bg-orange-400 rounded-full">
          <Icon :src="addIcon" :alt="'add icon'" />
        </button>
        <span class="font-light text-gray-500">Agregar formación académica</span>
      </div>
      <div class="grid grid-cols-2 gap-4">
        <router-link :to="{ name: 'builder' }"
          class="shadow-lg outline outline-slate-200 text-slate-950 w-28 p-3 rounded-lg grid place-items-center capitalize">volver</router-link>
        <router-link :to="{ name: 'knowledge' }"
          class="shadow-lg bg-slate-800 text-slate-200 w-28 px-3 py-2 rounded-lg grid place-items-center capitalize">siguiente</router-link>
      </div>
    </nav>
  </footer>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { storeToRefs } from 'pinia'
import { Id } from '@/shared/types.d'
import { useEducation } from '@/stores/education'
import addIcon from '@/assets/icons/add.svg'
import deleteIcon from '@/assets/icons/delete.svg'
import LayoutForm from '@/layouts/LayoutForm.vue'
import BaseInput from '../Input/BaseInput.vue'
import Icon from '../Icon/Icon.vue'

export default defineComponent({
  name: 'FormEducation',
  components: {
    LayoutForm,
    BaseInput,
    Icon
  },
  setup () {
    const educationStore = useEducation()
    const { formData, hasMultipleForms } = storeToRefs(educationStore)

    const hasTitle = computed(() => (formId: Id) => {
      const forms = educationStore.formData
      const formIdx = forms.findIndex(form => form.id === formId)
      const hasSchool = forms[formIdx].school
      return !hasSchool.trim() ? 'No especificado' : forms[formIdx].school
    })

    educationStore.updateForm()

    return { educationStore, formData, hasTitle, hasMultipleForms, deleteIcon, addIcon }
  }
})
</script>