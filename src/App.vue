<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/HeaderView.vue'
import Footer from './components/FooterView.vue'

</script>

<template>
<body class="bg-orange-400">
<!--<Header/>-->
  <RouterView  />
<Footer/>
</body>
</template>

