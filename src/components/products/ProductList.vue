<template>
  <div>
    <v-container>
      <v-row class="mb-12">
        <v-col
          v-for="(product, index) in productItems.data"
          :key="index"
          sm="5"
          md="4"
        >
          <ProductItem :product="product" />          
        </v-col>
      </v-row>

      <v-pagination
        class="hidden-sm-and-down"
        v-model="page"
        :circle="circle"
        :disabled="disabled"
        :length="length"
        :next-icon="nextIcon"
        :prev-icon="prevIcon"
        :page="page"
        :total-visible="totalVisible"
        @input="
          getProductsFromPaginationLinks(
            'https://vuejsapi.georgekprojects.tk/api/products?page=' + page
          )
        "
      ></v-pagination>
    </v-container>
    <v-bottom-navigation
      background-color="#BBE6D6"
      fixed
      class="hidden-md-and-up"
      v-model="bottomNav"
    >
      <v-pagination
        v-model="page"
        :circle="circle"
        :disabled="disabled"
        :length="length"
        :next-icon="nextIcon"
        :prev-icon="prevIcon"
        :page="page"
        :total-visible="totalVisible"
        @input="
          getProductsFromPaginationLinks(
            'https://vuejsapi.georgekprojects.tk/api/products?page=' + page
          )
        "
      ></v-pagination>
    </v-bottom-navigation>
  </div>
</template>

<script>
import ProductItem from "./ProductItem.vue";
import { mapGetters } from "vuex";
import { mapActions } from "vuex";
export default {
  methods: {
    gettingNextPage(page) {
      console.log(page);
    },
    ...mapActions(["getProductsFromPaginationLinks"]),
  },
  name: "ProductList",
  computed: {
    ...mapGetters(["productItems", "numberInPagination"]),
  },
  created() {
    this.$store.dispatch("getProductItems");
  },
  components: {
    ProductItem,
  },
  data: () => ({
    show: false,
    rating: this,
    circle: true,
    disabled: false,
    length: null,
    nextIcon: "navigate_next",
    nextIcons: ["mdi-chevron-right", "mdi-arrow-right", "mdi-menu-right"],
    prevIcon: "navigate_before",
    prevIcons: ["mdi-chevron-left", "mdi-arrow-left", "mdi-menu-left"],
    page: 1,
    totalVisible: 7,
    bottomNav: "recent",
  }),
  updated() {    
    this.length = this.numberInPagination;
  },
};
</script>

<style>
a {
  text-decoration: none;
  color: white;
}
</style>
