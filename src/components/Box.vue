<template>
  <div class="card shadow border-0 my-4 mx-4">
    <div class="card-body fw-semibold container-fluid">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">

import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Box'
})
</script>

<style scoped>
.card {
  color: var(--texto-primario);
  background-color: var(--bg-terciario);
}
</style>