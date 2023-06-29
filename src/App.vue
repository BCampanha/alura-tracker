<template>
  <main class="columns is-gapless is-multiline">
    <div class="column is-one-quarter">
      <BarraLateral />
    </div>
    <div class="column is-three-quarter conteudo">
      <AluraFormulario @aoSalvarTarefa="salvarTarefa"/>
      <!-- Lista de Tarefas -->
      <div class="lista">
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
      tarefas: [] as ITarefa[]
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
    }
  }
});
</script>

<style>
.lista {
  padding: 1.25rem;
}
main {
  --bg-primario: white;
  --bg-secundario: mistyrose;
  --bg-terciario: lightgoldenrodyellow;
  --texto-primario: black;
}
main.modo-escuro {
  --bg-primario: black;
  --bg-secundario: indigo;
  --bg-terciario: midnightblue;
  --texto-primario: lavenderblush;
}
.conteudo {
  background-color: var(--bg-primario);
}
</style>
