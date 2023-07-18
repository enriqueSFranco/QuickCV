<template>
  <Layout>
    <section class="w-full grid grid-cols-1 gap-4 xl:grid-cols-2 p-4">
      <article class="w-full h-full grid grid-cols-1 gap-4 border border-slate-800 rounded-lg p-4">
        <router-view></router-view>
      </article>
      <article class="w-full h-full">
        <Curriculum />
      </article>
    </section>
  </Layout>
</template>

<script setup lang="ts">
import Layout from '@/layouts/Layout.vue'
import Curriculum from '@/components/Curriculum/Curriculum.vue'
</script>