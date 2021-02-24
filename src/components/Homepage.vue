<template>
    <div>
        <h1>Bienvenue sur Groupomania</h1>
        <p @click="fetchUser">Application en cours de construction</p>
        <p>{{ adress }}</p>
    </div>
</template>
<script>
const axios = require('axios')
export default {
    name: 'Homepage',
    data() {
        return {
            adress: ''
        }
    },
    methods: {
        fetchUser() {
            axios.get('http://localhost:3000/api/user/')
            .then(reponse => {
                console.log(reponse.data);
                this.adress = reponse.data;
            })
            .catch(error => console.log(error));

        }
    }
}
</script>
<style scoped lang='scss'>

</style>