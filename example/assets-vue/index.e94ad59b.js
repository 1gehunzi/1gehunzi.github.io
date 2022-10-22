import{_ as e,m as a,S as t,aI as l,u as n,r as o,o as r,c as i,f as u,z as s,a as d,i as c,w as p,j as h,t as x,F as v,p as m,l as _}from"./common.10acb102.js";const f={class:"infoView-content"},b={class:"f-mb"},g=(e=>(m("data-v-eb315bfe"),e=e(),_(),e))((()=>d("span",null,"模型URL地址: ",-1))),y={class:"f-mb"},k={class:"popup-notification"},U={class:"f-tac"};var C=e(a({__name:"index",setup(e){const a=window.mapWork,m=t({txtModel:"//data.mars3d.cn/3dtiles/max-fsdzm/tileset.json",chkProxy:!1,txtX:0,txtY:0,txtZ:0,depthTestAgainstTerrain:!1,rotationZ:0,rotationX:0,rotationY:0,scale:1,axis:"",maximumScreenSpaceError:8,opacity:1,highlightEnable:!1,popupEnable:!0}),_=[{value:"",label:"默认"},{value:"Z_UP_TO_X_UP",label:"Z轴 -> X轴"},{value:"Z_UP_TO_Y_UP",label:"Z轴 --\x3eY轴"},{value:"X_UP_TO_Y_UP",label:"X轴 --\x3eY轴"},{value:"X_UP_TO_Z_UP",label:"X轴 --\x3eZ轴"},{value:"Y_UP_TO_X_UP",label:"Y轴 --\x3eX轴"},{value:"Y_UP_TO_Z_UP",label:"Y轴 --\x3eZ轴"}],C={span:9};function T(){return{name:"模型名称",type:"3dtiles",url:m.txtModel,maximumScreenSpaceError:m.maximumScreenSpaceError,position:{lat:m.txtY,lng:m.txtX,alt:m.txtZ},rotation:{x:m.rotationX,y:m.rotationY,z:m.rotationZ},scale:m.scale,axis:m.axis?m.axis:void 0,proxy:m.chkProxy?"//server.mars3d.cn/proxy/":void 0,opacity:m.opacity,show:!0}}l((()=>{a.showModel(m.txtModel)})),a.eventTarget.on("tiles3dLayerLoad",(function(e){const t=e.layer,l=t.center;(l.alt<-1e3||l.alt>1e4)&&(l.alt=0),m.txtX=Number(l.lng.toFixed(6)),m.txtY=Number(l.lat.toFixed(6)),m.txtZ=Number(l.alt.toFixed(6)),m.maximumScreenSpaceError=t.tileset.maximumScreenSpaceError,t.transform?(m.rotationX=Number(t.rotation_x.toFixed(1)),m.rotationY=Number(t.rotation_y.toFixed(1)),m.rotationZ=Number(t.rotation_z.toFixed(1)),m.scale=t.scale||1,m.axis=t.axis):a.updateHeightForSurfaceTerrain(l)})),a.eventTarget.on("changePoition",(function(e){m.txtX=e.center.lng,m.txtY=e.center.lat,m.txtZ=e.center.alt,m.rotationX=e.rotation.x,m.rotationY=e.rotation.y,m.rotationZ=e.rotation.z})),a.eventTarget.on("changeHeight",(function(e){m.txtZ=e.alt}));const Z=()=>{a.showModel(m.txtModel),m.opacity=1,m.highlightEnable=!1,m.popupEnable=!0},X=()=>{a.updateModel(T(),m)},Y=()=>{a.updateDepthTest(m.depthTestAgainstTerrain)},P=()=>{a.locate()},w=()=>{a.saveBookmark(T())},E=n(),S=n([]),M=n(!1),F=()=>{M.value=!0,a.showCompTree(m.txtModel)};function A(e,a){if(!e.children)return;const t=e.children,l=[];return t.forEach(((e,t)=>{const n=A(e,++t);return l.push({title:e.name,key:a+"-"+t,id:e.eleid,sphere:e.sphere,children:n}),l})),l}a.eventTarget.on("compTree",(function(e){e.data.forEach(((e,a)=>{const t=A(e,a);E.value=[{title:e.name,key:a,id:e.eleid,sphere:e.sphere,children:t}],S.value.push(a)}))}));const N=n(!1),O=(e,t)=>{N.value=!0,a.compModelChange(t.node.id,t.node.sphere)},z=()=>{N.value=!1,a.checkedTree()};return(e,a)=>{const t=o("mars-button"),l=o("mars-input"),n=o("a-checkbox"),T=o("a-collapse-panel"),A=o("mars-input-number"),K=o("a-form-item"),L=o("a-col"),j=o("a-row"),H=o("mars-select"),I=o("mars-slider"),R=o("mars-switch"),B=o("a-collapse"),D=o("a-space"),V=o("a-form"),W=o("mars-dialog"),q=o("mars-tree");return r(),i(v,null,[u(W,{visible:!0,right:"10",top:"10"},{default:s((()=>[d("div",f,[u(V,{"label-col":C,labelAlign:"right"},{default:s((()=>[u(B,{collapsible:"header",defaultActiveKey:["1","2","3","4"]},{default:s((()=>[u(T,{key:"1",header:"模型URL地址"},{extra:s((()=>[u(t,{onClick:F},{default:s((()=>[c("查看构件")])),_:1})])),default:s((()=>[d("div",b,[g,c("    "),u(l,{value:m.txtModel,"onUpdate:value":a[0]||(a[0]=e=>m.txtModel=e),style:{width:"100%"}},null,8,["value"])]),d("div",y,[u(t,{onClick:Z},{default:s((()=>[c("加载模型")])),_:1}),c("    "),u(n,{checked:m.chkProxy,"onUpdate:checked":a[1]||(a[1]=e=>m.chkProxy=e)},{default:s((()=>[c("使用代理")])),_:1},8,["checked"])])])),_:1}),u(T,{key:"2",header:"模型位置"},{extra:s((()=>[u(t,{onClick:P},{default:s((()=>[c("定位至模型")])),_:1})])),default:s((()=>[u(K,{label:"经度",labelCol:{span:4}},{default:s((()=>[u(A,{value:m.txtX,"onUpdate:value":a[2]||(a[2]=e=>m.txtX=e),step:1e-6,onChange:X,style:{width:"100%"}},null,8,["value","step"])])),_:1}),u(K,{label:"纬度",labelCol:{span:4}},{default:s((()=>[u(A,{value:m.txtY,"onUpdate:value":a[3]||(a[3]=e=>m.txtY=e),step:1e-6,onChange:X,style:{width:"100%"}},null,8,["value","step"])])),_:1}),u(K,{label:"高度",labelCol:{span:4}},{default:s((()=>[u(j,{gutter:10},{default:s((()=>[u(L,{span:14},{default:s((()=>[u(A,{value:m.txtZ,"onUpdate:value":a[4]||(a[4]=e=>m.txtZ=e),step:.1,onChange:X},null,8,["value","step"])])),_:1}),u(L,{span:10},{default:s((()=>[u(n,{checked:m.depthTestAgainstTerrain,"onUpdate:checked":a[5]||(a[5]=e=>m.depthTestAgainstTerrain=e),onChange:Y},{default:s((()=>[c("深度检测")])),_:1},8,["checked"])])),_:1})])),_:1})])),_:1})])),_:1}),u(T,{key:"3",header:"模型方向"},{default:s((()=>[u(K,{label:"变换垂直轴"},{default:s((()=>[u(H,{value:m.axis,"onUpdate:value":a[6]||(a[6]=e=>m.axis=e),onChange:X,options:_},null,8,["value"])])),_:1}),u(K,{label:"绕X轴旋转模型"},{default:s((()=>[u(A,{value:m.rotationX,"onUpdate:value":a[7]||(a[7]=e=>m.rotationX=e),step:.1,onChange:X,style:{width:"100%"}},null,8,["value","step"])])),_:1}),u(K,{label:"绕Y轴旋转模型"},{default:s((()=>[u(A,{value:m.rotationY,"onUpdate:value":a[8]||(a[8]=e=>m.rotationY=e),step:.1,onChange:X,style:{width:"100%"}},null,8,["value","step"])])),_:1}),u(K,{label:"绕Z轴旋转模型"},{default:s((()=>[u(A,{value:m.rotationZ,"onUpdate:value":a[9]||(a[9]=e=>m.rotationZ=e),step:.1,onChange:X,style:{width:"100%"}},null,8,["value","step"])])),_:1})])),_:1}),u(T,{key:"4",header:"其他参数"},{default:s((()=>[u(K,{label:"缩放比例"},{default:s((()=>[u(A,{value:m.scale,"onUpdate:value":a[10]||(a[10]=e=>m.scale=e),step:.1,onChange:X},null,8,["value","step"])])),_:1}),u(K,{label:"显示精度"},{default:s((()=>[u(I,{min:1,max:30,value:m.maximumScreenSpaceError,"onUpdate:value":a[11]||(a[11]=e=>m.maximumScreenSpaceError=e),onChange:X},null,8,["value"])])),_:1}),u(K,{label:"透明度"},{default:s((()=>[u(I,{min:.1,max:1,step:.1,value:m.opacity,"onUpdate:value":a[12]||(a[12]=e=>m.opacity=e),onChange:X},null,8,["min","step","value"])])),_:1}),u(K,{label:"单击高亮构件"},{default:s((()=>[u(R,{checked:m.highlightEnable,"onUpdate:checked":a[13]||(a[13]=e=>m.highlightEnable=e),onChange:X},null,8,["checked"]),d("span",k,[c(" 单击Popup弹窗: "),u(R,{checked:m.popupEnable,"onUpdate:checked":a[14]||(a[14]=e=>m.popupEnable=e),onChange:X},null,8,["checked"])])])),_:1})])),_:1})])),_:1}),d("div",U,[u(D,null,{default:s((()=>[u(t,{onClick:w},{default:s((()=>[c("保存参数")])),_:1})])),_:1})])])),_:1})])])),_:1}),u(W,{left:"10",top:"10",bottom:"40",width:"350",title:"查看控件",visible:M.value,"onUpdate:visible":a[16]||(a[16]=e=>M.value=e)},{default:s((()=>[p(u(t,{onClick:z},{default:s((()=>[c("取消选中")])),_:1},512),[[h,N.value]]),u(q,{onSelect:O,expandedKeys:S.value,"onUpdate:expandedKeys":a[15]||(a[15]=e=>S.value=e),"tree-data":E.value},{title:s((({title:e})=>[d("span",null,x(e),1)])),_:1},8,["expandedKeys","tree-data"])])),_:1},8,["visible"])],64)}}}),[["__scopeId","data-v-eb315bfe"]]);export{C as default};
