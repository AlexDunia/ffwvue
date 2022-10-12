<template>
    <div className="container">
    <div className="navflex"> 
      <div className="flogow"> 
      <img src="./assets/Images/fluxxylogo.png" >
      </div> 
      <div className="navlinks">
      <ul>
     <li> <router-link to="/">Home</router-link> </li> 
     <li> <router-link to="/about">About</router-link> </li> 
     <li> <router-link to="/mycart" :mycart="cart">My cart {{cart.length}} </router-link> </li> 
     <li> <router-link to="/contactus"> Contact us </router-link> </li> 
     </ul> 
      </div> 
       </div> 
  </div> 

     <div className="container">
    <div className="navflex"> 
      <div className="flogow"> 
      <img src="./assets/Images/fluxxylogo.png" >
      </div> 
      <div className="navlinks">
     
     <i class="fa-solid fa-bars fa-lg"> </i>
  
      </div> 
       </div> 
  </div> 
  <router-view :users="users" :addToCart="addToCart" :mycart="cart"/>
  
  
</template>

<script> 
import axios from 'axios'

export default {
   data () {
    return {
     // normally we stored all the products in this place dynamically.  
      showsidebar: true,
      cart: [],
      users: []
    }},
     mounted() {
    axios
      .get(`http://localhost/Phplessons`)
      .then((response) => {
      // JSON responses are automatically parsed.
        this.users = response.data
        console.log(response.data)
   })
      .catch((e) => {
        this.errors.push(e)
   })
},
    methods: {
    addToCart(product){
     this.cart.push(product)
     console.log(this.cart)   
    },
    Delete(onecartt){
      this.cart.splice(this.cart.indexOf(onecartt), 1)
    } 
  }
  }

</script> 

<style src='@/assets/style.css'>
</style>
