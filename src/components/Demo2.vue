<template>
  <div class="wrapper-demo2">
    <Control @changeKey="position"></Control>
    <Ball :x="x" :y="y" ></Ball>
  </div>
</template>

<script>
import Ball from './Ball.vue';
import Control from './Control.vue';

export default {
  name: "Demo2",
  components: {
    Ball,
    Control
  },
  data() {
    return {
      x: 100,
      y: 100
    }
  },
  methods: {
    position(keyCode) {
      switch (keyCode) {
        case 38:
          this.y -= 10;
          break;
        case 37:
           this.x -= 10;
           break
        case 39:
          this.x += 10;
          break;
        case 40:
          this.y += 10;
          break;
      }
    }
  }
}
</script>

<style scoped>
.wrapper-demo2 {
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
}
</style>