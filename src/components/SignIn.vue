<template lang="html">
  <div>
    <h1>Sign in</h1>
    <form @submit.prevent="signIn">
      <div class="input-group">
        <label for="username">Username</label>
        <input type="text" v-model="username">
      </div>
      <div class="input-group">
        <label for="password">Password</label>
        <input type="password" v-model="password">
      </div>
      <input type="submit" value="SIGN UP">
    </form>

    <div class="msg" v-if="msg">
      <p><b>Session created, and a JWT returned: </b></p>
      <p>{{ msg }}</p>
    </div>

    <div class="error" v-if="error">
      <p>{{ error.response.status }} - {{ error.response.data }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SignIn',
  data () {
    return {
      username: '',
      password: '',
      msg: '',
      error: null
    }
  },
  methods: {
    signIn () {
      this.error = null

      this.$signIn({
        username: this.username,
        password: this.password
      })
      .then(response => {
        this.msg = response.data.id_token
        localStorage.setItem('id_token', response.data.id_token)
        this.$nextTick(() => {
          this.$emit('loggedin')
        })
      })
      .catch(error => {
        this.msg = ''
        this.error = error
      })
    }
  }
}
</script>

<style lang="css">
</style>
