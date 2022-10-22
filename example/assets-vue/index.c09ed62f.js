import{d as e,s as a,X as t,au as l,aH as o,o as r,Y as n,b2 as f,a5 as d,a4 as s,b4 as u,bn as i,B as c,aC as p,aA as m,_ as y}from"./common.5a7f0626.js";import{_ as b,e as v,s as h}from"./read.03cd8dda.js";const g=e=>(p("data-v-17499b3c"),e=e(),m(),e),_=g((()=>y("div",{id:"pieChart",class:"chart"},null,-1))),x=g((()=>y("div",{id:"histogram",class:"chart"},null,-1)));var k=b(e({__name:"index",setup(e){const p=window.mapWork,m=a(""),y=a("1"),b=t((()=>g.value.length>0)),g=a([]);p.eventTarget.on("tableData",(function(e){const a=[],t=[],l=[],o=[];e.list.forEach(((e,r)=>{l.push(e.type),o.push(e.area),a.push({name:e.type,value:e.area}),t.push({key:r,index:r+1,type:e.type,num:e.count,area:e.area})})),g.value=t;const r=document.getElementById("pieChart"),n=v(r),f={title:{text:"饼状图",left:"center",textStyle:{color:"#ffffff"}},tooltip:{trigger:"item",confine:!0,formatter:"{a} <br/>{b} : {c} 亩</br>占比 : {d}%",backgroundColor:"rgba(63, 72, 84, 0.7)",textStyle:{color:"#ffffff"}},series:[{name:"用地面积",type:"pie",radius:"50%",data:a,textStyle:{color:"#ffffff"},emphasis:{itemStyle:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}]};n.setOption(f);const d=document.getElementById("histogram"),s=v(d),u={tooltip:{trigger:"item",confine:!0,backgroundColor:"rgba(63, 72, 84, 0.7)",formatter:"{b}: {c} 亩",textStyle:{color:"#ffffff"}},title:{text:"柱状图",left:"center",textStyle:{color:"#ffffff"}},grid:{left:"3%",right:"15%",bottom:"3%",containLabel:!0},xAxis:{type:"value",boundaryGap:[0,.01],show:!1},yAxis:{type:"category",data:l,axisLabel:{textStyle:{color:" #ffffff"}}},series:[{type:"bar",data:o,itemStyle:{normal:{label:{show:!0,position:"right",textStyle:{color:"#ffffff"}}}}}]};s.setOption(u)}));const k=a([{title:"序号",dataIndex:"index",width:45,key:"index"},{title:"类别",dataIndex:"type",key:"type"},{title:"数量",dataIndex:"num",width:60,key:"num"},{title:"面积(亩)",dataIndex:"area",width:80,key:"area"}]),w=()=>{p.drawRectangle()},C=()=>{p.drawCircle()},S=()=>{p.drawPolygon()},I=()=>{g.value=[],p.queryData(m.value)},B=()=>{g.value=[],p.clearAll()},A=a(0);return l((()=>{h((e=>{A.value=e}),400)})),(e,a)=>{const t=o("mars-input"),l=o("a-form-item"),p=o("mars-button"),v=o("a-space"),h=o("mars-table"),R=o("a-tab-pane"),E=o("a-tabs"),K=o("a-form"),O=o("mars-dialog");return r(),n(O,{visible:!0,right:"10",top:"10",width:"350"},{default:f((()=>[d(K,null,{default:f((()=>[d(l,{label:"名称"},{default:f((()=>[d(t,{class:"inputServe",value:m.value,"onUpdate:value":a[0]||(a[0]=e=>m.value=e),placeholder:"请输入查询关键字"},null,8,["value"])])),_:1}),d(l,{label:"范围"},{default:f((()=>[d(v,null,{default:f((()=>[d(p,{onClick:w},{default:f((()=>[s("框选范围")])),_:1}),d(p,{onClick:C},{default:f((()=>[s("圆形范围")])),_:1}),d(p,{onClick:S},{default:f((()=>[s("多边形范围")])),_:1})])),_:1})])),_:1}),d(l,{label:"操作"},{default:f((()=>[d(v,null,{default:f((()=>[d(p,{onClick:I},{default:f((()=>[s("查询")])),_:1}),d(p,{onClick:B},{default:f((()=>[s("清除")])),_:1})])),_:1})])),_:1}),u(d(l,null,{default:f((()=>[d(E,{activeKey:y.value,"onUpdate:activeKey":a[1]||(a[1]=e=>y.value=e),centered:!0,tabBarGutter:55},{default:f((()=>[d(R,{key:"1",tab:"表格","force-render":"",forceRender:!0},{default:f((()=>[d(l,null,{default:f((()=>[d(h,{pagination:!1,dataSource:g.value,columns:k.value,scroll:{y:A.value},size:"small",bordered:""},null,8,["dataSource","columns","scroll"])])),_:1})])),_:1}),d(R,{key:"2",tab:"饼状图",forceRender:!0},{default:f((()=>[_])),_:1}),d(R,{key:"3",tab:"柱状图",forceRender:!0},{default:f((()=>[x])),_:1})])),_:1},8,["activeKey"])])),_:1},512),[[i,c(b)]])])),_:1})])),_:1})}}}),[["__scopeId","data-v-17499b3c"]]);export{k as default};