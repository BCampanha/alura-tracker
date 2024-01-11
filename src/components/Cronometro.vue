<template>
  <section>
    <span class="display fw-semibold text-nowrap">
      <i class="fa fa-regular fa-clock mr-2"></i> {{ tempoDecorrido }}
    </span>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Cronometro',
  props: {
    tempoEmSegundos:{
      type: Number,
      default: 0
    }
  },
  computed: {
    tempoDecorrido(): string {
      return new Date(this.tempoEmSegundos * 1000).toISOString().substr(11,8)
    }
  }
})
</script>

<style scoped>
.display {
  color: var(--texto-primario)
}
</style>