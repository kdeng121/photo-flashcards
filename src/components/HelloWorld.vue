<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
      <button v-on:click="logout">LOG OUT</button>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: "Welcome, " + firebase.auth().currentUser.displayName + "!"
    }
  },
    methods: {
        logout: function(){
              // Sign out of Firebase.
            firebase.auth().signOut().then(
                (user) => {
                    this.$router.replace('login')
                }
            );
        }
    }
    
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
