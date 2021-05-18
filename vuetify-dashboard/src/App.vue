<template>
  <v-app id="app" v-resize="onResize">
    <v-app-bar app color="primary" dark>
      <v-toolbar-title>Vuetify Dashboard</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        v-for="link in links"
        :key="`${link.label}-header-link`"
        text
        rounded
        :to="link.url"
      >
        {{ link.label }}
      </v-btn>

      <v-switch
        @click="toggleTheme"
        class="ml-4 mt-5"
        v-model="switch1"
        label="Dark Mode"
      ></v-switch>
    </v-app-bar>

    <v-content>
      <router-view></router-view>
    </v-content>

    <v-footer color="primary lighten-1" padless>
      <v-row justify="center" no-gutters>
        <v-btn
          v-for="link in links"
          :key="`${link.label}-footer-link`"
          color="white"
          text
          rounded
          class="my-2"
          :to="link.url"
        >
          {{ link.label }}
        </v-btn>
        <v-col class="primary lighten-2 py-4 text-center white--text" cols="12">
          {{ new Date().getFullYear() }} — <strong>Vuetify Dashboard</strong>
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>
<script>
export default {
  name: "App",

  data: () => ({
    switch1: false,
    links: [
      {
        label: "Home",
        url: "/",
      },

      {
        label: "Login",
        url: "/login",
      },

      {
        label: "Dashboard",
        url: "/dashboard",
      },

      {
        label: "Signup",
        url: "/signup",
      },
    ],
  }),

  methods: {
    onResize() {
      console.log("This window size is changing!");
    },

    toggleTheme() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    },
  },
};
</script>

<style lang="scss">
@import './assets/css/fonts.css';
  #app {
    font-family: 'Poppins' !important;
  }
</style>
