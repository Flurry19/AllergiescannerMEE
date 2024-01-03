<template>
  <main>
    <div class="flex flex-col h-screen">

      <div class="bg-white flex-auto">
        <div class="text-center text-2xl font-bold mt-6 text-black font-bold text-center">
          <p>Productinformatie weten?</p>
          <p>Scan de barcode van het product.</p>
        </div>

        <div class="flex flex-col items-center">
          <img class="w-1/2" src="/img/Screenshot%202024-01-01%20131925.png" alt="Afbeelding van een telefoon met een barcode">
        </div>

        <div class="text-white text-center items-center flex flex-col">
          <router-link to="/scanner" class="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full mb-5 w-1/2 flex flex-row">Begin met scannen
            <img class="w-10" src="/img/barcode.png" alt="Barcode icoon"> </router-link>
          <button class="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full mb-5 w-1/2 flex flex-row">Zoek uw product
            <img class="w-6" src="/img/search.png" alt="Vergrootglas icoon"> </button>
          <button class="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full mb-5 w-1/2 flex flex-row">Geschiedenis
            <img class="w-6" src="/img/history.png" alt="Geschiedenis icoon"> </button>
        </div>
      </div>
      
    </div>
  </main>
</template>