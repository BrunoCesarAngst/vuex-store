<template>
  <div class="home">
    <v-spacer></v-spacer>
    <Select />
    <!-- <ProductList /> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import ProductList from "../components/ProductList.vue";
import Select from "../components/Select.vue";

export default {
  name: "Home",
  components: {
    // ProductList,
    Select
},
};
</script>
