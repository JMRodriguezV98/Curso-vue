<template>
  <h2>{{ customTitle }}</h2>
  <p>{{ counter }} <sup>2</sup> = {{ squareCounter }}</p>

  <div>
    <button v-on:click="increase">+1</button>
    <button v-on:click="decrease">-1</button>
  </div>
</template>

<script>
export default {
  props:{
    msg: String,
    start: {
      type: Number,
      // required: true,
      default: 10,
      validator( value ){
        return value > 0
      }
    },
  },
  //name: 'Counter'
  data() {
    return {
      counter: this.start
    }
  },
  methods: {
    getSquareValue(){
      return this.counter * this.counter
    },
    increase(){
      return this.counter = this.counter + 1
    },
    decrease(){
      return this.counter = this.counter - 1
    }
  },
  computed: {
    squareCounter(){
      return this.counter *  this.counter
    },
    customTitle(){
      return this.msg ? this.msg : 'Counter'
      
     //msg || "counter"
    }
  }
}
</script>

<style>

button{
  background-color: #64BB87;
  border-radius: 5px;
  border: 1px solid white;
  color: white;
  cursor: pointer;
  margin: 0 5px;
  padding: 5px 15px;
  transition: 0.3s ease-in-out;
}

button:hover{
  background-color: #5AA67B;
  transition: 0.3s ease-in-out;
}

</style>