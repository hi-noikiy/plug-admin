<template>
	<div class="PirateList">

    <div class="operation area">
      <Button type="primary" @click="productAlertModal('add')">添加商品</Button>
    </div>

    <Modal v-model="newProduct.show" width="430" class="newProductModal" @on-ok="handleNewProduct(newProduct.option._id)">
      <Form :model="newProduct.option" :label-width="80">
        <FormItem label="商品名称">
          <Input v-model="newProduct.option.product_name"></Input>
        </FormItem>
        <FormItem label="商品图片">
          <Upload action="$store.state.uploadPath">
            <Button type="ghost" icon="ios-cloud-upload-outline">Upload pic file</Button>
          </Upload>
          <div class="preview">
            <img :src="newProduct.option.pic" alt="" width="100%">
          </div>
        </FormItem>
        <FormItem label="单价">
          <InputNumber v-model="newProduct.option.price" :min="1"></InputNumber>
        </FormItem>
        <FormItem label="描述">
          <Input v-model="newProduct.option.desc" type="textarea" :rows="4"></Input>
        </FormItem>
        <FormItem label="活动状态">
          <i-switch v-model="newProduct.option.switch"></i-switch>
        </FormItem>
      </Form>
    </Modal>

		<Row :gutter="15">

			<Col :span="6" class="product" v-for="(item, index) in list" :key="item._id + index">
        <div class="card">
          <Row>
            <Col :span="8">
              <img :src="item.pic" alt="" width="100%">
            </Col>
            <Col :span="16">
              <h3 class="product_name">{{ item.product_name }}</h3>
              <p class="desc">{{ item.desc }}</p>
              <p class="price">单价：¥{{ item.price }}</p>
            </Col>
          </Row>
          <div class="opera">

            <p class="btn-group" v-if="$store.state.power == 1">
              <Button type="primary" size="small">详情</Button>
              <Button type="warning" size="small">购买</Button>
            </p>

            <p class="btn-group" v-else-if="$store.state.power == 0">
              <Button type="success" size="small" @click="productAlertModal('edit', index)">编辑</Button>
              <i-switch v-model="item.switch">
                <span slot="open">开</span>
                <span slot="close">关</span>
              </i-switch>
            </p>

          </div>
        </div>
			</Col>

		</Row>
	</div>
</template>

