import{_ as a}from"./read.03cd8dda.js";import{d as e,s,aH as t,o as n,Y as l,b2 as u,_ as o,a5 as m,c as r,M as c,aF as i,I as v}from"./common.5a7f0626.js";const d={class:"f-tac"},p={class:"mars-pannel-item-label"};var f=a(e({__name:"index",setup(a){const e=window.mapWork,f=s("火箭整体"),_=s([]),g=s([]),h=s([]);let x;e.eventTarget.on("loadGltfModel",(function(a){const e=a.articulations;g.value=e;for(let t=0;t<e.length;t++){const a=e[t];_.value.push({value:a.name_cn,name:a.name,states:a.stages})}const s=_.value.filter((a=>a.value===f.value));w(f.value,s[0])}));const b=(a,e)=>{w(a,e)};function w(a,e){x=e,h.value=e.states}return(a,s)=>{const g=t("mars-select"),w=t("mars-slider"),C=t("a-space"),U=t("mars-dialog");return n(),l(U,{visible:!0,right:"10",top:"10"},{default:u((()=>[o("div",d,[m(g,{ref:"select",value:f.value,"onUpdate:value":s[0]||(s[0]=a=>f.value=a),style:{width:"200px"},options:_.value,onChange:b},null,8,["value","options"])]),(n(!0),r(c,null,i(h.value,(a=>(n(),r("div",{class:"f-pt",key:a.name},[m(C,null,{default:u((()=>[o("span",p,v(a.name_cn),1),m(w,{min:a.minimum,max:a.maximum,step:.1,value:a.current,"onUpdate:value":e=>a.current=e,onChange:s=>(a=>{e.setArticulationStage(x.name,a.name,a.current)})(a)},null,8,["min","max","step","value","onUpdate:value","onChange"])])),_:2},1024)])))),128))])),_:1})}}}),[["__scopeId","data-v-fe66c2ba"]]);export{f as default};