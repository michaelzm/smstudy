<template>
  <div id="createCard">
    <Header />
    <Body />
  </div>
</template>

<script>
import Header from "../components/layout/Create/Header";
import Body from "../components/layout/Create/Body";
import Footer from "../components/layout/Create/Footer";

export default {
  name: "create",
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
  grid-template-rows: 3vh 92vh;
  grid-template-columns: 50% 50%;
  grid-template-areas: "header header" "body body";
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
