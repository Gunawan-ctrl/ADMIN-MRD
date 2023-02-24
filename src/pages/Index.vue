<template>
  <q-page>
    <q-parallax :height="500" class="col-12" id="home">
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
            <div class="text-h4 text-weight-bold text-white" style="background: rgba(0, 0, 0, .3); margin-left: 70px; padding: 20px 30px 5px 30px; border-radius: 10px 10px 0px 0px;">
              Solution For Your Problem Technology
            </div>
            <div class="text-h6 text-white" style="background: rgba(0, 0, 0, .3); margin-left: 70px; padding: 5px 30px 20px 30px; border-radius: 0px 0px 10px 10px;">
              We are team of talented making a your technology problem solved.
            </div>
            <div class="text-h6 text-white" style="margin-left: 45px; margin-top: 20px; padding: 5px 30px 20px 30px; border-radius: 0px 0px 10px 10px;">
              <q-btn class="q-pl-sm q-pr-sm" unelevated rounded color="orange" label="Get Started" no-caps />
              <q-btn size="lg" round color="white" flat icon="play_circle_outline" />
            </div>
          </div>
          <div class="col flex flex-center right">
            <lottie style='width: 450px;' :options="defaultOptions"/>
          </div>
        </div>
      </template>
    </q-parallax>

    <div class="col q-pa-xl bg-cyan-1 left" id="about" name="about">
      <div class="col text-h5 nunito-font">About Company</div>
      <div style="background-color: blue; height: 7px; width: 90px; border-radius: 10px;"></div>
      <div class="row q-mt-lg">
        <div class="col-4 q-mr-xl">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3972.086250565725!2d105.23980521418592!3d-5.4038310554959!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e40da8b465176a9%3A0xa36ac85eb9ca3011!2sJl.%20Sisingamangaraja%20No.32%2C%20Gedong%20Air%2C%20Kec.%20Tj.%20Karang%20Bar.%2C%20Kota%20Bandar%20Lampung%2C%20Lampung%2035117!5e0!3m2!1sid!2sid!4v1676983739213!5m2!1sid!2sid" width="100%" height="250" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" style="border-radius: 5px; border: 0;"></iframe>
        </div>
        <div class="col q-pl-xl text-indigo-10">
          <q-img src="images/icons/icon-text.png" style="width: 100px;" class="q-mb-md" />
          <p><strong class="text-h6">Kami</strong> bergerak dalam industri Teknologi Informasi dan Smart System sebagai bagian dari pengembang perangkat lunak dengan spesialisasi. Kami sangat tertarik pada pengembangan aplikasi dengan fungsi sederhana namun mempunyai manfaat yang besar bagi para pelanggan kami. Terus berinovasi pada teknologi untuk memudahkan aktifitas manusia serta menjadi maslahat bagi masyarakat secara luas.</p>
          <p>Dan kami percaya bahwa perubahan tidak akan dapat diraih tanpa adanya inovasi. Memperkaya pengetahuan dan inspirasi merupakan hal penting bagi kami untuk dapat terus berinovasi. Oleh sebab itu, kami berupaya untuk terus memperluas relasi dan memperbanyak proyek kolaborasi sehingga kami dapat memperoleh pengalaman dan sudut pandang baru dalam hal inovasi. </p>
        </div>
      </div>
    </div>

    <div class="col q-pa-xl">
      <div class="row">
        <div class="col q-mr-xl left">
          <div class="row">
            <div class="col">
              <p class="text-h4 text-indigo-10">Arah dan tujuan kami dalam <strong>penyediaan layanan masyarakat.</strong></p>
              <p class="text-body2 text-grey-7">Kami bergerak dalam berbagai macam klasifikasi bidang guna memenuhi kebutuhan atas permasalahan yang muncul di masyarkat.</p>
              <q-card flat bordered class="q-mr-xl">
                <q-expansion-item
                  expand-icon-toggle
                  expand-separator
                  icon="looks_one"
                  label="Konsultasi dan pengembangan produk"
                  class="text-subtitle2 text-blue"
                >
                  <q-card>
                    <q-card-section class="text-indigo-10 text-body2">
                      Kami berfokus dalam salah satu bidang konsultasi serta pengambangan mengenai teknologi smart system, internet of things dan fasilitas komputer lainnya.
                    </q-card-section>
                  </q-card>
                </q-expansion-item>
              </q-card>
              <q-card flat bordered class="q-mr-xl q-mt-md">
                <q-expansion-item
                  expand-icon-toggle
                  expand-separator
                  icon="looks_two"
                  label="Penerbitan piranti lunak"
                  class="text-subtitle2 text-blue"
                >
                  <q-card>
                    <q-card-section class="text-indigo-10 text-body2">
                      Malalui perjalanan kami, terdapat banyak produk inovasi mengenai layanan publik yang telah kami kembangkan dan siap pakai untuk membantu berbagai pemecahanan permasalahan.
                    </q-card-section>
                  </q-card>
                </q-expansion-item>
              </q-card>
              <q-card flat bordered class="q-mr-xl q-mt-md">
                <q-expansion-item
                  expand-icon-toggle
                  expand-separator
                  icon="looks_3"
                  label="Pelatihan kerja teknologi informasi"
                  class="text-subtitle2 text-blue"
                >
                  <q-card>
                    <q-card-section class="text-indigo-10 text-body2">
                      Salah satu bidang yang kami miliki adalah pengadaan pelatihan mengenai teknologi informasi baik dalam ruang lingkup pemerintahan maupun swasta.
                    </q-card-section>
                  </q-card>
                </q-expansion-item>
              </q-card>
            </div>
          </div>
        </div>
        <div class="col-5 right">
          <lottie style='width: 450px;' :options="defaultOptionsHeader"/>
        </div>
      </div>
    </div>

    <div class="col q-pa-xl bg-cyan-1" id="product">
      <div class="row">
        <div class="col q-mr-xl">
          <div class="row q-gutter-sm">
            <q-card v-for="n in 4" :key="`${n}`" class="my-card" flat bordered style="width: 330px; height: 100%;">
              <q-card-section horizontal>
                <q-img
                  class="rounded-borders"
                  src="https://cdn.quasar.dev/img/parallax2.jpg"
                  :ratio="16/9"
                >
                  <q-card-section class="q-pt-xs absolute-bottom">
                    <div class="text-h5 q-mt-sm q-mb-xs">Title</div>
                    <div class="text-caption text-grey">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </div>
                  </q-card-section>
                </q-img>
              </q-card-section>

              <q-separator />

              <q-card-actions>
                <q-btn flat color="primary">
                  Detail
                </q-btn>
                <q-space />
                <div class="q-mr-sm text-grey-6 text-caption">23 Januari 2023</div>
              </q-card-actions>
            </q-card>
          </div>
          <div class="text-right q-mr-lg q-mt-md">
            <q-btn class="text-indigo-10 bg-white" style="width: 120px;" unelevated no-caps label="View All" :to="{ name:'product' }" />
          </div>
        </div>
        <div class="col-5">
          <div class="row">
            <div class="col">
              <p class="text-h4 text-indigo-10">Fokus <strong>pengembangan layanan</strong> yang kami miliki.</p>
              <p class="text-body2 text-grey-7">Kami memiliki berbagai macam jejak pengembangan layanan dari berbagai macam bidang keahlian teknologi informasi.</p>
              <div class="row q-gutter-sm">
                <q-card class="my-card" style="width: 250px;">
                  <q-card-section class="bg-primary text-white">
                    <div class="text-h5 text-weight-bold">
                      <!-- <countTo :startVal='startValIOT' :endVal='endValIOT' :duration='3000'></countTo> % -->
                    </div>
                    <div class="text-subtitle2">Internet of Things</div>
                  </q-card-section>
                </q-card>

                <q-card class="my-card" style="width: 250px;">
                  <q-card-section class="bg-orange text-white">
                    <div class="text-h5 text-weight-bold">
                      <!-- <countTo :startVal='startValWeb' :endVal='endValWeb' :duration='3000'></countTo> % -->
                    </div>
                    <div class="text-subtitle2">Web Development</div>
                  </q-card-section>
                </q-card>

                <q-card class="my-card" style="width: 250px;">
                  <q-card-section class="bg-red text-white">
                    <div class="text-h5 text-weight-bold">
                      <!-- <countTo :startVal='startValMobile' :endVal='endValMobile' :duration='3000'></countTo> % -->
                    </div>
                    <div class="text-subtitle2">Mobile Development</div>
                  </q-card-section>
                </q-card>

                <q-card class="my-card" style="width: 250px;">
                  <q-card-section class="bg-green text-white">
                    <div class="text-h5 text-weight-bold">
                      <!-- <countTo :startVal='startValConsultan' :endVal='endValConsultan' :duration='3000'></countTo> % -->
                    </div>
                    <div class="text-subtitle2">IT Consultant</div>
                  </q-card-section>
                </q-card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="col">
      <q-parallax :height="300" :speed="0.5">
        <template v-slot:media>
          <img src="images/banner/bg-callaction.jpg">
        </template>
        <template v-slot:content>
          <div
            class="absolute row items-center"
            :style="{
              left: 0,
              right: 0
            }"
          >
            <div class="col left">
              <div class="text-h4 text-weight-bold text-white" style="background: rgba(0, 0, 0, .3); margin-left: 70px; padding: 20px 30px 5px 30px; border-radius: 10px 10px 0px 0px;">
                Call To Action
              </div>
              <div class="text-body2 text-white" style="background: rgba(0, 0, 0, .3); margin-left: 70px; padding: 5px 30px 20px 30px; border-radius: 0px 0px 10px 10px;">
                Kami siap berdiskusi mengenai setiap permasalahan yang anda hadapi, mulai dari pengembangan layanan sampai dengan konsultasi mengenai permasalahan IT anda, silahkan hubungi kami melalui kontak kami.
              </div>
            </div>
            <div class="col-5 flex flex-center right">
              <q-btn class="text-white" rounded outline style="background: rgba(0, 0, 0, .3); width: 180px; height: 60px;" unelevated no-caps label="Call To Action" />
            </div>
          </div>
        </template>
      </q-parallax>
    </div>

    <div class="col q-pa-xl bg-cyan-1 left" id="team">
      <div class="col text-h5 nunito-font">About Team</div>
      <div style="background-color: blue; height: 7px; width: 90px; border-radius: 10px;"></div>
      <div class="row q-mt-lg">
        <div class="col">
          <div class="row q-gutter-sm">
            <q-card class="my-card" flat bordered style="width: 350px;">
              <q-item>
                <q-item-section avatar>
                  <q-avatar>
                    <img src="images/icons/team-man.png">
                  </q-avatar>
                </q-item-section>

                <q-item-section>
                  <q-item-label class="text-weight-bold">Adi Permana</q-item-label>
                  <q-item-label caption>
                    Direktur Utama
                  </q-item-label>
                </q-item-section>
              </q-item>

              <q-separator />

              <q-card-section horizontal>
                <q-card-section>
                  Bertindak sebagai direktur utama PT. Meta Reksa Digital
                </q-card-section>
              </q-card-section>

              <q-separator />

              <q-card-section>
                <q-btn round flat size="sm" color="primary">
                  <q-avatar size="22px">
                    <img src="images/icons/facebook-icon.png">
                  </q-avatar>
                </q-btn>
                <q-btn round flat size="sm" color="primary">
                  <q-avatar size="22px">
                    <img src="images/icons/twitter-icon.png">
                  </q-avatar>
                </q-btn>
                <q-btn round flat size="sm" color="primary">
                  <q-avatar size="22px">
                    <img src="images/icons/instagram-icon.png">
                  </q-avatar>
                </q-btn>
              </q-card-section>
            </q-card>

            <q-card class="my-card" flat bordered style="width: 350px;">
              <q-item>
                <q-item-section avatar>
                  <q-avatar>
                    <img src="images/icons/team-man.png">
                  </q-avatar>
                </q-item-section>

                <q-item-section>
                  <q-item-label class="text-weight-bold">Sarkawi</q-item-label>
                  <q-item-label caption>
                    Direktur Personalia
                  </q-item-label>
                </q-item-section>
              </q-item>

              <q-separator />

              <q-card-section horizontal>
                <q-card-section>
                  Bertindak sebagai direktur personalia PT. Meta Reksa Digital
                </q-card-section>
              </q-card-section>

              <q-separator />

              <q-card-section>
                <q-btn round flat size="sm" color="primary">
                  <q-avatar size="22px">
                    <img src="images/icons/facebook-icon.png">
                  </q-avatar>
                </q-btn>
                <q-btn round flat size="sm" color="primary">
                  <q-avatar size="22px">
                    <img src="images/icons/twitter-icon.png">
                  </q-avatar>
                </q-btn>
                <q-btn round flat size="sm" color="primary">
                  <q-avatar size="22px">
                    <img src="images/icons/instagram-icon.png">
                  </q-avatar>
                </q-btn>
              </q-card-section>
            </q-card>

            <q-card class="my-card" flat bordered style="width: 350px;">
              <q-item>
                <q-item-section avatar>
                  <q-avatar>
                    <img src="images/icons/team-woman.png">
                  </q-avatar>
                </q-item-section>

                <q-item-section>
                  <q-item-label class="text-weight-bold">Agustina Sri Astuti</q-item-label>
                  <q-item-label caption>
                    Direktur Keuangan
                  </q-item-label>
                </q-item-section>
              </q-item>

              <q-separator />

              <q-card-section horizontal>
                <q-card-section>
                  Bertindak sebagai direktur keuangan PT. Meta Reksa Digital
                </q-card-section>
              </q-card-section>

              <q-separator />

              <q-card-section>
                <q-btn round flat size="sm" color="primary">
                  <q-avatar size="22px">
                    <img src="images/icons/facebook-icon.png">
                  </q-avatar>
                </q-btn>
                <q-btn round flat size="sm" color="primary">
                  <q-avatar size="22px">
                    <img src="images/icons/twitter-icon.png">
                  </q-avatar>
                </q-btn>
                <q-btn round flat size="sm" color="primary">
                  <q-avatar size="22px">
                    <img src="images/icons/instagram-icon.png">
                  </q-avatar>
                </q-btn>
              </q-card-section>
            </q-card>
          </div>
        </div>
        <div class="col-5 text-indigo-10">
          <p><strong class="text-h6">Manajemen tim kerja</strong> kami memiliki profesionalisme tinggi terhadap kebutuhan yang anda inginkan, kami memilih orang terbaik yang akan siap berdiskusi dengan anda untuk pemecahan permasalahan anda.</p>
        </div>
      </div>
    </div>

    <div class="q-ma-lg">
      <q-card flat class="my-card row flex flex-center q-pa-sm">
        <q-item class="q-ml-md q-mr-md">
          <q-item-section>
            <img style="width: 40px; height: 50px;" src="images/mitra/balam-logo.png">
          </q-item-section>
        </q-item>

        <q-item class="q-ml-md q-mr-md">
          <q-item-section>
            <img style="width: 35px; height: 50px;" src="images/mitra/tanggamus-logo.png">
          </q-item-section>
        </q-item>

        <q-item class="q-ml-md q-mr-md">
          <q-item-section>
            <img style="width: 35px; height: 50px;" src="images/mitra/pesawaran-logo.png">
          </q-item-section>
        </q-item>

        <q-item class="q-ml-md q-mr-md">
          <q-item-section>
            <img style="width: 50px; height: 50px;" src="images/mitra/itb-logo.png">
          </q-item-section>
        </q-item>

        <q-item class="q-ml-md q-mr-md">
          <q-item-section>
            <img style="width: 55px; height: 50px;" src="images/mitra/ubl-logo.png">
          </q-item-section>
        </q-item>

        <q-item class="q-ml-md q-mr-md">
          <q-item-section>
            <img style="width: 50px; height: 50px;" src="images/mitra/pptik-logo.png">
          </q-item-section>
        </q-item>

        <q-item class="q-ml-md q-mr-md">
          <q-item-section>
            <img style="width: 50px; height: 50px;" src="images/mitra/lskk-logo.png">
          </q-item-section>
        </q-item>

        <q-item class="q-ml-md q-mr-md">
          <q-item-section>
            <img style="width: 50px; height: 50px;" src="images/mitra/kominfo-logo.png">
          </q-item-section>
        </q-item>

        <q-item class="q-ml-md q-mr-md">
          <q-item-section>
            <img style="width: 45px; height: 50px;" src="images/mitra/dishub-logo.png">
          </q-item-section>
        </q-item>
      </q-card>
    </div>

    <div class="col q-pa-xl bg-cyan-1 left">
      <div class="col text-h4 nunito-font text-indigo-10">Meta Reksa Digital</div>
      <div style="background-color: blue; height: 7px; width: 90px; border-radius: 10px;"></div>
      <div class="row q-mt-xl">
        <div class="col">
          <div class="row">
            <div class="col-1">
              <q-icon name="place" size="24px" class="text-orange" />
            </div>
            <div class="col">
              <p>Gedong Air, Kec. Tj. Karang Bar., Kota Bandar Lampung, Lampung 35117</p>
            </div>
          </div>
          <div class="row">
            <div class="col-1">
              <q-icon name="support_agent" size="24px" class="text-orange" />
            </div>
            <div class="col">
              <p>+62 857-5830-3232</p>
            </div>
          </div>
          <div class="row">
            <div class="col-1">
              <q-icon name="mail_outline" size="24px" class="text-orange" />
            </div>
            <div class="col">
              <p>pt.metareksadigital@mrd.com</p>
            </div>
          </div>
        </div>
        <div class="col text-indigo-10" >

        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import Lottie from './../components/lottie.vue'
import * as animationData from './../../public/images/lottie/banner.json'
import * as animationDataAs from './../../public/images/lottie/header.json'
// import countTo from 'vue-count-to'
export default {
  name: 'MainLayout',
  components: {
    lottie: Lottie,
    // countTo
  },
  data () {
    return {
      defaultOptions: { animationData: animationData.default },
      defaultOptionsHeader: { animationData: animationDataAs.default },
      animationSpeed: 2,
      tab: 'all',
      splitterModel: 20,
      // startValConsultan: 0,
      // endValConsultan: 85,
      // startValIOT: 0,
      // endValIOT: 85,
      // startValWeb: 0,
      // endValWeb: 95,
      // startValMobile: 0,
      // endValMobile: 90,
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
