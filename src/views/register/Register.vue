<template>
  <div class="register">
    <!-- register -->
    <b-form-group>
      <b-button variant="primary" block @click="getref">getref</b-button>
    </b-form-group>
    <div class="shell">
      <div
        class="img"
        ref="dom"
        id="img"
        :style="{ backgroundImage: 'url(' + bgImg + ')' }"
      ></div>
    </div>
  </div>
</template>

<script>
import bgImg from "@/../static/images/img.jpg";

export default {
  name: "App",
  // img :  this.$refs.dom,
  data() {
    return {
      bgImg: bgImg,
    };
  },
  methods: {
    getref() {
      // 表示从 $refs对象 中, 获取 ref 属性值为: h1ele DOM元素或组件
      console.log(this.$refs.dom);
      const img = this.$refs.dom;
      if (img != null) {
        img.addEventListener("mouseenter", function (e) {
          this.x = e.clientX;
          this.y = e.clientY;
        });
        img.addEventListener("mousemove", function (e) {
          this._x = e.clientX;
          this._y = e.clientY;
          const disx = this._x - this.x;
          const disy = this._y - this.y;
          const movex = disx * 2;
          const movey = -600 + disy / 1.6;
          img.style.backgroundPosition = `${movex}px ${movey}px`;
        });
      }
    },
  },
  created: function () {
    console.group("created created完成状态===============》");
    console.log("%c%s", "color:green", "el     : " + this.$el);
    console.log(this.$el);
    console.log("%c%s", "color:green", "data   : " + this.$data);
    console.log("%c%s", "color:green", "message: " + this.message);

    console.log(this.$refs.dom);
    const img = this.$refs.dom;
    if (img != null) {
      img.addEventListener("mouseenter", function (e) {
        this.x = e.clientX;
        this.y = e.clientY;
      });
      img.addEventListener("mousemove", function (e) {
        this._x = e.clientX;
        this._y = e.clientY;
        const disx = this._x - this.x;
        const disy = this._y - this.y;
        const movex = disx * 2;
        const movey = -600 + disy / 1.6;
        img.style.backgroundPosition = `${movex}px ${movey}px`;
      });
    }
  },
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
}
.shell {
  width: 100%;
  height: 100vh;
}
.img {
  width: 100%;
  height: 100%;
  /* background-image: url("@/../static/images/img.jpg"); */
  background-repeat: repeat-x;
  background-position: 0 -600px;
}
</style>