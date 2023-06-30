<template>
  <section class="projetos">
    <h3>Projetos</h3>
    <form class="mt-3" @submit.prevent="salvar">
        <div class="form-group">
          <label for="nomeDoProjeto">Nome do projeto</label>
          <input
            type="text"
            class="form-control"
            v-model="nomeDoProjeto"
            id="nomeDoProjeto"
            placeholder="Insira o nome do projeto"
          />
        </div>
      <div class="d-flex justify-content-end mt-3">
        <button type="submit" class="btn btn-primary">Salvar</button>
      </div>
    </form>
    <ul class="list-group list-group-flush mt-4">
      <li class="list-group-item d-flex tabela">
        <div class="col fw-semibold">
          ID
        </div>
        <div class="col fw-semibold">
          Nome
        </div>
      </li>
      <tr></tr>
      <li class="list-group-item d-flex tabela" v-for="projeto in projetos" :key="projeto.id">
        <div class="col">
          {{ projeto.id }}
        </div>
        <div class="col">
          {{ projeto.nome }}
        </div>
      </li>
    </ul>
  </section>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useStore } from '@/store'

export default defineComponent({
  name: "Projetos",
  data() {
    return {
      nomeDoProjeto: ""
    };
  },
  methods: {
    salvar() {
      this.store.commit('ADICIONA_PROJETO', this.nomeDoProjeto)
      this.nomeDoProjeto = ''
    }
  },
  setup() {
    const store = useStore()
    return { 
      store,
      projetos: computed( () => store.state.projetos)
    }
  }
})

</script>

<style scoped>
.projetos {
  padding-top: 1.25rem;
  color: var(--texto-primario);
}
.tabela {
  color: var(--texto-primario);
  background-color: var(--bg-primario);
}
</style>