import{s as ct,D as ut,E as dt,g as f,l as M,c as N,h as p,i as y,m as B,d as R,F as rt,k as h,_ as mt,G as st}from"../chunks/scheduler.4e08fc29.js";import{S as ft,i as pt,d as it,v as ht,e as w,g as b,a as bt,n as r,s as W,u as vt}from"../chunks/index.c26ee3ff.js";import{p as X}from"../chunks/stores.2683753c.js";import{p as _t}from"../chunks/parse.bee59afc.js";import{j as gt,k as wt}from"../chunks/singletons.05477d30.js";const Et=gt("invalidate_all");function yt(t){return wt.apply_action(t)}function xt(t){const e=JSON.parse(t);return e.data&&(e.data=_t(e.data)),e}function I(t,e,i){console.warn(`\`${t}\` has been deprecated in favor of \`${e}\`. \`${t}\` will be removed in a future version. (Called from ${i})`)}function Y(t){return HTMLElement.prototype.cloneNode.call(t)}function lt(t,e=()=>{}){if(Y(t).method!=="post")throw new Error('use:enhance can only be used on <form> fields with method="POST"');const i=async({action:o,result:m,reset:s=!0,invalidateAll:l=!0})=>{m.type==="success"&&(s&&HTMLFormElement.prototype.reset.call(t),l&&await Et()),(location.origin+location.pathname===o.origin+o.pathname||m.type==="redirect"||m.type==="error")&&yt(m)};async function _(o){var A,T,D,d;if(((A=o.submitter)!=null&&A.hasAttribute("formmethod")?o.submitter.formMethod:Y(t).method)!=="post")return;o.preventDefault();const s=new URL((T=o.submitter)!=null&&T.hasAttribute("formaction")?o.submitter.formAction:Y(t).action),l=new FormData(t);if(Y(t).enctype!=="multipart/form-data"){for(const a of l.values())if(a instanceof File){console.warn('Your form contains <input type="file"> fields, but is missing the `enctype="multipart/form-data"` attribute. This will lead to inconsistent behavior between enhanced and native forms. For more details, see https://github.com/sveltejs/kit/issues/9819. This will be upgraded to an error in v2.0.');break}}const n=(D=o.submitter)==null?void 0:D.getAttribute("name");n&&l.append(n,((d=o.submitter)==null?void 0:d.getAttribute("value"))??"");const S=new AbortController;let x=!1;const F=await e({action:s,cancel:()=>x=!0,controller:S,get data(){return I("data","formData","use:enhance submit function"),l},formData:l,get form(){return I("form","formElement","use:enhance submit function"),t},formElement:t,submitter:o.submitter})??i;if(x)return;let u;try{const a=await fetch(s,{method:"POST",headers:{accept:"application/json","x-sveltekit-action":"true"},cache:"no-store",body:l,signal:S.signal});u=xt(await a.text()),u.type==="error"&&(u.status=a.status)}catch(a){if((a==null?void 0:a.name)==="AbortError")return;u={type:"error",error:a}}F({action:s,get data(){return I("data","formData","callback returned from use:enhance submit function"),l},formData:l,get form(){return I("form","formElement","callback returned from use:enhance submit function"),t},formElement:t,update:a=>i({action:s,result:u,reset:a==null?void 0:a.reset,invalidateAll:a==null?void 0:a.invalidateAll}),result:u})}return HTMLFormElement.prototype.addEventListener.call(t,"submit",_),{destroy(){HTMLFormElement.prototype.removeEventListener.call(t,"submit",_)}}}const v="C:/Users/mikep/Desktop/WebDev/skeleton-ui/src/routes/[username]/bio/+page.svelte";function K(t){var et;let e,i,_,o,m=t[0].bio+"",s,l,n,S,x=t[1].status+"",L,F,u,A=(((et=t[1].form)==null?void 0:et.problem)??"")+"",T,D,d,a,P,k,Q="Your bio",q,E,H,G,C,Z="Update Bio",J,$;const tt={c:function(){e=f("main"),i=f("p"),_=M("Current Bio: "),o=f("span"),s=M(m),l=N(),n=f("p"),S=M("Status Code: "),L=M(x),F=N(),u=f("p"),T=M(A),D=N(),d=f("form"),a=f("div"),P=f("label"),k=f("span"),k.textContent=Q,q=N(),E=f("textarea"),G=N(),C=f("button"),C.textContent=Z,this.h()},l:function(g){e=p(g,"MAIN",{class:!0});var c=y(e);i=p(c,"P",{});var j=y(i);_=B(j,"Current Bio: "),o=p(j,"SPAN",{class:!0});var at=y(o);s=B(at,m),at.forEach(w),j.forEach(w),l=R(c),n=p(c,"P",{});var V=y(n);S=B(V,"Status Code: "),L=B(V,x),V.forEach(w),F=R(c),u=p(c,"P",{class:!0});var nt=y(u);T=B(nt,A),nt.forEach(w),D=R(c),d=p(c,"FORM",{method:!0});var U=y(d);a=p(U,"DIV",{class:!0});var z=y(a);P=p(z,"LABEL",{for:!0,class:!0});var ot=y(P);k=p(ot,"SPAN",{class:!0,"data-svelte-h":!0}),rt(k)!=="svelte-270kv4"&&(k.textContent=Q),ot.forEach(w),q=R(z),E=p(z,"TEXTAREA",{name:!0,class:!0}),y(E).forEach(w),z.forEach(w),G=R(U),C=p(U,"BUTTON",{class:!0,"data-svelte-h":!0}),rt(C)!=="svelte-1juznze"&&(C.textContent=Z),U.forEach(w),c.forEach(w),this.h()},h:function(){b(o,"class","text-info"),h(o,v,9,20,213),h(i,v,9,4,197),h(n,v,11,4,268),b(u,"class","text-error"),h(u,v,12,4,308),b(k,"class","label-text"),h(k,v,17,10,490),b(P,"for","bio"),b(P,"class","label"),h(P,v,16,8,447),b(E,"name","bio"),b(E,"class","textarea textarea-bordered textarea-accent"),E.value=H=t[0].bio,h(E,v,19,8,558),b(a,"class","form-control"),h(a,v,15,6,411),b(C,"class","btn btn-primary my-5 bg-lime-700"),h(C,v,25,6,713),b(d,"method","POST"),h(d,v,14,4,371),b(e,"class","max-w-lg prose text-center mx-auto my-6 text-white"),h(e,v,8,2,126)},m:function(g,c){bt(g,e,c),r(e,i),r(i,_),r(i,o),r(o,s),r(e,l),r(e,n),r(n,S),r(n,L),r(e,F),r(e,u),r(u,T),r(e,D),r(e,d),r(d,a),r(a,P),r(P,k),r(a,q),r(a,E),r(d,G),r(d,C),J||($=mt(lt.call(null,d)),J=!0)},p:function(g,[c]){var j;c&1&&m!==(m=g[0].bio+"")&&W(s,m),c&2&&x!==(x=g[1].status+"")&&W(L,x),c&2&&A!==(A=(((j=g[1].form)==null?void 0:j.problem)??"")+"")&&W(T,A),c&1&&H!==(H=g[0].bio)&&vt(E,"value",H)},i:st,o:st,d:function(g){g&&w(e),J=!1,$()}};return it("SvelteRegisterBlock",{block:tt,id:K.name,type:"component",source:"",ctx:t}),tt}function At(t,e,i){let _;ut(X,"page"),dt(t,X,n=>i(1,_=n));let{$$slots:o={},$$scope:m}=e;ht("Page",o,[]);let{data:s}=e;t.$$.on_mount.push(function(){s===void 0&&!("data"in e||t.$$.bound[t.$$.props.data])&&console.warn("<Page> was created without expected prop 'data'")});const l=["data"];return Object.keys(e).forEach(n=>{!~l.indexOf(n)&&n.slice(0,2)!=="$$"&&n!=="slot"&&console.warn(`<Page> was created with unknown prop '${n}'`)}),t.$$set=n=>{"data"in n&&i(0,s=n.data)},t.$capture_state=()=>({page:X,enhance:lt,data:s,$page:_}),t.$inject_state=n=>{"data"in n&&i(0,s=n.data)},e&&"$$inject"in e&&t.$inject_state(e.$$inject),[s,_]}class Dt extends ft{constructor(e){super(e),pt(this,e,At,K,ct,{data:0}),it("SvelteRegisterComponent",{component:this,tagName:"Page",options:e,id:K.name})}get data(){throw new Error("<Page>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set data(e){throw new Error("<Page>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}export{Dt as component};