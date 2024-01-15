<template>
  <Box>
    <div class="row">
      <div class="col">
        <small class="texto-muted">{{ tarefa.projeto?.nome || 'N/D' }}</small>
      </div>
    </div>
    <div class="row ">
      <div class="col-7 d-flex" v-if="tarefaSelecionada">
        <input type="text" class="form-control mx-1" v-model="tarefaSelecionada.descricao">
        <button class="btn btn-primary mx-1" @click="salvarInput"><i class="fa fa-save"/></button>
        <button class="btn btn-danger mx-1" @click="fecharInput"><i class="fa fa-times"/></button>
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

import { defineComponent, PropType } from 'vue';
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
  data() {
    return {
      inputAtivo: false,
      tarefaSelecionada: null as ITarefa | null
    }
  },
  props: {
    tarefa: {
      type: Object as PropType<ITarefa>,
      required: true
    }
  },
  methods: {
    mostrarInput() {
      this.tarefaSelecionada =
      { id: this.tarefa.id,
        duracaoEmSegundos: this.tarefa.duracaoEmSegundos,
        descricao: this.tarefa.descricao,
        projeto: this.tarefa.projeto
      }
    },
    salvarInput() {
      this.$emit('alterar-tarefa', this.tarefaSelecionada)
      this.tarefaSelecionada = null
    },
    fecharInput() {
      this.tarefaSelecionada = null
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
</style>
