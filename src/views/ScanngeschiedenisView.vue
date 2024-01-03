<template>
  <div>
    <!-- Logo boven in het midden -->
    <div class="flex justify-center items-center my-5">
<!--      <img src="/img/MEE-23-11-2023.png" alt="Logo" class="h-26 w-26">-->
    </div>

    <div class="mt-5 mb-5">
      <p class="text-center text-3xl font-bold">Hier vindt u de producten die u in het verleden heeft gescand</p>
    </div>

    <div class="flex flex-col items-center ">
      <button @click="toggleColors" id="toggleColorButton" class="absolute top-0 left-0 m-4 p-2">
        <img src="/img/darkmode.png" alt="logo">
      </button>
      <button class="bg-orange-500 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded-full shadow-xl transform active:scale-75 transition-transform">
        Product scannen
      </button>
    </div>

    <div class="my-5">
      <p class="text-center text-5xl font-bold">Uw gescande producten:</p>
    </div>

    <div :class="{ 'bg-orange-500': isOrange, 'bg-gray-500': !isOrange }">
      <div class="p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
        <!-- Product 1 -->
        <div @mouseover="hoverEffect(1)" @mouseout="resetHoverEffect" @click="selectProduct" class="product-card bg-white rounded overflow-hidden shadow-lg" :class="{ 'border-orange-700': isHovered === 1 && isOrange, 'border-gray-500': isHovered === 1 && !isOrange, 'z-10': isHovered === 1 }">
          <img class="w-full" src="/img/egg.png" alt="product01">
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">Egg</div>
            <p class="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
            </p>
          </div>
          <div class="px-6 pt-4 pb-2">
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#</span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#</span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#</span>
          </div>
        </div>

        <!-- Product 2 -->
        <div @mouseover="hoverEffect(2)" @mouseout="resetHoverEffect" @click="selectProduct" class="product-card bg-white rounded overflow-hidden shadow-lg" :class="{ 'border-orange-700': isHovered === 1 && isOrange, 'border-gray-500': isHovered === 1 && !isOrange, 'z-10': isHovered === 1 }">
          <img class="w-full" src="/img/Fish.png" alt="product01">
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">Fish</div>
            <p class="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
            </p>
          </div>
          <div class="px-6 pt-4 pb-2">
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#</span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#</span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#</span>
          </div>
        </div>

        <!-- Product 3 -->
        <div @mouseover="hoverEffect(3)" @mouseout="resetHoverEffect" @click="selectProduct" class="product-card bg-white rounded overflow-hidden shadow-lg" :class="{ 'border-orange-700': isHovered === 1 && isOrange, 'border-gray-500': isHovered === 1 && !isOrange, 'z-10': isHovered === 1 }">
          <img class="w-full" src="/img/gluten.png" alt="product01">
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">Gluten</div>
            <p class="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
            </p>
          </div>
          <div class="px-6 pt-4 pb-2">
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#</span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#</span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#</span>
          </div>
        </div>

        <!-- Product 4 -->
        <div @mouseover="hoverEffect(4)" @mouseout="resetHoverEffect" @click="selectProduct" class="product-card bg-white rounded overflow-hidden shadow-lg" :class="{ 'border-orange-700': isHovered === 1 && isOrange, 'border-gray-500': isHovered === 1 && !isOrange, 'z-10': isHovered === 1 }">
          <img class="w-full" src="/img/Pinda.png" alt="product01">
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">Pinda</div>
            <p class="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
            </p>
          </div>
          <div class="px-6 pt-4 pb-2">
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#</span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#</span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#</span>
          </div>
        </div>

        <!-- Product 5 -->
        <div @mouseover="hoverEffect(5)" @mouseout="resetHoverEffect" @click="selectProduct" class="product-card bg-white rounded overflow-hidden shadow-lg" :class="{ 'border-orange-700': isHovered === 1 && isOrange, 'border-gray-500': isHovered === 1 && !isOrange, 'z-10': isHovered === 1 }">
          <img class="w-full" src="/img/kellogscornflakes.png" alt="product01">
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">kellogs</div>
            <p class="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
            </p>
          </div>
          <div class="px-6 pt-4 pb-2">
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#</span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#</span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#</span>
          </div>
        </div>

        <!-- Product 6 -->
        <div @mouseover="hoverEffect(6)" @mouseout="resetHoverEffect" @click="selectProduct" class="product-card bg-white rounded overflow-hidden shadow-lg" :class="{ 'border-orange-700': isHovered === 1 && isOrange, 'border-gray-500': isHovered === 1 && !isOrange, 'z-10': isHovered === 1 }">
          <img class="w-full" src="/img/Broccoli.png" alt="product01">
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">Broccoli</div>
            <p class="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
            </p>
          </div>
          <div class="px-6 pt-4 pb-2">
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#</span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#</span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#</span>
          </div>
        </div>

        <!-- Voeg meer producten op dezelfde manier toe -->

      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isHovered: null,
      isOrange: true,
    };
  },
  methods: {
    toggleColors() {
      this.isOrange = !this.isOrange;
      // Voeg hier logica toe om kleuren van andere elementen aan te passen
    },
    hoverEffect(index) {
      this.isHovered = index;
    },
    resetHoverEffect() {
      this.isHovered = null;
    },
    selectProduct() {
      // Voeg hier de logica toe voor het selecteren van een product
    },
  },
};
</script>

<style>
.product-card {
  transition: border-color 0.3s ease, z-index 0.3s ease;
}

/* Voeg deze stijlen toe voor het donker oranje lijntje bij hoveren */
.border-orange-700 {
  border: 4px solid #7d7d7d; /* Maak de lijn dikker en gebruik een fellere oranje kleur */
}
.product-card:hover {
  border: 4px solid #ff6d00; /* Gebruik een grijze kleur bij hover */
}
.bg-orange-500 .product-card:hover {
  border: 4px solid #7d7d7d; /* Gebruik een oranje kleur bij hover als de achtergrond oranje is */
}
.bg-gray-200 .product-card:hover {
  border: 4px solid #ff6d00; /* Gebruik een oranje kleur bij hover als de achtergrond oranje is */
}


</style>
