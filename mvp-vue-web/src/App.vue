<template>
  <v-app >
    <v-card
      color="grey lighten-4"
      flat
      height="3px"
      tile
    >
      <v-toolbar
        dark
        dense
        height="80px"
        class="primary"
      >
        <!--<v-app-bar-nav-icon></v-app-bar-nav-icon>-->
        <v-toolbar-title>
          <router-link  to="/" tag="span" style="cursor:pointer">YouLink</router-link>
          </v-toolbar-title>
        <v-spacer></v-spacer>

        <!-- <v-btn icon>
          <v-icon>mdi-logout</v-icon>
        </v-btn>
-->
        <v-btn text>
          <router-link to="/signin" tag="span" style="cursor:pointer">
            <v-icon
            left
            dark
          >
          mdi-account</v-icon>Login
          </router-link>
        </v-btn>
      </v-toolbar>
    </v-card>
    <main>
      <router-view></router-view>
    </main>
    <!--  <v-content>
      <HelloWorld />
    </v-content>
    -->
  </v-app>
</template>
<script>
  export default {
    name: 'App',
    components: {},
    data: () => ({})
  };
</script>