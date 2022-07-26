<script setup>
const props = defineProps(['text'])
</script>

<template>
<div class="w-80 container p-2">
  <h2>{{ props.text }}</h2>
</div>
</template>