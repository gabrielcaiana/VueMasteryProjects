<template>
  <form @submit.prevent="onSubmit">
    <div>
      <label>Nome</label>
      <input type="text" id="name" v-model="register.name" />
    </div>
    <div>
      <label>Email</label>
      <input type="email" id="email" v-model="register.email" />
    </div>
    <div>
      <label>Data de nascimento</label>
      <input type="text" id="age" v-model="register.age" />
    </div>
    <div>
      <label>Senha</label>
      <input type="number" id="password" v-model="register.password" />
    </div>
    <button type="submit">Submit</button>
  </form>
</template>

<script>
export default {
  data: () => ({
    register: {
      name: '',
      email: '',
      age: '',
      password: '',
    },
  }),

  methods: {
    onSubmit() {
      this.$emit('formSubmitted', this.register);
    },
  },
};
</script>
