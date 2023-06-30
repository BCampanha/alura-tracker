<template>
  <!-- queremos a visualização de acordo com a URL (com a rota) -->
  <AluraFormulario @aoSalvarTarefa="salvarTarefa"/>
  <div>
    <AluraTarefa
      v-for="(tarefa, index) in tarefas"
      :key="index"
      :tarefa="tarefa"/>
      <AluraBox v-if="listaEstaVazia">
        Você ainda não adicionou uma tarefa hoje!
      </AluraBox>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AluraFormulario from "../components/Formulario.vue";
import AluraTarefa from "../components/Tarefa.vue";
import ITarefa from "../interfaces/ITarefa";
import AluraBox from "../components/Box.vue"

export default defineComponent({
  name: 'App',
  components: {
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
    }
  }
});
</script>