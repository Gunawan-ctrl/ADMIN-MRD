<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="bg-white text-indigo-10">
      <q-toolbar class="q-pt-sm">
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-space />

        <div class="row q-gutter-md">
          <q-btn dense round flat icon="notifications">
            <q-badge color="amber" floating rounded transparent>
              6
            </q-badge>
            <q-menu
            >
              <q-list style="min-width: 100px">
                <messages></messages>
                <q-card class="text-center no-shadow no-border">
                  <q-btn label="View All" style="max-width: 120px !important;" flat dense
                    class="text-indigo-8"></q-btn>
                </q-card>
              </q-list>
            </q-menu>
          </q-btn>
          <q-btn-dropdown
            flat
            size="md"
            icon="account_circle"
            label="Gunawan"
          >
            <div class="row no-wrap q-pa-md">
              <div class="column">
                <div class="text-h6 q-mb-md">Settings</div>
              </div>

              <q-separator vertical inset class="q-mx-lg" />

              <div class="column items-center">
                <q-avatar size="72px">
                  <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
                </q-avatar>

                <div class="text-subtitle1 q-mt-md q-mb-xs">John Doe</div>

                <q-btn
                  color="primary"
                  label="Logout"
                  push
                  size="sm"
                  v-close-popup
                />
              </div>
            </div>
          </q-btn-dropdown>
        </div>

      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
    >
      <q-card class="my-card q-ma-sm flex text-indigo-10 text-subtitle2" style="height:130px; background-repeat: no-repeat; background-size: cover;">
        <q-item>
          <q-item-section avatar>
            <q-avatar
              size="70px"
              class="overlapping">
              <img src="images/icons/icon.png" style="width: 70px;">
            </q-avatar>
          </q-item-section>

          <q-item-section>
            <q-item-label>PT META REKSA DIGITAL</q-item-label>
            <q-badge color="blue" class="q-mt-xs" style="width: 100px;">
              <q-item-label caption class="text-white">Administrator</q-item-label>
            </q-badge>
          </q-item-section>
        </q-item>
      </q-card>

      <q-card class="my-card q-mx-sm q-mt-md" style="height:auto">
        <q-list>
          <q-item
            active-class="tab-active"
            exact
            class="navigation-item text-indigo-10"
            clickable
            :to="{ name: 'dashboard' }"
            v-ripple
          >
            <q-item-section avatar>
              <q-icon name="space_dashboard" />
            </q-item-section>
            <q-item-section>
              Dashboard
            </q-item-section>
          </q-item>

          <q-separator />

          <q-item
            active-class="tab-active"
            exact
            class="navigation-item text-indigo-10"
            clickable
            :to="{ name: 'inputProduk' }"
            v-ripple
          >
            <q-item-section avatar>
              <q-icon name="library_add" />
            </q-item-section>
            <q-item-section>
              Input Produk
            </q-item-section>
          </q-item>

          <q-item
            active-class="tab-active"
            exact
            class="navigation-item text-indigo-10"
            clickable
            :to="{ name: 'inputKategori' }"
            v-ripple
          >
            <q-item-section avatar>
              <q-icon name="plagiarism" />
            </q-item-section>
            <q-item-section>
              Input Kategori
            </q-item-section>
          </q-item>
          <q-item
            active-class="tab-active"
            exact
            class="navigation-item text-indigo-10"
            clickable
            :to="{ name: 'inputKategori' }"
            v-ripple
          >
            <q-item-section avatar>
              <q-icon name="plagiarism" />
            </q-item-section>
            <q-item-section>
              Input Kategori
            </q-item-section>
          </q-item>

          <q-separator />

          <q-expansion-item
            class="navigation-item text-indigo-10"
            icon="settings"
            label="Setting"
          >
            <q-item
              active-class="tab-active"
              class="navigation-item text-indigo"
              exact
              clickable
              v-ripple
            >
              <q-item-section avatar>
                <q-icon name="insert_chart_outlined" />
              </q-item-section>
              <q-item-section>
                Jenis Pengguna
              </q-item-section>
            </q-item>

            <q-item
              active-class="tab-active"
              class="navigation-item text-indigo"
              exact
              clickable
              v-ripple
            >
              <q-item-section avatar>
                <q-icon name="playlist_add_circle" />
              </q-item-section>
              <q-item-section>
                Jenis Laporan
              </q-item-section>
            </q-item>
          </q-expansion-item>

          <q-expansion-item
            class="navigation-item text-grey-7"
            icon="extension"
            label="Gallery"
          >
            <q-item
              active-class="tab-active"
              class="navigation-item text-grey-7"
              exact
              :to="{ name: 'all-gallery' }"
              clickable
              v-ripple
            >
              <q-item-section avatar>
                <q-icon name="collections" />
              </q-item-section>
              <q-item-section>
                All Gallery
              </q-item-section>
            </q-item>

            <q-item
              active-class="tab-active"
              class="navigation-item text-grey-7"
              exact
              clickable
              :to="{ name: 'add-gallery' }"
              v-ripple
            >
              <q-item-section avatar>
                <q-icon name="library_add" />
              </q-item-section>
              <q-item-section>
                Add Gallery
              </q-item-section>
            </q-item>
          </q-expansion-item>
          <q-separator />
        </q-list>
      </q-card>

      <q-card class="my-card q-ma-sm q-mt-md flex text-indigo-10 text-subtitle2" style="height:70px; background-repeat: no-repeat; background-size: cover;">
        <q-item>
          <q-item-section avatar>
            <img src="images/icons/icon-text.png" style="width: 50px;">
          </q-item-section>

          <q-item-section>
            <q-item-label>MRD</q-item-label>
            <q-item-label caption class="text-indigo-10">© Copyright 2023</q-item-label>
          </q-item-section>
        </q-item>
      </q-card>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>

// import Messages from "./Messages.vue";

export default {
  name: 'MainLayout',
  components: {
    // Messages
  },
  data () {
    return {
      leftDrawerOpen: false
    }
  }
}
</script>
