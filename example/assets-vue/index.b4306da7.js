import{_ as a,m as l,u as e,aI as t,r as u,o as n,q as c,z as i,f as o,i as m,c as v,F as p,b as d,a as s,t as r}from"./common.10acb102.js";var f=a(l({__name:"index",setup(a){const l=window.mapWork,f=e(["1","2","3"]),_=e({lng:0,lat:0,alt:0,heading:0,pitch:0,roll:0});t((()=>{_.value=l.map.getCameraView(),_.value.roll=0,l.map.on("cameraChanged",(function(a){_.value=l.map.getCameraView({simplify:!1})}))}));const b=()=>{l.changeView1()},k=()=>{l.changeView2()},g=()=>{l.changeView3()},h=()=>{l.changeView4()},w=[{name:"获取当前地图视角",title:"",callback:()=>l.mapGetCameraView()},{name:"停止视角定位",title:"",callback:()=>l.mapCancelFlyTo()},{name:"飞行至默认视角",title:"默认视角一般为config.json中的center参数配置的视角",callback:()=>l.mapFlyHome()},{name:"定位至指定位置",title:"",callback:()=>l.mapSetCameraView()},{name:"定位至矩形区域处",title:"",callback:()=>l.mapFlyToExtent()},{name:"定位至目标点",title:"",callback:()=>l.mapFlyToPoint()},{name:"定位至坐标数组处",title:"",callback:()=>l.mapFlyToPositions()},{name:"定位至矢量数据",title:"",callback:()=>l.mapFlyToGraphic()},{name:"按序播放多个相机位置",title:"",callback:()=>l.mapSetCameraViewList()}];return(a,l)=>{const e=u("mars-button"),t=u("a-space"),y=u("a-collapse-panel"),C=u("mars-input"),V=u("a-form-item"),F=u("a-form"),U=u("a-collapse"),T=u("mars-dialog");return n(),c(T,{visible:!0,right:"10",top:"10"},{default:i((()=>[o(U,{activeKey:f.value,"onUpdate:activeKey":l[6]||(l[6]=a=>f.value=a)},{default:i((()=>[o(y,{key:"1",header:"景点视角:"},{default:i((()=>[o(t,null,{default:i((()=>[o(e,{onClick:b},{default:i((()=>[m("故宫")])),_:1}),o(e,{onClick:k},{default:i((()=>[m("珠峰")])),_:1}),o(e,{onClick:g},{default:i((()=>[m("华山")])),_:1}),o(e,{onClick:h},{default:i((()=>[m("大别山")])),_:1})])),_:1})])),_:1}),o(y,{key:"2",header:"相机和视角控制演示:",class:"cameraView"},{default:i((()=>[o(t,null,{default:i((()=>[(n(),v(p,null,d(w,((a,l)=>s("div",{key:l},[o(e,{title:a.title,onClick:a.callback},{default:i((()=>[m(r(a.name),1)])),_:2},1032,["title","onClick"])]))),64)),o(F,{"label-col":{span:6},"wrapper-col":{span:18}},{default:i((()=>[o(V,{label:"经度值"},{default:i((()=>[o(C,{value:_.value.lng,"onUpdate:value":l[0]||(l[0]=a=>_.value.lng=a)},null,8,["value"])])),_:1}),o(V,{label:"维度值"},{default:i((()=>[o(C,{value:_.value.lat,"onUpdate:value":l[1]||(l[1]=a=>_.value.lat=a)},null,8,["value"])])),_:1}),o(V,{label:"高度值"},{default:i((()=>[o(C,{value:_.value.alt,"onUpdate:value":l[2]||(l[2]=a=>_.value.alt=a)},null,8,["value"])])),_:1}),o(V,{label:"方向角"},{default:i((()=>[o(C,{value:_.value.heading,"onUpdate:value":l[3]||(l[3]=a=>_.value.heading=a)},null,8,["value"])])),_:1}),o(V,{label:"俯仰角"},{default:i((()=>[o(C,{value:_.value.pitch,"onUpdate:value":l[4]||(l[4]=a=>_.value.pitch=a)},null,8,["value"])])),_:1}),o(V,{label:"翻滚角"},{default:i((()=>[o(C,{value:_.value.roll,"onUpdate:value":l[5]||(l[5]=a=>_.value.roll=a)},null,8,["value"])])),_:1})])),_:1})])),_:1})])),_:1})])),_:1},8,["activeKey"])])),_:1})}}}),[["__scopeId","data-v-4c67b40e"]]);export{f as default};
