<template>
  <div class="w-[600px] flex flex-col justify-center items-center gap-8">
    <header class="w-full flex flex-col gap-2">
      <div class="flex items-center gap-2">
        <div v-if="icon?.length > 0" class="bg-orange-100 rounded-lg p-1.5 grid place-items-center">
          <Icon :src="icon" :alt="''" />
        </div>
        <h2 class="font-bold capitalize text-gray-600 [&>p]:tracking-wide">{{ titleView }}</h2>
      </div>
      <p class="text-gray-500">{{ subtitleView }}</p>
    </header>
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Icon from '@/features/ui/atoms/Icon.vue';

export default defineComponent({
  name: 'LayoutView',
  props: {
    titleView: {
      type: String,
      default: '',
      required: true
    },
    subtitleView: {
      type: String,
      default: '',
      required: true
    },
    icon: {
      type: String,
      default: '',
      required: false,
    },
    iconColor: {
      type: String,
      default: '',
      required: false,
    }
  },
  components: { Icon }
})
</script>