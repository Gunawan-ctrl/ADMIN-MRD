<template>
  <q-page>
    <q-card class="q-pa-md q-ma-md">
      <q-breadcrumbs>
        <q-breadcrumbs-el
          class="text-indigo-10"
          label="Gallery"
          icon="extension"
        />
        <q-breadcrumbs-el
          class="text-grey-7"
          label="All Gallery"
          icon="collections"
        />
      </q-breadcrumbs>
    </q-card>

    <div class="q-pa-md">
      <div class="row q-gutter-md">
        <div class="col">
          <q-card class="my-card">
            <q-card-section>
              <div class="text-h6 text-indigo-10">Table Data</div>
              <div class="text-caption text-grey">
                Sebaran data kegiatan yang terdaftar dalam layanan.
              </div>
            </q-card-section>
          </q-card>

          <q-card class="my-card q-mt-md">
            <q-table
              :rows="rows"
              :columns="columns"
              class="text-grey-7"
              row-key="name"
              :filter="filter"
              :pagination="pagination"
            >
              <template v-slot:top>
                <q-space />

                <q-btn
                  flat
                  color="primary"
                  icon="search"
                  @click="visibles = !visibles"
                  size="md"
                  round
                  class="q-mr-sm"
                />
                <q-slide-transition>
                  <div v-show="visibles">
                    <q-input
                      outlined
                      debounce="300"
                      placeholder="Pencarian"
                      style="width: 200px"
                      color="primary"
                      v-model="filter"
                      dense
                    />
                  </div>
                </q-slide-transition>
              </template>
              <template v-slot:body="props">
                <q-tr :props="props">
                  <q-td key="PHOTO" :props="props">
                    {{ props.row.PHOTO }}
                  </q-td>
                  <q-td key="ACTIVITY" :props="props">
                    {{ props.row.ACTIVITY }}
                  </q-td>
                  <q-td key="DESC" :props="props">
                    {{ props.row.DESC }}
                  </q-td>
                  <q-td key="DATE" :props="props">
                    {{ props.row.DATE }}
                  </q-td>
                </q-tr>
              </template>
            </q-table>
          </q-card>
        </div>
        <div class="col-4">
          <div class="row">
            <div class="col">
              <div class="text-subtitle2 text-indigo-10">
                Informasi Pengguna Layanan
              </div>
              <div class="text-caption text-grey">
                Berisikan seluruh data foto kegiatan PT. Meta Reksa Digital.
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
import * as animationData from "./../../../../public/images/lottie/gallery.json";

const columns = [
  {
    name: "PHOTO",
    label: "FOTO",
    align: "left",
    field: "PHOTO",
    sortable: true,
  },
  {
    name: "ACTIVITY",
    label: "KEGIATAN",
    align: "left",
    field: "ACTIVITY",
    sortable: true,
  },
  {
    name: "DESC",
    label: "DESKRIPSI",
    align: "left",
    field: "DESC",
    sortable: true,
  },
  { name: "DATE", label: "TANGGAL", align: "left", field: "DATE" },
];

const rows = [
  { PHOTO: "KODE", ACTIVITY: "FULLNAME", DESC: "FULLNAME", DATE: "TYPE" },
];

export default {
  name: "PageIndex",
  components: {
    lottie: Lottie,
  },
  data() {
    return {
      defaultOptions: { animationData: animationData.default },
      animationSpeed: 2,
      pagination: {
        sortBy: "desc",
        descending: false,
        rowsPerPage: 8,
      },
      filter: "",
      visibles: false,
      columns,
      rows,
    };
  },
};
</script>
