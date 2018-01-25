<template>
  <div class="navbar">
      <Menu @on-select="changeRoute" mode="horizontal" theme="light" class="navbar">
        <div class="navbar-logo">
          <router-link to="/" class="site-logo">
            腻歪游戏
          </router-link>
        </div>
        <div class="navbar-search">
          <Input v-model="navbarSearch" placeholder="搜索游戏服务" icon="ios-search"></Input>
        </div>
        <div class="nav navbar-nav">
          <MenuItem name="/message" v-if="$store.state.power == 0">
            <Badge dot>
              <Icon type="chatbox"></Icon>
              用户反馈
            </Badge>
          </MenuItem>
          <MenuItem name="/">
            <Avatar src="https://i.loli.net/2017/08/21/599a521472424.jpg"></Avatar>
            {{ $store.state.userinfo.username }}
          </MenuItem>
          <MenuItem name="/login">
            <Icon type="log-out"></Icon>
            退出
          </MenuItem>
        </div>
      </Menu>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      navbarSearch: "" // 搜索内容
    };
  },
  methods: {
    changeRoute(path) {
      this.$router.push({
        path: path
      });
    }
  }
};
</script>

<!-- css 由 sass 编译 -->
<style lang="scss" scoped>
.navbar {
  .navbar {
    padding: 0px 30px;

    .navbar-search,
    .navbar-logo {
      float: left;
    }
    .navbar-logo {
      font-size: 22px;
    }
    .navbar-search {
      margin-left: 130px;
    }
    .navbar-nav {
      float: right;
    }
  }
}
</style>
