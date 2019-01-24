<template>
  <div>
    <vheader></vheader>
    <div class="content">
      <div class="comment">
        <div>{{user.email}}</div>
        <div>{{user.firstName}}</div>
        <div>{{user.surname}}</div>
      </div>
      <div class="button">
        <div style="padding:5px" @click="signOut()">Выйти</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      user: {
        email: "",
        firstName: "",
        surname: ""
      }
    };
  },
  components: {
    vheader: () => import("./vheader")
  },
  methods: {
    async signOut() {
      await this.$http.post("/signout");
      location.href = "/signin";
    }
  },
  async created() {
    let res = await this.$http.post("/currentuser");
    if (res && res.body && res.body.data && res.body.data.user) {
      this.user = res.body.data.user;
    }
  }
};
</script>

<style scoped>
.content {
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.comment {
  font-size: 18px;
  margin: 10px;
}
</style>
