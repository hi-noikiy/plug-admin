<template>
  <div class="welcome">
      <h2>当前登录用户：{{ $store.state.userinfo.username }}</h2>
  </div>
</template>

<script>
export default {
  name: 'welcome',
  data () {
      return {
          
      }
  }
}
</script>

