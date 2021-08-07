<template>
<div class="control">
  <button class="btn btn-up" @click="$emit('changeKey', 38)">Up</button>
  <button class="btn btn-left" @click="$emit('changeKey', 37)">Left</button>
  <button class="btn btn-right" @click="$emit('changeKey', 39)">Right</button>
  <button class="btn btn-down" @click="$emit('changeKey', 40)">Down</button>
</div>
</template>

<script>
export default {
  name: "Control",
  emits: ['changeKey'],
}
</script>

<style scoped>
.control {
  width: 45%;
  height: 300px;
  padding: 20px;
  border: 1px solid black;
  border-radius: 5px;
  position: relative;
}

.btn {
  position: absolute;
  border: 1px solid black;
  border-radius: 3px;
  display: inline-block;
  padding: 5px 20px;
  cursor: pointer;
  background: #42b983;
  transform: translateX(-50%);
}

.btn-up {
  top: 20px;
  left: 50%;
}

.btn-left {
  top: 70px;
  left: 30%;
}

.btn-right {
  top: 70px;
  left: 70%;
}

.btn-down {
  top: 120px;
  left: 50%;
}
</style>