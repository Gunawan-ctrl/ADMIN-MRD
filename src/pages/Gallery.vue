<template>
  <q-page>
    <q-card class="q-pa-md q-ma-md" flat>
      <div class="text-h6 text-indigo-10">Perjalanan Terbaik Kami</div>
      <div class="text-body2 text-grey-7">Kami mendokumentasikan seluruh aktifitas terbaik kami dalam satu halaman</div>
      <div style="background-color: blue; margin-top: 10px; height: 7px; width: 90px; border-radius: 10px;"></div>
    </q-card>
    <div class="row q-pl-xl q-pr-xl items-start q-gutter-sm">
      <q-card class="my-card" style="width: 247px;" v-for="n in 1" :key="`${n}`">
        <q-img src="images/gallery/sosialisasi-sample.jpeg" style="height: auto; width: 100%;" />

        <q-card-section>

          <div class="row no-wrap items-center">
            <div class="col text-h6 ellipsis">
              Meeting Diskominfo
            </div>
          </div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <div class="text-caption text-grey">
            Small plates, salads & sandwiches in an intimate setting.
          </div>
        </q-card-section>
      </q-card>

      <q-card class="my-card" style="width: 247px;" v-for="n in 2" :key="`${n}`">
        <q-img src="images/gallery/diskominfo-sample.jpg" style="height: auto; width: 100%;" />

        <q-card-section>
          <div class="row no-wrap items-center">
            <div class="col text-h6 ellipsis">
              Meeting Diskominfo
            </div>
          </div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <div class="text-caption text-grey">
            Small plates, salads & sandwiches in an intimate setting.
          </div>
        </q-card-section>
      </q-card>

      <q-card class="my-card" style="width: 247px;" v-for="n in 5" :key="`${n}`">
        <q-img src="images/gallery/sosialisasi-sample.jpeg" style="height: auto; width: 100%;" />

        <q-card-section>
          <div class="row no-wrap items-center">
            <div class="col text-h6 ellipsis">
              Sosialisasi
            </div>
          </div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <div class="text-caption text-grey">
            Small plates, salads & sandwiches in an intimate setting.
          </div>
        </q-card-section>
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
      slide: 1,
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
