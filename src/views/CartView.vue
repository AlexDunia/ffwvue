<template>

 <div className="cartcontainer"> 

    <div className="cflex"> 
    <div className="pimgc"> <h4> Product img </h4>  </div> 
    <div className="dc"> <h4> Description </h4>  </div> 
    <div className="pc"> <h4 className="pcc"> Price </h4>  </div> 
    <div className="dec"> <h4> Delete </h4>  </div> 
    </div>

     <hr/>
    <br/> 
    <br className="secondspace"/> 
   
   <div v-for="(onecart, i) in mycart" :key="i" className="cflex">
    <div className="pimgc">  <img :src="onecart.Img"/>  </div>
   <div className="dc">  
      <h4> {{onecart.Name}} </h4>
      <div className="dcdescription"> 
       <h3>{{onecart.Description}}</h3>
       </div> 
      </div>
   <div className="pc"> <h4> {{onecart.Price}} </h4> </div> 
   <div className="dec mybtn"> <button @click="Delete(onecart)"> X </button> </div> 
   </div>

    <hr/>
    <br/> 
    <br/> 
    <br className="secondspace"/>
   <input type="button" v-model="moveco"  @click="checkout(mycart)">

   <form action="" method="post" @submit.prevent="tweet">
                        <div class="form-group">
                            <label for="">Name</label>
                            <input type="text" v-model="name" class="form-control">
                        </div>
                        <div class="form-group">
                            <label for="">Description</label>
                            <input type="text" v-model="description" class="form-control">
                        </div>
                         <div class="form-group">
                            <label for="">Price</label>
                            <input type="text" v-model="price" class="form-control">
                        </div>
                        <div class="form-group">
                            <button> Submit </button> 
                        </div>
                    </form> 

  <div className="pcdiv"> 
  
   <div className="productcategoriess">
   <button> Clear Cart </button>
   </div>

    <div className="productcategoriesss">
   <button> Update Cart </button>
   </div>

   </div> 

   <hr> 

  <div class="gt">
  <h2> Grand Total </h2>
  </div>

  <hr>

 <div className="gtflex"> 

  <div className="gttext"> 
  <h3> Subtotal </h3> 
  </div> 

  <div className="gttext"> 
  <h3> N1,000.00</h3> 
  </div> 

  </div> 

  <div className="gtflex"> 

  <div className="gttext"> 
  <h3> Shipping </h3> 
  </div> 

  <div className="gttext"> 
  <h3> N1,000.00</h3> 
  </div> 

  </div> 

  <div className="gtflex"> 

  <div className="gttext"> 
  <h3> Grand Total </h3> 
  </div> 

  <div className="gttext"> 
  <h3> N1,000.00</h3> 
  </div> 

  </div> 

  <div className="checkout"> 
  <button> CHECKOUT </button>
  </div>
  
  
  </div>
  
    
</template>

<script> 
import axios from 'axios'
export default {

     props: {
    mycart: {
      type: Array,
      required: false
    }
     },
    data(){
       return{
         
           moveco: []
       }
    },
    methods: {
      
       checkout(){
         var cart = this.mycart
            

                var co = new FormData();
 
                co.append("checkout", cart);
               
               axios({
                    url: "http://localhost/Phplessons/checkout.php",
                    method: "post",
                     data: cart,
                })
        .then((response) => {
        console.log(response.data);
        }, (error) => {
        console.log(error);
});
            }
       },
}
</script> 

<style scoped src="../assets/Cart.css">
</style>
