import{L as a}from"./location-to.54aa9f87.js";import{_ as e,m as l,u as t,r as u,o as s,c as n,f as i,z as c,a as o,i as v,F as d,p as m,l as r}from"./common.10acb102.js";const p=a=>(m("data-v-0cc112cc"),a=a(),r(),a),h=p((()=>o("p",{class:"f-mb"},[v(" 提示：单击分析按钮激活绘制分析，对绘制面(墙)内的进行以下计算。"),o("br"),v(" 1. 挖方量: 计算“基准面”到地表之间的凸出部分进行挖掉的体积。"),o("br"),v(" 2. 填方量：计算“基准面”与“墙底部”之间的缺少部分进行填平的体积。 ")],-1))),b={class:"f-mb"},f={class:"f-mb height"},g=p((()=>o("span",{class:"mars-pannel-item-label"},"基准面高(米):",-1))),_={class:"f-mb"},k=p((()=>o("span",{class:"mars-pannel-item-label"},"围墙底高(米):",-1))),x=p((()=>o("span",{class:"mars-pannel-item-label"},"围墙顶高(米):",-1)));var C=e(l({__name:"index",setup(e){const l=window.mapWork,m=t(),r=t(),p=t(),C=t(!1),H=()=>{l.analysisMeasure()},w=()=>{l.clear()},U=()=>{const a=l.showResult(C.value);C.value=a},M=()=>{l.baseHeight(m.value)},N=()=>{l.txtMinHeight(r.value)},j=()=>{l.txtMaxHeight(p.value)},y=()=>{l.selHeight()};return l.eventTarget.on("heightVal",(function(a){U(),m.value=a.baseHeight,r.value=a.minHeight,p.value=a.maxHeight})),(e,l)=>{const t=u("mars-button"),z=u("a-checkbox"),F=u("a-space"),I=u("mars-input-number"),L=u("mars-dialog");return s(),n(d,null,[i(L,{visible:!0,right:"10",top:"10",width:"350"},{default:c((()=>[h,o("div",b,[i(F,null,{default:c((()=>[i(t,{onClick:H},{default:c((()=>[v("绘制分析区域")])),_:1}),i(t,{onClick:w},{default:c((()=>[v("清除")])),_:1}),i(z,{onChange:U,checked:C.value,"onUpdate:checked":l[0]||(l[0]=a=>C.value=a)},{default:c((()=>[v("显示面内三角网")])),_:1},8,["checked"])])),_:1})]),o("div",f,[i(F,null,{default:c((()=>[g,i(I,{onChange:M,id:"inputNumber",value:m.value,"onUpdate:value":l[1]||(l[1]=a=>m.value=a),step:"0.1"},null,8,["value"]),i(t,{onClick:y},{default:c((()=>[v("点选高度")])),_:1})])),_:1})]),o("div",_,[i(F,null,{default:c((()=>[k,i(I,{onChange:N,id:"inputNumber",value:r.value,"onUpdate:value":l[2]||(l[2]=a=>r.value=a),step:"0.1"},null,8,["value"])])),_:1})]),o("div",null,[i(F,null,{default:c((()=>[x,i(I,{onChange:j,id:"inputNumber",value:p.value,"onUpdate:value":l[3]||(l[3]=a=>p.value=a),step:"0.1"},null,8,["value"])])),_:1})])])),_:1}),i(a)],64)}}}),[["__scopeId","data-v-0cc112cc"]]);export{C as default};
