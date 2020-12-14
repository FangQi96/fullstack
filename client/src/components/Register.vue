<template>
  <v-container>
    <div class="while elevation-2">
      <v-row>
        <v-col xs6 offset-xs3>
          <v-toolbar dark dense>
            <v-toolbar-title>Register</v-toolbar-title>
          </v-toolbar>
          <br>
          <div class="pl-4 pr-4 pt-2 pb-2">
            <input
              type="email"
              name="email"
              v-model="email"
              placeholder="email" />
            <br>
            <input
              type="password"
              name="password"
              v-model="password"
              placeholder="password" />
            <br>
            <div class="error" v-html="error" />
            <br>
            <v-btn color = "indigo" dark
              @click="register">
              Register
            </v-btn>
          </div>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  name: 'Register',
  data () {
    return {
      email: 'a',
      password: '123',
      error: null
    }
  },
  methods: {
    async register () {
      try {
        const response = await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
        console.log(response)
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  },
  watch: {
    email (value) {
      console.log('email has changed', value)
    }
  },
  mounted () {
    setTimeout(() => {
      this.email = 'hello, world'
    }, 2000)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.error{
  color: red;
}
</style>
