<template>
  <div class="row my-2">
    <div class="col-4" style="padding: 18px;">
    <input class="form-control" type="text" v-model="cpf"  placeholder="Digite o seu cpf">
  </div>
  <div class="col-4" style="padding: 18px;">
    <button  v-on:click="getUser()" class="btn btn-success">Retornar Dados</button>
  </div>  

  </div>

  <div style="padding-left: 18px;" v-if="cpf_data != null">
    <p class="h3">Dados do Cliente</p>
    <div style="padding-left: 18px;">
      <br><p class="h5">ID_Cliente: {{ cpf_data.cod_Cliente }}</p>
      <br><p class="h5">Ativo: {{ cpf_data.ativo }}</p>
      <br><p class="h5">Bloqueado: {{ cpf_data.bloqueado }}</p>
    </div>
  </div>
</template>

<script>
import api, { getToken } from "./api";


export default {
 name: "User",
 data() {
   return {
     cpf: "",
     cpf_data: null
   };
 },

 methods:{

   async getUser(){

    try{

      const token = await getToken();
      const headers = {Authorization: `Bearer ${token}` };
      const response = await  api.get(`/clientes/${this.cpf}`, {headers}); 

      this.cpf_data = response.data;
      return this.cpf_data;
      
    }catch(error){
      console.log(error)
    }
   }
}

}
</script>


<style src="./estilo.css">

</style>