<script>
export default {
  name: "PirateList",
  data() {
    return {
      list: [
        {
          _id: Math.random(),
          product_name: "拼图碎片",
          desc: "购买服务后将提供当前拼图最稀缺的碎片*1",
          price: 2,
          pic:
            "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9InllcyI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMTcxIiBoZWlnaHQ9IjE4MCIgdmlld0JveD0iMCAwIDE3MSAxODAiIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiPjwhLS0KU291cmNlIFVSTDogaG9sZGVyLmpzLzEwMCV4MTgwCkNyZWF0ZWQgd2l0aCBIb2xkZXIuanMgMi42LjAuCkxlYXJuIG1vcmUgYXQgaHR0cDovL2hvbGRlcmpzLmNvbQooYykgMjAxMi0yMDE1IEl2YW4gTWFsb3BpbnNreSAtIGh0dHA6Ly9pbXNreS5jbwotLT48ZGVmcz48c3R5bGUgdHlwZT0idGV4dC9jc3MiPjwhW0NEQVRBWyNob2xkZXJfMTYxMGM3OTcwZTMgdGV4dCB7IGZpbGw6I0FBQUFBQTtmb250LXdlaWdodDpib2xkO2ZvbnQtZmFtaWx5OkFyaWFsLCBIZWx2ZXRpY2EsIE9wZW4gU2Fucywgc2Fucy1zZXJpZiwgbW9ub3NwYWNlO2ZvbnQtc2l6ZToxMHB0IH0gXV0+PC9zdHlsZT48L2RlZnM+PGcgaWQ9ImhvbGRlcl8xNjEwYzc5NzBlMyI+PHJlY3Qgd2lkdGg9IjE3MSIgaGVpZ2h0PSIxODAiIGZpbGw9IiNFRUVFRUUiLz48Zz48dGV4dCB4PSI1OS41NTQ2ODc1IiB5PSI5NC41Ij4xNzF4MTgwPC90ZXh0PjwvZz48L2c+PC9zdmc+",
          switch: true
        },
        {
          _id: Math.random(),
          product_name: "刀枪帽",
          desc: "购买服务后将提供当前拼图最稀缺的碎片*1",
          price: 2,
          pic:
            "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9InllcyI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMTcxIiBoZWlnaHQ9IjE4MCIgdmlld0JveD0iMCAwIDE3MSAxODAiIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiPjwhLS0KU291cmNlIFVSTDogaG9sZGVyLmpzLzEwMCV4MTgwCkNyZWF0ZWQgd2l0aCBIb2xkZXIuanMgMi42LjAuCkxlYXJuIG1vcmUgYXQgaHR0cDovL2hvbGRlcmpzLmNvbQooYykgMjAxMi0yMDE1IEl2YW4gTWFsb3BpbnNreSAtIGh0dHA6Ly9pbXNreS5jbwotLT48ZGVmcz48c3R5bGUgdHlwZT0idGV4dC9jc3MiPjwhW0NEQVRBWyNob2xkZXJfMTYxMGM3OTcwZTMgdGV4dCB7IGZpbGw6I0FBQUFBQTtmb250LXdlaWdodDpib2xkO2ZvbnQtZmFtaWx5OkFyaWFsLCBIZWx2ZXRpY2EsIE9wZW4gU2Fucywgc2Fucy1zZXJpZiwgbW9ub3NwYWNlO2ZvbnQtc2l6ZToxMHB0IH0gXV0+PC9zdHlsZT48L2RlZnM+PGcgaWQ9ImhvbGRlcl8xNjEwYzc5NzBlMyI+PHJlY3Qgd2lkdGg9IjE3MSIgaGVpZ2h0PSIxODAiIGZpbGw9IiNFRUVFRUUiLz48Zz48dGV4dCB4PSI1OS41NTQ2ODc1IiB5PSI5NC41Ij4xNzF4MTgwPC90ZXh0PjwvZz48L2c+PC9zdmc+",
          switch: true
        },
        {
          _id: Math.random(),
          product_name: "拼图碎片",
          desc: "购买服务后将提供当前拼图最稀缺的碎片*1",
          price: 2,
          pic:
            "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9InllcyI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMTcxIiBoZWlnaHQ9IjE4MCIgdmlld0JveD0iMCAwIDE3MSAxODAiIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiPjwhLS0KU291cmNlIFVSTDogaG9sZGVyLmpzLzEwMCV4MTgwCkNyZWF0ZWQgd2l0aCBIb2xkZXIuanMgMi42LjAuCkxlYXJuIG1vcmUgYXQgaHR0cDovL2hvbGRlcmpzLmNvbQooYykgMjAxMi0yMDE1IEl2YW4gTWFsb3BpbnNreSAtIGh0dHA6Ly9pbXNreS5jbwotLT48ZGVmcz48c3R5bGUgdHlwZT0idGV4dC9jc3MiPjwhW0NEQVRBWyNob2xkZXJfMTYxMGM3OTcwZTMgdGV4dCB7IGZpbGw6I0FBQUFBQTtmb250LXdlaWdodDpib2xkO2ZvbnQtZmFtaWx5OkFyaWFsLCBIZWx2ZXRpY2EsIE9wZW4gU2Fucywgc2Fucy1zZXJpZiwgbW9ub3NwYWNlO2ZvbnQtc2l6ZToxMHB0IH0gXV0+PC9zdHlsZT48L2RlZnM+PGcgaWQ9ImhvbGRlcl8xNjEwYzc5NzBlMyI+PHJlY3Qgd2lkdGg9IjE3MSIgaGVpZ2h0PSIxODAiIGZpbGw9IiNFRUVFRUUiLz48Zz48dGV4dCB4PSI1OS41NTQ2ODc1IiB5PSI5NC41Ij4xNzF4MTgwPC90ZXh0PjwvZz48L2c+PC9zdmc+",
          switch: true
        },
        {
          _id: Math.random(),
          product_name: "拼图碎片",
          desc: "购买服务后将提供当前拼图最稀缺的碎片*1",
          price: 2,
          pic:
            "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9InllcyI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMTcxIiBoZWlnaHQ9IjE4MCIgdmlld0JveD0iMCAwIDE3MSAxODAiIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiPjwhLS0KU291cmNlIFVSTDogaG9sZGVyLmpzLzEwMCV4MTgwCkNyZWF0ZWQgd2l0aCBIb2xkZXIuanMgMi42LjAuCkxlYXJuIG1vcmUgYXQgaHR0cDovL2hvbGRlcmpzLmNvbQooYykgMjAxMi0yMDE1IEl2YW4gTWFsb3BpbnNreSAtIGh0dHA6Ly9pbXNreS5jbwotLT48ZGVmcz48c3R5bGUgdHlwZT0idGV4dC9jc3MiPjwhW0NEQVRBWyNob2xkZXJfMTYxMGM3OTcwZTMgdGV4dCB7IGZpbGw6I0FBQUFBQTtmb250LXdlaWdodDpib2xkO2ZvbnQtZmFtaWx5OkFyaWFsLCBIZWx2ZXRpY2EsIE9wZW4gU2Fucywgc2Fucy1zZXJpZiwgbW9ub3NwYWNlO2ZvbnQtc2l6ZToxMHB0IH0gXV0+PC9zdHlsZT48L2RlZnM+PGcgaWQ9ImhvbGRlcl8xNjEwYzc5NzBlMyI+PHJlY3Qgd2lkdGg9IjE3MSIgaGVpZ2h0PSIxODAiIGZpbGw9IiNFRUVFRUUiLz48Zz48dGV4dCB4PSI1OS41NTQ2ODc1IiB5PSI5NC41Ij4xNzF4MTgwPC90ZXh0PjwvZz48L2c+PC9zdmc+",
          switch: true
        },
        {
          _id: Math.random(),
          product_name: "拼图碎片",
          desc: "购买服务后将提供当前拼图最稀缺的碎片*1",
          price: 2,
          pic:
            "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9InllcyI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMTcxIiBoZWlnaHQ9IjE4MCIgdmlld0JveD0iMCAwIDE3MSAxODAiIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiPjwhLS0KU291cmNlIFVSTDogaG9sZGVyLmpzLzEwMCV4MTgwCkNyZWF0ZWQgd2l0aCBIb2xkZXIuanMgMi42LjAuCkxlYXJuIG1vcmUgYXQgaHR0cDovL2hvbGRlcmpzLmNvbQooYykgMjAxMi0yMDE1IEl2YW4gTWFsb3BpbnNreSAtIGh0dHA6Ly9pbXNreS5jbwotLT48ZGVmcz48c3R5bGUgdHlwZT0idGV4dC9jc3MiPjwhW0NEQVRBWyNob2xkZXJfMTYxMGM3OTcwZTMgdGV4dCB7IGZpbGw6I0FBQUFBQTtmb250LXdlaWdodDpib2xkO2ZvbnQtZmFtaWx5OkFyaWFsLCBIZWx2ZXRpY2EsIE9wZW4gU2Fucywgc2Fucy1zZXJpZiwgbW9ub3NwYWNlO2ZvbnQtc2l6ZToxMHB0IH0gXV0+PC9zdHlsZT48L2RlZnM+PGcgaWQ9ImhvbGRlcl8xNjEwYzc5NzBlMyI+PHJlY3Qgd2lkdGg9IjE3MSIgaGVpZ2h0PSIxODAiIGZpbGw9IiNFRUVFRUUiLz48Zz48dGV4dCB4PSI1OS41NTQ2ODc1IiB5PSI5NC41Ij4xNzF4MTgwPC90ZXh0PjwvZz48L2c+PC9zdmc+",
          switch: true
        }
      ],
      newProduct: {
        show: false,
        option: {
          product_name: "",
          price: null,
          desc: "",
          pic: "",
          switch: false
        }
      }
    };
  },
  methods: {
    /**
     * 商品添加 / 修改
     * @param {String} [type] // 模态框启用类型
     * @param {Int} [index] // 编辑模式下采用到，下标
     * @return {modal}
     */
    productAlertModal(type, index) {
      const _this = this;
      if ("edit" === type) {
        _this.newProduct.option = this.list[index];
      } else if ("add" === type) {
        _this.newProduct.option = {
          product_name: "",
          price: null,
          desc: "",
          pic: "",
          switch: false
        };
      }
      _this.newProduct.show = true;
    },

    /**
     * 模态框确认事件，修改指定商品
     * @param {String} [productId]
     * @return {Msg} 数据修改状态
     */
    handleNewProduct(id) {
      console.log(id);
      this.$Message.success("商品数据成功更新！");
    }
  }
};
</script>

<style lang="scss" scoped>
.operation {
  padding-bottom: 15px;
  margin-bottom: 15px;
    border-bottom: 1px solid #e6e6e6;
}
.newProductModal {
  .preview {
    width: 120px;
  }
}
.product {
  &:hover {
    .card {
      box-shadow: 0px 0px 2px 1px #eee;
    }
  }
  .card {
    padding: 12px;
    border: 1px solid #e5e5e5;
    border-radius: 5px;
    margin-bottom: 15px;

    .price {
      color: tomato;
      margin-bottom: 6px;
    }
    .opera {
      border-top: 1px solid #f0f0f0;
      .btn-group {
        margin-top: 8px;
      }
    }
  }
}
</style>
