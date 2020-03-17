<template>
  <div id="app">
    <Header />
        <div class="container-fluid mb-5">
          <div class="row">
            <div id="cat-left">
              <div class="col-2">   
                <Category v-for="category in categories" :categories="category" :key="category.id"/>
              </div>
            </div>
            <div id="cat-right">
              <div class="col-10 my-5"> 
                <Products v-for="item in items" :products="item" :key="item.category_id"/></div>
              </div>
            </div>
        </div>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Category from './components/Category.vue'
import Products from '@/components/Products.vue'

export default {
  
  name: 'App',
  data(){
    return {
      items: [
    {
      category_id: 1,
      product: "oloyin",
      price: "\u20A6 600",
      imageLink: require("@/assets/oloyin.jpg"),
      description: "Neatly picked and farm fresh" 
    },
     {
      category_id: 2,
      product: "mixedveggies",
      price: "\u20A6 800",
      imageLink: require("@/assets/veggies.jpg"),
      description: "Diced on pre-order-carrot, green beans, peas, green pepper(kidney beans and sweetcorn optional)"
    },
     {
      category_id: 3,
      product: "Tomatoe Puree",
      price: "\u20A6 1500",
      imageLink: require("@/assets/tomato.jpg"),
      description: "Freshly blended and steamed tomatoes"
    },
     {
      category_id: 4,
      product: "Peeled Beans",
      price: "\u20A6 600",
      imageLink: require("@/assets/peeledbeans.jpg"),
      description: "freshly peeled on pre-order"
    },
     {
      category_id: 5,
      product: "Strawberries",
      price: "\u20A6 600",
      imageLink: require("@/assets/strawberries.jpg"),
      description: "seasonal fruits, available from February till April"
    },
     {
      category_id: 6,
      product: "Stir Fry Mix",
      price: "\u20A6 600",
      imageLink: require("@/assets/stirfrymix.jpg"),
      description: "Green, yellow and red bell pepper with carrot"
    },
     {
      category_id: 7,
      product: "Irish",
      price: "\u20A6 1200",
      imageLink: require("@/assets/irish.jpg"),
      description: "freshly harvested Yellow Irish potatoes"
    },
     {
      category_id: 8,
      product: "Elubo",
      price: "\u20A6 600",
      imageLink: require("@/assets/amala.jpg"),
      description: "Neatly sieved pure yam flour"
    },
     {
      category_id: 9,
      product: "Yellow Garri",
      price: "\u20A6 600",
      imageLink: require("@/assets/garri.jpg"),
      description: "Edo yellow garri"
      
    },
     {
      category_id: 10,
      product: "Beans Flour",
      price: "\u20A6 1000",
      imageLink: require("@/assets/beansflour.jpg"),
      description: "zero odour blended dry beans"

    }
  ],
  categories: [
  
   { id: 1,
      Category_name: "Convenience Foods"
   },
     { id: 2,
      Category_name: "Soup Ingredients"
   },
     { id: 3,
      Category_name: " Seasonal Fruits"
   },

  { id: 4,
      Category_name: "Seafoods"
   },
  { id: 5,
      Category_name: "Local Seasonings"
   },
  { id: 6,
      Category_name: "Nothern Foodstuff"
   },
  { id: 7,
      Category_name: "Southern Foodstuff"
   },



  ]
    }
},
  components: {
   Header,
   Category,
   Products

    }
  }
  
  
</script>

<style>
.banner{
  width: 1500px;
  height: 400px;
  float:right;
  padding-left: 240px;
  
}
#cat-left{
  float:left;
  margin-top: 160px;
  width: 240px;
  background-color: seashell;
}
#cat-right{float: right;
  margin-top: 100px;
  width: 1100px;
}
</style>
