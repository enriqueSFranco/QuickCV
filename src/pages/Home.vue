<template>
  <Layout>
    <main class="w-full h-full flex items-center justify-center">
      <div class='grid grid-cols-1 place-items-center gap-10 text-md px-10 z-20'>
        <h1
          class='bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-4xl font-extrabold uppercase tracking-tighter text-transparent sm:text-5xl lg:text-7xl'>
          quick CV
        </h1>
        <p class="tracking-wide block w-2/3 text-center">¡Haz que tu currículum destaque y conquista nuevas
          oportunidades
          laborales en
          cuestión de
          minutos!</p>
        <div class="relative group">
          <div
            class="absolute -inset-0.5 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 blur opacity-75 rounded-lg leading-none">
          </div>
          <RouterLink to="builder"
            class="relative inline-flex w-40 h-12 items-center justify-center capitalize z-20 font-semibold bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-slate-50 rounded-lg">
            Comenzar
          </RouterLink>
        </div>
      </div>
    </main>
    <Footer />
  </Layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Footer from '@/components/Footer/Footer.vue'
import Layout from '@/layouts/Layout.vue'

export default defineComponent({
  name: 'Home',
  components: {
    Layout,
    Footer
  }
})
</script>