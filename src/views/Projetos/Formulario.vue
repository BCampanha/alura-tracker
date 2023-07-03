<template>
  <section class="projetos">
    <h3>Projetos</h3>
    <form class="mt-3" @submit.prevent="salvar">
        <div class="form-group">
          <label for="nomeDoProjeto">Nome do projeto</label>
          <input
            type="text"
            class="form-control shadow-sm"
            v-model="nomeDoProjeto"
            id="nomeDoProjeto"
            placeholder="Insira o nome do projeto"
          />
        </div>
      <div class="d-flex justify-content-end mt-3">
        <button type="submit" class="btn botao">Salvar</button>
      </div>
    </form>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useStore } from '@/store'

export default defineComponent({
  name: "Formulario",
  data() {
    return {
      nomeDoProjeto: ""
    };
  },
  methods: {
    salvar() {
      this.store.commit('ADICIONA_PROJETO', this.nomeDoProjeto)
      this.nomeDoProjeto = '';
      this.$router.push('/projetos')
    }
  },
  setup() {
    const store = useStore()
    return { 
      store
    }
  }
})

</script>

<style scoped>
.projetos {
  margin-right: 1.5rem;
  padding: 1.5rem;
  color: var(--texto-primario);
}
.botao{
  color: var(--texto-primario);
  border-color: var(--texto-primario)
}
</style>