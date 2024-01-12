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
import { computed, defineComponent } from 'vue';
import Formulario from "../components/Formulario.vue";
import Tarefa from "../components/Tarefa.vue";
import Box from "../components/Box.vue"
import { useStore } from '@/store';
import { CADASTRAR_TAREFA, OBTER_TAREFAS } from '@/store/tipo-acoes';
import ITarefa from '@/interfaces/ITarefa';

export default defineComponent({
  name: 'App',
  components: {
    Formulario,
    Tarefa,
    Box
  },
  data() {
    return {
      modoEscuroAtivo: false
    }
  },
  computed: {
    listaEstaVazia(): boolean {
      return this.tarefas.length == 0
    }
  },
  methods: {
    salvarTarefa (tarefa: ITarefa) : void {
      this.store.dispatch(CADASTRAR_TAREFA, tarefa)
      }
    },
  setup() {
    const store = useStore()
    store.dispatch(OBTER_TAREFAS)

    return { 
      tarefas: computed( () => store.state.tarefas),
      store
    }
  }
});
</script>