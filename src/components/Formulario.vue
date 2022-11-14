<template>

  <input type="text"  v-model="cpf"  v-on:change="consulta_cpf" placeholder="Digite o seu cpf">
  <div id="resultado" v-if="dados_cpf != null ">
   Nome: {{dados_cpf.NOME}},
   Nome Fantasia: {{ dados_cpf.NOME_FANTASIA}}
  </div>
</template>

<script>

import axios from "axios";
export default {

  name: 'Formulario',

  data(){
    return{
      CNPJ_CPF: '',
      dados_cpf: null,
      cpf_keys: []
    }
  },
  methods: {
    consulta_cpf(){
      var self = this;
      const AuthStr =  'Bearer'.concat();
      const url ='http://localhost:9000/auth';

      axios.get(url,
       { headers: { Authorization: AuthStr } + self.$session.get('token')})
      .then(function (response){

        console.log(response);
        self.dados_cpf = response.data;
        //self.cpf_keys = Object.keys( self.dados_cpf );
      })
      .catch(function (error){
        console.log(error);
      })
    }
  }
}
</script>


<style>

</style>
