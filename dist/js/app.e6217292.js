(function(t){function e(e){for(var r,c,n=e[0],o=e[1],l=e[2],u=0,f=[];u<n.length;u++)c=n[u],Object.prototype.hasOwnProperty.call(s,c)&&s[c]&&f.push(s[c][0]),s[c]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(t[r]=o[r]);d&&d(e);while(f.length)f.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],r=!0,n=1;n<a.length;n++){var o=a[n];0!==s[o]&&(r=!1)}r&&(i.splice(e--,1),t=c(c.s=a[0]))}return t}var r={},s={app:0},i=[];function c(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.m=t,c.c=r,c.d=function(t,e,a){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(a,r,function(e){return t[e]}.bind(null,r));return a},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],o=n.push.bind(n);n.push=e,n=n.slice();for(var l=0;l<n.length;l++)e(n[l]);var d=o;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0d3e":function(t,e,a){t.exports=a.p+"img/veggies.0b6786d0.jpg"},"2a11":function(t,e,a){t.exports=a.p+"img/strawberries.484043b5.jpg"},"3f7a":function(t,e,a){t.exports=a.p+"img/peeledbeans.3fffeb58.jpg"},"415f":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("header"),a("router-view"),a("footer2")],1)},i=[],c={name:"App"},n=c,o=a("2877"),l=Object(o["a"])(n,s,i,!1,null,null,null),d=l.exports,u=(a("4989"),a("ab8b"),a("0a63")),f=a.n(u),p=(a("15f5"),a("7051"),a("8c4f")),m=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("Header"),a("div",{staticClass:"mt-0 main"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-3 cat-div"},[t._m(0),t._l(t.categories,(function(t){return a("div",{key:t.id,attrs:{carts:t}},[a("Categories")],1)}))],2),a("div",{staticClass:"col-lg-6 carousel-div"},[a("Carousel",{attrs:{caro:t.imageCarousel}})],1),t._m(1)])]),t._l(t.displayProducts,(function(t){return a("Products",{key:t.id,attrs:{product:t}})})),a("hr",{staticStyle:{border:"10px:"}}),a("div",{}),a("Footer")],2)},v=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",{staticClass:"list-group li-div"},[a("li",{staticClass:"list-group-item active"},[t._v("Categories")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-lg-3 mt-20"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-header"},[t._v(" New Restock alert ")]),a("div",{staticClass:"card-body"},[a("h5",{staticClass:"card-title"},[t._v("Veggies")]),a("p",{staticClass:"card-text"},[t._v("Quality guaranteed")]),a("a",{staticClass:"btn btn-primary",attrs:{href:"#"}},[t._v("for more info")])])])])}],g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("nav",{staticClass:"navbar navbar-expand-lg navbar-info bg-info fixed-top"},[a("div",{staticClass:"container"},[a("a",{staticClass:"navbar-brand mb-15px",staticStyle:{color:"white","font-size":"20px","align-item":"center"},attrs:{href:"#"}},[t._v("ABUJA FOODSTUFF MARKET")]),t._m(0),a("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarResponsive"}},[a("ul",{staticClass:"navbar-nav ml-auto"},[a("li",{staticClass:"nav-item active"},[a("a",{staticClass:"nav-link",staticStyle:{color:"white"},attrs:{href:"#"}},[a("router-link",{attrs:{to:"/"}},[t._v("Home")]),a("span",{staticClass:"sr-only"},[t._v("(current)")])],1)]),t._m(1),t._m(2),t._m(3)])])])])])},_=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarResponsive","aria-controls":"navbarResponsive","aria-expanded":"false","aria-label":"Toggle navigation"}},[a("span",{staticClass:"navbar-toggler-icon"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",staticStyle:{color:"white"},attrs:{href:"#"}},[t._v("About")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",staticStyle:{color:"white"},attrs:{href:"#"}},[t._v("Products")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",staticStyle:{color:"white"},attrs:{href:"#"}},[t._v("Contact")])])}],h={},b=Object(o["a"])(h,g,_,!1,null,null,null),y=b.exports,C=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"prod"},[a("a",{on:{click:function(e){return t.selectProduct(t.product)}}},[a("div",{staticClass:"card card-1 ",staticStyle:{width:"18rem"}},[a("img",{attrs:{src:t.product.imageLink,height:"200"}}),a("div",{staticClass:"card-body"},[a("h5",{staticClass:"card-title"},[t._v(t._s(t.product.name))]),a("p",{staticClass:"card-text"},[t._v(t._s(t.product.price))]),a("button",{staticClass:"btn btn-success",on:{click:function(e){return t.selectProduct(t.product)}}},[t._v("Buy Now")])])])])])},w=[],x={props:["product"],methods:{selectProduct:function(t){this.$store.commit("setSelectedProductImage",t),this.$router.push({path:"/prod"})}}},k=x,P=(a("afe3"),Object(o["a"])(k,C,w,!1,null,"153f7891",null)),S=P.exports,j=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},$=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",{staticClass:"page-footer font-small indigo"},[a("div",{staticClass:"container text-center text-md-left"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-3 mx-auto"},[a("h5",{staticClass:"font-weight-bold text-uppercase mt-3 mb-4"},[t._v("Links")]),a("ul",{staticClass:"list-unstyled"},[a("li",[a("a",{attrs:{href:"#!"}},[t._v("Home")])]),a("li",[a("a",{attrs:{href:"#!"}},[t._v("About")])]),a("li",[a("a",{attrs:{href:"#!"}},[t._v("Products")])]),a("li",[a("a",{attrs:{href:"#!"}},[t._v("Contact")])])])]),a("hr",{staticClass:"clearfix w-100 d-md-none"}),a("div",{staticClass:"col-md-3 mx-auto"},[a("h5",{staticClass:"font-weight-bold text-uppercase mt-3 mb-4"},[t._v("Links")]),a("ul",{staticClass:"list-unstyled"},[a("li",[a("a",{attrs:{href:"#!"}},[t._v("Sell your Farm Produce")])]),a("li",[a("a",{attrs:{href:"#!"}},[t._v("Search farm fresh")])]),a("li",[a("a",{attrs:{href:"#!"}},[t._v("Logistics Partners")])]),a("li",[a("a",{attrs:{href:"#!"}})])])]),a("hr",{staticClass:"clearfix w-100 d-md-none"}),a("div",{staticClass:"col-md-3 mx-auto"},[a("h5",{staticClass:"font-weight-bold text-uppercase mt-3 mb-4"},[t._v("Links")]),a("ul",{staticClass:"list-unstyled"},[a("li",[a("a",{attrs:{href:""}},[t._v("Sell")])]),a("li",[a("a",{attrs:{href:"#!"}},[t._v("Become a Distributor")])]),a("li",[a("a",{attrs:{href:"#!"}},[t._v("Wholesale Packages")])]),a("li",[a("a",{attrs:{href:"#!"}},[t._v("Farmers Connect")])])])]),a("hr",{staticClass:"clearfix w-100 d-md-none"}),a("div",{staticClass:"col-md-3 mx-auto"},[a("h5",{staticClass:"font-weight-bold text-uppercase mt-3 mb-4"},[t._v("Links")]),a("ul",{staticClass:"list-unstyled"},[a("li",[a("a",{attrs:{href:"#!"}},[t._v("Facebook "),a("i",{staticClass:"fab fa-facebook-f"})])]),a("li",[a("a",{attrs:{href:"#!"}},[t._v("Twitter "),a("i",{staticClass:"fab fa-twitter"})])]),a("li",[a("a",{attrs:{href:"#!"}},[t._v("Youtube "),a("i",{staticClass:"fab fa-youtube"})])])])])])]),a("div",{staticClass:"footer-copyright text-center py-3"},[t._v("© 2020 Copyright: "),a("a",{attrs:{href:"https://mdbootstrap.com/"}},[t._v(" abujafoodstuffmarket")])])])}],E={},F=Object(o["a"])(E,j,$,!1,null,null,null),O=F.exports,L=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"car"},[a("carousel",{attrs:{"per-page":1,"mouse-drag":!1,loop:!0,autoplay:!0}},[t._l(t.myCarousel,(function(t){return a("slide",{key:t.id},[a("img",{attrs:{src:t.sliderImage}})])})),a("div",{attrs:{slot:"before"},slot:"before"},[t._v("Insert node before")]),a("div",{attrs:{slot:"after"},slot:"after"},[t._v("Insert node after")])],2)],1)},D=[],I={computed:{myCarousel:function(){return this.$store.state.slider}}},A=I,R=(a("e9d3"),Object(o["a"])(A,L,D,!1,null,"0dfed690",null)),T=R.exports,H={name:"Home",data:function(){return{imageCarousel:[{imageLink:a("eaff")},{imageLink:a("2a11")},{imageLink:a("eaff")}],categories:[{id:1,Category_name:"Convenience Foods"},{id:2,Category_name:"Soup Ingredients"},{id:3,Category_name:" Seasonal Fruits"},{id:4,Category_name:"Seafoods"},{id:5,Category_name:"Local Seasonings"},{id:6,Category_name:"Nothern Foodstuff"},{id:7,Category_name:"Southern Foodstuff"}]}},computed:{displayProducts:function(){return this.$store.state.products}},components:{Header:y,Products:S,Carousel:T,Footer:O}},M=H,B=(a("cccb"),Object(o["a"])(M,m,v,!1,null,null,null)),G=B.exports,N=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("header"),a("div",{staticClass:"styl"},[a("Header"),a("div",{staticClass:"container-fluid fluid"},[a("div",{staticClass:"container mt-5 flu"},[a("div",{staticClass:"row my-10"},[a("div",{staticClass:"col-lg-4 my-2"},[a("img",{attrs:{src:t.myProducts.imageLink,height:"200",width:"180"}}),a("hr"),a("h6",[t._v("Share this product")]),a("br"),t._m(0),t._m(1)]),a("div",{staticClass:"col-lg-4 my-4"},[a("h3",[t._v(t._s(t.myProducts.product))]),a("i",{staticClass:"fa fa-star text-warning"}),a("i",{staticClass:"fa fa-star text-warning"}),a("i",{staticClass:"fa fa-star text-warning"}),a("i",{staticClass:"fa fa-star text-warning"}),a("i",{staticClass:"fa fa-star text-warning"}),a("span",[t._v("("+t._s(t.myProducts.usersRating)+" ratings)")]),a("h3",[a("b",[t._v(t._s(t.myProducts.price))])]),a("del",[t._v(t._s(t.myProducts.dPrice))]),t._m(2),a("h5",[t._v("Product Description")]),a("p",[t._v(t._s(t.myProducts.Desc))]),a("h6",[t._v("Promotions")]),a("br"),t._m(3),t._m(4),t._m(5)]),t._m(6)])])])],1),a("Footer")],1)},J=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{attrs:{href:"#!"}},[a("i",{staticClass:"fab fa-facebook-f"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{attrs:{href:"#!"}},[a("i",{staticClass:"fab fa-twitter px-10"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"text-white btn btn-success btn-lg btn-block",attrs:{type:"button"}},[a("span",{staticClass:"cart"},[a("i",{staticClass:"fa fa-cart-plus"})]),t._v("ADD TO CART")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[a("i",{staticClass:"fa fa-cart-plus"}),t._v(" Get Free instant airtime when you buy 5 packs of this products")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[a("i",{staticClass:"fa fa-cart-plus"}),t._v(" Get Free instant airtime when you buy 5 packs of this products")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[a("i",{staticClass:"fa fa-cart-plus"}),t._v(" Get Free instant airtime when you buy 5 packs of this products")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-lg-4 my-2"},[a("div",{staticClass:"rstyl"},[a("p",[t._v("Delivery and Returns Policy")]),a("hr"),a("h6",[a("i",{staticClass:"fas fa-truck"}),t._v(" Delivery Information")]),a("p",[t._v(" Orders for convenience foodstuff must be placed atleast 24 hours before expected delivery date "),a("a",{attrs:{href:"#"}},[t._v(" see more")])]),a("h6",[a("i",{staticClass:"fas fa-undo-alt"}),t._v(" Return Policy")]),a("p",{staticStyle:{margin:"5px"}},[t._v(" A product can only be returned if there was a flaw on the process of delivery "),a("a",{attrs:{href:"#"}},[t._v(" see more")])])]),a("div",[a("p",[t._v("Reseller Information"),a("i",{staticClass:"fas fa-chevron-right",attrs:{id:"mov"}})]),a("p",[t._v("Abuja Foodstuff Market")]),a("p",[t._v("1 Follower "),a("button",{staticClass:"btn-btn warning",attrs:{id:"btn"}},[t._v("Follow")])])]),a("hr"),a("div",[a("p",[t._v("Have anything to sell?"),a("i",{staticClass:"fas fa-chevron-right",attrs:{id:"mov"}})]),a("a",{attrs:{href:"#"}},[t._v("click here")])])])}],Y={computed:{myProducts:function(){return this.$store.state.productImageSelections}},components:{Header:y,Footer:O}},z=Y,U=(a("74d2"),Object(o["a"])(z,N,J,!1,null,"01feee32",null)),K=U.exports;r["a"].use(p["a"]);var Q=[{path:"/",component:G,name:"home"},{path:"/prod",component:K,name:"product"}],V=new p["a"]({mode:"history",routes:Q}),W=V,q=a("2f62");r["a"].use(q["a"]);var X=new q["a"].Store({state:{slider:[{id:1,sliderImage:a("eaff")},{id:2,sliderImage:a("2a11")},{id:3,sliderImage:a("eaff")}],products:[{id:1,category_id:1,product:"oloyin",price:"₦ 600",dPrice:"₦ 500",imageLink:a("bcf9"),Desc:"Neatly picked and farm fresh",images:[a("bcf9"),a("bcf9"),a("bcf9")]},{id:2,category_id:2,product:"mixedveggies",price:"₦ 800",dPrice:"₦ 700",imageLink:a("0d3e"),Desc:"Diced on pre-order-carrot, green beans, peas, green pepper(kidney beans and sweetcorn optional)",images:[a("0d3e"),a("0d3e"),a("0d3e")]},{id:3,category_id:3,product:"Tomatoe Puree",price:"₦ 1500",dPrice:"₦ 1400",imageLink:a("c73d"),Desc:"Freshly blended and steamed tomatoes",images:[a("c73d"),a("c73d"),a("c73d")]},{id:4,category_id:4,product:"Peeled Beans",price:"₦ 600",dPrice:"₦ 500",imageLink:a("3f7a"),Desc:"freshly peeled on pre-order",images:[a("3f7a"),a("3f7a"),a("3f7a")]},{id:5,category_id:5,product:"Strawberries",price:"₦ 600",dPrice:"₦ 500",imageLink:a("2a11"),Desc:"seasonal fruits, available from February till April",images:[a("2a11"),a("2a11"),a("2a11")]},{id:6,category_id:6,product:"Stir Fry Mix",price:"₦ 600",dPrice:"₦ 500",imageLink:a("eaff"),Desc:"Green, yellow and red bell pepper with carrot",images:[a("eaff"),a("eaff"),a("eaff")]},{id:7,category_id:7,product:"Irish",price:"₦ 1200",dPrice:"₦ 1100",imageLink:a("8dab"),Desc:"freshly harvested Yellow Irish potatoes",images:[a("8dab"),a("8dab"),a("8dab")]},{id:8,category_id:8,product:"Elubo",price:"₦ 600",dPrice:"₦ 500",imageLink:a("e798"),Desc:"Neatly sieved pure yam flour",images:[a("e798"),a("e798"),a("e798")]},{id:8,category_id:9,product:"Yellow Garri",price:"₦ 600",dPrice:"₦ 500",imageLink:a("c33a"),Desc:"Edo yellow garri",images:[a("c33a"),a("c33a"),a("c33a")]},{id:10,category_id:10,product:"Beans Flour",price:"₦ 1000",dPrice:"₦ 900",imageLink:a("6851"),Desc:"zero odour blended dry beans",images:[a("6851"),a("6851"),a("6851")]}],productImageSelections:null},mutations:{setSelectedProductImage:function(t,e){t.productImageSelections=e}}}),Z=X;r["a"].use(f.a),r["a"].config.productionTip=!1,new r["a"]({store:Z,router:W,render:function(t){return t(d)}}).$mount("#app")},"5ced":function(t,e,a){},6851:function(t,e,a){t.exports=a.p+"img/beansflour.c9cc081e.jpg"},"74d2":function(t,e,a){"use strict";var r=a("95f1"),s=a.n(r);s.a},"8dab":function(t,e,a){t.exports=a.p+"img/irish.a1bcc248.jpg"},"95f1":function(t,e,a){},afe3:function(t,e,a){"use strict";var r=a("415f"),s=a.n(r);s.a},bcf9:function(t,e,a){t.exports=a.p+"img/oloyin.c96e477d.jpg"},c33a:function(t,e,a){t.exports=a.p+"img/garri.aa2a2f0a.jpg"},c73d:function(t,e,a){t.exports=a.p+"img/tomato.47ab4de0.jpg"},cccb:function(t,e,a){"use strict";var r=a("5ced"),s=a.n(r);s.a},e798:function(t,e,a){t.exports=a.p+"img/amala.140eb567.jpg"},e9d3:function(t,e,a){"use strict";var r=a("f534"),s=a.n(r);s.a},eaff:function(t,e,a){t.exports=a.p+"img/stirfrymix.33162ba5.jpg"},f534:function(t,e,a){}});
//# sourceMappingURL=app.e6217292.js.map