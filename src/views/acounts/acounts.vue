<template>
  <div class="acounts">
      <div class="operation">
          <Button type="primary" icon="plus" @click="showNewAcountModal()">添加小号</Button>
      </div>
      <div class="content">
          <Table :columns="columns" :data="acounts"></Table>
          <Page :total="100" class="ipage"></Page>
      </div>

      <Modal v-model="showModal" width="320" :closable="false">
          <Form ref="acountsValidate" :model="acountsForm" :rules="acountsRules">
              <FormItem prop="acount" label="Acount">
                  <Input v-model="acountsForm.acount"></Input>
              </FormItem>
              <FormItem prop="passwd" label="Password">
                  <Input v-model="acountsForm.passwd"></Input>
              </FormItem>
              <FormItem prop="userid" label="Userid">
                  <Input v-model="acountsForm.userid"></Input>
              </FormItem>
          </Form>
          <div slot="footer">
            <Button type="primary" @click="saveNewAcount('acountsValidate')">保存</Button>
            <Button @click="resetFields('acountsValidate')">取消</Button>
          </div>
      </Modal>
  </div>
</template>

<script>
import AcountsExtends from "@/components/acounts/AcountsDetail";

export default {
  name: "Acounts",
  data() {
    return {
      columns: [
        {
          type: "selection",
          width: 60,
          align: "center"
        },
        {
          type: "expand",
          width: 50,
          render: (h, params) => {
            return h(AcountsExtends, {
              props: {
                row: params.row
              }
            });
          }
        },
        {
          title: "Acount",
          key: "acount",
          width: 180
        },
        {
          title: "Password",
          key: "passwd"
        },
        {
          title: "State",
          key: "state",
          width: 120,
          render: (h, params) => {
            return h(
              "Tag",
              {
                props: {
                  color: params.row.state ? "green" : "red"
                }
              },
              params.row.state ? "使用中" : "已封号"
            );
          }
        },
        {
          title: "Opera",
          width: 160,
          render: (h, params) => {
            let _this = this;
            return h("ButtonGroup", [
              h("Button", {
                props: {
                  type: "primary",
                  icon: "edit",
                  size: "small"
                },
                on: {
                  click () {
                    _this.showNewAcountModal(params.row)
                  }
                }
              }),
              h("Button", {
                props: {
                  type: "error",
                  icon: "trash-a",
                  size: "small"
                }
              })
            ]);
          }
        }
      ],
      /**
       * 用户数据，字段非固定，但如果用自己数据表的字段，当前文件很多地方需要同步更改
       * # 没什么建议
       * @type {Array}
       */
      acounts: [
        {
          acount: "admin",
          passwd: "aeif03fkoe01294",
          userid: '0938af9f9e82l33',
          state: true
        },
        {
          acount: "admin",
          passwd: "aeif03fkoe01294",
          userid: '109i39jr39a9duf',
          state: false
        }
      ],
      // 是否显示弹框
      showModal: false,
      /**
       * 新增/修改表单字段
       * @type {Object}
       */
      acountsForm: {
        acount: "",
        passwd: "",
        userid: ""
      },
      /**
       * 新增/修改弹框表单验证规则
       * @type {Object}
       */
      acountsRules: {
        acount: [{ required: true, message: "不可为空", trigger: "blur" }],
        passwd: [{ required: true, message: "不可为空", trigger: "blur" }],
        userid: [{ required: true, message: "不可为空", trigger: "blur" }]
      }
    };
  },
  methods: {
    /**
     * 保存新/修改账号信息
     * @param {String} [acountValidate] [验证对象名]
     * @return {Object} [修改或已新增的用户对象信息]
     * @return {Boolean} [关闭相应弹框]
     */
    saveNewAcount(name) {
      this.$refs[name].validate(valid => {
        if (valid) {
          this.$Message.success("Add successfully!");
        } else {
          this.$Message.error("Add failed!");
        }
      });
      this.showModal = false;
    },

    /**
     * 重置验证规则并关闭弹框
     * @param {String} [acountValidate] [验证对象名]
     * @return {Boolean} [关闭对应弹框]
     */
    resetFields(name) {
      this.$refs[name].resetFields();
      this.showModal = false;
    },

    /**
     * 新建或修改账号弹框
     * @param {Object} [acount info] [用户信息对象，非新建按钮点击时不用传]
     * @return {Object} [返回需要修改的用户对象或新建的空对象]
     * @return {Boolean} [true: 显示相应弹框]
     */
    showNewAcountModal (item) {
      if (item) {
        this.acountsForm = {
          acount: item.acount,
          passwd: item.passwd,
          userid: item.userid
        }
      } else {
        this.acountsForm = {
          acount: '',
          passwd: '',
          userid: ''
        }
      }
      this.showModal = true;
    }
  }
};
</script>

<style lang="scss" scoped>
.operation {
  margin-bottom: 15px;
  padding-bottom: 15px;
  border-bottom: 1px solid #eee;
}

.ipage {
  margin-top: 15px;
}
</style>
