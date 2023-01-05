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

export const actions ={
  add_new_task({commit}, task){
    commit('ADD_TASK',task);
  },
  remove_tasks({commit}, task){
    commit('REMOVE_TASK',task);
  },
  toggle_status({commit}, task){
    commit('SET_TASK_STATUS',task);
  }
};

export const mutations ={
  ADD_TASK(state, task){

    let newtask = {task: task, done: false};
    Vue.set(state.tasks,state.tasks.length, newtask);
    // state.tasks = {...state.tasks, newtask};
  },
  REMOVE_TASK(state,task){
    state.tasks.splice(state.tasks.indexOf(task),1);
  },
  SET_TASK_STATUS(state,task){
    task.done = !task.done;
  }
}

export const getters = {
  getPending(state) {
    return state.tasks;
  },
  getCompleted(state) {
    return state.tasks;
  },
}