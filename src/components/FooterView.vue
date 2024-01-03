<template>
  <footer class="bg-orange-500 flex justify-around items-center h-16 fixed w-full bottom-0">
    <nav class="border-2 border-black p-2 w-full h-full flex flex-col items-center justify-center">
      <router-link to="/ingredientlist">
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
      </router-link>
    </nav>

    <nav class="border-2 border-black p-2 w-full h-full flex justify-center items-center">
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

    <nav class="border-2 border-black p-2 w-full h-full flex justify-center items-center">
      <router-link to="/favoritelist" >
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
      </router-link>
    </nav>
  </footer>
</template>
<script setup>
</script>