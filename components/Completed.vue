<template>
  <div>
    <ul>
      <li v-for="item in completed" :key="item">
        <v-checkbox :label="item"></v-checkbox>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Completed',
  data() {
    return {
      completed: ['list 1', 'list 2', 'list 3']
    }
  },
};
</script>

<style>
</style>
