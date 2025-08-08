<template>
  <div class="consulta-cep">
    <h1>Consulta de CEP</h1>

    <input
      v-model="cepDigitado"
      placeholder="Digite o CEP"
      @keyup.enter="buscar"
    />
    <button @click="buscar">Buscar</button>

    <p v-if="carregando">Carregando...</p>
    <p v-if="erro" class="erro">{{ erro }}</p>

    <div v-if="endereco.logradouro">
      <h2>Endereço:</h2>
      <p><strong>Logradouro:</strong> {{ endereco.logradouro }}</p>
      <p><strong>Bairro:</strong> {{ endereco.bairro }}</p>
      <p><strong>Cidade:</strong> {{ endereco.localidade }}</p>
      <p><strong>UF:</strong> {{ endereco.uf }}</p>

      <iframe
        v-if="endereco.mapa"
        :src="endereco.mapa"
        width="100%"
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
  max-width: 500px;
  margin: auto;
  text-align: center;
}
input {
  width: 80%;
  padding: 8px;
  margin-top: 10px;
}
button {
  margin-top: 10px;
  padding: 8px 16px;
}
.erro {
  color: red;
}
</style>
