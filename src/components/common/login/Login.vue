<template>
  <div id="login-container">
    <div class="login-body">
      <h1 class="title">账户登录</h1>
      <LoginBar>
        <template v-slot:icon>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-user"></use>
          </svg>
        </template>
        <template v-slot:input>
          <Input
            v-model="account"
            placeholder="Account ..."
            style="width: 200px; padding-bottom: 15px"
            class="input-style"
          />
        </template>
      </LoginBar>
      <LoginBar>
        <template v-slot:icon>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-password"></use>
          </svg>
        </template>
        <template v-slot:input>
          <Input
            v-model="password"
            type="password"
            password
            placeholder="Password ..."
            style="width: 200px; padding-bottom: 10px"
            class="input-style"
          />
        </template>
      </LoginBar>
      <LoginBtn :account="account" :password="password"/>
    </div>
  </div>
</template>

<script>
import "@/assets/login/iconfont.js";
import LoginBar from "./LoginBar";
import LoginBtn from './LoginBtn'

export default {
  name: "Login",
  components: {
    LoginBar,
    LoginBtn,
  },
  data() {
    return {
      account: "",
      password: "",
    };
  },
};
</script>

<style scoped>
/* style scoped 包裹样式只能在该组件内使用 */
#login-container {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: -1;
  /* style内引入图片不能用@ */
  background-image: url("../../../assets/login-background.png");
  background-size: 100%;
}

.login-body {
  margin-top: 20vh;
  margin-left: 20vw;
  margin-right: 20vw;
  height: 200px;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}

.login-body .title {
  color: white;
  font-weight: bolder;
  font-size: 2em;
  margin-bottom: 20px;
}

/* iconfont 下载的图标通过 font-size 调大小 */
.login-body .icon {
  font-size: 30px;
  margin-right: 10px;
}

.login-body .input-style {
    margin-right: 2vw;
}
</style>

<style>
/* 全局CSS样式 */
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>