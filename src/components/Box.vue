<template>
  <div class="card shadow">
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
  border: 0;
  margin: 1rem;
  color: var(--texto-primario);
  background-color: var(--bg-terciario);
}
</style>