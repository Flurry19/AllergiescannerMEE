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


        <main class="text-center mb-20 flex flex-col items-center justify-center">
          <button class="rounded-full bg-orange-500 hover:bg-orange-700 m-2 shadow-md font-bold flex p-1">
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
  <!--            <line x1="12" y1="8" x2="12" y2="16"></line>-->
              <line x1="8" y1="12" x2="16" y2="12"></line>
            </svg>
            Vis
          </button>
          <button class="rounded-full bg-orange-500 hover:bg-orange-700 m-2 shadow-md font-bold flex p-1">
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
            Toevoegen
          </button>
          <button class="rounded-full bg-orange-500 hover:bg-orange-700 m-2 shadow-md font-bold flex p-1">
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
            Toevoegen
          </button>
        </main>
      </div>
    </div>
  </div>
</template>
<script setup>
</script>
