<template>
  <Box>
    <div class="row">
      <div class="col">
        <small class="texto-muted">{{ tarefa.projeto?.nome || 'N/D' }}</small>
      </div>
    </div>
    <div class="row">
      <div class="col-7">
        {{ tarefa.descricao || 'Tarefa sem descrição'}}
      </div>
      <div class="col">
        <Cronometro :tempoEmSegundos="tarefa.duracaoEmSegundos"/>
      </div>
    </div>
  </Box>
</template>

<script lang="ts">

import { defineComponent, PropType } from 'vue';
import Cronometro from './Cronometro.vue';
import ITarefa from '../interfaces/ITarefa';
import Box from './Box.vue';

export default defineComponent({
  name: 'Tarefa',
  components: {
    Cronometro,
    Box
  },
  props: {
    tarefa: {
      type: Object as PropType<ITarefa>,
      required: true
    }
  }
})

</script>

<style scoped>
.texto-muted{
  color: var(--texto-secundario)
}
</style>
