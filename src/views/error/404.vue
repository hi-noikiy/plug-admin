<template>
	<div class="error4">
		<navbar></navbar>
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
	import Navbar from '@/components/public/Navbar'
	export default {
		name: 'error4',
		components: { Navbar },
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
		background-color: white;
		padding: 15px;
		font-size: 16px;
		text-align: center;

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