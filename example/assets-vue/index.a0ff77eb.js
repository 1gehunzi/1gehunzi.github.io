import{L as e}from"./layer-state.11e2f61e.js";import{m as t,u as a,aI as l,n as s,r as o,o as n,c as i,f as c,z as d,i as u,a as r,t as h,F as f}from"./common.10acb102.js";import"./style.795f3750.js";const p={class:"f-pt"},_=["title"],y=t({__name:"index",setup(t){const y=window.mapWork,v=a([{title:"全部",key:0,id:-1,children:[]}]),m=a([]),k=a([]);k.value.push(0);let w={};l((()=>{y.treeEvent.on("tree",(function(e){v.value[0].children=[],w={};const t=[],a=[],l=e.treeData;for(let s=0;s<l.length;s++){const e=l[s];if(e){const l="01-"+Math.random();t.push({title:e.name||"未命名",key:l,id:e._entity._id}),e._entity.show&&a.push(l),w[e._entity._id]=e._entity}}v.value[0].children=t,s((()=>{m.value=a}))}))}));const b=(e,t)=>{const a=t.checked,l=w[t.node.id];-1!==t.node.id?(l.show=a,l._labelEx&&(l._labelEx.show=a),null!=l&&y.flyToEntity()):Object.keys(w).forEach((e=>{const t=w[e];t.show=a,t._labelEx&&(t._labelEx.show=a)}))};const x=()=>{m.value=[],y.shoRailway()},E=()=>{m.value=[],y.showExpressway()},C=()=>{m.value=[],y.showMeteorological()},K=()=>{m.value=[],y.showGDP()},g=()=>{m.value=[],y.showSafetyNotice()};return(t,a)=>{const l=o("mars-button"),s=o("a-space"),y=o("mars-dialog"),w=o("mars-tree");return n(),i(f,null,[c(y,{visible:!0,right:"10",top:"10"},{default:d((()=>[c(s,null,{default:d((()=>[c(l,{onClick:x},{default:d((()=>[u("铁路")])),_:1}),c(l,{onClick:E},{default:d((()=>[u("高速公路线")])),_:1}),c(l,{onClick:C},{default:d((()=>[u("气象等值面")])),_:1}),c(l,{onClick:K},{default:d((()=>[u("国家GDP数据")])),_:1}),c(l,{onClick:g},{default:d((()=>[u("海上安全通告")])),_:1})])),_:1}),r("div",p,[c(e)])])),_:1}),c(y,{visible:!0,right:"10",top:"110",width:"220",customClass:"pannel"},{default:d((()=>[c(w,{checkable:"","tree-data":v.value,onCheck:b,checkedKeys:m.value,"onUpdate:checkedKeys":a[0]||(a[0]=e=>m.value=e),expandedKeys:k.value,"onUpdate:expandedKeys":a[1]||(a[1]=e=>k.value=e)},{title:d((({title:e})=>[r("span",{title:e},h(e),9,_)])),_:1},8,["tree-data","checkedKeys","expandedKeys"])])),_:1})],64)}}});export{y as default};
