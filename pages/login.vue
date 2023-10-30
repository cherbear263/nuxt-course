<template>
  <div class="w-full max-w-2xl prose h-9">
    <h1>Log in to {{ title }}</h1>
    <button @click="login" class="px-4 py-2 font-bold text-white bg-blue-500 rounded">
      Log in with Github
    </button>
  </div>
</template>
<script setup>
const { title } = useCourse();
const user = useSupabaseUser();
const firstLesson = useFirstLesson();
const supabase = useSupabaseClient();

const login = async () => {
  const { error } = await supabase.auth.signInWithOAuth({
    provider: 'github',
  });
  if (error) {
    console.error(error)
  }
}
watchEffect(() => {
  if (user.value) {
    navigateTo(firstLesson.path)
  }
})
</script>