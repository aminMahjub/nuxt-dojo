<script setup lang="ts">
import ProductCard from "~/components/ProductCard.vue";

const { data: products } = await useFetch("https://fakestoreapi.com/products")

</script>

<template>
  <div>
    <div class="grid grid-cols-4 gap-5">
      <div v-for="p in products">
        <ProductCard :product="p" />
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
