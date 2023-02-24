<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="text-white q-pl-lg q-pr-lg q-pt-md q-pb-md" style="background-color: #002e74;">
      <q-toolbar>
        <div class="text-h4 text-weight-bolder">PT. MRD</div>
        <q-toolbar-title>
        </q-toolbar-title>
        <q-card class="q-pl-md q-pr-md">
          <q-btn flat class="text-indigo-10" no-caps label="Dashboard" :to="{ name: 'dashboard' }" />
          <q-btn flat class="text-indigo-10" no-caps label="Product" :to="{ name: 'product' }" />
          <q-btn flat class="text-indigo-10" no-caps label="Gallery" :to="{ name: 'gallery' }" />
          <q-btn flat class="text-indigo-10" no-caps label="Blog" />
        </q-card>
        <q-card class="q-pl-md q-pr-md q-ml-md">
          <q-btn flat class="text-indigo-10" no-caps label="SignIn" />
        </q-card>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>

export default {
  name: 'MainLayout',
  components: {
  },
  data () {
    return {
    }
  }
}
</script>
