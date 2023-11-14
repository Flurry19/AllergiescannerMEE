<template>
  <div>
    <header style="background-color: #EF761F; display: flex; justify-content: space-between; align-items: center; padding: 10px; height: 60px; position: fixed; width: 100%; top: 0;">
      <div>
        <img src="your-logo-image.png" alt="Site Logo">
      </div>
      <div>
        <h1 style="color: white; margin: 0; font-weight: bold; font-size: 2em;">MEE ROTTERDAM</h1>
      </div>
      <div>
        <button>
          <img src="instructions-icon.png" alt="Instructions Icon">
        </button>
      </div>
    </header>

    <div style="padding-top: 80px;">
      <div>
        <p style="text-align: center; margin: 20px; font-weight: bold;">Zoek naar ingrediënten die voor u het belangrijkst zijn.</p>

        <div style="text-align: center; margin: 20px;">
          <div style="display: flex; align-items: center; justify-content: center;">
            <input type="text" placeholder="Zoek ingrediënten" id="searchBar" style="border-radius: 20px 0 0 20px; background-color: #EF761F; padding: 2px; color: white">
            <button style="border-radius: 0 20px 20px 0; background-color: #EF761F; padding: 2px;">
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

        <h1 style="text-align: center; margin: 10px; font-size: 24px; font-weight: bold;">Uw ingrediëntenlijst:</h1>

        <main style="text-align: center; margin-bottom: 20px; display: flex; flex-direction: column; align-items: center; justify-content: center;">
          <button style="border-radius: 20px; background-color: #EF761F; margin: 10px; box-shadow: 0 0 20px rgba(0, 0, 0, 0.3); font-weight: bold; display: flex; padding: 5px;">
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
          <button style="border-radius: 20px; background-color: #EF761F; margin: 10px; box-shadow: 0 0 20px rgba(0, 0, 0, 0.3); font-weight: bold; display: flex; padding: 5px;">
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
          <button style="border-radius: 20px; background-color: #EF761F; margin: 10px; box-shadow: 0 0 20px rgba(0, 0, 0, 0.3); font-weight: bold; display: flex; padding: 5px;">
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

    <footer style="background-color: #EF761F; display: flex; justify-content: space-around; align-items: center; height: 60px; position: fixed; width: 100%; bottom: 0;">
      <nav style="border: 2px solid black; padding: 5px; width: 100%; height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center;">
        <a href="ingredientlist">
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
          >
            <circle cx="4" cy="2" r="1"></circle>
            <line x1="30" y1="2" x2="10" y2="2"></line>
            <circle cx="4" cy=8.75 r="1"></circle>
            <line x1="30" y1="8.75" x2="10" y2="8.75"></line>
            <circle cx="4" cy="15.25" r="1"></circle>
            <line x1="30" y1="15.25" x2="10" y2="15.25"></line>
            <circle cx="4" cy="22" r="1"></circle>
            <line x1="30" y1="22" x2="10" y2="22"></line>
          </svg>
        </a>
      </nav>

      <nav style="border: 2px solid black; padding: 5px; width: 100%; height: 100%; display: flex; justify-content: center; align-items: center;">
        <a href="/">
          <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="black"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
          >
          <rect x="4" y="9" width="16" height="14"></rect>
          <path d="M22 9L12 2L2 9"></path>
          <line x1="12" y1="2" x2="12" y2="9"></line>
          <line x1="7" y1="4" x2="17" y2="4"></line>
          </svg>
        </a>
      </nav>

      <nav style="border: 2px solid black; padding: 5px; width: 100%; height: 100%; display: flex; justify-content: center; align-items: center;">
        <a href="productpage">
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
          >
            <path d="M12 2L14.39 8.26L21 9.27L15.5 14.14L17.89 20L12 17.77L6.11 20L8.5 14.14L3 9.27L9.61 8.26L12 2z"></path>
          </svg>
        </a>
      </nav>

    </footer>
  </div>
</template>
<script setup>
</script>
