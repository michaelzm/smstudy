<template>
  <div class="body-learn">
    <Cardinfo></Cardinfo>
    <Cardfield
      v-if="finishedLoading"
      v-bind:answerVisible="answerVisible"
      v-bind:card="cardInReview"
    ></Cardfield>
    <div class="empty" v-if="!finishedLoading">Keine Karten vorhanden.</div>
    <Answerbar
      v-bind:answer_is_visible="answerVisible"
      v-if="finishedLoading"
      @show-answer="setAnswerVisible"
      @evaluate-answer="updateCard"
    ></Answerbar>
  </div>
</template>

<script>
import axios from "axios";
import Cardfield from "./body/Cardfield.vue";
import Cardinfo from "./body/Cardinfo.vue";
import Answerbar from "./body/Answerbar.vue";
export default {
  data() {
    return {
      cards: [],
      finishedLoading: false,
      answerVisible: false,
      cardInReview: "",
      reviewCounter: 0
    };
  },
  components: {
    Cardfield,
    Cardinfo,
    Answerbar
  },
  methods: {
    getTodayCards() {
      var self = this;
      /* eslint-disable no-console */
      axios
        .get("http://localhost:3000/today")
        .then(function(response) {
          // handle success
          console.log(response.data);
          self.cards = response.data;
          if (response.data.length > 0) {
            self.finishedLoading = true;
            self.setCardInReview();
          }
        })
        .catch(function(error) {
          // handle error
          console.log(error);
        })
        .finally(function() {
          console.log("fetching done");
          // always executed
        });
    },
    setCardInReview() {
      if (this.cards[this.reviewCounter]) {
        this.cardInReview = this.cards[this.reviewCounter];
      } else {
        this.finishedLoading = false;
      }
    },
    setAnswerVisible() {
      console.log("Setting answer visible");
      this.answerVisible = true;
    },
    updateCard() {
      this.reviewCounter++;
      var newDate = Date.now() + 86400;
      console.log(newDate);
      console.log("updating card");
      axios
        .patch("http://localhost:3000/collection/card/" + this.cards[0]._id, {
          next_review_date: newDate,
          reviewCount: this.cards[0].reviewCount + 1
        })
        .then(res => {
          console.log(res);
        })
        .catch(err => console.log(err.response.data));
      this.answerVisible = false;
      this.setCardInReview();
    }
  },
  created() {
    this.getTodayCards();
  }
};
</script>

<style scoped>
.body-learn {
  background-color: blue;
  height: 95vh;
  grid-area: body;
}
</style>
