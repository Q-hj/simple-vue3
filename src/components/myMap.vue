<!--
 * @Date: 2022-09-19 17:00:38
 * @LastEditors: Mr.qin
 * @LastEditTime: 2022-09-21 17:11:28
 * @Description: 
-->
<script setup>
	import { ref } from 'vue';

	defineProps({
		msg: String,
	});

	const myLatlng = new qq.maps.LatLng(
		30.299453, //经度
		120.132996 //纬度
	);
	const myOptions = {
		zoom: 16,
		center: myLatlng,
	};
	//获取dom元素添加地图信息
	const map = new qq.maps.Map('#map', myOptions);
	//给定位的位置添加图片标注
	const marker = new qq.maps.Marker({
		position: myLatlng,
		map,
		draggable: true, //允许鼠标拖动
	});
</script>

<template>
	<div id="map"></div>
</template>

<style scoped lang="less">
	#map {
		width: 100%;
		height: 100%;
	}
</style>
