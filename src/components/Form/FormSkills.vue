<template>
  <div v-for="(form, idx) of formData" :key="form.id" class="w-full">
    <LayoutForm>
      <header class="w-full flex items-center justify-between text-sm font-bold">
        <div class="w-full flex items-center gap-4">
          <span class="w-9 h-9 bg-slate-800 text-slate-50 grid place-items-center rounded-full">{{ idx + 1 }}</span>
          <h2>{{ hasTitle(form.id) }}</h2>
        </div>
        <template v-if="hasMultipleForms">
          <button @click="skillsStore.deleteSkill({ id: form.id })">
            <Icon :src="deleteIcon" :alt="'delete icon'" />
          </button>
        </template>
      </header>
      <BaseInput type="text" :placeholder="'typescript'" :label="'Enlace'" v-model="form.skill" />
    </LayoutForm>
  </div>
  <footer class="w-full h-12 flex flex-grow items-end">
    <nav class="w-full flex items-center justify-between">
      <div class="flex items-center gap-2">
        <button @click="skillsStore.createSkill"
          class="flex items-center justify-between gap-2 p-2 bg-orange-400 rounded-full">
          <Icon :src="addIcon" :alt="'add icon'" />
        </button>
        <span class="font-light text-gray-500">Agregar conocimiento</span>
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
import { computed, defineComponent } from 'vue'
import { storeToRefs } from 'pinia'
import { useSkills } from '@/stores/skills'
import { Id } from '@/shared/types.d'
import deleteIcon from '@/assets/icons/delete.svg'
import addIcon from '@/assets/icons/add.svg'
import Icon from '../Icon/Icon.vue'
import LayoutForm from '@/layouts/LayoutForm.vue'
import BaseInput from '../Input/BaseInput.vue'

export default defineComponent({
  name: 'FormSkills',
  components: { BaseInput, Icon, LayoutForm },
  setup () {
    const skillsStore = useSkills()
    const { formData, hasMultipleForms } = storeToRefs(skillsStore)

    const hasTitle = computed(() => (formId: Id) => {
      const forms = formData.value
      const formIdx = forms.findIndex(form => form.id === formId)
      const form = forms[formIdx]
      return form.skill.length === 0 ? 'No especificado' : form.skill
    })

    return { skillsStore, formData, hasTitle, hasMultipleForms, deleteIcon, addIcon }
  }
})

</script>