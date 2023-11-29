<!--<template>-->
<!--  <div class="pt-20">-->
<!--    <div>-->
<!--      <p class="text-center m-5 font-bold">Voedselallergieën</p>-->

<!--      &lt;!&ndash; Lijst van voedselallergieën &ndash;&gt;-->
<!--      <ul class="flex flex-col items-center justify-center">-->
<!--        <li v-for="(allergy, index) in allergies" :key="index">-->
<!--          <button class="rounded-full bg-orange-500 hover:bg-orange-700 m-2 shadow-md font-bold flex p-1" @click="toggleCheck(allergy)">-->
<!--            {{ allergy }}-->
<!--          </button>-->
<!--        </li>-->
<!--      </ul>-->
<!--    </div>-->
<!--  </div>-->
<!--</template>-->

<!--<script setup>-->
<!--import { ref } from 'vue';-->
<!--import { useRouter } from 'vue-router';-->

<!--// Lijst van voedselallergieën-->
<!--const allergies = ref(['Vis', 'Noten', 'Pinda', 'Melk', 'Ei', 'Tarwe', 'Soja', 'Sesamzaad']); // Voeg hier meer allergieën toe indien nodig-->

<!--const router = useRouter();-->

<!--// Methode om de 'checked' status van de allergie te wijzigen en navigatie te activeren-->
<!--const toggleCheck = (selectedAllergy) => {-->
<!--  router.push({ path: '/ingredientlist', query: { allergy: selectedAllergy } });-->
<!--};-->
<!--</script>-->

<template>
  <div class="pt-20">
    <div>
      <p class="text-center m-5 font-bold">Voedselallergieën</p>

      <!-- Lijst van voedselallergieën -->
      <ul class="flex flex-col items-center justify-center">
        <li v-for="(allergy, index) in allergies" :key="index">
          <button class="rounded-full bg-orange-500 hover:bg-orange-700 m-2 shadow-md font-bold flex p-1 min-w-[150px] items-center justify-center" @click="toggleCheck(allergy)">
            {{ allergy }}
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

// Lijst van voedselallergieën
const allergies = ref(['Vis', 'Noten', 'Pinda', 'Melk', 'Ei', 'Tarwe', 'Soja', 'Sesamzaad']); // Voeg hier meer allergieën toe indien nodig

const router = useRouter();

// Methode om de 'checked' status van de allergie te wijzigen en navigatie te activeren
const toggleCheck = (selectedAllergy) => {
  let storedAllergies = JSON.parse(localStorage.getItem('selectedAllergies')) || [];

  if (!storedAllergies.includes(selectedAllergy)) {
    storedAllergies.push(selectedAllergy);
    localStorage.setItem('selectedAllergies', JSON.stringify(storedAllergies));
  }

  router.push({ path: '/ingredientlist', query: { allergies: storedAllergies.join(',') } });
};
</script>