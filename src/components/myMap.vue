<!--
 * @Date: 2022-10-25 10:27:38
 * @LastEditors: Mr.qin
 * @LastEditTime: 2022-11-06 22:49:36
 * @Description: 
-->
<script setup>
import { ref, watch, onMounted } from "vue";
import { get, post } from "../apis/http";
let map;

onMounted(async () => {
  initMap();
});

const makerWindow = new T.InfoWindow();

const setMakerWindow = ({ name, repositoryNum }, target) => {
  makerWindow.setContent(
    "<div> <div class='p-t-5  makerWindow'>" +
      `<p class='fz-16 c-white tac'>${name}</p>` +
      `<p class='fz-16 c-white tac'>资源数量：${repositoryNum || 0}</p>` +
      "" +
      "</div></div>"
  );
  target.openInfoWindow(makerWindow);
};

//
const imageURL =
  "http://t0.tianditu.gov.cn/img_w/wmts?" +
  "SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=img&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles" +
  "&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}&tk=cbf747f3c05f4a8ce26160b19ffe581a";

// 实例化地图
const initMap = () => {
  if (!T) return setTimeout(() => initMap(), 200);
  map = new T.Map("map-canvas", { minZoom: 5, maxZoom: 18 });
  map.centerAndZoom(new T.LngLat(120.170667, 30.274543), 8); // 设置中心点和比例
  // map.addLayer(new T.TileLayer(imageURL, { minZoom: 1, maxZoom: 18 }));
};
//向地图上添加标注
const addMaker = (list) => {
  // console.log(list);

  list.forEach(({ longitude, latitude, legendUrl, ...other }) => {
    const maker = new T.Marker(
      new T.LngLat(+longitude, +latitude),
      getMarkerOptions(legendUrl)
    );
    maker.on("mouseover", ({ lnglat, target, originalEvent }) => {
      setMakerWindow(other, target);
    });
    map.addOverLay(maker);
  });
};

const defultIcon = new URL(`/src/assets/icon/location.png`, import.meta.url)
  .href;

const getMarkerOptions = (iconUrl = defultIcon) =>
  iconUrl
    ? {
        icon: new T.Icon({ iconUrl, iconSize: new T.Point(40, 40) }),
      }
    : null;
defineExpose({
  addMaker,
});
</script>

<template>
  <div style="width: 100%; height: 100%">
    <div
      class="map-canvas"
      id="map-canvas"
      style="width: 100%; height: 100%"
    ></div>
  </div>
</template>

<style lang="less" scoped></style>
