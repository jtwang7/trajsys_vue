<template>
  <div id="sign">
    <Logged :isLogged='Logged' />
    <NoLogged :isLogged='!Logged' sign="/login" reg="/login" />
  </div>
</template>

<script>
import Logged from './Logged'
import NoLogged from './NoLogged'

export default {
  name: "Sign",
  components: {
    Logged,
    NoLogged,
  },
  computed: {
    Logged() {
      console.log(this.$route.params.id);
      if (this.$route.params.id === 'tourist') {
        return false;
      } else {
        return true;
      }
    }
  }
};
</script>

<style>
#sign {
  margin-left: 30px;
}
</style>