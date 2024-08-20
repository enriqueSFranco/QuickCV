<template>
  <img :src="src" :alt="alt" :class="className">
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Icon',
  props: {
    src: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      required: true
    },
    className: {
      type: String,
      required: false
    }
  }
})
</script>