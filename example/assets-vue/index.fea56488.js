import{_ as a,m as e,u as l,aI as s,r as t,o as n,q as u,z as c,a as d,f as o,i,t as v,p as r,l as m}from"./common.10acb102.js";const f=a=>(r("data-v-0c4072da"),a=a(),m(),a),k=f((()=>d("div",{class:"f-mb"},[d("span",null,"3dtile模型移动(只适合小范围内的偏移 笛卡尔坐标方向，非贴球面)")],-1))),_={class:"f-mb"},p=f((()=>d("span",{class:"mars-pannel-item-label"},"模型URL:",-1))),b={class:"f-mb"},h=f((()=>d("span",null,"设置移动步长:",-1))),C={class:"f-mb"},x=f((()=>d("span",{class:"mars-pannel-item-label"},"按步长移动:",-1))),g=f((()=>d("span",{class:"mars-pannel-item-label"},"当前偏移量: ",-1))),w=f((()=>d("span",{class:"mars-pannel-item-label"},null,-1)));var y=a(e({__name:"index",setup(a){const e=window.mapWork,r=l(),m=l("x:0.0 y:0.0 z:0.0"),f=l(!1),y=l(!1);s((()=>{const a=localStorage.getItem("3dtiles_move");r.value=a||"//data.mars3d.cn/3dtiles/qx-dyt/tileset.json",setTimeout((()=>{e.showModel(r.value)}),1e3)}));const z=()=>{localStorage.setItem("3dtiles_move",r.value),e.showModel(r.value)};let T=0,I=0,U=0,F=1;const j=a=>{switch(a){case 0:T+=F;break;case 1:T-=F;break;case 2:I+=F;break;case 3:I-=F;break;case 4:U+=F;break;case 5:U-=F}m.value="x:"+T.toFixed(1)+" y:"+I.toFixed(1)+" z:"+U.toFixed(1),e.setTranslation(T,I,U)},q=()=>{e.chkHasTerrain(f.value)},M=()=>{e.chkTestTerrain(y.value)},S=a=>{F=a};return(a,e)=>{const l=t("mars-input"),s=t("mars-button"),T=t("a-space"),I=t("a-checkbox"),U=t("mars-dialog");return n(),u(U,{visible:!0,right:"10",top:"10"},{default:c((()=>[k,d("div",_,[o(T,null,{default:c((()=>[p,o(l,{class:"model-input",value:r.value,"onUpdate:value":e[0]||(e[0]=a=>r.value=a)},null,8,["value"]),o(s,{class:"model-button",onClick:z},{default:c((()=>[i("加载模型")])),_:1})])),_:1})]),d("div",b,[o(T,null,{default:c((()=>[h,o(s,{onClick:e[1]||(e[1]=a=>S(.1)),value:""},{default:c((()=>[i("0.1")])),_:1}),o(s,{onClick:e[2]||(e[2]=a=>S(1)),value:"1"},{default:c((()=>[i("1")])),_:1}),o(s,{onClick:e[3]||(e[3]=a=>S(10)),value:"10"},{default:c((()=>[i("10")])),_:1}),o(s,{onClick:e[4]||(e[4]=a=>S(100)),value:"100"},{default:c((()=>[i("100")])),_:1})])),_:1})]),d("div",C,[o(T,null,{default:c((()=>[x,o(s,{onClick:e[5]||(e[5]=a=>j(0))},{default:c((()=>[i("x+")])),_:1}),o(s,{onClick:e[6]||(e[6]=a=>j(1))},{default:c((()=>[i("x-")])),_:1}),o(s,{onClick:e[7]||(e[7]=a=>j(2))},{default:c((()=>[i("y+")])),_:1}),o(s,{onClick:e[8]||(e[8]=a=>j(3))},{default:c((()=>[i("y-")])),_:1}),o(s,{onClick:e[9]||(e[9]=a=>j(4))},{default:c((()=>[i("z+")])),_:1}),o(s,{onClick:e[10]||(e[10]=a=>j(5))},{default:c((()=>[i("z-")])),_:1})])),_:1})]),d("div",null,[o(T,null,{default:c((()=>[g,i(v(m.value),1)])),_:1})]),d("div",null,[o(T,null,{default:c((()=>[w,o(I,{onChange:q,checked:f.value,"onUpdate:checked":e[11]||(e[11]=a=>f.value=a)},{default:c((()=>[i("是否有地形")])),_:1},8,["checked"]),o(I,{onChange:M,checked:y.value,"onUpdate:checked":e[12]||(e[12]=a=>y.value=a)},{default:c((()=>[i("是否深度检测")])),_:1},8,["checked"])])),_:1})])])),_:1})}}}),[["__scopeId","data-v-0c4072da"]]);export{y as default};
