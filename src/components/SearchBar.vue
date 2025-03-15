<script setup lang="ts">
import { ref, watch } from 'vue';

const search = ref('');
const emit = defineEmits(['search']);

const handleSearch = () => {
  emit('search', search.value);
};

watch(search, (newSearch) => {
  if (newSearch === '') {
    emit('search', '');
  }
});
</script>

<template>
  <div class="search-bar">
    <input type="text" placeholder="Pesquise por um carro" v-model="search" @keyup.enter="handleSearch"/>
    <button @click="handleSearch" >Pesquisar</button>
  </div>
</template>

<style scoped>
.search-bar {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin: 20px 0;
}
.search-bar input {
  padding: 10px;
  border: 1px solid #c3c6ce;
  border-radius: 8px;
  width: 300px;
}
.search-bar button {
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  background: #008bf8;
  color: #fff;
  cursor: pointer;
}
.search-bar button:hover {
  background: #0056b3;
}
</style>