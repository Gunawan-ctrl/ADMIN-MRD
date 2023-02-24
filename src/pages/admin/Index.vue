<template>
  <q-page>
    <q-intersection
      style="max-width: 100%; width: 100%;"
      transition="slide-down"
      class="example-item"
    >
      <div class="q-pa-md">
        <div class="row items-center q-col-gutter-md">
          <div class="col-12 col-md-4 col-sm-6 col-xs-12 col-lg-4">
            <q-card class="my-card">
              <q-item>
                <q-item-section>
                  <q-item-label class="text-subtitle1 text-weight-bold">
                    Informasi Produk
                  </q-item-label>
                  <q-item-label caption>PT Meta Reksa Digital</q-item-label>
                </q-item-section>
              </q-item>

              <q-separator />
              <q-item>
                <q-item-section>
                  <q-item-label class="text-center"
                    ><strong>69</strong>
                  </q-item-label>
                  <q-item-label class="text-center" caption> Produk </q-item-label>
                </q-item-section>
                <q-item-section>
                  <q-item-label class="text-center"
                    ><strong>2747</strong>
                  </q-item-label>
                  <q-item-label class="text-center" caption>
                    Kategori
                  </q-item-label>
                </q-item-section>
              </q-item>

              <q-separator />
              <q-item>
                <q-item-section>
                  <q-btn color="primary" label="produk" flat />
                </q-item-section>
                <q-item-section>
                  <q-btn flat color="primary" label="kategori" />
                </q-item-section>
              </q-item>
            </q-card>
          </div>

          <div class="col-12 col-md-4 col-sm-6 col-xs-12 col-lg-4">
            <q-card class="my-card">
              <q-item>
                <q-item-section>
                  <q-item-label class="text-subtitle1 text-weight-bold">
                    Informasi Kegiatan
                  </q-item-label>
                  <q-item-label caption>PT Meta Reksa Digital</q-item-label>
                </q-item-section>
              </q-item>
              <q-separator />
              <q-item>
                <q-item-section>
                  <q-item-label class="text-center"
                    ><strong>69</strong>
                  </q-item-label>
                  <q-item-label class="text-center" caption> Galery </q-item-label>
                </q-item-section>
                <q-item-section>
                  <q-item-label class="text-center"
                    ><strong>2747</strong>
                  </q-item-label>
                  <q-item-label class="text-center" caption>
                    Postingan
                  </q-item-label>
                </q-item-section>
              </q-item>
              <q-separator />
              <q-item>
                <q-item-section>
                  <q-btn
                    color="primary"
                    icon-right="fas fa-chevron-right"
                    label="lihat"
                    flat
                  />
                </q-item-section>
              </q-item>
            </q-card>
          </div>

          <div class="col-12 col-md-4 col-sm-12 col-xs-12 col-lg-4">
            <q-card>
              <q-carousel
                animated
                v-model="slide"
                infinite
                :autoplay="autoplay"
                transition-prev="slide-up"
                transition-next="slide-down"
                @mouseenter="autoplay = false"
                @mouseleave="autoplay = true"
                height="162px"
              >
                <q-carousel-slide :name="1" img-src="https://cdn.quasar.dev/img/mountains.jpg" />
                <q-carousel-slide :name="2" img-src="https://cdn.quasar.dev/img/mountains.jpg" />
                <q-carousel-slide :name="3" img-src="https://cdn.quasar.dev/img/parallax2.jpg" />
                <q-carousel-slide :name="4" img-src="https://cdn.quasar.dev/img/quasar.jpg" />
                <template v-slot:control>
                  <q-carousel-control
                    position="top-right"
                    :offset="[18, 18]"
                    class="text-white rounded-borders"
                    style="background: rgba(0, 0, 0, .3); padding: 0px 0px;"
                  >
                    <q-btn class="col" color="white" flat size="sm">Detail</q-btn>
                  </q-carousel-control>
                </template>
              </q-carousel>
            </q-card>
          </div>
        </div>
        <div class="row q-col-gutter-md">
          <div class="col-8 col-xs-12 col-sm-8">
            <q-toolbar>
              <q-toolbar-title class="text-overline text-uppercase">
                Table Information
              </q-toolbar-title>
              <q-btn flat text-color="light-blue-8" label="Show All" />
            </q-toolbar>
            <q-card class="my-card">
              <q-table
                :data="data"
                :columns="columns"
                row-key="name"
                :filter="filter"
              >
                <template v-slot:top>
                  <div class="text-weight-bold text-subtitle1">Data Produk</div>
                  <q-space />
                  <q-input outline dense debounce="300" v-model="filter" placeholder="Pencarian">
                    <template v-slot:append>
                      <q-icon name="search" />
                    </template>
                  </q-input>
                </template>
                <template v-slot:header="props">
                  <q-tr :props="props">
                    <q-th
                      v-for="col in props.cols"
                      :key="col.name"
                      :props="props"
                      class="text-purple"
                    >
                      {{ col.label }}
                    </q-th>
                  </q-tr>
                </template>
                <template v-slot:body="props">
                  <q-tr :props="props">
                    <q-td key="namaBarang" :props="props">
                      {{ props.row.namaBarang }}
                    </q-td>
                    <q-td key="kategori" :props="props">
                      <q-badge color="green">
                        {{ props.row.kategori }}
                      </q-badge>
                    </q-td>
                    <q-td key="gambar" :props="props">
                      <q-badge color="purple">
                        {{ props.row.gambar }}
                      </q-badge>
                    </q-td>
                    <q-td key="deskripsi" :props="props">
                      <q-badge color="orange">
                        {{ props.row.deskripsi }}
                      </q-badge>
                    </q-td>
                    <q-td key="action" :props="props">
                      <div class="justify-center q-gutter-x-xs">
                        <q-btn color="teal"
                          dense size="sm"
                          class="q-px-xs"
                          icon="edit"
                          @click="editProduk(props.row.GUID)"
                        />
                        <q-btn
                          color="red"
                          dense
                          size="sm"
                          @click="hapusProduk(props.row.GUID)"
                          class="q-px-xs"
                          icon="delete"
                        />
                      </div>
                    </q-td>
                  </q-tr>
                </template>
              </q-table>
            </q-card>
          </div>
          <div class="col-4 col-xs-12 col-sm-4">
            <q-toolbar>
              <q-toolbar-title class="text-overline"
                >WORKS AVAILABLE</q-toolbar-title
              >
              <q-btn flat text-color="light-blue-8" label="Show All"></q-btn>
            </q-toolbar>
            <q-card class="my-card bg-indigo-6 flex text-indigo-10 text-subtitle2">
              <q-card-section>
                <q-avatar size="40px">
                  <img src="report.png">
                </q-avatar>
              </q-card-section>
              <q-card-section>
                <q-item-label class="text-white text-h6">100</q-item-label>
                <q-item-label caption class="text-white">Report</q-item-label>
              </q-card-section>
              <q-item-section>
                <q-btn
                  text-color="white"
                  label="Report"
                  outline
                  class="q-mt-sm q-mr-md"
                />
              </q-item-section>
            </q-card>
            <q-card class="my-card bg-cyan-6 flex text-indigo-10 text-subtitle2 q-mt-sm">
              <q-card-section>
                <q-avatar size="40px">
                  <img src="form.png">
                </q-avatar>
              </q-card-section>
              <q-card-section>
                <q-item-label class="text-white text-h6">100</q-item-label>
                <q-item-label caption class="text-white">Client</q-item-label>
              </q-card-section>
              <q-item-section>
                <q-btn
                  text-color="white"
                  label="client"
                  outline
                  class="q-mt-sm q-mr-md"
                />
              </q-item-section>
            </q-card>
            <q-card class="my-card q-mt-sm">
              <q-card-section>
                <div class="text-subtitle2 text-indigo-10">Statistic Data</div>
                <div class="text-caption text-grey">Data stastistik pelaporan pengguna</div>
              </q-card-section>
              <q-card-section>
                <div class="text-subtitle2 text-indigo-10">Statistic Data</div>
                <div class="text-caption text-grey">Data stastistik pelaporan pengguna</div>
              </q-card-section>
              <q-card-section>
                <div class="text-subtitle2 text-indigo-10">Statistic Data</div>
                <div class="text-caption text-grey">Data stastistik pelaporan pengguna</div>
              </q-card-section>
            </q-card>
          </div>
        </div>
      </div>
    </q-intersection>
  </q-page>
