import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
      slider: [
        {
          id: 1,
          sliderImage: require("@/assets/stirfrymix.jpg")
        },
        {
          id: 2,
          sliderImage: require("@/assets/strawberries.jpg")
        },
        {
          id: 3,
          sliderImage: require("@/assets/stirfrymix.jpg")
        }
      ],
        products: [
            {
              id:1,
              category_id: 1,
              product: "oloyin",
              price: "\u20A6 600",
              dPrice: "\u20A6 500",
              imageLink: require("@/assets/oloyin.jpg"),
              Desc: "Neatly picked and farm fresh", 
              images: [ 
                
                  require("@/assets/oloyin.jpg"),
                  require("@/assets/oloyin.jpg"),
                  require("@/assets/oloyin.jpg")
                

              ]
            },
             {
               id: 2,
              category_id: 2,
              product: "mixedveggies",
              price: "\u20A6 800",
              dPrice: "\u20A6 700",
              imageLink: require("@/assets/veggies.jpg"),
              Desc: "Diced on pre-order-carrot, green beans, peas, green pepper(kidney beans and sweetcorn optional)",
              images: [
                require("@/assets/veggies.jpg"),
                require("@/assets/veggies.jpg"),
                require("@/assets/veggies.jpg")
              ]
            }, 
             {
              id: 3,
              category_id: 3,
              product: "Tomatoe Puree",
              price: "\u20A6 1500",
              dPrice: "\u20A6 1400",
              imageLink: require("@/assets/tomato.jpg"),
              Desc: "Freshly blended and steamed tomatoes",
              images: [
                require("@/assets/tomato.jpg"),
                require("@/assets/tomato.jpg"),
                require("@/assets/tomato.jpg")
              ]
            },
             {
               id: 4,
              category_id: 4,
              product: "Peeled Beans",
              price: "\u20A6 600",
              dPrice: "\u20A6 500",
              imageLink: require("@/assets/peeledbeans.jpg"),
              Desc: "freshly peeled on pre-order",
              images: [
                require("@/assets/peeledbeans.jpg"),
                require("@/assets/peeledbeans.jpg"),
                require("@/assets/peeledbeans.jpg")
              ]
            },
             {
                id: 5,
              category_id: 5,
              product: "Strawberries",
              price: "\u20A6 600",
              dPrice: "\u20A6 500",
              imageLink: require("@/assets/strawberries.jpg"),
              Desc: "seasonal fruits, available from February till April",
              images: [
                require("@/assets/strawberries.jpg"),
                require("@/assets/strawberries.jpg"),
                require("@/assets/strawberries.jpg")
              ]
            },
             {
                id: 6,
              category_id: 6,
              product: "Stir Fry Mix",
              price: "\u20A6 600",
              dPrice: "\u20A6 500",
              imageLink: require("@/assets/stirfrymix.jpg"),
              Desc: "Green, yellow and red bell pepper with carrot",
              images: [
                require("@/assets/stirfrymix.jpg"),
                require("@/assets/stirfrymix.jpg"),
                require("@/assets/stirfrymix.jpg")
              ]
            },
             {
                id: 7,
              category_id: 7,
              product: "Irish",
              price: "\u20A6 1200",
              dPrice: "\u20A6 1100",
              imageLink: require("@/assets/irish.jpg"),
              Desc: "freshly harvested Yellow Irish potatoes",
              images: [
                require("@/assets/irish.jpg"),
                require("@/assets/irish.jpg"),
                require("@/assets/irish.jpg")
              ]
            },
             {
                id: 8,
              category_id: 8,
              product: "Elubo",
              price: "\u20A6 600",
              dPrice: "\u20A6 500",
              imageLink: require("@/assets/amala.jpg"),
              Desc: "Neatly sieved pure yam flour",
              images: [
                require("@/assets/amala.jpg"),
                require("@/assets/amala.jpg"),
                require("@/assets/amala.jpg")
              ]
            },
             {
                id: 8,
              category_id: 9,
              product: "Yellow Garri",
              price: "\u20A6 600",
              dPrice: "\u20A6 500",
              imageLink: require("@/assets/garri.jpg"),
              Desc: "Edo yellow garri",
              images: [
                require("@/assets/garri.jpg"),
                require("@/assets/garri.jpg"),
                require("@/assets/garri.jpg")
              ]
              
            },
             {
                id: 10,
              category_id: 10,
              product: "Beans Flour",
              price: "\u20A6 1000",
              dPrice: "\u20A6 900",
              imageLink: require("@/assets/beansflour.jpg"),
              Desc: "zero odour blended dry beans",
              images: [
                require("@/assets/beansflour.jpg"),
                require("@/assets/beansflour.jpg"),
                require("@/assets/beansflour.jpg")
              ]
        
            }
          ],
          productImageSelections: null
    },
    mutations: {
      setSelectedProductImage(state, product){
        state.productImageSelections = product;

        
    }

    }
});

export default store;

