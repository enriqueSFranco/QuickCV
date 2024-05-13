<template>
  <TransitionGroup name="fade" tag="ul" class="w-full relative flex flex-col gap-6">
    <li v-for="(formExp, idx) of experienceStore.formData" :key="formExp.id">
      <LayoutForm>
        <header class="w-full flex items-center justify-between">
          <div class="flex items-center gap-2">
            <span class="w-9 h-9 bg-slate-800 grid place-items-center rounded-full text-slate-50">{{ idx + 1 }}</span>
            <h2>{{ hasTitle(formExp.id) }}</h2>
          </div>
          <button v-if="hasMultipleForms">
            <Icon :src="deleteIcon" :alt="'icon delete'" />
          </button>
        </header>
        <BaseInput :label="'empresa'" :placeholder="'Sngular'" v-model="formExp.company" />
        <BaseInput :label="'puesto'" :placeholder="'Sngular'" v-model="formExp.job" />
        <div class="w-full flex items-center justify-between gap-3">
          <BaseInput :label="'fecha de inicio'" :placeholder="'04/2020'" v-model="formExp.dateInit" />
          <Icon :src="arrowLeftIcon" :alt="'arrow-left icon'" />
          <BaseInput :label="'fecha de finalización'" :placeholder="'10/22'" v-model="formExp.dateEnd" />
        </div>
        <BaseTextArea :label="'mis responsabilidades fueron'" :placeholder="'coger con la secretaria'"
          v-model="formExp.details" />
      </LayoutForm>
    </li>
  </TransitionGroup>
  <footer class="w-full h-12 flex flex-grow items-end">
    <nav class="w-full flex items-center justify-between">
      <div class="flex items-center gap-2">
        <button class="flex items-center justify-between gap-2 p-2 bg-orange-400 rounded-full"
          @click="experienceStore.createForm">
          <Icon :src="addIcon" :alt="'add icon'" />
        </button>
        <span class="font-light text-gray-500">Agregar experiencia</span>
      </div>
      <div class="grid grid-cols-2 gap-4">
        <router-link :to="{ name: 'builder' }"
          class="shadow-lg outline outline-slate-200 text-slate-950 w-28 p-3 rounded-lg grid place-items-center capitalize">volver</router-link>
        <router-link :to="{ name: 'education' }"
          class="shadow-lg bg-slate-800 text-slate-200 w-28 px-3 py-2 rounded-lg grid place-items-center capitalize">siguiente</router-link>
      </div>
    </nav>
  </footer>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { storeToRefs } from 'pinia'
import { useExperience } from '@/stores/experience'
import arrowLeftIcon from '@/assets/icons/arrow-right-large.svg'
import addIcon from '@/assets/icons/add.svg'
import deleteIcon from '@/assets/icons/delete.svg'
import LayoutForm from '@/layouts/LayoutForm.vue'
import BaseInput from '../Input/BaseInput.vue'
import BaseTextArea from '../TextArea/BaseTextArea.vue'
import Icon from '../Icon/Icon.vue'

export default defineComponent({
  name: 'FormExperience',
  components: { LayoutForm, BaseInput, BaseTextArea, Icon },
  setup () {
    const experienceStore = useExperience()
    const { hasMultipleForms } = storeToRefs(experienceStore)

    const hasTitle = computed(() => (formId: string) => {
      const forms = experienceStore.formData
      const formIdx = forms.findIndex(form => form.id === formId)
      const hasJob = forms[formIdx].job
      return !hasJob.trim() ? 'No especificado' : forms[formIdx].job
    })

    return { experienceStore, hasMultipleForms, hasTitle, addIcon, deleteIcon, arrowLeftIcon }
  }
})
</script>
