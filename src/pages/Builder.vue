<template>
  <Layout>
    <section class="w-full h-full flex items-center justify-center">
      <article class="w-full h-full bg-slate-50 overflow-y-scroll flex flex-col items-center gap-4 p-4">
        <router-view v-slot="{ Component }">
          <transition name="scale" mode="out-in">
            <component :is="Component" />
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