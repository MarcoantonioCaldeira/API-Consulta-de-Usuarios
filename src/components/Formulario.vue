<template>

  <input type="text"  v-model="cpf"  v-on:change="consulta_cpf" placeholder="Digite o seu cpf">
  <div id="resultado" v-if="dados_cpf != null ">
   
  </div>
</template>

<script>

import axios from "axios";
export default {

  name: 'Formulario',

  data(){
    return{
      cpf: '',
      dados_cpf: null,
      cpf_keys: []
    }
  },
  methods: {

    consulta_cpf(){
      const access_token = localStorage.getItem('eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJULkkuIEdlc3RvciIsInN1YiI6IjUwNWJhNDJlYTQ1NTUzNzYwNzkwMjk4NDc4ZDJmYmY0ZDA3OTFhMDIiLCJleHAiOjE2NjgyNjUyODV9.7ssWY3z34Mgu-ZITmx2MBm6cF-sONdePPdhA2dVbHA8');
      const AuthStr =  'Bearer'.concat(access_token);
      const url ='http://localhost:9000/auth';
      var self = this;

      axios.get(url,
       { headers: { Authorization: AuthStr } })
      .then(function (response){

        console.log(response);
        self.dados_cpf = response.data;
        self.cpf_keys = Object.keys( self.dados_cpf );

      })
      .catch(function (error){
        console.log(error);
      })
      .finally(function (){

      });
    }
  }
}
</script>


<style>

</style>
