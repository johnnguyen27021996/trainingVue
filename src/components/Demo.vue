<template>
  <button @click="isShowDialog = true">Show</button>
  <Popup :is-show="isShowDialog" @close="isShowDialog = $event">
    <template v-slot:title>
      <p class="title">title</p>
    </template>
    <template #cancel="{ cancelClick }">
      <button @click="cancelClick">Cancel</button>
    </template>
  </Popup>
</template>

<script>
import Popup from './share/Popup.vue';
export default {
  name: "Demo",
  components: {
    Popup
  },
  data() {
    return {
      isShowDialog: false,
    }
  }
}
</script>

<style scoped>
.title {
  font-size: 28px;
  line-height: 36px;
  color: #4c4c4c;
  text-align: center;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin: 0 0 20px;
}
</style>