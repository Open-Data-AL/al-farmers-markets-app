<script src="./AppComponent.js"></script>

<template>
  <v-app light>
    <v-content>
      <v-layout
          wrap
          style="height: 200px;"
        >
          <v-container>
            <v-layout style="position: absolute; top:0; left: 0;">
              <v-btn
                dark
                @click.stop="drawer = !drawer"
              >
              <v-icon>menu</v-icon>

              </v-btn>
            </v-layout>
          </v-container>

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
                  <v-icon>store</v-icon>
                </v-list-tile-action>

                <v-list-tile-content>
                  <v-list-tile-title>
                     <router-link to="/markets-list">Farmers Market List</router-link>
                  </v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>

               <v-list-tile>
                <v-list-tile-action>
                  <v-icon>open_in_new</v-icon>
                </v-list-tile-action>

                <v-list-tile-content>
                  <v-list-tile-title>
                    <a target="_blank" href="http://www.fma.alabama.gov/HomeProc.aspx">
                      Home Processed Rule
                    </a>
                  </v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>

              <v-list-tile>
                <v-list-tile-action>
                  <v-icon>open_in_new</v-icon>
                </v-list-tile-action>

                <v-list-tile-content>
                  <v-list-tile-title>
                    <a target="_blank" href="http://www.fma.alabama.gov/PDFs_NEW/Shell_Eggs.pdf">
                      Shell Egg Law
                    </a>
                  </v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>

              <v-list-tile>
                <v-list-tile-action>
                  <v-icon>open_in_new</v-icon>
                </v-list-tile-action>

                <v-list-tile-content>
                  <v-list-tile-title>
                    <a target="_blank" href="http://www.fma.alabama.gov/pdfs/CertifiedFarmersMarketRules_80-7-1.pdf">
                      Certified Farmers Market
                    </a>
                  </v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>

              <v-list-tile>
                <v-list-tile-action>
                  <v-icon>open_in_new</v-icon>
                </v-list-tile-action>

                <v-list-tile-content>
                  <v-list-tile-title>
                    <a target="_blank" href="http://www.fma.alabama.gov/pdfs/Brochure-DirectMarketGuidelines2.pdf">
                      Direct Market Guidelines
                    </a>
                  </v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>


          <v-list-tile>
                <v-list-tile-action>
                  <v-icon>open_in_new</v-icon>
                </v-list-tile-action>

 
              <v-list-tile-content>
                  <v-list-tile-title>
                  </v-list-tile-title>
                                    <a target="_blank" href="http://www.fma.alabama.gov/pdfs/Brochure_HomeProcessed-CottageFoodLaw.pdf">
                                        Home Processed Products &amp; Cottage Food Law
                    </a>

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
