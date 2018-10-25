<template>
    <div>
      <canvas ref="canvas" :width="canvasSize" :height="canvasSize" @click="canvasClick"></canvas>
      <div v-text="text"></div>
      <img :src="pauseSrc" @click="pause()">
      <img src="static/images/next.png" @click="next()">
      <div style="">Alexander Ozornin RI-450005</div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      assetSize: 0,
      canvasSize: 0,
      canvas: null,
      ctx: null,
      matrix: [],
      text: "Loading...",
      paused: false,
      pauseSrc: "static/images/pause.png",
      breakEvent: new CustomEvent("break"),
      pauseEvent: new CustomEvent("pause")
    };
  },
  async created() {
    let minSize = Math.min(window.innerWidth, window.innerHeight);
    let dv = this.div(minSize, 65);
    this.assetSize = dv.res;
    this.canvasSize = 62 * this.assetSize;
    this.$nextTick(() => {
      this.canvas = this.$refs.canvas;
      this.ctx = this.canvas.getContext("2d");
      this.initCanvas();
      this.start();
    });
  },
  methods: {
    div(numerator, denominator) {
      let remainder = numerator % denominator;
      return { rem: remainder, res: (numerator - remainder) / denominator };
    },
    sleep(ms, windowAwakeEvent, timeoutValue, awakeValue) {
      return new Promise(resolve => {
        if (!ms && !windowAwakeEvent) {
          resolve();
        }
        let awakeRes = function() {
          resolve(awakeValue);
        };
        if (ms) {
          setTimeout(() => {
            resolve(timeoutValue);
            if (windowAwakeEvent) {
              window.removeEventListener(windowAwakeEvent, awakeRes, {
                once: true
              });
            }
          }, ms);
        }
        if (windowAwakeEvent) {
          window.addEventListener(windowAwakeEvent, awakeRes, { once: true });
        }
      });
    },
    getPositionByIndex(index) {
      return this.assetSize * (3 * index + 1) + 1;
    },
    getIndexesByPosition(coords) {
      for (let i = 0; i < 20; i++) {
        let diff = coords.x - this.getPositionByIndex(i);
        if (diff < 0 || diff > 2 * this.assetSize) {
          continue;
        }
        for (let j = 0; j < 20; j++) {
          diff = coords.y - this.getPositionByIndex(j);
          if (diff < 0 || diff > 2 * this.assetSize) {
            continue;
          }
          return {
            i,
            j
          };
        }
        break;
      }
      return null;
    },
    initCanvas() {
      this.ctx.fillStyle = "#999999";
      for (let i = 0; i < 20; i++) {
        this.matrix[i] = [];
        for (let j = 0; j < 20; j++) {
          this.matrix[i][j] = false;
          this.ctx.fillRect(
            this.getPositionByIndex(i),
            this.getPositionByIndex(j),
            2 * this.assetSize,
            2 * this.assetSize
          );
        }
      }
    },
    swapMatrixValue(i, j) {
      let value = !this.matrix[i][j];
      if (value) {
        this.ctx.fillStyle = "#ff0000";
      } else {
        this.ctx.fillStyle = "#999999";
      }
      this.ctx.fillRect(
        this.getPositionByIndex(i),
        this.getPositionByIndex(j),
        2 * this.assetSize,
        2 * this.assetSize
      );
      this.matrix[i][j] = value;
    },
    canvasClick(e) {
      let coords = this.canvas.relMouseCoords(e);
      let indexes = this.getIndexesByPosition(coords);
      if (!indexes) {
        return;
      }
      let value = this.matrix[indexes.i][indexes.j];
      this.swapMatrixValue(indexes.i, indexes.j);
    },
    async start() {
      while (true) {
        for (let i = 3; i >= 0; i--) {
          this.text = i;
          let res = await this.sleep(1000, "break", false, true);
          if (this.paused) {
            await this.sleep(null, "pause");
          }
          if (res) {
            break;
          }
        }
        this.proc();
      }
    },
    proc() {
      let arr = [];
      for (let i = 0; i < 20; i++) {
        for (let j = 0; j < 20; j++) {
          let parents = 0;
          if (this.matrix[i - 1] && this.matrix[i - 1][j - 1]) {
            parents++;
          }
          if (this.matrix[i - 1] && this.matrix[i - 1][j]) {
            parents++;
          }
          if (this.matrix[i - 1] && this.matrix[i - 1][j + 1]) {
            parents++;
          }
          if (this.matrix[i] && this.matrix[i][j - 1]) {
            parents++;
          }
          if (this.matrix[i] && this.matrix[i][j + 1]) {
            parents++;
          }
          if (this.matrix[i + 1] && this.matrix[i + 1][j - 1]) {
            parents++;
          }
          if (this.matrix[i + 1] && this.matrix[i + 1][j]) {
            parents++;
          }
          if (this.matrix[i + 1] && this.matrix[i + 1][j + 1]) {
            parents++;
          }
          if (this.matrix[i][j]) {
            if (parents < 2 || parents > 3) {
              arr.push({
                i,
                j
              });
            }
          } else {
            if (parents == 3) {
              arr.push({
                i,
                j
              });
            }
          }
        }
      }
      for (let i = 0; i < arr.length; i++) {
        this.swapMatrixValue(arr[i].i, arr[i].j);
      }
    },
    pause() {
      this.paused = !this.paused;
      if (this.paused) {
        this.pauseSrc = "static/images/pause_active.png";
      } else {
        this.pauseSrc = "static/images/pause.png";
      }
      window.dispatchEvent(this.breakEvent);
      window.dispatchEvent(this.pauseEvent);
    },
    next() {
      this.pauseBreak = false;
      window.dispatchEvent(this.breakEvent);
    }
  }
};
</script>

<style scoped>
</style>
