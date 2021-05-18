<template>
  <form @submit.prevent="onSubmit">
    <input type="email" v-model="login.email" id="email" />
    <input type="password" v-model="login.password" id="password" />
    <button type="submit">Submit</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      login: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    onSubmit() {
      this.$emit('formSubmitted', this.login)
    }
  }
}
</script>