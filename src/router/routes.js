const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        name: "dashboard",
        component: () => import("pages/Index.vue"),
      },
      {
        path: "gallery",
        name: "gallery",
        component: () => import("pages/Gallery.vue"),
      },
    ],
  },
  {
    path: "/admin",
    component: () => import("layouts/MainAdmin.vue"),
    children: [
      {
        path: "/admin",
        name: "admin",
        component: () => import("pages/admin/Index.vue"),
      },
      {
        path: "all-gallery",
        name: "all-gallery",
        component: () => import("pages/admin/gallery/Index.vue"),
      },
      {
        path: "add-gallery",
        name: "add-gallery",
        component: () => import("pages/admin/gallery/GalleryAdd.vue"),
      },
      {
        path: "input-produk",
        name: "inputProduk",
        component: () => import("pages/admin/gallery/inputProduk.vue"),
      },
      {
        path: "input-kategori",
        name: "inputKategori",
        component: () => import("pages/admin/gallery/inputKategori.vue"),
      },
    ],
  },
  {
    path: "/product",
    component: () => import("layouts/MainProduct.vue"),
    children: [
      {
        path: "",
        name: "product",
        component: () => import("pages/product/Index.vue"),
      },
      {
        path: "iot",
        name: "iot",
        component: () => import("pages/product/IOTProduct.vue"),
      },
      {
        path: "web",
        name: "web",
        component: () => import("pages/product/WebProduct.vue"),
      },
      {
        path: "mobile",
        name: "mobile",
        component: () => import("pages/product/MobileProduct.vue"),
      },
      {
        path: "detail",
        name: "detail",
        component: () => import("pages/product/DetailProduct.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("pages/acces/loginPage.vue"),
  },
];

export default routes;
