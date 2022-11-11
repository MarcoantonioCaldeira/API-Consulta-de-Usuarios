<template>

  <input type="text"  v-model="cpf"  v-on:change="consulta_cpf" placeholder="Digite o seu cpf">
  <div id="resultado" v-if="dados_cpf != null ">
    <table>
      <tr v-for="(item, index) in cpf_keys">
        <td>
          {{ item }}
        </td>
      </tr>
    </table>
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
      const access_token = localStorage.getItem('eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJULkkuIEdlc3RvciIsInN1YiI6IjUwNWJhNDJlYTQ1NTUzNzYwNzkwMjk4NDc4ZDJmYmY0ZDA3OTFhMDIiLCJleHAiOjE2NjgyNjE0MjB9.f5cVqiem8TogDyOSCMDj3ydPu9fe2p_94wVz1cJhThg');
      const AuthStr =  'Bearer '.concat(access_token);
      const url ='http://localhost:9000/clientes';
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
