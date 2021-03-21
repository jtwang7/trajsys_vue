<template>
  <Dropdown v-if="isLogged" @on-click="click">
    <a href="javascript:void(0)">
      <img
        class="avatar-container"
        src="../../../assets/userAvatar.png"
        alt=""
      />
      <Icon type="ios-arrow-down" style="color:white;"></Icon>
    </a>
    <DropdownMenu slot="list">
      <DropdownItem>个人中心</DropdownItem>
      <DropdownItem>首页</DropdownItem>
      <DropdownItem disabled>权限管理</DropdownItem>
      <DropdownItem divided name="signout">退出登录</DropdownItem>
    </DropdownMenu>
  </Dropdown>
</template>

<script>
export default {
  name: "Logged",
  props: {
    isLogged: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
      click(name) {
          if(name === 'signout') {
              this.$router.replace('/main/gaode/tourist');
          }
      }
  },
};
</script>

<style scoped>
img {
  width: 100%;
}

.avatar-container {
  border-radius: 50%;
  width: 40px;
}
</style>