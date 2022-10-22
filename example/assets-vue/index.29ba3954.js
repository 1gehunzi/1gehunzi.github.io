import{_ as a}from"./read.03cd8dda.js";import{d as l,r as e,au as n,aH as t,o as s,Y as o,b2 as d,_ as i,a5 as u,a4 as p,aC as m,aA as h}from"./common.5a7f0626.js";const c=a=>(m("data-v-114a3253"),a=a(),h(),a),g={class:"f-mb"},r=c((()=>i("span",{class:"mars-pannel-item-label"},"经度",-1))),v={class:"f-mb"},f=c((()=>i("span",{class:"mars-pannel-item-label"},"纬度",-1))),_={class:"f-mb"},b=c((()=>i("span",{class:"mars-pannel-item-label"},"高度",-1))),C={class:"f-mb"},x=c((()=>i("span",{class:"mars-pannel-item-label"},"盒子X长度",-1))),w={class:"f-mb"},k=c((()=>i("span",{class:"mars-pannel-item-label"},"盒子Y长度",-1))),U={class:"f-mb"},Y=c((()=>i("span",{class:"mars-pannel-item-label"},"盒子Z长度",-1))),B={class:"f-mb"},X=c((()=>i("span",{class:"mars-pannel-item-label"},"盒子",-1))),Z={class:"f-tac"};var D=a(l({__name:"index",setup(a){const l=window.mapWork,m=e({lng:117.251283,lat:31.843707,alt:43.7,lengthX:20,lengthY:10,lengthZ:15,isShowBox:!0});n((()=>{const a=[m.lng,m.lat,m.alt];l.tilesetBoxClipDemo(a)})),l.eventTarget.on("hasDraw",(a=>{m.lng=a.point.lng,m.lat=a.point.lat,m.alt=a.point.alt}));const h=()=>{l.clear()},c=()=>{l.drawExtent()},D=()=>{const a=[m.lng,m.lat,m.alt];l.onChangePosition(a)},S=()=>{l.showModelMatrix(m.isShowBox)},y=()=>{l.onChangeDimensionsX(m.lengthX)},j=()=>{l.onChangeDimensionsY(m.lengthY)},M=()=>{l.onChangeDimensionsZ(m.lengthZ)};return(a,l)=>{const e=t("mars-input-number"),n=t("a-space"),A=t("mars-slider"),E=t("a-checkbox"),H=t("mars-button"),I=t("mars-dialog");return s(),o(I,{visible:!0,right:"10",top:"10",width:"280"},{default:d((()=>[i("div",g,[u(n,null,{default:d((()=>[r,u(e,{step:1e-6,value:m.lng,"onUpdate:value":l[0]||(l[0]=a=>m.lng=a),onChange:D,style:{width:"100%"}},{default:d((()=>[p("经度")])),_:1},8,["step","value"])])),_:1})]),i("div",v,[u(n,null,{default:d((()=>[f,u(e,{step:1e-6,value:m.lat,"onUpdate:value":l[1]||(l[1]=a=>m.lat=a),onChange:D,style:{width:"100%"}},{default:d((()=>[p("纬度")])),_:1},8,["step","value"])])),_:1})]),i("div",_,[u(n,null,{default:d((()=>[b,u(e,{step:.1,value:m.alt,"onUpdate:value":l[2]||(l[2]=a=>m.alt=a),onChange:D,style:{width:"100%"}},{default:d((()=>[p("高度")])),_:1},8,["step","value"])])),_:1})]),i("div",C,[u(n,null,{default:d((()=>[x,u(A,{onChange:y,value:m.lengthX,"onUpdate:value":l[3]||(l[3]=a=>m.lengthX=a),min:0,max:100,step:1},null,8,["value","step"])])),_:1})]),i("div",w,[u(n,null,{default:d((()=>[k,u(A,{onChange:j,value:m.lengthY,"onUpdate:value":l[4]||(l[4]=a=>m.lengthY=a),min:0,max:100,step:1},null,8,["value","step"])])),_:1})]),i("div",U,[u(n,null,{default:d((()=>[Y,u(A,{onChange:M,value:m.lengthZ,"onUpdate:value":l[5]||(l[5]=a=>m.lengthZ=a),min:0,max:100,step:1},null,8,["value","step"])])),_:1})]),i("div",B,[u(n,null,{default:d((()=>[X,u(E,{onChange:S,checked:m.isShowBox,"onUpdate:checked":l[6]||(l[6]=a=>m.isShowBox=a)},{default:d((()=>[p("是否显示")])),_:1},8,["checked"])])),_:1})]),i("div",Z,[u(n,null,{default:d((()=>[u(H,{onClick:c},{default:d((()=>[p("绘制Box")])),_:1}),u(H,{onClick:h},{default:d((()=>[p("清除")])),_:1})])),_:1})])])),_:1})}}}),[["__scopeId","data-v-114a3253"]]);export{D as default};