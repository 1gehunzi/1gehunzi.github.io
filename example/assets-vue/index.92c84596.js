import{_ as a,m as l,u as e,r as s,o as n,q as t,z as u,a as d,f as i,i as r,p as c,l as m}from"./common.10acb102.js";const o=a=>(c("data-v-3cad6dde"),a=a(),m(),a),p={class:"f-mb"},f=o((()=>d("span",{class:"mars-pannel-item-label"},"原始数据:",-1))),v={class:"f-mb"},_=o((()=>d("span",{class:"mars-pannel-item-label"},"计算平行线:",-1))),b={class:"f-mb"},k=o((()=>d("span",{class:"mars-pannel-item-label"},"计算曲线:",-1)));var C=a(l({__name:"index",setup(a){const l=window.mapWork,c=e(5),m=()=>{l.drawLine()},o=()=>{l.clearLayer()},C=()=>{l.parallelLines(c.value)},w=()=>{l.calculationCurve()};return(a,l)=>{const e=s("mars-button"),x=s("a-space"),L=s("mars-input-number"),g=s("mars-dialog");return n(),t(g,{visible:!0,right:"10",top:"10"},{default:u((()=>[d("div",p,[i(x,null,{default:u((()=>[f,i(e,{onClick:m},{default:u((()=>[r("绘制线")])),_:1}),i(e,{onClick:o},{default:u((()=>[r("清除")])),_:1})])),_:1})]),d("div",v,[i(x,null,{default:u((()=>[_,i(L,{value:c.value,"onUpdate:value":l[0]||(l[0]=a=>c.value=a),min:1,max:10},null,8,["value"]),r("公里 "),i(e,{onClick:C},{default:u((()=>[r("计算")])),_:1})])),_:1})]),d("div",b,[i(x,null,{default:u((()=>[k,i(e,{onClick:w},{default:u((()=>[r("计算")])),_:1})])),_:1})])])),_:1})}}}),[["__scopeId","data-v-3cad6dde"]]);export{C as default};