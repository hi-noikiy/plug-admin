<template>
  <div class="aside">
      <Menu :active-name="$route.path" @on-select="onSelectPath" theme="light">
        <MenuGroup title="概括">
          <MenuItem name="/">
            <Icon type="pie-graph"></Icon>
            总览
          </MenuItem>
        </MenuGroup>
        <MenuGroup title="游戏列表">
          <MenuItem v-for="item in games" :key="item.game_id" :name="/games/ + item.game_id">
            <Icon type="ios-game-controller-a"></Icon>
            {{item.name}}
          </MenuItem>
        </MenuGroup>
        <MenuGroup title="游戏账号" v-if="$store.state.power == 0">
          <MenuItem name="/game-acounts">
            <Icon type="users"></Icon>
            辅助账号
          </MenuItem>
        </MenuGroup>
      </Menu>
  </div>
</template>

<script>
export default {
  name: "Aside",
  data() {
    return {
      games: [
        {
          name: "海盗来了",
          game_id: 1,
          pic: ""
        },
        {
          name: "海盗来了2",
          game_id: 2,
          pic: ""
        }
      ]
    };
  },
  mounted() {
    this.$nextTick(() => {
      console.log(this.$route.path);
    });
  },
  methods: {
    onSelectPath(value) {
      this.$router.push({ path: value });
    }
  }
};
</script>
