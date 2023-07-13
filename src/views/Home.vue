<template>
  <main class="w-full h-2/3 flex items-center justify-center">
    <div class='grid grid-cols-1 place-items-center gap-10 text-md px-10 z-20'>
      <h1 class='text-5xl font-extrabold capitalize lg:text-7xl'>
        quick CV
      <h1 class='text-5xl font-extrabold font-marker lg:text-7xl'>
        cv easy
      </h1>
      <p class="tracking-wide block w-2/3 text-center">¡Haz que tu currículum destaque y conquista nuevas oportunidades
        laborales en
        cuestión de
        minutos!</p>
      <div class="relative group">
        <div
          class="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 blur opacity-75 rounded-lg leading-none">
        </div>
        <router-link :to="{ name: 'builder' }"
          class="relative inline-flex w-40 h-12 items-center justify-center capitalize z-20 bg-slate-950 rounded-lg">
          Comenzar
        </router-link>
        <button class="relative text-lg w-40 p-3 capitalize z-20 bg-slate-950 rounded-lg">Comenzar</button>
      </div>
    </div>
  </main>
</template>