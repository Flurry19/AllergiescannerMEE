<template>
  <div class="bg-white">
  <div>
    <!-- Logo boven in het midden -->
    <div class="flex justify-center items-center my-5">
      <!-- <img src="/img/MEE-23-11-2023.png" alt="Logo" class="h-26 w-26">-->
    </div>

    <div class="mt-5 mb-5">
      <p class="text-center text-3xl font-bold" :class="{ 'enlarged-text': isTextEnlarged }">Hier vindt u de producten die u in het verleden heeft gescand</p>
    </div>

    <div class="flex flex-col items-center ">
      <button @click="toggleColors" id="toggleColorButton" class="absolute top-0 right-0 m-4 p-6">
        <img src="/img/darkmode.png" alt="logo">
      </button>
      <button @click="toggleTextSize" class="absolute top-0 right-0 m-4 p-2">
        Vergroot tekst
      </button>
      <router-link to="/scanner" class="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full mb-5">Begin met scannen</router-link>
    </div>

    <div class="my-5">
      <p class="text-center text-5xl font-bold">Uw gescande producten:</p>
    </div>
    <div class="bg-orange-500 mb-10 p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
    <favorite-card v-for="product in products" :barcode="product.barcode" :productImage="product.productImage" :productName="product.productName" :key="product.barcode" :product="product" />
  </div>
  </div>
  </div>

</template>

<script>
import HistoryCard from "@/components/HistoryCard.vue";
import FavoriteCard from "@/components/FavoriteCard.vue";

export default {
  components: {FavoriteCard},
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
    getProductInfo() {
      const favoriteBarcodes = JSON.parse(localStorage.getItem('favoriteBarcodes')) || [];

      // Fetch details for all favorite barcodes from the API
      favoriteBarcodes.forEach(barcode => {
        let url = `https://world.openfoodfacts.org/api/v0/product/${barcode}.json`;

        fetch(url)
            .then(response => {
              if (response.ok) {
                return response.json();
              } else {
                throw new Error(`Error: ${response.status}`);
              }
            })
            .then(productInfo => {
              // Update the favoriteProducts array with fetched information
              this.products.push({
                barcode: barcode,
                productName: productInfo.product.product_name_nl,
                productImage: productInfo.product.image_front_url,
              });

              console.log('information for a card is retrieved')
            })
            .catch(error => {
              console.error(error);
            });
      });
    },
  },
  created() {
    // Call the method to fetch product information when the component is created
    this.getProductInfo();
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

/* Voeg deze stijl toe voor vergroten van tekst */
.enlarged-text {
  font-size: 2em; /* Pas dit aan naar de gewenste vergrotingsfactor */
}
</style>