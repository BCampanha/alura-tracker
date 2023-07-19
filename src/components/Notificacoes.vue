<template>
 <div class="notificacoes">
  <div
    class="alert"
    :class="contexto[notificacao.tipo]"
    role="alert"
    v-for="notificacao in notificacoes"
    :key="notificacao.id">
    <strong> {{ notificacao.titulo + " " }} </strong>
    <span> {{ " " + notificacao.texto }} </span>
  </div>
 </div>
</template>

<script lang="ts">
import { TipoNotificacao } from '@/interfaces/INotificacao';
import { useStore } from '@/store';
import { computed, defineComponent } from 'vue';

export default defineComponent({
    name: 'Notificacoes',
    data () {
      return {
        contexto: {
          [TipoNotificacao.SUCESSO]: 'alert-success',
          [TipoNotificacao.ATENCAO]: 'alert-warning',
          [TipoNotificacao.FALHA]: 'alert-danger',
        }
      }
    },
    setup () {
      const store = useStore()
      return {
        notificacoes: computed(() => store.state.notificacoes)
      }
    }
})
</script>

<style scoped>
  @media (min-width: 768px) {
    .notificacoes {
      position: absolute;
      top: 30%;
      right: 0;
      max-width: 25vw;
      z-index: 1070;
    }
  }
  @media (max-width: 768px) {
    .notificacoes {
      position: fixed;
      bottom: 5%;
      right: 5%;
      z-index: 1070;
      max-width: 70vw;
    }
  }
  .alert{
    color: var(--texto-primario);
    border-width: 0;
    margin: 0.2rem;
  }
  .alert-success{
    background-color: var(--notif-sucesso);
  }
  .alert-warning{
    background-color: var(--notif-atencao);
  }
  .alert-danger{
    background-color: var(--notif-falha);
  }
</style>