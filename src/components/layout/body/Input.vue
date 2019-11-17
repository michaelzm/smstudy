<template>
  <div class="textField">
    <div class="informations">
      <textarea placeholder="Frage" name="textQuestion" id="tq" />
      <textarea placeholder="Antwort" name="textQuestion" id="ta" />
    </div>
    <div class="sendButton" @click="sendData">Absenden</div>
  </div>
</template>

<script>
export default {
  methods: {
    sendData() {
      const newTodo = {
        id: 12312,
        title: "test"
      };
      /* eslint-disable no-console */
      console.log("working");
      this.$emit("add-card", newTodo);
    }
  }
};
</script>

<style scoped>
.informations {
  height: 100%;
}
.sendButton {
  color: red;
  background-color: lime;
  width: fit-content;
  height: fit-content;
}
.textField {
  background-color: darkgrey;
  height: 90%;
}
#tq {
  margin: 5% 0 0 0%;
  height: 70%;
  width: 40vw;
  overflow-x: hidden;
  resize: none;
  background-color: lime;
}
#ta {
  background-color: antiquewhite;
  margin: 5% 0 0 0%;
  height: 70%;
  width: 40vw;
  overflow-x: hidden;
  resize: none;
}
</style>
