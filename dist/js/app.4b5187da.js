(function(t){function e(e){for(var o,n,c=e[0],i=e[1],l=e[2],u=0,d=[];u<c.length;u++)n=c[u],Object.prototype.hasOwnProperty.call(r,n)&&r[n]&&d.push(r[n][0]),r[n]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(t[o]=i[o]);m&&m(e);while(d.length)d.shift()();return s.push.apply(s,l||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],o=!0,n=1;n<a.length;n++){var c=a[n];0!==r[c]&&(o=!1)}o&&(s.splice(e--,1),t=i(i.s=a[0]))}return t}var o={},n={app:0},r={app:0},s=[];function c(t){return i.p+"js/"+({about:"about"}[t]||t)+"."+{about:"9a06537d"}[t]+".js"}function i(e){if(o[e])return o[e].exports;var a=o[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.e=function(t){var e=[],a={about:1};n[t]?e.push(n[t]):0!==n[t]&&a[t]&&e.push(n[t]=new Promise((function(e,a){for(var o="css/"+({about:"about"}[t]||t)+"."+{about:"1c6974f4"}[t]+".css",r=i.p+o,s=document.getElementsByTagName("link"),c=0;c<s.length;c++){var l=s[c],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===o||u===r))return e()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){l=d[c],u=l.getAttribute("data-href");if(u===o||u===r)return e()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=e,m.onerror=function(e){var o=e&&e.target&&e.target.src||r,s=new Error("Loading CSS chunk "+t+" failed.\n("+o+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=o,delete n[t],m.parentNode.removeChild(m),a(s)},m.href=r;var p=document.getElementsByTagName("head")[0];p.appendChild(m)})).then((function(){n[t]=0})));var o=r[t];if(0!==o)if(o)e.push(o[2]);else{var s=new Promise((function(e,a){o=r[t]=[e,a]}));e.push(o[2]=s);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,i.nc&&u.setAttribute("nonce",i.nc),u.src=c(t);var d=new Error;l=function(e){u.onerror=u.onload=null,clearTimeout(m);var a=r[t];if(0!==a){if(a){var o=e&&("load"===e.type?"missing":e.type),n=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+o+": "+n+")",d.name="ChunkLoadError",d.type=o,d.request=n,a[1](d)}r[t]=void 0}};var m=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},i.m=t,i.c=o,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(a,o,function(e){return t[e]}.bind(null,o));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/",i.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var d=0;d<l.length;d++)e(l[d]);var m=u;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"02bf":function(t,e){t.exports="data:image/webp;base64,UklGRlQFAABXRUJQVlA4TEgFAAAv/8A/EKDcSJIkSRL+yd6jxzPTzXxf2xGyYNs2HWsFbdu2bdu2bXc/2/izbdu2bduOnWxJbCM5kqRYv6sAcu1dV7s3nJ9f//nFGEzZ1npKgMah9NdVM7kfh3TP0ONQ2c7qMDDMRa/Eb/F3YRF6KcRnPWhEr8UvFjfBxP/3QDbfhCnoRSi5nIQ3b4JMuQh26FVcvAhp74JzEUrfBbE5CLkvI/0g+L6MoYPAwnkXa+CgWPcurl8Ef6rrRbD83WdsL4K2+68i46RnzN17E8NwUmhZSvke1sJR4WO1P2/hxmEb33jIUKL0D3F5BpE9jWKXVYYFwMaYgarGQ6ULUYnKxiGG6+DXFuQJs21QJ6/74Ar2tgcv6oKM3Ya9fcGhv07sG23bxMLYv00sjI/bRIq+kJ4vkp4v+rQNM/viPFwvWgXXi0bD9aIiuF7kuw772kJFC44XfT5/05PzC9fkhnhsxytx7cftIXY8jc8/Ycd7mXbtg8ZQtPr1b9nnm0Tt+Ql4LSzmXRmiaw0QO+/KEHEaoHHeFSKyKYDZ066FqJrufVQAO8ddKaKhArg3wzmAGLEAeNOujfFyKC7m+64YMR8x864ccS/fd+WIe/m8K0jcy+ddQeJePu8KEvfyeVeQuJePu5Zi1lRcy+ddSeJaPu9KEsMxa9wVJa7l664oMRx3h11rsX8ohoM77ooSPaGotOa4VmwZhWsR0HTNca3Yc81xr9hzzXGvWBLnFmNWSawEOF40ejECenYdL/KFxfFqBm7wfgdejbvSRLzg/3fYPe6KE9nn4sGwazWqh8jMBX/cFScaiYXVvCtOtDYWcfOuONGNWDTPu+JE3FjMWdX17TInYpeK3eMDLgJFGam4P+4KFA2v5MOu5dCciiv5tCtQdH0ln3Yliiv5tCtRZLuRL7syxY182LUdgdPF54182bVdpByehG4jX3ZFiq5FwnLatR8HhovPG/myK1Nkk4imIXwAMkXpC/msi+Z+BPY73D5AbLfmGBCv6605BojdMCoBs8utOSagpgbzrjvFcVeEWK4rQizXdbxoZQbmlOuKEMt1HS/yALhd9BsDjhetALhdpOQJcLtoAQCcLrpJMwZBpXCLSdDFCSqJFBb+8+WrRb+t+KstCQdnkCuNjRIZ3DHgX8kW2UGBhIsyGhAuGi5AumgNxCdedC2dAiJONh1ENoeidoi080WD54tWwaHxBuWHzCcHddCPFjsEx1jsYLFFXGISKxa5yhqDWLFH7MsVe0RBqlgEd2LFIuGdiblN0BMqNsHi60Vky/mi1ZAZz4tgQigmFUFiKDx64Efs/72cqoHxkAo3/BJ4TQtio7wDBIIhOIYoC4ArCaIj0t14XOMWf6seOqJfIHVCIQYUCDMJipVmRp5QWvA/pOFhtIPeECIyX10wXxLW/rka3a+MYtd+Pv2rcfT2z9UGXq6hP8V35fvn6oIGYjSIdTT2z1UE49AsztLeP1cN9KJpHMPeP1cJxD/YAmnu/rk6QMe7J2dCELl/rgqY/OxoOIz9czV47j96FBn75yqApqc7hu2fqwCOPoSEdsBc8YsPBOhhpCbNVWoF3qj9c+Xfqu1jLNk/VzzKHmPr/rnu5z//K9wfY2T/XPlF+E+REjBXfBx5epPGtPbPVWCT00Ps2T9Xg9u19PcZ0gLmKhATnu0ahJE2V+hO2N482S4iLGCuChFDMcfMgLlKROcYh7EC5moRo4Y4RTtgrh5RTTQ6DSb1rLnyNz+4+Ed8Ubx/rjrrrvJc/vkUuEbRCZirULgZss9LAioSn501RxxWwFzn59d/fn0GAA=="},"034f":function(t,e,a){"use strict";var o=a("db62"),n=a.n(o);n.a},"37d5":function(t,e,a){"use strict";var o=a("b617"),n=a.n(o);n.a},"50fb":function(t,e,a){"use strict";var o=a("a6e9"),n=a.n(o);n.a},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var o=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-app-bar",{staticClass:"black--text",staticStyle:{margin:"0%"},attrs:{app:"",color:"#BBE6D6",dark:""}},[a("v-app-bar-nav-icon",{attrs:{color:"black"},on:{click:function(e){t.drawer=!t.drawer}}}),a("v-row",{directives:[{name:"show",rawName:"v-show",value:t.searchInput,expression:"searchInput"}]},[a("v-col",{attrs:{cols:"12",sm:"12"}},[a("v-text-field",{staticClass:"black--text",attrs:{label:"Regular",clearable:"",color:"black"}})],1)],1),a("v-toolbar-title",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"hidden-md-and-up",attrs:{black:""}},[t._v("VueJs Ecommerce")]),a("v-toolbar-title",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"hidden-sm-and-down",attrs:{black:""}},[t._v("VueJs Ecommerce Applications.")]),a("v-spacer"),a("v-btn",{attrs:{icon:"",depressed:"",color:"#BBE6D6"}},[a("v-icon",{attrs:{color:"black"},on:{click:function(e){return t.searchItem()}}},[t._v("search")])],1),a("v-btn",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],attrs:{depressed:"",color:"#BBE6D6"}},[a("v-icon",{attrs:{color:"black"}},[t._v("email")])],1),a("router-link",{attrs:{to:"/products"}},[a("v-badge",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],attrs:{color:"green",content:"",overlap:""}},[a("v-btn",{attrs:{icon:"",color:"#BBE6D6"}},[a("v-icon",{attrs:{color:"black"}},[t._v("mdi-cart")])],1)],1)],1)],1),a("v-navigation-drawer",{attrs:{app:"",color:"#BBE6D6"},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[a("v-list-item",{attrs:{"two-line":""}},[a("v-list-item-avatar",[a("img",{attrs:{src:"https://randomuser.me/api/portraits/men/81.jpg"}})]),a("v-list-item-content",[a("v-list-item-title",[t._v("Application")]),a("v-list-item-subtitle",[t._v("Subtext")])],1)],1),a("v-divider"),a("v-list",{attrs:{nav:"",dense:"",app:""}},[a("v-list-item-group",{attrs:{"active-class":"deep-purple--text text--accent-4"}},[a("router-link",{attrs:{to:"/"}},[a("v-list-item",[a("v-list-item-icon",[a("v-icon",[t._v("mdi-home")])],1),a("v-list-item-title",[t._v("Home")])],1)],1),a("router-link",{attrs:{to:"/products"}},[a("v-list-item",[a("v-list-item-icon",[a("v-icon",[t._v("mdi-account")])],1),a("v-list-item-title",[t._v("Account")])],1)],1),a("v-list-item",{staticClass:"hidden-md-and-up"},[a("v-list-item-icon",[a("v-icon",[t._v("mdi-cart")])],1),a("v-list-item-title",[t._v("Cart")])],1)],1)],1)],1),a("v-content",{staticClass:"my-5"},[a("router-view")],1)],1)},r=[],s=a("5530"),c=a("2f62"),i={name:"App",methods:{searchItem:function(){this.show=!this.show,this.searchInput=!this.searchInput}},computed:Object(s["a"])({},Object(c["c"])(["productItems","numberInPagination","cartItems"])),data:function(){return{drawer:!0,show:!0,searchInput:!1}}},l=i,u=(a("034f"),a("2877")),d=Object(u["a"])(l,n,r,!1,null,null,null),m=d.exports,p=(a("7db0"),a("bc3a")),v=a.n(p),h={productItems:[],loading:!1,singleProduct:[]},g={UPDATE_PRODUCT_ITEMS:function(t,e){t.productItems=e},GETTING_A_SINGLE_PRODUCT:function(t,e){t.singleProduct=e}},f={getProductItems:function(t){var e=t.commit;v.a.get("https://vuejsapi.georgekprojects.tk/api/products").then((function(t){e("UPDATE_PRODUCT_ITEMS",t.data),console.log(t.data)})).catch((function(t){console.log("The call was unsuccessful",t)}))},getProductsFromPaginationLinks:function(t,e){var a=t.commit;h.loading=!0,v.a.get(e).then((function(t){a("UPDATE_PRODUCT_ITEMS",t.data),console.log(t.data),h.loading=!1})).catch((function(t){console.log("The call was unsuccessful",t)}))},gettingASingleProduct:function(t,e){var a=t.commit;v.a.get(e).then((function(t){return a("GETTING_A_SINGLE_PRODUCT",t.data),console.log(t.data),t.data})).catch((function(t){console.log("The call was unsuccessful",t)}))}},b={productItems:function(t){return t.productItems},singleProduct:function(t){return t.singleProduct},numberInPagination:function(t){return t.productItems.meta.last_page},productItemFromId:function(t){return function(e){console.log(t.productItems.find((function(t){return t.id===e})))}}},w={state:h,mutations:g,actions:f,getters:b},C=w,I=(a("13d5"),a("b0c0"),a("b680"),{cartItems:[]}),_={UPDATE_CART_ITEMS:function(t,e){t.cartItems=e}},P={getAllCartItems:function(t){var e=t.commit;v.a.get("https://vuejsapi.georgekprojects.tk/api/cart").then((function(t){e("UPDATE_CART_ITEMS",t.data.data),console.log(t.data)})).catch((function(t){console.log("The call was unsuccessful to get all products.",t)}))},addingProductToCart:function(t,e){var a=t.commit;this.loader=!0;var n={};n["productId"]=e.id,n["quantity"]=1,v.a.post("https://vuejsapi.georgekprojects.tk/api/cart",n).then((function(t){console.log("Adding."),console.log(t),a("UPDATE_CART_ITEMS",t.data),o["default"].swal.fire({position:"center",icon:"success",title:e.name+" Added To Cart.",showConfirmButton:!0,timer:4500})})).catch((function(t){console.log("The call was unsuccessful to post data to cart.",t)}))},deletingTheCartItems:function(t,e){var a=t.commit;console.log(e),v.a.delete("https://vuejsapi.georgekprojects.tk/api/cart/"+e.id).then((function(t){console.log("Deleting the cart Item."),201==t.status?(a("UPDATE_CART_ITEMS",t.data),o["default"].swal.fire({position:"center",icon:"question",title:e.name+" Deleted From Cart.",showConfirmButton:!0,timer:4500})):console.log("Error."),console.log(t)})).catch((function(t){console.log("The call was unsuccessful to delete data from cart.",t)}))},downUpdatingCartItems:function(t,e,a){var n=t.commit;console.log(a);var r={};r["quantity"]=e.quantity-1,v.a.put("https://vuejsapi.georgekprojects.tk/api/cart/"+e.id,r).then((function(t){console.log("Updating the cart Item."),201==t.status?(n("UPDATE_CART_ITEMS",t.data),o["default"].swal.fire({position:"center",icon:"question",title:e.name+" Updated From Cart.",showConfirmButton:!0,timer:4500})):console.log("Error."),console.log(t)})).catch((function(t){console.log("The call was unsuccessful to update data from cart.",t)}))},addUpdatingCartItems:function(t,e,a){var n=t.commit;console.log(a);var r={};r["quantity"]=e.quantity+1,v.a.put("https://vuejsapi.georgekprojects.tk/api/cart/"+e.id,r).then((function(t){console.log("Updating the cart Item."),201==t.status?(n("UPDATE_CART_ITEMS",t.data),o["default"].swal.fire({position:"center",icon:"question",title:e.name+" Updated From Cart.",showConfirmButton:!0,timer:4500})):console.log("Error."),console.log(t)})).catch((function(t){console.log("The call was unsuccessful to update data from cart.",t)}))}},k={cartItems:function(t){return t.cartItems},allProductsCost:function(t){return t.cartItems.reduce((function(t,e){return e.quantity*e.price+t}),0).toFixed(2)}},x={state:I,mutations:_,actions:P,getters:k},E=x;o["default"].use(c["a"]);var j=new c["a"].Store({state:{},mutations:{},actions:{},modules:{product:C,cart:E}}),y=a("ce5b"),T=a.n(y);a("bf40");o["default"].use(T.a);var A=new T.a({theme:{themes:{light:{primary:"#ee44aa",secondary:"#424242",accent:"#82B1FF",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FFC107"}}}}),O=(a("d5e8"),a("5363"),a("d1e78"),a("5886")),F=(a("4413"),a("14ba")),S=a.n(F),B=(a("d3b7"),a("8c4f")),D=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"hidden-sm-and-down"},[a("v-row",{attrs:{"no-gutters":""}},[a("v-col",{attrs:{sm:"5",md:"8"}},[a("ProductList")],1),a("v-col",{attrs:{sm:"5",md:"4"}},[a("Cart")],1)],1)],1),a("div",{staticClass:"hidden-md-and-up"},[a("v-row",{attrs:{"no-gutters":""}},[a("v-col",{attrs:{sm:"12"}},[a("ProductList")],1)],1)],1)])},L=[],R=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-container",[a("v-row",{staticClass:"mb-12"},t._l(t.productItems.data,(function(t,e){return a("v-col",{key:e,attrs:{sm:"5",md:"4"}},[a("ProductItem",{attrs:{product:t}})],1)})),1),a("v-pagination",{staticClass:"hidden-sm-and-down",attrs:{circle:t.circle,disabled:t.disabled,length:t.length,"next-icon":t.nextIcon,"prev-icon":t.prevIcon,page:t.page,"total-visible":t.totalVisible},on:{input:function(e){return t.getProductsFromPaginationLinks("https://vuejsapi.georgekprojects.tk/api/products?page="+t.page)}},model:{value:t.page,callback:function(e){t.page=e},expression:"page"}})],1),a("v-bottom-navigation",{staticClass:"hidden-md-and-up",attrs:{"background-color":"#BBE6D6",fixed:""},model:{value:t.bottomNav,callback:function(e){t.bottomNav=e},expression:"bottomNav"}},[a("v-pagination",{attrs:{circle:t.circle,disabled:t.disabled,length:t.length,"next-icon":t.nextIcon,"prev-icon":t.prevIcon,page:t.page,"total-visible":t.totalVisible},on:{input:function(e){return t.getProductsFromPaginationLinks("https://vuejsapi.georgekprojects.tk/api/products?page="+t.page)}},model:{value:t.page,callback:function(e){t.page=e},expression:"page"}})],1)],1)},M=[],N=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-card",{staticClass:"mx-auto",attrs:{"max-width":"400"}},[a("v-img",{staticClass:"white--text align-end",attrs:{height:"200px",src:"https://cdn.vuetifyjs.com/images/cards/docks.jpg"}},[a("router-link",{attrs:{to:"/products/"+t.product.id}},[a("v-card-title",[t._v(t._s(t.product.name))])],1)],1),a("v-card-subtitle",{staticClass:"pb-0"},[t._v(t._s(t.product.name))]),a("v-card-text",{staticClass:"text--primary"},[a("div",[t._v(t._s(t.product.totalPrice))]),a("div",[a("v-rating",{attrs:{"half-increments":""},model:{value:t.product.star,callback:function(e){t.$set(t.product,"star",e)},expression:"product.star"}})],1),a("div",[t._v("Whitsunday Island, Whitsunday Islands")])]),a("v-card-actions",[a("v-btn",{staticClass:"mx-2",attrs:{fab:"",dark:"",small:"",color:"primary"}},[a("v-icon",{attrs:{dark:""}},[t._v("mdi-heart")])],1),a("v-btn",{ref:"product.name",staticClass:"mx-2",attrs:{fab:"",dark:"",small:"",color:"secondary"},on:{click:function(e){return t.addingProductToCart(t.product)}}},[a("v-icon",{attrs:{dark:""}},[t._v("mdi-cart")])],1),a("v-btn",{staticClass:"mx-2",attrs:{fab:"",dark:"",small:"",color:"accent"}},[a("v-icon",{attrs:{dark:""}},[t._v("mdi-message")]),a("v-badge",{attrs:{color:"green",content:"6"}})],1),a("v-spacer"),a("v-btn",{attrs:{icon:""},on:{click:function(e){t.show=!t.show}}},[a("v-icon",[t._v(t._s(t.show?"mdi-chevron-up":"mdi-chevron-down"))])],1)],1),a("v-expand-transition",[a("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}]},[a("v-divider"),a("v-card-text",[t._v(" I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape. ")])],1)])],1)],1)},U=[],Y={name:"ProductItem",props:["product"],data:function(){return{show:!1}},methods:Object(s["a"])(Object(s["a"])({},Object(c["b"])(["addingProductToCart"])),{},{showSweetAlert:function(){var t=this;o["default"].swal.fire({title:"Are you sure?",text:"You want To Add to Cart  "+this.$refs.product,icon:"success",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, Add it!"}).then((function(e){e.value&&o["default"].swal.fire(t.$store.dispatch())}))}})},G=Y,J=Object(u["a"])(G,N,U,!1,null,"6b2bf069",null),K=J.exports,q=void 0,X={methods:Object(s["a"])({gettingNextPage:function(t){console.log(t)}},Object(c["b"])(["getProductsFromPaginationLinks"])),name:"ProductList",computed:Object(s["a"])({},Object(c["c"])(["productItems","numberInPagination"])),created:function(){this.$store.dispatch("getProductItems")},components:{ProductItem:K},data:function(){return{show:!1,rating:q,circle:!0,disabled:!1,length:null,nextIcon:"navigate_next",nextIcons:["mdi-chevron-right","mdi-arrow-right","mdi-menu-right"],prevIcon:"navigate_before",prevIcons:["mdi-chevron-left","mdi-arrow-left","mdi-menu-left"],page:1,totalVisible:7,bottomNav:"recent"}},updated:function(){this.length=this.numberInPagination}},W=X,z=Object(u["a"])(W,R,M,!1,null,null,null),Q=z.exports,V=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("v-card",{staticClass:"mx-auto px-5 ",attrs:{"max-width":"400"}},[o("v-img",{staticClass:"black--text align-end ",attrs:{src:a("02bf"),"max-height":"100",contain:"",color:"primary"}}),o("v-card-title"),o("h4",{staticClass:"text-center mt-0"},[t._v(" Cart Itemss. ")]),o("v-divider"),t.cartItems.length<1?o("div",[o("p",{staticClass:"font-weight-black text-center"},[t._v("There are No Items, Kindly Add.")])]):t._l(t.cartItems,(function(t){return o("div",{key:t.id},[o("SingleCartItemComponent",{attrs:{cartItem:t}})],1)})),o("v-divider"),o("TotalGoodsComponent"),[o("CheckOutButtonComponent",{attrs:{allProductsCost:t.allProductsCost}})]],2)],1)},H=[],$=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("p",[a("span",{staticClass:"font-weight-black text-capitalize"},[t._v(" "+t._s(t.cartItem.name)+" ")]),a("span",{},[t._v(" Ksh "+t._s(t.cartItem.price)+" /= each")]),a("span",{staticClass:"text-right",staticStyle:{float:"right"}},[t._v(" "+t._s(t.cartItem.quantity)+" "),a("v-icon",{staticClass:"cursor",attrs:{color:"blue"},on:{click:function(e){return t.addUpdatingCartItems(t.cartItem)}}},[t._v("arrow_upward")]),a("v-icon",{staticClass:"cursor",attrs:{color:"green"},on:{click:function(e){return t.downUpdatingCartItems(t.cartItem)}}},[t._v("arrow_downward")]),a("v-icon",{staticClass:"cursor",attrs:{color:"red"},on:{click:function(e){return t.deletingTheCartItems(t.cartItem)}}},[t._v("delete")])],1)]),a("p",[a("strong",[t._v("TotalCost")]),a("span",{staticStyle:{float:"right"}},[a("strong",[t._v("$"+t._s(t.cartItem.quantity*t.cartItem.price)+"/=")])])]),a("v-divider")],1)},Z=[],tt={name:"SingleCartItemComponent",props:["cartItem"],data:function(){return{editingQuantity:1}},methods:Object(s["a"])(Object(s["a"])({},Object(c["b"])(["deletingTheCartItems","addUpdatingCartItems","downUpdatingCartItems"])),{},{updatingCartItemsMethod:function(t){var e={};e["id"]=t.id,e["number"]=this.editingQuantity}})},et=tt,at=(a("37d5"),Object(u["a"])(et,$,Z,!1,null,"2ffcd9d2",null)),ot=at.exports,nt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},rt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("p",{staticClass:"cursor"},[t._v(" Total Items "),a("span",{staticStyle:{float:"right",color:"red"}},[a("i",{staticClass:"fa fa-trash "}),a("strong",[t._v(" Remove All")])])])])}],st={name:"TotalGoodsComponent"},ct=st,it=(a("8d95"),Object(u["a"])(ct,nt,rt,!1,null,"a692e210",null)),lt=it.exports,ut=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-row",{staticClass:"mb-12",attrs:{center:""}},[a("v-col",{attrs:{md:"12"}},[a("v-btn",{attrs:{block:"",color:"success"}},[t._v("Check Out "+t._s(t.allProductsCost))])],1)],1)],1)},dt=[],mt={name:"CheckOutButtonComponent",props:["allProductsCost"]},pt=mt,vt=Object(u["a"])(pt,ut,dt,!1,null,null,null),ht=vt.exports,gt={name:"ShoppingCartCoallationComponent",components:{SingleCartItemComponent:ot,TotalGoodsComponent:lt,CheckOutButtonComponent:ht},computed:Object(s["a"])({},Object(c["c"])(["cartItems","allProductsCost"])),created:function(){this.$store.dispatch("getAllCartItems")}},ft=gt,bt=Object(u["a"])(ft,V,H,!1,null,null,null),wt=bt.exports,Ct={name:"Home",components:{ProductList:Q,Cart:wt}},It=Ct,_t=Object(u["a"])(It,D,L,!1,null,null,null),Pt=_t.exports,kt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{color:"grey"}},[a("v-row",{staticClass:"my-8",attrs:{"no-gutters":""}},[a("v-col",{attrs:{md:"6","offset-md":"3"}},[a("v-card",{staticClass:"v-card--material pa-3",staticStyle:{"background-color":"#ABE6D6"}},[a("v-row",[a("v-col",{attrs:{align:"center"}},[a("div",{staticClass:"d-flex grow flex-wrap"},[a("v-avatar",{staticClass:"mx-auto v-card--material-avatar elevation-6",attrs:{size:"128",color:"grey"}},[a("img",{attrs:{src:"https://cdn.vuetifyjs.com/images/john.jpg",alt:"John"}})])],1),a("h2",[t._v(t._s(t.singleProduct.data.name))]),a("h3",{staticClass:"font-weight-regular"},[t._v(" Price: "+t._s(t.singleProduct.data.price)+" ")]),a("h3",{staticClass:"font-weight-regular"},[t._v(" Discount: "+t._s(t.singleProduct.data.discount)+" ")]),a("h2",{attrs:{blue:""}},[t._v("New Price: "+t._s(t.singleProduct.data.totalPrice))])])],1),a("v-row",[a("v-col",[a("h3",{attrs:{align:"center"}},[t._v("Description")]),a("p",{attrs:{align:"center"}},[t._v(" "+t._s(t.singleProduct.data.description)+" ")]),a("h3",{attrs:{align:"center"}},[t._v("Rating")]),a("v-rating",{attrs:{align:"center"},model:{value:t.rating,callback:function(e){t.rating=e},expression:"rating"}})],1)],1),a("v-row",[a("v-col",[a("h3",{attrs:{align:"center"}},[t._v("Reviews")])])],1),a("v-row",[a("v-col",{attrs:{md:"6","offset-md":"3"}},[a("v-btn",{staticClass:"ma-2 white--text",attrs:{block:"",color:"green",large:"",dark:""}},[t._v(" Add To Cart "),a("v-icon",{attrs:{right:"",dark:""}},[t._v("mdi-cart")])],1)],1)],1)],1)],1)],1)],1)},xt=[],Et=(a("a9e3"),{name:"ProductItem",props:["id"],created:function(){var t="https://vuejsapi.georgekprojects.tk/api/products/"+Number(this.id);console.log(t),this.$store.dispatch("gettingASingleProduct",t)},computed:Object(s["a"])({},Object(c["c"])(["singleProduct"])),data:function(){return{rating:null}},updated:function(){this.rating=this.singleProduct.data.star}}),jt=Et,yt=(a("50fb"),Object(u["a"])(jt,kt,xt,!1,null,null,null)),Tt=yt.exports;o["default"].use(B["a"]);var At=[{path:"/",name:"Home",component:Pt},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}},{path:"/products",name:"Products",component:wt},{path:"/products/:id",name:"SingleProduct",component:Tt,props:!0}],Ot=new B["a"]({routes:At,mode:"history"}),Ft=Ot;o["default"].config.productionTip=!1,o["default"].use(O["a"]),o["default"].use(S.a),new o["default"]({store:j,vuetify:A,router:Ft,render:function(t){return t(m)}}).$mount("#app")},"8d95":function(t,e,a){"use strict";var o=a("b384"),n=a.n(o);n.a},a6e9:function(t,e,a){},b384:function(t,e,a){},b617:function(t,e,a){},db62:function(t,e,a){}});
//# sourceMappingURL=app.4b5187da.js.map