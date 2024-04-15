<template>
  <LayoutView :title-view="'Destaca tu identidad profesional'"
    :subtitle-view="'Ingresa tus datos personales para facilitar la comunicación con los reclutadores'">
    <FormPersonalInfo />
  </LayoutView>
</template>

<script setup lang="ts">
import FormPersonalInfo from '@/components/Form/FormPersonalInfo.vue'
import LayoutView from '@/layouts/LayoutView.vue'
</script>