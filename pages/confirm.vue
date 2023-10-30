<script setup lang="ts">
const user = useSupabaseUser()
const firstLesson = useFirstLesson()

watch(user, () => {
  if (user.value) {
    return navigateTo(firstLesson.path)
  }
}, { immediate: true })
</script>

<template>
  <div>
    <p class="u-text-black">
      Redirecting...
    </p>
  </div>
</template>