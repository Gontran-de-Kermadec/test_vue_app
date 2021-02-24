<template>
    <div>
        <router-link to="/signup">Inscription</router-link>
        <p>Veuillez vous connecter</p>
        <label for="email">Email:</label>
        <input type="text" id="email">
        <label for="password">Mot de passe:</label>
        <input type="text" id="password">
        <button>Inscrivez vous</button>
    </div>
</template>

<script>
export default {
    name: 'Connexion',

}
</script>

<style scoped>

</style>