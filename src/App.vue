<template>
  <div id="app">
    <div class='navbar'>
      <nav>
        <img src='./assets/logo.svg'>
        <div id="links">
        <router-link to="/">Home</router-link>
        <router-link to="/about">About </router-link>
        <router-link to="/ContactUs">Contact Us </router-link>
        </div>
        <!-- <button v-on:click='hamburger' class='icon'><i class="fas fa-bars"></i></button> -->
      </nav>
    </div>
    <router-view/>
  </div>
</template>
<script>
  // import HelloWorld from './components/HelloWorld'
export default {
  name: 'App',
  components: {
    // HelloWorld
  },
  methods: {
      hamburger() {
         var x = document.getElementById("links");
          if (x.style.display === "block") {
          x.style.display = "none";
          } else {
            x.style.display = "block";
        }
      }
  }
}
</script>

<style>
body {
  margin: 0;
}
#app {
  font-family:  'Be Vietnam', Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 0;
  height: 100vh;
  background-position: right;
  background-repeat: no-repeat;
  background-size: 700px 790px;
}
.navbar {
  overflow: hidden;
  position: relative;
  padding: 30px 110px;
  background-color:#FFF0EC;
}
  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  #links {
    font-weight: 500;
  }
  a {
    text-decoration: none;
    color: #404657;
    margin-right: 70px;
  }
  a:active {
    color: red;
  }
  a:visited {
    border-bottom-color: red;
    border-bottom:solid;
  }
  button {
    display:block;
  }

</style>
