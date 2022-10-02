<template>
  <v-row align="center">
    <v-col class="d-flex" cols="12" sm="8">
      <v-select
        v-model="selected"
        :items="produtos"
        label="Selecione um produto"
        item-text="produto"
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
    ...mapState(['produtos']),
  },

  mounted() {
    this.getProdutos();
  },

  methods: {
    ...mapActions(['getProdutos']),
  },
};
</script>