<template>
<div class="car">
    <carousel 
        :per-page="1" 
        :mouse-drag="false" 
        :loop="true" 
        :autoplay="true" >
        <slide v-for="image in myCarousel" :key="image.id">
            <img :src="image.sliderImage">
        </slide>
       <div slot="before">Insert node before</div>
        <div slot="after">Insert node after</div> 
    </carousel>
</div>
</template>

<script>

       export default {
           computed: {
        myCarousel(){
            return this.$store.state.slider;
        }
    }
       }
       </script>
    <style scoped>

    img{
        width:100%;
        height: 400px;
        
    }
    
    </style>