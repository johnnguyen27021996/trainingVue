<template>
<div class="ball">
  <div class="circle" :style="{ transform: 'translate('+ x + 'px, ' + y + 'px)' }"></div>
</div>
</template>

<script>
export default {
  name: "Ball",
  props: {
    x: {
      type: Number,
    },
    y: {
      type: Number,
    }
  },
}
</script>

<style scoped>
.ball {
  width: 45%;
  height: 500px;
  padding: 20px;
  border: 1px solid black;
  border-radius: 5px;
}

.circle {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: #FF595E;
}
</style>