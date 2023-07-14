<template>
  <LayoutView :title-view="'formas de contacto'"
    :subtitle-view="'Incorpora enlaces estratégicos a tus plataformas en línea, incluyendo tu sitio web personal, perfil de LinkedIn o cuentas de redes sociales profesionales.'">
    <FormContactForms />
  </LayoutView>
</template>

<script setup lang="ts">
import FormContactForms from '@/components/Form/FormContactForms.vue'
import LayoutView from '@/layouts/LayoutView.vue';
</script>