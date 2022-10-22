import{w as e,f as t}from"./style.0a538c9f.js";import{_ as a,m as n,S as o,aI as i,O as l,r as p,o as c,q as r,z as d,c as s,t as u,h,f as y,i as b}from"./common.10acb102.js";const g={key:0,class:"mars-pannel-item-label"};var m=a(n({__name:"layer-state",props:{label:{default:"图层状态:"}},setup(a){const n=a,m=window.mapWork,f=m.mars3d;m.Cesium;const v=o({enabledShowHide:!0,enabledPopup:!0,enabledTooltip:!1,enabledRightMenu:!1});function P(){return m.getManagerLayer?m.getManagerLayer():m.graphicLayer}m.eventTarget&&m.eventTarget.on("defuatData",(e=>{v.enabledShowHide=e.enabledShowHide,v.enabledPopup=e.enabledPopup,v.enabledTooltip=e.enabledTooltip,v.enabledRightMenu=e.enabledRightMenu})),setTimeout((()=>{const e=P();e&&(v.enabledShowHide=e.show,v.enabledPopup=e.hasPopup(),v.enabledTooltip=e.hasTooltip(),v.enabledRightMenu=e.hasContextMenu())}),1e3);const T=()=>{P().show=v.enabledShowHide},w=()=>{const e=P();v.enabledPopup?m.bindLayerPopup?m.bindLayerPopup():P().bindPopup((function(e){var t;const a=S(e);return a["类型"]=null==(t=e.graphic)?void 0:t.type,a["来源"]="我是layer上绑定的Popup",a["备注"]="我支持鼠标交互",f.Util.getTemplateHtml({title:"矢量图层",template:"all",attr:a})}),{pointerEvents:!0}):e.unbindPopup()},k=()=>{const e=P();v.enabledTooltip?e.bindTooltip((function(e){var t;const a=S(e);return a["类型"]=null==(t=e.graphic)?void 0:t.type,a["来源"]="我是layer上绑定的Toolip",a["备注"]="我支持鼠标移入交互",f.Util.getTemplateHtml({title:"矢量图层",template:"all",attr:a})}),{pointerEvents:!0}):e.unbindTooltip()},M=()=>{const e=P();v.enabledRightMenu?m.bindLayerContextMenu?m.bindLayerContextMenu():function(){const e=P();e.bindContextMenu([{text:"删除对象",icon:"fa fa-trash-o",show:e=>{const t=e.graphic;return!(!t||t.isDestroy)},callback:t=>{const a=t.graphic;if(!a)return;const n=a.parent;e.removeGraphic(a),n&&e.removeGraphic(n)}},{text:"计算长度",icon:"fa fa-medium",show:function(e){const t=e.graphic;return!!t&&("polyline"===t.type||"polylineP"===t.type||"curve"===t.type||"curveP"===t.type||"polylineVolume"===t.type||"polylineVolumeP"===t.type||"corridor"===t.type||"corridorP"===t.type||"wall"===t.type||"wallP"===t.type)},callback:e=>{const a=e.graphic,n=f.MeasureUtil.formatDistance(a.distance);t("该对象的长度为:"+n)}},{text:"计算周长",icon:"fa fa-medium",show:function(e){const t=e.graphic;return!!t&&("circle"===t.type||"circleP"===t.type||"rectangle"===t.type||"rectangleP"===t.type||"polygon"===t.type||"polygonP"===t.type)},callback:e=>{const a=e.graphic,n=f.MeasureUtil.formatDistance(a.distance);t("该对象的周长为:"+n)}},{text:"计算面积",icon:"fa fa-reorder",show:function(e){var t;const a=e.graphic;return!!a&&("circle"===a.type||"circleP"===a.type||"rectangle"===a.type||"rectangleP"===a.type||("polygon"===a.type||"polygonP"===a.type||"wall"===a.type||"scrollWall"===a.type||"water"===a.type)&&(null==(t=a.positionsShow)?void 0:t.length)>2)},callback:e=>{const a=e.graphic,n=f.MeasureUtil.formatArea(a.area);t("该对象的面积为:"+n)}}])}():e.unbindContextMenu(!0)};function S(e){var t;if(null==(t=null==e?void 0:e.graphic)?void 0:t.attr)return e.graphic.attr;if(!e.czmObject)return{};let a=e.czmObject._attr||e.czmObject.properties||e.czmObject.attribute;return a&&a.type&&a.attr&&(a=a.attr),null!=a?a:{}}const{activate:_,disable:x,isActivate:C,updateWidget:E}=e.exports.useWidget();i((async()=>{const e=window.mapWork.mars3d,t=await P();t&&(t.on(e.EventType.drawCreated,(function(e){H(e)})),t.on([e.EventType.editStart,e.EventType.editMovePoint,e.EventType.editStyle,e.EventType.editRemovePoint],(function(e){H(e)})),t.on([e.EventType.editStop,e.EventType.removeGraphic],(function(e){setTimeout((()=>{t.isEditing||x("graphic-editor")}),100)})))}));const H=e=>{const t=e.graphic;t._conventStyleJson||(t.options.style=t.toJSON().style,t._conventStyleJson=!0),C("graphic-editor")?E("graphic-editor",{data:{graphic:l(t)}}):_({name:"graphic-editor",data:{graphic:l(t)}})};return(e,t)=>{const a=p("a-checkbox"),o=p("a-space");return c(),r(o,null,{default:d((()=>[""!==n.label?(c(),s("span",g,u(n.label),1)):h("",!0),y(a,{checked:v.enabledShowHide,"onUpdate:checked":t[0]||(t[0]=e=>v.enabledShowHide=e),onChange:T,title:"显示隐藏状态"},{default:d((()=>[b("显示")])),_:1},8,["checked"]),y(a,{checked:v.enabledPopup,"onUpdate:checked":t[1]||(t[1]=e=>v.enabledPopup=e),onChange:w,title:"是否绑定Popup鼠标单击弹窗"},{default:d((()=>[b("Popup")])),_:1},8,["checked"]),y(a,{checked:v.enabledTooltip,"onUpdate:checked":t[2]||(t[2]=e=>v.enabledTooltip=e),onChange:k,title:"是否绑定Tooltip鼠标移入弹窗"},{default:d((()=>[b("Tooltip")])),_:1},8,["checked"]),y(a,{checked:v.enabledRightMenu,"onUpdate:checked":t[3]||(t[3]=e=>v.enabledRightMenu=e),onChange:M,title:"是否绑定右键菜单"},{default:d((()=>[b("右键菜单")])),_:1},8,["checked"])])),_:1})}}}),[["__scopeId","data-v-927d8570"]]);export{m as L};
