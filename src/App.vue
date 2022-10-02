<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
      right
      app
    >
      <!-- -->
    </v-navigation-drawer>
    <v-app-bar app>
      <v-app-bar-nav-icon
          @click.stop="drawer = !drawer"
        ></v-app-bar-nav-icon>
      <!-- -->
    </v-app-bar>
    <!-- <Navbar /> -->
    <!-- Sizes your content based upon application components -->
    <v-main>

      <!-- Provides the application the proper gutter -->
      <v-container fluid>

        <!-- If using vue-router -->
          <router-view></router-view>
      </v-container>
    </v-main>
    <v-footer app>
      <!-- -->
    </v-footer>
  </v-app>
</template>

<script>
// import Navbar from "./components/Navbar";
export default {
  name: "App",

  components: {
    // Navbar,
  },

  data: () => ({
    drawer: null
  }),
};
</script>
