<template>

  <input type="text" v-model="cpf" v-on:change="getUser" placeholder="Digite o seu cpf">
  <div v-if="cpf_data != null">
    <h1>Dados do cliente</h1>
    <br>ID_Cliente:{{ cpf_data.cod_Cliente }}
    <br>Ativo:{{ cpf_data.ativo }}
    <br>Bloqueado:{{ cpf_data.bloqueado }}
  </div>
</template>

<script>
import api from "/api";

export default {
 name: "User",
 data() {
   return {
     cpf: "",
     cpf_data: null
   };
 },
 created() {
   this.getUser();
 },
 methods: {

   getUser(){

    var self = this;

     api.get("http://localhost:9000/clientes/"+this.cpf)
       .then((res) => {
         console.log(res);
         self.cpf_data = res.data;
       })
       .catch((error)  => {
         console.log(error);
       });
   },
 },
};
</script>


<style>

</style>
