<template>
    <header>
        <div class="menu">
            <div class = "menuitem" @click="home()">Главная</div>
            <div class = "menuitem" @click="lab1()">Лаб 1</div>
            <div class = "menuitem" @click="lab2()">Лаб 2</div>
            <div class = "menuitem" @click="hh()">Head Hunter</div>
            <div class = "profile" @click="profile()">{{userName}}</div>
        </div>
    </header>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      userId: null,
      userName: "Войти",
      mainText: ""
    };
  },
  async created() {
    let response = await this.$http.post("/currentuser");
    if (response && response.body && response.body.data && response.body.data.user) {
      let user = response.body.data.user;
      console.log(user);
      this.userId = user.id;
      this.userName = user.firstName;
    }
  },
  methods: {
    home() {
      this.$router.push({ name: "Home" });
    },
    lab1() {
      this.$router.push({ name: "Lab1" });
    },
    lab2() {
      this.$router.push({ name: "Lab2" });
    },
    hh() {
      this.$router.push({ name: "HH" });
    },
    profile() {
      if (this.userId) {
        this.$router.push({ name: "Profile" });
      } else {
        this.$router.push({ name: "SignIn" });
      }
    }
  }
};
</script>

<style scoped>
header {
  text-align: left;
  height: 100%;
  background-color: black;
  color: white;
}
.sticky {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
}
.menu {
  width: 100%;
  display: flex;
}
.menuitem {
  margin: 10px;
  cursor: pointer;
}
.profile {
  margin: 10px;
  padding-right: 10px;
  margin-left: auto;
  cursor: pointer;
  justify-self: flex-end;
}
</style>
