<!-- eslint-disable vue/multi-word-component-names -->
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
          label="Add Gallery"
          icon="library_add"
        />
      </q-breadcrumbs>
    </q-card>

    <div class="q-pa-md">
      <div class="row q-gutter-md">
        <div class="col">
          <q-card class="my-card">
            <q-card-section>
              <div class="text-h6 text-indigo-10">Form Data</div>
              <div class="text-caption text-grey">
                Digunakan untuk melakukan pengisian data kegiatan.
              </div>
            </q-card-section>
          </q-card>
          <q-card class="my-card q-mt-md">
            <!-- <q-form @submit="onSubmit"> -->
            <q-form @submit="uploadFile">
              <q-card-section horizontal>
                <q-card-section class="q-gutter-md fit">
                  <input type="file" ref="fileInput" @change="onFileChange" />
                </q-card-section>
                <q-separator vertical />
              </q-card-section>

              <q-separator />

              <q-card-actions>
                <q-btn flat color="blue-10" type="submit">Simpan Data</q-btn>
              </q-card-actions>
            </q-form>
          </q-card>
          <q-card class="my-card q-mt-md"> </q-card>
        </div>
        <div class="col-4">
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
            <div class="col-4"></div>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
// import FTP from 'basic-ftp'
export default {
  data() {
    return {
      file: null,
    };
  },
  beforeCreate: async function uploadFile(file) {
    const client = new FTP.Client();
    try {
      // Connect to the FTP server
      await client.access({
        host: "102.167.112.188",
        port: 21,
        user: "blits",
        password: "Bl1t5",
      });

      // Upload the file
      await client.uploadFrom(file.path, file.name);
      console.log("sukses");
    } catch (error) {
      console.log(error);
    }
    client.close();
  },
};
</script>
