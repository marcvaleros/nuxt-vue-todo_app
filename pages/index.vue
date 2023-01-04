<template>
  <card>
     
  </card>

<!-- <v-card>
              <v-tabs
                v-model="tabs"
                centered
              >
                  <v-tab
                    v-for="n in 2"
                    :key="n"
                  >
                    <h1 v-if="n == 1">Pending</h1>
                    <h1 v-else>Completed</h1>
                  </v-tab>

              </v-tabs>

    <v-tabs-items v-model="tabs">
      <v-tab-item class="text-center">
        <v-card flat>
          <v-card-text>
            
            <v-checkbox/>
            
          </v-card-text>
        </v-card>
      </v-tab-item>

      <v-tab-item>
        <v-card flat>
          <v-card-title class="text-h5">
            An awesome title
          </v-card-title>
          <v-card-text>
            <p>
              Duis lobortis massa imperdiet quam. Donec vitae orci sed dolor rutrum auctor. Vestibulum facilisis, purus nec pulvinar iaculis, ligula mi congue nunc, vitae euismod ligula urna in dolor. Praesent congue erat at massa.
            </p>

            <p>
              Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis lacus. Pellentesque egestas, neque sit amet convallis pulvinar, justo nulla eleifend augue, ac auctor orci leo non est. Etiam sit amet orci eget eros faucibus tincidunt. Donec sodales sagittis magna.
            </p>

            <p class="mb-0">
              Ut leo. Suspendisse potenti. Duis vel nibh at velit scelerisque suscipit. Fusce pharetra convallis urna.
            </p>
          </v-card-text>
        </v-card>
      </v-tab-item>

    </v-tabs-items>


  </v-card> -->
</template>

<script>
import Card from '../components/Card.vue'
  export default {
  components: { Card },
    data () {
      return {
        tabs: null,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      }
    },
  }
</script>