<template>
  <div class="card border-0 my-3">
    <div class="card-body fw-semibold container-fluid">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">

import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AluraBox'
})
</script>

<style scoped>
.card {
  color: var(--texto-primario);
  background-color: var(--bg-terciario);
}
</style>