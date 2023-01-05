<template>
  <div class="mt-4">
            <transition-group name="slide-fade">
              <div  v-for="item in completed" :key="item.id" dense>
                    <div class="flex flex-row items-center cursor-pointer h-6">
                      <input class="mr-2" :id="item.id" type="checkbox" checked @click="toggleStatus(item.id)">
                      <label :for="item.id" :class="{'line-through text-gray-500' : item.done}"> {{item.task}} </label>
                    </div>
              </div>
            </transition-group>
   </div>
</template>

<script>
export default {
  name: 'Completed',
  data() {
    return {
      tasks: [],
      selected:true
    }
  },
  methods: {
    toggleStatus(id){
        console.log(id);
        this.$store.commit('SET_TASK_STATUS', id);
    },
  },
  computed:{
    completed(){
      return this.$store.getters.completed;
    },
  }
};
</script>

<style>
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  text-decoration: none;
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
