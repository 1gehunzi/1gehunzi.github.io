import{L as e}from"./location-to.54aa9f87.js";import{w as a}from"./style.0a538c9f.js";import{_ as l,m as t,u as n,aI as d,O as o,r as u,o as i,c,f,z as r,a as p,i as s,F as _,p as k,l as h}from"./common.10acb102.js";const v=(e=>(k("data-v-8525ab56"),e=e(),h(),e))((()=>p("span",{title:"屏蔽拾取地形坐标，避免穿透3dtiles模型"},"仅在Tiles上拾取",-1))),C={class:"f-pt"},g={class:"f-pt"},y={class:"f-pt"},w={class:"f-pt"},m={class:"f-pt"};var L=l(t({__name:"index",setup(l){const t=window.mapWork,k=n(!0),h=()=>{t.graphicLayer.show=k.value},L=n(!1),b=()=>{L.value?t.bindLayerPopup():t.graphicLayer.unbindPopup()},T=n(!1),E=()=>{T.value?t.graphicLayer.bindTooltip("我是layer上绑定的Tooltip"):t.graphicLayer.unbindTooltip()},P=n(!0),x=()=>{P.value?t.bindLayerContextMenu():t.graphicLayer.unbindContextMenu(!0)},S=n(!0),U=()=>{t.graphicLayer.hasEdit=S.value},M=n(!1),W=()=>{t.updateOnlyPickModelPosition(M.value)},J=()=>{t.graphicLayer.clear()},O=()=>{t.saveGeoJSON()},j=e=>{t.openGeoJSON(e.file)},G=()=>{t.saveKML()},K=()=>{t.saveWKT()};function N(){t.drawPoint()}function R(){t.drawMarker()}function z(){t.drawLabel()}function I(){t.startDrawModel()}function A(e){t.drawPolyline(e)}function B(e){t.drawPolygon(e)}function D(e){t.drawCurve(e)}function F(e){t.drawCorridor(e)}function q(e){t.drawEllipse(e)}function H(e){t.drawRectangle(e)}function Q(){t.draPlane()}function V(e){t.draWall(e)}function X(){t.drawBox()}function Y(){t.drawCylinder()}function Z(){t.drawEllipsoid()}function $(){t.drawExtrudedPolygon()}function ee(){t.drawExtrudedRectangle()}function ae(){t.drawExtrudedCircle()}const{activate:le,disable:te,isActivate:ne,updateWidget:de}=a.exports.useWidget();d((()=>{const e=window.mapWork.mars3d;t.graphicLayer.on(e.EventType.drawCreated,(function(e){S.value&&oe(e)})),t.graphicLayer.on([e.EventType.editStart,e.EventType.editMovePoint,e.EventType.editStyle,e.EventType.editRemovePoint],(function(e){oe(e)})),t.graphicLayer.on([e.EventType.editStop,e.EventType.removeGraphic],(function(e){setTimeout((()=>{t.graphicLayer.isEditing||te("graphic-editor")}),100)}))}));const oe=e=>{const a=e.graphic;a._conventStyleJson||(a.options.style=a.toJSON().style,a._conventStyleJson=!0),ne("graphic-editor")?de("graphic-editor",{data:{graphic:o(a)}}):le({name:"graphic-editor",data:{graphic:o(a)}})};return(a,l)=>{const t=u("a-col"),n=u("a-checkbox"),d=u("a-space"),o=u("a-row"),le=u("mars-button"),te=u("a-upload"),ne=u("mars-dialog");return i(),c(_,null,[f(ne,{visible:!0,right:"10",top:"10",width:"345"},{default:r((()=>[p("div",null,[f(o,null,{default:r((()=>[f(t,{span:5},{default:r((()=>[s("图层管理:")])),_:1}),f(t,{span:19},{default:r((()=>[f(d,null,{default:r((()=>[f(n,{checked:k.value,"onUpdate:checked":l[0]||(l[0]=e=>k.value=e),onChange:h},{default:r((()=>[s("显示隐藏")])),_:1},8,["checked"]),f(n,{checked:L.value,"onUpdate:checked":l[1]||(l[1]=e=>L.value=e),onChange:b},{default:r((()=>[s("Popup绑定")])),_:1},8,["checked"]),f(n,{checked:T.value,"onUpdate:checked":l[2]||(l[2]=e=>T.value=e),onChange:E},{default:r((()=>[s("Tooltip绑定")])),_:1},8,["checked"]),f(n,{checked:P.value,"onUpdate:checked":l[3]||(l[3]=e=>P.value=e),onChange:x},{default:r((()=>[s("右键菜单绑定")])),_:1},8,["checked"]),f(n,{checked:S.value,"onUpdate:checked":l[4]||(l[4]=e=>S.value=e),onChange:U},{default:r((()=>[s("是否编辑")])),_:1},8,["checked"]),f(n,{checked:M.value,"onUpdate:checked":l[5]||(l[5]=e=>M.value=e),onChange:W},{default:r((()=>[v])),_:1},8,["checked"])])),_:1})])),_:1})])),_:1})]),p("div",C,[f(o,null,{default:r((()=>[f(t,{span:5},{default:r((()=>[s("数据管理:")])),_:1}),f(t,{span:19},{default:r((()=>[f(d,null,{default:r((()=>[f(le,{onClick:J},{default:r((()=>[s("清除")])),_:1}),f(te,{multiple:!1,name:"file",accept:"json,geojson,kml,kmz",showUploadList:!1,onChange:j,beforeUpload:()=>!1},{default:r((()=>[f(le,null,{default:r((()=>[s("打开")])),_:1})])),_:1},8,["beforeUpload"]),f(le,{onClick:O},{default:r((()=>[s("保存GeoJSON")])),_:1}),f(le,{onClick:G},{default:r((()=>[s("另存KML")])),_:1}),f(le,{onClick:K},{default:r((()=>[s("另存WKT")])),_:1})])),_:1})])),_:1})])),_:1})]),p("div",g,[f(o,null,{default:r((()=>[f(t,{span:5},{default:r((()=>[s("单个点类:")])),_:1}),f(t,{span:19},{default:r((()=>[f(d,null,{default:r((()=>[f(le,{onClick:N},{default:r((()=>[s("点")])),_:1}),f(le,{onClick:z},{default:r((()=>[s("文字")])),_:1}),f(le,{onClick:R},{default:r((()=>[s("图标点")])),_:1}),f(le,{onClick:I},{default:r((()=>[s("小模型")])),_:1})])),_:1})])),_:1})])),_:1})]),p("div",y,[f(o,null,{default:r((()=>[f(t,{span:5},{default:r((()=>[s("二维空间:")])),_:1}),f(t,{span:19},{default:r((()=>[f(d,null,{default:r((()=>[f(le,{onClick:l[6]||(l[6]=e=>A(!1))},{default:r((()=>[s("线")])),_:1}),f(le,{onClick:l[7]||(l[7]=e=>B(!1))},{default:r((()=>[s("面")])),_:1}),f(le,{onClick:l[8]||(l[8]=e=>q(!1))},{default:r((()=>[s("圆")])),_:1}),f(le,{onClick:l[9]||(l[9]=e=>H(!1))},{default:r((()=>[s("矩形")])),_:1}),f(le,{onClick:Q},{default:r((()=>[s("平面")])),_:1}),f(le,{onClick:l[10]||(l[10]=e=>D(!1))},{default:r((()=>[s("曲线")])),_:1}),f(le,{onClick:l[11]||(l[11]=e=>F(!1))},{default:r((()=>[s("走廊")])),_:1})])),_:1})])),_:1})])),_:1})]),p("div",w,[f(o,null,{default:r((()=>[f(t,{span:5},{default:r((()=>[s("二维贴地:")])),_:1}),f(t,{span:19},{default:r((()=>[f(d,null,{default:r((()=>[f(le,{onClick:l[12]||(l[12]=e=>A(!0))},{default:r((()=>[s("线")])),_:1}),f(le,{onClick:l[13]||(l[13]=e=>B(!0))},{default:r((()=>[s("面")])),_:1}),f(le,{onClick:l[14]||(l[14]=e=>q(!0))},{default:r((()=>[s("圆")])),_:1}),f(le,{onClick:l[15]||(l[15]=e=>D(!0))},{default:r((()=>[s("曲线")])),_:1}),f(le,{onClick:l[16]||(l[16]=e=>F(!0))},{default:r((()=>[s("走廊")])),_:1}),f(le,{onClick:l[17]||(l[17]=e=>H(!0))},{default:r((()=>[s("矩形")])),_:1})])),_:1})])),_:1})])),_:1})]),p("div",m,[f(o,null,{default:r((()=>[f(t,{span:5},{default:r((()=>[s("三维空间:")])),_:1}),f(t,{span:19},{default:r((()=>[f(d,null,{default:r((()=>[f(le,{onClick:Z},{default:r((()=>[s("球")])),_:1}),f(le,{onClick:l[18]||(l[18]=e=>V(!1))},{default:r((()=>[s("墙")])),_:1}),f(le,{onClick:X},{default:r((()=>[s("盒子")])),_:1}),f(le,{onClick:ae},{default:r((()=>[s("圆柱")])),_:1}),f(le,{onClick:Y},{default:r((()=>[s("圆锥")])),_:1}),f(le,{onClick:l[19]||(l[19]=e=>V(!0))},{default:r((()=>[s("闭合墙")])),_:1}),f(le,{onClick:$},{default:r((()=>[s("面立体")])),_:1}),f(le,{onClick:ee},{default:r((()=>[s("矩形立体")])),_:1})])),_:1})])),_:1})])),_:1})])])),_:1}),f(e)],64)}}}),[["__scopeId","data-v-8525ab56"]]);export{L as default};
