import Vue from "vue";

export const state = () => ({
    tasks:[
        {
          id: 0,task:'Clean the room', done:false,
        },
        {
          id: 1,task:'Wash clothes', done:false,
        },
        {
          id: 2,task:'Dry clothes', done:true,
        },
        {
          id: 3,task:'Study final exam', done:false,
        },
      ]
});

export const mutations ={
  ADD_TASK(state, task){
    let id = state.tasks.length;
    let newtask = {id:id, task: task, done: false};
    Vue.set(state.tasks,id,newtask);
  },
  REMOVE_TASK(state,task){
    state.tasks.splice(state.tasks.indexOf(task),1);
  },
  SET_TASK_STATUS(state,id){
    state.tasks[id].done = !state.tasks[id].done;
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