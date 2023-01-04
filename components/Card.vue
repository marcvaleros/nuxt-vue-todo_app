<template>
  <div class="relative flex items-top justify-center min-h-screen bg-gray-100 sm:items-center sm:pt-0">
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.1.2/dist/tailwind.min.css" rel="stylesheet">
    <div class="max-w-xl mx-auto sm:px-6 lg:px-8">

      <div class="mt-8 bg-white overflow-hidden shadow sm:rounded-lg p-6">
        <h2 class="text-2xl leading-7 font-semibold">
          Checklist
        </h2>
          <div class="flex flex-row space-x-10 mt-4">
              <div @click="activeTab = 'Pending'" class="bg-gray-400 rounded-full px-2 text-white cursor-pointer">Pending</div>
              <div @click="activeTab = 'Completed'" class="cursor-pointer">Completed</div>
          </div>

          <component :is="activeTab"/>

            <v-row class="text-center" justify="center">
              <v-col cols="12" md="8">
                <v-text-field 
                  depressed
                  v-model="newTask"
                  label="Add items here"
                  solo
                >
                </v-text-field>
              </v-col>

              <v-col cols="12" md="4">
                <v-btn
                  class="blue--text "
                  depressed
                  elevation="2"
                  rounded
                >Add Item</v-btn>
              </v-col>

            </v-row>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  data() {
    return {
      newTask: '',
      activeTab:'Pending',
      isActive: false
    };
  },
  methods: {
   create(){

   }
  },
}
</script>

<style>
.none{
  background-color: aqua;
};
.activeStyle{
  background-color: #9ca3af;
  border-radius: 100%;
  cursor: pointer;
}
</style>