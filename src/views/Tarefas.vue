<template>
  <!-- queremos a visualização de acordo com a URL (com a rota) -->
  <Formulario @aoSalvarTarefa="salvarTarefa"/>
  <div>
    <Tarefa
      v-for="(tarefa, index) in tarefas"
      :key="index"
      :tarefa="tarefa"/>
      <Box v-if="listaEstaVazia">
        Você ainda não adicionou uma tarefa hoje!
      </Box>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Formulario from "../components/Formulario.vue";
import Tarefa from "../components/Tarefa.vue";
import ITarefa from "../interfaces/ITarefa";
import Box from "../components/Box.vue"
import { useStore } from '@/store';
import { ADICIONA_TAREFA } from '@/store/tipo-mutacoes';

export default defineComponent({
  name: 'App',
  components: {
    Formulario,
    Tarefa,
    Box
  },
  data() {
    return {
      tarefas: [] as ITarefa[],
      modoEscuroAtivo: false
    }
  },
  computed: {
    listaEstaVazia(): boolean {
      return this.tarefas.length === 0
    }
  },
  methods: {
    salvarTarefa (tarefa: ITarefa) {
      this.tarefas.push(tarefa)
      this.store.commit(ADICIONA_TAREFA, tarefa)
      }
    },
  setup() {
    const store = useStore()
    return {
      store
    }
  }
});
</script>