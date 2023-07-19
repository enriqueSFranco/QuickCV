<template>
  <Layout>
    <section class="w-full h-[calc(100vh-4rem)] grid grid-cols-1 gap-4 xl:grid-cols-2 p-4">
      <article class="w-full h-full flex flex-col justify-between gap-4 border border-slate-800 rounded-lg p-4">
        <router-view v-slot="{ Component, route }">
          <transition name="scale" mode="out-in">
            <div :key="route.name">
              <component :is="Component" />
            </div>
          </transition>
        </router-view>
      </article>
      <Curriculum />
    </section>
  </Layout>
</template>

<script setup lang="ts">
import Layout from '@/layouts/Layout.vue'
import Curriculum from '@/components/Curriculum/Curriculum.vue'
</script>

<style scoped>
.scale-enter-active,
.scale-leave-active {
  transition: all 0.2s ease;
}

.scale-enter-from,
.scale-leave-to {
  opacity: 0;
  transform: scale(0.9);
}
</style>