<template>
	<view>
		
		<PopUp/>
		<PopUp1/>
		<navigator url="/pages/workerRegist"  class="link">
			<view>没有账号？请注册</view>
			</navigator>
	</view>
</template>

<script>
	import PopUp from './components/popUp.vue'
	import PopUp1 from './components/popUp1.vue'
	
	export default {
		components:{
			PopUp,
			PopUp1,

			
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">

</style>
