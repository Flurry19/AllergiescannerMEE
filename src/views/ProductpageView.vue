<template>
  <div class="bg-orange-400 lg:mx-12">
  <div class="flex lg:flex-row flex-col">
   <div class="lg:w-5/12">
     <img src="@/assets/img/kellogscornflakes.png" alt="Logo">
   </div>
    <div class="lg:w-7/12">

      <h1 class="text-center font-bold text-2xl">Kellog's Cornflakes</h1>
      <div  class="bg-green-400">
        <h1 class="text-center font-bold">Dit product bevat geen:</h1>
        <div class="flex flex-row">
          <div class="w-5/12 mx-12">
            <ul>
              <li class="h-12"><img class="w-12" src="@/assets/img/Fish.png" alt="Vis"></li>
              <li class="h-12"><img class="w-12" src="@/assets/img/Pinda.png" alt="Pinda"></li>
            </ul>
          </div>
          <div class="w-7/12">
            <ul>
              <li class="h-12 font-bold text-xl">Vis</li>
              <li class="h-12 font-bold text-xl">Pinda</li>
            </ul>
          </div>
        </div>
      </div>
      <div  class="bg-red-400">
        <h1 class="text-center font-bold">Dit product bevat wel:</h1>
        <div class="flex flex-row">
          <div class="w-5/12 mx-12">
            <ul>
              <li class="h-12"><img class="w-12" src="@/assets/img/egg.png" alt="Ei"></li>
              <li class="h-12"><img class="w-12" src="@/assets/img/gluten.png" alt="Gluten"></li>
            </ul>
          </div>
          <div class="w-7/12">
            <ul>
              <li class="h-12 font-bold text-xl">Ei</li>
              <li class="h-12 font-bold text-xl">Gluten</li>
            </ul>
          </div>
        </div>
      </div>



    </div>
  </div>
    <div class="mx-8">
      <h1 class="font-bold text-center text-xl">Overige productinformatie</h1>
      <h2 class="font-bold">Voedingswaarden (per portie)</h2>
      <div class="flex flex-row">
        <div class="w-5/12">
      <ul>
        <li>Portiegrootte:</li>
        <li>Energie:</li>
        <li>Vet:</li>
        <li>Verzadigd vet:</li>
        <li>Koolhydraten:</li>
        <li>Suiker:</li>
        <li>Vezels:</li>
        <li>Eiwitten:</li>
        <li>Zout:</li>
      </ul>
        </div>
        <div class="w-7/12">
          <ul>
            <li>1 portie (30 gram)</li>
            <li>473 kj = 1130 KCal</li>
            <li>0,30 gram</li>
            <li>0,100 gram</li>
            <li>25,00 gram</li>
            <li>2,40 gram</li>
            <li>0,90 gram</li>
            <li>2,10 gram</li>
            <li>0,33 gram</li>
          </ul>
        </div>
      </div>
      <h2 class="font-bold">Calorieën Verdeling:</h2>
      <p>Koolhydraat (90%)</p>
      <p>Vet (2%)</p>
      <p>Eiwitten (8%)</p>
    </div>

   </div>

  <button class="fixed bottom-6 left-36 bg-orange-600 rounded py-2 px-4 text-white font-bold">
    Terug
  </button>
</template>