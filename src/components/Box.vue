<template>
  <div class="box has-text-weight-bold">
    <slot></slot>
  </div>
</template>

<script lang="ts">

import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AluraBox'
})
</script>

<style scoped>
.box {
  color: var(--texto-primario);
  background-color: var(--bg-terciario);
}
</style>