<template>
  <div id="no-logged" v-if="isLogged">
    <!-- mouseover.native -->
    <!-- 监听原生事件时，需要通过.native修饰符 -->
    <!-- 自定义事件官方文档：https://cn.vuejs.org/v2/guide/components-custom-events.html -->
    <router-link
      :to="sign"
      :class="signHover ? 'text-active-style' : 'text-style'"
      @mouseover.native="signHover = true"
      @mouseout.native="signHover = false"
      >登录</router-link
    >
    /
    <router-link
      :to="reg"
      :class="regHover ? 'text-active-style' : 'text-style'"
      @mouseover.native="regHover = true"
      @mouseout.native="regHover = false"
      >注册</router-link
    >
  </div>
</template>

<script>
export default {
  name: "NoLogged",
  data() {
    return {
      signHover: false,
      regHover: false,
    };
  },
  props: {
    sign: {
      type: String,
      default: "",
    },
    reg: {
      type: String,
      default: "",
    },
    isLogged: {
      type: Boolean,
      default: true,
    },
  },
};
</script>

<style>
#no-logged {
  color: white;
}

#no-logged .text-style {
  color: white;
}

#no-logged .text-active-style {
  color: rgb(250, 150, 133);
}
</style>