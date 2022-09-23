<!--
 * @Date: 2022-09-19 17:00:38
 * @LastEditors: Mr.qin
 * @LastEditTime: 2022-09-23 11:21:10
 * @Description: 
-->
<script setup>
	import myMap from './components/myMap.vue';
	const venueList = [
		{
			name: '杭州纪念馆',
			longitude: 120.1959,
			latitude: 30.261095,
			location: '杭州市西湖区宝石一路同人商务楼西南门西南侧约50米',
		},
	];
	const getVenueList = () => {};
</script>

<template>
	<div class="container">
		<section class="left">
			<myMap></myMap>
		</section>
		<section class="right">
			<header><p>杭州市</p></header>
			<main>
				<li v-for="(item, index) in venueList" :key="index">
					<article>
						<b>{{ item.name }}</b>
						<span>{{ item.location }}</span>
					</article>
					<button :class="index == 1 ? 'active' : ''">查看</button>
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
		grid-template-columns: repeat(2, 1fr);
		// grid-template-rows: repeat(2, 1fr);
		gap: 50px;
		section {
			&.left {
				background-color: rgb(221, 55, 55);
				border-radius: 10px;
			}
		}
	}
</style>
