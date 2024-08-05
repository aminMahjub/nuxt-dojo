<script setup>
const { error } = defineProps({
  error: Object
})
console.log(error)

const handleError = () => clearError({ redirect: "/"})
</script>

<template>
  <div class="mt-7 max-w-sm mx-auto text-center card">
    <p class="mt-7 text-7xl font-bold">{{error.statusCode}}</p>
    <p class="mt-7 text-6xl">Ooops.</p>
    <p class="mt-7">{{error.message}}</p>
    <button class="btn my-7" @click="handleError">Go Home...</button>
  </div>
</template>
