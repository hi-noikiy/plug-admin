<template>
  <div class="welcome">
		<Alert>
			Vue.js 练习项目
			<template slot="desc">通过多组件拼接及VUEX状态管理实现大型项目开发，后期将融合 Mock 实现虚拟数据。</template>
		</Alert>

    <div class="userVisit" aria-label="普通消费用户访问显示" v-if="$store.state.power == 1">
        <Row :gutter="15" class="UserInfo">
        <Col :span="2">
          <div class="UserHeaderImg">
            <img :src="userinfo.pic" width="100%" alt="">
          </div>
        </Col>
        <Col :span="6">
          <h2 class="UserName">{{ userinfo.username }}</h2>
          <p class="UserSex">
            <Badge v-if="userinfo.sex == 0" count="男"></Badge>
            <Badge v-if="userinfo.sex == 1" count="女"></Badge>
            <Badge v-if="userinfo.sex == 2" count="未知"></Badge>
          </p>
          <h2 class="total">消费金额：<span>¥{{ userinfo.total_consumption}}</span> </h2>
        </Col>
      </Row>
      <recommend-list><!--推荐商品列表--></recommend-list>
    </div>

    <div class="adminVisit" aria-label="管理员用户访问显示" v-else-if="$store.state.power == 0">
      <div class="echarts" id="echarts" style="width:100%;height:400px;"></div>
    </div>

  </div>
</template>

<script>
import RecommendList from "@/components/GameServiceList/RecommendList"; // 推荐商品列表组件

/**
	按需引入，此处仅用到 echarts 的折线图、工具提示、标题组件
 */
const echarts = require("echarts/lib/echarts");
require("echarts/lib/chart/line");
require("echarts/lib/component/tooltip");
require("echarts/lib/component/title");

export default {
  name: "welcome",
  components: { RecommendList },
  data() {
    return {
      userinfo: {
        username: "Admin",
        pic: "https://i.loli.net/2017/08/21/599a521472424.jpg",
        sex: 0, // [0: male, 1: female, 2: undefined]
        total_consumption: 230.4
      }
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.echartsFuns();
    });
  },
  methods: {
    echartsRequestData() {
      // 生成 or 请求 echart 实例需要的数据
      // datetime: X 轴
      // seeriesData {
      // 	name: (游戏名称)
      // 	type: (图表类型)
      // 	stack: (这个找不到哪里用到)
      // 	data: (曲线点，对应 X 轴日期)
      //}
      let datetimes = [
        "2018/01/10",
        "2018/01/11",
        "2018/01/12",
        "2018/01/13",
        "2018/01/14",
        "2018/01/15",
        "2018/01/16",
        "2018/01/17",
        "2018/01/18"
      ];
      let Games = ["海盗来了"];
      let seriesData = [];
      Games.map(value => {
        let GameData = {
          name: value,
          type: "line",
          stack: "金额",
          data: []
        };
        for (var i = 0; i < datetimes.length; i++) {
          GameData.data.push(Math.round(Math.random() * 100));
        }
        seriesData.push(GameData);
      });
      return { datetimes, Games, seriesData };
    },

    // echart 实例
    echartsFuns() {
      let RequsetData = this.echartsRequestData();
      let myChart = echarts.init(document.getElementById("echarts"));
      let echarts_option = {
        title: {
          text: "腻歪Game plug 每天收益"
        },
        tooltip: {
          trigger: "axis"
        },
        legend: {
          data: RequsetData.Games
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: RequsetData.datetimes
        },
        yAxis: {
          type: "value"
        },
        series: RequsetData.seriesData
      };
      myChart.setOption(echarts_option);
    }
  }
};
</script>

<style lang="scss" scoped>
.UserInfo {
  .UserHeaderImg {
    img {
      border-radius: 5px;
    }
  }
  .total {
    margin: 15px 0px;

    span {
      color: tomato;
    }
  }
}
.recommend {
  padding: 15px 0px;
}
</style>
