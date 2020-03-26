<template>    
<div><header/>
    <div class="styl">
         <Header />
    <div class="container-fluid fluid">
        <div class="container mt-5 flu">
        <div class="row my-10">
            <div class="col-lg-4 my-2">
                <img :src="myProducts.imageLink" height="200" width="180"> 
                <hr>
                <h6>Share this product</h6><br>
                 <a href="#!"><i class="fab fa-facebook-f"></i></a>
                <a href="#!"><i class="fab fa-twitter px-10"></i></a>
             </div> 
             <!-- <div class="rdiv"> -->
            <div class="col-lg-4 my-4">
                   <h3>{{myProducts.product}}</h3>
                <i class="fa fa-star text-warning"></i>
                <i class="fa fa-star text-warning"></i>
                <i class="fa fa-star text-warning"></i>
                <i class="fa fa-star text-warning"></i>
                <i class="fa fa-star text-warning"></i>
                <span>({{ myProducts.usersRating}} ratings)</span>
                 <h3><b>{{myProducts.price}}</b></h3>
                <del>{{myProducts.dPrice}}</del>
            <button type="button" class="text-white btn btn-success btn-lg btn-block"><span class="cart"><i class="fa fa-cart-plus"></i> </span>ADD TO CART</button>
             <h5>Product Description</h5>
             <p>{{myProducts.Desc}}</p>
             <h6>Promotions</h6><br>
             <p><i class="fa fa-cart-plus"></i> Get Free instant airtime when you buy 5 packs of this products</p>
              <p><i class="fa fa-cart-plus"></i> Get Free instant airtime when you buy 5 packs of this products</p>
               <p><i class="fa fa-cart-plus"></i> Get Free instant airtime when you buy 5 packs of this products</p>
            <!-- <i class="far fa-heart"></i> -->
            <!-- </div> -->
             </div>
        <!-- <hr class="my-4"> -->
          <div class="col-lg-4 my-2"> 
              <div class="rstyl">
              <p>Delivery and Returns Policy</p> 
              <hr> 
              <h6><i class="fas fa-truck"></i>  Delivery Information</h6>
              <p> Orders for convenience foodstuff must be placed atleast 24 hours before expected delivery date <a href="#"> see more</a></p>
              <h6><i class="fas fa-undo-alt"></i>  Return Policy</h6>
              <p style="margin:5px;"> A product can only be returned if there was a flaw on the process of delivery <a href="#"> see more</a>
                </p>
              </div>
              <div>
                  <p>Reseller Information<i class="fas fa-chevron-right" id="mov"></i></p>
                  <p>Abuja Foodstuff Market</p>
                  <p>1 Follower  <button class="btn-btn warning" id="btn">Follow</button> </p>
              </div>
              <hr>
              <div>
                  <p>Have anything to sell?<i class="fas fa-chevron-right" id="mov"></i></p>
                  <a href="#">click here</a>    
              </div>
          </div>            
        </div>
    </div>
     </div>
    </div>
    <Footer />
    </div> 
  
   
    

    

</template>

<script>
import Header from "../components/Header"
import Footer from "../components/Footer"
export default {
    computed: {
        myProducts(){
            return this.$store.state.productImageSelections;
        }

    },
     components: {
   Header,
   Footer
  }
}
</script>

<style scoped>
.fluid{
    border: 1px solid yellow;
    background-color: lightgrey;
}
.flu{
    
    border-radius: 10px;
    width: 100%;
    margin-left: 6rem;
    background-color: #fff;
    padding: 10px;
}
.icon{
    float: right;
    color: yellow;
}
.cart{
    color:red;
    float: left;
}
.ldiv{
    background-color: ivory;
}
.styl {
    display: flex;
}
.rstyl {
    border: 1px solid wheat;
    border-radius: 5px;
}
#mov{
    float: right;
    margin-top: 2px;
}
#btn{
    float:right;
    background-color: orange;
}
p {
    font-size: 10px;
}
</style>