<script lang="ts">
import { defineComponent } from "vue"
import gql from "graphql-tag"

export default defineComponent({
  apollo: {
    user_profile: {
      query: gql`
        GetUserProfile {
          user_profile {
            id
          }
        }
      `,
    },
  },
  computed: {
    id() {
      return this.user_profile?.id
    },
  },
  methods: {
    refetch() {
      this.$apollo.queries.user_profile.refetch()
    },
  },
})
</script>

<template>
  <div v-if="user_profile">{{ user_profile }}</div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
