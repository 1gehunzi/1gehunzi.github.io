import{d as a,s as e,aH as s,o as l,Y as o,b2 as n,a5 as t,_ as r}from"./common.5a7f0626.js";const u=r("span",null,"滤镜颜色:",-1),i=a({__name:"index",setup(a){const r=window.mapWork,i=e("#4e70a6"),p=a=>{r.setFilterColor(i.value)};return(a,e)=>{const r=s("mars-color-picker"),d=s("a-space"),m=s("mars-dialog");return l(),o(m,{visible:!0,right:"10",top:"10"},{default:n((()=>[t(d,null,{default:n((()=>[u,t(r,{onChange:p,value:i.value,"onUpdate:value":e[0]||(e[0]=a=>i.value=a)},null,8,["value"])])),_:1})])),_:1})}}});export{i as default};