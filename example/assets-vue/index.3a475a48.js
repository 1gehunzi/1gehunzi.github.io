import{L as e}from"./location-to.54aa9f87.js";import{w as a,e as t}from"./style.0a538c9f.js";import{_ as l,m as o,u as n,aI as d,O as c,r as i,o as r,c as u,f as s,z as p,a as f,i as h,F as _}from"./common.10acb102.js";const k={class:"f-mb"},g={class:"f-mb"},v={class:"f-mb"},y={class:"f-mb"};var C=l(o({__name:"index",setup(l){const o=window.mapWork,C=n(!0),w=()=>{o.graphicLayer.hasEdit=C.value},m=n(!0),b=()=>{o.graphicLayer.show=m.value},L=n(!1),A=()=>{L.value?o.bindLayerPopup():o.graphicLayer.unbindPopup()},T=n(!1),P=()=>{T.value?o.graphicLayer.bindTooltip("我是layer上绑定的Tooltip"):o.graphicLayer.unbindTooltip()},E=n(!0),S=()=>{E.value?o.bindLayerContextMenu():o.graphicLayer.unbindContextMenu(!0)},W=()=>{o.graphicLayer.clear()},U=()=>{0!==o.graphicLayer.length?o.downloadJsonFile():t("当前没有标注任何数据，无需保存！")},x=e=>{o.openGeoJSON(e.file)},J=n([]),j=e=>{o.drawPolygon(e)},O=e=>{o.drawExtrudedPolygon(e)},{activate:G,disable:N,isActivate:Y,updateWidget:M}=a.exports.useWidget();d((()=>{const e=window.mapWork.mars3d;o.graphicLayer.on(e.EventType.drawCreated,(function(e){F(e)})),o.graphicLayer.on([e.EventType.editStart,e.EventType.editMovePoint,e.EventType.editStyle,e.EventType.editRemovePoint],(function(e){F(e)})),o.graphicLayer.on([e.EventType.editStop,e.EventType.removeGraphic],(function(e){setTimeout((()=>{o.graphicLayer.isEditing||N("graphic-editor")}),100)}))}));const F=e=>{const a=e.graphic;a._conventStyleJson||(a.options.style=a.toJSON().style,a._conventStyleJson=!0),Y("graphic-editor")?M("graphic-editor",{data:{graphic:c(a)}}):G({name:"graphic-editor",data:{graphic:c(a)}})};return(a,t)=>{const l=i("a-col"),o=i("a-checkbox"),n=i("a-space"),d=i("a-row"),c=i("mars-button"),G=i("a-upload"),N=i("mars-dialog");return r(),u(_,null,[s(N,{visible:!0,right:"10",top:"10",width:"362"},{default:p((()=>[f("div",k,[s(d,null,{default:p((()=>[s(l,{span:5},{default:p((()=>[h("图层状态:")])),_:1}),s(l,{span:19},{default:p((()=>[s(n,null,{default:p((()=>[s(o,{checked:m.value,"onUpdate:checked":t[0]||(t[0]=e=>m.value=e),onChange:b},{default:p((()=>[h("显示隐藏")])),_:1},8,["checked"]),s(o,{checked:L.value,"onUpdate:checked":t[1]||(t[1]=e=>L.value=e),onChange:A},{default:p((()=>[h("Popup绑定")])),_:1},8,["checked"]),s(o,{checked:T.value,"onUpdate:checked":t[2]||(t[2]=e=>T.value=e),onChange:P},{default:p((()=>[h("Tooltip")])),_:1},8,["checked"]),s(o,{checked:E.value,"onUpdate:checked":t[3]||(t[3]=e=>E.value=e),onChange:S},{default:p((()=>[h("右键绑定")])),_:1},8,["checked"]),s(o,{checked:C.value,"onUpdate:checked":t[4]||(t[4]=e=>C.value=e),onChange:w},{default:p((()=>[h("是否编辑")])),_:1},8,["checked"])])),_:1})])),_:1})])),_:1})]),f("div",g,[s(d,null,{default:p((()=>[s(l,{span:5},{default:p((()=>[h("数据管理:")])),_:1}),s(l,{span:19},{default:p((()=>[s(n,null,{default:p((()=>[s(c,{onClick:W},{default:p((()=>[h("清除")])),_:1}),s(c,{onClick:U},{default:p((()=>[h("保存GeoJSON")])),_:1}),s(G,{multiple:!1,name:"file",accept:"json,geojson","file-list":J.value,showUploadList:!1,supportServerRender:!0,beforeUpload:()=>!1,onChange:x},{default:p((()=>[s(c,null,{default:p((()=>[h(" 打开GeoJSON ")])),_:1})])),_:1},8,["file-list","beforeUpload"])])),_:1})])),_:1})])),_:1})]),f("div",v,[s(d,null,{default:p((()=>[s(l,{span:5},{default:p((()=>[h("二维贴地:")])),_:1}),s(l,{span:19},{default:p((()=>[s(n,null,{default:p((()=>[s(c,{onClick:t[5]||(t[5]=e=>j("doubleArrow"))},{default:p((()=>[h("钳击箭头")])),_:1}),s(c,{onClick:t[6]||(t[6]=e=>j("closeVurve"))},{default:p((()=>[h("闭合曲面")])),_:1}),s(c,{onClick:t[7]||(t[7]=e=>j("attackArrow"))},{default:p((()=>[h("攻击箭头")])),_:1}),s(c,{onClick:t[8]||(t[8]=e=>j("gatheringPlace"))},{default:p((()=>[h("集结地")])),_:1}),s(c,{onClick:t[9]||(t[9]=e=>j("straightArrow"))},{default:p((()=>[h("粗直箭头")])),_:1}),s(c,{onClick:t[10]||(t[10]=e=>j("fineArrowYW"))},{default:p((()=>[h("燕尾直箭头")])),_:1}),s(c,{onClick:t[11]||(t[11]=e=>j("fineArrow"))},{default:p((()=>[h("粗单尖直箭头")])),_:1}),s(c,{onClick:t[12]||(t[12]=e=>j("attackArrowPW"))},{default:p((()=>[h("平尾攻击箭头")])),_:1}),s(c,{onClick:t[13]||(t[13]=e=>j("attackArrowYW"))},{default:p((()=>[h("燕尾攻击箭头")])),_:1})])),_:1})])),_:1})])),_:1})]),f("div",y,[s(d,null,{default:p((()=>[s(l,{span:5},{default:p((()=>[h("三维贴地:")])),_:1}),s(l,{span:19},{default:p((()=>[s(n,null,{default:p((()=>[s(c,{onClick:t[14]||(t[14]=e=>O("doubleArrow"))},{default:p((()=>[h("钳击箭头")])),_:1}),s(c,{onClick:t[15]||(t[15]=e=>O("closeVurve"))},{default:p((()=>[h("闭合曲面")])),_:1}),s(c,{onClick:t[16]||(t[16]=e=>O("attackArrow"))},{default:p((()=>[h("攻击箭头")])),_:1}),s(c,{onClick:t[17]||(t[17]=e=>O("gatheringPlace"))},{default:p((()=>[h("集结地")])),_:1}),s(c,{onClick:t[18]||(t[18]=e=>O("straightArrow"))},{default:p((()=>[h("粗直箭头")])),_:1}),s(c,{onClick:t[19]||(t[19]=e=>O("fineArrowYW"))},{default:p((()=>[h("燕尾直箭头")])),_:1}),s(c,{onClick:t[20]||(t[20]=e=>O("fineArrow"))},{default:p((()=>[h("粗单尖直箭头")])),_:1}),s(c,{onClick:t[21]||(t[21]=e=>O("attackArrowPW"))},{default:p((()=>[h("平尾攻击箭头")])),_:1}),s(c,{onClick:t[22]||(t[22]=e=>O("attackArrowYW"))},{default:p((()=>[h("燕尾攻击箭头")])),_:1})])),_:1})])),_:1})])),_:1})])])),_:1}),s(e)],64)}}}),[["__scopeId","data-v-55af8313"]]);export{C as default};
