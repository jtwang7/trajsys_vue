<template>
  <div id="login-bar">
      <slot name="icon"></slot>
      <slot name="input"></slot>
  </div>
</template>

<script>
export default {
  name:'LoginBar'
}
</script>

<style scopoed>
.login-bar {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
</style>