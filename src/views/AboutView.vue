<template>
   <div v-for="(onecart, i) in cart" :key="i">
            <h1> {{onecart.Name}} </h1>
            <h2> price </h2>
            <button @click="Delete(onecart)"> Delete me</button>
          </div>
</template>

<script>
export default{
  data() {
    return {
      cart: []
    }
  }
}
</script>
