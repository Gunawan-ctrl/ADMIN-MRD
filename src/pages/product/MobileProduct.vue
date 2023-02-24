<template>
  <q-page>
    <q-card class="q-pa-md q-ma-md">
      <div class="text-h6 text-grey-7">Daftar Semua Produk</div>
      <div class="text-body2 text-grey-7">Produk dengan kategori Mobile Development</div>
    </q-card>
    <div class="q-pa-md q-ma-md bg-grey-3" align="right">
      Urutkan produk
      <q-btn-dropdown class="q-ml-xl" outline color="primary" label="Harga Produk" size="sm">
        <q-list>
          <q-item clickable v-close-popup @click="onItemClick">
            <q-item-section>
              <q-item-label>Harga : Rendah ke Tinggi</q-item-label>
            </q-item-section>
          </q-item>

          <q-item clickable v-close-popup @click="onItemClick">
            <q-item-section>
              <q-item-label>Harga : Tinggi ke Rendah</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-btn-dropdown>
      <q-btn class="q-ml-md" outline color="primary" size="sm" label="Terbaru" />
    </div>
    <div class="row q-pa-md items-start q-gutter-sm">
      <q-card class="my-card" style="width: 242px;" v-for="n in 1" :key="`${n}`">
        <q-img src="images/product/smart-watering.jpg" style="height: auto; width: 100%;" />

        <q-card-section>
          <q-btn
            unelevated
            rounded
            disable
            color="orange"
            class="absolute"
            style="top: 0; right: 12px; transform: translateY(-50%);"
          >NEW</q-btn>

          <div class="row no-wrap items-center">
            <div class="col text-h6 ellipsis">
              Smart Watering
            </div>
          </div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <div class="text-subtitle1">
            <strong>250K</strong>・<small>Internet of Things</small>
          </div>
          <div class="text-caption text-grey">
            Small plates, salads & sandwiches in an intimate setting.
          </div>
        </q-card-section>

        <q-separator />

        <q-card-actions>
          <q-btn flat color="primary" :to="{ name: 'detail' }">
            BUY
          </q-btn>
          <q-space />
          <div class="text-caption text-grey-6">23 Januari 2023</div>
        </q-card-actions>
      </q-card>

      <q-card class="my-card" style="width: 242px;" v-for="n in 2" :key="`${n}`">
        <q-img src="images/product/absensi.jpg" style="height: auto; width: 100%;" />

        <q-card-section>
          <q-btn
            unelevated
            rounded
            disable
            color="orange"
            class="absolute"
            style="top: 0; right: 12px; transform: translateY(-50%);"
          >NEW</q-btn>

          <div class="row no-wrap items-center">
            <div class="col text-h6 ellipsis">
              Absensi
            </div>
          </div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <div class="text-subtitle1">
            <strong>8M</strong>・<small>Mobile Development</small>
          </div>
          <div class="text-caption text-grey">
            Small plates, salads & sandwiches in an intimate setting.
          </div>
        </q-card-section>

        <q-separator />

        <q-card-actions>
          <q-btn flat color="primary" :to="{ name: 'detail' }">
            BUY
          </q-btn>
          <q-space />
          <div class="text-caption text-grey-6">23 Januari 2023</div>
        </q-card-actions>
      </q-card>

      <q-card class="my-card" style="width: 242px;" v-for="n in 5" :key="`${n}`">
        <q-img src="images/product/smart-watering.jpg" style="height: auto; width: 100%;" />

        <q-card-section>
          <q-btn
            unelevated
            rounded
            disable
            color="orange"
            class="absolute"
            style="top: 0; right: 12px; transform: translateY(-50%);"
          >NEW</q-btn>

          <div class="row no-wrap items-center">
            <div class="col text-h6 ellipsis">
              Smart Watering
            </div>
          </div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <div class="text-subtitle1">
            <strong>250K</strong>・<small>Internet of Things</small>
          </div>
          <div class="text-caption text-grey">
            Small plates, salads & sandwiches in an intimate setting.
          </div>
        </q-card-section>

        <q-separator />

        <q-card-actions>
          <q-btn flat color="primary" :to="{ name: 'detail' }">
            BUY
          </q-btn>
          <q-space />
          <div class="text-caption text-grey-6">23 Januari 2023</div>
        </q-card-actions>
      </q-card>
    </div>
  </q-page>
</template>

<script>
// import Lottie from './../components/lottie.vue'
// import * as animationData from './../../public/banner.json'
// import * as animationDataAs from './../../public/header.json'
// import countTo from 'vue-count-to'
export default {
  name: 'MainLayout',
  components: {
    // lottie: Lottie,
    // countTo
  },
  data () {
    return {
      // defaultOptions: { animationData: animationData.default },
      // defaultOptionsHeader: { animationData: animationDataAs.default },
      // animationSpeed: 2,
      tab: 'all',
      splitterModel: 20,
      startValConsultan: 0,
      endValConsultan: 85,
      startValIOT: 0,
      endValIOT: 85,
      startValWeb: 0,
      endValWeb: 95,
      startValMobile: 0,
      endValMobile: 90,
      lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    }
  }
}
</script>
<style scoped>
.nunito-font {
  font-family: 'nunito';
}

.example-item {
  height: 290px;
  width: 290px;
}

.left {
  animation: bounceInLeft;
  animation-duration: 2s;
}
.right {
  animation: bounceInRight;
  animation-duration: 2s;
}
.down {
  animation: bounceInDown;
  animation-duration: 2s;
}
.up {
  animation: bounceInUp;
  animation-duration: 2s;
}
</style>
