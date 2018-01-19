<template>
  <div class="aside">
      <Menu @on-select="onSelectPath" theme="light" :active-name="$route.path">
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
      </Menu>
  </div>
</template>

<script>
export default {
  name: 'Aside',
  data () {
      return {
          games: [
            {
              name: '海盗来了',
              game_id: 'aosid029ke0f2129kd992kd',
              pic: ''
            },
            {
              name: '海盗来了2',
              game_id: 'afe0dae9fgea0e2fwfwf223',
              pic: ''
            }
          ]
      }
  },
  mounted () {
    this.$nextTick(() => {
      
    })
  },
  methods: {
    onSelectPath (value) {
      this.$router.push({ path: value })
    }
  }
}
</script>
