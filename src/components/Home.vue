<template>
  <div>
    <vheader></vheader>
    <div class="focused">
      Веб технологии
    </div>
    <div class="comment">
      Александр Озорнин
    </div>
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
.focused {
  margin-top: 200px;
  margin-bottom: 24px;
  font-size: 36px;
}
.comment {
  font-size: 24px;
}
</style>
