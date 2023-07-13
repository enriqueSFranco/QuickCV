<template>
  <header class='w-full h-16 flex items-center justify-end px-7'>
    <label for='theme' class='bg-slate-400/20 p-2 rounded relative w-10 h-10'>
      <!-- {theme ? <IconSun /> : <IconMoon />} -->
      <input type='checkbox' name='theme' class='absolute w-full h-full top-0 left-0 appearance-none cursor-pointer' />
    </label>
  </header>
</template>

<script lang="ts">
export default {
  name: 'Navbar'
}
</script>