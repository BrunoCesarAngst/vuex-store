<template>
  <v-row align="center">
    <v-col class="d-flex" cols="12" sm="8">
      <v-select
        v-model="selected"
        :items="products"
        label="Select"
        item-text="product"
        item-value="id"
        chips
        deletable-chips
        @change="change"
      ></v-select>
    </v-col>
  </v-row>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  name: "Select",

  data() {
    return {};
  },

  computed: {
    ...mapState(['products']),
  },

  mounted() {
    this.getProducts();
  },

  methods: {
    ...mapActions(['getProducts']),
  },
};
</script>