import{d as a,aH as t,o as l,Y as n,b2 as s,_ as e,a5 as o,a4 as u}from"./common.5a7f0626.js";const r={class:"f-mb"},c=e("span",null,"漫游控制:",-1),d=e("span",null,"室内视角:",-1),i=a({__name:"index",setup(a){const i=window.mapWork,f=()=>{i.startFly()},_=()=>{i.stopFly()},m=()=>{i.centerAtDX1()},p=()=>{i.centerAtDX2()},k=()=>{i.centerAtDX3()};return(a,i)=>{const C=t("mars-button"),b=t("a-space"),A=t("mars-dialog");return l(),n(A,{visible:!0,right:"10",top:"10"},{default:s((()=>[e("div",r,[o(b,null,{default:s((()=>[c,o(C,{onClick:f},{default:s((()=>[u("开始漫游")])),_:1}),o(C,{onClick:_},{default:s((()=>[u("停止漫游")])),_:1})])),_:1})]),o(b,null,{default:s((()=>[d,o(C,{onClick:m},{default:s((()=>[u("教室")])),_:1}),o(C,{onClick:p},{default:s((()=>[u("走廊")])),_:1}),o(C,{onClick:k},{default:s((()=>[u("楼梯间")])),_:1})])),_:1})])),_:1})}}});export{i as default};