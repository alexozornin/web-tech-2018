<template>
  <div>
    <vheader></vheader>
    Profile
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {};
  },
  components: {
    vheader: () => import('./vheader')
  }
};
</script>

<style scoped>

</style>
