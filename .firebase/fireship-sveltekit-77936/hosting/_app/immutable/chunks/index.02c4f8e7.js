import{c as x}from"./index.40b40403.js";import{W as _,X as y}from"./scheduler.4e08fc29.js";function U(t,{delay:o=0,duration:s=400,easing:n=_}={}){const a=+getComputedStyle(t).opacity;return{delay:o,duration:s,easing:n,css:c=>`opacity: ${c*a}`}}function V(t,{delay:o=0,duration:s=400,easing:n=x,x:a=0,y:c=0,opacity:f=0}={}){const r=getComputedStyle(t),e=+r.opacity,p=r.transform==="none"?"":r.transform,u=e*(1-f),[m,l]=y(a),[$,d]=y(c);return{delay:o,duration:s,easing:n,css:(i,g)=>`
			transform: ${p} translate(${(1-i)*m}${l}, ${(1-i)*$}${d});
			opacity: ${e-u*g}`}}export{U as a,V as f};
