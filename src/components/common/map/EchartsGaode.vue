<template>
  <div id="gaode-echarts"></div>
</template>

<script>
import * as echarts from "echarts";
require("echarts");
require("echarts-extension-amap");
import Vue from "vue";

export default {
  name: "EchartsGaode",
  data() {
    return {
      option: {
        amap: {
          lang: "en",
          viewMode: "2D",
          center: [114.270896,22.730804],
          zoom: 14,
          resizeEnable: true,
          // https://lbs.amap.com/dev/mapstyle/index
          mapStyle: "amap://styles/whitesmoke",
          renderOnMoving: true,
          echartsLayerZIndex: 2019,
          echartsLayerInteractive: true,
          largeMode: false,
        },
        series: [
          // 初始化一个样式，后续可以进行动态修改
          {
            // 0.散点样式
            type: "effectScatter",
            coordinateSystem: "amap",
            symbolSize: 6,
            rippleEffect: {
              scale: 5,
            },
            //   接收[[],[],...]
            data: [],
          },
          {
            // 1.轨迹样式
            type: "lines",
            coordinateSystem: "amap",
            polyline: true,
            effect: {
              show: true,
              color: "rgb(255,99,71)",
              trailLength: 0.6,
              period: 7,
              symbolSize: 8,
            },
            lineStyle: {
              color: "rgb(200, 35, 45)",
              opacity: 0.2,
              width: 4,
              type: "dotted",
            },
            zlevel: 2,
            data: [],
          },
          {
            // 2.全局轨迹样式
            type: "lines",
            coordinateSystem: "amap",
            polyline: true,
            data: [],
            silent: true,
            lineStyle: {
              // color: '#c23531',
              // color: 'rgb(200, 35, 45)',
              opacity: 0.2,
              width: 1,
            },
            progressiveThreshold: 500,
            progressive: 200,
          },
          {
            // 3.全局轨迹动画样式
            type: "lines",
            coordinateSystem: "amap",
            polyline: true,
            data: [],
            lineStyle: {
              width: 0,
            },
            effect: {
              constantSpeed: 20,
              show: true,
              trailLength: 0.3,
              symbolSize: 3,
            },
            zlevel: 1,
          },
        ],
      },
    };
  },
  methods: {
    initMap() {
      const chart = echarts.init(document.getElementById("gaode-echarts"));
      chart.setOption(this.option);
      Vue.prototype.$mychart = chart;

      // get AMap extension component
      const amapComponent = chart.getModel().getComponent("amap");
      // get the instance of AMap
      const amap = amapComponent.getAMap();
      // set mapStyle
      // amap.setMapStyle('amap://styles/whitesmoke');

      // operations below are the same as amap
      // amap.addControl(new AMap.Scale());
      Vue.prototype.$gaode = {
        map: amap,
        AMap,
      };
    },
  },
  mounted() {
    this.initMap();
  },
};
</script>

<style>
#gaode-echarts {
  height: 98%;
  width: 98%;
  position: relative;

  border: 3px solid #f2f2f2;
}
</style>