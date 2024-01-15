<template>
  <section>
    <RouterLink
      to="/projetos/novo"
      class="btn border">
      <span><i class="fa fa-plus"></i> Novo projeto</span>
    </RouterLink>
    <ul class="list-group list-group-flush mt-4">
      <li class="list-group-item d-flex tabela">
        <div class="col-md-2 col-3 fw-semibold">ID</div>
        <div class="col fw-semibold">Nome</div>
        <div class="col-md-3 col-sm-1 px-4 px-sm-0 fw-semibold">Ações</div>
      </li>
      <tr></tr>
      <li class="list-group-item d-flex tabela" v-for="projeto in projetos" :key="projeto.id">
        <div class="col-md-2 col-3">{{ projeto.id }}</div>
        <div class="col">{{ projeto.nome }}</div>
        <div class="col-3 d-flex flex-row justify-content-md-start justify-content-end">
          <RouterLink
            :to="`/projetos/${projeto.id}`"
            class="btn btn-primary btn-sm">
            <span><i class="fas fa-pen"></i></span>
          </RouterLink>
          <button class="mx-1 btn btn-sm btn-danger" @click="excluir(projeto.id)">
            <span><i class="fas fa-trash"></i></span>
          </button>
        </div>
      </li>
    </ul>
  </section>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useStore } from '@/store';
import { OBTER_PROJETOS, REMOVER_PROJETO } from '@/store/tipo-acoes';
import { EXCLUIR_PROJETO } from '@/store/tipo-mutacoes';

export default defineComponent({
  name: "Lista",
  methods: {
    excluir(id: string) {
      this.store.dispatch(REMOVER_PROJETO, id)
      .then(() => this.store.commit(EXCLUIR_PROJETO, id))
    }
  },
  setup() {
    const store = useStore()
    store.dispatch(OBTER_PROJETOS)

    return { 
      projetos: computed( () => store.state.projeto.projetos),
      store
    }
  }
})

</script>

<style scoped>
.tabela {
  color: var(--texto-primario);
  background-color: var(--bg-primario);
}
li {
  padding-left: 0;
  padding-right: 0
}
</style>