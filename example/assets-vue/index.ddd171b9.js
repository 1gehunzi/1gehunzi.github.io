import{_ as a}from"./read.03cd8dda.js";import{d as e,s,aH as t,o as l,Y as d,b2 as o,a5 as r,a4 as u}from"./common.5a7f0626.js";var n=a(e({__name:"index",setup(a){const e=window.mapWork,n=s(2),c=s(!0),m=()=>{e.setBrightness(n.value)},i=()=>{e.setBrightnessEffect(c.value)};return(a,e)=>{const s=t("a-checkbox"),f=t("a-form-item"),p=t("mars-slider"),v=t("a-form"),h=t("mars-dialog");return l(),d(h,{visible:!0,right:"10",top:"10",width:"200px"},{default:o((()=>[r(v,null,{default:o((()=>[r(f,{label:"状态:"},{default:o((()=>[r(s,{onChange:i,checked:c.value,"onUpdate:checked":e[0]||(e[0]=a=>c.value=a)},{default:o((()=>[u("开启效果")])),_:1},8,["checked"])])),_:1}),r(f,{label:"亮度:"},{default:o((()=>[r(p,{onChange:m,value:n.value,"onUpdate:value":e[1]||(e[1]=a=>n.value=a),min:0,max:5,step:.01},null,8,["value","step"])])),_:1})])),_:1})])),_:1})}}}),[["__scopeId","data-v-03e4c0ba"]]);export{n as default};