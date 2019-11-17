<template>
  <div id="app">
    <Header />
    <Body />
    <Footer />
  </div>
</template>

<script>
import Header from "./components/layout/Header";
import Body from "./components/layout/Body";
import Footer from "./components/layout/Footer";

export default {
  name: "app",
  components: {
    Header,
    Body,
    Footer
  }
};
</script>

<style>
#app {
  display: grid;
  grid-template-rows: 5vh 80vh 15vh;
  grid-template-columns: 50vw 50vw;
  grid-template-areas: "header header" "body body" "footer footer";
}

body {
  margin: 0;
}
</style>
