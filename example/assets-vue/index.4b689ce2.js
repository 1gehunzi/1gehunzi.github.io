import{m as a,r as o,o as l,q as n,z as s,a as t,f as e,i}from"./common.10acb102.js";const u={class:"f-mb"},r=t("span",null,"原始数据:",-1),c=t("span",null,"相关计算:",-1),d=a({__name:"index",setup(a){const d=window.mapWork,f=()=>{d.randomPoints()},m=()=>{d.clearlayer()},_=()=>{d.convexPolygon()},p=()=>{d.voronoiPolygon()},k=()=>{d.tinPolygon()};return(a,d)=>{const g=o("mars-button"),C=o("a-space"),b=o("mars-dialog");return l(),n(b,{visible:!0,right:"10",top:"10"},{default:s((()=>[t("div",u,[e(C,null,{default:s((()=>[r,e(g,{onClick:f},{default:s((()=>[i("随机点")])),_:1}),e(g,{onClick:m},{default:s((()=>[i("清除")])),_:1})])),_:1})]),e(C,null,{default:s((()=>[c,e(g,{onClick:_},{default:s((()=>[i("计算包围面")])),_:1}),e(g,{onClick:p},{default:s((()=>[i("计算泰森多边形")])),_:1}),e(g,{onClick:k},{default:s((()=>[i("计算TIN多边形")])),_:1})])),_:1})])),_:1})}}});export{d as default};
