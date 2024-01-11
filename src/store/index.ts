import IProjeto from "@/interfaces/IProjeto";
import ITarefa from "@/interfaces/ITarefa";
import { InjectionKey } from "vue";
import { createStore, Store, useStore as vuexUseStore } from "vuex";
import { ADICIONA_PROJETO, ALTERA_PROJETO, EXCLUIR_PROJETO, ADICIONA_TAREFA, ATUALIZA_TAREFA, REMOVE_TAREFA, NOTIFICAR} from "./tipo-mutacoes";
import { INotificacao } from "@/interfaces/INotificacao";
import { OBTER_PROJETOS } from "./tipo-acoes";
import http from "@/http"

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
    [ADICIONA_PROJETO](state: { projetos: IProjeto[]; }, nomeDoProjeto: string) {
      const projeto = {
        id: new Date().toISOString(),
        nome: nomeDoProjeto
      } as IProjeto
      state.projetos.push(projeto)
    },
    [ALTERA_PROJETO](state: { projetos: any[]; }, projeto: IProjeto) {
      const index = state.projetos.findIndex((proj: { id: string; }) => proj.id == projeto.id)
      state.projetos[index] = projeto
    },
    [EXCLUIR_PROJETO](state: { projetos: any[]; }, id:string) {
      state.projetos = state.projetos.filter((proj: { id: string; }) => proj.id != id)
    },
    [ADICIONA_TAREFA] (state: { tarefas: ITarefa[]; }, tarefa: ITarefa) {
      tarefa.id = new Date().toISOString()
      state.tarefas.push(tarefa)
    },
    [ATUALIZA_TAREFA] (state: { tarefas: any[]; }, tarefa: ITarefa) {
      const indice = state.tarefas.findIndex((p: { id: string; }) => p.id == tarefa.id)
      state.tarefas[indice] = tarefa
    },
    [REMOVE_TAREFA] (state: { tarefas: any[]; }, id: string) {
		state.tarefas = state.tarefas.filter((p: { id: string; }) => p.id != id)
    },
    [NOTIFICAR] (state: { notificacoes: INotificacao[]; }, novaNotificacao: INotificacao) {
      novaNotificacao.id = new Date().getTime()
      state.notificacoes.push(novaNotificacao)
      setTimeout(()=> {
        state.notificacoes = state.notificacoes.filter((notificacao: { id: number; }) => notificacao.id != novaNotificacao.id)
      }, 3000)
    }
  },
  actions: {
    [OBTER_PROJETOS] ({ commit }) {
      http.get('projetos')
        .then(resposta => console.log(resposta.data))
    }
  }
})

export function useStore(): Store<Estado> {
  return vuexUseStore(key)
}