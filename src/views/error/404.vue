<template>
	<div class="error4">
		<div class="container">
			<h1 class="error-code">404</h1>
			<div class="error-msg">
				Not found path: "{{ $route.path }}"
			</div>
			<div class="operation">
				<Button type="primary" @click="returnPrevPage">RETURN</Button>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'error4',
		methods: {
			returnPrevPage () {
				this.$router.go(-1)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.container {
		margin: 30px auto;
		width: 1137.79px;
		background-color: white;
		padding: 15px;
		border-left: 5px solid tomato;
		font-size: 16px;

		.error-code {
			font-size: 81px;
		}

		.operation {
			margin-top: 15px;
			border-top: 1px solid #eee;
			padding-top: 15px;
		}
	}
</style>