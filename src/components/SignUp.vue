<template lang="html">
  <div>
    <h1>Sign up</h1>
    <form @submit.prevent="signUp">
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
      <p><b>User Created, and a JWT returned: </b></p>
      <p>{{ msg }}</p>
    </div>

    <div class="error" v-if="error">
      <p>{{ error.response.status }} - {{ error.response.data }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SignUp',
  data () {
    return {
      username: '',
      password: '',
      msg: '',
      error: null
    }
  },
  methods: {
    signUp () {
      this.error = null

      if (this.username.trim().length < 1) {
        alert('please enter your username')
        return
      }
      if (this.password.trim().length < 7) {
        alert('password must more then 6 characters')
        return
      }

      this.$signUp(this.username, this.password)
      .then(response => {
        this.msg = response.data.id_token
        localStorage.setItem('id_token', response.data.id_token)
        this.$nextTick(() => {
          this.$emit('loggedin')
        })
      })
      .catch(error => {
        this.error = error
      })
    }
  }
}
</script>

<style lang="css">
.input-group {
  margin-bottom: 15px;
}
form {
  box-sizing: border-box;
  width: 80%;
  margin: 0 auto;
}
.input-group input[type=text],
.input-group input[type=password]{
  box-sizing: border-box;
  margin: 0 auto;
  display: block;
  border: 1px solid #ddd;
  width: 100%;
  height: 34px;
  padding: 0 10px;
}
.input-group label {
  float: left;
  margin-bottom: 10px;
  font-size: 16px;
  font-weight: bold;
}
input[type=submit] {
  display: block;
  background-color: #42b983;
  color: white;
  border: none;
  padding: 10px 0;
  width: 100%;
}

.msg {
  box-sizing: border-box;
  text-align: left;
  width: 80%;
  margin: 20px auto;
  overflow: auto;
  word-wrap: break-word;
}
.error {
  margin: 10px;
  color: #f66;
}
</style>
