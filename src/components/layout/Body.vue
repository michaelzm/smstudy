<template>
  <div class="body">
    <TextInput @add-card="addCard"></TextInput>
  </div>
</template>

<script>
import TextInput from "./body/Input";
import axios from "axios";
export default {
  components: {
    TextInput
  },
  methods: {
    onAddCard(sendData) {
      const { question, answer } = card[0];
      axios
        .post("http://localhost:3000/card", {
          question: question,
          answer: answer
        })
        .catch(err => console.log(err));
      /* eslint-disable no-console */
      console.log("adding card" + card);
    },
    addCard(newTodo) {
      axios.post("http://localhost:3000/card", {
        question: "123321312",
        answer: "52521421412"
      });
    }
  }
};
</script>

<style scoped>
.body {
  background-color: blue;
  grid-area: body;
}
</style>
