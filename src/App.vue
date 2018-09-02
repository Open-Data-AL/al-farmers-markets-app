<script src="./AppComponent.js"></script>

<template>
  <v-app light>
    <v-content>
      <v-layout
          wrap
          style="height: 200px;"
        >
          <v-container>
            <v-layout justify-left>
              <v-btn
                dark
                @click.stop="drawer = !drawer"
              >
                Menu
              </v-btn>
            </v-layout>
          </v-container>

          <img src="/static/img/NewHeaderPic1.jpg" />

          <v-navigation-drawer
            v-model="drawer"
            absolute
            temporary
          >
            <!--<v-list class="pa-1">
              <v-list-tile avatar>
                <v-list-tile-avatar>
                </v-list-tile-avatar>

                <v-list-tile-content>
                  <v-list-tile-title>John Leider</v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
            </v-list> -->

            <v-list class="pt-0" dense>
              <v-divider></v-divider>

              <v-list-tile>
                <v-list-tile-action>
                  <v-icon>dashboard</v-icon>
                </v-list-tile-action>

                <v-list-tile-content>
                  <v-list-tile-title>
                     <router-link to="/markets-list">Farmers Market List</router-link>
                  </v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>

               <v-list-tile>
                <v-list-tile-action>
                  <v-icon>question_answer</v-icon>
                </v-list-tile-action>

                <v-list-tile-content>
                  <v-list-tile-title>
                    <a target="_blank" href="http://fma.alabama.gov/pdfs/Brochure_HomeProcessed-CottageFoodLaw.pdf">
                      Home Processed Products &amp; Cottage Food Law
                    </a>
                  </v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
            </v-list>
          </v-navigation-drawer>
        </v-layout>

      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<style>
body {
  padding-top: constant(safe-area-inset-top);
  padding-top: env(safe-area-inset-top);
}
.footer {
  /* Apply this to v-bottom-nav if necessary. */
  margin-bottom: constant(safe-area-inset-bottom);
  margin-bottom: env(safe-area-inset-bottom);
}
</style>
