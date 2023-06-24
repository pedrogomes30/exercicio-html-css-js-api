<template>
   <div class="d-flex flex-wrap">
     <div v-for="product in filteredProducts" :key="product.productId" class="col-md-4">
       <InfoProduct :product="product" />
     </div>
   </div>
 </template>
 
 <script>
 import InfoProduct from './InfoProduct.vue'
 import { getProducts } from '../service/api/product'
 
 export default {
   name: 'ProductShowcase',
   props: {
     search: String
   },
   data() {
     return {
       products: []
     }
   },
   async created() {
     this.products = await getProducts();
   },
   computed: {
     filteredProducts() {
       if (this.search) {
         const searchTerm = this.search.toLowerCase();
         return this.products.filter(product => {
           return (
             product.productName.toLowerCase().includes(searchTerm) ||
             product.brand.toLowerCase().includes(searchTerm) ||
             product.productId.toLowerCase().includes(searchTerm) ||
             product.measurementUnit.toLowerCase().includes(searchTerm)
           );
         });
       } else {
         return this.products;
       }
     }
   },
   components: {
     InfoProduct
   }
 }
 </script>
 
 <style scoped>
 </style>
 