<template>
    <header>
        <div class="menu">
            <div class = "menuitem" @click="home()">Главная</div>
            <div class = "menuitem" @click="lab1()">Лаб 1</div>
            <div class = "menuitem" @click="lab2()">Лаб 2</div>
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
    if (response && response.body) {
      let user = response.body;
      this.userId = user.id;
      this.userName = user.name;
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
  height: 40px;
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
  padding: 5px;
}
.menuitem {
  margin: 5px;
  cursor: pointer;
}
.profile {
  margin: 5px;
  padding-right: 10px;
  margin-left: auto;
  cursor: pointer;
  justify-self: flex-end;
}
</style>
