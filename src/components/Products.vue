 
 <template>
 <div id="card" class="card">
<img :src="products.imageLink" class="card-img-top" style="width: 190px; height: 13rem; border-radius: 6px; margin-top: 5px;" alt="...">

 <div class="card-body">
   <h5 class="card-title">{{products.product}}</h5>
   <p class="card-text">{{products.price}}</p>
   <a href="#" class="btn btn-success">BUY NOW</a>

 </div>
  </div>
  </template>

  <script>
  export default {
    props: ['products']
  }
  </script>

  <style scoped>
  .card {
    display:inline-block;
    margin-bottom: 15px;
    box-shadow: grey 10px 10px 10px;
    margin: 15px;
    margin-top: 15px;
    margin-right: 30px;
    width: 250px;
  }
  </style>

