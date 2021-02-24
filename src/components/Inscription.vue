<template>
    <div>
        <router-link to="/login">Connexion</router-link> | <router-link to="/signup">Inscription</router-link>
        <p>Veuillez vous inscrire</p>
        <p>{{ email }}</p>
        <label for="email">Email:</label>
        <input type="text" id="email" v-model="email">
        <label for="password">Mot de passe:</label>
        <input type="text" id="password" v-model="pass">
        <button @click="fetchThing">Inscrivez vous</button>
        <p>{{ chose }}</p>
    </div>
</template>

<script>
const axios = require('axios')
export default {
    name: 'Inscription',
    data() {
        return {
              chose: 'texte',
              email: '',
              pass: ''
        }
    },
    methods: {
        fetchThing() {
            // axios.get('https://jsonplaceholder.typicode.com/posts/1')
            // .then(res => {
            //     console.log(res.data.title);
            //     this.chose = res.data.title
            // })
            // .then(json => console.log(json))
            // .catch(error => console.log(error))
            // axios.post('http://localhost:3000/api/signup/', {
                // method: 'POST',
                // headers: {
                //     'Content-type': 'application/json; charset=UTF-8',
                // },
                // body: JSON.stringify({
                //     title: this.email,
                //     body: this.pass,
                // })
            //     email: this.email,
            //     password: this.pass
            // })
            // .then((response) => console.log(response))
            // .catch((error) => console.log(error));
            axios({
                method: 'post',
                url: 'http://localhost:3000/api/signup/',
                data: {
                    email: this.email,
                    password: this.pass
                }
            })
            .then((response) => {
                console.log(response);
            })
            .catch((error) => console.log(error));
            this.$router.push('/home')
        }
    }
}
</script>

<style scoped lang='scss'>
    input {
        margin: 10px;
    }
</style>