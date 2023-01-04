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
    state.tasks.push = ({content: task, done: false});
  },
  REMOVE_TASK(state,task){
    state.tasks.splice(state.tasks.indexOf(task),1);
  },
  SET_TASK_STATUS(state,task){
    task.done = !task.done;
  }
}