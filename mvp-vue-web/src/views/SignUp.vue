<template>
  <div class="sign-up">
    <h3>Let's create your account!</h3>
    <input type="text" v-model="email" placeholder="Email" /><br />
    <input type="password" v-model="password" placeholder="Password" /><br />
    <button @click="signUp">Sign Up</button>
    <span>or go back to <router-link to="/login">login</router-link></span>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'signUp',
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    signUp: function() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(
          () => {
            //alert('Your account has been successfully created!')
            this.$router.replace('home')
          },
          err => {
            //回報錯誤
            alert('Oops.' + err.message)
          }
        )
    }
  }
}
</script>

<style scoped>
.sign-up {
  margin-top: 40px;
}
input {
  margin: 10px 0;
  width: 20%;
  padding: 15px;
}
button {
  margin-top: 20px;
  width: 10%;
  cursor: pointer; /*hover上去會有一個手*/
}
span {
  display: block;
  margin-top: 20px;
  font-size: 11px;
}
</style>
