<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="text-white q-pl-lg q-pr-lg q-pt-md q-pb-md" style="background-color: #002e74;">
      <q-toolbar>
        <div class="text-h4 text-weight-bolder">PT. MRD</div>
        <q-toolbar-title>
        </q-toolbar-title>
        <q-card class="q-pl-md q-pr-md">
          <q-btn flat class="text-indigo-10" no-caps label="Dashboard" :to="{ name:'dashboard' }" />
          <q-btn flat class="text-indigo-10" no-caps label="Product" :to="{ name:'product' }" />
          <q-btn flat class="text-indigo-10" no-caps label="Gallery" :to="{ name:'gallery' }" />
          <q-btn flat class="text-indigo-10" no-caps label="Blog" />
        </q-card>
        <q-card class="q-pl-md q-pr-md q-ml-md">
          <q-btn flat class="text-indigo-10" no-caps label="SignIn" />
        </q-card>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <q-parallax :height="300" class="col-12" id="home">
        <template v-slot:media>
          <img src="images/banner/bg-banner.png">
        </template>
        <template v-slot:content>
          <div
            class="absolute row items-center"
            :style="{
              left: 0,
              right: 0
            }"
          >
            <div class="col-6 left">
              <div class="text-h4 text-weight-bold text-white" style="background: rgba(0, 0, 0, .3); margin-left: 70px; padding: 10px 30px 5px 30px; border-radius: 10px 10px 0px 0px;">
                Product Meta Reksa Digital
              </div>
              <div class="text-body2 text-white" style="background: rgba(0, 0, 0, .3); margin-left: 70px; padding: 10px 30px 10px 30px; border-radius: 0px 0px 10px 10px;">
                Produk pengembangan yang kami miliki dan siap untuk di terapkan di masyarakat.
              </div>
            </div>
            <div class="col flex flex-center right">
              <lottie style='width: 400px;' :options="defaultOptions"/>
            </div>
          </div>
        </template>
      </q-parallax>
      <div class="row">
        <div class="col-3">
          <q-card class="my-card q-ma-sm q-mt-md" style="height:auto">
            <q-list>
              <q-item
                active-class="tab-active"
                exact
                class="navigation-item text-grey-7"
                clickable
                :to="{ name: 'product' }"
                v-ripple
              >
                <q-item-section avatar>
                  <q-icon name="store_mall_directory" />
                </q-item-section>
                <q-item-section>
                  All Product
                </q-item-section>
              </q-item>

              <q-item
                active-class="tab-active"
                exact
                class="navigation-item text-grey-7"
                clickable
                :to="{ name: 'iot' }"
                v-ripple
              >
                <q-item-section avatar>
                  <q-icon name="devices_other" />
                </q-item-section>
                <q-item-section>
                  Internet of Things
                </q-item-section>
              </q-item>

              <q-item
                active-class="tab-active"
                exact
                class="navigation-item text-grey-7"
                clickable
                :to="{ name: 'web' }"
                v-ripple
              >
                <q-item-section avatar>
                  <q-icon name="language" />
                </q-item-section>
                <q-item-section>
                  Web Development
                </q-item-section>
              </q-item>

              <q-item
                active-class="tab-active"
                exact
                class="navigation-item text-grey-7"
                clickable
                :to="{ name: 'mobile' }"
                v-ripple
              >
                <q-item-section avatar>
                  <q-icon name="phone_android" />
                </q-item-section>
                <q-item-section>
                  Mobile Development
                </q-item-section>
              </q-item>

            </q-list>
          </q-card>

          <q-card class="my-card q-ma-sm q-mt-md flex text-indigo-10 text-subtitle2" style="height:70px;">
            <q-item>
              <q-item-section avatar>
                <img src="images/icons/icon-text.png" style="width: 50px;">
              </q-item-section>

              <q-item-section>
                <q-item-label>MRD</q-item-label>
                <q-item-label caption class="text-indigo-10">© Copyright 2023</q-item-label>
              </q-item-section>
            </q-item>
          </q-card>
        </div>
        <div class="col">
          <router-view />
        </div>
      </div>
    </q-page-container>
  </q-layout>
</template>

<script>
import Lottie from './../components/lottie.vue'
import * as animationData from './../../public/images/lottie/product.json'
export default {
  name: 'MainLayout',
  components: {
    lottie: Lottie
  },
  data () {
    return {
      leftDrawerOpen: false,
      defaultOptions: { animationData: animationData.default },
      animationSpeed: 2
    }
  }
}
</script>
