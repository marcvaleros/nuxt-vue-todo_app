<template>
 <div>
     <v-list class="p-0 m-0" dense>
       <v-list-item v-for="item in pending" :key="item.id" dense>
              <template v-slot:default>
                <v-list-item-action>
                  <v-checkbox :input-value="item.done" :id="item.id"></v-checkbox>
                </v-list-item-action>

                <v-list-item-content>
                  <v-list-item-title  :class="{'text-decoration-line-through': true}">
                    {{item.task}}
                  </v-list-item-title>
                </v-list-item-content>
              </template>
        </v-list-item>
       </v-list>
   </div>
</template>

<script>
export default {
  name: 'Pending',
  data() {
    return {
      pending: [
        {
          id:1,task:'Clean the room', done:false,
        },
        {
          id:2,task:'Wash clothes', done:false,
        },
        {
          id:3,task:'Dry clothes', done:false,
        },
        {
          id:4,task:'Study final exam', done:false,
        },
      ]
    }
  },
  methods: {
     
  },
};
</script>

<style>
.v-list__tile {
  padding: 0  
};

</style>
