<template>
  <!-- queremos a visualização de acordo com a URL (com a rota) -->
  <Formulario @aoSalvarTarefa="salvarTarefa"/>
  <div>
    <div class="input-group mb-3">
      <span class="input-group-text"><i class="fas fa-search"></i></span>
      <div class="form-floating">
        <input type="text" class="form-control" id="floatingInputGroup1" placeholder="Digite para filtrar" v-model="filtro">
        <label for="floatingInputGroup1" class="text-muted">Digite para filtrar</label>
      </div>
    </div>
    <Box v-if="listaEstaVazia">
      Você ainda não adicionou uma tarefa hoje!
    </Box>
    <Tarefa
      v-for="(tarefa, index) in tarefas"
      :key="index"
      :tarefa="tarefa"
      @alterarTarefa="alterarTarefa"/>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue';
import Formulario from "../components/Formulario.vue";
import Tarefa from "../components/Tarefa.vue";
import Box from "../components/Box.vue"
import { useStore } from '@/store';
import { ALTERAR_TAREFA, CADASTRAR_TAREFA, OBTER_PROJETOS, OBTER_TAREFAS } from '@/store/tipo-acoes';
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
      return this.tarefas?.length == 0
    }
  },
  methods: {
    salvarTarefa (tarefa: ITarefa) : void {
      this.store.dispatch(CADASTRAR_TAREFA, tarefa)
      },
    alterarTarefa (tarefaSelecionada: ITarefa) : void {
      this.store.dispatch(ALTERAR_TAREFA, tarefaSelecionada)
    }
  },
  setup() {
    const store = useStore()
    store.dispatch(OBTER_TAREFAS)
    store.dispatch(OBTER_PROJETOS)

    const filtro = ref('')

    const tarefas = computed( () => store.state.tarefa.tarefas.filter(
      (t) => !filtro.value || t.descricao.includes(filtro.value)
      )
    )

    return { 
      tarefas,
      store,
      filtro
    }
  }
});
</script>