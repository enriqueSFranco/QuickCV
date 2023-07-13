<template>
  <div class="w-full flex justify-between items-center">
    <div class="w-full h-full flex flex-col justify-between gap-1">
      <h2 class="uppercase font-bold">{{ payload.title }}</h2>
      <p class="tracking-wide text-slate-200">{{ payload.summary }}</p>
    </div>
    <router-link :to="{ name: payload.href }">
      <img :src="arrowRight" alt="icon-arrow-right" />
    </router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import arrowRight from '@/assets/icons/arrow-right-square.svg'
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
    return { arrowRight }
  }
})

</script>
