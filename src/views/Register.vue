<template>
  <div class="register">
    <h1>Register</h1>
    <input type="text" placeholder="Ingresa nombre" v-model.trim="name" />
    <br />
    <button @click="register">Acceder</button>
  </div>
</template>
<script setup>
import { ref } from 'vue';
import { useUserStore } from '../store/user';
const userStore = useUserStore();

const name = ref('');

const register = () => {
  if (!name.value) {
    alert('ingresa los campos');
  }
  userStore.registerUser(name.value);
};
</script>
