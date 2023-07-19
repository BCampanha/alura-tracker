<template>
  <section>
    <form class="mt-3" @submit.prevent="salvar">
        <div class="form-group">
          <label for="nomeDoProjeto">Nome do projeto</label>
          <input
            type="text"
            class="form-control shadow-sm mt-1"
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
import { useStore } from '@/store';
import { ALTERA_PROJETO, ADICIONA_PROJETO } from "@/store/tipo-mutacoes";
import { TipoNotificacao } from '@/interfaces/INotificacao';
import useNotificador from '@/hooks/notificador'

export default defineComponent({
  name: "Formulario",
  props: {
    id: {
      type: String
    }
  },
  mounted() {
    if(this.id) {
      const projeto = this.store.state.projetos.find(proj => proj.id == this.id)
      this.nomeDoProjeto = projeto?.nome || ''
    }
  },
  data() {
    return {
      nomeDoProjeto: ""
    };
  },
  methods: {
    salvar() {
      if (this.id) {
        // EDIÇÃO
        this.store.commit(ALTERA_PROJETO, {
          id: this.id,
          nome: this.nomeDoProjeto
        })
      } else {
        // Novo projeto
        this.store.commit(ADICIONA_PROJETO, this.nomeDoProjeto)
      }
      this.nomeDoProjeto = '';
      this.notificar(TipoNotificacao.SUCESSO, 'Excelente!', 'O projeto foi cadastrado com sucesso!')
      this.$router.push('/projetos')
    }
  },
  setup() {
    const store = useStore()
    const { notificar } = useNotificador()
    return { 
      store,
      notificar
    }
  }
})

</script>

<style scoped>
.botao{
  color: var(--texto-primario);
  border-color: var(--texto-primario)
}
</style>