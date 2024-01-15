<template>
  <main>
    <div class="flex flex-col h-screen">

      <div class="bg-white flex-auto">
        <div class="text-center text-2xl lg:text-4xl font-bold mt-4 text-black font-bold text-center">
          <p class="mx-1">Is het product veilig om te eten?</p>
          <p>Vul je allergieën in en scan de barcode van het product.</p>
        </div>

        <div class="flex flex-col items-center">
          <img class="w-1/2 lg:w-72" src="/img/Screenshot%202024-01-01%20131925.png" alt="Afbeelding van een telefoon met een barcode">
        </div>

        <div class="flex flex-col items-center ">
          
        </div>

        <div class="text-white text-center items-center flex flex-col pt-2">
          <router-link to="/ingredientlist" class="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full mb-5 w-1/2 flex flex-row lg:text-2xl lg:w-1/6 flex lg:items-center transform active:scale-75 transition-transform">Vul allergieën in
            <img class="w-12 lg:w-12 lg:ml-4" src="/img/allergy.png" alt="Barcode icoon"> </router-link>
          <router-link to="/scanner" class="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full mb-5 w-1/2 flex flex-row lg:text-2xl lg:w-1/6 flex lg:items-center transform active:scale-75 transition-transform">Begin met scannen
            <img class="w-10 lg:w-12 lg:ml-4" src="/img/barcode.png" alt="Barcode icoon"> </router-link>
<!--          <button class="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full mb-5 w-1/2 flex flex-row lg:text-2xl lg:w-1/6 flex lg:items-center">Zoek uw product-->
<!--            <img class="w-6 lg:w-12 lg:ml-4" src="/img/search.png" alt="Vergrootglas icoon"> </button>-->
          <router-link to="/Scanngeschiedenis" class="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full mb-5 w-1/2 flex flex-row lg:text-2xl lg:w-1/6 flex lg:items-center transform active:scale-75 transition-transform">Scangeschiedenis
          </router-link>
        </div>
      </div>


    </div>
  </main>
</template>
<script>
import FavoriteCard from "@/components/FavoriteCard.vue";

export default {
  components: { FavoriteCard },
  data() {
    return {
      isHovered: null,
      isOrange: true,
      isTextEnlarged: false,
      products: [],
    };
  },
  methods: {
    toggleColors() {
      this.isOrange = !this.isOrange;
      // Add or remove bg-orange-500 class from specific elements as needed
      const elementsToToggle = document.querySelectorAll('.bg-orange-500');
      elementsToToggle.forEach(element => {
        element.classList.toggle('bg-gray-500', !this.isOrange);
        element.classList.toggle('bg-orange-500', this.isOrange);
      });
    },
    toggleTextSize() {
      this.isTextEnlarged = !this.isTextEnlarged;
    },
    hoverEffect(index) {
      this.isHovered = index;
    },
    resetHoverEffect() {
      this.isHovered = null;
    },
    selectProduct(index) {
      // Handle product selection using the index
    },
  },
};
</script>