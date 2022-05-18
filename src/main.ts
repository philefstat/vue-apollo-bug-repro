import { createApp } from "vue"
import App from "./App.vue"
import { ApolloClient, InMemoryCache } from "@apollo/client/core"

const cache = new InMemoryCache()

const apolloClient = new ApolloClient({
  cache,
  uri: "http://localhost:1337/v1/graphql",
})

import { createApolloProvider } from "@vue/apollo-option"

const apolloProvider = createApolloProvider({
  defaultClient: apolloClient,
})

const app = createApp(App)

app.use(apolloProvider)

app.mount("#app")
