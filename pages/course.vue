<template>
  <div class="mb-12 prose">
    <h1 class="text-3xl">
      <span class="font-medium">
        Course:
        <span class="text-3xl font-bold">Mastering Nuxt 3</span>
      </span>
    </h1>
  </div>

  <div class="flex flex-col justify-center flex-grow w-full gap-4 sm:flex-row">
    <div class="flex flex-col order-last w-full p-6 prose bg-white rounded-md sm:w-1/4 sm:order-first">
      <h3>Chapters</h3>
      <!-- All the lessons for the course listed here -->
      <div class="flex flex-col mb-4 space-y-1" v-for="chapter in chapters" :key="chapter.slug">
        <h4>{{ chapter.title }}</h4>
        <NuxtLink v-for="(lesson, index) in chapter.lessons" :key="lesson.slug" :to="lesson.path"
          class="flex flex-row p-2 space-x-1 font-normal prose-sm no-underline hover:text-gray-400" :class="{
            'text-blue-500':
              lesson.path === $route.fullPath,
            'text-gray-600':
              lesson.path !== $route.fullPath,
          }">
          {{ index + 1 }}.
          {{ lesson.title }}
        </NuxtLink>
      </div>
    </div>

    <div class="order-first w-full p-8 prose bg-white rounded-md sm:w-3/4 sm:order-last ">
      <NuxtErrorBoundary>
        <NuxtPage />
        <template #error="{ error }">
          <p>
            Oh no, something went wrong with the lesson!
            <code>{{ error }}</code>
          </p>
          <p>
            <button class="px-3 py-1 font-bold text-white bg-gray-500 rounded hover:cursor-pointer"
              @click="resetError(error)">Reset</button>
          </p>
        </template>
      </NuxtErrorBoundary>
    </div>
  </div>
</template>
<script setup>
const { chapters } = useCourse();
const resetError = async (error) => {
  await navigateTo(
    '/course/1-chapter-1/1-introduction-to-typescript-with-vue-js-3'
  );
  error.value = null;

}
</script>
<style scoped></style>