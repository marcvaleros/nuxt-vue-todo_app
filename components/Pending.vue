<template>
   <v-list dense spacer="0">
      <v-list-item class="p-0" v-for="item in pending" :key="item">
        <v-checkbox :label="item"></v-checkbox>
      </v-list-item>
  </v-list>
</template>

<script>
export default {
  name: 'Pending',
  data() {
    return {
      pending: ['pending 1', 'pending 2', 'pending 3']
    }
  },
};
</script>

<style>
</style>
