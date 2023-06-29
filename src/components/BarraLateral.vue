<template>
  <header class="barra-lateral">
    <h1>
      <img class="img-fluid" src="../assets/logo.png" alt="Logo da Alura Tracker">
    </h1>
    <button type="button" class="btn botao p-2" @click="alterarTema">
      {{ textBotao }}
    </button>
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
  padding: 1rem;
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
  background-color: var(--bg-secundario)
}
.botao{
  color: var(--texto-primario);
  background-color: var(--bg-primario)
}
</style>