<template>
  <div class="d-flex align-items-center flex-row justify-content-around my-3">
    <div class="px-2">
      <AluraCronometro :tempoEmSegundos="tempoEmSegundos" />
    </div>
    <div class="pr-2">
      <button type="button"
        class="btn btn-outline-dark d-flex flex-row align-items-center botao"
        @click="iniciar"
        :disabled="cronometroRodando"
      >
        <em class="fas fa-play px-1"></em>
        <span>play</span>
      </button>
    </div>
    <div class="pr-2">
      <button type="button"
      class="btn btn-outline-dark d-flex flex-row align-items-center botao"
      @click="finalizar"
      :disabled="!cronometroRodando"
      >
        <em class="fas fa-stop px-1"></em>
        <span>stop</span>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AluraCronometro from './Cronometro.vue';

export default defineComponent({
  name: 'AluraTemporizador',
  emits: ['aoTemporizadorFinalizado'],
  components: {
    AluraCronometro
  },
  data() {
    return {
      tempoEmSegundos: 0,
      cronometro: 0,
      cronometroRodando: false
    }
  },
  methods: {
    iniciar() {
      // começar a contagem
      // 1s = 1000ms
      this.cronometroRodando = true
      this.cronometro = setInterval( () => {
        this.tempoEmSegundos += 1
      }, 1000)
    },
    finalizar() {
      this.cronometroRodando = false
      clearInterval(this.cronometro)
      this.$emit('aoTemporizadorFinalizado', this.tempoEmSegundos)
      this.tempoEmSegundos = 0
    }
  }
})
</script>

<style scoped>
.botao{
  color: var(--texto-primario);
  background-color: var(--bg-primario)
}
</style>