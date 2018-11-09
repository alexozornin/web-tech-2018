<template>
  <div>
    <vheader></vheader>
    <div class="content">
        <div class="error">{{text}}</div>
        <div>
            <input type="email" placeholder="E-mail" v-model="email" :class="emailClass">
        </div>
        <div>
            <input type="password" placeholder="Пароль" v-model="password" :class="passwordClass">
        </div>
        <div class="button">
          <div style="padding:5px" @click="signIn()">
              Войти
          </div>
        </div>
        <div>или</div>
        <div class="button">
          <div style="padding:5px" @click="signUp()">
              Зарегистрироваться
          </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      text: "",
      email: "",
      password: "",
      emailClass: "input",
      passwordClass: "input"
    };
  },
  methods: {
    async signIn() {
      this.text = "";
      let validEmail = this.email.match(/\w+?@\w+?\.\w+/g);
      if (validEmail) {
        this.emailClass = "input";
      } else {
        this.emailClass = "bad-input";
        this.text = "Некорректный e-mail";
        return;
      }
      let validPassword = this.password.length >= 6;
      if (validPassword) {
        this.passwordClass = "input";
      } else {
        this.passwordClass = "bad-input";
        this.text = "Пароль слишком короткий";
        return;
      }
      this.text = "";
      let response = this.$http.post("/signin", {
        email: this.email,
        password: this.password
      });
      if (response && response.body && response.body.userId) {
        this.$router.push({ name: "Home" });
      } else {
        if (response && response.body && response.body.msg) {
          this.text = response.body.msg;
        }
        else {
          this.text = "Не удалось выполнить вход";
        }
      }
    },
    signUp() {
      this.$router.push({ name: "SignUp" });
    }
  },
  components: {
    vheader: () => import("./vheader")
  }
};
</script>

<style scoped>
input {
  margin: 5px;
}
.content {
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.input {
  background-color: white;
}
.bad-input {
  background-color: pink;
}
</style>
