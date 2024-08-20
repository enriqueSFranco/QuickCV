<template>
  <LayoutGrid>
    <router-view v-slot="{ Component }">
      <transition name="scale" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </LayoutGrid>
  <LiveCV />
</template>

<script setup lang="ts">
// import Layout from '@/layouts/Layout.vue'
import LiveCV from '@/components/Curriculum/LiveCV.vue'
import LayoutGrid from '@/layouts/LayoutGrid.vue';
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