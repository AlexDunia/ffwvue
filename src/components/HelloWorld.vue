  <template> 
  <div > 
    <ul className="one_e"> 
          <li>  <h1 className="plname"> {{product.Name}} </h1> </li>
          <li>  <h3 className="plprice"> {{product.Price}} </h3> </li>
          <li>  <h3 className="plprice"> {{product.Description}} </h3> </li> 
           <button v-on:click="addToCart(product)" class="btn btn-light"> Add to cart </button>
        </ul> 

   </div>
   </template> 