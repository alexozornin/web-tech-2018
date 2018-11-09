<template>
  <div>
    <vheader></vheader>
    <div v-for="item of array" :key="item.id"></div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      array: []
    };
  },
  created() {
    console.log(this.$route);
  },
  components: {
    vheader: () => import("./vheader")
  }
};
</script>

<style scoped>
</style>
