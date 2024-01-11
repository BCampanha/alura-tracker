<template>
  <header class="barra-lateral">
    <h1>
      <img class="img-fluid" src="../assets/logo.png" alt="Logo da Alura Tracker">
    </h1>
    <div class="d-flex justify-content-center">
      <button type="button" class="btn botao p-2" @click="alterarTema">
        {{ textBotao }}
      </button>
    </div>
    <nav>
      <ul class="nav flex-column nav-pills">
        <li class="nav-item mt-2 d-flex">
          <RouterLink to="/" class="nav-link link">
            <i class="fas fa-bars"></i>
            Tarefas
          </RouterLink>
        </li>
        <li class="nav-item mt-2 d-flex">
          <RouterLink to="/projetos" class="nav-link link">
            <i class="fa fa-home"></i>
            Projetos
          </RouterLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BarraLateral',
  emits: ['aoTemaAlterado'],
  data() {
    return{
      modoEscuroAtivo: false
    }
  },
  computed: {
    textBotao() {
      if (this.modoEscuroAtivo) {
        return 'Desativar modo escuro'
      }
      return 'Ativar modo escuro'
    }
  },
  methods: {
    alterarTema(){
      this.modoEscuroAtivo = !this.modoEscuroAtivo
      this.$emit('aoTemaAlterado', this.modoEscuroAtivo)
    }
  }
})
</script>

<style scoped>
header {
  width: 100%;
  height: 100vh;
  text-align: center;
}
@media only screen and (max-width: 768px){
  header {
    padding: 2.5rem;
    height: auto
  }
}
.barra-lateral {
  background-color: var(--bg-secundario);
  padding: 1rem
}
.botao{
  color: var(--texto-primario);
  background-color: var(--bg-primario)
}
.link{
  color: var(--texto-primario)
}
</style>