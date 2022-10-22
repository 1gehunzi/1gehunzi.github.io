import{_ as a}from"./read.03cd8dda.js";import{d as e,s as l,r as t,aH as d,o as n,c as s,a5 as u,b2 as i,_ as m,a4 as o,I as r,Z as v,M as c,aC as _,aA as p}from"./common.5a7f0626.js";const b=a=>(_("data-v-654e0140"),a=a(),p(),a),f={class:"f-mb"},h=b((()=>m("span",{class:"mars-pannel-item-label"},"视椎体状态:",-1))),g={class:"f-mb"},x=b((()=>m("span",{class:"mars-pannel-item-label"},"类型:",-1))),w={class:"f-mb"},C=b((()=>m("span",{class:"mars-pannel-item-label"},"前后侧摆:",-1))),k={class:"f-mb"},S=b((()=>m("span",{class:"mars-pannel-item-label"},"左右侧摆:",-1))),j={class:"f-mb"},M=b((()=>m("span",{class:"mars-pannel-item-label"},"夹角1:",-1))),U={key:0,class:"f-mb"},T=b((()=>m("span",{class:"mars-pannel-item-label"},"夹角2:",-1))),y={class:"f-mb"},E=b((()=>m("span",{class:"mars-pannel-item-label"},"参考系轴:",-1))),I={class:"mars-table tb-border"},L=b((()=>m("td",{class:"nametd"},"名称",-1))),P={id:"td_name"},A=b((()=>m("td",{class:"nametd"},"TLE1",-1))),D={id:"td_tle1"},G=b((()=>m("td",{class:"nametd"},"TLE2",-1))),H={id:"td_tle2"},W=b((()=>m("td",{class:"nametd"},"时间",-1))),Z={id:"td_time"},q=b((()=>m("td",{class:"nametd"},"经度",-1))),z={id:"td_jd"},B=b((()=>m("td",{class:"nametd"},"经度",-1))),F={id:"td_wd"},J=b((()=>m("td",{class:"nametd"},"高程",-1))),K={id:"td_gd"};var N=a(e({__name:"index",setup(a){const e=window.mapWork,_=l("2"),p=l(30),b=l(20),N=l(0),O=l(0),Q=t({enabledShowMatrix:!1,enabledSee:!1,name:"",tle1:"",tle2:"",time:"",td_jd:0,td_wd:0,td_gd:"0米"});e.eventTarget.on("satelliteChange",(function(a){const e=a.weixinData;Q.name=e.name,Q.tle1=e.tle1,Q.tle2=e.tle2,Q.time=e.time,Q.td_jd=e.td_jd,Q.td_wd=e.td_wd,Q.td_gd=e.td_gd}));const R=()=>{e.pitchChange(N.value)},V=()=>{e.rollChange(O.value)},X=()=>{e.angle1(p.value)},Y=()=>{e.angle2(b.value)},$=()=>{e.locate()},aa=()=>{e.chkShowModelMatrix(Q.enabledShowMatrix)},ea=()=>{e.chkSensorType(_.value)};return(a,l)=>{const t=d("mars-button"),la=d("a-space"),ta=d("a-radio"),da=d("a-radio-group"),na=d("mars-slider"),sa=d("a-checkbox"),ua=d("mars-dialog");return n(),s(c,null,[u(ua,{visible:!0,right:"10",top:"10"},{default:i((()=>[m("div",f,[u(la,null,{default:i((()=>[h,u(t,{onClick:$},{default:i((()=>[o("定位至卫星")])),_:1}),u(t,{onClick:l[0]||(l[0]=a=>{return l=Q.enabledSee,Q.enabledSee=!l,l||e.selPoint(),void e.selPoint();var l})},{default:i((()=>[o(r(Q.enabledSee?"取消凝视":"凝视"),1)])),_:1})])),_:1})]),m("div",g,[u(la,null,{default:i((()=>[x,u(da,{value:_.value,"onUpdate:value":l[1]||(l[1]=a=>_.value=a),name:"radioGroup",onChange:ea},{default:i((()=>[u(ta,{value:"1"},{default:i((()=>[o("圆锥体")])),_:1}),u(ta,{value:"2"},{default:i((()=>[o("四棱锥体")])),_:1})])),_:1},8,["value"])])),_:1})]),m("div",w,[u(la,null,{default:i((()=>[C,u(na,{onChange:R,value:N.value,"onUpdate:value":l[2]||(l[2]=a=>N.value=a),min:-180,max:180,step:1},null,8,["value"]),o("值"+r(N.value),1)])),_:1})]),m("div",k,[u(la,null,{default:i((()=>[S,u(na,{onChange:V,value:O.value,"onUpdate:value":l[3]||(l[3]=a=>O.value=a),min:-180,max:180,step:1},null,8,["value"]),o("值"+r(O.value),1)])),_:1})]),m("div",j,[u(la,null,{default:i((()=>[M,u(na,{onChange:X,value:p.value,"onUpdate:value":l[4]||(l[4]=a=>p.value=a),min:1,max:89,step:.01},null,8,["value","step"]),o("值"+r(p.value),1)])),_:1})]),"2"===_.value?(n(),s("div",U,[u(la,null,{default:i((()=>[T,u(na,{onChange:Y,value:b.value,"onUpdate:value":l[5]||(l[5]=a=>b.value=a),min:1,max:89,step:.01},null,8,["value","step"]),o("值"+r(b.value),1)])),_:1})])):v("",!0),m("div",y,[u(la,null,{default:i((()=>[E,u(sa,{checked:Q.enabledShowMatrix,"onUpdate:checked":l[6]||(l[6]=a=>Q.enabledShowMatrix=a),onChange:aa},{default:i((()=>[o("显示/隐藏")])),_:1},8,["checked"])])),_:1})])])),_:1}),u(ua,{visible:!0,right:"10",bottom:"60px"},{default:i((()=>[m("table",I,[m("tr",null,[L,m("td",P,r(Q.name),1)]),m("tr",null,[A,m("td",D,r(Q.tle1),1)]),m("tr",null,[G,m("td",H,r(Q.tle2),1)]),m("tr",null,[W,m("td",Z,r(Q.time),1)]),m("tr",null,[q,m("td",z,r(Q.td_jd),1)]),m("tr",null,[B,m("td",F,r(Q.td_wd),1)]),m("tr",null,[J,m("td",K,r(Q.td_gd),1)])])])),_:1})],64)}}}),[["__scopeId","data-v-654e0140"]]);export{N as default};