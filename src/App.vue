<template class="container-fluid">
  <main class="row conteudo" :class="{ 'modo-escuro': modoEscuroAtivo }">
    <div class="col-lg-3 col-md-4 col-12">
      <BarraLateral @aoTemaAlterado="trocarTema"/>
    </div>
    <div class="col px-4 teste">
      <AluraFormulario @aoSalvarTarefa="salvarTarefa"/>
      <!-- Lista de Tarefas -->
      <div>
        <AluraTarefa
          v-for="(tarefa, index) in tarefas"
          :key="index"
          :tarefa="tarefa"/>
          <AluraBox v-if="listaEstaVazia">
            Você ainda não adicionou uma tarefa hoje!
          </AluraBox>
      </div>
    </div>  
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BarraLateral from './components/BarraLateral.vue';
import AluraFormulario from './components/Formulario.vue';
import AluraTarefa from './components/Tarefa.vue';
import ITarefa from './interfaces/ITarefa';
import AluraBox from './components/Box.vue'

export default defineComponent({
  name: 'App',
  components: {
    BarraLateral,
    AluraFormulario,
    AluraTarefa,
    AluraBox
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
    },
    trocarTema(modoEscuroAtivo: boolean) {
      this.modoEscuroAtivo = modoEscuroAtivo
    }
  }
});
</script>

<style>
main {
  --bg-primario: white;
  --bg-secundario: mistyrose;
  --bg-terciario: lightgoldenrodyellow;
  --texto-primario: black;
}
main.modo-escuro {
  --bg-primario: black;
  --bg-secundario: rgb(36, 36, 36);
  --bg-terciario: indigo;
  --texto-primario: lavenderblush;
}
.conteudo {
  background-color: var(--bg-primario);
}
.teste {
  min-height: 100vh;
}
</style>
