  
  <template>
  <div id="app">
    <Header />
    
        <div class="mt-0 main">
          <div class="row">
            <div class="col-sm-3 cat-div">
              <ul class="list-group li-div">
                <li class="list-group-item active">Categories</li>
              </ul> 
              <div v-for="cart in categories" :carts="cart" :key="cart.id"> 
              <Categories />
              </div>
            </div>
            <div class="col-lg-6 carousel-div">
              <Carousel :caro="imageCarousel"/>
            </div>
            <div class="col-lg-3 mt-20">
              <div class="card">
                <div class="card-header">
                New Restock alert
                </div>
                <div class="card-body">
                  <h5 class="card-title">Veggies</h5>
                  <p class="card-text">Quality guaranteed</p>
                  <a href="#" class="btn btn-primary">for more info</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Products :product="item" v-for="item in displayProducts" :key="item.id"/>
        <hr style="border:10px:">
          <div class="">
            <!-- <h2>Shop now</h2> -->
          </div>  
        
        <Footer />

        
  </div>
</template>

<script>
import Header from "../components/Header"
// import Category from "../components/Category"
import Products from "../components/Products"
import Footer from "../components/Footer"
import Carousel from "../components/Carousel"
export default {
  name: 'Home',
  data(){
        return {
          imageCarousel : [
            {
            imageLink: require("../assets/stirfrymix.jpg")
          },
           {
            imageLink: require("../assets/strawberries.jpg")
          },
           {
            imageLink: require("../assets/stirfrymix.jpg")
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
           }
        
        
      ], 
    }   
  },
   
    computed: {
      displayProducts(){
        return this.$store.state.products;
      }
    },
 
  components: {
   Header,
  //  Category,
   Products,
   Carousel,
   Footer,
  //  Slide
  }
}
</script>

<style>
.carousel-div{
  cursor: pointer;
}
h2, h4{
  text-align: center;
  
}
.li-div{
  width: 90%;
  text-align: center;
  font-weight: bold;
  margin-top: 10px;
}
.shop-now{
  
  padding: 5px;
  margin: 0;
  background-color: #2c3e50;
  color: #fff;
}
.box{
  border-radius: 10px;
  
  margin: 10px;
}
</style>