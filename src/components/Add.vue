<template>
  <div class="wrapper-add">
    <div class="popup">
      <button class="btn-close" @click="$emit('closeAddTask')">Close</button>
      <div>
           <label>Task Name     </label>
           <input type="text" v-model="taskName">
           <button class="btn-add" @click="onAddTask()">ADD</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Add.vue",
  emits: ['closeAddTask', 'addTask'],
  data() {
    return {
      taskName: '',
    }
  },
  methods: {
    onAddTask() {
      this.$emit('addTask', this.taskName);
      this.$emit('closeAddTask');
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