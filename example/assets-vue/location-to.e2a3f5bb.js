import{_ as a}from"./read.03cd8dda.js";import{d as e,aH as t,o as r,Y as o,b2 as n,a5 as i,a4 as l}from"./common.5a7f0626.js";var s=a(e({setup(){const a=window.mapWork,e=a.mars3d;a.Cesium;let t;return{onClickCenterAtTerrain:()=>{a.map.setCameraView({lat:30.859414,lng:116.28709,alt:8617,heading:18,pitch:-28})},onClickCenterAtModel:()=>{const r=a.map;t||(t=new e.layer.TilesetLayer({url:"//data.mars3d.cn/3dtiles/qx-simiao/tileset.json",position:{alt:80.6},maximumScreenSpaceError:1,maximumMemoryUsage:1024,flyTo:!0}),r.addLayer(t)),r.setCameraView({lat:33.587396,lng:119.03181,alt:588,heading:0,pitch:-45})}}}}),[["render",function(a,e,s,m,d,c){const C=t("mars-button"),u=t("a-space"),p=t("mars-dialog");return r(),o(p,{visible:!0,right:"10",bottom:"40"},{default:n((()=>[i(u,null,{default:n((()=>[i(C,{onClick:a.onClickCenterAtTerrain},{default:n((()=>[l("定位至山区")])),_:1},8,["onClick"]),i(C,{onClick:a.onClickCenterAtModel},{default:n((()=>[l("定位至模型")])),_:1},8,["onClick"])])),_:1})])),_:1})}],["__scopeId","data-v-54c91666"]]);export{s as L};