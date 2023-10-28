<template>
  <div class="flex flex-col items-center w-full h-full min-h-screen p-12 bg-gray-100">
    <div v-if="error.statusCode === '404'" class="prose text-center">
      <h1 class="text-8xl">404</h1>
      <p>I guess that page doesn't exist.</p>


    </div>
    <div v-else class="prose">
      <h1>Dang.</h1>
      <p>It looks like something broke.</p>
      <p>Sorry about that.</p>

    </div>
    <p class="mt-20">
      <strong>{{ error.message }}</strong>
    </p>
    <p>Go back to the <a class="text-blue-700 hover:cursor-pointer hover:underline" @click="handleError">first lesson.</a>
    </p>

  </div>
</template>
<script setup>
const error = useError();
const handleError = () => {
  clearError({
    redirect: '/course/1-chapter-1/1-introduction-to-typescript-with-vue-js-3'
  })
}

</script>