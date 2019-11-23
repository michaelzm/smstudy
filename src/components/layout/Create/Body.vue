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
    addCard(newCard) {
      /* eslint-disable no-console */
      console.log(newCard);
      axios.post("http://localhost:3000/collection", {
        question: newCard.textquestion,
        answer: newCard.textanswer,
        next_review_date: Date.now()
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
