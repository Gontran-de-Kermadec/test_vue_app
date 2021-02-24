<template>
  <div class="home">
    <Homepage />
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
//import Inscription from '@/components/Inscription.vue'
//import Inscription from '../components/Inscription.vue'
import Homepage from '../components/Homepage.vue'

export default {
  name: 'Home',
  components: {
    Homepage
  }
}
</script>
