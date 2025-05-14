// src/store/index.js
import Vuex from 'vuex'
import axios from 'axios'

export default new Vuex.Store({
  state: {
    cep: '',
    endereco: {},
    erro: null,
    carregando: false
  },
  mutations: {
    setCep(state, cep) {
      state.cep = cep
    },
    setEndereco(state, dados) {
      state.endereco = dados
    },
    setErro(state, erro) {
      state.erro = erro
    },
    setCarregando(state, status) {
      state.carregando = status
    }
  },
  actions: {
    async buscarCep({ commit }, cep) {
      commit('setErro', null)
      commit('setCarregando', true)
      commit('setCep', cep)

      try {
        const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
        if (response.data.erro) {
          commit('setErro', 'CEP não encontrado')
          commit('setEndereco', {})
        } else {
          commit('setEndereco', response.data)
        }
      } catch {
        commit('setErro', 'Erro ao consultar API')
      } finally {
        commit('setCarregando', false)
      }
    }
  }
})
