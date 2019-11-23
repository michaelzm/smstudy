<template>
  <div class="answerbar">
    <div class="showAnswer" v-if="!answer_visible" @click="showAnswer">Antwort zeigen</div>
    <div class="numeric-answer-buttons" v-if="answer_visible">
      <div class="answerbutton answer-0" data-value="0" @click="evaluateAnswer($event)">😖</div>
      <div class="answerbutton answer-1" data-value="1" @click="evaluateAnswer($event)">😞</div>
      <div class="answerbutton answer-2" data-value="2" @click="evaluateAnswer($event)">😐</div>
      <div class="answerbutton answer-3" data-value="3" @click="evaluateAnswer($event)">🙂</div>
      <div class="answerbutton answer-4" data-value="4" @click="evaluateAnswer($event)">🔥</div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      answer_visible: false,
      answer_sent: false
    };
  },
  methods: {
    showAnswer() {
      this.answer_visible = true;
      this.$emit("show-answer");
    },
    evaluateAnswer(e) {
      if (!this.answer_sent) {
        console.log(e.target.dataset.value + " sent");
        this.$emit("evaluate-answer", e.target.dataset.value);
        this.answer_sent = true;
      }
    }
  }
};
</script>
<style>
.numeric-answer-buttons {
  justify-content: flex-end;
  bottom: 0px;
  height: 5vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.showAnswer {
  color: white;
  width: 80vw;
  height: 10vh;
  background-color: red;
}
.answerbutton {
  margin-left: 5vw;
  margin-right: 5vw;
  height: 5vh;
  width: 10vw;
  background-color: greenyellow;
}
</style>