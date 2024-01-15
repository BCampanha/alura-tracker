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
import { defineComponent, computed, ref } from 'vue';
import Temporizador from './Temporizador.vue';
import { useStore } from 'vuex';
import { key } from '@/store'

export default defineComponent({
  name: 'Formulario',
  emits: ['aoSalvarTarefa'],
  components: {
    Temporizador
  },
  setup(props, { emit }) {
    const store = useStore(key)

    const descricao = ref("")
    const idProjeto = ref("")
    const projetos = computed(() => store.state.projeto.projetos)

    const finalizarTarefa = (tempoDecorrido: number): void => {
      emit('aoSalvarTarefa', {
        duracaoEmSegundos: tempoDecorrido,
        descricao: descricao.value,
        projeto: projetos.value.find(proj => proj.id == idProjeto.value)
      })
      descricao.value = ''
    }

    return {
      descricao,
      idProjeto,
      projetos,
      finalizarTarefa
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