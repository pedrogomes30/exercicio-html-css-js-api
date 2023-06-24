<template>
  <div class="card m-1 border-0">
    <img :src="product.image" class="card-img-top" alt="">
    <div class="card-body bg-white">
      <h5 class="card-title">{{ product.productName }}</h5>
      <div>
        <p class="card-text m-0 p-0">{{ product.brand + ' ' +  product.measurementUnit}}</p>
      </div>
      <div class="price">
        <p class="card-text old-price">{{ price(product.listPrice) }}</p>
        <b><h5 class="card-title text-primary">{{ price(product.bestPrice) }}</h5></b>
      </div>
    </div>
  </div>
</template>

<script>
import { priceResolver } from '../service/price.js'
export default {
  name: 'InfoProduct',
  props: {
    product: Object
  },
  methods:{
    price(price){
      return priceResolver(price);
    }
  }
}
</script>

<style scoped>
.price {
  position: relative;
  color:var(--bs-pink);
}

.price .old-price {
  text-decoration: line-through;
  color:var(--bs-light-pink);
  margin-bottom: 0;
  font-size: 14px;
}

.price .old-price::before {
  content: "De ";
  font-size: 12px;
  font-weight: normal;
}

</style>
