<template>
  <section>
    <RouterLink
      to="/projetos/novo"
      class="btn botao">
      <span><i class="fa fa-plus"></i> Novo projeto</span>
    </RouterLink>
    <ul class="list-group list-group-flush mt-4">
      <li class="list-group-item d-flex tabela">
        <div class="col fw-semibold">ID</div>
        <div class="col fw-semibold">Nome</div>
        <div class="col-1 fw-semibold">Ações</div>
      </li>
      <tr></tr>
      <li class="list-group-item d-flex tabela" v-for="projeto in projetos" :key="projeto.id">
        <div class="col">{{ projeto.id }}</div>
        <div class="col">{{ projeto.nome }}</div>
        <div class="col-1">
          <RouterLink
            :to="`/projetos/${projeto.id}`"
            class="btn btn-sm botao">
            <span><i class="fas fa-pencil-alt"></i></span>
          </RouterLink>
        </div>
      </li>
    </ul>
  </section>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useStore } from '@/store'

export default defineComponent({
  name: "Lista",
  setup() {
    const store = useStore()
    return { 
      projetos: computed( () => store.state.projetos)
    }
  }
})

</script>

<style scoped>
.tabela {
  color: var(--texto-primario);
  background-color: var(--bg-primario);
}
.botao{
  color: var(--texto-primario);
  border-color: var(--texto-primario)
}
</style>