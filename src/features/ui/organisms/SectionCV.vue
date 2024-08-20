<template>
  <div class="w-full h-auto my-4 flex justify-between items-center gap-4">
    <div class="w-full h-full flex flex-col justify-between gap-1">
      <h2 class="uppercase font-bold text-slate-950">{{ sectionCV.title }}</h2>
      <!-- <p class="tracking-wide text-gray-500">{{ payload.summary }}</p> -->
    </div>
    <!-- <img v-if="!payload.isComplete" :src="arrowRightIcon" :alt="'icon-arrow-right'" /> -->
    <!-- <img v-else :src="checkIcon" :alt="'icon-check'" /> -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { PropType } from 'vue'
import arrowRightIcon from '@/assets/icons/arrow-right.svg'
import checkIcon from '@/assets/icons/check.svg'
import { SectionCv as SectionCvType } from '@/shared/models.d'

export default defineComponent({
  name: 'SectionCV',
  props: {
    sectionCV: {
      type: Object as PropType<SectionCvType>,
      required: true
    },
  },
  setup () {
    return { arrowRightIcon, checkIcon }
  }
})

</script>
