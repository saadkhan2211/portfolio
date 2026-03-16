(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function ES(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var e0={exports:{}},Ac={},t0={exports:{}},Xe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pa=Symbol.for("react.element"),TS=Symbol.for("react.portal"),wS=Symbol.for("react.fragment"),AS=Symbol.for("react.strict_mode"),CS=Symbol.for("react.profiler"),bS=Symbol.for("react.provider"),RS=Symbol.for("react.context"),PS=Symbol.for("react.forward_ref"),LS=Symbol.for("react.suspense"),DS=Symbol.for("react.memo"),NS=Symbol.for("react.lazy"),mp=Symbol.iterator;function US(t){return t===null||typeof t!="object"?null:(t=mp&&t[mp]||t["@@iterator"],typeof t=="function"?t:null)}var n0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},i0=Object.assign,r0={};function no(t,e,n){this.props=t,this.context=e,this.refs=r0,this.updater=n||n0}no.prototype.isReactComponent={};no.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};no.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function s0(){}s0.prototype=no.prototype;function kd(t,e,n){this.props=t,this.context=e,this.refs=r0,this.updater=n||n0}var Bd=kd.prototype=new s0;Bd.constructor=kd;i0(Bd,no.prototype);Bd.isPureReactComponent=!0;var gp=Array.isArray,o0=Object.prototype.hasOwnProperty,zd={current:null},a0={key:!0,ref:!0,__self:!0,__source:!0};function l0(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)o0.call(e,i)&&!a0.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:pa,type:t,key:s,ref:o,props:r,_owner:zd.current}}function IS(t,e){return{$$typeof:pa,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Vd(t){return typeof t=="object"&&t!==null&&t.$$typeof===pa}function FS(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var vp=/\/+/g;function ru(t,e){return typeof t=="object"&&t!==null&&t.key!=null?FS(""+t.key):e.toString(36)}function Al(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case pa:case TS:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+ru(o,0):i,gp(r)?(n="",t!=null&&(n=t.replace(vp,"$&/")+"/"),Al(r,e,n,"",function(c){return c})):r!=null&&(Vd(r)&&(r=IS(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(vp,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",gp(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+ru(s,a);o+=Al(s,e,n,l,r)}else if(l=US(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+ru(s,a++),o+=Al(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Na(t,e,n){if(t==null)return t;var i=[],r=0;return Al(t,i,"","",function(s){return e.call(n,s,r++)}),i}function OS(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var rn={current:null},Cl={transition:null},kS={ReactCurrentDispatcher:rn,ReactCurrentBatchConfig:Cl,ReactCurrentOwner:zd};function c0(){throw Error("act(...) is not supported in production builds of React.")}Xe.Children={map:Na,forEach:function(t,e,n){Na(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Na(t,function(){e++}),e},toArray:function(t){return Na(t,function(e){return e})||[]},only:function(t){if(!Vd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Xe.Component=no;Xe.Fragment=wS;Xe.Profiler=CS;Xe.PureComponent=kd;Xe.StrictMode=AS;Xe.Suspense=LS;Xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=kS;Xe.act=c0;Xe.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=i0({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=zd.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)o0.call(e,l)&&!a0.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:pa,type:t.type,key:r,ref:s,props:i,_owner:o}};Xe.createContext=function(t){return t={$$typeof:RS,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:bS,_context:t},t.Consumer=t};Xe.createElement=l0;Xe.createFactory=function(t){var e=l0.bind(null,t);return e.type=t,e};Xe.createRef=function(){return{current:null}};Xe.forwardRef=function(t){return{$$typeof:PS,render:t}};Xe.isValidElement=Vd;Xe.lazy=function(t){return{$$typeof:NS,_payload:{_status:-1,_result:t},_init:OS}};Xe.memo=function(t,e){return{$$typeof:DS,type:t,compare:e===void 0?null:e}};Xe.startTransition=function(t){var e=Cl.transition;Cl.transition={};try{t()}finally{Cl.transition=e}};Xe.unstable_act=c0;Xe.useCallback=function(t,e){return rn.current.useCallback(t,e)};Xe.useContext=function(t){return rn.current.useContext(t)};Xe.useDebugValue=function(){};Xe.useDeferredValue=function(t){return rn.current.useDeferredValue(t)};Xe.useEffect=function(t,e){return rn.current.useEffect(t,e)};Xe.useId=function(){return rn.current.useId()};Xe.useImperativeHandle=function(t,e,n){return rn.current.useImperativeHandle(t,e,n)};Xe.useInsertionEffect=function(t,e){return rn.current.useInsertionEffect(t,e)};Xe.useLayoutEffect=function(t,e){return rn.current.useLayoutEffect(t,e)};Xe.useMemo=function(t,e){return rn.current.useMemo(t,e)};Xe.useReducer=function(t,e,n){return rn.current.useReducer(t,e,n)};Xe.useRef=function(t){return rn.current.useRef(t)};Xe.useState=function(t){return rn.current.useState(t)};Xe.useSyncExternalStore=function(t,e,n){return rn.current.useSyncExternalStore(t,e,n)};Xe.useTransition=function(){return rn.current.useTransition()};Xe.version="18.3.1";t0.exports=Xe;var J=t0.exports;const u0=ES(J);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var BS=J,zS=Symbol.for("react.element"),VS=Symbol.for("react.fragment"),HS=Object.prototype.hasOwnProperty,GS=BS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,WS={key:!0,ref:!0,__self:!0,__source:!0};function f0(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)HS.call(e,i)&&!WS.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:zS,type:t,key:s,ref:o,props:r,_owner:GS.current}}Ac.Fragment=VS;Ac.jsx=f0;Ac.jsxs=f0;e0.exports=Ac;var R=e0.exports,d0={exports:{}},Tn={},h0={exports:{}},p0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(N,O){var V=N.length;N.push(O);e:for(;0<V;){var Y=V-1>>>1,Z=N[Y];if(0<r(Z,O))N[Y]=O,N[V]=Z,V=Y;else break e}}function n(N){return N.length===0?null:N[0]}function i(N){if(N.length===0)return null;var O=N[0],V=N.pop();if(V!==O){N[0]=V;e:for(var Y=0,Z=N.length,q=Z>>>1;Y<q;){var K=2*(Y+1)-1,ae=N[K],fe=K+1,pe=N[fe];if(0>r(ae,V))fe<Z&&0>r(pe,ae)?(N[Y]=pe,N[fe]=V,Y=fe):(N[Y]=ae,N[K]=V,Y=K);else if(fe<Z&&0>r(pe,V))N[Y]=pe,N[fe]=V,Y=fe;else break e}}return O}function r(N,O){var V=N.sortIndex-O.sortIndex;return V!==0?V:N.id-O.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],u=1,f=null,d=3,p=!1,_=!1,x=!1,v=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(N){for(var O=n(c);O!==null;){if(O.callback===null)i(c);else if(O.startTime<=N)i(c),O.sortIndex=O.expirationTime,e(l,O);else break;O=n(c)}}function y(N){if(x=!1,m(N),!_)if(n(l)!==null)_=!0,W(C);else{var O=n(c);O!==null&&$(y,O.startTime-N)}}function C(N,O){_=!1,x&&(x=!1,h(P),P=-1),p=!0;var V=d;try{for(m(O),f=n(l);f!==null&&(!(f.expirationTime>O)||N&&!U());){var Y=f.callback;if(typeof Y=="function"){f.callback=null,d=f.priorityLevel;var Z=Y(f.expirationTime<=O);O=t.unstable_now(),typeof Z=="function"?f.callback=Z:f===n(l)&&i(l),m(O)}else i(l);f=n(l)}if(f!==null)var q=!0;else{var K=n(c);K!==null&&$(y,K.startTime-O),q=!1}return q}finally{f=null,d=V,p=!1}}var T=!1,w=null,P=-1,S=5,E=-1;function U(){return!(t.unstable_now()-E<S)}function j(){if(w!==null){var N=t.unstable_now();E=N;var O=!0;try{O=w(!0,N)}finally{O?Q():(T=!1,w=null)}}else T=!1}var Q;if(typeof g=="function")Q=function(){g(j)};else if(typeof MessageChannel<"u"){var L=new MessageChannel,B=L.port2;L.port1.onmessage=j,Q=function(){B.postMessage(null)}}else Q=function(){v(j,0)};function W(N){w=N,T||(T=!0,Q())}function $(N,O){P=v(function(){N(t.unstable_now())},O)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(N){N.callback=null},t.unstable_continueExecution=function(){_||p||(_=!0,W(C))},t.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):S=0<N?Math.floor(1e3/N):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(N){switch(d){case 1:case 2:case 3:var O=3;break;default:O=d}var V=d;d=O;try{return N()}finally{d=V}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(N,O){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var V=d;d=N;try{return O()}finally{d=V}},t.unstable_scheduleCallback=function(N,O,V){var Y=t.unstable_now();switch(typeof V=="object"&&V!==null?(V=V.delay,V=typeof V=="number"&&0<V?Y+V:Y):V=Y,N){case 1:var Z=-1;break;case 2:Z=250;break;case 5:Z=1073741823;break;case 4:Z=1e4;break;default:Z=5e3}return Z=V+Z,N={id:u++,callback:O,priorityLevel:N,startTime:V,expirationTime:Z,sortIndex:-1},V>Y?(N.sortIndex=V,e(c,N),n(l)===null&&N===n(c)&&(x?(h(P),P=-1):x=!0,$(y,V-Y))):(N.sortIndex=Z,e(l,N),_||p||(_=!0,W(C))),N},t.unstable_shouldYield=U,t.unstable_wrapCallback=function(N){var O=d;return function(){var V=d;d=O;try{return N.apply(this,arguments)}finally{d=V}}}})(p0);h0.exports=p0;var jS=h0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var XS=J,Mn=jS;function ne(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var m0=new Set,Xo={};function Kr(t,e){Gs(t,e),Gs(t+"Capture",e)}function Gs(t,e){for(Xo[t]=e,t=0;t<e.length;t++)m0.add(e[t])}var Ai=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Mf=Object.prototype.hasOwnProperty,qS=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_p={},xp={};function YS(t){return Mf.call(xp,t)?!0:Mf.call(_p,t)?!1:qS.test(t)?xp[t]=!0:(_p[t]=!0,!1)}function $S(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function KS(t,e,n,i){if(e===null||typeof e>"u"||$S(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function sn(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Bt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Bt[t]=new sn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Bt[e]=new sn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Bt[t]=new sn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Bt[t]=new sn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Bt[t]=new sn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Bt[t]=new sn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Bt[t]=new sn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Bt[t]=new sn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Bt[t]=new sn(t,5,!1,t.toLowerCase(),null,!1,!1)});var Hd=/[\-:]([a-z])/g;function Gd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Hd,Gd);Bt[e]=new sn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Hd,Gd);Bt[e]=new sn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Hd,Gd);Bt[e]=new sn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Bt[t]=new sn(t,1,!1,t.toLowerCase(),null,!1,!1)});Bt.xlinkHref=new sn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Bt[t]=new sn(t,1,!1,t.toLowerCase(),null,!0,!0)});function Wd(t,e,n,i){var r=Bt.hasOwnProperty(e)?Bt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(KS(e,n,r,i)&&(n=null),i||r===null?YS(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Di=XS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ua=Symbol.for("react.element"),vs=Symbol.for("react.portal"),_s=Symbol.for("react.fragment"),jd=Symbol.for("react.strict_mode"),Ef=Symbol.for("react.profiler"),g0=Symbol.for("react.provider"),v0=Symbol.for("react.context"),Xd=Symbol.for("react.forward_ref"),Tf=Symbol.for("react.suspense"),wf=Symbol.for("react.suspense_list"),qd=Symbol.for("react.memo"),zi=Symbol.for("react.lazy"),_0=Symbol.for("react.offscreen"),yp=Symbol.iterator;function co(t){return t===null||typeof t!="object"?null:(t=yp&&t[yp]||t["@@iterator"],typeof t=="function"?t:null)}var pt=Object.assign,su;function wo(t){if(su===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);su=e&&e[1]||""}return`
`+su+t}var ou=!1;function au(t,e){if(!t||ou)return"";ou=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{ou=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?wo(t):""}function ZS(t){switch(t.tag){case 5:return wo(t.type);case 16:return wo("Lazy");case 13:return wo("Suspense");case 19:return wo("SuspenseList");case 0:case 2:case 15:return t=au(t.type,!1),t;case 11:return t=au(t.type.render,!1),t;case 1:return t=au(t.type,!0),t;default:return""}}function Af(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case _s:return"Fragment";case vs:return"Portal";case Ef:return"Profiler";case jd:return"StrictMode";case Tf:return"Suspense";case wf:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case v0:return(t.displayName||"Context")+".Consumer";case g0:return(t._context.displayName||"Context")+".Provider";case Xd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case qd:return e=t.displayName||null,e!==null?e:Af(t.type)||"Memo";case zi:e=t._payload,t=t._init;try{return Af(t(e))}catch{}}return null}function QS(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Af(e);case 8:return e===jd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function ar(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function x0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function JS(t){var e=x0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ia(t){t._valueTracker||(t._valueTracker=JS(t))}function y0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=x0(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Vl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Cf(t,e){var n=e.checked;return pt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Sp(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=ar(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function S0(t,e){e=e.checked,e!=null&&Wd(t,"checked",e,!1)}function bf(t,e){S0(t,e);var n=ar(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Rf(t,e.type,n):e.hasOwnProperty("defaultValue")&&Rf(t,e.type,ar(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Mp(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Rf(t,e,n){(e!=="number"||Vl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ao=Array.isArray;function Is(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+ar(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Pf(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ne(91));return pt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Ep(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ne(92));if(Ao(n)){if(1<n.length)throw Error(ne(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:ar(n)}}function M0(t,e){var n=ar(e.value),i=ar(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Tp(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function E0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Lf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?E0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Fa,T0=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Fa=Fa||document.createElement("div"),Fa.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Fa.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function qo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Po={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},eM=["Webkit","ms","Moz","O"];Object.keys(Po).forEach(function(t){eM.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Po[e]=Po[t]})});function w0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Po.hasOwnProperty(t)&&Po[t]?(""+e).trim():e+"px"}function A0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=w0(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var tM=pt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Df(t,e){if(e){if(tM[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ne(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ne(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ne(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ne(62))}}function Nf(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Uf=null;function Yd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var If=null,Fs=null,Os=null;function wp(t){if(t=va(t)){if(typeof If!="function")throw Error(ne(280));var e=t.stateNode;e&&(e=Lc(e),If(t.stateNode,t.type,e))}}function C0(t){Fs?Os?Os.push(t):Os=[t]:Fs=t}function b0(){if(Fs){var t=Fs,e=Os;if(Os=Fs=null,wp(t),e)for(t=0;t<e.length;t++)wp(e[t])}}function R0(t,e){return t(e)}function P0(){}var lu=!1;function L0(t,e,n){if(lu)return t(e,n);lu=!0;try{return R0(t,e,n)}finally{lu=!1,(Fs!==null||Os!==null)&&(P0(),b0())}}function Yo(t,e){var n=t.stateNode;if(n===null)return null;var i=Lc(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ne(231,e,typeof n));return n}var Ff=!1;if(Ai)try{var uo={};Object.defineProperty(uo,"passive",{get:function(){Ff=!0}}),window.addEventListener("test",uo,uo),window.removeEventListener("test",uo,uo)}catch{Ff=!1}function nM(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(u){this.onError(u)}}var Lo=!1,Hl=null,Gl=!1,Of=null,iM={onError:function(t){Lo=!0,Hl=t}};function rM(t,e,n,i,r,s,o,a,l){Lo=!1,Hl=null,nM.apply(iM,arguments)}function sM(t,e,n,i,r,s,o,a,l){if(rM.apply(this,arguments),Lo){if(Lo){var c=Hl;Lo=!1,Hl=null}else throw Error(ne(198));Gl||(Gl=!0,Of=c)}}function Zr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function D0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Ap(t){if(Zr(t)!==t)throw Error(ne(188))}function oM(t){var e=t.alternate;if(!e){if(e=Zr(t),e===null)throw Error(ne(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Ap(r),t;if(s===i)return Ap(r),e;s=s.sibling}throw Error(ne(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(ne(189))}}if(n.alternate!==i)throw Error(ne(190))}if(n.tag!==3)throw Error(ne(188));return n.stateNode.current===n?t:e}function N0(t){return t=oM(t),t!==null?U0(t):null}function U0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=U0(t);if(e!==null)return e;t=t.sibling}return null}var I0=Mn.unstable_scheduleCallback,Cp=Mn.unstable_cancelCallback,aM=Mn.unstable_shouldYield,lM=Mn.unstable_requestPaint,xt=Mn.unstable_now,cM=Mn.unstable_getCurrentPriorityLevel,$d=Mn.unstable_ImmediatePriority,F0=Mn.unstable_UserBlockingPriority,Wl=Mn.unstable_NormalPriority,uM=Mn.unstable_LowPriority,O0=Mn.unstable_IdlePriority,Cc=null,oi=null;function fM(t){if(oi&&typeof oi.onCommitFiberRoot=="function")try{oi.onCommitFiberRoot(Cc,t,void 0,(t.current.flags&128)===128)}catch{}}var Qn=Math.clz32?Math.clz32:pM,dM=Math.log,hM=Math.LN2;function pM(t){return t>>>=0,t===0?32:31-(dM(t)/hM|0)|0}var Oa=64,ka=4194304;function Co(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function jl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=Co(a):(s&=o,s!==0&&(i=Co(s)))}else o=n&~r,o!==0?i=Co(o):s!==0&&(i=Co(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Qn(e),r=1<<n,i|=t[n],e&=~r;return i}function mM(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function gM(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Qn(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=mM(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function kf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function k0(){var t=Oa;return Oa<<=1,!(Oa&4194240)&&(Oa=64),t}function cu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ma(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Qn(e),t[e]=n}function vM(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Qn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Kd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Qn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var Ze=0;function B0(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var z0,Zd,V0,H0,G0,Bf=!1,Ba=[],$i=null,Ki=null,Zi=null,$o=new Map,Ko=new Map,Gi=[],_M="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function bp(t,e){switch(t){case"focusin":case"focusout":$i=null;break;case"dragenter":case"dragleave":Ki=null;break;case"mouseover":case"mouseout":Zi=null;break;case"pointerover":case"pointerout":$o.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ko.delete(e.pointerId)}}function fo(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=va(e),e!==null&&Zd(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function xM(t,e,n,i,r){switch(e){case"focusin":return $i=fo($i,t,e,n,i,r),!0;case"dragenter":return Ki=fo(Ki,t,e,n,i,r),!0;case"mouseover":return Zi=fo(Zi,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return $o.set(s,fo($o.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Ko.set(s,fo(Ko.get(s)||null,t,e,n,i,r)),!0}return!1}function W0(t){var e=Nr(t.target);if(e!==null){var n=Zr(e);if(n!==null){if(e=n.tag,e===13){if(e=D0(n),e!==null){t.blockedOn=e,G0(t.priority,function(){V0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function bl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=zf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Uf=i,n.target.dispatchEvent(i),Uf=null}else return e=va(n),e!==null&&Zd(e),t.blockedOn=n,!1;e.shift()}return!0}function Rp(t,e,n){bl(t)&&n.delete(e)}function yM(){Bf=!1,$i!==null&&bl($i)&&($i=null),Ki!==null&&bl(Ki)&&(Ki=null),Zi!==null&&bl(Zi)&&(Zi=null),$o.forEach(Rp),Ko.forEach(Rp)}function ho(t,e){t.blockedOn===e&&(t.blockedOn=null,Bf||(Bf=!0,Mn.unstable_scheduleCallback(Mn.unstable_NormalPriority,yM)))}function Zo(t){function e(r){return ho(r,t)}if(0<Ba.length){ho(Ba[0],t);for(var n=1;n<Ba.length;n++){var i=Ba[n];i.blockedOn===t&&(i.blockedOn=null)}}for($i!==null&&ho($i,t),Ki!==null&&ho(Ki,t),Zi!==null&&ho(Zi,t),$o.forEach(e),Ko.forEach(e),n=0;n<Gi.length;n++)i=Gi[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Gi.length&&(n=Gi[0],n.blockedOn===null);)W0(n),n.blockedOn===null&&Gi.shift()}var ks=Di.ReactCurrentBatchConfig,Xl=!0;function SM(t,e,n,i){var r=Ze,s=ks.transition;ks.transition=null;try{Ze=1,Qd(t,e,n,i)}finally{Ze=r,ks.transition=s}}function MM(t,e,n,i){var r=Ze,s=ks.transition;ks.transition=null;try{Ze=4,Qd(t,e,n,i)}finally{Ze=r,ks.transition=s}}function Qd(t,e,n,i){if(Xl){var r=zf(t,e,n,i);if(r===null)xu(t,e,i,ql,n),bp(t,i);else if(xM(r,t,e,n,i))i.stopPropagation();else if(bp(t,i),e&4&&-1<_M.indexOf(t)){for(;r!==null;){var s=va(r);if(s!==null&&z0(s),s=zf(t,e,n,i),s===null&&xu(t,e,i,ql,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else xu(t,e,i,null,n)}}var ql=null;function zf(t,e,n,i){if(ql=null,t=Yd(i),t=Nr(t),t!==null)if(e=Zr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=D0(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return ql=t,null}function j0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(cM()){case $d:return 1;case F0:return 4;case Wl:case uM:return 16;case O0:return 536870912;default:return 16}default:return 16}}var ji=null,Jd=null,Rl=null;function X0(){if(Rl)return Rl;var t,e=Jd,n=e.length,i,r="value"in ji?ji.value:ji.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return Rl=r.slice(t,1<i?1-i:void 0)}function Pl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function za(){return!0}function Pp(){return!1}function wn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?za:Pp,this.isPropagationStopped=Pp,this}return pt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=za)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=za)},persist:function(){},isPersistent:za}),e}var io={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},eh=wn(io),ga=pt({},io,{view:0,detail:0}),EM=wn(ga),uu,fu,po,bc=pt({},ga,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:th,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==po&&(po&&t.type==="mousemove"?(uu=t.screenX-po.screenX,fu=t.screenY-po.screenY):fu=uu=0,po=t),uu)},movementY:function(t){return"movementY"in t?t.movementY:fu}}),Lp=wn(bc),TM=pt({},bc,{dataTransfer:0}),wM=wn(TM),AM=pt({},ga,{relatedTarget:0}),du=wn(AM),CM=pt({},io,{animationName:0,elapsedTime:0,pseudoElement:0}),bM=wn(CM),RM=pt({},io,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),PM=wn(RM),LM=pt({},io,{data:0}),Dp=wn(LM),DM={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},NM={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},UM={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function IM(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=UM[t])?!!e[t]:!1}function th(){return IM}var FM=pt({},ga,{key:function(t){if(t.key){var e=DM[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Pl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?NM[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:th,charCode:function(t){return t.type==="keypress"?Pl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Pl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),OM=wn(FM),kM=pt({},bc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Np=wn(kM),BM=pt({},ga,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:th}),zM=wn(BM),VM=pt({},io,{propertyName:0,elapsedTime:0,pseudoElement:0}),HM=wn(VM),GM=pt({},bc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),WM=wn(GM),jM=[9,13,27,32],nh=Ai&&"CompositionEvent"in window,Do=null;Ai&&"documentMode"in document&&(Do=document.documentMode);var XM=Ai&&"TextEvent"in window&&!Do,q0=Ai&&(!nh||Do&&8<Do&&11>=Do),Up=" ",Ip=!1;function Y0(t,e){switch(t){case"keyup":return jM.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function $0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var xs=!1;function qM(t,e){switch(t){case"compositionend":return $0(e);case"keypress":return e.which!==32?null:(Ip=!0,Up);case"textInput":return t=e.data,t===Up&&Ip?null:t;default:return null}}function YM(t,e){if(xs)return t==="compositionend"||!nh&&Y0(t,e)?(t=X0(),Rl=Jd=ji=null,xs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return q0&&e.locale!=="ko"?null:e.data;default:return null}}var $M={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Fp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!$M[t.type]:e==="textarea"}function K0(t,e,n,i){C0(i),e=Yl(e,"onChange"),0<e.length&&(n=new eh("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var No=null,Qo=null;function KM(t){a_(t,0)}function Rc(t){var e=Ms(t);if(y0(e))return t}function ZM(t,e){if(t==="change")return e}var Z0=!1;if(Ai){var hu;if(Ai){var pu="oninput"in document;if(!pu){var Op=document.createElement("div");Op.setAttribute("oninput","return;"),pu=typeof Op.oninput=="function"}hu=pu}else hu=!1;Z0=hu&&(!document.documentMode||9<document.documentMode)}function kp(){No&&(No.detachEvent("onpropertychange",Q0),Qo=No=null)}function Q0(t){if(t.propertyName==="value"&&Rc(Qo)){var e=[];K0(e,Qo,t,Yd(t)),L0(KM,e)}}function QM(t,e,n){t==="focusin"?(kp(),No=e,Qo=n,No.attachEvent("onpropertychange",Q0)):t==="focusout"&&kp()}function JM(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Rc(Qo)}function eE(t,e){if(t==="click")return Rc(e)}function tE(t,e){if(t==="input"||t==="change")return Rc(e)}function nE(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ei=typeof Object.is=="function"?Object.is:nE;function Jo(t,e){if(ei(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Mf.call(e,r)||!ei(t[r],e[r]))return!1}return!0}function Bp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function zp(t,e){var n=Bp(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Bp(n)}}function J0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?J0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function e_(){for(var t=window,e=Vl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Vl(t.document)}return e}function ih(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function iE(t){var e=e_(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&J0(n.ownerDocument.documentElement,n)){if(i!==null&&ih(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=zp(n,s);var o=zp(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var rE=Ai&&"documentMode"in document&&11>=document.documentMode,ys=null,Vf=null,Uo=null,Hf=!1;function Vp(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Hf||ys==null||ys!==Vl(i)||(i=ys,"selectionStart"in i&&ih(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Uo&&Jo(Uo,i)||(Uo=i,i=Yl(Vf,"onSelect"),0<i.length&&(e=new eh("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=ys)))}function Va(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ss={animationend:Va("Animation","AnimationEnd"),animationiteration:Va("Animation","AnimationIteration"),animationstart:Va("Animation","AnimationStart"),transitionend:Va("Transition","TransitionEnd")},mu={},t_={};Ai&&(t_=document.createElement("div").style,"AnimationEvent"in window||(delete Ss.animationend.animation,delete Ss.animationiteration.animation,delete Ss.animationstart.animation),"TransitionEvent"in window||delete Ss.transitionend.transition);function Pc(t){if(mu[t])return mu[t];if(!Ss[t])return t;var e=Ss[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in t_)return mu[t]=e[n];return t}var n_=Pc("animationend"),i_=Pc("animationiteration"),r_=Pc("animationstart"),s_=Pc("transitionend"),o_=new Map,Hp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function dr(t,e){o_.set(t,e),Kr(e,[t])}for(var gu=0;gu<Hp.length;gu++){var vu=Hp[gu],sE=vu.toLowerCase(),oE=vu[0].toUpperCase()+vu.slice(1);dr(sE,"on"+oE)}dr(n_,"onAnimationEnd");dr(i_,"onAnimationIteration");dr(r_,"onAnimationStart");dr("dblclick","onDoubleClick");dr("focusin","onFocus");dr("focusout","onBlur");dr(s_,"onTransitionEnd");Gs("onMouseEnter",["mouseout","mouseover"]);Gs("onMouseLeave",["mouseout","mouseover"]);Gs("onPointerEnter",["pointerout","pointerover"]);Gs("onPointerLeave",["pointerout","pointerover"]);Kr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Kr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Kr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Kr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Kr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Kr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var bo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),aE=new Set("cancel close invalid load scroll toggle".split(" ").concat(bo));function Gp(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,sM(i,e,void 0,t),t.currentTarget=null}function a_(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;Gp(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;Gp(r,a,c),s=l}}}if(Gl)throw t=Of,Gl=!1,Of=null,t}function st(t,e){var n=e[qf];n===void 0&&(n=e[qf]=new Set);var i=t+"__bubble";n.has(i)||(l_(e,t,2,!1),n.add(i))}function _u(t,e,n){var i=0;e&&(i|=4),l_(n,t,i,e)}var Ha="_reactListening"+Math.random().toString(36).slice(2);function ea(t){if(!t[Ha]){t[Ha]=!0,m0.forEach(function(n){n!=="selectionchange"&&(aE.has(n)||_u(n,!1,t),_u(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ha]||(e[Ha]=!0,_u("selectionchange",!1,e))}}function l_(t,e,n,i){switch(j0(e)){case 1:var r=SM;break;case 4:r=MM;break;default:r=Qd}n=r.bind(null,e,n,t),r=void 0,!Ff||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function xu(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Nr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}L0(function(){var c=s,u=Yd(n),f=[];e:{var d=o_.get(t);if(d!==void 0){var p=eh,_=t;switch(t){case"keypress":if(Pl(n)===0)break e;case"keydown":case"keyup":p=OM;break;case"focusin":_="focus",p=du;break;case"focusout":_="blur",p=du;break;case"beforeblur":case"afterblur":p=du;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Lp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=wM;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=zM;break;case n_:case i_:case r_:p=bM;break;case s_:p=HM;break;case"scroll":p=EM;break;case"wheel":p=WM;break;case"copy":case"cut":case"paste":p=PM;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Np}var x=(e&4)!==0,v=!x&&t==="scroll",h=x?d!==null?d+"Capture":null:d;x=[];for(var g=c,m;g!==null;){m=g;var y=m.stateNode;if(m.tag===5&&y!==null&&(m=y,h!==null&&(y=Yo(g,h),y!=null&&x.push(ta(g,y,m)))),v)break;g=g.return}0<x.length&&(d=new p(d,_,null,n,u),f.push({event:d,listeners:x}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",d&&n!==Uf&&(_=n.relatedTarget||n.fromElement)&&(Nr(_)||_[Ci]))break e;if((p||d)&&(d=u.window===u?u:(d=u.ownerDocument)?d.defaultView||d.parentWindow:window,p?(_=n.relatedTarget||n.toElement,p=c,_=_?Nr(_):null,_!==null&&(v=Zr(_),_!==v||_.tag!==5&&_.tag!==6)&&(_=null)):(p=null,_=c),p!==_)){if(x=Lp,y="onMouseLeave",h="onMouseEnter",g="mouse",(t==="pointerout"||t==="pointerover")&&(x=Np,y="onPointerLeave",h="onPointerEnter",g="pointer"),v=p==null?d:Ms(p),m=_==null?d:Ms(_),d=new x(y,g+"leave",p,n,u),d.target=v,d.relatedTarget=m,y=null,Nr(u)===c&&(x=new x(h,g+"enter",_,n,u),x.target=m,x.relatedTarget=v,y=x),v=y,p&&_)t:{for(x=p,h=_,g=0,m=x;m;m=es(m))g++;for(m=0,y=h;y;y=es(y))m++;for(;0<g-m;)x=es(x),g--;for(;0<m-g;)h=es(h),m--;for(;g--;){if(x===h||h!==null&&x===h.alternate)break t;x=es(x),h=es(h)}x=null}else x=null;p!==null&&Wp(f,d,p,x,!1),_!==null&&v!==null&&Wp(f,v,_,x,!0)}}e:{if(d=c?Ms(c):window,p=d.nodeName&&d.nodeName.toLowerCase(),p==="select"||p==="input"&&d.type==="file")var C=ZM;else if(Fp(d))if(Z0)C=tE;else{C=JM;var T=QM}else(p=d.nodeName)&&p.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(C=eE);if(C&&(C=C(t,c))){K0(f,C,n,u);break e}T&&T(t,d,c),t==="focusout"&&(T=d._wrapperState)&&T.controlled&&d.type==="number"&&Rf(d,"number",d.value)}switch(T=c?Ms(c):window,t){case"focusin":(Fp(T)||T.contentEditable==="true")&&(ys=T,Vf=c,Uo=null);break;case"focusout":Uo=Vf=ys=null;break;case"mousedown":Hf=!0;break;case"contextmenu":case"mouseup":case"dragend":Hf=!1,Vp(f,n,u);break;case"selectionchange":if(rE)break;case"keydown":case"keyup":Vp(f,n,u)}var w;if(nh)e:{switch(t){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else xs?Y0(t,n)&&(P="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(q0&&n.locale!=="ko"&&(xs||P!=="onCompositionStart"?P==="onCompositionEnd"&&xs&&(w=X0()):(ji=u,Jd="value"in ji?ji.value:ji.textContent,xs=!0)),T=Yl(c,P),0<T.length&&(P=new Dp(P,t,null,n,u),f.push({event:P,listeners:T}),w?P.data=w:(w=$0(n),w!==null&&(P.data=w)))),(w=XM?qM(t,n):YM(t,n))&&(c=Yl(c,"onBeforeInput"),0<c.length&&(u=new Dp("onBeforeInput","beforeinput",null,n,u),f.push({event:u,listeners:c}),u.data=w))}a_(f,e)})}function ta(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Yl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Yo(t,n),s!=null&&i.unshift(ta(t,s,r)),s=Yo(t,e),s!=null&&i.push(ta(t,s,r))),t=t.return}return i}function es(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Wp(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=Yo(n,s),l!=null&&o.unshift(ta(n,l,a))):r||(l=Yo(n,s),l!=null&&o.push(ta(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var lE=/\r\n?/g,cE=/\u0000|\uFFFD/g;function jp(t){return(typeof t=="string"?t:""+t).replace(lE,`
`).replace(cE,"")}function Ga(t,e,n){if(e=jp(e),jp(t)!==e&&n)throw Error(ne(425))}function $l(){}var Gf=null,Wf=null;function jf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Xf=typeof setTimeout=="function"?setTimeout:void 0,uE=typeof clearTimeout=="function"?clearTimeout:void 0,Xp=typeof Promise=="function"?Promise:void 0,fE=typeof queueMicrotask=="function"?queueMicrotask:typeof Xp<"u"?function(t){return Xp.resolve(null).then(t).catch(dE)}:Xf;function dE(t){setTimeout(function(){throw t})}function yu(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Zo(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Zo(e)}function Qi(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function qp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ro=Math.random().toString(36).slice(2),si="__reactFiber$"+ro,na="__reactProps$"+ro,Ci="__reactContainer$"+ro,qf="__reactEvents$"+ro,hE="__reactListeners$"+ro,pE="__reactHandles$"+ro;function Nr(t){var e=t[si];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ci]||n[si]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=qp(t);t!==null;){if(n=t[si])return n;t=qp(t)}return e}t=n,n=t.parentNode}return null}function va(t){return t=t[si]||t[Ci],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ms(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ne(33))}function Lc(t){return t[na]||null}var Yf=[],Es=-1;function hr(t){return{current:t}}function at(t){0>Es||(t.current=Yf[Es],Yf[Es]=null,Es--)}function it(t,e){Es++,Yf[Es]=t.current,t.current=e}var lr={},qt=hr(lr),un=hr(!1),Gr=lr;function Ws(t,e){var n=t.type.contextTypes;if(!n)return lr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function fn(t){return t=t.childContextTypes,t!=null}function Kl(){at(un),at(qt)}function Yp(t,e,n){if(qt.current!==lr)throw Error(ne(168));it(qt,e),it(un,n)}function c_(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ne(108,QS(t)||"Unknown",r));return pt({},n,i)}function Zl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||lr,Gr=qt.current,it(qt,t),it(un,un.current),!0}function $p(t,e,n){var i=t.stateNode;if(!i)throw Error(ne(169));n?(t=c_(t,e,Gr),i.__reactInternalMemoizedMergedChildContext=t,at(un),at(qt),it(qt,t)):at(un),it(un,n)}var vi=null,Dc=!1,Su=!1;function u_(t){vi===null?vi=[t]:vi.push(t)}function mE(t){Dc=!0,u_(t)}function pr(){if(!Su&&vi!==null){Su=!0;var t=0,e=Ze;try{var n=vi;for(Ze=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}vi=null,Dc=!1}catch(r){throw vi!==null&&(vi=vi.slice(t+1)),I0($d,pr),r}finally{Ze=e,Su=!1}}return null}var Ts=[],ws=0,Ql=null,Jl=0,Ln=[],Dn=0,Wr=null,xi=1,yi="";function Tr(t,e){Ts[ws++]=Jl,Ts[ws++]=Ql,Ql=t,Jl=e}function f_(t,e,n){Ln[Dn++]=xi,Ln[Dn++]=yi,Ln[Dn++]=Wr,Wr=t;var i=xi;t=yi;var r=32-Qn(i)-1;i&=~(1<<r),n+=1;var s=32-Qn(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,xi=1<<32-Qn(e)+r|n<<r|i,yi=s+t}else xi=1<<s|n<<r|i,yi=t}function rh(t){t.return!==null&&(Tr(t,1),f_(t,1,0))}function sh(t){for(;t===Ql;)Ql=Ts[--ws],Ts[ws]=null,Jl=Ts[--ws],Ts[ws]=null;for(;t===Wr;)Wr=Ln[--Dn],Ln[Dn]=null,yi=Ln[--Dn],Ln[Dn]=null,xi=Ln[--Dn],Ln[Dn]=null}var yn=null,xn=null,lt=!1,qn=null;function d_(t,e){var n=Fn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Kp(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,yn=t,xn=Qi(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,yn=t,xn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Wr!==null?{id:xi,overflow:yi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Fn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,yn=t,xn=null,!0):!1;default:return!1}}function $f(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Kf(t){if(lt){var e=xn;if(e){var n=e;if(!Kp(t,e)){if($f(t))throw Error(ne(418));e=Qi(n.nextSibling);var i=yn;e&&Kp(t,e)?d_(i,n):(t.flags=t.flags&-4097|2,lt=!1,yn=t)}}else{if($f(t))throw Error(ne(418));t.flags=t.flags&-4097|2,lt=!1,yn=t}}}function Zp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;yn=t}function Wa(t){if(t!==yn)return!1;if(!lt)return Zp(t),lt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!jf(t.type,t.memoizedProps)),e&&(e=xn)){if($f(t))throw h_(),Error(ne(418));for(;e;)d_(t,e),e=Qi(e.nextSibling)}if(Zp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ne(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){xn=Qi(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}xn=null}}else xn=yn?Qi(t.stateNode.nextSibling):null;return!0}function h_(){for(var t=xn;t;)t=Qi(t.nextSibling)}function js(){xn=yn=null,lt=!1}function oh(t){qn===null?qn=[t]:qn.push(t)}var gE=Di.ReactCurrentBatchConfig;function mo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ne(309));var i=n.stateNode}if(!i)throw Error(ne(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(ne(284));if(!n._owner)throw Error(ne(290,t))}return t}function ja(t,e){throw t=Object.prototype.toString.call(e),Error(ne(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Qp(t){var e=t._init;return e(t._payload)}function p_(t){function e(h,g){if(t){var m=h.deletions;m===null?(h.deletions=[g],h.flags|=16):m.push(g)}}function n(h,g){if(!t)return null;for(;g!==null;)e(h,g),g=g.sibling;return null}function i(h,g){for(h=new Map;g!==null;)g.key!==null?h.set(g.key,g):h.set(g.index,g),g=g.sibling;return h}function r(h,g){return h=nr(h,g),h.index=0,h.sibling=null,h}function s(h,g,m){return h.index=m,t?(m=h.alternate,m!==null?(m=m.index,m<g?(h.flags|=2,g):m):(h.flags|=2,g)):(h.flags|=1048576,g)}function o(h){return t&&h.alternate===null&&(h.flags|=2),h}function a(h,g,m,y){return g===null||g.tag!==6?(g=bu(m,h.mode,y),g.return=h,g):(g=r(g,m),g.return=h,g)}function l(h,g,m,y){var C=m.type;return C===_s?u(h,g,m.props.children,y,m.key):g!==null&&(g.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===zi&&Qp(C)===g.type)?(y=r(g,m.props),y.ref=mo(h,g,m),y.return=h,y):(y=Ol(m.type,m.key,m.props,null,h.mode,y),y.ref=mo(h,g,m),y.return=h,y)}function c(h,g,m,y){return g===null||g.tag!==4||g.stateNode.containerInfo!==m.containerInfo||g.stateNode.implementation!==m.implementation?(g=Ru(m,h.mode,y),g.return=h,g):(g=r(g,m.children||[]),g.return=h,g)}function u(h,g,m,y,C){return g===null||g.tag!==7?(g=kr(m,h.mode,y,C),g.return=h,g):(g=r(g,m),g.return=h,g)}function f(h,g,m){if(typeof g=="string"&&g!==""||typeof g=="number")return g=bu(""+g,h.mode,m),g.return=h,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Ua:return m=Ol(g.type,g.key,g.props,null,h.mode,m),m.ref=mo(h,null,g),m.return=h,m;case vs:return g=Ru(g,h.mode,m),g.return=h,g;case zi:var y=g._init;return f(h,y(g._payload),m)}if(Ao(g)||co(g))return g=kr(g,h.mode,m,null),g.return=h,g;ja(h,g)}return null}function d(h,g,m,y){var C=g!==null?g.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return C!==null?null:a(h,g,""+m,y);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Ua:return m.key===C?l(h,g,m,y):null;case vs:return m.key===C?c(h,g,m,y):null;case zi:return C=m._init,d(h,g,C(m._payload),y)}if(Ao(m)||co(m))return C!==null?null:u(h,g,m,y,null);ja(h,m)}return null}function p(h,g,m,y,C){if(typeof y=="string"&&y!==""||typeof y=="number")return h=h.get(m)||null,a(g,h,""+y,C);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Ua:return h=h.get(y.key===null?m:y.key)||null,l(g,h,y,C);case vs:return h=h.get(y.key===null?m:y.key)||null,c(g,h,y,C);case zi:var T=y._init;return p(h,g,m,T(y._payload),C)}if(Ao(y)||co(y))return h=h.get(m)||null,u(g,h,y,C,null);ja(g,y)}return null}function _(h,g,m,y){for(var C=null,T=null,w=g,P=g=0,S=null;w!==null&&P<m.length;P++){w.index>P?(S=w,w=null):S=w.sibling;var E=d(h,w,m[P],y);if(E===null){w===null&&(w=S);break}t&&w&&E.alternate===null&&e(h,w),g=s(E,g,P),T===null?C=E:T.sibling=E,T=E,w=S}if(P===m.length)return n(h,w),lt&&Tr(h,P),C;if(w===null){for(;P<m.length;P++)w=f(h,m[P],y),w!==null&&(g=s(w,g,P),T===null?C=w:T.sibling=w,T=w);return lt&&Tr(h,P),C}for(w=i(h,w);P<m.length;P++)S=p(w,h,P,m[P],y),S!==null&&(t&&S.alternate!==null&&w.delete(S.key===null?P:S.key),g=s(S,g,P),T===null?C=S:T.sibling=S,T=S);return t&&w.forEach(function(U){return e(h,U)}),lt&&Tr(h,P),C}function x(h,g,m,y){var C=co(m);if(typeof C!="function")throw Error(ne(150));if(m=C.call(m),m==null)throw Error(ne(151));for(var T=C=null,w=g,P=g=0,S=null,E=m.next();w!==null&&!E.done;P++,E=m.next()){w.index>P?(S=w,w=null):S=w.sibling;var U=d(h,w,E.value,y);if(U===null){w===null&&(w=S);break}t&&w&&U.alternate===null&&e(h,w),g=s(U,g,P),T===null?C=U:T.sibling=U,T=U,w=S}if(E.done)return n(h,w),lt&&Tr(h,P),C;if(w===null){for(;!E.done;P++,E=m.next())E=f(h,E.value,y),E!==null&&(g=s(E,g,P),T===null?C=E:T.sibling=E,T=E);return lt&&Tr(h,P),C}for(w=i(h,w);!E.done;P++,E=m.next())E=p(w,h,P,E.value,y),E!==null&&(t&&E.alternate!==null&&w.delete(E.key===null?P:E.key),g=s(E,g,P),T===null?C=E:T.sibling=E,T=E);return t&&w.forEach(function(j){return e(h,j)}),lt&&Tr(h,P),C}function v(h,g,m,y){if(typeof m=="object"&&m!==null&&m.type===_s&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case Ua:e:{for(var C=m.key,T=g;T!==null;){if(T.key===C){if(C=m.type,C===_s){if(T.tag===7){n(h,T.sibling),g=r(T,m.props.children),g.return=h,h=g;break e}}else if(T.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===zi&&Qp(C)===T.type){n(h,T.sibling),g=r(T,m.props),g.ref=mo(h,T,m),g.return=h,h=g;break e}n(h,T);break}else e(h,T);T=T.sibling}m.type===_s?(g=kr(m.props.children,h.mode,y,m.key),g.return=h,h=g):(y=Ol(m.type,m.key,m.props,null,h.mode,y),y.ref=mo(h,g,m),y.return=h,h=y)}return o(h);case vs:e:{for(T=m.key;g!==null;){if(g.key===T)if(g.tag===4&&g.stateNode.containerInfo===m.containerInfo&&g.stateNode.implementation===m.implementation){n(h,g.sibling),g=r(g,m.children||[]),g.return=h,h=g;break e}else{n(h,g);break}else e(h,g);g=g.sibling}g=Ru(m,h.mode,y),g.return=h,h=g}return o(h);case zi:return T=m._init,v(h,g,T(m._payload),y)}if(Ao(m))return _(h,g,m,y);if(co(m))return x(h,g,m,y);ja(h,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,g!==null&&g.tag===6?(n(h,g.sibling),g=r(g,m),g.return=h,h=g):(n(h,g),g=bu(m,h.mode,y),g.return=h,h=g),o(h)):n(h,g)}return v}var Xs=p_(!0),m_=p_(!1),ec=hr(null),tc=null,As=null,ah=null;function lh(){ah=As=tc=null}function ch(t){var e=ec.current;at(ec),t._currentValue=e}function Zf(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Bs(t,e){tc=t,ah=As=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(cn=!0),t.firstContext=null)}function Bn(t){var e=t._currentValue;if(ah!==t)if(t={context:t,memoizedValue:e,next:null},As===null){if(tc===null)throw Error(ne(308));As=t,tc.dependencies={lanes:0,firstContext:t}}else As=As.next=t;return e}var Ur=null;function uh(t){Ur===null?Ur=[t]:Ur.push(t)}function g_(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,uh(e)):(n.next=r.next,r.next=n),e.interleaved=n,bi(t,i)}function bi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Vi=!1;function fh(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function v_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ei(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Ji(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,qe&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,bi(t,n)}return r=i.interleaved,r===null?(e.next=e,uh(i)):(e.next=r.next,r.next=e),i.interleaved=e,bi(t,n)}function Ll(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Kd(t,n)}}function Jp(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function nc(t,e,n,i){var r=t.updateQueue;Vi=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var u=t.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==o&&(a===null?u.firstBaseUpdate=c:a.next=c,u.lastBaseUpdate=l))}if(s!==null){var f=r.baseState;o=0,u=c=l=null,a=s;do{var d=a.lane,p=a.eventTime;if((i&d)===d){u!==null&&(u=u.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var _=t,x=a;switch(d=e,p=n,x.tag){case 1:if(_=x.payload,typeof _=="function"){f=_.call(p,f,d);break e}f=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=x.payload,d=typeof _=="function"?_.call(p,f,d):_,d==null)break e;f=pt({},f,d);break e;case 2:Vi=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=r.effects,d===null?r.effects=[a]:d.push(a))}else p={eventTime:p,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(c=u=p,l=f):u=u.next=p,o|=d;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;d=a,a=d.next,d.next=null,r.lastBaseUpdate=d,r.shared.pending=null}}while(!0);if(u===null&&(l=f),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=u,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Xr|=o,t.lanes=o,t.memoizedState=f}}function em(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ne(191,r));r.call(i)}}}var _a={},ai=hr(_a),ia=hr(_a),ra=hr(_a);function Ir(t){if(t===_a)throw Error(ne(174));return t}function dh(t,e){switch(it(ra,e),it(ia,t),it(ai,_a),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Lf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Lf(e,t)}at(ai),it(ai,e)}function qs(){at(ai),at(ia),at(ra)}function __(t){Ir(ra.current);var e=Ir(ai.current),n=Lf(e,t.type);e!==n&&(it(ia,t),it(ai,n))}function hh(t){ia.current===t&&(at(ai),at(ia))}var ft=hr(0);function ic(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Mu=[];function ph(){for(var t=0;t<Mu.length;t++)Mu[t]._workInProgressVersionPrimary=null;Mu.length=0}var Dl=Di.ReactCurrentDispatcher,Eu=Di.ReactCurrentBatchConfig,jr=0,ht=null,Tt=null,Dt=null,rc=!1,Io=!1,sa=0,vE=0;function Vt(){throw Error(ne(321))}function mh(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!ei(t[n],e[n]))return!1;return!0}function gh(t,e,n,i,r,s){if(jr=s,ht=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Dl.current=t===null||t.memoizedState===null?SE:ME,t=n(i,r),Io){s=0;do{if(Io=!1,sa=0,25<=s)throw Error(ne(301));s+=1,Dt=Tt=null,e.updateQueue=null,Dl.current=EE,t=n(i,r)}while(Io)}if(Dl.current=sc,e=Tt!==null&&Tt.next!==null,jr=0,Dt=Tt=ht=null,rc=!1,e)throw Error(ne(300));return t}function vh(){var t=sa!==0;return sa=0,t}function ii(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Dt===null?ht.memoizedState=Dt=t:Dt=Dt.next=t,Dt}function zn(){if(Tt===null){var t=ht.alternate;t=t!==null?t.memoizedState:null}else t=Tt.next;var e=Dt===null?ht.memoizedState:Dt.next;if(e!==null)Dt=e,Tt=t;else{if(t===null)throw Error(ne(310));Tt=t,t={memoizedState:Tt.memoizedState,baseState:Tt.baseState,baseQueue:Tt.baseQueue,queue:Tt.queue,next:null},Dt===null?ht.memoizedState=Dt=t:Dt=Dt.next=t}return Dt}function oa(t,e){return typeof e=="function"?e(t):e}function Tu(t){var e=zn(),n=e.queue;if(n===null)throw Error(ne(311));n.lastRenderedReducer=t;var i=Tt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var u=c.lane;if((jr&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var f={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=f,o=i):l=l.next=f,ht.lanes|=u,Xr|=u}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,ei(i,e.memoizedState)||(cn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,ht.lanes|=s,Xr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function wu(t){var e=zn(),n=e.queue;if(n===null)throw Error(ne(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);ei(s,e.memoizedState)||(cn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function x_(){}function y_(t,e){var n=ht,i=zn(),r=e(),s=!ei(i.memoizedState,r);if(s&&(i.memoizedState=r,cn=!0),i=i.queue,_h(E_.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Dt!==null&&Dt.memoizedState.tag&1){if(n.flags|=2048,aa(9,M_.bind(null,n,i,r,e),void 0,null),Nt===null)throw Error(ne(349));jr&30||S_(n,e,r)}return r}function S_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ht.updateQueue,e===null?(e={lastEffect:null,stores:null},ht.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function M_(t,e,n,i){e.value=n,e.getSnapshot=i,T_(e)&&w_(t)}function E_(t,e,n){return n(function(){T_(e)&&w_(t)})}function T_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!ei(t,n)}catch{return!0}}function w_(t){var e=bi(t,1);e!==null&&Jn(e,t,1,-1)}function tm(t){var e=ii();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:oa,lastRenderedState:t},e.queue=t,t=t.dispatch=yE.bind(null,ht,t),[e.memoizedState,t]}function aa(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=ht.updateQueue,e===null?(e={lastEffect:null,stores:null},ht.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function A_(){return zn().memoizedState}function Nl(t,e,n,i){var r=ii();ht.flags|=t,r.memoizedState=aa(1|e,n,void 0,i===void 0?null:i)}function Nc(t,e,n,i){var r=zn();i=i===void 0?null:i;var s=void 0;if(Tt!==null){var o=Tt.memoizedState;if(s=o.destroy,i!==null&&mh(i,o.deps)){r.memoizedState=aa(e,n,s,i);return}}ht.flags|=t,r.memoizedState=aa(1|e,n,s,i)}function nm(t,e){return Nl(8390656,8,t,e)}function _h(t,e){return Nc(2048,8,t,e)}function C_(t,e){return Nc(4,2,t,e)}function b_(t,e){return Nc(4,4,t,e)}function R_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function P_(t,e,n){return n=n!=null?n.concat([t]):null,Nc(4,4,R_.bind(null,e,t),n)}function xh(){}function L_(t,e){var n=zn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&mh(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function D_(t,e){var n=zn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&mh(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function N_(t,e,n){return jr&21?(ei(n,e)||(n=k0(),ht.lanes|=n,Xr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,cn=!0),t.memoizedState=n)}function _E(t,e){var n=Ze;Ze=n!==0&&4>n?n:4,t(!0);var i=Eu.transition;Eu.transition={};try{t(!1),e()}finally{Ze=n,Eu.transition=i}}function U_(){return zn().memoizedState}function xE(t,e,n){var i=tr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},I_(t))F_(e,n);else if(n=g_(t,e,n,i),n!==null){var r=tn();Jn(n,t,i,r),O_(n,e,i)}}function yE(t,e,n){var i=tr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(I_(t))F_(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,ei(a,o)){var l=e.interleaved;l===null?(r.next=r,uh(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=g_(t,e,r,i),n!==null&&(r=tn(),Jn(n,t,i,r),O_(n,e,i))}}function I_(t){var e=t.alternate;return t===ht||e!==null&&e===ht}function F_(t,e){Io=rc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function O_(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Kd(t,n)}}var sc={readContext:Bn,useCallback:Vt,useContext:Vt,useEffect:Vt,useImperativeHandle:Vt,useInsertionEffect:Vt,useLayoutEffect:Vt,useMemo:Vt,useReducer:Vt,useRef:Vt,useState:Vt,useDebugValue:Vt,useDeferredValue:Vt,useTransition:Vt,useMutableSource:Vt,useSyncExternalStore:Vt,useId:Vt,unstable_isNewReconciler:!1},SE={readContext:Bn,useCallback:function(t,e){return ii().memoizedState=[t,e===void 0?null:e],t},useContext:Bn,useEffect:nm,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Nl(4194308,4,R_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Nl(4194308,4,t,e)},useInsertionEffect:function(t,e){return Nl(4,2,t,e)},useMemo:function(t,e){var n=ii();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=ii();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=xE.bind(null,ht,t),[i.memoizedState,t]},useRef:function(t){var e=ii();return t={current:t},e.memoizedState=t},useState:tm,useDebugValue:xh,useDeferredValue:function(t){return ii().memoizedState=t},useTransition:function(){var t=tm(!1),e=t[0];return t=_E.bind(null,t[1]),ii().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=ht,r=ii();if(lt){if(n===void 0)throw Error(ne(407));n=n()}else{if(n=e(),Nt===null)throw Error(ne(349));jr&30||S_(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,nm(E_.bind(null,i,s,t),[t]),i.flags|=2048,aa(9,M_.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=ii(),e=Nt.identifierPrefix;if(lt){var n=yi,i=xi;n=(i&~(1<<32-Qn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=sa++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=vE++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},ME={readContext:Bn,useCallback:L_,useContext:Bn,useEffect:_h,useImperativeHandle:P_,useInsertionEffect:C_,useLayoutEffect:b_,useMemo:D_,useReducer:Tu,useRef:A_,useState:function(){return Tu(oa)},useDebugValue:xh,useDeferredValue:function(t){var e=zn();return N_(e,Tt.memoizedState,t)},useTransition:function(){var t=Tu(oa)[0],e=zn().memoizedState;return[t,e]},useMutableSource:x_,useSyncExternalStore:y_,useId:U_,unstable_isNewReconciler:!1},EE={readContext:Bn,useCallback:L_,useContext:Bn,useEffect:_h,useImperativeHandle:P_,useInsertionEffect:C_,useLayoutEffect:b_,useMemo:D_,useReducer:wu,useRef:A_,useState:function(){return wu(oa)},useDebugValue:xh,useDeferredValue:function(t){var e=zn();return Tt===null?e.memoizedState=t:N_(e,Tt.memoizedState,t)},useTransition:function(){var t=wu(oa)[0],e=zn().memoizedState;return[t,e]},useMutableSource:x_,useSyncExternalStore:y_,useId:U_,unstable_isNewReconciler:!1};function jn(t,e){if(t&&t.defaultProps){e=pt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Qf(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:pt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Uc={isMounted:function(t){return(t=t._reactInternals)?Zr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=tn(),r=tr(t),s=Ei(i,r);s.payload=e,n!=null&&(s.callback=n),e=Ji(t,s,r),e!==null&&(Jn(e,t,r,i),Ll(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=tn(),r=tr(t),s=Ei(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Ji(t,s,r),e!==null&&(Jn(e,t,r,i),Ll(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=tn(),i=tr(t),r=Ei(n,i);r.tag=2,e!=null&&(r.callback=e),e=Ji(t,r,i),e!==null&&(Jn(e,t,i,n),Ll(e,t,i))}};function im(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!Jo(n,i)||!Jo(r,s):!0}function k_(t,e,n){var i=!1,r=lr,s=e.contextType;return typeof s=="object"&&s!==null?s=Bn(s):(r=fn(e)?Gr:qt.current,i=e.contextTypes,s=(i=i!=null)?Ws(t,r):lr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Uc,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function rm(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Uc.enqueueReplaceState(e,e.state,null)}function Jf(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},fh(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Bn(s):(s=fn(e)?Gr:qt.current,r.context=Ws(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Qf(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Uc.enqueueReplaceState(r,r.state,null),nc(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Ys(t,e){try{var n="",i=e;do n+=ZS(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Au(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function ed(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var TE=typeof WeakMap=="function"?WeakMap:Map;function B_(t,e,n){n=Ei(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){ac||(ac=!0,ud=i),ed(t,e)},n}function z_(t,e,n){n=Ei(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){ed(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){ed(t,e),typeof i!="function"&&(er===null?er=new Set([this]):er.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function sm(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new TE;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=kE.bind(null,t,e,n),e.then(t,t))}function om(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function am(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Ei(-1,1),e.tag=2,Ji(n,e,1))),n.lanes|=1),t)}var wE=Di.ReactCurrentOwner,cn=!1;function Jt(t,e,n,i){e.child=t===null?m_(e,null,n,i):Xs(e,t.child,n,i)}function lm(t,e,n,i,r){n=n.render;var s=e.ref;return Bs(e,r),i=gh(t,e,n,i,s,r),n=vh(),t!==null&&!cn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ri(t,e,r)):(lt&&n&&rh(e),e.flags|=1,Jt(t,e,i,r),e.child)}function cm(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Ch(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,V_(t,e,s,i,r)):(t=Ol(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Jo,n(o,i)&&t.ref===e.ref)return Ri(t,e,r)}return e.flags|=1,t=nr(s,i),t.ref=e.ref,t.return=e,e.child=t}function V_(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Jo(s,i)&&t.ref===e.ref)if(cn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(cn=!0);else return e.lanes=t.lanes,Ri(t,e,r)}return td(t,e,n,i,r)}function H_(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},it(bs,_n),_n|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,it(bs,_n),_n|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,it(bs,_n),_n|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,it(bs,_n),_n|=i;return Jt(t,e,r,n),e.child}function G_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function td(t,e,n,i,r){var s=fn(n)?Gr:qt.current;return s=Ws(e,s),Bs(e,r),n=gh(t,e,n,i,s,r),i=vh(),t!==null&&!cn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ri(t,e,r)):(lt&&i&&rh(e),e.flags|=1,Jt(t,e,n,r),e.child)}function um(t,e,n,i,r){if(fn(n)){var s=!0;Zl(e)}else s=!1;if(Bs(e,r),e.stateNode===null)Ul(t,e),k_(e,n,i),Jf(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Bn(c):(c=fn(n)?Gr:qt.current,c=Ws(e,c));var u=n.getDerivedStateFromProps,f=typeof u=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&rm(e,o,i,c),Vi=!1;var d=e.memoizedState;o.state=d,nc(e,i,o,r),l=e.memoizedState,a!==i||d!==l||un.current||Vi?(typeof u=="function"&&(Qf(e,n,u,i),l=e.memoizedState),(a=Vi||im(e,n,a,i,d,l,c))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,v_(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:jn(e.type,a),o.props=c,f=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Bn(l):(l=fn(n)?Gr:qt.current,l=Ws(e,l));var p=n.getDerivedStateFromProps;(u=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||d!==l)&&rm(e,o,i,l),Vi=!1,d=e.memoizedState,o.state=d,nc(e,i,o,r);var _=e.memoizedState;a!==f||d!==_||un.current||Vi?(typeof p=="function"&&(Qf(e,n,p,i),_=e.memoizedState),(c=Vi||im(e,n,c,i,d,_,l)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,_,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,_,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=_),o.props=i,o.state=_,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),i=!1)}return nd(t,e,n,i,s,r)}function nd(t,e,n,i,r,s){G_(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&$p(e,n,!1),Ri(t,e,s);i=e.stateNode,wE.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=Xs(e,t.child,null,s),e.child=Xs(e,null,a,s)):Jt(t,e,a,s),e.memoizedState=i.state,r&&$p(e,n,!0),e.child}function W_(t){var e=t.stateNode;e.pendingContext?Yp(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Yp(t,e.context,!1),dh(t,e.containerInfo)}function fm(t,e,n,i,r){return js(),oh(r),e.flags|=256,Jt(t,e,n,i),e.child}var id={dehydrated:null,treeContext:null,retryLane:0};function rd(t){return{baseLanes:t,cachePool:null,transitions:null}}function j_(t,e,n){var i=e.pendingProps,r=ft.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),it(ft,r&1),t===null)return Kf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Oc(o,i,0,null),t=kr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=rd(n),e.memoizedState=id,t):yh(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return AE(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=nr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=nr(a,s):(s=kr(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?rd(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=id,i}return s=t.child,t=s.sibling,i=nr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function yh(t,e){return e=Oc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Xa(t,e,n,i){return i!==null&&oh(i),Xs(e,t.child,null,n),t=yh(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function AE(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=Au(Error(ne(422))),Xa(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Oc({mode:"visible",children:i.children},r,0,null),s=kr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Xs(e,t.child,null,o),e.child.memoizedState=rd(o),e.memoizedState=id,s);if(!(e.mode&1))return Xa(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(ne(419)),i=Au(s,i,void 0),Xa(t,e,o,i)}if(a=(o&t.childLanes)!==0,cn||a){if(i=Nt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,bi(t,r),Jn(i,t,r,-1))}return Ah(),i=Au(Error(ne(421))),Xa(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=BE.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,xn=Qi(r.nextSibling),yn=e,lt=!0,qn=null,t!==null&&(Ln[Dn++]=xi,Ln[Dn++]=yi,Ln[Dn++]=Wr,xi=t.id,yi=t.overflow,Wr=e),e=yh(e,i.children),e.flags|=4096,e)}function dm(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Zf(t.return,e,n)}function Cu(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function X_(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Jt(t,e,i.children,n),i=ft.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&dm(t,n,e);else if(t.tag===19)dm(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(it(ft,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&ic(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Cu(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&ic(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Cu(e,!0,n,null,s);break;case"together":Cu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ul(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Ri(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Xr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ne(153));if(e.child!==null){for(t=e.child,n=nr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=nr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function CE(t,e,n){switch(e.tag){case 3:W_(e),js();break;case 5:__(e);break;case 1:fn(e.type)&&Zl(e);break;case 4:dh(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;it(ec,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(it(ft,ft.current&1),e.flags|=128,null):n&e.child.childLanes?j_(t,e,n):(it(ft,ft.current&1),t=Ri(t,e,n),t!==null?t.sibling:null);it(ft,ft.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return X_(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),it(ft,ft.current),i)break;return null;case 22:case 23:return e.lanes=0,H_(t,e,n)}return Ri(t,e,n)}var q_,sd,Y_,$_;q_=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};sd=function(){};Y_=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Ir(ai.current);var s=null;switch(n){case"input":r=Cf(t,r),i=Cf(t,i),s=[];break;case"select":r=pt({},r,{value:void 0}),i=pt({},i,{value:void 0}),s=[];break;case"textarea":r=Pf(t,r),i=Pf(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=$l)}Df(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Xo.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Xo.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&st("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};$_=function(t,e,n,i){n!==i&&(e.flags|=4)};function go(t,e){if(!lt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Ht(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function bE(t,e,n){var i=e.pendingProps;switch(sh(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ht(e),null;case 1:return fn(e.type)&&Kl(),Ht(e),null;case 3:return i=e.stateNode,qs(),at(un),at(qt),ph(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Wa(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,qn!==null&&(hd(qn),qn=null))),sd(t,e),Ht(e),null;case 5:hh(e);var r=Ir(ra.current);if(n=e.type,t!==null&&e.stateNode!=null)Y_(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ne(166));return Ht(e),null}if(t=Ir(ai.current),Wa(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[si]=e,i[na]=s,t=(e.mode&1)!==0,n){case"dialog":st("cancel",i),st("close",i);break;case"iframe":case"object":case"embed":st("load",i);break;case"video":case"audio":for(r=0;r<bo.length;r++)st(bo[r],i);break;case"source":st("error",i);break;case"img":case"image":case"link":st("error",i),st("load",i);break;case"details":st("toggle",i);break;case"input":Sp(i,s),st("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},st("invalid",i);break;case"textarea":Ep(i,s),st("invalid",i)}Df(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Ga(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Ga(i.textContent,a,t),r=["children",""+a]):Xo.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&st("scroll",i)}switch(n){case"input":Ia(i),Mp(i,s,!0);break;case"textarea":Ia(i),Tp(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=$l)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=E0(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[si]=e,t[na]=i,q_(t,e,!1,!1),e.stateNode=t;e:{switch(o=Nf(n,i),n){case"dialog":st("cancel",t),st("close",t),r=i;break;case"iframe":case"object":case"embed":st("load",t),r=i;break;case"video":case"audio":for(r=0;r<bo.length;r++)st(bo[r],t);r=i;break;case"source":st("error",t),r=i;break;case"img":case"image":case"link":st("error",t),st("load",t),r=i;break;case"details":st("toggle",t),r=i;break;case"input":Sp(t,i),r=Cf(t,i),st("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=pt({},i,{value:void 0}),st("invalid",t);break;case"textarea":Ep(t,i),r=Pf(t,i),st("invalid",t);break;default:r=i}Df(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?A0(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&T0(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&qo(t,l):typeof l=="number"&&qo(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Xo.hasOwnProperty(s)?l!=null&&s==="onScroll"&&st("scroll",t):l!=null&&Wd(t,s,l,o))}switch(n){case"input":Ia(t),Mp(t,i,!1);break;case"textarea":Ia(t),Tp(t);break;case"option":i.value!=null&&t.setAttribute("value",""+ar(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Is(t,!!i.multiple,s,!1):i.defaultValue!=null&&Is(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=$l)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ht(e),null;case 6:if(t&&e.stateNode!=null)$_(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ne(166));if(n=Ir(ra.current),Ir(ai.current),Wa(e)){if(i=e.stateNode,n=e.memoizedProps,i[si]=e,(s=i.nodeValue!==n)&&(t=yn,t!==null))switch(t.tag){case 3:Ga(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ga(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[si]=e,e.stateNode=i}return Ht(e),null;case 13:if(at(ft),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(lt&&xn!==null&&e.mode&1&&!(e.flags&128))h_(),js(),e.flags|=98560,s=!1;else if(s=Wa(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ne(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ne(317));s[si]=e}else js(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ht(e),s=!1}else qn!==null&&(hd(qn),qn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||ft.current&1?wt===0&&(wt=3):Ah())),e.updateQueue!==null&&(e.flags|=4),Ht(e),null);case 4:return qs(),sd(t,e),t===null&&ea(e.stateNode.containerInfo),Ht(e),null;case 10:return ch(e.type._context),Ht(e),null;case 17:return fn(e.type)&&Kl(),Ht(e),null;case 19:if(at(ft),s=e.memoizedState,s===null)return Ht(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)go(s,!1);else{if(wt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=ic(t),o!==null){for(e.flags|=128,go(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return it(ft,ft.current&1|2),e.child}t=t.sibling}s.tail!==null&&xt()>$s&&(e.flags|=128,i=!0,go(s,!1),e.lanes=4194304)}else{if(!i)if(t=ic(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),go(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!lt)return Ht(e),null}else 2*xt()-s.renderingStartTime>$s&&n!==1073741824&&(e.flags|=128,i=!0,go(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=xt(),e.sibling=null,n=ft.current,it(ft,i?n&1|2:n&1),e):(Ht(e),null);case 22:case 23:return wh(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?_n&1073741824&&(Ht(e),e.subtreeFlags&6&&(e.flags|=8192)):Ht(e),null;case 24:return null;case 25:return null}throw Error(ne(156,e.tag))}function RE(t,e){switch(sh(e),e.tag){case 1:return fn(e.type)&&Kl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return qs(),at(un),at(qt),ph(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return hh(e),null;case 13:if(at(ft),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ne(340));js()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return at(ft),null;case 4:return qs(),null;case 10:return ch(e.type._context),null;case 22:case 23:return wh(),null;case 24:return null;default:return null}}var qa=!1,Xt=!1,PE=typeof WeakSet=="function"?WeakSet:Set,he=null;function Cs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){vt(t,e,i)}else n.current=null}function od(t,e,n){try{n()}catch(i){vt(t,e,i)}}var hm=!1;function LE(t,e){if(Gf=Xl,t=e_(),ih(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,u=0,f=t,d=null;t:for(;;){for(var p;f!==n||r!==0&&f.nodeType!==3||(a=o+r),f!==s||i!==0&&f.nodeType!==3||(l=o+i),f.nodeType===3&&(o+=f.nodeValue.length),(p=f.firstChild)!==null;)d=f,f=p;for(;;){if(f===t)break t;if(d===n&&++c===r&&(a=o),d===s&&++u===i&&(l=o),(p=f.nextSibling)!==null)break;f=d,d=f.parentNode}f=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Wf={focusedElem:t,selectionRange:n},Xl=!1,he=e;he!==null;)if(e=he,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,he=t;else for(;he!==null;){e=he;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var x=_.memoizedProps,v=_.memoizedState,h=e.stateNode,g=h.getSnapshotBeforeUpdate(e.elementType===e.type?x:jn(e.type,x),v);h.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var m=e.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ne(163))}}catch(y){vt(e,e.return,y)}if(t=e.sibling,t!==null){t.return=e.return,he=t;break}he=e.return}return _=hm,hm=!1,_}function Fo(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&od(e,n,s)}r=r.next}while(r!==i)}}function Ic(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function ad(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function K_(t){var e=t.alternate;e!==null&&(t.alternate=null,K_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[si],delete e[na],delete e[qf],delete e[hE],delete e[pE])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Z_(t){return t.tag===5||t.tag===3||t.tag===4}function pm(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Z_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ld(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=$l));else if(i!==4&&(t=t.child,t!==null))for(ld(t,e,n),t=t.sibling;t!==null;)ld(t,e,n),t=t.sibling}function cd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(cd(t,e,n),t=t.sibling;t!==null;)cd(t,e,n),t=t.sibling}var Ut=null,Xn=!1;function Ni(t,e,n){for(n=n.child;n!==null;)Q_(t,e,n),n=n.sibling}function Q_(t,e,n){if(oi&&typeof oi.onCommitFiberUnmount=="function")try{oi.onCommitFiberUnmount(Cc,n)}catch{}switch(n.tag){case 5:Xt||Cs(n,e);case 6:var i=Ut,r=Xn;Ut=null,Ni(t,e,n),Ut=i,Xn=r,Ut!==null&&(Xn?(t=Ut,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ut.removeChild(n.stateNode));break;case 18:Ut!==null&&(Xn?(t=Ut,n=n.stateNode,t.nodeType===8?yu(t.parentNode,n):t.nodeType===1&&yu(t,n),Zo(t)):yu(Ut,n.stateNode));break;case 4:i=Ut,r=Xn,Ut=n.stateNode.containerInfo,Xn=!0,Ni(t,e,n),Ut=i,Xn=r;break;case 0:case 11:case 14:case 15:if(!Xt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&od(n,e,o),r=r.next}while(r!==i)}Ni(t,e,n);break;case 1:if(!Xt&&(Cs(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){vt(n,e,a)}Ni(t,e,n);break;case 21:Ni(t,e,n);break;case 22:n.mode&1?(Xt=(i=Xt)||n.memoizedState!==null,Ni(t,e,n),Xt=i):Ni(t,e,n);break;default:Ni(t,e,n)}}function mm(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new PE),e.forEach(function(i){var r=zE.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Vn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Ut=a.stateNode,Xn=!1;break e;case 3:Ut=a.stateNode.containerInfo,Xn=!0;break e;case 4:Ut=a.stateNode.containerInfo,Xn=!0;break e}a=a.return}if(Ut===null)throw Error(ne(160));Q_(s,o,r),Ut=null,Xn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){vt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)J_(e,t),e=e.sibling}function J_(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Vn(e,t),ni(t),i&4){try{Fo(3,t,t.return),Ic(3,t)}catch(x){vt(t,t.return,x)}try{Fo(5,t,t.return)}catch(x){vt(t,t.return,x)}}break;case 1:Vn(e,t),ni(t),i&512&&n!==null&&Cs(n,n.return);break;case 5:if(Vn(e,t),ni(t),i&512&&n!==null&&Cs(n,n.return),t.flags&32){var r=t.stateNode;try{qo(r,"")}catch(x){vt(t,t.return,x)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&S0(r,s),Nf(a,o);var c=Nf(a,s);for(o=0;o<l.length;o+=2){var u=l[o],f=l[o+1];u==="style"?A0(r,f):u==="dangerouslySetInnerHTML"?T0(r,f):u==="children"?qo(r,f):Wd(r,u,f,c)}switch(a){case"input":bf(r,s);break;case"textarea":M0(r,s);break;case"select":var d=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?Is(r,!!s.multiple,p,!1):d!==!!s.multiple&&(s.defaultValue!=null?Is(r,!!s.multiple,s.defaultValue,!0):Is(r,!!s.multiple,s.multiple?[]:"",!1))}r[na]=s}catch(x){vt(t,t.return,x)}}break;case 6:if(Vn(e,t),ni(t),i&4){if(t.stateNode===null)throw Error(ne(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(x){vt(t,t.return,x)}}break;case 3:if(Vn(e,t),ni(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Zo(e.containerInfo)}catch(x){vt(t,t.return,x)}break;case 4:Vn(e,t),ni(t);break;case 13:Vn(e,t),ni(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Eh=xt())),i&4&&mm(t);break;case 22:if(u=n!==null&&n.memoizedState!==null,t.mode&1?(Xt=(c=Xt)||u,Vn(e,t),Xt=c):Vn(e,t),ni(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!u&&t.mode&1)for(he=t,u=t.child;u!==null;){for(f=he=u;he!==null;){switch(d=he,p=d.child,d.tag){case 0:case 11:case 14:case 15:Fo(4,d,d.return);break;case 1:Cs(d,d.return);var _=d.stateNode;if(typeof _.componentWillUnmount=="function"){i=d,n=d.return;try{e=i,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(x){vt(i,n,x)}}break;case 5:Cs(d,d.return);break;case 22:if(d.memoizedState!==null){vm(f);continue}}p!==null?(p.return=d,he=p):vm(f)}u=u.sibling}e:for(u=null,f=t;;){if(f.tag===5){if(u===null){u=f;try{r=f.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=w0("display",o))}catch(x){vt(t,t.return,x)}}}else if(f.tag===6){if(u===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(x){vt(t,t.return,x)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;u===f&&(u=null),f=f.return}u===f&&(u=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Vn(e,t),ni(t),i&4&&mm(t);break;case 21:break;default:Vn(e,t),ni(t)}}function ni(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Z_(n)){var i=n;break e}n=n.return}throw Error(ne(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(qo(r,""),i.flags&=-33);var s=pm(t);cd(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=pm(t);ld(t,a,o);break;default:throw Error(ne(161))}}catch(l){vt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function DE(t,e,n){he=t,ex(t)}function ex(t,e,n){for(var i=(t.mode&1)!==0;he!==null;){var r=he,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||qa;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Xt;a=qa;var c=Xt;if(qa=o,(Xt=l)&&!c)for(he=r;he!==null;)o=he,l=o.child,o.tag===22&&o.memoizedState!==null?_m(r):l!==null?(l.return=o,he=l):_m(r);for(;s!==null;)he=s,ex(s),s=s.sibling;he=r,qa=a,Xt=c}gm(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,he=s):gm(t)}}function gm(t){for(;he!==null;){var e=he;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Xt||Ic(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Xt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:jn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&em(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}em(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var f=u.dehydrated;f!==null&&Zo(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ne(163))}Xt||e.flags&512&&ad(e)}catch(d){vt(e,e.return,d)}}if(e===t){he=null;break}if(n=e.sibling,n!==null){n.return=e.return,he=n;break}he=e.return}}function vm(t){for(;he!==null;){var e=he;if(e===t){he=null;break}var n=e.sibling;if(n!==null){n.return=e.return,he=n;break}he=e.return}}function _m(t){for(;he!==null;){var e=he;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Ic(4,e)}catch(l){vt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){vt(e,r,l)}}var s=e.return;try{ad(e)}catch(l){vt(e,s,l)}break;case 5:var o=e.return;try{ad(e)}catch(l){vt(e,o,l)}}}catch(l){vt(e,e.return,l)}if(e===t){he=null;break}var a=e.sibling;if(a!==null){a.return=e.return,he=a;break}he=e.return}}var NE=Math.ceil,oc=Di.ReactCurrentDispatcher,Sh=Di.ReactCurrentOwner,On=Di.ReactCurrentBatchConfig,qe=0,Nt=null,Et=null,Ot=0,_n=0,bs=hr(0),wt=0,la=null,Xr=0,Fc=0,Mh=0,Oo=null,an=null,Eh=0,$s=1/0,gi=null,ac=!1,ud=null,er=null,Ya=!1,Xi=null,lc=0,ko=0,fd=null,Il=-1,Fl=0;function tn(){return qe&6?xt():Il!==-1?Il:Il=xt()}function tr(t){return t.mode&1?qe&2&&Ot!==0?Ot&-Ot:gE.transition!==null?(Fl===0&&(Fl=k0()),Fl):(t=Ze,t!==0||(t=window.event,t=t===void 0?16:j0(t.type)),t):1}function Jn(t,e,n,i){if(50<ko)throw ko=0,fd=null,Error(ne(185));ma(t,n,i),(!(qe&2)||t!==Nt)&&(t===Nt&&(!(qe&2)&&(Fc|=n),wt===4&&Wi(t,Ot)),dn(t,i),n===1&&qe===0&&!(e.mode&1)&&($s=xt()+500,Dc&&pr()))}function dn(t,e){var n=t.callbackNode;gM(t,e);var i=jl(t,t===Nt?Ot:0);if(i===0)n!==null&&Cp(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Cp(n),e===1)t.tag===0?mE(xm.bind(null,t)):u_(xm.bind(null,t)),fE(function(){!(qe&6)&&pr()}),n=null;else{switch(B0(i)){case 1:n=$d;break;case 4:n=F0;break;case 16:n=Wl;break;case 536870912:n=O0;break;default:n=Wl}n=lx(n,tx.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function tx(t,e){if(Il=-1,Fl=0,qe&6)throw Error(ne(327));var n=t.callbackNode;if(zs()&&t.callbackNode!==n)return null;var i=jl(t,t===Nt?Ot:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=cc(t,i);else{e=i;var r=qe;qe|=2;var s=ix();(Nt!==t||Ot!==e)&&(gi=null,$s=xt()+500,Or(t,e));do try{FE();break}catch(a){nx(t,a)}while(!0);lh(),oc.current=s,qe=r,Et!==null?e=0:(Nt=null,Ot=0,e=wt)}if(e!==0){if(e===2&&(r=kf(t),r!==0&&(i=r,e=dd(t,r))),e===1)throw n=la,Or(t,0),Wi(t,i),dn(t,xt()),n;if(e===6)Wi(t,i);else{if(r=t.current.alternate,!(i&30)&&!UE(r)&&(e=cc(t,i),e===2&&(s=kf(t),s!==0&&(i=s,e=dd(t,s))),e===1))throw n=la,Or(t,0),Wi(t,i),dn(t,xt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ne(345));case 2:wr(t,an,gi);break;case 3:if(Wi(t,i),(i&130023424)===i&&(e=Eh+500-xt(),10<e)){if(jl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){tn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Xf(wr.bind(null,t,an,gi),e);break}wr(t,an,gi);break;case 4:if(Wi(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-Qn(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=xt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*NE(i/1960))-i,10<i){t.timeoutHandle=Xf(wr.bind(null,t,an,gi),i);break}wr(t,an,gi);break;case 5:wr(t,an,gi);break;default:throw Error(ne(329))}}}return dn(t,xt()),t.callbackNode===n?tx.bind(null,t):null}function dd(t,e){var n=Oo;return t.current.memoizedState.isDehydrated&&(Or(t,e).flags|=256),t=cc(t,e),t!==2&&(e=an,an=n,e!==null&&hd(e)),t}function hd(t){an===null?an=t:an.push.apply(an,t)}function UE(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!ei(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Wi(t,e){for(e&=~Mh,e&=~Fc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Qn(e),i=1<<n;t[n]=-1,e&=~i}}function xm(t){if(qe&6)throw Error(ne(327));zs();var e=jl(t,0);if(!(e&1))return dn(t,xt()),null;var n=cc(t,e);if(t.tag!==0&&n===2){var i=kf(t);i!==0&&(e=i,n=dd(t,i))}if(n===1)throw n=la,Or(t,0),Wi(t,e),dn(t,xt()),n;if(n===6)throw Error(ne(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,wr(t,an,gi),dn(t,xt()),null}function Th(t,e){var n=qe;qe|=1;try{return t(e)}finally{qe=n,qe===0&&($s=xt()+500,Dc&&pr())}}function qr(t){Xi!==null&&Xi.tag===0&&!(qe&6)&&zs();var e=qe;qe|=1;var n=On.transition,i=Ze;try{if(On.transition=null,Ze=1,t)return t()}finally{Ze=i,On.transition=n,qe=e,!(qe&6)&&pr()}}function wh(){_n=bs.current,at(bs)}function Or(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,uE(n)),Et!==null)for(n=Et.return;n!==null;){var i=n;switch(sh(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Kl();break;case 3:qs(),at(un),at(qt),ph();break;case 5:hh(i);break;case 4:qs();break;case 13:at(ft);break;case 19:at(ft);break;case 10:ch(i.type._context);break;case 22:case 23:wh()}n=n.return}if(Nt=t,Et=t=nr(t.current,null),Ot=_n=e,wt=0,la=null,Mh=Fc=Xr=0,an=Oo=null,Ur!==null){for(e=0;e<Ur.length;e++)if(n=Ur[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}Ur=null}return t}function nx(t,e){do{var n=Et;try{if(lh(),Dl.current=sc,rc){for(var i=ht.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}rc=!1}if(jr=0,Dt=Tt=ht=null,Io=!1,sa=0,Sh.current=null,n===null||n.return===null){wt=1,la=e,Et=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Ot,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=a,f=u.tag;if(!(u.mode&1)&&(f===0||f===11||f===15)){var d=u.alternate;d?(u.updateQueue=d.updateQueue,u.memoizedState=d.memoizedState,u.lanes=d.lanes):(u.updateQueue=null,u.memoizedState=null)}var p=om(o);if(p!==null){p.flags&=-257,am(p,o,a,s,e),p.mode&1&&sm(s,c,e),e=p,l=c;var _=e.updateQueue;if(_===null){var x=new Set;x.add(l),e.updateQueue=x}else _.add(l);break e}else{if(!(e&1)){sm(s,c,e),Ah();break e}l=Error(ne(426))}}else if(lt&&a.mode&1){var v=om(o);if(v!==null){!(v.flags&65536)&&(v.flags|=256),am(v,o,a,s,e),oh(Ys(l,a));break e}}s=l=Ys(l,a),wt!==4&&(wt=2),Oo===null?Oo=[s]:Oo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var h=B_(s,l,e);Jp(s,h);break e;case 1:a=l;var g=s.type,m=s.stateNode;if(!(s.flags&128)&&(typeof g.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(er===null||!er.has(m)))){s.flags|=65536,e&=-e,s.lanes|=e;var y=z_(s,a,e);Jp(s,y);break e}}s=s.return}while(s!==null)}sx(n)}catch(C){e=C,Et===n&&n!==null&&(Et=n=n.return);continue}break}while(!0)}function ix(){var t=oc.current;return oc.current=sc,t===null?sc:t}function Ah(){(wt===0||wt===3||wt===2)&&(wt=4),Nt===null||!(Xr&268435455)&&!(Fc&268435455)||Wi(Nt,Ot)}function cc(t,e){var n=qe;qe|=2;var i=ix();(Nt!==t||Ot!==e)&&(gi=null,Or(t,e));do try{IE();break}catch(r){nx(t,r)}while(!0);if(lh(),qe=n,oc.current=i,Et!==null)throw Error(ne(261));return Nt=null,Ot=0,wt}function IE(){for(;Et!==null;)rx(Et)}function FE(){for(;Et!==null&&!aM();)rx(Et)}function rx(t){var e=ax(t.alternate,t,_n);t.memoizedProps=t.pendingProps,e===null?sx(t):Et=e,Sh.current=null}function sx(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=RE(n,e),n!==null){n.flags&=32767,Et=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{wt=6,Et=null;return}}else if(n=bE(n,e,_n),n!==null){Et=n;return}if(e=e.sibling,e!==null){Et=e;return}Et=e=t}while(e!==null);wt===0&&(wt=5)}function wr(t,e,n){var i=Ze,r=On.transition;try{On.transition=null,Ze=1,OE(t,e,n,i)}finally{On.transition=r,Ze=i}return null}function OE(t,e,n,i){do zs();while(Xi!==null);if(qe&6)throw Error(ne(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ne(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(vM(t,s),t===Nt&&(Et=Nt=null,Ot=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ya||(Ya=!0,lx(Wl,function(){return zs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=On.transition,On.transition=null;var o=Ze;Ze=1;var a=qe;qe|=4,Sh.current=null,LE(t,n),J_(n,t),iE(Wf),Xl=!!Gf,Wf=Gf=null,t.current=n,DE(n),lM(),qe=a,Ze=o,On.transition=s}else t.current=n;if(Ya&&(Ya=!1,Xi=t,lc=r),s=t.pendingLanes,s===0&&(er=null),fM(n.stateNode),dn(t,xt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(ac)throw ac=!1,t=ud,ud=null,t;return lc&1&&t.tag!==0&&zs(),s=t.pendingLanes,s&1?t===fd?ko++:(ko=0,fd=t):ko=0,pr(),null}function zs(){if(Xi!==null){var t=B0(lc),e=On.transition,n=Ze;try{if(On.transition=null,Ze=16>t?16:t,Xi===null)var i=!1;else{if(t=Xi,Xi=null,lc=0,qe&6)throw Error(ne(331));var r=qe;for(qe|=4,he=t.current;he!==null;){var s=he,o=s.child;if(he.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(he=c;he!==null;){var u=he;switch(u.tag){case 0:case 11:case 15:Fo(8,u,s)}var f=u.child;if(f!==null)f.return=u,he=f;else for(;he!==null;){u=he;var d=u.sibling,p=u.return;if(K_(u),u===c){he=null;break}if(d!==null){d.return=p,he=d;break}he=p}}}var _=s.alternate;if(_!==null){var x=_.child;if(x!==null){_.child=null;do{var v=x.sibling;x.sibling=null,x=v}while(x!==null)}}he=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,he=o;else e:for(;he!==null;){if(s=he,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Fo(9,s,s.return)}var h=s.sibling;if(h!==null){h.return=s.return,he=h;break e}he=s.return}}var g=t.current;for(he=g;he!==null;){o=he;var m=o.child;if(o.subtreeFlags&2064&&m!==null)m.return=o,he=m;else e:for(o=g;he!==null;){if(a=he,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Ic(9,a)}}catch(C){vt(a,a.return,C)}if(a===o){he=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,he=y;break e}he=a.return}}if(qe=r,pr(),oi&&typeof oi.onPostCommitFiberRoot=="function")try{oi.onPostCommitFiberRoot(Cc,t)}catch{}i=!0}return i}finally{Ze=n,On.transition=e}}return!1}function ym(t,e,n){e=Ys(n,e),e=B_(t,e,1),t=Ji(t,e,1),e=tn(),t!==null&&(ma(t,1,e),dn(t,e))}function vt(t,e,n){if(t.tag===3)ym(t,t,n);else for(;e!==null;){if(e.tag===3){ym(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(er===null||!er.has(i))){t=Ys(n,t),t=z_(e,t,1),e=Ji(e,t,1),t=tn(),e!==null&&(ma(e,1,t),dn(e,t));break}}e=e.return}}function kE(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=tn(),t.pingedLanes|=t.suspendedLanes&n,Nt===t&&(Ot&n)===n&&(wt===4||wt===3&&(Ot&130023424)===Ot&&500>xt()-Eh?Or(t,0):Mh|=n),dn(t,e)}function ox(t,e){e===0&&(t.mode&1?(e=ka,ka<<=1,!(ka&130023424)&&(ka=4194304)):e=1);var n=tn();t=bi(t,e),t!==null&&(ma(t,e,n),dn(t,n))}function BE(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),ox(t,n)}function zE(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ne(314))}i!==null&&i.delete(e),ox(t,n)}var ax;ax=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||un.current)cn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return cn=!1,CE(t,e,n);cn=!!(t.flags&131072)}else cn=!1,lt&&e.flags&1048576&&f_(e,Jl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Ul(t,e),t=e.pendingProps;var r=Ws(e,qt.current);Bs(e,n),r=gh(null,e,i,t,r,n);var s=vh();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,fn(i)?(s=!0,Zl(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,fh(e),r.updater=Uc,e.stateNode=r,r._reactInternals=e,Jf(e,i,t,n),e=nd(null,e,i,!0,s,n)):(e.tag=0,lt&&s&&rh(e),Jt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Ul(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=HE(i),t=jn(i,t),r){case 0:e=td(null,e,i,t,n);break e;case 1:e=um(null,e,i,t,n);break e;case 11:e=lm(null,e,i,t,n);break e;case 14:e=cm(null,e,i,jn(i.type,t),n);break e}throw Error(ne(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:jn(i,r),td(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:jn(i,r),um(t,e,i,r,n);case 3:e:{if(W_(e),t===null)throw Error(ne(387));i=e.pendingProps,s=e.memoizedState,r=s.element,v_(t,e),nc(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Ys(Error(ne(423)),e),e=fm(t,e,i,n,r);break e}else if(i!==r){r=Ys(Error(ne(424)),e),e=fm(t,e,i,n,r);break e}else for(xn=Qi(e.stateNode.containerInfo.firstChild),yn=e,lt=!0,qn=null,n=m_(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(js(),i===r){e=Ri(t,e,n);break e}Jt(t,e,i,n)}e=e.child}return e;case 5:return __(e),t===null&&Kf(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,jf(i,r)?o=null:s!==null&&jf(i,s)&&(e.flags|=32),G_(t,e),Jt(t,e,o,n),e.child;case 6:return t===null&&Kf(e),null;case 13:return j_(t,e,n);case 4:return dh(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Xs(e,null,i,n):Jt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:jn(i,r),lm(t,e,i,r,n);case 7:return Jt(t,e,e.pendingProps,n),e.child;case 8:return Jt(t,e,e.pendingProps.children,n),e.child;case 12:return Jt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,it(ec,i._currentValue),i._currentValue=o,s!==null)if(ei(s.value,o)){if(s.children===r.children&&!un.current){e=Ri(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Ei(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Zf(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(ne(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Zf(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Jt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Bs(e,n),r=Bn(r),i=i(r),e.flags|=1,Jt(t,e,i,n),e.child;case 14:return i=e.type,r=jn(i,e.pendingProps),r=jn(i.type,r),cm(t,e,i,r,n);case 15:return V_(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:jn(i,r),Ul(t,e),e.tag=1,fn(i)?(t=!0,Zl(e)):t=!1,Bs(e,n),k_(e,i,r),Jf(e,i,r,n),nd(null,e,i,!0,t,n);case 19:return X_(t,e,n);case 22:return H_(t,e,n)}throw Error(ne(156,e.tag))};function lx(t,e){return I0(t,e)}function VE(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Fn(t,e,n,i){return new VE(t,e,n,i)}function Ch(t){return t=t.prototype,!(!t||!t.isReactComponent)}function HE(t){if(typeof t=="function")return Ch(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Xd)return 11;if(t===qd)return 14}return 2}function nr(t,e){var n=t.alternate;return n===null?(n=Fn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Ol(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")Ch(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case _s:return kr(n.children,r,s,e);case jd:o=8,r|=8;break;case Ef:return t=Fn(12,n,e,r|2),t.elementType=Ef,t.lanes=s,t;case Tf:return t=Fn(13,n,e,r),t.elementType=Tf,t.lanes=s,t;case wf:return t=Fn(19,n,e,r),t.elementType=wf,t.lanes=s,t;case _0:return Oc(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case g0:o=10;break e;case v0:o=9;break e;case Xd:o=11;break e;case qd:o=14;break e;case zi:o=16,i=null;break e}throw Error(ne(130,t==null?t:typeof t,""))}return e=Fn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function kr(t,e,n,i){return t=Fn(7,t,i,e),t.lanes=n,t}function Oc(t,e,n,i){return t=Fn(22,t,i,e),t.elementType=_0,t.lanes=n,t.stateNode={isHidden:!1},t}function bu(t,e,n){return t=Fn(6,t,null,e),t.lanes=n,t}function Ru(t,e,n){return e=Fn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function GE(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=cu(0),this.expirationTimes=cu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=cu(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function bh(t,e,n,i,r,s,o,a,l){return t=new GE(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Fn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},fh(s),t}function WE(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:vs,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function cx(t){if(!t)return lr;t=t._reactInternals;e:{if(Zr(t)!==t||t.tag!==1)throw Error(ne(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(fn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ne(171))}if(t.tag===1){var n=t.type;if(fn(n))return c_(t,n,e)}return e}function ux(t,e,n,i,r,s,o,a,l){return t=bh(n,i,!0,t,r,s,o,a,l),t.context=cx(null),n=t.current,i=tn(),r=tr(n),s=Ei(i,r),s.callback=e??null,Ji(n,s,r),t.current.lanes=r,ma(t,r,i),dn(t,i),t}function kc(t,e,n,i){var r=e.current,s=tn(),o=tr(r);return n=cx(n),e.context===null?e.context=n:e.pendingContext=n,e=Ei(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Ji(r,e,o),t!==null&&(Jn(t,r,o,s),Ll(t,r,o)),o}function uc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Sm(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Rh(t,e){Sm(t,e),(t=t.alternate)&&Sm(t,e)}function jE(){return null}var fx=typeof reportError=="function"?reportError:function(t){console.error(t)};function Ph(t){this._internalRoot=t}Bc.prototype.render=Ph.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ne(409));kc(t,e,null,null)};Bc.prototype.unmount=Ph.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;qr(function(){kc(null,t,null,null)}),e[Ci]=null}};function Bc(t){this._internalRoot=t}Bc.prototype.unstable_scheduleHydration=function(t){if(t){var e=H0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Gi.length&&e!==0&&e<Gi[n].priority;n++);Gi.splice(n,0,t),n===0&&W0(t)}};function Lh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function zc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Mm(){}function XE(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=uc(o);s.call(c)}}var o=ux(e,i,t,0,null,!1,!1,"",Mm);return t._reactRootContainer=o,t[Ci]=o.current,ea(t.nodeType===8?t.parentNode:t),qr(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=uc(l);a.call(c)}}var l=bh(t,0,!1,null,null,!1,!1,"",Mm);return t._reactRootContainer=l,t[Ci]=l.current,ea(t.nodeType===8?t.parentNode:t),qr(function(){kc(e,l,n,i)}),l}function Vc(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=uc(o);a.call(l)}}kc(e,o,t,r)}else o=XE(n,e,t,r,i);return uc(o)}z0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Co(e.pendingLanes);n!==0&&(Kd(e,n|1),dn(e,xt()),!(qe&6)&&($s=xt()+500,pr()))}break;case 13:qr(function(){var i=bi(t,1);if(i!==null){var r=tn();Jn(i,t,1,r)}}),Rh(t,1)}};Zd=function(t){if(t.tag===13){var e=bi(t,134217728);if(e!==null){var n=tn();Jn(e,t,134217728,n)}Rh(t,134217728)}};V0=function(t){if(t.tag===13){var e=tr(t),n=bi(t,e);if(n!==null){var i=tn();Jn(n,t,e,i)}Rh(t,e)}};H0=function(){return Ze};G0=function(t,e){var n=Ze;try{return Ze=t,e()}finally{Ze=n}};If=function(t,e,n){switch(e){case"input":if(bf(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Lc(i);if(!r)throw Error(ne(90));y0(i),bf(i,r)}}}break;case"textarea":M0(t,n);break;case"select":e=n.value,e!=null&&Is(t,!!n.multiple,e,!1)}};R0=Th;P0=qr;var qE={usingClientEntryPoint:!1,Events:[va,Ms,Lc,C0,b0,Th]},vo={findFiberByHostInstance:Nr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},YE={bundleType:vo.bundleType,version:vo.version,rendererPackageName:vo.rendererPackageName,rendererConfig:vo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Di.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=N0(t),t===null?null:t.stateNode},findFiberByHostInstance:vo.findFiberByHostInstance||jE,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var $a=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!$a.isDisabled&&$a.supportsFiber)try{Cc=$a.inject(YE),oi=$a}catch{}}Tn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=qE;Tn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Lh(e))throw Error(ne(200));return WE(t,e,null,n)};Tn.createRoot=function(t,e){if(!Lh(t))throw Error(ne(299));var n=!1,i="",r=fx;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=bh(t,1,!1,null,null,n,!1,i,r),t[Ci]=e.current,ea(t.nodeType===8?t.parentNode:t),new Ph(e)};Tn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ne(188)):(t=Object.keys(t).join(","),Error(ne(268,t)));return t=N0(e),t=t===null?null:t.stateNode,t};Tn.flushSync=function(t){return qr(t)};Tn.hydrate=function(t,e,n){if(!zc(e))throw Error(ne(200));return Vc(null,t,e,!0,n)};Tn.hydrateRoot=function(t,e,n){if(!Lh(t))throw Error(ne(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=fx;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=ux(e,null,t,1,n??null,r,!1,s,o),t[Ci]=e.current,ea(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Bc(e)};Tn.render=function(t,e,n){if(!zc(e))throw Error(ne(200));return Vc(null,t,e,!1,n)};Tn.unmountComponentAtNode=function(t){if(!zc(t))throw Error(ne(40));return t._reactRootContainer?(qr(function(){Vc(null,null,t,!1,function(){t._reactRootContainer=null,t[Ci]=null})}),!0):!1};Tn.unstable_batchedUpdates=Th;Tn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!zc(n))throw Error(ne(200));if(t==null||t._reactInternals===void 0)throw Error(ne(38));return Vc(t,e,n,!1,i)};Tn.version="18.3.1-next-f1338f8080-20240426";function dx(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(dx)}catch(t){console.error(t)}}dx(),d0.exports=Tn;var $E=d0.exports,hx,Em=$E;hx=Em.createRoot,Em.hydrateRoot;const px=J.createContext({transformPagePoint:t=>t,isStatic:!1,reducedMotion:"never"}),Hc=J.createContext({}),Gc=J.createContext(null),Wc=typeof document<"u",Dh=Wc?J.useLayoutEffect:J.useEffect,mx=J.createContext({strict:!1}),Nh=t=>t.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),KE="framerAppearId",gx="data-"+Nh(KE);function ZE(t,e,n,i){const{visualElement:r}=J.useContext(Hc),s=J.useContext(mx),o=J.useContext(Gc),a=J.useContext(px).reducedMotion,l=J.useRef();i=i||s.renderer,!l.current&&i&&(l.current=i(t,{visualState:e,parent:r,props:n,presenceContext:o,blockInitialAnimation:o?o.initial===!1:!1,reducedMotionConfig:a}));const c=l.current;J.useInsertionEffect(()=>{c&&c.update(n,o)});const u=J.useRef(!!(n[gx]&&!window.HandoffComplete));return Dh(()=>{c&&(c.render(),u.current&&c.animationState&&c.animationState.animateChanges())}),J.useEffect(()=>{c&&(c.updateFeatures(),!u.current&&c.animationState&&c.animationState.animateChanges(),u.current&&(u.current=!1,window.HandoffComplete=!0))}),c}function Rs(t){return t&&typeof t=="object"&&Object.prototype.hasOwnProperty.call(t,"current")}function QE(t,e,n){return J.useCallback(i=>{i&&t.mount&&t.mount(i),e&&(i?e.mount(i):e.unmount()),n&&(typeof n=="function"?n(i):Rs(n)&&(n.current=i))},[e])}function ca(t){return typeof t=="string"||Array.isArray(t)}function jc(t){return t!==null&&typeof t=="object"&&typeof t.start=="function"}const Uh=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Ih=["initial",...Uh];function Xc(t){return jc(t.animate)||Ih.some(e=>ca(t[e]))}function vx(t){return!!(Xc(t)||t.variants)}function JE(t,e){if(Xc(t)){const{initial:n,animate:i}=t;return{initial:n===!1||ca(n)?n:void 0,animate:ca(i)?i:void 0}}return t.inherit!==!1?e:{}}function eT(t){const{initial:e,animate:n}=JE(t,J.useContext(Hc));return J.useMemo(()=>({initial:e,animate:n}),[Tm(e),Tm(n)])}function Tm(t){return Array.isArray(t)?t.join(" "):t}const wm={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},ua={};for(const t in wm)ua[t]={isEnabled:e=>wm[t].some(n=>!!e[n])};function tT(t){for(const e in t)ua[e]={...ua[e],...t[e]}}const Fh=J.createContext({}),_x=J.createContext({}),nT=Symbol.for("motionComponentSymbol");function iT({preloadedFeatures:t,createVisualElement:e,useRender:n,useVisualState:i,Component:r}){t&&tT(t);function s(a,l){let c;const u={...J.useContext(px),...a,layoutId:rT(a)},{isStatic:f}=u,d=eT(a),p=i(a,f);if(!f&&Wc){d.visualElement=ZE(r,p,u,e);const _=J.useContext(_x),x=J.useContext(mx).strict;d.visualElement&&(c=d.visualElement.loadFeatures(u,x,t,_))}return J.createElement(Hc.Provider,{value:d},c&&d.visualElement?J.createElement(c,{visualElement:d.visualElement,...u}):null,n(r,a,QE(p,d.visualElement,l),p,f,d.visualElement))}const o=J.forwardRef(s);return o[nT]=r,o}function rT({layoutId:t}){const e=J.useContext(Fh).id;return e&&t!==void 0?e+"-"+t:t}function sT(t){function e(i,r={}){return iT(t(i,r))}if(typeof Proxy>"u")return e;const n=new Map;return new Proxy(e,{get:(i,r)=>(n.has(r)||n.set(r,e(r)),n.get(r))})}const oT=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Oh(t){return typeof t!="string"||t.includes("-")?!1:!!(oT.indexOf(t)>-1||/[A-Z]/.test(t))}const fc={};function aT(t){Object.assign(fc,t)}const xa=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Qr=new Set(xa);function xx(t,{layout:e,layoutId:n}){return Qr.has(t)||t.startsWith("origin")||(e||n!==void 0)&&(!!fc[t]||t==="opacity")}const pn=t=>!!(t&&t.getVelocity),lT={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},cT=xa.length;function uT(t,{enableHardwareAcceleration:e=!0,allowTransformNone:n=!0},i,r){let s="";for(let o=0;o<cT;o++){const a=xa[o];if(t[a]!==void 0){const l=lT[a]||a;s+=`${l}(${t[a]}) `}}return e&&!t.z&&(s+="translateZ(0)"),s=s.trim(),r?s=r(t,i?"":s):n&&i&&(s="none"),s}const yx=t=>e=>typeof e=="string"&&e.startsWith(t),Sx=yx("--"),pd=yx("var(--"),fT=/var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g,dT=(t,e)=>e&&typeof t=="number"?e.transform(t):t,cr=(t,e,n)=>Math.min(Math.max(n,t),e),Jr={test:t=>typeof t=="number",parse:parseFloat,transform:t=>t},Bo={...Jr,transform:t=>cr(0,1,t)},Ka={...Jr,default:1},zo=t=>Math.round(t*1e5)/1e5,qc=/(-)?([\d]*\.?[\d])+/g,Mx=/(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,hT=/^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;function ya(t){return typeof t=="string"}const Sa=t=>({test:e=>ya(e)&&e.endsWith(t)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${t}`}),Bi=Sa("deg"),li=Sa("%"),Te=Sa("px"),pT=Sa("vh"),mT=Sa("vw"),Am={...li,parse:t=>li.parse(t)/100,transform:t=>li.transform(t*100)},Cm={...Jr,transform:Math.round},Ex={borderWidth:Te,borderTopWidth:Te,borderRightWidth:Te,borderBottomWidth:Te,borderLeftWidth:Te,borderRadius:Te,radius:Te,borderTopLeftRadius:Te,borderTopRightRadius:Te,borderBottomRightRadius:Te,borderBottomLeftRadius:Te,width:Te,maxWidth:Te,height:Te,maxHeight:Te,size:Te,top:Te,right:Te,bottom:Te,left:Te,padding:Te,paddingTop:Te,paddingRight:Te,paddingBottom:Te,paddingLeft:Te,margin:Te,marginTop:Te,marginRight:Te,marginBottom:Te,marginLeft:Te,rotate:Bi,rotateX:Bi,rotateY:Bi,rotateZ:Bi,scale:Ka,scaleX:Ka,scaleY:Ka,scaleZ:Ka,skew:Bi,skewX:Bi,skewY:Bi,distance:Te,translateX:Te,translateY:Te,translateZ:Te,x:Te,y:Te,z:Te,perspective:Te,transformPerspective:Te,opacity:Bo,originX:Am,originY:Am,originZ:Te,zIndex:Cm,fillOpacity:Bo,strokeOpacity:Bo,numOctaves:Cm};function kh(t,e,n,i){const{style:r,vars:s,transform:o,transformOrigin:a}=t;let l=!1,c=!1,u=!0;for(const f in e){const d=e[f];if(Sx(f)){s[f]=d;continue}const p=Ex[f],_=dT(d,p);if(Qr.has(f)){if(l=!0,o[f]=_,!u)continue;d!==(p.default||0)&&(u=!1)}else f.startsWith("origin")?(c=!0,a[f]=_):r[f]=_}if(e.transform||(l||i?r.transform=uT(t.transform,n,u,i):r.transform&&(r.transform="none")),c){const{originX:f="50%",originY:d="50%",originZ:p=0}=a;r.transformOrigin=`${f} ${d} ${p}`}}const Bh=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function Tx(t,e,n){for(const i in e)!pn(e[i])&&!xx(i,n)&&(t[i]=e[i])}function gT({transformTemplate:t},e,n){return J.useMemo(()=>{const i=Bh();return kh(i,e,{enableHardwareAcceleration:!n},t),Object.assign({},i.vars,i.style)},[e])}function vT(t,e,n){const i=t.style||{},r={};return Tx(r,i,t),Object.assign(r,gT(t,e,n)),t.transformValues?t.transformValues(r):r}function _T(t,e,n){const i={},r=vT(t,e,n);return t.drag&&t.dragListener!==!1&&(i.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout="none",r.touchAction=t.drag===!0?"none":`pan-${t.drag==="x"?"y":"x"}`),t.tabIndex===void 0&&(t.onTap||t.onTapStart||t.whileTap)&&(i.tabIndex=0),i.style=r,i}const xT=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","transformValues","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function dc(t){return t.startsWith("while")||t.startsWith("drag")&&t!=="draggable"||t.startsWith("layout")||t.startsWith("onTap")||t.startsWith("onPan")||t.startsWith("onLayout")||xT.has(t)}let wx=t=>!dc(t);function yT(t){t&&(wx=e=>e.startsWith("on")?!dc(e):t(e))}try{yT(require("@emotion/is-prop-valid").default)}catch{}function ST(t,e,n){const i={};for(const r in t)r==="values"&&typeof t.values=="object"||(wx(r)||n===!0&&dc(r)||!e&&!dc(r)||t.draggable&&r.startsWith("onDrag"))&&(i[r]=t[r]);return i}function bm(t,e,n){return typeof t=="string"?t:Te.transform(e+n*t)}function MT(t,e,n){const i=bm(e,t.x,t.width),r=bm(n,t.y,t.height);return`${i} ${r}`}const ET={offset:"stroke-dashoffset",array:"stroke-dasharray"},TT={offset:"strokeDashoffset",array:"strokeDasharray"};function wT(t,e,n=1,i=0,r=!0){t.pathLength=1;const s=r?ET:TT;t[s.offset]=Te.transform(-i);const o=Te.transform(e),a=Te.transform(n);t[s.array]=`${o} ${a}`}function zh(t,{attrX:e,attrY:n,attrScale:i,originX:r,originY:s,pathLength:o,pathSpacing:a=1,pathOffset:l=0,...c},u,f,d){if(kh(t,c,u,d),f){t.style.viewBox&&(t.attrs.viewBox=t.style.viewBox);return}t.attrs=t.style,t.style={};const{attrs:p,style:_,dimensions:x}=t;p.transform&&(x&&(_.transform=p.transform),delete p.transform),x&&(r!==void 0||s!==void 0||_.transform)&&(_.transformOrigin=MT(x,r!==void 0?r:.5,s!==void 0?s:.5)),e!==void 0&&(p.x=e),n!==void 0&&(p.y=n),i!==void 0&&(p.scale=i),o!==void 0&&wT(p,o,a,l,!1)}const Ax=()=>({...Bh(),attrs:{}}),Vh=t=>typeof t=="string"&&t.toLowerCase()==="svg";function AT(t,e,n,i){const r=J.useMemo(()=>{const s=Ax();return zh(s,e,{enableHardwareAcceleration:!1},Vh(i),t.transformTemplate),{...s.attrs,style:{...s.style}}},[e]);if(t.style){const s={};Tx(s,t.style,t),r.style={...s,...r.style}}return r}function CT(t=!1){return(n,i,r,{latestValues:s},o)=>{const l=(Oh(n)?AT:_T)(i,s,o,n),u={...ST(i,typeof n=="string",t),...l,ref:r},{children:f}=i,d=J.useMemo(()=>pn(f)?f.get():f,[f]);return J.createElement(n,{...u,children:d})}}function Cx(t,{style:e,vars:n},i,r){Object.assign(t.style,e,r&&r.getProjectionStyles(i));for(const s in n)t.style.setProperty(s,n[s])}const bx=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function Rx(t,e,n,i){Cx(t,e,void 0,i);for(const r in e.attrs)t.setAttribute(bx.has(r)?r:Nh(r),e.attrs[r])}function Hh(t,e){const{style:n}=t,i={};for(const r in n)(pn(n[r])||e.style&&pn(e.style[r])||xx(r,t))&&(i[r]=n[r]);return i}function Px(t,e){const n=Hh(t,e);for(const i in t)if(pn(t[i])||pn(e[i])){const r=xa.indexOf(i)!==-1?"attr"+i.charAt(0).toUpperCase()+i.substring(1):i;n[r]=t[i]}return n}function Gh(t,e,n,i={},r={}){return typeof e=="function"&&(e=e(n!==void 0?n:t.custom,i,r)),typeof e=="string"&&(e=t.variants&&t.variants[e]),typeof e=="function"&&(e=e(n!==void 0?n:t.custom,i,r)),e}function Lx(t){const e=J.useRef(null);return e.current===null&&(e.current=t()),e.current}const hc=t=>Array.isArray(t),bT=t=>!!(t&&typeof t=="object"&&t.mix&&t.toValue),RT=t=>hc(t)?t[t.length-1]||0:t;function kl(t){const e=pn(t)?t.get():t;return bT(e)?e.toValue():e}function PT({scrapeMotionValuesFromProps:t,createRenderState:e,onMount:n},i,r,s){const o={latestValues:LT(i,r,s,t),renderState:e()};return n&&(o.mount=a=>n(i,a,o)),o}const Dx=t=>(e,n)=>{const i=J.useContext(Hc),r=J.useContext(Gc),s=()=>PT(t,e,i,r);return n?s():Lx(s)};function LT(t,e,n,i){const r={},s=i(t,{});for(const d in s)r[d]=kl(s[d]);let{initial:o,animate:a}=t;const l=Xc(t),c=vx(t);e&&c&&!l&&t.inherit!==!1&&(o===void 0&&(o=e.initial),a===void 0&&(a=e.animate));let u=n?n.initial===!1:!1;u=u||o===!1;const f=u?a:o;return f&&typeof f!="boolean"&&!jc(f)&&(Array.isArray(f)?f:[f]).forEach(p=>{const _=Gh(t,p);if(!_)return;const{transitionEnd:x,transition:v,...h}=_;for(const g in h){let m=h[g];if(Array.isArray(m)){const y=u?m.length-1:0;m=m[y]}m!==null&&(r[g]=m)}for(const g in x)r[g]=x[g]}),r}const yt=t=>t;class Rm{constructor(){this.order=[],this.scheduled=new Set}add(e){if(!this.scheduled.has(e))return this.scheduled.add(e),this.order.push(e),!0}remove(e){const n=this.order.indexOf(e);n!==-1&&(this.order.splice(n,1),this.scheduled.delete(e))}clear(){this.order.length=0,this.scheduled.clear()}}function DT(t){let e=new Rm,n=new Rm,i=0,r=!1,s=!1;const o=new WeakSet,a={schedule:(l,c=!1,u=!1)=>{const f=u&&r,d=f?e:n;return c&&o.add(l),d.add(l)&&f&&r&&(i=e.order.length),l},cancel:l=>{n.remove(l),o.delete(l)},process:l=>{if(r){s=!0;return}if(r=!0,[e,n]=[n,e],n.clear(),i=e.order.length,i)for(let c=0;c<i;c++){const u=e.order[c];u(l),o.has(u)&&(a.schedule(u),t())}r=!1,s&&(s=!1,a.process(l))}};return a}const Za=["prepare","read","update","preRender","render","postRender"],NT=40;function UT(t,e){let n=!1,i=!0;const r={delta:0,timestamp:0,isProcessing:!1},s=Za.reduce((f,d)=>(f[d]=DT(()=>n=!0),f),{}),o=f=>s[f].process(r),a=()=>{const f=performance.now();n=!1,r.delta=i?1e3/60:Math.max(Math.min(f-r.timestamp,NT),1),r.timestamp=f,r.isProcessing=!0,Za.forEach(o),r.isProcessing=!1,n&&e&&(i=!1,t(a))},l=()=>{n=!0,i=!0,r.isProcessing||t(a)};return{schedule:Za.reduce((f,d)=>{const p=s[d];return f[d]=(_,x=!1,v=!1)=>(n||l(),p.schedule(_,x,v)),f},{}),cancel:f=>Za.forEach(d=>s[d].cancel(f)),state:r,steps:s}}const{schedule:rt,cancel:Pi,state:jt,steps:Pu}=UT(typeof requestAnimationFrame<"u"?requestAnimationFrame:yt,!0),IT={useVisualState:Dx({scrapeMotionValuesFromProps:Px,createRenderState:Ax,onMount:(t,e,{renderState:n,latestValues:i})=>{rt.read(()=>{try{n.dimensions=typeof e.getBBox=="function"?e.getBBox():e.getBoundingClientRect()}catch{n.dimensions={x:0,y:0,width:0,height:0}}}),rt.render(()=>{zh(n,i,{enableHardwareAcceleration:!1},Vh(e.tagName),t.transformTemplate),Rx(e,n)})}})},FT={useVisualState:Dx({scrapeMotionValuesFromProps:Hh,createRenderState:Bh})};function OT(t,{forwardMotionProps:e=!1},n,i){return{...Oh(t)?IT:FT,preloadedFeatures:n,useRender:CT(e),createVisualElement:i,Component:t}}function Si(t,e,n,i={passive:!0}){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n)}const Nx=t=>t.pointerType==="mouse"?typeof t.button!="number"||t.button<=0:t.isPrimary!==!1;function Yc(t,e="page"){return{point:{x:t[e+"X"],y:t[e+"Y"]}}}const kT=t=>e=>Nx(e)&&t(e,Yc(e));function Ti(t,e,n,i){return Si(t,e,kT(n),i)}const BT=(t,e)=>n=>e(t(n)),ir=(...t)=>t.reduce(BT);function Ux(t){let e=null;return()=>{const n=()=>{e=null};return e===null?(e=t,n):!1}}const Pm=Ux("dragHorizontal"),Lm=Ux("dragVertical");function Ix(t){let e=!1;if(t==="y")e=Lm();else if(t==="x")e=Pm();else{const n=Pm(),i=Lm();n&&i?e=()=>{n(),i()}:(n&&n(),i&&i())}return e}function Fx(){const t=Ix(!0);return t?(t(),!1):!0}class mr{constructor(e){this.isMounted=!1,this.node=e}update(){}}function Dm(t,e){const n="pointer"+(e?"enter":"leave"),i="onHover"+(e?"Start":"End"),r=(s,o)=>{if(s.pointerType==="touch"||Fx())return;const a=t.getProps();t.animationState&&a.whileHover&&t.animationState.setActive("whileHover",e),a[i]&&rt.update(()=>a[i](s,o))};return Ti(t.current,n,r,{passive:!t.getProps()[i]})}class zT extends mr{mount(){this.unmount=ir(Dm(this.node,!0),Dm(this.node,!1))}unmount(){}}class VT extends mr{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=ir(Si(this.node.current,"focus",()=>this.onFocus()),Si(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}const Ox=(t,e)=>e?t===e?!0:Ox(t,e.parentElement):!1;function Lu(t,e){if(!e)return;const n=new PointerEvent("pointer"+t);e(n,Yc(n))}class HT extends mr{constructor(){super(...arguments),this.removeStartListeners=yt,this.removeEndListeners=yt,this.removeAccessibleListeners=yt,this.startPointerPress=(e,n)=>{if(this.isPressing)return;this.removeEndListeners();const i=this.node.getProps(),s=Ti(window,"pointerup",(a,l)=>{if(!this.checkPressEnd())return;const{onTap:c,onTapCancel:u,globalTapTarget:f}=this.node.getProps();rt.update(()=>{!f&&!Ox(this.node.current,a.target)?u&&u(a,l):c&&c(a,l)})},{passive:!(i.onTap||i.onPointerUp)}),o=Ti(window,"pointercancel",(a,l)=>this.cancelPress(a,l),{passive:!(i.onTapCancel||i.onPointerCancel)});this.removeEndListeners=ir(s,o),this.startPress(e,n)},this.startAccessiblePress=()=>{const e=s=>{if(s.key!=="Enter"||this.isPressing)return;const o=a=>{a.key!=="Enter"||!this.checkPressEnd()||Lu("up",(l,c)=>{const{onTap:u}=this.node.getProps();u&&rt.update(()=>u(l,c))})};this.removeEndListeners(),this.removeEndListeners=Si(this.node.current,"keyup",o),Lu("down",(a,l)=>{this.startPress(a,l)})},n=Si(this.node.current,"keydown",e),i=()=>{this.isPressing&&Lu("cancel",(s,o)=>this.cancelPress(s,o))},r=Si(this.node.current,"blur",i);this.removeAccessibleListeners=ir(n,r)}}startPress(e,n){this.isPressing=!0;const{onTapStart:i,whileTap:r}=this.node.getProps();r&&this.node.animationState&&this.node.animationState.setActive("whileTap",!0),i&&rt.update(()=>i(e,n))}checkPressEnd(){return this.removeEndListeners(),this.isPressing=!1,this.node.getProps().whileTap&&this.node.animationState&&this.node.animationState.setActive("whileTap",!1),!Fx()}cancelPress(e,n){if(!this.checkPressEnd())return;const{onTapCancel:i}=this.node.getProps();i&&rt.update(()=>i(e,n))}mount(){const e=this.node.getProps(),n=Ti(e.globalTapTarget?window:this.node.current,"pointerdown",this.startPointerPress,{passive:!(e.onTapStart||e.onPointerStart)}),i=Si(this.node.current,"focus",this.startAccessiblePress);this.removeStartListeners=ir(n,i)}unmount(){this.removeStartListeners(),this.removeEndListeners(),this.removeAccessibleListeners()}}const md=new WeakMap,Du=new WeakMap,GT=t=>{const e=md.get(t.target);e&&e(t)},WT=t=>{t.forEach(GT)};function jT({root:t,...e}){const n=t||document;Du.has(n)||Du.set(n,{});const i=Du.get(n),r=JSON.stringify(e);return i[r]||(i[r]=new IntersectionObserver(WT,{root:t,...e})),i[r]}function XT(t,e,n){const i=jT(e);return md.set(t,n),i.observe(t),()=>{md.delete(t),i.unobserve(t)}}const qT={some:0,all:1};class YT extends mr{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:e={}}=this.node.getProps(),{root:n,margin:i,amount:r="some",once:s}=e,o={root:n?n.current:void 0,rootMargin:i,threshold:typeof r=="number"?r:qT[r]},a=l=>{const{isIntersecting:c}=l;if(this.isInView===c||(this.isInView=c,s&&!c&&this.hasEnteredView))return;c&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",c);const{onViewportEnter:u,onViewportLeave:f}=this.node.getProps(),d=c?u:f;d&&d(l)};return XT(this.node.current,o,a)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:e,prevProps:n}=this.node;["amount","margin","root"].some($T(e,n))&&this.startObserver()}unmount(){}}function $T({viewport:t={}},{viewport:e={}}={}){return n=>t[n]!==e[n]}const KT={inView:{Feature:YT},tap:{Feature:HT},focus:{Feature:VT},hover:{Feature:zT}};function kx(t,e){if(!Array.isArray(e))return!1;const n=e.length;if(n!==t.length)return!1;for(let i=0;i<n;i++)if(e[i]!==t[i])return!1;return!0}function ZT(t){const e={};return t.values.forEach((n,i)=>e[i]=n.get()),e}function QT(t){const e={};return t.values.forEach((n,i)=>e[i]=n.getVelocity()),e}function $c(t,e,n){const i=t.getProps();return Gh(i,e,n!==void 0?n:i.custom,ZT(t),QT(t))}let Wh=yt;const Br=t=>t*1e3,wi=t=>t/1e3,JT={current:!1},Bx=t=>Array.isArray(t)&&typeof t[0]=="number";function zx(t){return!!(!t||typeof t=="string"&&Vx[t]||Bx(t)||Array.isArray(t)&&t.every(zx))}const Ro=([t,e,n,i])=>`cubic-bezier(${t}, ${e}, ${n}, ${i})`,Vx={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Ro([0,.65,.55,1]),circOut:Ro([.55,0,1,.45]),backIn:Ro([.31,.01,.66,-.59]),backOut:Ro([.33,1.53,.69,.99])};function Hx(t){if(t)return Bx(t)?Ro(t):Array.isArray(t)?t.map(Hx):Vx[t]}function e1(t,e,n,{delay:i=0,duration:r,repeat:s=0,repeatType:o="loop",ease:a,times:l}={}){const c={[e]:n};l&&(c.offset=l);const u=Hx(a);return Array.isArray(u)&&(c.easing=u),t.animate(c,{delay:i,duration:r,easing:Array.isArray(u)?"linear":u,fill:"both",iterations:s+1,direction:o==="reverse"?"alternate":"normal"})}function t1(t,{repeat:e,repeatType:n="loop"}){const i=e&&n!=="loop"&&e%2===1?0:t.length-1;return t[i]}const Gx=(t,e,n)=>(((1-3*n+3*e)*t+(3*n-6*e))*t+3*e)*t,n1=1e-7,i1=12;function r1(t,e,n,i,r){let s,o,a=0;do o=e+(n-e)/2,s=Gx(o,i,r)-t,s>0?n=o:e=o;while(Math.abs(s)>n1&&++a<i1);return o}function Ma(t,e,n,i){if(t===e&&n===i)return yt;const r=s=>r1(s,0,1,t,n);return s=>s===0||s===1?s:Gx(r(s),e,i)}const s1=Ma(.42,0,1,1),o1=Ma(0,0,.58,1),Wx=Ma(.42,0,.58,1),a1=t=>Array.isArray(t)&&typeof t[0]!="number",jx=t=>e=>e<=.5?t(2*e)/2:(2-t(2*(1-e)))/2,Xx=t=>e=>1-t(1-e),jh=t=>1-Math.sin(Math.acos(t)),qx=Xx(jh),l1=jx(jh),Yx=Ma(.33,1.53,.69,.99),Xh=Xx(Yx),c1=jx(Xh),u1=t=>(t*=2)<1?.5*Xh(t):.5*(2-Math.pow(2,-10*(t-1))),f1={linear:yt,easeIn:s1,easeInOut:Wx,easeOut:o1,circIn:jh,circInOut:l1,circOut:qx,backIn:Xh,backInOut:c1,backOut:Yx,anticipate:u1},Nm=t=>{if(Array.isArray(t)){Wh(t.length===4);const[e,n,i,r]=t;return Ma(e,n,i,r)}else if(typeof t=="string")return f1[t];return t},qh=(t,e)=>n=>!!(ya(n)&&hT.test(n)&&n.startsWith(t)||e&&Object.prototype.hasOwnProperty.call(n,e)),$x=(t,e,n)=>i=>{if(!ya(i))return i;const[r,s,o,a]=i.match(qc);return{[t]:parseFloat(r),[e]:parseFloat(s),[n]:parseFloat(o),alpha:a!==void 0?parseFloat(a):1}},d1=t=>cr(0,255,t),Nu={...Jr,transform:t=>Math.round(d1(t))},Fr={test:qh("rgb","red"),parse:$x("red","green","blue"),transform:({red:t,green:e,blue:n,alpha:i=1})=>"rgba("+Nu.transform(t)+", "+Nu.transform(e)+", "+Nu.transform(n)+", "+zo(Bo.transform(i))+")"};function h1(t){let e="",n="",i="",r="";return t.length>5?(e=t.substring(1,3),n=t.substring(3,5),i=t.substring(5,7),r=t.substring(7,9)):(e=t.substring(1,2),n=t.substring(2,3),i=t.substring(3,4),r=t.substring(4,5),e+=e,n+=n,i+=i,r+=r),{red:parseInt(e,16),green:parseInt(n,16),blue:parseInt(i,16),alpha:r?parseInt(r,16)/255:1}}const gd={test:qh("#"),parse:h1,transform:Fr.transform},Ps={test:qh("hsl","hue"),parse:$x("hue","saturation","lightness"),transform:({hue:t,saturation:e,lightness:n,alpha:i=1})=>"hsla("+Math.round(t)+", "+li.transform(zo(e))+", "+li.transform(zo(n))+", "+zo(Bo.transform(i))+")"},Qt={test:t=>Fr.test(t)||gd.test(t)||Ps.test(t),parse:t=>Fr.test(t)?Fr.parse(t):Ps.test(t)?Ps.parse(t):gd.parse(t),transform:t=>ya(t)?t:t.hasOwnProperty("red")?Fr.transform(t):Ps.transform(t)},dt=(t,e,n)=>-n*t+n*e+t;function Uu(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*(2/3-n)*6:t}function p1({hue:t,saturation:e,lightness:n,alpha:i}){t/=360,e/=100,n/=100;let r=0,s=0,o=0;if(!e)r=s=o=n;else{const a=n<.5?n*(1+e):n+e-n*e,l=2*n-a;r=Uu(l,a,t+1/3),s=Uu(l,a,t),o=Uu(l,a,t-1/3)}return{red:Math.round(r*255),green:Math.round(s*255),blue:Math.round(o*255),alpha:i}}const Iu=(t,e,n)=>{const i=t*t;return Math.sqrt(Math.max(0,n*(e*e-i)+i))},m1=[gd,Fr,Ps],g1=t=>m1.find(e=>e.test(t));function Um(t){const e=g1(t);let n=e.parse(t);return e===Ps&&(n=p1(n)),n}const Kx=(t,e)=>{const n=Um(t),i=Um(e),r={...n};return s=>(r.red=Iu(n.red,i.red,s),r.green=Iu(n.green,i.green,s),r.blue=Iu(n.blue,i.blue,s),r.alpha=dt(n.alpha,i.alpha,s),Fr.transform(r))};function v1(t){var e,n;return isNaN(t)&&ya(t)&&(((e=t.match(qc))===null||e===void 0?void 0:e.length)||0)+(((n=t.match(Mx))===null||n===void 0?void 0:n.length)||0)>0}const Zx={regex:fT,countKey:"Vars",token:"${v}",parse:yt},Qx={regex:Mx,countKey:"Colors",token:"${c}",parse:Qt.parse},Jx={regex:qc,countKey:"Numbers",token:"${n}",parse:Jr.parse};function Fu(t,{regex:e,countKey:n,token:i,parse:r}){const s=t.tokenised.match(e);s&&(t["num"+n]=s.length,t.tokenised=t.tokenised.replace(e,i),t.values.push(...s.map(r)))}function pc(t){const e=t.toString(),n={value:e,tokenised:e,values:[],numVars:0,numColors:0,numNumbers:0};return n.value.includes("var(--")&&Fu(n,Zx),Fu(n,Qx),Fu(n,Jx),n}function ey(t){return pc(t).values}function ty(t){const{values:e,numColors:n,numVars:i,tokenised:r}=pc(t),s=e.length;return o=>{let a=r;for(let l=0;l<s;l++)l<i?a=a.replace(Zx.token,o[l]):l<i+n?a=a.replace(Qx.token,Qt.transform(o[l])):a=a.replace(Jx.token,zo(o[l]));return a}}const _1=t=>typeof t=="number"?0:t;function x1(t){const e=ey(t);return ty(t)(e.map(_1))}const ur={test:v1,parse:ey,createTransformer:ty,getAnimatableNone:x1},ny=(t,e)=>n=>`${n>0?e:t}`;function iy(t,e){return typeof t=="number"?n=>dt(t,e,n):Qt.test(t)?Kx(t,e):t.startsWith("var(")?ny(t,e):sy(t,e)}const ry=(t,e)=>{const n=[...t],i=n.length,r=t.map((s,o)=>iy(s,e[o]));return s=>{for(let o=0;o<i;o++)n[o]=r[o](s);return n}},y1=(t,e)=>{const n={...t,...e},i={};for(const r in n)t[r]!==void 0&&e[r]!==void 0&&(i[r]=iy(t[r],e[r]));return r=>{for(const s in i)n[s]=i[s](r);return n}},sy=(t,e)=>{const n=ur.createTransformer(e),i=pc(t),r=pc(e);return i.numVars===r.numVars&&i.numColors===r.numColors&&i.numNumbers>=r.numNumbers?ir(ry(i.values,r.values),n):ny(t,e)},fa=(t,e,n)=>{const i=e-t;return i===0?1:(n-t)/i},Im=(t,e)=>n=>dt(t,e,n);function S1(t){return typeof t=="number"?Im:typeof t=="string"?Qt.test(t)?Kx:sy:Array.isArray(t)?ry:typeof t=="object"?y1:Im}function M1(t,e,n){const i=[],r=n||S1(t[0]),s=t.length-1;for(let o=0;o<s;o++){let a=r(t[o],t[o+1]);if(e){const l=Array.isArray(e)?e[o]||yt:e;a=ir(l,a)}i.push(a)}return i}function oy(t,e,{clamp:n=!0,ease:i,mixer:r}={}){const s=t.length;if(Wh(s===e.length),s===1)return()=>e[0];t[0]>t[s-1]&&(t=[...t].reverse(),e=[...e].reverse());const o=M1(e,i,r),a=o.length,l=c=>{let u=0;if(a>1)for(;u<t.length-2&&!(c<t[u+1]);u++);const f=fa(t[u],t[u+1],c);return o[u](f)};return n?c=>l(cr(t[0],t[s-1],c)):l}function E1(t,e){const n=t[t.length-1];for(let i=1;i<=e;i++){const r=fa(0,e,i);t.push(dt(n,1,r))}}function T1(t){const e=[0];return E1(e,t.length-1),e}function w1(t,e){return t.map(n=>n*e)}function A1(t,e){return t.map(()=>e||Wx).splice(0,t.length-1)}function mc({duration:t=300,keyframes:e,times:n,ease:i="easeInOut"}){const r=a1(i)?i.map(Nm):Nm(i),s={done:!1,value:e[0]},o=w1(n&&n.length===e.length?n:T1(e),t),a=oy(o,e,{ease:Array.isArray(r)?r:A1(e,r)});return{calculatedDuration:t,next:l=>(s.value=a(l),s.done=l>=t,s)}}function ay(t,e){return e?t*(1e3/e):0}const C1=5;function ly(t,e,n){const i=Math.max(e-C1,0);return ay(n-t(i),e-i)}const Ou=.001,b1=.01,R1=10,P1=.05,L1=1;function D1({duration:t=800,bounce:e=.25,velocity:n=0,mass:i=1}){let r,s,o=1-e;o=cr(P1,L1,o),t=cr(b1,R1,wi(t)),o<1?(r=c=>{const u=c*o,f=u*t,d=u-n,p=vd(c,o),_=Math.exp(-f);return Ou-d/p*_},s=c=>{const f=c*o*t,d=f*n+n,p=Math.pow(o,2)*Math.pow(c,2)*t,_=Math.exp(-f),x=vd(Math.pow(c,2),o);return(-r(c)+Ou>0?-1:1)*((d-p)*_)/x}):(r=c=>{const u=Math.exp(-c*t),f=(c-n)*t+1;return-Ou+u*f},s=c=>{const u=Math.exp(-c*t),f=(n-c)*(t*t);return u*f});const a=5/t,l=U1(r,s,a);if(t=Br(t),isNaN(l))return{stiffness:100,damping:10,duration:t};{const c=Math.pow(l,2)*i;return{stiffness:c,damping:o*2*Math.sqrt(i*c),duration:t}}}const N1=12;function U1(t,e,n){let i=n;for(let r=1;r<N1;r++)i=i-t(i)/e(i);return i}function vd(t,e){return t*Math.sqrt(1-e*e)}const I1=["duration","bounce"],F1=["stiffness","damping","mass"];function Fm(t,e){return e.some(n=>t[n]!==void 0)}function O1(t){let e={velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1,...t};if(!Fm(t,F1)&&Fm(t,I1)){const n=D1(t);e={...e,...n,mass:1},e.isResolvedFromDuration=!0}return e}function cy({keyframes:t,restDelta:e,restSpeed:n,...i}){const r=t[0],s=t[t.length-1],o={done:!1,value:r},{stiffness:a,damping:l,mass:c,duration:u,velocity:f,isResolvedFromDuration:d}=O1({...i,velocity:-wi(i.velocity||0)}),p=f||0,_=l/(2*Math.sqrt(a*c)),x=s-r,v=wi(Math.sqrt(a/c)),h=Math.abs(x)<5;n||(n=h?.01:2),e||(e=h?.005:.5);let g;if(_<1){const m=vd(v,_);g=y=>{const C=Math.exp(-_*v*y);return s-C*((p+_*v*x)/m*Math.sin(m*y)+x*Math.cos(m*y))}}else if(_===1)g=m=>s-Math.exp(-v*m)*(x+(p+v*x)*m);else{const m=v*Math.sqrt(_*_-1);g=y=>{const C=Math.exp(-_*v*y),T=Math.min(m*y,300);return s-C*((p+_*v*x)*Math.sinh(T)+m*x*Math.cosh(T))/m}}return{calculatedDuration:d&&u||null,next:m=>{const y=g(m);if(d)o.done=m>=u;else{let C=p;m!==0&&(_<1?C=ly(g,m,y):C=0);const T=Math.abs(C)<=n,w=Math.abs(s-y)<=e;o.done=T&&w}return o.value=o.done?s:y,o}}}function Om({keyframes:t,velocity:e=0,power:n=.8,timeConstant:i=325,bounceDamping:r=10,bounceStiffness:s=500,modifyTarget:o,min:a,max:l,restDelta:c=.5,restSpeed:u}){const f=t[0],d={done:!1,value:f},p=P=>a!==void 0&&P<a||l!==void 0&&P>l,_=P=>a===void 0?l:l===void 0||Math.abs(a-P)<Math.abs(l-P)?a:l;let x=n*e;const v=f+x,h=o===void 0?v:o(v);h!==v&&(x=h-f);const g=P=>-x*Math.exp(-P/i),m=P=>h+g(P),y=P=>{const S=g(P),E=m(P);d.done=Math.abs(S)<=c,d.value=d.done?h:E};let C,T;const w=P=>{p(d.value)&&(C=P,T=cy({keyframes:[d.value,_(d.value)],velocity:ly(m,P,d.value),damping:r,stiffness:s,restDelta:c,restSpeed:u}))};return w(0),{calculatedDuration:null,next:P=>{let S=!1;return!T&&C===void 0&&(S=!0,y(P),w(P)),C!==void 0&&P>C?T.next(P-C):(!S&&y(P),d)}}}const k1=t=>{const e=({timestamp:n})=>t(n);return{start:()=>rt.update(e,!0),stop:()=>Pi(e),now:()=>jt.isProcessing?jt.timestamp:performance.now()}},km=2e4;function Bm(t){let e=0;const n=50;let i=t.next(e);for(;!i.done&&e<km;)e+=n,i=t.next(e);return e>=km?1/0:e}const B1={decay:Om,inertia:Om,tween:mc,keyframes:mc,spring:cy};function gc({autoplay:t=!0,delay:e=0,driver:n=k1,keyframes:i,type:r="keyframes",repeat:s=0,repeatDelay:o=0,repeatType:a="loop",onPlay:l,onStop:c,onComplete:u,onUpdate:f,...d}){let p=1,_=!1,x,v;const h=()=>{v=new Promise(Y=>{x=Y})};h();let g;const m=B1[r]||mc;let y;m!==mc&&typeof i[0]!="number"&&(y=oy([0,100],i,{clamp:!1}),i=[0,100]);const C=m({...d,keyframes:i});let T;a==="mirror"&&(T=m({...d,keyframes:[...i].reverse(),velocity:-(d.velocity||0)}));let w="idle",P=null,S=null,E=null;C.calculatedDuration===null&&s&&(C.calculatedDuration=Bm(C));const{calculatedDuration:U}=C;let j=1/0,Q=1/0;U!==null&&(j=U+o,Q=j*(s+1)-o);let L=0;const B=Y=>{if(S===null)return;p>0&&(S=Math.min(S,Y)),p<0&&(S=Math.min(Y-Q/p,S)),P!==null?L=P:L=Math.round(Y-S)*p;const Z=L-e*(p>=0?1:-1),q=p>=0?Z<0:Z>Q;L=Math.max(Z,0),w==="finished"&&P===null&&(L=Q);let K=L,ae=C;if(s){const Re=Math.min(L,Q)/j;let ye=Math.floor(Re),Ie=Re%1;!Ie&&Re>=1&&(Ie=1),Ie===1&&ye--,ye=Math.min(ye,s+1),!!(ye%2)&&(a==="reverse"?(Ie=1-Ie,o&&(Ie-=o/j)):a==="mirror"&&(ae=T)),K=cr(0,1,Ie)*j}const fe=q?{done:!1,value:i[0]}:ae.next(K);y&&(fe.value=y(fe.value));let{done:pe}=fe;!q&&U!==null&&(pe=p>=0?L>=Q:L<=0);const Le=P===null&&(w==="finished"||w==="running"&&pe);return f&&f(fe.value),Le&&N(),fe},W=()=>{g&&g.stop(),g=void 0},$=()=>{w="idle",W(),x(),h(),S=E=null},N=()=>{w="finished",u&&u(),W(),x()},O=()=>{if(_)return;g||(g=n(B));const Y=g.now();l&&l(),P!==null?S=Y-P:(!S||w==="finished")&&(S=Y),w==="finished"&&h(),E=S,P=null,w="running",g.start()};t&&O();const V={then(Y,Z){return v.then(Y,Z)},get time(){return wi(L)},set time(Y){Y=Br(Y),L=Y,P!==null||!g||p===0?P=Y:S=g.now()-Y/p},get duration(){const Y=C.calculatedDuration===null?Bm(C):C.calculatedDuration;return wi(Y)},get speed(){return p},set speed(Y){Y===p||!g||(p=Y,V.time=wi(L))},get state(){return w},play:O,pause:()=>{w="paused",P=L},stop:()=>{_=!0,w!=="idle"&&(w="idle",c&&c(),$())},cancel:()=>{E!==null&&B(E),$()},complete:()=>{w="finished"},sample:Y=>(S=0,B(Y))};return V}function z1(t){let e;return()=>(e===void 0&&(e=t()),e)}const V1=z1(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),H1=new Set(["opacity","clipPath","filter","transform","backgroundColor"]),Qa=10,G1=2e4,W1=(t,e)=>e.type==="spring"||t==="backgroundColor"||!zx(e.ease);function j1(t,e,{onUpdate:n,onComplete:i,...r}){if(!(V1()&&H1.has(e)&&!r.repeatDelay&&r.repeatType!=="mirror"&&r.damping!==0&&r.type!=="inertia"))return!1;let o=!1,a,l,c=!1;const u=()=>{l=new Promise(m=>{a=m})};u();let{keyframes:f,duration:d=300,ease:p,times:_}=r;if(W1(e,r)){const m=gc({...r,repeat:0,delay:0});let y={done:!1,value:f[0]};const C=[];let T=0;for(;!y.done&&T<G1;)y=m.sample(T),C.push(y.value),T+=Qa;_=void 0,f=C,d=T-Qa,p="linear"}const x=e1(t.owner.current,e,f,{...r,duration:d,ease:p,times:_}),v=()=>{c=!1,x.cancel()},h=()=>{c=!0,rt.update(v),a(),u()};return x.onfinish=()=>{c||(t.set(t1(f,r)),i&&i(),h())},{then(m,y){return l.then(m,y)},attachTimeline(m){return x.timeline=m,x.onfinish=null,yt},get time(){return wi(x.currentTime||0)},set time(m){x.currentTime=Br(m)},get speed(){return x.playbackRate},set speed(m){x.playbackRate=m},get duration(){return wi(d)},play:()=>{o||(x.play(),Pi(v))},pause:()=>x.pause(),stop:()=>{if(o=!0,x.playState==="idle")return;const{currentTime:m}=x;if(m){const y=gc({...r,autoplay:!1});t.setWithVelocity(y.sample(m-Qa).value,y.sample(m).value,Qa)}h()},complete:()=>{c||x.finish()},cancel:h}}function X1({keyframes:t,delay:e,onUpdate:n,onComplete:i}){const r=()=>(n&&n(t[t.length-1]),i&&i(),{time:0,speed:1,duration:0,play:yt,pause:yt,stop:yt,then:s=>(s(),Promise.resolve()),cancel:yt,complete:yt});return e?gc({keyframes:[0,1],duration:0,delay:e,onComplete:r}):r()}const q1={type:"spring",stiffness:500,damping:25,restSpeed:10},Y1=t=>({type:"spring",stiffness:550,damping:t===0?2*Math.sqrt(550):30,restSpeed:10}),$1={type:"keyframes",duration:.8},K1={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},Z1=(t,{keyframes:e})=>e.length>2?$1:Qr.has(t)?t.startsWith("scale")?Y1(e[1]):q1:K1,_d=(t,e)=>t==="zIndex"?!1:!!(typeof e=="number"||Array.isArray(e)||typeof e=="string"&&(ur.test(e)||e==="0")&&!e.startsWith("url(")),Q1=new Set(["brightness","contrast","saturate","opacity"]);function J1(t){const[e,n]=t.slice(0,-1).split("(");if(e==="drop-shadow")return t;const[i]=n.match(qc)||[];if(!i)return t;const r=n.replace(i,"");let s=Q1.has(e)?1:0;return i!==n&&(s*=100),e+"("+s+r+")"}const ew=/([a-z-]*)\(.*?\)/g,xd={...ur,getAnimatableNone:t=>{const e=t.match(ew);return e?e.map(J1).join(" "):t}},tw={...Ex,color:Qt,backgroundColor:Qt,outlineColor:Qt,fill:Qt,stroke:Qt,borderColor:Qt,borderTopColor:Qt,borderRightColor:Qt,borderBottomColor:Qt,borderLeftColor:Qt,filter:xd,WebkitFilter:xd},Yh=t=>tw[t];function uy(t,e){let n=Yh(t);return n!==xd&&(n=ur),n.getAnimatableNone?n.getAnimatableNone(e):void 0}const fy=t=>/^0[^.\s]+$/.test(t);function nw(t){if(typeof t=="number")return t===0;if(t!==null)return t==="none"||t==="0"||fy(t)}function iw(t,e,n,i){const r=_d(e,n);let s;Array.isArray(n)?s=[...n]:s=[null,n];const o=i.from!==void 0?i.from:t.get();let a;const l=[];for(let c=0;c<s.length;c++)s[c]===null&&(s[c]=c===0?o:s[c-1]),nw(s[c])&&l.push(c),typeof s[c]=="string"&&s[c]!=="none"&&s[c]!=="0"&&(a=s[c]);if(r&&l.length&&a)for(let c=0;c<l.length;c++){const u=l[c];s[u]=uy(e,a)}return s}function rw({when:t,delay:e,delayChildren:n,staggerChildren:i,staggerDirection:r,repeat:s,repeatType:o,repeatDelay:a,from:l,elapsed:c,...u}){return!!Object.keys(u).length}function $h(t,e){return t[e]||t.default||t}const sw={skipAnimations:!1},Kh=(t,e,n,i={})=>r=>{const s=$h(i,t)||{},o=s.delay||i.delay||0;let{elapsed:a=0}=i;a=a-Br(o);const l=iw(e,t,n,s),c=l[0],u=l[l.length-1],f=_d(t,c),d=_d(t,u);let p={keyframes:l,velocity:e.getVelocity(),ease:"easeOut",...s,delay:-a,onUpdate:_=>{e.set(_),s.onUpdate&&s.onUpdate(_)},onComplete:()=>{r(),s.onComplete&&s.onComplete()}};if(rw(s)||(p={...p,...Z1(t,p)}),p.duration&&(p.duration=Br(p.duration)),p.repeatDelay&&(p.repeatDelay=Br(p.repeatDelay)),!f||!d||JT.current||s.type===!1||sw.skipAnimations)return X1(p);if(!i.isHandoff&&e.owner&&e.owner.current instanceof HTMLElement&&!e.owner.getProps().onUpdate){const _=j1(e,t,p);if(_)return _}return gc(p)};function vc(t){return!!(pn(t)&&t.add)}const dy=t=>/^\-?\d*\.?\d+$/.test(t);function Zh(t,e){t.indexOf(e)===-1&&t.push(e)}function Qh(t,e){const n=t.indexOf(e);n>-1&&t.splice(n,1)}class Jh{constructor(){this.subscriptions=[]}add(e){return Zh(this.subscriptions,e),()=>Qh(this.subscriptions,e)}notify(e,n,i){const r=this.subscriptions.length;if(r)if(r===1)this.subscriptions[0](e,n,i);else for(let s=0;s<r;s++){const o=this.subscriptions[s];o&&o(e,n,i)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const ow=t=>!isNaN(parseFloat(t));class aw{constructor(e,n={}){this.version="10.18.0",this.timeDelta=0,this.lastUpdated=0,this.canTrackVelocity=!1,this.events={},this.updateAndNotify=(i,r=!0)=>{this.prev=this.current,this.current=i;const{delta:s,timestamp:o}=jt;this.lastUpdated!==o&&(this.timeDelta=s,this.lastUpdated=o,rt.postRender(this.scheduleVelocityCheck)),this.prev!==this.current&&this.events.change&&this.events.change.notify(this.current),this.events.velocityChange&&this.events.velocityChange.notify(this.getVelocity()),r&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.scheduleVelocityCheck=()=>rt.postRender(this.velocityCheck),this.velocityCheck=({timestamp:i})=>{i!==this.lastUpdated&&(this.prev=this.current,this.events.velocityChange&&this.events.velocityChange.notify(this.getVelocity()))},this.hasAnimated=!1,this.prev=this.current=e,this.canTrackVelocity=ow(this.current),this.owner=n.owner}onChange(e){return this.on("change",e)}on(e,n){this.events[e]||(this.events[e]=new Jh);const i=this.events[e].add(n);return e==="change"?()=>{i(),rt.read(()=>{this.events.change.getSize()||this.stop()})}:i}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,n){this.passiveEffect=e,this.stopPassiveEffect=n}set(e,n=!0){!n||!this.passiveEffect?this.updateAndNotify(e,n):this.passiveEffect(e,this.updateAndNotify)}setWithVelocity(e,n,i){this.set(n),this.prev=e,this.timeDelta=i}jump(e){this.updateAndNotify(e),this.prev=e,this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return this.current}getPrevious(){return this.prev}getVelocity(){return this.canTrackVelocity?ay(parseFloat(this.current)-parseFloat(this.prev),this.timeDelta):0}start(e){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=e(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Ks(t,e){return new aw(t,e)}const hy=t=>e=>e.test(t),lw={test:t=>t==="auto",parse:t=>t},py=[Jr,Te,li,Bi,mT,pT,lw],_o=t=>py.find(hy(t)),cw=[...py,Qt,ur],uw=t=>cw.find(hy(t));function fw(t,e,n){t.hasValue(e)?t.getValue(e).set(n):t.addValue(e,Ks(n))}function dw(t,e){const n=$c(t,e);let{transitionEnd:i={},transition:r={},...s}=n?t.makeTargetAnimatable(n,!1):{};s={...s,...i};for(const o in s){const a=RT(s[o]);fw(t,o,a)}}function hw(t,e,n){var i,r;const s=Object.keys(e).filter(a=>!t.hasValue(a)),o=s.length;if(o)for(let a=0;a<o;a++){const l=s[a],c=e[l];let u=null;Array.isArray(c)&&(u=c[0]),u===null&&(u=(r=(i=n[l])!==null&&i!==void 0?i:t.readValue(l))!==null&&r!==void 0?r:e[l]),u!=null&&(typeof u=="string"&&(dy(u)||fy(u))?u=parseFloat(u):!uw(u)&&ur.test(c)&&(u=uy(l,c)),t.addValue(l,Ks(u,{owner:t})),n[l]===void 0&&(n[l]=u),u!==null&&t.setBaseTarget(l,u))}}function pw(t,e){return e?(e[t]||e.default||e).from:void 0}function mw(t,e,n){const i={};for(const r in t){const s=pw(r,e);if(s!==void 0)i[r]=s;else{const o=n.getValue(r);o&&(i[r]=o.get())}}return i}function gw({protectedKeys:t,needsAnimating:e},n){const i=t.hasOwnProperty(n)&&e[n]!==!0;return e[n]=!1,i}function vw(t,e){const n=t.get();if(Array.isArray(e)){for(let i=0;i<e.length;i++)if(e[i]!==n)return!0}else return n!==e}function my(t,e,{delay:n=0,transitionOverride:i,type:r}={}){let{transition:s=t.getDefaultTransition(),transitionEnd:o,...a}=t.makeTargetAnimatable(e);const l=t.getValue("willChange");i&&(s=i);const c=[],u=r&&t.animationState&&t.animationState.getState()[r];for(const f in a){const d=t.getValue(f),p=a[f];if(!d||p===void 0||u&&gw(u,f))continue;const _={delay:n,elapsed:0,...$h(s||{},f)};if(window.HandoffAppearAnimations){const h=t.getProps()[gx];if(h){const g=window.HandoffAppearAnimations(h,f,d,rt);g!==null&&(_.elapsed=g,_.isHandoff=!0)}}let x=!_.isHandoff&&!vw(d,p);if(_.type==="spring"&&(d.getVelocity()||_.velocity)&&(x=!1),d.animation&&(x=!1),x)continue;d.start(Kh(f,d,p,t.shouldReduceMotion&&Qr.has(f)?{type:!1}:_));const v=d.animation;vc(l)&&(l.add(f),v.then(()=>l.remove(f))),c.push(v)}return o&&Promise.all(c).then(()=>{o&&dw(t,o)}),c}function yd(t,e,n={}){const i=$c(t,e,n.custom);let{transition:r=t.getDefaultTransition()||{}}=i||{};n.transitionOverride&&(r=n.transitionOverride);const s=i?()=>Promise.all(my(t,i,n)):()=>Promise.resolve(),o=t.variantChildren&&t.variantChildren.size?(l=0)=>{const{delayChildren:c=0,staggerChildren:u,staggerDirection:f}=r;return _w(t,e,c+l,u,f,n)}:()=>Promise.resolve(),{when:a}=r;if(a){const[l,c]=a==="beforeChildren"?[s,o]:[o,s];return l().then(()=>c())}else return Promise.all([s(),o(n.delay)])}function _w(t,e,n=0,i=0,r=1,s){const o=[],a=(t.variantChildren.size-1)*i,l=r===1?(c=0)=>c*i:(c=0)=>a-c*i;return Array.from(t.variantChildren).sort(xw).forEach((c,u)=>{c.notify("AnimationStart",e),o.push(yd(c,e,{...s,delay:n+l(u)}).then(()=>c.notify("AnimationComplete",e)))}),Promise.all(o)}function xw(t,e){return t.sortNodePosition(e)}function yw(t,e,n={}){t.notify("AnimationStart",e);let i;if(Array.isArray(e)){const r=e.map(s=>yd(t,s,n));i=Promise.all(r)}else if(typeof e=="string")i=yd(t,e,n);else{const r=typeof e=="function"?$c(t,e,n.custom):e;i=Promise.all(my(t,r,n))}return i.then(()=>t.notify("AnimationComplete",e))}const Sw=[...Uh].reverse(),Mw=Uh.length;function Ew(t){return e=>Promise.all(e.map(({animation:n,options:i})=>yw(t,n,i)))}function Tw(t){let e=Ew(t);const n=Aw();let i=!0;const r=(l,c)=>{const u=$c(t,c);if(u){const{transition:f,transitionEnd:d,...p}=u;l={...l,...p,...d}}return l};function s(l){e=l(t)}function o(l,c){const u=t.getProps(),f=t.getVariantContext(!0)||{},d=[],p=new Set;let _={},x=1/0;for(let h=0;h<Mw;h++){const g=Sw[h],m=n[g],y=u[g]!==void 0?u[g]:f[g],C=ca(y),T=g===c?m.isActive:null;T===!1&&(x=h);let w=y===f[g]&&y!==u[g]&&C;if(w&&i&&t.manuallyAnimateOnMount&&(w=!1),m.protectedKeys={..._},!m.isActive&&T===null||!y&&!m.prevProp||jc(y)||typeof y=="boolean")continue;let S=ww(m.prevProp,y)||g===c&&m.isActive&&!w&&C||h>x&&C,E=!1;const U=Array.isArray(y)?y:[y];let j=U.reduce(r,{});T===!1&&(j={});const{prevResolvedValues:Q={}}=m,L={...Q,...j},B=W=>{S=!0,p.has(W)&&(E=!0,p.delete(W)),m.needsAnimating[W]=!0};for(const W in L){const $=j[W],N=Q[W];if(_.hasOwnProperty(W))continue;let O=!1;hc($)&&hc(N)?O=!kx($,N):O=$!==N,O?$!==void 0?B(W):p.add(W):$!==void 0&&p.has(W)?B(W):m.protectedKeys[W]=!0}m.prevProp=y,m.prevResolvedValues=j,m.isActive&&(_={..._,...j}),i&&t.blockInitialAnimation&&(S=!1),S&&(!w||E)&&d.push(...U.map(W=>({animation:W,options:{type:g,...l}})))}if(p.size){const h={};p.forEach(g=>{const m=t.getBaseTarget(g);m!==void 0&&(h[g]=m)}),d.push({animation:h})}let v=!!d.length;return i&&(u.initial===!1||u.initial===u.animate)&&!t.manuallyAnimateOnMount&&(v=!1),i=!1,v?e(d):Promise.resolve()}function a(l,c,u){var f;if(n[l].isActive===c)return Promise.resolve();(f=t.variantChildren)===null||f===void 0||f.forEach(p=>{var _;return(_=p.animationState)===null||_===void 0?void 0:_.setActive(l,c)}),n[l].isActive=c;const d=o(u,l);for(const p in n)n[p].protectedKeys={};return d}return{animateChanges:o,setActive:a,setAnimateFunction:s,getState:()=>n}}function ww(t,e){return typeof e=="string"?e!==t:Array.isArray(e)?!kx(e,t):!1}function xr(t=!1){return{isActive:t,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function Aw(){return{animate:xr(!0),whileInView:xr(),whileHover:xr(),whileTap:xr(),whileDrag:xr(),whileFocus:xr(),exit:xr()}}class Cw extends mr{constructor(e){super(e),e.animationState||(e.animationState=Tw(e))}updateAnimationControlsSubscription(){const{animate:e}=this.node.getProps();this.unmount(),jc(e)&&(this.unmount=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:e}=this.node.getProps(),{animate:n}=this.node.prevProps||{};e!==n&&this.updateAnimationControlsSubscription()}unmount(){}}let bw=0;class Rw extends mr{constructor(){super(...arguments),this.id=bw++}update(){if(!this.node.presenceContext)return;const{isPresent:e,onExitComplete:n,custom:i}=this.node.presenceContext,{isPresent:r}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===r)return;const s=this.node.animationState.setActive("exit",!e,{custom:i??this.node.getProps().custom});n&&!e&&s.then(()=>n(this.id))}mount(){const{register:e}=this.node.presenceContext||{};e&&(this.unmount=e(this.id))}unmount(){}}const Pw={animation:{Feature:Cw},exit:{Feature:Rw}},zm=(t,e)=>Math.abs(t-e);function Lw(t,e){const n=zm(t.x,e.x),i=zm(t.y,e.y);return Math.sqrt(n**2+i**2)}class gy{constructor(e,n,{transformPagePoint:i,contextWindow:r,dragSnapToOrigin:s=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const f=Bu(this.lastMoveEventInfo,this.history),d=this.startEvent!==null,p=Lw(f.offset,{x:0,y:0})>=3;if(!d&&!p)return;const{point:_}=f,{timestamp:x}=jt;this.history.push({..._,timestamp:x});const{onStart:v,onMove:h}=this.handlers;d||(v&&v(this.lastMoveEvent,f),this.startEvent=this.lastMoveEvent),h&&h(this.lastMoveEvent,f)},this.handlePointerMove=(f,d)=>{this.lastMoveEvent=f,this.lastMoveEventInfo=ku(d,this.transformPagePoint),rt.update(this.updatePoint,!0)},this.handlePointerUp=(f,d)=>{this.end();const{onEnd:p,onSessionEnd:_,resumeAnimation:x}=this.handlers;if(this.dragSnapToOrigin&&x&&x(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const v=Bu(f.type==="pointercancel"?this.lastMoveEventInfo:ku(d,this.transformPagePoint),this.history);this.startEvent&&p&&p(f,v),_&&_(f,v)},!Nx(e))return;this.dragSnapToOrigin=s,this.handlers=n,this.transformPagePoint=i,this.contextWindow=r||window;const o=Yc(e),a=ku(o,this.transformPagePoint),{point:l}=a,{timestamp:c}=jt;this.history=[{...l,timestamp:c}];const{onSessionStart:u}=n;u&&u(e,Bu(a,this.history)),this.removeListeners=ir(Ti(this.contextWindow,"pointermove",this.handlePointerMove),Ti(this.contextWindow,"pointerup",this.handlePointerUp),Ti(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),Pi(this.updatePoint)}}function ku(t,e){return e?{point:e(t.point)}:t}function Vm(t,e){return{x:t.x-e.x,y:t.y-e.y}}function Bu({point:t},e){return{point:t,delta:Vm(t,vy(e)),offset:Vm(t,Dw(e)),velocity:Nw(e,.1)}}function Dw(t){return t[0]}function vy(t){return t[t.length-1]}function Nw(t,e){if(t.length<2)return{x:0,y:0};let n=t.length-1,i=null;const r=vy(t);for(;n>=0&&(i=t[n],!(r.timestamp-i.timestamp>Br(e)));)n--;if(!i)return{x:0,y:0};const s=wi(r.timestamp-i.timestamp);if(s===0)return{x:0,y:0};const o={x:(r.x-i.x)/s,y:(r.y-i.y)/s};return o.x===1/0&&(o.x=0),o.y===1/0&&(o.y=0),o}function En(t){return t.max-t.min}function Sd(t,e=0,n=.01){return Math.abs(t-e)<=n}function Hm(t,e,n,i=.5){t.origin=i,t.originPoint=dt(e.min,e.max,t.origin),t.scale=En(n)/En(e),(Sd(t.scale,1,1e-4)||isNaN(t.scale))&&(t.scale=1),t.translate=dt(n.min,n.max,t.origin)-t.originPoint,(Sd(t.translate)||isNaN(t.translate))&&(t.translate=0)}function Vo(t,e,n,i){Hm(t.x,e.x,n.x,i?i.originX:void 0),Hm(t.y,e.y,n.y,i?i.originY:void 0)}function Gm(t,e,n){t.min=n.min+e.min,t.max=t.min+En(e)}function Uw(t,e,n){Gm(t.x,e.x,n.x),Gm(t.y,e.y,n.y)}function Wm(t,e,n){t.min=e.min-n.min,t.max=t.min+En(e)}function Ho(t,e,n){Wm(t.x,e.x,n.x),Wm(t.y,e.y,n.y)}function Iw(t,{min:e,max:n},i){return e!==void 0&&t<e?t=i?dt(e,t,i.min):Math.max(t,e):n!==void 0&&t>n&&(t=i?dt(n,t,i.max):Math.min(t,n)),t}function jm(t,e,n){return{min:e!==void 0?t.min+e:void 0,max:n!==void 0?t.max+n-(t.max-t.min):void 0}}function Fw(t,{top:e,left:n,bottom:i,right:r}){return{x:jm(t.x,n,r),y:jm(t.y,e,i)}}function Xm(t,e){let n=e.min-t.min,i=e.max-t.max;return e.max-e.min<t.max-t.min&&([n,i]=[i,n]),{min:n,max:i}}function Ow(t,e){return{x:Xm(t.x,e.x),y:Xm(t.y,e.y)}}function kw(t,e){let n=.5;const i=En(t),r=En(e);return r>i?n=fa(e.min,e.max-i,t.min):i>r&&(n=fa(t.min,t.max-r,e.min)),cr(0,1,n)}function Bw(t,e){const n={};return e.min!==void 0&&(n.min=e.min-t.min),e.max!==void 0&&(n.max=e.max-t.min),n}const Md=.35;function zw(t=Md){return t===!1?t=0:t===!0&&(t=Md),{x:qm(t,"left","right"),y:qm(t,"top","bottom")}}function qm(t,e,n){return{min:Ym(t,e),max:Ym(t,n)}}function Ym(t,e){return typeof t=="number"?t:t[e]||0}const $m=()=>({translate:0,scale:1,origin:0,originPoint:0}),Ls=()=>({x:$m(),y:$m()}),Km=()=>({min:0,max:0}),Mt=()=>({x:Km(),y:Km()});function Pn(t){return[t("x"),t("y")]}function _y({top:t,left:e,right:n,bottom:i}){return{x:{min:e,max:n},y:{min:t,max:i}}}function Vw({x:t,y:e}){return{top:e.min,right:t.max,bottom:e.max,left:t.min}}function Hw(t,e){if(!e)return t;const n=e({x:t.left,y:t.top}),i=e({x:t.right,y:t.bottom});return{top:n.y,left:n.x,bottom:i.y,right:i.x}}function zu(t){return t===void 0||t===1}function Ed({scale:t,scaleX:e,scaleY:n}){return!zu(t)||!zu(e)||!zu(n)}function Ar(t){return Ed(t)||xy(t)||t.z||t.rotate||t.rotateX||t.rotateY}function xy(t){return Zm(t.x)||Zm(t.y)}function Zm(t){return t&&t!=="0%"}function _c(t,e,n){const i=t-n,r=e*i;return n+r}function Qm(t,e,n,i,r){return r!==void 0&&(t=_c(t,r,i)),_c(t,n,i)+e}function Td(t,e=0,n=1,i,r){t.min=Qm(t.min,e,n,i,r),t.max=Qm(t.max,e,n,i,r)}function yy(t,{x:e,y:n}){Td(t.x,e.translate,e.scale,e.originPoint),Td(t.y,n.translate,n.scale,n.originPoint)}function Gw(t,e,n,i=!1){const r=n.length;if(!r)return;e.x=e.y=1;let s,o;for(let a=0;a<r;a++){s=n[a],o=s.projectionDelta;const l=s.instance;l&&l.style&&l.style.display==="contents"||(i&&s.options.layoutScroll&&s.scroll&&s!==s.root&&Ds(t,{x:-s.scroll.offset.x,y:-s.scroll.offset.y}),o&&(e.x*=o.x.scale,e.y*=o.y.scale,yy(t,o)),i&&Ar(s.latestValues)&&Ds(t,s.latestValues))}e.x=Jm(e.x),e.y=Jm(e.y)}function Jm(t){return Number.isInteger(t)||t>1.0000000000001||t<.999999999999?t:1}function Hi(t,e){t.min=t.min+e,t.max=t.max+e}function eg(t,e,[n,i,r]){const s=e[r]!==void 0?e[r]:.5,o=dt(t.min,t.max,s);Td(t,e[n],e[i],o,e.scale)}const Ww=["x","scaleX","originX"],jw=["y","scaleY","originY"];function Ds(t,e){eg(t.x,e,Ww),eg(t.y,e,jw)}function Sy(t,e){return _y(Hw(t.getBoundingClientRect(),e))}function Xw(t,e,n){const i=Sy(t,n),{scroll:r}=e;return r&&(Hi(i.x,r.offset.x),Hi(i.y,r.offset.y)),i}const My=({current:t})=>t?t.ownerDocument.defaultView:null,qw=new WeakMap;class Yw{constructor(e){this.openGlobalLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=Mt(),this.visualElement=e}start(e,{snapToCursor:n=!1}={}){const{presenceContext:i}=this.visualElement;if(i&&i.isPresent===!1)return;const r=u=>{const{dragSnapToOrigin:f}=this.getProps();f?this.pauseAnimation():this.stopAnimation(),n&&this.snapToCursor(Yc(u,"page").point)},s=(u,f)=>{const{drag:d,dragPropagation:p,onDragStart:_}=this.getProps();if(d&&!p&&(this.openGlobalLock&&this.openGlobalLock(),this.openGlobalLock=Ix(d),!this.openGlobalLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Pn(v=>{let h=this.getAxisMotionValue(v).get()||0;if(li.test(h)){const{projection:g}=this.visualElement;if(g&&g.layout){const m=g.layout.layoutBox[v];m&&(h=En(m)*(parseFloat(h)/100))}}this.originPoint[v]=h}),_&&rt.update(()=>_(u,f),!1,!0);const{animationState:x}=this.visualElement;x&&x.setActive("whileDrag",!0)},o=(u,f)=>{const{dragPropagation:d,dragDirectionLock:p,onDirectionLock:_,onDrag:x}=this.getProps();if(!d&&!this.openGlobalLock)return;const{offset:v}=f;if(p&&this.currentDirection===null){this.currentDirection=$w(v),this.currentDirection!==null&&_&&_(this.currentDirection);return}this.updateAxis("x",f.point,v),this.updateAxis("y",f.point,v),this.visualElement.render(),x&&x(u,f)},a=(u,f)=>this.stop(u,f),l=()=>Pn(u=>{var f;return this.getAnimationState(u)==="paused"&&((f=this.getAxisMotionValue(u).animation)===null||f===void 0?void 0:f.play())}),{dragSnapToOrigin:c}=this.getProps();this.panSession=new gy(e,{onSessionStart:r,onStart:s,onMove:o,onSessionEnd:a,resumeAnimation:l},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:c,contextWindow:My(this.visualElement)})}stop(e,n){const i=this.isDragging;if(this.cancel(),!i)return;const{velocity:r}=n;this.startAnimation(r);const{onDragEnd:s}=this.getProps();s&&rt.update(()=>s(e,n))}cancel(){this.isDragging=!1;const{projection:e,animationState:n}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:i}=this.getProps();!i&&this.openGlobalLock&&(this.openGlobalLock(),this.openGlobalLock=null),n&&n.setActive("whileDrag",!1)}updateAxis(e,n,i){const{drag:r}=this.getProps();if(!i||!Ja(e,r,this.currentDirection))return;const s=this.getAxisMotionValue(e);let o=this.originPoint[e]+i[e];this.constraints&&this.constraints[e]&&(o=Iw(o,this.constraints[e],this.elastic[e])),s.set(o)}resolveConstraints(){var e;const{dragConstraints:n,dragElastic:i}=this.getProps(),r=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(e=this.visualElement.projection)===null||e===void 0?void 0:e.layout,s=this.constraints;n&&Rs(n)?this.constraints||(this.constraints=this.resolveRefConstraints()):n&&r?this.constraints=Fw(r.layoutBox,n):this.constraints=!1,this.elastic=zw(i),s!==this.constraints&&r&&this.constraints&&!this.hasMutatedConstraints&&Pn(o=>{this.getAxisMotionValue(o)&&(this.constraints[o]=Bw(r.layoutBox[o],this.constraints[o]))})}resolveRefConstraints(){const{dragConstraints:e,onMeasureDragConstraints:n}=this.getProps();if(!e||!Rs(e))return!1;const i=e.current,{projection:r}=this.visualElement;if(!r||!r.layout)return!1;const s=Xw(i,r.root,this.visualElement.getTransformPagePoint());let o=Ow(r.layout.layoutBox,s);if(n){const a=n(Vw(o));this.hasMutatedConstraints=!!a,a&&(o=_y(a))}return o}startAnimation(e){const{drag:n,dragMomentum:i,dragElastic:r,dragTransition:s,dragSnapToOrigin:o,onDragTransitionEnd:a}=this.getProps(),l=this.constraints||{},c=Pn(u=>{if(!Ja(u,n,this.currentDirection))return;let f=l&&l[u]||{};o&&(f={min:0,max:0});const d=r?200:1e6,p=r?40:1e7,_={type:"inertia",velocity:i?e[u]:0,bounceStiffness:d,bounceDamping:p,timeConstant:750,restDelta:1,restSpeed:10,...s,...f};return this.startAxisValueAnimation(u,_)});return Promise.all(c).then(a)}startAxisValueAnimation(e,n){const i=this.getAxisMotionValue(e);return i.start(Kh(e,i,0,n))}stopAnimation(){Pn(e=>this.getAxisMotionValue(e).stop())}pauseAnimation(){Pn(e=>{var n;return(n=this.getAxisMotionValue(e).animation)===null||n===void 0?void 0:n.pause()})}getAnimationState(e){var n;return(n=this.getAxisMotionValue(e).animation)===null||n===void 0?void 0:n.state}getAxisMotionValue(e){const n="_drag"+e.toUpperCase(),i=this.visualElement.getProps(),r=i[n];return r||this.visualElement.getValue(e,(i.initial?i.initial[e]:void 0)||0)}snapToCursor(e){Pn(n=>{const{drag:i}=this.getProps();if(!Ja(n,i,this.currentDirection))return;const{projection:r}=this.visualElement,s=this.getAxisMotionValue(n);if(r&&r.layout){const{min:o,max:a}=r.layout.layoutBox[n];s.set(e[n]-dt(o,a,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:e,dragConstraints:n}=this.getProps(),{projection:i}=this.visualElement;if(!Rs(n)||!i||!this.constraints)return;this.stopAnimation();const r={x:0,y:0};Pn(o=>{const a=this.getAxisMotionValue(o);if(a){const l=a.get();r[o]=kw({min:l,max:l},this.constraints[o])}});const{transformTemplate:s}=this.visualElement.getProps();this.visualElement.current.style.transform=s?s({},""):"none",i.root&&i.root.updateScroll(),i.updateLayout(),this.resolveConstraints(),Pn(o=>{if(!Ja(o,e,null))return;const a=this.getAxisMotionValue(o),{min:l,max:c}=this.constraints[o];a.set(dt(l,c,r[o]))})}addListeners(){if(!this.visualElement.current)return;qw.set(this.visualElement,this);const e=this.visualElement.current,n=Ti(e,"pointerdown",l=>{const{drag:c,dragListener:u=!0}=this.getProps();c&&u&&this.start(l)}),i=()=>{const{dragConstraints:l}=this.getProps();Rs(l)&&(this.constraints=this.resolveRefConstraints())},{projection:r}=this.visualElement,s=r.addEventListener("measure",i);r&&!r.layout&&(r.root&&r.root.updateScroll(),r.updateLayout()),i();const o=Si(window,"resize",()=>this.scalePositionWithinConstraints()),a=r.addEventListener("didUpdate",({delta:l,hasLayoutChanged:c})=>{this.isDragging&&c&&(Pn(u=>{const f=this.getAxisMotionValue(u);f&&(this.originPoint[u]+=l[u].translate,f.set(f.get()+l[u].translate))}),this.visualElement.render())});return()=>{o(),n(),s(),a&&a()}}getProps(){const e=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:i=!1,dragPropagation:r=!1,dragConstraints:s=!1,dragElastic:o=Md,dragMomentum:a=!0}=e;return{...e,drag:n,dragDirectionLock:i,dragPropagation:r,dragConstraints:s,dragElastic:o,dragMomentum:a}}}function Ja(t,e,n){return(e===!0||e===t)&&(n===null||n===t)}function $w(t,e=10){let n=null;return Math.abs(t.y)>e?n="y":Math.abs(t.x)>e&&(n="x"),n}class Kw extends mr{constructor(e){super(e),this.removeGroupControls=yt,this.removeListeners=yt,this.controls=new Yw(e)}mount(){const{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||yt}unmount(){this.removeGroupControls(),this.removeListeners()}}const tg=t=>(e,n)=>{t&&rt.update(()=>t(e,n))};class Zw extends mr{constructor(){super(...arguments),this.removePointerDownListener=yt}onPointerDown(e){this.session=new gy(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:My(this.node)})}createPanHandlers(){const{onPanSessionStart:e,onPanStart:n,onPan:i,onPanEnd:r}=this.node.getProps();return{onSessionStart:tg(e),onStart:tg(n),onMove:i,onEnd:(s,o)=>{delete this.session,r&&rt.update(()=>r(s,o))}}}mount(){this.removePointerDownListener=Ti(this.node.current,"pointerdown",e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}function Qw(){const t=J.useContext(Gc);if(t===null)return[!0,null];const{isPresent:e,onExitComplete:n,register:i}=t,r=J.useId();return J.useEffect(()=>i(r),[]),!e&&n?[!1,()=>n&&n(r)]:[!0]}const Bl={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function ng(t,e){return e.max===e.min?0:t/(e.max-e.min)*100}const xo={correct:(t,e)=>{if(!e.target)return t;if(typeof t=="string")if(Te.test(t))t=parseFloat(t);else return t;const n=ng(t,e.target.x),i=ng(t,e.target.y);return`${n}% ${i}%`}},Jw={correct:(t,{treeScale:e,projectionDelta:n})=>{const i=t,r=ur.parse(t);if(r.length>5)return i;const s=ur.createTransformer(t),o=typeof r[0]!="number"?1:0,a=n.x.scale*e.x,l=n.y.scale*e.y;r[0+o]/=a,r[1+o]/=l;const c=dt(a,l,.5);return typeof r[2+o]=="number"&&(r[2+o]/=c),typeof r[3+o]=="number"&&(r[3+o]/=c),s(r)}};class eA extends u0.Component{componentDidMount(){const{visualElement:e,layoutGroup:n,switchLayoutGroup:i,layoutId:r}=this.props,{projection:s}=e;aT(tA),s&&(n.group&&n.group.add(s),i&&i.register&&r&&i.register(s),s.root.didUpdate(),s.addEventListener("animationComplete",()=>{this.safeToRemove()}),s.setOptions({...s.options,onExitComplete:()=>this.safeToRemove()})),Bl.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){const{layoutDependency:n,visualElement:i,drag:r,isPresent:s}=this.props,o=i.projection;return o&&(o.isPresent=s,r||e.layoutDependency!==n||n===void 0?o.willUpdate():this.safeToRemove(),e.isPresent!==s&&(s?o.promote():o.relegate()||rt.postRender(()=>{const a=o.getStack();(!a||!a.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:e}=this.props.visualElement;e&&(e.root.didUpdate(),queueMicrotask(()=>{!e.currentAnimation&&e.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:e,layoutGroup:n,switchLayoutGroup:i}=this.props,{projection:r}=e;r&&(r.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(r),i&&i.deregister&&i.deregister(r))}safeToRemove(){const{safeToRemove:e}=this.props;e&&e()}render(){return null}}function Ey(t){const[e,n]=Qw(),i=J.useContext(Fh);return u0.createElement(eA,{...t,layoutGroup:i,switchLayoutGroup:J.useContext(_x),isPresent:e,safeToRemove:n})}const tA={borderRadius:{...xo,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:xo,borderTopRightRadius:xo,borderBottomLeftRadius:xo,borderBottomRightRadius:xo,boxShadow:Jw},Ty=["TopLeft","TopRight","BottomLeft","BottomRight"],nA=Ty.length,ig=t=>typeof t=="string"?parseFloat(t):t,rg=t=>typeof t=="number"||Te.test(t);function iA(t,e,n,i,r,s){r?(t.opacity=dt(0,n.opacity!==void 0?n.opacity:1,rA(i)),t.opacityExit=dt(e.opacity!==void 0?e.opacity:1,0,sA(i))):s&&(t.opacity=dt(e.opacity!==void 0?e.opacity:1,n.opacity!==void 0?n.opacity:1,i));for(let o=0;o<nA;o++){const a=`border${Ty[o]}Radius`;let l=sg(e,a),c=sg(n,a);if(l===void 0&&c===void 0)continue;l||(l=0),c||(c=0),l===0||c===0||rg(l)===rg(c)?(t[a]=Math.max(dt(ig(l),ig(c),i),0),(li.test(c)||li.test(l))&&(t[a]+="%")):t[a]=c}(e.rotate||n.rotate)&&(t.rotate=dt(e.rotate||0,n.rotate||0,i))}function sg(t,e){return t[e]!==void 0?t[e]:t.borderRadius}const rA=wy(0,.5,qx),sA=wy(.5,.95,yt);function wy(t,e,n){return i=>i<t?0:i>e?1:n(fa(t,e,i))}function og(t,e){t.min=e.min,t.max=e.max}function bn(t,e){og(t.x,e.x),og(t.y,e.y)}function ag(t,e,n,i,r){return t-=e,t=_c(t,1/n,i),r!==void 0&&(t=_c(t,1/r,i)),t}function oA(t,e=0,n=1,i=.5,r,s=t,o=t){if(li.test(e)&&(e=parseFloat(e),e=dt(o.min,o.max,e/100)-o.min),typeof e!="number")return;let a=dt(s.min,s.max,i);t===s&&(a-=e),t.min=ag(t.min,e,n,a,r),t.max=ag(t.max,e,n,a,r)}function lg(t,e,[n,i,r],s,o){oA(t,e[n],e[i],e[r],e.scale,s,o)}const aA=["x","scaleX","originX"],lA=["y","scaleY","originY"];function cg(t,e,n,i){lg(t.x,e,aA,n?n.x:void 0,i?i.x:void 0),lg(t.y,e,lA,n?n.y:void 0,i?i.y:void 0)}function ug(t){return t.translate===0&&t.scale===1}function Ay(t){return ug(t.x)&&ug(t.y)}function cA(t,e){return t.x.min===e.x.min&&t.x.max===e.x.max&&t.y.min===e.y.min&&t.y.max===e.y.max}function Cy(t,e){return Math.round(t.x.min)===Math.round(e.x.min)&&Math.round(t.x.max)===Math.round(e.x.max)&&Math.round(t.y.min)===Math.round(e.y.min)&&Math.round(t.y.max)===Math.round(e.y.max)}function fg(t){return En(t.x)/En(t.y)}class uA{constructor(){this.members=[]}add(e){Zh(this.members,e),e.scheduleRender()}remove(e){if(Qh(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(e){const n=this.members.findIndex(r=>e===r);if(n===0)return!1;let i;for(let r=n;r>=0;r--){const s=this.members[r];if(s.isPresent!==!1){i=s;break}}return i?(this.promote(i),!0):!1}promote(e,n){const i=this.lead;if(e!==i&&(this.prevLead=i,this.lead=e,e.show(),i)){i.instance&&i.scheduleRender(),e.scheduleRender(),e.resumeFrom=i,n&&(e.resumeFrom.preserveOpacity=!0),i.snapshot&&(e.snapshot=i.snapshot,e.snapshot.latestValues=i.animationValues||i.latestValues),e.root&&e.root.isUpdating&&(e.isLayoutDirty=!0);const{crossfade:r}=e.options;r===!1&&i.hide()}}exitAnimationComplete(){this.members.forEach(e=>{const{options:n,resumingFrom:i}=e;n.onExitComplete&&n.onExitComplete(),i&&i.options.onExitComplete&&i.options.onExitComplete()})}scheduleRender(){this.members.forEach(e=>{e.instance&&e.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function dg(t,e,n){let i="";const r=t.x.translate/e.x,s=t.y.translate/e.y;if((r||s)&&(i=`translate3d(${r}px, ${s}px, 0) `),(e.x!==1||e.y!==1)&&(i+=`scale(${1/e.x}, ${1/e.y}) `),n){const{rotate:l,rotateX:c,rotateY:u}=n;l&&(i+=`rotate(${l}deg) `),c&&(i+=`rotateX(${c}deg) `),u&&(i+=`rotateY(${u}deg) `)}const o=t.x.scale*e.x,a=t.y.scale*e.y;return(o!==1||a!==1)&&(i+=`scale(${o}, ${a})`),i||"none"}const fA=(t,e)=>t.depth-e.depth;class dA{constructor(){this.children=[],this.isDirty=!1}add(e){Zh(this.children,e),this.isDirty=!0}remove(e){Qh(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(fA),this.isDirty=!1,this.children.forEach(e)}}function hA(t,e){const n=performance.now(),i=({timestamp:r})=>{const s=r-n;s>=e&&(Pi(i),t(s-e))};return rt.read(i,!0),()=>Pi(i)}function pA(t){window.MotionDebug&&window.MotionDebug.record(t)}function mA(t){return t instanceof SVGElement&&t.tagName!=="svg"}function gA(t,e,n){const i=pn(t)?t:Ks(t);return i.start(Kh("",i,e,n)),i.animation}const hg=["","X","Y","Z"],vA={visibility:"hidden"},pg=1e3;let _A=0;const Cr={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0};function by({attachResizeListener:t,defaultParent:e,measureScroll:n,checkIsScrollRoot:i,resetTransform:r}){return class{constructor(o={},a=e==null?void 0:e()){this.id=_A++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,Cr.totalNodes=Cr.resolvedTargetDeltas=Cr.recalculatedProjection=0,this.nodes.forEach(SA),this.nodes.forEach(AA),this.nodes.forEach(CA),this.nodes.forEach(MA),pA(Cr)},this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=o,this.root=a?a.root||a:this,this.path=a?[...a.path,a]:[],this.parent=a,this.depth=a?a.depth+1:0;for(let l=0;l<this.path.length;l++)this.path[l].shouldResetTransform=!0;this.root===this&&(this.nodes=new dA)}addEventListener(o,a){return this.eventHandlers.has(o)||this.eventHandlers.set(o,new Jh),this.eventHandlers.get(o).add(a)}notifyListeners(o,...a){const l=this.eventHandlers.get(o);l&&l.notify(...a)}hasListeners(o){return this.eventHandlers.has(o)}mount(o,a=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=mA(o),this.instance=o;const{layoutId:l,layout:c,visualElement:u}=this.options;if(u&&!u.current&&u.mount(o),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),a&&(c||l)&&(this.isLayoutDirty=!0),t){let f;const d=()=>this.root.updateBlockedByResize=!1;t(o,()=>{this.root.updateBlockedByResize=!0,f&&f(),f=hA(d,250),Bl.hasAnimatedSinceResize&&(Bl.hasAnimatedSinceResize=!1,this.nodes.forEach(gg))})}l&&this.root.registerSharedNode(l,this),this.options.animate!==!1&&u&&(l||c)&&this.addEventListener("didUpdate",({delta:f,hasLayoutChanged:d,hasRelativeTargetChanged:p,layout:_})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const x=this.options.transition||u.getDefaultTransition()||DA,{onLayoutAnimationStart:v,onLayoutAnimationComplete:h}=u.getProps(),g=!this.targetLayout||!Cy(this.targetLayout,_)||p,m=!d&&p;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||m||d&&(g||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(f,m);const y={...$h(x,"layout"),onPlay:v,onComplete:h};(u.shouldReduceMotion||this.options.layoutRoot)&&(y.delay=0,y.type=!1),this.startAnimation(y)}else d||gg(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=_})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const o=this.getStack();o&&o.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,Pi(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(bA),this.animationId++)}getTransformTemplate(){const{visualElement:o}=this.options;return o&&o.getProps().transformTemplate}willUpdate(o=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let u=0;u<this.path.length;u++){const f=this.path[u];f.shouldResetTransform=!0,f.updateScroll("snapshot"),f.options.layoutRoot&&f.willUpdate(!1)}const{layoutId:a,layout:l}=this.options;if(a===void 0&&!l)return;const c=this.getTransformTemplate();this.prevTransformTemplateValue=c?c(this.latestValues,""):void 0,this.updateSnapshot(),o&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(mg);return}this.isUpdating||this.nodes.forEach(TA),this.isUpdating=!1,this.nodes.forEach(wA),this.nodes.forEach(xA),this.nodes.forEach(yA),this.clearAllSnapshots();const a=performance.now();jt.delta=cr(0,1e3/60,a-jt.timestamp),jt.timestamp=a,jt.isProcessing=!0,Pu.update.process(jt),Pu.preRender.process(jt),Pu.render.process(jt),jt.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,queueMicrotask(()=>this.update()))}clearAllSnapshots(){this.nodes.forEach(EA),this.sharedNodes.forEach(RA)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,rt.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){rt.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let l=0;l<this.path.length;l++)this.path[l].updateScroll();const o=this.layout;this.layout=this.measure(!1),this.layoutCorrected=Mt(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:a}=this.options;a&&a.notify("LayoutMeasure",this.layout.layoutBox,o?o.layoutBox:void 0)}updateScroll(o="measure"){let a=!!(this.options.layoutScroll&&this.instance);this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===o&&(a=!1),a&&(this.scroll={animationId:this.root.animationId,phase:o,isRoot:i(this.instance),offset:n(this.instance)})}resetTransform(){if(!r)return;const o=this.isLayoutDirty||this.shouldResetTransform,a=this.projectionDelta&&!Ay(this.projectionDelta),l=this.getTransformTemplate(),c=l?l(this.latestValues,""):void 0,u=c!==this.prevTransformTemplateValue;o&&(a||Ar(this.latestValues)||u)&&(r(this.instance,c),this.shouldResetTransform=!1,this.scheduleRender())}measure(o=!0){const a=this.measurePageBox();let l=this.removeElementScroll(a);return o&&(l=this.removeTransform(l)),NA(l),{animationId:this.root.animationId,measuredBox:a,layoutBox:l,latestValues:{},source:this.id}}measurePageBox(){const{visualElement:o}=this.options;if(!o)return Mt();const a=o.measureViewportBox(),{scroll:l}=this.root;return l&&(Hi(a.x,l.offset.x),Hi(a.y,l.offset.y)),a}removeElementScroll(o){const a=Mt();bn(a,o);for(let l=0;l<this.path.length;l++){const c=this.path[l],{scroll:u,options:f}=c;if(c!==this.root&&u&&f.layoutScroll){if(u.isRoot){bn(a,o);const{scroll:d}=this.root;d&&(Hi(a.x,-d.offset.x),Hi(a.y,-d.offset.y))}Hi(a.x,u.offset.x),Hi(a.y,u.offset.y)}}return a}applyTransform(o,a=!1){const l=Mt();bn(l,o);for(let c=0;c<this.path.length;c++){const u=this.path[c];!a&&u.options.layoutScroll&&u.scroll&&u!==u.root&&Ds(l,{x:-u.scroll.offset.x,y:-u.scroll.offset.y}),Ar(u.latestValues)&&Ds(l,u.latestValues)}return Ar(this.latestValues)&&Ds(l,this.latestValues),l}removeTransform(o){const a=Mt();bn(a,o);for(let l=0;l<this.path.length;l++){const c=this.path[l];if(!c.instance||!Ar(c.latestValues))continue;Ed(c.latestValues)&&c.updateSnapshot();const u=Mt(),f=c.measurePageBox();bn(u,f),cg(a,c.latestValues,c.snapshot?c.snapshot.layoutBox:void 0,u)}return Ar(this.latestValues)&&cg(a,this.latestValues),a}setTargetDelta(o){this.targetDelta=o,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(o){this.options={...this.options,...o,crossfade:o.crossfade!==void 0?o.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==jt.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(o=!1){var a;const l=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=l.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=l.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=l.isSharedProjectionDirty);const c=!!this.resumingFrom||this!==l;if(!(o||c&&this.isSharedProjectionDirty||this.isProjectionDirty||!((a=this.parent)===null||a===void 0)&&a.isProjectionDirty||this.attemptToResolveRelativeTarget))return;const{layout:f,layoutId:d}=this.options;if(!(!this.layout||!(f||d))){if(this.resolvedRelativeTargetAt=jt.timestamp,!this.targetDelta&&!this.relativeTarget){const p=this.getClosestProjectingParent();p&&p.layout&&this.animationProgress!==1?(this.relativeParent=p,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Mt(),this.relativeTargetOrigin=Mt(),Ho(this.relativeTargetOrigin,this.layout.layoutBox,p.layout.layoutBox),bn(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=Mt(),this.targetWithTransforms=Mt()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),Uw(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):bn(this.target,this.layout.layoutBox),yy(this.target,this.targetDelta)):bn(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const p=this.getClosestProjectingParent();p&&!!p.resumingFrom==!!this.resumingFrom&&!p.options.layoutScroll&&p.target&&this.animationProgress!==1?(this.relativeParent=p,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Mt(),this.relativeTargetOrigin=Mt(),Ho(this.relativeTargetOrigin,this.target,p.target),bn(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}Cr.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||Ed(this.parent.latestValues)||xy(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var o;const a=this.getLead(),l=!!this.resumingFrom||this!==a;let c=!0;if((this.isProjectionDirty||!((o=this.parent)===null||o===void 0)&&o.isProjectionDirty)&&(c=!1),l&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(c=!1),this.resolvedRelativeTargetAt===jt.timestamp&&(c=!1),c)return;const{layout:u,layoutId:f}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(u||f))return;bn(this.layoutCorrected,this.layout.layoutBox);const d=this.treeScale.x,p=this.treeScale.y;Gw(this.layoutCorrected,this.treeScale,this.path,l),a.layout&&!a.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(a.target=a.layout.layoutBox);const{target:_}=a;if(!_){this.projectionTransform&&(this.projectionDelta=Ls(),this.projectionTransform="none",this.scheduleRender());return}this.projectionDelta||(this.projectionDelta=Ls(),this.projectionDeltaWithTransform=Ls());const x=this.projectionTransform;Vo(this.projectionDelta,this.layoutCorrected,_,this.latestValues),this.projectionTransform=dg(this.projectionDelta,this.treeScale),(this.projectionTransform!==x||this.treeScale.x!==d||this.treeScale.y!==p)&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",_)),Cr.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(o=!0){if(this.options.scheduleRender&&this.options.scheduleRender(),o){const a=this.getStack();a&&a.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}setAnimationOrigin(o,a=!1){const l=this.snapshot,c=l?l.latestValues:{},u={...this.latestValues},f=Ls();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!a;const d=Mt(),p=l?l.source:void 0,_=this.layout?this.layout.source:void 0,x=p!==_,v=this.getStack(),h=!v||v.members.length<=1,g=!!(x&&!h&&this.options.crossfade===!0&&!this.path.some(LA));this.animationProgress=0;let m;this.mixTargetDelta=y=>{const C=y/1e3;vg(f.x,o.x,C),vg(f.y,o.y,C),this.setTargetDelta(f),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Ho(d,this.layout.layoutBox,this.relativeParent.layout.layoutBox),PA(this.relativeTarget,this.relativeTargetOrigin,d,C),m&&cA(this.relativeTarget,m)&&(this.isProjectionDirty=!1),m||(m=Mt()),bn(m,this.relativeTarget)),x&&(this.animationValues=u,iA(u,c,this.latestValues,C,g,h)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=C},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(o){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(Pi(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=rt.update(()=>{Bl.hasAnimatedSinceResize=!0,this.currentAnimation=gA(0,pg,{...o,onUpdate:a=>{this.mixTargetDelta(a),o.onUpdate&&o.onUpdate(a)},onComplete:()=>{o.onComplete&&o.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const o=this.getStack();o&&o.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(pg),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const o=this.getLead();let{targetWithTransforms:a,target:l,layout:c,latestValues:u}=o;if(!(!a||!l||!c)){if(this!==o&&this.layout&&c&&Ry(this.options.animationType,this.layout.layoutBox,c.layoutBox)){l=this.target||Mt();const f=En(this.layout.layoutBox.x);l.x.min=o.target.x.min,l.x.max=l.x.min+f;const d=En(this.layout.layoutBox.y);l.y.min=o.target.y.min,l.y.max=l.y.min+d}bn(a,l),Ds(a,u),Vo(this.projectionDeltaWithTransform,this.layoutCorrected,a,u)}}registerSharedNode(o,a){this.sharedNodes.has(o)||this.sharedNodes.set(o,new uA),this.sharedNodes.get(o).add(a);const c=a.options.initialPromotionConfig;a.promote({transition:c?c.transition:void 0,preserveFollowOpacity:c&&c.shouldPreserveFollowOpacity?c.shouldPreserveFollowOpacity(a):void 0})}isLead(){const o=this.getStack();return o?o.lead===this:!0}getLead(){var o;const{layoutId:a}=this.options;return a?((o=this.getStack())===null||o===void 0?void 0:o.lead)||this:this}getPrevLead(){var o;const{layoutId:a}=this.options;return a?(o=this.getStack())===null||o===void 0?void 0:o.prevLead:void 0}getStack(){const{layoutId:o}=this.options;if(o)return this.root.sharedNodes.get(o)}promote({needsReset:o,transition:a,preserveFollowOpacity:l}={}){const c=this.getStack();c&&c.promote(this,l),o&&(this.projectionDelta=void 0,this.needsReset=!0),a&&this.setOptions({transition:a})}relegate(){const o=this.getStack();return o?o.relegate(this):!1}resetRotation(){const{visualElement:o}=this.options;if(!o)return;let a=!1;const{latestValues:l}=o;if((l.rotate||l.rotateX||l.rotateY||l.rotateZ)&&(a=!0),!a)return;const c={};for(let u=0;u<hg.length;u++){const f="rotate"+hg[u];l[f]&&(c[f]=l[f],o.setStaticValue(f,0))}o.render();for(const u in c)o.setStaticValue(u,c[u]);o.scheduleRender()}getProjectionStyles(o){var a,l;if(!this.instance||this.isSVG)return;if(!this.isVisible)return vA;const c={visibility:""},u=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,c.opacity="",c.pointerEvents=kl(o==null?void 0:o.pointerEvents)||"",c.transform=u?u(this.latestValues,""):"none",c;const f=this.getLead();if(!this.projectionDelta||!this.layout||!f.target){const x={};return this.options.layoutId&&(x.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,x.pointerEvents=kl(o==null?void 0:o.pointerEvents)||""),this.hasProjected&&!Ar(this.latestValues)&&(x.transform=u?u({},""):"none",this.hasProjected=!1),x}const d=f.animationValues||f.latestValues;this.applyTransformsToTarget(),c.transform=dg(this.projectionDeltaWithTransform,this.treeScale,d),u&&(c.transform=u(d,c.transform));const{x:p,y:_}=this.projectionDelta;c.transformOrigin=`${p.origin*100}% ${_.origin*100}% 0`,f.animationValues?c.opacity=f===this?(l=(a=d.opacity)!==null&&a!==void 0?a:this.latestValues.opacity)!==null&&l!==void 0?l:1:this.preserveOpacity?this.latestValues.opacity:d.opacityExit:c.opacity=f===this?d.opacity!==void 0?d.opacity:"":d.opacityExit!==void 0?d.opacityExit:0;for(const x in fc){if(d[x]===void 0)continue;const{correct:v,applyTo:h}=fc[x],g=c.transform==="none"?d[x]:v(d[x],f);if(h){const m=h.length;for(let y=0;y<m;y++)c[h[y]]=g}else c[x]=g}return this.options.layoutId&&(c.pointerEvents=f===this?kl(o==null?void 0:o.pointerEvents)||"":"none"),c}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(o=>{var a;return(a=o.currentAnimation)===null||a===void 0?void 0:a.stop()}),this.root.nodes.forEach(mg),this.root.sharedNodes.clear()}}}function xA(t){t.updateLayout()}function yA(t){var e;const n=((e=t.resumeFrom)===null||e===void 0?void 0:e.snapshot)||t.snapshot;if(t.isLead()&&t.layout&&n&&t.hasListeners("didUpdate")){const{layoutBox:i,measuredBox:r}=t.layout,{animationType:s}=t.options,o=n.source!==t.layout.source;s==="size"?Pn(f=>{const d=o?n.measuredBox[f]:n.layoutBox[f],p=En(d);d.min=i[f].min,d.max=d.min+p}):Ry(s,n.layoutBox,i)&&Pn(f=>{const d=o?n.measuredBox[f]:n.layoutBox[f],p=En(i[f]);d.max=d.min+p,t.relativeTarget&&!t.currentAnimation&&(t.isProjectionDirty=!0,t.relativeTarget[f].max=t.relativeTarget[f].min+p)});const a=Ls();Vo(a,i,n.layoutBox);const l=Ls();o?Vo(l,t.applyTransform(r,!0),n.measuredBox):Vo(l,i,n.layoutBox);const c=!Ay(a);let u=!1;if(!t.resumeFrom){const f=t.getClosestProjectingParent();if(f&&!f.resumeFrom){const{snapshot:d,layout:p}=f;if(d&&p){const _=Mt();Ho(_,n.layoutBox,d.layoutBox);const x=Mt();Ho(x,i,p.layoutBox),Cy(_,x)||(u=!0),f.options.layoutRoot&&(t.relativeTarget=x,t.relativeTargetOrigin=_,t.relativeParent=f)}}}t.notifyListeners("didUpdate",{layout:i,snapshot:n,delta:l,layoutDelta:a,hasLayoutChanged:c,hasRelativeTargetChanged:u})}else if(t.isLead()){const{onExitComplete:i}=t.options;i&&i()}t.options.transition=void 0}function SA(t){Cr.totalNodes++,t.parent&&(t.isProjecting()||(t.isProjectionDirty=t.parent.isProjectionDirty),t.isSharedProjectionDirty||(t.isSharedProjectionDirty=!!(t.isProjectionDirty||t.parent.isProjectionDirty||t.parent.isSharedProjectionDirty)),t.isTransformDirty||(t.isTransformDirty=t.parent.isTransformDirty))}function MA(t){t.isProjectionDirty=t.isSharedProjectionDirty=t.isTransformDirty=!1}function EA(t){t.clearSnapshot()}function mg(t){t.clearMeasurements()}function TA(t){t.isLayoutDirty=!1}function wA(t){const{visualElement:e}=t.options;e&&e.getProps().onBeforeLayoutMeasure&&e.notify("BeforeLayoutMeasure"),t.resetTransform()}function gg(t){t.finishAnimation(),t.targetDelta=t.relativeTarget=t.target=void 0,t.isProjectionDirty=!0}function AA(t){t.resolveTargetDelta()}function CA(t){t.calcProjection()}function bA(t){t.resetRotation()}function RA(t){t.removeLeadSnapshot()}function vg(t,e,n){t.translate=dt(e.translate,0,n),t.scale=dt(e.scale,1,n),t.origin=e.origin,t.originPoint=e.originPoint}function _g(t,e,n,i){t.min=dt(e.min,n.min,i),t.max=dt(e.max,n.max,i)}function PA(t,e,n,i){_g(t.x,e.x,n.x,i),_g(t.y,e.y,n.y,i)}function LA(t){return t.animationValues&&t.animationValues.opacityExit!==void 0}const DA={duration:.45,ease:[.4,0,.1,1]},xg=t=>typeof navigator<"u"&&navigator.userAgent.toLowerCase().includes(t),yg=xg("applewebkit/")&&!xg("chrome/")?Math.round:yt;function Sg(t){t.min=yg(t.min),t.max=yg(t.max)}function NA(t){Sg(t.x),Sg(t.y)}function Ry(t,e,n){return t==="position"||t==="preserve-aspect"&&!Sd(fg(e),fg(n),.2)}const UA=by({attachResizeListener:(t,e)=>Si(t,"resize",e),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),Vu={current:void 0},Py=by({measureScroll:t=>({x:t.scrollLeft,y:t.scrollTop}),defaultParent:()=>{if(!Vu.current){const t=new UA({});t.mount(window),t.setOptions({layoutScroll:!0}),Vu.current=t}return Vu.current},resetTransform:(t,e)=>{t.style.transform=e!==void 0?e:"none"},checkIsScrollRoot:t=>window.getComputedStyle(t).position==="fixed"}),IA={pan:{Feature:Zw},drag:{Feature:Kw,ProjectionNode:Py,MeasureLayout:Ey}},FA=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;function OA(t){const e=FA.exec(t);if(!e)return[,];const[,n,i]=e;return[n,i]}function wd(t,e,n=1){const[i,r]=OA(t);if(!i)return;const s=window.getComputedStyle(e).getPropertyValue(i);if(s){const o=s.trim();return dy(o)?parseFloat(o):o}else return pd(r)?wd(r,e,n+1):r}function kA(t,{...e},n){const i=t.current;if(!(i instanceof Element))return{target:e,transitionEnd:n};n&&(n={...n}),t.values.forEach(r=>{const s=r.get();if(!pd(s))return;const o=wd(s,i);o&&r.set(o)});for(const r in e){const s=e[r];if(!pd(s))continue;const o=wd(s,i);o&&(e[r]=o,n||(n={}),n[r]===void 0&&(n[r]=s))}return{target:e,transitionEnd:n}}const BA=new Set(["width","height","top","left","right","bottom","x","y","translateX","translateY"]),Ly=t=>BA.has(t),zA=t=>Object.keys(t).some(Ly),Mg=t=>t===Jr||t===Te,Eg=(t,e)=>parseFloat(t.split(", ")[e]),Tg=(t,e)=>(n,{transform:i})=>{if(i==="none"||!i)return 0;const r=i.match(/^matrix3d\((.+)\)$/);if(r)return Eg(r[1],e);{const s=i.match(/^matrix\((.+)\)$/);return s?Eg(s[1],t):0}},VA=new Set(["x","y","z"]),HA=xa.filter(t=>!VA.has(t));function GA(t){const e=[];return HA.forEach(n=>{const i=t.getValue(n);i!==void 0&&(e.push([n,i.get()]),i.set(n.startsWith("scale")?1:0))}),e.length&&t.render(),e}const Zs={width:({x:t},{paddingLeft:e="0",paddingRight:n="0"})=>t.max-t.min-parseFloat(e)-parseFloat(n),height:({y:t},{paddingTop:e="0",paddingBottom:n="0"})=>t.max-t.min-parseFloat(e)-parseFloat(n),top:(t,{top:e})=>parseFloat(e),left:(t,{left:e})=>parseFloat(e),bottom:({y:t},{top:e})=>parseFloat(e)+(t.max-t.min),right:({x:t},{left:e})=>parseFloat(e)+(t.max-t.min),x:Tg(4,13),y:Tg(5,14)};Zs.translateX=Zs.x;Zs.translateY=Zs.y;const WA=(t,e,n)=>{const i=e.measureViewportBox(),r=e.current,s=getComputedStyle(r),{display:o}=s,a={};o==="none"&&e.setStaticValue("display",t.display||"block"),n.forEach(c=>{a[c]=Zs[c](i,s)}),e.render();const l=e.measureViewportBox();return n.forEach(c=>{const u=e.getValue(c);u&&u.jump(a[c]),t[c]=Zs[c](l,s)}),t},jA=(t,e,n={},i={})=>{e={...e},i={...i};const r=Object.keys(e).filter(Ly);let s=[],o=!1;const a=[];if(r.forEach(l=>{const c=t.getValue(l);if(!t.hasValue(l))return;let u=n[l],f=_o(u);const d=e[l];let p;if(hc(d)){const _=d.length,x=d[0]===null?1:0;u=d[x],f=_o(u);for(let v=x;v<_&&d[v]!==null;v++)p?Wh(_o(d[v])===p):p=_o(d[v])}else p=_o(d);if(f!==p)if(Mg(f)&&Mg(p)){const _=c.get();typeof _=="string"&&c.set(parseFloat(_)),typeof d=="string"?e[l]=parseFloat(d):Array.isArray(d)&&p===Te&&(e[l]=d.map(parseFloat))}else f!=null&&f.transform&&(p!=null&&p.transform)&&(u===0||d===0)?u===0?c.set(p.transform(u)):e[l]=f.transform(d):(o||(s=GA(t),o=!0),a.push(l),i[l]=i[l]!==void 0?i[l]:e[l],c.jump(d))}),a.length){const l=a.indexOf("height")>=0?window.pageYOffset:null,c=WA(e,t,a);return s.length&&s.forEach(([u,f])=>{t.getValue(u).set(f)}),t.render(),Wc&&l!==null&&window.scrollTo({top:l}),{target:c,transitionEnd:i}}else return{target:e,transitionEnd:i}};function XA(t,e,n,i){return zA(e)?jA(t,e,n,i):{target:e,transitionEnd:i}}const qA=(t,e,n,i)=>{const r=kA(t,e,i);return e=r.target,i=r.transitionEnd,XA(t,e,n,i)},Ad={current:null},Dy={current:!1};function YA(){if(Dy.current=!0,!!Wc)if(window.matchMedia){const t=window.matchMedia("(prefers-reduced-motion)"),e=()=>Ad.current=t.matches;t.addListener(e),e()}else Ad.current=!1}function $A(t,e,n){const{willChange:i}=e;for(const r in e){const s=e[r],o=n[r];if(pn(s))t.addValue(r,s),vc(i)&&i.add(r);else if(pn(o))t.addValue(r,Ks(s,{owner:t})),vc(i)&&i.remove(r);else if(o!==s)if(t.hasValue(r)){const a=t.getValue(r);!a.hasAnimated&&a.set(s)}else{const a=t.getStaticValue(r);t.addValue(r,Ks(a!==void 0?a:s,{owner:t}))}}for(const r in n)e[r]===void 0&&t.removeValue(r);return e}const wg=new WeakMap,Ny=Object.keys(ua),KA=Ny.length,Ag=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"],ZA=Ih.length;class QA{constructor({parent:e,props:n,presenceContext:i,reducedMotionConfig:r,visualState:s},o={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.scheduleRender=()=>rt.render(this.render,!1,!0);const{latestValues:a,renderState:l}=s;this.latestValues=a,this.baseTarget={...a},this.initialValues=n.initial?{...a}:{},this.renderState=l,this.parent=e,this.props=n,this.presenceContext=i,this.depth=e?e.depth+1:0,this.reducedMotionConfig=r,this.options=o,this.isControllingVariants=Xc(n),this.isVariantNode=vx(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);const{willChange:c,...u}=this.scrapeMotionValuesFromProps(n,{});for(const f in u){const d=u[f];a[f]!==void 0&&pn(d)&&(d.set(a[f],!1),vc(c)&&c.add(f))}}scrapeMotionValuesFromProps(e,n){return{}}mount(e){this.current=e,wg.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((n,i)=>this.bindToMotionValue(i,n)),Dy.current||YA(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:Ad.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){wg.delete(this.current),this.projection&&this.projection.unmount(),Pi(this.notifyUpdate),Pi(this.render),this.valueSubscriptions.forEach(e=>e()),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const e in this.events)this.events[e].clear();for(const e in this.features)this.features[e].unmount();this.current=null}bindToMotionValue(e,n){const i=Qr.has(e),r=n.on("change",o=>{this.latestValues[e]=o,this.props.onUpdate&&rt.update(this.notifyUpdate,!1,!0),i&&this.projection&&(this.projection.isTransformDirty=!0)}),s=n.on("renderRequest",this.scheduleRender);this.valueSubscriptions.set(e,()=>{r(),s()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}loadFeatures({children:e,...n},i,r,s){let o,a;for(let l=0;l<KA;l++){const c=Ny[l],{isEnabled:u,Feature:f,ProjectionNode:d,MeasureLayout:p}=ua[c];d&&(o=d),u(n)&&(!this.features[c]&&f&&(this.features[c]=new f(this)),p&&(a=p))}if((this.type==="html"||this.type==="svg")&&!this.projection&&o){this.projection=new o(this.latestValues,this.parent&&this.parent.projection);const{layoutId:l,layout:c,drag:u,dragConstraints:f,layoutScroll:d,layoutRoot:p}=n;this.projection.setOptions({layoutId:l,layout:c,alwaysMeasureLayout:!!u||f&&Rs(f),visualElement:this,scheduleRender:()=>this.scheduleRender(),animationType:typeof c=="string"?c:"both",initialPromotionConfig:s,layoutScroll:d,layoutRoot:p})}return a}updateFeatures(){for(const e in this.features){const n=this.features[e];n.isMounted?n.update():(n.mount(),n.isMounted=!0)}}triggerBuild(){this.build(this.renderState,this.latestValues,this.options,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):Mt()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,n){this.latestValues[e]=n}makeTargetAnimatable(e,n=!0){return this.makeTargetAnimatableFromInstance(e,this.props,n)}update(e,n){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let i=0;i<Ag.length;i++){const r=Ag[i];this.propEventSubscriptions[r]&&(this.propEventSubscriptions[r](),delete this.propEventSubscriptions[r]);const s=e["on"+r];s&&(this.propEventSubscriptions[r]=this.on(r,s))}this.prevMotionValues=$A(this,this.scrapeMotionValuesFromProps(e,this.prevProps),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}getVariantContext(e=!1){if(e)return this.parent?this.parent.getVariantContext():void 0;if(!this.isControllingVariants){const i=this.parent?this.parent.getVariantContext()||{}:{};return this.props.initial!==void 0&&(i.initial=this.props.initial),i}const n={};for(let i=0;i<ZA;i++){const r=Ih[i],s=this.props[r];(ca(s)||s===!1)&&(n[r]=s)}return n}addVariantChild(e){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(e),()=>n.variantChildren.delete(e)}addValue(e,n){n!==this.values.get(e)&&(this.removeValue(e),this.bindToMotionValue(e,n)),this.values.set(e,n),this.latestValues[e]=n.get()}removeValue(e){this.values.delete(e);const n=this.valueSubscriptions.get(e);n&&(n(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,n){if(this.props.values&&this.props.values[e])return this.props.values[e];let i=this.values.get(e);return i===void 0&&n!==void 0&&(i=Ks(n,{owner:this}),this.addValue(e,i)),i}readValue(e){var n;return this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:(n=this.getBaseTargetFromProps(this.props,e))!==null&&n!==void 0?n:this.readValueFromInstance(this.current,e,this.options)}setBaseTarget(e,n){this.baseTarget[e]=n}getBaseTarget(e){var n;const{initial:i}=this.props,r=typeof i=="string"||typeof i=="object"?(n=Gh(this.props,i))===null||n===void 0?void 0:n[e]:void 0;if(i&&r!==void 0)return r;const s=this.getBaseTargetFromProps(this.props,e);return s!==void 0&&!pn(s)?s:this.initialValues[e]!==void 0&&r===void 0?void 0:this.baseTarget[e]}on(e,n){return this.events[e]||(this.events[e]=new Jh),this.events[e].add(n)}notify(e,...n){this.events[e]&&this.events[e].notify(...n)}}class Uy extends QA{sortInstanceNodePosition(e,n){return e.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(e,n){return e.style?e.style[n]:void 0}removeValueFromRenderState(e,{vars:n,style:i}){delete n[e],delete i[e]}makeTargetAnimatableFromInstance({transition:e,transitionEnd:n,...i},{transformValues:r},s){let o=mw(i,e||{},this);if(r&&(n&&(n=r(n)),i&&(i=r(i)),o&&(o=r(o))),s){hw(this,i,o);const a=qA(this,i,o,n);n=a.transitionEnd,i=a.target}return{transition:e,transitionEnd:n,...i}}}function JA(t){return window.getComputedStyle(t)}class eC extends Uy{constructor(){super(...arguments),this.type="html"}readValueFromInstance(e,n){if(Qr.has(n)){const i=Yh(n);return i&&i.default||0}else{const i=JA(e),r=(Sx(n)?i.getPropertyValue(n):i[n])||0;return typeof r=="string"?r.trim():r}}measureInstanceViewportBox(e,{transformPagePoint:n}){return Sy(e,n)}build(e,n,i,r){kh(e,n,i,r.transformTemplate)}scrapeMotionValuesFromProps(e,n){return Hh(e,n)}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;pn(e)&&(this.childSubscription=e.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}renderInstance(e,n,i,r){Cx(e,n,i,r)}}class tC extends Uy{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1}getBaseTargetFromProps(e,n){return e[n]}readValueFromInstance(e,n){if(Qr.has(n)){const i=Yh(n);return i&&i.default||0}return n=bx.has(n)?n:Nh(n),e.getAttribute(n)}measureInstanceViewportBox(){return Mt()}scrapeMotionValuesFromProps(e,n){return Px(e,n)}build(e,n,i,r){zh(e,n,i,this.isSVGTag,r.transformTemplate)}renderInstance(e,n,i,r){Rx(e,n,i,r)}mount(e){this.isSVGTag=Vh(e.tagName),super.mount(e)}}const nC=(t,e)=>Oh(t)?new tC(e,{enableHardwareAcceleration:!1}):new eC(e,{enableHardwareAcceleration:!0}),iC={layout:{ProjectionNode:Py,MeasureLayout:Ey}},rC={...Pw,...KT,...IA,...iC},Pe=sT((t,e)=>OT(t,e,rC,nC));function Iy(){const t=J.useRef(!1);return Dh(()=>(t.current=!0,()=>{t.current=!1}),[]),t}function sC(){const t=Iy(),[e,n]=J.useState(0),i=J.useCallback(()=>{t.current&&n(e+1)},[e]);return[J.useCallback(()=>rt.postRender(i),[i]),e]}class oC extends J.Component{getSnapshotBeforeUpdate(e){const n=this.props.childRef.current;if(n&&e.isPresent&&!this.props.isPresent){const i=this.props.sizeRef.current;i.height=n.offsetHeight||0,i.width=n.offsetWidth||0,i.top=n.offsetTop,i.left=n.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function aC({children:t,isPresent:e}){const n=J.useId(),i=J.useRef(null),r=J.useRef({width:0,height:0,top:0,left:0});return J.useInsertionEffect(()=>{const{width:s,height:o,top:a,left:l}=r.current;if(e||!i.current||!s||!o)return;i.current.dataset.motionPopId=n;const c=document.createElement("style");return document.head.appendChild(c),c.sheet&&c.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${s}px !important;
            height: ${o}px !important;
            top: ${a}px !important;
            left: ${l}px !important;
          }
        `),()=>{document.head.removeChild(c)}},[e]),J.createElement(oC,{isPresent:e,childRef:i,sizeRef:r},J.cloneElement(t,{ref:i}))}const Hu=({children:t,initial:e,isPresent:n,onExitComplete:i,custom:r,presenceAffectsLayout:s,mode:o})=>{const a=Lx(lC),l=J.useId(),c=J.useMemo(()=>({id:l,initial:e,isPresent:n,custom:r,onExitComplete:u=>{a.set(u,!0);for(const f of a.values())if(!f)return;i&&i()},register:u=>(a.set(u,!1),()=>a.delete(u))}),s?void 0:[n]);return J.useMemo(()=>{a.forEach((u,f)=>a.set(f,!1))},[n]),J.useEffect(()=>{!n&&!a.size&&i&&i()},[n]),o==="popLayout"&&(t=J.createElement(aC,{isPresent:n},t)),J.createElement(Gc.Provider,{value:c},t)};function lC(){return new Map}function cC(t){return J.useEffect(()=>()=>t(),[])}const br=t=>t.key||"";function uC(t,e){t.forEach(n=>{const i=br(n);e.set(i,n)})}function fC(t){const e=[];return J.Children.forEach(t,n=>{J.isValidElement(n)&&e.push(n)}),e}const Fy=({children:t,custom:e,initial:n=!0,onExitComplete:i,exitBeforeEnter:r,presenceAffectsLayout:s=!0,mode:o="sync"})=>{const a=J.useContext(Fh).forceRender||sC()[0],l=Iy(),c=fC(t);let u=c;const f=J.useRef(new Map).current,d=J.useRef(u),p=J.useRef(new Map).current,_=J.useRef(!0);if(Dh(()=>{_.current=!1,uC(c,p),d.current=u}),cC(()=>{_.current=!0,p.clear(),f.clear()}),_.current)return J.createElement(J.Fragment,null,u.map(g=>J.createElement(Hu,{key:br(g),isPresent:!0,initial:n?void 0:!1,presenceAffectsLayout:s,mode:o},g)));u=[...u];const x=d.current.map(br),v=c.map(br),h=x.length;for(let g=0;g<h;g++){const m=x[g];v.indexOf(m)===-1&&!f.has(m)&&f.set(m,void 0)}return o==="wait"&&f.size&&(u=[]),f.forEach((g,m)=>{if(v.indexOf(m)!==-1)return;const y=p.get(m);if(!y)return;const C=x.indexOf(m);let T=g;if(!T){const w=()=>{f.delete(m);const P=Array.from(p.keys()).filter(S=>!v.includes(S));if(P.forEach(S=>p.delete(S)),d.current=c.filter(S=>{const E=br(S);return E===m||P.includes(E)}),!f.size){if(l.current===!1)return;a(),i&&i()}};T=J.createElement(Hu,{key:br(y),isPresent:!1,onExitComplete:w,custom:e,presenceAffectsLayout:s,mode:o},y),f.set(m,T)}u.splice(C,0,T)}),u=u.map(g=>{const m=g.key;return f.has(m)?g:J.createElement(Hu,{key:br(g),isPresent:!0,presenceAffectsLayout:s,mode:o},g)}),J.createElement(J.Fragment,null,f.size?u:u.map(g=>J.cloneElement(g)))};/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ep="160",dC=0,Cg=1,hC=2,Oy=1,pC=2,mi=3,fr=0,hn=1,_i=2,rr=0,Vs=1,Go=2,bg=3,Rg=4,mC=5,Lr=100,gC=101,vC=102,Pg=103,Lg=104,_C=200,xC=201,yC=202,SC=203,Cd=204,bd=205,MC=206,EC=207,TC=208,wC=209,AC=210,CC=211,bC=212,RC=213,PC=214,LC=0,DC=1,NC=2,xc=3,UC=4,IC=5,FC=6,OC=7,ky=0,kC=1,BC=2,sr=0,zC=1,VC=2,HC=3,GC=4,WC=5,jC=6,By=300,Qs=301,Js=302,Rd=303,Pd=304,Kc=306,Ld=1e3,$n=1001,Dd=1002,en=1003,Dg=1004,Gu=1005,Nn=1006,XC=1007,da=1008,or=1009,qC=1010,YC=1011,tp=1012,zy=1013,qi=1014,Yi=1015,ha=1016,Vy=1017,Hy=1018,zr=1020,$C=1021,Kn=1023,KC=1024,ZC=1025,Vr=1026,eo=1027,QC=1028,Gy=1029,JC=1030,Wy=1031,jy=1033,Wu=33776,ju=33777,Xu=33778,qu=33779,Ng=35840,Ug=35841,Ig=35842,Fg=35843,Xy=36196,Og=37492,kg=37496,Bg=37808,zg=37809,Vg=37810,Hg=37811,Gg=37812,Wg=37813,jg=37814,Xg=37815,qg=37816,Yg=37817,$g=37818,Kg=37819,Zg=37820,Qg=37821,Yu=36492,Jg=36494,ev=36495,eb=36283,tv=36284,nv=36285,iv=36286,qy=3e3,Hr=3001,tb=3200,nb=3201,ib=0,rb=1,In="",It="srgb",Li="srgb-linear",np="display-p3",Zc="display-p3-linear",yc="linear",ot="srgb",Sc="rec709",Mc="p3",ts=7680,rv=519,sb=512,ob=513,ab=514,Yy=515,lb=516,cb=517,ub=518,fb=519,sv=35044,ov="300 es",Nd=1035,Mi=2e3,Ec=2001;class so{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Gt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],$u=Math.PI/180,Ud=180/Math.PI;function Ea(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Gt[t&255]+Gt[t>>8&255]+Gt[t>>16&255]+Gt[t>>24&255]+"-"+Gt[e&255]+Gt[e>>8&255]+"-"+Gt[e>>16&15|64]+Gt[e>>24&255]+"-"+Gt[n&63|128]+Gt[n>>8&255]+"-"+Gt[n>>16&255]+Gt[n>>24&255]+Gt[i&255]+Gt[i>>8&255]+Gt[i>>16&255]+Gt[i>>24&255]).toLowerCase()}function ln(t,e,n){return Math.max(e,Math.min(n,t))}function db(t,e){return(t%e+e)%e}function Ku(t,e,n){return(1-n)*t+n*e}function av(t){return(t&t-1)===0&&t!==0}function Id(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function yo(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function on(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class $e{constructor(e=0,n=0){$e.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(ln(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class We{constructor(e,n,i,r,s,o,a,l,c){We.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=n,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],d=i[2],p=i[5],_=i[8],x=r[0],v=r[3],h=r[6],g=r[1],m=r[4],y=r[7],C=r[2],T=r[5],w=r[8];return s[0]=o*x+a*g+l*C,s[3]=o*v+a*m+l*T,s[6]=o*h+a*y+l*w,s[1]=c*x+u*g+f*C,s[4]=c*v+u*m+f*T,s[7]=c*h+u*y+f*w,s[2]=d*x+p*g+_*C,s[5]=d*v+p*m+_*T,s[8]=d*h+p*y+_*w,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return n*o*u-n*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,d=a*l-u*s,p=c*s-o*l,_=n*f+i*d+r*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/_;return e[0]=f*x,e[1]=(r*c-u*i)*x,e[2]=(a*i-r*o)*x,e[3]=d*x,e[4]=(u*n-r*l)*x,e[5]=(r*s-a*n)*x,e[6]=p*x,e[7]=(i*l-c*n)*x,e[8]=(o*n-i*s)*x,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(Zu.makeScale(e,n)),this}rotate(e){return this.premultiply(Zu.makeRotation(-e)),this}translate(e,n){return this.premultiply(Zu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Zu=new We;function $y(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Tc(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function hb(){const t=Tc("canvas");return t.style.display="block",t}const lv={};function Wo(t){t in lv||(lv[t]=!0,console.warn(t))}const cv=new We().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),uv=new We().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),el={[Li]:{transfer:yc,primaries:Sc,toReference:t=>t,fromReference:t=>t},[It]:{transfer:ot,primaries:Sc,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[Zc]:{transfer:yc,primaries:Mc,toReference:t=>t.applyMatrix3(uv),fromReference:t=>t.applyMatrix3(cv)},[np]:{transfer:ot,primaries:Mc,toReference:t=>t.convertSRGBToLinear().applyMatrix3(uv),fromReference:t=>t.applyMatrix3(cv).convertLinearToSRGB()}},pb=new Set([Li,Zc]),Je={enabled:!0,_workingColorSpace:Li,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!pb.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=el[e].toReference,r=el[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return el[t].primaries},getTransfer:function(t){return t===In?yc:el[t].transfer}};function Hs(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Qu(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let ns;class Ky{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ns===void 0&&(ns=Tc("canvas")),ns.width=e.width,ns.height=e.height;const i=ns.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=ns}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Tc("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Hs(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Hs(n[i]/255)*255):n[i]=Hs(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let mb=0;class Zy{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:mb++}),this.uuid=Ea(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Ju(r[o].image)):s.push(Ju(r[o]))}else s=Ju(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Ju(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?Ky.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let gb=0;class Sn extends so{constructor(e=Sn.DEFAULT_IMAGE,n=Sn.DEFAULT_MAPPING,i=$n,r=$n,s=Nn,o=da,a=Kn,l=or,c=Sn.DEFAULT_ANISOTROPY,u=In){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:gb++}),this.uuid=Ea(),this.name="",this.source=new Zy(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new $e(0,0),this.repeat=new $e(1,1),this.center=new $e(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(Wo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===Hr?It:In),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==By)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ld:e.x=e.x-Math.floor(e.x);break;case $n:e.x=e.x<0?0:1;break;case Dd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ld:e.y=e.y-Math.floor(e.y);break;case $n:e.y=e.y<0?0:1;break;case Dd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Wo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===It?Hr:qy}set encoding(e){Wo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Hr?It:In}}Sn.DEFAULT_IMAGE=null;Sn.DEFAULT_MAPPING=By;Sn.DEFAULT_ANISOTROPY=1;class Ft{constructor(e=0,n=0,i=0,r=1){Ft.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],d=l[1],p=l[5],_=l[9],x=l[2],v=l[6],h=l[10];if(Math.abs(u-d)<.01&&Math.abs(f-x)<.01&&Math.abs(_-v)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+x)<.1&&Math.abs(_+v)<.1&&Math.abs(c+p+h-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const m=(c+1)/2,y=(p+1)/2,C=(h+1)/2,T=(u+d)/4,w=(f+x)/4,P=(_+v)/4;return m>y&&m>C?m<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(m),r=T/i,s=w/i):y>C?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=T/r,s=P/r):C<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),i=w/s,r=P/s),this.set(i,r,s,n),this}let g=Math.sqrt((v-_)*(v-_)+(f-x)*(f-x)+(d-u)*(d-u));return Math.abs(g)<.001&&(g=1),this.x=(v-_)/g,this.y=(f-x)/g,this.z=(d-u)/g,this.w=Math.acos((c+p+h-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class vb extends so{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Ft(0,0,e,n),this.scissorTest=!1,this.viewport=new Ft(0,0,e,n);const r={width:e,height:n,depth:1};i.encoding!==void 0&&(Wo("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Hr?It:In),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Nn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new Sn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,n,i=1){(this.width!==e||this.height!==n||this.depth!==i)&&(this.width=e,this.height=n,this.depth=i,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new Zy(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Yr extends vb{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class Qy extends Sn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=en,this.minFilter=en,this.wrapR=$n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class _b extends Sn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=en,this.minFilter=en,this.wrapR=$n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ta{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3];const d=s[o+0],p=s[o+1],_=s[o+2],x=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f;return}if(a===1){e[n+0]=d,e[n+1]=p,e[n+2]=_,e[n+3]=x;return}if(f!==x||l!==d||c!==p||u!==_){let v=1-a;const h=l*d+c*p+u*_+f*x,g=h>=0?1:-1,m=1-h*h;if(m>Number.EPSILON){const C=Math.sqrt(m),T=Math.atan2(C,h*g);v=Math.sin(v*T)/C,a=Math.sin(a*T)/C}const y=a*g;if(l=l*v+d*y,c=c*v+p*y,u=u*v+_*y,f=f*v+x*y,v===1-a){const C=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=C,c*=C,u*=C,f*=C}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[o],d=s[o+1],p=s[o+2],_=s[o+3];return e[n]=a*_+u*f+l*p-c*d,e[n+1]=l*_+u*d+c*f-a*p,e[n+2]=c*_+u*p+a*d-l*f,e[n+3]=u*_-a*f-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),f=a(s/2),d=l(i/2),p=l(r/2),_=l(s/2);switch(o){case"XYZ":this._x=d*u*f+c*p*_,this._y=c*p*f-d*u*_,this._z=c*u*_+d*p*f,this._w=c*u*f-d*p*_;break;case"YXZ":this._x=d*u*f+c*p*_,this._y=c*p*f-d*u*_,this._z=c*u*_-d*p*f,this._w=c*u*f+d*p*_;break;case"ZXY":this._x=d*u*f-c*p*_,this._y=c*p*f+d*u*_,this._z=c*u*_+d*p*f,this._w=c*u*f-d*p*_;break;case"ZYX":this._x=d*u*f-c*p*_,this._y=c*p*f+d*u*_,this._z=c*u*_-d*p*f,this._w=c*u*f+d*p*_;break;case"YZX":this._x=d*u*f+c*p*_,this._y=c*p*f+d*u*_,this._z=c*u*_-d*p*f,this._w=c*u*f-d*p*_;break;case"XZY":this._x=d*u*f-c*p*_,this._y=c*p*f-d*u*_,this._z=c*u*_+d*p*f,this._w=c*u*f+d*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],u=n[6],f=n[10],d=i+a+f;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>f){const p=2*Math.sqrt(1+i-a-f);this._w=(u-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>f){const p=2*Math.sqrt(1+a-i-f);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+f-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ln(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-n;return this._w=p*o+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-n)*u)/c,d=Math.sin(n*u)/c;return this._w=o*f+this._w*d,this._x=i*f+this._x*d,this._y=r*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=Math.random(),n=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(n*Math.cos(r),i*Math.sin(s),i*Math.cos(s),n*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{constructor(e=0,n=0,i=0){F.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(fv.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(fv.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*n-s*r),f=2*(s*i-o*n);return this.x=n+l*c+o*f-a*u,this.y=i+l*u+a*c-s*f,this.z=r+l*f+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ef.copy(this).projectOnVector(e),this.sub(ef)}reflect(e){return this.sub(ef.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(ln(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ef=new F,fv=new Ta;class wa{constructor(e=new F(1/0,1/0,1/0),n=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Hn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Hn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Hn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Hn):Hn.fromBufferAttribute(s,o),Hn.applyMatrix4(e.matrixWorld),this.expandByPoint(Hn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),tl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),tl.copy(i.boundingBox)),tl.applyMatrix4(e.matrixWorld),this.union(tl)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Hn),Hn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(So),nl.subVectors(this.max,So),is.subVectors(e.a,So),rs.subVectors(e.b,So),ss.subVectors(e.c,So),Ui.subVectors(rs,is),Ii.subVectors(ss,rs),yr.subVectors(is,ss);let n=[0,-Ui.z,Ui.y,0,-Ii.z,Ii.y,0,-yr.z,yr.y,Ui.z,0,-Ui.x,Ii.z,0,-Ii.x,yr.z,0,-yr.x,-Ui.y,Ui.x,0,-Ii.y,Ii.x,0,-yr.y,yr.x,0];return!tf(n,is,rs,ss,nl)||(n=[1,0,0,0,1,0,0,0,1],!tf(n,is,rs,ss,nl))?!1:(il.crossVectors(Ui,Ii),n=[il.x,il.y,il.z],tf(n,is,rs,ss,nl))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Hn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Hn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ui[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ui[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ui[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ui[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ui[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ui[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ui[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ui[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ui),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ui=[new F,new F,new F,new F,new F,new F,new F,new F],Hn=new F,tl=new wa,is=new F,rs=new F,ss=new F,Ui=new F,Ii=new F,yr=new F,So=new F,nl=new F,il=new F,Sr=new F;function tf(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){Sr.fromArray(t,s);const a=r.x*Math.abs(Sr.x)+r.y*Math.abs(Sr.y)+r.z*Math.abs(Sr.z),l=e.dot(Sr),c=n.dot(Sr),u=i.dot(Sr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const xb=new wa,Mo=new F,nf=new F;class Aa{constructor(e=new F,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):xb.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Mo.subVectors(e,this.center);const n=Mo.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Mo,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(nf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Mo.copy(e.center).add(nf)),this.expandByPoint(Mo.copy(e.center).sub(nf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const fi=new F,rf=new F,rl=new F,Fi=new F,sf=new F,sl=new F,of=new F;class ip{constructor(e=new F,n=new F(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,fi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=fi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(fi.copy(this.origin).addScaledVector(this.direction,n),fi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){rf.copy(e).add(n).multiplyScalar(.5),rl.copy(n).sub(e).normalize(),Fi.copy(this.origin).sub(rf);const s=e.distanceTo(n)*.5,o=-this.direction.dot(rl),a=Fi.dot(this.direction),l=-Fi.dot(rl),c=Fi.lengthSq(),u=Math.abs(1-o*o);let f,d,p,_;if(u>0)if(f=o*l-a,d=o*a-l,_=s*u,f>=0)if(d>=-_)if(d<=_){const x=1/u;f*=x,d*=x,p=f*(f+o*d+2*a)+d*(o*f+d+2*l)+c}else d=s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+c;else d=-s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+c;else d<=-_?(f=Math.max(0,-(-o*s+a)),d=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+d*(d+2*l)+c):d<=_?(f=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+c):(f=Math.max(0,-(o*s+a)),d=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+d*(d+2*l)+c);else d=o>0?-s:s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(rf).addScaledVector(rl,d),p}intersectSphere(e,n){fi.subVectors(e.center,this.origin);const i=fi.dot(this.direction),r=fi.dot(fi)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,fi)!==null}intersectTriangle(e,n,i,r,s){sf.subVectors(n,e),sl.subVectors(i,e),of.crossVectors(sf,sl);let o=this.direction.dot(of),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Fi.subVectors(this.origin,e);const l=a*this.direction.dot(sl.crossVectors(Fi,sl));if(l<0)return null;const c=a*this.direction.dot(sf.cross(Fi));if(c<0||l+c>o)return null;const u=-a*Fi.dot(of);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class At{constructor(e,n,i,r,s,o,a,l,c,u,f,d,p,_,x,v){At.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,u,f,d,p,_,x,v)}set(e,n,i,r,s,o,a,l,c,u,f,d,p,_,x,v){const h=this.elements;return h[0]=e,h[4]=n,h[8]=i,h[12]=r,h[1]=s,h[5]=o,h[9]=a,h[13]=l,h[2]=c,h[6]=u,h[10]=f,h[14]=d,h[3]=p,h[7]=_,h[11]=x,h[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new At().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/os.setFromMatrixColumn(e,0).length(),s=1/os.setFromMatrixColumn(e,1).length(),o=1/os.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=o*u,p=o*f,_=a*u,x=a*f;n[0]=l*u,n[4]=-l*f,n[8]=c,n[1]=p+_*c,n[5]=d-x*c,n[9]=-a*l,n[2]=x-d*c,n[6]=_+p*c,n[10]=o*l}else if(e.order==="YXZ"){const d=l*u,p=l*f,_=c*u,x=c*f;n[0]=d+x*a,n[4]=_*a-p,n[8]=o*c,n[1]=o*f,n[5]=o*u,n[9]=-a,n[2]=p*a-_,n[6]=x+d*a,n[10]=o*l}else if(e.order==="ZXY"){const d=l*u,p=l*f,_=c*u,x=c*f;n[0]=d-x*a,n[4]=-o*f,n[8]=_+p*a,n[1]=p+_*a,n[5]=o*u,n[9]=x-d*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const d=o*u,p=o*f,_=a*u,x=a*f;n[0]=l*u,n[4]=_*c-p,n[8]=d*c+x,n[1]=l*f,n[5]=x*c+d,n[9]=p*c-_,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const d=o*l,p=o*c,_=a*l,x=a*c;n[0]=l*u,n[4]=x-d*f,n[8]=_*f+p,n[1]=f,n[5]=o*u,n[9]=-a*u,n[2]=-c*u,n[6]=p*f+_,n[10]=d-x*f}else if(e.order==="XZY"){const d=o*l,p=o*c,_=a*l,x=a*c;n[0]=l*u,n[4]=-f,n[8]=c*u,n[1]=d*f+x,n[5]=o*u,n[9]=p*f-_,n[2]=_*f-p,n[6]=a*u,n[10]=x*f+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(yb,e,Sb)}lookAt(e,n,i){const r=this.elements;return gn.subVectors(e,n),gn.lengthSq()===0&&(gn.z=1),gn.normalize(),Oi.crossVectors(i,gn),Oi.lengthSq()===0&&(Math.abs(i.z)===1?gn.x+=1e-4:gn.z+=1e-4,gn.normalize(),Oi.crossVectors(i,gn)),Oi.normalize(),ol.crossVectors(gn,Oi),r[0]=Oi.x,r[4]=ol.x,r[8]=gn.x,r[1]=Oi.y,r[5]=ol.y,r[9]=gn.y,r[2]=Oi.z,r[6]=ol.z,r[10]=gn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],d=i[9],p=i[13],_=i[2],x=i[6],v=i[10],h=i[14],g=i[3],m=i[7],y=i[11],C=i[15],T=r[0],w=r[4],P=r[8],S=r[12],E=r[1],U=r[5],j=r[9],Q=r[13],L=r[2],B=r[6],W=r[10],$=r[14],N=r[3],O=r[7],V=r[11],Y=r[15];return s[0]=o*T+a*E+l*L+c*N,s[4]=o*w+a*U+l*B+c*O,s[8]=o*P+a*j+l*W+c*V,s[12]=o*S+a*Q+l*$+c*Y,s[1]=u*T+f*E+d*L+p*N,s[5]=u*w+f*U+d*B+p*O,s[9]=u*P+f*j+d*W+p*V,s[13]=u*S+f*Q+d*$+p*Y,s[2]=_*T+x*E+v*L+h*N,s[6]=_*w+x*U+v*B+h*O,s[10]=_*P+x*j+v*W+h*V,s[14]=_*S+x*Q+v*$+h*Y,s[3]=g*T+m*E+y*L+C*N,s[7]=g*w+m*U+y*B+C*O,s[11]=g*P+m*j+y*W+C*V,s[15]=g*S+m*Q+y*$+C*Y,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],d=e[10],p=e[14],_=e[3],x=e[7],v=e[11],h=e[15];return _*(+s*l*f-r*c*f-s*a*d+i*c*d+r*a*p-i*l*p)+x*(+n*l*p-n*c*d+s*o*d-r*o*p+r*c*u-s*l*u)+v*(+n*c*f-n*a*p-s*o*f+i*o*p+s*a*u-i*c*u)+h*(-r*a*u-n*l*f+n*a*d+r*o*f-i*o*d+i*l*u)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],d=e[10],p=e[11],_=e[12],x=e[13],v=e[14],h=e[15],g=f*v*c-x*d*c+x*l*p-a*v*p-f*l*h+a*d*h,m=_*d*c-u*v*c-_*l*p+o*v*p+u*l*h-o*d*h,y=u*x*c-_*f*c+_*a*p-o*x*p-u*a*h+o*f*h,C=_*f*l-u*x*l-_*a*d+o*x*d+u*a*v-o*f*v,T=n*g+i*m+r*y+s*C;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/T;return e[0]=g*w,e[1]=(x*d*s-f*v*s-x*r*p+i*v*p+f*r*h-i*d*h)*w,e[2]=(a*v*s-x*l*s+x*r*c-i*v*c-a*r*h+i*l*h)*w,e[3]=(f*l*s-a*d*s-f*r*c+i*d*c+a*r*p-i*l*p)*w,e[4]=m*w,e[5]=(u*v*s-_*d*s+_*r*p-n*v*p-u*r*h+n*d*h)*w,e[6]=(_*l*s-o*v*s-_*r*c+n*v*c+o*r*h-n*l*h)*w,e[7]=(o*d*s-u*l*s+u*r*c-n*d*c-o*r*p+n*l*p)*w,e[8]=y*w,e[9]=(_*f*s-u*x*s-_*i*p+n*x*p+u*i*h-n*f*h)*w,e[10]=(o*x*s-_*a*s+_*i*c-n*x*c-o*i*h+n*a*h)*w,e[11]=(u*a*s-o*f*s-u*i*c+n*f*c+o*i*p-n*a*p)*w,e[12]=C*w,e[13]=(u*x*r-_*f*r+_*i*d-n*x*d-u*i*v+n*f*v)*w,e[14]=(_*a*r-o*x*r-_*i*l+n*x*l+o*i*v-n*a*v)*w,e[15]=(o*f*r-u*a*r+u*i*l-n*f*l-o*i*d+n*a*d)*w,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,u=o+o,f=a+a,d=s*c,p=s*u,_=s*f,x=o*u,v=o*f,h=a*f,g=l*c,m=l*u,y=l*f,C=i.x,T=i.y,w=i.z;return r[0]=(1-(x+h))*C,r[1]=(p+y)*C,r[2]=(_-m)*C,r[3]=0,r[4]=(p-y)*T,r[5]=(1-(d+h))*T,r[6]=(v+g)*T,r[7]=0,r[8]=(_+m)*w,r[9]=(v-g)*w,r[10]=(1-(d+x))*w,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=os.set(r[0],r[1],r[2]).length();const o=os.set(r[4],r[5],r[6]).length(),a=os.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Gn.copy(this);const c=1/s,u=1/o,f=1/a;return Gn.elements[0]*=c,Gn.elements[1]*=c,Gn.elements[2]*=c,Gn.elements[4]*=u,Gn.elements[5]*=u,Gn.elements[6]*=u,Gn.elements[8]*=f,Gn.elements[9]*=f,Gn.elements[10]*=f,n.setFromRotationMatrix(Gn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=Mi){const l=this.elements,c=2*s/(n-e),u=2*s/(i-r),f=(n+e)/(n-e),d=(i+r)/(i-r);let p,_;if(a===Mi)p=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===Ec)p=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=Mi){const l=this.elements,c=1/(n-e),u=1/(i-r),f=1/(o-s),d=(n+e)*c,p=(i+r)*u;let _,x;if(a===Mi)_=(o+s)*f,x=-2*f;else if(a===Ec)_=s*f,x=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=x,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const os=new F,Gn=new At,yb=new F(0,0,0),Sb=new F(1,1,1),Oi=new F,ol=new F,gn=new F,dv=new At,hv=new Ta;class Qc{constructor(e=0,n=0,i=0,r=Qc.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],f=r[2],d=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(ln(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ln(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(ln(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-ln(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ln(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-ln(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return dv.makeRotationFromQuaternion(e),this.setFromRotationMatrix(dv,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return hv.setFromEuler(this),this.setFromQuaternion(hv,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Qc.DEFAULT_ORDER="XYZ";class Jy{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Mb=0;const pv=new F,as=new Ta,di=new At,al=new F,Eo=new F,Eb=new F,Tb=new Ta,mv=new F(1,0,0),gv=new F(0,1,0),vv=new F(0,0,1),wb={type:"added"},Ab={type:"removed"};class nn extends so{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Mb++}),this.uuid=Ea(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=nn.DEFAULT_UP.clone();const e=new F,n=new Qc,i=new Ta,r=new F(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new At},normalMatrix:{value:new We}}),this.matrix=new At,this.matrixWorld=new At,this.matrixAutoUpdate=nn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Jy,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return as.setFromAxisAngle(e,n),this.quaternion.multiply(as),this}rotateOnWorldAxis(e,n){return as.setFromAxisAngle(e,n),this.quaternion.premultiply(as),this}rotateX(e){return this.rotateOnAxis(mv,e)}rotateY(e){return this.rotateOnAxis(gv,e)}rotateZ(e){return this.rotateOnAxis(vv,e)}translateOnAxis(e,n){return pv.copy(e).applyQuaternion(this.quaternion),this.position.add(pv.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(mv,e)}translateY(e){return this.translateOnAxis(gv,e)}translateZ(e){return this.translateOnAxis(vv,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(di.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?al.copy(e):al.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Eo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?di.lookAt(Eo,al,this.up):di.lookAt(al,Eo,this.up),this.quaternion.setFromRotationMatrix(di),r&&(di.extractRotation(r.matrixWorld),as.setFromRotationMatrix(di),this.quaternion.premultiply(as.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(wb)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(Ab)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),di.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),di.multiply(e.parent.matrixWorld)),e.applyMatrix4(di),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Eo,e,Eb),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Eo,Tb,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const s=n[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),d=o(e.skeletons),p=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}nn.DEFAULT_UP=new F(0,1,0);nn.DEFAULT_MATRIX_AUTO_UPDATE=!0;nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Wn=new F,hi=new F,af=new F,pi=new F,ls=new F,cs=new F,_v=new F,lf=new F,cf=new F,uf=new F;let ll=!1;class Yn{constructor(e=new F,n=new F,i=new F){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Wn.subVectors(e,n),r.cross(Wn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Wn.subVectors(r,n),hi.subVectors(i,n),af.subVectors(e,n);const o=Wn.dot(Wn),a=Wn.dot(hi),l=Wn.dot(af),c=hi.dot(hi),u=hi.dot(af),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const d=1/f,p=(c*l-a*u)*d,_=(o*u-a*l)*d;return s.set(1-p-_,_,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,pi)===null?!1:pi.x>=0&&pi.y>=0&&pi.x+pi.y<=1}static getUV(e,n,i,r,s,o,a,l){return ll===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ll=!0),this.getInterpolation(e,n,i,r,s,o,a,l)}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,pi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,pi.x),l.addScaledVector(o,pi.y),l.addScaledVector(a,pi.z),l)}static isFrontFacing(e,n,i,r){return Wn.subVectors(i,n),hi.subVectors(e,n),Wn.cross(hi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Wn.subVectors(this.c,this.b),hi.subVectors(this.a,this.b),Wn.cross(hi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Yn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Yn.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,i,r,s){return ll===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ll=!0),Yn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}getInterpolation(e,n,i,r,s){return Yn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Yn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Yn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;ls.subVectors(r,i),cs.subVectors(s,i),lf.subVectors(e,i);const l=ls.dot(lf),c=cs.dot(lf);if(l<=0&&c<=0)return n.copy(i);cf.subVectors(e,r);const u=ls.dot(cf),f=cs.dot(cf);if(u>=0&&f<=u)return n.copy(r);const d=l*f-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),n.copy(i).addScaledVector(ls,o);uf.subVectors(e,s);const p=ls.dot(uf),_=cs.dot(uf);if(_>=0&&p<=_)return n.copy(s);const x=p*c-l*_;if(x<=0&&c>=0&&_<=0)return a=c/(c-_),n.copy(i).addScaledVector(cs,a);const v=u*_-p*f;if(v<=0&&f-u>=0&&p-_>=0)return _v.subVectors(s,r),a=(f-u)/(f-u+(p-_)),n.copy(r).addScaledVector(_v,a);const h=1/(v+x+d);return o=x*h,a=d*h,n.copy(i).addScaledVector(ls,o).addScaledVector(cs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const eS={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ki={h:0,s:0,l:0},cl={h:0,s:0,l:0};function ff(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Ye{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=It){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Je.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=Je.workingColorSpace){return this.r=e,this.g=n,this.b=i,Je.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=Je.workingColorSpace){if(e=db(e,1),n=ln(n,0,1),i=ln(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=ff(o,s,e+1/3),this.g=ff(o,s,e),this.b=ff(o,s,e-1/3)}return Je.toWorkingColorSpace(this,r),this}setStyle(e,n=It){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=It){const i=eS[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Hs(e.r),this.g=Hs(e.g),this.b=Hs(e.b),this}copyLinearToSRGB(e){return this.r=Qu(e.r),this.g=Qu(e.g),this.b=Qu(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=It){return Je.fromWorkingColorSpace(Wt.copy(this),e),Math.round(ln(Wt.r*255,0,255))*65536+Math.round(ln(Wt.g*255,0,255))*256+Math.round(ln(Wt.b*255,0,255))}getHexString(e=It){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Je.workingColorSpace){Je.fromWorkingColorSpace(Wt.copy(this),n);const i=Wt.r,r=Wt.g,s=Wt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=Je.workingColorSpace){return Je.fromWorkingColorSpace(Wt.copy(this),n),e.r=Wt.r,e.g=Wt.g,e.b=Wt.b,e}getStyle(e=It){Je.fromWorkingColorSpace(Wt.copy(this),e);const n=Wt.r,i=Wt.g,r=Wt.b;return e!==It?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(ki),this.setHSL(ki.h+e,ki.s+n,ki.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(ki),e.getHSL(cl);const i=Ku(ki.h,cl.h,n),r=Ku(ki.s,cl.s,n),s=Ku(ki.l,cl.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Wt=new Ye;Ye.NAMES=eS;let Cb=0;class oo extends so{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Cb++}),this.uuid=Ea(),this.name="",this.type="Material",this.blending=Vs,this.side=fr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Cd,this.blendDst=bd,this.blendEquation=Lr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ye(0,0,0),this.blendAlpha=0,this.depthFunc=xc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=rv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ts,this.stencilZFail=ts,this.stencilZPass=ts,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Vs&&(i.blending=this.blending),this.side!==fr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Cd&&(i.blendSrc=this.blendSrc),this.blendDst!==bd&&(i.blendDst=this.blendDst),this.blendEquation!==Lr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==xc&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==rv&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ts&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ts&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ts&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class jo extends oo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ky,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const St=new F,ul=new $e;class kn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=sv,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Yi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)ul.fromBufferAttribute(this,n),ul.applyMatrix3(e),this.setXY(n,ul.x,ul.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)St.fromBufferAttribute(this,n),St.applyMatrix3(e),this.setXYZ(n,St.x,St.y,St.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)St.fromBufferAttribute(this,n),St.applyMatrix4(e),this.setXYZ(n,St.x,St.y,St.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)St.fromBufferAttribute(this,n),St.applyNormalMatrix(e),this.setXYZ(n,St.x,St.y,St.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)St.fromBufferAttribute(this,n),St.transformDirection(e),this.setXYZ(n,St.x,St.y,St.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=yo(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=on(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=yo(n,this.array)),n}setX(e,n){return this.normalized&&(n=on(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=yo(n,this.array)),n}setY(e,n){return this.normalized&&(n=on(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=yo(n,this.array)),n}setZ(e,n){return this.normalized&&(n=on(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=yo(n,this.array)),n}setW(e,n){return this.normalized&&(n=on(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=on(n,this.array),i=on(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=on(n,this.array),i=on(i,this.array),r=on(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=on(n,this.array),i=on(i,this.array),r=on(r,this.array),s=on(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==sv&&(e.usage=this.usage),e}}class tS extends kn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class nS extends kn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class kt extends kn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let bb=0;const Rn=new At,df=new nn,us=new F,vn=new wa,To=new wa,Lt=new F;class An extends so{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:bb++}),this.uuid=Ea(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new($y(e)?nS:tS)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new We().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Rn.makeRotationFromQuaternion(e),this.applyMatrix4(Rn),this}rotateX(e){return Rn.makeRotationX(e),this.applyMatrix4(Rn),this}rotateY(e){return Rn.makeRotationY(e),this.applyMatrix4(Rn),this}rotateZ(e){return Rn.makeRotationZ(e),this.applyMatrix4(Rn),this}translate(e,n,i){return Rn.makeTranslation(e,n,i),this.applyMatrix4(Rn),this}scale(e,n,i){return Rn.makeScale(e,n,i),this.applyMatrix4(Rn),this}lookAt(e){return df.lookAt(e),df.updateMatrix(),this.applyMatrix4(df.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(us).negate(),this.translate(us.x,us.y,us.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new kt(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new wa);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];vn.setFromBufferAttribute(s),this.morphTargetsRelative?(Lt.addVectors(this.boundingBox.min,vn.min),this.boundingBox.expandByPoint(Lt),Lt.addVectors(this.boundingBox.max,vn.max),this.boundingBox.expandByPoint(Lt)):(this.boundingBox.expandByPoint(vn.min),this.boundingBox.expandByPoint(vn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Aa);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new F,1/0);return}if(e){const i=this.boundingSphere.center;if(vn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];To.setFromBufferAttribute(a),this.morphTargetsRelative?(Lt.addVectors(vn.min,To.min),vn.expandByPoint(Lt),Lt.addVectors(vn.max,To.max),vn.expandByPoint(Lt)):(vn.expandByPoint(To.min),vn.expandByPoint(To.max))}vn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Lt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Lt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Lt.fromBufferAttribute(a,c),l&&(us.fromBufferAttribute(e,c),Lt.add(us)),r=Math.max(r,i.distanceToSquared(Lt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=n.position.array,s=n.normal.array,o=n.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new kn(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let E=0;E<a;E++)c[E]=new F,u[E]=new F;const f=new F,d=new F,p=new F,_=new $e,x=new $e,v=new $e,h=new F,g=new F;function m(E,U,j){f.fromArray(r,E*3),d.fromArray(r,U*3),p.fromArray(r,j*3),_.fromArray(o,E*2),x.fromArray(o,U*2),v.fromArray(o,j*2),d.sub(f),p.sub(f),x.sub(_),v.sub(_);const Q=1/(x.x*v.y-v.x*x.y);isFinite(Q)&&(h.copy(d).multiplyScalar(v.y).addScaledVector(p,-x.y).multiplyScalar(Q),g.copy(p).multiplyScalar(x.x).addScaledVector(d,-v.x).multiplyScalar(Q),c[E].add(h),c[U].add(h),c[j].add(h),u[E].add(g),u[U].add(g),u[j].add(g))}let y=this.groups;y.length===0&&(y=[{start:0,count:i.length}]);for(let E=0,U=y.length;E<U;++E){const j=y[E],Q=j.start,L=j.count;for(let B=Q,W=Q+L;B<W;B+=3)m(i[B+0],i[B+1],i[B+2])}const C=new F,T=new F,w=new F,P=new F;function S(E){w.fromArray(s,E*3),P.copy(w);const U=c[E];C.copy(U),C.sub(w.multiplyScalar(w.dot(U))).normalize(),T.crossVectors(P,U);const Q=T.dot(u[E])<0?-1:1;l[E*4]=C.x,l[E*4+1]=C.y,l[E*4+2]=C.z,l[E*4+3]=Q}for(let E=0,U=y.length;E<U;++E){const j=y[E],Q=j.start,L=j.count;for(let B=Q,W=Q+L;B<W;B+=3)S(i[B+0]),S(i[B+1]),S(i[B+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new kn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const r=new F,s=new F,o=new F,a=new F,l=new F,c=new F,u=new F,f=new F;if(e)for(let d=0,p=e.count;d<p;d+=3){const _=e.getX(d+0),x=e.getX(d+1),v=e.getX(d+2);r.fromBufferAttribute(n,_),s.fromBufferAttribute(n,x),o.fromBufferAttribute(n,v),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,v),a.add(u),l.add(u),c.add(u),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(v,c.x,c.y,c.z)}else for(let d=0,p=n.count;d<p;d+=3)r.fromBufferAttribute(n,d+0),s.fromBufferAttribute(n,d+1),o.fromBufferAttribute(n,d+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Lt.fromBufferAttribute(e,n),Lt.normalize(),e.setXYZ(n,Lt.x,Lt.y,Lt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,d=new c.constructor(l.length*u);let p=0,_=0;for(let x=0,v=l.length;x<v;x++){a.isInterleavedBufferAttribute?p=l[x]*a.data.stride+a.offset:p=l[x]*u;for(let h=0;h<u;h++)d[_++]=c[p++]}return new kn(d,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new An,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){const d=c[u],p=e(d,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,d=c.length;f<d;f++){const p=c[f];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(n))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let d=0,p=f.length;d<p;d++)u.push(f[d].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const xv=new At,Mr=new ip,fl=new Aa,yv=new F,fs=new F,ds=new F,hs=new F,hf=new F,dl=new F,hl=new $e,pl=new $e,ml=new $e,Sv=new F,Mv=new F,Ev=new F,gl=new F,vl=new F;class Zn extends nn{constructor(e=new An,n=new jo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){dl.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],f=s[l];u!==0&&(hf.fromBufferAttribute(f,e),o?dl.addScaledVector(hf,u):dl.addScaledVector(hf.sub(n),u))}n.add(dl)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),fl.copy(i.boundingSphere),fl.applyMatrix4(s),Mr.copy(e.ray).recast(e.near),!(fl.containsPoint(Mr.origin)===!1&&(Mr.intersectSphere(fl,yv)===null||Mr.origin.distanceToSquared(yv)>(e.far-e.near)**2))&&(xv.copy(s).invert(),Mr.copy(e.ray).applyMatrix4(xv),!(i.boundingBox!==null&&Mr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Mr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,d=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,x=d.length;_<x;_++){const v=d[_],h=o[v.materialIndex],g=Math.max(v.start,p.start),m=Math.min(a.count,Math.min(v.start+v.count,p.start+p.count));for(let y=g,C=m;y<C;y+=3){const T=a.getX(y),w=a.getX(y+1),P=a.getX(y+2);r=_l(this,h,e,i,c,u,f,T,w,P),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=v.materialIndex,n.push(r))}}else{const _=Math.max(0,p.start),x=Math.min(a.count,p.start+p.count);for(let v=_,h=x;v<h;v+=3){const g=a.getX(v),m=a.getX(v+1),y=a.getX(v+2);r=_l(this,o,e,i,c,u,f,g,m,y),r&&(r.faceIndex=Math.floor(v/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,x=d.length;_<x;_++){const v=d[_],h=o[v.materialIndex],g=Math.max(v.start,p.start),m=Math.min(l.count,Math.min(v.start+v.count,p.start+p.count));for(let y=g,C=m;y<C;y+=3){const T=y,w=y+1,P=y+2;r=_l(this,h,e,i,c,u,f,T,w,P),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=v.materialIndex,n.push(r))}}else{const _=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let v=_,h=x;v<h;v+=3){const g=v,m=v+1,y=v+2;r=_l(this,o,e,i,c,u,f,g,m,y),r&&(r.faceIndex=Math.floor(v/3),n.push(r))}}}}function Rb(t,e,n,i,r,s,o,a){let l;if(e.side===hn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===fr,a),l===null)return null;vl.copy(a),vl.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(vl);return c<n.near||c>n.far?null:{distance:c,point:vl.clone(),object:t}}function _l(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,fs),t.getVertexPosition(l,ds),t.getVertexPosition(c,hs);const u=Rb(t,e,n,i,fs,ds,hs,gl);if(u){r&&(hl.fromBufferAttribute(r,a),pl.fromBufferAttribute(r,l),ml.fromBufferAttribute(r,c),u.uv=Yn.getInterpolation(gl,fs,ds,hs,hl,pl,ml,new $e)),s&&(hl.fromBufferAttribute(s,a),pl.fromBufferAttribute(s,l),ml.fromBufferAttribute(s,c),u.uv1=Yn.getInterpolation(gl,fs,ds,hs,hl,pl,ml,new $e),u.uv2=u.uv1),o&&(Sv.fromBufferAttribute(o,a),Mv.fromBufferAttribute(o,l),Ev.fromBufferAttribute(o,c),u.normal=Yn.getInterpolation(gl,fs,ds,hs,Sv,Mv,Ev,new F),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new F,materialIndex:0};Yn.getNormal(fs,ds,hs,f.normal),u.face=f}return u}class Ca extends An{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],f=[];let d=0,p=0;_("z","y","x",-1,-1,i,n,e,o,s,0),_("z","y","x",1,-1,i,n,-e,o,s,1),_("x","z","y",1,1,e,i,n,r,o,2),_("x","z","y",1,-1,e,i,-n,r,o,3),_("x","y","z",1,-1,e,n,i,r,s,4),_("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new kt(c,3)),this.setAttribute("normal",new kt(u,3)),this.setAttribute("uv",new kt(f,2));function _(x,v,h,g,m,y,C,T,w,P,S){const E=y/w,U=C/P,j=y/2,Q=C/2,L=T/2,B=w+1,W=P+1;let $=0,N=0;const O=new F;for(let V=0;V<W;V++){const Y=V*U-Q;for(let Z=0;Z<B;Z++){const q=Z*E-j;O[x]=q*g,O[v]=Y*m,O[h]=L,c.push(O.x,O.y,O.z),O[x]=0,O[v]=0,O[h]=T>0?1:-1,u.push(O.x,O.y,O.z),f.push(Z/w),f.push(1-V/P),$+=1}}for(let V=0;V<P;V++)for(let Y=0;Y<w;Y++){const Z=d+Y+B*V,q=d+Y+B*(V+1),K=d+(Y+1)+B*(V+1),ae=d+(Y+1)+B*V;l.push(Z,q,ae),l.push(q,K,ae),N+=6}a.addGroup(p,N,S),p+=N,d+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ca(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function to(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Zt(t){const e={};for(let n=0;n<t.length;n++){const i=to(t[n]);for(const r in i)e[r]=i[r]}return e}function Pb(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function iS(t){return t.getRenderTarget()===null?t.outputColorSpace:Je.workingColorSpace}const Lb={clone:to,merge:Zt};var Db=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Nb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class $r extends oo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Db,this.fragmentShader=Nb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=to(e.uniforms),this.uniformsGroups=Pb(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class rS extends nn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new At,this.projectionMatrix=new At,this.projectionMatrixInverse=new At,this.coordinateSystem=Mi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Un extends rS{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Ud*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan($u*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ud*2*Math.atan(Math.tan($u*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan($u*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const ps=-90,ms=1;class Ub extends nn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Un(ps,ms,e,n);r.layers=this.layers,this.add(r);const s=new Un(ps,ms,e,n);s.layers=this.layers,this.add(s);const o=new Un(ps,ms,e,n);o.layers=this.layers,this.add(o);const a=new Un(ps,ms,e,n);a.layers=this.layers,this.add(a);const l=new Un(ps,ms,e,n);l.layers=this.layers,this.add(l);const c=new Un(ps,ms,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===Mi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ec)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),e.render(n,u),e.setRenderTarget(f,d,p),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class sS extends Sn{constructor(e,n,i,r,s,o,a,l,c,u){e=e!==void 0?e:[],n=n!==void 0?n:Qs,super(e,n,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ib extends Yr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];n.encoding!==void 0&&(Wo("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Hr?It:In),this.texture=new sS(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Nn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Ca(5,5,5),s=new $r({name:"CubemapFromEquirect",uniforms:to(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:hn,blending:rr});s.uniforms.tEquirect.value=n;const o=new Zn(r,s),a=n.minFilter;return n.minFilter===da&&(n.minFilter=Nn),new Ub(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const pf=new F,Fb=new F,Ob=new We;class Rr{constructor(e=new F(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=pf.subVectors(i,n).cross(Fb.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(pf),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||Ob.getNormalMatrix(e),r=this.coplanarPoint(pf).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Er=new Aa,xl=new F;class oS{constructor(e=new Rr,n=new Rr,i=new Rr,r=new Rr,s=new Rr,o=new Rr){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Mi){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],f=r[6],d=r[7],p=r[8],_=r[9],x=r[10],v=r[11],h=r[12],g=r[13],m=r[14],y=r[15];if(i[0].setComponents(l-s,d-c,v-p,y-h).normalize(),i[1].setComponents(l+s,d+c,v+p,y+h).normalize(),i[2].setComponents(l+o,d+u,v+_,y+g).normalize(),i[3].setComponents(l-o,d-u,v-_,y-g).normalize(),i[4].setComponents(l-a,d-f,v-x,y-m).normalize(),n===Mi)i[5].setComponents(l+a,d+f,v+x,y+m).normalize();else if(n===Ec)i[5].setComponents(a,f,x,m).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Er.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Er.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Er)}intersectsSprite(e){return Er.center.set(0,0,0),Er.radius=.7071067811865476,Er.applyMatrix4(e.matrixWorld),this.intersectsSphere(Er)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(xl.x=r.normal.x>0?e.max.x:e.min.x,xl.y=r.normal.y>0?e.max.y:e.min.y,xl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(xl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function aS(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function kb(t,e){const n=e.isWebGL2,i=new WeakMap;function r(c,u){const f=c.array,d=c.usage,p=f.byteLength,_=t.createBuffer();t.bindBuffer(u,_),t.bufferData(u,f,d),c.onUploadCallback();let x;if(f instanceof Float32Array)x=t.FLOAT;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(n)x=t.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=t.UNSIGNED_SHORT;else if(f instanceof Int16Array)x=t.SHORT;else if(f instanceof Uint32Array)x=t.UNSIGNED_INT;else if(f instanceof Int32Array)x=t.INT;else if(f instanceof Int8Array)x=t.BYTE;else if(f instanceof Uint8Array)x=t.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)x=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:_,type:x,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version,size:p}}function s(c,u,f){const d=u.array,p=u._updateRange,_=u.updateRanges;if(t.bindBuffer(f,c),p.count===-1&&_.length===0&&t.bufferSubData(f,0,d),_.length!==0){for(let x=0,v=_.length;x<v;x++){const h=_[x];n?t.bufferSubData(f,h.start*d.BYTES_PER_ELEMENT,d,h.start,h.count):t.bufferSubData(f,h.start*d.BYTES_PER_ELEMENT,d.subarray(h.start,h.start+h.count))}u.clearUpdateRanges()}p.count!==-1&&(n?t.bufferSubData(f,p.offset*d.BYTES_PER_ELEMENT,d,p.offset,p.count):t.bufferSubData(f,p.offset*d.BYTES_PER_ELEMENT,d.subarray(p.offset,p.offset+p.count)),p.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u&&(t.deleteBuffer(u.buffer),i.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const d=i.get(c);(!d||d.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=i.get(c);if(f===void 0)i.set(c,r(c,u));else if(f.version<c.version){if(f.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(f.buffer,c,u),f.version=c.version}}return{get:o,remove:a,update:l}}class rp extends An{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,f=e/a,d=n/l,p=[],_=[],x=[],v=[];for(let h=0;h<u;h++){const g=h*d-o;for(let m=0;m<c;m++){const y=m*f-s;_.push(y,-g,0),x.push(0,0,1),v.push(m/a),v.push(1-h/l)}}for(let h=0;h<l;h++)for(let g=0;g<a;g++){const m=g+c*h,y=g+c*(h+1),C=g+1+c*(h+1),T=g+1+c*h;p.push(m,y,T),p.push(y,C,T)}this.setIndex(p),this.setAttribute("position",new kt(_,3)),this.setAttribute("normal",new kt(x,3)),this.setAttribute("uv",new kt(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rp(e.width,e.height,e.widthSegments,e.heightSegments)}}var Bb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,zb=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Vb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Hb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Gb=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Wb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,jb=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Xb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,qb=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Yb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,$b=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Kb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Zb=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Qb=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Jb=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,eR=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,tR=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,nR=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,iR=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,rR=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,sR=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,oR=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,aR=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,lR=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cR=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,uR=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,fR=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,dR=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,hR=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,pR=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,mR="gl_FragColor = linearToOutputTexel( gl_FragColor );",gR=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,vR=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,_R=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,xR=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,yR=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,SR=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,MR=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ER=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,TR=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,wR=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,AR=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,CR=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,bR=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,RR=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,PR=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,LR=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,DR=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,NR=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,UR=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,IR=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,FR=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,OR=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,kR=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,BR=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,zR=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,VR=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,HR=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,GR=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,WR=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,jR=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,XR=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,qR=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,YR=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,$R=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,KR=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ZR=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,QR=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,JR=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,eP=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,tP=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,nP=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,iP=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,rP=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sP=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,oP=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,aP=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,lP=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,cP=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,uP=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,fP=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,dP=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,hP=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,pP=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,mP=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,gP=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,vP=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,_P=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,xP=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,yP=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,SP=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,MP=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,EP=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,TP=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,wP=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,AP=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,CP=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,bP=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,RP=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,PP=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,LP=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,DP=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,NP=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,UP=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,IP=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,FP=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,OP=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const kP=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,BP=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zP=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,VP=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,HP=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,GP=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,WP=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,jP=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,XP=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,qP=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,YP=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,$P=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,KP=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ZP=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,QP=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,JP=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,e2=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,t2=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,n2=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,i2=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,r2=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,s2=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,o2=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,a2=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,l2=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,c2=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,u2=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,f2=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,d2=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,h2=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,p2=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,m2=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,g2=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,v2=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ke={alphahash_fragment:Bb,alphahash_pars_fragment:zb,alphamap_fragment:Vb,alphamap_pars_fragment:Hb,alphatest_fragment:Gb,alphatest_pars_fragment:Wb,aomap_fragment:jb,aomap_pars_fragment:Xb,batching_pars_vertex:qb,batching_vertex:Yb,begin_vertex:$b,beginnormal_vertex:Kb,bsdfs:Zb,iridescence_fragment:Qb,bumpmap_pars_fragment:Jb,clipping_planes_fragment:eR,clipping_planes_pars_fragment:tR,clipping_planes_pars_vertex:nR,clipping_planes_vertex:iR,color_fragment:rR,color_pars_fragment:sR,color_pars_vertex:oR,color_vertex:aR,common:lR,cube_uv_reflection_fragment:cR,defaultnormal_vertex:uR,displacementmap_pars_vertex:fR,displacementmap_vertex:dR,emissivemap_fragment:hR,emissivemap_pars_fragment:pR,colorspace_fragment:mR,colorspace_pars_fragment:gR,envmap_fragment:vR,envmap_common_pars_fragment:_R,envmap_pars_fragment:xR,envmap_pars_vertex:yR,envmap_physical_pars_fragment:DR,envmap_vertex:SR,fog_vertex:MR,fog_pars_vertex:ER,fog_fragment:TR,fog_pars_fragment:wR,gradientmap_pars_fragment:AR,lightmap_fragment:CR,lightmap_pars_fragment:bR,lights_lambert_fragment:RR,lights_lambert_pars_fragment:PR,lights_pars_begin:LR,lights_toon_fragment:NR,lights_toon_pars_fragment:UR,lights_phong_fragment:IR,lights_phong_pars_fragment:FR,lights_physical_fragment:OR,lights_physical_pars_fragment:kR,lights_fragment_begin:BR,lights_fragment_maps:zR,lights_fragment_end:VR,logdepthbuf_fragment:HR,logdepthbuf_pars_fragment:GR,logdepthbuf_pars_vertex:WR,logdepthbuf_vertex:jR,map_fragment:XR,map_pars_fragment:qR,map_particle_fragment:YR,map_particle_pars_fragment:$R,metalnessmap_fragment:KR,metalnessmap_pars_fragment:ZR,morphcolor_vertex:QR,morphnormal_vertex:JR,morphtarget_pars_vertex:eP,morphtarget_vertex:tP,normal_fragment_begin:nP,normal_fragment_maps:iP,normal_pars_fragment:rP,normal_pars_vertex:sP,normal_vertex:oP,normalmap_pars_fragment:aP,clearcoat_normal_fragment_begin:lP,clearcoat_normal_fragment_maps:cP,clearcoat_pars_fragment:uP,iridescence_pars_fragment:fP,opaque_fragment:dP,packing:hP,premultiplied_alpha_fragment:pP,project_vertex:mP,dithering_fragment:gP,dithering_pars_fragment:vP,roughnessmap_fragment:_P,roughnessmap_pars_fragment:xP,shadowmap_pars_fragment:yP,shadowmap_pars_vertex:SP,shadowmap_vertex:MP,shadowmask_pars_fragment:EP,skinbase_vertex:TP,skinning_pars_vertex:wP,skinning_vertex:AP,skinnormal_vertex:CP,specularmap_fragment:bP,specularmap_pars_fragment:RP,tonemapping_fragment:PP,tonemapping_pars_fragment:LP,transmission_fragment:DP,transmission_pars_fragment:NP,uv_pars_fragment:UP,uv_pars_vertex:IP,uv_vertex:FP,worldpos_vertex:OP,background_vert:kP,background_frag:BP,backgroundCube_vert:zP,backgroundCube_frag:VP,cube_vert:HP,cube_frag:GP,depth_vert:WP,depth_frag:jP,distanceRGBA_vert:XP,distanceRGBA_frag:qP,equirect_vert:YP,equirect_frag:$P,linedashed_vert:KP,linedashed_frag:ZP,meshbasic_vert:QP,meshbasic_frag:JP,meshlambert_vert:e2,meshlambert_frag:t2,meshmatcap_vert:n2,meshmatcap_frag:i2,meshnormal_vert:r2,meshnormal_frag:s2,meshphong_vert:o2,meshphong_frag:a2,meshphysical_vert:l2,meshphysical_frag:c2,meshtoon_vert:u2,meshtoon_frag:f2,points_vert:d2,points_frag:h2,shadow_vert:p2,shadow_frag:m2,sprite_vert:g2,sprite_frag:v2},oe={common:{diffuse:{value:new Ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new $e(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new Ye(16777215)},opacity:{value:1},center:{value:new $e(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},ri={basic:{uniforms:Zt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.fog]),vertexShader:ke.meshbasic_vert,fragmentShader:ke.meshbasic_frag},lambert:{uniforms:Zt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new Ye(0)}}]),vertexShader:ke.meshlambert_vert,fragmentShader:ke.meshlambert_frag},phong:{uniforms:Zt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new Ye(0)},specular:{value:new Ye(1118481)},shininess:{value:30}}]),vertexShader:ke.meshphong_vert,fragmentShader:ke.meshphong_frag},standard:{uniforms:Zt([oe.common,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.roughnessmap,oe.metalnessmap,oe.fog,oe.lights,{emissive:{value:new Ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag},toon:{uniforms:Zt([oe.common,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.gradientmap,oe.fog,oe.lights,{emissive:{value:new Ye(0)}}]),vertexShader:ke.meshtoon_vert,fragmentShader:ke.meshtoon_frag},matcap:{uniforms:Zt([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,{matcap:{value:null}}]),vertexShader:ke.meshmatcap_vert,fragmentShader:ke.meshmatcap_frag},points:{uniforms:Zt([oe.points,oe.fog]),vertexShader:ke.points_vert,fragmentShader:ke.points_frag},dashed:{uniforms:Zt([oe.common,oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ke.linedashed_vert,fragmentShader:ke.linedashed_frag},depth:{uniforms:Zt([oe.common,oe.displacementmap]),vertexShader:ke.depth_vert,fragmentShader:ke.depth_frag},normal:{uniforms:Zt([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,{opacity:{value:1}}]),vertexShader:ke.meshnormal_vert,fragmentShader:ke.meshnormal_frag},sprite:{uniforms:Zt([oe.sprite,oe.fog]),vertexShader:ke.sprite_vert,fragmentShader:ke.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ke.background_vert,fragmentShader:ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:ke.backgroundCube_vert,fragmentShader:ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ke.cube_vert,fragmentShader:ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ke.equirect_vert,fragmentShader:ke.equirect_frag},distanceRGBA:{uniforms:Zt([oe.common,oe.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ke.distanceRGBA_vert,fragmentShader:ke.distanceRGBA_frag},shadow:{uniforms:Zt([oe.lights,oe.fog,{color:{value:new Ye(0)},opacity:{value:1}}]),vertexShader:ke.shadow_vert,fragmentShader:ke.shadow_frag}};ri.physical={uniforms:Zt([ri.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new $e(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new Ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new $e},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new Ye(0)},specularColor:{value:new Ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new $e},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag};const yl={r:0,b:0,g:0};function _2(t,e,n,i,r,s,o){const a=new Ye(0);let l=s===!0?0:1,c,u,f=null,d=0,p=null;function _(v,h){let g=!1,m=h.isScene===!0?h.background:null;m&&m.isTexture&&(m=(h.backgroundBlurriness>0?n:e).get(m)),m===null?x(a,l):m&&m.isColor&&(x(m,1),g=!0);const y=t.xr.getEnvironmentBlendMode();y==="additive"?i.buffers.color.setClear(0,0,0,1,o):y==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||g)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),m&&(m.isCubeTexture||m.mapping===Kc)?(u===void 0&&(u=new Zn(new Ca(1,1,1),new $r({name:"BackgroundCubeMaterial",uniforms:to(ri.backgroundCube.uniforms),vertexShader:ri.backgroundCube.vertexShader,fragmentShader:ri.backgroundCube.fragmentShader,side:hn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,T,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=m,u.material.uniforms.flipEnvMap.value=m.isCubeTexture&&m.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=h.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,u.material.toneMapped=Je.getTransfer(m.colorSpace)!==ot,(f!==m||d!==m.version||p!==t.toneMapping)&&(u.material.needsUpdate=!0,f=m,d=m.version,p=t.toneMapping),u.layers.enableAll(),v.unshift(u,u.geometry,u.material,0,0,null)):m&&m.isTexture&&(c===void 0&&(c=new Zn(new rp(2,2),new $r({name:"BackgroundMaterial",uniforms:to(ri.background.uniforms),vertexShader:ri.background.vertexShader,fragmentShader:ri.background.fragmentShader,side:fr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=m,c.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,c.material.toneMapped=Je.getTransfer(m.colorSpace)!==ot,m.matrixAutoUpdate===!0&&m.updateMatrix(),c.material.uniforms.uvTransform.value.copy(m.matrix),(f!==m||d!==m.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,f=m,d=m.version,p=t.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function x(v,h){v.getRGB(yl,iS(t)),i.buffers.color.setClear(yl.r,yl.g,yl.b,h,o)}return{getClearColor:function(){return a},setClearColor:function(v,h=1){a.set(v),l=h,x(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,x(a,l)},render:_}}function x2(t,e,n,i){const r=t.getParameter(t.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=v(null);let c=l,u=!1;function f(L,B,W,$,N){let O=!1;if(o){const V=x($,W,B);c!==V&&(c=V,p(c.object)),O=h(L,$,W,N),O&&g(L,$,W,N)}else{const V=B.wireframe===!0;(c.geometry!==$.id||c.program!==W.id||c.wireframe!==V)&&(c.geometry=$.id,c.program=W.id,c.wireframe=V,O=!0)}N!==null&&n.update(N,t.ELEMENT_ARRAY_BUFFER),(O||u)&&(u=!1,P(L,B,W,$),N!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(N).buffer))}function d(){return i.isWebGL2?t.createVertexArray():s.createVertexArrayOES()}function p(L){return i.isWebGL2?t.bindVertexArray(L):s.bindVertexArrayOES(L)}function _(L){return i.isWebGL2?t.deleteVertexArray(L):s.deleteVertexArrayOES(L)}function x(L,B,W){const $=W.wireframe===!0;let N=a[L.id];N===void 0&&(N={},a[L.id]=N);let O=N[B.id];O===void 0&&(O={},N[B.id]=O);let V=O[$];return V===void 0&&(V=v(d()),O[$]=V),V}function v(L){const B=[],W=[],$=[];for(let N=0;N<r;N++)B[N]=0,W[N]=0,$[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:W,attributeDivisors:$,object:L,attributes:{},index:null}}function h(L,B,W,$){const N=c.attributes,O=B.attributes;let V=0;const Y=W.getAttributes();for(const Z in Y)if(Y[Z].location>=0){const K=N[Z];let ae=O[Z];if(ae===void 0&&(Z==="instanceMatrix"&&L.instanceMatrix&&(ae=L.instanceMatrix),Z==="instanceColor"&&L.instanceColor&&(ae=L.instanceColor)),K===void 0||K.attribute!==ae||ae&&K.data!==ae.data)return!0;V++}return c.attributesNum!==V||c.index!==$}function g(L,B,W,$){const N={},O=B.attributes;let V=0;const Y=W.getAttributes();for(const Z in Y)if(Y[Z].location>=0){let K=O[Z];K===void 0&&(Z==="instanceMatrix"&&L.instanceMatrix&&(K=L.instanceMatrix),Z==="instanceColor"&&L.instanceColor&&(K=L.instanceColor));const ae={};ae.attribute=K,K&&K.data&&(ae.data=K.data),N[Z]=ae,V++}c.attributes=N,c.attributesNum=V,c.index=$}function m(){const L=c.newAttributes;for(let B=0,W=L.length;B<W;B++)L[B]=0}function y(L){C(L,0)}function C(L,B){const W=c.newAttributes,$=c.enabledAttributes,N=c.attributeDivisors;W[L]=1,$[L]===0&&(t.enableVertexAttribArray(L),$[L]=1),N[L]!==B&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,B),N[L]=B)}function T(){const L=c.newAttributes,B=c.enabledAttributes;for(let W=0,$=B.length;W<$;W++)B[W]!==L[W]&&(t.disableVertexAttribArray(W),B[W]=0)}function w(L,B,W,$,N,O,V){V===!0?t.vertexAttribIPointer(L,B,W,N,O):t.vertexAttribPointer(L,B,W,$,N,O)}function P(L,B,W,$){if(i.isWebGL2===!1&&(L.isInstancedMesh||$.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;m();const N=$.attributes,O=W.getAttributes(),V=B.defaultAttributeValues;for(const Y in O){const Z=O[Y];if(Z.location>=0){let q=N[Y];if(q===void 0&&(Y==="instanceMatrix"&&L.instanceMatrix&&(q=L.instanceMatrix),Y==="instanceColor"&&L.instanceColor&&(q=L.instanceColor)),q!==void 0){const K=q.normalized,ae=q.itemSize,fe=n.get(q);if(fe===void 0)continue;const pe=fe.buffer,Le=fe.type,Re=fe.bytesPerElement,ye=i.isWebGL2===!0&&(Le===t.INT||Le===t.UNSIGNED_INT||q.gpuType===zy);if(q.isInterleavedBufferAttribute){const Ie=q.data,k=Ie.stride,Yt=q.offset;if(Ie.isInstancedInterleavedBuffer){for(let Me=0;Me<Z.locationSize;Me++)C(Z.location+Me,Ie.meshPerAttribute);L.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=Ie.meshPerAttribute*Ie.count)}else for(let Me=0;Me<Z.locationSize;Me++)y(Z.location+Me);t.bindBuffer(t.ARRAY_BUFFER,pe);for(let Me=0;Me<Z.locationSize;Me++)w(Z.location+Me,ae/Z.locationSize,Le,K,k*Re,(Yt+ae/Z.locationSize*Me)*Re,ye)}else{if(q.isInstancedBufferAttribute){for(let Ie=0;Ie<Z.locationSize;Ie++)C(Z.location+Ie,q.meshPerAttribute);L.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let Ie=0;Ie<Z.locationSize;Ie++)y(Z.location+Ie);t.bindBuffer(t.ARRAY_BUFFER,pe);for(let Ie=0;Ie<Z.locationSize;Ie++)w(Z.location+Ie,ae/Z.locationSize,Le,K,ae*Re,ae/Z.locationSize*Ie*Re,ye)}}else if(V!==void 0){const K=V[Y];if(K!==void 0)switch(K.length){case 2:t.vertexAttrib2fv(Z.location,K);break;case 3:t.vertexAttrib3fv(Z.location,K);break;case 4:t.vertexAttrib4fv(Z.location,K);break;default:t.vertexAttrib1fv(Z.location,K)}}}}T()}function S(){j();for(const L in a){const B=a[L];for(const W in B){const $=B[W];for(const N in $)_($[N].object),delete $[N];delete B[W]}delete a[L]}}function E(L){if(a[L.id]===void 0)return;const B=a[L.id];for(const W in B){const $=B[W];for(const N in $)_($[N].object),delete $[N];delete B[W]}delete a[L.id]}function U(L){for(const B in a){const W=a[B];if(W[L.id]===void 0)continue;const $=W[L.id];for(const N in $)_($[N].object),delete $[N];delete W[L.id]}}function j(){Q(),u=!0,c!==l&&(c=l,p(c.object))}function Q(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:j,resetDefaultState:Q,dispose:S,releaseStatesOfGeometry:E,releaseStatesOfProgram:U,initAttributes:m,enableAttribute:y,disableUnusedAttributes:T}}function y2(t,e,n,i){const r=i.isWebGL2;let s;function o(u){s=u}function a(u,f){t.drawArrays(s,u,f),n.update(f,s,1)}function l(u,f,d){if(d===0)return;let p,_;if(r)p=t,_="drawArraysInstanced";else if(p=e.get("ANGLE_instanced_arrays"),_="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[_](s,u,f,d),n.update(f,s,d)}function c(u,f,d){if(d===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<d;_++)this.render(u[_],f[_]);else{p.multiDrawArraysWEBGL(s,u,0,f,0,d);let _=0;for(let x=0;x<d;x++)_+=f[x];n.update(_,s,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function S2(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(w){if(w==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&t.constructor.name==="WebGL2RenderingContext";let a=n.precision!==void 0?n.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),u=n.logarithmicDepthBuffer===!0,f=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),d=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=t.getParameter(t.MAX_TEXTURE_SIZE),_=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),x=t.getParameter(t.MAX_VERTEX_ATTRIBS),v=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),h=t.getParameter(t.MAX_VARYING_VECTORS),g=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),m=d>0,y=o||e.has("OES_texture_float"),C=m&&y,T=o?t.getParameter(t.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:d,maxTextureSize:p,maxCubemapSize:_,maxAttributes:x,maxVertexUniforms:v,maxVaryings:h,maxFragmentUniforms:g,vertexTextures:m,floatFragmentTextures:y,floatVertexTextures:C,maxSamples:T}}function M2(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new Rr,a=new We,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const p=f.length!==0||d||i!==0||r;return r=d,i=f.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){n=u(f,d,0)},this.setState=function(f,d,p){const _=f.clippingPlanes,x=f.clipIntersection,v=f.clipShadows,h=t.get(f);if(!r||_===null||_.length===0||s&&!v)s?u(null):c();else{const g=s?0:i,m=g*4;let y=h.clippingState||null;l.value=y,y=u(_,d,m,p);for(let C=0;C!==m;++C)y[C]=n[C];h.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=g}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,d,p,_){const x=f!==null?f.length:0;let v=null;if(x!==0){if(v=l.value,_!==!0||v===null){const h=p+x*4,g=d.matrixWorldInverse;a.getNormalMatrix(g),(v===null||v.length<h)&&(v=new Float32Array(h));for(let m=0,y=p;m!==x;++m,y+=4)o.copy(f[m]).applyMatrix4(g,a),o.normal.toArray(v,y),v[y+3]=o.constant}l.value=v,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,v}}function E2(t){let e=new WeakMap;function n(o,a){return a===Rd?o.mapping=Qs:a===Pd&&(o.mapping=Js),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Rd||a===Pd)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Ib(l.height/2);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class T2 extends rS{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Ns=4,Tv=[.125,.215,.35,.446,.526,.582],Dr=20,mf=new T2,wv=new Ye;let gf=null,vf=0,_f=0;const Pr=(1+Math.sqrt(5))/2,gs=1/Pr,Av=[new F(1,1,1),new F(-1,1,1),new F(1,1,-1),new F(-1,1,-1),new F(0,Pr,gs),new F(0,Pr,-gs),new F(gs,0,Pr),new F(-gs,0,Pr),new F(Pr,gs,0),new F(-Pr,gs,0)];class Cv{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){gf=this._renderer.getRenderTarget(),vf=this._renderer.getActiveCubeFace(),_f=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Pv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Rv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(gf,vf,_f),e.scissorTest=!1,Sl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Qs||e.mapping===Js?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),gf=this._renderer.getRenderTarget(),vf=this._renderer.getActiveCubeFace(),_f=this._renderer.getActiveMipmapLevel();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Nn,minFilter:Nn,generateMipmaps:!1,type:ha,format:Kn,colorSpace:Li,depthBuffer:!1},r=bv(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=bv(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=w2(s)),this._blurMaterial=A2(s,e,n)}return r}_compileMaterial(e){const n=new Zn(this._lodPlanes[0],e);this._renderer.compile(n,mf)}_sceneToCubeUV(e,n,i,r){const a=new Un(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(wv),u.toneMapping=sr,u.autoClear=!1;const p=new jo({name:"PMREM.Background",side:hn,depthWrite:!1,depthTest:!1}),_=new Zn(new Ca,p);let x=!1;const v=e.background;v?v.isColor&&(p.color.copy(v),e.background=null,x=!0):(p.color.copy(wv),x=!0);for(let h=0;h<6;h++){const g=h%3;g===0?(a.up.set(0,l[h],0),a.lookAt(c[h],0,0)):g===1?(a.up.set(0,0,l[h]),a.lookAt(0,c[h],0)):(a.up.set(0,l[h],0),a.lookAt(0,0,c[h]));const m=this._cubeSize;Sl(r,g*m,h>2?m:0,m,m),u.setRenderTarget(r),x&&u.render(_,a),u.render(e,a)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=d,u.autoClear=f,e.background=v}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Qs||e.mapping===Js;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Pv()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Rv());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Zn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Sl(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,mf)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Av[(r-1)%Av.length];this._blur(e,r-1,r,s,o)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new Zn(this._lodPlanes[r],c),d=c.uniforms,p=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Dr-1),x=s/_,v=isFinite(s)?1+Math.floor(u*x):Dr;v>Dr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${v} samples when the maximum is set to ${Dr}`);const h=[];let g=0;for(let w=0;w<Dr;++w){const P=w/x,S=Math.exp(-P*P/2);h.push(S),w===0?g+=S:w<v&&(g+=2*S)}for(let w=0;w<h.length;w++)h[w]=h[w]/g;d.envMap.value=e.texture,d.samples.value=v,d.weights.value=h,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:m}=this;d.dTheta.value=_,d.mipInt.value=m-i;const y=this._sizeLods[r],C=3*y*(r>m-Ns?r-m+Ns:0),T=4*(this._cubeSize-y);Sl(n,C,T,3*y,2*y),l.setRenderTarget(n),l.render(f,mf)}}function w2(t){const e=[],n=[],i=[];let r=t;const s=t-Ns+1+Tv.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-Ns?l=Tv[o-t+Ns-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,f=1+c,d=[u,u,f,u,f,f,u,u,f,f,u,f],p=6,_=6,x=3,v=2,h=1,g=new Float32Array(x*_*p),m=new Float32Array(v*_*p),y=new Float32Array(h*_*p);for(let T=0;T<p;T++){const w=T%3*2/3-1,P=T>2?0:-1,S=[w,P,0,w+2/3,P,0,w+2/3,P+1,0,w,P,0,w+2/3,P+1,0,w,P+1,0];g.set(S,x*_*T),m.set(d,v*_*T);const E=[T,T,T,T,T,T];y.set(E,h*_*T)}const C=new An;C.setAttribute("position",new kn(g,x)),C.setAttribute("uv",new kn(m,v)),C.setAttribute("faceIndex",new kn(y,h)),e.push(C),r>Ns&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function bv(t,e,n){const i=new Yr(t,e,n);return i.texture.mapping=Kc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Sl(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function A2(t,e,n){const i=new Float32Array(Dr),r=new F(0,1,0);return new $r({name:"SphericalGaussianBlur",defines:{n:Dr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:sp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:rr,depthTest:!1,depthWrite:!1})}function Rv(){return new $r({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:sp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:rr,depthTest:!1,depthWrite:!1})}function Pv(){return new $r({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:sp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:rr,depthTest:!1,depthWrite:!1})}function sp(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function C2(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Rd||l===Pd,u=l===Qs||l===Js;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=e.get(a);return n===null&&(n=new Cv(t)),f=c?n.fromEquirectangular(a,f):n.fromCubemap(a,f),e.set(a,f),f.texture}else{if(e.has(a))return e.get(a).texture;{const f=a.image;if(c&&f&&f.height>0||u&&f&&r(f)){n===null&&(n=new Cv(t));const d=c?n.fromEquirectangular(a):n.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",s),d.texture}else return null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function b2(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?(n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance")):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function R2(t,e,n,i){const r={},s=new WeakMap;function o(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const _ in d.attributes)e.remove(d.attributes[_]);for(const _ in d.morphAttributes){const x=d.morphAttributes[_];for(let v=0,h=x.length;v<h;v++)e.remove(x[v])}d.removeEventListener("dispose",o),delete r[d.id];const p=s.get(d);p&&(e.remove(p),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function a(f,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,n.memory.geometries++),d}function l(f){const d=f.attributes;for(const _ in d)e.update(d[_],t.ARRAY_BUFFER);const p=f.morphAttributes;for(const _ in p){const x=p[_];for(let v=0,h=x.length;v<h;v++)e.update(x[v],t.ARRAY_BUFFER)}}function c(f){const d=[],p=f.index,_=f.attributes.position;let x=0;if(p!==null){const g=p.array;x=p.version;for(let m=0,y=g.length;m<y;m+=3){const C=g[m+0],T=g[m+1],w=g[m+2];d.push(C,T,T,w,w,C)}}else if(_!==void 0){const g=_.array;x=_.version;for(let m=0,y=g.length/3-1;m<y;m+=3){const C=m+0,T=m+1,w=m+2;d.push(C,T,T,w,w,C)}}else return;const v=new($y(d)?nS:tS)(d,1);v.version=x;const h=s.get(f);h&&e.remove(h),s.set(f,v)}function u(f){const d=s.get(f);if(d){const p=f.index;p!==null&&d.version<p.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function P2(t,e,n,i){const r=i.isWebGL2;let s;function o(p){s=p}let a,l;function c(p){a=p.type,l=p.bytesPerElement}function u(p,_){t.drawElements(s,_,a,p*l),n.update(_,s,1)}function f(p,_,x){if(x===0)return;let v,h;if(r)v=t,h="drawElementsInstanced";else if(v=e.get("ANGLE_instanced_arrays"),h="drawElementsInstancedANGLE",v===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}v[h](s,_,a,p*l,x),n.update(_,s,x)}function d(p,_,x){if(x===0)return;const v=e.get("WEBGL_multi_draw");if(v===null)for(let h=0;h<x;h++)this.render(p[h]/l,_[h]);else{v.multiDrawElementsWEBGL(s,_,0,a,p,0,x);let h=0;for(let g=0;g<x;g++)h+=_[g];n.update(h,s,1)}}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=f,this.renderMultiDraw=d}function L2(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function D2(t,e){return t[0]-e[0]}function N2(t,e){return Math.abs(e[1])-Math.abs(t[1])}function U2(t,e,n){const i={},r=new Float32Array(8),s=new WeakMap,o=new Ft,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,f){const d=c.morphTargetInfluences;if(e.isWebGL2===!0){const _=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,x=_!==void 0?_.length:0;let v=s.get(u);if(v===void 0||v.count!==x){let B=function(){Q.dispose(),s.delete(u),u.removeEventListener("dispose",B)};var p=B;v!==void 0&&v.texture.dispose();const m=u.morphAttributes.position!==void 0,y=u.morphAttributes.normal!==void 0,C=u.morphAttributes.color!==void 0,T=u.morphAttributes.position||[],w=u.morphAttributes.normal||[],P=u.morphAttributes.color||[];let S=0;m===!0&&(S=1),y===!0&&(S=2),C===!0&&(S=3);let E=u.attributes.position.count*S,U=1;E>e.maxTextureSize&&(U=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const j=new Float32Array(E*U*4*x),Q=new Qy(j,E,U,x);Q.type=Yi,Q.needsUpdate=!0;const L=S*4;for(let W=0;W<x;W++){const $=T[W],N=w[W],O=P[W],V=E*U*4*W;for(let Y=0;Y<$.count;Y++){const Z=Y*L;m===!0&&(o.fromBufferAttribute($,Y),j[V+Z+0]=o.x,j[V+Z+1]=o.y,j[V+Z+2]=o.z,j[V+Z+3]=0),y===!0&&(o.fromBufferAttribute(N,Y),j[V+Z+4]=o.x,j[V+Z+5]=o.y,j[V+Z+6]=o.z,j[V+Z+7]=0),C===!0&&(o.fromBufferAttribute(O,Y),j[V+Z+8]=o.x,j[V+Z+9]=o.y,j[V+Z+10]=o.z,j[V+Z+11]=O.itemSize===4?o.w:1)}}v={count:x,texture:Q,size:new $e(E,U)},s.set(u,v),u.addEventListener("dispose",B)}let h=0;for(let m=0;m<d.length;m++)h+=d[m];const g=u.morphTargetsRelative?1:1-h;f.getUniforms().setValue(t,"morphTargetBaseInfluence",g),f.getUniforms().setValue(t,"morphTargetInfluences",d),f.getUniforms().setValue(t,"morphTargetsTexture",v.texture,n),f.getUniforms().setValue(t,"morphTargetsTextureSize",v.size)}else{const _=d===void 0?0:d.length;let x=i[u.id];if(x===void 0||x.length!==_){x=[];for(let y=0;y<_;y++)x[y]=[y,0];i[u.id]=x}for(let y=0;y<_;y++){const C=x[y];C[0]=y,C[1]=d[y]}x.sort(N2);for(let y=0;y<8;y++)y<_&&x[y][1]?(a[y][0]=x[y][0],a[y][1]=x[y][1]):(a[y][0]=Number.MAX_SAFE_INTEGER,a[y][1]=0);a.sort(D2);const v=u.morphAttributes.position,h=u.morphAttributes.normal;let g=0;for(let y=0;y<8;y++){const C=a[y],T=C[0],w=C[1];T!==Number.MAX_SAFE_INTEGER&&w?(v&&u.getAttribute("morphTarget"+y)!==v[T]&&u.setAttribute("morphTarget"+y,v[T]),h&&u.getAttribute("morphNormal"+y)!==h[T]&&u.setAttribute("morphNormal"+y,h[T]),r[y]=w,g+=w):(v&&u.hasAttribute("morphTarget"+y)===!0&&u.deleteAttribute("morphTarget"+y),h&&u.hasAttribute("morphNormal"+y)===!0&&u.deleteAttribute("morphNormal"+y),r[y]=0)}const m=u.morphTargetsRelative?1:1-g;f.getUniforms().setValue(t,"morphTargetBaseInfluence",m),f.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:l}}function I2(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}class lS extends Sn{constructor(e,n,i,r,s,o,a,l,c,u){if(u=u!==void 0?u:Vr,u!==Vr&&u!==eo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Vr&&(i=qi),i===void 0&&u===eo&&(i=zr),super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:en,this.minFilter=l!==void 0?l:en,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const cS=new Sn,uS=new lS(1,1);uS.compareFunction=Yy;const fS=new Qy,dS=new _b,hS=new sS,Lv=[],Dv=[],Nv=new Float32Array(16),Uv=new Float32Array(9),Iv=new Float32Array(4);function ao(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Lv[r];if(s===void 0&&(s=new Float32Array(r),Lv[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Ct(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function bt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Jc(t,e){let n=Dv[e];n===void 0&&(n=new Int32Array(e),Dv[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function F2(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function O2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ct(n,e))return;t.uniform2fv(this.addr,e),bt(n,e)}}function k2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Ct(n,e))return;t.uniform3fv(this.addr,e),bt(n,e)}}function B2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ct(n,e))return;t.uniform4fv(this.addr,e),bt(n,e)}}function z2(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ct(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),bt(n,e)}else{if(Ct(n,i))return;Iv.set(i),t.uniformMatrix2fv(this.addr,!1,Iv),bt(n,i)}}function V2(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ct(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),bt(n,e)}else{if(Ct(n,i))return;Uv.set(i),t.uniformMatrix3fv(this.addr,!1,Uv),bt(n,i)}}function H2(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ct(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),bt(n,e)}else{if(Ct(n,i))return;Nv.set(i),t.uniformMatrix4fv(this.addr,!1,Nv),bt(n,i)}}function G2(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function W2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ct(n,e))return;t.uniform2iv(this.addr,e),bt(n,e)}}function j2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ct(n,e))return;t.uniform3iv(this.addr,e),bt(n,e)}}function X2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ct(n,e))return;t.uniform4iv(this.addr,e),bt(n,e)}}function q2(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function Y2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ct(n,e))return;t.uniform2uiv(this.addr,e),bt(n,e)}}function $2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ct(n,e))return;t.uniform3uiv(this.addr,e),bt(n,e)}}function K2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ct(n,e))return;t.uniform4uiv(this.addr,e),bt(n,e)}}function Z2(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);const s=this.type===t.SAMPLER_2D_SHADOW?uS:cS;n.setTexture2D(e||s,r)}function Q2(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||dS,r)}function J2(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||hS,r)}function eL(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||fS,r)}function tL(t){switch(t){case 5126:return F2;case 35664:return O2;case 35665:return k2;case 35666:return B2;case 35674:return z2;case 35675:return V2;case 35676:return H2;case 5124:case 35670:return G2;case 35667:case 35671:return W2;case 35668:case 35672:return j2;case 35669:case 35673:return X2;case 5125:return q2;case 36294:return Y2;case 36295:return $2;case 36296:return K2;case 35678:case 36198:case 36298:case 36306:case 35682:return Z2;case 35679:case 36299:case 36307:return Q2;case 35680:case 36300:case 36308:case 36293:return J2;case 36289:case 36303:case 36311:case 36292:return eL}}function nL(t,e){t.uniform1fv(this.addr,e)}function iL(t,e){const n=ao(e,this.size,2);t.uniform2fv(this.addr,n)}function rL(t,e){const n=ao(e,this.size,3);t.uniform3fv(this.addr,n)}function sL(t,e){const n=ao(e,this.size,4);t.uniform4fv(this.addr,n)}function oL(t,e){const n=ao(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function aL(t,e){const n=ao(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function lL(t,e){const n=ao(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function cL(t,e){t.uniform1iv(this.addr,e)}function uL(t,e){t.uniform2iv(this.addr,e)}function fL(t,e){t.uniform3iv(this.addr,e)}function dL(t,e){t.uniform4iv(this.addr,e)}function hL(t,e){t.uniform1uiv(this.addr,e)}function pL(t,e){t.uniform2uiv(this.addr,e)}function mL(t,e){t.uniform3uiv(this.addr,e)}function gL(t,e){t.uniform4uiv(this.addr,e)}function vL(t,e,n){const i=this.cache,r=e.length,s=Jc(n,r);Ct(i,s)||(t.uniform1iv(this.addr,s),bt(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||cS,s[o])}function _L(t,e,n){const i=this.cache,r=e.length,s=Jc(n,r);Ct(i,s)||(t.uniform1iv(this.addr,s),bt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||dS,s[o])}function xL(t,e,n){const i=this.cache,r=e.length,s=Jc(n,r);Ct(i,s)||(t.uniform1iv(this.addr,s),bt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||hS,s[o])}function yL(t,e,n){const i=this.cache,r=e.length,s=Jc(n,r);Ct(i,s)||(t.uniform1iv(this.addr,s),bt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||fS,s[o])}function SL(t){switch(t){case 5126:return nL;case 35664:return iL;case 35665:return rL;case 35666:return sL;case 35674:return oL;case 35675:return aL;case 35676:return lL;case 5124:case 35670:return cL;case 35667:case 35671:return uL;case 35668:case 35672:return fL;case 35669:case 35673:return dL;case 5125:return hL;case 36294:return pL;case 36295:return mL;case 36296:return gL;case 35678:case 36198:case 36298:case 36306:case 35682:return vL;case 35679:case 36299:case 36307:return _L;case 35680:case 36300:case 36308:case 36293:return xL;case 36289:case 36303:case 36311:case 36292:return yL}}class ML{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=tL(n.type)}}class EL{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=SL(n.type)}}class TL{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const xf=/(\w+)(\])?(\[|\.)?/g;function Fv(t,e){t.seq.push(e),t.map[e.id]=e}function wL(t,e,n){const i=t.name,r=i.length;for(xf.lastIndex=0;;){const s=xf.exec(i),o=xf.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Fv(n,c===void 0?new ML(a,t,e):new EL(a,t,e));break}else{let f=n.map[a];f===void 0&&(f=new TL(a),Fv(n,f)),n=f}}}class zl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);wL(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function Ov(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const AL=37297;let CL=0;function bL(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function RL(t){const e=Je.getPrimaries(Je.workingColorSpace),n=Je.getPrimaries(t);let i;switch(e===n?i="":e===Mc&&n===Sc?i="LinearDisplayP3ToLinearSRGB":e===Sc&&n===Mc&&(i="LinearSRGBToLinearDisplayP3"),t){case Li:case Zc:return[i,"LinearTransferOETF"];case It:case np:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function kv(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+bL(t.getShaderSource(e),o)}else return r}function PL(t,e){const n=RL(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function LL(t,e){let n;switch(e){case zC:n="Linear";break;case VC:n="Reinhard";break;case HC:n="OptimizedCineon";break;case GC:n="ACESFilmic";break;case jC:n="AgX";break;case WC:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function DL(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Us).join(`
`)}function NL(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Us).join(`
`)}function UL(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function IL(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Us(t){return t!==""}function Bv(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function zv(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const FL=/^[ \t]*#include +<([\w\d./]+)>/gm;function Fd(t){return t.replace(FL,kL)}const OL=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function kL(t,e){let n=ke[e];if(n===void 0){const i=OL.get(e);if(i!==void 0)n=ke[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Fd(n)}const BL=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Vv(t){return t.replace(BL,zL)}function zL(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Hv(t){let e="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function VL(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Oy?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===pC?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===mi&&(e="SHADOWMAP_TYPE_VSM"),e}function HL(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Qs:case Js:e="ENVMAP_TYPE_CUBE";break;case Kc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function GL(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Js:e="ENVMAP_MODE_REFRACTION";break}return e}function WL(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case ky:e="ENVMAP_BLENDING_MULTIPLY";break;case kC:e="ENVMAP_BLENDING_MIX";break;case BC:e="ENVMAP_BLENDING_ADD";break}return e}function jL(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function XL(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=VL(n),c=HL(n),u=GL(n),f=WL(n),d=jL(n),p=n.isWebGL2?"":DL(n),_=NL(n),x=UL(s),v=r.createProgram();let h,g,m=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(h=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(Us).join(`
`),h.length>0&&(h+=`
`),g=[p,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(Us).join(`
`),g.length>0&&(g+=`
`)):(h=[Hv(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Us).join(`
`),g=[p,Hv(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==sr?"#define TONE_MAPPING":"",n.toneMapping!==sr?ke.tonemapping_pars_fragment:"",n.toneMapping!==sr?LL("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ke.colorspace_pars_fragment,PL("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Us).join(`
`)),o=Fd(o),o=Bv(o,n),o=zv(o,n),a=Fd(a),a=Bv(a,n),a=zv(a,n),o=Vv(o),a=Vv(a),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,h=[_,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+h,g=["precision mediump sampler2DArray;","#define varying in",n.glslVersion===ov?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===ov?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const y=m+h+o,C=m+g+a,T=Ov(r,r.VERTEX_SHADER,y),w=Ov(r,r.FRAGMENT_SHADER,C);r.attachShader(v,T),r.attachShader(v,w),n.index0AttributeName!==void 0?r.bindAttribLocation(v,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function P(j){if(t.debug.checkShaderErrors){const Q=r.getProgramInfoLog(v).trim(),L=r.getShaderInfoLog(T).trim(),B=r.getShaderInfoLog(w).trim();let W=!0,$=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(W=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,v,T,w);else{const N=kv(r,T,"vertex"),O=kv(r,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Program Info Log: `+Q+`
`+N+`
`+O)}else Q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Q):(L===""||B==="")&&($=!1);$&&(j.diagnostics={runnable:W,programLog:Q,vertexShader:{log:L,prefix:h},fragmentShader:{log:B,prefix:g}})}r.deleteShader(T),r.deleteShader(w),S=new zl(r,v),E=IL(r,v)}let S;this.getUniforms=function(){return S===void 0&&P(this),S};let E;this.getAttributes=function(){return E===void 0&&P(this),E};let U=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=r.getProgramParameter(v,AL)),U},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=CL++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=T,this.fragmentShader=w,this}let qL=0;class YL{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new $L(e),n.set(e,i)),i}}class $L{constructor(e){this.id=qL++,this.code=e,this.usedTimes=0}}function KL(t,e,n,i,r,s,o){const a=new Jy,l=new YL,c=[],u=r.isWebGL2,f=r.logarithmicDepthBuffer,d=r.vertexTextures;let p=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(S){return S===0?"uv":`uv${S}`}function v(S,E,U,j,Q){const L=j.fog,B=Q.geometry,W=S.isMeshStandardMaterial?j.environment:null,$=(S.isMeshStandardMaterial?n:e).get(S.envMap||W),N=$&&$.mapping===Kc?$.image.height:null,O=_[S.type];S.precision!==null&&(p=r.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));const V=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,Y=V!==void 0?V.length:0;let Z=0;B.morphAttributes.position!==void 0&&(Z=1),B.morphAttributes.normal!==void 0&&(Z=2),B.morphAttributes.color!==void 0&&(Z=3);let q,K,ae,fe;if(O){const $t=ri[O];q=$t.vertexShader,K=$t.fragmentShader}else q=S.vertexShader,K=S.fragmentShader,l.update(S),ae=l.getVertexShaderID(S),fe=l.getFragmentShaderID(S);const pe=t.getRenderTarget(),Le=Q.isInstancedMesh===!0,Re=Q.isBatchedMesh===!0,ye=!!S.map,Ie=!!S.matcap,k=!!$,Yt=!!S.aoMap,Me=!!S.lightMap,Ne=!!S.bumpMap,ve=!!S.normalMap,ct=!!S.displacementMap,Be=!!S.emissiveMap,b=!!S.metalnessMap,M=!!S.roughnessMap,H=S.anisotropy>0,ie=S.clearcoat>0,te=S.iridescence>0,re=S.sheen>0,_e=S.transmission>0,ue=H&&!!S.anisotropyMap,me=ie&&!!S.clearcoatMap,Ae=ie&&!!S.clearcoatNormalMap,ze=ie&&!!S.clearcoatRoughnessMap,ee=te&&!!S.iridescenceMap,Qe=te&&!!S.iridescenceThicknessMap,je=re&&!!S.sheenColorMap,De=re&&!!S.sheenRoughnessMap,Se=!!S.specularMap,ge=!!S.specularColorMap,Oe=!!S.specularIntensityMap,Ke=_e&&!!S.transmissionMap,mt=_e&&!!S.thicknessMap,He=!!S.gradientMap,se=!!S.alphaMap,D=S.alphaTest>0,le=!!S.alphaHash,ce=!!S.extensions,Ce=!!B.attributes.uv1,Ee=!!B.attributes.uv2,et=!!B.attributes.uv3;let tt=sr;return S.toneMapped&&(pe===null||pe.isXRRenderTarget===!0)&&(tt=t.toneMapping),{isWebGL2:u,shaderID:O,shaderType:S.type,shaderName:S.name,vertexShader:q,fragmentShader:K,defines:S.defines,customVertexShaderID:ae,customFragmentShaderID:fe,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:Re,instancing:Le,instancingColor:Le&&Q.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:pe===null?t.outputColorSpace:pe.isXRRenderTarget===!0?pe.texture.colorSpace:Li,map:ye,matcap:Ie,envMap:k,envMapMode:k&&$.mapping,envMapCubeUVHeight:N,aoMap:Yt,lightMap:Me,bumpMap:Ne,normalMap:ve,displacementMap:d&&ct,emissiveMap:Be,normalMapObjectSpace:ve&&S.normalMapType===rb,normalMapTangentSpace:ve&&S.normalMapType===ib,metalnessMap:b,roughnessMap:M,anisotropy:H,anisotropyMap:ue,clearcoat:ie,clearcoatMap:me,clearcoatNormalMap:Ae,clearcoatRoughnessMap:ze,iridescence:te,iridescenceMap:ee,iridescenceThicknessMap:Qe,sheen:re,sheenColorMap:je,sheenRoughnessMap:De,specularMap:Se,specularColorMap:ge,specularIntensityMap:Oe,transmission:_e,transmissionMap:Ke,thicknessMap:mt,gradientMap:He,opaque:S.transparent===!1&&S.blending===Vs,alphaMap:se,alphaTest:D,alphaHash:le,combine:S.combine,mapUv:ye&&x(S.map.channel),aoMapUv:Yt&&x(S.aoMap.channel),lightMapUv:Me&&x(S.lightMap.channel),bumpMapUv:Ne&&x(S.bumpMap.channel),normalMapUv:ve&&x(S.normalMap.channel),displacementMapUv:ct&&x(S.displacementMap.channel),emissiveMapUv:Be&&x(S.emissiveMap.channel),metalnessMapUv:b&&x(S.metalnessMap.channel),roughnessMapUv:M&&x(S.roughnessMap.channel),anisotropyMapUv:ue&&x(S.anisotropyMap.channel),clearcoatMapUv:me&&x(S.clearcoatMap.channel),clearcoatNormalMapUv:Ae&&x(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ze&&x(S.clearcoatRoughnessMap.channel),iridescenceMapUv:ee&&x(S.iridescenceMap.channel),iridescenceThicknessMapUv:Qe&&x(S.iridescenceThicknessMap.channel),sheenColorMapUv:je&&x(S.sheenColorMap.channel),sheenRoughnessMapUv:De&&x(S.sheenRoughnessMap.channel),specularMapUv:Se&&x(S.specularMap.channel),specularColorMapUv:ge&&x(S.specularColorMap.channel),specularIntensityMapUv:Oe&&x(S.specularIntensityMap.channel),transmissionMapUv:Ke&&x(S.transmissionMap.channel),thicknessMapUv:mt&&x(S.thicknessMap.channel),alphaMapUv:se&&x(S.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(ve||H),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,vertexUv1s:Ce,vertexUv2s:Ee,vertexUv3s:et,pointsUvs:Q.isPoints===!0&&!!B.attributes.uv&&(ye||se),fog:!!L,useFog:S.fog===!0,fogExp2:L&&L.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:Q.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:Y,morphTextureStride:Z,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:t.shadowMap.enabled&&U.length>0,shadowMapType:t.shadowMap.type,toneMapping:tt,useLegacyLights:t._useLegacyLights,decodeVideoTexture:ye&&S.map.isVideoTexture===!0&&Je.getTransfer(S.map.colorSpace)===ot,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===_i,flipSided:S.side===hn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:ce&&S.extensions.derivatives===!0,extensionFragDepth:ce&&S.extensions.fragDepth===!0,extensionDrawBuffers:ce&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:ce&&S.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ce&&S.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()}}function h(S){const E=[];if(S.shaderID?E.push(S.shaderID):(E.push(S.customVertexShaderID),E.push(S.customFragmentShaderID)),S.defines!==void 0)for(const U in S.defines)E.push(U),E.push(S.defines[U]);return S.isRawShaderMaterial===!1&&(g(E,S),m(E,S),E.push(t.outputColorSpace)),E.push(S.customProgramCacheKey),E.join()}function g(S,E){S.push(E.precision),S.push(E.outputColorSpace),S.push(E.envMapMode),S.push(E.envMapCubeUVHeight),S.push(E.mapUv),S.push(E.alphaMapUv),S.push(E.lightMapUv),S.push(E.aoMapUv),S.push(E.bumpMapUv),S.push(E.normalMapUv),S.push(E.displacementMapUv),S.push(E.emissiveMapUv),S.push(E.metalnessMapUv),S.push(E.roughnessMapUv),S.push(E.anisotropyMapUv),S.push(E.clearcoatMapUv),S.push(E.clearcoatNormalMapUv),S.push(E.clearcoatRoughnessMapUv),S.push(E.iridescenceMapUv),S.push(E.iridescenceThicknessMapUv),S.push(E.sheenColorMapUv),S.push(E.sheenRoughnessMapUv),S.push(E.specularMapUv),S.push(E.specularColorMapUv),S.push(E.specularIntensityMapUv),S.push(E.transmissionMapUv),S.push(E.thicknessMapUv),S.push(E.combine),S.push(E.fogExp2),S.push(E.sizeAttenuation),S.push(E.morphTargetsCount),S.push(E.morphAttributeCount),S.push(E.numDirLights),S.push(E.numPointLights),S.push(E.numSpotLights),S.push(E.numSpotLightMaps),S.push(E.numHemiLights),S.push(E.numRectAreaLights),S.push(E.numDirLightShadows),S.push(E.numPointLightShadows),S.push(E.numSpotLightShadows),S.push(E.numSpotLightShadowsWithMaps),S.push(E.numLightProbes),S.push(E.shadowMapType),S.push(E.toneMapping),S.push(E.numClippingPlanes),S.push(E.numClipIntersection),S.push(E.depthPacking)}function m(S,E){a.disableAll(),E.isWebGL2&&a.enable(0),E.supportsVertexTextures&&a.enable(1),E.instancing&&a.enable(2),E.instancingColor&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),S.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.skinning&&a.enable(4),E.morphTargets&&a.enable(5),E.morphNormals&&a.enable(6),E.morphColors&&a.enable(7),E.premultipliedAlpha&&a.enable(8),E.shadowMapEnabled&&a.enable(9),E.useLegacyLights&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),S.push(a.mask)}function y(S){const E=_[S.type];let U;if(E){const j=ri[E];U=Lb.clone(j.uniforms)}else U=S.uniforms;return U}function C(S,E){let U;for(let j=0,Q=c.length;j<Q;j++){const L=c[j];if(L.cacheKey===E){U=L,++U.usedTimes;break}}return U===void 0&&(U=new XL(t,E,S,s),c.push(U)),U}function T(S){if(--S.usedTimes===0){const E=c.indexOf(S);c[E]=c[c.length-1],c.pop(),S.destroy()}}function w(S){l.remove(S)}function P(){l.dispose()}return{getParameters:v,getProgramCacheKey:h,getUniforms:y,acquireProgram:C,releaseProgram:T,releaseShaderCache:w,programs:c,dispose:P}}function ZL(){let t=new WeakMap;function e(s){let o=t.get(s);return o===void 0&&(o={},t.set(s,o)),o}function n(s){t.delete(s)}function i(s,o,a){t.get(s)[o]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function QL(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Gv(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Wv(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(f,d,p,_,x,v){let h=t[e];return h===void 0?(h={id:f.id,object:f,geometry:d,material:p,groupOrder:_,renderOrder:f.renderOrder,z:x,group:v},t[e]=h):(h.id=f.id,h.object=f,h.geometry=d,h.material=p,h.groupOrder=_,h.renderOrder=f.renderOrder,h.z=x,h.group=v),e++,h}function a(f,d,p,_,x,v){const h=o(f,d,p,_,x,v);p.transmission>0?i.push(h):p.transparent===!0?r.push(h):n.push(h)}function l(f,d,p,_,x,v){const h=o(f,d,p,_,x,v);p.transmission>0?i.unshift(h):p.transparent===!0?r.unshift(h):n.unshift(h)}function c(f,d){n.length>1&&n.sort(f||QL),i.length>1&&i.sort(d||Gv),r.length>1&&r.sort(d||Gv)}function u(){for(let f=e,d=t.length;f<d;f++){const p=t[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function JL(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new Wv,t.set(i,[o])):r>=s.length?(o=new Wv,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function eD(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new F,color:new Ye};break;case"SpotLight":n={position:new F,direction:new F,color:new Ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new F,color:new Ye,distance:0,decay:0};break;case"HemisphereLight":n={direction:new F,skyColor:new Ye,groundColor:new Ye};break;case"RectAreaLight":n={color:new Ye,position:new F,halfWidth:new F,halfHeight:new F};break}return t[e.id]=n,n}}}function tD(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let nD=0;function iD(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function rD(t,e){const n=new eD,i=tD(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)r.probe.push(new F);const s=new F,o=new At,a=new At;function l(u,f){let d=0,p=0,_=0;for(let j=0;j<9;j++)r.probe[j].set(0,0,0);let x=0,v=0,h=0,g=0,m=0,y=0,C=0,T=0,w=0,P=0,S=0;u.sort(iD);const E=f===!0?Math.PI:1;for(let j=0,Q=u.length;j<Q;j++){const L=u[j],B=L.color,W=L.intensity,$=L.distance,N=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)d+=B.r*W*E,p+=B.g*W*E,_+=B.b*W*E;else if(L.isLightProbe){for(let O=0;O<9;O++)r.probe[O].addScaledVector(L.sh.coefficients[O],W);S++}else if(L.isDirectionalLight){const O=n.get(L);if(O.color.copy(L.color).multiplyScalar(L.intensity*E),L.castShadow){const V=L.shadow,Y=i.get(L);Y.shadowBias=V.bias,Y.shadowNormalBias=V.normalBias,Y.shadowRadius=V.radius,Y.shadowMapSize=V.mapSize,r.directionalShadow[x]=Y,r.directionalShadowMap[x]=N,r.directionalShadowMatrix[x]=L.shadow.matrix,y++}r.directional[x]=O,x++}else if(L.isSpotLight){const O=n.get(L);O.position.setFromMatrixPosition(L.matrixWorld),O.color.copy(B).multiplyScalar(W*E),O.distance=$,O.coneCos=Math.cos(L.angle),O.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),O.decay=L.decay,r.spot[h]=O;const V=L.shadow;if(L.map&&(r.spotLightMap[w]=L.map,w++,V.updateMatrices(L),L.castShadow&&P++),r.spotLightMatrix[h]=V.matrix,L.castShadow){const Y=i.get(L);Y.shadowBias=V.bias,Y.shadowNormalBias=V.normalBias,Y.shadowRadius=V.radius,Y.shadowMapSize=V.mapSize,r.spotShadow[h]=Y,r.spotShadowMap[h]=N,T++}h++}else if(L.isRectAreaLight){const O=n.get(L);O.color.copy(B).multiplyScalar(W),O.halfWidth.set(L.width*.5,0,0),O.halfHeight.set(0,L.height*.5,0),r.rectArea[g]=O,g++}else if(L.isPointLight){const O=n.get(L);if(O.color.copy(L.color).multiplyScalar(L.intensity*E),O.distance=L.distance,O.decay=L.decay,L.castShadow){const V=L.shadow,Y=i.get(L);Y.shadowBias=V.bias,Y.shadowNormalBias=V.normalBias,Y.shadowRadius=V.radius,Y.shadowMapSize=V.mapSize,Y.shadowCameraNear=V.camera.near,Y.shadowCameraFar=V.camera.far,r.pointShadow[v]=Y,r.pointShadowMap[v]=N,r.pointShadowMatrix[v]=L.shadow.matrix,C++}r.point[v]=O,v++}else if(L.isHemisphereLight){const O=n.get(L);O.skyColor.copy(L.color).multiplyScalar(W*E),O.groundColor.copy(L.groundColor).multiplyScalar(W*E),r.hemi[m]=O,m++}}g>0&&(e.isWebGL2?t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=oe.LTC_FLOAT_1,r.rectAreaLTC2=oe.LTC_FLOAT_2):(r.rectAreaLTC1=oe.LTC_HALF_1,r.rectAreaLTC2=oe.LTC_HALF_2):t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=oe.LTC_FLOAT_1,r.rectAreaLTC2=oe.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=oe.LTC_HALF_1,r.rectAreaLTC2=oe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=d,r.ambient[1]=p,r.ambient[2]=_;const U=r.hash;(U.directionalLength!==x||U.pointLength!==v||U.spotLength!==h||U.rectAreaLength!==g||U.hemiLength!==m||U.numDirectionalShadows!==y||U.numPointShadows!==C||U.numSpotShadows!==T||U.numSpotMaps!==w||U.numLightProbes!==S)&&(r.directional.length=x,r.spot.length=h,r.rectArea.length=g,r.point.length=v,r.hemi.length=m,r.directionalShadow.length=y,r.directionalShadowMap.length=y,r.pointShadow.length=C,r.pointShadowMap.length=C,r.spotShadow.length=T,r.spotShadowMap.length=T,r.directionalShadowMatrix.length=y,r.pointShadowMatrix.length=C,r.spotLightMatrix.length=T+w-P,r.spotLightMap.length=w,r.numSpotLightShadowsWithMaps=P,r.numLightProbes=S,U.directionalLength=x,U.pointLength=v,U.spotLength=h,U.rectAreaLength=g,U.hemiLength=m,U.numDirectionalShadows=y,U.numPointShadows=C,U.numSpotShadows=T,U.numSpotMaps=w,U.numLightProbes=S,r.version=nD++)}function c(u,f){let d=0,p=0,_=0,x=0,v=0;const h=f.matrixWorldInverse;for(let g=0,m=u.length;g<m;g++){const y=u[g];if(y.isDirectionalLight){const C=r.directional[d];C.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(h),d++}else if(y.isSpotLight){const C=r.spot[_];C.position.setFromMatrixPosition(y.matrixWorld),C.position.applyMatrix4(h),C.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(h),_++}else if(y.isRectAreaLight){const C=r.rectArea[x];C.position.setFromMatrixPosition(y.matrixWorld),C.position.applyMatrix4(h),a.identity(),o.copy(y.matrixWorld),o.premultiply(h),a.extractRotation(o),C.halfWidth.set(y.width*.5,0,0),C.halfHeight.set(0,y.height*.5,0),C.halfWidth.applyMatrix4(a),C.halfHeight.applyMatrix4(a),x++}else if(y.isPointLight){const C=r.point[p];C.position.setFromMatrixPosition(y.matrixWorld),C.position.applyMatrix4(h),p++}else if(y.isHemisphereLight){const C=r.hemi[v];C.direction.setFromMatrixPosition(y.matrixWorld),C.direction.transformDirection(h),v++}}}return{setup:l,setupView:c,state:r}}function jv(t,e){const n=new rD(t,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(f){i.push(f)}function a(f){r.push(f)}function l(f){n.setup(i,f)}function c(f){n.setupView(i,f)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function sD(t,e){let n=new WeakMap;function i(s,o=0){const a=n.get(s);let l;return a===void 0?(l=new jv(t,e),n.set(s,[l])):o>=a.length?(l=new jv(t,e),a.push(l)):l=a[o],l}function r(){n=new WeakMap}return{get:i,dispose:r}}class oD extends oo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=tb,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class aD extends oo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const lD=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,cD=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function uD(t,e,n){let i=new oS;const r=new $e,s=new $e,o=new Ft,a=new oD({depthPacking:nb}),l=new aD,c={},u=n.maxTextureSize,f={[fr]:hn,[hn]:fr,[_i]:_i},d=new $r({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new $e},radius:{value:4}},vertexShader:lD,fragmentShader:cD}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const _=new An;_.setAttribute("position",new kn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Zn(_,d),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Oy;let h=this.type;this.render=function(T,w,P){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||T.length===0)return;const S=t.getRenderTarget(),E=t.getActiveCubeFace(),U=t.getActiveMipmapLevel(),j=t.state;j.setBlending(rr),j.buffers.color.setClear(1,1,1,1),j.buffers.depth.setTest(!0),j.setScissorTest(!1);const Q=h!==mi&&this.type===mi,L=h===mi&&this.type!==mi;for(let B=0,W=T.length;B<W;B++){const $=T[B],N=$.shadow;if(N===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;r.copy(N.mapSize);const O=N.getFrameExtents();if(r.multiply(O),s.copy(N.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/O.x),r.x=s.x*O.x,N.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/O.y),r.y=s.y*O.y,N.mapSize.y=s.y)),N.map===null||Q===!0||L===!0){const Y=this.type!==mi?{minFilter:en,magFilter:en}:{};N.map!==null&&N.map.dispose(),N.map=new Yr(r.x,r.y,Y),N.map.texture.name=$.name+".shadowMap",N.camera.updateProjectionMatrix()}t.setRenderTarget(N.map),t.clear();const V=N.getViewportCount();for(let Y=0;Y<V;Y++){const Z=N.getViewport(Y);o.set(s.x*Z.x,s.y*Z.y,s.x*Z.z,s.y*Z.w),j.viewport(o),N.updateMatrices($,Y),i=N.getFrustum(),y(w,P,N.camera,$,this.type)}N.isPointLightShadow!==!0&&this.type===mi&&g(N,P),N.needsUpdate=!1}h=this.type,v.needsUpdate=!1,t.setRenderTarget(S,E,U)};function g(T,w){const P=e.update(x);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Yr(r.x,r.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,t.setRenderTarget(T.mapPass),t.clear(),t.renderBufferDirect(w,null,P,d,x,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,t.setRenderTarget(T.map),t.clear(),t.renderBufferDirect(w,null,P,p,x,null)}function m(T,w,P,S){let E=null;const U=P.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(U!==void 0)E=U;else if(E=P.isPointLight===!0?l:a,t.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const j=E.uuid,Q=w.uuid;let L=c[j];L===void 0&&(L={},c[j]=L);let B=L[Q];B===void 0&&(B=E.clone(),L[Q]=B,w.addEventListener("dispose",C)),E=B}if(E.visible=w.visible,E.wireframe=w.wireframe,S===mi?E.side=w.shadowSide!==null?w.shadowSide:w.side:E.side=w.shadowSide!==null?w.shadowSide:f[w.side],E.alphaMap=w.alphaMap,E.alphaTest=w.alphaTest,E.map=w.map,E.clipShadows=w.clipShadows,E.clippingPlanes=w.clippingPlanes,E.clipIntersection=w.clipIntersection,E.displacementMap=w.displacementMap,E.displacementScale=w.displacementScale,E.displacementBias=w.displacementBias,E.wireframeLinewidth=w.wireframeLinewidth,E.linewidth=w.linewidth,P.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const j=t.properties.get(E);j.light=P}return E}function y(T,w,P,S,E){if(T.visible===!1)return;if(T.layers.test(w.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&E===mi)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,T.matrixWorld);const Q=e.update(T),L=T.material;if(Array.isArray(L)){const B=Q.groups;for(let W=0,$=B.length;W<$;W++){const N=B[W],O=L[N.materialIndex];if(O&&O.visible){const V=m(T,O,S,E);T.onBeforeShadow(t,T,w,P,Q,V,N),t.renderBufferDirect(P,null,Q,V,T,N),T.onAfterShadow(t,T,w,P,Q,V,N)}}}else if(L.visible){const B=m(T,L,S,E);T.onBeforeShadow(t,T,w,P,Q,B,null),t.renderBufferDirect(P,null,Q,B,T,null),T.onAfterShadow(t,T,w,P,Q,B,null)}}const j=T.children;for(let Q=0,L=j.length;Q<L;Q++)y(j[Q],w,P,S,E)}function C(T){T.target.removeEventListener("dispose",C);for(const P in c){const S=c[P],E=T.target.uuid;E in S&&(S[E].dispose(),delete S[E])}}}function fD(t,e,n){const i=n.isWebGL2;function r(){let D=!1;const le=new Ft;let ce=null;const Ce=new Ft(0,0,0,0);return{setMask:function(Ee){ce!==Ee&&!D&&(t.colorMask(Ee,Ee,Ee,Ee),ce=Ee)},setLocked:function(Ee){D=Ee},setClear:function(Ee,et,tt,Rt,$t){$t===!0&&(Ee*=Rt,et*=Rt,tt*=Rt),le.set(Ee,et,tt,Rt),Ce.equals(le)===!1&&(t.clearColor(Ee,et,tt,Rt),Ce.copy(le))},reset:function(){D=!1,ce=null,Ce.set(-1,0,0,0)}}}function s(){let D=!1,le=null,ce=null,Ce=null;return{setTest:function(Ee){Ee?Re(t.DEPTH_TEST):ye(t.DEPTH_TEST)},setMask:function(Ee){le!==Ee&&!D&&(t.depthMask(Ee),le=Ee)},setFunc:function(Ee){if(ce!==Ee){switch(Ee){case LC:t.depthFunc(t.NEVER);break;case DC:t.depthFunc(t.ALWAYS);break;case NC:t.depthFunc(t.LESS);break;case xc:t.depthFunc(t.LEQUAL);break;case UC:t.depthFunc(t.EQUAL);break;case IC:t.depthFunc(t.GEQUAL);break;case FC:t.depthFunc(t.GREATER);break;case OC:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}ce=Ee}},setLocked:function(Ee){D=Ee},setClear:function(Ee){Ce!==Ee&&(t.clearDepth(Ee),Ce=Ee)},reset:function(){D=!1,le=null,ce=null,Ce=null}}}function o(){let D=!1,le=null,ce=null,Ce=null,Ee=null,et=null,tt=null,Rt=null,$t=null;return{setTest:function(nt){D||(nt?Re(t.STENCIL_TEST):ye(t.STENCIL_TEST))},setMask:function(nt){le!==nt&&!D&&(t.stencilMask(nt),le=nt)},setFunc:function(nt,Kt,ti){(ce!==nt||Ce!==Kt||Ee!==ti)&&(t.stencilFunc(nt,Kt,ti),ce=nt,Ce=Kt,Ee=ti)},setOp:function(nt,Kt,ti){(et!==nt||tt!==Kt||Rt!==ti)&&(t.stencilOp(nt,Kt,ti),et=nt,tt=Kt,Rt=ti)},setLocked:function(nt){D=nt},setClear:function(nt){$t!==nt&&(t.clearStencil(nt),$t=nt)},reset:function(){D=!1,le=null,ce=null,Ce=null,Ee=null,et=null,tt=null,Rt=null,$t=null}}}const a=new r,l=new s,c=new o,u=new WeakMap,f=new WeakMap;let d={},p={},_=new WeakMap,x=[],v=null,h=!1,g=null,m=null,y=null,C=null,T=null,w=null,P=null,S=new Ye(0,0,0),E=0,U=!1,j=null,Q=null,L=null,B=null,W=null;const $=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let N=!1,O=0;const V=t.getParameter(t.VERSION);V.indexOf("WebGL")!==-1?(O=parseFloat(/^WebGL (\d)/.exec(V)[1]),N=O>=1):V.indexOf("OpenGL ES")!==-1&&(O=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),N=O>=2);let Y=null,Z={};const q=t.getParameter(t.SCISSOR_BOX),K=t.getParameter(t.VIEWPORT),ae=new Ft().fromArray(q),fe=new Ft().fromArray(K);function pe(D,le,ce,Ce){const Ee=new Uint8Array(4),et=t.createTexture();t.bindTexture(D,et),t.texParameteri(D,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(D,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let tt=0;tt<ce;tt++)i&&(D===t.TEXTURE_3D||D===t.TEXTURE_2D_ARRAY)?t.texImage3D(le,0,t.RGBA,1,1,Ce,0,t.RGBA,t.UNSIGNED_BYTE,Ee):t.texImage2D(le+tt,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,Ee);return et}const Le={};Le[t.TEXTURE_2D]=pe(t.TEXTURE_2D,t.TEXTURE_2D,1),Le[t.TEXTURE_CUBE_MAP]=pe(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Le[t.TEXTURE_2D_ARRAY]=pe(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),Le[t.TEXTURE_3D]=pe(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Re(t.DEPTH_TEST),l.setFunc(xc),Be(!1),b(Cg),Re(t.CULL_FACE),ve(rr);function Re(D){d[D]!==!0&&(t.enable(D),d[D]=!0)}function ye(D){d[D]!==!1&&(t.disable(D),d[D]=!1)}function Ie(D,le){return p[D]!==le?(t.bindFramebuffer(D,le),p[D]=le,i&&(D===t.DRAW_FRAMEBUFFER&&(p[t.FRAMEBUFFER]=le),D===t.FRAMEBUFFER&&(p[t.DRAW_FRAMEBUFFER]=le)),!0):!1}function k(D,le){let ce=x,Ce=!1;if(D)if(ce=_.get(le),ce===void 0&&(ce=[],_.set(le,ce)),D.isWebGLMultipleRenderTargets){const Ee=D.texture;if(ce.length!==Ee.length||ce[0]!==t.COLOR_ATTACHMENT0){for(let et=0,tt=Ee.length;et<tt;et++)ce[et]=t.COLOR_ATTACHMENT0+et;ce.length=Ee.length,Ce=!0}}else ce[0]!==t.COLOR_ATTACHMENT0&&(ce[0]=t.COLOR_ATTACHMENT0,Ce=!0);else ce[0]!==t.BACK&&(ce[0]=t.BACK,Ce=!0);Ce&&(n.isWebGL2?t.drawBuffers(ce):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ce))}function Yt(D){return v!==D?(t.useProgram(D),v=D,!0):!1}const Me={[Lr]:t.FUNC_ADD,[gC]:t.FUNC_SUBTRACT,[vC]:t.FUNC_REVERSE_SUBTRACT};if(i)Me[Pg]=t.MIN,Me[Lg]=t.MAX;else{const D=e.get("EXT_blend_minmax");D!==null&&(Me[Pg]=D.MIN_EXT,Me[Lg]=D.MAX_EXT)}const Ne={[_C]:t.ZERO,[xC]:t.ONE,[yC]:t.SRC_COLOR,[Cd]:t.SRC_ALPHA,[AC]:t.SRC_ALPHA_SATURATE,[TC]:t.DST_COLOR,[MC]:t.DST_ALPHA,[SC]:t.ONE_MINUS_SRC_COLOR,[bd]:t.ONE_MINUS_SRC_ALPHA,[wC]:t.ONE_MINUS_DST_COLOR,[EC]:t.ONE_MINUS_DST_ALPHA,[CC]:t.CONSTANT_COLOR,[bC]:t.ONE_MINUS_CONSTANT_COLOR,[RC]:t.CONSTANT_ALPHA,[PC]:t.ONE_MINUS_CONSTANT_ALPHA};function ve(D,le,ce,Ce,Ee,et,tt,Rt,$t,nt){if(D===rr){h===!0&&(ye(t.BLEND),h=!1);return}if(h===!1&&(Re(t.BLEND),h=!0),D!==mC){if(D!==g||nt!==U){if((m!==Lr||T!==Lr)&&(t.blendEquation(t.FUNC_ADD),m=Lr,T=Lr),nt)switch(D){case Vs:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Go:t.blendFunc(t.ONE,t.ONE);break;case bg:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Rg:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Vs:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Go:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case bg:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Rg:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}y=null,C=null,w=null,P=null,S.set(0,0,0),E=0,g=D,U=nt}return}Ee=Ee||le,et=et||ce,tt=tt||Ce,(le!==m||Ee!==T)&&(t.blendEquationSeparate(Me[le],Me[Ee]),m=le,T=Ee),(ce!==y||Ce!==C||et!==w||tt!==P)&&(t.blendFuncSeparate(Ne[ce],Ne[Ce],Ne[et],Ne[tt]),y=ce,C=Ce,w=et,P=tt),(Rt.equals(S)===!1||$t!==E)&&(t.blendColor(Rt.r,Rt.g,Rt.b,$t),S.copy(Rt),E=$t),g=D,U=!1}function ct(D,le){D.side===_i?ye(t.CULL_FACE):Re(t.CULL_FACE);let ce=D.side===hn;le&&(ce=!ce),Be(ce),D.blending===Vs&&D.transparent===!1?ve(rr):ve(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),l.setFunc(D.depthFunc),l.setTest(D.depthTest),l.setMask(D.depthWrite),a.setMask(D.colorWrite);const Ce=D.stencilWrite;c.setTest(Ce),Ce&&(c.setMask(D.stencilWriteMask),c.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),c.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),H(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?Re(t.SAMPLE_ALPHA_TO_COVERAGE):ye(t.SAMPLE_ALPHA_TO_COVERAGE)}function Be(D){j!==D&&(D?t.frontFace(t.CW):t.frontFace(t.CCW),j=D)}function b(D){D!==dC?(Re(t.CULL_FACE),D!==Q&&(D===Cg?t.cullFace(t.BACK):D===hC?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):ye(t.CULL_FACE),Q=D}function M(D){D!==L&&(N&&t.lineWidth(D),L=D)}function H(D,le,ce){D?(Re(t.POLYGON_OFFSET_FILL),(B!==le||W!==ce)&&(t.polygonOffset(le,ce),B=le,W=ce)):ye(t.POLYGON_OFFSET_FILL)}function ie(D){D?Re(t.SCISSOR_TEST):ye(t.SCISSOR_TEST)}function te(D){D===void 0&&(D=t.TEXTURE0+$-1),Y!==D&&(t.activeTexture(D),Y=D)}function re(D,le,ce){ce===void 0&&(Y===null?ce=t.TEXTURE0+$-1:ce=Y);let Ce=Z[ce];Ce===void 0&&(Ce={type:void 0,texture:void 0},Z[ce]=Ce),(Ce.type!==D||Ce.texture!==le)&&(Y!==ce&&(t.activeTexture(ce),Y=ce),t.bindTexture(D,le||Le[D]),Ce.type=D,Ce.texture=le)}function _e(){const D=Z[Y];D!==void 0&&D.type!==void 0&&(t.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function ue(){try{t.compressedTexImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function me(){try{t.compressedTexImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ae(){try{t.texSubImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ze(){try{t.texSubImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ee(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Qe(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function je(){try{t.texStorage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function De(){try{t.texStorage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Se(){try{t.texImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ge(){try{t.texImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Oe(D){ae.equals(D)===!1&&(t.scissor(D.x,D.y,D.z,D.w),ae.copy(D))}function Ke(D){fe.equals(D)===!1&&(t.viewport(D.x,D.y,D.z,D.w),fe.copy(D))}function mt(D,le){let ce=f.get(le);ce===void 0&&(ce=new WeakMap,f.set(le,ce));let Ce=ce.get(D);Ce===void 0&&(Ce=t.getUniformBlockIndex(le,D.name),ce.set(D,Ce))}function He(D,le){const Ce=f.get(le).get(D);u.get(le)!==Ce&&(t.uniformBlockBinding(le,Ce,D.__bindingPointIndex),u.set(le,Ce))}function se(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),i===!0&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),d={},Y=null,Z={},p={},_=new WeakMap,x=[],v=null,h=!1,g=null,m=null,y=null,C=null,T=null,w=null,P=null,S=new Ye(0,0,0),E=0,U=!1,j=null,Q=null,L=null,B=null,W=null,ae.set(0,0,t.canvas.width,t.canvas.height),fe.set(0,0,t.canvas.width,t.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Re,disable:ye,bindFramebuffer:Ie,drawBuffers:k,useProgram:Yt,setBlending:ve,setMaterial:ct,setFlipSided:Be,setCullFace:b,setLineWidth:M,setPolygonOffset:H,setScissorTest:ie,activeTexture:te,bindTexture:re,unbindTexture:_e,compressedTexImage2D:ue,compressedTexImage3D:me,texImage2D:Se,texImage3D:ge,updateUBOMapping:mt,uniformBlockBinding:He,texStorage2D:je,texStorage3D:De,texSubImage2D:Ae,texSubImage3D:ze,compressedTexSubImage2D:ee,compressedTexSubImage3D:Qe,scissor:Oe,viewport:Ke,reset:se}}function dD(t,e,n,i,r,s,o){const a=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap;let f;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(b,M){return p?new OffscreenCanvas(b,M):Tc("canvas")}function x(b,M,H,ie){let te=1;if((b.width>ie||b.height>ie)&&(te=ie/Math.max(b.width,b.height)),te<1||M===!0)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap){const re=M?Id:Math.floor,_e=re(te*b.width),ue=re(te*b.height);f===void 0&&(f=_(_e,ue));const me=H?_(_e,ue):f;return me.width=_e,me.height=ue,me.getContext("2d").drawImage(b,0,0,_e,ue),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+b.width+"x"+b.height+") to ("+_e+"x"+ue+")."),me}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+b.width+"x"+b.height+")."),b;return b}function v(b){return av(b.width)&&av(b.height)}function h(b){return a?!1:b.wrapS!==$n||b.wrapT!==$n||b.minFilter!==en&&b.minFilter!==Nn}function g(b,M){return b.generateMipmaps&&M&&b.minFilter!==en&&b.minFilter!==Nn}function m(b){t.generateMipmap(b)}function y(b,M,H,ie,te=!1){if(a===!1)return M;if(b!==null){if(t[b]!==void 0)return t[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let re=M;if(M===t.RED&&(H===t.FLOAT&&(re=t.R32F),H===t.HALF_FLOAT&&(re=t.R16F),H===t.UNSIGNED_BYTE&&(re=t.R8)),M===t.RED_INTEGER&&(H===t.UNSIGNED_BYTE&&(re=t.R8UI),H===t.UNSIGNED_SHORT&&(re=t.R16UI),H===t.UNSIGNED_INT&&(re=t.R32UI),H===t.BYTE&&(re=t.R8I),H===t.SHORT&&(re=t.R16I),H===t.INT&&(re=t.R32I)),M===t.RG&&(H===t.FLOAT&&(re=t.RG32F),H===t.HALF_FLOAT&&(re=t.RG16F),H===t.UNSIGNED_BYTE&&(re=t.RG8)),M===t.RGBA){const _e=te?yc:Je.getTransfer(ie);H===t.FLOAT&&(re=t.RGBA32F),H===t.HALF_FLOAT&&(re=t.RGBA16F),H===t.UNSIGNED_BYTE&&(re=_e===ot?t.SRGB8_ALPHA8:t.RGBA8),H===t.UNSIGNED_SHORT_4_4_4_4&&(re=t.RGBA4),H===t.UNSIGNED_SHORT_5_5_5_1&&(re=t.RGB5_A1)}return(re===t.R16F||re===t.R32F||re===t.RG16F||re===t.RG32F||re===t.RGBA16F||re===t.RGBA32F)&&e.get("EXT_color_buffer_float"),re}function C(b,M,H){return g(b,H)===!0||b.isFramebufferTexture&&b.minFilter!==en&&b.minFilter!==Nn?Math.log2(Math.max(M.width,M.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?M.mipmaps.length:1}function T(b){return b===en||b===Dg||b===Gu?t.NEAREST:t.LINEAR}function w(b){const M=b.target;M.removeEventListener("dispose",w),S(M),M.isVideoTexture&&u.delete(M)}function P(b){const M=b.target;M.removeEventListener("dispose",P),U(M)}function S(b){const M=i.get(b);if(M.__webglInit===void 0)return;const H=b.source,ie=d.get(H);if(ie){const te=ie[M.__cacheKey];te.usedTimes--,te.usedTimes===0&&E(b),Object.keys(ie).length===0&&d.delete(H)}i.remove(b)}function E(b){const M=i.get(b);t.deleteTexture(M.__webglTexture);const H=b.source,ie=d.get(H);delete ie[M.__cacheKey],o.memory.textures--}function U(b){const M=b.texture,H=i.get(b),ie=i.get(M);if(ie.__webglTexture!==void 0&&(t.deleteTexture(ie.__webglTexture),o.memory.textures--),b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let te=0;te<6;te++){if(Array.isArray(H.__webglFramebuffer[te]))for(let re=0;re<H.__webglFramebuffer[te].length;re++)t.deleteFramebuffer(H.__webglFramebuffer[te][re]);else t.deleteFramebuffer(H.__webglFramebuffer[te]);H.__webglDepthbuffer&&t.deleteRenderbuffer(H.__webglDepthbuffer[te])}else{if(Array.isArray(H.__webglFramebuffer))for(let te=0;te<H.__webglFramebuffer.length;te++)t.deleteFramebuffer(H.__webglFramebuffer[te]);else t.deleteFramebuffer(H.__webglFramebuffer);if(H.__webglDepthbuffer&&t.deleteRenderbuffer(H.__webglDepthbuffer),H.__webglMultisampledFramebuffer&&t.deleteFramebuffer(H.__webglMultisampledFramebuffer),H.__webglColorRenderbuffer)for(let te=0;te<H.__webglColorRenderbuffer.length;te++)H.__webglColorRenderbuffer[te]&&t.deleteRenderbuffer(H.__webglColorRenderbuffer[te]);H.__webglDepthRenderbuffer&&t.deleteRenderbuffer(H.__webglDepthRenderbuffer)}if(b.isWebGLMultipleRenderTargets)for(let te=0,re=M.length;te<re;te++){const _e=i.get(M[te]);_e.__webglTexture&&(t.deleteTexture(_e.__webglTexture),o.memory.textures--),i.remove(M[te])}i.remove(M),i.remove(b)}let j=0;function Q(){j=0}function L(){const b=j;return b>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+r.maxTextures),j+=1,b}function B(b){const M=[];return M.push(b.wrapS),M.push(b.wrapT),M.push(b.wrapR||0),M.push(b.magFilter),M.push(b.minFilter),M.push(b.anisotropy),M.push(b.internalFormat),M.push(b.format),M.push(b.type),M.push(b.generateMipmaps),M.push(b.premultiplyAlpha),M.push(b.flipY),M.push(b.unpackAlignment),M.push(b.colorSpace),M.join()}function W(b,M){const H=i.get(b);if(b.isVideoTexture&&ct(b),b.isRenderTargetTexture===!1&&b.version>0&&H.__version!==b.version){const ie=b.image;if(ie===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ie.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ae(H,b,M);return}}n.bindTexture(t.TEXTURE_2D,H.__webglTexture,t.TEXTURE0+M)}function $(b,M){const H=i.get(b);if(b.version>0&&H.__version!==b.version){ae(H,b,M);return}n.bindTexture(t.TEXTURE_2D_ARRAY,H.__webglTexture,t.TEXTURE0+M)}function N(b,M){const H=i.get(b);if(b.version>0&&H.__version!==b.version){ae(H,b,M);return}n.bindTexture(t.TEXTURE_3D,H.__webglTexture,t.TEXTURE0+M)}function O(b,M){const H=i.get(b);if(b.version>0&&H.__version!==b.version){fe(H,b,M);return}n.bindTexture(t.TEXTURE_CUBE_MAP,H.__webglTexture,t.TEXTURE0+M)}const V={[Ld]:t.REPEAT,[$n]:t.CLAMP_TO_EDGE,[Dd]:t.MIRRORED_REPEAT},Y={[en]:t.NEAREST,[Dg]:t.NEAREST_MIPMAP_NEAREST,[Gu]:t.NEAREST_MIPMAP_LINEAR,[Nn]:t.LINEAR,[XC]:t.LINEAR_MIPMAP_NEAREST,[da]:t.LINEAR_MIPMAP_LINEAR},Z={[sb]:t.NEVER,[fb]:t.ALWAYS,[ob]:t.LESS,[Yy]:t.LEQUAL,[ab]:t.EQUAL,[ub]:t.GEQUAL,[lb]:t.GREATER,[cb]:t.NOTEQUAL};function q(b,M,H){if(H?(t.texParameteri(b,t.TEXTURE_WRAP_S,V[M.wrapS]),t.texParameteri(b,t.TEXTURE_WRAP_T,V[M.wrapT]),(b===t.TEXTURE_3D||b===t.TEXTURE_2D_ARRAY)&&t.texParameteri(b,t.TEXTURE_WRAP_R,V[M.wrapR]),t.texParameteri(b,t.TEXTURE_MAG_FILTER,Y[M.magFilter]),t.texParameteri(b,t.TEXTURE_MIN_FILTER,Y[M.minFilter])):(t.texParameteri(b,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(b,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(b===t.TEXTURE_3D||b===t.TEXTURE_2D_ARRAY)&&t.texParameteri(b,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(M.wrapS!==$n||M.wrapT!==$n)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(b,t.TEXTURE_MAG_FILTER,T(M.magFilter)),t.texParameteri(b,t.TEXTURE_MIN_FILTER,T(M.minFilter)),M.minFilter!==en&&M.minFilter!==Nn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),M.compareFunction&&(t.texParameteri(b,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(b,t.TEXTURE_COMPARE_FUNC,Z[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ie=e.get("EXT_texture_filter_anisotropic");if(M.magFilter===en||M.minFilter!==Gu&&M.minFilter!==da||M.type===Yi&&e.has("OES_texture_float_linear")===!1||a===!1&&M.type===ha&&e.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||i.get(M).__currentAnisotropy)&&(t.texParameterf(b,ie.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy)}}function K(b,M){let H=!1;b.__webglInit===void 0&&(b.__webglInit=!0,M.addEventListener("dispose",w));const ie=M.source;let te=d.get(ie);te===void 0&&(te={},d.set(ie,te));const re=B(M);if(re!==b.__cacheKey){te[re]===void 0&&(te[re]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,H=!0),te[re].usedTimes++;const _e=te[b.__cacheKey];_e!==void 0&&(te[b.__cacheKey].usedTimes--,_e.usedTimes===0&&E(M)),b.__cacheKey=re,b.__webglTexture=te[re].texture}return H}function ae(b,M,H){let ie=t.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(ie=t.TEXTURE_2D_ARRAY),M.isData3DTexture&&(ie=t.TEXTURE_3D);const te=K(b,M),re=M.source;n.bindTexture(ie,b.__webglTexture,t.TEXTURE0+H);const _e=i.get(re);if(re.version!==_e.__version||te===!0){n.activeTexture(t.TEXTURE0+H);const ue=Je.getPrimaries(Je.workingColorSpace),me=M.colorSpace===In?null:Je.getPrimaries(M.colorSpace),Ae=M.colorSpace===In||ue===me?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae);const ze=h(M)&&v(M.image)===!1;let ee=x(M.image,ze,!1,r.maxTextureSize);ee=Be(M,ee);const Qe=v(ee)||a,je=s.convert(M.format,M.colorSpace);let De=s.convert(M.type),Se=y(M.internalFormat,je,De,M.colorSpace,M.isVideoTexture);q(ie,M,Qe);let ge;const Oe=M.mipmaps,Ke=a&&M.isVideoTexture!==!0&&Se!==Xy,mt=_e.__version===void 0||te===!0,He=C(M,ee,Qe);if(M.isDepthTexture)Se=t.DEPTH_COMPONENT,a?M.type===Yi?Se=t.DEPTH_COMPONENT32F:M.type===qi?Se=t.DEPTH_COMPONENT24:M.type===zr?Se=t.DEPTH24_STENCIL8:Se=t.DEPTH_COMPONENT16:M.type===Yi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===Vr&&Se===t.DEPTH_COMPONENT&&M.type!==tp&&M.type!==qi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=qi,De=s.convert(M.type)),M.format===eo&&Se===t.DEPTH_COMPONENT&&(Se=t.DEPTH_STENCIL,M.type!==zr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=zr,De=s.convert(M.type))),mt&&(Ke?n.texStorage2D(t.TEXTURE_2D,1,Se,ee.width,ee.height):n.texImage2D(t.TEXTURE_2D,0,Se,ee.width,ee.height,0,je,De,null));else if(M.isDataTexture)if(Oe.length>0&&Qe){Ke&&mt&&n.texStorage2D(t.TEXTURE_2D,He,Se,Oe[0].width,Oe[0].height);for(let se=0,D=Oe.length;se<D;se++)ge=Oe[se],Ke?n.texSubImage2D(t.TEXTURE_2D,se,0,0,ge.width,ge.height,je,De,ge.data):n.texImage2D(t.TEXTURE_2D,se,Se,ge.width,ge.height,0,je,De,ge.data);M.generateMipmaps=!1}else Ke?(mt&&n.texStorage2D(t.TEXTURE_2D,He,Se,ee.width,ee.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,ee.width,ee.height,je,De,ee.data)):n.texImage2D(t.TEXTURE_2D,0,Se,ee.width,ee.height,0,je,De,ee.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Ke&&mt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,He,Se,Oe[0].width,Oe[0].height,ee.depth);for(let se=0,D=Oe.length;se<D;se++)ge=Oe[se],M.format!==Kn?je!==null?Ke?n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,se,0,0,0,ge.width,ge.height,ee.depth,je,ge.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,se,Se,ge.width,ge.height,ee.depth,0,ge.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ke?n.texSubImage3D(t.TEXTURE_2D_ARRAY,se,0,0,0,ge.width,ge.height,ee.depth,je,De,ge.data):n.texImage3D(t.TEXTURE_2D_ARRAY,se,Se,ge.width,ge.height,ee.depth,0,je,De,ge.data)}else{Ke&&mt&&n.texStorage2D(t.TEXTURE_2D,He,Se,Oe[0].width,Oe[0].height);for(let se=0,D=Oe.length;se<D;se++)ge=Oe[se],M.format!==Kn?je!==null?Ke?n.compressedTexSubImage2D(t.TEXTURE_2D,se,0,0,ge.width,ge.height,je,ge.data):n.compressedTexImage2D(t.TEXTURE_2D,se,Se,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ke?n.texSubImage2D(t.TEXTURE_2D,se,0,0,ge.width,ge.height,je,De,ge.data):n.texImage2D(t.TEXTURE_2D,se,Se,ge.width,ge.height,0,je,De,ge.data)}else if(M.isDataArrayTexture)Ke?(mt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,He,Se,ee.width,ee.height,ee.depth),n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,je,De,ee.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,Se,ee.width,ee.height,ee.depth,0,je,De,ee.data);else if(M.isData3DTexture)Ke?(mt&&n.texStorage3D(t.TEXTURE_3D,He,Se,ee.width,ee.height,ee.depth),n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,je,De,ee.data)):n.texImage3D(t.TEXTURE_3D,0,Se,ee.width,ee.height,ee.depth,0,je,De,ee.data);else if(M.isFramebufferTexture){if(mt)if(Ke)n.texStorage2D(t.TEXTURE_2D,He,Se,ee.width,ee.height);else{let se=ee.width,D=ee.height;for(let le=0;le<He;le++)n.texImage2D(t.TEXTURE_2D,le,Se,se,D,0,je,De,null),se>>=1,D>>=1}}else if(Oe.length>0&&Qe){Ke&&mt&&n.texStorage2D(t.TEXTURE_2D,He,Se,Oe[0].width,Oe[0].height);for(let se=0,D=Oe.length;se<D;se++)ge=Oe[se],Ke?n.texSubImage2D(t.TEXTURE_2D,se,0,0,je,De,ge):n.texImage2D(t.TEXTURE_2D,se,Se,je,De,ge);M.generateMipmaps=!1}else Ke?(mt&&n.texStorage2D(t.TEXTURE_2D,He,Se,ee.width,ee.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,je,De,ee)):n.texImage2D(t.TEXTURE_2D,0,Se,je,De,ee);g(M,Qe)&&m(ie),_e.__version=re.version,M.onUpdate&&M.onUpdate(M)}b.__version=M.version}function fe(b,M,H){if(M.image.length!==6)return;const ie=K(b,M),te=M.source;n.bindTexture(t.TEXTURE_CUBE_MAP,b.__webglTexture,t.TEXTURE0+H);const re=i.get(te);if(te.version!==re.__version||ie===!0){n.activeTexture(t.TEXTURE0+H);const _e=Je.getPrimaries(Je.workingColorSpace),ue=M.colorSpace===In?null:Je.getPrimaries(M.colorSpace),me=M.colorSpace===In||_e===ue?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);const Ae=M.isCompressedTexture||M.image[0].isCompressedTexture,ze=M.image[0]&&M.image[0].isDataTexture,ee=[];for(let se=0;se<6;se++)!Ae&&!ze?ee[se]=x(M.image[se],!1,!0,r.maxCubemapSize):ee[se]=ze?M.image[se].image:M.image[se],ee[se]=Be(M,ee[se]);const Qe=ee[0],je=v(Qe)||a,De=s.convert(M.format,M.colorSpace),Se=s.convert(M.type),ge=y(M.internalFormat,De,Se,M.colorSpace),Oe=a&&M.isVideoTexture!==!0,Ke=re.__version===void 0||ie===!0;let mt=C(M,Qe,je);q(t.TEXTURE_CUBE_MAP,M,je);let He;if(Ae){Oe&&Ke&&n.texStorage2D(t.TEXTURE_CUBE_MAP,mt,ge,Qe.width,Qe.height);for(let se=0;se<6;se++){He=ee[se].mipmaps;for(let D=0;D<He.length;D++){const le=He[D];M.format!==Kn?De!==null?Oe?n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,D,0,0,le.width,le.height,De,le.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,D,ge,le.width,le.height,0,le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Oe?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,D,0,0,le.width,le.height,De,Se,le.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,D,ge,le.width,le.height,0,De,Se,le.data)}}}else{He=M.mipmaps,Oe&&Ke&&(He.length>0&&mt++,n.texStorage2D(t.TEXTURE_CUBE_MAP,mt,ge,ee[0].width,ee[0].height));for(let se=0;se<6;se++)if(ze){Oe?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,ee[se].width,ee[se].height,De,Se,ee[se].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,ge,ee[se].width,ee[se].height,0,De,Se,ee[se].data);for(let D=0;D<He.length;D++){const ce=He[D].image[se].image;Oe?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,D+1,0,0,ce.width,ce.height,De,Se,ce.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,D+1,ge,ce.width,ce.height,0,De,Se,ce.data)}}else{Oe?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,De,Se,ee[se]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,ge,De,Se,ee[se]);for(let D=0;D<He.length;D++){const le=He[D];Oe?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,D+1,0,0,De,Se,le.image[se]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,D+1,ge,De,Se,le.image[se])}}}g(M,je)&&m(t.TEXTURE_CUBE_MAP),re.__version=te.version,M.onUpdate&&M.onUpdate(M)}b.__version=M.version}function pe(b,M,H,ie,te,re){const _e=s.convert(H.format,H.colorSpace),ue=s.convert(H.type),me=y(H.internalFormat,_e,ue,H.colorSpace);if(!i.get(M).__hasExternalTextures){const ze=Math.max(1,M.width>>re),ee=Math.max(1,M.height>>re);te===t.TEXTURE_3D||te===t.TEXTURE_2D_ARRAY?n.texImage3D(te,re,me,ze,ee,M.depth,0,_e,ue,null):n.texImage2D(te,re,me,ze,ee,0,_e,ue,null)}n.bindFramebuffer(t.FRAMEBUFFER,b),ve(M)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ie,te,i.get(H).__webglTexture,0,Ne(M)):(te===t.TEXTURE_2D||te>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,ie,te,i.get(H).__webglTexture,re),n.bindFramebuffer(t.FRAMEBUFFER,null)}function Le(b,M,H){if(t.bindRenderbuffer(t.RENDERBUFFER,b),M.depthBuffer&&!M.stencilBuffer){let ie=a===!0?t.DEPTH_COMPONENT24:t.DEPTH_COMPONENT16;if(H||ve(M)){const te=M.depthTexture;te&&te.isDepthTexture&&(te.type===Yi?ie=t.DEPTH_COMPONENT32F:te.type===qi&&(ie=t.DEPTH_COMPONENT24));const re=Ne(M);ve(M)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,re,ie,M.width,M.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,re,ie,M.width,M.height)}else t.renderbufferStorage(t.RENDERBUFFER,ie,M.width,M.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,b)}else if(M.depthBuffer&&M.stencilBuffer){const ie=Ne(M);H&&ve(M)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,ie,t.DEPTH24_STENCIL8,M.width,M.height):ve(M)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ie,t.DEPTH24_STENCIL8,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,M.width,M.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,b)}else{const ie=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let te=0;te<ie.length;te++){const re=ie[te],_e=s.convert(re.format,re.colorSpace),ue=s.convert(re.type),me=y(re.internalFormat,_e,ue,re.colorSpace),Ae=Ne(M);H&&ve(M)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ae,me,M.width,M.height):ve(M)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ae,me,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,me,M.width,M.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Re(b,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,b),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),W(M.depthTexture,0);const ie=i.get(M.depthTexture).__webglTexture,te=Ne(M);if(M.depthTexture.format===Vr)ve(M)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ie,0,te):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ie,0);else if(M.depthTexture.format===eo)ve(M)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ie,0,te):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ie,0);else throw new Error("Unknown depthTexture format")}function ye(b){const M=i.get(b),H=b.isWebGLCubeRenderTarget===!0;if(b.depthTexture&&!M.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");Re(M.__webglFramebuffer,b)}else if(H){M.__webglDepthbuffer=[];for(let ie=0;ie<6;ie++)n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[ie]),M.__webglDepthbuffer[ie]=t.createRenderbuffer(),Le(M.__webglDepthbuffer[ie],b,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=t.createRenderbuffer(),Le(M.__webglDepthbuffer,b,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ie(b,M,H){const ie=i.get(b);M!==void 0&&pe(ie.__webglFramebuffer,b,b.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),H!==void 0&&ye(b)}function k(b){const M=b.texture,H=i.get(b),ie=i.get(M);b.addEventListener("dispose",P),b.isWebGLMultipleRenderTargets!==!0&&(ie.__webglTexture===void 0&&(ie.__webglTexture=t.createTexture()),ie.__version=M.version,o.memory.textures++);const te=b.isWebGLCubeRenderTarget===!0,re=b.isWebGLMultipleRenderTargets===!0,_e=v(b)||a;if(te){H.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(a&&M.mipmaps&&M.mipmaps.length>0){H.__webglFramebuffer[ue]=[];for(let me=0;me<M.mipmaps.length;me++)H.__webglFramebuffer[ue][me]=t.createFramebuffer()}else H.__webglFramebuffer[ue]=t.createFramebuffer()}else{if(a&&M.mipmaps&&M.mipmaps.length>0){H.__webglFramebuffer=[];for(let ue=0;ue<M.mipmaps.length;ue++)H.__webglFramebuffer[ue]=t.createFramebuffer()}else H.__webglFramebuffer=t.createFramebuffer();if(re)if(r.drawBuffers){const ue=b.texture;for(let me=0,Ae=ue.length;me<Ae;me++){const ze=i.get(ue[me]);ze.__webglTexture===void 0&&(ze.__webglTexture=t.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&b.samples>0&&ve(b)===!1){const ue=re?M:[M];H.__webglMultisampledFramebuffer=t.createFramebuffer(),H.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let me=0;me<ue.length;me++){const Ae=ue[me];H.__webglColorRenderbuffer[me]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,H.__webglColorRenderbuffer[me]);const ze=s.convert(Ae.format,Ae.colorSpace),ee=s.convert(Ae.type),Qe=y(Ae.internalFormat,ze,ee,Ae.colorSpace,b.isXRRenderTarget===!0),je=Ne(b);t.renderbufferStorageMultisample(t.RENDERBUFFER,je,Qe,b.width,b.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.RENDERBUFFER,H.__webglColorRenderbuffer[me])}t.bindRenderbuffer(t.RENDERBUFFER,null),b.depthBuffer&&(H.__webglDepthRenderbuffer=t.createRenderbuffer(),Le(H.__webglDepthRenderbuffer,b,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(te){n.bindTexture(t.TEXTURE_CUBE_MAP,ie.__webglTexture),q(t.TEXTURE_CUBE_MAP,M,_e);for(let ue=0;ue<6;ue++)if(a&&M.mipmaps&&M.mipmaps.length>0)for(let me=0;me<M.mipmaps.length;me++)pe(H.__webglFramebuffer[ue][me],b,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,me);else pe(H.__webglFramebuffer[ue],b,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);g(M,_e)&&m(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(re){const ue=b.texture;for(let me=0,Ae=ue.length;me<Ae;me++){const ze=ue[me],ee=i.get(ze);n.bindTexture(t.TEXTURE_2D,ee.__webglTexture),q(t.TEXTURE_2D,ze,_e),pe(H.__webglFramebuffer,b,ze,t.COLOR_ATTACHMENT0+me,t.TEXTURE_2D,0),g(ze,_e)&&m(t.TEXTURE_2D)}n.unbindTexture()}else{let ue=t.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(a?ue=b.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(ue,ie.__webglTexture),q(ue,M,_e),a&&M.mipmaps&&M.mipmaps.length>0)for(let me=0;me<M.mipmaps.length;me++)pe(H.__webglFramebuffer[me],b,M,t.COLOR_ATTACHMENT0,ue,me);else pe(H.__webglFramebuffer,b,M,t.COLOR_ATTACHMENT0,ue,0);g(M,_e)&&m(ue),n.unbindTexture()}b.depthBuffer&&ye(b)}function Yt(b){const M=v(b)||a,H=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let ie=0,te=H.length;ie<te;ie++){const re=H[ie];if(g(re,M)){const _e=b.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,ue=i.get(re).__webglTexture;n.bindTexture(_e,ue),m(_e),n.unbindTexture()}}}function Me(b){if(a&&b.samples>0&&ve(b)===!1){const M=b.isWebGLMultipleRenderTargets?b.texture:[b.texture],H=b.width,ie=b.height;let te=t.COLOR_BUFFER_BIT;const re=[],_e=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ue=i.get(b),me=b.isWebGLMultipleRenderTargets===!0;if(me)for(let Ae=0;Ae<M.length;Ae++)n.bindFramebuffer(t.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ae,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,ue.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ae,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,ue.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ue.__webglFramebuffer);for(let Ae=0;Ae<M.length;Ae++){re.push(t.COLOR_ATTACHMENT0+Ae),b.depthBuffer&&re.push(_e);const ze=ue.__ignoreDepthValues!==void 0?ue.__ignoreDepthValues:!1;if(ze===!1&&(b.depthBuffer&&(te|=t.DEPTH_BUFFER_BIT),b.stencilBuffer&&(te|=t.STENCIL_BUFFER_BIT)),me&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,ue.__webglColorRenderbuffer[Ae]),ze===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[_e]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[_e])),me){const ee=i.get(M[Ae]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,ee,0)}t.blitFramebuffer(0,0,H,ie,0,0,H,ie,te,t.NEAREST),c&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,re)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),me)for(let Ae=0;Ae<M.length;Ae++){n.bindFramebuffer(t.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ae,t.RENDERBUFFER,ue.__webglColorRenderbuffer[Ae]);const ze=i.get(M[Ae]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,ue.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ae,t.TEXTURE_2D,ze,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ue.__webglMultisampledFramebuffer)}}function Ne(b){return Math.min(r.maxSamples,b.samples)}function ve(b){const M=i.get(b);return a&&b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function ct(b){const M=o.render.frame;u.get(b)!==M&&(u.set(b,M),b.update())}function Be(b,M){const H=b.colorSpace,ie=b.format,te=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||b.format===Nd||H!==Li&&H!==In&&(Je.getTransfer(H)===ot?a===!1?e.has("EXT_sRGB")===!0&&ie===Kn?(b.format=Nd,b.minFilter=Nn,b.generateMipmaps=!1):M=Ky.sRGBToLinear(M):(ie!==Kn||te!==or)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),M}this.allocateTextureUnit=L,this.resetTextureUnits=Q,this.setTexture2D=W,this.setTexture2DArray=$,this.setTexture3D=N,this.setTextureCube=O,this.rebindTextures=Ie,this.setupRenderTarget=k,this.updateRenderTargetMipmap=Yt,this.updateMultisampleRenderTarget=Me,this.setupDepthRenderbuffer=ye,this.setupFrameBufferTexture=pe,this.useMultisampledRTT=ve}function hD(t,e,n){const i=n.isWebGL2;function r(s,o=In){let a;const l=Je.getTransfer(o);if(s===or)return t.UNSIGNED_BYTE;if(s===Vy)return t.UNSIGNED_SHORT_4_4_4_4;if(s===Hy)return t.UNSIGNED_SHORT_5_5_5_1;if(s===qC)return t.BYTE;if(s===YC)return t.SHORT;if(s===tp)return t.UNSIGNED_SHORT;if(s===zy)return t.INT;if(s===qi)return t.UNSIGNED_INT;if(s===Yi)return t.FLOAT;if(s===ha)return i?t.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===$C)return t.ALPHA;if(s===Kn)return t.RGBA;if(s===KC)return t.LUMINANCE;if(s===ZC)return t.LUMINANCE_ALPHA;if(s===Vr)return t.DEPTH_COMPONENT;if(s===eo)return t.DEPTH_STENCIL;if(s===Nd)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===QC)return t.RED;if(s===Gy)return t.RED_INTEGER;if(s===JC)return t.RG;if(s===Wy)return t.RG_INTEGER;if(s===jy)return t.RGBA_INTEGER;if(s===Wu||s===ju||s===Xu||s===qu)if(l===ot)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Wu)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===ju)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Xu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===qu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Wu)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===ju)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Xu)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===qu)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Ng||s===Ug||s===Ig||s===Fg)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Ng)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Ug)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Ig)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Fg)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Xy)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Og||s===kg)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Og)return l===ot?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===kg)return l===ot?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Bg||s===zg||s===Vg||s===Hg||s===Gg||s===Wg||s===jg||s===Xg||s===qg||s===Yg||s===$g||s===Kg||s===Zg||s===Qg)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Bg)return l===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===zg)return l===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Vg)return l===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Hg)return l===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Gg)return l===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Wg)return l===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===jg)return l===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Xg)return l===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===qg)return l===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Yg)return l===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===$g)return l===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Kg)return l===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Zg)return l===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Qg)return l===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Yu||s===Jg||s===ev)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===Yu)return l===ot?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Jg)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===ev)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===eb||s===tv||s===nv||s===iv)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===Yu)return a.COMPRESSED_RED_RGTC1_EXT;if(s===tv)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===nv)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===iv)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===zr?i?t.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):t[s]!==void 0?t[s]:null}return{convert:r}}class pD extends Un{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ml extends nn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const mD={type:"move"};class yf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ml,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ml,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ml,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const x of e.hand.values()){const v=n.getJointPose(x,i),h=this._getHandJoint(c,x);v!==null&&(h.matrix.fromArray(v.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=v.radius),h.visible=v!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),p=.02,_=.005;c.inputState.pinching&&d>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(mD)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Ml;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class gD extends so{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,d=null,p=null,_=null;const x=n.getContextAttributes();let v=null,h=null;const g=[],m=[],y=new $e;let C=null;const T=new Un;T.layers.enable(1),T.viewport=new Ft;const w=new Un;w.layers.enable(2),w.viewport=new Ft;const P=[T,w],S=new pD;S.layers.enable(1),S.layers.enable(2);let E=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let K=g[q];return K===void 0&&(K=new yf,g[q]=K),K.getTargetRaySpace()},this.getControllerGrip=function(q){let K=g[q];return K===void 0&&(K=new yf,g[q]=K),K.getGripSpace()},this.getHand=function(q){let K=g[q];return K===void 0&&(K=new yf,g[q]=K),K.getHandSpace()};function j(q){const K=m.indexOf(q.inputSource);if(K===-1)return;const ae=g[K];ae!==void 0&&(ae.update(q.inputSource,q.frame,c||o),ae.dispatchEvent({type:q.type,data:q.inputSource}))}function Q(){r.removeEventListener("select",j),r.removeEventListener("selectstart",j),r.removeEventListener("selectend",j),r.removeEventListener("squeeze",j),r.removeEventListener("squeezestart",j),r.removeEventListener("squeezeend",j),r.removeEventListener("end",Q),r.removeEventListener("inputsourceschange",L);for(let q=0;q<g.length;q++){const K=m[q];K!==null&&(m[q]=null,g[q].disconnect(K))}E=null,U=null,e.setRenderTarget(v),p=null,d=null,f=null,r=null,h=null,Z.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(y.width,y.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){s=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return f},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(q){if(r=q,r!==null){if(v=e.getRenderTarget(),r.addEventListener("select",j),r.addEventListener("selectstart",j),r.addEventListener("selectend",j),r.addEventListener("squeeze",j),r.addEventListener("squeezestart",j),r.addEventListener("squeezeend",j),r.addEventListener("end",Q),r.addEventListener("inputsourceschange",L),x.xrCompatible!==!0&&await n.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(y),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const K={antialias:r.renderState.layers===void 0?x.antialias:!0,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,K),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),h=new Yr(p.framebufferWidth,p.framebufferHeight,{format:Kn,type:or,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}else{let K=null,ae=null,fe=null;x.depth&&(fe=x.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,K=x.stencil?eo:Vr,ae=x.stencil?zr:qi);const pe={colorFormat:n.RGBA8,depthFormat:fe,scaleFactor:s};f=new XRWebGLBinding(r,n),d=f.createProjectionLayer(pe),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),h=new Yr(d.textureWidth,d.textureHeight,{format:Kn,type:or,depthTexture:new lS(d.textureWidth,d.textureHeight,ae,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0});const Le=e.properties.get(h);Le.__ignoreDepthValues=d.ignoreDepthValues}h.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Z.setContext(r),Z.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function L(q){for(let K=0;K<q.removed.length;K++){const ae=q.removed[K],fe=m.indexOf(ae);fe>=0&&(m[fe]=null,g[fe].disconnect(ae))}for(let K=0;K<q.added.length;K++){const ae=q.added[K];let fe=m.indexOf(ae);if(fe===-1){for(let Le=0;Le<g.length;Le++)if(Le>=m.length){m.push(ae),fe=Le;break}else if(m[Le]===null){m[Le]=ae,fe=Le;break}if(fe===-1)break}const pe=g[fe];pe&&pe.connect(ae)}}const B=new F,W=new F;function $(q,K,ae){B.setFromMatrixPosition(K.matrixWorld),W.setFromMatrixPosition(ae.matrixWorld);const fe=B.distanceTo(W),pe=K.projectionMatrix.elements,Le=ae.projectionMatrix.elements,Re=pe[14]/(pe[10]-1),ye=pe[14]/(pe[10]+1),Ie=(pe[9]+1)/pe[5],k=(pe[9]-1)/pe[5],Yt=(pe[8]-1)/pe[0],Me=(Le[8]+1)/Le[0],Ne=Re*Yt,ve=Re*Me,ct=fe/(-Yt+Me),Be=ct*-Yt;K.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Be),q.translateZ(ct),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert();const b=Re+ct,M=ye+ct,H=Ne-Be,ie=ve+(fe-Be),te=Ie*ye/M*b,re=k*ye/M*b;q.projectionMatrix.makePerspective(H,ie,te,re,b,M),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}function N(q,K){K===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(K.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(r===null)return;S.near=w.near=T.near=q.near,S.far=w.far=T.far=q.far,(E!==S.near||U!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),E=S.near,U=S.far);const K=q.parent,ae=S.cameras;N(S,K);for(let fe=0;fe<ae.length;fe++)N(ae[fe],K);ae.length===2?$(S,T,w):S.projectionMatrix.copy(T.projectionMatrix),O(q,S,K)};function O(q,K,ae){ae===null?q.matrix.copy(K.matrixWorld):(q.matrix.copy(ae.matrixWorld),q.matrix.invert(),q.matrix.multiply(K.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(K.projectionMatrix),q.projectionMatrixInverse.copy(K.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Ud*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(q){l=q,d!==null&&(d.fixedFoveation=q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=q)};let V=null;function Y(q,K){if(u=K.getViewerPose(c||o),_=K,u!==null){const ae=u.views;p!==null&&(e.setRenderTargetFramebuffer(h,p.framebuffer),e.setRenderTarget(h));let fe=!1;ae.length!==S.cameras.length&&(S.cameras.length=0,fe=!0);for(let pe=0;pe<ae.length;pe++){const Le=ae[pe];let Re=null;if(p!==null)Re=p.getViewport(Le);else{const Ie=f.getViewSubImage(d,Le);Re=Ie.viewport,pe===0&&(e.setRenderTargetTextures(h,Ie.colorTexture,d.ignoreDepthValues?void 0:Ie.depthStencilTexture),e.setRenderTarget(h))}let ye=P[pe];ye===void 0&&(ye=new Un,ye.layers.enable(pe),ye.viewport=new Ft,P[pe]=ye),ye.matrix.fromArray(Le.transform.matrix),ye.matrix.decompose(ye.position,ye.quaternion,ye.scale),ye.projectionMatrix.fromArray(Le.projectionMatrix),ye.projectionMatrixInverse.copy(ye.projectionMatrix).invert(),ye.viewport.set(Re.x,Re.y,Re.width,Re.height),pe===0&&(S.matrix.copy(ye.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),fe===!0&&S.cameras.push(ye)}}for(let ae=0;ae<g.length;ae++){const fe=m[ae],pe=g[ae];fe!==null&&pe!==void 0&&pe.update(fe,K,c||o)}V&&V(q,K),K.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:K}),_=null}const Z=new aS;Z.setAnimationLoop(Y),this.setAnimationLoop=function(q){V=q},this.dispose=function(){}}}function vD(t,e){function n(v,h){v.matrixAutoUpdate===!0&&v.updateMatrix(),h.value.copy(v.matrix)}function i(v,h){h.color.getRGB(v.fogColor.value,iS(t)),h.isFog?(v.fogNear.value=h.near,v.fogFar.value=h.far):h.isFogExp2&&(v.fogDensity.value=h.density)}function r(v,h,g,m,y){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(v,h):h.isMeshToonMaterial?(s(v,h),f(v,h)):h.isMeshPhongMaterial?(s(v,h),u(v,h)):h.isMeshStandardMaterial?(s(v,h),d(v,h),h.isMeshPhysicalMaterial&&p(v,h,y)):h.isMeshMatcapMaterial?(s(v,h),_(v,h)):h.isMeshDepthMaterial?s(v,h):h.isMeshDistanceMaterial?(s(v,h),x(v,h)):h.isMeshNormalMaterial?s(v,h):h.isLineBasicMaterial?(o(v,h),h.isLineDashedMaterial&&a(v,h)):h.isPointsMaterial?l(v,h,g,m):h.isSpriteMaterial?c(v,h):h.isShadowMaterial?(v.color.value.copy(h.color),v.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(v,h){v.opacity.value=h.opacity,h.color&&v.diffuse.value.copy(h.color),h.emissive&&v.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(v.map.value=h.map,n(h.map,v.mapTransform)),h.alphaMap&&(v.alphaMap.value=h.alphaMap,n(h.alphaMap,v.alphaMapTransform)),h.bumpMap&&(v.bumpMap.value=h.bumpMap,n(h.bumpMap,v.bumpMapTransform),v.bumpScale.value=h.bumpScale,h.side===hn&&(v.bumpScale.value*=-1)),h.normalMap&&(v.normalMap.value=h.normalMap,n(h.normalMap,v.normalMapTransform),v.normalScale.value.copy(h.normalScale),h.side===hn&&v.normalScale.value.negate()),h.displacementMap&&(v.displacementMap.value=h.displacementMap,n(h.displacementMap,v.displacementMapTransform),v.displacementScale.value=h.displacementScale,v.displacementBias.value=h.displacementBias),h.emissiveMap&&(v.emissiveMap.value=h.emissiveMap,n(h.emissiveMap,v.emissiveMapTransform)),h.specularMap&&(v.specularMap.value=h.specularMap,n(h.specularMap,v.specularMapTransform)),h.alphaTest>0&&(v.alphaTest.value=h.alphaTest);const g=e.get(h).envMap;if(g&&(v.envMap.value=g,v.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,v.reflectivity.value=h.reflectivity,v.ior.value=h.ior,v.refractionRatio.value=h.refractionRatio),h.lightMap){v.lightMap.value=h.lightMap;const m=t._useLegacyLights===!0?Math.PI:1;v.lightMapIntensity.value=h.lightMapIntensity*m,n(h.lightMap,v.lightMapTransform)}h.aoMap&&(v.aoMap.value=h.aoMap,v.aoMapIntensity.value=h.aoMapIntensity,n(h.aoMap,v.aoMapTransform))}function o(v,h){v.diffuse.value.copy(h.color),v.opacity.value=h.opacity,h.map&&(v.map.value=h.map,n(h.map,v.mapTransform))}function a(v,h){v.dashSize.value=h.dashSize,v.totalSize.value=h.dashSize+h.gapSize,v.scale.value=h.scale}function l(v,h,g,m){v.diffuse.value.copy(h.color),v.opacity.value=h.opacity,v.size.value=h.size*g,v.scale.value=m*.5,h.map&&(v.map.value=h.map,n(h.map,v.uvTransform)),h.alphaMap&&(v.alphaMap.value=h.alphaMap,n(h.alphaMap,v.alphaMapTransform)),h.alphaTest>0&&(v.alphaTest.value=h.alphaTest)}function c(v,h){v.diffuse.value.copy(h.color),v.opacity.value=h.opacity,v.rotation.value=h.rotation,h.map&&(v.map.value=h.map,n(h.map,v.mapTransform)),h.alphaMap&&(v.alphaMap.value=h.alphaMap,n(h.alphaMap,v.alphaMapTransform)),h.alphaTest>0&&(v.alphaTest.value=h.alphaTest)}function u(v,h){v.specular.value.copy(h.specular),v.shininess.value=Math.max(h.shininess,1e-4)}function f(v,h){h.gradientMap&&(v.gradientMap.value=h.gradientMap)}function d(v,h){v.metalness.value=h.metalness,h.metalnessMap&&(v.metalnessMap.value=h.metalnessMap,n(h.metalnessMap,v.metalnessMapTransform)),v.roughness.value=h.roughness,h.roughnessMap&&(v.roughnessMap.value=h.roughnessMap,n(h.roughnessMap,v.roughnessMapTransform)),e.get(h).envMap&&(v.envMapIntensity.value=h.envMapIntensity)}function p(v,h,g){v.ior.value=h.ior,h.sheen>0&&(v.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),v.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(v.sheenColorMap.value=h.sheenColorMap,n(h.sheenColorMap,v.sheenColorMapTransform)),h.sheenRoughnessMap&&(v.sheenRoughnessMap.value=h.sheenRoughnessMap,n(h.sheenRoughnessMap,v.sheenRoughnessMapTransform))),h.clearcoat>0&&(v.clearcoat.value=h.clearcoat,v.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(v.clearcoatMap.value=h.clearcoatMap,n(h.clearcoatMap,v.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,n(h.clearcoatRoughnessMap,v.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(v.clearcoatNormalMap.value=h.clearcoatNormalMap,n(h.clearcoatNormalMap,v.clearcoatNormalMapTransform),v.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===hn&&v.clearcoatNormalScale.value.negate())),h.iridescence>0&&(v.iridescence.value=h.iridescence,v.iridescenceIOR.value=h.iridescenceIOR,v.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],v.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(v.iridescenceMap.value=h.iridescenceMap,n(h.iridescenceMap,v.iridescenceMapTransform)),h.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=h.iridescenceThicknessMap,n(h.iridescenceThicknessMap,v.iridescenceThicknessMapTransform))),h.transmission>0&&(v.transmission.value=h.transmission,v.transmissionSamplerMap.value=g.texture,v.transmissionSamplerSize.value.set(g.width,g.height),h.transmissionMap&&(v.transmissionMap.value=h.transmissionMap,n(h.transmissionMap,v.transmissionMapTransform)),v.thickness.value=h.thickness,h.thicknessMap&&(v.thicknessMap.value=h.thicknessMap,n(h.thicknessMap,v.thicknessMapTransform)),v.attenuationDistance.value=h.attenuationDistance,v.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(v.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(v.anisotropyMap.value=h.anisotropyMap,n(h.anisotropyMap,v.anisotropyMapTransform))),v.specularIntensity.value=h.specularIntensity,v.specularColor.value.copy(h.specularColor),h.specularColorMap&&(v.specularColorMap.value=h.specularColorMap,n(h.specularColorMap,v.specularColorMapTransform)),h.specularIntensityMap&&(v.specularIntensityMap.value=h.specularIntensityMap,n(h.specularIntensityMap,v.specularIntensityMapTransform))}function _(v,h){h.matcap&&(v.matcap.value=h.matcap)}function x(v,h){const g=e.get(h).light;v.referencePosition.value.setFromMatrixPosition(g.matrixWorld),v.nearDistance.value=g.shadow.camera.near,v.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function _D(t,e,n,i){let r={},s={},o=[];const a=n.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(g,m){const y=m.program;i.uniformBlockBinding(g,y)}function c(g,m){let y=r[g.id];y===void 0&&(_(g),y=u(g),r[g.id]=y,g.addEventListener("dispose",v));const C=m.program;i.updateUBOMapping(g,C);const T=e.render.frame;s[g.id]!==T&&(d(g),s[g.id]=T)}function u(g){const m=f();g.__bindingPointIndex=m;const y=t.createBuffer(),C=g.__size,T=g.usage;return t.bindBuffer(t.UNIFORM_BUFFER,y),t.bufferData(t.UNIFORM_BUFFER,C,T),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,m,y),y}function f(){for(let g=0;g<a;g++)if(o.indexOf(g)===-1)return o.push(g),g;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(g){const m=r[g.id],y=g.uniforms,C=g.__cache;t.bindBuffer(t.UNIFORM_BUFFER,m);for(let T=0,w=y.length;T<w;T++){const P=Array.isArray(y[T])?y[T]:[y[T]];for(let S=0,E=P.length;S<E;S++){const U=P[S];if(p(U,T,S,C)===!0){const j=U.__offset,Q=Array.isArray(U.value)?U.value:[U.value];let L=0;for(let B=0;B<Q.length;B++){const W=Q[B],$=x(W);typeof W=="number"||typeof W=="boolean"?(U.__data[0]=W,t.bufferSubData(t.UNIFORM_BUFFER,j+L,U.__data)):W.isMatrix3?(U.__data[0]=W.elements[0],U.__data[1]=W.elements[1],U.__data[2]=W.elements[2],U.__data[3]=0,U.__data[4]=W.elements[3],U.__data[5]=W.elements[4],U.__data[6]=W.elements[5],U.__data[7]=0,U.__data[8]=W.elements[6],U.__data[9]=W.elements[7],U.__data[10]=W.elements[8],U.__data[11]=0):(W.toArray(U.__data,L),L+=$.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,j,U.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(g,m,y,C){const T=g.value,w=m+"_"+y;if(C[w]===void 0)return typeof T=="number"||typeof T=="boolean"?C[w]=T:C[w]=T.clone(),!0;{const P=C[w];if(typeof T=="number"||typeof T=="boolean"){if(P!==T)return C[w]=T,!0}else if(P.equals(T)===!1)return P.copy(T),!0}return!1}function _(g){const m=g.uniforms;let y=0;const C=16;for(let w=0,P=m.length;w<P;w++){const S=Array.isArray(m[w])?m[w]:[m[w]];for(let E=0,U=S.length;E<U;E++){const j=S[E],Q=Array.isArray(j.value)?j.value:[j.value];for(let L=0,B=Q.length;L<B;L++){const W=Q[L],$=x(W),N=y%C;N!==0&&C-N<$.boundary&&(y+=C-N),j.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),j.__offset=y,y+=$.storage}}}const T=y%C;return T>0&&(y+=C-T),g.__size=y,g.__cache={},this}function x(g){const m={boundary:0,storage:0};return typeof g=="number"||typeof g=="boolean"?(m.boundary=4,m.storage=4):g.isVector2?(m.boundary=8,m.storage=8):g.isVector3||g.isColor?(m.boundary=16,m.storage=12):g.isVector4?(m.boundary=16,m.storage=16):g.isMatrix3?(m.boundary=48,m.storage=48):g.isMatrix4?(m.boundary=64,m.storage=64):g.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",g),m}function v(g){const m=g.target;m.removeEventListener("dispose",v);const y=o.indexOf(m.__bindingPointIndex);o.splice(y,1),t.deleteBuffer(r[m.id]),delete r[m.id],delete s[m.id]}function h(){for(const g in r)t.deleteBuffer(r[g]);o=[],r={},s={}}return{bind:l,update:c,dispose:h}}class pS{constructor(e={}){const{canvas:n=hb(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let d;i!==null?d=i.getContextAttributes().alpha:d=o;const p=new Uint32Array(4),_=new Int32Array(4);let x=null,v=null;const h=[],g=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=It,this._useLegacyLights=!1,this.toneMapping=sr,this.toneMappingExposure=1;const m=this;let y=!1,C=0,T=0,w=null,P=-1,S=null;const E=new Ft,U=new Ft;let j=null;const Q=new Ye(0);let L=0,B=n.width,W=n.height,$=1,N=null,O=null;const V=new Ft(0,0,B,W),Y=new Ft(0,0,B,W);let Z=!1;const q=new oS;let K=!1,ae=!1,fe=null;const pe=new At,Le=new $e,Re=new F,ye={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ie(){return w===null?$:1}let k=i;function Yt(A,I){for(let G=0;G<A.length;G++){const X=A[G],z=n.getContext(X,I);if(z!==null)return z}return null}try{const A={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${ep}`),n.addEventListener("webglcontextlost",se,!1),n.addEventListener("webglcontextrestored",D,!1),n.addEventListener("webglcontextcreationerror",le,!1),k===null){const I=["webgl2","webgl","experimental-webgl"];if(m.isWebGL1Renderer===!0&&I.shift(),k=Yt(I,A),k===null)throw Yt(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&k instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),k.getShaderPrecisionFormat===void 0&&(k.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let Me,Ne,ve,ct,Be,b,M,H,ie,te,re,_e,ue,me,Ae,ze,ee,Qe,je,De,Se,ge,Oe,Ke;function mt(){Me=new b2(k),Ne=new S2(k,Me,e),Me.init(Ne),ge=new hD(k,Me,Ne),ve=new fD(k,Me,Ne),ct=new L2(k),Be=new ZL,b=new dD(k,Me,ve,Be,Ne,ge,ct),M=new E2(m),H=new C2(m),ie=new kb(k,Ne),Oe=new x2(k,Me,ie,Ne),te=new R2(k,ie,ct,Oe),re=new I2(k,te,ie,ct),je=new U2(k,Ne,b),ze=new M2(Be),_e=new KL(m,M,H,Me,Ne,Oe,ze),ue=new vD(m,Be),me=new JL,Ae=new sD(Me,Ne),Qe=new _2(m,M,H,ve,re,d,l),ee=new uD(m,re,Ne),Ke=new _D(k,ct,Ne,ve),De=new y2(k,Me,ct,Ne),Se=new P2(k,Me,ct,Ne),ct.programs=_e.programs,m.capabilities=Ne,m.extensions=Me,m.properties=Be,m.renderLists=me,m.shadowMap=ee,m.state=ve,m.info=ct}mt();const He=new gD(m,k);this.xr=He,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const A=Me.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Me.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(A){A!==void 0&&($=A,this.setSize(B,W,!1))},this.getSize=function(A){return A.set(B,W)},this.setSize=function(A,I,G=!0){if(He.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=A,W=I,n.width=Math.floor(A*$),n.height=Math.floor(I*$),G===!0&&(n.style.width=A+"px",n.style.height=I+"px"),this.setViewport(0,0,A,I)},this.getDrawingBufferSize=function(A){return A.set(B*$,W*$).floor()},this.setDrawingBufferSize=function(A,I,G){B=A,W=I,$=G,n.width=Math.floor(A*G),n.height=Math.floor(I*G),this.setViewport(0,0,A,I)},this.getCurrentViewport=function(A){return A.copy(E)},this.getViewport=function(A){return A.copy(V)},this.setViewport=function(A,I,G,X){A.isVector4?V.set(A.x,A.y,A.z,A.w):V.set(A,I,G,X),ve.viewport(E.copy(V).multiplyScalar($).floor())},this.getScissor=function(A){return A.copy(Y)},this.setScissor=function(A,I,G,X){A.isVector4?Y.set(A.x,A.y,A.z,A.w):Y.set(A,I,G,X),ve.scissor(U.copy(Y).multiplyScalar($).floor())},this.getScissorTest=function(){return Z},this.setScissorTest=function(A){ve.setScissorTest(Z=A)},this.setOpaqueSort=function(A){N=A},this.setTransparentSort=function(A){O=A},this.getClearColor=function(A){return A.copy(Qe.getClearColor())},this.setClearColor=function(){Qe.setClearColor.apply(Qe,arguments)},this.getClearAlpha=function(){return Qe.getClearAlpha()},this.setClearAlpha=function(){Qe.setClearAlpha.apply(Qe,arguments)},this.clear=function(A=!0,I=!0,G=!0){let X=0;if(A){let z=!1;if(w!==null){const de=w.texture.format;z=de===jy||de===Wy||de===Gy}if(z){const de=w.texture.type,xe=de===or||de===qi||de===tp||de===zr||de===Vy||de===Hy,we=Qe.getClearColor(),be=Qe.getClearAlpha(),Ve=we.r,Ue=we.g,Fe=we.b;xe?(p[0]=Ve,p[1]=Ue,p[2]=Fe,p[3]=be,k.clearBufferuiv(k.COLOR,0,p)):(_[0]=Ve,_[1]=Ue,_[2]=Fe,_[3]=be,k.clearBufferiv(k.COLOR,0,_))}else X|=k.COLOR_BUFFER_BIT}I&&(X|=k.DEPTH_BUFFER_BIT),G&&(X|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",se,!1),n.removeEventListener("webglcontextrestored",D,!1),n.removeEventListener("webglcontextcreationerror",le,!1),me.dispose(),Ae.dispose(),Be.dispose(),M.dispose(),H.dispose(),re.dispose(),Oe.dispose(),Ke.dispose(),_e.dispose(),He.dispose(),He.removeEventListener("sessionstart",$t),He.removeEventListener("sessionend",nt),fe&&(fe.dispose(),fe=null),Kt.stop()};function se(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function D(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const A=ct.autoReset,I=ee.enabled,G=ee.autoUpdate,X=ee.needsUpdate,z=ee.type;mt(),ct.autoReset=A,ee.enabled=I,ee.autoUpdate=G,ee.needsUpdate=X,ee.type=z}function le(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function ce(A){const I=A.target;I.removeEventListener("dispose",ce),Ce(I)}function Ce(A){Ee(A),Be.remove(A)}function Ee(A){const I=Be.get(A).programs;I!==void 0&&(I.forEach(function(G){_e.releaseProgram(G)}),A.isShaderMaterial&&_e.releaseShaderCache(A))}this.renderBufferDirect=function(A,I,G,X,z,de){I===null&&(I=ye);const xe=z.isMesh&&z.matrixWorld.determinant()<0,we=xS(A,I,G,X,z);ve.setMaterial(X,xe);let be=G.index,Ve=1;if(X.wireframe===!0){if(be=te.getWireframeAttribute(G),be===void 0)return;Ve=2}const Ue=G.drawRange,Fe=G.attributes.position;let _t=Ue.start*Ve,mn=(Ue.start+Ue.count)*Ve;de!==null&&(_t=Math.max(_t,de.start*Ve),mn=Math.min(mn,(de.start+de.count)*Ve)),be!==null?(_t=Math.max(_t,0),mn=Math.min(mn,be.count)):Fe!=null&&(_t=Math.max(_t,0),mn=Math.min(mn,Fe.count));const Pt=mn-_t;if(Pt<0||Pt===1/0)return;Oe.setup(z,X,we,G,be);let ci,ut=De;if(be!==null&&(ci=ie.get(be),ut=Se,ut.setIndex(ci)),z.isMesh)X.wireframe===!0?(ve.setLineWidth(X.wireframeLinewidth*Ie()),ut.setMode(k.LINES)):ut.setMode(k.TRIANGLES);else if(z.isLine){let Ge=X.linewidth;Ge===void 0&&(Ge=1),ve.setLineWidth(Ge*Ie()),z.isLineSegments?ut.setMode(k.LINES):z.isLineLoop?ut.setMode(k.LINE_LOOP):ut.setMode(k.LINE_STRIP)}else z.isPoints?ut.setMode(k.POINTS):z.isSprite&&ut.setMode(k.TRIANGLES);if(z.isBatchedMesh)ut.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else if(z.isInstancedMesh)ut.renderInstances(_t,Pt,z.count);else if(G.isInstancedBufferGeometry){const Ge=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,eu=Math.min(G.instanceCount,Ge);ut.renderInstances(_t,Pt,eu)}else ut.render(_t,Pt)};function et(A,I,G){A.transparent===!0&&A.side===_i&&A.forceSinglePass===!1?(A.side=hn,A.needsUpdate=!0,Da(A,I,G),A.side=fr,A.needsUpdate=!0,Da(A,I,G),A.side=_i):Da(A,I,G)}this.compile=function(A,I,G=null){G===null&&(G=A),v=Ae.get(G),v.init(),g.push(v),G.traverseVisible(function(z){z.isLight&&z.layers.test(I.layers)&&(v.pushLight(z),z.castShadow&&v.pushShadow(z))}),A!==G&&A.traverseVisible(function(z){z.isLight&&z.layers.test(I.layers)&&(v.pushLight(z),z.castShadow&&v.pushShadow(z))}),v.setupLights(m._useLegacyLights);const X=new Set;return A.traverse(function(z){const de=z.material;if(de)if(Array.isArray(de))for(let xe=0;xe<de.length;xe++){const we=de[xe];et(we,G,z),X.add(we)}else et(de,G,z),X.add(de)}),g.pop(),v=null,X},this.compileAsync=function(A,I,G=null){const X=this.compile(A,I,G);return new Promise(z=>{function de(){if(X.forEach(function(xe){Be.get(xe).currentProgram.isReady()&&X.delete(xe)}),X.size===0){z(A);return}setTimeout(de,10)}Me.get("KHR_parallel_shader_compile")!==null?de():setTimeout(de,10)})};let tt=null;function Rt(A){tt&&tt(A)}function $t(){Kt.stop()}function nt(){Kt.start()}const Kt=new aS;Kt.setAnimationLoop(Rt),typeof self<"u"&&Kt.setContext(self),this.setAnimationLoop=function(A){tt=A,He.setAnimationLoop(A),A===null?Kt.stop():Kt.start()},He.addEventListener("sessionstart",$t),He.addEventListener("sessionend",nt),this.render=function(A,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),He.enabled===!0&&He.isPresenting===!0&&(He.cameraAutoUpdate===!0&&He.updateCamera(I),I=He.getCamera()),A.isScene===!0&&A.onBeforeRender(m,A,I,w),v=Ae.get(A,g.length),v.init(),g.push(v),pe.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),q.setFromProjectionMatrix(pe),ae=this.localClippingEnabled,K=ze.init(this.clippingPlanes,ae),x=me.get(A,h.length),x.init(),h.push(x),ti(A,I,0,m.sortObjects),x.finish(),m.sortObjects===!0&&x.sort(N,O),this.info.render.frame++,K===!0&&ze.beginShadows();const G=v.state.shadowsArray;if(ee.render(G,A,I),K===!0&&ze.endShadows(),this.info.autoReset===!0&&this.info.reset(),Qe.render(x,A),v.setupLights(m._useLegacyLights),I.isArrayCamera){const X=I.cameras;for(let z=0,de=X.length;z<de;z++){const xe=X[z];cp(x,A,xe,xe.viewport)}}else cp(x,A,I);w!==null&&(b.updateMultisampleRenderTarget(w),b.updateRenderTargetMipmap(w)),A.isScene===!0&&A.onAfterRender(m,A,I),Oe.resetDefaultState(),P=-1,S=null,g.pop(),g.length>0?v=g[g.length-1]:v=null,h.pop(),h.length>0?x=h[h.length-1]:x=null};function ti(A,I,G,X){if(A.visible===!1)return;if(A.layers.test(I.layers)){if(A.isGroup)G=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(I);else if(A.isLight)v.pushLight(A),A.castShadow&&v.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||q.intersectsSprite(A)){X&&Re.setFromMatrixPosition(A.matrixWorld).applyMatrix4(pe);const xe=re.update(A),we=A.material;we.visible&&x.push(A,xe,we,G,Re.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||q.intersectsObject(A))){const xe=re.update(A),we=A.material;if(X&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Re.copy(A.boundingSphere.center)):(xe.boundingSphere===null&&xe.computeBoundingSphere(),Re.copy(xe.boundingSphere.center)),Re.applyMatrix4(A.matrixWorld).applyMatrix4(pe)),Array.isArray(we)){const be=xe.groups;for(let Ve=0,Ue=be.length;Ve<Ue;Ve++){const Fe=be[Ve],_t=we[Fe.materialIndex];_t&&_t.visible&&x.push(A,xe,_t,G,Re.z,Fe)}}else we.visible&&x.push(A,xe,we,G,Re.z,null)}}const de=A.children;for(let xe=0,we=de.length;xe<we;xe++)ti(de[xe],I,G,X)}function cp(A,I,G,X){const z=A.opaque,de=A.transmissive,xe=A.transparent;v.setupLightsView(G),K===!0&&ze.setGlobalState(m.clippingPlanes,G),de.length>0&&_S(z,de,I,G),X&&ve.viewport(E.copy(X)),z.length>0&&La(z,I,G),de.length>0&&La(de,I,G),xe.length>0&&La(xe,I,G),ve.buffers.depth.setTest(!0),ve.buffers.depth.setMask(!0),ve.buffers.color.setMask(!0),ve.setPolygonOffset(!1)}function _S(A,I,G,X){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;const de=Ne.isWebGL2;fe===null&&(fe=new Yr(1,1,{generateMipmaps:!0,type:Me.has("EXT_color_buffer_half_float")?ha:or,minFilter:da,samples:de?4:0})),m.getDrawingBufferSize(Le),de?fe.setSize(Le.x,Le.y):fe.setSize(Id(Le.x),Id(Le.y));const xe=m.getRenderTarget();m.setRenderTarget(fe),m.getClearColor(Q),L=m.getClearAlpha(),L<1&&m.setClearColor(16777215,.5),m.clear();const we=m.toneMapping;m.toneMapping=sr,La(A,G,X),b.updateMultisampleRenderTarget(fe),b.updateRenderTargetMipmap(fe);let be=!1;for(let Ve=0,Ue=I.length;Ve<Ue;Ve++){const Fe=I[Ve],_t=Fe.object,mn=Fe.geometry,Pt=Fe.material,ci=Fe.group;if(Pt.side===_i&&_t.layers.test(X.layers)){const ut=Pt.side;Pt.side=hn,Pt.needsUpdate=!0,up(_t,G,X,mn,Pt,ci),Pt.side=ut,Pt.needsUpdate=!0,be=!0}}be===!0&&(b.updateMultisampleRenderTarget(fe),b.updateRenderTargetMipmap(fe)),m.setRenderTarget(xe),m.setClearColor(Q,L),m.toneMapping=we}function La(A,I,G){const X=I.isScene===!0?I.overrideMaterial:null;for(let z=0,de=A.length;z<de;z++){const xe=A[z],we=xe.object,be=xe.geometry,Ve=X===null?xe.material:X,Ue=xe.group;we.layers.test(G.layers)&&up(we,I,G,be,Ve,Ue)}}function up(A,I,G,X,z,de){A.onBeforeRender(m,I,G,X,z,de),A.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),z.onBeforeRender(m,I,G,X,A,de),z.transparent===!0&&z.side===_i&&z.forceSinglePass===!1?(z.side=hn,z.needsUpdate=!0,m.renderBufferDirect(G,I,X,z,A,de),z.side=fr,z.needsUpdate=!0,m.renderBufferDirect(G,I,X,z,A,de),z.side=_i):m.renderBufferDirect(G,I,X,z,A,de),A.onAfterRender(m,I,G,X,z,de)}function Da(A,I,G){I.isScene!==!0&&(I=ye);const X=Be.get(A),z=v.state.lights,de=v.state.shadowsArray,xe=z.state.version,we=_e.getParameters(A,z.state,de,I,G),be=_e.getProgramCacheKey(we);let Ve=X.programs;X.environment=A.isMeshStandardMaterial?I.environment:null,X.fog=I.fog,X.envMap=(A.isMeshStandardMaterial?H:M).get(A.envMap||X.environment),Ve===void 0&&(A.addEventListener("dispose",ce),Ve=new Map,X.programs=Ve);let Ue=Ve.get(be);if(Ue!==void 0){if(X.currentProgram===Ue&&X.lightsStateVersion===xe)return dp(A,we),Ue}else we.uniforms=_e.getUniforms(A),A.onBuild(G,we,m),A.onBeforeCompile(we,m),Ue=_e.acquireProgram(we,be),Ve.set(be,Ue),X.uniforms=we.uniforms;const Fe=X.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Fe.clippingPlanes=ze.uniform),dp(A,we),X.needsLights=SS(A),X.lightsStateVersion=xe,X.needsLights&&(Fe.ambientLightColor.value=z.state.ambient,Fe.lightProbe.value=z.state.probe,Fe.directionalLights.value=z.state.directional,Fe.directionalLightShadows.value=z.state.directionalShadow,Fe.spotLights.value=z.state.spot,Fe.spotLightShadows.value=z.state.spotShadow,Fe.rectAreaLights.value=z.state.rectArea,Fe.ltc_1.value=z.state.rectAreaLTC1,Fe.ltc_2.value=z.state.rectAreaLTC2,Fe.pointLights.value=z.state.point,Fe.pointLightShadows.value=z.state.pointShadow,Fe.hemisphereLights.value=z.state.hemi,Fe.directionalShadowMap.value=z.state.directionalShadowMap,Fe.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Fe.spotShadowMap.value=z.state.spotShadowMap,Fe.spotLightMatrix.value=z.state.spotLightMatrix,Fe.spotLightMap.value=z.state.spotLightMap,Fe.pointShadowMap.value=z.state.pointShadowMap,Fe.pointShadowMatrix.value=z.state.pointShadowMatrix),X.currentProgram=Ue,X.uniformsList=null,Ue}function fp(A){if(A.uniformsList===null){const I=A.currentProgram.getUniforms();A.uniformsList=zl.seqWithValue(I.seq,A.uniforms)}return A.uniformsList}function dp(A,I){const G=Be.get(A);G.outputColorSpace=I.outputColorSpace,G.batching=I.batching,G.instancing=I.instancing,G.instancingColor=I.instancingColor,G.skinning=I.skinning,G.morphTargets=I.morphTargets,G.morphNormals=I.morphNormals,G.morphColors=I.morphColors,G.morphTargetsCount=I.morphTargetsCount,G.numClippingPlanes=I.numClippingPlanes,G.numIntersection=I.numClipIntersection,G.vertexAlphas=I.vertexAlphas,G.vertexTangents=I.vertexTangents,G.toneMapping=I.toneMapping}function xS(A,I,G,X,z){I.isScene!==!0&&(I=ye),b.resetTextureUnits();const de=I.fog,xe=X.isMeshStandardMaterial?I.environment:null,we=w===null?m.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:Li,be=(X.isMeshStandardMaterial?H:M).get(X.envMap||xe),Ve=X.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Ue=!!G.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Fe=!!G.morphAttributes.position,_t=!!G.morphAttributes.normal,mn=!!G.morphAttributes.color;let Pt=sr;X.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(Pt=m.toneMapping);const ci=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,ut=ci!==void 0?ci.length:0,Ge=Be.get(X),eu=v.state.lights;if(K===!0&&(ae===!0||A!==S)){const Cn=A===S&&X.id===P;ze.setState(X,A,Cn)}let gt=!1;X.version===Ge.__version?(Ge.needsLights&&Ge.lightsStateVersion!==eu.state.version||Ge.outputColorSpace!==we||z.isBatchedMesh&&Ge.batching===!1||!z.isBatchedMesh&&Ge.batching===!0||z.isInstancedMesh&&Ge.instancing===!1||!z.isInstancedMesh&&Ge.instancing===!0||z.isSkinnedMesh&&Ge.skinning===!1||!z.isSkinnedMesh&&Ge.skinning===!0||z.isInstancedMesh&&Ge.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Ge.instancingColor===!1&&z.instanceColor!==null||Ge.envMap!==be||X.fog===!0&&Ge.fog!==de||Ge.numClippingPlanes!==void 0&&(Ge.numClippingPlanes!==ze.numPlanes||Ge.numIntersection!==ze.numIntersection)||Ge.vertexAlphas!==Ve||Ge.vertexTangents!==Ue||Ge.morphTargets!==Fe||Ge.morphNormals!==_t||Ge.morphColors!==mn||Ge.toneMapping!==Pt||Ne.isWebGL2===!0&&Ge.morphTargetsCount!==ut)&&(gt=!0):(gt=!0,Ge.__version=X.version);let vr=Ge.currentProgram;gt===!0&&(vr=Da(X,I,z));let hp=!1,lo=!1,tu=!1;const zt=vr.getUniforms(),_r=Ge.uniforms;if(ve.useProgram(vr.program)&&(hp=!0,lo=!0,tu=!0),X.id!==P&&(P=X.id,lo=!0),hp||S!==A){zt.setValue(k,"projectionMatrix",A.projectionMatrix),zt.setValue(k,"viewMatrix",A.matrixWorldInverse);const Cn=zt.map.cameraPosition;Cn!==void 0&&Cn.setValue(k,Re.setFromMatrixPosition(A.matrixWorld)),Ne.logarithmicDepthBuffer&&zt.setValue(k,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&zt.setValue(k,"isOrthographic",A.isOrthographicCamera===!0),S!==A&&(S=A,lo=!0,tu=!0)}if(z.isSkinnedMesh){zt.setOptional(k,z,"bindMatrix"),zt.setOptional(k,z,"bindMatrixInverse");const Cn=z.skeleton;Cn&&(Ne.floatVertexTextures?(Cn.boneTexture===null&&Cn.computeBoneTexture(),zt.setValue(k,"boneTexture",Cn.boneTexture,b)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}z.isBatchedMesh&&(zt.setOptional(k,z,"batchingTexture"),zt.setValue(k,"batchingTexture",z._matricesTexture,b));const nu=G.morphAttributes;if((nu.position!==void 0||nu.normal!==void 0||nu.color!==void 0&&Ne.isWebGL2===!0)&&je.update(z,G,vr),(lo||Ge.receiveShadow!==z.receiveShadow)&&(Ge.receiveShadow=z.receiveShadow,zt.setValue(k,"receiveShadow",z.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(_r.envMap.value=be,_r.flipEnvMap.value=be.isCubeTexture&&be.isRenderTargetTexture===!1?-1:1),lo&&(zt.setValue(k,"toneMappingExposure",m.toneMappingExposure),Ge.needsLights&&yS(_r,tu),de&&X.fog===!0&&ue.refreshFogUniforms(_r,de),ue.refreshMaterialUniforms(_r,X,$,W,fe),zl.upload(k,fp(Ge),_r,b)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(zl.upload(k,fp(Ge),_r,b),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&zt.setValue(k,"center",z.center),zt.setValue(k,"modelViewMatrix",z.modelViewMatrix),zt.setValue(k,"normalMatrix",z.normalMatrix),zt.setValue(k,"modelMatrix",z.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const Cn=X.uniformsGroups;for(let iu=0,MS=Cn.length;iu<MS;iu++)if(Ne.isWebGL2){const pp=Cn[iu];Ke.update(pp,vr),Ke.bind(pp,vr)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return vr}function yS(A,I){A.ambientLightColor.needsUpdate=I,A.lightProbe.needsUpdate=I,A.directionalLights.needsUpdate=I,A.directionalLightShadows.needsUpdate=I,A.pointLights.needsUpdate=I,A.pointLightShadows.needsUpdate=I,A.spotLights.needsUpdate=I,A.spotLightShadows.needsUpdate=I,A.rectAreaLights.needsUpdate=I,A.hemisphereLights.needsUpdate=I}function SS(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(A,I,G){Be.get(A.texture).__webglTexture=I,Be.get(A.depthTexture).__webglTexture=G;const X=Be.get(A);X.__hasExternalTextures=!0,X.__hasExternalTextures&&(X.__autoAllocateDepthBuffer=G===void 0,X.__autoAllocateDepthBuffer||Me.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(A,I){const G=Be.get(A);G.__webglFramebuffer=I,G.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(A,I=0,G=0){w=A,C=I,T=G;let X=!0,z=null,de=!1,xe=!1;if(A){const be=Be.get(A);be.__useDefaultFramebuffer!==void 0?(ve.bindFramebuffer(k.FRAMEBUFFER,null),X=!1):be.__webglFramebuffer===void 0?b.setupRenderTarget(A):be.__hasExternalTextures&&b.rebindTextures(A,Be.get(A.texture).__webglTexture,Be.get(A.depthTexture).__webglTexture);const Ve=A.texture;(Ve.isData3DTexture||Ve.isDataArrayTexture||Ve.isCompressedArrayTexture)&&(xe=!0);const Ue=Be.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Ue[I])?z=Ue[I][G]:z=Ue[I],de=!0):Ne.isWebGL2&&A.samples>0&&b.useMultisampledRTT(A)===!1?z=Be.get(A).__webglMultisampledFramebuffer:Array.isArray(Ue)?z=Ue[G]:z=Ue,E.copy(A.viewport),U.copy(A.scissor),j=A.scissorTest}else E.copy(V).multiplyScalar($).floor(),U.copy(Y).multiplyScalar($).floor(),j=Z;if(ve.bindFramebuffer(k.FRAMEBUFFER,z)&&Ne.drawBuffers&&X&&ve.drawBuffers(A,z),ve.viewport(E),ve.scissor(U),ve.setScissorTest(j),de){const be=Be.get(A.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+I,be.__webglTexture,G)}else if(xe){const be=Be.get(A.texture),Ve=I||0;k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,be.__webglTexture,G||0,Ve)}P=-1},this.readRenderTargetPixels=function(A,I,G,X,z,de,xe){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=Be.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&xe!==void 0&&(we=we[xe]),we){ve.bindFramebuffer(k.FRAMEBUFFER,we);try{const be=A.texture,Ve=be.format,Ue=be.type;if(Ve!==Kn&&ge.convert(Ve)!==k.getParameter(k.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Fe=Ue===ha&&(Me.has("EXT_color_buffer_half_float")||Ne.isWebGL2&&Me.has("EXT_color_buffer_float"));if(Ue!==or&&ge.convert(Ue)!==k.getParameter(k.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ue===Yi&&(Ne.isWebGL2||Me.has("OES_texture_float")||Me.has("WEBGL_color_buffer_float")))&&!Fe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=A.width-X&&G>=0&&G<=A.height-z&&k.readPixels(I,G,X,z,ge.convert(Ve),ge.convert(Ue),de)}finally{const be=w!==null?Be.get(w).__webglFramebuffer:null;ve.bindFramebuffer(k.FRAMEBUFFER,be)}}},this.copyFramebufferToTexture=function(A,I,G=0){const X=Math.pow(2,-G),z=Math.floor(I.image.width*X),de=Math.floor(I.image.height*X);b.setTexture2D(I,0),k.copyTexSubImage2D(k.TEXTURE_2D,G,0,0,A.x,A.y,z,de),ve.unbindTexture()},this.copyTextureToTexture=function(A,I,G,X=0){const z=I.image.width,de=I.image.height,xe=ge.convert(G.format),we=ge.convert(G.type);b.setTexture2D(G,0),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,G.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,G.unpackAlignment),I.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,X,A.x,A.y,z,de,xe,we,I.image.data):I.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,X,A.x,A.y,I.mipmaps[0].width,I.mipmaps[0].height,xe,I.mipmaps[0].data):k.texSubImage2D(k.TEXTURE_2D,X,A.x,A.y,xe,we,I.image),X===0&&G.generateMipmaps&&k.generateMipmap(k.TEXTURE_2D),ve.unbindTexture()},this.copyTextureToTexture3D=function(A,I,G,X,z=0){if(m.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const de=A.max.x-A.min.x+1,xe=A.max.y-A.min.y+1,we=A.max.z-A.min.z+1,be=ge.convert(X.format),Ve=ge.convert(X.type);let Ue;if(X.isData3DTexture)b.setTexture3D(X,0),Ue=k.TEXTURE_3D;else if(X.isDataArrayTexture||X.isCompressedArrayTexture)b.setTexture2DArray(X,0),Ue=k.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,X.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,X.unpackAlignment);const Fe=k.getParameter(k.UNPACK_ROW_LENGTH),_t=k.getParameter(k.UNPACK_IMAGE_HEIGHT),mn=k.getParameter(k.UNPACK_SKIP_PIXELS),Pt=k.getParameter(k.UNPACK_SKIP_ROWS),ci=k.getParameter(k.UNPACK_SKIP_IMAGES),ut=G.isCompressedTexture?G.mipmaps[z]:G.image;k.pixelStorei(k.UNPACK_ROW_LENGTH,ut.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,ut.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,A.min.x),k.pixelStorei(k.UNPACK_SKIP_ROWS,A.min.y),k.pixelStorei(k.UNPACK_SKIP_IMAGES,A.min.z),G.isDataTexture||G.isData3DTexture?k.texSubImage3D(Ue,z,I.x,I.y,I.z,de,xe,we,be,Ve,ut.data):G.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),k.compressedTexSubImage3D(Ue,z,I.x,I.y,I.z,de,xe,we,be,ut.data)):k.texSubImage3D(Ue,z,I.x,I.y,I.z,de,xe,we,be,Ve,ut),k.pixelStorei(k.UNPACK_ROW_LENGTH,Fe),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,_t),k.pixelStorei(k.UNPACK_SKIP_PIXELS,mn),k.pixelStorei(k.UNPACK_SKIP_ROWS,Pt),k.pixelStorei(k.UNPACK_SKIP_IMAGES,ci),z===0&&X.generateMipmaps&&k.generateMipmap(Ue),ve.unbindTexture()},this.initTexture=function(A){A.isCubeTexture?b.setTextureCube(A,0):A.isData3DTexture?b.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?b.setTexture2DArray(A,0):b.setTexture2D(A,0),ve.unbindTexture()},this.resetState=function(){C=0,T=0,w=null,ve.reset(),Oe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Mi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===np?"display-p3":"srgb",n.unpackColorSpace=Je.workingColorSpace===Zc?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===It?Hr:qy}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Hr?It:Li}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class xD extends pS{}xD.prototype.isWebGL1Renderer=!0;class yD extends nn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}}class mS extends oo{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ye(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Xv=new F,qv=new F,Yv=new At,Sf=new ip,El=new Aa;class SD extends nn{constructor(e=new An,n=new mS){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)Xv.fromBufferAttribute(n,r-1),qv.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=Xv.distanceTo(qv);e.setAttribute("lineDistance",new kt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),El.copy(i.boundingSphere),El.applyMatrix4(r),El.radius+=s,e.ray.intersectsSphere(El)===!1)return;Yv.copy(r).invert(),Sf.copy(e.ray).applyMatrix4(Yv);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new F,u=new F,f=new F,d=new F,p=this.isLineSegments?2:1,_=i.index,v=i.attributes.position;if(_!==null){const h=Math.max(0,o.start),g=Math.min(_.count,o.start+o.count);for(let m=h,y=g-1;m<y;m+=p){const C=_.getX(m),T=_.getX(m+1);if(c.fromBufferAttribute(v,C),u.fromBufferAttribute(v,T),Sf.distanceSqToSegment(c,u,d,f)>l)continue;d.applyMatrix4(this.matrixWorld);const P=e.ray.origin.distanceTo(d);P<e.near||P>e.far||n.push({distance:P,point:f.clone().applyMatrix4(this.matrixWorld),index:m,face:null,faceIndex:null,object:this})}}else{const h=Math.max(0,o.start),g=Math.min(v.count,o.start+o.count);for(let m=h,y=g-1;m<y;m+=p){if(c.fromBufferAttribute(v,m),u.fromBufferAttribute(v,m+1),Sf.distanceSqToSegment(c,u,d,f)>l)continue;d.applyMatrix4(this.matrixWorld);const T=e.ray.origin.distanceTo(d);T<e.near||T>e.far||n.push({distance:T,point:f.clone().applyMatrix4(this.matrixWorld),index:m,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const $v=new F,Kv=new F;class MD extends SD{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let r=0,s=n.count;r<s;r+=2)$v.fromBufferAttribute(n,r),Kv.fromBufferAttribute(n,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+$v.distanceTo(Kv);e.setAttribute("lineDistance",new kt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class gS extends oo{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ye(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Zv=new At,Od=new ip,Tl=new Aa,wl=new F;class ED extends nn{constructor(e=new An,n=new gS){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Tl.copy(i.boundingSphere),Tl.applyMatrix4(r),Tl.radius+=s,e.ray.intersectsSphere(Tl)===!1)return;Zv.copy(r).invert(),Od.copy(e.ray).applyMatrix4(Zv);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,f=i.attributes.position;if(c!==null){const d=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let _=d,x=p;_<x;_++){const v=c.getX(_);wl.fromBufferAttribute(f,v),Qv(wl,v,l,r,e,n,this)}}else{const d=Math.max(0,o.start),p=Math.min(f.count,o.start+o.count);for(let _=d,x=p;_<x;_++)wl.fromBufferAttribute(f,_),Qv(wl,_,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Qv(t,e,n,i,r,s,o){const a=Od.distanceSqToPoint(t);if(a<n){const l=new F;Od.closestPointToPoint(t,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class ba extends An{constructor(e=[],n=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:i,detail:r};const s=[],o=[];a(r),c(i),u(),this.setAttribute("position",new kt(s,3)),this.setAttribute("normal",new kt(s.slice(),3)),this.setAttribute("uv",new kt(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(g){const m=new F,y=new F,C=new F;for(let T=0;T<n.length;T+=3)p(n[T+0],m),p(n[T+1],y),p(n[T+2],C),l(m,y,C,g)}function l(g,m,y,C){const T=C+1,w=[];for(let P=0;P<=T;P++){w[P]=[];const S=g.clone().lerp(y,P/T),E=m.clone().lerp(y,P/T),U=T-P;for(let j=0;j<=U;j++)j===0&&P===T?w[P][j]=S:w[P][j]=S.clone().lerp(E,j/U)}for(let P=0;P<T;P++)for(let S=0;S<2*(T-P)-1;S++){const E=Math.floor(S/2);S%2===0?(d(w[P][E+1]),d(w[P+1][E]),d(w[P][E])):(d(w[P][E+1]),d(w[P+1][E+1]),d(w[P+1][E]))}}function c(g){const m=new F;for(let y=0;y<s.length;y+=3)m.x=s[y+0],m.y=s[y+1],m.z=s[y+2],m.normalize().multiplyScalar(g),s[y+0]=m.x,s[y+1]=m.y,s[y+2]=m.z}function u(){const g=new F;for(let m=0;m<s.length;m+=3){g.x=s[m+0],g.y=s[m+1],g.z=s[m+2];const y=v(g)/2/Math.PI+.5,C=h(g)/Math.PI+.5;o.push(y,1-C)}_(),f()}function f(){for(let g=0;g<o.length;g+=6){const m=o[g+0],y=o[g+2],C=o[g+4],T=Math.max(m,y,C),w=Math.min(m,y,C);T>.9&&w<.1&&(m<.2&&(o[g+0]+=1),y<.2&&(o[g+2]+=1),C<.2&&(o[g+4]+=1))}}function d(g){s.push(g.x,g.y,g.z)}function p(g,m){const y=g*3;m.x=e[y+0],m.y=e[y+1],m.z=e[y+2]}function _(){const g=new F,m=new F,y=new F,C=new F,T=new $e,w=new $e,P=new $e;for(let S=0,E=0;S<s.length;S+=9,E+=6){g.set(s[S+0],s[S+1],s[S+2]),m.set(s[S+3],s[S+4],s[S+5]),y.set(s[S+6],s[S+7],s[S+8]),T.set(o[E+0],o[E+1]),w.set(o[E+2],o[E+3]),P.set(o[E+4],o[E+5]),C.copy(g).add(m).add(y).divideScalar(3);const U=v(C);x(T,E+0,g,U),x(w,E+2,m,U),x(P,E+4,y,U)}}function x(g,m,y,C){C<0&&g.x===1&&(o[m]=g.x-1),y.x===0&&y.z===0&&(o[m]=C/2/Math.PI+.5)}function v(g){return Math.atan2(g.z,-g.x)}function h(g){return Math.atan2(-g.y,Math.sqrt(g.x*g.x+g.z*g.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ba(e.vertices,e.indices,e.radius,e.details)}}class op extends ba{constructor(e=1,n=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,n),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new op(e.radius,e.detail)}}class ap extends ba{constructor(e=1,n=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,r,e,n),this.type="OctahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new ap(e.radius,e.detail)}}class lp extends ba{constructor(e=1,n=0){const i=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],r=[2,1,0,0,3,2,1,3,0,2,3,1];super(i,r,e,n),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new lp(e.radius,e.detail)}}class wc extends An{constructor(e=1,n=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const o=[],a=[],l=[],c=[],u=new F,f=new F,d=new F;for(let p=0;p<=i;p++)for(let _=0;_<=r;_++){const x=_/r*s,v=p/i*Math.PI*2;f.x=(e+n*Math.cos(v))*Math.cos(x),f.y=(e+n*Math.cos(v))*Math.sin(x),f.z=n*Math.sin(v),a.push(f.x,f.y,f.z),u.x=e*Math.cos(x),u.y=e*Math.sin(x),d.subVectors(f,u).normalize(),l.push(d.x,d.y,d.z),c.push(_/r),c.push(p/i)}for(let p=1;p<=i;p++)for(let _=1;_<=r;_++){const x=(r+1)*p+_-1,v=(r+1)*(p-1)+_-1,h=(r+1)*(p-1)+_,g=(r+1)*p+_;o.push(x,v,g),o.push(v,h,g)}this.setIndex(o),this.setAttribute("position",new kt(a,3)),this.setAttribute("normal",new kt(l,3)),this.setAttribute("uv",new kt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wc(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class TD extends MD{constructor(e=10,n=10,i=4473924,r=8947848){i=new Ye(i),r=new Ye(r);const s=n/2,o=e/n,a=e/2,l=[],c=[];for(let d=0,p=0,_=-a;d<=n;d++,_+=o){l.push(-a,0,_,a,0,_),l.push(_,0,-a,_,0,a);const x=d===s?i:r;x.toArray(c,p),p+=3,x.toArray(c,p),p+=3,x.toArray(c,p),p+=3,x.toArray(c,p),p+=3}const u=new An;u.setAttribute("position",new kt(l,3)),u.setAttribute("color",new kt(c,3));const f=new mS({vertexColors:!0,toneMapped:!1});super(u,f),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ep}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ep);function wD(){const t=J.useRef(null);return J.useEffect(()=>{const e=t.current,n=window.innerWidth,i=window.innerHeight,r=new yD,s=new Un(60,n/i,.1,1e3);s.position.z=28;const o=new pS({antialias:!0,alpha:!0});o.setSize(n,i),o.setPixelRatio(Math.min(window.devicePixelRatio,2)),o.setClearColor(0,0),e.appendChild(o.domElement);const a=2e3,l=new An,c=new Float32Array(a*3),u=new Float32Array(a*3);for(let U=0;U<a;U++){c[U*3]=(Math.random()-.5)*130,c[U*3+1]=(Math.random()-.5)*80,c[U*3+2]=(Math.random()-.5)*70;const j=Math.random();j<.55?(u[U*3]=.376,u[U*3+1]=.208,u[U*3+2]=.949):j<.8?(u[U*3]=.545,u[U*3+1]=.361,u[U*3+2]=.965):(u[U*3]=.024,u[U*3+1]=.714,u[U*3+2]=.831)}l.setAttribute("position",new kn(c,3)),l.setAttribute("color",new kn(u,3));const f=new gS({size:.11,vertexColors:!0,transparent:!0,opacity:.5,blending:Go,depthWrite:!1}),d=new ED(l,f);r.add(d);const p=new wc(10,.045,8,100),_=new jo({color:6305266,transparent:!0,opacity:.18,blending:Go}),x=new Zn(p,_);x.position.set(0,0,-18),r.add(x);const v=new wc(14,.03,6,100),h=new jo({color:9133302,transparent:!0,opacity:.1,blending:Go}),g=new Zn(v,h);g.position.set(0,0,-22),r.add(g);const m=[];[new op(4,0),new ap(3,0),new lp(2.5,0)].forEach((U,j)=>{const Q=new jo({color:[6305266,9133302,440020][j],wireframe:!0,transparent:!0,opacity:.055+j*.01}),L=new Zn(U,Q);L.position.set((j-1)*18+(Math.random()-.5)*3,(Math.random()-.5)*6,-8),r.add(L),m.push(L)});const C=new TD(100,40,6305266,921114);C.position.y=-20,C.material.transparent=!0,C.material.opacity=.15,r.add(C);const T={x:0,y:0},w=U=>{T.x=(U.clientX/window.innerWidth-.5)*2,T.y=(U.clientY/window.innerHeight-.5)*2};window.addEventListener("mousemove",w);const P=()=>{s.aspect=window.innerWidth/window.innerHeight,s.updateProjectionMatrix(),o.setSize(window.innerWidth,window.innerHeight)};window.addEventListener("resize",P);let S=0;const E=()=>{S++;const U=S*.004;d.rotation.y=U*.035,s.position.x+=(T.x*2-s.position.x)*.025,s.position.y+=(-T.y*1.5-s.position.y)*.025,s.lookAt(r.position),x.rotation.z=U*.25,x.rotation.x=Math.sin(U*.4)*.25,g.rotation.z=-U*.18,g.rotation.y=U*.12;const j=.15+Math.sin(U*1.2)*.06;x.material.opacity=j,g.material.opacity=j*.55,m.forEach((Q,L)=>{Q.rotation.x+=.004+L*.001,Q.rotation.y+=.006+L*.001,Q.position.y=Math.sin(U+L*2)*3}),C.position.z=U*2.5%8-4,o.render(r,s),requestAnimationFrame(E)};return requestAnimationFrame(E),()=>{window.removeEventListener("mousemove",w),window.removeEventListener("resize",P),o.dispose(),e.contains(o.domElement)&&e.removeChild(o.domElement)}},[]),R.jsx("div",{ref:t,className:"canvas-wrapper"})}function AD(){const t=J.useRef(null),e=J.useRef(null),n=J.useRef({x:0,y:0}),i=J.useRef({x:0,y:0});return J.useEffect(()=>{const r=u=>{n.current={x:u.clientX,y:u.clientY},t.current.style.left=u.clientX-3+"px",t.current.style.top=u.clientY-3+"px"};window.addEventListener("mousemove",r);let s;const o=(u,f,d)=>u+(f-u)*d,a=()=>{i.current.x=o(i.current.x,n.current.x,.12),i.current.y=o(i.current.y,n.current.y,.12),e.current&&(e.current.style.left=i.current.x-18+"px",e.current.style.top=i.current.y-18+"px"),s=requestAnimationFrame(a)};s=requestAnimationFrame(a);const l=()=>{t.current.style.transform="scale(3)",e.current.style.width="60px",e.current.style.height="60px",e.current.style.opacity="0.3"},c=()=>{t.current.style.transform="scale(1)",e.current.style.width="36px",e.current.style.height="36px",e.current.style.opacity="1"};return document.querySelectorAll("a, button, [data-cursor]").forEach(u=>{u.addEventListener("mouseenter",l),u.addEventListener("mouseleave",c)}),()=>{window.removeEventListener("mousemove",r),cancelAnimationFrame(s)}},[]),R.jsxs(R.Fragment,{children:[R.jsx("div",{ref:t,className:"cursor-dot"}),R.jsx("div",{ref:e,className:"cursor-ring"})]})}const Jv=["About","Experience","Skills","Projects","Contact"];function CD(){const[t,e]=J.useState(!1),[n,i]=J.useState(""),[r,s]=J.useState(!1);J.useEffect(()=>{const a=()=>e(window.scrollY>40);return window.addEventListener("scroll",a),()=>window.removeEventListener("scroll",a)},[]);const o=a=>{var l;(l=document.getElementById(a.toLowerCase()))==null||l.scrollIntoView({behavior:"smooth"}),i(a),s(!1)};return R.jsxs(Pe.nav,{initial:{y:-80,opacity:0},animate:{y:0,opacity:1},transition:{duration:.7,ease:[.23,1,.32,1]},className:`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${t?"py-3 bg-bg/80 backdrop-blur-2xl border-b border-border":"py-5"}`,children:[R.jsxs("div",{className:"max-w-6xl mx-auto px-6 flex items-center justify-between",children:[R.jsx(Pe.button,{whileHover:{scale:1.04},onClick:()=>window.scrollTo({top:0,behavior:"smooth"}),className:"font-display font-bold text-xl tracking-wide text-gradient",children:"saad.dev()"}),R.jsxs("div",{className:"hidden md:flex items-center gap-8",children:[Jv.map((a,l)=>R.jsxs(Pe.button,{initial:{opacity:0,y:-8},animate:{opacity:1,y:0},transition:{delay:.08*l+.25},onClick:()=>o(a),className:`font-body font-medium text-sm tracking-wide transition-colors duration-200 ${n===a?"text-primary2":"text-muted hover:text-text"}`,children:[n===a&&R.jsx(Pe.span,{layoutId:"nav-dot",className:"mr-1.5 text-primary",children:"·"}),a]},a)),R.jsx(Pe.a,{href:"mailto:saadsaifullahk@gmail.com",initial:{opacity:0},animate:{opacity:1},transition:{delay:.7},whileHover:{scale:1.03,boxShadow:"0 0 22px rgba(96,53,242,0.5)"},whileTap:{scale:.97},className:"btn-primary px-5 py-2 text-sm",children:"Hire Me"})]}),R.jsxs("button",{className:"md:hidden p-2 flex flex-col gap-1.5",onClick:()=>s(!r),children:[R.jsx(Pe.span,{animate:{rotate:r?45:0,y:r?8:0},className:"block w-5 h-px bg-text origin-center"}),R.jsx(Pe.span,{animate:{opacity:r?0:1},className:"block w-5 h-px bg-text"}),R.jsx(Pe.span,{animate:{rotate:r?-45:0,y:r?-8:0},className:"block w-5 h-px bg-text origin-center"})]})]}),R.jsx(Fy,{children:r&&R.jsx(Pe.div,{initial:{opacity:0,height:0},animate:{opacity:1,height:"auto"},exit:{opacity:0,height:0},className:"md:hidden bg-surface/95 backdrop-blur-xl border-b border-border",children:Jv.map(a=>R.jsx("button",{onClick:()=>o(a),className:"block w-full text-left px-6 py-4 font-body font-medium text-sm text-muted hover:text-primary2 border-b border-border/30 transition-colors",children:a},a))})})]})}function bD(){return R.jsx("footer",{className:"py-8 px-6 border-t border-border section-content",children:R.jsxs("div",{className:"max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3",children:[R.jsx("span",{className:"font-display font-bold text-lg text-gradient",children:"saad.dev()"}),R.jsxs("p",{className:"font-body text-sm text-muted text-center",children:["Designed & Built by"," ",R.jsx("span",{className:"text-primary2 font-medium",children:"Saad Saifullah"})," ·"," ",new Date().getFullYear()]}),R.jsx("p",{className:"font-mono text-xs text-muted",children:"React · Three.js · Framer Motion"})]})})}const RD="/portfolio/assets/avatar-DS7BXAB4.jpg",PD=["Full Stack Developer","AWS Cloud Engineer","React & Node.js Expert","Real-time Systems Builder"];function LD({words:t}){const[e,n]=J.useState(0),[i,r]=J.useState(""),[s,o]=J.useState(!1);return J.useEffect(()=>{const a=t[e%t.length];let l;return!s&&i.length<a.length?l=setTimeout(()=>r(a.slice(0,i.length+1)),72):!s&&i.length===a.length?l=setTimeout(()=>o(!0),2200):s&&i.length>0?l=setTimeout(()=>r(i.slice(0,-1)),36):(o(!1),n(c=>c+1)),()=>clearTimeout(l)},[i,s,e,t]),R.jsxs("span",{className:"text-primary2",children:[i,R.jsx("span",{className:"inline-block w-0.5 h-[0.8em] bg-primary ml-0.5 animate-pulse align-middle"})]})}function DD(){return R.jsxs("section",{id:"hero",className:"relative min-h-screen flex flex-col justify-center px-6 pt-24 overflow-hidden",children:[R.jsx("div",{className:"absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full pointer-events-none",style:{background:"radial-gradient(circle, rgba(96,53,242,0.07) 0%, transparent 70%)"}}),R.jsx("div",{className:"absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full pointer-events-none",style:{background:"radial-gradient(circle, rgba(6,182,212,0.05) 0%, transparent 70%)"}}),R.jsx("div",{className:"section-content max-w-6xl mx-auto w-full",children:R.jsxs("div",{className:"grid md:grid-cols-2 gap-14 items-center",children:[R.jsxs("div",{children:[R.jsx(Pe.div,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{duration:.5,delay:.2},className:"flex items-center gap-3 mb-7",children:R.jsxs("div",{className:"flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/8",children:[R.jsx("div",{className:"w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"}),R.jsx("span",{className:"font-body text-xs font-medium tracking-wide text-primary2",children:"Available for work"})]})}),R.jsxs(Pe.h1,{initial:{opacity:0,y:40},animate:{opacity:1,y:0},transition:{duration:.8,delay:.3,ease:[.23,1,.32,1]},className:"font-display font-black leading-[1.05] mb-4",children:[R.jsx("span",{className:"block text-[clamp(3rem,7.5vw,5.5rem)] text-text",children:"Saad"}),R.jsx("span",{className:"block text-[clamp(3rem,7.5vw,5.5rem)] text-gradient",children:"Saifullah"})]}),R.jsx(Pe.div,{initial:{opacity:0},animate:{opacity:1},transition:{delay:.75},className:"font-body text-xl font-medium text-muted mb-7 h-8",children:R.jsx(LD,{words:PD})}),R.jsxs(Pe.p,{initial:{opacity:0,y:16},animate:{opacity:1,y:0},transition:{delay:.9},className:"font-body text-base text-muted leading-relaxed mb-10 max-w-lg",children:["Full Stack Engineer with"," ",R.jsx("span",{className:"text-text font-semibold",children:"2+ years"})," of production experience. I architect real-time systems, cloud infrastructure on AWS, and ship code that solves real problems — from database design to DevOps."]}),R.jsxs(Pe.div,{initial:{opacity:0,y:12},animate:{opacity:1,y:0},transition:{delay:1.05},className:"flex flex-wrap gap-3 mb-10",children:[R.jsx(Pe.button,{whileHover:{scale:1.02,boxShadow:"0 0 28px rgba(96,53,242,0.5)"},whileTap:{scale:.97},onClick:()=>{var t;return(t=document.getElementById("projects"))==null?void 0:t.scrollIntoView({behavior:"smooth"})},className:"btn-primary px-8 py-3 text-sm",children:"View My Work"}),R.jsx(Pe.button,{whileHover:{scale:1.02},whileTap:{scale:.97},onClick:()=>{var t;return(t=document.getElementById("contact"))==null?void 0:t.scrollIntoView({behavior:"smooth"})},className:"btn-outline px-8 py-3 text-sm",children:"Get In Touch"})]})]}),R.jsx(Pe.div,{initial:{opacity:0,scale:.93,x:20},animate:{opacity:1,scale:1,x:0},transition:{delay:.5,duration:.85,ease:[.23,1,.32,1]},className:"hidden md:block",children:R.jsxs("div",{className:"stat-window p-0 overflow-hidden relative",style:{boxShadow:"0 0 60px rgba(96,53,242,0.12), 0 0 120px rgba(96,53,242,0.05)"},children:[R.jsxs("div",{className:"px-6 py-4 border-b border-border flex items-center justify-between bg-surface2",children:[R.jsxs("div",{className:"flex items-center gap-2",children:[R.jsx("div",{className:"w-2 h-2 rounded-full bg-primary animate-pulse"}),R.jsx("span",{className:"font-mono text-xs text-textDim tracking-widest",children:"developer.profile"})]}),R.jsx("div",{className:"flex gap-1.5",children:["bg-rose/60","bg-amber/60","bg-emerald-400/60"].map(t=>R.jsx("div",{className:`w-2.5 h-2.5 rounded-full ${t}`},t))})]}),R.jsxs("div",{className:"p-7",children:[R.jsxs("div",{className:"flex items-center gap-4 mb-7",children:[R.jsx("img",{src:RD,className:"w-14 h-14 rounded-xl object-cover",alt:"Saad Saifullah"}),R.jsxs("div",{children:[R.jsx("div",{className:"font-display font-bold text-lg text-text",children:"Saad Saifullah"}),R.jsx("div",{className:"font-body text-sm text-muted",children:"Full Stack Developer"})]})]}),[{label:"Experience",value:"2+ Years",pct:75,color:"#6035F2"},{label:"Projects & Work",value:"7+",pct:80,color:"#8B5CF6"},{label:"Tech Stack",value:"20+ Tools",pct:88,color:"#06b6d4"},{label:"AWS Services",value:"8+",pct:70,color:"#f59e0b"}].map(({label:t,value:e,pct:n,color:i},r)=>R.jsxs("div",{className:"mb-5",children:[R.jsxs("div",{className:"flex justify-between items-center mb-2",children:[R.jsx("span",{className:"font-body text-sm text-muted font-medium",children:t}),R.jsx("span",{className:"font-body text-sm font-bold",style:{color:i},children:e})]}),R.jsx("div",{className:"power-bar-track",children:R.jsx(Pe.div,{initial:{width:0},animate:{width:`${n}%`},transition:{duration:1.1,delay:.9+r*.1,ease:[.23,1,.32,1]},className:"power-bar-fill",style:{background:`linear-gradient(90deg,${i}80,${i})`,boxShadow:`0 0 6px ${i}`}})})]},t)),R.jsxs("div",{className:"mt-6 pt-5 border-t border-border flex items-center justify-between",children:[R.jsxs("div",{children:[R.jsx("div",{className:"font-body text-xs text-muted mb-0.5 font-medium",children:"Currently at"}),R.jsx("div",{className:"font-body text-sm font-semibold text-text",children:"Kreadevs"})]}),R.jsxs("div",{className:"flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-400/10 border border-emerald-400/25",children:[R.jsx("div",{className:"w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"}),R.jsx("span",{className:"font-body text-xs font-medium text-emerald-400",children:"Active"})]})]})]})]})})]})}),R.jsxs(Pe.div,{initial:{opacity:0},animate:{opacity:1},transition:{delay:1.5},className:"section-content absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2",children:[R.jsx("span",{className:"font-body text-[11px] text-muted font-medium tracking-widest",children:"scroll"}),R.jsx(Pe.div,{animate:{y:[0,8,0]},transition:{repeat:1/0,duration:1.5,ease:"easeInOut"},className:"w-px h-10 bg-gradient-to-b from-primary to-transparent"})]})]})}function Ra(t=.15){const e=J.useRef(null),[n,i]=J.useState(!1);return J.useEffect(()=>{const r=new IntersectionObserver(([s])=>{s.isIntersecting&&i(!0)},{threshold:t});return e.current&&r.observe(e.current),()=>r.disconnect()},[t]),[e,n]}const ND=[{label:"Role",value:"Full Stack Developer",icon:"⚡"},{label:"Location",value:"Karachi, Pakistan",icon:"📍"},{label:"Current",value:"Full Stack Dev @ Kreadevs",icon:"💼"},{label:"Education",value:"B.Sc Computer Science, UoK (2021–2026)",icon:"🎓"},{label:"Email",value:"saadsaifullahk@gmail.com",icon:"✉️"},{label:"Status",value:"Open to Opportunities",icon:"🟢"}];function Pa({number:t,label:e,title:n,gradient:i}){return R.jsxs("div",{className:"mb-20",children:[R.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[R.jsx("span",{className:"font-mono text-xs text-primary/70 tracking-widest",children:t}),R.jsx("div",{className:"w-6 h-px bg-primary/40"}),R.jsx("span",{className:"font-body text-xs font-semibold text-muted tracking-wider uppercase",children:e})]}),R.jsx("h2",{className:"font-display font-black leading-none text-[clamp(2.4rem,5.5vw,4.5rem)]",children:n.split(`
`).map((r,s)=>R.jsx("span",{className:`block ${s===1?"text-gradient":"text-text"}`,children:r},s))})]})}function UD(){const[t,e]=Ra(.1);return R.jsxs("section",{id:"about",className:"py-32 px-6 relative",children:[R.jsx("div",{className:"absolute left-0 right-0 top-0 glow-line"}),R.jsx("div",{className:"absolute top-1/2 right-0 w-[350px] h-[350px] pointer-events-none",style:{background:"radial-gradient(circle, rgba(139,92,246,0.06) 0%, transparent 70%)"}}),R.jsxs("div",{ref:t,className:"section-content max-w-6xl mx-auto",children:[R.jsx(Pe.div,{initial:{opacity:0,y:24},animate:e?{opacity:1,y:0}:{},transition:{duration:.55},children:R.jsx(Pa,{number:"01",label:"About Me",title:`Who
I Am`})}),R.jsxs("div",{className:"grid md:grid-cols-2 gap-16 items-start",children:[R.jsxs(Pe.div,{initial:{opacity:0,x:-24},animate:e?{opacity:1,x:0}:{},transition:{duration:.65,delay:.2},children:[R.jsxs("p",{className:"font-body text-base text-textDim leading-relaxed mb-5",children:["I'm a"," ",R.jsx("span",{className:"text-text font-semibold",children:"Full Stack Engineer"})," ","based in Karachi, Pakistan with 2+ years of production experience building and shipping scalable web and mobile platforms."]}),R.jsx("p",{className:"font-body text-base text-muted leading-relaxed mb-5",children:"My work spans the full stack from database design and backend APIs to cloud infrastructure on AWS and polished frontends. I've shipped ERP systems handling 1,000+ employees and real-time delivery platforms with live tracking and Stripe payments."}),R.jsx("p",{className:"font-body text-base text-muted leading-relaxed mb-8",children:"I'm currently completing my B.Sc in Computer Science at the University of Karachi while working full-time. I love building side projects, publishing open-source tools, and diving into new technologies."}),R.jsx("div",{className:"flex flex-wrap gap-2",children:["Clean Architecture","Real-time Systems","Cloud Infrastructure","Open Source","AI/ML"].map(n=>R.jsx("span",{className:"tech-tag",children:n},n))})]}),R.jsx("div",{className:"space-y-3",children:ND.map(({label:n,value:i,icon:r},s)=>R.jsxs(Pe.div,{initial:{opacity:0,x:20},animate:e?{opacity:1,x:0}:{},transition:{delay:.3+s*.08},className:"card rounded-xl group flex items-start gap-4 p-4 cursor-default",children:[R.jsx("span",{className:"text-lg mt-0.5 flex-shrink-0",children:r}),R.jsxs("div",{children:[R.jsx("div",{className:"font-body text-xs font-semibold text-muted uppercase tracking-wider mb-0.5",children:n}),R.jsx("div",{className:"font-body text-sm font-medium text-text group-hover:text-primary2 transition-colors",children:i})]})]},n))})]})]})]})}const ID=[{company:"Kreadevs",role:"Full Stack Developer",period:"Feb 2024 — Present",location:"Karachi, Pakistan",badge:"On-site",color:"#6035F2",desc:"Building and scaling a live multi-vendor food delivery platform serving customers, restaurants, riders, and admins across separate applications.",bullets:["Architected full AWS infrastructure (EC2, RDS, S3, CloudFront, ElastiCache, ALB, Auto Scaling) supporting production with zero-downtime releases via PM2 cluster mode.","Engineered real-time order & delivery tracking using Redis pub/sub and WebSockets, enabling instant status updates across all platform roles simultaneously.","Designed a distance-based rider assignment engine with automated fallback & decline handling, reducing average delivery assignment time by ~40%.","Integrated Stripe payment processing with full webhook handling across test and live environments, including restaurant wallet management and withdrawal workflows.","Migrated frontend state management from Context API to Zustand, reducing component re-renders and improving perceived UI responsiveness.","Implemented push notifications and real-time audio alerts for operational events, significantly improving order acknowledgment rates."],stack:["Node.js","React","React Native","AWS","Redis","WebSockets","Stripe","PostgreSQL","Nginx","PM2"]},{company:"Sur-Solution",role:"Full Stack Developer",period:"Nov 2022 — Feb 2024",location:"Qatar (Remote)",badge:"Remote",color:"#8B5CF6",desc:"Designed and shipped a centralized ERP system managing workforce operations for 1,000+ employees across multiple departments.",bullets:["Built a comprehensive ERP platform using ASP.NET Core MVC 7 covering employee records, project allocation, attendance tracking, and admin reporting.","Implemented fine-grained role-based access control across all departments, ensuring data isolation and audit compliance for sensitive HR and payroll data.","Designed optimized database schemas and SQL queries for large-scale employee records, reducing data retrieval latency on HR reporting dashboards.","Digitized manual HR processes end-to-end, eliminating an estimated 20+ hours of weekly administrative overhead across teams."],stack:["ASP.NET Core MVC 7","SQL Server","JavaScript","CSS3"]}];function FD(){const[t,e]=Ra(.08);return R.jsxs("section",{id:"experience",className:"py-32 px-6 relative",children:[R.jsx("div",{className:"absolute left-0 right-0 top-0 glow-line"}),R.jsx("div",{className:"absolute top-1/4 left-0 w-[300px] h-[300px] pointer-events-none",style:{background:"radial-gradient(circle, rgba(244,63,94,0.04) 0%, transparent 70%)"}}),R.jsxs("div",{ref:t,className:"section-content max-w-6xl mx-auto",children:[R.jsx(Pe.div,{initial:{opacity:0,y:24},animate:e?{opacity:1,y:0}:{},transition:{duration:.55},children:R.jsx(Pa,{number:"02",label:"Work Experience",title:`Where I've
Worked`})}),R.jsxs("div",{className:"relative",children:[R.jsx("div",{className:"absolute left-5 md:left-1/2 top-0 bottom-0 w-px overflow-hidden",style:{transform:"translateX(-50%)"},children:R.jsx(Pe.div,{initial:{height:0},animate:e?{height:"100%"}:{},transition:{duration:1.6,ease:"easeInOut",delay:.3},style:{background:"linear-gradient(to bottom, #6035F2, #8B5CF6 60%, transparent)"},className:"w-full"})}),ID.map((n,i)=>R.jsxs(Pe.div,{initial:{opacity:0,x:i%2===0?-32:32},animate:e?{opacity:1,x:0}:{},transition:{duration:.65,delay:.2+i*.2},className:`relative mb-14 md:w-[calc(50%-2.5rem)] ml-12 md:ml-0 ${i%2===0?"":"md:ml-auto"}`,children:[R.jsx("div",{className:"absolute top-6 -left-9 md:left-auto md:-right-[2.7rem] w-4 h-4 rounded-full border-2 bg-bg flex items-center justify-center",style:{borderColor:n.color,boxShadow:`0 0 10px ${n.color}`},children:R.jsx("div",{className:"w-1.5 h-1.5 rounded-full",style:{background:n.color}})}),R.jsxs("div",{className:"card rounded-2xl overflow-hidden group",children:[R.jsx("div",{className:"h-0.5",style:{background:`linear-gradient(90deg, ${n.color}, transparent)`}}),R.jsxs("div",{className:"p-6",children:[R.jsxs("div",{className:"flex flex-wrap items-start justify-between gap-3 mb-5",children:[R.jsxs("div",{children:[R.jsx("div",{className:"font-display font-bold text-xl text-text mb-0.5",children:n.company}),R.jsx("div",{className:"font-body font-semibold text-base",style:{color:n.color},children:n.role})]}),R.jsxs("div",{className:"text-right",children:[R.jsx("div",{className:"font-mono text-xs text-muted mb-1",children:n.period}),R.jsx("div",{className:"font-mono text-xs text-muted mb-1.5",children:n.location}),R.jsx("span",{className:"inline-block px-2.5 py-0.5 rounded-full text-xs font-body font-medium border border-border2 text-muted",children:n.badge})]})]}),R.jsx("p",{className:"font-body text-sm text-muted leading-relaxed mb-4",children:n.desc}),R.jsx("ul",{className:"space-y-2 mb-5",children:n.bullets.map((r,s)=>R.jsxs("li",{className:"flex gap-2.5 text-sm text-textDim leading-relaxed",children:[R.jsx("span",{className:"mt-1.5 w-1 h-1 rounded-full flex-shrink-0",style:{background:n.color}}),r]},s))}),R.jsx("div",{className:"flex flex-wrap gap-1.5 pt-4 border-t border-border/60",children:n.stack.map(r=>R.jsx("span",{className:"tech-tag",children:r},r))})]})]})]},n.company))]})]})]})}const OD=[{category:"Frontend",icon:"🎨",color:"#6035F2",skills:[["React.js",92],["Next.js",80],["TypeScript",78],["JavaScript ES6+",95],["Tailwind CSS",90],["Vite",85]]},{category:"Backend",icon:"⚙️",color:"#8B5CF6",skills:[["Node.js",90],["Express.js",88],["ASP.NET Core MVC",82],["GraphQL + Apollo",72],["REST API",95]]},{category:"Cloud & DevOps",icon:"☁️",color:"#06b6d4",skills:[["AWS EC2 / RDS / S3",85],["CloudFront / ALB",78],["ElastiCache",75],["Auto Scaling",75],["Docker",70],["Nginx",72],["PM2",80]]},{category:"Databases",icon:"🗄️",color:"#f59e0b",skills:[["PostgreSQL",84],["SQL Server",80],["MongoDB",78],["Redis",80]]},{category:"Mobile & RT",icon:"📱",color:"#f43f5e",skills:[["React Native (Expo)",75],["WebSockets / Socket.io",85],["Redis Pub/Sub",80],["Stripe",80]]}];function kD({name:t,pct:e,color:n,inView:i,delay:r}){return R.jsxs("div",{className:"mb-3.5 group",children:[R.jsxs("div",{className:"flex justify-between mb-1.5",children:[R.jsx("span",{className:"font-body text-sm text-textDim font-medium group-hover:text-text transition-colors",children:t}),R.jsxs("span",{className:"font-mono text-xs text-muted",children:[e,"%"]})]}),R.jsx("div",{className:"power-bar-track",children:R.jsx(Pe.div,{initial:{width:0},animate:i?{width:`${e}%`}:{},transition:{duration:1.1,delay:r,ease:[.23,1,.32,1]},className:"power-bar-fill",style:{background:`linear-gradient(90deg,${n}60,${n})`,boxShadow:`0 0 6px ${n}80`}})})]})}function BD(){const[t,e]=Ra(.05);return R.jsxs("section",{id:"skills",className:"py-32 px-6 relative",children:[R.jsx("div",{className:"absolute left-0 right-0 top-0 glow-line"}),R.jsx("div",{className:"absolute bottom-1/3 right-0 w-[400px] h-[400px] pointer-events-none",style:{background:"radial-gradient(circle, rgba(96,53,242,0.05) 0%, transparent 70%)"}}),R.jsxs("div",{ref:t,className:"section-content max-w-6xl mx-auto",children:[R.jsx(Pe.div,{initial:{opacity:0,y:24},animate:e?{opacity:1,y:0}:{},transition:{duration:.55},children:R.jsx(Pa,{number:"03",label:"Technical Skills",title:`Tech
Arsenal`})}),R.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5",children:OD.map((n,i)=>R.jsxs(Pe.div,{initial:{opacity:0,y:24},animate:e?{opacity:1,y:0}:{},transition:{duration:.55,delay:i*.1},className:"card rounded-2xl p-6 group relative overflow-hidden",children:[R.jsx("div",{className:"absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl",style:{background:`radial-gradient(circle at top left, ${n.color}08, transparent 65%)`}}),R.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[R.jsx("div",{className:"w-9 h-9 rounded-lg flex items-center justify-center text-lg",style:{background:`${n.color}15`,border:`1px solid ${n.color}25`},children:n.icon}),R.jsxs("div",{children:[R.jsx("div",{className:"font-body font-bold text-sm text-text",children:n.category}),R.jsxs("div",{className:"font-mono text-[10px]",style:{color:n.color},children:[n.skills.length," skills"]})]})]}),n.skills.map(([r,s],o)=>R.jsx(kD,{name:r,pct:s,color:n.color,inView:e,delay:i*.1+o*.07},r))]},n.category))}),R.jsxs(Pe.div,{initial:{opacity:0,y:16},animate:e?{opacity:1,y:0}:{},transition:{delay:.8},className:"card rounded-2xl mt-5 p-6",children:[R.jsx("div",{className:"font-body text-xs font-semibold text-muted uppercase tracking-wider mb-4",children:"Also familiar with"}),R.jsx("div",{className:"flex flex-wrap gap-2",children:["Python","PyTorch","FastAPI","OpenCV","EfficientNet","Git","Linux","Zod","NPM Publishing","Push Notifications","JWT","CI/CD"].map(n=>R.jsx("span",{className:"tech-tag opacity-60 hover:opacity-100 transition-opacity cursor-default",children:n},n))})]})]})]})}var zD={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const VD=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),HD=(t,e)=>{const n=J.forwardRef(({color:i="currentColor",size:r=24,strokeWidth:s=2,absoluteStrokeWidth:o,children:a,...l},c)=>J.createElement("svg",{ref:c,...zD,width:r,height:r,stroke:i,strokeWidth:o?Number(s)*24/Number(r):s,className:`lucide lucide-${VD(t)}`,...l},[...e.map(([u,f])=>J.createElement(u,f)),...(Array.isArray(a)?a:[a])||[]]));return n.displayName=`${t}`,n};var gr=HD;const GD=gr("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]),WD=gr("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]),jD=gr("ExternalLink",[["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}],["polyline",{points:"15 3 21 3 21 9",key:"mznyad"}],["line",{x1:"10",x2:"21",y1:"14",y2:"3",key:"18c3s4"}]]),vS=gr("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]),XD=gr("Linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]),qD=gr("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]),YD=gr("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]),$D=gr("Send",[["path",{d:"m22 2-7 20-4-9-9-4Z",key:"1q3vgg"}],["path",{d:"M22 2 11 13",key:"nzbqef"}]]),KD=[{id:1,name:"Enterprise ERP System",tag:"Production · 1,000+ Employees",year:"2022 – 2024",color:"#6035F2",desc:"Centralized workforce management ERP covering employee records, project allocation, attendance tracking, and administrative reporting used daily by 1,000+ employees across multiple departments.",highlights:["Built with ASP.NET Core MVC 7 covering all HR and operational workflows in a single unified system.","Fine-grained role-based access control with data isolation and audit compliance for sensitive payroll data.","Optimized SQL schemas and queries, significantly reducing data retrieval latency on HR reporting dashboards.","Fully digitized manual HR processes eliminated ~20+ hours of weekly administrative overhead.","Zero critical downtime maintained throughout continuous feature enhancements."],stack:["ASP.NET Core MVC 7","SQL Server","JavaScript","CSS3","RBAC"],featured:!0},{id:2,name:"Oralytist",tag:"AI · Oral Disease Detection",year:"Oct 2025 – Jan 2026",color:"#06b6d4",desc:"AI-powered full-stack platform that detects oral conditions from dental X-ray images using an EfficientNet-based ML model.",highlights:["EfficientNet-based ML model for multi-class oral disease detection from dental X-ray images.","Dual-service backend: Node.js for auth/coordination, FastAPI for isolated model inference.","Full ML pipeline including dataset structuring, image preprocessing, and dynamic class handling.","Modular architecture designed for independent scaling and future model upgrades."],stack:["Python","PyTorch","EfficientNet","FastAPI","React (Vite)","OpenCV","Node.js"],github:"#"},{id:3,name:"ManaTree",tag:"CLI Tool · NPM Published",year:"Feb 2026 – Present",color:"#f59e0b",desc:"Published CLI tool on NPM that generates complete project folder structures from simple text-based definitions eliminating repetitive manual scaffolding.",highlights:["Shared generation engine powering both the REST API and CLI with a single core.","Zod validation, secure file path handling, and automatic ZIP archive generation.","Published on NPM and available to developers worldwide.","TypeScript throughout with Express.js API and PostgreSQL for project persistence."],stack:["Node.js","TypeScript","React (Vite)","Express.js","PostgreSQL","Zod","NPM"],github:"#"},{id:4,name:"Trakify",tag:"Web App · Task Management",year:"Oct 2025",color:"#8B5CF6",desc:"Full-stack task management web app for streamlining personal and team productivity with JWT auth, RESTful APIs, and real-time updates.",highlights:["RESTful APIs with Node.js + Express for task creation, updates, and status tracking.","JWT-based authentication with protected routes and session management.","MongoDB with optimized schema design for efficient task storage.","Task prioritization, deadlines, and real-time updates with clean UX."],stack:["React.js","Node.js","Express.js","MongoDB","JWT"],github:"#"}];function ZD({project:t,inView:e,delay:n}){const[i,r]=J.useState(!1);return R.jsxs(Pe.div,{initial:{opacity:0,y:24},animate:e?{opacity:1,y:0}:{},transition:{duration:.55,delay:n},className:`card rounded-2xl overflow-hidden group ${t.featured?"md:col-span-2":""}`,children:[R.jsx("div",{className:"h-0.5",style:{background:`linear-gradient(90deg, ${t.color}, transparent)`}}),R.jsxs("div",{className:"p-6",children:[R.jsxs("div",{className:"flex items-start justify-between gap-4 mb-4",children:[R.jsxs("div",{children:[R.jsx("h3",{className:"font-display font-bold text-xl text-text mb-1",children:t.name}),R.jsxs("div",{className:"flex items-center gap-2 flex-wrap",children:[R.jsx("span",{className:"font-body text-xs font-semibold",style:{color:t.color},children:t.tag}),R.jsx("span",{className:"text-border",children:"·"}),R.jsx("span",{className:"font-mono text-xs text-muted",children:t.year})]})]}),R.jsxs("div",{className:"flex items-center gap-2.5 flex-shrink-0 mt-1",children:[t.github&&R.jsx(Pe.a,{href:t.github,whileHover:{scale:1.12},className:"text-muted hover:text-primary2 transition-colors",children:R.jsx(vS,{size:16})}),t.live&&R.jsx(Pe.a,{href:t.live,whileHover:{scale:1.12},className:"text-muted hover:text-primary2 transition-colors",children:R.jsx(jD,{size:16})})]})]}),R.jsx("p",{className:"font-body text-sm text-muted leading-relaxed mb-4",children:t.desc}),R.jsx(Fy,{children:i&&R.jsx(Pe.div,{initial:{height:0,opacity:0},animate:{height:"auto",opacity:1},exit:{height:0,opacity:0},transition:{duration:.28},className:"overflow-hidden",children:R.jsx("ul",{className:"space-y-2 mb-4",children:t.highlights.map((s,o)=>R.jsxs("li",{className:"flex gap-2.5 text-sm text-textDim leading-relaxed",children:[R.jsx("span",{className:"mt-1.5 w-1 h-1 rounded-full flex-shrink-0",style:{background:t.color}}),s]},o))})})}),R.jsxs("button",{onClick:()=>r(!i),className:"flex items-center gap-1.5 font-body text-xs font-semibold text-muted hover:text-primary2 transition-colors mb-4",children:[i?R.jsx(WD,{size:12}):R.jsx(GD,{size:12}),i?"Hide details":"Show details"]}),R.jsx("div",{className:"flex flex-wrap gap-1.5 pt-4 border-t border-border/50",children:t.stack.map(s=>R.jsx("span",{className:"tech-tag",children:s},s))})]})]})}function QD(){const[t,e]=Ra(.05);return R.jsxs("section",{id:"projects",className:"py-32 px-6 relative",children:[R.jsx("div",{className:"absolute left-0 right-0 top-0 glow-line"}),R.jsx("div",{className:"absolute top-1/2 left-0 w-[300px] h-[300px] pointer-events-none",style:{background:"radial-gradient(circle, rgba(96,53,242,0.05) 0%, transparent 70%)"}}),R.jsxs("div",{ref:t,className:"section-content max-w-6xl mx-auto",children:[R.jsx(Pe.div,{initial:{opacity:0,y:24},animate:e?{opacity:1,y:0}:{},transition:{duration:.55},children:R.jsx(Pa,{number:"04",label:"Selected Projects",title:`Things I've
Built`})}),R.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-5",children:KD.map((n,i)=>R.jsx(ZD,{project:n,inView:e,delay:i*.1},n.id))})]})]})}function JD(){const[t,e]=Ra(.1),[n,i]=J.useState({name:"",email:"",message:""}),[r,s]=J.useState(!1),o=a=>{a.preventDefault(),window.open(`mailto:saadsaifullahk@gmail.com?subject=Portfolio Contact from ${n.name}&body=${encodeURIComponent(n.message+`

From: `+n.email)}`),s(!0),setTimeout(()=>s(!1),3e3)};return R.jsxs("section",{id:"contact",className:"py-32 px-6 relative",children:[R.jsx("div",{className:"absolute left-0 right-0 top-0 glow-line"}),R.jsx("div",{className:"absolute inset-0 pointer-events-none",style:{background:"radial-gradient(ellipse at bottom center, rgba(96,53,242,0.04) 0%, transparent 60%)"}}),R.jsxs("div",{ref:t,className:"section-content max-w-6xl mx-auto",children:[R.jsx(Pe.div,{initial:{opacity:0,y:24},animate:e?{opacity:1,y:0}:{},transition:{duration:.55},children:R.jsx(Pa,{number:"05",label:"Get In Touch",title:`Let's
Connect`})}),R.jsxs("div",{className:"grid md:grid-cols-2 gap-14",children:[R.jsxs(Pe.div,{initial:{opacity:0,x:-24},animate:e?{opacity:1,x:0}:{},transition:{duration:.65,delay:.2},children:[R.jsx("p",{className:"font-body text-base text-muted leading-relaxed mb-10",children:"Whether you have a project in mind, an opportunity to explore, or just want to talk tech my inbox is always open. I'll get back to you within 24 hours."}),R.jsx("div",{className:"space-y-3",children:[{icon:R.jsx(qD,{size:15}),label:"Email",value:"saadsaifullahk@gmail.com",href:"mailto:saadsaifullahk@gmail.com",color:"#6035F2"},{icon:R.jsx(YD,{size:15}),label:"Phone",value:"+92 315 1030280",href:"tel:+923151030280",color:"#8B5CF6"},{icon:R.jsx(vS,{size:15}),label:"GitHub",value:"github.com/saadkhan2211",href:"https://github.com/saadkhan2211",color:"#06b6d4"},{icon:R.jsx(XD,{size:15}),label:"LinkedIn",value:"linkedin.com/in/saadsaifullah031",href:"https://www.linkedin.com/in/saadsaifullah0315",color:"#f59e0b"}].map(({icon:a,label:l,value:c,href:u,color:f})=>R.jsxs(Pe.a,{href:u,target:"_blank",rel:"noopener noreferrer",whileHover:{x:5},className:"card rounded-xl flex items-center gap-4 p-4 group transition-all duration-200",children:[R.jsx("div",{className:"w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0",style:{background:`${f}15`,color:f,border:`1px solid ${f}25`},children:a}),R.jsxs("div",{children:[R.jsx("div",{className:"font-body text-xs font-semibold text-muted uppercase tracking-wider mb-0.5",children:l}),R.jsx("div",{className:"font-body text-sm font-medium text-text group-hover:text-primary2 transition-colors",children:c})]})]},l))})]}),R.jsx(Pe.div,{initial:{opacity:0,x:24},animate:e?{opacity:1,x:0}:{},transition:{duration:.65,delay:.3},children:R.jsx("div",{className:"card rounded-2xl p-7",children:R.jsxs("form",{onSubmit:o,className:"space-y-5",children:[[{name:"name",label:"Your Name",type:"text",placeholder:"John Doe"},{name:"email",label:"Email Address",type:"email",placeholder:"john@example.com"}].map(({name:a,label:l,type:c,placeholder:u})=>R.jsxs("div",{children:[R.jsx("label",{className:"block font-body text-xs font-semibold text-muted uppercase tracking-wider mb-2",children:l}),R.jsx("input",{type:c,required:!0,placeholder:u,value:n[a],onChange:f=>i(d=>({...d,[a]:f.target.value})),className:"sl-input"})]},a)),R.jsxs("div",{children:[R.jsx("label",{className:"block font-body text-xs font-semibold text-muted uppercase tracking-wider mb-2",children:"Message"}),R.jsx("textarea",{required:!0,rows:5,placeholder:"Tell me about your project...",value:n.message,onChange:a=>i(l=>({...l,message:a.target.value})),className:"sl-input resize-none"})]}),R.jsx(Pe.button,{type:"submit",whileHover:{scale:1.02,boxShadow:"0 0 28px rgba(96,53,242,0.45)"},whileTap:{scale:.97},className:"btn-primary w-full py-3.5 text-sm flex items-center justify-center gap-2",children:r?"✓ Message Sent!":R.jsxs(R.Fragment,{children:[R.jsx($D,{size:15})," Send Message"]})})]})})})]})]})]})}function e3(){return R.jsxs("div",{className:"noise relative min-h-screen",children:[R.jsx(wD,{}),R.jsx(AD,{}),R.jsx("div",{className:"scanline"}),R.jsxs(Pe.div,{initial:{opacity:1},animate:{opacity:0,pointerEvents:"none"},transition:{duration:.8,delay:.55},className:"fixed inset-0 z-[9996] bg-bg flex flex-col items-center justify-center gap-5",children:[R.jsx(Pe.div,{initial:{scale:.75,opacity:0},animate:{scale:1,opacity:1},transition:{duration:.45},className:"font-display font-black text-4xl text-gradient",children:"saad.dev()"}),R.jsx(Pe.div,{initial:{width:0},animate:{width:120},transition:{duration:.5,delay:.2},className:"h-px",style:{background:"linear-gradient(90deg, transparent, #6035F2, transparent)"}}),R.jsx(Pe.p,{initial:{opacity:0},animate:{opacity:1},transition:{delay:.35},className:"font-body text-xs text-muted font-medium tracking-widest",children:"Loading..."})]}),R.jsx(CD,{}),R.jsxs("main",{children:[R.jsx(DD,{}),R.jsx(UD,{}),R.jsx(FD,{}),R.jsx(BD,{}),R.jsx(QD,{}),R.jsx(JD,{})]}),R.jsx(bD,{})]})}hx(document.getElementById("root")).render(R.jsx(J.StrictMode,{children:R.jsx(e3,{})}));
