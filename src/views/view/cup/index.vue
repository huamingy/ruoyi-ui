<template>
  <div class="three-canvas" ref="threeTarget">
    <!-- <TopHeader></TopHeader> -->
    <Left></Left>
    <div></div>
  </div>
</template>
<script>
import TopHeader from "../cuptop/index.vue";
import Left from "../cupleft/left.vue";
import { ThreMain } from "./threejs/threeMain";
import { allLights } from "./threejs/light";
import { allBaseObject } from "./threejs/module";
export default {
  name: "cup",
  components: {
    TopHeader,
    Left,
  },
  data() {
    return {
      ThreMain: null,
    };
  },
  mounted() {
    this.ThreMain = new ThreMain(this.$refs.threeTarget);

    console.log("this.ThreMain:", this.ThreMain);
    // this.ThreMain.addObject(allLights);
    // this.ThreMain.addObject(allBaseObject);
  },
};
</script>
<style>
.three-canvas {
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: #d6eaff;
}
</style>
