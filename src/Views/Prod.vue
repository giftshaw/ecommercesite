<template>
    <div class="container-fluid fluid">
        <div class="container mt-5 flu">
        <div class="row ro">
            <div class="col-lg-3">
                <img :src="myProducts.imageLink" height="200" width="180"> 
            </div>

            <div class="col-lg-9 co">
            <h3>{{myProducts.name}} <span class="icon"><i class="far fa-heart"></i></span></h3>
                <i class="fa fa-star text-danger"></i>
                <i class="fa fa-star text-danger"></i>
                <i class="fa fa-star text-danger"></i>
                <i class="fa fa-star text-danger"></i>
                <i class="fa fa-star text-danger"></i><span>({{ myProducts.usersRating}} ratings)</span>
             <hr class="my-4">
            <h3><b>{{myProducts.price}}</b></h3>
            <hr class="my-4">
           
            <button type="button" class="text-white btn btn-success btn-lg btn-block"><span class="cart"><i class="fa fa-cart-plus"></i> </span>ADD TO CART</button>
            </div>
        </div>
    </div>

    <div class="container mt-4 mb-3 flu">
        <h5>Product Description</h5>
        <hr class="my-4">
        <p>{{myProducts.Desc}}</p>  
    </div>
    <Header />
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
    width: 70%;
    margin-left: 6rem;
    background-color: #fff;
    padding: 10px;
}
.icon{
    float: right;
    color: olive;
}
.cart{
    color:red;
    float: left;
}
</style>