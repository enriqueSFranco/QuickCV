<template>
  <header class='w-full h-16 flex items-center justify-end px-7'>
    <label for='theme' class='bg-slate-400/20 p-2 rounded relative w-10 h-10'>
      <Icon :src="sun" :alt="'icon-sun'" />
      <input type='checkbox' name='theme' class='absolute w-full h-full top-0 left-0 appearance-none cursor-pointer' />
    </label>
  </header>
</template>

<script lang="ts">
import { Ref, ref } from 'vue'
import Icon from '@/components/Icon/Icon.vue'
import sun from '@/assets/icons/sun.svg'

export default {
  name: 'Navbar',
  components: {
    Icon
  },
  setup () {
    const theme: Ref<boolean> = ref(false)

    function handleTheme () {
      //TODO: implementar función para el cambio de tema 
    }

    return { sun }
  }
}
</script>