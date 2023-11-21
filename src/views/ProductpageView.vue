<script>
export default {
  data() {
    return {
      productName: '',
      allergens: '',
      productImage: '',
      nutriScore: '',
      ecoScore: '',
      servingSize: '',
      energykcal: '',
      energykj: '',
      fat: '',
      saturatedFat: '',
      carbohydrates: '',
      sugars: '',
      salt: '',
      fiber: '',
      proteins: '',
    };
  },
  mounted() {
    let barcode = '5060088707685  '; //Here goes the number of the scanned barcode (Stijn)
    let url = `https://world.openfoodfacts.org/api/v0/product/${barcode}.json`; //The API in which he places the variable above
    fetch(url)
        .then(response => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error('Error: ${response.status}');
          }
        })
        .then(productInfo => {
          this.productName = productInfo.product.product_name;
          this.allergens = productInfo.product.allergens;
          this.productImage = productInfo.product.image_front_url;
          this.nutriScore = productInfo.product.nutriscore_data.grade;
          this.ecoScore = productInfo.product.ecoscore_data.grade;
          this.servingSize = productInfo.product.serving_size;
          this.energykcal = productInfo.product.nutriments['energy-kcal'];
          this.energykj = productInfo.product.nutriments['energy-kj'];
          this.fat = productInfo.product.nutriments['fat'];
          this.saturatedFat = productInfo.product.nutriments['saturated-fat'];
          this.carbohydrates = productInfo.product.nutriments['carbohydrates'];
          this.sugars = productInfo.product.nutriments['sugars'];
          this.salt = productInfo.product.nutriments['salt'];
          this.fiber = productInfo.product.nutriments['fiber'];
          this.proteins = productInfo.product.nutriments['proteins'];

        })
        .catch(error => {
          console.error(error);
        })
  }
}
</script>
<template>

  <div class="bg-orange-400 lg:mx-12" id="productInfo">
  <div class="flex lg:flex-row flex-col">
   <div class="lg:w-5/12">
     <img src="{{ productImage }}" alt="Logo">
   </div>
    <div class="lg:w-7/12">

      <h1 class="text-center font-bold text-2xl">{{ productName }}</h1>
      <div  class="bg-green-400">
        <h1 class="text-center font-bold">Dit product bevat geen:</h1>
        <div class="flex flex-row">
          <div class="w-5/12 mx-12">
            <ul>
              <li class="h-12"><img class="w-12" src="@/assets/img/Fish.png" alt="Vis"></li>
              <li class="h-12"><img class="w-12" src="@/assets/img/Pinda.png" alt="Pinda"></li>
            </ul>
          </div>
          <div class="w-7/12">
            <ul>
              <li class="h-12 font-bold text-xl">Vis </li>
              <li class="h-12 font-bold text-xl">Pinda</li>
            </ul>
          </div>
        </div>
      </div>
      <div  class="bg-red-400">
        <h1 class="text-center font-bold">Dit product bevat wel: </h1>
        <div class="flex flex-row">
          <div class="w-5/12 mx-12">
            <ul>
              <li class="h-12"><img class="w-12" src="@/assets/img/egg.png" alt="Ei"></li>
              <li class="h-12"><img class="w-12" src="@/assets/img/gluten.png" alt="Gluten"></li>
            </ul>
          </div>
          <div class="w-7/12">
            <ul>
              <li class="h-12 font-bold text-xl">Ei </li>
              <li class="h-12 font-bold text-xl">Gluten</li>
            </ul>
          </div>
        </div>
      </div>
      <div  class="bg-white">
        <h1 class="text-center font-bold">Dit product bevat: </h1>
        <div class="flex flex-row">
          <div class="w-5/12 mx-12">
           {{allergens}}
          </div>

        </div>
      </div>


    </div>
  </div>
    <div class="mx-8">
      <h1 class="font-bold text-center text-4xl">Overige productinformatie</h1>
      <div class="bg-white my-4">
        <h2 class="font-bold text-2xl">Nutri-Score: {{nutriScore}}</h2>
        <h2 class="font-bold text-2xl">Eco-Score: {{ecoScore}}</h2>
      <h2 class="font-bold text-2xl">Voedingswaarden (per portie)</h2>
      <div class="flex flex-row text-xl">
        <div class="w-5/12 ">
      <ul>
        <li>Portiegrootte:</li>
        <li>Energie:</li>
        <li>Vet:</li>
        <li>Verzadigd vet:</li>
        <li>Koolhydraten:</li>
        <li>Suiker:</li>
        <li>Vezels:</li>
        <li>Eiwitten:</li>
        <li>Zout:</li>
      </ul>
        </div>
        <div class="w-7/12">
          <ul>
            <li>{{ servingSize }}</li>
            <li>{{ energykj }} kj = {{energykcal}} KCal</li>
            <li>{{ fat }} gram</li>
            <li>{{ saturatedFat }} gram</li>
            <li>{{ carbohydrates }} gram</li>
            <li>{{ sugars }} gram</li>
            <li>{{ fiber }} gram</li>
            <li>{{ proteins }} gram</li>
            <li>{{ salt }} gram</li>
          </ul>
        </div>
      </div>
      </div>
      <div class="bg-white my-4 text-xl">
      <h2 class="font-bold text-2xl">Calorieën Verdeling:</h2>
      <p>Koolhydraat (90%)</p>
      <p>Vet (2%)</p>
      <p>Eiwitten (8%)</p>
      </div>
    </div>

   </div>

  <button class="fixed bottom-6 left-36 bg-orange-600 rounded py-2 px-4 text-white font-bold">
    Terug
  </button>
</template>