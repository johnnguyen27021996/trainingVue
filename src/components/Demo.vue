<template>
 <div class="wrapper">
<!--   <label>Task Name     </label>-->
<!--   <input type="text" v-model="taskName">-->
<!--   <button class="btn-add" @click="onAddTask()">ADD</button>-->
   <button class="btn-add" @click="showAddPopup = true">ADD</button>
<!--   <Add v-show="showAddPopup" @closeAddTask="showAddPopup = false" @addTask="onAddTask"></Add>-->
   <Add2 :open="showAddPopup" @closeAddTask="showAddPopup = false" @addTask="onAddTask"></Add2>
   <select v-model="filter" class="filter">
     <option value="all">Filter All</option>
     <option value="completed">Filter Completed</option>
     <option value="notCompleted">Filter Not Completed</option>
   </select>
   <p>List Task</p>
   <ul>
     <li v-for="(task, index) in taskFilter" :key="index">
       <span :class="{ 'completed': task.status }">{{ task.name }}</span>
       <span class="button-group">
         <button class="btn-completed" @click="onCompletedTask(index)">Completed</button>
         <button class="btn-feedback" @click="onFeedbackTask(index)">FeedBack</button>
         <button class="btn-delete" @click="onDeleteTask(index)">Delete</button>
       </span>
     </li>
   </ul>
 </div>
</template>

<script>
// import Add from './Add.vue';
import Add2 from './Add2.vue';
export default {
  name: "Demo",
  components: {
    // Add,
    Add2,
  },
  data() {
    return {
      tasks: [
        { name: "job1", status: true },
        { name: "job2", status: false },
        { name: "job3", status: false },
      ],
      // taskName: '',
      filter: 'all',
      showAddPopup: false,
    };
  },
  computed: {
    taskFilter() {
      switch (this.filter) {
        case 'all':
          return this.tasks;
        case 'completed':
          return this.tasks.filter(item => item.status === true);
        case 'notCompleted':
          return this.tasks.filter(item => item.status === false);
        default:
          return this.tasks;
      }
    }
  },
  methods: {
    onAddTask(taskName) {
      if (taskName === '' || this.tasks.indexOf(taskName) > -1) {
        return;
      }
      this.tasks.push({ name: taskName, status: false });
    },
    onCompletedTask(taskId) {
      this.tasks[taskId].status = true;
    },
    onFeedbackTask(taskId) {
      this.tasks[taskId].status = false;
    },
    onDeleteTask(taskId) {
      this.tasks.splice(taskId, 1);
    }
  },
}
</script>

<style scoped>
.wrapper {
  padding: 40px 20px;
  border: 1px solid black;
  border-radius: 5px;
  width: 40%;
  margin-left: 50px;
}

li {
  margin-bottom: 15px;
}

.button-group {
  margin-left: 50px;
}

.btn-delete {
  background-color: #FF595E;
  border: 1px solid black;
  cursor: pointer;
}

.completed {
  color: #8AC926;
  text-decoration: line-through;
}

.btn-completed {
  background-color: #8AC926;
  border: 1px solid black;
  cursor: pointer;
  margin-right: 7px;
}

.btn-feedback {
  background-color: #FFCA3A;
  border: 1px solid black;
  cursor: pointer;
  margin-right: 7px;
}

.btn-add {
  margin-left: 10px;
  cursor: pointer;
}

.filter {
  margin-left: 10px;
  cursor: pointer;
  border: 1px solid black;
}
</style>