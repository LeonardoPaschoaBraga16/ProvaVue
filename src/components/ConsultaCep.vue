<!-- src/components/ConsultaCep.vue -->
<template>
  <div>
    <h1>Consulta de CEP</h1>
    <input v-model="cep" placeholder="Digite o CEP" maxlength="8" />
    <button @click="buscarCep">Buscar</button>

    <div v-if="carregando">Carregando...</div>
    <div v-else-if="erro" style="color:red;">{{ erro }}</div>
    <div v-else-if="endereco.cep">
      <p><strong>CEP:</strong> {{ endereco.cep }}</p>
      <p><strong>Logradouro:</strong> {{ endereco.logradouro }}</p>
      <p><strong>Complemento:</strong> {{ endereco.complemento }}</p>
      <p><strong>Unidade:</strong> {{ endereco.unidade }}</p>
      <p><strong>Bairro:</strong> {{ endereco.bairro }}</p>
      <p><strong>Cidade:</strong> {{ endereco.localidade }}</p>
      <p><strong>UF:</strong> {{ endereco.uf }}</p>
      <p><strong>Estado:</strong> {{ endereco.estado }}</p>
      <p><strong>Regiao:</strong> {{ endereco.regiao }}</p>
      <p><strong>IBGE:</strong> {{ endereco.ibge }}</p>
      <p><strong>GIA:</strong> {{ endereco.gia }}</p>
      <p><strong>DDD:</strong> {{ endereco.ddd }}</p>
      <p><strong>SIAFI:</strong> {{ endereco.siafi }}</p>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data() {
    return {
      cep: ''
    }
  },
  computed: {
    ...mapState(['endereco', 'erro', 'carregando'])
  },
  methods: {
    buscarCep() {
      if (this.cep.length === 8) {
        this.$store.dispatch('buscarCep', this.cep)
      } else {
        alert('CEP deve conter 8 números.')
      }
    }
  }
}
</script>