</template>

<script>
// import Lottie from './../components/lottie.vue'
// import * as animationData from './../../public/kategoris.json'
// import LineChart from './../components/Line.vue'


export default {
  name: 'PageIndex',
  components: {
    // lottie: Lottie,
    // LineChart
  },
  data () {
    return {
      filter: '',
      columns: [
        {
          name: 'namaBarang',
          required: true,
          label: 'Nama Barang',
          align: 'left',
          field: row => row.namaBarang,
          format: val => `${val}`
        },
        { name: 'kategori', align: 'center', label: 'Kategori', field: 'kategori' },
        { name: 'gambar', label: 'Gambar', field: 'gambar' },
        { name: 'deskripsi', align: 'center', label: 'Deskripsi', field: 'deskripsi' },
        { name: 'action', align: 'center', label: 'Action', field: 'action' },
      ],

      data: [
        {
          namaBarang: 'Smart Watering',
          kategori: 'Internet Of Things',
          gambar: 6.0,
          deskripsi: 24,
          action: 4.0,
        },
        {
          namaBarang: 'Absensi',
          kategori: 159,
          gambar: 6.0,
          deskripsi: 24,
          action: 4.0,
        },
        {
          namaBarang: 'Web Aplication',
          kategori: 159,
          gambar: 6.0,
          deskripsi: 24,
          action: 4.0,
        },
        {
          namaBarang: 'Frozen Yogurt',
          kategori: 159,
          gambar: 6.0,
          deskripsi: 24,
          action: 4.0,
        },
        {
          namaBarang: 'Frozen Yogurt',
          kategori: 159,
          gambar: 6.0,
          deskripsi: 24,
          action: 4.0,
        },
      ],
      slide: 1,
      autoplay: true,
      // defaultOptions: { animationData: animationData.default },
      // animationSpeed: 2,
    }
  },
  methods: {}
}
</script>

<style lang="sass" scoped>
.example-item
  height: 290px
  width: 290px
</style>
