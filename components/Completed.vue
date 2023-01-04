<template>
  <div>
     <v-list class="p-0" single-line dense>
        <v-list-item v-for="item in completed" :key="item.task" dense>
              <v-checkbox  :label="item.task"></v-checkbox>
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
  computed: {
    completed() {
      let done =  this.tasks.filter((task) => task.done === true);
      return done;
    }
  },
  mounted () {
    this.tasks = this.$store.state.tasks;
    console.log(this.tasks);
  },
};
</script>

<style>
</style>
