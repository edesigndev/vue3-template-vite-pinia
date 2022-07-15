<template>
  <div class="login">
    <h1>Login</h1>
    <h3>{{ userStore.userUpperCase }}</h3>
  </div>
</template>
<script setup>
import { useUserStore } from '../store/user';
const userStore = useUserStore();
</script>
