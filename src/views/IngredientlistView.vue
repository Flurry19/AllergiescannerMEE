<template>
  <div class="bg-white">
    <div class="pt-10">
      <div>


        <h1 class="text-center mt-0 mb-8 text-3xl font-bold">Mijn allergieën:</h1>

        <main class="text-center mb-20">
          <div v-for="(item, index) in items" :key="index" class="flex items-center justify-center">
            <svg v-if="item.checked" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <button class="rounded-l-full bg-orange-500 hover:bg-orange-700 mb-4 px-1 py-1">
<!--            <button class="rounded-full bg-orange-500 hover:bg-orange-700 m-2 shadow-md font-bold flex p-1 min-w-[120px]">-->
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
                  <circle cx="13" cy="12" r="10"></circle>
                  <line x1="13" y1="8" x2="13" y2="16"></line>
                  <line x1="9" y1="12" x2="17" y2="12"></line>
                </svg>
              </router-link>
            </button>
            <button class="bg-orange-500 mb-4 font-bold px-1 py-1 min-w-[100px]">
              {{ item.checked ? getSelectedIngredientText(index) || 'Toevoegen' : getSelectedIngredientText(index) || 'Toevoegen'}}
            </button>
            <button class="rounded-r-full bg-orange-500 hover:bg-orange-700 mb-4 px-1 py-1">
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
                  @click="removeIngredient(index)"
              >
                <circle cx="13" cy="12" r="10"></circle>
                <line x1="9" y1="12" x2="17" y2="12"></line>
              </svg>
            </button>
            </div>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        // Een array met checkbox-items met 'checked' eigenschap
        items: Array.from({ length: 20 }, () => ({ checked: false })),
        // Variabele om de geselecteerde ingrediënten op te slaan
        routeQuery: [],
      };
    },
    methods: {
      // Functie om de tekst voor de geselecteerde ingrediënt samen te stellen op basis van de index
      getSelectedIngredientText(index) {
        const selectedIngredients = this.routeQuery;
        // Retourneer de tekst van de geselecteerde ingrediënt op basis van de index of 'Toevoegen' als het niet is geselecteerd
        return selectedIngredients.length > index ? selectedIngredients[index] : 'Toevoegen';
      },
      // Functie om de 'checked' status van een checkbox-item om te schakelen
      toggleCheck(index) {
        // Omgekeerde waarde van de 'checked' status van het geselecteerde item in de checkbox
        this.items[index].checked = !this.items[index].checked;

        // Haal de geselecteerde allergie op basis van de index uit routeQuery
        const selectedAllergy = this.routeQuery[index];
        // Haal de opgeslagen allergieën op uit localStorage of maak een lege array als er geen zijn
        let storedAllergies = JSON.parse(localStorage.getItem('Allergy')) || [];

        // Als het checkbox-item aangevinkt is
        if (this.items[index].checked && selectedAllergy && !storedAllergies.includes(selectedAllergy)) {
          // Voeg de allergie toe aan de lijst van opgeslagen allergieën als deze nog niet bestaat
          storedAllergies.push(selectedAllergy);
        } else if (!this.items[index].checked) {
          // Als het checkbox-item uitgevinkt is
          // Vind de index van de allergie in de opgeslagen lijst van allergieën en verwijder deze
          const allergyIndex = storedAllergies.indexOf(selectedAllergy);
          if (allergyIndex !== -1) {
            storedAllergies.splice(allergyIndex, 1);
          }
        }

        // Sla de bijgewerkte lijst van opgeslagen allergieën op in localStorage
        localStorage.setItem('Allergy', JSON.stringify(storedAllergies));
      },
      removeIngredient(index) {
        // Haal de geselecteerde ingrediënten op uit de lokale opslag
        let storedIngredients = JSON.parse(localStorage.getItem('Ingredient')) || [];

        // Haal de opgeslagen allergieën op uit de lokale opslag
        let storedAllergies = JSON.parse(localStorage.getItem('Allergy')) || [];

        // Controleer of de te verwijderen index binnen de grenzen van de opgeslagen ingrediënten ligt
        if (index >= 0 && index < storedIngredients.length) {
          const ingredientToRemove = storedIngredients[index];

          // Controleer of het te verwijderen ingrediënt een allergie is
          if (!storedAllergies.includes(ingredientToRemove)) {
            // Verwijder het ingrediënt als het geen allergie is
            storedIngredients.splice(index, 1);

            // Update de lokale opslag met de nieuwe lijst van ingrediënten zonder het verwijderde ingrediënt
            localStorage.setItem('Ingredient', JSON.stringify(storedIngredients));

            // Herstel de geüpdatete lijst van ingrediënten in de component data om de weergave bij te werken
            this.routeQuery = storedIngredients;

            // Herstel de aangevinkte status van checkbox-items na verwijdering van ingrediënten
            this.restoreCheckedStatus();
          } else {
            // Ingrediënt is een allergie, toon bijvoorbeeld een melding aan de gebruiker
            alert('Dit ingrediënt kan niet worden verwijderd omdat het is opgeslagen als een allergie.');
          }
        }
      },
      // Functie om de aangevinkte status van checkbox-items te herstellen
      restoreCheckedStatus() {
        // Haal de opgeslagen allergieën op uit localStorage of maak een lege array als er geen zijn
        const storedAllergies = JSON.parse(localStorage.getItem('Allergy')) || [];

        // Loop door de routeQuery om de aangevinkte status van items te herstellen op basis van de opgeslagen allergieën
        this.routeQuery.forEach((selectedAllergy, index) => {
          if (selectedAllergy && storedAllergies.includes(selectedAllergy)) {
            this.items[index].checked = true;
          }
        });
      },
    },
    mounted() {
      // Roep de methode getSelectedAllergyText op bij het laden van de component
      this.getSelectedIngredientText();
      // Haal de opgeslagen geselecteerde allergieën op uit localStorage of maak een lege array als er geen zijn
      this.routeQuery = JSON.parse(localStorage.getItem('Ingredient')) || [];

      this.restoreCheckedStatus(); // Herstel de aangevinkte status bij laden van de component
    }
  };
</script>
