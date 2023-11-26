<template>
  <div>
    <div class="pt-20">
      <div>
        <p class="text-center m-5 font-bold">Zoek naar ingrediënten die voor u het belangrijkst zijn.</p>
        <div class="text-center m-5">
          <div class="flex items-center justify-center">
            <input type="text" placeholder="Zoek ingrediënten" id="searchBar" class="rounded-l-full bg-orange-500 px-2 py-1 text-white">
            <button class="rounded-r-full bg-orange-500 px-2 py-1">
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  style="margin-right: 5px;"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <circle cx="14" cy="10" r="5" stroke-width="1" fill="transparent"></circle>
                <line x1="5.25" y1="19" x2="10.25" y2="14" stroke-width="1"></line>
              </svg>
            </button>
          </div>
        </div>

        <h1 class="text-center my-10 text-5xl font-bold">Uw ingrediëntenlijst:</h1>

        <main class="text-center mb-20">
          <div v-for="(item, index) in items" :key="index" class="flex items-center justify-center">
            <svg v-if="item.checked" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>

            <button class="rounded-full bg-orange-500 hover:bg-orange-700 m-2 shadow-md font-bold flex p-1 min-w-[120px]" @click="toggleCheck(index)">
              <router-link :to="{ path: '/allergy'}">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    style="margin-right: 5px;"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="8" x2="12" y2="16"></line>
                  <line x1="8" y1="12" x2="16" y2="12"></line>
                </svg>
              </router-link>
              {{ item.checked ? getSelectedAllergyText(index) || 'Toevoegen' : getSelectedAllergyText(index) || 'Toevoegen'}}
            </button>
<!--            <button @click="toggleCheck(index)">-->
<!--              {{ item.checked ? getSelectedAllergyText(index) || 'Toevoegen' : getSelectedAllergyText(index) || 'Toevoegen'}}-->
<!--            </button>-->
          </div>
        </main>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { useRoute } from 'vue-router';

const items = ref([
  {checked: false},
  {checked: false},
  {checked: false},
  {checked: false},
  {checked: false},
  {checked: false},
  {checked: false},
  {checked: false},
]);

const route = useRoute();

// Methode om de 'checked' status van de knop te wijzigen
const toggleCheck = (index) => {
  items.value[index].checked = !items.value[index].checked;
  console.log('toggle vote');
};

// Functie om de geselecteerde allergieën op te halen uit de query parameters
const getSelectedAllergies = () => {
  const selectedAllergies = route.query.allergies ? route.query.allergies.split(',') : [];
  return selectedAllergies;
};

// Functie om de tekst samen te stellen op basis van de geselecteerde allergieën
const getSelectedAllergyText = (index) => {
  const selectedAllergies = getSelectedAllergies();
  return selectedAllergies.length > index ? selectedAllergies[index] : 'Toevoegen';
};

onMounted(() => {
  const selectedAllergies = route.query.allergies ? route.query.allergies.split(',') : [];
  const storedAllergies = JSON.parse(localStorage.getItem('selectedAllergies')) || [];

  if (storedAllergies.length > 0) {
    items.value.forEach((item) => {
      if (selectedAllergies.includes(item)) {
        item.checked = true;
      }
    });
  }
});

onBeforeUnmount(() => {
  items.value.forEach((item) => {
    item.checked = false;
  });
});
</script>

