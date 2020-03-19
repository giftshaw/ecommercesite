<template>
<div class="car">
    <carousel :per-page="1" :mouse-drag="false" :loop="true" autoplay="true" >
        <slide v-for="image in slide" :key="image.id">
            <img :src="image.slider_image">
        </slide>

        <!-- <div slot="before">Insert node before</div>
        <div slot="after">Insert node after</div> -->
    </carousel>
</div>
</template>

<script>
// import { Carousel, CarouselItem } from 'vue-l-carousel'

       export default {
         props: ['slide'],
        //  components: {
        //      'carousel': Carousel,
        // 'carousel-item': CarouselItem
        //  }
       }
       </script>
    <style scoped>

    img{
        width:100%;
        height: 400px;
        
    }
    
    </style>