<script setup lang="ts">
import type {Product} from "~/components/ProductDetail.vue";

const { id } = useRoute().params;
const { data: product } = await useFetch<Product>(`https://fakestoreapi.com/products/${id}`, { key: `product_${id}` })

if (!product.value) {
  throw createError({ message: `Product not found: ${id}`, statusCode: 404, fatal: true });
}

</script>

<template>
  <div>
    <ProductDetail :product="product" />
  </div>
</template>

<style scoped>

</style>
