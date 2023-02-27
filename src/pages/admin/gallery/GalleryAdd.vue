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
              <div class="text-caption text-grey">Digunakan untuk melakukan pengisian data kegiatan.</div>
            </q-card-section>
          </q-card>

          <q-card class="my-card q-mt-md">
            <q-form @submit="onSubmit">
              <q-card-section horizontal>
                <q-card-section class="q-gutter-md fit">
                  <!-- <q-uploader
                    label="Auto Uploader"
                    auto-upload
                    :url="getUrl"
                    multiple
                  /> -->
                  <q-badge class="q-pa-sm" color="primary">Upload Photo</q-badge>
                  <div>
                    <q-file label="Pick file" accept=".jpg, .png, .jpeg" name="poster_file" class="q-mr-xs" v-model="PHOTO" dense outlined>
                      <template v-slot:prepend>
                        <q-icon name="attach_file" />
                      </template>
                    </q-file>
                  </div>
                  <!-- <div>
                    <q-img
                      :src="imageUrl"
                      spinner-color="white"
                      style="height: 140px; max-width: 150px"
                    />
                  </div> -->
                  <!-- <div id="preview">
                    <q-img v-if="url" :src="url" style="border-radius: 10px;" />
                  </div> -->
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
        <div class="col-4">
          <div class="row">
            <div class="col">
              <div class="text-subtitle2 text-indigo-10">Informasi Pengguna Layanan</div>
              <div class="text-caption text-grey">Masukan data foto kegiatan serta nama kegiatan dan juga deskripsi kegiatan.</div>
            </div>
            <div class="col-4">
              <lottie style='width: 80px; margin-left: 10px; margin-top: -0px;' :options="defaultOptions"/>
            </div>
            <!-- <q-card v-if="submitEmpty" flat bordered class="q-mt-md bg-grey-2">
              <q-card-section>
                Submitted form contains empty formData.
              </q-card-section>
            </q-card>
            <q-card v-else-if="submitResult.length > 0" flat bordered class="q-mt-md bg-grey-2">
              <q-card-section>Submitted form contains the following formData (key = value):</q-card-section>
              <q-separator />
              <q-card-section class="row q-gutter-sm items-center">
                <div
                  v-for="(item, index) in submitResult"
                  :key="index"
                  class="q-px-sm q-py-xs bg-grey-8 text-white rounded-borders text-center text-no-wrap"
                >{{ item.name }} = {{ item.value }}</div>
              </q-card-section>
            </q-card> -->
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { ref } from 'vue'
import Lottie from './../../../components/lottie.vue'
import * as animationData from './../../../../public/images/lottie/gallery.json'
import JSFtp from 'jsftp'

const submitEmpty = ref(false)
const submitResult = []

// const model = () => {
//   return {
//     PHOTO: null,
//     ACTIVITY: null,
//     DESCRIPTION: null,
//     POST_BY: 'Administrator',
//   };
// };

export default {
  name: 'PageIndex',
  components: {
    lottie: Lottie
  },
  data () {
    return {
      defaultOptions: { animationData: animationData.default },
      animationSpeed: 2,
      PHOTO: null,
      ACTIVITY: null,
      DESCRIPTION: null,
      POST_BY: 'Administrator',
      submitEmpty,
      submitResult
      // form: model()
    }
  },
  mounted() {
    this.ftp = new JSFtp({
      host: '102.167.112.188',
      port: 21,
      user: 'blits',
      pass: 'Bl1t5'
    })
  },
  methods: {
    onSubmit(evt) {
      this.onCreate(evt)
    },
    async onCreate(evt) {
      const formData = new FormData(evt.target)
      const data = []
      const date = new Date()

      let day = date.getDate()
      let month = date.getMonth() + 1
      let year = date.getFullYear()

      let h = date.getHours()
      let m = date.getMinutes()
      let s = date.getSeconds()
      let ms = date.getMilliseconds()
      let time = h + ":" + m + ":" + s + ":" + ms
      let currentDate = `${day}${month}${year}`

      for (const [ name, value ] of formData.entries()) {
        if (value.name.length > 0) {
          data.push({
            name,
            value: currentDate + '-' + time + '-' + value.name
          })
        }
      }
      submitResult.value = data
      submitEmpty.value = data.length === 0

      // console.log(submitResult.value[0].value)

      const localFilePath = submitResult.value[0].value
      const remoteFilePath = '/upload'

      this.ftp.put(localFilePath, remoteFilePath, (err) => {
        if (err) {
          console.error(err)
        } else {
          console.log('File uploaded successfully!')
        }
      })
    }
  }
}
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
