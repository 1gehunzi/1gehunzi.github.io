import{_ as e,m as a,aI as i,aM as n,u as d,S as t,n as s,r as o,o as c,q as l,z as r,f as p,ak as h,i as u,a as y,t as f,w as m,j as k,c as v,h as x}from"./common.10acb102.js";import{u as g}from"./use-lifecycle.49139425.js";import{m as _,g as w,a as b}from"./map.883aa095.js";import{w as I}from"./style.0a538c9f.js";const O=["onDblclick"],K={key:0,class:"tree-slider"};var W=e(a({__name:"index",setup(e){const{activate:a,disable:W,currentWidget:j}=I.exports.useWidget();i((()=>{T()})),n((()=>{W("layer-tree")})),g(_),j.onUpdate((()=>{C.value=[],E.value=[],U.value=[],T()}));const C=d([]),E=d([]),U=d([]),Z={},A=t({});let D;const M=(e,i)=>{var n,d,t;const s=Z[i.node.id];if(s){if(s.isAdded||b(s),(null==(n=s.options)?void 0:n.radio)&&i.checked)for(const e in Z){const a=Z[e];U.value.forEach(((e,i)=>{a===Z[e]&&s.pid===Z[e].pid&&a!==s&&(U.value.splice(i,1),a.show=!1)}))}(null==(d=s.options)?void 0:d.onWidget)&&(i.checked?(D&&W(D),a({name:s.options.onWidget}),D=s.options.onWidget):W(s.options.onWidget)),i.node.children&&i.node.children.length&&P(e,i.node.children),-1!==e.indexOf(i.node.id)?(s.show=!0,s.readyPromise&&s.readyPromise.then((function(e){e.flyTo()}))):s.show=!1,(null==(t=s.options)?void 0:t.scenetree)&&q(s)}};function P(e,a){a.forEach((a=>{const i=Z[a.id];i&&(i.isAdded||b(i),-1!==e.indexOf(a.id)?i.show=!0:i.show=!1,a.children&&P(e,a.children),i.options.scenetree&&q(i))}))}function T(){const e=w();for(let a=e.length-1;a>=0;a--){const i=e[a];if(i._hasMapInit||-1!==i.pid||99===i.id||(i.pid=99),Z[i.id]=i,i&&-1===i.pid){const n=t({index:a,title:i.name||`未命名(${i.type})`,key:i.id,id:i.id,pId:i.pid,hasZIndex:i.hasZIndex,hasOpacity:i.hasOpacity,opacity:100*(i.opacity||0)});i.hasOpacity&&(A[i.id]=100*(i.opacity||0)),n.children=$(n,e),C.value.push(n),!1!==i.options.open&&E.value.push(n.key),i.isAdded&&i.show&&s((()=>{U.value.push(n.key)}))}}C.value.forEach((e=>{e.children.forEach((e=>{e.children&&e.children.forEach((e=>{Z[e.key].options.radio&&(e.parent.disabled=!0)}))}))}))}function $(e,a){return a.filter((a=>a.pid===e.id)).reverse().map(((i,n)=>{const d={index:n,title:i.name||`未命名(${i.type})`,key:i.id,id:i.id,pId:i.pid,hasZIndex:i.hasZIndex,hasOpacity:i.hasOpacity,opacity:100*(i.opacity||0),parent:e};return i.hasOpacity&&(A[i.id]=100*(i.opacity||0)),Z[i.id]=i,d.children=$(d,a),!1!==i.options.open&&E.value.push(d.key),i.isAdded&&i.show&&s((()=>{U.value.push(d.key)})),d}))}function q(e){W("layer-tree"),z&&(z.off("click",S),z=null),e.options.scenetree&&(e.on("click",S),z=e)}let z;function S(e){const i=e.layer,n=i.options.url,d=i.id;a({name:"layer-tree",data:{url:n,id:d}})}return(e,a)=>{const i=o("a-menu-item"),n=o("a-menu"),d=o("mars-dropdown-menu"),t=o("mars-slider"),s=o("mars-tree"),g=o("mars-dialog");return c(),l(g,{draggable:!0,title:"图层",width:"312","min-width":250,top:"50",left:"50"},{default:r((()=>[p(s,{checkable:"","tree-data":C.value,expandedKeys:E.value,"onUpdate:expandedKeys":a[0]||(a[0]=e=>E.value=e),checkedKeys:U.value,"onUpdate:checkedKeys":a[1]||(a[1]=e=>U.value=e),onCheck:M},{title:r((e=>[p(d,{trigger:["contextmenu"]},h({default:r((()=>[y("span",{onDblclick:a=>{var i;(i=e).checked&&Z[i.id].flyTo()}},f(e.title),41,O)])),_:2},[e.hasZIndex?{name:"overlay",fn:r((()=>[p(n,{onClick:a=>((e,a)=>{const i=e.parent,n=e.index;switch(a){case"1":0!==n&&(i.children[0].index=n,i.children[n].index=0);break;case"2":i.children[n-1].index=n,i.children[n].index=n-1;break;case"3":i.children[n+1].index=n,i.children[n].index=n+1;break;case"4":i.children[i.children.length-1].index=n,i.children[n].index=i.children.length-1}i.children=i.children.sort(((e,a)=>e.index-a.index))})(e,a.key)},{default:r((()=>[p(i,{key:"1"},{default:r((()=>[u("图层置为顶层")])),_:1}),p(i,{key:"2"},{default:r((()=>[u("图层上移一层")])),_:1}),p(i,{key:"3"},{default:r((()=>[u("图层下移一层")])),_:1}),p(i,{key:"4"},{default:r((()=>[u("图层置为底层")])),_:1})])),_:2},1032,["onClick"])])),key:"0"}:void 0]),1024),e.hasOpacity?m((c(),v("span",K,[p(t,{value:A[e.id],"onUpdate:value":a=>A[e.id]=a,min:0,step:1,max:100,onChange:a=>(e=>{const a=e.id,i=Z[a];i&&(i.opacity=A[a]/100)})(e)},null,8,["value","onUpdate:value","onChange"])],512)),[[k,e.checked]]):x("",!0)])),_:1},8,["tree-data","expandedKeys","checkedKeys"])])),_:1})}}}),[["__scopeId","data-v-75de5fae"]]);export{W as default};
