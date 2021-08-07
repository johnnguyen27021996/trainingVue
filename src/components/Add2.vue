<template>
  <div class="wrapper-add" v-show="open">
    <div class="popup">
      <button class="btn-close" @click="$emit('closeAddTask')">Close</button>
      <div>
        <label>Task Name     </label>
        <input type="text">
        <button class="btn-add">ADD</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Add2",
  props: {
    open: {
      type: Boolean,
      require: true,
      default: false,
    }
  }
}
</script>

<style scoped>
.wrapper-add {
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, .5);
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.popup {
  width: 40%;
  height: 300px;
  background: #ffffff;
  border: 1px solid #42b983;
  border-radius: 5px;
  padding: 20px;
}

.btn-close {
  background-color: #D96C06;
  border: 1px solid black;
  cursor: pointer;
  margin-bottom: 20px;
}
</style>