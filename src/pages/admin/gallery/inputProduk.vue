<template>
  <q-page>
    <q-card class="q-pa-md q-ma-md">
      <q-breadcrumbs>
        <q-breadcrumbs-el
          class="text-indigo-10"
          label="Input Produk"
          icon="local_printshop"
        />
      </q-breadcrumbs>
    </q-card>

    <div class="q-pa-md">
      <div class="row q-gutter-md">
        <div class="col">
          <q-card>
            <q-card-section>
              <div class="text-h6 text-indigo-10">Form Input Barang</div>
              <div class="text-caption text-grey">
                Digunakan untuk melakukan upload data barang sesuai jenis
                inputan yang anda pilih.
              </div>
            </q-card-section>
          </q-card>

          <q-card class="my-card q-mt-md">
            <q-form @submit="onSubmit">
              <q-card-section horizontal>
                <q-card-section class="q-gutter-md fit">
                  <q-input
                    dense
                    v-model="namaBarang"
                    outlined
                    label="Nama Barang"
                    hint="Nama Barang"
                  />

                  <q-input dense outlined type="file" hint="Upload Gambar" />
                </q-card-section>
                <q-card-section class="q-gutter-md fit">
                  <q-select
                    dense
                    outlined
                    :options="options"
                    v-model="model"
                    key="label"
                    hint="Kategori Barang"
                    label="Kategori Barang"
                    color="teal"
                    clearable
                    options-selected-class="text-deep-orange"
                  >
                    <template v-slot:option="scope">
                      <q-item v-bind="scope.itemProps">
                        <q-item-section>
                          <q-item-label>{{ scope.opt.label }}</q-item-label>
                        </q-item-section>
                      </q-item>
                    </template>
                  </q-select>
                  <q-input
                    dense
                    v-model="namaBarang"
                    outlined
                    label="Harga"
                    hint="Harga Barang"
                  />
                </q-card-section>
              </q-card-section>
              <q-card-section>
                <q-editor
                  v-model="editor"
                  :definitions="{
                    bold: { label: 'Bold', icon: null, tip: 'My bold tooltip' },
                  }"
                />
              </q-card-section>

              <q-card-section horizontal>
                <q-card-section class="q-gutter-md fit">
                  <q-input
                    dense
                    v-model="jenisProduk"
                    outlined
                    label="Jenis Produk"
                    hint="Jenis Produk"
                  />

                  <q-select
                    dense
                    outlined
                    :options="garansi"
                    v-model="model"
                    key="label"
                    hint="Masa Garansi"
                    label="Masa Garansi"
                    color="teal"
                    clearable
                    options-selected-class="text-deep-orange"
                  >
                    <template v-slot:garansi="scope">
                      <q-item v-bind="scope.itemProps">
                        <q-item-section>
                          <q-item-label>{{ scope.opt.label }}</q-item-label>
                        </q-item-section>
                      </q-item>
                    </template>
                  </q-select>
                </q-card-section>

                <q-card-section class="q-gutter-md fit">
                  <q-select
                    dense
                    outlined
                    :options="pilihGaransi"
                    v-model="jenisGaransi"
                    key="jenisGaransi"
                    hint="Jenis Garansi"
                    label="Jenis Garansi"
                    color="teal"
                    clearable
                    options-selected-class="text-deep-orange"
                  >
                    <template v-slot:janisGaransi="scope">
                      <q-item v-bind="scope.itemProps">
                        <q-item-section>
                          <q-item-label>{{ scope.opt.label }}</q-item-label>
                        </q-item-section>
                      </q-item>
                    </template>
                  </q-select>
                  <q-input
                    type="number"
                    dense
                    v-model="stokProduk"
                    outlined
                    label="Stok Produk"
                    hint="Stok Produk"
                  />
                </q-card-section>
              </q-card-section>

              <q-card-section>
                <q-select
                  dense
                  outlined
                  :options="pilihJenisPenjualan"
                  v-model="jenisPenjualan"
                  key="jenisPenjualan"
                  hint="Jenis Penjualan"
                  label="Jenis Penjualan"
                  color="teal"
                  clearable
                  options-selected-class="text-deep-orange"
                >
                  <template v-slot:janisPenjualan="scope">
                    <q-item v-bind="scope.itemProps">
                      <q-item-section>
                        <q-item-label>{{ scope.opt.label }}</q-item-label>
                      </q-item-section>
                    </q-item>
                  </template>
                </q-select>
              </q-card-section>

              <q-separator />

              <q-card-actions>
                <q-btn flat color="blue-6" type="submit">Simpan</q-btn>
              </q-card-actions>
            </q-form>
          </q-card>
        </div>
        <div class="col-md-4 col-xs-12 q-px-md">
          <div class="row">
            <div class="col">
              <div class="text-subtitle2 text-indigo-10">
                Informasi Pengguna Layanan
              </div>
              <div class="text-caption text-grey">
                Masukan data foto kegiatan serta nama kegiatan dan juga
                deskripsi kegiatan.
              </div>
            </div>
            <div class="col-4">
              <lottie
                style="width: 80px; margin-left: 10px; margin-top: -0px"
                :options="defaultOptions"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import Lottie from "./../../../components/lottie.vue";
import * as animationData from "./../../../../public/input-product.json";

export default {
  name: "PageIndex",
  components: {
    lottie: Lottie,
  },
  data() {
    return {
      namaBarang: null,
      model: null,
      jenisGaransi: null,
      jenisPenjualan: null,
      editor: null,
      defaultOptions: { animationData: animationData.default },
      animationSpeed: 2,
      options: [
        {
          label: "Mobile App",
        },
        {
          label: "Web App",
        },
      ],
      garansi: [
        {
          label: "1 Bulan",
        },
        {
          label: "2 Bulan",
        },
        {
          label: "3 Bulan",
        },
        {
          label: "6 Bulan",
        },
        {
          label: "12 Bulan",
        },
        {
          label: "24 Bulan",
        },
      ],
      pilihGaransi: [
        {
          label: "Garansi Produsen",
        },
        {
          label: "Garansi Suplier",
        },
      ],
      pilihJenisPenjualan: [
        {
          label: "Eceran",
        },
        {
          label: "Grosir",
        },
      ],
    };
  },
  methods: {
    onSubmit() {},
  },
};
</script>
