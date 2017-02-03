<template lang="html">
  <div>
    <nav>
      <router-link to="/signup" v-if="!JWT">
        Sign up
      </router-link>
      <router-link to="/signin" v-if="!JWT">
        Sign in
      </router-link>
      <router-link to="/protected-quote" v-if="JWT">
        Top secret
      </router-link>
      <router-link to="/" exact>
        Home
      </router-link>
    </nav>

    <router-view v-on:loggedin="refreshJWT"></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      JWT: undefined
    }
  },
  methods: {
    refreshJWT () {
      this.JWT = localStorage.getItem('id_token')
    }
  },
  mounted () {
    this.refreshJWT()
  }
}
</script>

<style lang="css">
* {
  padding: 0;
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size: 14px;
}
nav {
  background-color: white;
  height: 50px;
  line-height: 50px;
  margin-bottom: 30px;
  box-shadow: 0 0 4px rgba(0,0,0,.15);
}
nav a {
  display: block;
  float: right;
  padding: 0 10px;
  color: #2c3e50;
  text-decoration: none;
  font-weight: bold;
  font-size: 16px;
}
.router-link-active {
  color: #42b983;
}
</style>
