<template>
  <div v-for="(form, idx) of formData" :key="form.id">
    <LayoutForm>
      <header class="flex items-center justify-between text-sm font-bold">
        <div class="flex items-center gap-4">
          <span class="w-9 h-9 bg-slate-800 grid place-items-center rounded-full">{{ idx + 1 }}</span>
          <h2>{{ hasTitle(form.id) }}</h2>
        </div>
        <nav>
          <template v-if="hasMultipleForms">
            <button>
              <Icon :src="deleteIcon" :alt="'delete icon'" />
            </button>
          </template>
        </nav>
      </header>
      <BaseInput type="text" :placeholder="'typescript'" :label="'Enlace'" v-model="form.skill" />
    </LayoutForm>

  </div>
  <footer class="w-full h-12 flex flex-grow items-end">
    <nav class="w-full flex items-center justify-between">
      <button @click="skillsStore.createSkill">agregar enlace</button>
      <div class="grid grid-cols-2">
        <router-link :to="{ name: 'builder' }">volver</router-link>
        <router-link :to="{ name: 'professional-profile' }">siguiente</router-link>
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

    return { skillsStore, formData, hasTitle, hasMultipleForms, deleteIcon }
  }
})

</script>