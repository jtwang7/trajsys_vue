<template>
  <div class="circle" @click="sign">
    <!-- .stop 修饰符阻止事件冒泡 -->
    <a class="log-in" @click.stop="sign">登录</a>
  </div>
</template>

<script>
import { login } from "@/network/login";

export default {
  name: "LoginBtn",
  props: {
    account: {
      type: String,
      default: "",
    },
    password: {
      type: String,
      default: "",
    },
  },
  methods: {
    async sign() {
      if (!this.account) {
        this.$Message.info("请输入用户名...");
        // 中断该方法继续进行，否则还会进行请求
        return;
      } else if (!this.password) {
        this.$Message.info("请输入密码...");
        return;
      }

      // 需要设置拦截器！！否则请求的是axios包装的值
      const res = await login({
        account: this.account,
        password: this.password,
      });

      if (res === 'success') {
        this.$router.replace(`/main/gaode/${this.account}`);
      } else if (res === 'refused') {
        // iviewUI的方法，不是Vue内部的
        this.$Message.info("密码错误！请重新登录...");
      } else {
        this.$Message.info("用户名不存在...");
      }
    },
  },
};
</script>

<style scoped>
.circle {
  width: 100px;
  height: 100px;
  background: rgb(248, 143, 74);
  -moz-border-radius: 50px;
  -webkit-border-radius: 50px;
  border-radius: 50px;

  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 20px;
}

.log-in {
  font-weight: bolder;
  font-size: 2em;
  display: block;

  color: rgb(119, 119, 143);
}
</style>