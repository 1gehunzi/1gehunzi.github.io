import{m as a,S as t,aI as n,r as e,o as s,q as o,z as l,a as i,t as c,f as r,i as u}from"./common.10acb102.js";const d={class:"f-mb"},m={class:"f-mb"},f=a({__name:"index",setup(a){const f=window.mapWork,w=t({allLength:0,nowView:0});n((()=>{f.eventTarget.on("changeCameraHistory",(function(a){const t=a.data;w.allLength=t.count,w.nowView=t.index+1}))}));const g=()=>{f.lastView()},p=()=>{f.nextView()},_=()=>{f.lastOneView()};return(a,t)=>{const n=e("mars-button"),f=e("a-space"),V=e("mars-dialog");return s(),o(V,{visible:!0,right:"10",top:"10"},{default:l((()=>[i("p",d,"当前共有"+c(w.allLength)+"条视角记录，当前正在第"+c(w.nowView)+"条视角",1),i("div",m,[r(n,{onClick:_},{default:l((()=>[u("回到当前（最后一条）")])),_:1})]),i("div",null,[r(f,null,{default:l((()=>[r(n,{onClick:g},{default:l((()=>[u("上一个视图")])),_:1}),r(n,{onClick:p},{default:l((()=>[u("下一个视图")])),_:1})])),_:1})])])),_:1})}}});export{f as default};
