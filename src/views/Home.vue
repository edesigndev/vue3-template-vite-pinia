<template>
  <div class="home">
    <h1>Home</h1>
    <h3>{{ userStore.userData }}</h3>
  </div>
</template>
<script setup>
import { useUserStore } from '../store/user';
const userStore = useUserStore();
</script>
