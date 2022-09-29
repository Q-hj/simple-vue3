<!--
 * @Date: 2022-09-19 17:00:38
 * @LastEditors: Mr.qin
 * @LastEditTime: 2022-09-29 11:46:05
 * @Description: 
-->
<script setup>
	import myMap from './components/myMap.vue';
	import locationSvg from './assets/svg/location.vue';
	import { ref, watch } from 'vue';
	const mapEl = ref(null);

	const current = ref({});

	let venueList = [
		{
			name: '杭州纪念馆',
			longitude: 120.1959,
			latitude: 30.261095,
			location: '杭州市西湖区宝石一路同人商务楼西南门西南侧约50米',
		},
	];
	venueList = venueList.concat(
		venueList.concat(
			venueList.concat(
				venueList.concat(venueList.concat(venueList.concat(venueList)))
			)
		)
	);
	const getVenueList = () => {};

	watch(current, () => {});
</script>

<template>
	<div class="container">
		<section class="left">
			<myMap ref="mapEl" :makers="venueList" :active="current"></myMap>
		</section>
		<section class="right">
			<header lg="bg-current" class="h-50px">
				<p class="text-lg font-bold text-yellow-600">杭州市</p>
			</header>
			<main class="border-2 border-yellow-500/50">
				<li
					class="h-1/5 between-center px-30px box-border"
					v-for="(item, index) in venueList"
					:key="index"
				>
					<aside class="between-center">
						<div
							class="rounded-1/2 w-45px h-45px border border-orange-300 p-8px flex-center"
						>
							<locationSvg class="fill-yellow-400"></locationSvg>
						</div>
						<article class="col-between ml-10px h-full">
							<b>{{ item.name }}</b>
							<span class="text-sm text-gray-600">{{ item.location }}</span>
						</article>
					</aside>
					<button class="btn" :class="index == 1 ? 'active' : ''">查看</button>
				</li>
			</main>
		</section>
	</div>
</template>

<style scoped>
	.btn {
		@apply btn font-bold px-7 py-3px transition duration-200  text-red-700 rounded-none  border border-red-700 hover:text-yellow-300 hover:bg-red-700;
	}
	@variants hover {
	}
</style>
<style scoped lang="less">
	@li-py: 12px;
	.container {
		width: 1800px;
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
			&.right {
				main {
					height: calc(100% - 50px);
					overflow: scroll;
					&::-webkit-scrollbar {
						display: none;
					}
					li {
						padding-top: @li-py;
						padding-bottom: @li-py;
						aside {
							height: calc(100% - (@li-py * 2));
							article {
							}
						}
					}
				}
			}
		}
	}
</style>
