<template>
  <header class="bg-orange-500 flex justify-between items-center py-2 px-4 h-16 fixed w-full top-0">
    <div>
      <img src="/img/Logo.png" alt="Site Logo">
    </div>
    <div>
      <h1 class="text-white font-bold text-l lg:text-2xl my-0">MEE Rotterdam Rijnmond</h1>
    </div>
    <div>
<!--      <button>-->
<!--        <img src="instructions-icon.png" alt="Instructions Icon">-->
<!--      </button>-->
    </div>
  </header>
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