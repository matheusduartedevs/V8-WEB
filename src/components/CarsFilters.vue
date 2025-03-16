<script setup lang="ts">
import { ref, watch } from 'vue';

const filters = ref({
  brand: "all",
  transmission: "all",
});

const emit = defineEmits(["update-filters"]);

watch(
  filters,
  (newFilters) => {
    emit("update-filters", { ...newFilters });
  },
  { deep: true }
);
</script>

<template>
  <div>
    <div>
      <label for="brand">Marca</label>
      <select id="brand" v-model="filters.brand">
        <option value="all">Todas</option>
        <option value="audi">Audi</option>
        <option value="bmw">BMW</option>
        <option value="chevrolet">Chevrolet</option>
        <option value="dodge">Dodge</option>
        <option value="fiat">Fiat</option>
        <option value="ford">Ford</option>
        <option value="honda">Honda</option>
        <option value="lamborghini">Lamborghini</option>
        <option value="nissan">Nissan</option>
        <option value="porsche">Porsche</option>
        <option value="tesla">Tesla</option>
        <option value="toyota">Toyota</option>
        <option value="volkswagen">Volkswagen</option>
      </select>
    </div>

    <div>
      <label for="transmission">Transmissão</label>
      <select id="transmission" v-model="filters.transmission">
        <option value="all">Todas</option>
        <option value="manual">Manual</option>
        <option value="automatic">Automática</option>
      </select>
    </div>
  </div>
</template>

<style scoped>
div {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

label {
  font-weight: bold;
}

select {
  padding: 10px;
  border: 1px solid #c3c6ce;
  border-radius: 8px;
  width: 300px;
}
</style>