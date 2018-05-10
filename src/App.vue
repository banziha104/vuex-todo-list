<template>
  <div id="app">
    Parent Counter : {{ this.$store.getters.getCounter }} <br>
    <button @click="addCounter">+</button>
    <button @click="subCounter">-</button>
  </div>
</template>
<script>
  import Child from "./Child.vue"
  import { mapGetters,mapMutations } from 'vuex'

  export default {
    methods : {
      addCounter(){
        this.$store.commit('addCounter',10)
      },
      subCounter(){
        this.$store.commit('subCounter',20)
      }
    },
    computed : {
      ...mapGetters([
        'getCounter'
      ])
    },
    components : {
      'child' : Child
    }
  }
</script>
