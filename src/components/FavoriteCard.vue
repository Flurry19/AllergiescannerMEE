<!-- FavoriteCard.vue -->

<template>
    <div class="group transition hover:-translate-y-1 hover:scale-110 duration-500 bg-white rounded overflow-hidden shadow-lg ring-1 ring-slate-900/5 hover:bg-orange-700 hover:ring-orange-700">
      <img :src="productImage" alt="product">
      <div class="px-6 py-4">
        <router-link :to="{ name: 'productpage', params: { barcode: barcode } }">Ga naar product</router-link>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      barcode: String,
      productName: String,
      productImage: String,
    },
  };
  </script>
  