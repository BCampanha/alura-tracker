<template>
  <Box>
    <div class="row">
      <div class="col">
        <small class="texto-muted">{{ tarefa.projeto?.nome || 'N/D' }}</small>
      </div>
    </div>
    <div class="row ">
      <div class="col-7 d-flex" v-if="tarefaSelecionada">
        <div class="input-group">
          <input type="text" class="form-control" v-model="tarefaSelecionada.descricao">
          <div class="input-group-append">
            <button class="btn btn-primary rounded-0" type="button" @click="salvarInput"><i class="fa fa-save"/></button>
            <button class="btn btn-danger rounded-end" type="button" @click="fecharInput"><i class="fa fa-times"/></button>
          </div>
        </div>
      </div>
      <div class="col-7 clicavel" v-else @click="mostrarInput">
        {{ tarefa.descricao || 'Tarefa sem descrição'}}
      </div>
      <div class="col">
        <Cronometro :tempoEmSegundos="tarefa.duracaoEmSegundos"/>
      </div>
    </div>
  </Box>
</template>

<script lang="ts">

import { defineComponent, PropType, ref } from 'vue';
import Cronometro from './Cronometro.vue';
import ITarefa from '../interfaces/ITarefa';
import Box from './Box.vue';

export default defineComponent({
  name: 'Tarefa',
  emits: ['alterar-tarefa'],
  components: {
    Cronometro,
    Box
  },
  props: {
    tarefa: {
      type: Object as PropType<ITarefa>,
      required: true
    }
  },
  setup(props, { emit }) {
    const tarefaSelecionada = ref(null as ITarefa | null)

    const mostrarInput = () => {
      tarefaSelecionada.value =
      { id: props.tarefa.id,
        duracaoEmSegundos: props.tarefa.duracaoEmSegundos,
        descricao: props.tarefa.descricao,
        projeto: props.tarefa.projeto
      }
    }

    const salvarInput = () => {
      emit('alterar-tarefa', tarefaSelecionada.value)
      tarefaSelecionada.value = null
    }

    const fecharInput = () => {
      tarefaSelecionada.value = null
    }
    
    return {
      tarefaSelecionada,
      mostrarInput,
      salvarInput,
      fecharInput
    }
  }
})

</script>

<style scoped>
.texto-muted{
  color: var(--texto-secundario)
}
.clicavel{
  cursor: pointer;
}
.rounded-end{
  border-radius: 0px 0px 0px 0px;
}
</style>
