<template>
  <div class="wrapper-popup" v-if="isShow">
    <div class="main">
      <slot name="title">
        <p class="title">{{ title }}</p>
      </slot>
      <p class="content" v-html="content"></p>
      <div class="btn-group">
        <slot name="accept" v-if="isConfirm" :accpectClick="onAcceptClicked" >
          <button class="btn btn-accept" @click="onAcceptClicked()">{{ accept }}</button>
        </slot>
        <slot name="cancel" :cancelClick="onCancelClicked">
          <button class="btn btn-cancel" @click="onCancelClicked()">{{ cancel }}</button>
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Popup",
  emits: ['accept', 'close'],
  props: {
    isShow: {
      type: Boolean,
      require: true,
      default: false,
    },
    title: {
      type: String,
      default: 'title',
    },
    content: {
      type: String,
      default: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    },
    accept: {
      type: String,
      default: 'Yes',
    },
    cancel: {
      type: String,
      default: 'No',
    },
    isConfirm: {
      type: Boolean,
      default: true,
    }
  },
  methods: {
    onAcceptClicked() {
      this.$emit('accept');
      this.onCancelClicked();
    },
    onCancelClicked() {
      this.$emit('close', false)
    }
  }
}
</script>

<style scoped>
.wrapper-popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, .5);
}

.main {
  width: 500px;
  height: auto;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid #000000;
  border-radius: 5px;
  background: #ffffff;
  color: black;
  position: relative;
}

.title {
  font-size: 28px;
  line-height: 36px;
  color: #4c4c4c;
  text-align: center;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin: 0 0 20px;
}

.content {
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #28262C;
  margin: 0 0 20px;
}

.btn-group {
  display: flex;
  justify-content: flex-end;
}

.btn {
  display: inline-block;
  padding: 7px 30px;
  color: black;
  border: 1px solid #FB6B90;
  border-radius: 3px;
  cursor: pointer;
}

.btn-accept {
  margin-right: 10px;
  background: #FB8DA0;
}

.btn-cancel {
  border-color: #E4D4C8;
  background: #EFEBE0;
}
</style>