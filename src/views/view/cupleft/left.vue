<template>
  <div class="left">{{ name }}</div>
</template>

<script>
export default {
  name: "Left",
  data() {
    return {
      name: "左侧",
    };
  },
};
</script>
<style scoped>
.left {
  top: 20%;
  float: left;
  background-color: aqua;
}
</style>
