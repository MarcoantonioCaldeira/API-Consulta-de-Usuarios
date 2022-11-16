<template>

  <input type="text"  v-model="cpf"  v-on:change="consulta_cpf" placeholder="Digite o seu cpf">
  <div>
    <tr v-for="(item, index) in cpf_keys">
      <td>
        {{ cpf_data.cod_cliente }}
        {{ cpf_data.ativo }}
        {{ cpf_data.bloqueado }}
      </td>
    </tr>
  </div>
</template>

<script>
 import api from "/api";

export default {
 name: "User",
 data() {
   return {
     cpf: "",
     cpf_data: null,
     cpf_keys: []
   };
 },
 created() {
   this.getUser();
 },
 methods: {

   getUser() {

    var self = this

     api
       .get("http://localhost:9000/clientes/"+this.cpf)
       .then((res) => {

         console.log(res);
         self.cpf_data = response.data;
         self.cpf_keys = Object.keys( self.cpf_data );

       })
       .catch((error) => {
         console.log(error);
       });
   },
 },
};
</script>


<style>

</style>
