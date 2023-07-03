<template>
  <div class="projetos">
    <h3>Projetos</h3>
    <RouterView></RouterView>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Projetos'
})
</script>

<style scoped>
.projetos {
  padding: 1.5rem;
  color: var(--texto-primario);
}
</style>