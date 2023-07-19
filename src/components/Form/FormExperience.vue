<template>
  <LayoutForm>
    <BaseInput :label="'empresa'" :placeholder="'Sngular'" />
    <BaseInput :label="'puesto'" :placeholder="'Sngular'" />
    <div class="h-full flex items-center justify-between gap-3">
      <BaseInput :label="'fecha de inicio'" :placeholder="'04/2020'" />
      <Icon :src="arrowLeftIcon" :alt="'arrow-left icon'" />
      <BaseInput :label="'fecha de finalización'" :placeholder="'10/22'" />
    </div>
    <BaseTextArea :label="'mis responsabilidades fueron'" :placeholder="'coger con la secretaria'" />
  </LayoutForm>
  <footer class="w-full h-12 flex flex-grow items-end">
    <nav class="w-full flex items-center justify-between">
      <button class="flex items-center justify-between gap-2 px-4 py-3 bg-slate-800 rounded-lg">
        <Icon :src="addIcon" :alt="'add icon'" />Agregar experiencia
      </button>
      <div class="grid grid-cols-2">
        <router-link :to="{ name: 'builder' }">volver</router-link>
        <router-link :to="{ name: 'education' }">siguiente</router-link>
      </div>
    </nav>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import arrowLeftIcon from '@/assets/icons/arrow-right-large.svg'
import addIcon from '@/assets/icons/add.svg'
import LayoutForm from '@/layouts/LayoutForm.vue'
import BaseInput from '../Input/BaseInput.vue'
import BaseTextArea from '../TextArea/BaseTextArea.vue'
import Icon from '../Icon/Icon.vue'

export default defineComponent({
  name: 'FormExperience',
  components: { LayoutForm, BaseInput, BaseTextArea, Icon },
  setup () {
    return { addIcon, arrowLeftIcon }
  }
})
</script>

<!-- 
  fields:
    - fecha inicio
    - fecha fin
    - empresa
    - puesto
    - descripción

 -->