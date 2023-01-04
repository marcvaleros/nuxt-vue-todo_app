<template>
  <div>
     <v-list class="p-0" single-line dense>
        <v-list-item v-for="item in completed" :key="item.id" dense>
              <v-checkbox :id="item.id" :label="item.task"></v-checkbox>
        </v-list-item>
       </v-list>
   </div>
</template>

<script>
export default {
  name: 'Completed',
  data() {
    return {
      completed: [
        {
          id:5,task:'Code personal app', done:true,
        },
        {
          id:6,task:'Walk dogs', done:true,
        },
      ]
    }
  },
};
</script>

<style>
</style>
