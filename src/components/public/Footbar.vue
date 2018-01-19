<template>
	<div class="footbar">
		<Row :gutter="30">
			<Col :span="8">
				<h3 class="title">反馈建议</h3>
				<Form :model="feelback" :label-width="60">
					<FormItem label="邮箱">
						<Input type="email" v-model="feelback.mail" placeholder="example@qq.com"></Input>
					</FormItem>
					<FormItem label="内容">
						<Input type="textarea" v-model="feelback.content" placeholder="请输入建议" :rows="3"></Input>
					</FormItem>
					<FormItem>
						<Button type="primary">提交</Button>
					</FormItem>
				</Form>
			</Col>
			<Col :span="8" class="about">
				<h3 class="title">联系我们</h3>
				<div class="content">
					<Row v-for="item in about" :key="item.email">
						<Col :span="8">{{ item.name }}</Col>
						<Col :span="16">{{ item.email }}</Col>
					</Row>
				</div>
			</Col>
			<Col :span="8" class="sponsor">
				<h3 class="title">赞助 (使用微信扫一扫进行赞助)</h3>
				<div class="content" align="center">
					<Row :gutter="15">
						<Col :span="12">
							<img src="https://login.weixin.qq.com/qrcode/4bj3upzHvg==" width="70%" alt="">
							<p>{{ about[0].name }}</p>
						</Col>
						<Col :span="12">
							<img src="https://login.weixin.qq.com/qrcode/4bj3upzHvg==" width="70%" alt="">
							<p>{{ about[1].name }}</p>
						</Col>
					</Row>
				</div>
			</Col>
		</Row>
	</div>
</template>

<script>
	export default {
		name: 'footbar',
		data () {
			return {
				feelback: {
					email: '',
					content: ''
				},
				about: [
					{
						email: '849989428@qq.com',
						name: 'Maker·J'
					},
					{
						email: '485890556@qq.com',
						name: 'Maker·K'
					}
				]
			}
		}
	}
</script>

<style lang="scss" scoped>
	.footbar {
		margin-top: 15px;
		padding: 15px;
		background-color: white;

		.title {
			margin-bottom: 12px;
		}
		.about {
			.content {
				.ivu-row {
					padding: 6px 0px;
				}
			}
		}
	}
</style>