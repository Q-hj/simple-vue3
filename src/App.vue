<!--
 * @Date: 2022-09-19 17:00:38
 * @LastEditors: Mr.qin
 * @LastEditTime: 2022-09-21 16:49:04
 * @Description: 
-->
<script setup>
	import myMap from './components/myMap.vue';
</script>

<template>
	<div class="container">
		<section class="left">
			<myMap></myMap>
		</section>
		<section class="right">
			<header><p>杭州市</p></header>
			<main>
				<li v-for="item in 4" :key="item">
					<article>
						<b>展馆名称</b>
						<span>杭州市西湖区宝石一路同人商务楼西南门西南侧约50米</span>
					</article>
					<button :class="item == 1 ? 'active' : ''">查看</button>
				</li>
			</main>
		</section>
	</div>
</template>

<style scoped lang="less">
	.container {
		width: 1200px;
		height: 600px;
		border-radius: 30px;
		padding: 30px;
		background-color: #fff;
		display: grid;
		// grid-template-rows: repeat(2, 1fr);
		grid-template-columns: repeat(2, 1fr);
		gap: 50px;
		section {
			&.left {
				background-color: rgb(221, 55, 55);
				border-radius: 10px;
			}
		}
	}
</style>
