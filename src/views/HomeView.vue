<script setup>
import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <main>
    <div class="flex flex-col h-screen">

      <div class="bg-white flex-auto">
        <div class="text-black font-bold text-center">
          <p>Productinformatie weten?</p>
          <p>Scan de barcode van het product.</p>
        </div>

        <div class="text-center p-16">
          <p>(leuk plaatje van een hand met een telefoon)</p>
        </div>

        <div class="text-white text-center items-center flex flex-col">
          <router-link to="/scanner" class="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full mb-5">Begin met scannen</router-link>
          <button class="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full mb-5">Zoek uw product</button>
          <button class="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full mb-5">Geschiedenis</button>
        </div>
      </div>
      
    </div>
  </main>
</template>