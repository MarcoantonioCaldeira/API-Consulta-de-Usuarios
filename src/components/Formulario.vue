<template>

  <input type="text"  v-model="cpf"  v-on:change="consulta_cpf" placeholder="Digite o seu cpf">
  <div>

  </div>
</template>

<script>
 import api from "/api";

export default {
 name: "User",
 data() {
   return {
     cpf: {},
   };
 },
 created() {
   this.getUser();
 },
 methods: {
   getUser() {
     api
       .get("/users")
       .then((res) => {
         this.cpf = res.data;
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
