<template>
  <AluraBox>
    <div class="row">
      <div class="col-7">
        {{ tarefa.descricao || 'Tarefa sem descrição'}}
      </div>
      <div class="col">
        <Cronometro :tempoEmSegundos="tarefa.duracaoEmSegundos"/>
      </div>
    </div>
  </AluraBox>
</template>

<script lang="ts">

import { defineComponent, PropType } from 'vue';
import Cronometro from './Cronometro.vue';
import ITarefa from '../interfaces/ITarefa';
import AluraBox from './Box.vue';

export default defineComponent({
  name: 'AluraTarefa',
  components: {
    Cronometro,
    AluraBox
  },
  props: {
    tarefa: {
      type: Object as PropType<ITarefa>,
      required: true
    }
  }
})

</script>
