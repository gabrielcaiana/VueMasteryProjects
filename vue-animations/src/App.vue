<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Modal</router-link> |
      <router-link to="/lista">Lista</router-link> |
      <router-link to="/drawer">Drawer</router-link> |
      <router-link to="/cards">Cards</router-link> | 
      <router-link to="/simple">Simple</router-link> |
      <router-link to="/stagger">Stagger</router-link> |
      <router-link to="/state">State</router-link> |
      <router-link to="/timeline">Timeline</router-link> |
       <router-link to="/master">Master</router-link> 
    </div>
    <!-- <transition name="slide-fade" mode="out-in"> -->
      <router-view />
    <!-- </transition> -->
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.fade-enter {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: 0.5s ease-out;
}

.fade-leave-to {
  opacity: 0;
}

.slide-fade-enter {
  transform: translateX(30px);
  opacity: 0;
}

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.5s ease;
}

.slide-fade-leave-to {
  transform: translateX(-30px);
  opacity: 0;
}

.slide-up-enter {
  transform: translateY(30px);
  opacity: 0;
}

.slide-up-enter-active {
  transition: all 0.5s ease;
}

.slide-up-move {
  transition: transform 0.5s ease-out;
}
</style>
