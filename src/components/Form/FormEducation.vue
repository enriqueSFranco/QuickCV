<template>
  <div v-for="(form, idx) of formData" :key="form.id" class="w-full h-full divide-y divide-slate-800">
    <LayoutForm>
      <header class="flex items-center justify-between text-sm font-bold">
        <div class="flex items-center gap-4">
          <span class="w-9 h-9 bg-slate-800 grid place-items-center rounded-full text-slate-50">{{ idx + 1 }}</span>
          <h2>{{ hasTitle(form.id) }}</h2>
        </div>
        <nav v-if="hasMultipleForms">
          <button @click="educationStore.deleteForm(form.id)">
            <Icon :src="deleteIcon" :alt="'delete icon'" />
          </button>
        </nav>
      </header>
      <BaseInput :label="'Escuela'" :placeholder="'Escuela Superior de Computo'" v-model="form.school" />
      <BaseInput :label="'Carrera'" :placeholder="'Ingenieria en Sistemas Computacionales'" v-model="form.degree" />
      <div class="w-full flex justify-between items-center gap-4">
        <BaseInput :label="'Fecha de ingreso'" :placeholder="'2017'" v-model="form.dateInit" />
        <BaseInput :label="'Fecha de egreso'" :placeholder="'2022'" v-model="form.dateEnd" />
      </div>
    </LayoutForm>
  </div>
  <footer class="w-full h-12 flex flex-grow items-end">
    <nav class="w-full flex items-center justify-between">
      <button @click="educationStore.createForm">Agregar experiencia</button>
      <div class="grid grid-cols-2">
        <router-link :to="{ name: 'builder' }">volver</router-link>
        <router-link :to="{ name: 'knowledge' }">siguiente</router-link>
      </div>
    </nav>
  </footer>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { storeToRefs } from 'pinia'
import { Id } from '@/shared/types.d'
import { useEducation } from '@/stores/education'
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
      return hasSchool.length === 0 ? 'No especificado' : forms[formIdx].school
    })

    educationStore.updateForm()

    return { educationStore, formData, hasTitle, hasMultipleForms, deleteIcon }
  }
})
</script>