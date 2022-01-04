<template>
  <div>
    <h1 class="text-7xl font-bold">Uh-Oh !</h1>
    <h3 class="text-lg">
      It looks like you're experiencing some network issues
    </h3>
    <router-link :to="{ name: 'event-list' }" class="underline text-green-400"
      >Go back to home page</router-link
    >
  </div>
</template>
