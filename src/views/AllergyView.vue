<template>
  <div class="pt-20 bg-white">
    <div>
      <p class="text-center m-5 font-bold">Voedselallergieën</p>

      <!-- Lijst van voedselallergieën -->
      <ul class="flex flex-col items-center justify-center">
        <li v-for="(ingredient, index) in ingredients" :key="index">
          <button class="rounded-full bg-orange-500 hover:bg-orange-700 m-2 shadow-md font-bold flex p-1 min-w-[150px] items-center justify-center" @click="toggleCheck(ingredient)">
            {{ ingredient }}
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    // De lijst van voedselallergieën
    return {
      ingredients: ['Vis', 'Noten', 'Pinda', 'Melk', 'Ei', 'Tarwe', 'Soja', 'Sesamzaad', 'Gluten'], // Voeg hier meer ingrediënten toe indien nodig
    };
  },
  methods: {
    // Methode om de 'checked' status van het ingrediënt te wijzigen en navigatie te activeren
    toggleCheck(selectedIngredient) {
      // Haal opgeslagen ingrediënten op uit local storage of initialiseer een lege array
      let storedIngredrients = JSON.parse(localStorage.getItem('Ingredient')) || [];

      // Controleer of de geselecteerde ingrediënt al is opgeslagen
      if (!storedIngredrients.includes(selectedIngredient)) {
        // Voeg de geselecteerde ingrediënt toe aan de opgeslagen allergieën
        storedIngredrients.push(selectedIngredient);
        localStorage.setItem('Ingredient', JSON.stringify(storedIngredrients)); // Sla de bijgewerkte lijst op in local storage
      }

      // Navigeer naar '/ingredientlist' met de geselecteerde ingrediënten als queryparameters
      this.$router.push({ path: '/ingredientlist', query: { allergies: storedIngredrients.join(',') } });
    },
  },
};
</script>


<!--<script setup>-->
<!--import { ref } from 'vue';-->
<!--import { useRouter } from 'vue-router';-->

<!--// Lijst van voedselallergieën-->
<!--const allergies = ref(['Vis', 'Noten', 'Pinda', 'Melk', 'Ei', 'Tarwe', 'Soja', 'Sesamzaad']); // Voeg hier meer allergieën toe indien nodig-->

<!--const router = useRouter();-->

<!--// Methode om de 'checked' status van de allergie te wijzigen en navigatie te activeren-->
<!--const toggleCheck = (selectedAllergy) => {-->
<!--  let storedAllergies = JSON.parse(localStorage.getItem('selectedAllergies')) || [];-->

<!--  if (!storedAllergies.includes(selectedAllergy)) {-->
<!--    storedAllergies.push(selectedAllergy);-->
<!--    localStorage.setItem('selectedAllergies', JSON.stringify(storedAllergies));-->
<!--  }-->

<!--  router.push({ path: '/ingredientlist', query: { allergies: storedAllergies.join(',') } });-->
<!--};-->
<!--</script>-->