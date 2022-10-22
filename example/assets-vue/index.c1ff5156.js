import{_ as e,m as a,u as l,r as u,o as t,c as o,f as i,z as n,a as r,i as v,q as s,bt as d,h as c,t as f,F as p}from"./common.10acb102.js";import{e as g}from"./style.0a538c9f.js";const h={class:"f-mb"},m={class:"f-tac"};var _=e(a({__name:"index",setup(e){const a=window.mapWork,_=l(!1),b=[{title:"户型",dataIndex:"houseType"},{title:"总层数",dataIndex:"floorCount",align:"center"},{title:"操作",dataIndex:"option"}],C=l(1),H=l([]),k=l(0),I=l(0),x=l(0),w=l(0),G=l([]),A=l(!1),D=l(!1),y=l(""),z=()=>{console.log("drawGraphicId应该是绘制的值",y.value);const e=a.produceData(y.value,G.value,C.value,k.value,I.value);y.value="",console.log("生成的数据produceObj",e),e&&(x.value++,H.value.push({houseType:x.value+"号户型",floorCount:e.floorCount,floorHeight:e.floorHeight,minHeight:e.minHeight,maxHeight:e.maxHeight,position:G.value,generateGraphicIdArr:e.generateGraphicIdArr}),D.value=!1,A.value=!0),console.log("表格数据",H.value)},q=()=>{if(A.value)return j();if(!D.value&&0===G.value.length)return g("请先绘制区域");if(0===I.value)return g("最高高度不能为0");if(0===k.value)return g("最低高度不能为0");if(0!==H.value.length){let e;for(let l=0;l<H.value.length;l++)if(e=H.value[l],console.log("item",e,e.position[0][0],w.value),e.position[0][0]===w.value){console.log("jingru zheli"),e.floorCount=C.value;const l=a.produceData(y.value,e.position,C.value,k.value,I.value,e.generateGraphicIdArr);if(y.value="",l){e.generateGraphicIdArr=l.generateGraphicIdArr;break}}z()}else z()},j=()=>{H.value.forEach((e=>{if(e.position[0][0]===w.value){console.log("编辑之后",C.value),e.floorCount=C.value;const l=a.produceData(y.value,e.position,C.value,k.value,I.value,e.generateGraphicIdArr);l&&(e.generateGraphicIdArr=l.generateGraphicIdArr,e.maxHeight=l.maxHeight,e.minHeight=l.minHeight,e.floorCount=l.floorCount,e.floorHeight=l.floorHeight)}}))},E=()=>{T(),a.addData().then((e=>{y.value=e.id,G.value=[],e.points.forEach((e=>{G.value.push([e.lng,e.lat])})),w.value=G.value[0][0],D.value=!0}))},T=()=>{I.value=0,k.value=0,C.value=1,A.value=!1},U=()=>{a.getBuildingHeight().then((e=>{k.value=e.height}))},B=()=>{a.getBuildingHeight().then((e=>{I.value=e.height}))},F=()=>{y.value&&(a.quitDraw(y.value),D.value=!1,G.value=[])},O=()=>{T(),a.quitDraw(y.value),_.value=!1,D.value=!1,A.value=!1,G.value=[],y.value=""},P=()=>{C.value=parseInt(C.value+""),1*C.value<=0&&(g("层数最少为1层"),C.value=1)};return(e,l)=>{const g=u("mars-button"),x=u("a-space"),y=u("mars-icon"),z=u("mars-table"),j=u("mars-dialog"),S=u("a-col"),W=u("a-row"),J=u("a-form-item"),K=u("mars-input-number"),L=u("a-form");return t(),o(p,null,[i(j,{visible:!0,right:"10",top:"10",width:"300"},{default:n((()=>[r("div",h,[i(x,null,{default:n((()=>[i(g,{onClick:l[0]||(l[0]=e=>_.value=!0),disabled:_.value},{default:n((()=>[v("新增")])),_:1},8,["disabled"])])),_:1})]),i(z,{size:"small",bordered:"",columns:b,pagination:{pageSize:4},"data-source":H.value},{bodyCell:n((({column:e,record:l})=>["option"===e.dataIndex?(t(),s(x,{key:0},{default:n((()=>[i(y,{icon:"aiming",color:"#f2f2f2",class:"icon-vertical-a",title:"定位",onClick:d((e=>{return u=l,console.log(u.position),void a.map.flyToPositions(u.position);var u}),["stop"])},null,8,["onClick"]),i(y,{icon:"edit",color:"#f2f2f2",class:"icon-vertical-a",title:"编辑",onClick:d((e=>{return a=l,A.value=!0,I.value=a.maxHeight,k.value=a.minHeight,C.value=a.floorCount,_.value=!0,G.value=a.position,void(w.value=G.value[0][0]);var a}),["stop"])},null,8,["onClick"]),i(y,{icon:"delete",color:"#f2f2f2",class:"icon-vertical-a",title:"删除",onClick:d((e=>{return u=l,console.log("删除房型",u,H.value),H.value=H.value.filter((e=>e.position[0][0]!==u.position[0][0]||(e.generateGraphicIdArr.forEach((e=>{a.quitDraw(e)})),!1))),void(A.value&&(_.value=!1,A.value=!1,T()));var u}),["stop"])},null,8,["onClick"])])),_:2},1024)):c("",!0)])),_:1},8,["data-source"])])),_:1}),i(j,{visible:_.value,right:"10",top:"400",width:"300"},{default:n((()=>[i(L,{"label-col":{span:6},"wrapper-col":{span:18}},{default:n((()=>[i(J,{label:"边界"},{default:n((()=>[i(W,{gutter:5,align:"middle"},{default:n((()=>[i(S,{span:8},{default:n((()=>[r("span",null,f(G.value&&G.value.length>0?"已绘制":"无"),1)])),_:1}),i(S,{span:14},{default:n((()=>[i(g,{onClick:E,disabled:A.value||D.value},{default:n((()=>[v("绘制")])),_:1},8,["disabled"]),i(g,{class:"quitDraw",disabled:A.value,onClick:F},{default:n((()=>[v("清除")])),_:1},8,["disabled"])])),_:1})])),_:1})])),_:1}),i(J,{label:"最低高",name:"minHeight"},{default:n((()=>[i(W,{gutter:5},{default:n((()=>[i(S,{span:15},{default:n((()=>[i(K,{value:k.value,"onUpdate:value":l[1]||(l[1]=e=>k.value=e)},null,8,["value"])])),_:1}),i(S,{span:5},{default:n((()=>[i(x,{size:"small"},{default:n((()=>[i(g,{class:"small-btn",onClick:U},{default:n((()=>[v("拾取")])),_:1})])),_:1})])),_:1})])),_:1})])),_:1}),i(J,{label:"最高高",name:"maxHeight"},{default:n((()=>[i(W,{gutter:5},{default:n((()=>[i(S,{span:15},{default:n((()=>[i(K,{value:I.value,"onUpdate:value":l[2]||(l[2]=e=>I.value=e)},null,8,["value"])])),_:1}),i(S,{span:5},{default:n((()=>[i(x,{size:"small"},{default:n((()=>[i(g,{class:"small-btn",onClick:B},{default:n((()=>[v("拾取")])),_:1})])),_:1})])),_:1})])),_:1})])),_:1}),i(J,{label:"层数",name:"floorCount"},{default:n((()=>[i(W,{gutter:5},{default:n((()=>[i(S,{span:15},{default:n((()=>[i(K,{value:C.value,"onUpdate:value":l[3]||(l[3]=e=>C.value=e),onChange:P},null,8,["value"])])),_:1})])),_:1})])),_:1}),r("div",m,[i(x,null,{default:n((()=>[i(g,{onClick:q},{default:n((()=>[v("生成")])),_:1}),i(g,{onClick:O},{default:n((()=>[v("退出")])),_:1})])),_:1})])])),_:1})])),_:1},8,["visible"])],64)}}}),[["__scopeId","data-v-1927e84a"]]);export{_ as default};
