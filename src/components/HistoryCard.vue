<template>
  <div class="group transition hover:-translate-y-1 hover:scale-110 duration-500 bg-white rounded overflow-hidden shadow-lg ring-1 ring-slate-900/5 hover:bg-orange-700 hover:ring-orange-700">
   <div class="product-card bg-white rounded overflow-hidden shadow-lg">
     <img class="w-full" :src="productImage" :alt="productName">
     <div class="px-6 py-4">
       <div class="font-bold text-xl mb-2" :class="{ 'enlarged-text': isTextEnlarged }">{{ productName }}</div>
       <p class="text-gray-700 text-base" :class="{ 'enlarged-text': isTextEnlarged }">
         Barcode: {{ barcode }}
       </p>
     </div>
     <div class="px-6 pt-4 pb-2">
     </div>
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