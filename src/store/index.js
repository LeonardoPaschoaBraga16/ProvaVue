import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
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
          const enderecoTexto = `${response.data.logradouro}, ${response.data.bairro}, ${response.data.localidade} - ${response.data.uf}`
          const enderecoMapa = `https://www.google.com/maps/embed/v1/place?key=AIzaSyAaassyxFFmwrQ44aQOxOjEgmKxxWlJexg&q=${encodeURIComponent(enderecoTexto)}`
          commit('setEndereco', {
            ...response.data,
            mapa: enderecoMapa
          })
        }
      } catch {
        commit('setErro', 'Erro ao consultar API')
      } finally {
        commit('setCarregando', false)
      }
    }
  }
})
