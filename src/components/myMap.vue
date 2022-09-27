<!--
 * @Date: 2022-09-19 17:00:38
 * @LastEditors: Mr.qin
 * @LastEditTime: 2022-09-27 14:34:00
 * @Description: 
-->
<script setup>
	import AMapLoader from '@amap/amap-jsapi-loader';
	import { ref } from 'vue';

	defineProps({
		msg: String,
	});

	let map;

	AMapLoader.load({
		key: '8d1a96b8010d4f16e6a73e964155c116', // 申请好的Web端开发者Key，首次调用 load 时必填
		version: '2.0', // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
		plugins: [], // 需要使用的的插件列表，如比例尺'AMap.Scale'等
	})
		.then((AMap) => {
			initMap();
		})
		.catch((e) => {
			console.log(e);
		});

	function initMap() {
		map = new AMap.Map('map', {
			zoom: 10, //设置地图显示的缩放级别
			center: [120.1959, 30.261095], //设置地图中心点坐标
			mapStyle: '', //显示样式
			layers: [AMap.createDefaultLayer()], //设置图层,地貌贴图 new AMap.TileLayer.Satellite()
			mapStyle: 'amap://styles/12a0c2fca7852d6bd9ac47ecf3f1f51d', //设置地图的显示样式
			viewMode: '2D', //设置地图模式
			// viewMode: '3D', //设置3d地图模式
			// pitch: 20, //俯仰角度，2D地图下无效 。
			// terrain: true, //地图是否展示地形，此属性适用于 3D 地图。(JSAPI v2.1Beta 及以上版本)
		});
	}

	// map.destroy();// 销毁地图，并清空地图容器
</script>

<template>
	<div id="map"></div>
</template>

<style scoped lang="less">
	#map {
		width: 100%;
		height: 100%;
		border-radius: 10px;
	}
</style>
