<template>
  <div class="header">
    <h1 class="header-text">Trivia</h1>
    <div class="header-btn">
      <button>
        <font-awesome-icon class="fa-xl" icon="fa-solid fa-bars" />
      </button>
    </div>
  </div>
</template>

<style scoped>
.header {
  @apply flex w-screen h-auto py-3 px-6 bg-sky-400 text-zinc-800;
}

.header-text {
  @apply text-xl font-semibold;
}

.header-btn {
  @apply absolute h-auto right-6;
}
</style>