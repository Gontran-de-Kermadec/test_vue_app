<template>
    <div>
        <div id="nav">
            <router-link to="/signup">Inscription</router-link> |
            <router-link to="/login">Connexion</router-link>
        </div>
    <Inscription/>
    <p @click="deleteUser">cliquer pour supprimer utilisateur</p>
    <!-- <router-view/> -->
    </div>
</template>

<script>
//const axios = require('axios')
import axios from 'axios'
import Inscription from '../components/Inscription'
//import Connexion from '../components/Connexion'
export default {
    name: 'SignLog',
    components: {
        Inscription,
        //Connexion
    },
    methods: {
      deleteUser() {
            axios.delete('http://localhost:3000/api/user/')
            .then(reponse => {
                console.log(reponse);
                //this.adress = reponse.data;
            })
            .catch(error => console.log(error));

        }
    }
}
</script>

<style scoped lang='scss'>
    #nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>>
