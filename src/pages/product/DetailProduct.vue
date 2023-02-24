<template>
  <q-page>
    <q-card class="q-pa-md q-ma-md">
      <div class="row q-pa-sm items-start q-gutter-sm">
        <div class="col-5">
          <q-carousel
            swipeable
            animated
            v-model="slide"
            thumbnails
            height="300px"
            style="border-radius: 5px; border: 1px solid #dfe6e9;"
            infinite
          >
            <q-carousel-slide :name="1" img-src="product/smart-watering.jpg" />
            <q-carousel-slide :name="2" img-src="https://cdn.quasar.dev/img/parallax1.jpg" />
            <q-carousel-slide :name="3" img-src="https://cdn.quasar.dev/img/parallax2.jpg" />
            <q-carousel-slide :name="4" img-src="https://cdn.quasar.dev/img/quasar.jpg" />
          </q-carousel>
        </div>
        <div class="col q-ml-lg">
          <div class="text-h5 text-weight-medium text-uppercase">Smart Watring System</div>
          <div class="q-mt-md bg-grey-3 q-pl-md q-pt-sm q-pb-sm text-h6 text-indigo-10" style="border-radius: 5px;">Rp. 200.000</div>
          <div class="q-mt-md row q-ml-sm">
            <div class="col-3">Kategori Produk</div>
            <div class="col text-grey-8">Internet of Things</div>
          </div>
          <div class="q-mt-md row q-ml-sm">
            <div class="col-3">Stok</div>
            <div class="col text-grey-8">2.000 buah</div>
          </div>
          <div class="q-mt-md row q-ml-sm">
            <div class="col-3">Jenis Produk</div>
            <div class="col text-grey-8">Smart Watering System</div>
          </div>
          <div class="q-mt-xl row q-ml-sm">
            <div class="col-5">
              <q-btn rounded color="positive">
                <img src="wa.png" style="width: 22px;" class="q-mr-md">
                <small>Pesan Produk</small>
              </q-btn>
              <!-- <q-btn unelevated rounded color="positive" label="Pesan Produk" size="sm" /> -->
            </div>
          </div>
        </div>
      </div>
    </q-card>
    <q-card class="q-pa-md q-ma-md">
      <div class="col q-pa-sm items-start q-gutter-sm">
        <div class="q-mt-md bg-grey-3 q-pl-md q-pt-sm q-pb-sm text-subtitle2 text-indigo-10" style="border-radius: 5px;">Spesifikasi Produk</div>
        <div class="q-mt-md row q-ml-md">
          <div class="col-3">Jenis Penjualan</div>
          <div class="col text-grey-8">Eceran</div>
        </div>
        <div class="q-mt-md row q-ml-md">
          <div class="col-3">Jenis Garansi</div>
          <div class="col text-grey-8">Garansi Produsen</div>
        </div>
        <div class="q-mt-md row q-ml-md">
          <div class="col-3">Masa Garansi</div>
          <div class="col text-grey-8">3 Bulan</div>
        </div>
        <div class="q-mt-md row q-ml-md">
          <div class="col-3">Berat</div>
          <div class="col text-grey-8">5 Kg</div>
        </div>
        <div class="q-mt-md row q-ml-md">
          <div class="col-3">Dimensi <small class="q-ml-sm text-grey-7">( P x L x T )</small></div>
          <div class="col text-grey-8">5 cm x 5 cm x 10 cm</div>
        </div>
        <div class="q-mt-md row q-ml-md">
          <div class="col-3">Dikirim Dari</div>
          <div class="col text-grey-8">Gedong Air, Kec. Tj. Karang Bar., Kota Bandar Lampung, Lampung 35117</div>
        </div>
        <div class="q-mt-md bg-grey-3 q-pl-md q-pt-sm q-pb-sm text-subtitle2 text-indigo-10" style="border-radius: 5px;">Deskripsi Produk</div>
        <div class="q-mt-md row q-ml-md">
          <div class="col text-grey-8">
            siapa cepat dia dapat keberuntungannya belanja di toko ini<br>
            <br>
            hadiah utamanya berupa<br>
            - HP iPhone<br>
            - laptop<br>
            - dan barang elektronik lainnya<br>
            <br>
            kita mengadakan undian di sini dijamin tidak ada zonk<br>
            barang yang kita undikan itu barang yang dipakai semua pokoknya buat Anda yang mau pesan di toko ini tidak ada yang namanya zonk dijamin dapat hadiah.,<br>
            minimal 5 kali pembelanjaan kamu yakin dengan belanja di sini insya Allah dapat<br>
            buruan bolong bolong belanja di toko ini<br>
            semoga puas dengan undian kami<br>
          </div>
        </div>
      </div>
    </q-card>
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
