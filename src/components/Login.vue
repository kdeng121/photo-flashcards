<template>
    <div class="login">
        <h2>Sign in with Google</h2>
        <button v-on:click="login">Sign in with Google!!!</button>
    
    </div>
</template>

<script>
    
    export default {
        name: 'login',
        data: function(){
            return{}
        },
        methods: {
            login: function(){
                // Sign in Firebase using popup auth and Google as the identity provider.
                var provider = new firebase.auth.GoogleAuthProvider();
                firebase.auth().signInWithPopup(provider).then(
                    (user) => {
                        this.$router.replace('hello')
                    }
                );
                
            } 
            
        }
    }

</script>

<style scoped>
</style>