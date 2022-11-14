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
      var self = this;
      const AuthStr =  'Bearer'.concat();
      const url ='http://localhost:9000/auth';

      axios.get(url,
       { headers: { Authorization: AuthStr } + self.$session.get('token')})
      .then(function (response){

        console.log(response);
        self.dados_cpf = response.data;
        self.cpf_keys = Object.keys( self.dados_cpf );
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
