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
            <q-form @submit="uploadFile">
              <q-card-section horizontal>
                <q-card-section class="q-gutter-md fit">
                  <q-badge class="q-pa-sm" color="primary"
                    >Upload Photo</q-badge
                  >
                  <div>
                    <q-file
                      label="Pick file"
                      accept=".jpg, .png, .jpeg"
                      name="poster_file"
                      class="q-mr-xs"
                      v-model="PHOTO"
                      dense
                      outlined
                    >
                      <template v-slot:prepend>
                        <q-icon name="attach_file" />
                      </template>
                    </q-file>
                  </div>
                </q-card-section>
                <q-separator vertical />
                <q-card-section class="q-gutter-md fit">
                  <q-input
                    dense
                    outlined
                    v-model="ACTIVITY"
                    label="Judul Kegiatan"
                  />
                  <q-input
                    dense
                    outlined
                    v-model="DESCRIPTION"
                    type="textarea"
                    label="Deskripsi Kegiatan"
                  />
                </q-card-section>
              </q-card-section>

              <q-separator />

              <q-card-actions>
                <q-btn flat color="blue-10" type="submit">Simpan Data</q-btn>
              </q-card-actions>
            </q-form>
          </q-card>
        </div>
        <div class="col-md-4 col-xs-12">
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
import * as animationData from "./../../../../public/images/lottie/gallery.json";

export default {
  name: "PageIndex",
  components: {
    lottie: Lottie,
  },
  data() {
    return {
      defaultOptions: { animationData: animationData.default },
      animationSpeed: 2,
      PHOTO: null,
      ACTIVITY: null,
      DESCRIPTION: null,
      POST_BY: "Administrator",
    };
  },
  methods: {
    uploadFile() {
      const formData = new FormData();
      formData.append("PHOTO", this.PHOTO);
      formData.append("data", JSON.stringify(this.form));
      this.$axios.post("movie/insert", formData).then((res) => {
        console.log(res);
        // if (res.data.sukses) {
        //   this.$showNotif(res.data.pesan, "positive");
        //   this.$router.push({ name: "dataDVD" });
        // } else {
        //   this.$showNotif(res.data.pesan, "negative");
        // }
      });
    },
  },
};
</script>
<style scoped>
#preview {
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}

#preview img {
  margin-top: -10px;
  max-width: 100%;
  max-height: 500px;
}
</style>
