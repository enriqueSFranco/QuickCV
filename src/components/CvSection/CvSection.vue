<template>
  <div class="w-full h-auto my-4 flex justify-between items-center gap-4">
    <div class="w-full h-full flex flex-col justify-between gap-1">
      <h2 class="uppercase font-bold text-slate-950">{{ payload.title }}</h2>
      <p class="tracking-wide text-gray-500">{{ payload.summary }}</p>
    </div>
    <img v-if="!payload.isComplete" :src="arrowRightIcon" :alt="'icon-arrow-right'" />
    <img v-else :src="checkIcon" :alt="'icon-check'" />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import arrowRightIcon from '@/assets/icons/arrow-right.svg'
import checkIcon from '@/assets/icons/check.svg'
import { SectionCv } from '@/shared/types.d'

export default defineComponent({
  name: 'CvSection',
  props: {
    payload: {
      type: Object as PropType<SectionCv>,
      required: true
    }
  },
  setup () {
    return { arrowRightIcon, checkIcon }
  }
})

</script>
