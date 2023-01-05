import Vue from "vue";

export const state = () => ({
    tasks:[
        {
          task:'Clean the room', done:false,
        },
        {
          task:'Wash clothes', done:false,
        },
        {
          task:'Dry clothes', done:true,
        },
        {
          task:'Study final exam', done:false,
        },
      ]
});

export const mutations ={
  ADD_TASK(state, task){
    let newtask = {task: task, done: false};
    Vue.set(state.tasks,state.tasks.length, newtask);
  },
  REMOVE_TASK(state,task){
    state.tasks.splice(state.tasks.indexOf(task),1);
  },
  SET_TASK_STATUS(state,task){
    task.done = !task.done;
  }
}

export const getters = {
  pending: state => {
    let pending = {}
    for (let id in state.tasks) {
      let task = state.tasks[id]
      if (task.done === false) {
        pending[id] = task
      }
    }
    return pending
  },
  completed: state => {
    let completed = {}
    for (let id in state.tasks) {
      let task = state.tasks[id]
      if (task.done === true) {
        completed[id] = task
      }
    }
    return completed
  }
}