<template>
  <div>
      <div class="mt-4">
        <transition-group name="slide-fade">
          <div v-for="item in pending" :key="item.id" dense>
                <div class="flex flex-row items-center cursor-pointer h-6">
                  <input class="mr-2" :id="item.id" type="checkbox" @click="toggleStatus(item.id)">
                  <label :for="item.id" :class="{'line-through text-gray-500' : item.done}"> {{item.task}} </label>
                </div>
              </div>
          </transition-group>
      </div>

       <div class="flex flex-row mt-4">
            <input type="text" placeholder="Add an item here" class="outline-none" v-model="newTask" @keypress.enter="addTask">
            <button
              class="rounded-full text-white outline outline-none border-0 bg-blue-500 h-8 w-20 "
              @click="addTask"
            >Add Item</button>
          </div>
   </div>
</template>

<script>
export default {
  name: 'Completed',
  data() {
    return {
      newTask: '',
      tasks: []
    }
  },
  methods:{
    toggleStatus(id){
        console.log(id);
        this.$store.commit('SET_TASK_STATUS', id);
    },
    addTask(){
      if(this.newTask){
        this.$store.commit('ADD_TASK',this.newTask);
        this.newTask = '';
        console.log(this.$store.state.tasks);
      }
   }
  }, 
  computed: {
    pending(){
      return this.$store.getters.pending;
    }
  },
};
</script>

<style>
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  text-decoration: line-through;
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
{
  transform: translateX(10px);
  opacity: 0;
}

</style>
