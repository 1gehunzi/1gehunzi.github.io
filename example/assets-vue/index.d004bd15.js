import{L as e}from"./location-to.54aa9f87.js";import{m as a,u as l,r as u,o,c as t,f as n,z as s,a as c,i,F as r}from"./common.10acb102.js";const d={class:"f-mb"},f={class:"f-mb"},m=a({__name:"index",setup(a){const m=window.mapWork,_=l(!1),k=()=>{m.measureLength()},h=()=>{m.measureArea()},C=()=>{m.measureHeight()},g=()=>{m.measurePoint()},p=()=>{m.measureSurfaceLength()},v=()=>{m.measureSurfaceeArea()},b=()=>{m.measureTriangleHeight()},A=()=>{m.measureAngle()},x=()=>{m.onlyPickModelPosition(_.value)},L=()=>{m.removeAll()};return(a,l)=>{const m=u("mars-button"),P=u("a-checkbox"),j=u("a-space"),w=u("mars-dialog");return o(),t(r,null,[n(w,{visible:!0,right:"10",top:"10"},{default:s((()=>[c("div",d,[n(j,null,{default:s((()=>[n(m,{onClick:L},{default:s((()=>[i("清除")])),_:1}),n(P,{onChange:x,checked:_.value,"onUpdate:checked":l[0]||(l[0]=e=>_.value=e)},{default:s((()=>[i("仅测量模型(不拾取地形)")])),_:1},8,["checked"])])),_:1})]),c("div",f,[n(j,null,{default:s((()=>[n(m,{onClick:k},{default:s((()=>[i("空间距离")])),_:1}),n(m,{onClick:h},{default:s((()=>[i("水平面积")])),_:1}),n(m,{onClick:C},{default:s((()=>[i("高度差")])),_:1}),n(m,{onClick:g},{default:s((()=>[i("坐标测量")])),_:1})])),_:1})]),c("div",null,[n(j,null,{default:s((()=>[n(m,{onClick:p},{default:s((()=>[i("贴地距离")])),_:1}),n(m,{onClick:v},{default:s((()=>[i("贴地面积")])),_:1}),n(m,{onClick:b},{default:s((()=>[i("三角测量")])),_:1}),n(m,{onClick:A},{default:s((()=>[i("方位角")])),_:1})])),_:1})])])),_:1}),n(e)],64)}}});export{m as default};
