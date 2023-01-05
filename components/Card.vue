<template>
  <div class="relative flex items-top justify-center min-h-screen bg-gray-100 sm:items-center sm:pt-0">
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.1.2/dist/tailwind.min.css" rel="stylesheet">
    <div class="max-w-xl mx-auto sm:px-6 lg:px-8">

      <div class="mt-8 bg-white overflow-hidden shadow sm:rounded-lg p-6">
        <h2 class="text-2xl leading-7 font-semibold">
          Checklist
        </h2>
          <div class="flex flex-row space-x-10 mt-4">
              <div @click="activeTab = 'Pending'" class="cursor-pointer" :class="{'rounded-full px-4 py-1 text-white bg-gray-400': activeTab === 'Pending'}">Pending</div>
              <div @click="activeTab = 'Completed'" class="cursor-pointer" :class="{'rounded-full px-4 py-1 text-white bg-gray-400': activeTab === 'Completed'}">Completed</div>
          </div>

          <component :is="activeTab"/>
          
        

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  data() {
    return {
      activeTab:'Pending',
    };
  },
  methods: {
   addTask(){
      if(this.newTask){
        this.$store.commit('ADD_TASK',this.newTask);
        this.newTask = '';
        console.log(this.$store.state.tasks);
      }
   }
  },
  
}
</script>

<style>

</style>