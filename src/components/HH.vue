<template>
  <div>
    <vheader></vheader>
    <div class="content">
      <div class="title">Поиск вакансий HH</div>
      <div>
        <input type="number" placeholder="Минимальная ЗП" v-model="min" class="input">
      </div>
      <div>
        <input type="number" placeholder="Максимальная ЗП" v-model="max" class="input">
      </div>
      <div>
        <input type="number" placeholder="Кол-во записей" v-model="num" class="input">
      </div>
      <div class="button">
        <div style="padding:5px" @click="req()">Найти</div>
      </div>
    </div>
    <div class="content">
      <div v-for="(item, index) of vc" :key="index" class="vacancy">
        <div>{{item.name}} ({{item.count}}), {{item.salary}} руб.</div>
        <div>Ключевые навыки: {{item.req}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      min: "",
      max: "",
      num: "",
      vc: []
    };
  },
  components: {
    vheader: () => import("./vheader")
  },
  methods: {
    async req() {
      console.log('hh');
      let res = await this.$http.post("/hh", {
        min: this.min,
        max: this.max,
        num: this.num
      });
      console.log(res);
      if (res && res.body && res.body.success) {
        this.vc = res.body.data;
      }
    }
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
  justify-content: center;
  align-items: center;
}
.vacancy {
  font-size: 18px;
  margin-left: 20%;
  margin-right: 20%;
  border-bottom: 1px solid black;
  align-self: center;
}
.title {
  font-size: 24px;
}
</style>
