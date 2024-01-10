
<template>
  <div :class="{ 'bg-orange-500': isOrange, 'bg-gray-500': !isOrange }">
    <div class="p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
      <!-- Use v-for to iterate over products -->
      <div v-for="(product, index) in products" :key="index" @mouseover="hoverEffect(index + 1)" @mouseout="resetHoverEffect" @click="selectProduct(index + 1)" class="product-card bg-white rounded overflow-hidden shadow-lg" :class="{ 'border-orange-700': isHovered === index + 1 && isOrange, 'border-gray-500': isHovered === index + 1 && !isOrange, 'z-10': isHovered === index + 1 }">
        <img class="w-full" :src="product.image" :alt="'product' + (index + 1)">
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2" :class="{ 'enlarged-text': isTextEnlarged }">{{ product.name }}</div>
          <p class="text-gray-700 text-base" :class="{ 'enlarged-text': isTextEnlarged }">
            Ingedientenlijst: {{ product.ingredients }}
            Allergie: {{ product.allergy }}
            Nutri-score: {{ product.nutriScore }}
            Voedingsvoorwaarden: {{ product.nutritionalConditions }}
            Calorienverdeling: {{ product.calorieDistribution }}
          </p>
        </div>
        <div class="px-6 pt-4 pb-2">
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#</span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#</span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#</span>
        </div>
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

