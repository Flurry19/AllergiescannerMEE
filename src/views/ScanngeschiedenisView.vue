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
        <button @click="toggleColors" id="toggleColorButton" class="absolute top-0 right-11 m-4 p-0">
          <img src="/img/darkmode.png" alt="logo">
        </button>
        <button @click="toggleTextSize" class="absolute top-0 right-0 m-5 p-0">
          <img src="/img/3548527-200.png" alt="logo" class="h-10 w-10"> <!-- Adjust the h-6 and w-6 for your desired size -->
        </button>
        <router-link to="/scanner" class="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full mb-5">Begin met scannen</router-link>
        <!-- Delete History Button -->
        <button @click="deleteHistory" class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full mb-5">
          Verwijder geschiedenis
        </button>
      </div>

      <div class="my-5" >
        <p class="text-center text-5xl font-bold">Uw gescande producten:</p>
      </div>

      <div class="bg-orange-500 mb-10 p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
        <!-- Use v-for to dynamically create FavoriteCard components -->
        <div class="group transition hover:-translate-y-1 hover:scale-110 duration-500 bg-white rounded overflow-hidden shadow-lg ring-1 ring-slate-900/5 hover:bg-orange-700 hover:ring-orange-700 justify-center">
        <router-link
            v-for="product in scannedProducts"
            :to="{ name: 'productpage', params: { barcode: product.barcode } }"
            :key="product.barcode"
            class="cursor-pointer"
        >
          <HistoryCard
              :barcode="product.barcode"
              :productImage="product.productImage"
              :productName="product.productName"
              :product="product"
          />
        </router-link>
    </div>
      </div>
    </div>
  </div>
</template>

<script>
import HistoryCard from "@/components/HistoryCard.vue";

export default {
  components: { HistoryCard },
  data() {
    return {
      scannedProducts: [],
    };
  },
  methods: {
    deleteHistory() {
      // Verwijder de geschiedenis uit de local storage en leeg de scannedProducts-array
      localStorage.removeItem('scannedBarcodes');
      this.scannedProducts = [];
      console.log('Geschiedenis verwijderd');
    },
    loadScannedProducts() {
      const scannedBarcodes = JSON.parse(localStorage.getItem('scannedBarcodes')) || [];

      // Fetch details for all scanned barcodes from the API
      scannedBarcodes.forEach(barcode => {
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
              // Update the scannedProducts array with fetched information
              this.scannedProducts.push({
                barcode: barcode,
                productName: productInfo.product.product_name_nl,
                productImage: productInfo.product.image_front_url,
              });
              console.log('Information for a card is retrieved');
            })
            .catch(error => {
              console.error(error);
            });
      });
    },
  },
  mounted() {
    this.loadScannedProducts();
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

/* Voeg deze stijl toe voor vergroten van tekst */
.enlarged-text {
  font-size: 2em; /* Pas dit aan naar de gewenste vergrotingsfactor */
}
</style>