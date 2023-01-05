<template>
  <div>
            <div class="mt-2" v-for="item in completed" :key="item.id" dense>
                  <div class="flex flex-row items-center cursor-pointer">
                    <input class="h-8 mr-2" :id="item.id" type="checkbox" value="1" checked @click="toggleStatus(item.id)">
                    <label :for="item.id" :class="{'line-through text-gray-500' : item.done}"> {{item.task}} </label>
                  </div>
            </div>
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
</style>
