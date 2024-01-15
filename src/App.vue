<template>
  <main class="container-fluid" :class="{ 'modo-escuro': modoEscuroAtivo }">
    <div  class="row conteudo" >
    <section class="col-lg-3 col-md-4 px-0 col-12">
      <BarraLateral @aoTemaAlterado="trocarTema"/>
    </section>
    <section class="col tela-cheia px-0">
      <Notificacoes/>
      <RouterView></RouterView> <!--Aqui indicamos para o roteador onde será renderizada a aplicação-->
    </section>  
  </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BarraLateral from './components/BarraLateral.vue';
import Notificacoes from './components/Notificacoes.vue';

export default defineComponent({
  name: 'App',
  components: {
    BarraLateral,
    Notificacoes
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
  --texto-secundario: gray;
  --notif-sucesso: rgb(173, 233, 173);
  --notif-atencao: khaki;
  --notif-falha: lightsalmon;
}
main.modo-escuro {
  --bg-primario: #16213E;
  --bg-secundario: #0F3460;
  --bg-terciario: #533483;
  --texto-primario: lavenderblush;
  --texto-secundario: lightgray;
  --notif-sucesso: seagreen;
  --notif-atencao: goldenrod;
  --notif-falha: brown;
}
.conteudo {
  background-color: var(--bg-primario);
}
.tela-cheia {
  min-height: 100vh;
}
.btn-primary {
  color: var(--texto-primario);
  background-color: var(--notif-sucesso);
  border-color: var(--notif-sucesso);
}
.btn-danger {
  color: var(--texto-primario);
  background-color: var(--notif-falha);
  border-color: var(--notif-falha);
}
</style>
