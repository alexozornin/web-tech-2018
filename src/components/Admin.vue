<template>
  <div>
    <vheader></vheader>
    <div>Панель администратора</div>
    <div>Пользователи</div>
    <div class="line" v-for="item of users" :key="item.id">
      <input type="text" v-model="item.email">
      <input type="text" v-model="item.firstname">
      <input type="text" v-model="item.email">
    </div>
    <div class="line" v-for="item of mainPages" :key="item.id">

    </div>
    <div class="line" v-for="item of customPages" :key="item.id">

    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      users: [],
      mainPages: [],
      customPages: []
    };
  },
  created() {
    console.log('query', this.$route.query);
    console.log('params', this.$route.params);
  },
  components: {
    vheader: () => import("./vheader")
  }
};
</script>

<style scoped>
.line {
  display: flex;
}
</style>
