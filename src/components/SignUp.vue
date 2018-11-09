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
        <div style="margin-top:20px"></div>
        <div>
            <input type="text" placeholder="Имя" v-model="firstName" :class="firstClass">
        </div>
        <div>
            <input type="text" placeholder="Фамилия" v-model="surname" class="input">
        </div>
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
      firstName: "",
      surname: "",
      emailClass: "input",
      passwordClass: "input",
      firstClass: "input"
    };
  },
  methods: {
    async signUp() {
      console.log('signup');
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
      let validName = this.firstName.length >= 1;
      if (validName) {
        this.firstClass = "input";
      } else {
        this.firstClass = "bad-input";
        this.text = "Введите имя";
        return;
      }
      this.text = "";
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
