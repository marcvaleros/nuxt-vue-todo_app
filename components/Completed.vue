<template>
  <div>
     <v-list class="p-0" single-line dense>
        <v-list-item v-for="item in completed" :key="item.task" dense>
              <v-checkbox :label="item.task"></v-checkbox>
        </v-list-item>
       </v-list>
   </div>
</template>

<script>
export default {
  name: 'Completed',
  data() {
    return {
      tasks: []
    }
  },
  computed:{
    completed(){
      return this.$store.getters.completed;
    }
  }
};
</script>

<style>
</style>
