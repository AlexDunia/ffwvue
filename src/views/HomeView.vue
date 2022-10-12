<template>
  <div className="herobg">
    <div className="container">
      <div className="heroflex">
        <div className="heroflexh1">
          {{ users }}
          <h1>
            Discover the industries <br />
            <span className="pinktext"> best tigernut </span> and <br />
            <span className="pinktext"> fruit juice </span>
          </h1>
          <p>
            Get it Natural, get it delicious & <br />
            do it healthy.
          </p>
        </div>

        <div className="herofleximg">
          <img src="../assets/Images/mockup.png" className="macbookimage" />
        </div>
      </div>
    </div>

    <div className="second">
      <div className="firstsecondflex">
        <div className="square"></div>

        <div className="orange">
          <img
            src="../assets/Images/orange.png"
            alt="tigernut in abuja"
            className="macbookimage"
          />
        </div>
      </div>

      <div className="secondcontainer">
        <div className="secondflex">
          <div className="secondfleximg">
            <img
              src="../assets/Images/fluxkitchen.png"
              alt="fluxxyfutties"
              className="macbookimage"
            />
          </div>

          <div className="secondflextext">
            <h2 className="secondflexh2">Explore Varieties</h2>
            <p className="secondflexp">
              Different flavourzs and products for <br />
              different folks. Do you!
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>

  // fresh shit
  <div className="productlistbg">
    <div className="productlistalign">
      <div class="products">
        <h1>Our Products</h1>
        <p>All our Tiger nut and fruit juice are 100% Natural</p>
      </div>

      <div className="productcategories">
        <div>
          <button>Tiger Nut</button>
        </div>

        <div>
          <button>Fruit Juice</button>
        </div>

        <div>
          <button>Snacks</button>
        </div>
      </div>

      <div className="productlistgrid">
        <div className="productlistgrid" v-for="(user, i) in users" :key="i">
          <ul className="one_e">
            <li>
              <h1 className="plname">{{ user.Name }}</h1>
            </li>
            <li>
              <h3 className="plprice">{{ user.Description }}</h3>
            </li>
            <li>
              <h3 className="plprice">{{ user.Price }}</h3>
            </li>
            <button v-on:click="addToCart(user)" class="btn btn-light">
              Add to cart
            </button>
          </ul>
        </div>
      </div>
    </div>
  </div>

  <div className="fourthbg">
    <div className="fourthfirstflex">
      <div className="fourthfirstfleximg">
        <img
          src="../assets/Images/watermelon.png"
          alt=""
          className="watermelon"
        />
        <br />
        <img
          src="../assets/Images/pineapple.png"
          alt=""
          className="macbookimage"
        />
      </div>

      <div className="square2"></div>
    </div>

    <div clasName="clr"></div>

    <div className="fourthcontainer">
      <div className="fourthflex">
        <div className="fourthflexdiv">
          <h3 className="fourthflexh3">All organic</h3>
          <p className="fourthflexp">
            All our drinks are made without any <br />
            synthetic chemicals for preservation. <br />
            Quality for us is a top priority. We want <br />
            you to have it delicious and healthy.
          </p>
        </div>

        <div className="fruitbasket">
          <img
            src="../assets/Images/fruitbasket.png"
            alt=""
            className="macbookimage"
          />
        </div>
      </div>
    </div>
  </div>
 
        <Footer/>
</template>

<script>

// @ is an alias to /src
import Footer from '@/components/FooterView.vue'

export default {
  components: {
   Footer
  },
  props: ['users', 'mycart', 'addToCart'],
 
}
</script>
<style scoped src="../assets/style.css"></style>
