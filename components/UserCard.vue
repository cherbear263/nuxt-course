<template>
  <div v-if="user" class="flex items-center max-w-[185px] sm:bg-white rounded-p-3">
    <img class="mx-auto border-2 border-blue-400 rounded-full max-w-[40px] sm:ml-2" :src="profile" />
    <div class="hidden mr-5 text-right sm:flex ">
      <div class="pl-5 font-medium">{{ name }}
        <button @click="logout" class="text-sm underline text-slate-500">
          log out
        </button>
      </div>
    </div>
  </div>
</template>
<script setup>
const user = useSupabaseUser();
const { auth } = useSupabaseClient();

const logout = async () => {
  const { error } = await auth.signOut();
  if (error) {
    console.error(error);
    return;
  }
  //this is a workaround for a bug in supabase
  try {
    await $fetch('/api/_supabase/session', {
      method: 'POST',
      body: { event: 'SIGNED_OUT', session: null },

    });
    user.value = null;
  } catch (e) {
    console.error(error);
  }
  await navigateTo('/login');
}
const name = computed(
  () => user.value?.user_metadata.full_name
);
const profile = computed(
  () => user.value?.user_metadata.avatar_url
)
</script>