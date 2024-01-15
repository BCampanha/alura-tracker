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
import { defineComponent, ref } from 'vue';
import { useStore } from '@/store';
import { TipoNotificacao } from '@/interfaces/INotificacao';
import useNotificador from '@/hooks/notificador'
import { ALTERAR_PROJETO, CADASTRAR_PROJETO } from '@/store/tipo-acoes';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: "Formulario",
  props: {
    id: {
      type: String
    }
  },
  setup(props) {
    const router = useRouter()

    const store = useStore()
    const { notificar } = useNotificador()

    const nomeDoProjeto = ref("")

    if(props.id) {
      const projeto = store.state.projeto.projetos.find(proj => proj.id == props.id)
      nomeDoProjeto.value = projeto?.nome ?? ''
    }

    const lidarComSucesso = () => {
      nomeDoProjeto.value = '';
      notificar(TipoNotificacao.SUCESSO, 'Excelente!', 'O projeto foi cadastrado com sucesso!')
      router.push('/projetos')
    }

    const salvar = () => {
      if (props.id) {
        // EDIÇÃO
        store.dispatch(ALTERAR_PROJETO, {
          id: props.id,
          nome: nomeDoProjeto.value
        }).then(() => lidarComSucesso());
      } else {
        // Novo projeto
        store.dispatch(CADASTRAR_PROJETO, nomeDoProjeto.value)
          .then(() => lidarComSucesso());
      }
    }

    return { 
      nomeDoProjeto,
      salvar
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