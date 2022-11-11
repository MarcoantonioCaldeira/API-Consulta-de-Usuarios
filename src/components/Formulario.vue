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
import setAuthHeader from "../utils/setAuthHeader";
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
      const url ='http://localhost:9000/clientes';
      var self = this;

      axios.get(url)
      .then(function (response){

        console.log(response);
        self.dados_cpf = response.data;
        self.cpf_keys = Object.keys( self.dados_cpf );
        setAuthHeader(response.data.token);

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
