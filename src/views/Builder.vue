<template>
  <Layout>
    <section class="w-full h-[calc(100vh-4rem)] grid grid-cols-1 gap-4 xl:grid-cols-2 p-4">
      <article class="w-full h-full flex flex-col justify-between gap-4 border border-slate-800 rounded-lg p-4">
        <router-view></router-view>
      </article>
      <Curriculum />
    </section>
  </Layout>
</template>

<script setup lang="ts">
import Layout from '@/layouts/Layout.vue'
import Curriculum from '@/components/Curriculum/Curriculum.vue'
</script>