<template>
    <div class="body">
        <h1>Bem vindo!</h1>

        <div class="flex">
            <div class="column">
                <p>Bem vindo(a) ao sistema de consultagem de CEP que eu, Leonardo Paschoa, desenvolvi!</p>

                <div id="description">
                    <p>Funciona de maneira bem simples! Acesse a página Consulta Cep na barra acima. Lá você irá colocar o CEP desejado e apertar na página buscar! Buscando pela informação, você irá receber os seguintes valores</p>
                    <ul>
                        <li><p>Logradouro</p></li>
                        <li><p>Bairro</p></li>
                        <li><p>Cidade</p></li>
                        <li><p>UF</p></li>
                    </ul>
                </div>
            </div>
            <img src="../assets/System.png" alt="#">
        </div>
    </div>
</template>

<script>
    export default {
        name: 'HomePage'
    }
</script>
