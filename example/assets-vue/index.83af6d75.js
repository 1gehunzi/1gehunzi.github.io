import{_ as a}from"./read.03cd8dda.js";import{d as e,s as l,r as s,aH as n,o as t,Y as m,b2 as p,_ as d,a5 as u,aC as i,aA as o}from"./common.5a7f0626.js";const r=a=>(i("data-v-c5ed0eae"),a=a(),o(),a),c={class:"f-mb"},v=r((()=>d("span",{class:"mars-pannel-item-label"},"速度系数:",-1))),f={class:"f-mb"},b=r((()=>d("span",{class:"mars-pannel-item-label"},"线宽度:",-1))),h={class:"f-mb"},x=r((()=>d("span",{class:"mars-pannel-item-label"},"下降率:",-1))),g={class:"f-mb"},_=r((()=>d("span",{class:"mars-pannel-item-label"},"下降速度:",-1))),C={class:"f-mb"},U=r((()=>d("span",{class:"mars-pannel-item-label"},"粒子总数:",-1))),R={class:"f-mb"},y=r((()=>d("span",{class:"mars-pannel-item-label"},"透明度:",-1))),H={class:"f-mb"},O=r((()=>d("span",{class:"mars-pannel-item-label"},"固定高度:",-1))),W={class:"f-mb"},B=r((()=>d("span",{class:"mars-pannel-item-label"},"线颜色:",-1)));var F=a(e({__name:"index",setup(a){const e=window.mapWork;l({span:8}),l("left");const i=s({particlesNumber:9e3,fixedHeight:0,fadeOpacity:.996,dropRate:.003,dropRateBump:.01,speedFactor:.2,lineWidth:4,color:"#4696db"}),o=()=>{e.onParticleSystemOptionsChange(i)},r=a=>{e.changeColor(i.color)};return(a,e)=>{const l=n("mars-slider"),s=n("a-space"),F=n("mars-color-picker"),N=n("mars-dialog");return t(),m(N,{visible:!0,right:"10",top:"10"},{default:p((()=>[d("div",c,[u(s,null,{default:p((()=>[v,u(l,{value:i.speedFactor,"onUpdate:value":e[0]||(e[0]=a=>i.speedFactor=a),onChange:o,min:.05,max:1,step:.01},null,8,["value","min","step"])])),_:1})]),d("div",f,[u(s,null,{default:p((()=>[b,u(l,{value:i.lineWidth,"onUpdate:value":e[1]||(e[1]=a=>i.lineWidth=a),onChange:o,min:.01,max:16,step:.01},null,8,["value","min","max","step"])])),_:1})]),d("div",h,[u(s,null,{default:p((()=>[x,u(l,{value:i.dropRate,"onUpdate:value":e[2]||(e[2]=a=>i.dropRate=a),onChange:o,min:0,max:.1,step:.001},null,8,["value","min","max","step"])])),_:1})]),d("div",g,[u(s,null,{default:p((()=>[_,u(l,{value:i.dropRateBump,"onUpdate:value":e[3]||(e[3]=a=>i.dropRateBump=a),onChange:o,min:0,max:.2,step:.001},null,8,["value","min","max","step"])])),_:1})]),d("div",C,[u(s,null,{default:p((()=>[U,u(l,{value:i.particlesNumber,"onUpdate:value":e[4]||(e[4]=a=>i.particlesNumber=a),onChange:o,min:1,max:65536,step:1},null,8,["value"])])),_:1})]),d("div",R,[u(s,null,{default:p((()=>[y,u(l,{value:i.fadeOpacity,"onUpdate:value":e[5]||(e[5]=a=>i.fadeOpacity=a),onChange:o,min:.9,max:.999,step:.001},null,8,["value","min","max","step"])])),_:1})]),d("div",H,[u(s,null,{default:p((()=>[O,u(l,{value:i.fixedHeight,"onUpdate:value":e[6]||(e[6]=a=>i.fixedHeight=a),onChange:o,min:1,max:1e4,step:1},null,8,["value"])])),_:1})]),d("div",W,[u(s,null,{default:p((()=>[B,u(F,{value:i.color,"onUpdate:value":e[7]||(e[7]=a=>i.color=a),onChange:r},null,8,["value"])])),_:1})])])),_:1})}}}),[["__scopeId","data-v-c5ed0eae"]]);export{F as default};