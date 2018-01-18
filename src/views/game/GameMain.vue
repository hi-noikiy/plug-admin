<template>
	<div class="game-main">
		<pirate-list></pirate-list>
	</div>
</template>

<script>
	import PirateList from '@/components/GameServiceList/Piratelist'
	export default {
		name: 'GameMain',
		data () {
			return {
				game_id: null
			}
		},
		components: { PirateList },
		mounted () {
			this.$nextTick(() => {
				this.init()
			})
		},
		methods: {
			init () {
				this.game_id = this.$route.params.id
			}
		}
	}
</script>

<style lang="scss" scoped>
	
</style>