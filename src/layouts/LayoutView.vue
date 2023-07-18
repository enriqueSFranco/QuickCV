<template>
  <section class="grid grid-cols-1 gap-8">
    <header class="w-full flex flex-col gap-2">
      <h2 class="font-bold capitalize [&>p]:tracking-wide">{{ titleView }}</h2>
      <p>{{ subtitleView }}</p>
    </header>
    <slot></slot>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

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
    }
  }
})
</script>