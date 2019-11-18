<template>
  <div id="createCard">
    <Header />
    <Body />
    <Footer />
  </div>
</template>

<script>
import Header from "../components/layout/Header";
import Body from "../components/layout/Body";
import Footer from "../components/layout/Footer";

export default {
  name: "about",
  components: {
    Header,
    Body,
    Footer
  }
};
</script>

<style>
#createCard {
  display: grid;
  grid-template-rows: 5vh 80vh 15vh;
  grid-template-columns: 50% 50%;
  grid-template-areas: "header header" "body body" "footer footer";
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

body {
  margin: 0;
}
#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
