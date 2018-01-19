<template>
	<div class="login">
		<div class="sign">
			<div class="box">
				<Form ref="loginValidate" :model="loginForm" :rules="ruleForm">
					<FormItem prop="username">
						<Input v-model="loginForm.username" placeholder="用户名"></Input>
					</FormItem>
					<FormItem prop="password">
						<Input v-model="loginForm.password" type="password" placeholder="密码"></Input>
					</FormItem>
					<FormItem>
						<Button type="primary" @click="submitLogin('loginValidate')" long>登录</Button>
					</FormItem>
				</Form>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Login',
		data () {
			return {
				loginForm: {
					username: '',
					password: ''
				},
				ruleForm: {
					username: [
						{ required: true, message: '请输入用户名', trigger: 'blur' }
					],
					password: [
						{ required: true, message: '请输入密码', trigger: 'blur' },
						{ type: 'string', min: 6, message: '密码最少 6 位数', trigger: 'blur' }
					]
				}
			}
		},
		methods: {
			submitLogin (name) {
				this.$refs[name].validate((valid) => {
					if (valid) {
						// 需要进行后台验证
						// this.$http.post('[:path]', [this.loginForm]).then((res) => {
							// callback
							// console.log(res)
						// })
						this.$Message.success('验证成功！登录中...')
						this.$store.commit('loginInfo', this.loginForm) // vue vuex 状态管理，刷新后登录数据将丢失
						setTimeout(() => {
							this.$router.push({ path: '/' })
						}, 500)
					} else {
						this.$Message.error('请按照提示规则填写用户名或密码')
					}
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.sign {
		position: absolute;
		top: 0px;
		left: 0px;
		right: 0px;
		bottom: 0px;
		background-color: rgba(0, 0, 0, .8);

		&::before {
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			content: 'TEST IVIEW ADMIN';
			color: white;
			opacity: .25;
			font-size: 81px;
			font-weight: bold;
		}

		.box {
			width: 320px;
			padding: 15px;
			background-color: rgba(255, 255, 255, .75);
			margin: 60px auto;
			border-radius: 5px;
		}
	}
</style>