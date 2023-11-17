<template>
  <div>
    <img :src="src" :alt="alt" width="100px" height="50px" />
  </div>
</template>
<script setup>
defineProps({
  src: String,
  alt: String,
  width: {
    type: String,
    default: '100px',
  },
  height: {
    type: String,
    default: '50px',
  },
})
</script>
