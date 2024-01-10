<template>
  <div class="bg-white">
    <div>
      <p class="text-center text-4xl p-3 font-bold">Mijn favoriete producten:</p>
    </div>
      <!-- Use v-for to dynamically create FavoriteCard components -->
      <div class="bg-orange-500 mb-10 p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
        <FavoriteCard v-for="product in favoriteProducts" :barcode="product.barcode" :productImage="product.productImage" :productName="product.productName" :key="product.barcode" :product="product" />
        </div>
      </div>
</template>

<script>
import FavoriteCard from '@/components/FavoriteCard.vue';

export default {
  components: {
    FavoriteCard,
  },

  data() {
    return {
      favoriteProducts: [], // An array to store favorite product data
    };
  },

  methods: {
    getProductName(product) {
      return product.productName || `Product ${product.barcode}`;
    },

    getProductImage(product) {
      return product.productImage || ''; // Replace with actual image source logic
    },
  },

  mounted() {
    // Populate favoriteProducts array with data from local storage
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
          this.favoriteProducts.push({
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
};
</script>