<script setup>
import { ref } from "vue";

const props = defineProps({
  title: { type: String, required: true },
});

const showPanel = ref(false);

const togglePanel = () => {
  showPanel.value = !showPanel.value;
};
</script>

<template>
  <div class="panel">
    <button class="py-2.5 px-5 me-2 mb-2 text-xl text-white bg-orange-400 rounded-lg" @click.prevent="togglePanel">{{ title }}</button>
    <div class="content" v-if="showPanel">
      <slot></slot>
    </div>
  </div>
</template>
