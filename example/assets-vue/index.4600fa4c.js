import{_ as a,m as e,u as l,x as t,r as u,o as s,q as n,z as r,f as d,i as o,w as i,a as c,j as f,A as m,Y as p}from"./common.10acb102.js";import{e as v}from"./style.0a538c9f.js";var _=a(e({__name:"index",setup(a){const e=window.mapWork,_=l(""),h=t((()=>y.value.length>0)),y=l([]);e.eventTarget.on("befortUI",(function(a){y.value=[],a.list.forEach(((a,e)=>{y.value.push({key:e,name:a["项目名称"],type:a["设施类型"],address:a["具体位置"],graphic:a.graphic})}))}));const g=l([{title:"名称",dataIndex:"name",key:"name"},{title:"类型",dataIndex:"type",key:"type",width:50},{title:"住址",dataIndex:"address",key:"address"}]),k=a=>({onClick:()=>{null!=a.graphic?e.flyToGraphic(p(a.graphic)):v(a.name+" 无经纬度坐标信息！")}}),b=()=>{e.drawRectangle()},w=()=>{e.drawCircle()},C=()=>{e.drawPolygon()},x=()=>{y.value=[],e.clearAll(!0),e.query(_.value)},I=()=>{y.value=[],e.clearAll()};return(a,e)=>{const l=u("mars-input"),t=u("a-form-item"),p=u("mars-button"),v=u("a-space"),j=u("mars-table"),A=u("a-form"),S=u("mars-dialog");return s(),n(S,{visible:!0,right:"10",top:"10",width:"400"},{default:r((()=>[d(A,null,{default:r((()=>[d(t,{label:"名称"},{default:r((()=>[d(l,{class:"inputServe",value:_.value,"onUpdate:value":e[0]||(e[0]=a=>_.value=a),placeholder:"请输入查询关键字"},null,8,["value"])])),_:1}),d(t,{label:"范围"},{default:r((()=>[d(v,null,{default:r((()=>[d(p,{onClick:b},{default:r((()=>[o("框选范围")])),_:1}),d(p,{onClick:w},{default:r((()=>[o("圆形范围")])),_:1}),d(p,{onClick:C},{default:r((()=>[o("多边形范围")])),_:1})])),_:1})])),_:1}),d(t,{label:"范围"},{default:r((()=>[d(v,null,{default:r((()=>[d(p,{onClick:x},{default:r((()=>[o("查询")])),_:1}),d(p,{onClick:I},{default:r((()=>[o("清除")])),_:1})])),_:1})])),_:1}),i(c("div",null,[d(t,null,{default:r((()=>[d(j,{pagination:!0,dataSource:y.value,columns:g.value,"custom-row":k,size:"small",bordered:"",scroll:{y:400}},null,8,["dataSource","columns"])])),_:1})],512),[[f,m(h)]])])),_:1})])),_:1})}}}),[["__scopeId","data-v-7e81840e"]]);export{_ as default};
