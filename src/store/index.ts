import IProjeto from "@/interfaces/IProjeto";
import ITarefa from "@/interfaces/ITarefa";
import { InjectionKey } from "vue";
import { createStore, Store, useStore as vuexUseStore } from "vuex";
import { ADICIONA_PROJETO, ALTERA_PROJETO, EXCLUIR_PROJETO, ADICIONA_TAREFA, ATUALIZA_TAREFA, REMOVE_TAREFA, NOTIFICAR} from "./tipo-mutacoes";
import { INotificacao } from "@/interfaces/INotificacao";

interface Estado {
  projetos: IProjeto[],
  tarefas: ITarefa[],
  notificacoes: INotificacao[]
}

export const key: InjectionKey<Store<Estado>> = Symbol()

export const store = createStore<Estado>({
  state: {
    projetos: [],
    tarefas: [],
    notificacoes: []
  },
  mutations: {
    [ADICIONA_PROJETO](state, nomeDoProjeto: string) {
      const projeto = {
        id: new Date().toISOString(),
        nome: nomeDoProjeto
      } as IProjeto
      state.projetos.push(projeto)
    },
    [ALTERA_PROJETO](state, projeto: IProjeto) {
      const index = state.projetos.findIndex(proj => proj.id == projeto.id)
      state.projetos[index] = projeto
    },
    [EXCLUIR_PROJETO](state, id:string) {
      state.projetos = state.projetos.filter(proj => proj.id != id)
    },
    [ADICIONA_TAREFA] (state, tarefa: ITarefa) {
      tarefa.id = new Date().toISOString()
      state.tarefas.push(tarefa)
    },
    [ATUALIZA_TAREFA] (state, tarefa: ITarefa) {
      const indice = state.tarefas.findIndex(p => p.id == tarefa.id)
      state.tarefas[indice] = tarefa
    },
    [REMOVE_TAREFA] (state, id: string) {
		state.tarefas = state.tarefas.filter(p => p.id != id)
    },
    [NOTIFICAR] (state, novaNotificacao: INotificacao) {
      novaNotificacao.id = new Date().getTime()
      state.notificacoes.push(novaNotificacao)
      setTimeout(()=> {
        state.notificacoes = state.notificacoes.filter(notificacao => notificacao.id != novaNotificacao.id)
      }, 3000)
    }
  }
})

export function useStore(): Store<Estado> {
  return vuexUseStore(key)
}