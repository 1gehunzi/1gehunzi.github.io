import{_ as a,m as s,u as l,r as e,o as n,q as t,z as u,a as o,f as d,i as r,p as i,l as m}from"./common.10acb102.js";const p=a=>(i("data-v-20da5767"),a=a(),m(),a),c={class:"f-mb"},v=p((()=>o("span",{class:"mars-pannel-item-label"},"缓冲半径:",-1))),_=p((()=>o("span",{class:"mars-pannel-item-label"},"绘制:",-1)));var f=a(s({__name:"index",setup(a){const s=window.mapWork,i=l(1),m=()=>{s.drawPoint()},p=()=>{s.drawPolyline()},f=()=>{s.drawPolygon()},b=()=>{s.radiusChange(i.value)};return b(),(a,s)=>{const l=e("mars-input-number"),g=e("a-space"),w=e("mars-button"),C=e("mars-dialog");return n(),t(C,{visible:!0,right:"10",top:"10"},{default:u((()=>[o("div",c,[d(g,null,{default:u((()=>[v,d(l,{class:"radius",onChange:b,value:i.value,"onUpdate:value":s[0]||(s[0]=a=>i.value=a),min:1,step:1,max:999},null,8,["value"]),r("公里 ")])),_:1})]),d(g,null,{default:u((()=>[_,d(w,{onClick:m},{default:u((()=>[r("点")])),_:1}),d(w,{onClick:p},{default:u((()=>[r("线")])),_:1}),d(w,{onClick:f},{default:u((()=>[r("面")])),_:1})])),_:1})])),_:1})}}}),[["__scopeId","data-v-20da5767"]]);export{f as default};
