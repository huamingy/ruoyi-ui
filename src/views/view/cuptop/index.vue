<template>
  <div id="top-header">
    <div class="left-title" @click="refreshWindow">
      <!-- <img src="/static/mapIcon/ntts_icon.png" align="absmiddle" alt="ICON" /> -->
    </div>
    <div class="center-title">测试系统</div>
    <div class="right-title">
      <div class="weather-box font-size">
        <el-tooltip
          class="item"
          effect="dark"
          :content="rainWarning ? '隐藏降雨天气预警' : '显示降雨天气预警'"
          placement="bottom"
        >
          <i
            @click="switchRainWarning"
            :class="[
              `qi-${weatherNow.icon}-fill`,
              rainWarning ? 'font-color' : 'font-color_disable',
            ]"
            style="font-size: 18px; cursor: pointer"
          ></i>
        </el-tooltip>
        <span>{{ weatherNow.text }}</span>
        <span>{{ weatherNow.temp }} ℃</span>
        <span>{{ this.currentDate }}</span>
        <span>星期{{ this.currentWeek }}</span>
        <span>{{ currentTime }}</span>
      </div>
      <el-divider direction="vertical"></el-divider>
      <div class="my-operate-box">
        <el-tooltip
          class="item"
          effect="dark"
          content="轻点下拉"
          placement="bottom"
        >
          <el-dropdown trigger="click">
            <div class="my-wrapper"></div>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item @click.native="logout">
                <span>退出登录</span>
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-tooltip>
        <el-tooltip
          class="item"
          effect="dark"
          content="返回首页"
          placement="bottom"
        >
        </el-tooltip>
      </div>
    </div>
  </div>
</template>

<script>
// import dayjs from "dayjs";
// import { getCenterWeather } from "@/api/weather";

export default {
  name: "TopHeader",
  data() {
    return {
      currentDate: undefined,
      currentWeek: undefined,
      currentTime: undefined,
      numCapitals: ["一", "二", "三", "四", "五", "六", "天"],
      weatherNow: {},
      rainWarning: true,
    };
  },
  //   created() {
  //     this.initDateAnaWeek();
  //     this.initWeather();
  //   },
  mounted() {},
  methods: {
    // initDateAnaWeek() {
    //   const that = this;
    //   this.currentDate = dayjs().format("YYYY.MM.DD");
    //   this.currentTime = dayjs().format("HH:mm:ss");
    //   this.currentWeek = this.numCapitals[dayjs().day() - 1];
    //   setInterval(() => {
    //     that.currentTime = dayjs().format("HH:mm:ss");
    //   }, 1000);
    // },
    /** 初始化天气 */
    // initWeather() {
    //   getCenterWeather().then((response) => {
    //     this.weatherNow = response.data.weatherNow.now;
    //   });
    // },
    /** 刷新当前页面 */
    // refreshWindow() {
    //   location.reload();
    // },
    /** 登出 */
    // async logout() {
    //   this.$confirm("确定注销并退出系统吗？", "提示", {
    //     confirmButtonText: "确定",
    //     cancelButtonText: "取消",
    //     type: "warning",
    //   })
    //     .then(() => {
    //       this.$store.dispatch("LogOut").then(() => {
    //         location.href = "/index";
    //       });
    //     })
    //     .catch(() => {});
    // },
    /** 返回后台首页 */
    // returnBackstageMain() {
    //   const that = this;
    //   this.$modal.confirm("是否确认返回主页？").then(function () {
    //     let routeUrl = that.$router.resolve({
    //       path: "/index",
    //     });
    //     window.open(routeUrl.href, "_blank");
    //   });
    // },
    // switchRainWarning() {
    //   this.rainWarning = !this.rainWarning;
    //   if (this.rainWarning) {
    //     this.$parent.showRainWarningMarker();
    //   } else {
    //     this.$parent.clearWarningWeatherRange("rainWeather");
    //   }
    // },
  },
};
</script>

<style lang="scss">
@import "../css/top.scss";
</style>
