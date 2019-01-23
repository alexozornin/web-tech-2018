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
    <div class="content" style="width: 60%">
      <div v-for="(item, index) of vc" :key="index" style="border-bottom: 1px solid black">
        <div>{{item.name}}, {{item.salary}}</div>
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
      let res = await this.$http.post("hh", {
        min: this.min,
        max: this.max,
        num: this.num
      });
      if (res && res.body && res.body.success) {
        vc = res.body.data;
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
  align-items: center;
}
.title {
  font-size: 24px;
}
</style>
