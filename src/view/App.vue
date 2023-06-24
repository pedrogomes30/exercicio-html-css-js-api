<template>
  <div class="card m-5">
    <div class="card-header bg-black d-flex flex-column align-items-center ">
      <img class="w-25 img-fluid my-2 " alt="Logo" src="../assets/logo.png" />
      <div class="input-group  my-3">
        <input type="text" class="form-control bg-white" placeholder="procure por produto..." v-model="search">
        <button class="btn btn-primary" type="button" id="searchButton">
          Procurar 
          <i class="bi bi-search  pl-2 "></i>
        </button>
      </div>
    </div>
    <div class="card-body bg-white">
      <Showcase :search = "search" />
    </div>
  </div>
</template>

<script>
import Showcase from '../components/ProductShowcase.vue'

export default {
  name: 'App',
  components: {
    Showcase
  },
  data() {
    return {
      search: ''
    }
  }

}
</script>

<style>

</style>
