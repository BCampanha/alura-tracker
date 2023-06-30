<template class="container-fluid">
  <main class="row conteudo" :class="{ 'modo-escuro': modoEscuroAtivo }">
    <div class="col-lg-3 col-md-4 col-12">
      <BarraLateral @aoTemaAlterado="trocarTema"/>
    </div>
    <div class="col px-4 tela-cheia">
      <RouterView></RouterView> <!--Aqui indicamos para o roteador onde será renderizada a aplicação-->
    </div>  
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BarraLateral from './components/BarraLateral.vue'

export default defineComponent({
  name: 'App',
  components: {
    BarraLateral
  },
  data() {
    return {
      modoEscuroAtivo: false
    }
  },
  methods: {
    trocarTema(modoEscuroAtivo: boolean) {
      this.modoEscuroAtivo = modoEscuroAtivo
    }
  }
});
</script>

<style>
main {
  --bg-primario: white;
  --bg-secundario: mistyrose;
  --bg-terciario: lightgoldenrodyellow;
  --texto-primario: black;
}
main.modo-escuro {
  --bg-primario: #16213E;
  --bg-secundario: #0F3460;
  --bg-terciario: #533483;
  --texto-primario: lavenderblush;
}
.conteudo {
  background-color: var(--bg-primario);
}
.tela-cheia {
  min-height: 100vh;
}
</style>
