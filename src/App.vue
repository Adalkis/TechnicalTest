<template>
  <div id="app">
    <nav class="navBar d-flex justify-content-between">
      <div class="d-flex align-items-center ms-3">
        <b-icon 
          icon="card-checklist" 
          font-scale="2"
          >
        </b-icon>
        <span class="logoText ms-2"> TODO </span>
      </div>
    </nav>
    <router-view/>
  </div>
</template>

<style lang="less">
@import './assets/styles.css';
body, html, #app {
  height: 100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  .navBar {
    padding: 22px 34px;
    box-shadow: 1px 1px 2px #808080;
    .logoText {
      font-size: 19px;
      font-weight: 900;
    }
  }
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
@media (max-width: 600px) {
  #app .navBar {
    padding: 22px 3px;
  }
}
</style>
