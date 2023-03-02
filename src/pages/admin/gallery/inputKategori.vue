<template>
  <q-page>
    <q-card class="q-pa-md q-ma-md">
      <q-breadcrumbs>
        <q-breadcrumbs-el
          class="text-indigo-10"
          label="Input Kategori"
          icon="local_printshop"
        />
      </q-breadcrumbs>
    </q-card>

    <div class="q-pa-md">
      <div class="row q-gutter-md">
        <div class="col">
          <q-card>
            <q-card-section>
              <div class="text-h6 text-indigo-10">Form Input Kategori</div>
              <div class="text-caption text-grey">
                Digunakan untuk menambahkan kategori produk sesuai jenis inputan
                yang anda pilih.
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
                    label="Kategori Produk"
                    hint="Kategori Produk"
                  />
                  <q-input
                    v-model="deskripsiBarang"
                    dense
                    outlined
                    type="textarea"
                    label="Deskripsi"
                    hint="Deskripsi"
                  />
                </q-card-section>
              </q-card-section>

              <q-separator />

              <q-card-actions>
                <q-btn flat color="blue-6" type="submit">Simpan</q-btn>
              </q-card-actions>
            </q-form>
          </q-card>
        </div>
        <div class="col-md-8">
          <q-table
            :rows="data"
            :columns="columns"
            row-key="name"
            :filter="filter"
          >
            <template v-slot:top>
              <div class="text-weight-bold text-subtitle1">
                Data Kategori Produk
              </div>
              <q-space />
              <q-input
                outline
                dense
                debounce="300"
                v-model="filter"
                placeholder="Pencarian"
              >
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
                <q-td key="kategori" :props="props">
                  {{ props.row.kategori }}
                </q-td>
                <q-td key="deskripsi" :props="props">
                  <q-badge color="green">
                    {{ props.row.deskripsi }}
                  </q-badge>
                </q-td>
                <q-td key="action" :props="props">
                  <div class="justify-center q-gutter-x-xs">
                    <q-btn
                      color="teal"
                      dense
                      size="sm"
                      class="q-px-xs"
                      icon="edit"
                      @click="edit(props.row.GUID)"
                      label="Edit"
                    ></q-btn>
                    <q-btn
                      color="red"
                      dense
                      size="sm"
                      @click="hapusTanaman(props.row.GUID)"
                      class="q-px-xs"
                      icon="delete"
                      label="Hapus"
                    ></q-btn>
                  </div>
                </q-td>
              </q-tr>
            </template>
          </q-table>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: "PageIndex",
  components: {},
  data() {
    return {
      filter: "",
      columns: [
        {
          name: "kategori",
          align: "center",
          required: true,
          label: "Kategori Produk",
          align: "left",
          field: (row) => row.kategori,
          format: (val) => `${val}`,
          sortable: true,
        },
        {
          name: "deskripsi",
          align: "center",
          label: "Deskripsi",
          field: "deskripsi",
          sortable: true,
        },
        {
          name: "action",
          align: "center",
          label: "Action",
          field: "action",
          sortable: true,
        },
      ],

      data: [
        {
          kategori: "Web Application",
          deskripsi: 159,
          action: 6.0,
        },
        {
          kategori: "Mobile Application",
          deskripsi: 159,
          action: 6.0,
        },
        {
          kategori: "Iot Development",
          deskripsi: 159,
          action: 6.0,
        },
        {
          kategori: "Konsultan IT",
          deskripsi: 159,
          action: 6.0,
        },
        {
          kategori: "Pelatihan IT",
          deskripsi: 159,
          action: 6.0,
        },
      ],
      namaBarang: null,
      deskripsiBarang: null,
      model: null,
      editor: null,
      options: [
        {
          label: "Absen Masuk",
        },
        {
          label: "Absen Pulang",
        },
      ],
    };
  },
  methods: {
    onSubmit() {},
  },
};
</script>
