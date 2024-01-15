<template>
  <div class="card shadow">
    <div class="card-body formulario px-4">
      <form>
        <div class="row align-items-center">
          <div class="col-xl-5 col-lg-6">
            <input
              type="text"
              class="form-control"
              placeholder="Qual tarefa você deseja iniciar?"
              v-model="descricao"
            />
          </div>
          <div class="col-xl col-lg-6 my-3">
            <select class="custom-select form-control" v-model="idProjeto">
              <option value="">Selecione o projeto</option>
              <option
                :value="projeto.id"
                v-for="projeto in projetos"
                :key="projeto.id">
                {{ projeto.nome }}
              </option>
            </select>
          </div>
          <div class="col-xl">
            <Temporizador @aoTemporizadorFinalizado="finalizarTarefa"/>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import Temporizador from './Temporizador.vue';
import { useStore } from 'vuex';
import { key } from '@/store'

export default defineComponent({
  name: 'Formulario',
  emits: ['aoSalvarTarefa'],
  components: {
    Temporizador
  },
  data() {
    return {
      descricao: '',
      idProjeto: ''
    }
  },
  methods: {
    finalizarTarefa(tempoDecorrido: number): void {
      this.$emit('aoSalvarTarefa', {
        duracaoEmSegundos: tempoDecorrido,
        descricao: this.descricao,
        projeto: this.projetos.find(proj => proj.id == this.idProjeto)
      })
      this.descricao = ''
    }
  },
  setup() {
    const store = useStore(key)
    return {
      projetos: computed(() => store.state.projeto.projetos)
    }
  }
})
</script>

<style>
.formulario {
  color: var(--texto-primario);
  background-color: var(--bg-primario);
}
.card {
  border: 0;
}
</style>