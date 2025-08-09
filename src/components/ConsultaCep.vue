<template>
  <div class="consulta-cep">
    <h1>Consulta de CEP</h1>

    <div class="flex input">
      <input v-model="cepDigitado" placeholder="Digite o CEP" @keyup.enter="buscar"/>
      <button @click="buscar">Buscar</button>
    </div>

    <p v-if="carregando">Carregando...</p>
    <p v-if="erro" class="erro">{{ erro }}</p>

    <div class="flex response" v-if="endereco.logradouro">

      <div>
        <h2>Endereço:</h2>
        <p><strong>Logradouro:</strong> {{ endereco.logradouro }}</p>
        <p><strong>Bairro:</strong> {{ endereco.bairro }}</p>
        <p><strong>Cidade:</strong> {{ endereco.localidade }}</p>
        <p><strong>UF:</strong> {{ endereco.uf }}</p>
      </div>

      <iframe
        v-if="endereco.mapa"
        :src="endereco.mapa"
        width="40%"
        height="300"
        style="border:0;"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade">
      </iframe>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'ConsultaCep',
  data() {
    return {
      cepDigitado: ''
    }
  },
  computed: {
    ...mapState(['cep', 'endereco', 'erro', 'carregando'])
  },
  methods: {
    ...mapActions(['buscarCep']),
    buscar() {
      const cep = this.cepDigitado.replace(/\D/g, '')
      if (cep.length === 8) {
        this.buscarCep(cep)
      } else {
        this.$store.commit('setErro', 'CEP inválido. Deve conter 8 dígitos.')
      }
    }
  }
}
</script>

<style scoped>

.consulta-cep {
  text-align: center;
}

.input {
  justify-content: center;
  gap: 1rem;
}

input {
  width: 20%;
  padding: 8px;
  border-radius: 5px;
  background: lightgray;
  border: none;
}

.response {
  justify-content: space-evenly;
  text-align: center;
  margin-top: 2rem;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.response > div {
  gap: 1rem;
  display: flex;
  flex-direction: column;
}

button {
  padding: 8px 16px;
  border-radius: 5px;
  background-color: #333333;
  color: white;
  border: unset;
  cursor: pointer;
}

button:hover {
  transition: .2s;
  background-color: white;
  color: #333333;
  border: 1px solid black;
}

.erro {
  color: red;
  margin-top: 1rem;
}
</style>
