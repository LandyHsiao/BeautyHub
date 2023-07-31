(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(s){if(s.ep)return;s.ep=!0;const o=t(s);fetch(s.href,o)}})();var hu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function uu(n){if(n.__esModule)return n;var e=n.default;if(typeof e=="function"){var t=function i(){return this instanceof i?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};t.prototype=e.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(n).forEach(function(i){var s=Object.getOwnPropertyDescriptor(n,i);Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:function(){return n[i]}})}),t}var du={exports:{}},oe="top",ve="bottom",ye="right",ae="left",Ri="auto",an=[oe,ve,ye,ae],Tt="start",Xt="end",ga="clippingParents",Hs="viewport",Ut="popper",ma="reference",vs=an.reduce(function(n,e){return n.concat([e+"-"+Tt,e+"-"+Xt])},[]),js=[].concat(an,[Ri]).reduce(function(n,e){return n.concat([e,e+"-"+Tt,e+"-"+Xt])},[]),va="beforeRead",ya="read",ba="afterRead",wa="beforeMain",Ea="main",Ca="afterMain",Ta="beforeWrite",Ia="write",Sa="afterWrite",Aa=[va,ya,ba,wa,Ea,Ca,Ta,Ia,Sa];function Le(n){return n?(n.nodeName||"").toLowerCase():null}function be(n){if(n==null)return window;if(n.toString()!=="[object Window]"){var e=n.ownerDocument;return e&&e.defaultView||window}return n}function It(n){var e=be(n).Element;return n instanceof e||n instanceof Element}function Ee(n){var e=be(n).HTMLElement;return n instanceof e||n instanceof HTMLElement}function Us(n){if(typeof ShadowRoot>"u")return!1;var e=be(n).ShadowRoot;return n instanceof e||n instanceof ShadowRoot}function fu(n){var e=n.state;Object.keys(e.elements).forEach(function(t){var i=e.styles[t]||{},s=e.attributes[t]||{},o=e.elements[t];!Ee(o)||!Le(o)||(Object.assign(o.style,i),Object.keys(s).forEach(function(a){var l=s[a];l===!1?o.removeAttribute(a):o.setAttribute(a,l===!0?"":l)}))})}function pu(n){var e=n.state,t={popper:{position:e.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(e.elements.popper.style,t.popper),e.styles=t,e.elements.arrow&&Object.assign(e.elements.arrow.style,t.arrow),function(){Object.keys(e.elements).forEach(function(i){var s=e.elements[i],o=e.attributes[i]||{},a=Object.keys(e.styles.hasOwnProperty(i)?e.styles[i]:t[i]),l=a.reduce(function(h,u){return h[u]="",h},{});!Ee(s)||!Le(s)||(Object.assign(s.style,l),Object.keys(o).forEach(function(h){s.removeAttribute(h)}))})}}const Vs={name:"applyStyles",enabled:!0,phase:"write",fn:fu,effect:pu,requires:["computeStyles"]};function Me(n){return n.split("-")[0]}var Et=Math.max,_i=Math.min,Jt=Math.round;function ys(){var n=navigator.userAgentData;return n!=null&&n.brands&&Array.isArray(n.brands)?n.brands.map(function(e){return e.brand+"/"+e.version}).join(" "):navigator.userAgent}function Na(){return!/^((?!chrome|android).)*safari/i.test(ys())}function Zt(n,e,t){e===void 0&&(e=!1),t===void 0&&(t=!1);var i=n.getBoundingClientRect(),s=1,o=1;e&&Ee(n)&&(s=n.offsetWidth>0&&Jt(i.width)/n.offsetWidth||1,o=n.offsetHeight>0&&Jt(i.height)/n.offsetHeight||1);var a=It(n)?be(n):window,l=a.visualViewport,h=!Na()&&t,u=(i.left+(h&&l?l.offsetLeft:0))/s,p=(i.top+(h&&l?l.offsetTop:0))/o,_=i.width/s,g=i.height/o;return{width:_,height:g,top:p,right:u+_,bottom:p+g,left:u,x:u,y:p}}function zs(n){var e=Zt(n),t=n.offsetWidth,i=n.offsetHeight;return Math.abs(e.width-t)<=1&&(t=e.width),Math.abs(e.height-i)<=1&&(i=e.height),{x:n.offsetLeft,y:n.offsetTop,width:t,height:i}}function xa(n,e){var t=e.getRootNode&&e.getRootNode();if(n.contains(e))return!0;if(t&&Us(t)){var i=e;do{if(i&&n.isSameNode(i))return!0;i=i.parentNode||i.host}while(i)}return!1}function qe(n){return be(n).getComputedStyle(n)}function _u(n){return["table","td","th"].indexOf(Le(n))>=0}function ot(n){return((It(n)?n.ownerDocument:n.document)||window.document).documentElement}function Pi(n){return Le(n)==="html"?n:n.assignedSlot||n.parentNode||(Us(n)?n.host:null)||ot(n)}function vo(n){return!Ee(n)||qe(n).position==="fixed"?null:n.offsetParent}function gu(n){var e=/firefox/i.test(ys()),t=/Trident/i.test(ys());if(t&&Ee(n)){var i=qe(n);if(i.position==="fixed")return null}var s=Pi(n);for(Us(s)&&(s=s.host);Ee(s)&&["html","body"].indexOf(Le(s))<0;){var o=qe(s);if(o.transform!=="none"||o.perspective!=="none"||o.contain==="paint"||["transform","perspective"].indexOf(o.willChange)!==-1||e&&o.willChange==="filter"||e&&o.filter&&o.filter!=="none")return s;s=s.parentNode}return null}function jn(n){for(var e=be(n),t=vo(n);t&&_u(t)&&qe(t).position==="static";)t=vo(t);return t&&(Le(t)==="html"||Le(t)==="body"&&qe(t).position==="static")?e:t||gu(n)||e}function qs(n){return["top","bottom"].indexOf(n)>=0?"x":"y"}function Sn(n,e,t){return Et(n,_i(e,t))}function mu(n,e,t){var i=Sn(n,e,t);return i>t?t:i}function Oa(){return{top:0,right:0,bottom:0,left:0}}function ka(n){return Object.assign({},Oa(),n)}function Da(n,e){return e.reduce(function(t,i){return t[i]=n,t},{})}var vu=function(e,t){return e=typeof e=="function"?e(Object.assign({},t.rects,{placement:t.placement})):e,ka(typeof e!="number"?e:Da(e,an))};function yu(n){var e,t=n.state,i=n.name,s=n.options,o=t.elements.arrow,a=t.modifiersData.popperOffsets,l=Me(t.placement),h=qs(l),u=[ae,ye].indexOf(l)>=0,p=u?"height":"width";if(!(!o||!a)){var _=vu(s.padding,t),g=zs(o),v=h==="y"?oe:ae,E=h==="y"?ve:ye,T=t.rects.reference[p]+t.rects.reference[h]-a[h]-t.rects.popper[p],S=a[h]-t.rects.reference[h],P=jn(o),B=P?h==="y"?P.clientHeight||0:P.clientWidth||0:0,O=T/2-S/2,A=_[v],x=B-g[p]-_[E],L=B/2-g[p]/2+O,H=Sn(A,L,x),Q=h;t.modifiersData[i]=(e={},e[Q]=H,e.centerOffset=H-L,e)}}function bu(n){var e=n.state,t=n.options,i=t.element,s=i===void 0?"[data-popper-arrow]":i;s!=null&&(typeof s=="string"&&(s=e.elements.popper.querySelector(s),!s)||xa(e.elements.popper,s)&&(e.elements.arrow=s))}const Ra={name:"arrow",enabled:!0,phase:"main",fn:yu,effect:bu,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function en(n){return n.split("-")[1]}var wu={top:"auto",right:"auto",bottom:"auto",left:"auto"};function Eu(n,e){var t=n.x,i=n.y,s=e.devicePixelRatio||1;return{x:Jt(t*s)/s||0,y:Jt(i*s)/s||0}}function yo(n){var e,t=n.popper,i=n.popperRect,s=n.placement,o=n.variation,a=n.offsets,l=n.position,h=n.gpuAcceleration,u=n.adaptive,p=n.roundOffsets,_=n.isFixed,g=a.x,v=g===void 0?0:g,E=a.y,T=E===void 0?0:E,S=typeof p=="function"?p({x:v,y:T}):{x:v,y:T};v=S.x,T=S.y;var P=a.hasOwnProperty("x"),B=a.hasOwnProperty("y"),O=ae,A=oe,x=window;if(u){var L=jn(t),H="clientHeight",Q="clientWidth";if(L===be(t)&&(L=ot(t),qe(L).position!=="static"&&l==="absolute"&&(H="scrollHeight",Q="scrollWidth")),L=L,s===oe||(s===ae||s===ye)&&o===Xt){A=ve;var Y=_&&L===x&&x.visualViewport?x.visualViewport.height:L[H];T-=Y-i.height,T*=h?1:-1}if(s===ae||(s===oe||s===ve)&&o===Xt){O=ye;var G=_&&L===x&&x.visualViewport?x.visualViewport.width:L[Q];v-=G-i.width,v*=h?1:-1}}var K=Object.assign({position:l},u&&wu),le=p===!0?Eu({x:v,y:T},be(t)):{x:v,y:T};if(v=le.x,T=le.y,h){var J;return Object.assign({},K,(J={},J[A]=B?"0":"",J[O]=P?"0":"",J.transform=(x.devicePixelRatio||1)<=1?"translate("+v+"px, "+T+"px)":"translate3d("+v+"px, "+T+"px, 0)",J))}return Object.assign({},K,(e={},e[A]=B?T+"px":"",e[O]=P?v+"px":"",e.transform="",e))}function Cu(n){var e=n.state,t=n.options,i=t.gpuAcceleration,s=i===void 0?!0:i,o=t.adaptive,a=o===void 0?!0:o,l=t.roundOffsets,h=l===void 0?!0:l,u={placement:Me(e.placement),variation:en(e.placement),popper:e.elements.popper,popperRect:e.rects.popper,gpuAcceleration:s,isFixed:e.options.strategy==="fixed"};e.modifiersData.popperOffsets!=null&&(e.styles.popper=Object.assign({},e.styles.popper,yo(Object.assign({},u,{offsets:e.modifiersData.popperOffsets,position:e.options.strategy,adaptive:a,roundOffsets:h})))),e.modifiersData.arrow!=null&&(e.styles.arrow=Object.assign({},e.styles.arrow,yo(Object.assign({},u,{offsets:e.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:h})))),e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-placement":e.placement})}const Gs={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:Cu,data:{}};var ui={passive:!0};function Tu(n){var e=n.state,t=n.instance,i=n.options,s=i.scroll,o=s===void 0?!0:s,a=i.resize,l=a===void 0?!0:a,h=be(e.elements.popper),u=[].concat(e.scrollParents.reference,e.scrollParents.popper);return o&&u.forEach(function(p){p.addEventListener("scroll",t.update,ui)}),l&&h.addEventListener("resize",t.update,ui),function(){o&&u.forEach(function(p){p.removeEventListener("scroll",t.update,ui)}),l&&h.removeEventListener("resize",t.update,ui)}}const Ys={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:Tu,data:{}};var Iu={left:"right",right:"left",bottom:"top",top:"bottom"};function pi(n){return n.replace(/left|right|bottom|top/g,function(e){return Iu[e]})}var Su={start:"end",end:"start"};function bo(n){return n.replace(/start|end/g,function(e){return Su[e]})}function Ks(n){var e=be(n),t=e.pageXOffset,i=e.pageYOffset;return{scrollLeft:t,scrollTop:i}}function Qs(n){return Zt(ot(n)).left+Ks(n).scrollLeft}function Au(n,e){var t=be(n),i=ot(n),s=t.visualViewport,o=i.clientWidth,a=i.clientHeight,l=0,h=0;if(s){o=s.width,a=s.height;var u=Na();(u||!u&&e==="fixed")&&(l=s.offsetLeft,h=s.offsetTop)}return{width:o,height:a,x:l+Qs(n),y:h}}function Nu(n){var e,t=ot(n),i=Ks(n),s=(e=n.ownerDocument)==null?void 0:e.body,o=Et(t.scrollWidth,t.clientWidth,s?s.scrollWidth:0,s?s.clientWidth:0),a=Et(t.scrollHeight,t.clientHeight,s?s.scrollHeight:0,s?s.clientHeight:0),l=-i.scrollLeft+Qs(n),h=-i.scrollTop;return qe(s||t).direction==="rtl"&&(l+=Et(t.clientWidth,s?s.clientWidth:0)-o),{width:o,height:a,x:l,y:h}}function Xs(n){var e=qe(n),t=e.overflow,i=e.overflowX,s=e.overflowY;return/auto|scroll|overlay|hidden/.test(t+s+i)}function Pa(n){return["html","body","#document"].indexOf(Le(n))>=0?n.ownerDocument.body:Ee(n)&&Xs(n)?n:Pa(Pi(n))}function An(n,e){var t;e===void 0&&(e=[]);var i=Pa(n),s=i===((t=n.ownerDocument)==null?void 0:t.body),o=be(i),a=s?[o].concat(o.visualViewport||[],Xs(i)?i:[]):i,l=e.concat(a);return s?l:l.concat(An(Pi(a)))}function bs(n){return Object.assign({},n,{left:n.x,top:n.y,right:n.x+n.width,bottom:n.y+n.height})}function xu(n,e){var t=Zt(n,!1,e==="fixed");return t.top=t.top+n.clientTop,t.left=t.left+n.clientLeft,t.bottom=t.top+n.clientHeight,t.right=t.left+n.clientWidth,t.width=n.clientWidth,t.height=n.clientHeight,t.x=t.left,t.y=t.top,t}function wo(n,e,t){return e===Hs?bs(Au(n,t)):It(e)?xu(e,t):bs(Nu(ot(n)))}function Ou(n){var e=An(Pi(n)),t=["absolute","fixed"].indexOf(qe(n).position)>=0,i=t&&Ee(n)?jn(n):n;return It(i)?e.filter(function(s){return It(s)&&xa(s,i)&&Le(s)!=="body"}):[]}function ku(n,e,t,i){var s=e==="clippingParents"?Ou(n):[].concat(e),o=[].concat(s,[t]),a=o[0],l=o.reduce(function(h,u){var p=wo(n,u,i);return h.top=Et(p.top,h.top),h.right=_i(p.right,h.right),h.bottom=_i(p.bottom,h.bottom),h.left=Et(p.left,h.left),h},wo(n,a,i));return l.width=l.right-l.left,l.height=l.bottom-l.top,l.x=l.left,l.y=l.top,l}function Ma(n){var e=n.reference,t=n.element,i=n.placement,s=i?Me(i):null,o=i?en(i):null,a=e.x+e.width/2-t.width/2,l=e.y+e.height/2-t.height/2,h;switch(s){case oe:h={x:a,y:e.y-t.height};break;case ve:h={x:a,y:e.y+e.height};break;case ye:h={x:e.x+e.width,y:l};break;case ae:h={x:e.x-t.width,y:l};break;default:h={x:e.x,y:e.y}}var u=s?qs(s):null;if(u!=null){var p=u==="y"?"height":"width";switch(o){case Tt:h[u]=h[u]-(e[p]/2-t[p]/2);break;case Xt:h[u]=h[u]+(e[p]/2-t[p]/2);break}}return h}function tn(n,e){e===void 0&&(e={});var t=e,i=t.placement,s=i===void 0?n.placement:i,o=t.strategy,a=o===void 0?n.strategy:o,l=t.boundary,h=l===void 0?ga:l,u=t.rootBoundary,p=u===void 0?Hs:u,_=t.elementContext,g=_===void 0?Ut:_,v=t.altBoundary,E=v===void 0?!1:v,T=t.padding,S=T===void 0?0:T,P=ka(typeof S!="number"?S:Da(S,an)),B=g===Ut?ma:Ut,O=n.rects.popper,A=n.elements[E?B:g],x=ku(It(A)?A:A.contextElement||ot(n.elements.popper),h,p,a),L=Zt(n.elements.reference),H=Ma({reference:L,element:O,strategy:"absolute",placement:s}),Q=bs(Object.assign({},O,H)),Y=g===Ut?Q:L,G={top:x.top-Y.top+P.top,bottom:Y.bottom-x.bottom+P.bottom,left:x.left-Y.left+P.left,right:Y.right-x.right+P.right},K=n.modifiersData.offset;if(g===Ut&&K){var le=K[s];Object.keys(G).forEach(function(J){var Fe=[ye,ve].indexOf(J)>=0?1:-1,De=[oe,ve].indexOf(J)>=0?"y":"x";G[J]+=le[De]*Fe})}return G}function Du(n,e){e===void 0&&(e={});var t=e,i=t.placement,s=t.boundary,o=t.rootBoundary,a=t.padding,l=t.flipVariations,h=t.allowedAutoPlacements,u=h===void 0?js:h,p=en(i),_=p?l?vs:vs.filter(function(E){return en(E)===p}):an,g=_.filter(function(E){return u.indexOf(E)>=0});g.length===0&&(g=_);var v=g.reduce(function(E,T){return E[T]=tn(n,{placement:T,boundary:s,rootBoundary:o,padding:a})[Me(T)],E},{});return Object.keys(v).sort(function(E,T){return v[E]-v[T]})}function Ru(n){if(Me(n)===Ri)return[];var e=pi(n);return[bo(n),e,bo(e)]}function Pu(n){var e=n.state,t=n.options,i=n.name;if(!e.modifiersData[i]._skip){for(var s=t.mainAxis,o=s===void 0?!0:s,a=t.altAxis,l=a===void 0?!0:a,h=t.fallbackPlacements,u=t.padding,p=t.boundary,_=t.rootBoundary,g=t.altBoundary,v=t.flipVariations,E=v===void 0?!0:v,T=t.allowedAutoPlacements,S=e.options.placement,P=Me(S),B=P===S,O=h||(B||!E?[pi(S)]:Ru(S)),A=[S].concat(O).reduce(function(Pe,Ce){return Pe.concat(Me(Ce)===Ri?Du(e,{placement:Ce,boundary:p,rootBoundary:_,padding:u,flipVariations:E,allowedAutoPlacements:T}):Ce)},[]),x=e.rects.reference,L=e.rects.popper,H=new Map,Q=!0,Y=A[0],G=0;G<A.length;G++){var K=A[G],le=Me(K),J=en(K)===Tt,Fe=[oe,ve].indexOf(le)>=0,De=Fe?"width":"height",ne=tn(e,{placement:K,boundary:p,rootBoundary:_,altBoundary:g,padding:u}),ce=Fe?J?ye:ae:J?ve:oe;x[De]>L[De]&&(ce=pi(ce));var at=pi(ce),Re=[];if(o&&Re.push(ne[le]<=0),l&&Re.push(ne[ce]<=0,ne[at]<=0),Re.every(function(Pe){return Pe})){Y=K,Q=!1;break}H.set(K,Re)}if(Q)for(var Qe=E?3:1,un=function(Ce){var $e=A.find(function(he){var _e=H.get(he);if(_e)return _e.slice(0,Ce).every(function(re){return re})});if($e)return Y=$e,"break"},Xe=Qe;Xe>0;Xe--){var y=un(Xe);if(y==="break")break}e.placement!==Y&&(e.modifiersData[i]._skip=!0,e.placement=Y,e.reset=!0)}}const La={name:"flip",enabled:!0,phase:"main",fn:Pu,requiresIfExists:["offset"],data:{_skip:!1}};function Eo(n,e,t){return t===void 0&&(t={x:0,y:0}),{top:n.top-e.height-t.y,right:n.right-e.width+t.x,bottom:n.bottom-e.height+t.y,left:n.left-e.width-t.x}}function Co(n){return[oe,ye,ve,ae].some(function(e){return n[e]>=0})}function Mu(n){var e=n.state,t=n.name,i=e.rects.reference,s=e.rects.popper,o=e.modifiersData.preventOverflow,a=tn(e,{elementContext:"reference"}),l=tn(e,{altBoundary:!0}),h=Eo(a,i),u=Eo(l,s,o),p=Co(h),_=Co(u);e.modifiersData[t]={referenceClippingOffsets:h,popperEscapeOffsets:u,isReferenceHidden:p,hasPopperEscaped:_},e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-reference-hidden":p,"data-popper-escaped":_})}const Fa={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:Mu};function Lu(n,e,t){var i=Me(n),s=[ae,oe].indexOf(i)>=0?-1:1,o=typeof t=="function"?t(Object.assign({},e,{placement:n})):t,a=o[0],l=o[1];return a=a||0,l=(l||0)*s,[ae,ye].indexOf(i)>=0?{x:l,y:a}:{x:a,y:l}}function Fu(n){var e=n.state,t=n.options,i=n.name,s=t.offset,o=s===void 0?[0,0]:s,a=js.reduce(function(p,_){return p[_]=Lu(_,e.rects,o),p},{}),l=a[e.placement],h=l.x,u=l.y;e.modifiersData.popperOffsets!=null&&(e.modifiersData.popperOffsets.x+=h,e.modifiersData.popperOffsets.y+=u),e.modifiersData[i]=a}const $a={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:Fu};function $u(n){var e=n.state,t=n.name;e.modifiersData[t]=Ma({reference:e.rects.reference,element:e.rects.popper,strategy:"absolute",placement:e.placement})}const Js={name:"popperOffsets",enabled:!0,phase:"read",fn:$u,data:{}};function Bu(n){return n==="x"?"y":"x"}function Wu(n){var e=n.state,t=n.options,i=n.name,s=t.mainAxis,o=s===void 0?!0:s,a=t.altAxis,l=a===void 0?!1:a,h=t.boundary,u=t.rootBoundary,p=t.altBoundary,_=t.padding,g=t.tether,v=g===void 0?!0:g,E=t.tetherOffset,T=E===void 0?0:E,S=tn(e,{boundary:h,rootBoundary:u,padding:_,altBoundary:p}),P=Me(e.placement),B=en(e.placement),O=!B,A=qs(P),x=Bu(A),L=e.modifiersData.popperOffsets,H=e.rects.reference,Q=e.rects.popper,Y=typeof T=="function"?T(Object.assign({},e.rects,{placement:e.placement})):T,G=typeof Y=="number"?{mainAxis:Y,altAxis:Y}:Object.assign({mainAxis:0,altAxis:0},Y),K=e.modifiersData.offset?e.modifiersData.offset[e.placement]:null,le={x:0,y:0};if(L){if(o){var J,Fe=A==="y"?oe:ae,De=A==="y"?ve:ye,ne=A==="y"?"height":"width",ce=L[A],at=ce+S[Fe],Re=ce-S[De],Qe=v?-Q[ne]/2:0,un=B===Tt?H[ne]:Q[ne],Xe=B===Tt?-Q[ne]:-H[ne],y=e.elements.arrow,Pe=v&&y?zs(y):{width:0,height:0},Ce=e.modifiersData["arrow#persistent"]?e.modifiersData["arrow#persistent"].padding:Oa(),$e=Ce[Fe],he=Ce[De],_e=Sn(0,H[ne],Pe[ne]),re=O?H[ne]/2-Qe-_e-$e-G.mainAxis:un-_e-$e-G.mainAxis,dn=O?-H[ne]/2+Qe+_e+he+G.mainAxis:Xe+_e+he+G.mainAxis,I=e.elements.arrow&&jn(e.elements.arrow),Rt=I?A==="y"?I.clientTop||0:I.clientLeft||0:0,fn=(J=K==null?void 0:K[A])!=null?J:0,zi=ce+re-fn-Rt,qi=ce+dn-fn,Je=Sn(v?_i(at,zi):at,ce,v?Et(Re,qi):Re);L[A]=Je,le[A]=Je-ce}if(l){var pn,lt=A==="x"?oe:ae,Ze=A==="x"?ve:ye,Be=L[x],Pt=x==="y"?"height":"width",Qn=Be+S[lt],Xn=Be-S[Ze],_n=[oe,ae].indexOf(P)!==-1,Jn=(pn=K==null?void 0:K[x])!=null?pn:0,Zn=_n?Qn:Be-H[Pt]-Q[Pt]-Jn+G.altAxis,ct=_n?Be+H[Pt]+Q[Pt]-Jn-G.altAxis:Xn,Te=v&&_n?mu(Zn,Be,ct):Sn(v?Zn:Qn,Be,v?ct:Xn);L[x]=Te,le[x]=Te-Be}e.modifiersData[i]=le}}const Ba={name:"preventOverflow",enabled:!0,phase:"main",fn:Wu,requiresIfExists:["offset"]};function Hu(n){return{scrollLeft:n.scrollLeft,scrollTop:n.scrollTop}}function ju(n){return n===be(n)||!Ee(n)?Ks(n):Hu(n)}function Uu(n){var e=n.getBoundingClientRect(),t=Jt(e.width)/n.offsetWidth||1,i=Jt(e.height)/n.offsetHeight||1;return t!==1||i!==1}function Vu(n,e,t){t===void 0&&(t=!1);var i=Ee(e),s=Ee(e)&&Uu(e),o=ot(e),a=Zt(n,s,t),l={scrollLeft:0,scrollTop:0},h={x:0,y:0};return(i||!i&&!t)&&((Le(e)!=="body"||Xs(o))&&(l=ju(e)),Ee(e)?(h=Zt(e,!0),h.x+=e.clientLeft,h.y+=e.clientTop):o&&(h.x=Qs(o))),{x:a.left+l.scrollLeft-h.x,y:a.top+l.scrollTop-h.y,width:a.width,height:a.height}}function zu(n){var e=new Map,t=new Set,i=[];n.forEach(function(o){e.set(o.name,o)});function s(o){t.add(o.name);var a=[].concat(o.requires||[],o.requiresIfExists||[]);a.forEach(function(l){if(!t.has(l)){var h=e.get(l);h&&s(h)}}),i.push(o)}return n.forEach(function(o){t.has(o.name)||s(o)}),i}function qu(n){var e=zu(n);return Aa.reduce(function(t,i){return t.concat(e.filter(function(s){return s.phase===i}))},[])}function Gu(n){var e;return function(){return e||(e=new Promise(function(t){Promise.resolve().then(function(){e=void 0,t(n())})})),e}}function Yu(n){var e=n.reduce(function(t,i){var s=t[i.name];return t[i.name]=s?Object.assign({},s,i,{options:Object.assign({},s.options,i.options),data:Object.assign({},s.data,i.data)}):i,t},{});return Object.keys(e).map(function(t){return e[t]})}var To={placement:"bottom",modifiers:[],strategy:"absolute"};function Io(){for(var n=arguments.length,e=new Array(n),t=0;t<n;t++)e[t]=arguments[t];return!e.some(function(i){return!(i&&typeof i.getBoundingClientRect=="function")})}function Mi(n){n===void 0&&(n={});var e=n,t=e.defaultModifiers,i=t===void 0?[]:t,s=e.defaultOptions,o=s===void 0?To:s;return function(l,h,u){u===void 0&&(u=o);var p={placement:"bottom",orderedModifiers:[],options:Object.assign({},To,o),modifiersData:{},elements:{reference:l,popper:h},attributes:{},styles:{}},_=[],g=!1,v={state:p,setOptions:function(P){var B=typeof P=="function"?P(p.options):P;T(),p.options=Object.assign({},o,p.options,B),p.scrollParents={reference:It(l)?An(l):l.contextElement?An(l.contextElement):[],popper:An(h)};var O=qu(Yu([].concat(i,p.options.modifiers)));return p.orderedModifiers=O.filter(function(A){return A.enabled}),E(),v.update()},forceUpdate:function(){if(!g){var P=p.elements,B=P.reference,O=P.popper;if(Io(B,O)){p.rects={reference:Vu(B,jn(O),p.options.strategy==="fixed"),popper:zs(O)},p.reset=!1,p.placement=p.options.placement,p.orderedModifiers.forEach(function(G){return p.modifiersData[G.name]=Object.assign({},G.data)});for(var A=0;A<p.orderedModifiers.length;A++){if(p.reset===!0){p.reset=!1,A=-1;continue}var x=p.orderedModifiers[A],L=x.fn,H=x.options,Q=H===void 0?{}:H,Y=x.name;typeof L=="function"&&(p=L({state:p,options:Q,name:Y,instance:v})||p)}}}},update:Gu(function(){return new Promise(function(S){v.forceUpdate(),S(p)})}),destroy:function(){T(),g=!0}};if(!Io(l,h))return v;v.setOptions(u).then(function(S){!g&&u.onFirstUpdate&&u.onFirstUpdate(S)});function E(){p.orderedModifiers.forEach(function(S){var P=S.name,B=S.options,O=B===void 0?{}:B,A=S.effect;if(typeof A=="function"){var x=A({state:p,name:P,instance:v,options:O}),L=function(){};_.push(x||L)}})}function T(){_.forEach(function(S){return S()}),_=[]}return v}}var Ku=Mi(),Qu=[Ys,Js,Gs,Vs],Xu=Mi({defaultModifiers:Qu}),Ju=[Ys,Js,Gs,Vs,$a,La,Ba,Ra,Fa],Zu=Mi({defaultModifiers:Ju});const ed=Object.freeze(Object.defineProperty({__proto__:null,afterMain:Ca,afterRead:ba,afterWrite:Sa,applyStyles:Vs,arrow:Ra,auto:Ri,basePlacements:an,beforeMain:wa,beforeRead:va,beforeWrite:Ta,bottom:ve,clippingParents:ga,computeStyles:Gs,createPopper:Zu,createPopperBase:Ku,createPopperLite:Xu,detectOverflow:tn,end:Xt,eventListeners:Ys,flip:La,hide:Fa,left:ae,main:Ea,modifierPhases:Aa,offset:$a,placements:js,popper:Ut,popperGenerator:Mi,popperOffsets:Js,preventOverflow:Ba,read:ya,reference:ma,right:ye,start:Tt,top:oe,variationPlacements:vs,viewport:Hs,write:Ia},Symbol.toStringTag,{value:"Module"})),td=uu(ed);/*!
  * Bootstrap v5.3.1 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */(function(n,e){(function(t,i){n.exports=i(td)})(hu,function(t){function i(f){const r=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(f){for(const c in f)if(c!=="default"){const d=Object.getOwnPropertyDescriptor(f,c);Object.defineProperty(r,c,d.get?d:{enumerable:!0,get:()=>f[c]})}}return r.default=f,Object.freeze(r)}const s=i(t),o=new Map,a={set(f,r,c){o.has(f)||o.set(f,new Map);const d=o.get(f);d.has(r)||d.size===0?d.set(r,c):console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(d.keys())[0]}.`)},get:(f,r)=>o.has(f)&&o.get(f).get(r)||null,remove(f,r){if(!o.has(f))return;const c=o.get(f);c.delete(r),c.size===0&&o.delete(f)}},l="transitionend",h=f=>(f&&window.CSS&&window.CSS.escape&&(f=f.replace(/#([^\s"#']+)/g,(r,c)=>`#${CSS.escape(c)}`)),f),u=f=>{f.dispatchEvent(new Event(l))},p=f=>!(!f||typeof f!="object")&&(f.jquery!==void 0&&(f=f[0]),f.nodeType!==void 0),_=f=>p(f)?f.jquery?f[0]:f:typeof f=="string"&&f.length>0?document.querySelector(h(f)):null,g=f=>{if(!p(f)||f.getClientRects().length===0)return!1;const r=getComputedStyle(f).getPropertyValue("visibility")==="visible",c=f.closest("details:not([open])");if(!c)return r;if(c!==f){const d=f.closest("summary");if(d&&d.parentNode!==c||d===null)return!1}return r},v=f=>!f||f.nodeType!==Node.ELEMENT_NODE||!!f.classList.contains("disabled")||(f.disabled!==void 0?f.disabled:f.hasAttribute("disabled")&&f.getAttribute("disabled")!=="false"),E=f=>{if(!document.documentElement.attachShadow)return null;if(typeof f.getRootNode=="function"){const r=f.getRootNode();return r instanceof ShadowRoot?r:null}return f instanceof ShadowRoot?f:f.parentNode?E(f.parentNode):null},T=()=>{},S=f=>{f.offsetHeight},P=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,B=[],O=()=>document.documentElement.dir==="rtl",A=f=>{var r;r=()=>{const c=P();if(c){const d=f.NAME,m=c.fn[d];c.fn[d]=f.jQueryInterface,c.fn[d].Constructor=f,c.fn[d].noConflict=()=>(c.fn[d]=m,f.jQueryInterface)}},document.readyState==="loading"?(B.length||document.addEventListener("DOMContentLoaded",()=>{for(const c of B)c()}),B.push(r)):r()},x=(f,r=[],c=f)=>typeof f=="function"?f(...r):c,L=(f,r,c=!0)=>{if(!c)return void x(f);const d=(C=>{if(!C)return 0;let{transitionDuration:M,transitionDelay:z}=window.getComputedStyle(C);const ue=Number.parseFloat(M),ge=Number.parseFloat(z);return ue||ge?(M=M.split(",")[0],z=z.split(",")[0],1e3*(Number.parseFloat(M)+Number.parseFloat(z))):0})(r)+5;let m=!1;const w=({target:C})=>{C===r&&(m=!0,r.removeEventListener(l,w),x(f))};r.addEventListener(l,w),setTimeout(()=>{m||u(r)},d)},H=(f,r,c,d)=>{const m=f.length;let w=f.indexOf(r);return w===-1?!c&&d?f[m-1]:f[0]:(w+=c?1:-1,d&&(w=(w+m)%m),f[Math.max(0,Math.min(w,m-1))])},Q=/[^.]*(?=\..*)\.|.*/,Y=/\..*/,G=/::\d+$/,K={};let le=1;const J={mouseenter:"mouseover",mouseleave:"mouseout"},Fe=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function De(f,r){return r&&`${r}::${le++}`||f.uidEvent||le++}function ne(f){const r=De(f);return f.uidEvent=r,K[r]=K[r]||{},K[r]}function ce(f,r,c=null){return Object.values(f).find(d=>d.callable===r&&d.delegationSelector===c)}function at(f,r,c){const d=typeof r=="string",m=d?c:r||c;let w=Xe(f);return Fe.has(w)||(w=f),[d,m,w]}function Re(f,r,c,d,m){if(typeof r!="string"||!f)return;let[w,C,M]=at(r,c,d);r in J&&(C=(mt=>function(Ae){if(!Ae.relatedTarget||Ae.relatedTarget!==Ae.delegateTarget&&!Ae.delegateTarget.contains(Ae.relatedTarget))return mt.call(this,Ae)})(C));const z=ne(f),ue=z[M]||(z[M]={}),ge=ce(ue,C,w?c:null);if(ge)return void(ge.oneOff=ge.oneOff&&m);const Se=De(C,r.replace(Q,"")),je=w?function(Ue,mt,Ae){return function wn(hi){const lu=Ue.querySelectorAll(mt);for(let{target:vt}=hi;vt&&vt!==this;vt=vt.parentNode)for(const cu of lu)if(cu===vt)return Pe(hi,{delegateTarget:vt}),wn.oneOff&&y.off(Ue,hi.type,mt,Ae),Ae.apply(vt,[hi])}}(f,c,C):function(Ue,mt){return function Ae(wn){return Pe(wn,{delegateTarget:Ue}),Ae.oneOff&&y.off(Ue,wn.type,mt),mt.apply(Ue,[wn])}}(f,C);je.delegationSelector=w?c:null,je.callable=C,je.oneOff=m,je.uidEvent=Se,ue[Se]=je,f.addEventListener(M,je,w)}function Qe(f,r,c,d,m){const w=ce(r[c],d,m);w&&(f.removeEventListener(c,w,!!m),delete r[c][w.uidEvent])}function un(f,r,c,d){const m=r[c]||{};for(const[w,C]of Object.entries(m))w.includes(d)&&Qe(f,r,c,C.callable,C.delegationSelector)}function Xe(f){return f=f.replace(Y,""),J[f]||f}const y={on(f,r,c,d){Re(f,r,c,d,!1)},one(f,r,c,d){Re(f,r,c,d,!0)},off(f,r,c,d){if(typeof r!="string"||!f)return;const[m,w,C]=at(r,c,d),M=C!==r,z=ne(f),ue=z[C]||{},ge=r.startsWith(".");if(w===void 0){if(ge)for(const Se of Object.keys(z))un(f,z,Se,r.slice(1));for(const[Se,je]of Object.entries(ue)){const Ue=Se.replace(G,"");M&&!r.includes(Ue)||Qe(f,z,C,je.callable,je.delegationSelector)}}else{if(!Object.keys(ue).length)return;Qe(f,z,C,w,m?c:null)}},trigger(f,r,c){if(typeof r!="string"||!f)return null;const d=P();let m=null,w=!0,C=!0,M=!1;r!==Xe(r)&&d&&(m=d.Event(r,c),d(f).trigger(m),w=!m.isPropagationStopped(),C=!m.isImmediatePropagationStopped(),M=m.isDefaultPrevented());const z=Pe(new Event(r,{bubbles:w,cancelable:!0}),c);return M&&z.preventDefault(),C&&f.dispatchEvent(z),z.defaultPrevented&&m&&m.preventDefault(),z}};function Pe(f,r={}){for(const[c,d]of Object.entries(r))try{f[c]=d}catch{Object.defineProperty(f,c,{configurable:!0,get:()=>d})}return f}function Ce(f){if(f==="true")return!0;if(f==="false")return!1;if(f===Number(f).toString())return Number(f);if(f===""||f==="null")return null;if(typeof f!="string")return f;try{return JSON.parse(decodeURIComponent(f))}catch{return f}}function $e(f){return f.replace(/[A-Z]/g,r=>`-${r.toLowerCase()}`)}const he={setDataAttribute(f,r,c){f.setAttribute(`data-bs-${$e(r)}`,c)},removeDataAttribute(f,r){f.removeAttribute(`data-bs-${$e(r)}`)},getDataAttributes(f){if(!f)return{};const r={},c=Object.keys(f.dataset).filter(d=>d.startsWith("bs")&&!d.startsWith("bsConfig"));for(const d of c){let m=d.replace(/^bs/,"");m=m.charAt(0).toLowerCase()+m.slice(1,m.length),r[m]=Ce(f.dataset[d])}return r},getDataAttribute:(f,r)=>Ce(f.getAttribute(`data-bs-${$e(r)}`))};class _e{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(r){return r=this._mergeConfigObj(r),r=this._configAfterMerge(r),this._typeCheckConfig(r),r}_configAfterMerge(r){return r}_mergeConfigObj(r,c){const d=p(c)?he.getDataAttribute(c,"config"):{};return{...this.constructor.Default,...typeof d=="object"?d:{},...p(c)?he.getDataAttributes(c):{},...typeof r=="object"?r:{}}}_typeCheckConfig(r,c=this.constructor.DefaultType){for(const[m,w]of Object.entries(c)){const C=r[m],M=p(C)?"element":(d=C)==null?`${d}`:Object.prototype.toString.call(d).match(/\s([a-z]+)/i)[1].toLowerCase();if(!new RegExp(w).test(M))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${m}" provided type "${M}" but expected type "${w}".`)}var d}}class re extends _e{constructor(r,c){super(),(r=_(r))&&(this._element=r,this._config=this._getConfig(c),a.set(this._element,this.constructor.DATA_KEY,this))}dispose(){a.remove(this._element,this.constructor.DATA_KEY),y.off(this._element,this.constructor.EVENT_KEY);for(const r of Object.getOwnPropertyNames(this))this[r]=null}_queueCallback(r,c,d=!0){L(r,c,d)}_getConfig(r){return r=this._mergeConfigObj(r,this._element),r=this._configAfterMerge(r),this._typeCheckConfig(r),r}static getInstance(r){return a.get(_(r),this.DATA_KEY)}static getOrCreateInstance(r,c={}){return this.getInstance(r)||new this(r,typeof c=="object"?c:null)}static get VERSION(){return"5.3.1"}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(r){return`${r}${this.EVENT_KEY}`}}const dn=f=>{let r=f.getAttribute("data-bs-target");if(!r||r==="#"){let c=f.getAttribute("href");if(!c||!c.includes("#")&&!c.startsWith("."))return null;c.includes("#")&&!c.startsWith("#")&&(c=`#${c.split("#")[1]}`),r=c&&c!=="#"?c.trim():null}return h(r)},I={find:(f,r=document.documentElement)=>[].concat(...Element.prototype.querySelectorAll.call(r,f)),findOne:(f,r=document.documentElement)=>Element.prototype.querySelector.call(r,f),children:(f,r)=>[].concat(...f.children).filter(c=>c.matches(r)),parents(f,r){const c=[];let d=f.parentNode.closest(r);for(;d;)c.push(d),d=d.parentNode.closest(r);return c},prev(f,r){let c=f.previousElementSibling;for(;c;){if(c.matches(r))return[c];c=c.previousElementSibling}return[]},next(f,r){let c=f.nextElementSibling;for(;c;){if(c.matches(r))return[c];c=c.nextElementSibling}return[]},focusableChildren(f){const r=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map(c=>`${c}:not([tabindex^="-"])`).join(",");return this.find(r,f).filter(c=>!v(c)&&g(c))},getSelectorFromElement(f){const r=dn(f);return r&&I.findOne(r)?r:null},getElementFromSelector(f){const r=dn(f);return r?I.findOne(r):null},getMultipleElementsFromSelector(f){const r=dn(f);return r?I.find(r):[]}},Rt=(f,r="hide")=>{const c=`click.dismiss${f.EVENT_KEY}`,d=f.NAME;y.on(document,c,`[data-bs-dismiss="${d}"]`,function(m){if(["A","AREA"].includes(this.tagName)&&m.preventDefault(),v(this))return;const w=I.getElementFromSelector(this)||this.closest(`.${d}`);f.getOrCreateInstance(w)[r]()})},fn=".bs.alert",zi=`close${fn}`,qi=`closed${fn}`;class Je extends re{static get NAME(){return"alert"}close(){if(y.trigger(this._element,zi).defaultPrevented)return;this._element.classList.remove("show");const r=this._element.classList.contains("fade");this._queueCallback(()=>this._destroyElement(),this._element,r)}_destroyElement(){this._element.remove(),y.trigger(this._element,qi),this.dispose()}static jQueryInterface(r){return this.each(function(){const c=Je.getOrCreateInstance(this);if(typeof r=="string"){if(c[r]===void 0||r.startsWith("_")||r==="constructor")throw new TypeError(`No method named "${r}"`);c[r](this)}})}}Rt(Je,"close"),A(Je);const pn='[data-bs-toggle="button"]';class lt extends re{static get NAME(){return"button"}toggle(){this._element.setAttribute("aria-pressed",this._element.classList.toggle("active"))}static jQueryInterface(r){return this.each(function(){const c=lt.getOrCreateInstance(this);r==="toggle"&&c[r]()})}}y.on(document,"click.bs.button.data-api",pn,f=>{f.preventDefault();const r=f.target.closest(pn);lt.getOrCreateInstance(r).toggle()}),A(lt);const Ze=".bs.swipe",Be=`touchstart${Ze}`,Pt=`touchmove${Ze}`,Qn=`touchend${Ze}`,Xn=`pointerdown${Ze}`,_n=`pointerup${Ze}`,Jn={endCallback:null,leftCallback:null,rightCallback:null},Zn={endCallback:"(function|null)",leftCallback:"(function|null)",rightCallback:"(function|null)"};class ct extends _e{constructor(r,c){super(),this._element=r,r&&ct.isSupported()&&(this._config=this._getConfig(c),this._deltaX=0,this._supportPointerEvents=!!window.PointerEvent,this._initEvents())}static get Default(){return Jn}static get DefaultType(){return Zn}static get NAME(){return"swipe"}dispose(){y.off(this._element,Ze)}_start(r){this._supportPointerEvents?this._eventIsPointerPenTouch(r)&&(this._deltaX=r.clientX):this._deltaX=r.touches[0].clientX}_end(r){this._eventIsPointerPenTouch(r)&&(this._deltaX=r.clientX-this._deltaX),this._handleSwipe(),x(this._config.endCallback)}_move(r){this._deltaX=r.touches&&r.touches.length>1?0:r.touches[0].clientX-this._deltaX}_handleSwipe(){const r=Math.abs(this._deltaX);if(r<=40)return;const c=r/this._deltaX;this._deltaX=0,c&&x(c>0?this._config.rightCallback:this._config.leftCallback)}_initEvents(){this._supportPointerEvents?(y.on(this._element,Xn,r=>this._start(r)),y.on(this._element,_n,r=>this._end(r)),this._element.classList.add("pointer-event")):(y.on(this._element,Be,r=>this._start(r)),y.on(this._element,Pt,r=>this._move(r)),y.on(this._element,Qn,r=>this._end(r)))}_eventIsPointerPenTouch(r){return this._supportPointerEvents&&(r.pointerType==="pen"||r.pointerType==="touch")}static isSupported(){return"ontouchstart"in document.documentElement||navigator.maxTouchPoints>0}}const Te=".bs.carousel",Dr=".data-api",gn="next",Mt="prev",Lt="left",ei="right",yc=`slide${Te}`,Gi=`slid${Te}`,bc=`keydown${Te}`,wc=`mouseenter${Te}`,Ec=`mouseleave${Te}`,Cc=`dragstart${Te}`,Tc=`load${Te}${Dr}`,Ic=`click${Te}${Dr}`,Rr="carousel",ti="active",Pr=".active",Mr=".carousel-item",Sc=Pr+Mr,Ac={ArrowLeft:ei,ArrowRight:Lt},Nc={interval:5e3,keyboard:!0,pause:"hover",ride:!1,touch:!0,wrap:!0},xc={interval:"(number|boolean)",keyboard:"boolean",pause:"(string|boolean)",ride:"(boolean|string)",touch:"boolean",wrap:"boolean"};class Ft extends re{constructor(r,c){super(r,c),this._interval=null,this._activeElement=null,this._isSliding=!1,this.touchTimeout=null,this._swipeHelper=null,this._indicatorsElement=I.findOne(".carousel-indicators",this._element),this._addEventListeners(),this._config.ride===Rr&&this.cycle()}static get Default(){return Nc}static get DefaultType(){return xc}static get NAME(){return"carousel"}next(){this._slide(gn)}nextWhenVisible(){!document.hidden&&g(this._element)&&this.next()}prev(){this._slide(Mt)}pause(){this._isSliding&&u(this._element),this._clearInterval()}cycle(){this._clearInterval(),this._updateInterval(),this._interval=setInterval(()=>this.nextWhenVisible(),this._config.interval)}_maybeEnableCycle(){this._config.ride&&(this._isSliding?y.one(this._element,Gi,()=>this.cycle()):this.cycle())}to(r){const c=this._getItems();if(r>c.length-1||r<0)return;if(this._isSliding)return void y.one(this._element,Gi,()=>this.to(r));const d=this._getItemIndex(this._getActive());if(d===r)return;const m=r>d?gn:Mt;this._slide(m,c[r])}dispose(){this._swipeHelper&&this._swipeHelper.dispose(),super.dispose()}_configAfterMerge(r){return r.defaultInterval=r.interval,r}_addEventListeners(){this._config.keyboard&&y.on(this._element,bc,r=>this._keydown(r)),this._config.pause==="hover"&&(y.on(this._element,wc,()=>this.pause()),y.on(this._element,Ec,()=>this._maybeEnableCycle())),this._config.touch&&ct.isSupported()&&this._addTouchEventListeners()}_addTouchEventListeners(){for(const c of I.find(".carousel-item img",this._element))y.on(c,Cc,d=>d.preventDefault());const r={leftCallback:()=>this._slide(this._directionToOrder(Lt)),rightCallback:()=>this._slide(this._directionToOrder(ei)),endCallback:()=>{this._config.pause==="hover"&&(this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout(()=>this._maybeEnableCycle(),500+this._config.interval))}};this._swipeHelper=new ct(this._element,r)}_keydown(r){if(/input|textarea/i.test(r.target.tagName))return;const c=Ac[r.key];c&&(r.preventDefault(),this._slide(this._directionToOrder(c)))}_getItemIndex(r){return this._getItems().indexOf(r)}_setActiveIndicatorElement(r){if(!this._indicatorsElement)return;const c=I.findOne(Pr,this._indicatorsElement);c.classList.remove(ti),c.removeAttribute("aria-current");const d=I.findOne(`[data-bs-slide-to="${r}"]`,this._indicatorsElement);d&&(d.classList.add(ti),d.setAttribute("aria-current","true"))}_updateInterval(){const r=this._activeElement||this._getActive();if(!r)return;const c=Number.parseInt(r.getAttribute("data-bs-interval"),10);this._config.interval=c||this._config.defaultInterval}_slide(r,c=null){if(this._isSliding)return;const d=this._getActive(),m=r===gn,w=c||H(this._getItems(),d,m,this._config.wrap);if(w===d)return;const C=this._getItemIndex(w),M=Se=>y.trigger(this._element,Se,{relatedTarget:w,direction:this._orderToDirection(r),from:this._getItemIndex(d),to:C});if(M(yc).defaultPrevented||!d||!w)return;const z=!!this._interval;this.pause(),this._isSliding=!0,this._setActiveIndicatorElement(C),this._activeElement=w;const ue=m?"carousel-item-start":"carousel-item-end",ge=m?"carousel-item-next":"carousel-item-prev";w.classList.add(ge),S(w),d.classList.add(ue),w.classList.add(ue),this._queueCallback(()=>{w.classList.remove(ue,ge),w.classList.add(ti),d.classList.remove(ti,ge,ue),this._isSliding=!1,M(Gi)},d,this._isAnimated()),z&&this.cycle()}_isAnimated(){return this._element.classList.contains("slide")}_getActive(){return I.findOne(Sc,this._element)}_getItems(){return I.find(Mr,this._element)}_clearInterval(){this._interval&&(clearInterval(this._interval),this._interval=null)}_directionToOrder(r){return O()?r===Lt?Mt:gn:r===Lt?gn:Mt}_orderToDirection(r){return O()?r===Mt?Lt:ei:r===Mt?ei:Lt}static jQueryInterface(r){return this.each(function(){const c=Ft.getOrCreateInstance(this,r);if(typeof r!="number"){if(typeof r=="string"){if(c[r]===void 0||r.startsWith("_")||r==="constructor")throw new TypeError(`No method named "${r}"`);c[r]()}}else c.to(r)})}}y.on(document,Ic,"[data-bs-slide], [data-bs-slide-to]",function(f){const r=I.getElementFromSelector(this);if(!r||!r.classList.contains(Rr))return;f.preventDefault();const c=Ft.getOrCreateInstance(r),d=this.getAttribute("data-bs-slide-to");return d?(c.to(d),void c._maybeEnableCycle()):he.getDataAttribute(this,"slide")==="next"?(c.next(),void c._maybeEnableCycle()):(c.prev(),void c._maybeEnableCycle())}),y.on(window,Tc,()=>{const f=I.find('[data-bs-ride="carousel"]');for(const r of f)Ft.getOrCreateInstance(r)}),A(Ft);const mn=".bs.collapse",Oc=`show${mn}`,kc=`shown${mn}`,Dc=`hide${mn}`,Rc=`hidden${mn}`,Pc=`click${mn}.data-api`,Yi="show",$t="collapse",ni="collapsing",Mc=`:scope .${$t} .${$t}`,Ki='[data-bs-toggle="collapse"]',Lc={parent:null,toggle:!0},Fc={parent:"(null|element)",toggle:"boolean"};class Bt extends re{constructor(r,c){super(r,c),this._isTransitioning=!1,this._triggerArray=[];const d=I.find(Ki);for(const m of d){const w=I.getSelectorFromElement(m),C=I.find(w).filter(M=>M===this._element);w!==null&&C.length&&this._triggerArray.push(m)}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return Lc}static get DefaultType(){return Fc}static get NAME(){return"collapse"}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let r=[];if(this._config.parent&&(r=this._getFirstLevelChildren(".collapse.show, .collapse.collapsing").filter(m=>m!==this._element).map(m=>Bt.getOrCreateInstance(m,{toggle:!1}))),r.length&&r[0]._isTransitioning||y.trigger(this._element,Oc).defaultPrevented)return;for(const m of r)m.hide();const c=this._getDimension();this._element.classList.remove($t),this._element.classList.add(ni),this._element.style[c]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const d=`scroll${c[0].toUpperCase()+c.slice(1)}`;this._queueCallback(()=>{this._isTransitioning=!1,this._element.classList.remove(ni),this._element.classList.add($t,Yi),this._element.style[c]="",y.trigger(this._element,kc)},this._element,!0),this._element.style[c]=`${this._element[d]}px`}hide(){if(this._isTransitioning||!this._isShown()||y.trigger(this._element,Dc).defaultPrevented)return;const r=this._getDimension();this._element.style[r]=`${this._element.getBoundingClientRect()[r]}px`,S(this._element),this._element.classList.add(ni),this._element.classList.remove($t,Yi);for(const c of this._triggerArray){const d=I.getElementFromSelector(c);d&&!this._isShown(d)&&this._addAriaAndCollapsedClass([c],!1)}this._isTransitioning=!0,this._element.style[r]="",this._queueCallback(()=>{this._isTransitioning=!1,this._element.classList.remove(ni),this._element.classList.add($t),y.trigger(this._element,Rc)},this._element,!0)}_isShown(r=this._element){return r.classList.contains(Yi)}_configAfterMerge(r){return r.toggle=!!r.toggle,r.parent=_(r.parent),r}_getDimension(){return this._element.classList.contains("collapse-horizontal")?"width":"height"}_initializeChildren(){if(!this._config.parent)return;const r=this._getFirstLevelChildren(Ki);for(const c of r){const d=I.getElementFromSelector(c);d&&this._addAriaAndCollapsedClass([c],this._isShown(d))}}_getFirstLevelChildren(r){const c=I.find(Mc,this._config.parent);return I.find(r,this._config.parent).filter(d=>!c.includes(d))}_addAriaAndCollapsedClass(r,c){if(r.length)for(const d of r)d.classList.toggle("collapsed",!c),d.setAttribute("aria-expanded",c)}static jQueryInterface(r){const c={};return typeof r=="string"&&/show|hide/.test(r)&&(c.toggle=!1),this.each(function(){const d=Bt.getOrCreateInstance(this,c);if(typeof r=="string"){if(d[r]===void 0)throw new TypeError(`No method named "${r}"`);d[r]()}})}}y.on(document,Pc,Ki,function(f){(f.target.tagName==="A"||f.delegateTarget&&f.delegateTarget.tagName==="A")&&f.preventDefault();for(const r of I.getMultipleElementsFromSelector(this))Bt.getOrCreateInstance(r,{toggle:!1}).toggle()}),A(Bt);const Lr="dropdown",ht=".bs.dropdown",Qi=".data-api",$c="ArrowUp",Fr="ArrowDown",Bc=`hide${ht}`,Wc=`hidden${ht}`,Hc=`show${ht}`,jc=`shown${ht}`,$r=`click${ht}${Qi}`,Br=`keydown${ht}${Qi}`,Uc=`keyup${ht}${Qi}`,Wt="show",ut='[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',Vc=`${ut}.${Wt}`,ii=".dropdown-menu",zc=O()?"top-end":"top-start",qc=O()?"top-start":"top-end",Gc=O()?"bottom-end":"bottom-start",Yc=O()?"bottom-start":"bottom-end",Kc=O()?"left-start":"right-start",Qc=O()?"right-start":"left-start",Xc={autoClose:!0,boundary:"clippingParents",display:"dynamic",offset:[0,2],popperConfig:null,reference:"toggle"},Jc={autoClose:"(boolean|string)",boundary:"(string|element)",display:"string",offset:"(array|string|function)",popperConfig:"(null|object|function)",reference:"(string|element|object)"};class Ie extends re{constructor(r,c){super(r,c),this._popper=null,this._parent=this._element.parentNode,this._menu=I.next(this._element,ii)[0]||I.prev(this._element,ii)[0]||I.findOne(ii,this._parent),this._inNavbar=this._detectNavbar()}static get Default(){return Xc}static get DefaultType(){return Jc}static get NAME(){return Lr}toggle(){return this._isShown()?this.hide():this.show()}show(){if(v(this._element)||this._isShown())return;const r={relatedTarget:this._element};if(!y.trigger(this._element,Hc,r).defaultPrevented){if(this._createPopper(),"ontouchstart"in document.documentElement&&!this._parent.closest(".navbar-nav"))for(const c of[].concat(...document.body.children))y.on(c,"mouseover",T);this._element.focus(),this._element.setAttribute("aria-expanded",!0),this._menu.classList.add(Wt),this._element.classList.add(Wt),y.trigger(this._element,jc,r)}}hide(){if(v(this._element)||!this._isShown())return;const r={relatedTarget:this._element};this._completeHide(r)}dispose(){this._popper&&this._popper.destroy(),super.dispose()}update(){this._inNavbar=this._detectNavbar(),this._popper&&this._popper.update()}_completeHide(r){if(!y.trigger(this._element,Bc,r).defaultPrevented){if("ontouchstart"in document.documentElement)for(const c of[].concat(...document.body.children))y.off(c,"mouseover",T);this._popper&&this._popper.destroy(),this._menu.classList.remove(Wt),this._element.classList.remove(Wt),this._element.setAttribute("aria-expanded","false"),he.removeDataAttribute(this._menu,"popper"),y.trigger(this._element,Wc,r)}}_getConfig(r){if(typeof(r=super._getConfig(r)).reference=="object"&&!p(r.reference)&&typeof r.reference.getBoundingClientRect!="function")throw new TypeError(`${Lr.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);return r}_createPopper(){if(s===void 0)throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");let r=this._element;this._config.reference==="parent"?r=this._parent:p(this._config.reference)?r=_(this._config.reference):typeof this._config.reference=="object"&&(r=this._config.reference);const c=this._getPopperConfig();this._popper=s.createPopper(r,this._menu,c)}_isShown(){return this._menu.classList.contains(Wt)}_getPlacement(){const r=this._parent;if(r.classList.contains("dropend"))return Kc;if(r.classList.contains("dropstart"))return Qc;if(r.classList.contains("dropup-center"))return"top";if(r.classList.contains("dropdown-center"))return"bottom";const c=getComputedStyle(this._menu).getPropertyValue("--bs-position").trim()==="end";return r.classList.contains("dropup")?c?qc:zc:c?Yc:Gc}_detectNavbar(){return this._element.closest(".navbar")!==null}_getOffset(){const{offset:r}=this._config;return typeof r=="string"?r.split(",").map(c=>Number.parseInt(c,10)):typeof r=="function"?c=>r(c,this._element):r}_getPopperConfig(){const r={placement:this._getPlacement(),modifiers:[{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"offset",options:{offset:this._getOffset()}}]};return(this._inNavbar||this._config.display==="static")&&(he.setDataAttribute(this._menu,"popper","static"),r.modifiers=[{name:"applyStyles",enabled:!1}]),{...r,...x(this._config.popperConfig,[r])}}_selectMenuItem({key:r,target:c}){const d=I.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",this._menu).filter(m=>g(m));d.length&&H(d,c,r===Fr,!d.includes(c)).focus()}static jQueryInterface(r){return this.each(function(){const c=Ie.getOrCreateInstance(this,r);if(typeof r=="string"){if(c[r]===void 0)throw new TypeError(`No method named "${r}"`);c[r]()}})}static clearMenus(r){if(r.button===2||r.type==="keyup"&&r.key!=="Tab")return;const c=I.find(Vc);for(const d of c){const m=Ie.getInstance(d);if(!m||m._config.autoClose===!1)continue;const w=r.composedPath(),C=w.includes(m._menu);if(w.includes(m._element)||m._config.autoClose==="inside"&&!C||m._config.autoClose==="outside"&&C||m._menu.contains(r.target)&&(r.type==="keyup"&&r.key==="Tab"||/input|select|option|textarea|form/i.test(r.target.tagName)))continue;const M={relatedTarget:m._element};r.type==="click"&&(M.clickEvent=r),m._completeHide(M)}}static dataApiKeydownHandler(r){const c=/input|textarea/i.test(r.target.tagName),d=r.key==="Escape",m=[$c,Fr].includes(r.key);if(!m&&!d||c&&!d)return;r.preventDefault();const w=this.matches(ut)?this:I.prev(this,ut)[0]||I.next(this,ut)[0]||I.findOne(ut,r.delegateTarget.parentNode),C=Ie.getOrCreateInstance(w);if(m)return r.stopPropagation(),C.show(),void C._selectMenuItem(r);C._isShown()&&(r.stopPropagation(),C.hide(),w.focus())}}y.on(document,Br,ut,Ie.dataApiKeydownHandler),y.on(document,Br,ii,Ie.dataApiKeydownHandler),y.on(document,$r,Ie.clearMenus),y.on(document,Uc,Ie.clearMenus),y.on(document,$r,ut,function(f){f.preventDefault(),Ie.getOrCreateInstance(this).toggle()}),A(Ie);const Wr="backdrop",Hr="show",jr=`mousedown.bs.${Wr}`,Zc={className:"modal-backdrop",clickCallback:null,isAnimated:!1,isVisible:!0,rootElement:"body"},eh={className:"string",clickCallback:"(function|null)",isAnimated:"boolean",isVisible:"boolean",rootElement:"(element|string)"};class Ur extends _e{constructor(r){super(),this._config=this._getConfig(r),this._isAppended=!1,this._element=null}static get Default(){return Zc}static get DefaultType(){return eh}static get NAME(){return Wr}show(r){if(!this._config.isVisible)return void x(r);this._append();const c=this._getElement();this._config.isAnimated&&S(c),c.classList.add(Hr),this._emulateAnimation(()=>{x(r)})}hide(r){this._config.isVisible?(this._getElement().classList.remove(Hr),this._emulateAnimation(()=>{this.dispose(),x(r)})):x(r)}dispose(){this._isAppended&&(y.off(this._element,jr),this._element.remove(),this._isAppended=!1)}_getElement(){if(!this._element){const r=document.createElement("div");r.className=this._config.className,this._config.isAnimated&&r.classList.add("fade"),this._element=r}return this._element}_configAfterMerge(r){return r.rootElement=_(r.rootElement),r}_append(){if(this._isAppended)return;const r=this._getElement();this._config.rootElement.append(r),y.on(r,jr,()=>{x(this._config.clickCallback)}),this._isAppended=!0}_emulateAnimation(r){L(r,this._getElement(),this._config.isAnimated)}}const si=".bs.focustrap",th=`focusin${si}`,nh=`keydown.tab${si}`,Vr="backward",ih={autofocus:!0,trapElement:null},sh={autofocus:"boolean",trapElement:"element"};class zr extends _e{constructor(r){super(),this._config=this._getConfig(r),this._isActive=!1,this._lastTabNavDirection=null}static get Default(){return ih}static get DefaultType(){return sh}static get NAME(){return"focustrap"}activate(){this._isActive||(this._config.autofocus&&this._config.trapElement.focus(),y.off(document,si),y.on(document,th,r=>this._handleFocusin(r)),y.on(document,nh,r=>this._handleKeydown(r)),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,y.off(document,si))}_handleFocusin(r){const{trapElement:c}=this._config;if(r.target===document||r.target===c||c.contains(r.target))return;const d=I.focusableChildren(c);d.length===0?c.focus():this._lastTabNavDirection===Vr?d[d.length-1].focus():d[0].focus()}_handleKeydown(r){r.key==="Tab"&&(this._lastTabNavDirection=r.shiftKey?Vr:"forward")}}const qr=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",Gr=".sticky-top",ri="padding-right",Yr="margin-right";class Xi{constructor(){this._element=document.body}getWidth(){const r=document.documentElement.clientWidth;return Math.abs(window.innerWidth-r)}hide(){const r=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,ri,c=>c+r),this._setElementAttributes(qr,ri,c=>c+r),this._setElementAttributes(Gr,Yr,c=>c-r)}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,ri),this._resetElementAttributes(qr,ri),this._resetElementAttributes(Gr,Yr)}isOverflowing(){return this.getWidth()>0}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(r,c,d){const m=this.getWidth();this._applyManipulationCallback(r,w=>{if(w!==this._element&&window.innerWidth>w.clientWidth+m)return;this._saveInitialAttribute(w,c);const C=window.getComputedStyle(w).getPropertyValue(c);w.style.setProperty(c,`${d(Number.parseFloat(C))}px`)})}_saveInitialAttribute(r,c){const d=r.style.getPropertyValue(c);d&&he.setDataAttribute(r,c,d)}_resetElementAttributes(r,c){this._applyManipulationCallback(r,d=>{const m=he.getDataAttribute(d,c);m!==null?(he.removeDataAttribute(d,c),d.style.setProperty(c,m)):d.style.removeProperty(c)})}_applyManipulationCallback(r,c){if(p(r))c(r);else for(const d of I.find(r,this._element))c(d)}}const we=".bs.modal",rh=`hide${we}`,oh=`hidePrevented${we}`,Kr=`hidden${we}`,Qr=`show${we}`,ah=`shown${we}`,lh=`resize${we}`,ch=`click.dismiss${we}`,hh=`mousedown.dismiss${we}`,uh=`keydown.dismiss${we}`,dh=`click${we}.data-api`,Xr="modal-open",Jr="show",Ji="modal-static",fh={backdrop:!0,focus:!0,keyboard:!0},ph={backdrop:"(boolean|string)",focus:"boolean",keyboard:"boolean"};class dt extends re{constructor(r,c){super(r,c),this._dialog=I.findOne(".modal-dialog",this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._isTransitioning=!1,this._scrollBar=new Xi,this._addEventListeners()}static get Default(){return fh}static get DefaultType(){return ph}static get NAME(){return"modal"}toggle(r){return this._isShown?this.hide():this.show(r)}show(r){this._isShown||this._isTransitioning||y.trigger(this._element,Qr,{relatedTarget:r}).defaultPrevented||(this._isShown=!0,this._isTransitioning=!0,this._scrollBar.hide(),document.body.classList.add(Xr),this._adjustDialog(),this._backdrop.show(()=>this._showElement(r)))}hide(){this._isShown&&!this._isTransitioning&&(y.trigger(this._element,rh).defaultPrevented||(this._isShown=!1,this._isTransitioning=!0,this._focustrap.deactivate(),this._element.classList.remove(Jr),this._queueCallback(()=>this._hideModal(),this._element,this._isAnimated())))}dispose(){y.off(window,we),y.off(this._dialog,we),this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new Ur({isVisible:!!this._config.backdrop,isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new zr({trapElement:this._element})}_showElement(r){document.body.contains(this._element)||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0;const c=I.findOne(".modal-body",this._dialog);c&&(c.scrollTop=0),S(this._element),this._element.classList.add(Jr),this._queueCallback(()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,y.trigger(this._element,ah,{relatedTarget:r})},this._dialog,this._isAnimated())}_addEventListeners(){y.on(this._element,uh,r=>{r.key==="Escape"&&(this._config.keyboard?this.hide():this._triggerBackdropTransition())}),y.on(window,lh,()=>{this._isShown&&!this._isTransitioning&&this._adjustDialog()}),y.on(this._element,hh,r=>{y.one(this._element,ch,c=>{this._element===r.target&&this._element===c.target&&(this._config.backdrop!=="static"?this._config.backdrop&&this.hide():this._triggerBackdropTransition())})})}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide(()=>{document.body.classList.remove(Xr),this._resetAdjustments(),this._scrollBar.reset(),y.trigger(this._element,Kr)})}_isAnimated(){return this._element.classList.contains("fade")}_triggerBackdropTransition(){if(y.trigger(this._element,oh).defaultPrevented)return;const r=this._element.scrollHeight>document.documentElement.clientHeight,c=this._element.style.overflowY;c==="hidden"||this._element.classList.contains(Ji)||(r||(this._element.style.overflowY="hidden"),this._element.classList.add(Ji),this._queueCallback(()=>{this._element.classList.remove(Ji),this._queueCallback(()=>{this._element.style.overflowY=c},this._dialog)},this._dialog),this._element.focus())}_adjustDialog(){const r=this._element.scrollHeight>document.documentElement.clientHeight,c=this._scrollBar.getWidth(),d=c>0;if(d&&!r){const m=O()?"paddingLeft":"paddingRight";this._element.style[m]=`${c}px`}if(!d&&r){const m=O()?"paddingRight":"paddingLeft";this._element.style[m]=`${c}px`}}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(r,c){return this.each(function(){const d=dt.getOrCreateInstance(this,r);if(typeof r=="string"){if(d[r]===void 0)throw new TypeError(`No method named "${r}"`);d[r](c)}})}}y.on(document,dh,'[data-bs-toggle="modal"]',function(f){const r=I.getElementFromSelector(this);["A","AREA"].includes(this.tagName)&&f.preventDefault(),y.one(r,Qr,d=>{d.defaultPrevented||y.one(r,Kr,()=>{g(this)&&this.focus()})});const c=I.findOne(".modal.show");c&&dt.getInstance(c).hide(),dt.getOrCreateInstance(r).toggle(this)}),Rt(dt),A(dt);const We=".bs.offcanvas",Zr=".data-api",_h=`load${We}${Zr}`,eo="show",to="showing",no="hiding",io=".offcanvas.show",gh=`show${We}`,mh=`shown${We}`,vh=`hide${We}`,so=`hidePrevented${We}`,ro=`hidden${We}`,yh=`resize${We}`,bh=`click${We}${Zr}`,wh=`keydown.dismiss${We}`,Eh={backdrop:!0,keyboard:!0,scroll:!1},Ch={backdrop:"(boolean|string)",keyboard:"boolean",scroll:"boolean"};class He extends re{constructor(r,c){super(r,c),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._addEventListeners()}static get Default(){return Eh}static get DefaultType(){return Ch}static get NAME(){return"offcanvas"}toggle(r){return this._isShown?this.hide():this.show(r)}show(r){this._isShown||y.trigger(this._element,gh,{relatedTarget:r}).defaultPrevented||(this._isShown=!0,this._backdrop.show(),this._config.scroll||new Xi().hide(),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.classList.add(to),this._queueCallback(()=>{this._config.scroll&&!this._config.backdrop||this._focustrap.activate(),this._element.classList.add(eo),this._element.classList.remove(to),y.trigger(this._element,mh,{relatedTarget:r})},this._element,!0))}hide(){this._isShown&&(y.trigger(this._element,vh).defaultPrevented||(this._focustrap.deactivate(),this._element.blur(),this._isShown=!1,this._element.classList.add(no),this._backdrop.hide(),this._queueCallback(()=>{this._element.classList.remove(eo,no),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._config.scroll||new Xi().reset(),y.trigger(this._element,ro)},this._element,!0)))}dispose(){this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}_initializeBackDrop(){const r=!!this._config.backdrop;return new Ur({className:"offcanvas-backdrop",isVisible:r,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:r?()=>{this._config.backdrop!=="static"?this.hide():y.trigger(this._element,so)}:null})}_initializeFocusTrap(){return new zr({trapElement:this._element})}_addEventListeners(){y.on(this._element,wh,r=>{r.key==="Escape"&&(this._config.keyboard?this.hide():y.trigger(this._element,so))})}static jQueryInterface(r){return this.each(function(){const c=He.getOrCreateInstance(this,r);if(typeof r=="string"){if(c[r]===void 0||r.startsWith("_")||r==="constructor")throw new TypeError(`No method named "${r}"`);c[r](this)}})}}y.on(document,bh,'[data-bs-toggle="offcanvas"]',function(f){const r=I.getElementFromSelector(this);if(["A","AREA"].includes(this.tagName)&&f.preventDefault(),v(this))return;y.one(r,ro,()=>{g(this)&&this.focus()});const c=I.findOne(io);c&&c!==r&&He.getInstance(c).hide(),He.getOrCreateInstance(r).toggle(this)}),y.on(window,_h,()=>{for(const f of I.find(io))He.getOrCreateInstance(f).show()}),y.on(window,yh,()=>{for(const f of I.find("[aria-modal][class*=show][class*=offcanvas-]"))getComputedStyle(f).position!=="fixed"&&He.getOrCreateInstance(f).hide()}),Rt(He),A(He);const oo={"*":["class","dir","id","lang","role",/^aria-[\w-]*$/i],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},Th=new Set(["background","cite","href","itemtype","longdesc","poster","src","xlink:href"]),Ih=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i,Sh=(f,r)=>{const c=f.nodeName.toLowerCase();return r.includes(c)?!Th.has(c)||!!Ih.test(f.nodeValue):r.filter(d=>d instanceof RegExp).some(d=>d.test(c))},Ah={allowList:oo,content:{},extraClass:"",html:!1,sanitize:!0,sanitizeFn:null,template:"<div></div>"},Nh={allowList:"object",content:"object",extraClass:"(string|function)",html:"boolean",sanitize:"boolean",sanitizeFn:"(null|function)",template:"string"},xh={entry:"(string|element|function|null)",selector:"(string|element)"};class Oh extends _e{constructor(r){super(),this._config=this._getConfig(r)}static get Default(){return Ah}static get DefaultType(){return Nh}static get NAME(){return"TemplateFactory"}getContent(){return Object.values(this._config.content).map(r=>this._resolvePossibleFunction(r)).filter(Boolean)}hasContent(){return this.getContent().length>0}changeContent(r){return this._checkContent(r),this._config.content={...this._config.content,...r},this}toHtml(){const r=document.createElement("div");r.innerHTML=this._maybeSanitize(this._config.template);for(const[m,w]of Object.entries(this._config.content))this._setContent(r,w,m);const c=r.children[0],d=this._resolvePossibleFunction(this._config.extraClass);return d&&c.classList.add(...d.split(" ")),c}_typeCheckConfig(r){super._typeCheckConfig(r),this._checkContent(r.content)}_checkContent(r){for(const[c,d]of Object.entries(r))super._typeCheckConfig({selector:c,entry:d},xh)}_setContent(r,c,d){const m=I.findOne(d,r);m&&((c=this._resolvePossibleFunction(c))?p(c)?this._putElementInTemplate(_(c),m):this._config.html?m.innerHTML=this._maybeSanitize(c):m.textContent=c:m.remove())}_maybeSanitize(r){return this._config.sanitize?function(c,d,m){if(!c.length)return c;if(m&&typeof m=="function")return m(c);const w=new window.DOMParser().parseFromString(c,"text/html"),C=[].concat(...w.body.querySelectorAll("*"));for(const M of C){const z=M.nodeName.toLowerCase();if(!Object.keys(d).includes(z)){M.remove();continue}const ue=[].concat(...M.attributes),ge=[].concat(d["*"]||[],d[z]||[]);for(const Se of ue)Sh(Se,ge)||M.removeAttribute(Se.nodeName)}return w.body.innerHTML}(r,this._config.allowList,this._config.sanitizeFn):r}_resolvePossibleFunction(r){return x(r,[this])}_putElementInTemplate(r,c){if(this._config.html)return c.innerHTML="",void c.append(r);c.textContent=r.textContent}}const kh=new Set(["sanitize","allowList","sanitizeFn"]),Zi="fade",oi="show",ao=".modal",lo="hide.bs.modal",vn="hover",es="focus",Dh={AUTO:"auto",TOP:"top",RIGHT:O()?"left":"right",BOTTOM:"bottom",LEFT:O()?"right":"left"},Rh={allowList:oo,animation:!0,boundary:"clippingParents",container:!1,customClass:"",delay:0,fallbackPlacements:["top","right","bottom","left"],html:!1,offset:[0,6],placement:"top",popperConfig:null,sanitize:!0,sanitizeFn:null,selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',title:"",trigger:"hover focus"},Ph={allowList:"object",animation:"boolean",boundary:"(string|element)",container:"(string|element|boolean)",customClass:"(string|function)",delay:"(number|object)",fallbackPlacements:"array",html:"boolean",offset:"(array|string|function)",placement:"(string|function)",popperConfig:"(null|object|function)",sanitize:"boolean",sanitizeFn:"(null|function)",selector:"(string|boolean)",template:"string",title:"(string|element|function)",trigger:"string"};class ft extends re{constructor(r,c){if(s===void 0)throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");super(r,c),this._isEnabled=!0,this._timeout=0,this._isHovered=null,this._activeTrigger={},this._popper=null,this._templateFactory=null,this._newContent=null,this.tip=null,this._setListeners(),this._config.selector||this._fixTitle()}static get Default(){return Rh}static get DefaultType(){return Ph}static get NAME(){return"tooltip"}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}toggleEnabled(){this._isEnabled=!this._isEnabled}toggle(){this._isEnabled&&(this._activeTrigger.click=!this._activeTrigger.click,this._isShown()?this._leave():this._enter())}dispose(){clearTimeout(this._timeout),y.off(this._element.closest(ao),lo,this._hideModalHandler),this._element.getAttribute("data-bs-original-title")&&this._element.setAttribute("title",this._element.getAttribute("data-bs-original-title")),this._disposePopper(),super.dispose()}show(){if(this._element.style.display==="none")throw new Error("Please use show on visible elements");if(!this._isWithContent()||!this._isEnabled)return;const r=y.trigger(this._element,this.constructor.eventName("show")),c=(E(this._element)||this._element.ownerDocument.documentElement).contains(this._element);if(r.defaultPrevented||!c)return;this._disposePopper();const d=this._getTipElement();this._element.setAttribute("aria-describedby",d.getAttribute("id"));const{container:m}=this._config;if(this._element.ownerDocument.documentElement.contains(this.tip)||(m.append(d),y.trigger(this._element,this.constructor.eventName("inserted"))),this._popper=this._createPopper(d),d.classList.add(oi),"ontouchstart"in document.documentElement)for(const w of[].concat(...document.body.children))y.on(w,"mouseover",T);this._queueCallback(()=>{y.trigger(this._element,this.constructor.eventName("shown")),this._isHovered===!1&&this._leave(),this._isHovered=!1},this.tip,this._isAnimated())}hide(){if(this._isShown()&&!y.trigger(this._element,this.constructor.eventName("hide")).defaultPrevented){if(this._getTipElement().classList.remove(oi),"ontouchstart"in document.documentElement)for(const r of[].concat(...document.body.children))y.off(r,"mouseover",T);this._activeTrigger.click=!1,this._activeTrigger[es]=!1,this._activeTrigger[vn]=!1,this._isHovered=null,this._queueCallback(()=>{this._isWithActiveTrigger()||(this._isHovered||this._disposePopper(),this._element.removeAttribute("aria-describedby"),y.trigger(this._element,this.constructor.eventName("hidden")))},this.tip,this._isAnimated())}}update(){this._popper&&this._popper.update()}_isWithContent(){return!!this._getTitle()}_getTipElement(){return this.tip||(this.tip=this._createTipElement(this._newContent||this._getContentForTemplate())),this.tip}_createTipElement(r){const c=this._getTemplateFactory(r).toHtml();if(!c)return null;c.classList.remove(Zi,oi),c.classList.add(`bs-${this.constructor.NAME}-auto`);const d=(m=>{do m+=Math.floor(1e6*Math.random());while(document.getElementById(m));return m})(this.constructor.NAME).toString();return c.setAttribute("id",d),this._isAnimated()&&c.classList.add(Zi),c}setContent(r){this._newContent=r,this._isShown()&&(this._disposePopper(),this.show())}_getTemplateFactory(r){return this._templateFactory?this._templateFactory.changeContent(r):this._templateFactory=new Oh({...this._config,content:r,extraClass:this._resolvePossibleFunction(this._config.customClass)}),this._templateFactory}_getContentForTemplate(){return{".tooltip-inner":this._getTitle()}}_getTitle(){return this._resolvePossibleFunction(this._config.title)||this._element.getAttribute("data-bs-original-title")}_initializeOnDelegatedTarget(r){return this.constructor.getOrCreateInstance(r.delegateTarget,this._getDelegateConfig())}_isAnimated(){return this._config.animation||this.tip&&this.tip.classList.contains(Zi)}_isShown(){return this.tip&&this.tip.classList.contains(oi)}_createPopper(r){const c=x(this._config.placement,[this,r,this._element]),d=Dh[c.toUpperCase()];return s.createPopper(this._element,r,this._getPopperConfig(d))}_getOffset(){const{offset:r}=this._config;return typeof r=="string"?r.split(",").map(c=>Number.parseInt(c,10)):typeof r=="function"?c=>r(c,this._element):r}_resolvePossibleFunction(r){return x(r,[this._element])}_getPopperConfig(r){const c={placement:r,modifiers:[{name:"flip",options:{fallbackPlacements:this._config.fallbackPlacements}},{name:"offset",options:{offset:this._getOffset()}},{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"arrow",options:{element:`.${this.constructor.NAME}-arrow`}},{name:"preSetPlacement",enabled:!0,phase:"beforeMain",fn:d=>{this._getTipElement().setAttribute("data-popper-placement",d.state.placement)}}]};return{...c,...x(this._config.popperConfig,[c])}}_setListeners(){const r=this._config.trigger.split(" ");for(const c of r)if(c==="click")y.on(this._element,this.constructor.eventName("click"),this._config.selector,d=>{this._initializeOnDelegatedTarget(d).toggle()});else if(c!=="manual"){const d=c===vn?this.constructor.eventName("mouseenter"):this.constructor.eventName("focusin"),m=c===vn?this.constructor.eventName("mouseleave"):this.constructor.eventName("focusout");y.on(this._element,d,this._config.selector,w=>{const C=this._initializeOnDelegatedTarget(w);C._activeTrigger[w.type==="focusin"?es:vn]=!0,C._enter()}),y.on(this._element,m,this._config.selector,w=>{const C=this._initializeOnDelegatedTarget(w);C._activeTrigger[w.type==="focusout"?es:vn]=C._element.contains(w.relatedTarget),C._leave()})}this._hideModalHandler=()=>{this._element&&this.hide()},y.on(this._element.closest(ao),lo,this._hideModalHandler)}_fixTitle(){const r=this._element.getAttribute("title");r&&(this._element.getAttribute("aria-label")||this._element.textContent.trim()||this._element.setAttribute("aria-label",r),this._element.setAttribute("data-bs-original-title",r),this._element.removeAttribute("title"))}_enter(){this._isShown()||this._isHovered?this._isHovered=!0:(this._isHovered=!0,this._setTimeout(()=>{this._isHovered&&this.show()},this._config.delay.show))}_leave(){this._isWithActiveTrigger()||(this._isHovered=!1,this._setTimeout(()=>{this._isHovered||this.hide()},this._config.delay.hide))}_setTimeout(r,c){clearTimeout(this._timeout),this._timeout=setTimeout(r,c)}_isWithActiveTrigger(){return Object.values(this._activeTrigger).includes(!0)}_getConfig(r){const c=he.getDataAttributes(this._element);for(const d of Object.keys(c))kh.has(d)&&delete c[d];return r={...c,...typeof r=="object"&&r?r:{}},r=this._mergeConfigObj(r),r=this._configAfterMerge(r),this._typeCheckConfig(r),r}_configAfterMerge(r){return r.container=r.container===!1?document.body:_(r.container),typeof r.delay=="number"&&(r.delay={show:r.delay,hide:r.delay}),typeof r.title=="number"&&(r.title=r.title.toString()),typeof r.content=="number"&&(r.content=r.content.toString()),r}_getDelegateConfig(){const r={};for(const[c,d]of Object.entries(this._config))this.constructor.Default[c]!==d&&(r[c]=d);return r.selector=!1,r.trigger="manual",r}_disposePopper(){this._popper&&(this._popper.destroy(),this._popper=null),this.tip&&(this.tip.remove(),this.tip=null)}static jQueryInterface(r){return this.each(function(){const c=ft.getOrCreateInstance(this,r);if(typeof r=="string"){if(c[r]===void 0)throw new TypeError(`No method named "${r}"`);c[r]()}})}}A(ft);const Mh={...ft.Default,content:"",offset:[0,8],placement:"right",template:'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',trigger:"click"},Lh={...ft.DefaultType,content:"(null|string|element|function)"};class ai extends ft{static get Default(){return Mh}static get DefaultType(){return Lh}static get NAME(){return"popover"}_isWithContent(){return this._getTitle()||this._getContent()}_getContentForTemplate(){return{".popover-header":this._getTitle(),".popover-body":this._getContent()}}_getContent(){return this._resolvePossibleFunction(this._config.content)}static jQueryInterface(r){return this.each(function(){const c=ai.getOrCreateInstance(this,r);if(typeof r=="string"){if(c[r]===void 0)throw new TypeError(`No method named "${r}"`);c[r]()}})}}A(ai);const ts=".bs.scrollspy",Fh=`activate${ts}`,co=`click${ts}`,$h=`load${ts}.data-api`,Ht="active",ns="[href]",ho=".nav-link",Bh=`${ho}, .nav-item > ${ho}, .list-group-item`,Wh={offset:null,rootMargin:"0px 0px -25%",smoothScroll:!1,target:null,threshold:[.1,.5,1]},Hh={offset:"(number|null)",rootMargin:"string",smoothScroll:"boolean",target:"element",threshold:"array"};class yn extends re{constructor(r,c){super(r,c),this._targetLinks=new Map,this._observableSections=new Map,this._rootElement=getComputedStyle(this._element).overflowY==="visible"?null:this._element,this._activeTarget=null,this._observer=null,this._previousScrollData={visibleEntryTop:0,parentScrollTop:0},this.refresh()}static get Default(){return Wh}static get DefaultType(){return Hh}static get NAME(){return"scrollspy"}refresh(){this._initializeTargetsAndObservables(),this._maybeEnableSmoothScroll(),this._observer?this._observer.disconnect():this._observer=this._getNewObserver();for(const r of this._observableSections.values())this._observer.observe(r)}dispose(){this._observer.disconnect(),super.dispose()}_configAfterMerge(r){return r.target=_(r.target)||document.body,r.rootMargin=r.offset?`${r.offset}px 0px -30%`:r.rootMargin,typeof r.threshold=="string"&&(r.threshold=r.threshold.split(",").map(c=>Number.parseFloat(c))),r}_maybeEnableSmoothScroll(){this._config.smoothScroll&&(y.off(this._config.target,co),y.on(this._config.target,co,ns,r=>{const c=this._observableSections.get(r.target.hash);if(c){r.preventDefault();const d=this._rootElement||window,m=c.offsetTop-this._element.offsetTop;if(d.scrollTo)return void d.scrollTo({top:m,behavior:"smooth"});d.scrollTop=m}}))}_getNewObserver(){const r={root:this._rootElement,threshold:this._config.threshold,rootMargin:this._config.rootMargin};return new IntersectionObserver(c=>this._observerCallback(c),r)}_observerCallback(r){const c=C=>this._targetLinks.get(`#${C.target.id}`),d=C=>{this._previousScrollData.visibleEntryTop=C.target.offsetTop,this._process(c(C))},m=(this._rootElement||document.documentElement).scrollTop,w=m>=this._previousScrollData.parentScrollTop;this._previousScrollData.parentScrollTop=m;for(const C of r){if(!C.isIntersecting){this._activeTarget=null,this._clearActiveClass(c(C));continue}const M=C.target.offsetTop>=this._previousScrollData.visibleEntryTop;if(w&&M){if(d(C),!m)return}else w||M||d(C)}}_initializeTargetsAndObservables(){this._targetLinks=new Map,this._observableSections=new Map;const r=I.find(ns,this._config.target);for(const c of r){if(!c.hash||v(c))continue;const d=I.findOne(decodeURI(c.hash),this._element);g(d)&&(this._targetLinks.set(decodeURI(c.hash),c),this._observableSections.set(c.hash,d))}}_process(r){this._activeTarget!==r&&(this._clearActiveClass(this._config.target),this._activeTarget=r,r.classList.add(Ht),this._activateParents(r),y.trigger(this._element,Fh,{relatedTarget:r}))}_activateParents(r){if(r.classList.contains("dropdown-item"))I.findOne(".dropdown-toggle",r.closest(".dropdown")).classList.add(Ht);else for(const c of I.parents(r,".nav, .list-group"))for(const d of I.prev(c,Bh))d.classList.add(Ht)}_clearActiveClass(r){r.classList.remove(Ht);const c=I.find(`${ns}.${Ht}`,r);for(const d of c)d.classList.remove(Ht)}static jQueryInterface(r){return this.each(function(){const c=yn.getOrCreateInstance(this,r);if(typeof r=="string"){if(c[r]===void 0||r.startsWith("_")||r==="constructor")throw new TypeError(`No method named "${r}"`);c[r]()}})}}y.on(window,$h,()=>{for(const f of I.find('[data-bs-spy="scroll"]'))yn.getOrCreateInstance(f)}),A(yn);const pt=".bs.tab",jh=`hide${pt}`,Uh=`hidden${pt}`,Vh=`show${pt}`,zh=`shown${pt}`,qh=`click${pt}`,Gh=`keydown${pt}`,Yh=`load${pt}`,Kh="ArrowLeft",uo="ArrowRight",Qh="ArrowUp",fo="ArrowDown",is="Home",po="End",_t="active",_o="fade",ss="show",rs=":not(.dropdown-toggle)",go='[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',os=`.nav-link${rs}, .list-group-item${rs}, [role="tab"]${rs}, ${go}`,Xh=`.${_t}[data-bs-toggle="tab"], .${_t}[data-bs-toggle="pill"], .${_t}[data-bs-toggle="list"]`;class gt extends re{constructor(r){super(r),this._parent=this._element.closest('.list-group, .nav, [role="tablist"]'),this._parent&&(this._setInitialAttributes(this._parent,this._getChildren()),y.on(this._element,Gh,c=>this._keydown(c)))}static get NAME(){return"tab"}show(){const r=this._element;if(this._elemIsActive(r))return;const c=this._getActiveElem(),d=c?y.trigger(c,jh,{relatedTarget:r}):null;y.trigger(r,Vh,{relatedTarget:c}).defaultPrevented||d&&d.defaultPrevented||(this._deactivate(c,r),this._activate(r,c))}_activate(r,c){r&&(r.classList.add(_t),this._activate(I.getElementFromSelector(r)),this._queueCallback(()=>{r.getAttribute("role")==="tab"?(r.removeAttribute("tabindex"),r.setAttribute("aria-selected",!0),this._toggleDropDown(r,!0),y.trigger(r,zh,{relatedTarget:c})):r.classList.add(ss)},r,r.classList.contains(_o)))}_deactivate(r,c){r&&(r.classList.remove(_t),r.blur(),this._deactivate(I.getElementFromSelector(r)),this._queueCallback(()=>{r.getAttribute("role")==="tab"?(r.setAttribute("aria-selected",!1),r.setAttribute("tabindex","-1"),this._toggleDropDown(r,!1),y.trigger(r,Uh,{relatedTarget:c})):r.classList.remove(ss)},r,r.classList.contains(_o)))}_keydown(r){if(![Kh,uo,Qh,fo,is,po].includes(r.key))return;r.stopPropagation(),r.preventDefault();const c=this._getChildren().filter(m=>!v(m));let d;if([is,po].includes(r.key))d=c[r.key===is?0:c.length-1];else{const m=[uo,fo].includes(r.key);d=H(c,r.target,m,!0)}d&&(d.focus({preventScroll:!0}),gt.getOrCreateInstance(d).show())}_getChildren(){return I.find(os,this._parent)}_getActiveElem(){return this._getChildren().find(r=>this._elemIsActive(r))||null}_setInitialAttributes(r,c){this._setAttributeIfNotExists(r,"role","tablist");for(const d of c)this._setInitialAttributesOnChild(d)}_setInitialAttributesOnChild(r){r=this._getInnerElement(r);const c=this._elemIsActive(r),d=this._getOuterElement(r);r.setAttribute("aria-selected",c),d!==r&&this._setAttributeIfNotExists(d,"role","presentation"),c||r.setAttribute("tabindex","-1"),this._setAttributeIfNotExists(r,"role","tab"),this._setInitialAttributesOnTargetPanel(r)}_setInitialAttributesOnTargetPanel(r){const c=I.getElementFromSelector(r);c&&(this._setAttributeIfNotExists(c,"role","tabpanel"),r.id&&this._setAttributeIfNotExists(c,"aria-labelledby",`${r.id}`))}_toggleDropDown(r,c){const d=this._getOuterElement(r);if(!d.classList.contains("dropdown"))return;const m=(w,C)=>{const M=I.findOne(w,d);M&&M.classList.toggle(C,c)};m(".dropdown-toggle",_t),m(".dropdown-menu",ss),d.setAttribute("aria-expanded",c)}_setAttributeIfNotExists(r,c,d){r.hasAttribute(c)||r.setAttribute(c,d)}_elemIsActive(r){return r.classList.contains(_t)}_getInnerElement(r){return r.matches(os)?r:I.findOne(os,r)}_getOuterElement(r){return r.closest(".nav-item, .list-group-item")||r}static jQueryInterface(r){return this.each(function(){const c=gt.getOrCreateInstance(this);if(typeof r=="string"){if(c[r]===void 0||r.startsWith("_")||r==="constructor")throw new TypeError(`No method named "${r}"`);c[r]()}})}}y.on(document,qh,go,function(f){["A","AREA"].includes(this.tagName)&&f.preventDefault(),v(this)||gt.getOrCreateInstance(this).show()}),y.on(window,Yh,()=>{for(const f of I.find(Xh))gt.getOrCreateInstance(f)}),A(gt);const et=".bs.toast",Jh=`mouseover${et}`,Zh=`mouseout${et}`,eu=`focusin${et}`,tu=`focusout${et}`,nu=`hide${et}`,iu=`hidden${et}`,su=`show${et}`,ru=`shown${et}`,mo="hide",li="show",ci="showing",ou={animation:"boolean",autohide:"boolean",delay:"number"},au={animation:!0,autohide:!0,delay:5e3};class bn extends re{constructor(r,c){super(r,c),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get Default(){return au}static get DefaultType(){return ou}static get NAME(){return"toast"}show(){y.trigger(this._element,su).defaultPrevented||(this._clearTimeout(),this._config.animation&&this._element.classList.add("fade"),this._element.classList.remove(mo),S(this._element),this._element.classList.add(li,ci),this._queueCallback(()=>{this._element.classList.remove(ci),y.trigger(this._element,ru),this._maybeScheduleHide()},this._element,this._config.animation))}hide(){this.isShown()&&(y.trigger(this._element,nu).defaultPrevented||(this._element.classList.add(ci),this._queueCallback(()=>{this._element.classList.add(mo),this._element.classList.remove(ci,li),y.trigger(this._element,iu)},this._element,this._config.animation)))}dispose(){this._clearTimeout(),this.isShown()&&this._element.classList.remove(li),super.dispose()}isShown(){return this._element.classList.contains(li)}_maybeScheduleHide(){this._config.autohide&&(this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout(()=>{this.hide()},this._config.delay)))}_onInteraction(r,c){switch(r.type){case"mouseover":case"mouseout":this._hasMouseInteraction=c;break;case"focusin":case"focusout":this._hasKeyboardInteraction=c}if(c)return void this._clearTimeout();const d=r.relatedTarget;this._element===d||this._element.contains(d)||this._maybeScheduleHide()}_setListeners(){y.on(this._element,Jh,r=>this._onInteraction(r,!0)),y.on(this._element,Zh,r=>this._onInteraction(r,!1)),y.on(this._element,eu,r=>this._onInteraction(r,!0)),y.on(this._element,tu,r=>this._onInteraction(r,!1))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(r){return this.each(function(){const c=bn.getOrCreateInstance(this,r);if(typeof r=="string"){if(c[r]===void 0)throw new TypeError(`No method named "${r}"`);c[r](this)}})}}return Rt(bn),A(bn),{Alert:Je,Button:lt,Carousel:Ft,Collapse:Bt,Dropdown:Ie,Modal:dt,Offcanvas:He,Popover:ai,ScrollSpy:yn,Tab:gt,Toast:bn,Tooltip:ft}})})(du);console.log("Hello world!");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wa={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b=function(n,e){if(!n)throw ln(e)},ln=function(n){return new Error("Firebase Database ("+Wa.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ha=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},nd=function(n){const e=[];let t=0,i=0;for(;t<n.length;){const s=n[t++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const o=n[t++];e[i++]=String.fromCharCode((s&31)<<6|o&63)}else if(s>239&&s<365){const o=n[t++],a=n[t++],l=n[t++],h=((s&7)<<18|(o&63)<<12|(a&63)<<6|l&63)-65536;e[i++]=String.fromCharCode(55296+(h>>10)),e[i++]=String.fromCharCode(56320+(h&1023))}else{const o=n[t++],a=n[t++];e[i++]=String.fromCharCode((s&15)<<12|(o&63)<<6|a&63)}}return e.join("")},Zs={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<n.length;s+=3){const o=n[s],a=s+1<n.length,l=a?n[s+1]:0,h=s+2<n.length,u=h?n[s+2]:0,p=o>>2,_=(o&3)<<4|l>>4;let g=(l&15)<<2|u>>6,v=u&63;h||(v=64,a||(g=64)),i.push(t[p],t[_],t[g],t[v])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Ha(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):nd(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<n.length;){const o=t[n.charAt(s++)],l=s<n.length?t[n.charAt(s)]:0;++s;const u=s<n.length?t[n.charAt(s)]:64;++s;const _=s<n.length?t[n.charAt(s)]:64;if(++s,o==null||l==null||u==null||_==null)throw new id;const g=o<<2|l>>4;if(i.push(g),u!==64){const v=l<<4&240|u>>2;if(i.push(v),_!==64){const E=u<<6&192|_;i.push(E)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class id extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ja=function(n){const e=Ha(n);return Zs.encodeByteArray(e,!0)},gi=function(n){return ja(n).replace(/\./g,"")},ws=function(n){try{return Zs.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sd(n){return Ua(void 0,n)}function Ua(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!rd(t)||(n[t]=Ua(n[t],e[t]));return n}function rd(n){return n!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function od(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ad=()=>od().__FIREBASE_DEFAULTS__,ld=()=>{if(typeof process>"u"||typeof process.env>"u")return;const n={}.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},cd=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&ws(n[1]);return e&&JSON.parse(e)},Va=()=>{try{return ad()||ld()||cd()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},hd=n=>{var e,t;return(t=(e=Va())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},ud=n=>{const e=hd(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),i]:[e.substring(0,t),i]},za=()=>{var n;return(n=Va())===null||n===void 0?void 0:n.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dd(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},i=e||"demo-project",s=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},n),l="";return[gi(JSON.stringify(t)),gi(JSON.stringify(a)),l].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fd(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function qa(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(fd())}function pd(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Ga(){return Wa.NODE_ADMIN===!0}function _d(){try{return typeof indexedDB=="object"}catch{return!1}}function gd(){return new Promise((n,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(i),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var o;e(((o=s.error)===null||o===void 0?void 0:o.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const md="FirebaseError";class Un extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=md,Object.setPrototypeOf(this,Un.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ya.prototype.create)}}class Ya{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},s=`${this.service}/${e}`,o=this.errors[e],a=o?vd(o,i):"Error",l=`${this.serviceName}: ${a} (${s}).`;return new Un(s,l,i)}}function vd(n,e){return n.replace(yd,(t,i)=>{const s=e[i];return s!=null?String(s):`<${i}?>`})}const yd=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dn(n){return JSON.parse(n)}function te(n){return JSON.stringify(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ka=function(n){let e={},t={},i={},s="";try{const o=n.split(".");e=Dn(ws(o[0])||""),t=Dn(ws(o[1])||""),s=o[2],i=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:i,signature:s}},bd=function(n){const e=Ka(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},wd=function(n){const e=Ka(n).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ye(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function nn(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function So(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function mi(n,e,t){const i={};for(const s in n)Object.prototype.hasOwnProperty.call(n,s)&&(i[s]=e.call(t,n[s],s,n));return i}function Es(n,e){if(n===e)return!0;const t=Object.keys(n),i=Object.keys(e);for(const s of t){if(!i.includes(s))return!1;const o=n[s],a=e[s];if(Ao(o)&&Ao(a)){if(!Es(o,a))return!1}else if(o!==a)return!1}for(const s of i)if(!t.includes(s))return!1;return!0}function Ao(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ed(n){const e=[];for(const[t,i]of Object.entries(n))Array.isArray(i)?i.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cd{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const i=this.W_;if(typeof e=="string")for(let _=0;_<16;_++)i[_]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let _=0;_<16;_++)i[_]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let _=16;_<80;_++){const g=i[_-3]^i[_-8]^i[_-14]^i[_-16];i[_]=(g<<1|g>>>31)&4294967295}let s=this.chain_[0],o=this.chain_[1],a=this.chain_[2],l=this.chain_[3],h=this.chain_[4],u,p;for(let _=0;_<80;_++){_<40?_<20?(u=l^o&(a^l),p=1518500249):(u=o^a^l,p=1859775393):_<60?(u=o&a|l&(o|a),p=2400959708):(u=o^a^l,p=3395469782);const g=(s<<5|s>>>27)+u+h+p+i[_]&4294967295;h=l,l=a,a=(o<<30|o>>>2)&4294967295,o=s,s=g}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+o&4294967295,this.chain_[2]=this.chain_[2]+a&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+h&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const i=t-this.blockSize;let s=0;const o=this.buf_;let a=this.inbuf_;for(;s<t;){if(a===0)for(;s<=i;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<t;)if(o[a]=e.charCodeAt(s),++a,++s,a===this.blockSize){this.compress_(o),a=0;break}}else for(;s<t;)if(o[a]=e[s],++a,++s,a===this.blockSize){this.compress_(o),a=0;break}}this.inbuf_=a,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=t&255,t/=256;this.compress_(this.buf_);let i=0;for(let s=0;s<5;s++)for(let o=24;o>=0;o-=8)e[i]=this.chain_[s]>>o&255,++i;return e}}function Qa(n,e){return`${n} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Td=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);if(s>=55296&&s<=56319){const o=s-55296;i++,b(i<n.length,"Surrogate pair missing trail surrogate.");const a=n.charCodeAt(i)-56320;s=65536+(o<<10)+a}s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):s<65536?(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Li=function(n){let e=0;for(let t=0;t<n.length;t++){const i=n.charCodeAt(t);i<128?e++:i<2048?e+=2:i>=55296&&i<=56319?(e+=4,t++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fi(n){return n&&n._delegate?n._delegate:n}class Rn{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Id{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new er;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Ad(e))try{this.getOrInitializeService({instanceIdentifier:yt})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const o=this.getOrInitializeService({instanceIdentifier:s});i.resolve(o)}catch{}}}}clearInstance(e=yt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=yt){return this.instances.has(e)}getOptions(e=yt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[o,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(o);i===l&&a.resolve(s)}return s}onInit(e,t){var i;const s=this.normalizeInstanceIdentifier(t),o=(i=this.onInitCallbacks.get(s))!==null&&i!==void 0?i:new Set;o.add(e),this.onInitCallbacks.set(s,o);const a=this.instances.get(s);return a&&e(a,s),()=>{o.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(i)for(const s of i)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:Sd(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=yt){return this.component?this.component.multipleInstances?e:yt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Sd(n){return n===yt?void 0:n}function Ad(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nd{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Id(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var j;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(j||(j={}));const xd={debug:j.DEBUG,verbose:j.VERBOSE,info:j.INFO,warn:j.WARN,error:j.ERROR,silent:j.SILENT},Od=j.INFO,kd={[j.DEBUG]:"log",[j.VERBOSE]:"log",[j.INFO]:"info",[j.WARN]:"warn",[j.ERROR]:"error"},Dd=(n,e,...t)=>{if(e<n.logLevel)return;const i=new Date().toISOString(),s=kd[e];if(s)console[s](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Xa{constructor(e){this.name=e,this._logLevel=Od,this._logHandler=Dd,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in j))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?xd[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,j.DEBUG,...e),this._logHandler(this,j.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,j.VERBOSE,...e),this._logHandler(this,j.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,j.INFO,...e),this._logHandler(this,j.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,j.WARN,...e),this._logHandler(this,j.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,j.ERROR,...e),this._logHandler(this,j.ERROR,...e)}}const Rd=(n,e)=>e.some(t=>n instanceof t);let No,xo;function Pd(){return No||(No=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Md(){return xo||(xo=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ja=new WeakMap,Cs=new WeakMap,Za=new WeakMap,as=new WeakMap,tr=new WeakMap;function Ld(n){const e=new Promise((t,i)=>{const s=()=>{n.removeEventListener("success",o),n.removeEventListener("error",a)},o=()=>{t(tt(n.result)),s()},a=()=>{i(n.error),s()};n.addEventListener("success",o),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&Ja.set(t,n)}).catch(()=>{}),tr.set(e,n),e}function Fd(n){if(Cs.has(n))return;const e=new Promise((t,i)=>{const s=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",a),n.removeEventListener("abort",a)},o=()=>{t(),s()},a=()=>{i(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",o),n.addEventListener("error",a),n.addEventListener("abort",a)});Cs.set(n,e)}let Ts={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Cs.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Za.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return tt(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function $d(n){Ts=n(Ts)}function Bd(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=n.call(ls(this),e,...t);return Za.set(i,e.sort?e.sort():[e]),tt(i)}:Md().includes(n)?function(...e){return n.apply(ls(this),e),tt(Ja.get(this))}:function(...e){return tt(n.apply(ls(this),e))}}function Wd(n){return typeof n=="function"?Bd(n):(n instanceof IDBTransaction&&Fd(n),Rd(n,Pd())?new Proxy(n,Ts):n)}function tt(n){if(n instanceof IDBRequest)return Ld(n);if(as.has(n))return as.get(n);const e=Wd(n);return e!==n&&(as.set(n,e),tr.set(e,n)),e}const ls=n=>tr.get(n);function Hd(n,e,{blocked:t,upgrade:i,blocking:s,terminated:o}={}){const a=indexedDB.open(n,e),l=tt(a);return i&&a.addEventListener("upgradeneeded",h=>{i(tt(a.result),h.oldVersion,h.newVersion,tt(a.transaction),h)}),t&&a.addEventListener("blocked",h=>t(h.oldVersion,h.newVersion,h)),l.then(h=>{o&&h.addEventListener("close",()=>o()),s&&h.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const jd=["get","getKey","getAll","getAllKeys","count"],Ud=["put","add","delete","clear"],cs=new Map;function Oo(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(cs.get(e))return cs.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,s=Ud.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(s||jd.includes(t)))return;const o=async function(a,...l){const h=this.transaction(a,s?"readwrite":"readonly");let u=h.store;return i&&(u=u.index(l.shift())),(await Promise.all([u[t](...l),s&&h.done]))[0]};return cs.set(e,o),o}$d(n=>({...n,get:(e,t,i)=>Oo(e,t)||n.get(e,t,i),has:(e,t)=>!!Oo(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vd{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(zd(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function zd(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Is="@firebase/app",ko="0.9.15";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const St=new Xa("@firebase/app"),qd="@firebase/app-compat",Gd="@firebase/analytics-compat",Yd="@firebase/analytics",Kd="@firebase/app-check-compat",Qd="@firebase/app-check",Xd="@firebase/auth",Jd="@firebase/auth-compat",Zd="@firebase/database",ef="@firebase/database-compat",tf="@firebase/functions",nf="@firebase/functions-compat",sf="@firebase/installations",rf="@firebase/installations-compat",of="@firebase/messaging",af="@firebase/messaging-compat",lf="@firebase/performance",cf="@firebase/performance-compat",hf="@firebase/remote-config",uf="@firebase/remote-config-compat",df="@firebase/storage",ff="@firebase/storage-compat",pf="@firebase/firestore",_f="@firebase/firestore-compat",gf="firebase",mf="10.1.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ss="[DEFAULT]",vf={[Is]:"fire-core",[qd]:"fire-core-compat",[Yd]:"fire-analytics",[Gd]:"fire-analytics-compat",[Qd]:"fire-app-check",[Kd]:"fire-app-check-compat",[Xd]:"fire-auth",[Jd]:"fire-auth-compat",[Zd]:"fire-rtdb",[ef]:"fire-rtdb-compat",[tf]:"fire-fn",[nf]:"fire-fn-compat",[sf]:"fire-iid",[rf]:"fire-iid-compat",[of]:"fire-fcm",[af]:"fire-fcm-compat",[lf]:"fire-perf",[cf]:"fire-perf-compat",[hf]:"fire-rc",[uf]:"fire-rc-compat",[df]:"fire-gcs",[ff]:"fire-gcs-compat",[pf]:"fire-fst",[_f]:"fire-fst-compat","fire-js":"fire-js",[gf]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vi=new Map,As=new Map;function yf(n,e){try{n.container.addComponent(e)}catch(t){St.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function yi(n){const e=n.name;if(As.has(e))return St.debug(`There were multiple attempts to register component ${e}.`),!1;As.set(e,n);for(const t of vi.values())yf(t,n);return!0}function bf(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wf={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},nt=new Ya("app","Firebase",wf);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ef{constructor(e,t,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Rn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw nt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cf=mf;function el(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const i=Object.assign({name:Ss,automaticDataCollectionEnabled:!1},e),s=i.name;if(typeof s!="string"||!s)throw nt.create("bad-app-name",{appName:String(s)});if(t||(t=za()),!t)throw nt.create("no-options");const o=vi.get(s);if(o){if(Es(t,o.options)&&Es(i,o.config))return o;throw nt.create("duplicate-app",{appName:s})}const a=new Nd(s);for(const h of As.values())a.addComponent(h);const l=new Ef(t,i,a);return vi.set(s,l),l}function Tf(n=Ss){const e=vi.get(n);if(!e&&n===Ss&&za())return el();if(!e)throw nt.create("no-app",{appName:n});return e}function qt(n,e,t){var i;let s=(i=vf[n])!==null&&i!==void 0?i:n;t&&(s+=`-${t}`);const o=s.match(/\s|\//),a=e.match(/\s|\//);if(o||a){const l=[`Unable to register library "${s}" with version "${e}":`];o&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&l.push("and"),a&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),St.warn(l.join(" "));return}yi(new Rn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const If="firebase-heartbeat-database",Sf=1,Pn="firebase-heartbeat-store";let hs=null;function tl(){return hs||(hs=Hd(If,Sf,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(Pn)}}}).catch(n=>{throw nt.create("idb-open",{originalErrorMessage:n.message})})),hs}async function Af(n){try{return await(await tl()).transaction(Pn).objectStore(Pn).get(nl(n))}catch(e){if(e instanceof Un)St.warn(e.message);else{const t=nt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});St.warn(t.message)}}}async function Do(n,e){try{const i=(await tl()).transaction(Pn,"readwrite");await i.objectStore(Pn).put(e,nl(n)),await i.done}catch(t){if(t instanceof Un)St.warn(t.message);else{const i=nt.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});St.warn(i.message)}}}function nl(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nf=1024,xf=30*24*60*60*1e3;class Of{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Df(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Ro();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(s=>s.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const o=new Date(s.date).valueOf();return Date.now()-o<=xf}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Ro(),{heartbeatsToSend:t,unsentEntries:i}=kf(this._heartbeatsCache.heartbeats),s=gi(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Ro(){return new Date().toISOString().substring(0,10)}function kf(n,e=Nf){const t=[];let i=n.slice();for(const s of n){const o=t.find(a=>a.agent===s.agent);if(o){if(o.dates.push(s.date),Po(t)>e){o.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),Po(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class Df{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return _d()?gd().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Af(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Do(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Do(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Po(n){return gi(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rf(n){yi(new Rn("platform-logger",e=>new Vd(e),"PRIVATE")),yi(new Rn("heartbeat",e=>new Of(e),"PRIVATE")),qt(Is,ko,n),qt(Is,ko,"esm2017"),qt("fire-js","")}Rf("");var Pf="firebase",Mf="10.1.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */qt(Pf,Mf,"app");const Mo="@firebase/database",Lo="1.0.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let il="";function Lf(n){il=n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ff{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),te(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:Dn(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $f{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return Ye(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sl=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Ff(e)}}catch{}return new $f},wt=sl("localStorage"),Ns=sl("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gt=new Xa("@firebase/database"),Bf=function(){let n=1;return function(){return n++}}(),rl=function(n){const e=Td(n),t=new Cd;t.update(e);const i=t.digest();return Zs.encodeByteArray(i)},Vn=function(...n){let e="";for(let t=0;t<n.length;t++){const i=n[t];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?e+=Vn.apply(null,i):typeof i=="object"?e+=te(i):e+=i,e+=" "}return e};let Ct=null,Fo=!0;const Wf=function(n,e){b(!e||n===!0||n===!1,"Can't turn on custom loggers persistently."),n===!0?(Gt.logLevel=j.VERBOSE,Ct=Gt.log.bind(Gt),e&&Ns.set("logging_enabled",!0)):typeof n=="function"?Ct=n:(Ct=null,Ns.remove("logging_enabled"))},ie=function(...n){if(Fo===!0&&(Fo=!1,Ct===null&&Ns.get("logging_enabled")===!0&&Wf(!0)),Ct){const e=Vn.apply(null,n);Ct(e)}},zn=function(n){return function(...e){ie(n,...e)}},xs=function(...n){const e="FIREBASE INTERNAL ERROR: "+Vn(...n);Gt.error(e)},Ge=function(...n){const e=`FIREBASE FATAL ERROR: ${Vn(...n)}`;throw Gt.error(e),new Error(e)},me=function(...n){const e="FIREBASE WARNING: "+Vn(...n);Gt.warn(e)},Hf=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&me("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},ol=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},jf=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},sn="[MIN_NAME]",At="[MAX_NAME]",cn=function(n,e){if(n===e)return 0;if(n===sn||e===At)return-1;if(e===sn||n===At)return 1;{const t=$o(n),i=$o(e);return t!==null?i!==null?t-i===0?n.length-e.length:t-i:-1:i!==null?1:n<e?-1:1}},Uf=function(n,e){return n===e?0:n<e?-1:1},En=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+te(e))},nr=function(n){if(typeof n!="object"||n===null)return te(n);const e=[];for(const i in n)e.push(i);e.sort();let t="{";for(let i=0;i<e.length;i++)i!==0&&(t+=","),t+=te(e[i]),t+=":",t+=nr(n[e[i]]);return t+="}",t},al=function(n,e){const t=n.length;if(t<=e)return[n];const i=[];for(let s=0;s<t;s+=e)s+e>t?i.push(n.substring(s,t)):i.push(n.substring(s,s+e));return i};function pe(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const ll=function(n){b(!ol(n),"Invalid JSON number");const e=11,t=52,i=(1<<e-1)-1;let s,o,a,l,h;n===0?(o=0,a=0,s=1/n===-1/0?1:0):(s=n<0,n=Math.abs(n),n>=Math.pow(2,1-i)?(l=Math.min(Math.floor(Math.log(n)/Math.LN2),i),o=l+i,a=Math.round(n*Math.pow(2,t-l)-Math.pow(2,t))):(o=0,a=Math.round(n/Math.pow(2,1-i-t))));const u=[];for(h=t;h;h-=1)u.push(a%2?1:0),a=Math.floor(a/2);for(h=e;h;h-=1)u.push(o%2?1:0),o=Math.floor(o/2);u.push(s?1:0),u.reverse();const p=u.join("");let _="";for(h=0;h<64;h+=8){let g=parseInt(p.substr(h,8),2).toString(16);g.length===1&&(g="0"+g),_=_+g}return _.toLowerCase()},Vf=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},zf=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function qf(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const i=new Error(n+" at "+e._path.toString()+": "+t);return i.code=n.toUpperCase(),i}const Gf=new RegExp("^-?(0*)\\d{1,10}$"),Yf=-2147483648,Kf=2147483647,$o=function(n){if(Gf.test(n)){const e=Number(n);if(e>=Yf&&e<=Kf)return e}return null},qn=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw me("Exception was thrown by user callback.",t),e},Math.floor(0))}},Qf=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Nn=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xf{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(i=>this.appCheck=i)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((t,i)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(i=>i.addTokenListener(e))}notifyForInvalidToken(){me(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jf{constructor(e,t,i){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(ie("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,i)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',me(e)}}class Yt{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Yt.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ir="5",cl="v",hl="s",ul="r",dl="f",fl=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,pl="ls",_l="p",Os="ac",gl="websocket",ml="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vl{constructor(e,t,i,s,o=!1,a="",l=!1,h=!1){this.secure=t,this.namespace=i,this.webSocketOnly=s,this.nodeAdmin=o,this.persistenceKey=a,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=h,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=wt.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&wt.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function Zf(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function yl(n,e,t){b(typeof e=="string","typeof type must == string"),b(typeof t=="object","typeof params must == object");let i;if(e===gl)i=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===ml)i=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Zf(n)&&(t.ns=n.namespace);const s=[];return pe(t,(o,a)=>{s.push(o+"="+a)}),i+s.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ep{constructor(){this.counters_={}}incrementCounter(e,t=1){Ye(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return sd(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const us={},ds={};function sr(n){const e=n.toString();return us[e]||(us[e]=new ep),us[e]}function tp(n,e){const t=n.toString();return ds[t]||(ds[t]=e()),ds[t]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class np{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<i.length;++s)i[s]&&qn(()=>{this.onMessage_(i[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bo="start",ip="close",sp="pLPCommand",rp="pRTLPCB",bl="id",wl="pw",El="ser",op="cb",ap="seg",lp="ts",cp="d",hp="dframe",Cl=1870,Tl=30,up=Cl-Tl,dp=25e3,fp=3e4;class Vt{constructor(e,t,i,s,o,a,l){this.connId=e,this.repoInfo=t,this.applicationId=i,this.appCheckToken=s,this.authToken=o,this.transportSessionId=a,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=zn(e),this.stats_=sr(t),this.urlFn=h=>(this.appCheckToken&&(h[Os]=this.appCheckToken),yl(t,ml,h))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new np(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(fp)),jf(()=>{if(this.isClosed_)return;this.scriptTagHolder=new rr((...o)=>{const[a,l,h,u,p]=o;if(this.incrementIncomingBytes_(o),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,a===Bo)this.id=l,this.password=h;else if(a===ip)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+a)},(...o)=>{const[a,l]=o;this.incrementIncomingBytes_(o),this.myPacketOrderer.handleResponse(a,l)},()=>{this.onClosed_()},this.urlFn);const i={};i[Bo]="t",i[El]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[op]=this.scriptTagHolder.uniqueCallbackIdentifier),i[cl]=ir,this.transportSessionId&&(i[hl]=this.transportSessionId),this.lastSessionId&&(i[pl]=this.lastSessionId),this.applicationId&&(i[_l]=this.applicationId),this.appCheckToken&&(i[Os]=this.appCheckToken),typeof location<"u"&&location.hostname&&fl.test(location.hostname)&&(i[ul]=dl);const s=this.urlFn(i);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Vt.forceAllow_=!0}static forceDisallow(){Vt.forceDisallow_=!0}static isAvailable(){return Vt.forceAllow_?!0:!Vt.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!Vf()&&!zf()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=te(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const i=ja(t),s=al(i,up);for(let o=0;o<s.length;o++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[o]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const i={};i[hp]="t",i[bl]=e,i[wl]=t,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=te(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class rr{constructor(e,t,i,s){this.onDisconnect=i,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Bf(),window[sp+this.uniqueCallbackIdentifier]=e,window[rp+this.uniqueCallbackIdentifier]=t,this.myIFrame=rr.createIFrame_();let o="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(o='<script>document.domain="'+document.domain+'";<\/script>');const a="<html><body>"+o+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(a),this.myIFrame.doc.close()}catch(l){ie("frame writing exception"),l.stack&&ie(l.stack),ie(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||ie("No IE domain setting required")}catch{const i=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[bl]=this.myID,e[wl]=this.myPW,e[El]=this.currentSerial;let t=this.urlFn(e),i="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Tl+i.length<=Cl;){const a=this.pendingSegs.shift();i=i+"&"+ap+s+"="+a.seg+"&"+lp+s+"="+a.ts+"&"+cp+s+"="+a.d,s++}return t=t+i,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,i){this.pendingSegs.push({seg:e,ts:t,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const i=()=>{this.outstandingRequests.delete(t),this.newRequest_()},s=setTimeout(i,Math.floor(dp)),o=()=>{clearTimeout(s),i()};this.addTag(e,o)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){const s=i.readyState;(!s||s==="loaded"||s==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),t())},i.onerror=()=>{ie("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pp=16384,_p=45e3;let bi=null;typeof MozWebSocket<"u"?bi=MozWebSocket:typeof WebSocket<"u"&&(bi=WebSocket);class Ne{constructor(e,t,i,s,o,a,l){this.connId=e,this.applicationId=i,this.appCheckToken=s,this.authToken=o,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=zn(this.connId),this.stats_=sr(t),this.connURL=Ne.connectionURL_(t,a,l,s,i),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,i,s,o){const a={};return a[cl]=ir,typeof location<"u"&&location.hostname&&fl.test(location.hostname)&&(a[ul]=dl),t&&(a[hl]=t),i&&(a[pl]=i),s&&(a[Os]=s),o&&(a[_l]=o),yl(e,gl,a)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,wt.set("previous_websocket_failure",!0);try{let i;Ga(),this.mySock=new bi(this.connURL,[],i)}catch(i){this.log_("Error instantiating WebSocket.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){Ne.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(t);i&&i.length>1&&parseFloat(i[1])<4.4&&(e=!0)}return!e&&bi!==null&&!Ne.forceDisallow_}static previouslyFailed(){return wt.isInMemoryStorage||wt.get("previous_websocket_failure")===!0}markConnectionHealthy(){wt.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const i=Dn(t);this.onMessage(i)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(b(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const i=this.extractFrameCount_(t);i!==null&&this.appendFrame_(i)}}send(e){this.resetKeepAlive();const t=te(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const i=al(t,pp);i.length>1&&this.sendString_(String(i.length));for(let s=0;s<i.length;s++)this.sendString_(i[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(_p))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Ne.responsesRequiredToBeHealthy=2;Ne.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Vt,Ne]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const t=Ne&&Ne.isAvailable();let i=t&&!Ne.previouslyFailed();if(e.webSocketOnly&&(t||me("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[Ne];else{const s=this.transports_=[];for(const o of Mn.ALL_TRANSPORTS)o&&o.isAvailable()&&s.push(o);Mn.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Mn.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gp=6e4,mp=5e3,vp=10*1024,yp=100*1024,fs="t",Wo="d",bp="s",Ho="r",wp="e",jo="o",Uo="a",Vo="n",zo="p",Ep="h";class Cp{constructor(e,t,i,s,o,a,l,h,u,p){this.id=e,this.repoInfo_=t,this.applicationId_=i,this.appCheckToken_=s,this.authToken_=o,this.onMessage_=a,this.onReady_=l,this.onDisconnect_=h,this.onKill_=u,this.lastSessionId=p,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=zn("c:"+this.id+":"),this.transportManager_=new Mn(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,i)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=Nn(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>yp?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>vp?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(fs in e){const t=e[fs];t===Uo?this.upgradeIfSecondaryHealthy_():t===Ho?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===jo&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=En("t",e),i=En("d",e);if(t==="c")this.onSecondaryControl_(i);else if(t==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:zo,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Uo,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Vo,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=En("t",e),i=En("d",e);t==="c"?this.onControl_(i):t==="d"&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=En(fs,e);if(Wo in e){const i=e[Wo];if(t===Ep){const s=Object.assign({},i);this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(t===Vo){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===bp?this.onConnectionShutdown_(i):t===Ho?this.onReset_(i):t===wp?xs("Server Error: "+i):t===jo?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):xs("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,i=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),ir!==i&&me("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,i),Nn(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(gp))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Nn(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(mp))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:zo,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(wt.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Il{put(e,t,i,s){}merge(e,t,i,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,i){}onDisconnectMerge(e,t,i){}onDisconnectCancel(e,t){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sl{constructor(e){this.allowedEvents_=e,this.listeners_={},b(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const i=[...this.listeners_[e]];for(let s=0;s<i.length;s++)i[s].callback.apply(i[s].context,t)}}on(e,t,i){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:i});const s=this.getInitialEvent(e);s&&t.apply(i,s)}off(e,t,i){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let o=0;o<s.length;o++)if(s[o].callback===t&&(!i||i===s[o].context)){s.splice(o,1);return}}validateEventType_(e){b(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wi extends Sl{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!qa()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new wi}getInitialEvent(e){return b(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qo=32,Go=768;class W{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let i=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[i]=this.pieces_[s],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function F(){return new W("")}function D(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function st(n){return n.pieces_.length-n.pieceNum_}function U(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new W(n.pieces_,e)}function Al(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function Tp(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function Nl(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function xl(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new W(e,0)}function X(n,e){const t=[];for(let i=n.pieceNum_;i<n.pieces_.length;i++)t.push(n.pieces_[i]);if(e instanceof W)for(let i=e.pieceNum_;i<e.pieces_.length;i++)t.push(e.pieces_[i]);else{const i=e.split("/");for(let s=0;s<i.length;s++)i[s].length>0&&t.push(i[s])}return new W(t,0)}function R(n){return n.pieceNum_>=n.pieces_.length}function de(n,e){const t=D(n),i=D(e);if(t===null)return e;if(t===i)return de(U(n),U(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function or(n,e){if(st(n)!==st(e))return!1;for(let t=n.pieceNum_,i=e.pieceNum_;t<=n.pieces_.length;t++,i++)if(n.pieces_[t]!==e.pieces_[i])return!1;return!0}function xe(n,e){let t=n.pieceNum_,i=e.pieceNum_;if(st(n)>st(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[i])return!1;++t,++i}return!0}class Ip{constructor(e,t){this.errorPrefix_=t,this.parts_=Nl(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=Li(this.parts_[i]);Ol(this)}}function Sp(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=Li(e),Ol(n)}function Ap(n){const e=n.parts_.pop();n.byteLength_-=Li(e),n.parts_.length>0&&(n.byteLength_-=1)}function Ol(n){if(n.byteLength_>Go)throw new Error(n.errorPrefix_+"has a key path longer than "+Go+" bytes ("+n.byteLength_+").");if(n.parts_.length>qo)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+qo+") or object contains a cycle "+bt(n))}function bt(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar extends Sl{constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const i=!document[e];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}static getInstance(){return new ar}getInitialEvent(e){return b(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cn=1e3,Np=60*5*1e3,Yo=30*1e3,xp=1.3,Op=3e4,kp="server_kill",Ko=3;class ze extends Il{constructor(e,t,i,s,o,a,l,h){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=i,this.onConnectStatus_=s,this.onServerInfoUpdate_=o,this.authTokenProvider_=a,this.appCheckTokenProvider_=l,this.authOverride_=h,this.id=ze.nextPersistentConnectionId_++,this.log_=zn("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Cn,this.maxReconnectDelay_=Np,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,h&&!Ga())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");ar.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&wi.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,i){const s=++this.requestNumber_,o={r:s,a:e,b:t};this.log_(te(o)),b(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(o),i&&(this.requestCBHash_[s]=i)}get(e){this.initConnection_();const t=new er,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:a=>{const l=a.d;a.s==="ok"?t.resolve(l):t.reject(l)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const o=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(o),t.promise}listen(e,t,i,s){this.initConnection_();const o=e._queryIdentifier,a=e._path.toString();this.log_("Listen called for "+a+" "+o),this.listens.has(a)||this.listens.set(a,new Map),b(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),b(!this.listens.get(a).has(o),"listen() called twice for same path/queryId.");const l={onComplete:s,hashFn:t,query:e,tag:i};this.listens.get(a).set(o,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(i)})}sendListen_(e){const t=e.query,i=t._path.toString(),s=t._queryIdentifier;this.log_("Listen on "+i+" for "+s);const o={p:i},a="q";e.tag&&(o.q=t._queryObject,o.t=e.tag),o.h=e.hashFn(),this.sendRequest(a,o,l=>{const h=l.d,u=l.s;ze.warnOnListenWarnings_(h,t),(this.listens.get(i)&&this.listens.get(i).get(s))===e&&(this.log_("listen response",l),u!=="ok"&&this.removeListen_(i,s),e.onComplete&&e.onComplete(u,h))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&Ye(e,"w")){const i=nn(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const s='".indexOn": "'+t._queryParams.getIndex().toString()+'"',o=t._path.toString();me(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${o} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||wd(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Yo)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=bd(e)?"auth":"gauth",i={cred:e};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(t,i,s=>{const o=s.s,a=s.d||"error";this.authToken_===e&&(o==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(o,a))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,i=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,i)})}unlisten(e,t){const i=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+s),b(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,s)&&this.connected_&&this.sendUnlisten_(i,s,e._queryObject,t)}sendUnlisten_(e,t,i,s){this.log_("Unlisten on "+e+" for "+t);const o={p:e},a="n";s&&(o.q=i,o.t=s),this.sendRequest(a,o)}onDisconnectPut(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:i})}onDisconnectMerge(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:i})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,i,s){const o={p:t,d:i};this.log_("onDisconnect "+e,o),this.sendRequest(e,o,a=>{s&&setTimeout(()=>{s(a.s,a.d)},Math.floor(0))})}put(e,t,i,s){this.putInternal("p",e,t,i,s)}merge(e,t,i,s){this.putInternal("m",e,t,i,s)}putInternal(e,t,i,s,o){this.initConnection_();const a={p:t,d:i};o!==void 0&&(a.h=o),this.outstandingPuts_.push({action:e,request:a,onComplete:s}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,i,o=>{this.log_(t+" response",o),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(o.s,o.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,i=>{if(i.s!=="ok"){const o=i.d;this.log_("reportStats","Error sending stats: "+o)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+te(e));const t=e.r,i=this.requestCBHash_[t];i&&(delete this.requestCBHash_[t],i(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):xs("Unrecognized action received from server: "+te(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){b(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Cn,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Cn,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>Op&&(this.reconnectDelay_=Cn),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*xp)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+ze.nextConnectionId_++,o=this.lastSessionId;let a=!1,l=null;const h=function(){l?l.close():(a=!0,i())},u=function(_){b(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(_)};this.realtime_={close:h,sendRequest:u};const p=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[_,g]=await Promise.all([this.authTokenProvider_.getToken(p),this.appCheckTokenProvider_.getToken(p)]);a?ie("getToken() completed but was canceled"):(ie("getToken() completed. Creating connection."),this.authToken_=_&&_.accessToken,this.appCheckToken_=g&&g.token,l=new Cp(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,i,v=>{me(v+" ("+this.repoInfo_.toString()+")"),this.interrupt(kp)},o))}catch(_){this.log_("Failed to get token: "+_),a||(this.repoInfo_.nodeAdmin&&me(_),h())}}}interrupt(e){ie("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){ie("Resuming connection for reason: "+e),delete this.interruptReasons_[e],So(this.interruptReasons_)&&(this.reconnectDelay_=Cn,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let i;t?i=t.map(o=>nr(o)).join("$"):i="default";const s=this.removeListen_(e,i);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,t){const i=new W(e).toString();let s;if(this.listens.has(i)){const o=this.listens.get(i);s=o.get(t),o.delete(t),o.size===0&&this.listens.delete(i)}else s=void 0;return s}onAuthRevoked_(e,t){ie("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Ko&&(this.reconnectDelay_=Yo,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){ie("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Ko&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+il.replace(/\./g,"-")]=1,qa()?e["framework.cordova"]=1:pd()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=wi.getInstance().currentlyOnline();return So(this.interruptReasons_)&&e}}ze.nextPersistentConnectionId_=0;ze.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new k(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $i{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const i=new k(sn,e),s=new k(sn,t);return this.compare(i,s)!==0}minPost(){return k.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let di;class kl extends $i{static get __EMPTY_NODE(){return di}static set __EMPTY_NODE(e){di=e}compare(e,t){return cn(e.name,t.name)}isDefinedOn(e){throw ln("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return k.MIN}maxPost(){return new k(At,di)}makePost(e,t){return b(typeof e=="string","KeyIndex indexValue must always be a string."),new k(e,di)}toString(){return".key"}}const Kt=new kl;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi{constructor(e,t,i,s,o=null){this.isReverse_=s,this.resultGenerator_=o,this.nodeStack_=[];let a=1;for(;!e.isEmpty();)if(e=e,a=t?i(e.key,t):1,s&&(a*=-1),a<0)this.isReverse_?e=e.left:e=e.right;else if(a===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class ee{constructor(e,t,i,s,o){this.key=e,this.value=t,this.color=i??ee.RED,this.left=s??fe.EMPTY_NODE,this.right=o??fe.EMPTY_NODE}copy(e,t,i,s,o){return new ee(e??this.key,t??this.value,i??this.color,s??this.left,o??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let s=this;const o=i(e,s.key);return o<0?s=s.copy(null,null,null,s.left.insert(e,t,i),null):o===0?s=s.copy(null,t,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,t,i)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return fe.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let i,s;if(i=this,t(e,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),t(e,i.key)===0){if(i.right.isEmpty())return fe.EMPTY_NODE;s=i.right.min_(),i=i.copy(s.key,s.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,ee.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,ee.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}ee.RED=!0;ee.BLACK=!1;class Dp{copy(e,t,i,s,o){return this}insert(e,t,i){return new ee(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class fe{constructor(e,t=fe.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new fe(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,ee.BLACK,null,null))}remove(e){return new fe(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,ee.BLACK,null,null))}get(e){let t,i=this.root_;for(;!i.isEmpty();){if(t=this.comparator_(e,i.key),t===0)return i.value;t<0?i=i.left:t>0&&(i=i.right)}return null}getPredecessorKey(e){let t,i=this.root_,s=null;for(;!i.isEmpty();)if(t=this.comparator_(e,i.key),t===0){if(i.left.isEmpty())return s?s.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else t<0?i=i.left:t>0&&(s=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new fi(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new fi(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new fi(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new fi(this.root_,null,this.comparator_,!0,e)}}fe.EMPTY_NODE=new Dp;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rp(n,e){return cn(n.name,e.name)}function lr(n,e){return cn(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ks;function Pp(n){ks=n}const Dl=function(n){return typeof n=="number"?"number:"+ll(n):"string:"+n},Rl=function(n){if(n.isLeafNode()){const e=n.val();b(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Ye(e,".sv"),"Priority must be a string or number.")}else b(n===ks||n.isEmpty(),"priority of unexpected type.");b(n===ks||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Qo;class Z{constructor(e,t=Z.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,b(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Rl(this.priorityNode_)}static set __childrenNodeConstructor(e){Qo=e}static get __childrenNodeConstructor(){return Qo}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Z(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Z.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return R(e)?this:D(e)===".priority"?this.priorityNode_:Z.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:Z.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const i=D(e);return i===null?t:t.isEmpty()&&i!==".priority"?this:(b(i!==".priority"||st(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,Z.__childrenNodeConstructor.EMPTY_NODE.updateChild(U(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Dl(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=ll(this.value_):e+=this.value_,this.lazyHash_=rl(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Z.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Z.__childrenNodeConstructor?-1:(b(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,i=typeof this.value_,s=Z.VALUE_TYPE_ORDER.indexOf(t),o=Z.VALUE_TYPE_ORDER.indexOf(i);return b(s>=0,"Unknown leaf type: "+t),b(o>=0,"Unknown leaf type: "+i),s===o?i==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:o-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}Z.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Pl,Ml;function Mp(n){Pl=n}function Lp(n){Ml=n}class Fp extends $i{compare(e,t){const i=e.node.getPriority(),s=t.node.getPriority(),o=i.compareTo(s);return o===0?cn(e.name,t.name):o}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return k.MIN}maxPost(){return new k(At,new Z("[PRIORITY-POST]",Ml))}makePost(e,t){const i=Pl(e);return new k(t,new Z("[PRIORITY-POST]",i))}toString(){return".priority"}}const q=new Fp;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $p=Math.log(2);class Bp{constructor(e){const t=o=>parseInt(Math.log(o)/$p,10),i=o=>parseInt(Array(o+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const s=i(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Ei=function(n,e,t,i){n.sort(e);const s=function(h,u){const p=u-h;let _,g;if(p===0)return null;if(p===1)return _=n[h],g=t?t(_):_,new ee(g,_.node,ee.BLACK,null,null);{const v=parseInt(p/2,10)+h,E=s(h,v),T=s(v+1,u);return _=n[v],g=t?t(_):_,new ee(g,_.node,ee.BLACK,E,T)}},o=function(h){let u=null,p=null,_=n.length;const g=function(E,T){const S=_-E,P=_;_-=E;const B=s(S+1,P),O=n[S],A=t?t(O):O;v(new ee(A,O.node,T,null,B))},v=function(E){u?(u.left=E,u=E):(p=E,u=E)};for(let E=0;E<h.count;++E){const T=h.nextBitIsOne(),S=Math.pow(2,h.count-(E+1));T?g(S,ee.BLACK):(g(S,ee.BLACK),g(S,ee.RED))}return p},a=new Bp(n.length),l=o(a);return new fe(i||e,l)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ps;const jt={};class Ve{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return b(jt&&q,"ChildrenNode.ts has not been loaded"),ps=ps||new Ve({".priority":jt},{".priority":q}),ps}get(e){const t=nn(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof fe?t:null}hasIndex(e){return Ye(this.indexSet_,e.toString())}addIndex(e,t){b(e!==Kt,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let s=!1;const o=t.getIterator(k.Wrap);let a=o.getNext();for(;a;)s=s||e.isDefinedOn(a.node),i.push(a),a=o.getNext();let l;s?l=Ei(i,e.getCompare()):l=jt;const h=e.toString(),u=Object.assign({},this.indexSet_);u[h]=e;const p=Object.assign({},this.indexes_);return p[h]=l,new Ve(p,u)}addToIndexes(e,t){const i=mi(this.indexes_,(s,o)=>{const a=nn(this.indexSet_,o);if(b(a,"Missing index implementation for "+o),s===jt)if(a.isDefinedOn(e.node)){const l=[],h=t.getIterator(k.Wrap);let u=h.getNext();for(;u;)u.name!==e.name&&l.push(u),u=h.getNext();return l.push(e),Ei(l,a.getCompare())}else return jt;else{const l=t.get(e.name);let h=s;return l&&(h=h.remove(new k(e.name,l))),h.insert(e,e.node)}});return new Ve(i,this.indexSet_)}removeFromIndexes(e,t){const i=mi(this.indexes_,s=>{if(s===jt)return s;{const o=t.get(e.name);return o?s.remove(new k(e.name,o)):s}});return new Ve(i,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Tn;class N{constructor(e,t,i){this.children_=e,this.priorityNode_=t,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&Rl(this.priorityNode_),this.children_.isEmpty()&&b(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Tn||(Tn=new N(new fe(lr),null,Ve.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Tn}updatePriority(e){return this.children_.isEmpty()?this:new N(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?Tn:t}}getChild(e){const t=D(e);return t===null?this:this.getImmediateChild(t).getChild(U(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(b(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const i=new k(e,t);let s,o;t.isEmpty()?(s=this.children_.remove(e),o=this.indexMap_.removeFromIndexes(i,this.children_)):(s=this.children_.insert(e,t),o=this.indexMap_.addToIndexes(i,this.children_));const a=s.isEmpty()?Tn:this.priorityNode_;return new N(s,a,o)}}updateChild(e,t){const i=D(e);if(i===null)return t;{b(D(e)!==".priority"||st(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(i).updateChild(U(e),t);return this.updateImmediateChild(i,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let i=0,s=0,o=!0;if(this.forEachChild(q,(a,l)=>{t[a]=l.val(e),i++,o&&N.INTEGER_REGEXP_.test(a)?s=Math.max(s,Number(a)):o=!1}),!e&&o&&s<2*i){const a=[];for(const l in t)a[l]=t[l];return a}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Dl(this.getPriority().val())+":"),this.forEachChild(q,(t,i)=>{const s=i.hash();s!==""&&(e+=":"+t+":"+s)}),this.lazyHash_=e===""?"":rl(e)}return this.lazyHash_}getPredecessorChildName(e,t,i){const s=this.resolveIndex_(i);if(s){const o=s.getPredecessorKey(new k(e,t));return o?o.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const i=t.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new k(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const i=t.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new k(t,this.children_.get(t)):null}forEachChild(e,t){const i=this.resolveIndex_(e);return i?i.inorderTraversal(s=>t(s.name,s.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const i=this.resolveIndex_(t);if(i)return i.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,k.Wrap);let o=s.peek();for(;o!=null&&t.compare(o,e)<0;)s.getNext(),o=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const i=this.resolveIndex_(t);if(i)return i.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,k.Wrap);let o=s.peek();for(;o!=null&&t.compare(o,e)>0;)s.getNext(),o=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Gn?-1:0}withIndex(e){if(e===Kt||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new N(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===Kt||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const i=this.getIterator(q),s=t.getIterator(q);let o=i.getNext(),a=s.getNext();for(;o&&a;){if(o.name!==a.name||!o.node.equals(a.node))return!1;o=i.getNext(),a=s.getNext()}return o===null&&a===null}else return!1;else return!1}}resolveIndex_(e){return e===Kt?null:this.indexMap_.get(e.toString())}}N.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Wp extends N{constructor(){super(new fe(lr),N.EMPTY_NODE,Ve.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return N.EMPTY_NODE}isEmpty(){return!1}}const Gn=new Wp;Object.defineProperties(k,{MIN:{value:new k(sn,N.EMPTY_NODE)},MAX:{value:new k(At,Gn)}});kl.__EMPTY_NODE=N.EMPTY_NODE;Z.__childrenNodeConstructor=N;Pp(Gn);Lp(Gn);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hp=!0;function se(n,e=null){if(n===null)return N.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),b(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new Z(t,se(e))}if(!(n instanceof Array)&&Hp){const t=[];let i=!1;if(pe(n,(a,l)=>{if(a.substring(0,1)!=="."){const h=se(l);h.isEmpty()||(i=i||!h.getPriority().isEmpty(),t.push(new k(a,h)))}}),t.length===0)return N.EMPTY_NODE;const o=Ei(t,Rp,a=>a.name,lr);if(i){const a=Ei(t,q.getCompare());return new N(o,se(e),new Ve({".priority":a},{".priority":q}))}else return new N(o,se(e),Ve.Default)}else{let t=N.EMPTY_NODE;return pe(n,(i,s)=>{if(Ye(n,i)&&i.substring(0,1)!=="."){const o=se(s);(o.isLeafNode()||!o.isEmpty())&&(t=t.updateImmediateChild(i,o))}}),t.updatePriority(se(e))}}Mp(se);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jp extends $i{constructor(e){super(),this.indexPath_=e,b(!R(e)&&D(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const i=this.extractChild(e.node),s=this.extractChild(t.node),o=i.compareTo(s);return o===0?cn(e.name,t.name):o}makePost(e,t){const i=se(e),s=N.EMPTY_NODE.updateChild(this.indexPath_,i);return new k(t,s)}maxPost(){const e=N.EMPTY_NODE.updateChild(this.indexPath_,Gn);return new k(At,e)}toString(){return Nl(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Up extends $i{compare(e,t){const i=e.node.compareTo(t.node);return i===0?cn(e.name,t.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return k.MIN}maxPost(){return k.MAX}makePost(e,t){const i=se(e);return new k(t,i)}toString(){return".value"}}const Vp=new Up;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ll(n){return{type:"value",snapshotNode:n}}function rn(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function Ln(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function Fn(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function zp(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr{constructor(e){this.index_=e}updateChild(e,t,i,s,o,a){b(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(t);return l.getChild(s).equals(i.getChild(s))&&l.isEmpty()===i.isEmpty()||(a!=null&&(i.isEmpty()?e.hasChild(t)?a.trackChildChange(Ln(t,l)):b(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?a.trackChildChange(rn(t,i)):a.trackChildChange(Fn(t,i,l))),e.isLeafNode()&&i.isEmpty())?e:e.updateImmediateChild(t,i).withIndex(this.index_)}updateFullNode(e,t,i){return i!=null&&(e.isLeafNode()||e.forEachChild(q,(s,o)=>{t.hasChild(s)||i.trackChildChange(Ln(s,o))}),t.isLeafNode()||t.forEachChild(q,(s,o)=>{if(e.hasChild(s)){const a=e.getImmediateChild(s);a.equals(o)||i.trackChildChange(Fn(s,o,a))}else i.trackChildChange(rn(s,o))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?N.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n{constructor(e){this.indexedFilter_=new cr(e.getIndex()),this.index_=e.getIndex(),this.startPost_=$n.getStartPost_(e),this.endPost_=$n.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,i=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&i}updateChild(e,t,i,s,o,a){return this.matches(new k(t,i))||(i=N.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,i,s,o,a)}updateFullNode(e,t,i){t.isLeafNode()&&(t=N.EMPTY_NODE);let s=t.withIndex(this.index_);s=s.updatePriority(N.EMPTY_NODE);const o=this;return t.forEachChild(q,(a,l)=>{o.matches(new k(a,l))||(s=s.updateImmediateChild(a,N.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,s,i)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qp{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const i=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?i<=0:i<0},this.withinEndPost=t=>{const i=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?i<=0:i<0},this.rangedFilter_=new $n(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,i,s,o,a){return this.rangedFilter_.matches(new k(t,i))||(i=N.EMPTY_NODE),e.getImmediateChild(t).equals(i)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,i,s,o,a):this.fullLimitUpdateChild_(e,t,i,o,a)}updateFullNode(e,t,i){let s;if(t.isLeafNode()||t.isEmpty())s=N.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){s=N.EMPTY_NODE.withIndex(this.index_);let o;this.reverse_?o=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):o=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let a=0;for(;o.hasNext()&&a<this.limit_;){const l=o.getNext();if(this.withinDirectionalStart(l))if(this.withinDirectionalEnd(l))s=s.updateImmediateChild(l.name,l.node),a++;else break;else continue}}else{s=t.withIndex(this.index_),s=s.updatePriority(N.EMPTY_NODE);let o;this.reverse_?o=s.getReverseIterator(this.index_):o=s.getIterator(this.index_);let a=0;for(;o.hasNext();){const l=o.getNext();a<this.limit_&&this.withinDirectionalStart(l)&&this.withinDirectionalEnd(l)?a++:s=s.updateImmediateChild(l.name,N.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,s,i)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,i,s,o){let a;if(this.reverse_){const _=this.index_.getCompare();a=(g,v)=>_(v,g)}else a=this.index_.getCompare();const l=e;b(l.numChildren()===this.limit_,"");const h=new k(t,i),u=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),p=this.rangedFilter_.matches(h);if(l.hasChild(t)){const _=l.getImmediateChild(t);let g=s.getChildAfterChild(this.index_,u,this.reverse_);for(;g!=null&&(g.name===t||l.hasChild(g.name));)g=s.getChildAfterChild(this.index_,g,this.reverse_);const v=g==null?1:a(g,h);if(p&&!i.isEmpty()&&v>=0)return o!=null&&o.trackChildChange(Fn(t,i,_)),l.updateImmediateChild(t,i);{o!=null&&o.trackChildChange(Ln(t,_));const T=l.updateImmediateChild(t,N.EMPTY_NODE);return g!=null&&this.rangedFilter_.matches(g)?(o!=null&&o.trackChildChange(rn(g.name,g.node)),T.updateImmediateChild(g.name,g.node)):T}}else return i.isEmpty()?e:p&&a(u,h)>=0?(o!=null&&(o.trackChildChange(Ln(u.name,u.node)),o.trackChildChange(rn(t,i))),l.updateImmediateChild(t,i).updateImmediateChild(u.name,N.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hr{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=q}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return b(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return b(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:sn}hasEnd(){return this.endSet_}getIndexEndValue(){return b(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return b(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:At}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return b(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===q}copy(){const e=new hr;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Gp(n){return n.loadsAllData()?new cr(n.getIndex()):n.hasLimit()?new qp(n):new $n(n)}function Xo(n){const e={};if(n.isDefault())return e;let t;if(n.index_===q?t="$priority":n.index_===Vp?t="$value":n.index_===Kt?t="$key":(b(n.index_ instanceof jp,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=te(t),n.startSet_){const i=n.startAfterSet_?"startAfter":"startAt";e[i]=te(n.indexStartValue_),n.startNameSet_&&(e[i]+=","+te(n.indexStartName_))}if(n.endSet_){const i=n.endBeforeSet_?"endBefore":"endAt";e[i]=te(n.indexEndValue_),n.endNameSet_&&(e[i]+=","+te(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function Jo(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==q&&(e.i=n.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ci extends Il{constructor(e,t,i,s){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=i,this.appCheckTokenProvider_=s,this.log_=zn("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(b(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,i,s){const o=e._path.toString();this.log_("Listen called for "+o+" "+e._queryIdentifier);const a=Ci.getListenId_(e,i),l={};this.listens_[a]=l;const h=Xo(e._queryParams);this.restRequest_(o+".json",h,(u,p)=>{let _=p;if(u===404&&(_=null,u=null),u===null&&this.onDataUpdate_(o,_,!1,i),nn(this.listens_,a)===l){let g;u?u===401?g="permission_denied":g="rest_error:"+u:g="ok",s(g,null)}})}unlisten(e,t){const i=Ci.getListenId_(e,t);delete this.listens_[i]}get(e){const t=Xo(e._queryParams),i=e._path.toString(),s=new er;return this.restRequest_(i+".json",t,(o,a)=>{let l=a;o===404&&(l=null,o=null),o===null?(this.onDataUpdate_(i,l,!1,null),s.resolve(l)):s.reject(new Error(l))}),s.promise}refreshAuthToken(e){}restRequest_(e,t={},i){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,o])=>{s&&s.accessToken&&(t.auth=s.accessToken),o&&o.token&&(t.ac=o.token);const a=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Ed(t);this.log_("Sending REST request for "+a);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(i&&l.readyState===4){this.log_("REST Response for "+a+" received. status:",l.status,"response:",l.responseText);let h=null;if(l.status>=200&&l.status<300){try{h=Dn(l.responseText)}catch{me("Failed to parse JSON response for "+a+": "+l.responseText)}i(null,h)}else l.status!==401&&l.status!==404&&me("Got unsuccessful REST response for "+a+" Status: "+l.status),i(l.status);i=null}},l.open("GET",a,!0),l.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yp{constructor(){this.rootNode_=N.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ti(){return{value:null,children:new Map}}function Fl(n,e,t){if(R(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const i=D(e);n.children.has(i)||n.children.set(i,Ti());const s=n.children.get(i);e=U(e),Fl(s,e,t)}}function Ds(n,e,t){n.value!==null?t(e,n.value):Kp(n,(i,s)=>{const o=new W(e.toString()+"/"+i);Ds(s,o,t)})}function Kp(n,e){n.children.forEach((t,i)=>{e(i,t)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qp{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&pe(this.last_,(i,s)=>{t[i]=t[i]-s}),this.last_=e,t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zo=10*1e3,Xp=30*1e3,Jp=5*60*1e3;class Zp{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new Qp(e);const i=Zo+(Xp-Zo)*Math.random();Nn(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const e=this.statsListener_.get(),t={};let i=!1;pe(e,(s,o)=>{o>0&&Ye(this.statsToReport_,s)&&(t[s]=o,i=!0)}),i&&this.server_.reportStats(t),Nn(this.reportStats_.bind(this),Math.floor(Math.random()*2*Jp))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Oe;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Oe||(Oe={}));function $l(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function ur(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function dr(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ii{constructor(e,t,i){this.path=e,this.affectedTree=t,this.revert=i,this.type=Oe.ACK_USER_WRITE,this.source=$l()}operationForChild(e){if(R(this.path)){if(this.affectedTree.value!=null)return b(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new W(e));return new Ii(F(),t,this.revert)}}else return b(D(this.path)===e,"operationForChild called for unrelated child."),new Ii(U(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bn{constructor(e,t){this.source=e,this.path=t,this.type=Oe.LISTEN_COMPLETE}operationForChild(e){return R(this.path)?new Bn(this.source,F()):new Bn(this.source,U(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt{constructor(e,t,i){this.source=e,this.path=t,this.snap=i,this.type=Oe.OVERWRITE}operationForChild(e){return R(this.path)?new Nt(this.source,F(),this.snap.getImmediateChild(e)):new Nt(this.source,U(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn{constructor(e,t,i){this.source=e,this.path=t,this.children=i,this.type=Oe.MERGE}operationForChild(e){if(R(this.path)){const t=this.children.subtree(new W(e));return t.isEmpty()?null:t.value?new Nt(this.source,F(),t.value):new Wn(this.source,F(),t)}else return b(D(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Wn(this.source,U(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{constructor(e,t,i){this.node_=e,this.fullyInitialized_=t,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(R(e))return this.isFullyInitialized()&&!this.filtered_;const t=D(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e_{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function t_(n,e,t,i){const s=[],o=[];return e.forEach(a=>{a.type==="child_changed"&&n.index_.indexedValueChanged(a.oldSnap,a.snapshotNode)&&o.push(zp(a.childName,a.snapshotNode))}),In(n,s,"child_removed",e,i,t),In(n,s,"child_added",e,i,t),In(n,s,"child_moved",o,i,t),In(n,s,"child_changed",e,i,t),In(n,s,"value",e,i,t),s}function In(n,e,t,i,s,o){const a=i.filter(l=>l.type===t);a.sort((l,h)=>i_(n,l,h)),a.forEach(l=>{const h=n_(n,l,o);s.forEach(u=>{u.respondsTo(l.type)&&e.push(u.createEvent(h,n.query_))})})}function n_(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function i_(n,e,t){if(e.childName==null||t.childName==null)throw ln("Should only compare child_ events.");const i=new k(e.childName,e.snapshotNode),s=new k(t.childName,t.snapshotNode);return n.index_.compare(i,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bi(n,e){return{eventCache:n,serverCache:e}}function xn(n,e,t,i){return Bi(new xt(e,t,i),n.serverCache)}function Bl(n,e,t,i){return Bi(n.eventCache,new xt(e,t,i))}function Rs(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function Ot(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _s;const s_=()=>(_s||(_s=new fe(Uf)),_s);class V{constructor(e,t=s_()){this.value=e,this.children=t}static fromObject(e){let t=new V(null);return pe(e,(i,s)=>{t=t.set(new W(i),s)}),t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:F(),value:this.value};if(R(e))return null;{const i=D(e),s=this.children.get(i);if(s!==null){const o=s.findRootMostMatchingPathAndValue(U(e),t);return o!=null?{path:X(new W(i),o.path),value:o.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(R(e))return this;{const t=D(e),i=this.children.get(t);return i!==null?i.subtree(U(e)):new V(null)}}set(e,t){if(R(e))return new V(t,this.children);{const i=D(e),o=(this.children.get(i)||new V(null)).set(U(e),t),a=this.children.insert(i,o);return new V(this.value,a)}}remove(e){if(R(e))return this.children.isEmpty()?new V(null):new V(null,this.children);{const t=D(e),i=this.children.get(t);if(i){const s=i.remove(U(e));let o;return s.isEmpty()?o=this.children.remove(t):o=this.children.insert(t,s),this.value===null&&o.isEmpty()?new V(null):new V(this.value,o)}else return this}}get(e){if(R(e))return this.value;{const t=D(e),i=this.children.get(t);return i?i.get(U(e)):null}}setTree(e,t){if(R(e))return t;{const i=D(e),o=(this.children.get(i)||new V(null)).setTree(U(e),t);let a;return o.isEmpty()?a=this.children.remove(i):a=this.children.insert(i,o),new V(this.value,a)}}fold(e){return this.fold_(F(),e)}fold_(e,t){const i={};return this.children.inorderTraversal((s,o)=>{i[s]=o.fold_(X(e,s),t)}),t(e,this.value,i)}findOnPath(e,t){return this.findOnPath_(e,F(),t)}findOnPath_(e,t,i){const s=this.value?i(t,this.value):!1;if(s)return s;if(R(e))return null;{const o=D(e),a=this.children.get(o);return a?a.findOnPath_(U(e),X(t,o),i):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,F(),t)}foreachOnPath_(e,t,i){if(R(e))return this;{this.value&&i(t,this.value);const s=D(e),o=this.children.get(s);return o?o.foreachOnPath_(U(e),X(t,s),i):new V(null)}}foreach(e){this.foreach_(F(),e)}foreach_(e,t){this.children.inorderTraversal((i,s)=>{s.foreach_(X(e,i),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,i)=>{i.value&&e(t,i.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ke{constructor(e){this.writeTree_=e}static empty(){return new ke(new V(null))}}function On(n,e,t){if(R(e))return new ke(new V(t));{const i=n.writeTree_.findRootMostValueAndPath(e);if(i!=null){const s=i.path;let o=i.value;const a=de(s,e);return o=o.updateChild(a,t),new ke(n.writeTree_.set(s,o))}else{const s=new V(t),o=n.writeTree_.setTree(e,s);return new ke(o)}}}function ea(n,e,t){let i=n;return pe(t,(s,o)=>{i=On(i,X(e,s),o)}),i}function ta(n,e){if(R(e))return ke.empty();{const t=n.writeTree_.setTree(e,new V(null));return new ke(t)}}function Ps(n,e){return kt(n,e)!=null}function kt(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(de(t.path,e)):null}function na(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(q,(i,s)=>{e.push(new k(i,s))}):n.writeTree_.children.inorderTraversal((i,s)=>{s.value!=null&&e.push(new k(i,s.value))}),e}function it(n,e){if(R(e))return n;{const t=kt(n,e);return t!=null?new ke(new V(t)):new ke(n.writeTree_.subtree(e))}}function Ms(n){return n.writeTree_.isEmpty()}function on(n,e){return Wl(F(),n.writeTree_,e)}function Wl(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let i=null;return e.children.inorderTraversal((s,o)=>{s===".priority"?(b(o.value!==null,"Priority writes must always be leaf nodes"),i=o.value):t=Wl(X(n,s),o,t)}),!t.getChild(n).isEmpty()&&i!==null&&(t=t.updateChild(X(n,".priority"),i)),t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fr(n,e){return Vl(e,n)}function r_(n,e,t,i,s){b(i>n.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),n.allWrites.push({path:e,snap:t,writeId:i,visible:s}),s&&(n.visibleWrites=On(n.visibleWrites,e,t)),n.lastWriteId=i}function o_(n,e){for(let t=0;t<n.allWrites.length;t++){const i=n.allWrites[t];if(i.writeId===e)return i}return null}function a_(n,e){const t=n.allWrites.findIndex(l=>l.writeId===e);b(t>=0,"removeWrite called with nonexistent writeId.");const i=n.allWrites[t];n.allWrites.splice(t,1);let s=i.visible,o=!1,a=n.allWrites.length-1;for(;s&&a>=0;){const l=n.allWrites[a];l.visible&&(a>=t&&l_(l,i.path)?s=!1:xe(i.path,l.path)&&(o=!0)),a--}if(s){if(o)return c_(n),!0;if(i.snap)n.visibleWrites=ta(n.visibleWrites,i.path);else{const l=i.children;pe(l,h=>{n.visibleWrites=ta(n.visibleWrites,X(i.path,h))})}return!0}else return!1}function l_(n,e){if(n.snap)return xe(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&xe(X(n.path,t),e))return!0;return!1}function c_(n){n.visibleWrites=Hl(n.allWrites,h_,F()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function h_(n){return n.visible}function Hl(n,e,t){let i=ke.empty();for(let s=0;s<n.length;++s){const o=n[s];if(e(o)){const a=o.path;let l;if(o.snap)xe(t,a)?(l=de(t,a),i=On(i,l,o.snap)):xe(a,t)&&(l=de(a,t),i=On(i,F(),o.snap.getChild(l)));else if(o.children){if(xe(t,a))l=de(t,a),i=ea(i,l,o.children);else if(xe(a,t))if(l=de(a,t),R(l))i=ea(i,F(),o.children);else{const h=nn(o.children,D(l));if(h){const u=h.getChild(U(l));i=On(i,F(),u)}}}else throw ln("WriteRecord should have .snap or .children")}}return i}function jl(n,e,t,i,s){if(!i&&!s){const o=kt(n.visibleWrites,e);if(o!=null)return o;{const a=it(n.visibleWrites,e);if(Ms(a))return t;if(t==null&&!Ps(a,F()))return null;{const l=t||N.EMPTY_NODE;return on(a,l)}}}else{const o=it(n.visibleWrites,e);if(!s&&Ms(o))return t;if(!s&&t==null&&!Ps(o,F()))return null;{const a=function(u){return(u.visible||s)&&(!i||!~i.indexOf(u.writeId))&&(xe(u.path,e)||xe(e,u.path))},l=Hl(n.allWrites,a,e),h=t||N.EMPTY_NODE;return on(l,h)}}}function u_(n,e,t){let i=N.EMPTY_NODE;const s=kt(n.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(q,(o,a)=>{i=i.updateImmediateChild(o,a)}),i;if(t){const o=it(n.visibleWrites,e);return t.forEachChild(q,(a,l)=>{const h=on(it(o,new W(a)),l);i=i.updateImmediateChild(a,h)}),na(o).forEach(a=>{i=i.updateImmediateChild(a.name,a.node)}),i}else{const o=it(n.visibleWrites,e);return na(o).forEach(a=>{i=i.updateImmediateChild(a.name,a.node)}),i}}function d_(n,e,t,i,s){b(i||s,"Either existingEventSnap or existingServerSnap must exist");const o=X(e,t);if(Ps(n.visibleWrites,o))return null;{const a=it(n.visibleWrites,o);return Ms(a)?s.getChild(t):on(a,s.getChild(t))}}function f_(n,e,t,i){const s=X(e,t),o=kt(n.visibleWrites,s);if(o!=null)return o;if(i.isCompleteForChild(t)){const a=it(n.visibleWrites,s);return on(a,i.getNode().getImmediateChild(t))}else return null}function p_(n,e){return kt(n.visibleWrites,e)}function __(n,e,t,i,s,o,a){let l;const h=it(n.visibleWrites,e),u=kt(h,F());if(u!=null)l=u;else if(t!=null)l=on(h,t);else return[];if(l=l.withIndex(a),!l.isEmpty()&&!l.isLeafNode()){const p=[],_=a.getCompare(),g=o?l.getReverseIteratorFrom(i,a):l.getIteratorFrom(i,a);let v=g.getNext();for(;v&&p.length<s;)_(v,i)!==0&&p.push(v),v=g.getNext();return p}else return[]}function g_(){return{visibleWrites:ke.empty(),allWrites:[],lastWriteId:-1}}function Si(n,e,t,i){return jl(n.writeTree,n.treePath,e,t,i)}function pr(n,e){return u_(n.writeTree,n.treePath,e)}function ia(n,e,t,i){return d_(n.writeTree,n.treePath,e,t,i)}function Ai(n,e){return p_(n.writeTree,X(n.treePath,e))}function m_(n,e,t,i,s,o){return __(n.writeTree,n.treePath,e,t,i,s,o)}function _r(n,e,t){return f_(n.writeTree,n.treePath,e,t)}function Ul(n,e){return Vl(X(n.treePath,e),n.writeTree)}function Vl(n,e){return{treePath:n,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v_{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,i=e.childName;b(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),b(i!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(i);if(s){const o=s.type;if(t==="child_added"&&o==="child_removed")this.changeMap.set(i,Fn(i,e.snapshotNode,s.snapshotNode));else if(t==="child_removed"&&o==="child_added")this.changeMap.delete(i);else if(t==="child_removed"&&o==="child_changed")this.changeMap.set(i,Ln(i,s.oldSnap));else if(t==="child_changed"&&o==="child_added")this.changeMap.set(i,rn(i,e.snapshotNode));else if(t==="child_changed"&&o==="child_changed")this.changeMap.set(i,Fn(i,e.snapshotNode,s.oldSnap));else throw ln("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y_{getCompleteChild(e){return null}getChildAfterChild(e,t,i){return null}}const zl=new y_;class gr{constructor(e,t,i=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=i}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const i=this.optCompleteServerCache_!=null?new xt(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return _r(this.writes_,e,i)}}getChildAfterChild(e,t,i){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Ot(this.viewCache_),o=m_(this.writes_,s,t,1,i,e);return o.length===0?null:o[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b_(n){return{filter:n}}function w_(n,e){b(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),b(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function E_(n,e,t,i,s){const o=new v_;let a,l;if(t.type===Oe.OVERWRITE){const u=t;u.source.fromUser?a=Ls(n,e,u.path,u.snap,i,s,o):(b(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered()&&!R(u.path),a=Ni(n,e,u.path,u.snap,i,s,l,o))}else if(t.type===Oe.MERGE){const u=t;u.source.fromUser?a=T_(n,e,u.path,u.children,i,s,o):(b(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered(),a=Fs(n,e,u.path,u.children,i,s,l,o))}else if(t.type===Oe.ACK_USER_WRITE){const u=t;u.revert?a=A_(n,e,u.path,i,s,o):a=I_(n,e,u.path,u.affectedTree,i,s,o)}else if(t.type===Oe.LISTEN_COMPLETE)a=S_(n,e,t.path,i,o);else throw ln("Unknown operation type: "+t.type);const h=o.getChanges();return C_(e,a,h),{viewCache:a,changes:h}}function C_(n,e,t){const i=e.eventCache;if(i.isFullyInitialized()){const s=i.getNode().isLeafNode()||i.getNode().isEmpty(),o=Rs(n);(t.length>0||!n.eventCache.isFullyInitialized()||s&&!i.getNode().equals(o)||!i.getNode().getPriority().equals(o.getPriority()))&&t.push(Ll(Rs(e)))}}function ql(n,e,t,i,s,o){const a=e.eventCache;if(Ai(i,t)!=null)return e;{let l,h;if(R(t))if(b(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=Ot(e),p=u instanceof N?u:N.EMPTY_NODE,_=pr(i,p);l=n.filter.updateFullNode(e.eventCache.getNode(),_,o)}else{const u=Si(i,Ot(e));l=n.filter.updateFullNode(e.eventCache.getNode(),u,o)}else{const u=D(t);if(u===".priority"){b(st(t)===1,"Can't have a priority with additional path components");const p=a.getNode();h=e.serverCache.getNode();const _=ia(i,t,p,h);_!=null?l=n.filter.updatePriority(p,_):l=a.getNode()}else{const p=U(t);let _;if(a.isCompleteForChild(u)){h=e.serverCache.getNode();const g=ia(i,t,a.getNode(),h);g!=null?_=a.getNode().getImmediateChild(u).updateChild(p,g):_=a.getNode().getImmediateChild(u)}else _=_r(i,u,e.serverCache);_!=null?l=n.filter.updateChild(a.getNode(),u,_,p,s,o):l=a.getNode()}}return xn(e,l,a.isFullyInitialized()||R(t),n.filter.filtersNodes())}}function Ni(n,e,t,i,s,o,a,l){const h=e.serverCache;let u;const p=a?n.filter:n.filter.getIndexedFilter();if(R(t))u=p.updateFullNode(h.getNode(),i,null);else if(p.filtersNodes()&&!h.isFiltered()){const v=h.getNode().updateChild(t,i);u=p.updateFullNode(h.getNode(),v,null)}else{const v=D(t);if(!h.isCompleteForPath(t)&&st(t)>1)return e;const E=U(t),S=h.getNode().getImmediateChild(v).updateChild(E,i);v===".priority"?u=p.updatePriority(h.getNode(),S):u=p.updateChild(h.getNode(),v,S,E,zl,null)}const _=Bl(e,u,h.isFullyInitialized()||R(t),p.filtersNodes()),g=new gr(s,_,o);return ql(n,_,t,s,g,l)}function Ls(n,e,t,i,s,o,a){const l=e.eventCache;let h,u;const p=new gr(s,e,o);if(R(t))u=n.filter.updateFullNode(e.eventCache.getNode(),i,a),h=xn(e,u,!0,n.filter.filtersNodes());else{const _=D(t);if(_===".priority")u=n.filter.updatePriority(e.eventCache.getNode(),i),h=xn(e,u,l.isFullyInitialized(),l.isFiltered());else{const g=U(t),v=l.getNode().getImmediateChild(_);let E;if(R(g))E=i;else{const T=p.getCompleteChild(_);T!=null?Al(g)===".priority"&&T.getChild(xl(g)).isEmpty()?E=T:E=T.updateChild(g,i):E=N.EMPTY_NODE}if(v.equals(E))h=e;else{const T=n.filter.updateChild(l.getNode(),_,E,g,p,a);h=xn(e,T,l.isFullyInitialized(),n.filter.filtersNodes())}}}return h}function sa(n,e){return n.eventCache.isCompleteForChild(e)}function T_(n,e,t,i,s,o,a){let l=e;return i.foreach((h,u)=>{const p=X(t,h);sa(e,D(p))&&(l=Ls(n,l,p,u,s,o,a))}),i.foreach((h,u)=>{const p=X(t,h);sa(e,D(p))||(l=Ls(n,l,p,u,s,o,a))}),l}function ra(n,e,t){return t.foreach((i,s)=>{e=e.updateChild(i,s)}),e}function Fs(n,e,t,i,s,o,a,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let h=e,u;R(t)?u=i:u=new V(null).setTree(t,i);const p=e.serverCache.getNode();return u.children.inorderTraversal((_,g)=>{if(p.hasChild(_)){const v=e.serverCache.getNode().getImmediateChild(_),E=ra(n,v,g);h=Ni(n,h,new W(_),E,s,o,a,l)}}),u.children.inorderTraversal((_,g)=>{const v=!e.serverCache.isCompleteForChild(_)&&g.value===null;if(!p.hasChild(_)&&!v){const E=e.serverCache.getNode().getImmediateChild(_),T=ra(n,E,g);h=Ni(n,h,new W(_),T,s,o,a,l)}}),h}function I_(n,e,t,i,s,o,a){if(Ai(s,t)!=null)return e;const l=e.serverCache.isFiltered(),h=e.serverCache;if(i.value!=null){if(R(t)&&h.isFullyInitialized()||h.isCompleteForPath(t))return Ni(n,e,t,h.getNode().getChild(t),s,o,l,a);if(R(t)){let u=new V(null);return h.getNode().forEachChild(Kt,(p,_)=>{u=u.set(new W(p),_)}),Fs(n,e,t,u,s,o,l,a)}else return e}else{let u=new V(null);return i.foreach((p,_)=>{const g=X(t,p);h.isCompleteForPath(g)&&(u=u.set(p,h.getNode().getChild(g)))}),Fs(n,e,t,u,s,o,l,a)}}function S_(n,e,t,i,s){const o=e.serverCache,a=Bl(e,o.getNode(),o.isFullyInitialized()||R(t),o.isFiltered());return ql(n,a,t,i,zl,s)}function A_(n,e,t,i,s,o){let a;if(Ai(i,t)!=null)return e;{const l=new gr(i,e,s),h=e.eventCache.getNode();let u;if(R(t)||D(t)===".priority"){let p;if(e.serverCache.isFullyInitialized())p=Si(i,Ot(e));else{const _=e.serverCache.getNode();b(_ instanceof N,"serverChildren would be complete if leaf node"),p=pr(i,_)}p=p,u=n.filter.updateFullNode(h,p,o)}else{const p=D(t);let _=_r(i,p,e.serverCache);_==null&&e.serverCache.isCompleteForChild(p)&&(_=h.getImmediateChild(p)),_!=null?u=n.filter.updateChild(h,p,_,U(t),l,o):e.eventCache.getNode().hasChild(p)?u=n.filter.updateChild(h,p,N.EMPTY_NODE,U(t),l,o):u=h,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(a=Si(i,Ot(e)),a.isLeafNode()&&(u=n.filter.updateFullNode(u,a,o)))}return a=e.serverCache.isFullyInitialized()||Ai(i,F())!=null,xn(e,u,a,n.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N_{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const i=this.query_._queryParams,s=new cr(i.getIndex()),o=Gp(i);this.processor_=b_(o);const a=t.serverCache,l=t.eventCache,h=s.updateFullNode(N.EMPTY_NODE,a.getNode(),null),u=o.updateFullNode(N.EMPTY_NODE,l.getNode(),null),p=new xt(h,a.isFullyInitialized(),s.filtersNodes()),_=new xt(u,l.isFullyInitialized(),o.filtersNodes());this.viewCache_=Bi(_,p),this.eventGenerator_=new e_(this.query_)}get query(){return this.query_}}function x_(n){return n.viewCache_.serverCache.getNode()}function O_(n,e){const t=Ot(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!R(e)&&!t.getImmediateChild(D(e)).isEmpty())?t.getChild(e):null}function oa(n){return n.eventRegistrations_.length===0}function k_(n,e){n.eventRegistrations_.push(e)}function aa(n,e,t){const i=[];if(t){b(e==null,"A cancel should cancel all event registrations.");const s=n.query._path;n.eventRegistrations_.forEach(o=>{const a=o.createCancelEvent(t,s);a&&i.push(a)})}if(e){let s=[];for(let o=0;o<n.eventRegistrations_.length;++o){const a=n.eventRegistrations_[o];if(!a.matches(e))s.push(a);else if(e.hasAnyCallback()){s=s.concat(n.eventRegistrations_.slice(o+1));break}}n.eventRegistrations_=s}else n.eventRegistrations_=[];return i}function la(n,e,t,i){e.type===Oe.MERGE&&e.source.queryId!==null&&(b(Ot(n.viewCache_),"We should always have a full cache before handling merges"),b(Rs(n.viewCache_),"Missing event cache, even though we have a server cache"));const s=n.viewCache_,o=E_(n.processor_,s,e,t,i);return w_(n.processor_,o.viewCache),b(o.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=o.viewCache,Gl(n,o.changes,o.viewCache.eventCache.getNode(),null)}function D_(n,e){const t=n.viewCache_.eventCache,i=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(q,(o,a)=>{i.push(rn(o,a))}),t.isFullyInitialized()&&i.push(Ll(t.getNode())),Gl(n,i,t.getNode(),e)}function Gl(n,e,t,i){const s=i?[i]:n.eventRegistrations_;return t_(n.eventGenerator_,e,t,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xi;class R_{constructor(){this.views=new Map}}function P_(n){b(!xi,"__referenceConstructor has already been defined"),xi=n}function M_(){return b(xi,"Reference.ts has not been loaded"),xi}function L_(n){return n.views.size===0}function mr(n,e,t,i){const s=e.source.queryId;if(s!==null){const o=n.views.get(s);return b(o!=null,"SyncTree gave us an op for an invalid query."),la(o,e,t,i)}else{let o=[];for(const a of n.views.values())o=o.concat(la(a,e,t,i));return o}}function F_(n,e,t,i,s){const o=e._queryIdentifier,a=n.views.get(o);if(!a){let l=Si(t,s?i:null),h=!1;l?h=!0:i instanceof N?(l=pr(t,i),h=!1):(l=N.EMPTY_NODE,h=!1);const u=Bi(new xt(l,h,!1),new xt(i,s,!1));return new N_(e,u)}return a}function $_(n,e,t,i,s,o){const a=F_(n,e,i,s,o);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,a),k_(a,t),D_(a,t)}function B_(n,e,t,i){const s=e._queryIdentifier,o=[];let a=[];const l=rt(n);if(s==="default")for(const[h,u]of n.views.entries())a=a.concat(aa(u,t,i)),oa(u)&&(n.views.delete(h),u.query._queryParams.loadsAllData()||o.push(u.query));else{const h=n.views.get(s);h&&(a=a.concat(aa(h,t,i)),oa(h)&&(n.views.delete(s),h.query._queryParams.loadsAllData()||o.push(h.query)))}return l&&!rt(n)&&o.push(new(M_())(e._repo,e._path)),{removed:o,events:a}}function Yl(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function Qt(n,e){let t=null;for(const i of n.views.values())t=t||O_(i,e);return t}function Kl(n,e){if(e._queryParams.loadsAllData())return Wi(n);{const i=e._queryIdentifier;return n.views.get(i)}}function Ql(n,e){return Kl(n,e)!=null}function rt(n){return Wi(n)!=null}function Wi(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Oi;function W_(n){b(!Oi,"__referenceConstructor has already been defined"),Oi=n}function H_(){return b(Oi,"Reference.ts has not been loaded"),Oi}let j_=1;class ca{constructor(e){this.listenProvider_=e,this.syncPointTree_=new V(null),this.pendingWriteTree_=g_(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function U_(n,e,t,i,s){return r_(n.pendingWriteTree_,e,t,i,s),s?Yn(n,new Nt($l(),e,t)):[]}function zt(n,e,t=!1){const i=o_(n.pendingWriteTree_,e);if(a_(n.pendingWriteTree_,e)){let o=new V(null);return i.snap!=null?o=o.set(F(),!0):pe(i.children,a=>{o=o.set(new W(a),!0)}),Yn(n,new Ii(i.path,o,t))}else return[]}function Hi(n,e,t){return Yn(n,new Nt(ur(),e,t))}function V_(n,e,t){const i=V.fromObject(t);return Yn(n,new Wn(ur(),e,i))}function z_(n,e){return Yn(n,new Bn(ur(),e))}function q_(n,e,t){const i=vr(n,t);if(i){const s=yr(i),o=s.path,a=s.queryId,l=de(o,e),h=new Bn(dr(a),l);return br(n,o,h)}else return[]}function $s(n,e,t,i,s=!1){const o=e._path,a=n.syncPointTree_.get(o);let l=[];if(a&&(e._queryIdentifier==="default"||Ql(a,e))){const h=B_(a,e,t,i);L_(a)&&(n.syncPointTree_=n.syncPointTree_.remove(o));const u=h.removed;if(l=h.events,!s){const p=u.findIndex(g=>g._queryParams.loadsAllData())!==-1,_=n.syncPointTree_.findOnPath(o,(g,v)=>rt(v));if(p&&!_){const g=n.syncPointTree_.subtree(o);if(!g.isEmpty()){const v=K_(g);for(let E=0;E<v.length;++E){const T=v[E],S=T.query,P=ec(n,T);n.listenProvider_.startListening(kn(S),ki(n,S),P.hashFn,P.onComplete)}}}!_&&u.length>0&&!i&&(p?n.listenProvider_.stopListening(kn(e),null):u.forEach(g=>{const v=n.queryToTagMap.get(ji(g));n.listenProvider_.stopListening(kn(g),v)}))}Q_(n,u)}return l}function G_(n,e,t,i){const s=vr(n,i);if(s!=null){const o=yr(s),a=o.path,l=o.queryId,h=de(a,e),u=new Nt(dr(l),h,t);return br(n,a,u)}else return[]}function Y_(n,e,t,i){const s=vr(n,i);if(s){const o=yr(s),a=o.path,l=o.queryId,h=de(a,e),u=V.fromObject(t),p=new Wn(dr(l),h,u);return br(n,a,p)}else return[]}function ha(n,e,t,i=!1){const s=e._path;let o=null,a=!1;n.syncPointTree_.foreachOnPath(s,(g,v)=>{const E=de(g,s);o=o||Qt(v,E),a=a||rt(v)});let l=n.syncPointTree_.get(s);l?(a=a||rt(l),o=o||Qt(l,F())):(l=new R_,n.syncPointTree_=n.syncPointTree_.set(s,l));let h;o!=null?h=!0:(h=!1,o=N.EMPTY_NODE,n.syncPointTree_.subtree(s).foreachChild((v,E)=>{const T=Qt(E,F());T&&(o=o.updateImmediateChild(v,T))}));const u=Ql(l,e);if(!u&&!e._queryParams.loadsAllData()){const g=ji(e);b(!n.queryToTagMap.has(g),"View does not exist, but we have a tag");const v=X_();n.queryToTagMap.set(g,v),n.tagToQueryMap.set(v,g)}const p=fr(n.pendingWriteTree_,s);let _=$_(l,e,t,p,o,h);if(!u&&!a&&!i){const g=Kl(l,e);_=_.concat(J_(n,e,g))}return _}function Xl(n,e,t){const s=n.pendingWriteTree_,o=n.syncPointTree_.findOnPath(e,(a,l)=>{const h=de(a,e),u=Qt(l,h);if(u)return u});return jl(s,e,o,t,!0)}function Yn(n,e){return Jl(e,n.syncPointTree_,null,fr(n.pendingWriteTree_,F()))}function Jl(n,e,t,i){if(R(n.path))return Zl(n,e,t,i);{const s=e.get(F());t==null&&s!=null&&(t=Qt(s,F()));let o=[];const a=D(n.path),l=n.operationForChild(a),h=e.children.get(a);if(h&&l){const u=t?t.getImmediateChild(a):null,p=Ul(i,a);o=o.concat(Jl(l,h,u,p))}return s&&(o=o.concat(mr(s,n,i,t))),o}}function Zl(n,e,t,i){const s=e.get(F());t==null&&s!=null&&(t=Qt(s,F()));let o=[];return e.children.inorderTraversal((a,l)=>{const h=t?t.getImmediateChild(a):null,u=Ul(i,a),p=n.operationForChild(a);p&&(o=o.concat(Zl(p,l,h,u)))}),s&&(o=o.concat(mr(s,n,i,t))),o}function ec(n,e){const t=e.query,i=ki(n,t);return{hashFn:()=>(x_(e)||N.EMPTY_NODE).hash(),onComplete:s=>{if(s==="ok")return i?q_(n,t._path,i):z_(n,t._path);{const o=qf(s,t);return $s(n,t,null,o)}}}}function ki(n,e){const t=ji(e);return n.queryToTagMap.get(t)}function ji(n){return n._path.toString()+"$"+n._queryIdentifier}function vr(n,e){return n.tagToQueryMap.get(e)}function yr(n){const e=n.indexOf("$");return b(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new W(n.substr(0,e))}}function br(n,e,t){const i=n.syncPointTree_.get(e);b(i,"Missing sync point for query tag that we're tracking");const s=fr(n.pendingWriteTree_,e);return mr(i,t,s,null)}function K_(n){return n.fold((e,t,i)=>{if(t&&rt(t))return[Wi(t)];{let s=[];return t&&(s=Yl(t)),pe(i,(o,a)=>{s=s.concat(a)}),s}})}function kn(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(H_())(n._repo,n._path):n}function Q_(n,e){for(let t=0;t<e.length;++t){const i=e[t];if(!i._queryParams.loadsAllData()){const s=ji(i),o=n.queryToTagMap.get(s);n.queryToTagMap.delete(s),n.tagToQueryMap.delete(o)}}}function X_(){return j_++}function J_(n,e,t){const i=e._path,s=ki(n,e),o=ec(n,t),a=n.listenProvider_.startListening(kn(e),s,o.hashFn,o.onComplete),l=n.syncPointTree_.subtree(i);if(s)b(!rt(l.value),"If we're adding a query, it shouldn't be shadowed");else{const h=l.fold((u,p,_)=>{if(!R(u)&&p&&rt(p))return[Wi(p).query];{let g=[];return p&&(g=g.concat(Yl(p).map(v=>v.query))),pe(_,(v,E)=>{g=g.concat(E)}),g}});for(let u=0;u<h.length;++u){const p=h[u];n.listenProvider_.stopListening(kn(p),ki(n,p))}}return a}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wr{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new wr(t)}node(){return this.node_}}class Er{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=X(this.path_,e);return new Er(this.syncTree_,t)}node(){return Xl(this.syncTree_,this.path_)}}const Z_=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},ua=function(n,e,t){if(!n||typeof n!="object")return n;if(b(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return eg(n[".sv"],e,t);if(typeof n[".sv"]=="object")return tg(n[".sv"],e);b(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},eg=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:b(!1,"Unexpected server value: "+n)}},tg=function(n,e,t){n.hasOwnProperty("increment")||b(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const i=n.increment;typeof i!="number"&&b(!1,"Unexpected increment value: "+i);const s=e.node();if(b(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return i;const a=s.getValue();return typeof a!="number"?i:a+i},ng=function(n,e,t,i){return Cr(e,new Er(t,n),i)},ig=function(n,e,t){return Cr(n,new wr(e),t)};function Cr(n,e,t){const i=n.getPriority().val(),s=ua(i,e.getImmediateChild(".priority"),t);let o;if(n.isLeafNode()){const a=n,l=ua(a.getValue(),e,t);return l!==a.getValue()||s!==a.getPriority().val()?new Z(l,se(s)):n}else{const a=n;return o=a,s!==a.getPriority().val()&&(o=o.updatePriority(new Z(s))),a.forEachChild(q,(l,h)=>{const u=Cr(h,e.getImmediateChild(l),t);u!==h&&(o=o.updateImmediateChild(l,u))}),o}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tr{constructor(e="",t=null,i={children:{},childCount:0}){this.name=e,this.parent=t,this.node=i}}function Ir(n,e){let t=e instanceof W?e:new W(e),i=n,s=D(t);for(;s!==null;){const o=nn(i.node.children,s)||{children:{},childCount:0};i=new Tr(s,i,o),t=U(t),s=D(t)}return i}function hn(n){return n.node.value}function tc(n,e){n.node.value=e,Bs(n)}function nc(n){return n.node.childCount>0}function sg(n){return hn(n)===void 0&&!nc(n)}function Ui(n,e){pe(n.node.children,(t,i)=>{e(new Tr(t,n,i))})}function ic(n,e,t,i){t&&!i&&e(n),Ui(n,s=>{ic(s,e,!0,i)}),t&&i&&e(n)}function rg(n,e,t){let i=t?n:n.parent;for(;i!==null;){if(e(i))return!0;i=i.parent}return!1}function Kn(n){return new W(n.parent===null?n.name:Kn(n.parent)+"/"+n.name)}function Bs(n){n.parent!==null&&og(n.parent,n.name,n)}function og(n,e,t){const i=sg(t),s=Ye(n.node.children,e);i&&s?(delete n.node.children[e],n.node.childCount--,Bs(n)):!i&&!s&&(n.node.children[e]=t.node,n.node.childCount++,Bs(n))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ag=/[\[\].#$\/\u0000-\u001F\u007F]/,lg=/[\[\].#$\u0000-\u001F\u007F]/,gs=10*1024*1024,sc=function(n){return typeof n=="string"&&n.length!==0&&!ag.test(n)},rc=function(n){return typeof n=="string"&&n.length!==0&&!lg.test(n)},cg=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),rc(n)},oc=function(n,e,t){const i=t instanceof W?new Ip(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+bt(i));if(typeof e=="function")throw new Error(n+"contains a function "+bt(i)+" with contents = "+e.toString());if(ol(e))throw new Error(n+"contains "+e.toString()+" "+bt(i));if(typeof e=="string"&&e.length>gs/3&&Li(e)>gs)throw new Error(n+"contains a string greater than "+gs+" utf8 bytes "+bt(i)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,o=!1;if(pe(e,(a,l)=>{if(a===".value")s=!0;else if(a!==".priority"&&a!==".sv"&&(o=!0,!sc(a)))throw new Error(n+" contains an invalid key ("+a+") "+bt(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Sp(i,a),oc(n,l,i),Ap(i)}),s&&o)throw new Error(n+' contains ".value" child '+bt(i)+" in addition to actual children.")}},ac=function(n,e,t,i){if(!(i&&t===void 0)&&!rc(t))throw new Error(Qa(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},hg=function(n,e,t,i){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),ac(n,e,t,i)},ug=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!sc(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!cg(t))throw new Error(Qa(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dg{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function lc(n,e){let t=null;for(let i=0;i<e.length;i++){const s=e[i],o=s.getPath();t!==null&&!or(o,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:o}),t.events.push(s)}t&&n.eventLists_.push(t)}function cc(n,e,t){lc(n,t),hc(n,i=>or(i,e))}function Dt(n,e,t){lc(n,t),hc(n,i=>xe(i,e)||xe(e,i))}function hc(n,e){n.recursionDepth_++;let t=!0;for(let i=0;i<n.eventLists_.length;i++){const s=n.eventLists_[i];if(s){const o=s.path;e(o)?(fg(n.eventLists_[i]),n.eventLists_[i]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function fg(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const i=t.getEventRunner();Ct&&ie("event: "+t.toString()),qn(i)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pg="repo_interrupt",_g=25;class gg{constructor(e,t,i,s){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=i,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new dg,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Ti(),this.transactionQueueTree_=new Tr,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function mg(n,e,t){if(n.stats_=sr(n.repoInfo_),n.forceRestClient_||Qf())n.server_=new Ci(n.repoInfo_,(i,s,o,a)=>{da(n,i,s,o,a)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>fa(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{te(t)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}n.persistentConnection_=new ze(n.repoInfo_,e,(i,s,o,a)=>{da(n,i,s,o,a)},i=>{fa(n,i)},i=>{yg(n,i)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(i=>{n.server_.refreshAuthToken(i)}),n.appCheckProvider_.addTokenChangeListener(i=>{n.server_.refreshAppCheckToken(i.token)}),n.statsReporter_=tp(n.repoInfo_,()=>new Zp(n.stats_,n.server_)),n.infoData_=new Yp,n.infoSyncTree_=new ca({startListening:(i,s,o,a)=>{let l=[];const h=n.infoData_.getNode(i._path);return h.isEmpty()||(l=Hi(n.infoSyncTree_,i._path,h),setTimeout(()=>{a("ok")},0)),l},stopListening:()=>{}}),Sr(n,"connected",!1),n.serverSyncTree_=new ca({startListening:(i,s,o,a)=>(n.server_.listen(i,o,s,(l,h)=>{const u=a(l,h);Dt(n.eventQueue_,i._path,u)}),[]),stopListening:(i,s)=>{n.server_.unlisten(i,s)}})}function vg(n){const t=n.infoData_.getNode(new W(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function uc(n){return Z_({timestamp:vg(n)})}function da(n,e,t,i,s){n.dataUpdateCount++;const o=new W(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let a=[];if(s)if(i){const h=mi(t,u=>se(u));a=Y_(n.serverSyncTree_,o,h,s)}else{const h=se(t);a=G_(n.serverSyncTree_,o,h,s)}else if(i){const h=mi(t,u=>se(u));a=V_(n.serverSyncTree_,o,h)}else{const h=se(t);a=Hi(n.serverSyncTree_,o,h)}let l=o;a.length>0&&(l=Nr(n,o)),Dt(n.eventQueue_,l,a)}function fa(n,e){Sr(n,"connected",e),e===!1&&wg(n)}function yg(n,e){pe(e,(t,i)=>{Sr(n,t,i)})}function Sr(n,e,t){const i=new W("/.info/"+e),s=se(t);n.infoData_.updateSnapshot(i,s);const o=Hi(n.infoSyncTree_,i,s);Dt(n.eventQueue_,i,o)}function bg(n){return n.nextWriteId_++}function wg(n){dc(n,"onDisconnectEvents");const e=uc(n),t=Ti();Ds(n.onDisconnect_,F(),(s,o)=>{const a=ng(s,o,n.serverSyncTree_,e);Fl(t,s,a)});let i=[];Ds(t,F(),(s,o)=>{i=i.concat(Hi(n.serverSyncTree_,s,o));const a=Sg(n,s);Nr(n,a)}),n.onDisconnect_=Ti(),Dt(n.eventQueue_,F(),i)}function Eg(n,e,t){let i;D(e._path)===".info"?i=ha(n.infoSyncTree_,e,t):i=ha(n.serverSyncTree_,e,t),cc(n.eventQueue_,e._path,i)}function pa(n,e,t){let i;D(e._path)===".info"?i=$s(n.infoSyncTree_,e,t):i=$s(n.serverSyncTree_,e,t),cc(n.eventQueue_,e._path,i)}function Cg(n){n.persistentConnection_&&n.persistentConnection_.interrupt(pg)}function dc(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),ie(t,...e)}function fc(n,e,t){return Xl(n.serverSyncTree_,e,t)||N.EMPTY_NODE}function Ar(n,e=n.transactionQueueTree_){if(e||Vi(n,e),hn(e)){const t=_c(n,e);b(t.length>0,"Sending zero length transaction queue"),t.every(s=>s.status===0)&&Tg(n,Kn(e),t)}else nc(e)&&Ui(e,t=>{Ar(n,t)})}function Tg(n,e,t){const i=t.map(u=>u.currentWriteId),s=fc(n,e,i);let o=s;const a=s.hash();for(let u=0;u<t.length;u++){const p=t[u];b(p.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),p.status=1,p.retryCount++;const _=de(e,p.path);o=o.updateChild(_,p.currentOutputSnapshotRaw)}const l=o.val(!0),h=e;n.server_.put(h.toString(),l,u=>{dc(n,"transaction put response",{path:h.toString(),status:u});let p=[];if(u==="ok"){const _=[];for(let g=0;g<t.length;g++)t[g].status=2,p=p.concat(zt(n.serverSyncTree_,t[g].currentWriteId)),t[g].onComplete&&_.push(()=>t[g].onComplete(null,!0,t[g].currentOutputSnapshotResolved)),t[g].unwatcher();Vi(n,Ir(n.transactionQueueTree_,e)),Ar(n,n.transactionQueueTree_),Dt(n.eventQueue_,e,p);for(let g=0;g<_.length;g++)qn(_[g])}else{if(u==="datastale")for(let _=0;_<t.length;_++)t[_].status===3?t[_].status=4:t[_].status=0;else{me("transaction at "+h.toString()+" failed: "+u);for(let _=0;_<t.length;_++)t[_].status=4,t[_].abortReason=u}Nr(n,e)}},a)}function Nr(n,e){const t=pc(n,e),i=Kn(t),s=_c(n,t);return Ig(n,s,i),i}function Ig(n,e,t){if(e.length===0)return;const i=[];let s=[];const a=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const h=e[l],u=de(t,h.path);let p=!1,_;if(b(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),h.status===4)p=!0,_=h.abortReason,s=s.concat(zt(n.serverSyncTree_,h.currentWriteId,!0));else if(h.status===0)if(h.retryCount>=_g)p=!0,_="maxretry",s=s.concat(zt(n.serverSyncTree_,h.currentWriteId,!0));else{const g=fc(n,h.path,a);h.currentInputSnapshot=g;const v=e[l].update(g.val());if(v!==void 0){oc("transaction failed: Data returned ",v,h.path);let E=se(v);typeof v=="object"&&v!=null&&Ye(v,".priority")||(E=E.updatePriority(g.getPriority()));const S=h.currentWriteId,P=uc(n),B=ig(E,g,P);h.currentOutputSnapshotRaw=E,h.currentOutputSnapshotResolved=B,h.currentWriteId=bg(n),a.splice(a.indexOf(S),1),s=s.concat(U_(n.serverSyncTree_,h.path,B,h.currentWriteId,h.applyLocally)),s=s.concat(zt(n.serverSyncTree_,S,!0))}else p=!0,_="nodata",s=s.concat(zt(n.serverSyncTree_,h.currentWriteId,!0))}Dt(n.eventQueue_,t,s),s=[],p&&(e[l].status=2,function(g){setTimeout(g,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(_==="nodata"?i.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):i.push(()=>e[l].onComplete(new Error(_),!1,null))))}Vi(n,n.transactionQueueTree_);for(let l=0;l<i.length;l++)qn(i[l]);Ar(n,n.transactionQueueTree_)}function pc(n,e){let t,i=n.transactionQueueTree_;for(t=D(e);t!==null&&hn(i)===void 0;)i=Ir(i,t),e=U(e),t=D(e);return i}function _c(n,e){const t=[];return gc(n,e,t),t.sort((i,s)=>i.order-s.order),t}function gc(n,e,t){const i=hn(e);if(i)for(let s=0;s<i.length;s++)t.push(i[s]);Ui(e,s=>{gc(n,s,t)})}function Vi(n,e){const t=hn(e);if(t){let i=0;for(let s=0;s<t.length;s++)t[s].status!==2&&(t[i]=t[s],i++);t.length=i,tc(e,t.length>0?t:void 0)}Ui(e,i=>{Vi(n,i)})}function Sg(n,e){const t=Kn(pc(n,e)),i=Ir(n.transactionQueueTree_,e);return rg(i,s=>{ms(n,s)}),ms(n,i),ic(i,s=>{ms(n,s)}),t}function ms(n,e){const t=hn(e);if(t){const i=[];let s=[],o=-1;for(let a=0;a<t.length;a++)t[a].status===3||(t[a].status===1?(b(o===a-1,"All SENT items should be at beginning of queue."),o=a,t[a].status=3,t[a].abortReason="set"):(b(t[a].status===0,"Unexpected transaction status in abort"),t[a].unwatcher(),s=s.concat(zt(n.serverSyncTree_,t[a].currentWriteId,!0)),t[a].onComplete&&i.push(t[a].onComplete.bind(null,new Error("set"),!1,null))));o===-1?tc(e,void 0):t.length=o+1,Dt(n.eventQueue_,Kn(e),s);for(let a=0;a<i.length;a++)qn(i[a])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ag(n){let e="";const t=n.split("/");for(let i=0;i<t.length;i++)if(t[i].length>0){let s=t[i];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function Ng(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const i=t.split("=");i.length===2?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):me(`Invalid query segment '${t}' in query '${n}'`)}return e}const _a=function(n,e){const t=xg(n),i=t.namespace;t.domain==="firebase.com"&&Ge(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&t.domain!=="localhost"&&Ge("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||Hf();const s=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new vl(t.host,t.secure,i,s,e,"",i!==t.subdomain),path:new W(t.pathString)}},xg=function(n){let e="",t="",i="",s="",o="",a=!0,l="https",h=443;if(typeof n=="string"){let u=n.indexOf("//");u>=0&&(l=n.substring(0,u-1),n=n.substring(u+2));let p=n.indexOf("/");p===-1&&(p=n.length);let _=n.indexOf("?");_===-1&&(_=n.length),e=n.substring(0,Math.min(p,_)),p<_&&(s=Ag(n.substring(p,_)));const g=Ng(n.substring(Math.min(n.length,_)));u=e.indexOf(":"),u>=0?(a=l==="https"||l==="wss",h=parseInt(e.substring(u+1),10)):u=e.length;const v=e.slice(0,u);if(v.toLowerCase()==="localhost")t="localhost";else if(v.split(".").length<=2)t=v;else{const E=e.indexOf(".");i=e.substring(0,E).toLowerCase(),t=e.substring(E+1),o=i}"ns"in g&&(o=g.ns)}return{host:e,port:h,domain:t,subdomain:i,secure:a,scheme:l,pathString:s,namespace:o}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mc{constructor(e,t,i,s){this.eventType=e,this.eventRegistration=t,this.snapshot=i,this.prevName=s}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+te(this.snapshot.exportVal())}}class vc{constructor(e,t,i){this.eventRegistration=e,this.error=t,this.path=i}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Og{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return b(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr{constructor(e,t,i,s){this._repo=e,this._path=t,this._queryParams=i,this._orderByCalled=s}get key(){return R(this._path)?null:Al(this._path)}get ref(){return new Ke(this._repo,this._path)}get _queryIdentifier(){const e=Jo(this._queryParams),t=nr(e);return t==="{}"?"default":t}get _queryObject(){return Jo(this._queryParams)}isEqual(e){if(e=Fi(e),!(e instanceof xr))return!1;const t=this._repo===e._repo,i=or(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return t&&i&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+Tp(this._path)}}class Ke extends xr{constructor(e,t){super(e,t,new hr,!1)}get parent(){const e=xl(this._path);return e===null?null:new Ke(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Hn{constructor(e,t,i){this._node=e,this.ref=t,this._index=i}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new W(e),i=Di(this.ref,e);return new Hn(this._node.getChild(t),i,q)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(i,s)=>e(new Hn(s,Di(this.ref,i),q)))}hasChild(e){const t=new W(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function kg(n,e){return n=Fi(n),n._checkNotDeleted("ref"),e!==void 0?Di(n._root,e):n._root}function Di(n,e){return n=Fi(n),D(n._path)===null?hg("child","path",e,!1):ac("child","path",e,!1),new Ke(n._repo,X(n._path,e))}class Or{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const i=t._queryParams.getIndex();return new mc("value",this,new Hn(e.snapshotNode,new Ke(t._repo,t._path),i))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new vc(this,e,t):null}matches(e){return e instanceof Or?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class kr{constructor(e,t){this.eventType=e,this.callbackContext=t}respondsTo(e){let t=e==="children_added"?"child_added":e;return t=t==="children_removed"?"child_removed":t,this.eventType===t}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new vc(this,e,t):null}createEvent(e,t){b(e.childName!=null,"Child events should have a childName.");const i=Di(new Ke(t._repo,t._path),e.childName),s=t._queryParams.getIndex();return new mc(e.type,this,new Hn(e.snapshotNode,i,s),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof kr?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function Dg(n,e,t,i,s){let o;if(typeof i=="object"&&(o=void 0,s=i),typeof i=="function"&&(o=i),s&&s.onlyOnce){const h=t,u=(p,_)=>{pa(n._repo,n,l),h(p,_)};u.userCallback=t.userCallback,u.context=t.context,t=u}const a=new Og(t,o||void 0),l=e==="value"?new Or(a):new kr(e,a);return Eg(n._repo,n,l),()=>pa(n._repo,n,l)}function Rg(n,e,t,i){return Dg(n,"value",e,t,i)}P_(Ke);W_(Ke);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pg="FIREBASE_DATABASE_EMULATOR_HOST",Ws={};let Mg=!1;function Lg(n,e,t,i){n.repoInfo_=new vl(`${e}:${t}`,!1,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0),i&&(n.authTokenProvider_=i)}function Fg(n,e,t,i,s){let o=i||n.options.databaseURL;o===void 0&&(n.options.projectId||Ge("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),ie("Using default host for project ",n.options.projectId),o=`${n.options.projectId}-default-rtdb.firebaseio.com`);let a=_a(o,s),l=a.repoInfo,h,u;typeof process<"u"&&process.env&&(u=process.env[Pg]),u?(h=!0,o=`http://${u}?ns=${l.namespace}`,a=_a(o,s),l=a.repoInfo):h=!a.repoInfo.secure;const p=s&&h?new Yt(Yt.OWNER):new Jf(n.name,n.options,e);ug("Invalid Firebase Database URL",a),R(a.path)||Ge("Database URL must point to the root of a Firebase Database (not including a child path).");const _=Bg(l,n,p,new Xf(n.name,t));return new Wg(_,n)}function $g(n,e){const t=Ws[e];(!t||t[n.key]!==n)&&Ge(`Database ${e}(${n.repoInfo_}) has already been deleted.`),Cg(n),delete t[n.key]}function Bg(n,e,t,i){let s=Ws[e.name];s||(s={},Ws[e.name]=s);let o=s[n.toURLString()];return o&&Ge("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),o=new gg(n,Mg,t,i),s[n.toURLString()]=o,o}class Wg{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(mg(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Ke(this._repo,F())),this._rootInternal}_delete(){return this._rootInternal!==null&&($g(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Ge("Cannot call "+e+" on a deleted database.")}}function Hg(n=Tf(),e){const t=bf(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const i=ud("database");i&&jg(t,...i)}return t}function jg(n,e,t,i={}){n=Fi(n),n._checkNotDeleted("useEmulator"),n._instanceStarted&&Ge("Cannot call useEmulator() after instance has already been initialized.");const s=n._repoInternal;let o;if(s.repoInfo_.nodeAdmin)i.mockUserToken&&Ge('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new Yt(Yt.OWNER);else if(i.mockUserToken){const a=typeof i.mockUserToken=="string"?i.mockUserToken:dd(i.mockUserToken,n.app.options.projectId);o=new Yt(a)}Lg(s,e,t,o)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ug(n){Lf(Cf),yi(new Rn("database",(e,{instanceIdentifier:t})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),o=e.getProvider("app-check-internal");return Fg(i,s,o,t)},"PUBLIC").setMultipleInstances(!0)),qt(Mo,Lo,n),qt(Mo,Lo,"esm2017")}ze.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};ze.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};Ug();const Vg={apiKey:"AIzaSyBOGWY0ar1S_9U-ZrMXbpddQQB1XAvGWVU",authDomain:"beauty-hub-c2b0f.firebaseapp.com",databaseURL:"https://beauty-hub-c2b0f-default-rtdb.firebaseio.com",projectId:"beauty-hub-c2b0f",storageBucket:"beauty-hub-c2b0f.appspot.com",messagingSenderId:"957847883493",appId:"1:957847883493:web:ecf883367c0c46dcd68e0c"},zg=el(Vg),qg=Hg(zg),Gg=kg(qg,"users");document.getElementById("fb");Rg(Gg,n=>{const e=n.val();console.log(e),$("#fb").text(e[0].name)});
