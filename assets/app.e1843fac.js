var gl=Object.defineProperty,xl=Object.defineProperties;var vl=Object.getOwnPropertyDescriptors;var Mo=Object.getOwnPropertySymbols;var kl=Object.prototype.hasOwnProperty,ml=Object.prototype.propertyIsEnumerable;var $o=(t,e,r)=>e in t?gl(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,Rt=(t,e)=>{for(var r in e||(e={}))kl.call(e,r)&&$o(t,r,e[r]);if(Mo)for(var r of Mo(e))ml.call(e,r)&&$o(t,r,e[r]);return t},Sn=(t,e)=>xl(t,vl(e));const _r={},fl="modulepreload",Co={},Ml="/",nt=function(e,r){return!r||r.length===0?e():Promise.all(r.map(l=>{if(l=`${Ml}${l}`,l in Co)return;Co[l]=!0;const h=l.endsWith(".css"),c=h?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${c}`))return;const d=document.createElement("link");if(d.rel=h?"stylesheet":fl,h||(d.as="script",d.crossOrigin=""),d.href=l,document.head.appendChild(d),h)return new Promise((w,p)=>{d.addEventListener("load",w),d.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${l}`)))})})).then(()=>e())},$l={"v-8daa1a0e":()=>nt(()=>import("./index.html.6f990641.js"),[]).then(({data:t})=>t),"v-6bb1ef33":()=>nt(()=>import("./guide.html.b0857374.js"),[]).then(({data:t})=>t),"v-953ed77e":()=>nt(()=>import("./052901.html.4830b7fe.js"),[]).then(({data:t})=>t),"v-7caf0363":()=>nt(()=>import("./060610.html.ffa9843b.js"),[]).then(({data:t})=>t),"v-928deb06":()=>nt(()=>import("./061518.html.3a59455e.js"),[]).then(({data:t})=>t),"v-3706649a":()=>nt(()=>import("./404.html.0f07aaf0.js"),[]).then(({data:t})=>t),"v-d45343be":()=>nt(()=>import("./index.html.4d19e581.js"),[]).then(({data:t})=>t),"v-16736bd8":()=>nt(()=>import("./index.html.9bb638a2.js"),[]).then(({data:t})=>t),"v-57149f4a":()=>nt(()=>import("./index.html.8804981e.js"),[]).then(({data:t})=>t),"v-12127d6d":()=>nt(()=>import("./index.html.cf91f0ec.js"),[]).then(({data:t})=>t),"v-6f552904":()=>nt(()=>import("./index.html.8bb5be3a.js"),[]).then(({data:t})=>t),"v-5f0134f3":()=>nt(()=>import("./index.html.2311a199.js"),[]).then(({data:t})=>t),"v-9f92a452":()=>nt(()=>import("./index.html.419840af.js"),[]).then(({data:t})=>t),"v-420fa9d1":()=>nt(()=>import("./index.html.18dbd833.js"),[]).then(({data:t})=>t),"v-01560935":()=>nt(()=>import("./index.html.0e4d7af9.js"),[]).then(({data:t})=>t),"v-03d52fd3":()=>nt(()=>import("./index.html.d1b38fd7.js"),[]).then(({data:t})=>t)};function Gr(t,e){const r=Object.create(null),l=t.split(",");for(let h=0;h<l.length;h++)r[l[h]]=!0;return e?h=>!!r[h.toLowerCase()]:h=>!!r[h]}const Cl="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Bl=Gr(Cl);function Ss(t){return!!t||t===""}function Ee(t){if(Z(t)){const e={};for(let r=0;r<t.length;r++){const l=t[r],h=wt(l)?jl(l):Ee(l);if(h)for(const c in h)e[c]=h[c]}return e}else{if(wt(t))return t;if(Bt(t))return t}}const bl=/;(?![^(]*\))/g,yl=/:(.+)/;function jl(t){const e={};return t.split(bl).forEach(r=>{if(r){const l=r.split(yl);l.length>1&&(e[l[0].trim()]=l[1].trim())}}),e}function Ye(t){let e="";if(wt(t))e=t;else if(Z(t))for(let r=0;r<t.length;r++){const l=Ye(t[r]);l&&(e+=l+" ")}else if(Bt(t))for(const r in t)t[r]&&(e+=r+" ");return e.trim()}const As=t=>wt(t)?t:t==null?"":Z(t)||Bt(t)&&(t.toString===Es||!J(t.toString))?JSON.stringify(t,Ps,2):String(t),Ps=(t,e)=>e&&e.__v_isRef?Ps(t,e.value):Ue(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((r,[l,h])=>(r[`${l} =>`]=h,r),{})}:Vs(e)?{[`Set(${e.size})`]:[...e.values()]}:Bt(e)&&!Z(e)&&!Ts(e)?String(e):e,vt={},Ne=[],te=()=>{},Ll=()=>!1,Sl=/^on[^a-z]/,bn=t=>Sl.test(t),Kr=t=>t.startsWith("onUpdate:"),St=Object.assign,Xr=(t,e)=>{const r=t.indexOf(e);r>-1&&t.splice(r,1)},Al=Object.prototype.hasOwnProperty,lt=(t,e)=>Al.call(t,e),Z=Array.isArray,Ue=t=>Jn(t)==="[object Map]",Vs=t=>Jn(t)==="[object Set]",J=t=>typeof t=="function",wt=t=>typeof t=="string",Yr=t=>typeof t=="symbol",Bt=t=>t!==null&&typeof t=="object",Hs=t=>Bt(t)&&J(t.then)&&J(t.catch),Es=Object.prototype.toString,Jn=t=>Es.call(t),Pl=t=>Jn(t).slice(8,-1),Ts=t=>Jn(t)==="[object Object]",Jr=t=>wt(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,wn=Gr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Qn=t=>{const e=Object.create(null);return r=>e[r]||(e[r]=t(r))},Vl=/-(\w)/g,ne=Qn(t=>t.replace(Vl,(e,r)=>r?r.toUpperCase():"")),Hl=/\B([A-Z])/g,Je=Qn(t=>t.replace(Hl,"-$1").toLowerCase()),tr=Qn(t=>t.charAt(0).toUpperCase()+t.slice(1)),xr=Qn(t=>t?`on${tr(t)}`:""),kn=(t,e)=>!Object.is(t,e),Dn=(t,e)=>{for(let r=0;r<t.length;r++)t[r](e)},On=(t,e,r)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:r})},In=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Bo;const El=()=>Bo||(Bo=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let Jt;class Tl{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&Jt&&(this.parent=Jt,this.index=(Jt.scopes||(Jt.scopes=[])).push(this)-1)}run(e){if(this.active){const r=Jt;try{return Jt=this,e()}finally{Jt=r}}}on(){Jt=this}off(){Jt=this.parent}stop(e){if(this.active){let r,l;for(r=0,l=this.effects.length;r<l;r++)this.effects[r].stop();for(r=0,l=this.cleanups.length;r<l;r++)this.cleanups[r]();if(this.scopes)for(r=0,l=this.scopes.length;r<l;r++)this.scopes[r].stop(!0);if(this.parent&&!e){const h=this.parent.scopes.pop();h&&h!==this&&(this.parent.scopes[this.index]=h,h.index=this.index)}this.active=!1}}}function Rl(t,e=Jt){e&&e.active&&e.effects.push(t)}const Qr=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Rs=t=>(t.w&Me)>0,Fs=t=>(t.n&Me)>0,Fl=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Me},Dl=t=>{const{deps:e}=t;if(e.length){let r=0;for(let l=0;l<e.length;l++){const h=e[l];Rs(h)&&!Fs(h)?h.delete(t):e[r++]=h,h.w&=~Me,h.n&=~Me}e.length=r}},Lr=new WeakMap;let cn=0,Me=1;const Sr=30;let Gt;const Pe=Symbol(""),Ar=Symbol("");class to{constructor(e,r=null,l){this.fn=e,this.scheduler=r,this.active=!0,this.deps=[],this.parent=void 0,Rl(this,l)}run(){if(!this.active)return this.fn();let e=Gt,r=me;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Gt,Gt=this,me=!0,Me=1<<++cn,cn<=Sr?Fl(this):bo(this),this.fn()}finally{cn<=Sr&&Dl(this),Me=1<<--cn,Gt=this.parent,me=r,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Gt===this?this.deferStop=!0:this.active&&(bo(this),this.onStop&&this.onStop(),this.active=!1)}}function bo(t){const{deps:e}=t;if(e.length){for(let r=0;r<e.length;r++)e[r].delete(t);e.length=0}}let me=!0;const Ds=[];function Qe(){Ds.push(me),me=!1}function tn(){const t=Ds.pop();me=t===void 0?!0:t}function zt(t,e,r){if(me&&Gt){let l=Lr.get(t);l||Lr.set(t,l=new Map);let h=l.get(r);h||l.set(r,h=Qr()),zs(h)}}function zs(t,e){let r=!1;cn<=Sr?Fs(t)||(t.n|=Me,r=!Rs(t)):r=!t.has(Gt),r&&(t.add(Gt),Gt.deps.push(t))}function he(t,e,r,l,h,c){const d=Lr.get(t);if(!d)return;let w=[];if(e==="clear")w=[...d.values()];else if(r==="length"&&Z(t))d.forEach((p,u)=>{(u==="length"||u>=l)&&w.push(p)});else switch(r!==void 0&&w.push(d.get(r)),e){case"add":Z(t)?Jr(r)&&w.push(d.get("length")):(w.push(d.get(Pe)),Ue(t)&&w.push(d.get(Ar)));break;case"delete":Z(t)||(w.push(d.get(Pe)),Ue(t)&&w.push(d.get(Ar)));break;case"set":Ue(t)&&w.push(d.get(Pe));break}if(w.length===1)w[0]&&Pr(w[0]);else{const p=[];for(const u of w)u&&p.push(...u);Pr(Qr(p))}}function Pr(t,e){const r=Z(t)?t:[...t];for(const l of r)l.computed&&yo(l);for(const l of r)l.computed||yo(l)}function yo(t,e){(t!==Gt||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const zl=Gr("__proto__,__v_isRef,__isVue"),Os=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Yr)),Ol=eo(),Il=eo(!1,!0),Nl=eo(!0),jo=Ul();function Ul(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...r){const l=dt(this);for(let c=0,d=this.length;c<d;c++)zt(l,"get",c+"");const h=l[e](...r);return h===-1||h===!1?l[e](...r.map(dt)):h}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...r){Qe();const l=dt(this)[e].apply(this,r);return tn(),l}}),t}function eo(t=!1,e=!1){return function(l,h,c){if(h==="__v_isReactive")return!t;if(h==="__v_isReadonly")return t;if(h==="__v_isShallow")return e;if(h==="__v_raw"&&c===(t?e?ia:Ws:e?qs:Us).get(l))return l;const d=Z(l);if(!t&&d&&lt(jo,h))return Reflect.get(jo,h,c);const w=Reflect.get(l,h,c);return(Yr(h)?Os.has(h):zl(h))||(t||zt(l,"get",h),e)?w:jt(w)?d&&Jr(h)?w:w.value:Bt(w)?t?oo(w):en(w):w}}const ql=Is(),Wl=Is(!0);function Is(t=!1){return function(r,l,h,c){let d=r[l];if(mn(d)&&jt(d)&&!jt(h))return!1;if(!t&&!mn(h)&&(Vr(h)||(h=dt(h),d=dt(d)),!Z(r)&&jt(d)&&!jt(h)))return d.value=h,!0;const w=Z(r)&&Jr(l)?Number(l)<r.length:lt(r,l),p=Reflect.set(r,l,h,c);return r===dt(c)&&(w?kn(h,d)&&he(r,"set",l,h):he(r,"add",l,h)),p}}function Zl(t,e){const r=lt(t,e);t[e];const l=Reflect.deleteProperty(t,e);return l&&r&&he(t,"delete",e,void 0),l}function Gl(t,e){const r=Reflect.has(t,e);return(!Yr(e)||!Os.has(e))&&zt(t,"has",e),r}function Kl(t){return zt(t,"iterate",Z(t)?"length":Pe),Reflect.ownKeys(t)}const Ns={get:Ol,set:ql,deleteProperty:Zl,has:Gl,ownKeys:Kl},Xl={get:Nl,set(t,e){return!0},deleteProperty(t,e){return!0}},Yl=St({},Ns,{get:Il,set:Wl}),no=t=>t,er=t=>Reflect.getPrototypeOf(t);function An(t,e,r=!1,l=!1){t=t.__v_raw;const h=dt(t),c=dt(e);r||(e!==c&&zt(h,"get",e),zt(h,"get",c));const{has:d}=er(h),w=l?no:r?io:fn;if(d.call(h,e))return w(t.get(e));if(d.call(h,c))return w(t.get(c));t!==h&&t.get(e)}function Pn(t,e=!1){const r=this.__v_raw,l=dt(r),h=dt(t);return e||(t!==h&&zt(l,"has",t),zt(l,"has",h)),t===h?r.has(t):r.has(t)||r.has(h)}function Vn(t,e=!1){return t=t.__v_raw,!e&&zt(dt(t),"iterate",Pe),Reflect.get(t,"size",t)}function Lo(t){t=dt(t);const e=dt(this);return er(e).has.call(e,t)||(e.add(t),he(e,"add",t,t)),this}function So(t,e){e=dt(e);const r=dt(this),{has:l,get:h}=er(r);let c=l.call(r,t);c||(t=dt(t),c=l.call(r,t));const d=h.call(r,t);return r.set(t,e),c?kn(e,d)&&he(r,"set",t,e):he(r,"add",t,e),this}function Ao(t){const e=dt(this),{has:r,get:l}=er(e);let h=r.call(e,t);h||(t=dt(t),h=r.call(e,t)),l&&l.call(e,t);const c=e.delete(t);return h&&he(e,"delete",t,void 0),c}function Po(){const t=dt(this),e=t.size!==0,r=t.clear();return e&&he(t,"clear",void 0,void 0),r}function Hn(t,e){return function(l,h){const c=this,d=c.__v_raw,w=dt(d),p=e?no:t?io:fn;return!t&&zt(w,"iterate",Pe),d.forEach((u,g)=>l.call(h,p(u),p(g),c))}}function En(t,e,r){return function(...l){const h=this.__v_raw,c=dt(h),d=Ue(c),w=t==="entries"||t===Symbol.iterator&&d,p=t==="keys"&&d,u=h[t](...l),g=r?no:e?io:fn;return!e&&zt(c,"iterate",p?Ar:Pe),{next(){const{value:k,done:x}=u.next();return x?{value:k,done:x}:{value:w?[g(k[0]),g(k[1])]:g(k),done:x}},[Symbol.iterator](){return this}}}}function de(t){return function(...e){return t==="delete"?!1:this}}function Jl(){const t={get(c){return An(this,c)},get size(){return Vn(this)},has:Pn,add:Lo,set:So,delete:Ao,clear:Po,forEach:Hn(!1,!1)},e={get(c){return An(this,c,!1,!0)},get size(){return Vn(this)},has:Pn,add:Lo,set:So,delete:Ao,clear:Po,forEach:Hn(!1,!0)},r={get(c){return An(this,c,!0)},get size(){return Vn(this,!0)},has(c){return Pn.call(this,c,!0)},add:de("add"),set:de("set"),delete:de("delete"),clear:de("clear"),forEach:Hn(!0,!1)},l={get(c){return An(this,c,!0,!0)},get size(){return Vn(this,!0)},has(c){return Pn.call(this,c,!0)},add:de("add"),set:de("set"),delete:de("delete"),clear:de("clear"),forEach:Hn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(c=>{t[c]=En(c,!1,!1),r[c]=En(c,!0,!1),e[c]=En(c,!1,!0),l[c]=En(c,!0,!0)}),[t,r,e,l]}const[Ql,ta,ea,na]=Jl();function ro(t,e){const r=e?t?na:ea:t?ta:Ql;return(l,h,c)=>h==="__v_isReactive"?!t:h==="__v_isReadonly"?t:h==="__v_raw"?l:Reflect.get(lt(r,h)&&h in l?r:l,h,c)}const ra={get:ro(!1,!1)},oa={get:ro(!1,!0)},sa={get:ro(!0,!1)},Us=new WeakMap,qs=new WeakMap,Ws=new WeakMap,ia=new WeakMap;function la(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function aa(t){return t.__v_skip||!Object.isExtensible(t)?0:la(Pl(t))}function en(t){return mn(t)?t:so(t,!1,Ns,ra,Us)}function ha(t){return so(t,!1,Yl,oa,qs)}function oo(t){return so(t,!0,Xl,sa,Ws)}function so(t,e,r,l,h){if(!Bt(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const c=h.get(t);if(c)return c;const d=aa(t);if(d===0)return t;const w=new Proxy(t,d===2?l:r);return h.set(t,w),w}function qe(t){return mn(t)?qe(t.__v_raw):!!(t&&t.__v_isReactive)}function mn(t){return!!(t&&t.__v_isReadonly)}function Vr(t){return!!(t&&t.__v_isShallow)}function Zs(t){return qe(t)||mn(t)}function dt(t){const e=t&&t.__v_raw;return e?dt(e):t}function Gs(t){return On(t,"__v_skip",!0),t}const fn=t=>Bt(t)?en(t):t,io=t=>Bt(t)?oo(t):t;function Ks(t){me&&Gt&&(t=dt(t),zs(t.dep||(t.dep=Qr())))}function Xs(t,e){t=dt(t),t.dep&&Pr(t.dep)}function jt(t){return!!(t&&t.__v_isRef===!0)}function yt(t){return Ys(t,!1)}function ca(t){return Ys(t,!0)}function Ys(t,e){return jt(t)?t:new da(t,e)}class da{constructor(e,r){this.__v_isShallow=r,this.dep=void 0,this.__v_isRef=!0,this._rawValue=r?e:dt(e),this._value=r?e:fn(e)}get value(){return Ks(this),this._value}set value(e){e=this.__v_isShallow?e:dt(e),kn(e,this._rawValue)&&(this._rawValue=e,this._value=this.__v_isShallow?e:fn(e),Xs(this))}}function Wt(t){return jt(t)?t.value:t}const wa={get:(t,e,r)=>Wt(Reflect.get(t,e,r)),set:(t,e,r,l)=>{const h=t[e];return jt(h)&&!jt(r)?(h.value=r,!0):Reflect.set(t,e,r,l)}};function Js(t){return qe(t)?t:new Proxy(t,wa)}function yn(t){const e=Z(t)?new Array(t.length):{};for(const r in t)e[r]=ua(t,r);return e}class pa{constructor(e,r,l){this._object=e,this._key=r,this._defaultValue=l,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}}function ua(t,e,r){const l=t[e];return jt(l)?l:new pa(t,e,r)}class _a{constructor(e,r,l,h){this._setter=r,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new to(e,()=>{this._dirty||(this._dirty=!0,Xs(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!h,this.__v_isReadonly=l}get value(){const e=dt(this);return Ks(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function ga(t,e,r=!1){let l,h;const c=J(t);return c?(l=t,h=te):(l=t.get,h=t.set),new _a(l,h,c||!h,r)}function fe(t,e,r,l){let h;try{h=l?t(...l):t()}catch(c){jn(c,e,r)}return h}function Ut(t,e,r,l){if(J(t)){const c=fe(t,e,r,l);return c&&Hs(c)&&c.catch(d=>{jn(d,e,r)}),c}const h=[];for(let c=0;c<t.length;c++)h.push(Ut(t[c],e,r,l));return h}function jn(t,e,r,l){if(e&&e.vnode,e){let h=e.parent;const c=e.proxy,d=r;for(;h;){const p=h.ec;if(p){for(let u=0;u<p.length;u++)if(p[u](t,c,d)===!1)return}h=h.parent}const w=e.appContext.config.errorHandler;if(w){fe(w,null,10,[t,c,d]);return}}xa(t)}function xa(t,e,r,l){console.error(t)}let Nn=!1,Hr=!1;const Ft=[];let le=0;const pn=[];let dn=null,De=0;const un=[];let ge=null,ze=0;const Qs=Promise.resolve();let lo=null,Er=null;function ti(t){const e=lo||Qs;return t?e.then(this?t.bind(this):t):e}function va(t){let e=le+1,r=Ft.length;for(;e<r;){const l=e+r>>>1;Mn(Ft[l])<t?e=l+1:r=l}return e}function ao(t){(!Ft.length||!Ft.includes(t,Nn&&t.allowRecurse?le+1:le))&&t!==Er&&(t.id==null?Ft.push(t):Ft.splice(va(t.id),0,t),ei())}function ei(){!Nn&&!Hr&&(Hr=!0,lo=Qs.then(ri))}function ka(t){const e=Ft.indexOf(t);e>le&&Ft.splice(e,1)}function ni(t,e,r,l){Z(t)?r.push(...t):(!e||!e.includes(t,t.allowRecurse?l+1:l))&&r.push(t),ei()}function ma(t){ni(t,dn,pn,De)}function fa(t){ni(t,ge,un,ze)}function nr(t,e=null){if(pn.length){for(Er=e,dn=[...new Set(pn)],pn.length=0,De=0;De<dn.length;De++)dn[De]();dn=null,De=0,Er=null,nr(t,e)}}function Un(t){if(nr(),un.length){const e=[...new Set(un)];if(un.length=0,ge){ge.push(...e);return}for(ge=e,ge.sort((r,l)=>Mn(r)-Mn(l)),ze=0;ze<ge.length;ze++)ge[ze]();ge=null,ze=0}}const Mn=t=>t.id==null?1/0:t.id;function ri(t){Hr=!1,Nn=!0,nr(t),Ft.sort((r,l)=>Mn(r)-Mn(l));const e=te;try{for(le=0;le<Ft.length;le++){const r=Ft[le];r&&r.active!==!1&&fe(r,null,14)}}finally{le=0,Ft.length=0,Un(),Nn=!1,lo=null,(Ft.length||pn.length||un.length)&&ri(t)}}function Ma(t,e,...r){if(t.isUnmounted)return;const l=t.vnode.props||vt;let h=r;const c=e.startsWith("update:"),d=c&&e.slice(7);if(d&&d in l){const g=`${d==="modelValue"?"model":d}Modifiers`,{number:k,trim:x}=l[g]||vt;x&&(h=r.map($=>$.trim())),k&&(h=r.map(In))}let w,p=l[w=xr(e)]||l[w=xr(ne(e))];!p&&c&&(p=l[w=xr(Je(e))]),p&&Ut(p,t,6,h);const u=l[w+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[w])return;t.emitted[w]=!0,Ut(u,t,6,h)}}function oi(t,e,r=!1){const l=e.emitsCache,h=l.get(t);if(h!==void 0)return h;const c=t.emits;let d={},w=!1;if(!J(t)){const p=u=>{const g=oi(u,e,!0);g&&(w=!0,St(d,g))};!r&&e.mixins.length&&e.mixins.forEach(p),t.extends&&p(t.extends),t.mixins&&t.mixins.forEach(p)}return!c&&!w?(l.set(t,null),null):(Z(c)?c.forEach(p=>d[p]=null):St(d,c),l.set(t,d),d)}function rr(t,e){return!t||!bn(e)?!1:(e=e.slice(2).replace(/Once$/,""),lt(t,e[0].toLowerCase()+e.slice(1))||lt(t,Je(e))||lt(t,e))}let At=null,si=null;function qn(t){const e=At;return At=t,si=t&&t.type.__scopeId||null,e}function $a(t,e=At,r){if(!e||t._n)return t;const l=(...h)=>{l._d&&No(-1);const c=qn(e),d=t(...h);return qn(c),l._d&&No(1),d};return l._n=!0,l._c=!0,l._d=!0,l}function vr(t){const{type:e,vnode:r,proxy:l,withProxy:h,props:c,propsOptions:[d],slots:w,attrs:p,emit:u,render:g,renderCache:k,data:x,setupState:$,ctx:B,inheritAttrs:E}=t;let P,m;const M=qn(t);try{if(r.shapeFlag&4){const D=h||l;P=Zt(g.call(D,D,k,c,$,x,B)),m=p}else{const D=e;P=Zt(D.length>1?D(c,{attrs:p,slots:w,emit:u}):D(c,null)),m=e.props?p:Ca(p)}}catch(D){gn.length=0,jn(D,t,1),P=Mt(Dt)}let S=P;if(m&&E!==!1){const D=Object.keys(m),{shapeFlag:W}=S;D.length&&W&7&&(d&&D.some(Kr)&&(m=Ba(m,d)),S=$e(S,m))}return r.dirs&&(S=$e(S),S.dirs=S.dirs?S.dirs.concat(r.dirs):r.dirs),r.transition&&(S.transition=r.transition),P=S,qn(M),P}const Ca=t=>{let e;for(const r in t)(r==="class"||r==="style"||bn(r))&&((e||(e={}))[r]=t[r]);return e},Ba=(t,e)=>{const r={};for(const l in t)(!Kr(l)||!(l.slice(9)in e))&&(r[l]=t[l]);return r};function ba(t,e,r){const{props:l,children:h,component:c}=t,{props:d,children:w,patchFlag:p}=e,u=c.emitsOptions;if(e.dirs||e.transition)return!0;if(r&&p>=0){if(p&1024)return!0;if(p&16)return l?Vo(l,d,u):!!d;if(p&8){const g=e.dynamicProps;for(let k=0;k<g.length;k++){const x=g[k];if(d[x]!==l[x]&&!rr(u,x))return!0}}}else return(h||w)&&(!w||!w.$stable)?!0:l===d?!1:l?d?Vo(l,d,u):!0:!!d;return!1}function Vo(t,e,r){const l=Object.keys(e);if(l.length!==Object.keys(t).length)return!0;for(let h=0;h<l.length;h++){const c=l[h];if(e[c]!==t[c]&&!rr(r,c))return!0}return!1}function ya({vnode:t,parent:e},r){for(;e&&e.subTree===t;)(t=e.vnode).el=r,e=e.parent}const ja=t=>t.__isSuspense;function ii(t,e){e&&e.pendingBranch?Z(t)?e.effects.push(...t):e.effects.push(t):fa(t)}function ee(t,e){if(bt){let r=bt.provides;const l=bt.parent&&bt.parent.provides;l===r&&(r=bt.provides=Object.create(l)),r[t]=e}}function Ct(t,e,r=!1){const l=bt||At;if(l){const h=l.parent==null?l.vnode.appContext&&l.vnode.appContext.provides:l.parent.provides;if(h&&t in h)return h[t];if(arguments.length>1)return r&&J(e)?e.call(l.proxy):e}}const Ho={};function Ve(t,e,r){return li(t,e,r)}function li(t,e,{immediate:r,deep:l,flush:h,onTrack:c,onTrigger:d}=vt){const w=bt;let p,u=!1,g=!1;if(jt(t)?(p=()=>t.value,u=Vr(t)):qe(t)?(p=()=>t,l=!0):Z(t)?(g=!0,u=t.some(m=>qe(m)||Vr(m)),p=()=>t.map(m=>{if(jt(m))return m.value;if(qe(m))return Ae(m);if(J(m))return fe(m,w,2)})):J(t)?e?p=()=>fe(t,w,2):p=()=>{if(!(w&&w.isUnmounted))return k&&k(),Ut(t,w,3,[x])}:p=te,e&&l){const m=p;p=()=>Ae(m())}let k,x=m=>{k=P.onStop=()=>{fe(m,w,4)}};if(Ge)return x=te,e?r&&Ut(e,w,3,[p(),g?[]:void 0,x]):p(),te;let $=g?[]:Ho;const B=()=>{if(!!P.active)if(e){const m=P.run();(l||u||(g?m.some((M,S)=>kn(M,$[S])):kn(m,$)))&&(k&&k(),Ut(e,w,3,[m,$===Ho?void 0:$,x]),$=m)}else P.run()};B.allowRecurse=!!e;let E;h==="sync"?E=B:h==="post"?E=()=>Vt(B,w&&w.suspense):E=()=>ma(B);const P=new to(p,E);return e?r?B():$=P.run():h==="post"?Vt(P.run.bind(P),w&&w.suspense):P.run(),()=>{P.stop(),w&&w.scope&&Xr(w.scope.effects,P)}}function La(t,e,r){const l=this.proxy,h=wt(t)?t.includes(".")?ai(l,t):()=>l[t]:t.bind(l,l);let c;J(e)?c=e:(c=e.handler,r=e);const d=bt;Ze(this);const w=li(h,c.bind(l),r);return d?Ze(d):He(),w}function ai(t,e){const r=e.split(".");return()=>{let l=t;for(let h=0;h<r.length&&l;h++)l=l[r[h]];return l}}function Ae(t,e){if(!Bt(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),jt(t))Ae(t.value,e);else if(Z(t))for(let r=0;r<t.length;r++)Ae(t[r],e);else if(Vs(t)||Ue(t))t.forEach(r=>{Ae(r,e)});else if(Ts(t))for(const r in t)Ae(t[r],e);return t}function Sa(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return re(()=>{t.isMounted=!0}),sr(()=>{t.isUnmounting=!0}),t}const It=[Function,Array],Aa={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:It,onEnter:It,onAfterEnter:It,onEnterCancelled:It,onBeforeLeave:It,onLeave:It,onAfterLeave:It,onLeaveCancelled:It,onBeforeAppear:It,onAppear:It,onAfterAppear:It,onAppearCancelled:It},setup(t,{slots:e}){const r=ph(),l=Sa();let h;return()=>{const c=e.default&&di(e.default(),!0);if(!c||!c.length)return;let d=c[0];if(c.length>1){for(const E of c)if(E.type!==Dt){d=E;break}}const w=dt(t),{mode:p}=w;if(l.isLeaving)return kr(d);const u=Eo(d);if(!u)return kr(d);const g=Tr(u,w,l,r);Rr(u,g);const k=r.subTree,x=k&&Eo(k);let $=!1;const{getTransitionKey:B}=u.type;if(B){const E=B();h===void 0?h=E:E!==h&&(h=E,$=!0)}if(x&&x.type!==Dt&&(!Le(u,x)||$)){const E=Tr(x,w,l,r);if(Rr(x,E),p==="out-in")return l.isLeaving=!0,E.afterLeave=()=>{l.isLeaving=!1,r.update()},kr(d);p==="in-out"&&u.type!==Dt&&(E.delayLeave=(P,m,M)=>{const S=ci(l,x);S[String(x.key)]=x,P._leaveCb=()=>{m(),P._leaveCb=void 0,delete g.delayedLeave},g.delayedLeave=M})}return d}}},hi=Aa;function ci(t,e){const{leavingVNodes:r}=t;let l=r.get(e.type);return l||(l=Object.create(null),r.set(e.type,l)),l}function Tr(t,e,r,l){const{appear:h,mode:c,persisted:d=!1,onBeforeEnter:w,onEnter:p,onAfterEnter:u,onEnterCancelled:g,onBeforeLeave:k,onLeave:x,onAfterLeave:$,onLeaveCancelled:B,onBeforeAppear:E,onAppear:P,onAfterAppear:m,onAppearCancelled:M}=e,S=String(t.key),D=ci(r,t),W=(R,G)=>{R&&Ut(R,l,9,G)},Y=(R,G)=>{const K=G[1];W(R,G),Z(R)?R.every(tt=>tt.length<=1)&&K():R.length<=1&&K()},Q={mode:c,persisted:d,beforeEnter(R){let G=w;if(!r.isMounted)if(h)G=E||w;else return;R._leaveCb&&R._leaveCb(!0);const K=D[S];K&&Le(t,K)&&K.el._leaveCb&&K.el._leaveCb(),W(G,[R])},enter(R){let G=p,K=u,tt=g;if(!r.isMounted)if(h)G=P||p,K=m||u,tt=M||g;else return;let F=!1;const ot=R._enterCb=I=>{F||(F=!0,I?W(tt,[R]):W(K,[R]),Q.delayedLeave&&Q.delayedLeave(),R._enterCb=void 0)};G?Y(G,[R,ot]):ot()},leave(R,G){const K=String(t.key);if(R._enterCb&&R._enterCb(!0),r.isUnmounting)return G();W(k,[R]);let tt=!1;const F=R._leaveCb=ot=>{tt||(tt=!0,G(),ot?W(B,[R]):W($,[R]),R._leaveCb=void 0,D[K]===t&&delete D[K])};D[K]=t,x?Y(x,[R,F]):F()},clone(R){return Tr(R,e,r,l)}};return Q}function kr(t){if(Ln(t))return t=$e(t),t.children=null,t}function Eo(t){return Ln(t)?t.children?t.children[0]:void 0:t}function Rr(t,e){t.shapeFlag&6&&t.component?Rr(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function di(t,e=!1,r){let l=[],h=0;for(let c=0;c<t.length;c++){let d=t[c];const w=r==null?d.key:String(r)+String(d.key!=null?d.key:c);d.type===Ht?(d.patchFlag&128&&h++,l=l.concat(di(d.children,e,w))):(e||d.type!==Dt)&&l.push(w!=null?$e(d,{key:w}):d)}if(h>1)for(let c=0;c<l.length;c++)l[c].patchFlag=-2;return l}function o(t){return J(t)?{setup:t,name:t.name}:t}const We=t=>!!t.type.__asyncLoader;function $t(t){J(t)&&(t={loader:t});const{loader:e,loadingComponent:r,errorComponent:l,delay:h=200,timeout:c,suspensible:d=!0,onError:w}=t;let p=null,u,g=0;const k=()=>(g++,p=null,x()),x=()=>{let $;return p||($=p=e().catch(B=>{if(B=B instanceof Error?B:new Error(String(B)),w)return new Promise((E,P)=>{w(B,()=>E(k()),()=>P(B),g+1)});throw B}).then(B=>$!==p&&p?p:(B&&(B.__esModule||B[Symbol.toStringTag]==="Module")&&(B=B.default),u=B,B)))};return o({name:"AsyncComponentWrapper",__asyncLoader:x,get __asyncResolved(){return u},setup(){const $=bt;if(u)return()=>mr(u,$);const B=M=>{p=null,jn(M,$,13)};if(d&&$.suspense||Ge)return x().then(M=>()=>mr(M,$)).catch(M=>(B(M),()=>l?Mt(l,{error:M}):null));const E=yt(!1),P=yt(),m=yt(!!h);return h&&setTimeout(()=>{m.value=!1},h),c!=null&&setTimeout(()=>{if(!E.value&&!P.value){const M=new Error(`Async component timed out after ${c}ms.`);B(M),P.value=M}},c),x().then(()=>{E.value=!0,$.parent&&Ln($.parent.vnode)&&ao($.parent.update)}).catch(M=>{B(M),P.value=M}),()=>{if(E.value&&u)return mr(u,$);if(P.value&&l)return Mt(l,{error:P.value});if(r&&!m.value)return Mt(r)}}})}function mr(t,{vnode:{ref:e,props:r,children:l,shapeFlag:h},parent:c}){const d=Mt(t,r,l);return d.ref=e,d}const Ln=t=>t.type.__isKeepAlive;function Pa(t,e){wi(t,"a",e)}function Va(t,e){wi(t,"da",e)}function wi(t,e,r=bt){const l=t.__wdc||(t.__wdc=()=>{let h=r;for(;h;){if(h.isDeactivated)return;h=h.parent}return t()});if(or(e,l,r),r){let h=r.parent;for(;h&&h.parent;)Ln(h.parent.vnode)&&Ha(l,e,r,h),h=h.parent}}function Ha(t,e,r,l){const h=or(e,t,l,!0);pi(()=>{Xr(l[e],h)},r)}function or(t,e,r=bt,l=!1){if(r){const h=r[t]||(r[t]=[]),c=e.__weh||(e.__weh=(...d)=>{if(r.isUnmounted)return;Qe(),Ze(r);const w=Ut(e,r,t,d);return He(),tn(),w});return l?h.unshift(c):h.push(c),c}}const ce=t=>(e,r=bt)=>(!Ge||t==="sp")&&or(t,e,r),Ea=ce("bm"),re=ce("m"),Ta=ce("bu"),Ra=ce("u"),sr=ce("bum"),pi=ce("um"),Fa=ce("sp"),Da=ce("rtg"),za=ce("rtc");function Oa(t,e=bt){or("ec",t,e)}function BYt(t,e){const r=At;if(r===null)return t;const l=cr(r)||r.proxy,h=t.dirs||(t.dirs=[]);for(let c=0;c<e.length;c++){let[d,w,p,u=vt]=e[c];J(d)&&(d={mounted:d,updated:d}),d.deep&&Ae(w),h.push({dir:d,instance:l,value:w,oldValue:void 0,arg:p,modifiers:u})}return t}function Qt(t,e,r,l){const h=t.dirs,c=e&&e.dirs;for(let d=0;d<h.length;d++){const w=h[d];c&&(w.oldValue=c[d].value);let p=w.dir[l];p&&(Qe(),Ut(p,r,8,[t.el,w,t,e]),tn())}}const ho="components";function ui(t,e){return xi(ho,t,!0,e)||t}const _i=Symbol();function gi(t){return wt(t)?xi(ho,t)||t:t||_i}function xi(t,e,r,l=!1){const h=At||bt;if(h){const c=h.type;if(t===ho){const w=vh(c);if(w&&(w===e||w===ne(e)||w===tr(ne(e))))return c}const d=To(h[t]||c[t],e)||To(h.appContext[t],e);return!d&&l?c:d}}function To(t,e){return t&&(t[e]||t[ne(e)]||t[tr(ne(e))])}function bYt(t,e,r,l){let h;const c=r&&r[l];if(Z(t)||wt(t)){h=new Array(t.length);for(let d=0,w=t.length;d<w;d++)h[d]=e(t[d],d,void 0,c&&c[d])}else if(typeof t=="number"){h=new Array(t);for(let d=0;d<t;d++)h[d]=e(d+1,d,void 0,c&&c[d])}else if(Bt(t))if(t[Symbol.iterator])h=Array.from(t,(d,w)=>e(d,w,void 0,c&&c[w]));else{const d=Object.keys(t);h=new Array(d.length);for(let w=0,p=d.length;w<p;w++){const u=d[w];h[w]=e(t[u],u,w,c&&c[w])}}else h=[];return r&&(r[l]=h),h}function ir(t,e,r={},l,h){if(At.isCE||At.parent&&We(At.parent)&&At.parent.isCE)return Mt("slot",e==="default"?null:{name:e},l&&l());let c=t[e];c&&c._c&&(c._d=!1),s();const d=c&&vi(c(r)),w=lr(Ht,{key:r.key||`_${e}`},d||(l?l():[]),d&&t._===1?64:-2);return!h&&w.scopeId&&(w.slotScopeIds=[w.scopeId+"-s"]),c&&c._c&&(c._d=!0),w}function vi(t){return t.some(e=>Kn(e)?!(e.type===Dt||e.type===Ht&&!vi(e.children)):!0)?t:null}const Fr=t=>t?Si(t)?cr(t)||t.proxy:Fr(t.parent):null,Wn=St(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Fr(t.parent),$root:t=>Fr(t.root),$emit:t=>t.emit,$options:t=>mi(t),$forceUpdate:t=>t.f||(t.f=()=>ao(t.update)),$nextTick:t=>t.n||(t.n=ti.bind(t.proxy)),$watch:t=>La.bind(t)}),Ia={get({_:t},e){const{ctx:r,setupState:l,data:h,props:c,accessCache:d,type:w,appContext:p}=t;let u;if(e[0]!=="$"){const $=d[e];if($!==void 0)switch($){case 1:return l[e];case 2:return h[e];case 4:return r[e];case 3:return c[e]}else{if(l!==vt&&lt(l,e))return d[e]=1,l[e];if(h!==vt&&lt(h,e))return d[e]=2,h[e];if((u=t.propsOptions[0])&&lt(u,e))return d[e]=3,c[e];if(r!==vt&&lt(r,e))return d[e]=4,r[e];Dr&&(d[e]=0)}}const g=Wn[e];let k,x;if(g)return e==="$attrs"&&zt(t,"get",e),g(t);if((k=w.__cssModules)&&(k=k[e]))return k;if(r!==vt&&lt(r,e))return d[e]=4,r[e];if(x=p.config.globalProperties,lt(x,e))return x[e]},set({_:t},e,r){const{data:l,setupState:h,ctx:c}=t;return h!==vt&&lt(h,e)?(h[e]=r,!0):l!==vt&&lt(l,e)?(l[e]=r,!0):lt(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(c[e]=r,!0)},has({_:{data:t,setupState:e,accessCache:r,ctx:l,appContext:h,propsOptions:c}},d){let w;return!!r[d]||t!==vt&&lt(t,d)||e!==vt&&lt(e,d)||(w=c[0])&&lt(w,d)||lt(l,d)||lt(Wn,d)||lt(h.config.globalProperties,d)},defineProperty(t,e,r){return r.get!=null?t._.accessCache[e]=0:lt(r,"value")&&this.set(t,e,r.value,null),Reflect.defineProperty(t,e,r)}};let Dr=!0;function Na(t){const e=mi(t),r=t.proxy,l=t.ctx;Dr=!1,e.beforeCreate&&Ro(e.beforeCreate,t,"bc");const{data:h,computed:c,methods:d,watch:w,provide:p,inject:u,created:g,beforeMount:k,mounted:x,beforeUpdate:$,updated:B,activated:E,deactivated:P,beforeDestroy:m,beforeUnmount:M,destroyed:S,unmounted:D,render:W,renderTracked:Y,renderTriggered:Q,errorCaptured:R,serverPrefetch:G,expose:K,inheritAttrs:tt,components:F,directives:ot,filters:I}=e;if(u&&Ua(u,l,null,t.appContext.config.unwrapInjectedRef),d)for(const kt in d){const pt=d[kt];J(pt)&&(l[kt]=pt.bind(r))}if(h){const kt=h.call(r,r);Bt(kt)&&(t.data=en(kt))}if(Dr=!0,c)for(const kt in c){const pt=c[kt],Et=J(pt)?pt.bind(r,r):J(pt.get)?pt.get.bind(r,r):te,Te=!J(pt)&&J(pt.set)?pt.set.bind(r):te,se=it({get:Et,set:Te});Object.defineProperty(l,kt,{enumerable:!0,configurable:!0,get:()=>se.value,set:Xt=>se.value=Xt})}if(w)for(const kt in w)ki(w[kt],l,r,kt);if(p){const kt=J(p)?p.call(r):p;Reflect.ownKeys(kt).forEach(pt=>{ee(pt,kt[pt])})}g&&Ro(g,t,"c");function ct(kt,pt){Z(pt)?pt.forEach(Et=>kt(Et.bind(r))):pt&&kt(pt.bind(r))}if(ct(Ea,k),ct(re,x),ct(Ta,$),ct(Ra,B),ct(Pa,E),ct(Va,P),ct(Oa,R),ct(za,Y),ct(Da,Q),ct(sr,M),ct(pi,D),ct(Fa,G),Z(K))if(K.length){const kt=t.exposed||(t.exposed={});K.forEach(pt=>{Object.defineProperty(kt,pt,{get:()=>r[pt],set:Et=>r[pt]=Et})})}else t.exposed||(t.exposed={});W&&t.render===te&&(t.render=W),tt!=null&&(t.inheritAttrs=tt),F&&(t.components=F),ot&&(t.directives=ot)}function Ua(t,e,r,l=!1){Z(t)&&(t=zr(t));for(const h in t){const c=t[h];let d;Bt(c)?"default"in c?d=Ct(c.from||h,c.default,!0):d=Ct(c.from||h):d=Ct(c),jt(d)&&l?Object.defineProperty(e,h,{enumerable:!0,configurable:!0,get:()=>d.value,set:w=>d.value=w}):e[h]=d}}function Ro(t,e,r){Ut(Z(t)?t.map(l=>l.bind(e.proxy)):t.bind(e.proxy),e,r)}function ki(t,e,r,l){const h=l.includes(".")?ai(r,l):()=>r[l];if(wt(t)){const c=e[t];J(c)&&Ve(h,c)}else if(J(t))Ve(h,t.bind(r));else if(Bt(t))if(Z(t))t.forEach(c=>ki(c,e,r,l));else{const c=J(t.handler)?t.handler.bind(r):e[t.handler];J(c)&&Ve(h,c,t)}}function mi(t){const e=t.type,{mixins:r,extends:l}=e,{mixins:h,optionsCache:c,config:{optionMergeStrategies:d}}=t.appContext,w=c.get(e);let p;return w?p=w:!h.length&&!r&&!l?p=e:(p={},h.length&&h.forEach(u=>Zn(p,u,d,!0)),Zn(p,e,d)),c.set(e,p),p}function Zn(t,e,r,l=!1){const{mixins:h,extends:c}=e;c&&Zn(t,c,r,!0),h&&h.forEach(d=>Zn(t,d,r,!0));for(const d in e)if(!(l&&d==="expose")){const w=qa[d]||r&&r[d];t[d]=w?w(t[d],e[d]):e[d]}return t}const qa={data:Fo,props:ye,emits:ye,methods:ye,computed:ye,beforeCreate:Pt,created:Pt,beforeMount:Pt,mounted:Pt,beforeUpdate:Pt,updated:Pt,beforeDestroy:Pt,beforeUnmount:Pt,destroyed:Pt,unmounted:Pt,activated:Pt,deactivated:Pt,errorCaptured:Pt,serverPrefetch:Pt,components:ye,directives:ye,watch:Za,provide:Fo,inject:Wa};function Fo(t,e){return e?t?function(){return St(J(t)?t.call(this,this):t,J(e)?e.call(this,this):e)}:e:t}function Wa(t,e){return ye(zr(t),zr(e))}function zr(t){if(Z(t)){const e={};for(let r=0;r<t.length;r++)e[t[r]]=t[r];return e}return t}function Pt(t,e){return t?[...new Set([].concat(t,e))]:e}function ye(t,e){return t?St(St(Object.create(null),t),e):e}function Za(t,e){if(!t)return e;if(!e)return t;const r=St(Object.create(null),t);for(const l in e)r[l]=Pt(t[l],e[l]);return r}function Ga(t,e,r,l=!1){const h={},c={};On(c,ar,1),t.propsDefaults=Object.create(null),fi(t,e,h,c);for(const d in t.propsOptions[0])d in h||(h[d]=void 0);r?t.props=l?h:ha(h):t.type.props?t.props=h:t.props=c,t.attrs=c}function Ka(t,e,r,l){const{props:h,attrs:c,vnode:{patchFlag:d}}=t,w=dt(h),[p]=t.propsOptions;let u=!1;if((l||d>0)&&!(d&16)){if(d&8){const g=t.vnode.dynamicProps;for(let k=0;k<g.length;k++){let x=g[k];if(rr(t.emitsOptions,x))continue;const $=e[x];if(p)if(lt(c,x))$!==c[x]&&(c[x]=$,u=!0);else{const B=ne(x);h[B]=Or(p,w,B,$,t,!1)}else $!==c[x]&&(c[x]=$,u=!0)}}}else{fi(t,e,h,c)&&(u=!0);let g;for(const k in w)(!e||!lt(e,k)&&((g=Je(k))===k||!lt(e,g)))&&(p?r&&(r[k]!==void 0||r[g]!==void 0)&&(h[k]=Or(p,w,k,void 0,t,!0)):delete h[k]);if(c!==w)for(const k in c)(!e||!lt(e,k)&&!0)&&(delete c[k],u=!0)}u&&he(t,"set","$attrs")}function fi(t,e,r,l){const[h,c]=t.propsOptions;let d=!1,w;if(e)for(let p in e){if(wn(p))continue;const u=e[p];let g;h&&lt(h,g=ne(p))?!c||!c.includes(g)?r[g]=u:(w||(w={}))[g]=u:rr(t.emitsOptions,p)||(!(p in l)||u!==l[p])&&(l[p]=u,d=!0)}if(c){const p=dt(r),u=w||vt;for(let g=0;g<c.length;g++){const k=c[g];r[k]=Or(h,p,k,u[k],t,!lt(u,k))}}return d}function Or(t,e,r,l,h,c){const d=t[r];if(d!=null){const w=lt(d,"default");if(w&&l===void 0){const p=d.default;if(d.type!==Function&&J(p)){const{propsDefaults:u}=h;r in u?l=u[r]:(Ze(h),l=u[r]=p.call(null,e),He())}else l=p}d[0]&&(c&&!w?l=!1:d[1]&&(l===""||l===Je(r))&&(l=!0))}return l}function Mi(t,e,r=!1){const l=e.propsCache,h=l.get(t);if(h)return h;const c=t.props,d={},w=[];let p=!1;if(!J(t)){const g=k=>{p=!0;const[x,$]=Mi(k,e,!0);St(d,x),$&&w.push(...$)};!r&&e.mixins.length&&e.mixins.forEach(g),t.extends&&g(t.extends),t.mixins&&t.mixins.forEach(g)}if(!c&&!p)return l.set(t,Ne),Ne;if(Z(c))for(let g=0;g<c.length;g++){const k=ne(c[g]);Do(k)&&(d[k]=vt)}else if(c)for(const g in c){const k=ne(g);if(Do(k)){const x=c[g],$=d[k]=Z(x)||J(x)?{type:x}:x;if($){const B=Io(Boolean,$.type),E=Io(String,$.type);$[0]=B>-1,$[1]=E<0||B<E,(B>-1||lt($,"default"))&&w.push(k)}}}const u=[d,w];return l.set(t,u),u}function Do(t){return t[0]!=="$"}function zo(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function Oo(t,e){return zo(t)===zo(e)}function Io(t,e){return Z(e)?e.findIndex(r=>Oo(r,t)):J(e)&&Oo(e,t)?0:-1}const $i=t=>t[0]==="_"||t==="$stable",co=t=>Z(t)?t.map(Zt):[Zt(t)],Xa=(t,e,r)=>{if(e._n)return e;const l=$a((...h)=>co(e(...h)),r);return l._c=!1,l},Ci=(t,e,r)=>{const l=t._ctx;for(const h in t){if($i(h))continue;const c=t[h];if(J(c))e[h]=Xa(h,c,l);else if(c!=null){const d=co(c);e[h]=()=>d}}},Bi=(t,e)=>{const r=co(e);t.slots.default=()=>r},Ya=(t,e)=>{if(t.vnode.shapeFlag&32){const r=e._;r?(t.slots=dt(e),On(e,"_",r)):Ci(e,t.slots={})}else t.slots={},e&&Bi(t,e);On(t.slots,ar,1)},Ja=(t,e,r)=>{const{vnode:l,slots:h}=t;let c=!0,d=vt;if(l.shapeFlag&32){const w=e._;w?r&&w===1?c=!1:(St(h,e),!r&&w===1&&delete h._):(c=!e.$stable,Ci(e,h)),d=e}else e&&(Bi(t,e),d={default:1});if(c)for(const w in h)!$i(w)&&!(w in d)&&delete h[w]};function bi(){return{app:null,config:{isNativeTag:Ll,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Qa=0;function th(t,e){return function(l,h=null){J(l)||(l=Object.assign({},l)),h!=null&&!Bt(h)&&(h=null);const c=bi(),d=new Set;let w=!1;const p=c.app={_uid:Qa++,_component:l,_props:h,_container:null,_context:c,_instance:null,version:mh,get config(){return c.config},set config(u){},use(u,...g){return d.has(u)||(u&&J(u.install)?(d.add(u),u.install(p,...g)):J(u)&&(d.add(u),u(p,...g))),p},mixin(u){return c.mixins.includes(u)||c.mixins.push(u),p},component(u,g){return g?(c.components[u]=g,p):c.components[u]},directive(u,g){return g?(c.directives[u]=g,p):c.directives[u]},mount(u,g,k){if(!w){const x=Mt(l,h);return x.appContext=c,g&&e?e(x,u):t(x,u,k),w=!0,p._container=u,u.__vue_app__=p,cr(x.component)||x.component.proxy}},unmount(){w&&(t(null,p._container),delete p._container.__vue_app__)},provide(u,g){return c.provides[u]=g,p}};return p}}function Gn(t,e,r,l,h=!1){if(Z(t)){t.forEach((x,$)=>Gn(x,e&&(Z(e)?e[$]:e),r,l,h));return}if(We(l)&&!h)return;const c=l.shapeFlag&4?cr(l.component)||l.component.proxy:l.el,d=h?null:c,{i:w,r:p}=t,u=e&&e.r,g=w.refs===vt?w.refs={}:w.refs,k=w.setupState;if(u!=null&&u!==p&&(wt(u)?(g[u]=null,lt(k,u)&&(k[u]=null)):jt(u)&&(u.value=null)),J(p))fe(p,w,12,[d,g]);else{const x=wt(p),$=jt(p);if(x||$){const B=()=>{if(t.f){const E=x?g[p]:p.value;h?Z(E)&&Xr(E,c):Z(E)?E.includes(c)||E.push(c):x?(g[p]=[c],lt(k,p)&&(k[p]=g[p])):(p.value=[c],t.k&&(g[t.k]=p.value))}else x?(g[p]=d,lt(k,p)&&(k[p]=d)):jt(p)&&(p.value=d,t.k&&(g[t.k]=d))};d?(B.id=-1,Vt(B,r)):B()}}}let we=!1;const Tn=t=>/svg/.test(t.namespaceURI)&&t.tagName!=="foreignObject",Rn=t=>t.nodeType===8;function eh(t){const{mt:e,p:r,o:{patchProp:l,createText:h,nextSibling:c,parentNode:d,remove:w,insert:p,createComment:u}}=t,g=(m,M)=>{if(!M.hasChildNodes()){r(null,m,M),Un();return}we=!1,k(M.firstChild,m,null,null,null),Un(),we&&console.error("Hydration completed but contains mismatches.")},k=(m,M,S,D,W,Y=!1)=>{const Q=Rn(m)&&m.data==="[",R=()=>E(m,M,S,D,W,Q),{type:G,ref:K,shapeFlag:tt,patchFlag:F}=M,ot=m.nodeType;M.el=m,F===-2&&(Y=!1,M.dynamicChildren=null);let I=null;switch(G){case $n:ot!==3?M.children===""?(p(M.el=h(""),d(m),m),I=m):I=R():(m.data!==M.children&&(we=!0,m.data=M.children),I=c(m));break;case Dt:ot!==8||Q?I=R():I=c(m);break;case _n:if(ot!==1)I=R();else{I=m;const Lt=!M.children.length;for(let ct=0;ct<M.staticCount;ct++)Lt&&(M.children+=I.outerHTML),ct===M.staticCount-1&&(M.anchor=I),I=c(I);return I}break;case Ht:Q?I=B(m,M,S,D,W,Y):I=R();break;default:if(tt&1)ot!==1||M.type.toLowerCase()!==m.tagName.toLowerCase()?I=R():I=x(m,M,S,D,W,Y);else if(tt&6){M.slotScopeIds=W;const Lt=d(m);if(e(M,Lt,null,S,D,Tn(Lt),Y),I=Q?P(m):c(m),I&&Rn(I)&&I.data==="teleport end"&&(I=c(I)),We(M)){let ct;Q?(ct=Mt(Ht),ct.anchor=I?I.previousSibling:Lt.lastChild):ct=m.nodeType===3?hr(""):Mt("div"),ct.el=m,M.component.subTree=ct}}else tt&64?ot!==8?I=R():I=M.type.hydrate(m,M,S,D,W,Y,t,$):tt&128&&(I=M.type.hydrate(m,M,S,D,Tn(d(m)),W,Y,t,k))}return K!=null&&Gn(K,null,D,M),I},x=(m,M,S,D,W,Y)=>{Y=Y||!!M.dynamicChildren;const{type:Q,props:R,patchFlag:G,shapeFlag:K,dirs:tt}=M,F=Q==="input"&&tt||Q==="option";if(F||G!==-1){if(tt&&Qt(M,null,S,"created"),R)if(F||!Y||G&48)for(const I in R)(F&&I.endsWith("value")||bn(I)&&!wn(I))&&l(m,I,null,R[I],!1,void 0,S);else R.onClick&&l(m,"onClick",null,R.onClick,!1,void 0,S);let ot;if((ot=R&&R.onVnodeBeforeMount)&&Nt(ot,S,M),tt&&Qt(M,null,S,"beforeMount"),((ot=R&&R.onVnodeMounted)||tt)&&ii(()=>{ot&&Nt(ot,S,M),tt&&Qt(M,null,S,"mounted")},D),K&16&&!(R&&(R.innerHTML||R.textContent))){let I=$(m.firstChild,M,m,S,D,W,Y);for(;I;){we=!0;const Lt=I;I=I.nextSibling,w(Lt)}}else K&8&&m.textContent!==M.children&&(we=!0,m.textContent=M.children)}return m.nextSibling},$=(m,M,S,D,W,Y,Q)=>{Q=Q||!!M.dynamicChildren;const R=M.children,G=R.length;for(let K=0;K<G;K++){const tt=Q?R[K]:R[K]=Zt(R[K]);if(m)m=k(m,tt,D,W,Y,Q);else{if(tt.type===$n&&!tt.children)continue;we=!0,r(null,tt,S,null,D,W,Tn(S),Y)}}return m},B=(m,M,S,D,W,Y)=>{const{slotScopeIds:Q}=M;Q&&(W=W?W.concat(Q):Q);const R=d(m),G=$(c(m),M,R,S,D,W,Y);return G&&Rn(G)&&G.data==="]"?c(M.anchor=G):(we=!0,p(M.anchor=u("]"),R,G),G)},E=(m,M,S,D,W,Y)=>{if(we=!0,M.el=null,Y){const G=P(m);for(;;){const K=c(m);if(K&&K!==G)w(K);else break}}const Q=c(m),R=d(m);return w(m),r(null,M,R,Q,S,D,Tn(R),W),Q},P=m=>{let M=0;for(;m;)if(m=c(m),m&&Rn(m)&&(m.data==="["&&M++,m.data==="]")){if(M===0)return c(m);M--}return m};return[g,k]}const Vt=ii;function nh(t){return rh(t,eh)}function rh(t,e){const r=El();r.__VUE__=!0;const{insert:l,remove:h,patchProp:c,createElement:d,createText:w,createComment:p,setText:u,setElementText:g,parentNode:k,nextSibling:x,setScopeId:$=te,cloneNode:B,insertStaticContent:E}=t,P=(_,v,f,y=null,b=null,A=null,T=!1,L=null,V=!!v.dynamicChildren)=>{if(_===v)return;_&&!Le(_,v)&&(y=N(_),Ot(_,b,A,!0),_=null),v.patchFlag===-2&&(V=!1,v.dynamicChildren=null);const{type:j,ref:U,shapeFlag:z}=v;switch(j){case $n:m(_,v,f,y);break;case Dt:M(_,v,f,y);break;case _n:_==null&&S(v,f,y,T);break;case Ht:ot(_,v,f,y,b,A,T,L,V);break;default:z&1?Y(_,v,f,y,b,A,T,L,V):z&6?I(_,v,f,y,b,A,T,L,V):(z&64||z&128)&&j.process(_,v,f,y,b,A,T,L,V,mt)}U!=null&&b&&Gn(U,_&&_.ref,A,v||_,!v)},m=(_,v,f,y)=>{if(_==null)l(v.el=w(v.children),f,y);else{const b=v.el=_.el;v.children!==_.children&&u(b,v.children)}},M=(_,v,f,y)=>{_==null?l(v.el=p(v.children||""),f,y):v.el=_.el},S=(_,v,f,y)=>{[_.el,_.anchor]=E(_.children,v,f,y,_.el,_.anchor)},D=({el:_,anchor:v},f,y)=>{let b;for(;_&&_!==v;)b=x(_),l(_,f,y),_=b;l(v,f,y)},W=({el:_,anchor:v})=>{let f;for(;_&&_!==v;)f=x(_),h(_),_=f;h(v)},Y=(_,v,f,y,b,A,T,L,V)=>{T=T||v.type==="svg",_==null?Q(v,f,y,b,A,T,L,V):K(_,v,b,A,T,L,V)},Q=(_,v,f,y,b,A,T,L)=>{let V,j;const{type:U,props:z,shapeFlag:q,transition:X,patchFlag:at,dirs:_t}=_;if(_.el&&B!==void 0&&at===-1)V=_.el=B(_.el);else{if(V=_.el=d(_.type,A,z&&z.is,z),q&8?g(V,_.children):q&16&&G(_.children,V,null,y,b,A&&U!=="foreignObject",T,L),_t&&Qt(_,null,y,"created"),z){for(const ft in z)ft!=="value"&&!wn(ft)&&c(V,ft,null,z[ft],A,_.children,y,b,H);"value"in z&&c(V,"value",null,z.value),(j=z.onVnodeBeforeMount)&&Nt(j,y,_)}R(V,_,_.scopeId,T,y)}_t&&Qt(_,null,y,"beforeMount");const gt=(!b||b&&!b.pendingBranch)&&X&&!X.persisted;gt&&X.beforeEnter(V),l(V,v,f),((j=z&&z.onVnodeMounted)||gt||_t)&&Vt(()=>{j&&Nt(j,y,_),gt&&X.enter(V),_t&&Qt(_,null,y,"mounted")},b)},R=(_,v,f,y,b)=>{if(f&&$(_,f),y)for(let A=0;A<y.length;A++)$(_,y[A]);if(b){let A=b.subTree;if(v===A){const T=b.vnode;R(_,T,T.scopeId,T.slotScopeIds,b.parent)}}},G=(_,v,f,y,b,A,T,L,V=0)=>{for(let j=V;j<_.length;j++){const U=_[j]=L?xe(_[j]):Zt(_[j]);P(null,U,v,f,y,b,A,T,L)}},K=(_,v,f,y,b,A,T)=>{const L=v.el=_.el;let{patchFlag:V,dynamicChildren:j,dirs:U}=v;V|=_.patchFlag&16;const z=_.props||vt,q=v.props||vt;let X;f&&Ce(f,!1),(X=q.onVnodeBeforeUpdate)&&Nt(X,f,v,_),U&&Qt(v,_,f,"beforeUpdate"),f&&Ce(f,!0);const at=b&&v.type!=="foreignObject";if(j?tt(_.dynamicChildren,j,L,f,y,at,A):T||Et(_,v,L,null,f,y,at,A,!1),V>0){if(V&16)F(L,v,z,q,f,y,b);else if(V&2&&z.class!==q.class&&c(L,"class",null,q.class,b),V&4&&c(L,"style",z.style,q.style,b),V&8){const _t=v.dynamicProps;for(let gt=0;gt<_t.length;gt++){const ft=_t[gt],qt=z[ft],Re=q[ft];(Re!==qt||ft==="value")&&c(L,ft,qt,Re,b,_.children,f,y,H)}}V&1&&_.children!==v.children&&g(L,v.children)}else!T&&j==null&&F(L,v,z,q,f,y,b);((X=q.onVnodeUpdated)||U)&&Vt(()=>{X&&Nt(X,f,v,_),U&&Qt(v,_,f,"updated")},y)},tt=(_,v,f,y,b,A,T)=>{for(let L=0;L<v.length;L++){const V=_[L],j=v[L],U=V.el&&(V.type===Ht||!Le(V,j)||V.shapeFlag&70)?k(V.el):f;P(V,j,U,null,y,b,A,T,!0)}},F=(_,v,f,y,b,A,T)=>{if(f!==y){for(const L in y){if(wn(L))continue;const V=y[L],j=f[L];V!==j&&L!=="value"&&c(_,L,j,V,T,v.children,b,A,H)}if(f!==vt)for(const L in f)!wn(L)&&!(L in y)&&c(_,L,f[L],null,T,v.children,b,A,H);"value"in y&&c(_,"value",f.value,y.value)}},ot=(_,v,f,y,b,A,T,L,V)=>{const j=v.el=_?_.el:w(""),U=v.anchor=_?_.anchor:w("");let{patchFlag:z,dynamicChildren:q,slotScopeIds:X}=v;X&&(L=L?L.concat(X):X),_==null?(l(j,f,y),l(U,f,y),G(v.children,f,U,b,A,T,L,V)):z>0&&z&64&&q&&_.dynamicChildren?(tt(_.dynamicChildren,q,f,b,A,T,L),(v.key!=null||b&&v===b.subTree)&&yi(_,v,!0)):Et(_,v,f,U,b,A,T,L,V)},I=(_,v,f,y,b,A,T,L,V)=>{v.slotScopeIds=L,_==null?v.shapeFlag&512?b.ctx.activate(v,f,y,T,V):Lt(v,f,y,b,A,T,V):ct(_,v,V)},Lt=(_,v,f,y,b,A,T)=>{const L=_.component=wh(_,y,b);if(Ln(_)&&(L.ctx.renderer=mt),uh(L),L.asyncDep){if(b&&b.registerDep(L,kt),!_.el){const V=L.subTree=Mt(Dt);M(null,V,v,f)}return}kt(L,_,v,f,b,A,T)},ct=(_,v,f)=>{const y=v.component=_.component;if(ba(_,v,f))if(y.asyncDep&&!y.asyncResolved){pt(y,v,f);return}else y.next=v,ka(y.update),y.update();else v.el=_.el,y.vnode=v},kt=(_,v,f,y,b,A,T)=>{const L=()=>{if(_.isMounted){let{next:U,bu:z,u:q,parent:X,vnode:at}=_,_t=U,gt;Ce(_,!1),U?(U.el=at.el,pt(_,U,T)):U=at,z&&Dn(z),(gt=U.props&&U.props.onVnodeBeforeUpdate)&&Nt(gt,X,U,at),Ce(_,!0);const ft=vr(_),qt=_.subTree;_.subTree=ft,P(qt,ft,k(qt.el),N(qt),_,b,A),U.el=ft.el,_t===null&&ya(_,ft.el),q&&Vt(q,b),(gt=U.props&&U.props.onVnodeUpdated)&&Vt(()=>Nt(gt,X,U,at),b)}else{let U;const{el:z,props:q}=v,{bm:X,m:at,parent:_t}=_,gt=We(v);if(Ce(_,!1),X&&Dn(X),!gt&&(U=q&&q.onVnodeBeforeMount)&&Nt(U,_t,v),Ce(_,!0),z&&et){const ft=()=>{_.subTree=vr(_),et(z,_.subTree,_,b,null)};gt?v.type.__asyncLoader().then(()=>!_.isUnmounted&&ft()):ft()}else{const ft=_.subTree=vr(_);P(null,ft,f,y,_,b,A),v.el=ft.el}if(at&&Vt(at,b),!gt&&(U=q&&q.onVnodeMounted)){const ft=v;Vt(()=>Nt(U,_t,ft),b)}(v.shapeFlag&256||_t&&We(_t.vnode)&&_t.vnode.shapeFlag&256)&&_.a&&Vt(_.a,b),_.isMounted=!0,v=f=y=null}},V=_.effect=new to(L,()=>ao(j),_.scope),j=_.update=()=>V.run();j.id=_.uid,Ce(_,!0),j()},pt=(_,v,f)=>{v.component=_;const y=_.vnode.props;_.vnode=v,_.next=null,Ka(_,v.props,y,f),Ja(_,v.children,f),Qe(),nr(void 0,_.update),tn()},Et=(_,v,f,y,b,A,T,L,V=!1)=>{const j=_&&_.children,U=_?_.shapeFlag:0,z=v.children,{patchFlag:q,shapeFlag:X}=v;if(q>0){if(q&128){se(j,z,f,y,b,A,T,L,V);return}else if(q&256){Te(j,z,f,y,b,A,T,L,V);return}}X&8?(U&16&&H(j,b,A),z!==j&&g(f,z)):U&16?X&16?se(j,z,f,y,b,A,T,L,V):H(j,b,A,!0):(U&8&&g(f,""),X&16&&G(z,f,y,b,A,T,L,V))},Te=(_,v,f,y,b,A,T,L,V)=>{_=_||Ne,v=v||Ne;const j=_.length,U=v.length,z=Math.min(j,U);let q;for(q=0;q<z;q++){const X=v[q]=V?xe(v[q]):Zt(v[q]);P(_[q],X,f,null,b,A,T,L,V)}j>U?H(_,b,A,!0,!1,z):G(v,f,y,b,A,T,L,V,z)},se=(_,v,f,y,b,A,T,L,V)=>{let j=0;const U=v.length;let z=_.length-1,q=U-1;for(;j<=z&&j<=q;){const X=_[j],at=v[j]=V?xe(v[j]):Zt(v[j]);if(Le(X,at))P(X,at,f,null,b,A,T,L,V);else break;j++}for(;j<=z&&j<=q;){const X=_[z],at=v[q]=V?xe(v[q]):Zt(v[q]);if(Le(X,at))P(X,at,f,null,b,A,T,L,V);else break;z--,q--}if(j>z){if(j<=q){const X=q+1,at=X<U?v[X].el:y;for(;j<=q;)P(null,v[j]=V?xe(v[j]):Zt(v[j]),f,at,b,A,T,L,V),j++}}else if(j>q)for(;j<=z;)Ot(_[j],b,A,!0),j++;else{const X=j,at=j,_t=new Map;for(j=at;j<=q;j++){const Tt=v[j]=V?xe(v[j]):Zt(v[j]);Tt.key!=null&&_t.set(Tt.key,j)}let gt,ft=0;const qt=q-at+1;let Re=!1,ko=0;const sn=new Array(qt);for(j=0;j<qt;j++)sn[j]=0;for(j=X;j<=z;j++){const Tt=_[j];if(ft>=qt){Ot(Tt,b,A,!0);continue}let Yt;if(Tt.key!=null)Yt=_t.get(Tt.key);else for(gt=at;gt<=q;gt++)if(sn[gt-at]===0&&Le(Tt,v[gt])){Yt=gt;break}Yt===void 0?Ot(Tt,b,A,!0):(sn[Yt-at]=j+1,Yt>=ko?ko=Yt:Re=!0,P(Tt,v[Yt],f,null,b,A,T,L,V),ft++)}const mo=Re?oh(sn):Ne;for(gt=mo.length-1,j=qt-1;j>=0;j--){const Tt=at+j,Yt=v[Tt],fo=Tt+1<U?v[Tt+1].el:y;sn[j]===0?P(null,Yt,f,fo,b,A,T,L,V):Re&&(gt<0||j!==mo[gt]?Xt(Yt,f,fo,2):gt--)}}},Xt=(_,v,f,y,b=null)=>{const{el:A,type:T,transition:L,children:V,shapeFlag:j}=_;if(j&6){Xt(_.component.subTree,v,f,y);return}if(j&128){_.suspense.move(v,f,y);return}if(j&64){T.move(_,v,f,mt);return}if(T===Ht){l(A,v,f);for(let z=0;z<V.length;z++)Xt(V[z],v,f,y);l(_.anchor,v,f);return}if(T===_n){D(_,v,f);return}if(y!==2&&j&1&&L)if(y===0)L.beforeEnter(A),l(A,v,f),Vt(()=>L.enter(A),b);else{const{leave:z,delayLeave:q,afterLeave:X}=L,at=()=>l(A,v,f),_t=()=>{z(A,()=>{at(),X&&X()})};q?q(A,at,_t):_t()}else l(A,v,f)},Ot=(_,v,f,y=!1,b=!1)=>{const{type:A,props:T,ref:L,children:V,dynamicChildren:j,shapeFlag:U,patchFlag:z,dirs:q}=_;if(L!=null&&Gn(L,null,f,_,!0),U&256){v.ctx.deactivate(_);return}const X=U&1&&q,at=!We(_);let _t;if(at&&(_t=T&&T.onVnodeBeforeUnmount)&&Nt(_t,v,_),U&6)O(_.component,f,y);else{if(U&128){_.suspense.unmount(f,y);return}X&&Qt(_,null,v,"beforeUnmount"),U&64?_.type.remove(_,v,f,b,mt,y):j&&(A!==Ht||z>0&&z&64)?H(j,v,f,!1,!0):(A===Ht&&z&384||!b&&U&16)&&H(V,v,f),y&&gr(_)}(at&&(_t=T&&T.onVnodeUnmounted)||X)&&Vt(()=>{_t&&Nt(_t,v,_),X&&Qt(_,null,v,"unmounted")},f)},gr=_=>{const{type:v,el:f,anchor:y,transition:b}=_;if(v===Ht){C(f,y);return}if(v===_n){W(_);return}const A=()=>{h(f),b&&!b.persisted&&b.afterLeave&&b.afterLeave()};if(_.shapeFlag&1&&b&&!b.persisted){const{leave:T,delayLeave:L}=b,V=()=>T(f,A);L?L(_.el,A,V):V()}else A()},C=(_,v)=>{let f;for(;_!==v;)f=x(_),h(_),_=f;h(v)},O=(_,v,f)=>{const{bum:y,scope:b,update:A,subTree:T,um:L}=_;y&&Dn(y),b.stop(),A&&(A.active=!1,Ot(T,_,v,f)),L&&Vt(L,v),Vt(()=>{_.isUnmounted=!0},v),v&&v.pendingBranch&&!v.isUnmounted&&_.asyncDep&&!_.asyncResolved&&_.suspenseId===v.pendingId&&(v.deps--,v.deps===0&&v.resolve())},H=(_,v,f,y=!1,b=!1,A=0)=>{for(let T=A;T<_.length;T++)Ot(_[T],v,f,y,b)},N=_=>_.shapeFlag&6?N(_.component.subTree):_.shapeFlag&128?_.suspense.next():x(_.anchor||_.el),ut=(_,v,f)=>{_==null?v._vnode&&Ot(v._vnode,null,null,!0):P(v._vnode||null,_,v,null,null,null,f),Un(),v._vnode=_},mt={p:P,um:Ot,m:Xt,r:gr,mt:Lt,mc:G,pc:Et,pbc:tt,n:N,o:t};let st,et;return e&&([st,et]=e(mt)),{render:ut,hydrate:st,createApp:th(ut,st)}}function Ce({effect:t,update:e},r){t.allowRecurse=e.allowRecurse=r}function yi(t,e,r=!1){const l=t.children,h=e.children;if(Z(l)&&Z(h))for(let c=0;c<l.length;c++){const d=l[c];let w=h[c];w.shapeFlag&1&&!w.dynamicChildren&&((w.patchFlag<=0||w.patchFlag===32)&&(w=h[c]=xe(h[c]),w.el=d.el),r||yi(d,w))}}function oh(t){const e=t.slice(),r=[0];let l,h,c,d,w;const p=t.length;for(l=0;l<p;l++){const u=t[l];if(u!==0){if(h=r[r.length-1],t[h]<u){e[l]=h,r.push(l);continue}for(c=0,d=r.length-1;c<d;)w=c+d>>1,t[r[w]]<u?c=w+1:d=w;u<t[r[c]]&&(c>0&&(e[l]=r[c-1]),r[c]=l)}}for(c=r.length,d=r[c-1];c-- >0;)r[c]=d,d=e[d];return r}const sh=t=>t.__isTeleport,Ht=Symbol(void 0),$n=Symbol(void 0),Dt=Symbol(void 0),_n=Symbol(void 0),gn=[];let Kt=null;function s(t=!1){gn.push(Kt=t?null:[])}function ih(){gn.pop(),Kt=gn[gn.length-1]||null}let Cn=1;function No(t){Cn+=t}function ji(t){return t.dynamicChildren=Cn>0?Kt||Ne:null,ih(),Cn>0&&Kt&&Kt.push(t),t}function i(t,e,r,l,h,c){return ji(n(t,e,r,l,h,c,!0))}function lr(t,e,r,l,h){return ji(Mt(t,e,r,l,h,!0))}function Kn(t){return t?t.__v_isVNode===!0:!1}function Le(t,e){return t.type===e.type&&t.key===e.key}const ar="__vInternal",Li=({key:t})=>t!=null?t:null,zn=({ref:t,ref_key:e,ref_for:r})=>t!=null?wt(t)||jt(t)||J(t)?{i:At,r:t,k:e,f:!!r}:t:null;function n(t,e=null,r=null,l=0,h=null,c=t===Ht?0:1,d=!1,w=!1){const p={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Li(e),ref:e&&zn(e),scopeId:si,slotScopeIds:null,children:r,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:c,patchFlag:l,dynamicProps:h,dynamicChildren:null,appContext:null};return w?(wo(p,r),c&128&&t.normalize(p)):r&&(p.shapeFlag|=wt(r)?8:16),Cn>0&&!d&&Kt&&(p.patchFlag>0||c&6)&&p.patchFlag!==32&&Kt.push(p),p}const Mt=lh;function lh(t,e=null,r=null,l=0,h=null,c=!1){if((!t||t===_i)&&(t=Dt),Kn(t)){const w=$e(t,e,!0);return r&&wo(w,r),Cn>0&&!c&&Kt&&(w.shapeFlag&6?Kt[Kt.indexOf(t)]=w:Kt.push(w)),w.patchFlag|=-2,w}if(kh(t)&&(t=t.__vccOpts),e){e=ah(e);let{class:w,style:p}=e;w&&!wt(w)&&(e.class=Ye(w)),Bt(p)&&(Zs(p)&&!Z(p)&&(p=St({},p)),e.style=Ee(p))}const d=wt(t)?1:ja(t)?128:sh(t)?64:Bt(t)?4:J(t)?2:0;return n(t,e,r,l,h,d,c,!0)}function ah(t){return t?Zs(t)||ar in t?St({},t):t:null}function $e(t,e,r=!1){const{props:l,ref:h,patchFlag:c,children:d}=t,w=e?hh(l||{},e):l;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:w,key:w&&Li(w),ref:e&&e.ref?r&&h?Z(h)?h.concat(zn(e)):[h,zn(e)]:zn(e):h,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:d,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Ht?c===-1?16:c|16:c,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&$e(t.ssContent),ssFallback:t.ssFallback&&$e(t.ssFallback),el:t.el,anchor:t.anchor}}function hr(t=" ",e=0){return Mt($n,null,t,e)}function a(t,e){const r=Mt(_n,null,t);return r.staticCount=e,r}function Xn(t,e){return e?(s(),lr(Dt,null,t)):Mt(Dt,null,t)}function Zt(t){return t==null||typeof t=="boolean"?Mt(Dt):Z(t)?Mt(Ht,null,t.slice()):typeof t=="object"?xe(t):Mt($n,null,String(t))}function xe(t){return t.el===null||t.memo?t:$e(t)}function wo(t,e){let r=0;const{shapeFlag:l}=t;if(e==null)e=null;else if(Z(e))r=16;else if(typeof e=="object")if(l&65){const h=e.default;h&&(h._c&&(h._d=!1),wo(t,h()),h._c&&(h._d=!0));return}else{r=32;const h=e._;!h&&!(ar in e)?e._ctx=At:h===3&&At&&(At.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else J(e)?(e={default:e,_ctx:At},r=32):(e=String(e),l&64?(r=16,e=[hr(e)]):r=8);t.children=e,t.shapeFlag|=r}function hh(...t){const e={};for(let r=0;r<t.length;r++){const l=t[r];for(const h in l)if(h==="class")e.class!==l.class&&(e.class=Ye([e.class,l.class]));else if(h==="style")e.style=Ee([e.style,l.style]);else if(bn(h)){const c=e[h],d=l[h];d&&c!==d&&!(Z(c)&&c.includes(d))&&(e[h]=c?[].concat(c,d):d)}else h!==""&&(e[h]=l[h])}return e}function Nt(t,e,r,l=null){Ut(t,e,7,[r,l])}const ch=bi();let dh=0;function wh(t,e,r){const l=t.type,h=(e?e.appContext:t.appContext)||ch,c={uid:dh++,vnode:t,type:l,parent:e,appContext:h,root:null,next:null,subTree:null,effect:null,update:null,scope:new Tl(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(h.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Mi(l,h),emitsOptions:oi(l,h),emit:null,emitted:null,propsDefaults:vt,inheritAttrs:l.inheritAttrs,ctx:vt,data:vt,props:vt,attrs:vt,slots:vt,refs:vt,setupState:vt,setupContext:null,suspense:r,suspenseId:r?r.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return c.ctx={_:c},c.root=e?e.root:c,c.emit=Ma.bind(null,c),t.ce&&t.ce(c),c}let bt=null;const ph=()=>bt||At,Ze=t=>{bt=t,t.scope.on()},He=()=>{bt&&bt.scope.off(),bt=null};function Si(t){return t.vnode.shapeFlag&4}let Ge=!1;function uh(t,e=!1){Ge=e;const{props:r,children:l}=t.vnode,h=Si(t);Ga(t,r,h,e),Ya(t,l);const c=h?_h(t,e):void 0;return Ge=!1,c}function _h(t,e){const r=t.type;t.accessCache=Object.create(null),t.proxy=Gs(new Proxy(t.ctx,Ia));const{setup:l}=r;if(l){const h=t.setupContext=l.length>1?xh(t):null;Ze(t),Qe();const c=fe(l,t,0,[t.props,h]);if(tn(),He(),Hs(c)){if(c.then(He,He),e)return c.then(d=>{Uo(t,d,e)}).catch(d=>{jn(d,t,0)});t.asyncDep=c}else Uo(t,c,e)}else Ai(t,e)}function Uo(t,e,r){J(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Bt(e)&&(t.setupState=Js(e)),Ai(t,r)}let qo;function Ai(t,e,r){const l=t.type;if(!t.render){if(!e&&qo&&!l.render){const h=l.template;if(h){const{isCustomElement:c,compilerOptions:d}=t.appContext.config,{delimiters:w,compilerOptions:p}=l,u=St(St({isCustomElement:c,delimiters:w},d),p);l.render=qo(h,u)}}t.render=l.render||te}Ze(t),Qe(),Na(t),tn(),He()}function gh(t){return new Proxy(t.attrs,{get(e,r){return zt(t,"get","$attrs"),e[r]}})}function xh(t){const e=l=>{t.exposed=l||{}};let r;return{get attrs(){return r||(r=gh(t))},slots:t.slots,emit:t.emit,expose:e}}function cr(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Js(Gs(t.exposed)),{get(e,r){if(r in e)return e[r];if(r in Wn)return Wn[r](t)}}))}function vh(t){return J(t)&&t.displayName||t.name}function kh(t){return J(t)&&"__vccOpts"in t}const it=(t,e)=>ga(t,e,Ge);function rt(t,e,r){const l=arguments.length;return l===2?Bt(e)&&!Z(e)?Kn(e)?Mt(t,null,[e]):Mt(t,e):Mt(t,null,e):(l>3?r=Array.prototype.slice.call(arguments,2):l===3&&Kn(r)&&(r=[r]),Mt(t,e,r))}const mh="3.2.36",fh="http://www.w3.org/2000/svg",Se=typeof document!="undefined"?document:null,Wo=Se&&Se.createElement("template"),Mh={insert:(t,e,r)=>{e.insertBefore(t,r||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,r,l)=>{const h=e?Se.createElementNS(fh,t):Se.createElement(t,r?{is:r}:void 0);return t==="select"&&l&&l.multiple!=null&&h.setAttribute("multiple",l.multiple),h},createText:t=>Se.createTextNode(t),createComment:t=>Se.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Se.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},cloneNode(t){const e=t.cloneNode(!0);return"_value"in t&&(e._value=t._value),e},insertStaticContent(t,e,r,l,h,c){const d=r?r.previousSibling:e.lastChild;if(h&&(h===c||h.nextSibling))for(;e.insertBefore(h.cloneNode(!0),r),!(h===c||!(h=h.nextSibling)););else{Wo.innerHTML=l?`<svg>${t}</svg>`:t;const w=Wo.content;if(l){const p=w.firstChild;for(;p.firstChild;)w.appendChild(p.firstChild);w.removeChild(p)}e.insertBefore(w,r)}return[d?d.nextSibling:e.firstChild,r?r.previousSibling:e.lastChild]}};function $h(t,e,r){const l=t._vtc;l&&(e=(e?[e,...l]:[...l]).join(" ")),e==null?t.removeAttribute("class"):r?t.setAttribute("class",e):t.className=e}function Ch(t,e,r){const l=t.style,h=wt(r);if(r&&!h){for(const c in r)Ir(l,c,r[c]);if(e&&!wt(e))for(const c in e)r[c]==null&&Ir(l,c,"")}else{const c=l.display;h?e!==r&&(l.cssText=r):e&&t.removeAttribute("style"),"_vod"in t&&(l.display=c)}}const Zo=/\s*!important$/;function Ir(t,e,r){if(Z(r))r.forEach(l=>Ir(t,e,l));else if(r==null&&(r=""),e.startsWith("--"))t.setProperty(e,r);else{const l=Bh(t,e);Zo.test(r)?t.setProperty(Je(l),r.replace(Zo,""),"important"):t[l]=r}}const Go=["Webkit","Moz","ms"],fr={};function Bh(t,e){const r=fr[e];if(r)return r;let l=ne(e);if(l!=="filter"&&l in t)return fr[e]=l;l=tr(l);for(let h=0;h<Go.length;h++){const c=Go[h]+l;if(c in t)return fr[e]=c}return e}const Ko="http://www.w3.org/1999/xlink";function bh(t,e,r,l,h){if(l&&e.startsWith("xlink:"))r==null?t.removeAttributeNS(Ko,e.slice(6,e.length)):t.setAttributeNS(Ko,e,r);else{const c=Bl(e);r==null||c&&!Ss(r)?t.removeAttribute(e):t.setAttribute(e,c?"":r)}}function yh(t,e,r,l,h,c,d){if(e==="innerHTML"||e==="textContent"){l&&d(l,h,c),t[e]=r==null?"":r;return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=r;const p=r==null?"":r;(t.value!==p||t.tagName==="OPTION")&&(t.value=p),r==null&&t.removeAttribute(e);return}let w=!1;if(r===""||r==null){const p=typeof t[e];p==="boolean"?r=Ss(r):r==null&&p==="string"?(r="",w=!0):p==="number"&&(r=0,w=!0)}try{t[e]=r}catch{}w&&t.removeAttribute(e)}const[Pi,jh]=(()=>{let t=Date.now,e=!1;if(typeof window!="undefined"){Date.now()>document.createEvent("Event").timeStamp&&(t=performance.now.bind(performance));const r=navigator.userAgent.match(/firefox\/(\d+)/i);e=!!(r&&Number(r[1])<=53)}return[t,e]})();let Nr=0;const Lh=Promise.resolve(),Sh=()=>{Nr=0},Ah=()=>Nr||(Lh.then(Sh),Nr=Pi());function Oe(t,e,r,l){t.addEventListener(e,r,l)}function Ph(t,e,r,l){t.removeEventListener(e,r,l)}function Vh(t,e,r,l,h=null){const c=t._vei||(t._vei={}),d=c[e];if(l&&d)d.value=l;else{const[w,p]=Hh(e);if(l){const u=c[e]=Eh(l,h);Oe(t,w,u,p)}else d&&(Ph(t,w,d,p),c[e]=void 0)}}const Xo=/(?:Once|Passive|Capture)$/;function Hh(t){let e;if(Xo.test(t)){e={};let r;for(;r=t.match(Xo);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[Je(t.slice(2)),e]}function Eh(t,e){const r=l=>{const h=l.timeStamp||Pi();(jh||h>=r.attached-1)&&Ut(Th(l,r.value),e,5,[l])};return r.value=t,r.attached=Ah(),r}function Th(t,e){if(Z(e)){const r=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{r.call(t),t._stopped=!0},e.map(l=>h=>!h._stopped&&l&&l(h))}else return e}const Yo=/^on[a-z]/,Rh=(t,e,r,l,h=!1,c,d,w,p)=>{e==="class"?$h(t,l,h):e==="style"?Ch(t,r,l):bn(e)?Kr(e)||Vh(t,e,r,l,d):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Fh(t,e,l,h))?yh(t,e,l,c,d,w,p):(e==="true-value"?t._trueValue=l:e==="false-value"&&(t._falseValue=l),bh(t,e,l,h))};function Fh(t,e,r,l){return l?!!(e==="innerHTML"||e==="textContent"||e in t&&Yo.test(e)&&J(r)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Yo.test(e)&&wt(r)?!1:e in t}const pe="transition",ln="animation",po=(t,{slots:e})=>rt(hi,Dh(t),e);po.displayName="Transition";const Vi={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};po.props=St({},hi.props,Vi);const Be=(t,e)=>{Z(t)?t.forEach(r=>r(...e)):t&&t(...e)},Jo=t=>t?Z(t)?t.some(e=>e.length>1):t.length>1:!1;function Dh(t){const e={};for(const F in t)F in Vi||(e[F]=t[F]);if(t.css===!1)return e;const{name:r="v",type:l,duration:h,enterFromClass:c=`${r}-enter-from`,enterActiveClass:d=`${r}-enter-active`,enterToClass:w=`${r}-enter-to`,appearFromClass:p=c,appearActiveClass:u=d,appearToClass:g=w,leaveFromClass:k=`${r}-leave-from`,leaveActiveClass:x=`${r}-leave-active`,leaveToClass:$=`${r}-leave-to`}=t,B=zh(h),E=B&&B[0],P=B&&B[1],{onBeforeEnter:m,onEnter:M,onEnterCancelled:S,onLeave:D,onLeaveCancelled:W,onBeforeAppear:Y=m,onAppear:Q=M,onAppearCancelled:R=S}=e,G=(F,ot,I)=>{be(F,ot?g:w),be(F,ot?u:d),I&&I()},K=(F,ot)=>{F._isLeaving=!1,be(F,k),be(F,$),be(F,x),ot&&ot()},tt=F=>(ot,I)=>{const Lt=F?Q:M,ct=()=>G(ot,F,I);Be(Lt,[ot,ct]),Qo(()=>{be(ot,F?p:c),ue(ot,F?g:w),Jo(Lt)||ts(ot,l,E,ct)})};return St(e,{onBeforeEnter(F){Be(m,[F]),ue(F,c),ue(F,d)},onBeforeAppear(F){Be(Y,[F]),ue(F,p),ue(F,u)},onEnter:tt(!1),onAppear:tt(!0),onLeave(F,ot){F._isLeaving=!0;const I=()=>K(F,ot);ue(F,k),Nh(),ue(F,x),Qo(()=>{!F._isLeaving||(be(F,k),ue(F,$),Jo(D)||ts(F,l,P,I))}),Be(D,[F,I])},onEnterCancelled(F){G(F,!1),Be(S,[F])},onAppearCancelled(F){G(F,!0),Be(R,[F])},onLeaveCancelled(F){K(F),Be(W,[F])}})}function zh(t){if(t==null)return null;if(Bt(t))return[Mr(t.enter),Mr(t.leave)];{const e=Mr(t);return[e,e]}}function Mr(t){return In(t)}function ue(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.add(r)),(t._vtc||(t._vtc=new Set)).add(e)}function be(t,e){e.split(/\s+/).forEach(l=>l&&t.classList.remove(l));const{_vtc:r}=t;r&&(r.delete(e),r.size||(t._vtc=void 0))}function Qo(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let Oh=0;function ts(t,e,r,l){const h=t._endId=++Oh,c=()=>{h===t._endId&&l()};if(r)return setTimeout(c,r);const{type:d,timeout:w,propCount:p}=Ih(t,e);if(!d)return l();const u=d+"end";let g=0;const k=()=>{t.removeEventListener(u,x),c()},x=$=>{$.target===t&&++g>=p&&k()};setTimeout(()=>{g<p&&k()},w+1),t.addEventListener(u,x)}function Ih(t,e){const r=window.getComputedStyle(t),l=B=>(r[B]||"").split(", "),h=l(pe+"Delay"),c=l(pe+"Duration"),d=es(h,c),w=l(ln+"Delay"),p=l(ln+"Duration"),u=es(w,p);let g=null,k=0,x=0;e===pe?d>0&&(g=pe,k=d,x=c.length):e===ln?u>0&&(g=ln,k=u,x=p.length):(k=Math.max(d,u),g=k>0?d>u?pe:ln:null,x=g?g===pe?c.length:p.length:0);const $=g===pe&&/\b(transform|all)(,|$)/.test(r[pe+"Property"]);return{type:g,timeout:k,propCount:x,hasTransform:$}}function es(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((r,l)=>ns(r)+ns(t[l])))}function ns(t){return Number(t.slice(0,-1).replace(",","."))*1e3}function Nh(){return document.body.offsetHeight}const rs=t=>{const e=t.props["onUpdate:modelValue"]||!1;return Z(e)?r=>Dn(e,r):e};function Uh(t){t.target.composing=!0}function os(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const yYt={created(t,{modifiers:{lazy:e,trim:r,number:l}},h){t._assign=rs(h);const c=l||h.props&&h.props.type==="number";Oe(t,e?"change":"input",d=>{if(d.target.composing)return;let w=t.value;r&&(w=w.trim()),c&&(w=In(w)),t._assign(w)}),r&&Oe(t,"change",()=>{t.value=t.value.trim()}),e||(Oe(t,"compositionstart",Uh),Oe(t,"compositionend",os),Oe(t,"change",os))},mounted(t,{value:e}){t.value=e==null?"":e},beforeUpdate(t,{value:e,modifiers:{lazy:r,trim:l,number:h}},c){if(t._assign=rs(c),t.composing||document.activeElement===t&&t.type!=="range"&&(r||l&&t.value.trim()===e||(h||t.type==="number")&&In(t.value)===e))return;const d=e==null?"":e;t.value!==d&&(t.value=d)}},jYt={beforeMount(t,{value:e},{transition:r}){t._vod=t.style.display==="none"?"":t.style.display,r&&e?r.beforeEnter(t):an(t,e)},mounted(t,{value:e},{transition:r}){r&&e&&r.enter(t)},updated(t,{value:e,oldValue:r},{transition:l}){!e!=!r&&(l?e?(l.beforeEnter(t),an(t,!0),l.enter(t)):l.leave(t,()=>{an(t,!1)}):an(t,e))},beforeUnmount(t,{value:e}){an(t,e)}};function an(t,e){t.style.display=e?t._vod:"none"}const qh=St({patchProp:Rh},Mh);let $r,ss=!1;function Wh(){return $r=ss?$r:nh(qh),ss=!0,$r}const Zh=(...t)=>{const e=Wh().createApp(...t),{mount:r}=e;return e.mount=l=>{const h=Gh(l);if(h)return r(h,!0,h instanceof SVGElement)},e};function Gh(t){return wt(t)?document.querySelector(t):t}const Kh={base:"/",lang:"en-US",title:"\u67D2\u6A59\u7684\u535A\u5BA2",description:"",head:[],locales:{}};var Xh=([t,e,r])=>t==="meta"&&e.name?`${t}.${e.name}`:["title","base"].includes(t)?t:t==="template"&&e.id?`${t}.${e.id}`:JSON.stringify([t,e,r]),Yh=t=>{const e=new Set,r=[];return t.forEach(l=>{const h=Xh(l);e.has(h)||(e.add(h),r.push(l))}),r},Jh=t=>/^(https?:)?\/\//.test(t),LYt=t=>/^mailto:/.test(t),SYt=t=>/^tel:/.test(t),Hi=t=>Object.prototype.toString.call(t)==="[object Object]",Qh=t=>t.replace(/\/$/,""),tc=t=>t.replace(/^\//,""),Ei=(t,e)=>{const r=Object.keys(t).sort((l,h)=>{const c=h.split("/").length-l.split("/").length;return c!==0?c:h.length-l.length});for(const l of r)if(e.startsWith(l))return l;return"/"};const Ti={"v-8daa1a0e":$t(()=>nt(()=>import("./index.html.19e93cea.js"),[])),"v-6bb1ef33":$t(()=>nt(()=>import("./guide.html.6e114bc2.js"),[])),"v-953ed77e":$t(()=>nt(()=>import("./052901.html.bbaa41bc.js"),[])),"v-7caf0363":$t(()=>nt(()=>import("./060610.html.1666a792.js"),[])),"v-928deb06":$t(()=>nt(()=>import("./061518.html.0fe168e8.js"),[])),"v-3706649a":$t(()=>nt(()=>import("./404.html.20545ca4.js"),[])),"v-d45343be":$t(()=>nt(()=>import("./index.html.323326dd.js"),[])),"v-16736bd8":$t(()=>nt(()=>import("./index.html.71c8fc73.js"),[])),"v-57149f4a":$t(()=>nt(()=>import("./index.html.2929c6cd.js"),[])),"v-12127d6d":$t(()=>nt(()=>import("./index.html.75af06a3.js"),[])),"v-6f552904":$t(()=>nt(()=>import("./index.html.76506e3d.js"),[])),"v-5f0134f3":$t(()=>nt(()=>import("./index.html.8b0a8c9a.js"),[])),"v-9f92a452":$t(()=>nt(()=>import("./index.html.aa067f3a.js"),[])),"v-420fa9d1":$t(()=>nt(()=>import("./index.html.00829a90.js"),[])),"v-01560935":$t(()=>nt(()=>import("./index.html.d72b7ed4.js"),[])),"v-03d52fd3":$t(()=>nt(()=>import("./index.html.ac0b680f.js"),[]))},ec={404:$t(()=>nt(()=>import("./404.4921b160.js"),[])),Categories:$t(()=>nt(()=>import("./Categories.eb6af3c6.js"),["assets/Categories.eb6af3c6.js","assets/Pagation.b792b5da.js"])),Layout:$t(()=>nt(()=>import("./Layout.1d64fbb9.js"),["assets/Layout.1d64fbb9.js","assets/Pagation.b792b5da.js"])),Post:$t(()=>nt(()=>import("./Post.f77ce80b.js"),[])),Timeline:$t(()=>nt(()=>import("./Timeline.3d40c55b.js"),[]))};var Ri=yt($l),Fi=oo({key:"",path:"",title:"",lang:"",frontmatter:{},excerpt:"",headers:[]}),ae=yt(Fi),dr=()=>ae;_r.webpackHot&&(__VUE_HMR_RUNTIME__.updatePageData=t=>{Ri.value[t.key]=()=>Promise.resolve(t),t.key===ae.value.key&&(ae.value=t)});var Di=Symbol(""),nc=()=>{const t=Ct(Di);if(!t)throw new Error("usePageFrontmatter() is called without provider.");return t},zi=Symbol(""),rc=()=>{const t=Ct(zi);if(!t)throw new Error("usePageHead() is called without provider.");return t},oc=Symbol(""),Oi=Symbol(""),sc=()=>{const t=Ct(Oi);if(!t)throw new Error("usePageLang() is called without provider.");return t},uo=Symbol(""),Ii=()=>{const t=Ct(uo);if(!t)throw new Error("useRouteLocale() is called without provider.");return t},ke=yt(Kh),Ni=()=>ke;_r.webpackHot&&(__VUE_HMR_RUNTIME__.updateSiteData=t=>{ke.value=t});var Ui=Symbol(""),AYt=()=>{const t=Ct(Ui);if(!t)throw new Error("useSiteLocaleData() is called without provider.");return t},ic=Symbol(""),je=en({resolvePageData:async t=>{const e=Ri.value[t],r=await(e==null?void 0:e());return r!=null?r:Fi},resolvePageFrontmatter:t=>t.frontmatter,resolvePageHead:(t,e,r)=>{const l=wt(e.description)?e.description:r.description,h=[...Z(e.head)?e.head:[],...r.head,["title",{},t],["meta",{name:"description",content:l}]];return Yh(h)},resolvePageHeadTitle:(t,e)=>`${t.title?`${t.title} | `:""}${e.title}`,resolvePageLang:t=>t.lang||"en",resolveRouteLocale:(t,e)=>Ei(t,e),resolveSiteLocaleData:(t,e)=>Rt(Rt({},t),t.locales[e])}),lc=o({name:"ClientOnly",setup(t,e){const r=yt(!1);return re(()=>{r.value=!0}),()=>{var l,h;return r.value?(h=(l=e.slots).default)==null?void 0:h.call(l):null}}}),ac=o({name:"Content",props:{pageKey:{type:String,required:!1,default:""}},setup(t){const e=dr(),r=it(()=>Ti[t.pageKey||e.value.key]);return()=>r.value?rt(r.value):rt("div","404 Not Found")}}),is=o({name:"Vuepress",setup(){const t=dr(),e=it(()=>{let r;if(t.value.path){const l=t.value.frontmatter.layout;wt(l)?r=l:r="Layout"}else r="404";return ec[r]||ui(r,!1)});return()=>rt(e.value)}}),hc=t=>Jh(t)?t:`${Ni().value.base}${tc(t)}`,oe=t=>t;const cc={style:"@vuepress-reco/style-default",logo:"/head.jpg",author:"reco_luan",authorAvatar:"/head.jpg",docsRepo:"https://github.com/vuepress-reco/vuepress-theme-reco-next",docsBranch:"main",docsDir:"example",lastUpdatedText:"",navbar:[{text:"Home",link:"/"},{text:"Categories",link:"/categories/reco/1/"},{text:"Tags",link:"/tags/reco/1/"}]},qi=yt(cc),dc=()=>qi;_r.webpackHot&&(__VUE_HMR_RUNTIME__.updateThemeData=t=>{qi.value=t});const Wi=Symbol(""),wr=()=>{const t=Ct(Wi);if(!t)throw new Error("useThemeLocaleData() is called without provider.");return t},wc=(t,e)=>{var r;return Rt(Rt({},t),(r=t.locales)==null?void 0:r[e])};var pc=oe({enhance({app:t}){const e=dc(),r=t._context.provides[uo],l=it(()=>wc(e.value,r.value));t.provide(Wi,l),Object.defineProperties(t.config.globalProperties,{$theme:{get(){return e.value}},$themeLocale:{get(){return l.value}}})}});/*!
  * vue-router v4.0.15
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Zi=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol",nn=t=>Zi?Symbol(t):"_vr_"+t,uc=nn("rvlm"),ls=nn("rvd"),pr=nn("r"),_o=nn("rl"),Ur=nn("rvl"),Ie=typeof window!="undefined";function _c(t){return t.__esModule||Zi&&t[Symbol.toStringTag]==="Module"}const xt=Object.assign;function Cr(t,e){const r={};for(const l in e){const h=e[l];r[l]=Array.isArray(h)?h.map(t):t(h)}return r}const xn=()=>{},gc=/\/$/,xc=t=>t.replace(gc,"");function Br(t,e,r="/"){let l,h={},c="",d="";const w=e.indexOf("?"),p=e.indexOf("#",w>-1?w:0);return w>-1&&(l=e.slice(0,w),c=e.slice(w+1,p>-1?p:e.length),h=t(c)),p>-1&&(l=l||e.slice(0,p),d=e.slice(p,e.length)),l=fc(l!=null?l:e,r),{fullPath:l+(c&&"?")+c+d,path:l,query:h,hash:d}}function vc(t,e){const r=e.query?t(e.query):"";return e.path+(r&&"?")+r+(e.hash||"")}function as(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function kc(t,e,r){const l=e.matched.length-1,h=r.matched.length-1;return l>-1&&l===h&&Ke(e.matched[l],r.matched[h])&&Gi(e.params,r.params)&&t(e.query)===t(r.query)&&e.hash===r.hash}function Ke(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Gi(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const r in t)if(!mc(t[r],e[r]))return!1;return!0}function mc(t,e){return Array.isArray(t)?hs(t,e):Array.isArray(e)?hs(e,t):t===e}function hs(t,e){return Array.isArray(e)?t.length===e.length&&t.every((r,l)=>r===e[l]):t.length===1&&t[0]===e}function fc(t,e){if(t.startsWith("/"))return t;if(!t)return e;const r=e.split("/"),l=t.split("/");let h=r.length-1,c,d;for(c=0;c<l.length;c++)if(d=l[c],!(h===1||d==="."))if(d==="..")h--;else break;return r.slice(0,h).join("/")+"/"+l.slice(c-(c===l.length?1:0)).join("/")}var Bn;(function(t){t.pop="pop",t.push="push"})(Bn||(Bn={}));var vn;(function(t){t.back="back",t.forward="forward",t.unknown=""})(vn||(vn={}));function Mc(t){if(!t)if(Ie){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),xc(t)}const $c=/^[^#]+#/;function Cc(t,e){return t.replace($c,"#")+e}function Bc(t,e){const r=document.documentElement.getBoundingClientRect(),l=t.getBoundingClientRect();return{behavior:e.behavior,left:l.left-r.left-(e.left||0),top:l.top-r.top-(e.top||0)}}const ur=()=>({left:window.pageXOffset,top:window.pageYOffset});function bc(t){let e;if("el"in t){const r=t.el,l=typeof r=="string"&&r.startsWith("#"),h=typeof r=="string"?l?document.getElementById(r.slice(1)):document.querySelector(r):r;if(!h)return;e=Bc(h,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function cs(t,e){return(history.state?history.state.position-e:-1)+t}const qr=new Map;function yc(t,e){qr.set(t,e)}function jc(t){const e=qr.get(t);return qr.delete(t),e}let Lc=()=>location.protocol+"//"+location.host;function Ki(t,e){const{pathname:r,search:l,hash:h}=e,c=t.indexOf("#");if(c>-1){let w=h.includes(t.slice(c))?t.slice(c).length:1,p=h.slice(w);return p[0]!=="/"&&(p="/"+p),as(p,"")}return as(r,t)+l+h}function Sc(t,e,r,l){let h=[],c=[],d=null;const w=({state:x})=>{const $=Ki(t,location),B=r.value,E=e.value;let P=0;if(x){if(r.value=$,e.value=x,d&&d===B){d=null;return}P=E?x.position-E.position:0}else l($);h.forEach(m=>{m(r.value,B,{delta:P,type:Bn.pop,direction:P?P>0?vn.forward:vn.back:vn.unknown})})};function p(){d=r.value}function u(x){h.push(x);const $=()=>{const B=h.indexOf(x);B>-1&&h.splice(B,1)};return c.push($),$}function g(){const{history:x}=window;!x.state||x.replaceState(xt({},x.state,{scroll:ur()}),"")}function k(){for(const x of c)x();c=[],window.removeEventListener("popstate",w),window.removeEventListener("beforeunload",g)}return window.addEventListener("popstate",w),window.addEventListener("beforeunload",g),{pauseListeners:p,listen:u,destroy:k}}function ds(t,e,r,l=!1,h=!1){return{back:t,current:e,forward:r,replaced:l,position:window.history.length,scroll:h?ur():null}}function Ac(t){const{history:e,location:r}=window,l={value:Ki(t,r)},h={value:e.state};h.value||c(l.value,{back:null,current:l.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function c(p,u,g){const k=t.indexOf("#"),x=k>-1?(r.host&&document.querySelector("base")?t:t.slice(k))+p:Lc()+t+p;try{e[g?"replaceState":"pushState"](u,"",x),h.value=u}catch($){console.error($),r[g?"replace":"assign"](x)}}function d(p,u){const g=xt({},e.state,ds(h.value.back,p,h.value.forward,!0),u,{position:h.value.position});c(p,g,!0),l.value=p}function w(p,u){const g=xt({},h.value,e.state,{forward:p,scroll:ur()});c(g.current,g,!0);const k=xt({},ds(l.value,p,null),{position:g.position+1},u);c(p,k,!1),l.value=p}return{location:l,state:h,push:w,replace:d}}function Pc(t){t=Mc(t);const e=Ac(t),r=Sc(t,e.state,e.location,e.replace);function l(c,d=!0){d||r.pauseListeners(),history.go(c)}const h=xt({location:"",base:t,go:l,createHref:Cc.bind(null,t)},e,r);return Object.defineProperty(h,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(h,"state",{enumerable:!0,get:()=>e.state.value}),h}function Vc(t){return typeof t=="string"||t&&typeof t=="object"}function Xi(t){return typeof t=="string"||typeof t=="symbol"}const ie={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Yi=nn("nf");var ws;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(ws||(ws={}));function Xe(t,e){return xt(new Error,{type:t,[Yi]:!0},e)}function _e(t,e){return t instanceof Error&&Yi in t&&(e==null||!!(t.type&e))}const ps="[^/]+?",Hc={sensitive:!1,strict:!1,start:!0,end:!0},Ec=/[.+*?^${}()[\]/\\]/g;function Tc(t,e){const r=xt({},Hc,e),l=[];let h=r.start?"^":"";const c=[];for(const u of t){const g=u.length?[]:[90];r.strict&&!u.length&&(h+="/");for(let k=0;k<u.length;k++){const x=u[k];let $=40+(r.sensitive?.25:0);if(x.type===0)k||(h+="/"),h+=x.value.replace(Ec,"\\$&"),$+=40;else if(x.type===1){const{value:B,repeatable:E,optional:P,regexp:m}=x;c.push({name:B,repeatable:E,optional:P});const M=m||ps;if(M!==ps){$+=10;try{new RegExp(`(${M})`)}catch(D){throw new Error(`Invalid custom RegExp for param "${B}" (${M}): `+D.message)}}let S=E?`((?:${M})(?:/(?:${M}))*)`:`(${M})`;k||(S=P&&u.length<2?`(?:/${S})`:"/"+S),P&&(S+="?"),h+=S,$+=20,P&&($+=-8),E&&($+=-20),M===".*"&&($+=-50)}g.push($)}l.push(g)}if(r.strict&&r.end){const u=l.length-1;l[u][l[u].length-1]+=.7000000000000001}r.strict||(h+="/?"),r.end?h+="$":r.strict&&(h+="(?:/|$)");const d=new RegExp(h,r.sensitive?"":"i");function w(u){const g=u.match(d),k={};if(!g)return null;for(let x=1;x<g.length;x++){const $=g[x]||"",B=c[x-1];k[B.name]=$&&B.repeatable?$.split("/"):$}return k}function p(u){let g="",k=!1;for(const x of t){(!k||!g.endsWith("/"))&&(g+="/"),k=!1;for(const $ of x)if($.type===0)g+=$.value;else if($.type===1){const{value:B,repeatable:E,optional:P}=$,m=B in u?u[B]:"";if(Array.isArray(m)&&!E)throw new Error(`Provided param "${B}" is an array but it is not repeatable (* or + modifiers)`);const M=Array.isArray(m)?m.join("/"):m;if(!M)if(P)x.length<2&&t.length>1&&(g.endsWith("/")?g=g.slice(0,-1):k=!0);else throw new Error(`Missing required param "${B}"`);g+=M}}return g}return{re:d,score:l,keys:c,parse:w,stringify:p}}function Rc(t,e){let r=0;for(;r<t.length&&r<e.length;){const l=e[r]-t[r];if(l)return l;r++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function Fc(t,e){let r=0;const l=t.score,h=e.score;for(;r<l.length&&r<h.length;){const c=Rc(l[r],h[r]);if(c)return c;r++}return h.length-l.length}const Dc={type:0,value:""},zc=/[a-zA-Z0-9_]/;function Oc(t){if(!t)return[[]];if(t==="/")return[[Dc]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e($){throw new Error(`ERR (${r})/"${u}": ${$}`)}let r=0,l=r;const h=[];let c;function d(){c&&h.push(c),c=[]}let w=0,p,u="",g="";function k(){!u||(r===0?c.push({type:0,value:u}):r===1||r===2||r===3?(c.length>1&&(p==="*"||p==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),c.push({type:1,value:u,regexp:g,repeatable:p==="*"||p==="+",optional:p==="*"||p==="?"})):e("Invalid state to consume buffer"),u="")}function x(){u+=p}for(;w<t.length;){if(p=t[w++],p==="\\"&&r!==2){l=r,r=4;continue}switch(r){case 0:p==="/"?(u&&k(),d()):p===":"?(k(),r=1):x();break;case 4:x(),r=l;break;case 1:p==="("?r=2:zc.test(p)?x():(k(),r=0,p!=="*"&&p!=="?"&&p!=="+"&&w--);break;case 2:p===")"?g[g.length-1]=="\\"?g=g.slice(0,-1)+p:r=3:g+=p;break;case 3:k(),r=0,p!=="*"&&p!=="?"&&p!=="+"&&w--,g="";break;default:e("Unknown state");break}}return r===2&&e(`Unfinished custom RegExp for param "${u}"`),k(),d(),h}function Ic(t,e,r){const l=Tc(Oc(t.path),r),h=xt(l,{record:t,parent:e,children:[],alias:[]});return e&&!h.record.aliasOf==!e.record.aliasOf&&e.children.push(h),h}function Nc(t,e){const r=[],l=new Map;e=_s({strict:!1,end:!0,sensitive:!1},e);function h(g){return l.get(g)}function c(g,k,x){const $=!x,B=qc(g);B.aliasOf=x&&x.record;const E=_s(e,g),P=[B];if("alias"in g){const S=typeof g.alias=="string"?[g.alias]:g.alias;for(const D of S)P.push(xt({},B,{components:x?x.record.components:B.components,path:D,aliasOf:x?x.record:B}))}let m,M;for(const S of P){const{path:D}=S;if(k&&D[0]!=="/"){const W=k.record.path,Y=W[W.length-1]==="/"?"":"/";S.path=k.record.path+(D&&Y+D)}if(m=Ic(S,k,E),x?x.alias.push(m):(M=M||m,M!==m&&M.alias.push(m),$&&g.name&&!us(m)&&d(g.name)),"children"in B){const W=B.children;for(let Y=0;Y<W.length;Y++)c(W[Y],m,x&&x.children[Y])}x=x||m,p(m)}return M?()=>{d(M)}:xn}function d(g){if(Xi(g)){const k=l.get(g);k&&(l.delete(g),r.splice(r.indexOf(k),1),k.children.forEach(d),k.alias.forEach(d))}else{const k=r.indexOf(g);k>-1&&(r.splice(k,1),g.record.name&&l.delete(g.record.name),g.children.forEach(d),g.alias.forEach(d))}}function w(){return r}function p(g){let k=0;for(;k<r.length&&Fc(g,r[k])>=0&&(g.record.path!==r[k].record.path||!Ji(g,r[k]));)k++;r.splice(k,0,g),g.record.name&&!us(g)&&l.set(g.record.name,g)}function u(g,k){let x,$={},B,E;if("name"in g&&g.name){if(x=l.get(g.name),!x)throw Xe(1,{location:g});E=x.record.name,$=xt(Uc(k.params,x.keys.filter(M=>!M.optional).map(M=>M.name)),g.params),B=x.stringify($)}else if("path"in g)B=g.path,x=r.find(M=>M.re.test(B)),x&&($=x.parse(B),E=x.record.name);else{if(x=k.name?l.get(k.name):r.find(M=>M.re.test(k.path)),!x)throw Xe(1,{location:g,currentLocation:k});E=x.record.name,$=xt({},k.params,g.params),B=x.stringify($)}const P=[];let m=x;for(;m;)P.unshift(m.record),m=m.parent;return{name:E,path:B,params:$,matched:P,meta:Zc(P)}}return t.forEach(g=>c(g)),{addRoute:c,resolve:u,removeRoute:d,getRoutes:w,getRecordMatcher:h}}function Uc(t,e){const r={};for(const l of e)l in t&&(r[l]=t[l]);return r}function qc(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:Wc(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||{}:{default:t.component}}}function Wc(t){const e={},r=t.props||!1;if("component"in t)e.default=r;else for(const l in t.components)e[l]=typeof r=="boolean"?r:r[l];return e}function us(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Zc(t){return t.reduce((e,r)=>xt(e,r.meta),{})}function _s(t,e){const r={};for(const l in t)r[l]=l in e?e[l]:t[l];return r}function Ji(t,e){return e.children.some(r=>r===t||Ji(t,r))}const Qi=/#/g,Gc=/&/g,Kc=/\//g,Xc=/=/g,Yc=/\?/g,tl=/\+/g,Jc=/%5B/g,Qc=/%5D/g,el=/%5E/g,t1=/%60/g,nl=/%7B/g,e1=/%7C/g,rl=/%7D/g,n1=/%20/g;function go(t){return encodeURI(""+t).replace(e1,"|").replace(Jc,"[").replace(Qc,"]")}function r1(t){return go(t).replace(nl,"{").replace(rl,"}").replace(el,"^")}function Wr(t){return go(t).replace(tl,"%2B").replace(n1,"+").replace(Qi,"%23").replace(Gc,"%26").replace(t1,"`").replace(nl,"{").replace(rl,"}").replace(el,"^")}function o1(t){return Wr(t).replace(Xc,"%3D")}function s1(t){return go(t).replace(Qi,"%23").replace(Yc,"%3F")}function i1(t){return t==null?"":s1(t).replace(Kc,"%2F")}function Yn(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function l1(t){const e={};if(t===""||t==="?")return e;const l=(t[0]==="?"?t.slice(1):t).split("&");for(let h=0;h<l.length;++h){const c=l[h].replace(tl," "),d=c.indexOf("="),w=Yn(d<0?c:c.slice(0,d)),p=d<0?null:Yn(c.slice(d+1));if(w in e){let u=e[w];Array.isArray(u)||(u=e[w]=[u]),u.push(p)}else e[w]=p}return e}function gs(t){let e="";for(let r in t){const l=t[r];if(r=o1(r),l==null){l!==void 0&&(e+=(e.length?"&":"")+r);continue}(Array.isArray(l)?l.map(c=>c&&Wr(c)):[l&&Wr(l)]).forEach(c=>{c!==void 0&&(e+=(e.length?"&":"")+r,c!=null&&(e+="="+c))})}return e}function a1(t){const e={};for(const r in t){const l=t[r];l!==void 0&&(e[r]=Array.isArray(l)?l.map(h=>h==null?null:""+h):l==null?l:""+l)}return e}function hn(){let t=[];function e(l){return t.push(l),()=>{const h=t.indexOf(l);h>-1&&t.splice(h,1)}}function r(){t=[]}return{add:e,list:()=>t,reset:r}}function ve(t,e,r,l,h){const c=l&&(l.enterCallbacks[h]=l.enterCallbacks[h]||[]);return()=>new Promise((d,w)=>{const p=k=>{k===!1?w(Xe(4,{from:r,to:e})):k instanceof Error?w(k):Vc(k)?w(Xe(2,{from:e,to:k})):(c&&l.enterCallbacks[h]===c&&typeof k=="function"&&c.push(k),d())},u=t.call(l&&l.instances[h],e,r,p);let g=Promise.resolve(u);t.length<3&&(g=g.then(p)),g.catch(k=>w(k))})}function br(t,e,r,l){const h=[];for(const c of t)for(const d in c.components){let w=c.components[d];if(!(e!=="beforeRouteEnter"&&!c.instances[d]))if(h1(w)){const u=(w.__vccOpts||w)[e];u&&h.push(ve(u,r,l,c,d))}else{let p=w();h.push(()=>p.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${d}" at "${c.path}"`));const g=_c(u)?u.default:u;c.components[d]=g;const x=(g.__vccOpts||g)[e];return x&&ve(x,r,l,c,d)()}))}}return h}function h1(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function xs(t){const e=Ct(pr),r=Ct(_o),l=it(()=>e.resolve(Wt(t.to))),h=it(()=>{const{matched:p}=l.value,{length:u}=p,g=p[u-1],k=r.matched;if(!g||!k.length)return-1;const x=k.findIndex(Ke.bind(null,g));if(x>-1)return x;const $=vs(p[u-2]);return u>1&&vs(g)===$&&k[k.length-1].path!==$?k.findIndex(Ke.bind(null,p[u-2])):x}),c=it(()=>h.value>-1&&p1(r.params,l.value.params)),d=it(()=>h.value>-1&&h.value===r.matched.length-1&&Gi(r.params,l.value.params));function w(p={}){return w1(p)?e[Wt(t.replace)?"replace":"push"](Wt(t.to)).catch(xn):Promise.resolve()}return{route:l,href:it(()=>l.value.href),isActive:c,isExactActive:d,navigate:w}}const c1=o({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:xs,setup(t,{slots:e}){const r=en(xs(t)),{options:l}=Ct(pr),h=it(()=>({[ks(t.activeClass,l.linkActiveClass,"router-link-active")]:r.isActive,[ks(t.exactActiveClass,l.linkExactActiveClass,"router-link-exact-active")]:r.isExactActive}));return()=>{const c=e.default&&e.default(r);return t.custom?c:rt("a",{"aria-current":r.isExactActive?t.ariaCurrentValue:null,href:r.href,onClick:r.navigate,class:h.value},c)}}}),d1=c1;function w1(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function p1(t,e){for(const r in e){const l=e[r],h=t[r];if(typeof l=="string"){if(l!==h)return!1}else if(!Array.isArray(h)||h.length!==l.length||l.some((c,d)=>c!==h[d]))return!1}return!0}function vs(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const ks=(t,e,r)=>t!=null?t:e!=null?e:r,u1=o({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:r}){const l=Ct(Ur),h=it(()=>t.route||l.value),c=Ct(ls,0),d=it(()=>h.value.matched[c]);ee(ls,c+1),ee(uc,d),ee(Ur,h);const w=yt();return Ve(()=>[w.value,d.value,t.name],([p,u,g],[k,x,$])=>{u&&(u.instances[g]=p,x&&x!==u&&p&&p===k&&(u.leaveGuards.size||(u.leaveGuards=x.leaveGuards),u.updateGuards.size||(u.updateGuards=x.updateGuards))),p&&u&&(!x||!Ke(u,x)||!k)&&(u.enterCallbacks[g]||[]).forEach(B=>B(p))},{flush:"post"}),()=>{const p=h.value,u=d.value,g=u&&u.components[t.name],k=t.name;if(!g)return ms(r.default,{Component:g,route:p});const x=u.props[t.name],$=x?x===!0?p.params:typeof x=="function"?x(p):x:null,E=rt(g,xt({},$,e,{onVnodeUnmounted:P=>{P.component.isUnmounted&&(u.instances[k]=null)},ref:w}));return ms(r.default,{Component:E,route:p})||E}}});function ms(t,e){if(!t)return null;const r=t(e);return r.length===1?r[0]:r}const ol=u1;function _1(t){const e=Nc(t.routes,t),r=t.parseQuery||l1,l=t.stringifyQuery||gs,h=t.history,c=hn(),d=hn(),w=hn(),p=ca(ie);let u=ie;Ie&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const g=Cr.bind(null,C=>""+C),k=Cr.bind(null,i1),x=Cr.bind(null,Yn);function $(C,O){let H,N;return Xi(C)?(H=e.getRecordMatcher(C),N=O):N=C,e.addRoute(N,H)}function B(C){const O=e.getRecordMatcher(C);O&&e.removeRoute(O)}function E(){return e.getRoutes().map(C=>C.record)}function P(C){return!!e.getRecordMatcher(C)}function m(C,O){if(O=xt({},O||p.value),typeof C=="string"){const et=Br(r,C,O.path),_=e.resolve({path:et.path},O),v=h.createHref(et.fullPath);return xt(et,_,{params:x(_.params),hash:Yn(et.hash),redirectedFrom:void 0,href:v})}let H;if("path"in C)H=xt({},C,{path:Br(r,C.path,O.path).path});else{const et=xt({},C.params);for(const _ in et)et[_]==null&&delete et[_];H=xt({},C,{params:k(C.params)}),O.params=k(O.params)}const N=e.resolve(H,O),ut=C.hash||"";N.params=g(x(N.params));const mt=vc(l,xt({},C,{hash:r1(ut),path:N.path})),st=h.createHref(mt);return xt({fullPath:mt,hash:ut,query:l===gs?a1(C.query):C.query||{}},N,{redirectedFrom:void 0,href:st})}function M(C){return typeof C=="string"?Br(r,C,p.value.path):xt({},C)}function S(C,O){if(u!==C)return Xe(8,{from:O,to:C})}function D(C){return Q(C)}function W(C){return D(xt(M(C),{replace:!0}))}function Y(C){const O=C.matched[C.matched.length-1];if(O&&O.redirect){const{redirect:H}=O;let N=typeof H=="function"?H(C):H;return typeof N=="string"&&(N=N.includes("?")||N.includes("#")?N=M(N):{path:N},N.params={}),xt({query:C.query,hash:C.hash,params:C.params},N)}}function Q(C,O){const H=u=m(C),N=p.value,ut=C.state,mt=C.force,st=C.replace===!0,et=Y(H);if(et)return Q(xt(M(et),{state:ut,force:mt,replace:st}),O||H);const _=H;_.redirectedFrom=O;let v;return!mt&&kc(l,N,H)&&(v=Xe(16,{to:_,from:N}),Te(N,N,!0,!1)),(v?Promise.resolve(v):G(_,N)).catch(f=>_e(f)?_e(f,2)?f:Et(f):kt(f,_,N)).then(f=>{if(f){if(_e(f,2))return Q(xt(M(f.to),{state:ut,force:mt,replace:st}),O||_)}else f=tt(_,N,!0,st,ut);return K(_,N,f),f})}function R(C,O){const H=S(C,O);return H?Promise.reject(H):Promise.resolve()}function G(C,O){let H;const[N,ut,mt]=g1(C,O);H=br(N.reverse(),"beforeRouteLeave",C,O);for(const et of N)et.leaveGuards.forEach(_=>{H.push(ve(_,C,O))});const st=R.bind(null,C,O);return H.push(st),Fe(H).then(()=>{H=[];for(const et of c.list())H.push(ve(et,C,O));return H.push(st),Fe(H)}).then(()=>{H=br(ut,"beforeRouteUpdate",C,O);for(const et of ut)et.updateGuards.forEach(_=>{H.push(ve(_,C,O))});return H.push(st),Fe(H)}).then(()=>{H=[];for(const et of C.matched)if(et.beforeEnter&&!O.matched.includes(et))if(Array.isArray(et.beforeEnter))for(const _ of et.beforeEnter)H.push(ve(_,C,O));else H.push(ve(et.beforeEnter,C,O));return H.push(st),Fe(H)}).then(()=>(C.matched.forEach(et=>et.enterCallbacks={}),H=br(mt,"beforeRouteEnter",C,O),H.push(st),Fe(H))).then(()=>{H=[];for(const et of d.list())H.push(ve(et,C,O));return H.push(st),Fe(H)}).catch(et=>_e(et,8)?et:Promise.reject(et))}function K(C,O,H){for(const N of w.list())N(C,O,H)}function tt(C,O,H,N,ut){const mt=S(C,O);if(mt)return mt;const st=O===ie,et=Ie?history.state:{};H&&(N||st?h.replace(C.fullPath,xt({scroll:st&&et&&et.scroll},ut)):h.push(C.fullPath,ut)),p.value=C,Te(C,O,H,st),Et()}let F;function ot(){F||(F=h.listen((C,O,H)=>{const N=m(C),ut=Y(N);if(ut){Q(xt(ut,{replace:!0}),N).catch(xn);return}u=N;const mt=p.value;Ie&&yc(cs(mt.fullPath,H.delta),ur()),G(N,mt).catch(st=>_e(st,12)?st:_e(st,2)?(Q(st.to,N).then(et=>{_e(et,20)&&!H.delta&&H.type===Bn.pop&&h.go(-1,!1)}).catch(xn),Promise.reject()):(H.delta&&h.go(-H.delta,!1),kt(st,N,mt))).then(st=>{st=st||tt(N,mt,!1),st&&(H.delta?h.go(-H.delta,!1):H.type===Bn.pop&&_e(st,20)&&h.go(-1,!1)),K(N,mt,st)}).catch(xn)}))}let I=hn(),Lt=hn(),ct;function kt(C,O,H){Et(C);const N=Lt.list();return N.length?N.forEach(ut=>ut(C,O,H)):console.error(C),Promise.reject(C)}function pt(){return ct&&p.value!==ie?Promise.resolve():new Promise((C,O)=>{I.add([C,O])})}function Et(C){return ct||(ct=!C,ot(),I.list().forEach(([O,H])=>C?H(C):O()),I.reset()),C}function Te(C,O,H,N){const{scrollBehavior:ut}=t;if(!Ie||!ut)return Promise.resolve();const mt=!H&&jc(cs(C.fullPath,0))||(N||!H)&&history.state&&history.state.scroll||null;return ti().then(()=>ut(C,O,mt)).then(st=>st&&bc(st)).catch(st=>kt(st,C,O))}const se=C=>h.go(C);let Xt;const Ot=new Set;return{currentRoute:p,addRoute:$,removeRoute:B,hasRoute:P,getRoutes:E,resolve:m,options:t,push:D,replace:W,go:se,back:()=>se(-1),forward:()=>se(1),beforeEach:c.add,beforeResolve:d.add,afterEach:w.add,onError:Lt.add,isReady:pt,install(C){const O=this;C.component("RouterLink",d1),C.component("RouterView",ol),C.config.globalProperties.$router=O,Object.defineProperty(C.config.globalProperties,"$route",{enumerable:!0,get:()=>Wt(p)}),Ie&&!Xt&&p.value===ie&&(Xt=!0,D(h.location).catch(ut=>{}));const H={};for(const ut in ie)H[ut]=it(()=>p.value[ut]);C.provide(pr,O),C.provide(_o,en(H)),C.provide(Ur,p);const N=C.unmount;Ot.add(C),C.unmount=function(){Ot.delete(C),Ot.size<1&&(u=ie,F&&F(),F=null,p.value=ie,Xt=!1,ct=!1),N()}}}}function Fe(t){return t.reduce((e,r)=>e.then(()=>r()),Promise.resolve())}function g1(t,e){const r=[],l=[],h=[],c=Math.max(e.matched.length,t.matched.length);for(let d=0;d<c;d++){const w=e.matched[d];w&&(t.matched.find(u=>Ke(u,w))?l.push(w):r.push(w));const p=t.matched[d];p&&(e.matched.find(u=>Ke(u,p))||h.push(p))}return[r,l,h]}function rn(){return Ct(pr)}function xo(){return Ct(_o)}const x1=({input:t,hotKeys:e})=>{const r=l=>{!t.value||e.value.length===0||l.target===document.body&&e.value.includes(l.key)&&(t.value.focus(),l.preventDefault())};re(()=>{document.addEventListener("keydown",r)}),sr(()=>{document.removeEventListener("keydown",r)})},v1=[{title:"",headers:[],path:"/",pathLocale:"/",extraFields:[]},{title:"vuepress-theme-reco",headers:[{level:2,title:"Use",slug:"use",children:[]},{level:2,title:"Play Together",slug:"play-together",children:[{level:3,title:"0.x",slug:"_0-x",children:[]},{level:3,title:"1.x",slug:"_1-x",children:[]},{level:3,title:"CLI",slug:"cli",children:[]}]},{level:2,title:"License",slug:"license",children:[]}],path:"/blogs/other/guide.html",pathLocale:"/",extraFields:[]},{title:"\u4E91\u97F3\u4E50\u5C0F\u7A0B\u5E8F",headers:[{level:3,title:"\u9879\u76EE\u622A\u56FE",slug:"\u9879\u76EE\u622A\u56FE",children:[]}],path:"/blogs/frontEnd/2022/052901.html",pathLocale:"/",extraFields:[]},{title:"\u597D\u5BA2\u79DF\u623F\u79FB\u52A8\u7AEF\u7F51\u9875",headers:[{level:2,title:"\u9879\u76EE\u622A\u56FE",slug:"\u9879\u76EE\u622A\u56FE",children:[]}],path:"/blogs/frontEnd/2022/060610.html",pathLocale:"/",extraFields:[]},{title:"SSO \u5355\u70B9\u767B\u5F55\u7CFB\u7EDF",headers:[{level:2,title:"\u9879\u76EE\u622A\u56FE",slug:"\u9879\u76EE\u622A\u56FE",children:[]}],path:"/blogs/frontEnd/2022/061518.html",pathLocale:"/",extraFields:[]},{title:"",headers:[],path:"/404.html",pathLocale:"/",extraFields:[]},{title:"",headers:[],path:"/categories/frontEnd/1/",pathLocale:"/",extraFields:[]},{title:"",headers:[],path:"/categories/reco/1/",pathLocale:"/",extraFields:[]},{title:"",headers:[],path:"/tags/SSO/1/",pathLocale:"/",extraFields:[]},{title:"",headers:[],path:"/tags/qianduan/1/",pathLocale:"/",extraFields:[]},{title:"",headers:[],path:"/tags/yidongduan/1/",pathLocale:"/",extraFields:[]},{title:"",headers:[],path:"/tags/xiaochengxu/1/",pathLocale:"/",extraFields:[]},{title:"",headers:[],path:"/tags/yinleruanjian/1/",pathLocale:"/",extraFields:[]},{title:"",headers:[],path:"/tags/reco/1/",pathLocale:"/",extraFields:[]},{title:"",headers:[],path:"/timeline/",pathLocale:"/",extraFields:[]},{title:"",headers:[],path:"/posts/1/",pathLocale:"/",extraFields:[]}],sl=yt(v1),k1=()=>sl;_r.webpackHot&&(__VUE_HMR_RUNTIME__.updateSearchIndex=t=>{sl.value=t});const m1=/[^\x00-\x7F]/,f1=t=>t.split(/\s+/g).map(e=>e.trim()).filter(e=>!!e),fs=t=>t.replace(/[-/\\^$*+?.()|[\]{}]/g,"\\$&"),Ms=(t,e)=>{const r=e.join(" "),l=f1(t);if(m1.test(t))return l.some(d=>r.toLowerCase().indexOf(d)>-1);const h=t.endsWith(" ");return new RegExp(l.map((d,w)=>l.length===w+1&&!h?`(?=.*\\b${fs(d)})`:`(?=.*\\b${fs(d)}\\b)`).join("")+".+","gi").test(r)},M1=({searchIndex:t,routeLocale:e,query:r,maxSuggestions:l})=>{const h=it(()=>t.value.filter(c=>c.pathLocale===e.value));return it(()=>{const c=r.value.trim().toLowerCase();if(!c)return[];const d=[],w=(p,u)=>{Ms(c,[u.title])&&d.push({link:`${p.path}#${u.slug}`,title:p.title,header:u.title});for(const g of u.children){if(d.length>=l.value)return;w(p,g)}};for(const p of h.value){if(d.length>=l.value)break;if(Ms(c,[p.title,...p.extraFields])){d.push({link:p.path,title:p.title});continue}for(const u of p.headers){if(d.length>=l.value)break;w(p,u)}}return d})},$1=t=>{const e=yt(0);return{focusIndex:e,focusNext:()=>{e.value<t.value.length-1?e.value+=1:e.value=0},focusPrev:()=>{e.value>0?e.value-=1:e.value=t.value.length-1}}},C1=o({name:"SearchBox",props:{locales:{type:Object,required:!1,default:()=>({})},hotKeys:{type:Array,required:!1,default:()=>[]},maxSuggestions:{type:Number,required:!1,default:5}},setup(t){const{locales:e,hotKeys:r,maxSuggestions:l}=yn(t),h=rn(),c=Ii(),d=k1(),w=yt(null),p=yt(!1),u=yt(""),g=it(()=>{var S;return(S=e.value[c.value])!=null?S:{}}),k=M1({searchIndex:d,routeLocale:c,query:u,maxSuggestions:l}),{focusIndex:x,focusNext:$,focusPrev:B}=$1(k);x1({input:w,hotKeys:r});const E=it(()=>p.value&&!!k.value.length),P=()=>{!E.value||B()},m=()=>{!E.value||$()},M=S=>{if(!E.value)return;const D=k.value[S];!D||h.push(D.link).then(()=>{u.value="",x.value=0})};return()=>rt("form",{class:"search-box",role:"search"},[rt("input",{ref:w,type:"search",placeholder:g.value.placeholder,autocomplete:"off",spellcheck:!1,value:u.value,onFocus:()=>p.value=!0,onBlur:()=>p.value=!1,onInput:S=>u.value=S.target.value,onKeydown:S=>{switch(S.key){case"ArrowUp":{P();break}case"ArrowDown":{m();break}case"Enter":{S.preventDefault(),M(x.value);break}}}}),E.value&&rt("ul",{class:"suggestions",onMouseleave:()=>x.value=-1},k.value.map(({link:S,title:D,header:W},Y)=>rt("li",{class:["suggestion",{focus:x.value===Y}],onMouseenter:()=>x.value=Y,onMousedown:()=>M(Y)},rt("a",{href:S,onClick:Q=>Q.preventDefault()},[rt("span",{class:"page-title"},D),W&&rt("span",{class:"page-header"},`> ${W}`)]))))])}});const B1={},b1=["s","/"],y1=5;var j1=oe({enhance({app:t}){t.component("SearchBox",e=>rt(C1,Rt({locales:B1,hotKeys:b1,maxSuggestions:y1},e)))}});const ht={settings:{minimum:.08,easing:"ease",speed:200,trickle:!0,trickleRate:.02,trickleSpeed:800,barSelector:'[role="bar"]',parent:"body",template:'<div class="bar" role="bar"></div>'},status:null,set:t=>{const e=ht.isStarted();t=yr(t,ht.settings.minimum,1),ht.status=t===1?null:t;const r=ht.render(!e),l=r.querySelector(ht.settings.barSelector),h=ht.settings.speed,c=ht.settings.easing;return r.offsetWidth,L1(d=>{Fn(l,{transform:"translate3d("+$s(t)+"%,0,0)",transition:"all "+h+"ms "+c}),t===1?(Fn(r,{transition:"none",opacity:"1"}),r.offsetWidth,setTimeout(function(){Fn(r,{transition:"all "+h+"ms linear",opacity:"0"}),setTimeout(function(){ht.remove(),d()},h)},h)):setTimeout(()=>d(),h)}),ht},isStarted:()=>typeof ht.status=="number",start:()=>{ht.status||ht.set(0);const t=()=>{setTimeout(()=>{!ht.status||(ht.trickle(),t())},ht.settings.trickleSpeed)};return ht.settings.trickle&&t(),ht},done:t=>!t&&!ht.status?ht:ht.inc(.3+.5*Math.random()).set(1),inc:t=>{let e=ht.status;return e?(typeof t!="number"&&(t=(1-e)*yr(Math.random()*e,.1,.95)),e=yr(e+t,0,.994),ht.set(e)):ht.start()},trickle:()=>ht.inc(Math.random()*ht.settings.trickleRate),render:t=>{if(ht.isRendered())return document.getElementById("nprogress");Cs(document.documentElement,"nprogress-busy");const e=document.createElement("div");e.id="nprogress",e.innerHTML=ht.settings.template;const r=e.querySelector(ht.settings.barSelector),l=t?"-100":$s(ht.status||0),h=document.querySelector(ht.settings.parent);return Fn(r,{transition:"all 0 linear",transform:"translate3d("+l+"%,0,0)"}),h!==document.body&&Cs(h,"nprogress-custom-parent"),h==null||h.appendChild(e),e},remove:()=>{Bs(document.documentElement,"nprogress-busy"),Bs(document.querySelector(ht.settings.parent),"nprogress-custom-parent");const t=document.getElementById("nprogress");t&&S1(t)},isRendered:()=>!!document.getElementById("nprogress")},yr=(t,e,r)=>t<e?e:t>r?r:t,$s=t=>(-1+t)*100,L1=function(){const t=[];function e(){const r=t.shift();r&&r(e)}return function(r){t.push(r),t.length===1&&e()}}(),Fn=function(){const t=["Webkit","O","Moz","ms"],e={};function r(d){return d.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,function(w,p){return p.toUpperCase()})}function l(d){const w=document.body.style;if(d in w)return d;let p=t.length;const u=d.charAt(0).toUpperCase()+d.slice(1);let g;for(;p--;)if(g=t[p]+u,g in w)return g;return d}function h(d){return d=r(d),e[d]||(e[d]=l(d))}function c(d,w,p){w=h(w),d.style[w]=p}return function(d,w){for(const p in w){const u=w[p];u!==void 0&&Object.prototype.hasOwnProperty.call(w,p)&&c(d,p,u)}}}(),il=(t,e)=>(typeof t=="string"?t:vo(t)).indexOf(" "+e+" ")>=0,Cs=(t,e)=>{const r=vo(t),l=r+e;il(r,e)||(t.className=l.substring(1))},Bs=(t,e)=>{const r=vo(t);if(!il(t,e))return;const l=r.replace(" "+e+" "," ");t.className=l.substring(1,l.length-1)},vo=t=>(" "+(t.className||"")+" ").replace(/\s+/gi," "),S1=t=>{t&&t.parentNode&&t.parentNode.removeChild(t)};const A1=()=>{re(()=>{const t=rn(),e=new Set;e.add(t.currentRoute.value.path),t.beforeEach(r=>{e.has(r.path)||ht.start()}),t.afterEach(r=>{e.add(r.path),ht.done()})})};var P1=oe({setup(){A1()}});function ll(t,e,r){var l,h,c;e===void 0&&(e=50),r===void 0&&(r={});var d=(l=r.isImmediate)!=null&&l,w=(h=r.callback)!=null&&h,p=r.maxWait,u=Date.now(),g=[];function k(){if(p!==void 0){var $=Date.now()-u;if($+e>=p)return p-$}return e}var x=function(){var $=[].slice.call(arguments),B=this;return new Promise(function(E,P){var m=d&&c===void 0;if(c!==void 0&&clearTimeout(c),c=setTimeout(function(){if(c=void 0,u=Date.now(),!d){var S=t.apply(B,$);w&&w(S),g.forEach(function(D){return(0,D.resolve)(S)}),g=[]}},k()),m){var M=t.apply(B,$);return w&&w(M),E(M)}g.push({resolve:E,reject:P})})};return x.cancel=function($){c!==void 0&&clearTimeout(c),g.forEach(function(B){return(0,B.reject)($)}),g=[]},x}const V1=({headerLinkSelector:t,headerAnchorSelector:e,delay:r,offset:l=5})=>{const h=rn(),c=dr(),w=ll(()=>{var E,P,m,M;const p=Array.from(document.querySelectorAll(t)),g=Array.from(document.querySelectorAll(e)).filter(S=>p.some(D=>D.hash===S.hash)),k=Math.max(window.pageYOffset,document.documentElement.scrollTop,document.body.scrollTop),x=window.innerHeight+k,$=Math.max(document.documentElement.scrollHeight,document.body.scrollHeight),B=Math.abs($-x)<l;for(let S=0;S<g.length;S++){const D=g[S],W=g[S+1],Y=k>=((P=(E=D.parentElement)==null?void 0:E.offsetTop)!=null?P:0)-l,Q=!W||k<((M=(m=W.parentElement)==null?void 0:m.offsetTop)!=null?M:0)-l;if(!(Y&&Q))continue;const G=decodeURIComponent(h.currentRoute.value.hash),K=decodeURIComponent(D.hash);if(G===K)return;if(B){for(let tt=S+1;tt<g.length;tt++)if(G===decodeURIComponent(g[tt].hash))return}H1(h,{hash:K,force:!0});return}},r);re(()=>{w(),window.addEventListener("scroll",w)}),sr(()=>{window.removeEventListener("scroll",w)}),Ve(()=>c.value.path,w)},H1=async(t,...e)=>{const{scrollBehavior:r}=t.options;t.options.scrollBehavior=void 0,await t.replace(...e).finally(()=>t.options.scrollBehavior=r)},E1="a.page-header-item",T1=".header-anchor",R1=200,F1=5;var D1=oe({setup(){V1({headerLinkSelector:E1,headerAnchorSelector:T1,delay:R1,offset:F1})}});const z1=rt("svg",{class:"external-link-icon",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",x:"0px",y:"0px",viewBox:"0 0 100 100",width:"15",height:"15"},[rt("path",{fill:"currentColor",d:"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"}),rt("polygon",{fill:"currentColor",points:"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"})]),O1=o({name:"ExternalLinkIcon",props:{locales:{type:Object,required:!1,default:()=>({})}},setup(t){const e=Ii(),r=it(()=>{var l;return(l=t.locales[e.value])!=null?l:{openInNewWindow:"open in new window"}});return()=>rt("span",[z1,rt("span",{class:"external-link-icon-sr-only"},r.value.openInNewWindow)])}}),I1={};var N1=oe({enhance({app:t}){t.component("ExternalLinkIcon",rt(O1,{locales:I1}))}}),U1={enhance:({app:t})=>{}},q1={enhance:({app:t})=>{}};const bs=()=>window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,W1=()=>window.scrollTo({top:0,behavior:"smooth"});const Z1=o({name:"BackToTop",setup(){const t=yt(0),e=it(()=>t.value>300),r=ll(()=>{t.value=bs()},100);re(()=>{t.value=bs(),window.addEventListener("scroll",()=>r())});const l=rt("div",{class:"back-to-top",onClick:W1});return()=>rt(po,{name:"back-to-top"},()=>e.value?l:null)}});var G1=oe({rootComponents:[Z1]});function K1(){const t=wr(),e=it(()=>{var c;return(c=t==null?void 0:t.value)===null||c===void 0?void 0:c.bulletin}),r=yt(!1),l="__CLOSE_BULLETIN_POPOVER__";return re(()=>{var c;const d=sessionStorage.getItem(l);r.value=d!=="true"&&!!(!((c=e==null?void 0:e.value)===null||c===void 0)&&c.body)}),{visible:r,bulletin:e,closeBulletinPopover:()=>{r.value=!1,sessionStorage.setItem(l,"true")}}}const X1={handleImage(t){return`<img style="${t.style||""}" src="${t.src}" />`},handleText(t){return`<div style="${t.style||""}">${t.content}</div>`},handleTitle(t){return`<h5 style="${t.style||""}">${t.content}</h5>`},handleButton(t){return`<a style="${t.style||""}" class="btn" href="${t.link}">${t.text}</a>`},handleButtongroup(t){return`<div class="btn-group">${(t.children||[]).reduce((r,l)=>r+=`<a style="${l.style||t.style||""}" class="btn" href="${l.link}">${l.text}</a>`,"")}</div>`},handleHr(t){return"<hr />"}};function Y1(){const t=wr();function e(l){if(Array.isArray(l))return l.map(h=>e(h));{let h=l.type;return h=h.slice(0,1).toUpperCase()+h.slice(1),X1[`handle${h}`](l)}}return{bodyNodes:it(()=>{var l,h;return e((h=(l=t==null?void 0:t.value)===null||l===void 0?void 0:l.bulletin)===null||h===void 0?void 0:h.body).join("")}),handleNode:e}}var on=(t,e)=>{const r=t.__vccOpts||t;for(const[l,h]of e)r[l]=h;return r};const J1={class:"bulletin-title"},Q1=n("svg",{t:"1573745677073",class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"4448",width:"22",height:"22"},[n("path",{d:"M512 34.133333a486.4 486.4 0 1 0 486.4 486.4A486.4 486.4 0 0 0 512 34.133333z m209.4848 632.8064l-55.6032 55.466667-151.517867-151.125333-151.517866 151.1168-55.6032-55.466667 151.517866-151.108267L307.242667 364.714667l55.6032-55.466667 151.517866 151.125333 151.517867-151.1168 55.6032 55.466667-151.517867 151.099733z m0 0","p-id":"4449"})],-1),td=[Q1],ed=["innerHTML"],nd=o({name:"Bulletin",setup(t){const{visible:e,bulletin:r,closeBulletinPopover:l}=K1(),{bodyNodes:h}=Y1();return(c,d)=>{var p,u;const w=ui("Xicons");return Wt(e)?(s(),i("div",{key:0,class:"bulletin-wrapper",style:Ee({width:((p=Wt(r))==null?void 0:p.width)||"300px"})},[n("div",J1,[Mt(w,{icon:"Bulb","icon-size":"28","icon-color":"#fff",text:((u=Wt(r))==null?void 0:u.title)||"\u516C\u544A","text-color":"#fff","text-size":"16"},null,8,["text"]),n("i",{class:"btn-close",onClick:d[0]||(d[0]=(...g)=>Wt(l)&&Wt(l)(...g))},td)]),n("div",{class:"bulletin-content",innerHTML:Wt(h)},null,8,ed)],4)):Xn("",!0)}}});var rd=on(nd,[["__file","Bulletin.vue"]]),od=oe({rootComponents:[rd]});function sd(){const t=wr(),e=it(()=>t.value.valineConfig?"valine":""),r=it(()=>t.value.valineConfig||{});return{solution:e,options:r}}var ys=o({name:"Valine",props:{options:{type:Object,default(){return{}}}},setup(t){const e=rn(),{options:r}=yn(t);re(()=>{const l=async()=>{const{Valine:h}=await nt(()=>import("./reco-valine.88224ab5.js"),[]),c=Rt({el:"#valine",placeholder:"just go go",notify:!1,verify:!1,avatar:"retro",visitor:!0,recordIP:!1,path:window.location.pathname},r.value);new h(c)};l(),Ve(()=>e.currentRoute.value.path,h=>{l()},{immediate:!0,deep:!0})})},render(){return rt("div",{class:"reco-valine-wrapper"},rt("div",{id:"valine"}))}}),id=o({components:{Valine:ys},props:{hideComments:{type:Boolean,default:!0}},setup(t){const{solution:e,options:r}=sd(),{hideComments:l}=yn(t),h=e.value==="valine"?ys:"";return()=>h?rt(h,{options:r.value,style:`display: ${l.value?"none":"block"}`}):null}}),ld=o({name:"ValineViews",props:{idVal:String,numStyle:Object,flagTitle:{type:String,default:"Your Article Title"}},setup(t){const e=Ni(),r=xo(),{idVal:l,numStyle:h,flagTitle:c}=yn(t),d=w=>e.value.base.slice(0,e.value.base.length-1)+w;return()=>rt("span",{id:d(l.value||r.path),class:"leancloud-visitors","data-flag-title":c.value},rt("a",{class:"leancloud-visitors-count",style:h.value}))}});function ad({app:t}){t.component("Comments",e=>rt(id,Rt({},e))),t.component("ValineViews",e=>rt(ld,Rt({},e)))}var hd=oe({enhance(...t){ad(...t)}});const al=Symbol(""),hl=Symbol(""),Zr=Symbol("");function PYt(){const t=Ct(hl)||{},e=Ct(Zr)||{},r=Ct(al)||{};if(!Zr)throw new Error("useSiteLocaleData() is called without provider.");const{currentRoute:l}=rn();return{classificationPosts:it(()=>r.value[l.value.path]||{}),classificationSummary:t,posts:e}}const cd={"/categories/frontEnd/1/":{pageSize:10,total:3,currentPage:1,currentClassificationKey:"categories",currentClassificationValue:"frontEnd",pages:[{data:{key:"v-928deb06",path:"/blogs/frontEnd/2022/061518.html",title:"SSO \u5355\u70B9\u767B\u5F55\u7CFB\u7EDF",lang:"en-US",frontmatter:{title:"SSO \u5355\u70B9\u767B\u5F55\u7CFB\u7EDF",date:"2022/6/15",tags:["SSO"],categories:["frontEnd"]},excerpt:`<div class="custom-container tip"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 8h.01"></path><path d="M11 12h1v4h1"></path></g></svg><p class="custom-container-title">TIP</p><ul>
<li>\u8FD9\u662F\u4E00\u4E2ASSO\u5355\u70B9\u767B\u5F55\u7684\u9879\u76EE\uFF0C\u7528\u6765\u6388\u6743\u767B\u5F55\u5176\u4ED6\u7684\u9879\u76EE</li>
<li>\u76EE\u524D\u6682\u6CA1\u6709\u9879\u76EE\u63A5\u5165\u8BE5\u767B\u5F55\u7CFB\u7EDF\uFF0C\u5728\u672A\u6765\u4F1A\u63A5\u5165\u4E00\u4E9B\u6211\u81EA\u5DF1\u5199\u7684\u9879\u76EE\u3002</li>
<li>\u4E5F\u53EF\u4EE5\u5728\u6CE8\u518CApp\u9875\u9762\u6CE8\u518C\u5E94\u7528\uFF0C\u4EE5\u63A5\u5165\u8BE5\u767B\u5F55\u7CFB\u7EDF</li>
</ul>
</div>`,headers:[{level:2,title:"\u9879\u76EE\u622A\u56FE",slug:"\u9879\u76EE\u622A\u56FE",children:[]}],git:{createdTime:1655292309e3,updatedTime:1655292309e3,contributors:[{name:"ZoftTi",email:"poleorder@icloud.com",commits:1}]},filePathRelative:"blogs/frontEnd/2022/061518.md"},key:"v-928deb06",path:"/blogs/frontEnd/2022/061518.html",title:"SSO \u5355\u70B9\u767B\u5F55\u7CFB\u7EDF",lang:"en-US",frontmatter:{title:"SSO \u5355\u70B9\u767B\u5F55\u7CFB\u7EDF",date:"2022/6/15",tags:["SSO"],categories:["frontEnd"]},excerpt:`<div class="custom-container tip"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 8h.01"></path><path d="M11 12h1v4h1"></path></g></svg><p class="custom-container-title">TIP</p><ul>
<li>\u8FD9\u662F\u4E00\u4E2ASSO\u5355\u70B9\u767B\u5F55\u7684\u9879\u76EE\uFF0C\u7528\u6765\u6388\u6743\u767B\u5F55\u5176\u4ED6\u7684\u9879\u76EE</li>
<li>\u76EE\u524D\u6682\u6CA1\u6709\u9879\u76EE\u63A5\u5165\u8BE5\u767B\u5F55\u7CFB\u7EDF\uFF0C\u5728\u672A\u6765\u4F1A\u63A5\u5165\u4E00\u4E9B\u6211\u81EA\u5DF1\u5199\u7684\u9879\u76EE\u3002</li>
<li>\u4E5F\u53EF\u4EE5\u5728\u6CE8\u518CApp\u9875\u9762\u6CE8\u518C\u5E94\u7528\uFF0C\u4EE5\u63A5\u5165\u8BE5\u767B\u5F55\u7CFB\u7EDF</li>
</ul>
</div>`,headers:[{level:2,title:"\u9879\u76EE\u622A\u56FE",slug:"\u9879\u76EE\u622A\u56FE",children:[]}],content:`::: tip
* \u8FD9\u662F\u4E00\u4E2ASSO\u5355\u70B9\u767B\u5F55\u7684\u9879\u76EE\uFF0C\u7528\u6765\u6388\u6743\u767B\u5F55\u5176\u4ED6\u7684\u9879\u76EE
* \u76EE\u524D\u6682\u6CA1\u6709\u9879\u76EE\u63A5\u5165\u8BE5\u767B\u5F55\u7CFB\u7EDF\uFF0C\u5728\u672A\u6765\u4F1A\u63A5\u5165\u4E00\u4E9B\u6211\u81EA\u5DF1\u5199\u7684\u9879\u76EE\u3002
* \u4E5F\u53EF\u4EE5\u5728\u6CE8\u518CApp\u9875\u9762\u6CE8\u518C\u5E94\u7528\uFF0C\u4EE5\u63A5\u5165\u8BE5\u767B\u5F55\u7CFB\u7EDF
:::

<!-- more -->

## \u9879\u76EE\u622A\u56FE

![login](/assets/images/SSO/login.png)
![register](/assets/images/SSO/register.png)
![profile](/assets/images/SSO/profile.png)
![authorize](/assets/images/SSO/authorize.png)
![resetpassword](/assets/images/SSO/resetpassword.png)
![email](/assets/images/SSO/email.png)

`,contentRendered:`<div class="custom-container tip"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 8h.01"></path><path d="M11 12h1v4h1"></path></g></svg><p class="custom-container-title">TIP</p><ul>
<li>\u8FD9\u662F\u4E00\u4E2ASSO\u5355\u70B9\u767B\u5F55\u7684\u9879\u76EE\uFF0C\u7528\u6765\u6388\u6743\u767B\u5F55\u5176\u4ED6\u7684\u9879\u76EE</li>
<li>\u76EE\u524D\u6682\u6CA1\u6709\u9879\u76EE\u63A5\u5165\u8BE5\u767B\u5F55\u7CFB\u7EDF\uFF0C\u5728\u672A\u6765\u4F1A\u63A5\u5165\u4E00\u4E9B\u6211\u81EA\u5DF1\u5199\u7684\u9879\u76EE\u3002</li>
<li>\u4E5F\u53EF\u4EE5\u5728\u6CE8\u518CApp\u9875\u9762\u6CE8\u518C\u5E94\u7528\uFF0C\u4EE5\u63A5\u5165\u8BE5\u767B\u5F55\u7CFB\u7EDF</li>
</ul>
</div><!-- more -->
<h2 id="\u9879\u76EE\u622A\u56FE" tabindex="-1"><a class="header-anchor" href="#\u9879\u76EE\u622A\u56FE" aria-hidden="true">#</a> \u9879\u76EE\u622A\u56FE</h2>
<p><img src="/assets/images/SSO/login.png" alt="login">
<img src="/assets/images/SSO/register.png" alt="register">
<img src="/assets/images/SSO/profile.png" alt="profile">
<img src="/assets/images/SSO/authorize.png" alt="authorize">
<img src="/assets/images/SSO/resetpassword.png" alt="resetpassword">
<img src="/assets/images/SSO/email.png" alt="email"></p>
`,date:"0000-00-00",deps:[],hoistedTags:[],links:[],pathInferred:"/blogs/frontEnd/2022/061518.html",pathLocale:"/",permalink:null,routeMeta:{title:"SSO \u5355\u70B9\u767B\u5F55\u7CFB\u7EDF"},slug:"061518",filePath:"/Volumes/File@ti/Project/Learn/zoftti.github.io/blogs/frontEnd/2022/061518.md",filePathRelative:"blogs/frontEnd/2022/061518.md",componentFilePath:"/Volumes/File@ti/Project/Learn/zoftti.github.io/.vuepress/.temp/pages/blogs/frontEnd/2022/061518.html.vue",componentFilePathRelative:"pages/blogs/frontEnd/2022/061518.html.vue",componentFileChunkName:"v-928deb06",dataFilePath:"/Volumes/File@ti/Project/Learn/zoftti.github.io/.vuepress/.temp/pages/blogs/frontEnd/2022/061518.html.js",dataFilePathRelative:"pages/blogs/frontEnd/2022/061518.html.js",dataFileChunkName:"v-928deb06",htmlFilePath:"/Volumes/File@ti/Project/Learn/zoftti.github.io/.vuepress/dist/blogs/frontEnd/2022/061518.html",htmlFilePathRelative:"blogs/frontEnd/2022/061518.html"},{data:{key:"v-7caf0363",path:"/blogs/frontEnd/2022/060610.html",title:"\u597D\u5BA2\u79DF\u623F\u79FB\u52A8\u7AEF\u7F51\u9875",lang:"en-US",frontmatter:{title:"\u597D\u5BA2\u79DF\u623F\u79FB\u52A8\u7AEF\u7F51\u9875",date:"2022/6/6",tags:["\u524D\u7AEF","\u79FB\u52A8\u7AEF"],categories:["frontEnd"]},excerpt:"",headers:[{level:2,title:"\u9879\u76EE\u622A\u56FE",slug:"\u9879\u76EE\u622A\u56FE",children:[]}],git:{createdTime:1654486237e3,updatedTime:1654486237e3,contributors:[{name:"ZoftTi",email:"poleorder@icloud.com",commits:1}]},filePathRelative:"blogs/frontEnd/2022/060610.md"},key:"v-7caf0363",path:"/blogs/frontEnd/2022/060610.html",title:"\u597D\u5BA2\u79DF\u623F\u79FB\u52A8\u7AEF\u7F51\u9875",lang:"en-US",frontmatter:{title:"\u597D\u5BA2\u79DF\u623F\u79FB\u52A8\u7AEF\u7F51\u9875",date:"2022/6/6",tags:["\u524D\u7AEF","\u79FB\u52A8\u7AEF"],categories:["frontEnd"]},excerpt:"",headers:[{level:2,title:"\u9879\u76EE\u622A\u56FE",slug:"\u9879\u76EE\u622A\u56FE",children:[]}],content:`
\u6E90\u4EE3\u7801\u5730\u5740 [https://github.com/ZoftTi/hkzf-mobile](https://github.com/ZoftTi/hkzf-mobile)

\`\`\`
hkzf-mobile
\u251C\u2500README.md
\u251C\u2500package.json
\u251C\u2500yarn.lock
\u251C\u2500src
|  \u251C\u2500App.js
|  \u251C\u2500index.css
|  \u251C\u2500index.js
|  \u251C\u2500utils
|  \u251C\u2500pages
|  |   \u251C\u2500Profile // \u4E2A\u4EBA\u8D44\u6599
|  |   \u251C\u2500News // \u8D44\u8BAF
|  |   \u251C\u2500Map // \u5730\u56FE
|  |   \u251C\u2500Index
|  |   \u251C\u2500HouseList // \u623F\u5B50\u5217\u8868
|  |   \u251C\u2500Home // \u9996\u9875
|  |   \u251C\u2500CityList // \u57CE\u5E02\u5217\u8868
|  \u251C\u2500components // \u7EC4\u4EF6
|  |     \u251C\u2500NavHeader \u5934\u90E8\u5BFC\u822A\u7EC4\u4EF6
|  \u251C\u2500assets
|  |   \u251C\u2500images // \u56FE\u7247\u6587\u4EF6
|  |   \u251C\u2500fonts // \u5B57\u4F53\u6587\u4EF6
\u251C\u2500public
\u251C\u2500hkzf_v1_server_api // \u540E\u7AEF API 
\`\`\`

## \u9879\u76EE\u622A\u56FE
![hkzf_preview](/assets/images/hkzf.png)`,contentRendered:`<p>\u6E90\u4EE3\u7801\u5730\u5740 <a href="https://github.com/ZoftTi/hkzf-mobile" target="_blank" rel="noopener noreferrer">https://github.com/ZoftTi/hkzf-mobile<ExternalLinkIcon/></a></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>hkzf-mobile
\u251C\u2500README.md
\u251C\u2500package.json
\u251C\u2500yarn.lock
\u251C\u2500src
|  \u251C\u2500App.js
|  \u251C\u2500index.css
|  \u251C\u2500index.js
|  \u251C\u2500utils
|  \u251C\u2500pages
|  |   \u251C\u2500Profile // \u4E2A\u4EBA\u8D44\u6599
|  |   \u251C\u2500News // \u8D44\u8BAF
|  |   \u251C\u2500Map // \u5730\u56FE
|  |   \u251C\u2500Index
|  |   \u251C\u2500HouseList // \u623F\u5B50\u5217\u8868
|  |   \u251C\u2500Home // \u9996\u9875
|  |   \u251C\u2500CityList // \u57CE\u5E02\u5217\u8868
|  \u251C\u2500components // \u7EC4\u4EF6
|  |     \u251C\u2500NavHeader \u5934\u90E8\u5BFC\u822A\u7EC4\u4EF6
|  \u251C\u2500assets
|  |   \u251C\u2500images // \u56FE\u7247\u6587\u4EF6
|  |   \u251C\u2500fonts // \u5B57\u4F53\u6587\u4EF6
\u251C\u2500public
\u251C\u2500hkzf_v1_server_api // \u540E\u7AEF API 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u9879\u76EE\u622A\u56FE" tabindex="-1"><a class="header-anchor" href="#\u9879\u76EE\u622A\u56FE" aria-hidden="true">#</a> \u9879\u76EE\u622A\u56FE</h2>
<p><img src="/assets/images/hkzf.png" alt="hkzf_preview"></p>
`,date:"0000-00-00",deps:[],hoistedTags:[],links:[],pathInferred:"/blogs/frontEnd/2022/060610.html",pathLocale:"/",permalink:null,routeMeta:{title:"\u597D\u5BA2\u79DF\u623F\u79FB\u52A8\u7AEF\u7F51\u9875"},slug:"060610",filePath:"/Volumes/File@ti/Project/Learn/zoftti.github.io/blogs/frontEnd/2022/060610.md",filePathRelative:"blogs/frontEnd/2022/060610.md",componentFilePath:"/Volumes/File@ti/Project/Learn/zoftti.github.io/.vuepress/.temp/pages/blogs/frontEnd/2022/060610.html.vue",componentFilePathRelative:"pages/blogs/frontEnd/2022/060610.html.vue",componentFileChunkName:"v-7caf0363",dataFilePath:"/Volumes/File@ti/Project/Learn/zoftti.github.io/.vuepress/.temp/pages/blogs/frontEnd/2022/060610.html.js",dataFilePathRelative:"pages/blogs/frontEnd/2022/060610.html.js",dataFileChunkName:"v-7caf0363",htmlFilePath:"/Volumes/File@ti/Project/Learn/zoftti.github.io/.vuepress/dist/blogs/frontEnd/2022/060610.html",htmlFilePathRelative:"blogs/frontEnd/2022/060610.html"},{data:{key:"v-953ed77e",path:"/blogs/frontEnd/2022/052901.html",title:"\u4E91\u97F3\u4E50\u5C0F\u7A0B\u5E8F",lang:"en-US",frontmatter:{title:"\u4E91\u97F3\u4E50\u5C0F\u7A0B\u5E8F",date:"2022/5/29",tags:["\u5C0F\u7A0B\u5E8F","\u97F3\u4E50\u8F6F\u4EF6"],categories:["frontEnd"]},excerpt:"",headers:[{level:3,title:"\u9879\u76EE\u622A\u56FE",slug:"\u9879\u76EE\u622A\u56FE",children:[]}],git:{createdTime:1654486096e3,updatedTime:1654587378e3,contributors:[{name:"ZoftTi",email:"poleorder@icloud.com",commits:3}]},filePathRelative:"blogs/frontEnd/2022/052901.md"},key:"v-953ed77e",path:"/blogs/frontEnd/2022/052901.html",title:"\u4E91\u97F3\u4E50\u5C0F\u7A0B\u5E8F",lang:"en-US",frontmatter:{title:"\u4E91\u97F3\u4E50\u5C0F\u7A0B\u5E8F",date:"2022/5/29",tags:["\u5C0F\u7A0B\u5E8F","\u97F3\u4E50\u8F6F\u4EF6"],categories:["frontEnd"]},excerpt:"",headers:[{level:3,title:"\u9879\u76EE\u622A\u56FE",slug:"\u9879\u76EE\u622A\u56FE",children:[]}],content:`
\u6E90\u4EE3\u7801\u5730\u5740 [https://github.com/ZoftTi/cloud_music](https://github.com/ZoftTi/cloud_music)

\`\`\`
cloud_music
\u251C\u2500 cloud_music_server_api // \u540E\u7AEF Api
\u251C\u2500 components // \u7EC4\u4EF6
|     \u251C\u2500NavHeader // \u5BFC\u822A\u5934\u90E8\u7EC4\u4EF6
\u251C\u2500 utils // \u5DE5\u5177\u51FD\u6570\u5C01\u88C5
|   \u251C\u2500 config.js // \u8BF7\u6C42\u914D\u7F6E\u6587\u4EF6
|   \u251C\u2500 request.js // \u8BF7\u6C42\u5C01\u88C5
\u251C\u2500 static // \u9759\u6001\u8D44\u6E90
\u251C\u2500 songPackage // \u6B4C\u66F2\u8BE6\u60C5\u9875\u5206\u5305
|      \u251C\u2500 pages
|      |   \u251C\u2500 static // \u8BE6\u60C5\u9875\u9759\u6001\u8D44\u6E90
|      |   \u251C\u2500 songDetail
|      |   \u251C\u2500 recommendSong
\u251C\u2500 pages // \u4E3B\u5305
|   \u251C\u2500 video // \u89C6\u9891\u9875
|   \u251C\u2500 search  // \u641C\u7D22\u9875
|   \u251C\u2500 personal // \u4E2A\u4EBA\u4E2D\u5FC3\u9875
|   \u251C\u2500 login // \u767B\u5F55\u9875
|   \u251C\u2500 index  // \u9996\u9875
\`\`\`

\u540E\u7AEF\u5E94\u7528\u57FA\u4E8E [NeteaseCloudMusicApi](https://github.com/Binaryify/NeteaseCloudMusicApi) \u642D\u5EFA

### \u9879\u76EE\u622A\u56FE

<!-- ![](/images/cloud_music/cloud_music_detail.png) -->
<img src="/assets/images/cloud_music/cloud_music_detail.png" width="300" />
<img src="/assets/images/cloud_music/cloud_music_recommend.png" width="300" />
<img src="/assets/images/cloud_music/cloud_music_index.png" width="300" />
<img src="/assets/images/cloud_music/cloud_music_personal.png" width="300" />
<img src="/assets/images/cloud_music/cloud_music_search.png" width="300" />
<img src="/assets/images/cloud_music/cloud_music_video.png" width="300" />
`,contentRendered:`<p>\u6E90\u4EE3\u7801\u5730\u5740 <a href="https://github.com/ZoftTi/cloud_music" target="_blank" rel="noopener noreferrer">https://github.com/ZoftTi/cloud_music<ExternalLinkIcon/></a></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>cloud_music
\u251C\u2500 cloud_music_server_api // \u540E\u7AEF Api
\u251C\u2500 components // \u7EC4\u4EF6
|     \u251C\u2500NavHeader // \u5BFC\u822A\u5934\u90E8\u7EC4\u4EF6
\u251C\u2500 utils // \u5DE5\u5177\u51FD\u6570\u5C01\u88C5
|   \u251C\u2500 config.js // \u8BF7\u6C42\u914D\u7F6E\u6587\u4EF6
|   \u251C\u2500 request.js // \u8BF7\u6C42\u5C01\u88C5
\u251C\u2500 static // \u9759\u6001\u8D44\u6E90
\u251C\u2500 songPackage // \u6B4C\u66F2\u8BE6\u60C5\u9875\u5206\u5305
|      \u251C\u2500 pages
|      |   \u251C\u2500 static // \u8BE6\u60C5\u9875\u9759\u6001\u8D44\u6E90
|      |   \u251C\u2500 songDetail
|      |   \u251C\u2500 recommendSong
\u251C\u2500 pages // \u4E3B\u5305
|   \u251C\u2500 video // \u89C6\u9891\u9875
|   \u251C\u2500 search  // \u641C\u7D22\u9875
|   \u251C\u2500 personal // \u4E2A\u4EBA\u4E2D\u5FC3\u9875
|   \u251C\u2500 login // \u767B\u5F55\u9875
|   \u251C\u2500 index  // \u9996\u9875
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u540E\u7AEF\u5E94\u7528\u57FA\u4E8E <a href="https://github.com/Binaryify/NeteaseCloudMusicApi" target="_blank" rel="noopener noreferrer">NeteaseCloudMusicApi<ExternalLinkIcon/></a> \u642D\u5EFA</p>
<h3 id="\u9879\u76EE\u622A\u56FE" tabindex="-1"><a class="header-anchor" href="#\u9879\u76EE\u622A\u56FE" aria-hidden="true">#</a> \u9879\u76EE\u622A\u56FE</h3>
<!-- ![](/images/cloud_music/cloud_music_detail.png) -->
<img src="/assets/images/cloud_music/cloud_music_detail.png" width="300" />
<img src="/assets/images/cloud_music/cloud_music_recommend.png" width="300" />
<img src="/assets/images/cloud_music/cloud_music_index.png" width="300" />
<img src="/assets/images/cloud_music/cloud_music_personal.png" width="300" />
<img src="/assets/images/cloud_music/cloud_music_search.png" width="300" />
<img src="/assets/images/cloud_music/cloud_music_video.png" width="300" />
`,date:"0000-00-00",deps:[],hoistedTags:[],links:[],pathInferred:"/blogs/frontEnd/2022/052901.html",pathLocale:"/",permalink:null,routeMeta:{title:"\u4E91\u97F3\u4E50\u5C0F\u7A0B\u5E8F"},slug:"052901",filePath:"/Volumes/File@ti/Project/Learn/zoftti.github.io/blogs/frontEnd/2022/052901.md",filePathRelative:"blogs/frontEnd/2022/052901.md",componentFilePath:"/Volumes/File@ti/Project/Learn/zoftti.github.io/.vuepress/.temp/pages/blogs/frontEnd/2022/052901.html.vue",componentFilePathRelative:"pages/blogs/frontEnd/2022/052901.html.vue",componentFileChunkName:"v-953ed77e",dataFilePath:"/Volumes/File@ti/Project/Learn/zoftti.github.io/.vuepress/.temp/pages/blogs/frontEnd/2022/052901.html.js",dataFilePathRelative:"pages/blogs/frontEnd/2022/052901.html.js",dataFileChunkName:"v-953ed77e",htmlFilePath:"/Volumes/File@ti/Project/Learn/zoftti.github.io/.vuepress/dist/blogs/frontEnd/2022/052901.html",htmlFilePathRelative:"blogs/frontEnd/2022/052901.html"}]},"/categories/reco/1/":{pageSize:10,total:1,currentPage:1,currentClassificationKey:"categories",currentClassificationValue:"reco",pages:[{data:{key:"v-6bb1ef33",path:"/blogs/other/guide.html",title:"vuepress-theme-reco",lang:"en-US",frontmatter:{title:"vuepress-theme-reco",date:"2019/04/09",author:"reco_luan",tags:["reco"],categories:["reco"]},excerpt:"",headers:[{level:2,title:"Use",slug:"use",children:[]},{level:2,title:"Play Together",slug:"play-together",children:[{level:3,title:"0.x",slug:"_0-x",children:[]},{level:3,title:"1.x",slug:"_1-x",children:[]},{level:3,title:"CLI",slug:"cli",children:[]}]},{level:2,title:"License",slug:"license",children:[]}],git:{createdTime:1654486096e3,updatedTime:1654486096e3,contributors:[{name:"ZoftTi",email:"poleorder@icloud.com",commits:1}]},filePathRelative:"blogs/other/guide.md"},key:"v-6bb1ef33",path:"/blogs/other/guide.html",title:"vuepress-theme-reco",lang:"en-US",frontmatter:{title:"vuepress-theme-reco",date:"2019/04/09",author:"reco_luan",tags:["reco"],categories:["reco"]},excerpt:"",headers:[{level:2,title:"Use",slug:"use",children:[]},{level:2,title:"Play Together",slug:"play-together",children:[{level:3,title:"0.x",slug:"_0-x",children:[]},{level:3,title:"1.x",slug:"_1-x",children:[]},{level:3,title:"CLI",slug:"cli",children:[]}]},{level:2,title:"License",slug:"license",children:[]}],content:`
![vuepress](https://img.shields.io/badge/vuepress-0.14.8-brightgreen.svg)
![leancloud-storage](https://img.shields.io/badge/leancloud--storage-3.10.1-orange.svg)
![valine](https://img.shields.io/badge/valine-1.3.4-blue.svg)

::: tip \u4ECB\u7ECD
1. \u8FD9\u662F\u4E00\u4E2Avuepress\u4E3B\u9898\uFF0C\u65E8\u5728\u6DFB\u52A0\u535A\u5BA2\u6240\u9700\u7684\u5206\u7C7B\u3001TAB\u5899\u3001\u5206\u9875\u3001\u8BC4\u8BBA\u7B49\u80FD\uFF1B<br>
2. \u4E3B\u9898\u8FFD\u6C42\u6781\u7B80\uFF0C\u6839\u636E vuepress \u7684\u9ED8\u8BA4\u4E3B\u9898\u4FEE\u6539\u800C\u6210\uFF0C\u5B98\u65B9\u7684\u4E3B\u9898\u914D\u7F6E\u4ECD\u7136\u9002\u7528\uFF1B<br>
3. \u4F60\u53EF\u4EE5\u6253\u5F00 [\u5348\u540E\u5357\u6742](http://recoluan.gitlab.io) \u6765\u67E5\u770B\u6548\u679C\u3002
:::

## Use

**Build**

\`\`\`bash
npm run build

# or

yarn build
\`\`\`

**Server**

\`\`\`bash
npm run dev

# or

yarn dev
\`\`\`

## Play Together

### 0.x

\`vuepress-theme-reco@0.x\` \u662F\u57FA\u4E8E \`vuepress@0.x\` \u7684\u535A\u5BA2\u4E3B\u9898\u3002

\`vuepress@0.x\` \u529F\u80FD\u6BD4\u8F83\u7B80\u5355\uFF0C\u53EA\u9002\u5408\u4E66\u5199\u7B80\u5355\u7684\u6587\u6863\uFF0C\u4F46\u597D\u5728\u652F\u6301\u4E3B\u9898\u81EA\u5B9A\u4E49\uFF0C\u800C\u4E2A\u4EBA\u53C8\u5E0C\u671B\u80FD\u591F\u7528\u5B83\u6765\u4E66\u5199\u535A\u5BA2\uFF0C\u539F\u56E0\u5C31\u662F\u5B83\u8DB3\u591F\u7684\u7B80\u6D01\uFF0C\u6BEB\u65E0\u7591\u95EE\uFF0C\u8FD9\u4E5F\u7B26\u5408\u5F88\u591A\u7A0B\u5E8F\u5458\u7684\u89C2\u5FF5\uFF0C\u4E5F\u5C31\u662F\u5728\u8FD9\u79CD\u60C5\u51B5\u4E0B\uFF0C\`vuepress-theme-reco@0.x\` \u7684\u7B2C\u4E00\u4E2A\u7248\u672C\u7ECF\u8FC7\u4E00\u4E2A\u901A\u5BB5\u800C\u4EA7\u751F\u3002

\u4E3B\u9898\u5F00\u6E90\u4E0D\u4E45\uFF0C\u5F88\u591A\u670B\u53CB\u901A\u8FC7\u5404\u79CD\u8054\u7CFB\u65B9\u5F0F\uFF0C\u7ED9\u5230\u5F88\u591A\u597D\u7684\u610F\u89C1\u548C\u5EFA\u8BAE\uFF0C\u6240\u4EE5\u6211\u4E2A\u4EBA\u4E5F\u5728\u79EF\u6781\u5730\u66F4\u65B0\u3002

\u56E0\u4E3A\u6211\u662F\u4E00\u540D\u524D\u7AEF\u5F00\u53D1\u5DE5\u7A0B\u5E08\uFF0C\u5F00\u53D1\u7684\u8FC7\u7A0B\u4E2D\uFF0C\u603B\u662F\u60F3\u7740\u80FD\u4E0D\u80FD\u52A0\u5165\u4E00\u4E9B\u70AB\u9177\u7684\u6548\u679C\uFF0C\u6709\u5F88\u591A\u6B21\u90FD\u662F\u6DFB\u52A0\u4E0A\u53C8\u53BB\u6389\uFF0C\u53CD\u53CD\u590D\u590D\uFF0C\u6700\u540E\u90FD\u662F\u88AB **\u7B80\u6D01** \u7684\u8FD9\u4E2A\u539F\u5219\u963B\u6B62\u6389\uFF0C\u6BD5\u7ADF\uFF0C\u73B0\u5728\u6211\u662F\u5C06\u5B83\u5F53\u4F5C\u4E00\u4E2A\u4EA7\u54C1\u6765\u770B\u5F85\uFF0C\u5E76\u4E0D\u662F\u4E00\u4E2A\u6280\u672F\u6216\u8005\u662F\u6280\u5DE7\u7684\u5C1D\u8BD5\u9879\u76EE\u3002

### 1.x

\u968F\u7740\u4E0D\u65AD\u6709\u7528\u6237\u8FC7\u6765\u8BE2\u95EE\uFF1A\u4E3A\u4EC0\u4E48 \`vuepress-theme-reco@0.x\` \u4E0D\u80FD\u5728 \`vuepress@1.x\` \u4E0A\u4F7F\u7528\uFF1F\u672C\u6765\u53EA\u662F\u6253\u7B97\u5BF9 \`vuepress-theme-reco@0.x\` \u8FDB\u884C\u7B80\u5355\u7684bug\u4FEE\u590D\u7684\u6211\uFF0C\u7EC8\u7A76\u8FD8\u662F\u5FCD\u4E0D\u4F4F\uFF0C\u5F00\u59CB\u4E86 \`vuepress-theme-reco@1.x\` \u7684\u5F00\u53D1\u3002\u53C8\u662F\u5728\u4E00\u4E2A\u5BC2\u9759\u7684\u51CC\u6668\u4E24\u70B9\u534A\uFF08\u665A\u4E0A\u5C31\u662F\u51FA\u6D3B\u5FEB\uFF09\uFF0C\u6211\u9ED8\u9ED8\u5730\u5F00\u59CB\u4E86\u3002

\u4E3B\u9898\u5347\u7EA7\u7684\u5173\u952E\u4E5F\u5C31\u662F \`@vuepress/plugin-blog\` \u8FD9\u6B3E\u5B98\u65B9\u63D2\u4EF6\uFF0C\u5B83\u4E0D\u9700\u8981\u518D\u53BB\u9EBB\u70E6\u5730\u8FC7\u6EE4\u6570\u636E\uFF0C\u5C06\u5206\u7C7B\u548C\u6807\u7B7E\u7684\u76F8\u5173\u4FE1\u606F\u76F4\u63A5\u5B58\u5728 \`$categories\` \u548C \`$tags\` \u8FD9\u4E24\u4E2A\u5168\u5C40\u53D8\u91CF\u4E2D\u3002\u501F\u52A9\u4E8E \`@vuepress/plugin-blog\`\uFF0C\u5206\u7C7B\u548C\u6807\u7B7E\u529F\u80FD\u66F4\u5BB9\u6613\u5B9E\u73B0\uFF0C\u4F46\u4E5F\u6709\u4E86\u4E00\u4E9B\u5C40\u9650\u3002\u63A5\u4E0B\u6765\u4E24\u4E09\u5929\u7684\u65F6\u95F4\uFF0C\u90FD\u662F\u5728\u8FDB\u884C\u529F\u80FD\u7684\u8FC1\u79FB\u548C\u4E00\u4E9Bbug\u7684\u4FEE\u590D\u3002

\`vuepress-theme-reco@0.x\` \u7684\u5F00\u53D1\u4E2D\uFF0C\u66F4\u52A0\u6DF1\u523B\u5730\u660E\u767D\u4E86\u6A21\u5757\u5316\u548C\u7EC4\u4EF6\u5316\u7F16\u7A0B\u7684\u91CD\u8981\u6027\uFF0C\u5982\u679C\u5F53\u521D\u6CA1\u6709\u628A\u4E00\u4E9B\u529F\u80FD\u8FDB\u884C\u5C01\u88C5\uFF0C\u800C\u662F\u76F4\u63A5\u7B80\u5355\u7684\u590D\u5236\uFF0C\u8FD9\u6B21\u5347\u7EA7\u4E5F\u4E0D\u4F1A\u8FD9\u4E48\u987A\u5229\u3002\u6A21\u5757\u62C6\u5206\u7684\u8D8A\u7EC6\uFF0C\u4F7F\u7528\u5C31\u4F1A\u8D8A\u7075\u6D3B\u3002

### CLI

\u8FD8\u662F\u8877\u5FC3\u5730\u5E0C\u671B\u80FD\u6709\u66F4\u591A\u7684\u670B\u53CB\u53C2\u4E0E\u8FDB\u6765\uFF0C\u66F4\u5FEB\u5730\u53BB\u5B8C\u5584\u5B83\u3002\u63A5\u4E0B\u6765\u65F6\u95F4\u5141\u8BB8\u7684\u60C5\u51B5\u4E0B\uFF0C\u6211\u4F1A\u5F00\u6E90\u4E00\u6B3E\u81EA\u52A8\u751F\u6210\u535A\u5BA2\u7684\u811A\u624B\u67B6\uFF0C\u7565\u8FC7\u914D\u7F6E\u6B65\u9AA4\uFF0C\u76F4\u63A5\u4E66\u5199\u4F18\u8D28\u5185\u5BB9\uFF0C\u8FD9\u4E5F\u662F\u6211\u540E\u6765\u9010\u6E10\u5F62\u6210\u7684\u4E00\u79CD\u4FE1\u5FF5\uFF0C\u5C31\u662F\u5E0C\u671B\u80FD\u8BA9\u8FD9\u6B3E\u4E3B\u9898\uFF0C\u529F\u80FD\u8D8A\u5B8C\u5584\uFF0C\u4F7F\u7528\u8D8A\u6765\u8D8A\u7B80\u5355\u3002

## License
[MIT](https://github.com/recoluan/vuepress-theme-reco/blob/master/LICENSE)`,contentRendered:`<p><img src="https://img.shields.io/badge/vuepress-0.14.8-brightgreen.svg" alt="vuepress">
<img src="https://img.shields.io/badge/leancloud--storage-3.10.1-orange.svg" alt="leancloud-storage">
<img src="https://img.shields.io/badge/valine-1.3.4-blue.svg" alt="valine"></p>
<div class="custom-container tip"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 8h.01"></path><path d="M11 12h1v4h1"></path></g></svg><p class="custom-container-title">\u4ECB\u7ECD</p><ol>
<li>\u8FD9\u662F\u4E00\u4E2Avuepress\u4E3B\u9898\uFF0C\u65E8\u5728\u6DFB\u52A0\u535A\u5BA2\u6240\u9700\u7684\u5206\u7C7B\u3001TAB\u5899\u3001\u5206\u9875\u3001\u8BC4\u8BBA\u7B49\u80FD\uFF1B<br></li>
<li>\u4E3B\u9898\u8FFD\u6C42\u6781\u7B80\uFF0C\u6839\u636E vuepress \u7684\u9ED8\u8BA4\u4E3B\u9898\u4FEE\u6539\u800C\u6210\uFF0C\u5B98\u65B9\u7684\u4E3B\u9898\u914D\u7F6E\u4ECD\u7136\u9002\u7528\uFF1B<br></li>
<li>\u4F60\u53EF\u4EE5\u6253\u5F00 <a href="http://recoluan.gitlab.io" target="_blank" rel="noopener noreferrer">\u5348\u540E\u5357\u6742<ExternalLinkIcon/></a> \u6765\u67E5\u770B\u6548\u679C\u3002</li>
</ol>
</div><h2 id="use" tabindex="-1"><a class="header-anchor" href="#use" aria-hidden="true">#</a> Use</h2>
<p><strong>Build</strong></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> run build

<span class="token comment"># or</span>

<span class="token function">yarn</span> build
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Server</strong></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> run dev

<span class="token comment"># or</span>

<span class="token function">yarn</span> dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="play-together" tabindex="-1"><a class="header-anchor" href="#play-together" aria-hidden="true">#</a> Play Together</h2>
<h3 id="_0-x" tabindex="-1"><a class="header-anchor" href="#_0-x" aria-hidden="true">#</a> 0.x</h3>
<p><code v-pre>vuepress-theme-reco@0.x</code> \u662F\u57FA\u4E8E <code v-pre>vuepress@0.x</code> \u7684\u535A\u5BA2\u4E3B\u9898\u3002</p>
<p><code v-pre>vuepress@0.x</code> \u529F\u80FD\u6BD4\u8F83\u7B80\u5355\uFF0C\u53EA\u9002\u5408\u4E66\u5199\u7B80\u5355\u7684\u6587\u6863\uFF0C\u4F46\u597D\u5728\u652F\u6301\u4E3B\u9898\u81EA\u5B9A\u4E49\uFF0C\u800C\u4E2A\u4EBA\u53C8\u5E0C\u671B\u80FD\u591F\u7528\u5B83\u6765\u4E66\u5199\u535A\u5BA2\uFF0C\u539F\u56E0\u5C31\u662F\u5B83\u8DB3\u591F\u7684\u7B80\u6D01\uFF0C\u6BEB\u65E0\u7591\u95EE\uFF0C\u8FD9\u4E5F\u7B26\u5408\u5F88\u591A\u7A0B\u5E8F\u5458\u7684\u89C2\u5FF5\uFF0C\u4E5F\u5C31\u662F\u5728\u8FD9\u79CD\u60C5\u51B5\u4E0B\uFF0C<code v-pre>vuepress-theme-reco@0.x</code> \u7684\u7B2C\u4E00\u4E2A\u7248\u672C\u7ECF\u8FC7\u4E00\u4E2A\u901A\u5BB5\u800C\u4EA7\u751F\u3002</p>
<p>\u4E3B\u9898\u5F00\u6E90\u4E0D\u4E45\uFF0C\u5F88\u591A\u670B\u53CB\u901A\u8FC7\u5404\u79CD\u8054\u7CFB\u65B9\u5F0F\uFF0C\u7ED9\u5230\u5F88\u591A\u597D\u7684\u610F\u89C1\u548C\u5EFA\u8BAE\uFF0C\u6240\u4EE5\u6211\u4E2A\u4EBA\u4E5F\u5728\u79EF\u6781\u5730\u66F4\u65B0\u3002</p>
<p>\u56E0\u4E3A\u6211\u662F\u4E00\u540D\u524D\u7AEF\u5F00\u53D1\u5DE5\u7A0B\u5E08\uFF0C\u5F00\u53D1\u7684\u8FC7\u7A0B\u4E2D\uFF0C\u603B\u662F\u60F3\u7740\u80FD\u4E0D\u80FD\u52A0\u5165\u4E00\u4E9B\u70AB\u9177\u7684\u6548\u679C\uFF0C\u6709\u5F88\u591A\u6B21\u90FD\u662F\u6DFB\u52A0\u4E0A\u53C8\u53BB\u6389\uFF0C\u53CD\u53CD\u590D\u590D\uFF0C\u6700\u540E\u90FD\u662F\u88AB <strong>\u7B80\u6D01</strong> \u7684\u8FD9\u4E2A\u539F\u5219\u963B\u6B62\u6389\uFF0C\u6BD5\u7ADF\uFF0C\u73B0\u5728\u6211\u662F\u5C06\u5B83\u5F53\u4F5C\u4E00\u4E2A\u4EA7\u54C1\u6765\u770B\u5F85\uFF0C\u5E76\u4E0D\u662F\u4E00\u4E2A\u6280\u672F\u6216\u8005\u662F\u6280\u5DE7\u7684\u5C1D\u8BD5\u9879\u76EE\u3002</p>
<h3 id="_1-x" tabindex="-1"><a class="header-anchor" href="#_1-x" aria-hidden="true">#</a> 1.x</h3>
<p>\u968F\u7740\u4E0D\u65AD\u6709\u7528\u6237\u8FC7\u6765\u8BE2\u95EE\uFF1A\u4E3A\u4EC0\u4E48 <code v-pre>vuepress-theme-reco@0.x</code> \u4E0D\u80FD\u5728 <code v-pre>vuepress@1.x</code> \u4E0A\u4F7F\u7528\uFF1F\u672C\u6765\u53EA\u662F\u6253\u7B97\u5BF9 <code v-pre>vuepress-theme-reco@0.x</code> \u8FDB\u884C\u7B80\u5355\u7684bug\u4FEE\u590D\u7684\u6211\uFF0C\u7EC8\u7A76\u8FD8\u662F\u5FCD\u4E0D\u4F4F\uFF0C\u5F00\u59CB\u4E86 <code v-pre>vuepress-theme-reco@1.x</code> \u7684\u5F00\u53D1\u3002\u53C8\u662F\u5728\u4E00\u4E2A\u5BC2\u9759\u7684\u51CC\u6668\u4E24\u70B9\u534A\uFF08\u665A\u4E0A\u5C31\u662F\u51FA\u6D3B\u5FEB\uFF09\uFF0C\u6211\u9ED8\u9ED8\u5730\u5F00\u59CB\u4E86\u3002</p>
<p>\u4E3B\u9898\u5347\u7EA7\u7684\u5173\u952E\u4E5F\u5C31\u662F <code v-pre>@vuepress/plugin-blog</code> \u8FD9\u6B3E\u5B98\u65B9\u63D2\u4EF6\uFF0C\u5B83\u4E0D\u9700\u8981\u518D\u53BB\u9EBB\u70E6\u5730\u8FC7\u6EE4\u6570\u636E\uFF0C\u5C06\u5206\u7C7B\u548C\u6807\u7B7E\u7684\u76F8\u5173\u4FE1\u606F\u76F4\u63A5\u5B58\u5728 <code v-pre>$categories</code> \u548C <code v-pre>$tags</code> \u8FD9\u4E24\u4E2A\u5168\u5C40\u53D8\u91CF\u4E2D\u3002\u501F\u52A9\u4E8E <code v-pre>@vuepress/plugin-blog</code>\uFF0C\u5206\u7C7B\u548C\u6807\u7B7E\u529F\u80FD\u66F4\u5BB9\u6613\u5B9E\u73B0\uFF0C\u4F46\u4E5F\u6709\u4E86\u4E00\u4E9B\u5C40\u9650\u3002\u63A5\u4E0B\u6765\u4E24\u4E09\u5929\u7684\u65F6\u95F4\uFF0C\u90FD\u662F\u5728\u8FDB\u884C\u529F\u80FD\u7684\u8FC1\u79FB\u548C\u4E00\u4E9Bbug\u7684\u4FEE\u590D\u3002</p>
<p><code v-pre>vuepress-theme-reco@0.x</code> \u7684\u5F00\u53D1\u4E2D\uFF0C\u66F4\u52A0\u6DF1\u523B\u5730\u660E\u767D\u4E86\u6A21\u5757\u5316\u548C\u7EC4\u4EF6\u5316\u7F16\u7A0B\u7684\u91CD\u8981\u6027\uFF0C\u5982\u679C\u5F53\u521D\u6CA1\u6709\u628A\u4E00\u4E9B\u529F\u80FD\u8FDB\u884C\u5C01\u88C5\uFF0C\u800C\u662F\u76F4\u63A5\u7B80\u5355\u7684\u590D\u5236\uFF0C\u8FD9\u6B21\u5347\u7EA7\u4E5F\u4E0D\u4F1A\u8FD9\u4E48\u987A\u5229\u3002\u6A21\u5757\u62C6\u5206\u7684\u8D8A\u7EC6\uFF0C\u4F7F\u7528\u5C31\u4F1A\u8D8A\u7075\u6D3B\u3002</p>
<h3 id="cli" tabindex="-1"><a class="header-anchor" href="#cli" aria-hidden="true">#</a> CLI</h3>
<p>\u8FD8\u662F\u8877\u5FC3\u5730\u5E0C\u671B\u80FD\u6709\u66F4\u591A\u7684\u670B\u53CB\u53C2\u4E0E\u8FDB\u6765\uFF0C\u66F4\u5FEB\u5730\u53BB\u5B8C\u5584\u5B83\u3002\u63A5\u4E0B\u6765\u65F6\u95F4\u5141\u8BB8\u7684\u60C5\u51B5\u4E0B\uFF0C\u6211\u4F1A\u5F00\u6E90\u4E00\u6B3E\u81EA\u52A8\u751F\u6210\u535A\u5BA2\u7684\u811A\u624B\u67B6\uFF0C\u7565\u8FC7\u914D\u7F6E\u6B65\u9AA4\uFF0C\u76F4\u63A5\u4E66\u5199\u4F18\u8D28\u5185\u5BB9\uFF0C\u8FD9\u4E5F\u662F\u6211\u540E\u6765\u9010\u6E10\u5F62\u6210\u7684\u4E00\u79CD\u4FE1\u5FF5\uFF0C\u5C31\u662F\u5E0C\u671B\u80FD\u8BA9\u8FD9\u6B3E\u4E3B\u9898\uFF0C\u529F\u80FD\u8D8A\u5B8C\u5584\uFF0C\u4F7F\u7528\u8D8A\u6765\u8D8A\u7B80\u5355\u3002</p>
<h2 id="license" tabindex="-1"><a class="header-anchor" href="#license" aria-hidden="true">#</a> License</h2>
<p><a href="https://github.com/recoluan/vuepress-theme-reco/blob/master/LICENSE" target="_blank" rel="noopener noreferrer">MIT<ExternalLinkIcon/></a></p>
`,date:"0000-00-00",deps:[],hoistedTags:[],links:[],pathInferred:"/blogs/other/guide.html",pathLocale:"/",permalink:null,routeMeta:{title:"vuepress-theme-reco"},slug:"guide",filePath:"/Volumes/File@ti/Project/Learn/zoftti.github.io/blogs/other/guide.md",filePathRelative:"blogs/other/guide.md",componentFilePath:"/Volumes/File@ti/Project/Learn/zoftti.github.io/.vuepress/.temp/pages/blogs/other/guide.html.vue",componentFilePathRelative:"pages/blogs/other/guide.html.vue",componentFileChunkName:"v-6bb1ef33",dataFilePath:"/Volumes/File@ti/Project/Learn/zoftti.github.io/.vuepress/.temp/pages/blogs/other/guide.html.js",dataFilePathRelative:"pages/blogs/other/guide.html.js",dataFileChunkName:"v-6bb1ef33",htmlFilePath:"/Volumes/File@ti/Project/Learn/zoftti.github.io/.vuepress/dist/blogs/other/guide.html",htmlFilePathRelative:"blogs/other/guide.html"}]},"/tags/SSO/1/":{pageSize:10,total:1,currentPage:1,currentClassificationKey:"tags",currentClassificationValue:"SSO",pages:[{data:{key:"v-928deb06",path:"/blogs/frontEnd/2022/061518.html",title:"SSO \u5355\u70B9\u767B\u5F55\u7CFB\u7EDF",lang:"en-US",frontmatter:{title:"SSO \u5355\u70B9\u767B\u5F55\u7CFB\u7EDF",date:"2022/6/15",tags:["SSO"],categories:["frontEnd"]},excerpt:`<div class="custom-container tip"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 8h.01"></path><path d="M11 12h1v4h1"></path></g></svg><p class="custom-container-title">TIP</p><ul>
<li>\u8FD9\u662F\u4E00\u4E2ASSO\u5355\u70B9\u767B\u5F55\u7684\u9879\u76EE\uFF0C\u7528\u6765\u6388\u6743\u767B\u5F55\u5176\u4ED6\u7684\u9879\u76EE</li>
<li>\u76EE\u524D\u6682\u6CA1\u6709\u9879\u76EE\u63A5\u5165\u8BE5\u767B\u5F55\u7CFB\u7EDF\uFF0C\u5728\u672A\u6765\u4F1A\u63A5\u5165\u4E00\u4E9B\u6211\u81EA\u5DF1\u5199\u7684\u9879\u76EE\u3002</li>
<li>\u4E5F\u53EF\u4EE5\u5728\u6CE8\u518CApp\u9875\u9762\u6CE8\u518C\u5E94\u7528\uFF0C\u4EE5\u63A5\u5165\u8BE5\u767B\u5F55\u7CFB\u7EDF</li>
</ul>
</div>`,headers:[{level:2,title:"\u9879\u76EE\u622A\u56FE",slug:"\u9879\u76EE\u622A\u56FE",children:[]}],git:{createdTime:1655292309e3,updatedTime:1655292309e3,contributors:[{name:"ZoftTi",email:"poleorder@icloud.com",commits:1}]},filePathRelative:"blogs/frontEnd/2022/061518.md"},key:"v-928deb06",path:"/blogs/frontEnd/2022/061518.html",title:"SSO \u5355\u70B9\u767B\u5F55\u7CFB\u7EDF",lang:"en-US",frontmatter:{title:"SSO \u5355\u70B9\u767B\u5F55\u7CFB\u7EDF",date:"2022/6/15",tags:["SSO"],categories:["frontEnd"]},excerpt:`<div class="custom-container tip"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 8h.01"></path><path d="M11 12h1v4h1"></path></g></svg><p class="custom-container-title">TIP</p><ul>
<li>\u8FD9\u662F\u4E00\u4E2ASSO\u5355\u70B9\u767B\u5F55\u7684\u9879\u76EE\uFF0C\u7528\u6765\u6388\u6743\u767B\u5F55\u5176\u4ED6\u7684\u9879\u76EE</li>
<li>\u76EE\u524D\u6682\u6CA1\u6709\u9879\u76EE\u63A5\u5165\u8BE5\u767B\u5F55\u7CFB\u7EDF\uFF0C\u5728\u672A\u6765\u4F1A\u63A5\u5165\u4E00\u4E9B\u6211\u81EA\u5DF1\u5199\u7684\u9879\u76EE\u3002</li>
<li>\u4E5F\u53EF\u4EE5\u5728\u6CE8\u518CApp\u9875\u9762\u6CE8\u518C\u5E94\u7528\uFF0C\u4EE5\u63A5\u5165\u8BE5\u767B\u5F55\u7CFB\u7EDF</li>
</ul>
</div>`,headers:[{level:2,title:"\u9879\u76EE\u622A\u56FE",slug:"\u9879\u76EE\u622A\u56FE",children:[]}],content:`::: tip
* \u8FD9\u662F\u4E00\u4E2ASSO\u5355\u70B9\u767B\u5F55\u7684\u9879\u76EE\uFF0C\u7528\u6765\u6388\u6743\u767B\u5F55\u5176\u4ED6\u7684\u9879\u76EE
* \u76EE\u524D\u6682\u6CA1\u6709\u9879\u76EE\u63A5\u5165\u8BE5\u767B\u5F55\u7CFB\u7EDF\uFF0C\u5728\u672A\u6765\u4F1A\u63A5\u5165\u4E00\u4E9B\u6211\u81EA\u5DF1\u5199\u7684\u9879\u76EE\u3002
* \u4E5F\u53EF\u4EE5\u5728\u6CE8\u518CApp\u9875\u9762\u6CE8\u518C\u5E94\u7528\uFF0C\u4EE5\u63A5\u5165\u8BE5\u767B\u5F55\u7CFB\u7EDF
:::

<!-- more -->

## \u9879\u76EE\u622A\u56FE

![login](/assets/images/SSO/login.png)
![register](/assets/images/SSO/register.png)
![profile](/assets/images/SSO/profile.png)
![authorize](/assets/images/SSO/authorize.png)
![resetpassword](/assets/images/SSO/resetpassword.png)
![email](/assets/images/SSO/email.png)

`,contentRendered:`<div class="custom-container tip"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 8h.01"></path><path d="M11 12h1v4h1"></path></g></svg><p class="custom-container-title">TIP</p><ul>
<li>\u8FD9\u662F\u4E00\u4E2ASSO\u5355\u70B9\u767B\u5F55\u7684\u9879\u76EE\uFF0C\u7528\u6765\u6388\u6743\u767B\u5F55\u5176\u4ED6\u7684\u9879\u76EE</li>
<li>\u76EE\u524D\u6682\u6CA1\u6709\u9879\u76EE\u63A5\u5165\u8BE5\u767B\u5F55\u7CFB\u7EDF\uFF0C\u5728\u672A\u6765\u4F1A\u63A5\u5165\u4E00\u4E9B\u6211\u81EA\u5DF1\u5199\u7684\u9879\u76EE\u3002</li>
<li>\u4E5F\u53EF\u4EE5\u5728\u6CE8\u518CApp\u9875\u9762\u6CE8\u518C\u5E94\u7528\uFF0C\u4EE5\u63A5\u5165\u8BE5\u767B\u5F55\u7CFB\u7EDF</li>
</ul>
</div><!-- more -->
<h2 id="\u9879\u76EE\u622A\u56FE" tabindex="-1"><a class="header-anchor" href="#\u9879\u76EE\u622A\u56FE" aria-hidden="true">#</a> \u9879\u76EE\u622A\u56FE</h2>
<p><img src="/assets/images/SSO/login.png" alt="login">
<img src="/assets/images/SSO/register.png" alt="register">
<img src="/assets/images/SSO/profile.png" alt="profile">
<img src="/assets/images/SSO/authorize.png" alt="authorize">
<img src="/assets/images/SSO/resetpassword.png" alt="resetpassword">
<img src="/assets/images/SSO/email.png" alt="email"></p>
`,date:"0000-00-00",deps:[],hoistedTags:[],links:[],pathInferred:"/blogs/frontEnd/2022/061518.html",pathLocale:"/",permalink:null,routeMeta:{title:"SSO \u5355\u70B9\u767B\u5F55\u7CFB\u7EDF"},slug:"061518",filePath:"/Volumes/File@ti/Project/Learn/zoftti.github.io/blogs/frontEnd/2022/061518.md",filePathRelative:"blogs/frontEnd/2022/061518.md",componentFilePath:"/Volumes/File@ti/Project/Learn/zoftti.github.io/.vuepress/.temp/pages/blogs/frontEnd/2022/061518.html.vue",componentFilePathRelative:"pages/blogs/frontEnd/2022/061518.html.vue",componentFileChunkName:"v-928deb06",dataFilePath:"/Volumes/File@ti/Project/Learn/zoftti.github.io/.vuepress/.temp/pages/blogs/frontEnd/2022/061518.html.js",dataFilePathRelative:"pages/blogs/frontEnd/2022/061518.html.js",dataFileChunkName:"v-928deb06",htmlFilePath:"/Volumes/File@ti/Project/Learn/zoftti.github.io/.vuepress/dist/blogs/frontEnd/2022/061518.html",htmlFilePathRelative:"blogs/frontEnd/2022/061518.html"}]},"/tags/qianduan/1/":{pageSize:10,total:1,currentPage:1,currentClassificationKey:"tags",currentClassificationValue:"qianduan",pages:[{data:{key:"v-7caf0363",path:"/blogs/frontEnd/2022/060610.html",title:"\u597D\u5BA2\u79DF\u623F\u79FB\u52A8\u7AEF\u7F51\u9875",lang:"en-US",frontmatter:{title:"\u597D\u5BA2\u79DF\u623F\u79FB\u52A8\u7AEF\u7F51\u9875",date:"2022/6/6",tags:["\u524D\u7AEF","\u79FB\u52A8\u7AEF"],categories:["frontEnd"]},excerpt:"",headers:[{level:2,title:"\u9879\u76EE\u622A\u56FE",slug:"\u9879\u76EE\u622A\u56FE",children:[]}],git:{createdTime:1654486237e3,updatedTime:1654486237e3,contributors:[{name:"ZoftTi",email:"poleorder@icloud.com",commits:1}]},filePathRelative:"blogs/frontEnd/2022/060610.md"},key:"v-7caf0363",path:"/blogs/frontEnd/2022/060610.html",title:"\u597D\u5BA2\u79DF\u623F\u79FB\u52A8\u7AEF\u7F51\u9875",lang:"en-US",frontmatter:{title:"\u597D\u5BA2\u79DF\u623F\u79FB\u52A8\u7AEF\u7F51\u9875",date:"2022/6/6",tags:["\u524D\u7AEF","\u79FB\u52A8\u7AEF"],categories:["frontEnd"]},excerpt:"",headers:[{level:2,title:"\u9879\u76EE\u622A\u56FE",slug:"\u9879\u76EE\u622A\u56FE",children:[]}],content:`
\u6E90\u4EE3\u7801\u5730\u5740 [https://github.com/ZoftTi/hkzf-mobile](https://github.com/ZoftTi/hkzf-mobile)

\`\`\`
hkzf-mobile
\u251C\u2500README.md
\u251C\u2500package.json
\u251C\u2500yarn.lock
\u251C\u2500src
|  \u251C\u2500App.js
|  \u251C\u2500index.css
|  \u251C\u2500index.js
|  \u251C\u2500utils
|  \u251C\u2500pages
|  |   \u251C\u2500Profile // \u4E2A\u4EBA\u8D44\u6599
|  |   \u251C\u2500News // \u8D44\u8BAF
|  |   \u251C\u2500Map // \u5730\u56FE
|  |   \u251C\u2500Index
|  |   \u251C\u2500HouseList // \u623F\u5B50\u5217\u8868
|  |   \u251C\u2500Home // \u9996\u9875
|  |   \u251C\u2500CityList // \u57CE\u5E02\u5217\u8868
|  \u251C\u2500components // \u7EC4\u4EF6
|  |     \u251C\u2500NavHeader \u5934\u90E8\u5BFC\u822A\u7EC4\u4EF6
|  \u251C\u2500assets
|  |   \u251C\u2500images // \u56FE\u7247\u6587\u4EF6
|  |   \u251C\u2500fonts // \u5B57\u4F53\u6587\u4EF6
\u251C\u2500public
\u251C\u2500hkzf_v1_server_api // \u540E\u7AEF API 
\`\`\`

## \u9879\u76EE\u622A\u56FE
![hkzf_preview](/assets/images/hkzf.png)`,contentRendered:`<p>\u6E90\u4EE3\u7801\u5730\u5740 <a href="https://github.com/ZoftTi/hkzf-mobile" target="_blank" rel="noopener noreferrer">https://github.com/ZoftTi/hkzf-mobile<ExternalLinkIcon/></a></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>hkzf-mobile
\u251C\u2500README.md
\u251C\u2500package.json
\u251C\u2500yarn.lock
\u251C\u2500src
|  \u251C\u2500App.js
|  \u251C\u2500index.css
|  \u251C\u2500index.js
|  \u251C\u2500utils
|  \u251C\u2500pages
|  |   \u251C\u2500Profile // \u4E2A\u4EBA\u8D44\u6599
|  |   \u251C\u2500News // \u8D44\u8BAF
|  |   \u251C\u2500Map // \u5730\u56FE
|  |   \u251C\u2500Index
|  |   \u251C\u2500HouseList // \u623F\u5B50\u5217\u8868
|  |   \u251C\u2500Home // \u9996\u9875
|  |   \u251C\u2500CityList // \u57CE\u5E02\u5217\u8868
|  \u251C\u2500components // \u7EC4\u4EF6
|  |     \u251C\u2500NavHeader \u5934\u90E8\u5BFC\u822A\u7EC4\u4EF6
|  \u251C\u2500assets
|  |   \u251C\u2500images // \u56FE\u7247\u6587\u4EF6
|  |   \u251C\u2500fonts // \u5B57\u4F53\u6587\u4EF6
\u251C\u2500public
\u251C\u2500hkzf_v1_server_api // \u540E\u7AEF API 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u9879\u76EE\u622A\u56FE" tabindex="-1"><a class="header-anchor" href="#\u9879\u76EE\u622A\u56FE" aria-hidden="true">#</a> \u9879\u76EE\u622A\u56FE</h2>
<p><img src="/assets/images/hkzf.png" alt="hkzf_preview"></p>
`,date:"0000-00-00",deps:[],hoistedTags:[],links:[],pathInferred:"/blogs/frontEnd/2022/060610.html",pathLocale:"/",permalink:null,routeMeta:{title:"\u597D\u5BA2\u79DF\u623F\u79FB\u52A8\u7AEF\u7F51\u9875"},slug:"060610",filePath:"/Volumes/File@ti/Project/Learn/zoftti.github.io/blogs/frontEnd/2022/060610.md",filePathRelative:"blogs/frontEnd/2022/060610.md",componentFilePath:"/Volumes/File@ti/Project/Learn/zoftti.github.io/.vuepress/.temp/pages/blogs/frontEnd/2022/060610.html.vue",componentFilePathRelative:"pages/blogs/frontEnd/2022/060610.html.vue",componentFileChunkName:"v-7caf0363",dataFilePath:"/Volumes/File@ti/Project/Learn/zoftti.github.io/.vuepress/.temp/pages/blogs/frontEnd/2022/060610.html.js",dataFilePathRelative:"pages/blogs/frontEnd/2022/060610.html.js",dataFileChunkName:"v-7caf0363",htmlFilePath:"/Volumes/File@ti/Project/Learn/zoftti.github.io/.vuepress/dist/blogs/frontEnd/2022/060610.html",htmlFilePathRelative:"blogs/frontEnd/2022/060610.html"}]},"/tags/yidongduan/1/":{pageSize:10,total:1,currentPage:1,currentClassificationKey:"tags",currentClassificationValue:"yidongduan",pages:[{data:{key:"v-7caf0363",path:"/blogs/frontEnd/2022/060610.html",title:"\u597D\u5BA2\u79DF\u623F\u79FB\u52A8\u7AEF\u7F51\u9875",lang:"en-US",frontmatter:{title:"\u597D\u5BA2\u79DF\u623F\u79FB\u52A8\u7AEF\u7F51\u9875",date:"2022/6/6",tags:["\u524D\u7AEF","\u79FB\u52A8\u7AEF"],categories:["frontEnd"]},excerpt:"",headers:[{level:2,title:"\u9879\u76EE\u622A\u56FE",slug:"\u9879\u76EE\u622A\u56FE",children:[]}],git:{createdTime:1654486237e3,updatedTime:1654486237e3,contributors:[{name:"ZoftTi",email:"poleorder@icloud.com",commits:1}]},filePathRelative:"blogs/frontEnd/2022/060610.md"},key:"v-7caf0363",path:"/blogs/frontEnd/2022/060610.html",title:"\u597D\u5BA2\u79DF\u623F\u79FB\u52A8\u7AEF\u7F51\u9875",lang:"en-US",frontmatter:{title:"\u597D\u5BA2\u79DF\u623F\u79FB\u52A8\u7AEF\u7F51\u9875",date:"2022/6/6",tags:["\u524D\u7AEF","\u79FB\u52A8\u7AEF"],categories:["frontEnd"]},excerpt:"",headers:[{level:2,title:"\u9879\u76EE\u622A\u56FE",slug:"\u9879\u76EE\u622A\u56FE",children:[]}],content:`
\u6E90\u4EE3\u7801\u5730\u5740 [https://github.com/ZoftTi/hkzf-mobile](https://github.com/ZoftTi/hkzf-mobile)

\`\`\`
hkzf-mobile
\u251C\u2500README.md
\u251C\u2500package.json
\u251C\u2500yarn.lock
\u251C\u2500src
|  \u251C\u2500App.js
|  \u251C\u2500index.css
|  \u251C\u2500index.js
|  \u251C\u2500utils
|  \u251C\u2500pages
|  |   \u251C\u2500Profile // \u4E2A\u4EBA\u8D44\u6599
|  |   \u251C\u2500News // \u8D44\u8BAF
|  |   \u251C\u2500Map // \u5730\u56FE
|  |   \u251C\u2500Index
|  |   \u251C\u2500HouseList // \u623F\u5B50\u5217\u8868
|  |   \u251C\u2500Home // \u9996\u9875
|  |   \u251C\u2500CityList // \u57CE\u5E02\u5217\u8868
|  \u251C\u2500components // \u7EC4\u4EF6
|  |     \u251C\u2500NavHeader \u5934\u90E8\u5BFC\u822A\u7EC4\u4EF6
|  \u251C\u2500assets
|  |   \u251C\u2500images // \u56FE\u7247\u6587\u4EF6
|  |   \u251C\u2500fonts // \u5B57\u4F53\u6587\u4EF6
\u251C\u2500public
\u251C\u2500hkzf_v1_server_api // \u540E\u7AEF API 
\`\`\`

## \u9879\u76EE\u622A\u56FE
![hkzf_preview](/assets/images/hkzf.png)`,contentRendered:`<p>\u6E90\u4EE3\u7801\u5730\u5740 <a href="https://github.com/ZoftTi/hkzf-mobile" target="_blank" rel="noopener noreferrer">https://github.com/ZoftTi/hkzf-mobile<ExternalLinkIcon/></a></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>hkzf-mobile
\u251C\u2500README.md
\u251C\u2500package.json
\u251C\u2500yarn.lock
\u251C\u2500src
|  \u251C\u2500App.js
|  \u251C\u2500index.css
|  \u251C\u2500index.js
|  \u251C\u2500utils
|  \u251C\u2500pages
|  |   \u251C\u2500Profile // \u4E2A\u4EBA\u8D44\u6599
|  |   \u251C\u2500News // \u8D44\u8BAF
|  |   \u251C\u2500Map // \u5730\u56FE
|  |   \u251C\u2500Index
|  |   \u251C\u2500HouseList // \u623F\u5B50\u5217\u8868
|  |   \u251C\u2500Home // \u9996\u9875
|  |   \u251C\u2500CityList // \u57CE\u5E02\u5217\u8868
|  \u251C\u2500components // \u7EC4\u4EF6
|  |     \u251C\u2500NavHeader \u5934\u90E8\u5BFC\u822A\u7EC4\u4EF6
|  \u251C\u2500assets
|  |   \u251C\u2500images // \u56FE\u7247\u6587\u4EF6
|  |   \u251C\u2500fonts // \u5B57\u4F53\u6587\u4EF6
\u251C\u2500public
\u251C\u2500hkzf_v1_server_api // \u540E\u7AEF API 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u9879\u76EE\u622A\u56FE" tabindex="-1"><a class="header-anchor" href="#\u9879\u76EE\u622A\u56FE" aria-hidden="true">#</a> \u9879\u76EE\u622A\u56FE</h2>
<p><img src="/assets/images/hkzf.png" alt="hkzf_preview"></p>
`,date:"0000-00-00",deps:[],hoistedTags:[],links:[],pathInferred:"/blogs/frontEnd/2022/060610.html",pathLocale:"/",permalink:null,routeMeta:{title:"\u597D\u5BA2\u79DF\u623F\u79FB\u52A8\u7AEF\u7F51\u9875"},slug:"060610",filePath:"/Volumes/File@ti/Project/Learn/zoftti.github.io/blogs/frontEnd/2022/060610.md",filePathRelative:"blogs/frontEnd/2022/060610.md",componentFilePath:"/Volumes/File@ti/Project/Learn/zoftti.github.io/.vuepress/.temp/pages/blogs/frontEnd/2022/060610.html.vue",componentFilePathRelative:"pages/blogs/frontEnd/2022/060610.html.vue",componentFileChunkName:"v-7caf0363",dataFilePath:"/Volumes/File@ti/Project/Learn/zoftti.github.io/.vuepress/.temp/pages/blogs/frontEnd/2022/060610.html.js",dataFilePathRelative:"pages/blogs/frontEnd/2022/060610.html.js",dataFileChunkName:"v-7caf0363",htmlFilePath:"/Volumes/File@ti/Project/Learn/zoftti.github.io/.vuepress/dist/blogs/frontEnd/2022/060610.html",htmlFilePathRelative:"blogs/frontEnd/2022/060610.html"}]},"/tags/xiaochengxu/1/":{pageSize:10,total:1,currentPage:1,currentClassificationKey:"tags",currentClassificationValue:"xiaochengxu",pages:[{data:{key:"v-953ed77e",path:"/blogs/frontEnd/2022/052901.html",title:"\u4E91\u97F3\u4E50\u5C0F\u7A0B\u5E8F",lang:"en-US",frontmatter:{title:"\u4E91\u97F3\u4E50\u5C0F\u7A0B\u5E8F",date:"2022/5/29",tags:["\u5C0F\u7A0B\u5E8F","\u97F3\u4E50\u8F6F\u4EF6"],categories:["frontEnd"]},excerpt:"",headers:[{level:3,title:"\u9879\u76EE\u622A\u56FE",slug:"\u9879\u76EE\u622A\u56FE",children:[]}],git:{createdTime:1654486096e3,updatedTime:1654587378e3,contributors:[{name:"ZoftTi",email:"poleorder@icloud.com",commits:3}]},filePathRelative:"blogs/frontEnd/2022/052901.md"},key:"v-953ed77e",path:"/blogs/frontEnd/2022/052901.html",title:"\u4E91\u97F3\u4E50\u5C0F\u7A0B\u5E8F",lang:"en-US",frontmatter:{title:"\u4E91\u97F3\u4E50\u5C0F\u7A0B\u5E8F",date:"2022/5/29",tags:["\u5C0F\u7A0B\u5E8F","\u97F3\u4E50\u8F6F\u4EF6"],categories:["frontEnd"]},excerpt:"",headers:[{level:3,title:"\u9879\u76EE\u622A\u56FE",slug:"\u9879\u76EE\u622A\u56FE",children:[]}],content:`
\u6E90\u4EE3\u7801\u5730\u5740 [https://github.com/ZoftTi/cloud_music](https://github.com/ZoftTi/cloud_music)

\`\`\`
cloud_music
\u251C\u2500 cloud_music_server_api // \u540E\u7AEF Api
\u251C\u2500 components // \u7EC4\u4EF6
|     \u251C\u2500NavHeader // \u5BFC\u822A\u5934\u90E8\u7EC4\u4EF6
\u251C\u2500 utils // \u5DE5\u5177\u51FD\u6570\u5C01\u88C5
|   \u251C\u2500 config.js // \u8BF7\u6C42\u914D\u7F6E\u6587\u4EF6
|   \u251C\u2500 request.js // \u8BF7\u6C42\u5C01\u88C5
\u251C\u2500 static // \u9759\u6001\u8D44\u6E90
\u251C\u2500 songPackage // \u6B4C\u66F2\u8BE6\u60C5\u9875\u5206\u5305
|      \u251C\u2500 pages
|      |   \u251C\u2500 static // \u8BE6\u60C5\u9875\u9759\u6001\u8D44\u6E90
|      |   \u251C\u2500 songDetail
|      |   \u251C\u2500 recommendSong
\u251C\u2500 pages // \u4E3B\u5305
|   \u251C\u2500 video // \u89C6\u9891\u9875
|   \u251C\u2500 search  // \u641C\u7D22\u9875
|   \u251C\u2500 personal // \u4E2A\u4EBA\u4E2D\u5FC3\u9875
|   \u251C\u2500 login // \u767B\u5F55\u9875
|   \u251C\u2500 index  // \u9996\u9875
\`\`\`

\u540E\u7AEF\u5E94\u7528\u57FA\u4E8E [NeteaseCloudMusicApi](https://github.com/Binaryify/NeteaseCloudMusicApi) \u642D\u5EFA

### \u9879\u76EE\u622A\u56FE

<!-- ![](/images/cloud_music/cloud_music_detail.png) -->
<img src="/assets/images/cloud_music/cloud_music_detail.png" width="300" />
<img src="/assets/images/cloud_music/cloud_music_recommend.png" width="300" />
<img src="/assets/images/cloud_music/cloud_music_index.png" width="300" />
<img src="/assets/images/cloud_music/cloud_music_personal.png" width="300" />
<img src="/assets/images/cloud_music/cloud_music_search.png" width="300" />
<img src="/assets/images/cloud_music/cloud_music_video.png" width="300" />
`,contentRendered:`<p>\u6E90\u4EE3\u7801\u5730\u5740 <a href="https://github.com/ZoftTi/cloud_music" target="_blank" rel="noopener noreferrer">https://github.com/ZoftTi/cloud_music<ExternalLinkIcon/></a></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>cloud_music
\u251C\u2500 cloud_music_server_api // \u540E\u7AEF Api
\u251C\u2500 components // \u7EC4\u4EF6
|     \u251C\u2500NavHeader // \u5BFC\u822A\u5934\u90E8\u7EC4\u4EF6
\u251C\u2500 utils // \u5DE5\u5177\u51FD\u6570\u5C01\u88C5
|   \u251C\u2500 config.js // \u8BF7\u6C42\u914D\u7F6E\u6587\u4EF6
|   \u251C\u2500 request.js // \u8BF7\u6C42\u5C01\u88C5
\u251C\u2500 static // \u9759\u6001\u8D44\u6E90
\u251C\u2500 songPackage // \u6B4C\u66F2\u8BE6\u60C5\u9875\u5206\u5305
|      \u251C\u2500 pages
|      |   \u251C\u2500 static // \u8BE6\u60C5\u9875\u9759\u6001\u8D44\u6E90
|      |   \u251C\u2500 songDetail
|      |   \u251C\u2500 recommendSong
\u251C\u2500 pages // \u4E3B\u5305
|   \u251C\u2500 video // \u89C6\u9891\u9875
|   \u251C\u2500 search  // \u641C\u7D22\u9875
|   \u251C\u2500 personal // \u4E2A\u4EBA\u4E2D\u5FC3\u9875
|   \u251C\u2500 login // \u767B\u5F55\u9875
|   \u251C\u2500 index  // \u9996\u9875
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u540E\u7AEF\u5E94\u7528\u57FA\u4E8E <a href="https://github.com/Binaryify/NeteaseCloudMusicApi" target="_blank" rel="noopener noreferrer">NeteaseCloudMusicApi<ExternalLinkIcon/></a> \u642D\u5EFA</p>
<h3 id="\u9879\u76EE\u622A\u56FE" tabindex="-1"><a class="header-anchor" href="#\u9879\u76EE\u622A\u56FE" aria-hidden="true">#</a> \u9879\u76EE\u622A\u56FE</h3>
<!-- ![](/images/cloud_music/cloud_music_detail.png) -->
<img src="/assets/images/cloud_music/cloud_music_detail.png" width="300" />
<img src="/assets/images/cloud_music/cloud_music_recommend.png" width="300" />
<img src="/assets/images/cloud_music/cloud_music_index.png" width="300" />
<img src="/assets/images/cloud_music/cloud_music_personal.png" width="300" />
<img src="/assets/images/cloud_music/cloud_music_search.png" width="300" />
<img src="/assets/images/cloud_music/cloud_music_video.png" width="300" />
`,date:"0000-00-00",deps:[],hoistedTags:[],links:[],pathInferred:"/blogs/frontEnd/2022/052901.html",pathLocale:"/",permalink:null,routeMeta:{title:"\u4E91\u97F3\u4E50\u5C0F\u7A0B\u5E8F"},slug:"052901",filePath:"/Volumes/File@ti/Project/Learn/zoftti.github.io/blogs/frontEnd/2022/052901.md",filePathRelative:"blogs/frontEnd/2022/052901.md",componentFilePath:"/Volumes/File@ti/Project/Learn/zoftti.github.io/.vuepress/.temp/pages/blogs/frontEnd/2022/052901.html.vue",componentFilePathRelative:"pages/blogs/frontEnd/2022/052901.html.vue",componentFileChunkName:"v-953ed77e",dataFilePath:"/Volumes/File@ti/Project/Learn/zoftti.github.io/.vuepress/.temp/pages/blogs/frontEnd/2022/052901.html.js",dataFilePathRelative:"pages/blogs/frontEnd/2022/052901.html.js",dataFileChunkName:"v-953ed77e",htmlFilePath:"/Volumes/File@ti/Project/Learn/zoftti.github.io/.vuepress/dist/blogs/frontEnd/2022/052901.html",htmlFilePathRelative:"blogs/frontEnd/2022/052901.html"}]},"/tags/yinleruanjian/1/":{pageSize:10,total:1,currentPage:1,currentClassificationKey:"tags",currentClassificationValue:"yinleruanjian",pages:[{data:{key:"v-953ed77e",path:"/blogs/frontEnd/2022/052901.html",title:"\u4E91\u97F3\u4E50\u5C0F\u7A0B\u5E8F",lang:"en-US",frontmatter:{title:"\u4E91\u97F3\u4E50\u5C0F\u7A0B\u5E8F",date:"2022/5/29",tags:["\u5C0F\u7A0B\u5E8F","\u97F3\u4E50\u8F6F\u4EF6"],categories:["frontEnd"]},excerpt:"",headers:[{level:3,title:"\u9879\u76EE\u622A\u56FE",slug:"\u9879\u76EE\u622A\u56FE",children:[]}],git:{createdTime:1654486096e3,updatedTime:1654587378e3,contributors:[{name:"ZoftTi",email:"poleorder@icloud.com",commits:3}]},filePathRelative:"blogs/frontEnd/2022/052901.md"},key:"v-953ed77e",path:"/blogs/frontEnd/2022/052901.html",title:"\u4E91\u97F3\u4E50\u5C0F\u7A0B\u5E8F",lang:"en-US",frontmatter:{title:"\u4E91\u97F3\u4E50\u5C0F\u7A0B\u5E8F",date:"2022/5/29",tags:["\u5C0F\u7A0B\u5E8F","\u97F3\u4E50\u8F6F\u4EF6"],categories:["frontEnd"]},excerpt:"",headers:[{level:3,title:"\u9879\u76EE\u622A\u56FE",slug:"\u9879\u76EE\u622A\u56FE",children:[]}],content:`
\u6E90\u4EE3\u7801\u5730\u5740 [https://github.com/ZoftTi/cloud_music](https://github.com/ZoftTi/cloud_music)

\`\`\`
cloud_music
\u251C\u2500 cloud_music_server_api // \u540E\u7AEF Api
\u251C\u2500 components // \u7EC4\u4EF6
|     \u251C\u2500NavHeader // \u5BFC\u822A\u5934\u90E8\u7EC4\u4EF6
\u251C\u2500 utils // \u5DE5\u5177\u51FD\u6570\u5C01\u88C5
|   \u251C\u2500 config.js // \u8BF7\u6C42\u914D\u7F6E\u6587\u4EF6
|   \u251C\u2500 request.js // \u8BF7\u6C42\u5C01\u88C5
\u251C\u2500 static // \u9759\u6001\u8D44\u6E90
\u251C\u2500 songPackage // \u6B4C\u66F2\u8BE6\u60C5\u9875\u5206\u5305
|      \u251C\u2500 pages
|      |   \u251C\u2500 static // \u8BE6\u60C5\u9875\u9759\u6001\u8D44\u6E90
|      |   \u251C\u2500 songDetail
|      |   \u251C\u2500 recommendSong
\u251C\u2500 pages // \u4E3B\u5305
|   \u251C\u2500 video // \u89C6\u9891\u9875
|   \u251C\u2500 search  // \u641C\u7D22\u9875
|   \u251C\u2500 personal // \u4E2A\u4EBA\u4E2D\u5FC3\u9875
|   \u251C\u2500 login // \u767B\u5F55\u9875
|   \u251C\u2500 index  // \u9996\u9875
\`\`\`

\u540E\u7AEF\u5E94\u7528\u57FA\u4E8E [NeteaseCloudMusicApi](https://github.com/Binaryify/NeteaseCloudMusicApi) \u642D\u5EFA

### \u9879\u76EE\u622A\u56FE

<!-- ![](/images/cloud_music/cloud_music_detail.png) -->
<img src="/assets/images/cloud_music/cloud_music_detail.png" width="300" />
<img src="/assets/images/cloud_music/cloud_music_recommend.png" width="300" />
<img src="/assets/images/cloud_music/cloud_music_index.png" width="300" />
<img src="/assets/images/cloud_music/cloud_music_personal.png" width="300" />
<img src="/assets/images/cloud_music/cloud_music_search.png" width="300" />
<img src="/assets/images/cloud_music/cloud_music_video.png" width="300" />
`,contentRendered:`<p>\u6E90\u4EE3\u7801\u5730\u5740 <a href="https://github.com/ZoftTi/cloud_music" target="_blank" rel="noopener noreferrer">https://github.com/ZoftTi/cloud_music<ExternalLinkIcon/></a></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>cloud_music
\u251C\u2500 cloud_music_server_api // \u540E\u7AEF Api
\u251C\u2500 components // \u7EC4\u4EF6
|     \u251C\u2500NavHeader // \u5BFC\u822A\u5934\u90E8\u7EC4\u4EF6
\u251C\u2500 utils // \u5DE5\u5177\u51FD\u6570\u5C01\u88C5
|   \u251C\u2500 config.js // \u8BF7\u6C42\u914D\u7F6E\u6587\u4EF6
|   \u251C\u2500 request.js // \u8BF7\u6C42\u5C01\u88C5
\u251C\u2500 static // \u9759\u6001\u8D44\u6E90
\u251C\u2500 songPackage // \u6B4C\u66F2\u8BE6\u60C5\u9875\u5206\u5305
|      \u251C\u2500 pages
|      |   \u251C\u2500 static // \u8BE6\u60C5\u9875\u9759\u6001\u8D44\u6E90
|      |   \u251C\u2500 songDetail
|      |   \u251C\u2500 recommendSong
\u251C\u2500 pages // \u4E3B\u5305
|   \u251C\u2500 video // \u89C6\u9891\u9875
|   \u251C\u2500 search  // \u641C\u7D22\u9875
|   \u251C\u2500 personal // \u4E2A\u4EBA\u4E2D\u5FC3\u9875
|   \u251C\u2500 login // \u767B\u5F55\u9875
|   \u251C\u2500 index  // \u9996\u9875
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u540E\u7AEF\u5E94\u7528\u57FA\u4E8E <a href="https://github.com/Binaryify/NeteaseCloudMusicApi" target="_blank" rel="noopener noreferrer">NeteaseCloudMusicApi<ExternalLinkIcon/></a> \u642D\u5EFA</p>
<h3 id="\u9879\u76EE\u622A\u56FE" tabindex="-1"><a class="header-anchor" href="#\u9879\u76EE\u622A\u56FE" aria-hidden="true">#</a> \u9879\u76EE\u622A\u56FE</h3>
<!-- ![](/images/cloud_music/cloud_music_detail.png) -->
<img src="/assets/images/cloud_music/cloud_music_detail.png" width="300" />
<img src="/assets/images/cloud_music/cloud_music_recommend.png" width="300" />
<img src="/assets/images/cloud_music/cloud_music_index.png" width="300" />
<img src="/assets/images/cloud_music/cloud_music_personal.png" width="300" />
<img src="/assets/images/cloud_music/cloud_music_search.png" width="300" />
<img src="/assets/images/cloud_music/cloud_music_video.png" width="300" />
`,date:"0000-00-00",deps:[],hoistedTags:[],links:[],pathInferred:"/blogs/frontEnd/2022/052901.html",pathLocale:"/",permalink:null,routeMeta:{title:"\u4E91\u97F3\u4E50\u5C0F\u7A0B\u5E8F"},slug:"052901",filePath:"/Volumes/File@ti/Project/Learn/zoftti.github.io/blogs/frontEnd/2022/052901.md",filePathRelative:"blogs/frontEnd/2022/052901.md",componentFilePath:"/Volumes/File@ti/Project/Learn/zoftti.github.io/.vuepress/.temp/pages/blogs/frontEnd/2022/052901.html.vue",componentFilePathRelative:"pages/blogs/frontEnd/2022/052901.html.vue",componentFileChunkName:"v-953ed77e",dataFilePath:"/Volumes/File@ti/Project/Learn/zoftti.github.io/.vuepress/.temp/pages/blogs/frontEnd/2022/052901.html.js",dataFilePathRelative:"pages/blogs/frontEnd/2022/052901.html.js",dataFileChunkName:"v-953ed77e",htmlFilePath:"/Volumes/File@ti/Project/Learn/zoftti.github.io/.vuepress/dist/blogs/frontEnd/2022/052901.html",htmlFilePathRelative:"blogs/frontEnd/2022/052901.html"}]},"/tags/reco/1/":{pageSize:10,total:1,currentPage:1,currentClassificationKey:"tags",currentClassificationValue:"reco",pages:[{data:{key:"v-6bb1ef33",path:"/blogs/other/guide.html",title:"vuepress-theme-reco",lang:"en-US",frontmatter:{title:"vuepress-theme-reco",date:"2019/04/09",author:"reco_luan",tags:["reco"],categories:["reco"]},excerpt:"",headers:[{level:2,title:"Use",slug:"use",children:[]},{level:2,title:"Play Together",slug:"play-together",children:[{level:3,title:"0.x",slug:"_0-x",children:[]},{level:3,title:"1.x",slug:"_1-x",children:[]},{level:3,title:"CLI",slug:"cli",children:[]}]},{level:2,title:"License",slug:"license",children:[]}],git:{createdTime:1654486096e3,updatedTime:1654486096e3,contributors:[{name:"ZoftTi",email:"poleorder@icloud.com",commits:1}]},filePathRelative:"blogs/other/guide.md"},key:"v-6bb1ef33",path:"/blogs/other/guide.html",title:"vuepress-theme-reco",lang:"en-US",frontmatter:{title:"vuepress-theme-reco",date:"2019/04/09",author:"reco_luan",tags:["reco"],categories:["reco"]},excerpt:"",headers:[{level:2,title:"Use",slug:"use",children:[]},{level:2,title:"Play Together",slug:"play-together",children:[{level:3,title:"0.x",slug:"_0-x",children:[]},{level:3,title:"1.x",slug:"_1-x",children:[]},{level:3,title:"CLI",slug:"cli",children:[]}]},{level:2,title:"License",slug:"license",children:[]}],content:`
![vuepress](https://img.shields.io/badge/vuepress-0.14.8-brightgreen.svg)
![leancloud-storage](https://img.shields.io/badge/leancloud--storage-3.10.1-orange.svg)
![valine](https://img.shields.io/badge/valine-1.3.4-blue.svg)

::: tip \u4ECB\u7ECD
1. \u8FD9\u662F\u4E00\u4E2Avuepress\u4E3B\u9898\uFF0C\u65E8\u5728\u6DFB\u52A0\u535A\u5BA2\u6240\u9700\u7684\u5206\u7C7B\u3001TAB\u5899\u3001\u5206\u9875\u3001\u8BC4\u8BBA\u7B49\u80FD\uFF1B<br>
2. \u4E3B\u9898\u8FFD\u6C42\u6781\u7B80\uFF0C\u6839\u636E vuepress \u7684\u9ED8\u8BA4\u4E3B\u9898\u4FEE\u6539\u800C\u6210\uFF0C\u5B98\u65B9\u7684\u4E3B\u9898\u914D\u7F6E\u4ECD\u7136\u9002\u7528\uFF1B<br>
3. \u4F60\u53EF\u4EE5\u6253\u5F00 [\u5348\u540E\u5357\u6742](http://recoluan.gitlab.io) \u6765\u67E5\u770B\u6548\u679C\u3002
:::

## Use

**Build**

\`\`\`bash
npm run build

# or

yarn build
\`\`\`

**Server**

\`\`\`bash
npm run dev

# or

yarn dev
\`\`\`

## Play Together

### 0.x

\`vuepress-theme-reco@0.x\` \u662F\u57FA\u4E8E \`vuepress@0.x\` \u7684\u535A\u5BA2\u4E3B\u9898\u3002

\`vuepress@0.x\` \u529F\u80FD\u6BD4\u8F83\u7B80\u5355\uFF0C\u53EA\u9002\u5408\u4E66\u5199\u7B80\u5355\u7684\u6587\u6863\uFF0C\u4F46\u597D\u5728\u652F\u6301\u4E3B\u9898\u81EA\u5B9A\u4E49\uFF0C\u800C\u4E2A\u4EBA\u53C8\u5E0C\u671B\u80FD\u591F\u7528\u5B83\u6765\u4E66\u5199\u535A\u5BA2\uFF0C\u539F\u56E0\u5C31\u662F\u5B83\u8DB3\u591F\u7684\u7B80\u6D01\uFF0C\u6BEB\u65E0\u7591\u95EE\uFF0C\u8FD9\u4E5F\u7B26\u5408\u5F88\u591A\u7A0B\u5E8F\u5458\u7684\u89C2\u5FF5\uFF0C\u4E5F\u5C31\u662F\u5728\u8FD9\u79CD\u60C5\u51B5\u4E0B\uFF0C\`vuepress-theme-reco@0.x\` \u7684\u7B2C\u4E00\u4E2A\u7248\u672C\u7ECF\u8FC7\u4E00\u4E2A\u901A\u5BB5\u800C\u4EA7\u751F\u3002

\u4E3B\u9898\u5F00\u6E90\u4E0D\u4E45\uFF0C\u5F88\u591A\u670B\u53CB\u901A\u8FC7\u5404\u79CD\u8054\u7CFB\u65B9\u5F0F\uFF0C\u7ED9\u5230\u5F88\u591A\u597D\u7684\u610F\u89C1\u548C\u5EFA\u8BAE\uFF0C\u6240\u4EE5\u6211\u4E2A\u4EBA\u4E5F\u5728\u79EF\u6781\u5730\u66F4\u65B0\u3002

\u56E0\u4E3A\u6211\u662F\u4E00\u540D\u524D\u7AEF\u5F00\u53D1\u5DE5\u7A0B\u5E08\uFF0C\u5F00\u53D1\u7684\u8FC7\u7A0B\u4E2D\uFF0C\u603B\u662F\u60F3\u7740\u80FD\u4E0D\u80FD\u52A0\u5165\u4E00\u4E9B\u70AB\u9177\u7684\u6548\u679C\uFF0C\u6709\u5F88\u591A\u6B21\u90FD\u662F\u6DFB\u52A0\u4E0A\u53C8\u53BB\u6389\uFF0C\u53CD\u53CD\u590D\u590D\uFF0C\u6700\u540E\u90FD\u662F\u88AB **\u7B80\u6D01** \u7684\u8FD9\u4E2A\u539F\u5219\u963B\u6B62\u6389\uFF0C\u6BD5\u7ADF\uFF0C\u73B0\u5728\u6211\u662F\u5C06\u5B83\u5F53\u4F5C\u4E00\u4E2A\u4EA7\u54C1\u6765\u770B\u5F85\uFF0C\u5E76\u4E0D\u662F\u4E00\u4E2A\u6280\u672F\u6216\u8005\u662F\u6280\u5DE7\u7684\u5C1D\u8BD5\u9879\u76EE\u3002

### 1.x

\u968F\u7740\u4E0D\u65AD\u6709\u7528\u6237\u8FC7\u6765\u8BE2\u95EE\uFF1A\u4E3A\u4EC0\u4E48 \`vuepress-theme-reco@0.x\` \u4E0D\u80FD\u5728 \`vuepress@1.x\` \u4E0A\u4F7F\u7528\uFF1F\u672C\u6765\u53EA\u662F\u6253\u7B97\u5BF9 \`vuepress-theme-reco@0.x\` \u8FDB\u884C\u7B80\u5355\u7684bug\u4FEE\u590D\u7684\u6211\uFF0C\u7EC8\u7A76\u8FD8\u662F\u5FCD\u4E0D\u4F4F\uFF0C\u5F00\u59CB\u4E86 \`vuepress-theme-reco@1.x\` \u7684\u5F00\u53D1\u3002\u53C8\u662F\u5728\u4E00\u4E2A\u5BC2\u9759\u7684\u51CC\u6668\u4E24\u70B9\u534A\uFF08\u665A\u4E0A\u5C31\u662F\u51FA\u6D3B\u5FEB\uFF09\uFF0C\u6211\u9ED8\u9ED8\u5730\u5F00\u59CB\u4E86\u3002

\u4E3B\u9898\u5347\u7EA7\u7684\u5173\u952E\u4E5F\u5C31\u662F \`@vuepress/plugin-blog\` \u8FD9\u6B3E\u5B98\u65B9\u63D2\u4EF6\uFF0C\u5B83\u4E0D\u9700\u8981\u518D\u53BB\u9EBB\u70E6\u5730\u8FC7\u6EE4\u6570\u636E\uFF0C\u5C06\u5206\u7C7B\u548C\u6807\u7B7E\u7684\u76F8\u5173\u4FE1\u606F\u76F4\u63A5\u5B58\u5728 \`$categories\` \u548C \`$tags\` \u8FD9\u4E24\u4E2A\u5168\u5C40\u53D8\u91CF\u4E2D\u3002\u501F\u52A9\u4E8E \`@vuepress/plugin-blog\`\uFF0C\u5206\u7C7B\u548C\u6807\u7B7E\u529F\u80FD\u66F4\u5BB9\u6613\u5B9E\u73B0\uFF0C\u4F46\u4E5F\u6709\u4E86\u4E00\u4E9B\u5C40\u9650\u3002\u63A5\u4E0B\u6765\u4E24\u4E09\u5929\u7684\u65F6\u95F4\uFF0C\u90FD\u662F\u5728\u8FDB\u884C\u529F\u80FD\u7684\u8FC1\u79FB\u548C\u4E00\u4E9Bbug\u7684\u4FEE\u590D\u3002

\`vuepress-theme-reco@0.x\` \u7684\u5F00\u53D1\u4E2D\uFF0C\u66F4\u52A0\u6DF1\u523B\u5730\u660E\u767D\u4E86\u6A21\u5757\u5316\u548C\u7EC4\u4EF6\u5316\u7F16\u7A0B\u7684\u91CD\u8981\u6027\uFF0C\u5982\u679C\u5F53\u521D\u6CA1\u6709\u628A\u4E00\u4E9B\u529F\u80FD\u8FDB\u884C\u5C01\u88C5\uFF0C\u800C\u662F\u76F4\u63A5\u7B80\u5355\u7684\u590D\u5236\uFF0C\u8FD9\u6B21\u5347\u7EA7\u4E5F\u4E0D\u4F1A\u8FD9\u4E48\u987A\u5229\u3002\u6A21\u5757\u62C6\u5206\u7684\u8D8A\u7EC6\uFF0C\u4F7F\u7528\u5C31\u4F1A\u8D8A\u7075\u6D3B\u3002

### CLI

\u8FD8\u662F\u8877\u5FC3\u5730\u5E0C\u671B\u80FD\u6709\u66F4\u591A\u7684\u670B\u53CB\u53C2\u4E0E\u8FDB\u6765\uFF0C\u66F4\u5FEB\u5730\u53BB\u5B8C\u5584\u5B83\u3002\u63A5\u4E0B\u6765\u65F6\u95F4\u5141\u8BB8\u7684\u60C5\u51B5\u4E0B\uFF0C\u6211\u4F1A\u5F00\u6E90\u4E00\u6B3E\u81EA\u52A8\u751F\u6210\u535A\u5BA2\u7684\u811A\u624B\u67B6\uFF0C\u7565\u8FC7\u914D\u7F6E\u6B65\u9AA4\uFF0C\u76F4\u63A5\u4E66\u5199\u4F18\u8D28\u5185\u5BB9\uFF0C\u8FD9\u4E5F\u662F\u6211\u540E\u6765\u9010\u6E10\u5F62\u6210\u7684\u4E00\u79CD\u4FE1\u5FF5\uFF0C\u5C31\u662F\u5E0C\u671B\u80FD\u8BA9\u8FD9\u6B3E\u4E3B\u9898\uFF0C\u529F\u80FD\u8D8A\u5B8C\u5584\uFF0C\u4F7F\u7528\u8D8A\u6765\u8D8A\u7B80\u5355\u3002

## License
[MIT](https://github.com/recoluan/vuepress-theme-reco/blob/master/LICENSE)`,contentRendered:`<p><img src="https://img.shields.io/badge/vuepress-0.14.8-brightgreen.svg" alt="vuepress">
<img src="https://img.shields.io/badge/leancloud--storage-3.10.1-orange.svg" alt="leancloud-storage">
<img src="https://img.shields.io/badge/valine-1.3.4-blue.svg" alt="valine"></p>
<div class="custom-container tip"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 8h.01"></path><path d="M11 12h1v4h1"></path></g></svg><p class="custom-container-title">\u4ECB\u7ECD</p><ol>
<li>\u8FD9\u662F\u4E00\u4E2Avuepress\u4E3B\u9898\uFF0C\u65E8\u5728\u6DFB\u52A0\u535A\u5BA2\u6240\u9700\u7684\u5206\u7C7B\u3001TAB\u5899\u3001\u5206\u9875\u3001\u8BC4\u8BBA\u7B49\u80FD\uFF1B<br></li>
<li>\u4E3B\u9898\u8FFD\u6C42\u6781\u7B80\uFF0C\u6839\u636E vuepress \u7684\u9ED8\u8BA4\u4E3B\u9898\u4FEE\u6539\u800C\u6210\uFF0C\u5B98\u65B9\u7684\u4E3B\u9898\u914D\u7F6E\u4ECD\u7136\u9002\u7528\uFF1B<br></li>
<li>\u4F60\u53EF\u4EE5\u6253\u5F00 <a href="http://recoluan.gitlab.io" target="_blank" rel="noopener noreferrer">\u5348\u540E\u5357\u6742<ExternalLinkIcon/></a> \u6765\u67E5\u770B\u6548\u679C\u3002</li>
</ol>
</div><h2 id="use" tabindex="-1"><a class="header-anchor" href="#use" aria-hidden="true">#</a> Use</h2>
<p><strong>Build</strong></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> run build

<span class="token comment"># or</span>

<span class="token function">yarn</span> build
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Server</strong></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> run dev

<span class="token comment"># or</span>

<span class="token function">yarn</span> dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="play-together" tabindex="-1"><a class="header-anchor" href="#play-together" aria-hidden="true">#</a> Play Together</h2>
<h3 id="_0-x" tabindex="-1"><a class="header-anchor" href="#_0-x" aria-hidden="true">#</a> 0.x</h3>
<p><code v-pre>vuepress-theme-reco@0.x</code> \u662F\u57FA\u4E8E <code v-pre>vuepress@0.x</code> \u7684\u535A\u5BA2\u4E3B\u9898\u3002</p>
<p><code v-pre>vuepress@0.x</code> \u529F\u80FD\u6BD4\u8F83\u7B80\u5355\uFF0C\u53EA\u9002\u5408\u4E66\u5199\u7B80\u5355\u7684\u6587\u6863\uFF0C\u4F46\u597D\u5728\u652F\u6301\u4E3B\u9898\u81EA\u5B9A\u4E49\uFF0C\u800C\u4E2A\u4EBA\u53C8\u5E0C\u671B\u80FD\u591F\u7528\u5B83\u6765\u4E66\u5199\u535A\u5BA2\uFF0C\u539F\u56E0\u5C31\u662F\u5B83\u8DB3\u591F\u7684\u7B80\u6D01\uFF0C\u6BEB\u65E0\u7591\u95EE\uFF0C\u8FD9\u4E5F\u7B26\u5408\u5F88\u591A\u7A0B\u5E8F\u5458\u7684\u89C2\u5FF5\uFF0C\u4E5F\u5C31\u662F\u5728\u8FD9\u79CD\u60C5\u51B5\u4E0B\uFF0C<code v-pre>vuepress-theme-reco@0.x</code> \u7684\u7B2C\u4E00\u4E2A\u7248\u672C\u7ECF\u8FC7\u4E00\u4E2A\u901A\u5BB5\u800C\u4EA7\u751F\u3002</p>
<p>\u4E3B\u9898\u5F00\u6E90\u4E0D\u4E45\uFF0C\u5F88\u591A\u670B\u53CB\u901A\u8FC7\u5404\u79CD\u8054\u7CFB\u65B9\u5F0F\uFF0C\u7ED9\u5230\u5F88\u591A\u597D\u7684\u610F\u89C1\u548C\u5EFA\u8BAE\uFF0C\u6240\u4EE5\u6211\u4E2A\u4EBA\u4E5F\u5728\u79EF\u6781\u5730\u66F4\u65B0\u3002</p>
<p>\u56E0\u4E3A\u6211\u662F\u4E00\u540D\u524D\u7AEF\u5F00\u53D1\u5DE5\u7A0B\u5E08\uFF0C\u5F00\u53D1\u7684\u8FC7\u7A0B\u4E2D\uFF0C\u603B\u662F\u60F3\u7740\u80FD\u4E0D\u80FD\u52A0\u5165\u4E00\u4E9B\u70AB\u9177\u7684\u6548\u679C\uFF0C\u6709\u5F88\u591A\u6B21\u90FD\u662F\u6DFB\u52A0\u4E0A\u53C8\u53BB\u6389\uFF0C\u53CD\u53CD\u590D\u590D\uFF0C\u6700\u540E\u90FD\u662F\u88AB <strong>\u7B80\u6D01</strong> \u7684\u8FD9\u4E2A\u539F\u5219\u963B\u6B62\u6389\uFF0C\u6BD5\u7ADF\uFF0C\u73B0\u5728\u6211\u662F\u5C06\u5B83\u5F53\u4F5C\u4E00\u4E2A\u4EA7\u54C1\u6765\u770B\u5F85\uFF0C\u5E76\u4E0D\u662F\u4E00\u4E2A\u6280\u672F\u6216\u8005\u662F\u6280\u5DE7\u7684\u5C1D\u8BD5\u9879\u76EE\u3002</p>
<h3 id="_1-x" tabindex="-1"><a class="header-anchor" href="#_1-x" aria-hidden="true">#</a> 1.x</h3>
<p>\u968F\u7740\u4E0D\u65AD\u6709\u7528\u6237\u8FC7\u6765\u8BE2\u95EE\uFF1A\u4E3A\u4EC0\u4E48 <code v-pre>vuepress-theme-reco@0.x</code> \u4E0D\u80FD\u5728 <code v-pre>vuepress@1.x</code> \u4E0A\u4F7F\u7528\uFF1F\u672C\u6765\u53EA\u662F\u6253\u7B97\u5BF9 <code v-pre>vuepress-theme-reco@0.x</code> \u8FDB\u884C\u7B80\u5355\u7684bug\u4FEE\u590D\u7684\u6211\uFF0C\u7EC8\u7A76\u8FD8\u662F\u5FCD\u4E0D\u4F4F\uFF0C\u5F00\u59CB\u4E86 <code v-pre>vuepress-theme-reco@1.x</code> \u7684\u5F00\u53D1\u3002\u53C8\u662F\u5728\u4E00\u4E2A\u5BC2\u9759\u7684\u51CC\u6668\u4E24\u70B9\u534A\uFF08\u665A\u4E0A\u5C31\u662F\u51FA\u6D3B\u5FEB\uFF09\uFF0C\u6211\u9ED8\u9ED8\u5730\u5F00\u59CB\u4E86\u3002</p>
<p>\u4E3B\u9898\u5347\u7EA7\u7684\u5173\u952E\u4E5F\u5C31\u662F <code v-pre>@vuepress/plugin-blog</code> \u8FD9\u6B3E\u5B98\u65B9\u63D2\u4EF6\uFF0C\u5B83\u4E0D\u9700\u8981\u518D\u53BB\u9EBB\u70E6\u5730\u8FC7\u6EE4\u6570\u636E\uFF0C\u5C06\u5206\u7C7B\u548C\u6807\u7B7E\u7684\u76F8\u5173\u4FE1\u606F\u76F4\u63A5\u5B58\u5728 <code v-pre>$categories</code> \u548C <code v-pre>$tags</code> \u8FD9\u4E24\u4E2A\u5168\u5C40\u53D8\u91CF\u4E2D\u3002\u501F\u52A9\u4E8E <code v-pre>@vuepress/plugin-blog</code>\uFF0C\u5206\u7C7B\u548C\u6807\u7B7E\u529F\u80FD\u66F4\u5BB9\u6613\u5B9E\u73B0\uFF0C\u4F46\u4E5F\u6709\u4E86\u4E00\u4E9B\u5C40\u9650\u3002\u63A5\u4E0B\u6765\u4E24\u4E09\u5929\u7684\u65F6\u95F4\uFF0C\u90FD\u662F\u5728\u8FDB\u884C\u529F\u80FD\u7684\u8FC1\u79FB\u548C\u4E00\u4E9Bbug\u7684\u4FEE\u590D\u3002</p>
<p><code v-pre>vuepress-theme-reco@0.x</code> \u7684\u5F00\u53D1\u4E2D\uFF0C\u66F4\u52A0\u6DF1\u523B\u5730\u660E\u767D\u4E86\u6A21\u5757\u5316\u548C\u7EC4\u4EF6\u5316\u7F16\u7A0B\u7684\u91CD\u8981\u6027\uFF0C\u5982\u679C\u5F53\u521D\u6CA1\u6709\u628A\u4E00\u4E9B\u529F\u80FD\u8FDB\u884C\u5C01\u88C5\uFF0C\u800C\u662F\u76F4\u63A5\u7B80\u5355\u7684\u590D\u5236\uFF0C\u8FD9\u6B21\u5347\u7EA7\u4E5F\u4E0D\u4F1A\u8FD9\u4E48\u987A\u5229\u3002\u6A21\u5757\u62C6\u5206\u7684\u8D8A\u7EC6\uFF0C\u4F7F\u7528\u5C31\u4F1A\u8D8A\u7075\u6D3B\u3002</p>
<h3 id="cli" tabindex="-1"><a class="header-anchor" href="#cli" aria-hidden="true">#</a> CLI</h3>
<p>\u8FD8\u662F\u8877\u5FC3\u5730\u5E0C\u671B\u80FD\u6709\u66F4\u591A\u7684\u670B\u53CB\u53C2\u4E0E\u8FDB\u6765\uFF0C\u66F4\u5FEB\u5730\u53BB\u5B8C\u5584\u5B83\u3002\u63A5\u4E0B\u6765\u65F6\u95F4\u5141\u8BB8\u7684\u60C5\u51B5\u4E0B\uFF0C\u6211\u4F1A\u5F00\u6E90\u4E00\u6B3E\u81EA\u52A8\u751F\u6210\u535A\u5BA2\u7684\u811A\u624B\u67B6\uFF0C\u7565\u8FC7\u914D\u7F6E\u6B65\u9AA4\uFF0C\u76F4\u63A5\u4E66\u5199\u4F18\u8D28\u5185\u5BB9\uFF0C\u8FD9\u4E5F\u662F\u6211\u540E\u6765\u9010\u6E10\u5F62\u6210\u7684\u4E00\u79CD\u4FE1\u5FF5\uFF0C\u5C31\u662F\u5E0C\u671B\u80FD\u8BA9\u8FD9\u6B3E\u4E3B\u9898\uFF0C\u529F\u80FD\u8D8A\u5B8C\u5584\uFF0C\u4F7F\u7528\u8D8A\u6765\u8D8A\u7B80\u5355\u3002</p>
<h2 id="license" tabindex="-1"><a class="header-anchor" href="#license" aria-hidden="true">#</a> License</h2>
<p><a href="https://github.com/recoluan/vuepress-theme-reco/blob/master/LICENSE" target="_blank" rel="noopener noreferrer">MIT<ExternalLinkIcon/></a></p>
`,date:"0000-00-00",deps:[],hoistedTags:[],links:[],pathInferred:"/blogs/other/guide.html",pathLocale:"/",permalink:null,routeMeta:{title:"vuepress-theme-reco"},slug:"guide",filePath:"/Volumes/File@ti/Project/Learn/zoftti.github.io/blogs/other/guide.md",filePathRelative:"blogs/other/guide.md",componentFilePath:"/Volumes/File@ti/Project/Learn/zoftti.github.io/.vuepress/.temp/pages/blogs/other/guide.html.vue",componentFilePathRelative:"pages/blogs/other/guide.html.vue",componentFileChunkName:"v-6bb1ef33",dataFilePath:"/Volumes/File@ti/Project/Learn/zoftti.github.io/.vuepress/.temp/pages/blogs/other/guide.html.js",dataFilePathRelative:"pages/blogs/other/guide.html.js",dataFileChunkName:"v-6bb1ef33",htmlFilePath:"/Volumes/File@ti/Project/Learn/zoftti.github.io/.vuepress/dist/blogs/other/guide.html",htmlFilePathRelative:"blogs/other/guide.html"}]}},dd=[{data:{key:"v-928deb06",path:"/blogs/frontEnd/2022/061518.html",title:"SSO \u5355\u70B9\u767B\u5F55\u7CFB\u7EDF",lang:"en-US",frontmatter:{title:"SSO \u5355\u70B9\u767B\u5F55\u7CFB\u7EDF",date:"2022/6/15",tags:["SSO"],categories:["frontEnd"]},excerpt:`<div class="custom-container tip"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 8h.01"></path><path d="M11 12h1v4h1"></path></g></svg><p class="custom-container-title">TIP</p><ul>
<li>\u8FD9\u662F\u4E00\u4E2ASSO\u5355\u70B9\u767B\u5F55\u7684\u9879\u76EE\uFF0C\u7528\u6765\u6388\u6743\u767B\u5F55\u5176\u4ED6\u7684\u9879\u76EE</li>
<li>\u76EE\u524D\u6682\u6CA1\u6709\u9879\u76EE\u63A5\u5165\u8BE5\u767B\u5F55\u7CFB\u7EDF\uFF0C\u5728\u672A\u6765\u4F1A\u63A5\u5165\u4E00\u4E9B\u6211\u81EA\u5DF1\u5199\u7684\u9879\u76EE\u3002</li>
<li>\u4E5F\u53EF\u4EE5\u5728\u6CE8\u518CApp\u9875\u9762\u6CE8\u518C\u5E94\u7528\uFF0C\u4EE5\u63A5\u5165\u8BE5\u767B\u5F55\u7CFB\u7EDF</li>
</ul>
</div>`,headers:[{level:2,title:"\u9879\u76EE\u622A\u56FE",slug:"\u9879\u76EE\u622A\u56FE",children:[]}],git:{createdTime:1655292309e3,updatedTime:1655292309e3,contributors:[{name:"ZoftTi",email:"poleorder@icloud.com",commits:1}]},filePathRelative:"blogs/frontEnd/2022/061518.md"},key:"v-928deb06",path:"/blogs/frontEnd/2022/061518.html",title:"SSO \u5355\u70B9\u767B\u5F55\u7CFB\u7EDF",lang:"en-US",frontmatter:{title:"SSO \u5355\u70B9\u767B\u5F55\u7CFB\u7EDF",date:"2022/6/15",tags:["SSO"],categories:["frontEnd"]},excerpt:`<div class="custom-container tip"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 8h.01"></path><path d="M11 12h1v4h1"></path></g></svg><p class="custom-container-title">TIP</p><ul>
<li>\u8FD9\u662F\u4E00\u4E2ASSO\u5355\u70B9\u767B\u5F55\u7684\u9879\u76EE\uFF0C\u7528\u6765\u6388\u6743\u767B\u5F55\u5176\u4ED6\u7684\u9879\u76EE</li>
<li>\u76EE\u524D\u6682\u6CA1\u6709\u9879\u76EE\u63A5\u5165\u8BE5\u767B\u5F55\u7CFB\u7EDF\uFF0C\u5728\u672A\u6765\u4F1A\u63A5\u5165\u4E00\u4E9B\u6211\u81EA\u5DF1\u5199\u7684\u9879\u76EE\u3002</li>
<li>\u4E5F\u53EF\u4EE5\u5728\u6CE8\u518CApp\u9875\u9762\u6CE8\u518C\u5E94\u7528\uFF0C\u4EE5\u63A5\u5165\u8BE5\u767B\u5F55\u7CFB\u7EDF</li>
</ul>
</div>`,headers:[{level:2,title:"\u9879\u76EE\u622A\u56FE",slug:"\u9879\u76EE\u622A\u56FE",children:[]}],content:`::: tip
* \u8FD9\u662F\u4E00\u4E2ASSO\u5355\u70B9\u767B\u5F55\u7684\u9879\u76EE\uFF0C\u7528\u6765\u6388\u6743\u767B\u5F55\u5176\u4ED6\u7684\u9879\u76EE
* \u76EE\u524D\u6682\u6CA1\u6709\u9879\u76EE\u63A5\u5165\u8BE5\u767B\u5F55\u7CFB\u7EDF\uFF0C\u5728\u672A\u6765\u4F1A\u63A5\u5165\u4E00\u4E9B\u6211\u81EA\u5DF1\u5199\u7684\u9879\u76EE\u3002
* \u4E5F\u53EF\u4EE5\u5728\u6CE8\u518CApp\u9875\u9762\u6CE8\u518C\u5E94\u7528\uFF0C\u4EE5\u63A5\u5165\u8BE5\u767B\u5F55\u7CFB\u7EDF
:::

<!-- more -->

## \u9879\u76EE\u622A\u56FE

![login](/assets/images/SSO/login.png)
![register](/assets/images/SSO/register.png)
![profile](/assets/images/SSO/profile.png)
![authorize](/assets/images/SSO/authorize.png)
![resetpassword](/assets/images/SSO/resetpassword.png)
![email](/assets/images/SSO/email.png)

`,contentRendered:`<div class="custom-container tip"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 8h.01"></path><path d="M11 12h1v4h1"></path></g></svg><p class="custom-container-title">TIP</p><ul>
<li>\u8FD9\u662F\u4E00\u4E2ASSO\u5355\u70B9\u767B\u5F55\u7684\u9879\u76EE\uFF0C\u7528\u6765\u6388\u6743\u767B\u5F55\u5176\u4ED6\u7684\u9879\u76EE</li>
<li>\u76EE\u524D\u6682\u6CA1\u6709\u9879\u76EE\u63A5\u5165\u8BE5\u767B\u5F55\u7CFB\u7EDF\uFF0C\u5728\u672A\u6765\u4F1A\u63A5\u5165\u4E00\u4E9B\u6211\u81EA\u5DF1\u5199\u7684\u9879\u76EE\u3002</li>
<li>\u4E5F\u53EF\u4EE5\u5728\u6CE8\u518CApp\u9875\u9762\u6CE8\u518C\u5E94\u7528\uFF0C\u4EE5\u63A5\u5165\u8BE5\u767B\u5F55\u7CFB\u7EDF</li>
</ul>
</div><!-- more -->
<h2 id="\u9879\u76EE\u622A\u56FE" tabindex="-1"><a class="header-anchor" href="#\u9879\u76EE\u622A\u56FE" aria-hidden="true">#</a> \u9879\u76EE\u622A\u56FE</h2>
<p><img src="/assets/images/SSO/login.png" alt="login">
<img src="/assets/images/SSO/register.png" alt="register">
<img src="/assets/images/SSO/profile.png" alt="profile">
<img src="/assets/images/SSO/authorize.png" alt="authorize">
<img src="/assets/images/SSO/resetpassword.png" alt="resetpassword">
<img src="/assets/images/SSO/email.png" alt="email"></p>
`,date:"0000-00-00",deps:[],hoistedTags:[],links:[],pathInferred:"/blogs/frontEnd/2022/061518.html",pathLocale:"/",permalink:null,routeMeta:{title:"SSO \u5355\u70B9\u767B\u5F55\u7CFB\u7EDF"},slug:"061518",filePath:"/Volumes/File@ti/Project/Learn/zoftti.github.io/blogs/frontEnd/2022/061518.md",filePathRelative:"blogs/frontEnd/2022/061518.md",componentFilePath:"/Volumes/File@ti/Project/Learn/zoftti.github.io/.vuepress/.temp/pages/blogs/frontEnd/2022/061518.html.vue",componentFilePathRelative:"pages/blogs/frontEnd/2022/061518.html.vue",componentFileChunkName:"v-928deb06",dataFilePath:"/Volumes/File@ti/Project/Learn/zoftti.github.io/.vuepress/.temp/pages/blogs/frontEnd/2022/061518.html.js",dataFilePathRelative:"pages/blogs/frontEnd/2022/061518.html.js",dataFileChunkName:"v-928deb06",htmlFilePath:"/Volumes/File@ti/Project/Learn/zoftti.github.io/.vuepress/dist/blogs/frontEnd/2022/061518.html",htmlFilePathRelative:"blogs/frontEnd/2022/061518.html"},{data:{key:"v-7caf0363",path:"/blogs/frontEnd/2022/060610.html",title:"\u597D\u5BA2\u79DF\u623F\u79FB\u52A8\u7AEF\u7F51\u9875",lang:"en-US",frontmatter:{title:"\u597D\u5BA2\u79DF\u623F\u79FB\u52A8\u7AEF\u7F51\u9875",date:"2022/6/6",tags:["\u524D\u7AEF","\u79FB\u52A8\u7AEF"],categories:["frontEnd"]},excerpt:"",headers:[{level:2,title:"\u9879\u76EE\u622A\u56FE",slug:"\u9879\u76EE\u622A\u56FE",children:[]}],git:{createdTime:1654486237e3,updatedTime:1654486237e3,contributors:[{name:"ZoftTi",email:"poleorder@icloud.com",commits:1}]},filePathRelative:"blogs/frontEnd/2022/060610.md"},key:"v-7caf0363",path:"/blogs/frontEnd/2022/060610.html",title:"\u597D\u5BA2\u79DF\u623F\u79FB\u52A8\u7AEF\u7F51\u9875",lang:"en-US",frontmatter:{title:"\u597D\u5BA2\u79DF\u623F\u79FB\u52A8\u7AEF\u7F51\u9875",date:"2022/6/6",tags:["\u524D\u7AEF","\u79FB\u52A8\u7AEF"],categories:["frontEnd"]},excerpt:"",headers:[{level:2,title:"\u9879\u76EE\u622A\u56FE",slug:"\u9879\u76EE\u622A\u56FE",children:[]}],content:`
\u6E90\u4EE3\u7801\u5730\u5740 [https://github.com/ZoftTi/hkzf-mobile](https://github.com/ZoftTi/hkzf-mobile)

\`\`\`
hkzf-mobile
\u251C\u2500README.md
\u251C\u2500package.json
\u251C\u2500yarn.lock
\u251C\u2500src
|  \u251C\u2500App.js
|  \u251C\u2500index.css
|  \u251C\u2500index.js
|  \u251C\u2500utils
|  \u251C\u2500pages
|  |   \u251C\u2500Profile // \u4E2A\u4EBA\u8D44\u6599
|  |   \u251C\u2500News // \u8D44\u8BAF
|  |   \u251C\u2500Map // \u5730\u56FE
|  |   \u251C\u2500Index
|  |   \u251C\u2500HouseList // \u623F\u5B50\u5217\u8868
|  |   \u251C\u2500Home // \u9996\u9875
|  |   \u251C\u2500CityList // \u57CE\u5E02\u5217\u8868
|  \u251C\u2500components // \u7EC4\u4EF6
|  |     \u251C\u2500NavHeader \u5934\u90E8\u5BFC\u822A\u7EC4\u4EF6
|  \u251C\u2500assets
|  |   \u251C\u2500images // \u56FE\u7247\u6587\u4EF6
|  |   \u251C\u2500fonts // \u5B57\u4F53\u6587\u4EF6
\u251C\u2500public
\u251C\u2500hkzf_v1_server_api // \u540E\u7AEF API 
\`\`\`

## \u9879\u76EE\u622A\u56FE
![hkzf_preview](/assets/images/hkzf.png)`,contentRendered:`<p>\u6E90\u4EE3\u7801\u5730\u5740 <a href="https://github.com/ZoftTi/hkzf-mobile" target="_blank" rel="noopener noreferrer">https://github.com/ZoftTi/hkzf-mobile<ExternalLinkIcon/></a></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>hkzf-mobile
\u251C\u2500README.md
\u251C\u2500package.json
\u251C\u2500yarn.lock
\u251C\u2500src
|  \u251C\u2500App.js
|  \u251C\u2500index.css
|  \u251C\u2500index.js
|  \u251C\u2500utils
|  \u251C\u2500pages
|  |   \u251C\u2500Profile // \u4E2A\u4EBA\u8D44\u6599
|  |   \u251C\u2500News // \u8D44\u8BAF
|  |   \u251C\u2500Map // \u5730\u56FE
|  |   \u251C\u2500Index
|  |   \u251C\u2500HouseList // \u623F\u5B50\u5217\u8868
|  |   \u251C\u2500Home // \u9996\u9875
|  |   \u251C\u2500CityList // \u57CE\u5E02\u5217\u8868
|  \u251C\u2500components // \u7EC4\u4EF6
|  |     \u251C\u2500NavHeader \u5934\u90E8\u5BFC\u822A\u7EC4\u4EF6
|  \u251C\u2500assets
|  |   \u251C\u2500images // \u56FE\u7247\u6587\u4EF6
|  |   \u251C\u2500fonts // \u5B57\u4F53\u6587\u4EF6
\u251C\u2500public
\u251C\u2500hkzf_v1_server_api // \u540E\u7AEF API 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u9879\u76EE\u622A\u56FE" tabindex="-1"><a class="header-anchor" href="#\u9879\u76EE\u622A\u56FE" aria-hidden="true">#</a> \u9879\u76EE\u622A\u56FE</h2>
<p><img src="/assets/images/hkzf.png" alt="hkzf_preview"></p>
`,date:"0000-00-00",deps:[],hoistedTags:[],links:[],pathInferred:"/blogs/frontEnd/2022/060610.html",pathLocale:"/",permalink:null,routeMeta:{title:"\u597D\u5BA2\u79DF\u623F\u79FB\u52A8\u7AEF\u7F51\u9875"},slug:"060610",filePath:"/Volumes/File@ti/Project/Learn/zoftti.github.io/blogs/frontEnd/2022/060610.md",filePathRelative:"blogs/frontEnd/2022/060610.md",componentFilePath:"/Volumes/File@ti/Project/Learn/zoftti.github.io/.vuepress/.temp/pages/blogs/frontEnd/2022/060610.html.vue",componentFilePathRelative:"pages/blogs/frontEnd/2022/060610.html.vue",componentFileChunkName:"v-7caf0363",dataFilePath:"/Volumes/File@ti/Project/Learn/zoftti.github.io/.vuepress/.temp/pages/blogs/frontEnd/2022/060610.html.js",dataFilePathRelative:"pages/blogs/frontEnd/2022/060610.html.js",dataFileChunkName:"v-7caf0363",htmlFilePath:"/Volumes/File@ti/Project/Learn/zoftti.github.io/.vuepress/dist/blogs/frontEnd/2022/060610.html",htmlFilePathRelative:"blogs/frontEnd/2022/060610.html"},{data:{key:"v-953ed77e",path:"/blogs/frontEnd/2022/052901.html",title:"\u4E91\u97F3\u4E50\u5C0F\u7A0B\u5E8F",lang:"en-US",frontmatter:{title:"\u4E91\u97F3\u4E50\u5C0F\u7A0B\u5E8F",date:"2022/5/29",tags:["\u5C0F\u7A0B\u5E8F","\u97F3\u4E50\u8F6F\u4EF6"],categories:["frontEnd"]},excerpt:"",headers:[{level:3,title:"\u9879\u76EE\u622A\u56FE",slug:"\u9879\u76EE\u622A\u56FE",children:[]}],git:{createdTime:1654486096e3,updatedTime:1654587378e3,contributors:[{name:"ZoftTi",email:"poleorder@icloud.com",commits:3}]},filePathRelative:"blogs/frontEnd/2022/052901.md"},key:"v-953ed77e",path:"/blogs/frontEnd/2022/052901.html",title:"\u4E91\u97F3\u4E50\u5C0F\u7A0B\u5E8F",lang:"en-US",frontmatter:{title:"\u4E91\u97F3\u4E50\u5C0F\u7A0B\u5E8F",date:"2022/5/29",tags:["\u5C0F\u7A0B\u5E8F","\u97F3\u4E50\u8F6F\u4EF6"],categories:["frontEnd"]},excerpt:"",headers:[{level:3,title:"\u9879\u76EE\u622A\u56FE",slug:"\u9879\u76EE\u622A\u56FE",children:[]}],content:`
\u6E90\u4EE3\u7801\u5730\u5740 [https://github.com/ZoftTi/cloud_music](https://github.com/ZoftTi/cloud_music)

\`\`\`
cloud_music
\u251C\u2500 cloud_music_server_api // \u540E\u7AEF Api
\u251C\u2500 components // \u7EC4\u4EF6
|     \u251C\u2500NavHeader // \u5BFC\u822A\u5934\u90E8\u7EC4\u4EF6
\u251C\u2500 utils // \u5DE5\u5177\u51FD\u6570\u5C01\u88C5
|   \u251C\u2500 config.js // \u8BF7\u6C42\u914D\u7F6E\u6587\u4EF6
|   \u251C\u2500 request.js // \u8BF7\u6C42\u5C01\u88C5
\u251C\u2500 static // \u9759\u6001\u8D44\u6E90
\u251C\u2500 songPackage // \u6B4C\u66F2\u8BE6\u60C5\u9875\u5206\u5305
|      \u251C\u2500 pages
|      |   \u251C\u2500 static // \u8BE6\u60C5\u9875\u9759\u6001\u8D44\u6E90
|      |   \u251C\u2500 songDetail
|      |   \u251C\u2500 recommendSong
\u251C\u2500 pages // \u4E3B\u5305
|   \u251C\u2500 video // \u89C6\u9891\u9875
|   \u251C\u2500 search  // \u641C\u7D22\u9875
|   \u251C\u2500 personal // \u4E2A\u4EBA\u4E2D\u5FC3\u9875
|   \u251C\u2500 login // \u767B\u5F55\u9875
|   \u251C\u2500 index  // \u9996\u9875
\`\`\`

\u540E\u7AEF\u5E94\u7528\u57FA\u4E8E [NeteaseCloudMusicApi](https://github.com/Binaryify/NeteaseCloudMusicApi) \u642D\u5EFA

### \u9879\u76EE\u622A\u56FE

<!-- ![](/images/cloud_music/cloud_music_detail.png) -->
<img src="/assets/images/cloud_music/cloud_music_detail.png" width="300" />
<img src="/assets/images/cloud_music/cloud_music_recommend.png" width="300" />
<img src="/assets/images/cloud_music/cloud_music_index.png" width="300" />
<img src="/assets/images/cloud_music/cloud_music_personal.png" width="300" />
<img src="/assets/images/cloud_music/cloud_music_search.png" width="300" />
<img src="/assets/images/cloud_music/cloud_music_video.png" width="300" />
`,contentRendered:`<p>\u6E90\u4EE3\u7801\u5730\u5740 <a href="https://github.com/ZoftTi/cloud_music" target="_blank" rel="noopener noreferrer">https://github.com/ZoftTi/cloud_music<ExternalLinkIcon/></a></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>cloud_music
\u251C\u2500 cloud_music_server_api // \u540E\u7AEF Api
\u251C\u2500 components // \u7EC4\u4EF6
|     \u251C\u2500NavHeader // \u5BFC\u822A\u5934\u90E8\u7EC4\u4EF6
\u251C\u2500 utils // \u5DE5\u5177\u51FD\u6570\u5C01\u88C5
|   \u251C\u2500 config.js // \u8BF7\u6C42\u914D\u7F6E\u6587\u4EF6
|   \u251C\u2500 request.js // \u8BF7\u6C42\u5C01\u88C5
\u251C\u2500 static // \u9759\u6001\u8D44\u6E90
\u251C\u2500 songPackage // \u6B4C\u66F2\u8BE6\u60C5\u9875\u5206\u5305
|      \u251C\u2500 pages
|      |   \u251C\u2500 static // \u8BE6\u60C5\u9875\u9759\u6001\u8D44\u6E90
|      |   \u251C\u2500 songDetail
|      |   \u251C\u2500 recommendSong
\u251C\u2500 pages // \u4E3B\u5305
|   \u251C\u2500 video // \u89C6\u9891\u9875
|   \u251C\u2500 search  // \u641C\u7D22\u9875
|   \u251C\u2500 personal // \u4E2A\u4EBA\u4E2D\u5FC3\u9875
|   \u251C\u2500 login // \u767B\u5F55\u9875
|   \u251C\u2500 index  // \u9996\u9875
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u540E\u7AEF\u5E94\u7528\u57FA\u4E8E <a href="https://github.com/Binaryify/NeteaseCloudMusicApi" target="_blank" rel="noopener noreferrer">NeteaseCloudMusicApi<ExternalLinkIcon/></a> \u642D\u5EFA</p>
<h3 id="\u9879\u76EE\u622A\u56FE" tabindex="-1"><a class="header-anchor" href="#\u9879\u76EE\u622A\u56FE" aria-hidden="true">#</a> \u9879\u76EE\u622A\u56FE</h3>
<!-- ![](/images/cloud_music/cloud_music_detail.png) -->
<img src="/assets/images/cloud_music/cloud_music_detail.png" width="300" />
<img src="/assets/images/cloud_music/cloud_music_recommend.png" width="300" />
<img src="/assets/images/cloud_music/cloud_music_index.png" width="300" />
<img src="/assets/images/cloud_music/cloud_music_personal.png" width="300" />
<img src="/assets/images/cloud_music/cloud_music_search.png" width="300" />
<img src="/assets/images/cloud_music/cloud_music_video.png" width="300" />
`,date:"0000-00-00",deps:[],hoistedTags:[],links:[],pathInferred:"/blogs/frontEnd/2022/052901.html",pathLocale:"/",permalink:null,routeMeta:{title:"\u4E91\u97F3\u4E50\u5C0F\u7A0B\u5E8F"},slug:"052901",filePath:"/Volumes/File@ti/Project/Learn/zoftti.github.io/blogs/frontEnd/2022/052901.md",filePathRelative:"blogs/frontEnd/2022/052901.md",componentFilePath:"/Volumes/File@ti/Project/Learn/zoftti.github.io/.vuepress/.temp/pages/blogs/frontEnd/2022/052901.html.vue",componentFilePathRelative:"pages/blogs/frontEnd/2022/052901.html.vue",componentFileChunkName:"v-953ed77e",dataFilePath:"/Volumes/File@ti/Project/Learn/zoftti.github.io/.vuepress/.temp/pages/blogs/frontEnd/2022/052901.html.js",dataFilePathRelative:"pages/blogs/frontEnd/2022/052901.html.js",dataFileChunkName:"v-953ed77e",htmlFilePath:"/Volumes/File@ti/Project/Learn/zoftti.github.io/.vuepress/dist/blogs/frontEnd/2022/052901.html",htmlFilePathRelative:"blogs/frontEnd/2022/052901.html"},{data:{key:"v-6bb1ef33",path:"/blogs/other/guide.html",title:"vuepress-theme-reco",lang:"en-US",frontmatter:{title:"vuepress-theme-reco",date:"2019/04/09",author:"reco_luan",tags:["reco"],categories:["reco"]},excerpt:"",headers:[{level:2,title:"Use",slug:"use",children:[]},{level:2,title:"Play Together",slug:"play-together",children:[{level:3,title:"0.x",slug:"_0-x",children:[]},{level:3,title:"1.x",slug:"_1-x",children:[]},{level:3,title:"CLI",slug:"cli",children:[]}]},{level:2,title:"License",slug:"license",children:[]}],git:{createdTime:1654486096e3,updatedTime:1654486096e3,contributors:[{name:"ZoftTi",email:"poleorder@icloud.com",commits:1}]},filePathRelative:"blogs/other/guide.md"},key:"v-6bb1ef33",path:"/blogs/other/guide.html",title:"vuepress-theme-reco",lang:"en-US",frontmatter:{title:"vuepress-theme-reco",date:"2019/04/09",author:"reco_luan",tags:["reco"],categories:["reco"]},excerpt:"",headers:[{level:2,title:"Use",slug:"use",children:[]},{level:2,title:"Play Together",slug:"play-together",children:[{level:3,title:"0.x",slug:"_0-x",children:[]},{level:3,title:"1.x",slug:"_1-x",children:[]},{level:3,title:"CLI",slug:"cli",children:[]}]},{level:2,title:"License",slug:"license",children:[]}],content:`
![vuepress](https://img.shields.io/badge/vuepress-0.14.8-brightgreen.svg)
![leancloud-storage](https://img.shields.io/badge/leancloud--storage-3.10.1-orange.svg)
![valine](https://img.shields.io/badge/valine-1.3.4-blue.svg)

::: tip \u4ECB\u7ECD
1. \u8FD9\u662F\u4E00\u4E2Avuepress\u4E3B\u9898\uFF0C\u65E8\u5728\u6DFB\u52A0\u535A\u5BA2\u6240\u9700\u7684\u5206\u7C7B\u3001TAB\u5899\u3001\u5206\u9875\u3001\u8BC4\u8BBA\u7B49\u80FD\uFF1B<br>
2. \u4E3B\u9898\u8FFD\u6C42\u6781\u7B80\uFF0C\u6839\u636E vuepress \u7684\u9ED8\u8BA4\u4E3B\u9898\u4FEE\u6539\u800C\u6210\uFF0C\u5B98\u65B9\u7684\u4E3B\u9898\u914D\u7F6E\u4ECD\u7136\u9002\u7528\uFF1B<br>
3. \u4F60\u53EF\u4EE5\u6253\u5F00 [\u5348\u540E\u5357\u6742](http://recoluan.gitlab.io) \u6765\u67E5\u770B\u6548\u679C\u3002
:::

## Use

**Build**

\`\`\`bash
npm run build

# or

yarn build
\`\`\`

**Server**

\`\`\`bash
npm run dev

# or

yarn dev
\`\`\`

## Play Together

### 0.x

\`vuepress-theme-reco@0.x\` \u662F\u57FA\u4E8E \`vuepress@0.x\` \u7684\u535A\u5BA2\u4E3B\u9898\u3002

\`vuepress@0.x\` \u529F\u80FD\u6BD4\u8F83\u7B80\u5355\uFF0C\u53EA\u9002\u5408\u4E66\u5199\u7B80\u5355\u7684\u6587\u6863\uFF0C\u4F46\u597D\u5728\u652F\u6301\u4E3B\u9898\u81EA\u5B9A\u4E49\uFF0C\u800C\u4E2A\u4EBA\u53C8\u5E0C\u671B\u80FD\u591F\u7528\u5B83\u6765\u4E66\u5199\u535A\u5BA2\uFF0C\u539F\u56E0\u5C31\u662F\u5B83\u8DB3\u591F\u7684\u7B80\u6D01\uFF0C\u6BEB\u65E0\u7591\u95EE\uFF0C\u8FD9\u4E5F\u7B26\u5408\u5F88\u591A\u7A0B\u5E8F\u5458\u7684\u89C2\u5FF5\uFF0C\u4E5F\u5C31\u662F\u5728\u8FD9\u79CD\u60C5\u51B5\u4E0B\uFF0C\`vuepress-theme-reco@0.x\` \u7684\u7B2C\u4E00\u4E2A\u7248\u672C\u7ECF\u8FC7\u4E00\u4E2A\u901A\u5BB5\u800C\u4EA7\u751F\u3002

\u4E3B\u9898\u5F00\u6E90\u4E0D\u4E45\uFF0C\u5F88\u591A\u670B\u53CB\u901A\u8FC7\u5404\u79CD\u8054\u7CFB\u65B9\u5F0F\uFF0C\u7ED9\u5230\u5F88\u591A\u597D\u7684\u610F\u89C1\u548C\u5EFA\u8BAE\uFF0C\u6240\u4EE5\u6211\u4E2A\u4EBA\u4E5F\u5728\u79EF\u6781\u5730\u66F4\u65B0\u3002

\u56E0\u4E3A\u6211\u662F\u4E00\u540D\u524D\u7AEF\u5F00\u53D1\u5DE5\u7A0B\u5E08\uFF0C\u5F00\u53D1\u7684\u8FC7\u7A0B\u4E2D\uFF0C\u603B\u662F\u60F3\u7740\u80FD\u4E0D\u80FD\u52A0\u5165\u4E00\u4E9B\u70AB\u9177\u7684\u6548\u679C\uFF0C\u6709\u5F88\u591A\u6B21\u90FD\u662F\u6DFB\u52A0\u4E0A\u53C8\u53BB\u6389\uFF0C\u53CD\u53CD\u590D\u590D\uFF0C\u6700\u540E\u90FD\u662F\u88AB **\u7B80\u6D01** \u7684\u8FD9\u4E2A\u539F\u5219\u963B\u6B62\u6389\uFF0C\u6BD5\u7ADF\uFF0C\u73B0\u5728\u6211\u662F\u5C06\u5B83\u5F53\u4F5C\u4E00\u4E2A\u4EA7\u54C1\u6765\u770B\u5F85\uFF0C\u5E76\u4E0D\u662F\u4E00\u4E2A\u6280\u672F\u6216\u8005\u662F\u6280\u5DE7\u7684\u5C1D\u8BD5\u9879\u76EE\u3002

### 1.x

\u968F\u7740\u4E0D\u65AD\u6709\u7528\u6237\u8FC7\u6765\u8BE2\u95EE\uFF1A\u4E3A\u4EC0\u4E48 \`vuepress-theme-reco@0.x\` \u4E0D\u80FD\u5728 \`vuepress@1.x\` \u4E0A\u4F7F\u7528\uFF1F\u672C\u6765\u53EA\u662F\u6253\u7B97\u5BF9 \`vuepress-theme-reco@0.x\` \u8FDB\u884C\u7B80\u5355\u7684bug\u4FEE\u590D\u7684\u6211\uFF0C\u7EC8\u7A76\u8FD8\u662F\u5FCD\u4E0D\u4F4F\uFF0C\u5F00\u59CB\u4E86 \`vuepress-theme-reco@1.x\` \u7684\u5F00\u53D1\u3002\u53C8\u662F\u5728\u4E00\u4E2A\u5BC2\u9759\u7684\u51CC\u6668\u4E24\u70B9\u534A\uFF08\u665A\u4E0A\u5C31\u662F\u51FA\u6D3B\u5FEB\uFF09\uFF0C\u6211\u9ED8\u9ED8\u5730\u5F00\u59CB\u4E86\u3002

\u4E3B\u9898\u5347\u7EA7\u7684\u5173\u952E\u4E5F\u5C31\u662F \`@vuepress/plugin-blog\` \u8FD9\u6B3E\u5B98\u65B9\u63D2\u4EF6\uFF0C\u5B83\u4E0D\u9700\u8981\u518D\u53BB\u9EBB\u70E6\u5730\u8FC7\u6EE4\u6570\u636E\uFF0C\u5C06\u5206\u7C7B\u548C\u6807\u7B7E\u7684\u76F8\u5173\u4FE1\u606F\u76F4\u63A5\u5B58\u5728 \`$categories\` \u548C \`$tags\` \u8FD9\u4E24\u4E2A\u5168\u5C40\u53D8\u91CF\u4E2D\u3002\u501F\u52A9\u4E8E \`@vuepress/plugin-blog\`\uFF0C\u5206\u7C7B\u548C\u6807\u7B7E\u529F\u80FD\u66F4\u5BB9\u6613\u5B9E\u73B0\uFF0C\u4F46\u4E5F\u6709\u4E86\u4E00\u4E9B\u5C40\u9650\u3002\u63A5\u4E0B\u6765\u4E24\u4E09\u5929\u7684\u65F6\u95F4\uFF0C\u90FD\u662F\u5728\u8FDB\u884C\u529F\u80FD\u7684\u8FC1\u79FB\u548C\u4E00\u4E9Bbug\u7684\u4FEE\u590D\u3002

\`vuepress-theme-reco@0.x\` \u7684\u5F00\u53D1\u4E2D\uFF0C\u66F4\u52A0\u6DF1\u523B\u5730\u660E\u767D\u4E86\u6A21\u5757\u5316\u548C\u7EC4\u4EF6\u5316\u7F16\u7A0B\u7684\u91CD\u8981\u6027\uFF0C\u5982\u679C\u5F53\u521D\u6CA1\u6709\u628A\u4E00\u4E9B\u529F\u80FD\u8FDB\u884C\u5C01\u88C5\uFF0C\u800C\u662F\u76F4\u63A5\u7B80\u5355\u7684\u590D\u5236\uFF0C\u8FD9\u6B21\u5347\u7EA7\u4E5F\u4E0D\u4F1A\u8FD9\u4E48\u987A\u5229\u3002\u6A21\u5757\u62C6\u5206\u7684\u8D8A\u7EC6\uFF0C\u4F7F\u7528\u5C31\u4F1A\u8D8A\u7075\u6D3B\u3002

### CLI

\u8FD8\u662F\u8877\u5FC3\u5730\u5E0C\u671B\u80FD\u6709\u66F4\u591A\u7684\u670B\u53CB\u53C2\u4E0E\u8FDB\u6765\uFF0C\u66F4\u5FEB\u5730\u53BB\u5B8C\u5584\u5B83\u3002\u63A5\u4E0B\u6765\u65F6\u95F4\u5141\u8BB8\u7684\u60C5\u51B5\u4E0B\uFF0C\u6211\u4F1A\u5F00\u6E90\u4E00\u6B3E\u81EA\u52A8\u751F\u6210\u535A\u5BA2\u7684\u811A\u624B\u67B6\uFF0C\u7565\u8FC7\u914D\u7F6E\u6B65\u9AA4\uFF0C\u76F4\u63A5\u4E66\u5199\u4F18\u8D28\u5185\u5BB9\uFF0C\u8FD9\u4E5F\u662F\u6211\u540E\u6765\u9010\u6E10\u5F62\u6210\u7684\u4E00\u79CD\u4FE1\u5FF5\uFF0C\u5C31\u662F\u5E0C\u671B\u80FD\u8BA9\u8FD9\u6B3E\u4E3B\u9898\uFF0C\u529F\u80FD\u8D8A\u5B8C\u5584\uFF0C\u4F7F\u7528\u8D8A\u6765\u8D8A\u7B80\u5355\u3002

## License
[MIT](https://github.com/recoluan/vuepress-theme-reco/blob/master/LICENSE)`,contentRendered:`<p><img src="https://img.shields.io/badge/vuepress-0.14.8-brightgreen.svg" alt="vuepress">
<img src="https://img.shields.io/badge/leancloud--storage-3.10.1-orange.svg" alt="leancloud-storage">
<img src="https://img.shields.io/badge/valine-1.3.4-blue.svg" alt="valine"></p>
<div class="custom-container tip"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 8h.01"></path><path d="M11 12h1v4h1"></path></g></svg><p class="custom-container-title">\u4ECB\u7ECD</p><ol>
<li>\u8FD9\u662F\u4E00\u4E2Avuepress\u4E3B\u9898\uFF0C\u65E8\u5728\u6DFB\u52A0\u535A\u5BA2\u6240\u9700\u7684\u5206\u7C7B\u3001TAB\u5899\u3001\u5206\u9875\u3001\u8BC4\u8BBA\u7B49\u80FD\uFF1B<br></li>
<li>\u4E3B\u9898\u8FFD\u6C42\u6781\u7B80\uFF0C\u6839\u636E vuepress \u7684\u9ED8\u8BA4\u4E3B\u9898\u4FEE\u6539\u800C\u6210\uFF0C\u5B98\u65B9\u7684\u4E3B\u9898\u914D\u7F6E\u4ECD\u7136\u9002\u7528\uFF1B<br></li>
<li>\u4F60\u53EF\u4EE5\u6253\u5F00 <a href="http://recoluan.gitlab.io" target="_blank" rel="noopener noreferrer">\u5348\u540E\u5357\u6742<ExternalLinkIcon/></a> \u6765\u67E5\u770B\u6548\u679C\u3002</li>
</ol>
</div><h2 id="use" tabindex="-1"><a class="header-anchor" href="#use" aria-hidden="true">#</a> Use</h2>
<p><strong>Build</strong></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> run build

<span class="token comment"># or</span>

<span class="token function">yarn</span> build
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Server</strong></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> run dev

<span class="token comment"># or</span>

<span class="token function">yarn</span> dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="play-together" tabindex="-1"><a class="header-anchor" href="#play-together" aria-hidden="true">#</a> Play Together</h2>
<h3 id="_0-x" tabindex="-1"><a class="header-anchor" href="#_0-x" aria-hidden="true">#</a> 0.x</h3>
<p><code v-pre>vuepress-theme-reco@0.x</code> \u662F\u57FA\u4E8E <code v-pre>vuepress@0.x</code> \u7684\u535A\u5BA2\u4E3B\u9898\u3002</p>
<p><code v-pre>vuepress@0.x</code> \u529F\u80FD\u6BD4\u8F83\u7B80\u5355\uFF0C\u53EA\u9002\u5408\u4E66\u5199\u7B80\u5355\u7684\u6587\u6863\uFF0C\u4F46\u597D\u5728\u652F\u6301\u4E3B\u9898\u81EA\u5B9A\u4E49\uFF0C\u800C\u4E2A\u4EBA\u53C8\u5E0C\u671B\u80FD\u591F\u7528\u5B83\u6765\u4E66\u5199\u535A\u5BA2\uFF0C\u539F\u56E0\u5C31\u662F\u5B83\u8DB3\u591F\u7684\u7B80\u6D01\uFF0C\u6BEB\u65E0\u7591\u95EE\uFF0C\u8FD9\u4E5F\u7B26\u5408\u5F88\u591A\u7A0B\u5E8F\u5458\u7684\u89C2\u5FF5\uFF0C\u4E5F\u5C31\u662F\u5728\u8FD9\u79CD\u60C5\u51B5\u4E0B\uFF0C<code v-pre>vuepress-theme-reco@0.x</code> \u7684\u7B2C\u4E00\u4E2A\u7248\u672C\u7ECF\u8FC7\u4E00\u4E2A\u901A\u5BB5\u800C\u4EA7\u751F\u3002</p>
<p>\u4E3B\u9898\u5F00\u6E90\u4E0D\u4E45\uFF0C\u5F88\u591A\u670B\u53CB\u901A\u8FC7\u5404\u79CD\u8054\u7CFB\u65B9\u5F0F\uFF0C\u7ED9\u5230\u5F88\u591A\u597D\u7684\u610F\u89C1\u548C\u5EFA\u8BAE\uFF0C\u6240\u4EE5\u6211\u4E2A\u4EBA\u4E5F\u5728\u79EF\u6781\u5730\u66F4\u65B0\u3002</p>
<p>\u56E0\u4E3A\u6211\u662F\u4E00\u540D\u524D\u7AEF\u5F00\u53D1\u5DE5\u7A0B\u5E08\uFF0C\u5F00\u53D1\u7684\u8FC7\u7A0B\u4E2D\uFF0C\u603B\u662F\u60F3\u7740\u80FD\u4E0D\u80FD\u52A0\u5165\u4E00\u4E9B\u70AB\u9177\u7684\u6548\u679C\uFF0C\u6709\u5F88\u591A\u6B21\u90FD\u662F\u6DFB\u52A0\u4E0A\u53C8\u53BB\u6389\uFF0C\u53CD\u53CD\u590D\u590D\uFF0C\u6700\u540E\u90FD\u662F\u88AB <strong>\u7B80\u6D01</strong> \u7684\u8FD9\u4E2A\u539F\u5219\u963B\u6B62\u6389\uFF0C\u6BD5\u7ADF\uFF0C\u73B0\u5728\u6211\u662F\u5C06\u5B83\u5F53\u4F5C\u4E00\u4E2A\u4EA7\u54C1\u6765\u770B\u5F85\uFF0C\u5E76\u4E0D\u662F\u4E00\u4E2A\u6280\u672F\u6216\u8005\u662F\u6280\u5DE7\u7684\u5C1D\u8BD5\u9879\u76EE\u3002</p>
<h3 id="_1-x" tabindex="-1"><a class="header-anchor" href="#_1-x" aria-hidden="true">#</a> 1.x</h3>
<p>\u968F\u7740\u4E0D\u65AD\u6709\u7528\u6237\u8FC7\u6765\u8BE2\u95EE\uFF1A\u4E3A\u4EC0\u4E48 <code v-pre>vuepress-theme-reco@0.x</code> \u4E0D\u80FD\u5728 <code v-pre>vuepress@1.x</code> \u4E0A\u4F7F\u7528\uFF1F\u672C\u6765\u53EA\u662F\u6253\u7B97\u5BF9 <code v-pre>vuepress-theme-reco@0.x</code> \u8FDB\u884C\u7B80\u5355\u7684bug\u4FEE\u590D\u7684\u6211\uFF0C\u7EC8\u7A76\u8FD8\u662F\u5FCD\u4E0D\u4F4F\uFF0C\u5F00\u59CB\u4E86 <code v-pre>vuepress-theme-reco@1.x</code> \u7684\u5F00\u53D1\u3002\u53C8\u662F\u5728\u4E00\u4E2A\u5BC2\u9759\u7684\u51CC\u6668\u4E24\u70B9\u534A\uFF08\u665A\u4E0A\u5C31\u662F\u51FA\u6D3B\u5FEB\uFF09\uFF0C\u6211\u9ED8\u9ED8\u5730\u5F00\u59CB\u4E86\u3002</p>
<p>\u4E3B\u9898\u5347\u7EA7\u7684\u5173\u952E\u4E5F\u5C31\u662F <code v-pre>@vuepress/plugin-blog</code> \u8FD9\u6B3E\u5B98\u65B9\u63D2\u4EF6\uFF0C\u5B83\u4E0D\u9700\u8981\u518D\u53BB\u9EBB\u70E6\u5730\u8FC7\u6EE4\u6570\u636E\uFF0C\u5C06\u5206\u7C7B\u548C\u6807\u7B7E\u7684\u76F8\u5173\u4FE1\u606F\u76F4\u63A5\u5B58\u5728 <code v-pre>$categories</code> \u548C <code v-pre>$tags</code> \u8FD9\u4E24\u4E2A\u5168\u5C40\u53D8\u91CF\u4E2D\u3002\u501F\u52A9\u4E8E <code v-pre>@vuepress/plugin-blog</code>\uFF0C\u5206\u7C7B\u548C\u6807\u7B7E\u529F\u80FD\u66F4\u5BB9\u6613\u5B9E\u73B0\uFF0C\u4F46\u4E5F\u6709\u4E86\u4E00\u4E9B\u5C40\u9650\u3002\u63A5\u4E0B\u6765\u4E24\u4E09\u5929\u7684\u65F6\u95F4\uFF0C\u90FD\u662F\u5728\u8FDB\u884C\u529F\u80FD\u7684\u8FC1\u79FB\u548C\u4E00\u4E9Bbug\u7684\u4FEE\u590D\u3002</p>
<p><code v-pre>vuepress-theme-reco@0.x</code> \u7684\u5F00\u53D1\u4E2D\uFF0C\u66F4\u52A0\u6DF1\u523B\u5730\u660E\u767D\u4E86\u6A21\u5757\u5316\u548C\u7EC4\u4EF6\u5316\u7F16\u7A0B\u7684\u91CD\u8981\u6027\uFF0C\u5982\u679C\u5F53\u521D\u6CA1\u6709\u628A\u4E00\u4E9B\u529F\u80FD\u8FDB\u884C\u5C01\u88C5\uFF0C\u800C\u662F\u76F4\u63A5\u7B80\u5355\u7684\u590D\u5236\uFF0C\u8FD9\u6B21\u5347\u7EA7\u4E5F\u4E0D\u4F1A\u8FD9\u4E48\u987A\u5229\u3002\u6A21\u5757\u62C6\u5206\u7684\u8D8A\u7EC6\uFF0C\u4F7F\u7528\u5C31\u4F1A\u8D8A\u7075\u6D3B\u3002</p>
<h3 id="cli" tabindex="-1"><a class="header-anchor" href="#cli" aria-hidden="true">#</a> CLI</h3>
<p>\u8FD8\u662F\u8877\u5FC3\u5730\u5E0C\u671B\u80FD\u6709\u66F4\u591A\u7684\u670B\u53CB\u53C2\u4E0E\u8FDB\u6765\uFF0C\u66F4\u5FEB\u5730\u53BB\u5B8C\u5584\u5B83\u3002\u63A5\u4E0B\u6765\u65F6\u95F4\u5141\u8BB8\u7684\u60C5\u51B5\u4E0B\uFF0C\u6211\u4F1A\u5F00\u6E90\u4E00\u6B3E\u81EA\u52A8\u751F\u6210\u535A\u5BA2\u7684\u811A\u624B\u67B6\uFF0C\u7565\u8FC7\u914D\u7F6E\u6B65\u9AA4\uFF0C\u76F4\u63A5\u4E66\u5199\u4F18\u8D28\u5185\u5BB9\uFF0C\u8FD9\u4E5F\u662F\u6211\u540E\u6765\u9010\u6E10\u5F62\u6210\u7684\u4E00\u79CD\u4FE1\u5FF5\uFF0C\u5C31\u662F\u5E0C\u671B\u80FD\u8BA9\u8FD9\u6B3E\u4E3B\u9898\uFF0C\u529F\u80FD\u8D8A\u5B8C\u5584\uFF0C\u4F7F\u7528\u8D8A\u6765\u8D8A\u7B80\u5355\u3002</p>
<h2 id="license" tabindex="-1"><a class="header-anchor" href="#license" aria-hidden="true">#</a> License</h2>
<p><a href="https://github.com/recoluan/vuepress-theme-reco/blob/master/LICENSE" target="_blank" rel="noopener noreferrer">MIT<ExternalLinkIcon/></a></p>
`,date:"0000-00-00",deps:[],hoistedTags:[],links:[],pathInferred:"/blogs/other/guide.html",pathLocale:"/",permalink:null,routeMeta:{title:"vuepress-theme-reco"},slug:"guide",filePath:"/Volumes/File@ti/Project/Learn/zoftti.github.io/blogs/other/guide.md",filePathRelative:"blogs/other/guide.md",componentFilePath:"/Volumes/File@ti/Project/Learn/zoftti.github.io/.vuepress/.temp/pages/blogs/other/guide.html.vue",componentFilePathRelative:"pages/blogs/other/guide.html.vue",componentFileChunkName:"v-6bb1ef33",dataFilePath:"/Volumes/File@ti/Project/Learn/zoftti.github.io/.vuepress/.temp/pages/blogs/other/guide.html.js",dataFilePathRelative:"pages/blogs/other/guide.html.js",dataFileChunkName:"v-6bb1ef33",htmlFilePath:"/Volumes/File@ti/Project/Learn/zoftti.github.io/.vuepress/dist/blogs/other/guide.html",htmlFilePathRelative:"blogs/other/guide.html"}],wd={categories:{pagination:10,extendedPages:[{},{}],items:{frontEnd:{length:3,pages:[{data:{key:"v-928deb06",path:"/blogs/frontEnd/2022/061518.html",title:"SSO \u5355\u70B9\u767B\u5F55\u7CFB\u7EDF",lang:"en-US",frontmatter:{title:"SSO \u5355\u70B9\u767B\u5F55\u7CFB\u7EDF",date:"2022/6/15",tags:["SSO"],categories:["frontEnd"]},excerpt:`<div class="custom-container tip"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 8h.01"></path><path d="M11 12h1v4h1"></path></g></svg><p class="custom-container-title">TIP</p><ul>
<li>\u8FD9\u662F\u4E00\u4E2ASSO\u5355\u70B9\u767B\u5F55\u7684\u9879\u76EE\uFF0C\u7528\u6765\u6388\u6743\u767B\u5F55\u5176\u4ED6\u7684\u9879\u76EE</li>
<li>\u76EE\u524D\u6682\u6CA1\u6709\u9879\u76EE\u63A5\u5165\u8BE5\u767B\u5F55\u7CFB\u7EDF\uFF0C\u5728\u672A\u6765\u4F1A\u63A5\u5165\u4E00\u4E9B\u6211\u81EA\u5DF1\u5199\u7684\u9879\u76EE\u3002</li>
<li>\u4E5F\u53EF\u4EE5\u5728\u6CE8\u518CApp\u9875\u9762\u6CE8\u518C\u5E94\u7528\uFF0C\u4EE5\u63A5\u5165\u8BE5\u767B\u5F55\u7CFB\u7EDF</li>
</ul>
</div>`,headers:[{level:2,title:"\u9879\u76EE\u622A\u56FE",slug:"\u9879\u76EE\u622A\u56FE",children:[]}],git:{createdTime:1655292309e3,updatedTime:1655292309e3,contributors:[{name:"ZoftTi",email:"poleorder@icloud.com",commits:1}]},filePathRelative:"blogs/frontEnd/2022/061518.md"},key:"v-928deb06",path:"/blogs/frontEnd/2022/061518.html",title:"SSO \u5355\u70B9\u767B\u5F55\u7CFB\u7EDF",lang:"en-US",frontmatter:{title:"SSO \u5355\u70B9\u767B\u5F55\u7CFB\u7EDF",date:"2022/6/15",tags:["SSO"],categories:["frontEnd"]},excerpt:`<div class="custom-container tip"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 8h.01"></path><path d="M11 12h1v4h1"></path></g></svg><p class="custom-container-title">TIP</p><ul>
<li>\u8FD9\u662F\u4E00\u4E2ASSO\u5355\u70B9\u767B\u5F55\u7684\u9879\u76EE\uFF0C\u7528\u6765\u6388\u6743\u767B\u5F55\u5176\u4ED6\u7684\u9879\u76EE</li>
<li>\u76EE\u524D\u6682\u6CA1\u6709\u9879\u76EE\u63A5\u5165\u8BE5\u767B\u5F55\u7CFB\u7EDF\uFF0C\u5728\u672A\u6765\u4F1A\u63A5\u5165\u4E00\u4E9B\u6211\u81EA\u5DF1\u5199\u7684\u9879\u76EE\u3002</li>
<li>\u4E5F\u53EF\u4EE5\u5728\u6CE8\u518CApp\u9875\u9762\u6CE8\u518C\u5E94\u7528\uFF0C\u4EE5\u63A5\u5165\u8BE5\u767B\u5F55\u7CFB\u7EDF</li>
</ul>
</div>`,headers:[{level:2,title:"\u9879\u76EE\u622A\u56FE",slug:"\u9879\u76EE\u622A\u56FE",children:[]}],content:`::: tip
* \u8FD9\u662F\u4E00\u4E2ASSO\u5355\u70B9\u767B\u5F55\u7684\u9879\u76EE\uFF0C\u7528\u6765\u6388\u6743\u767B\u5F55\u5176\u4ED6\u7684\u9879\u76EE
* \u76EE\u524D\u6682\u6CA1\u6709\u9879\u76EE\u63A5\u5165\u8BE5\u767B\u5F55\u7CFB\u7EDF\uFF0C\u5728\u672A\u6765\u4F1A\u63A5\u5165\u4E00\u4E9B\u6211\u81EA\u5DF1\u5199\u7684\u9879\u76EE\u3002
* \u4E5F\u53EF\u4EE5\u5728\u6CE8\u518CApp\u9875\u9762\u6CE8\u518C\u5E94\u7528\uFF0C\u4EE5\u63A5\u5165\u8BE5\u767B\u5F55\u7CFB\u7EDF
:::

<!-- more -->

## \u9879\u76EE\u622A\u56FE

![login](/assets/images/SSO/login.png)
![register](/assets/images/SSO/register.png)
![profile](/assets/images/SSO/profile.png)
![authorize](/assets/images/SSO/authorize.png)
![resetpassword](/assets/images/SSO/resetpassword.png)
![email](/assets/images/SSO/email.png)

`,contentRendered:`<div class="custom-container tip"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 8h.01"></path><path d="M11 12h1v4h1"></path></g></svg><p class="custom-container-title">TIP</p><ul>
<li>\u8FD9\u662F\u4E00\u4E2ASSO\u5355\u70B9\u767B\u5F55\u7684\u9879\u76EE\uFF0C\u7528\u6765\u6388\u6743\u767B\u5F55\u5176\u4ED6\u7684\u9879\u76EE</li>
<li>\u76EE\u524D\u6682\u6CA1\u6709\u9879\u76EE\u63A5\u5165\u8BE5\u767B\u5F55\u7CFB\u7EDF\uFF0C\u5728\u672A\u6765\u4F1A\u63A5\u5165\u4E00\u4E9B\u6211\u81EA\u5DF1\u5199\u7684\u9879\u76EE\u3002</li>
<li>\u4E5F\u53EF\u4EE5\u5728\u6CE8\u518CApp\u9875\u9762\u6CE8\u518C\u5E94\u7528\uFF0C\u4EE5\u63A5\u5165\u8BE5\u767B\u5F55\u7CFB\u7EDF</li>
</ul>
</div><!-- more -->
<h2 id="\u9879\u76EE\u622A\u56FE" tabindex="-1"><a class="header-anchor" href="#\u9879\u76EE\u622A\u56FE" aria-hidden="true">#</a> \u9879\u76EE\u622A\u56FE</h2>
<p><img src="/assets/images/SSO/login.png" alt="login">
<img src="/assets/images/SSO/register.png" alt="register">
<img src="/assets/images/SSO/profile.png" alt="profile">
<img src="/assets/images/SSO/authorize.png" alt="authorize">
<img src="/assets/images/SSO/resetpassword.png" alt="resetpassword">
<img src="/assets/images/SSO/email.png" alt="email"></p>
`,date:"0000-00-00",deps:[],hoistedTags:[],links:[],pathInferred:"/blogs/frontEnd/2022/061518.html",pathLocale:"/",permalink:null,routeMeta:{title:"SSO \u5355\u70B9\u767B\u5F55\u7CFB\u7EDF"},slug:"061518",filePath:"/Volumes/File@ti/Project/Learn/zoftti.github.io/blogs/frontEnd/2022/061518.md",filePathRelative:"blogs/frontEnd/2022/061518.md",componentFilePath:"/Volumes/File@ti/Project/Learn/zoftti.github.io/.vuepress/.temp/pages/blogs/frontEnd/2022/061518.html.vue",componentFilePathRelative:"pages/blogs/frontEnd/2022/061518.html.vue",componentFileChunkName:"v-928deb06",dataFilePath:"/Volumes/File@ti/Project/Learn/zoftti.github.io/.vuepress/.temp/pages/blogs/frontEnd/2022/061518.html.js",dataFilePathRelative:"pages/blogs/frontEnd/2022/061518.html.js",dataFileChunkName:"v-928deb06",htmlFilePath:"/Volumes/File@ti/Project/Learn/zoftti.github.io/.vuepress/dist/blogs/frontEnd/2022/061518.html",htmlFilePathRelative:"blogs/frontEnd/2022/061518.html"},{data:{key:"v-7caf0363",path:"/blogs/frontEnd/2022/060610.html",title:"\u597D\u5BA2\u79DF\u623F\u79FB\u52A8\u7AEF\u7F51\u9875",lang:"en-US",frontmatter:{title:"\u597D\u5BA2\u79DF\u623F\u79FB\u52A8\u7AEF\u7F51\u9875",date:"2022/6/6",tags:["\u524D\u7AEF","\u79FB\u52A8\u7AEF"],categories:["frontEnd"]},excerpt:"",headers:[{level:2,title:"\u9879\u76EE\u622A\u56FE",slug:"\u9879\u76EE\u622A\u56FE",children:[]}],git:{createdTime:1654486237e3,updatedTime:1654486237e3,contributors:[{name:"ZoftTi",email:"poleorder@icloud.com",commits:1}]},filePathRelative:"blogs/frontEnd/2022/060610.md"},key:"v-7caf0363",path:"/blogs/frontEnd/2022/060610.html",title:"\u597D\u5BA2\u79DF\u623F\u79FB\u52A8\u7AEF\u7F51\u9875",lang:"en-US",frontmatter:{title:"\u597D\u5BA2\u79DF\u623F\u79FB\u52A8\u7AEF\u7F51\u9875",date:"2022/6/6",tags:["\u524D\u7AEF","\u79FB\u52A8\u7AEF"],categories:["frontEnd"]},excerpt:"",headers:[{level:2,title:"\u9879\u76EE\u622A\u56FE",slug:"\u9879\u76EE\u622A\u56FE",children:[]}],content:`
\u6E90\u4EE3\u7801\u5730\u5740 [https://github.com/ZoftTi/hkzf-mobile](https://github.com/ZoftTi/hkzf-mobile)

\`\`\`
hkzf-mobile
\u251C\u2500README.md
\u251C\u2500package.json
\u251C\u2500yarn.lock
\u251C\u2500src
|  \u251C\u2500App.js
|  \u251C\u2500index.css
|  \u251C\u2500index.js
|  \u251C\u2500utils
|  \u251C\u2500pages
|  |   \u251C\u2500Profile // \u4E2A\u4EBA\u8D44\u6599
|  |   \u251C\u2500News // \u8D44\u8BAF
|  |   \u251C\u2500Map // \u5730\u56FE
|  |   \u251C\u2500Index
|  |   \u251C\u2500HouseList // \u623F\u5B50\u5217\u8868
|  |   \u251C\u2500Home // \u9996\u9875
|  |   \u251C\u2500CityList // \u57CE\u5E02\u5217\u8868
|  \u251C\u2500components // \u7EC4\u4EF6
|  |     \u251C\u2500NavHeader \u5934\u90E8\u5BFC\u822A\u7EC4\u4EF6
|  \u251C\u2500assets
|  |   \u251C\u2500images // \u56FE\u7247\u6587\u4EF6
|  |   \u251C\u2500fonts // \u5B57\u4F53\u6587\u4EF6
\u251C\u2500public
\u251C\u2500hkzf_v1_server_api // \u540E\u7AEF API 
\`\`\`

## \u9879\u76EE\u622A\u56FE
![hkzf_preview](/assets/images/hkzf.png)`,contentRendered:`<p>\u6E90\u4EE3\u7801\u5730\u5740 <a href="https://github.com/ZoftTi/hkzf-mobile" target="_blank" rel="noopener noreferrer">https://github.com/ZoftTi/hkzf-mobile<ExternalLinkIcon/></a></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>hkzf-mobile
\u251C\u2500README.md
\u251C\u2500package.json
\u251C\u2500yarn.lock
\u251C\u2500src
|  \u251C\u2500App.js
|  \u251C\u2500index.css
|  \u251C\u2500index.js
|  \u251C\u2500utils
|  \u251C\u2500pages
|  |   \u251C\u2500Profile // \u4E2A\u4EBA\u8D44\u6599
|  |   \u251C\u2500News // \u8D44\u8BAF
|  |   \u251C\u2500Map // \u5730\u56FE
|  |   \u251C\u2500Index
|  |   \u251C\u2500HouseList // \u623F\u5B50\u5217\u8868
|  |   \u251C\u2500Home // \u9996\u9875
|  |   \u251C\u2500CityList // \u57CE\u5E02\u5217\u8868
|  \u251C\u2500components // \u7EC4\u4EF6
|  |     \u251C\u2500NavHeader \u5934\u90E8\u5BFC\u822A\u7EC4\u4EF6
|  \u251C\u2500assets
|  |   \u251C\u2500images // \u56FE\u7247\u6587\u4EF6
|  |   \u251C\u2500fonts // \u5B57\u4F53\u6587\u4EF6
\u251C\u2500public
\u251C\u2500hkzf_v1_server_api // \u540E\u7AEF API 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u9879\u76EE\u622A\u56FE" tabindex="-1"><a class="header-anchor" href="#\u9879\u76EE\u622A\u56FE" aria-hidden="true">#</a> \u9879\u76EE\u622A\u56FE</h2>
<p><img src="/assets/images/hkzf.png" alt="hkzf_preview"></p>
`,date:"0000-00-00",deps:[],hoistedTags:[],links:[],pathInferred:"/blogs/frontEnd/2022/060610.html",pathLocale:"/",permalink:null,routeMeta:{title:"\u597D\u5BA2\u79DF\u623F\u79FB\u52A8\u7AEF\u7F51\u9875"},slug:"060610",filePath:"/Volumes/File@ti/Project/Learn/zoftti.github.io/blogs/frontEnd/2022/060610.md",filePathRelative:"blogs/frontEnd/2022/060610.md",componentFilePath:"/Volumes/File@ti/Project/Learn/zoftti.github.io/.vuepress/.temp/pages/blogs/frontEnd/2022/060610.html.vue",componentFilePathRelative:"pages/blogs/frontEnd/2022/060610.html.vue",componentFileChunkName:"v-7caf0363",dataFilePath:"/Volumes/File@ti/Project/Learn/zoftti.github.io/.vuepress/.temp/pages/blogs/frontEnd/2022/060610.html.js",dataFilePathRelative:"pages/blogs/frontEnd/2022/060610.html.js",dataFileChunkName:"v-7caf0363",htmlFilePath:"/Volumes/File@ti/Project/Learn/zoftti.github.io/.vuepress/dist/blogs/frontEnd/2022/060610.html",htmlFilePathRelative:"blogs/frontEnd/2022/060610.html"},{data:{key:"v-953ed77e",path:"/blogs/frontEnd/2022/052901.html",title:"\u4E91\u97F3\u4E50\u5C0F\u7A0B\u5E8F",lang:"en-US",frontmatter:{title:"\u4E91\u97F3\u4E50\u5C0F\u7A0B\u5E8F",date:"2022/5/29",tags:["\u5C0F\u7A0B\u5E8F","\u97F3\u4E50\u8F6F\u4EF6"],categories:["frontEnd"]},excerpt:"",headers:[{level:3,title:"\u9879\u76EE\u622A\u56FE",slug:"\u9879\u76EE\u622A\u56FE",children:[]}],git:{createdTime:1654486096e3,updatedTime:1654587378e3,contributors:[{name:"ZoftTi",email:"poleorder@icloud.com",commits:3}]},filePathRelative:"blogs/frontEnd/2022/052901.md"},key:"v-953ed77e",path:"/blogs/frontEnd/2022/052901.html",title:"\u4E91\u97F3\u4E50\u5C0F\u7A0B\u5E8F",lang:"en-US",frontmatter:{title:"\u4E91\u97F3\u4E50\u5C0F\u7A0B\u5E8F",date:"2022/5/29",tags:["\u5C0F\u7A0B\u5E8F","\u97F3\u4E50\u8F6F\u4EF6"],categories:["frontEnd"]},excerpt:"",headers:[{level:3,title:"\u9879\u76EE\u622A\u56FE",slug:"\u9879\u76EE\u622A\u56FE",children:[]}],content:`
\u6E90\u4EE3\u7801\u5730\u5740 [https://github.com/ZoftTi/cloud_music](https://github.com/ZoftTi/cloud_music)

\`\`\`
cloud_music
\u251C\u2500 cloud_music_server_api // \u540E\u7AEF Api
\u251C\u2500 components // \u7EC4\u4EF6
|     \u251C\u2500NavHeader // \u5BFC\u822A\u5934\u90E8\u7EC4\u4EF6
\u251C\u2500 utils // \u5DE5\u5177\u51FD\u6570\u5C01\u88C5
|   \u251C\u2500 config.js // \u8BF7\u6C42\u914D\u7F6E\u6587\u4EF6
|   \u251C\u2500 request.js // \u8BF7\u6C42\u5C01\u88C5
\u251C\u2500 static // \u9759\u6001\u8D44\u6E90
\u251C\u2500 songPackage // \u6B4C\u66F2\u8BE6\u60C5\u9875\u5206\u5305
|      \u251C\u2500 pages
|      |   \u251C\u2500 static // \u8BE6\u60C5\u9875\u9759\u6001\u8D44\u6E90
|      |   \u251C\u2500 songDetail
|      |   \u251C\u2500 recommendSong
\u251C\u2500 pages // \u4E3B\u5305
|   \u251C\u2500 video // \u89C6\u9891\u9875
|   \u251C\u2500 search  // \u641C\u7D22\u9875
|   \u251C\u2500 personal // \u4E2A\u4EBA\u4E2D\u5FC3\u9875
|   \u251C\u2500 login // \u767B\u5F55\u9875
|   \u251C\u2500 index  // \u9996\u9875
\`\`\`

\u540E\u7AEF\u5E94\u7528\u57FA\u4E8E [NeteaseCloudMusicApi](https://github.com/Binaryify/NeteaseCloudMusicApi) \u642D\u5EFA

### \u9879\u76EE\u622A\u56FE

<!-- ![](/images/cloud_music/cloud_music_detail.png) -->
<img src="/assets/images/cloud_music/cloud_music_detail.png" width="300" />
<img src="/assets/images/cloud_music/cloud_music_recommend.png" width="300" />
<img src="/assets/images/cloud_music/cloud_music_index.png" width="300" />
<img src="/assets/images/cloud_music/cloud_music_personal.png" width="300" />
<img src="/assets/images/cloud_music/cloud_music_search.png" width="300" />
<img src="/assets/images/cloud_music/cloud_music_video.png" width="300" />
`,contentRendered:`<p>\u6E90\u4EE3\u7801\u5730\u5740 <a href="https://github.com/ZoftTi/cloud_music" target="_blank" rel="noopener noreferrer">https://github.com/ZoftTi/cloud_music<ExternalLinkIcon/></a></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>cloud_music
\u251C\u2500 cloud_music_server_api // \u540E\u7AEF Api
\u251C\u2500 components // \u7EC4\u4EF6
|     \u251C\u2500NavHeader // \u5BFC\u822A\u5934\u90E8\u7EC4\u4EF6
\u251C\u2500 utils // \u5DE5\u5177\u51FD\u6570\u5C01\u88C5
|   \u251C\u2500 config.js // \u8BF7\u6C42\u914D\u7F6E\u6587\u4EF6
|   \u251C\u2500 request.js // \u8BF7\u6C42\u5C01\u88C5
\u251C\u2500 static // \u9759\u6001\u8D44\u6E90
\u251C\u2500 songPackage // \u6B4C\u66F2\u8BE6\u60C5\u9875\u5206\u5305
|      \u251C\u2500 pages
|      |   \u251C\u2500 static // \u8BE6\u60C5\u9875\u9759\u6001\u8D44\u6E90
|      |   \u251C\u2500 songDetail
|      |   \u251C\u2500 recommendSong
\u251C\u2500 pages // \u4E3B\u5305
|   \u251C\u2500 video // \u89C6\u9891\u9875
|   \u251C\u2500 search  // \u641C\u7D22\u9875
|   \u251C\u2500 personal // \u4E2A\u4EBA\u4E2D\u5FC3\u9875
|   \u251C\u2500 login // \u767B\u5F55\u9875
|   \u251C\u2500 index  // \u9996\u9875
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u540E\u7AEF\u5E94\u7528\u57FA\u4E8E <a href="https://github.com/Binaryify/NeteaseCloudMusicApi" target="_blank" rel="noopener noreferrer">NeteaseCloudMusicApi<ExternalLinkIcon/></a> \u642D\u5EFA</p>
<h3 id="\u9879\u76EE\u622A\u56FE" tabindex="-1"><a class="header-anchor" href="#\u9879\u76EE\u622A\u56FE" aria-hidden="true">#</a> \u9879\u76EE\u622A\u56FE</h3>
<!-- ![](/images/cloud_music/cloud_music_detail.png) -->
<img src="/assets/images/cloud_music/cloud_music_detail.png" width="300" />
<img src="/assets/images/cloud_music/cloud_music_recommend.png" width="300" />
<img src="/assets/images/cloud_music/cloud_music_index.png" width="300" />
<img src="/assets/images/cloud_music/cloud_music_personal.png" width="300" />
<img src="/assets/images/cloud_music/cloud_music_search.png" width="300" />
<img src="/assets/images/cloud_music/cloud_music_video.png" width="300" />
`,date:"0000-00-00",deps:[],hoistedTags:[],links:[],pathInferred:"/blogs/frontEnd/2022/052901.html",pathLocale:"/",permalink:null,routeMeta:{title:"\u4E91\u97F3\u4E50\u5C0F\u7A0B\u5E8F"},slug:"052901",filePath:"/Volumes/File@ti/Project/Learn/zoftti.github.io/blogs/frontEnd/2022/052901.md",filePathRelative:"blogs/frontEnd/2022/052901.md",componentFilePath:"/Volumes/File@ti/Project/Learn/zoftti.github.io/.vuepress/.temp/pages/blogs/frontEnd/2022/052901.html.vue",componentFilePathRelative:"pages/blogs/frontEnd/2022/052901.html.vue",componentFileChunkName:"v-953ed77e",dataFilePath:"/Volumes/File@ti/Project/Learn/zoftti.github.io/.vuepress/.temp/pages/blogs/frontEnd/2022/052901.html.js",dataFilePathRelative:"pages/blogs/frontEnd/2022/052901.html.js",dataFileChunkName:"v-953ed77e",htmlFilePath:"/Volumes/File@ti/Project/Learn/zoftti.github.io/.vuepress/dist/blogs/frontEnd/2022/052901.html",htmlFilePathRelative:"blogs/frontEnd/2022/052901.html"}],label:"frontEnd"},reco:{pages:[{data:{key:"v-6bb1ef33",path:"/blogs/other/guide.html",title:"vuepress-theme-reco",lang:"en-US",frontmatter:{title:"vuepress-theme-reco",date:"2019/04/09",author:"reco_luan",tags:["reco"],categories:["reco"]},excerpt:"",headers:[{level:2,title:"Use",slug:"use",children:[]},{level:2,title:"Play Together",slug:"play-together",children:[{level:3,title:"0.x",slug:"_0-x",children:[]},{level:3,title:"1.x",slug:"_1-x",children:[]},{level:3,title:"CLI",slug:"cli",children:[]}]},{level:2,title:"License",slug:"license",children:[]}],git:{createdTime:1654486096e3,updatedTime:1654486096e3,contributors:[{name:"ZoftTi",email:"poleorder@icloud.com",commits:1}]},filePathRelative:"blogs/other/guide.md"},key:"v-6bb1ef33",path:"/blogs/other/guide.html",title:"vuepress-theme-reco",lang:"en-US",frontmatter:{title:"vuepress-theme-reco",date:"2019/04/09",author:"reco_luan",tags:["reco"],categories:["reco"]},excerpt:"",headers:[{level:2,title:"Use",slug:"use",children:[]},{level:2,title:"Play Together",slug:"play-together",children:[{level:3,title:"0.x",slug:"_0-x",children:[]},{level:3,title:"1.x",slug:"_1-x",children:[]},{level:3,title:"CLI",slug:"cli",children:[]}]},{level:2,title:"License",slug:"license",children:[]}],content:`
![vuepress](https://img.shields.io/badge/vuepress-0.14.8-brightgreen.svg)
![leancloud-storage](https://img.shields.io/badge/leancloud--storage-3.10.1-orange.svg)
![valine](https://img.shields.io/badge/valine-1.3.4-blue.svg)

::: tip \u4ECB\u7ECD
1. \u8FD9\u662F\u4E00\u4E2Avuepress\u4E3B\u9898\uFF0C\u65E8\u5728\u6DFB\u52A0\u535A\u5BA2\u6240\u9700\u7684\u5206\u7C7B\u3001TAB\u5899\u3001\u5206\u9875\u3001\u8BC4\u8BBA\u7B49\u80FD\uFF1B<br>
2. \u4E3B\u9898\u8FFD\u6C42\u6781\u7B80\uFF0C\u6839\u636E vuepress \u7684\u9ED8\u8BA4\u4E3B\u9898\u4FEE\u6539\u800C\u6210\uFF0C\u5B98\u65B9\u7684\u4E3B\u9898\u914D\u7F6E\u4ECD\u7136\u9002\u7528\uFF1B<br>
3. \u4F60\u53EF\u4EE5\u6253\u5F00 [\u5348\u540E\u5357\u6742](http://recoluan.gitlab.io) \u6765\u67E5\u770B\u6548\u679C\u3002
:::

## Use

**Build**

\`\`\`bash
npm run build

# or

yarn build
\`\`\`

**Server**

\`\`\`bash
npm run dev

# or

yarn dev
\`\`\`

## Play Together

### 0.x

\`vuepress-theme-reco@0.x\` \u662F\u57FA\u4E8E \`vuepress@0.x\` \u7684\u535A\u5BA2\u4E3B\u9898\u3002

\`vuepress@0.x\` \u529F\u80FD\u6BD4\u8F83\u7B80\u5355\uFF0C\u53EA\u9002\u5408\u4E66\u5199\u7B80\u5355\u7684\u6587\u6863\uFF0C\u4F46\u597D\u5728\u652F\u6301\u4E3B\u9898\u81EA\u5B9A\u4E49\uFF0C\u800C\u4E2A\u4EBA\u53C8\u5E0C\u671B\u80FD\u591F\u7528\u5B83\u6765\u4E66\u5199\u535A\u5BA2\uFF0C\u539F\u56E0\u5C31\u662F\u5B83\u8DB3\u591F\u7684\u7B80\u6D01\uFF0C\u6BEB\u65E0\u7591\u95EE\uFF0C\u8FD9\u4E5F\u7B26\u5408\u5F88\u591A\u7A0B\u5E8F\u5458\u7684\u89C2\u5FF5\uFF0C\u4E5F\u5C31\u662F\u5728\u8FD9\u79CD\u60C5\u51B5\u4E0B\uFF0C\`vuepress-theme-reco@0.x\` \u7684\u7B2C\u4E00\u4E2A\u7248\u672C\u7ECF\u8FC7\u4E00\u4E2A\u901A\u5BB5\u800C\u4EA7\u751F\u3002

\u4E3B\u9898\u5F00\u6E90\u4E0D\u4E45\uFF0C\u5F88\u591A\u670B\u53CB\u901A\u8FC7\u5404\u79CD\u8054\u7CFB\u65B9\u5F0F\uFF0C\u7ED9\u5230\u5F88\u591A\u597D\u7684\u610F\u89C1\u548C\u5EFA\u8BAE\uFF0C\u6240\u4EE5\u6211\u4E2A\u4EBA\u4E5F\u5728\u79EF\u6781\u5730\u66F4\u65B0\u3002

\u56E0\u4E3A\u6211\u662F\u4E00\u540D\u524D\u7AEF\u5F00\u53D1\u5DE5\u7A0B\u5E08\uFF0C\u5F00\u53D1\u7684\u8FC7\u7A0B\u4E2D\uFF0C\u603B\u662F\u60F3\u7740\u80FD\u4E0D\u80FD\u52A0\u5165\u4E00\u4E9B\u70AB\u9177\u7684\u6548\u679C\uFF0C\u6709\u5F88\u591A\u6B21\u90FD\u662F\u6DFB\u52A0\u4E0A\u53C8\u53BB\u6389\uFF0C\u53CD\u53CD\u590D\u590D\uFF0C\u6700\u540E\u90FD\u662F\u88AB **\u7B80\u6D01** \u7684\u8FD9\u4E2A\u539F\u5219\u963B\u6B62\u6389\uFF0C\u6BD5\u7ADF\uFF0C\u73B0\u5728\u6211\u662F\u5C06\u5B83\u5F53\u4F5C\u4E00\u4E2A\u4EA7\u54C1\u6765\u770B\u5F85\uFF0C\u5E76\u4E0D\u662F\u4E00\u4E2A\u6280\u672F\u6216\u8005\u662F\u6280\u5DE7\u7684\u5C1D\u8BD5\u9879\u76EE\u3002

### 1.x

\u968F\u7740\u4E0D\u65AD\u6709\u7528\u6237\u8FC7\u6765\u8BE2\u95EE\uFF1A\u4E3A\u4EC0\u4E48 \`vuepress-theme-reco@0.x\` \u4E0D\u80FD\u5728 \`vuepress@1.x\` \u4E0A\u4F7F\u7528\uFF1F\u672C\u6765\u53EA\u662F\u6253\u7B97\u5BF9 \`vuepress-theme-reco@0.x\` \u8FDB\u884C\u7B80\u5355\u7684bug\u4FEE\u590D\u7684\u6211\uFF0C\u7EC8\u7A76\u8FD8\u662F\u5FCD\u4E0D\u4F4F\uFF0C\u5F00\u59CB\u4E86 \`vuepress-theme-reco@1.x\` \u7684\u5F00\u53D1\u3002\u53C8\u662F\u5728\u4E00\u4E2A\u5BC2\u9759\u7684\u51CC\u6668\u4E24\u70B9\u534A\uFF08\u665A\u4E0A\u5C31\u662F\u51FA\u6D3B\u5FEB\uFF09\uFF0C\u6211\u9ED8\u9ED8\u5730\u5F00\u59CB\u4E86\u3002

\u4E3B\u9898\u5347\u7EA7\u7684\u5173\u952E\u4E5F\u5C31\u662F \`@vuepress/plugin-blog\` \u8FD9\u6B3E\u5B98\u65B9\u63D2\u4EF6\uFF0C\u5B83\u4E0D\u9700\u8981\u518D\u53BB\u9EBB\u70E6\u5730\u8FC7\u6EE4\u6570\u636E\uFF0C\u5C06\u5206\u7C7B\u548C\u6807\u7B7E\u7684\u76F8\u5173\u4FE1\u606F\u76F4\u63A5\u5B58\u5728 \`$categories\` \u548C \`$tags\` \u8FD9\u4E24\u4E2A\u5168\u5C40\u53D8\u91CF\u4E2D\u3002\u501F\u52A9\u4E8E \`@vuepress/plugin-blog\`\uFF0C\u5206\u7C7B\u548C\u6807\u7B7E\u529F\u80FD\u66F4\u5BB9\u6613\u5B9E\u73B0\uFF0C\u4F46\u4E5F\u6709\u4E86\u4E00\u4E9B\u5C40\u9650\u3002\u63A5\u4E0B\u6765\u4E24\u4E09\u5929\u7684\u65F6\u95F4\uFF0C\u90FD\u662F\u5728\u8FDB\u884C\u529F\u80FD\u7684\u8FC1\u79FB\u548C\u4E00\u4E9Bbug\u7684\u4FEE\u590D\u3002

\`vuepress-theme-reco@0.x\` \u7684\u5F00\u53D1\u4E2D\uFF0C\u66F4\u52A0\u6DF1\u523B\u5730\u660E\u767D\u4E86\u6A21\u5757\u5316\u548C\u7EC4\u4EF6\u5316\u7F16\u7A0B\u7684\u91CD\u8981\u6027\uFF0C\u5982\u679C\u5F53\u521D\u6CA1\u6709\u628A\u4E00\u4E9B\u529F\u80FD\u8FDB\u884C\u5C01\u88C5\uFF0C\u800C\u662F\u76F4\u63A5\u7B80\u5355\u7684\u590D\u5236\uFF0C\u8FD9\u6B21\u5347\u7EA7\u4E5F\u4E0D\u4F1A\u8FD9\u4E48\u987A\u5229\u3002\u6A21\u5757\u62C6\u5206\u7684\u8D8A\u7EC6\uFF0C\u4F7F\u7528\u5C31\u4F1A\u8D8A\u7075\u6D3B\u3002

### CLI

\u8FD8\u662F\u8877\u5FC3\u5730\u5E0C\u671B\u80FD\u6709\u66F4\u591A\u7684\u670B\u53CB\u53C2\u4E0E\u8FDB\u6765\uFF0C\u66F4\u5FEB\u5730\u53BB\u5B8C\u5584\u5B83\u3002\u63A5\u4E0B\u6765\u65F6\u95F4\u5141\u8BB8\u7684\u60C5\u51B5\u4E0B\uFF0C\u6211\u4F1A\u5F00\u6E90\u4E00\u6B3E\u81EA\u52A8\u751F\u6210\u535A\u5BA2\u7684\u811A\u624B\u67B6\uFF0C\u7565\u8FC7\u914D\u7F6E\u6B65\u9AA4\uFF0C\u76F4\u63A5\u4E66\u5199\u4F18\u8D28\u5185\u5BB9\uFF0C\u8FD9\u4E5F\u662F\u6211\u540E\u6765\u9010\u6E10\u5F62\u6210\u7684\u4E00\u79CD\u4FE1\u5FF5\uFF0C\u5C31\u662F\u5E0C\u671B\u80FD\u8BA9\u8FD9\u6B3E\u4E3B\u9898\uFF0C\u529F\u80FD\u8D8A\u5B8C\u5584\uFF0C\u4F7F\u7528\u8D8A\u6765\u8D8A\u7B80\u5355\u3002

## License
[MIT](https://github.com/recoluan/vuepress-theme-reco/blob/master/LICENSE)`,contentRendered:`<p><img src="https://img.shields.io/badge/vuepress-0.14.8-brightgreen.svg" alt="vuepress">
<img src="https://img.shields.io/badge/leancloud--storage-3.10.1-orange.svg" alt="leancloud-storage">
<img src="https://img.shields.io/badge/valine-1.3.4-blue.svg" alt="valine"></p>
<div class="custom-container tip"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 8h.01"></path><path d="M11 12h1v4h1"></path></g></svg><p class="custom-container-title">\u4ECB\u7ECD</p><ol>
<li>\u8FD9\u662F\u4E00\u4E2Avuepress\u4E3B\u9898\uFF0C\u65E8\u5728\u6DFB\u52A0\u535A\u5BA2\u6240\u9700\u7684\u5206\u7C7B\u3001TAB\u5899\u3001\u5206\u9875\u3001\u8BC4\u8BBA\u7B49\u80FD\uFF1B<br></li>
<li>\u4E3B\u9898\u8FFD\u6C42\u6781\u7B80\uFF0C\u6839\u636E vuepress \u7684\u9ED8\u8BA4\u4E3B\u9898\u4FEE\u6539\u800C\u6210\uFF0C\u5B98\u65B9\u7684\u4E3B\u9898\u914D\u7F6E\u4ECD\u7136\u9002\u7528\uFF1B<br></li>
<li>\u4F60\u53EF\u4EE5\u6253\u5F00 <a href="http://recoluan.gitlab.io" target="_blank" rel="noopener noreferrer">\u5348\u540E\u5357\u6742<ExternalLinkIcon/></a> \u6765\u67E5\u770B\u6548\u679C\u3002</li>
</ol>
</div><h2 id="use" tabindex="-1"><a class="header-anchor" href="#use" aria-hidden="true">#</a> Use</h2>
<p><strong>Build</strong></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> run build

<span class="token comment"># or</span>

<span class="token function">yarn</span> build
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Server</strong></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> run dev

<span class="token comment"># or</span>

<span class="token function">yarn</span> dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="play-together" tabindex="-1"><a class="header-anchor" href="#play-together" aria-hidden="true">#</a> Play Together</h2>
<h3 id="_0-x" tabindex="-1"><a class="header-anchor" href="#_0-x" aria-hidden="true">#</a> 0.x</h3>
<p><code v-pre>vuepress-theme-reco@0.x</code> \u662F\u57FA\u4E8E <code v-pre>vuepress@0.x</code> \u7684\u535A\u5BA2\u4E3B\u9898\u3002</p>
<p><code v-pre>vuepress@0.x</code> \u529F\u80FD\u6BD4\u8F83\u7B80\u5355\uFF0C\u53EA\u9002\u5408\u4E66\u5199\u7B80\u5355\u7684\u6587\u6863\uFF0C\u4F46\u597D\u5728\u652F\u6301\u4E3B\u9898\u81EA\u5B9A\u4E49\uFF0C\u800C\u4E2A\u4EBA\u53C8\u5E0C\u671B\u80FD\u591F\u7528\u5B83\u6765\u4E66\u5199\u535A\u5BA2\uFF0C\u539F\u56E0\u5C31\u662F\u5B83\u8DB3\u591F\u7684\u7B80\u6D01\uFF0C\u6BEB\u65E0\u7591\u95EE\uFF0C\u8FD9\u4E5F\u7B26\u5408\u5F88\u591A\u7A0B\u5E8F\u5458\u7684\u89C2\u5FF5\uFF0C\u4E5F\u5C31\u662F\u5728\u8FD9\u79CD\u60C5\u51B5\u4E0B\uFF0C<code v-pre>vuepress-theme-reco@0.x</code> \u7684\u7B2C\u4E00\u4E2A\u7248\u672C\u7ECF\u8FC7\u4E00\u4E2A\u901A\u5BB5\u800C\u4EA7\u751F\u3002</p>
<p>\u4E3B\u9898\u5F00\u6E90\u4E0D\u4E45\uFF0C\u5F88\u591A\u670B\u53CB\u901A\u8FC7\u5404\u79CD\u8054\u7CFB\u65B9\u5F0F\uFF0C\u7ED9\u5230\u5F88\u591A\u597D\u7684\u610F\u89C1\u548C\u5EFA\u8BAE\uFF0C\u6240\u4EE5\u6211\u4E2A\u4EBA\u4E5F\u5728\u79EF\u6781\u5730\u66F4\u65B0\u3002</p>
<p>\u56E0\u4E3A\u6211\u662F\u4E00\u540D\u524D\u7AEF\u5F00\u53D1\u5DE5\u7A0B\u5E08\uFF0C\u5F00\u53D1\u7684\u8FC7\u7A0B\u4E2D\uFF0C\u603B\u662F\u60F3\u7740\u80FD\u4E0D\u80FD\u52A0\u5165\u4E00\u4E9B\u70AB\u9177\u7684\u6548\u679C\uFF0C\u6709\u5F88\u591A\u6B21\u90FD\u662F\u6DFB\u52A0\u4E0A\u53C8\u53BB\u6389\uFF0C\u53CD\u53CD\u590D\u590D\uFF0C\u6700\u540E\u90FD\u662F\u88AB <strong>\u7B80\u6D01</strong> \u7684\u8FD9\u4E2A\u539F\u5219\u963B\u6B62\u6389\uFF0C\u6BD5\u7ADF\uFF0C\u73B0\u5728\u6211\u662F\u5C06\u5B83\u5F53\u4F5C\u4E00\u4E2A\u4EA7\u54C1\u6765\u770B\u5F85\uFF0C\u5E76\u4E0D\u662F\u4E00\u4E2A\u6280\u672F\u6216\u8005\u662F\u6280\u5DE7\u7684\u5C1D\u8BD5\u9879\u76EE\u3002</p>
<h3 id="_1-x" tabindex="-1"><a class="header-anchor" href="#_1-x" aria-hidden="true">#</a> 1.x</h3>
<p>\u968F\u7740\u4E0D\u65AD\u6709\u7528\u6237\u8FC7\u6765\u8BE2\u95EE\uFF1A\u4E3A\u4EC0\u4E48 <code v-pre>vuepress-theme-reco@0.x</code> \u4E0D\u80FD\u5728 <code v-pre>vuepress@1.x</code> \u4E0A\u4F7F\u7528\uFF1F\u672C\u6765\u53EA\u662F\u6253\u7B97\u5BF9 <code v-pre>vuepress-theme-reco@0.x</code> \u8FDB\u884C\u7B80\u5355\u7684bug\u4FEE\u590D\u7684\u6211\uFF0C\u7EC8\u7A76\u8FD8\u662F\u5FCD\u4E0D\u4F4F\uFF0C\u5F00\u59CB\u4E86 <code v-pre>vuepress-theme-reco@1.x</code> \u7684\u5F00\u53D1\u3002\u53C8\u662F\u5728\u4E00\u4E2A\u5BC2\u9759\u7684\u51CC\u6668\u4E24\u70B9\u534A\uFF08\u665A\u4E0A\u5C31\u662F\u51FA\u6D3B\u5FEB\uFF09\uFF0C\u6211\u9ED8\u9ED8\u5730\u5F00\u59CB\u4E86\u3002</p>
<p>\u4E3B\u9898\u5347\u7EA7\u7684\u5173\u952E\u4E5F\u5C31\u662F <code v-pre>@vuepress/plugin-blog</code> \u8FD9\u6B3E\u5B98\u65B9\u63D2\u4EF6\uFF0C\u5B83\u4E0D\u9700\u8981\u518D\u53BB\u9EBB\u70E6\u5730\u8FC7\u6EE4\u6570\u636E\uFF0C\u5C06\u5206\u7C7B\u548C\u6807\u7B7E\u7684\u76F8\u5173\u4FE1\u606F\u76F4\u63A5\u5B58\u5728 <code v-pre>$categories</code> \u548C <code v-pre>$tags</code> \u8FD9\u4E24\u4E2A\u5168\u5C40\u53D8\u91CF\u4E2D\u3002\u501F\u52A9\u4E8E <code v-pre>@vuepress/plugin-blog</code>\uFF0C\u5206\u7C7B\u548C\u6807\u7B7E\u529F\u80FD\u66F4\u5BB9\u6613\u5B9E\u73B0\uFF0C\u4F46\u4E5F\u6709\u4E86\u4E00\u4E9B\u5C40\u9650\u3002\u63A5\u4E0B\u6765\u4E24\u4E09\u5929\u7684\u65F6\u95F4\uFF0C\u90FD\u662F\u5728\u8FDB\u884C\u529F\u80FD\u7684\u8FC1\u79FB\u548C\u4E00\u4E9Bbug\u7684\u4FEE\u590D\u3002</p>
<p><code v-pre>vuepress-theme-reco@0.x</code> \u7684\u5F00\u53D1\u4E2D\uFF0C\u66F4\u52A0\u6DF1\u523B\u5730\u660E\u767D\u4E86\u6A21\u5757\u5316\u548C\u7EC4\u4EF6\u5316\u7F16\u7A0B\u7684\u91CD\u8981\u6027\uFF0C\u5982\u679C\u5F53\u521D\u6CA1\u6709\u628A\u4E00\u4E9B\u529F\u80FD\u8FDB\u884C\u5C01\u88C5\uFF0C\u800C\u662F\u76F4\u63A5\u7B80\u5355\u7684\u590D\u5236\uFF0C\u8FD9\u6B21\u5347\u7EA7\u4E5F\u4E0D\u4F1A\u8FD9\u4E48\u987A\u5229\u3002\u6A21\u5757\u62C6\u5206\u7684\u8D8A\u7EC6\uFF0C\u4F7F\u7528\u5C31\u4F1A\u8D8A\u7075\u6D3B\u3002</p>
<h3 id="cli" tabindex="-1"><a class="header-anchor" href="#cli" aria-hidden="true">#</a> CLI</h3>
<p>\u8FD8\u662F\u8877\u5FC3\u5730\u5E0C\u671B\u80FD\u6709\u66F4\u591A\u7684\u670B\u53CB\u53C2\u4E0E\u8FDB\u6765\uFF0C\u66F4\u5FEB\u5730\u53BB\u5B8C\u5584\u5B83\u3002\u63A5\u4E0B\u6765\u65F6\u95F4\u5141\u8BB8\u7684\u60C5\u51B5\u4E0B\uFF0C\u6211\u4F1A\u5F00\u6E90\u4E00\u6B3E\u81EA\u52A8\u751F\u6210\u535A\u5BA2\u7684\u811A\u624B\u67B6\uFF0C\u7565\u8FC7\u914D\u7F6E\u6B65\u9AA4\uFF0C\u76F4\u63A5\u4E66\u5199\u4F18\u8D28\u5185\u5BB9\uFF0C\u8FD9\u4E5F\u662F\u6211\u540E\u6765\u9010\u6E10\u5F62\u6210\u7684\u4E00\u79CD\u4FE1\u5FF5\uFF0C\u5C31\u662F\u5E0C\u671B\u80FD\u8BA9\u8FD9\u6B3E\u4E3B\u9898\uFF0C\u529F\u80FD\u8D8A\u5B8C\u5584\uFF0C\u4F7F\u7528\u8D8A\u6765\u8D8A\u7B80\u5355\u3002</p>
<h2 id="license" tabindex="-1"><a class="header-anchor" href="#license" aria-hidden="true">#</a> License</h2>
<p><a href="https://github.com/recoluan/vuepress-theme-reco/blob/master/LICENSE" target="_blank" rel="noopener noreferrer">MIT<ExternalLinkIcon/></a></p>
`,date:"0000-00-00",deps:[],hoistedTags:[],links:[],pathInferred:"/blogs/other/guide.html",pathLocale:"/",permalink:null,routeMeta:{title:"vuepress-theme-reco"},slug:"guide",filePath:"/Volumes/File@ti/Project/Learn/zoftti.github.io/blogs/other/guide.md",filePathRelative:"blogs/other/guide.md",componentFilePath:"/Volumes/File@ti/Project/Learn/zoftti.github.io/.vuepress/.temp/pages/blogs/other/guide.html.vue",componentFilePathRelative:"pages/blogs/other/guide.html.vue",componentFileChunkName:"v-6bb1ef33",dataFilePath:"/Volumes/File@ti/Project/Learn/zoftti.github.io/.vuepress/.temp/pages/blogs/other/guide.html.js",dataFilePathRelative:"pages/blogs/other/guide.html.js",dataFileChunkName:"v-6bb1ef33",htmlFilePath:"/Volumes/File@ti/Project/Learn/zoftti.github.io/.vuepress/dist/blogs/other/guide.html",htmlFilePathRelative:"blogs/other/guide.html"}],length:1,label:"reco"}},layout:"Categories"},tags:{pagination:10,extendedPages:[{},{},{},{},{},{}],items:{SSO:{pages:[{data:{key:"v-928deb06",path:"/blogs/frontEnd/2022/061518.html",title:"SSO \u5355\u70B9\u767B\u5F55\u7CFB\u7EDF",lang:"en-US",frontmatter:{title:"SSO \u5355\u70B9\u767B\u5F55\u7CFB\u7EDF",date:"2022/6/15",tags:["SSO"],categories:["frontEnd"]},excerpt:`<div class="custom-container tip"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 8h.01"></path><path d="M11 12h1v4h1"></path></g></svg><p class="custom-container-title">TIP</p><ul>
<li>\u8FD9\u662F\u4E00\u4E2ASSO\u5355\u70B9\u767B\u5F55\u7684\u9879\u76EE\uFF0C\u7528\u6765\u6388\u6743\u767B\u5F55\u5176\u4ED6\u7684\u9879\u76EE</li>
<li>\u76EE\u524D\u6682\u6CA1\u6709\u9879\u76EE\u63A5\u5165\u8BE5\u767B\u5F55\u7CFB\u7EDF\uFF0C\u5728\u672A\u6765\u4F1A\u63A5\u5165\u4E00\u4E9B\u6211\u81EA\u5DF1\u5199\u7684\u9879\u76EE\u3002</li>
<li>\u4E5F\u53EF\u4EE5\u5728\u6CE8\u518CApp\u9875\u9762\u6CE8\u518C\u5E94\u7528\uFF0C\u4EE5\u63A5\u5165\u8BE5\u767B\u5F55\u7CFB\u7EDF</li>
</ul>
</div>`,headers:[{level:2,title:"\u9879\u76EE\u622A\u56FE",slug:"\u9879\u76EE\u622A\u56FE",children:[]}],git:{createdTime:1655292309e3,updatedTime:1655292309e3,contributors:[{name:"ZoftTi",email:"poleorder@icloud.com",commits:1}]},filePathRelative:"blogs/frontEnd/2022/061518.md"},key:"v-928deb06",path:"/blogs/frontEnd/2022/061518.html",title:"SSO \u5355\u70B9\u767B\u5F55\u7CFB\u7EDF",lang:"en-US",frontmatter:{title:"SSO \u5355\u70B9\u767B\u5F55\u7CFB\u7EDF",date:"2022/6/15",tags:["SSO"],categories:["frontEnd"]},excerpt:`<div class="custom-container tip"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 8h.01"></path><path d="M11 12h1v4h1"></path></g></svg><p class="custom-container-title">TIP</p><ul>
<li>\u8FD9\u662F\u4E00\u4E2ASSO\u5355\u70B9\u767B\u5F55\u7684\u9879\u76EE\uFF0C\u7528\u6765\u6388\u6743\u767B\u5F55\u5176\u4ED6\u7684\u9879\u76EE</li>
<li>\u76EE\u524D\u6682\u6CA1\u6709\u9879\u76EE\u63A5\u5165\u8BE5\u767B\u5F55\u7CFB\u7EDF\uFF0C\u5728\u672A\u6765\u4F1A\u63A5\u5165\u4E00\u4E9B\u6211\u81EA\u5DF1\u5199\u7684\u9879\u76EE\u3002</li>
<li>\u4E5F\u53EF\u4EE5\u5728\u6CE8\u518CApp\u9875\u9762\u6CE8\u518C\u5E94\u7528\uFF0C\u4EE5\u63A5\u5165\u8BE5\u767B\u5F55\u7CFB\u7EDF</li>
</ul>
</div>`,headers:[{level:2,title:"\u9879\u76EE\u622A\u56FE",slug:"\u9879\u76EE\u622A\u56FE",children:[]}],content:`::: tip
* \u8FD9\u662F\u4E00\u4E2ASSO\u5355\u70B9\u767B\u5F55\u7684\u9879\u76EE\uFF0C\u7528\u6765\u6388\u6743\u767B\u5F55\u5176\u4ED6\u7684\u9879\u76EE
* \u76EE\u524D\u6682\u6CA1\u6709\u9879\u76EE\u63A5\u5165\u8BE5\u767B\u5F55\u7CFB\u7EDF\uFF0C\u5728\u672A\u6765\u4F1A\u63A5\u5165\u4E00\u4E9B\u6211\u81EA\u5DF1\u5199\u7684\u9879\u76EE\u3002
* \u4E5F\u53EF\u4EE5\u5728\u6CE8\u518CApp\u9875\u9762\u6CE8\u518C\u5E94\u7528\uFF0C\u4EE5\u63A5\u5165\u8BE5\u767B\u5F55\u7CFB\u7EDF
:::

<!-- more -->

## \u9879\u76EE\u622A\u56FE

![login](/assets/images/SSO/login.png)
![register](/assets/images/SSO/register.png)
![profile](/assets/images/SSO/profile.png)
![authorize](/assets/images/SSO/authorize.png)
![resetpassword](/assets/images/SSO/resetpassword.png)
![email](/assets/images/SSO/email.png)

`,contentRendered:`<div class="custom-container tip"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 8h.01"></path><path d="M11 12h1v4h1"></path></g></svg><p class="custom-container-title">TIP</p><ul>
<li>\u8FD9\u662F\u4E00\u4E2ASSO\u5355\u70B9\u767B\u5F55\u7684\u9879\u76EE\uFF0C\u7528\u6765\u6388\u6743\u767B\u5F55\u5176\u4ED6\u7684\u9879\u76EE</li>
<li>\u76EE\u524D\u6682\u6CA1\u6709\u9879\u76EE\u63A5\u5165\u8BE5\u767B\u5F55\u7CFB\u7EDF\uFF0C\u5728\u672A\u6765\u4F1A\u63A5\u5165\u4E00\u4E9B\u6211\u81EA\u5DF1\u5199\u7684\u9879\u76EE\u3002</li>
<li>\u4E5F\u53EF\u4EE5\u5728\u6CE8\u518CApp\u9875\u9762\u6CE8\u518C\u5E94\u7528\uFF0C\u4EE5\u63A5\u5165\u8BE5\u767B\u5F55\u7CFB\u7EDF</li>
</ul>
</div><!-- more -->
<h2 id="\u9879\u76EE\u622A\u56FE" tabindex="-1"><a class="header-anchor" href="#\u9879\u76EE\u622A\u56FE" aria-hidden="true">#</a> \u9879\u76EE\u622A\u56FE</h2>
<p><img src="/assets/images/SSO/login.png" alt="login">
<img src="/assets/images/SSO/register.png" alt="register">
<img src="/assets/images/SSO/profile.png" alt="profile">
<img src="/assets/images/SSO/authorize.png" alt="authorize">
<img src="/assets/images/SSO/resetpassword.png" alt="resetpassword">
<img src="/assets/images/SSO/email.png" alt="email"></p>
`,date:"0000-00-00",deps:[],hoistedTags:[],links:[],pathInferred:"/blogs/frontEnd/2022/061518.html",pathLocale:"/",permalink:null,routeMeta:{title:"SSO \u5355\u70B9\u767B\u5F55\u7CFB\u7EDF"},slug:"061518",filePath:"/Volumes/File@ti/Project/Learn/zoftti.github.io/blogs/frontEnd/2022/061518.md",filePathRelative:"blogs/frontEnd/2022/061518.md",componentFilePath:"/Volumes/File@ti/Project/Learn/zoftti.github.io/.vuepress/.temp/pages/blogs/frontEnd/2022/061518.html.vue",componentFilePathRelative:"pages/blogs/frontEnd/2022/061518.html.vue",componentFileChunkName:"v-928deb06",dataFilePath:"/Volumes/File@ti/Project/Learn/zoftti.github.io/.vuepress/.temp/pages/blogs/frontEnd/2022/061518.html.js",dataFilePathRelative:"pages/blogs/frontEnd/2022/061518.html.js",dataFileChunkName:"v-928deb06",htmlFilePath:"/Volumes/File@ti/Project/Learn/zoftti.github.io/.vuepress/dist/blogs/frontEnd/2022/061518.html",htmlFilePathRelative:"blogs/frontEnd/2022/061518.html"}],length:1,label:"SSO"},qianduan:{pages:[{data:{key:"v-7caf0363",path:"/blogs/frontEnd/2022/060610.html",title:"\u597D\u5BA2\u79DF\u623F\u79FB\u52A8\u7AEF\u7F51\u9875",lang:"en-US",frontmatter:{title:"\u597D\u5BA2\u79DF\u623F\u79FB\u52A8\u7AEF\u7F51\u9875",date:"2022/6/6",tags:["\u524D\u7AEF","\u79FB\u52A8\u7AEF"],categories:["frontEnd"]},excerpt:"",headers:[{level:2,title:"\u9879\u76EE\u622A\u56FE",slug:"\u9879\u76EE\u622A\u56FE",children:[]}],git:{createdTime:1654486237e3,updatedTime:1654486237e3,contributors:[{name:"ZoftTi",email:"poleorder@icloud.com",commits:1}]},filePathRelative:"blogs/frontEnd/2022/060610.md"},key:"v-7caf0363",path:"/blogs/frontEnd/2022/060610.html",title:"\u597D\u5BA2\u79DF\u623F\u79FB\u52A8\u7AEF\u7F51\u9875",lang:"en-US",frontmatter:{title:"\u597D\u5BA2\u79DF\u623F\u79FB\u52A8\u7AEF\u7F51\u9875",date:"2022/6/6",tags:["\u524D\u7AEF","\u79FB\u52A8\u7AEF"],categories:["frontEnd"]},excerpt:"",headers:[{level:2,title:"\u9879\u76EE\u622A\u56FE",slug:"\u9879\u76EE\u622A\u56FE",children:[]}],content:`
\u6E90\u4EE3\u7801\u5730\u5740 [https://github.com/ZoftTi/hkzf-mobile](https://github.com/ZoftTi/hkzf-mobile)

\`\`\`
hkzf-mobile
\u251C\u2500README.md
\u251C\u2500package.json
\u251C\u2500yarn.lock
\u251C\u2500src
|  \u251C\u2500App.js
|  \u251C\u2500index.css
|  \u251C\u2500index.js
|  \u251C\u2500utils
|  \u251C\u2500pages
|  |   \u251C\u2500Profile // \u4E2A\u4EBA\u8D44\u6599
|  |   \u251C\u2500News // \u8D44\u8BAF
|  |   \u251C\u2500Map // \u5730\u56FE
|  |   \u251C\u2500Index
|  |   \u251C\u2500HouseList // \u623F\u5B50\u5217\u8868
|  |   \u251C\u2500Home // \u9996\u9875
|  |   \u251C\u2500CityList // \u57CE\u5E02\u5217\u8868
|  \u251C\u2500components // \u7EC4\u4EF6
|  |     \u251C\u2500NavHeader \u5934\u90E8\u5BFC\u822A\u7EC4\u4EF6
|  \u251C\u2500assets
|  |   \u251C\u2500images // \u56FE\u7247\u6587\u4EF6
|  |   \u251C\u2500fonts // \u5B57\u4F53\u6587\u4EF6
\u251C\u2500public
\u251C\u2500hkzf_v1_server_api // \u540E\u7AEF API 
\`\`\`

## \u9879\u76EE\u622A\u56FE
![hkzf_preview](/assets/images/hkzf.png)`,contentRendered:`<p>\u6E90\u4EE3\u7801\u5730\u5740 <a href="https://github.com/ZoftTi/hkzf-mobile" target="_blank" rel="noopener noreferrer">https://github.com/ZoftTi/hkzf-mobile<ExternalLinkIcon/></a></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>hkzf-mobile
\u251C\u2500README.md
\u251C\u2500package.json
\u251C\u2500yarn.lock
\u251C\u2500src
|  \u251C\u2500App.js
|  \u251C\u2500index.css
|  \u251C\u2500index.js
|  \u251C\u2500utils
|  \u251C\u2500pages
|  |   \u251C\u2500Profile // \u4E2A\u4EBA\u8D44\u6599
|  |   \u251C\u2500News // \u8D44\u8BAF
|  |   \u251C\u2500Map // \u5730\u56FE
|  |   \u251C\u2500Index
|  |   \u251C\u2500HouseList // \u623F\u5B50\u5217\u8868
|  |   \u251C\u2500Home // \u9996\u9875
|  |   \u251C\u2500CityList // \u57CE\u5E02\u5217\u8868
|  \u251C\u2500components // \u7EC4\u4EF6
|  |     \u251C\u2500NavHeader \u5934\u90E8\u5BFC\u822A\u7EC4\u4EF6
|  \u251C\u2500assets
|  |   \u251C\u2500images // \u56FE\u7247\u6587\u4EF6
|  |   \u251C\u2500fonts // \u5B57\u4F53\u6587\u4EF6
\u251C\u2500public
\u251C\u2500hkzf_v1_server_api // \u540E\u7AEF API 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u9879\u76EE\u622A\u56FE" tabindex="-1"><a class="header-anchor" href="#\u9879\u76EE\u622A\u56FE" aria-hidden="true">#</a> \u9879\u76EE\u622A\u56FE</h2>
<p><img src="/assets/images/hkzf.png" alt="hkzf_preview"></p>
`,date:"0000-00-00",deps:[],hoistedTags:[],links:[],pathInferred:"/blogs/frontEnd/2022/060610.html",pathLocale:"/",permalink:null,routeMeta:{title:"\u597D\u5BA2\u79DF\u623F\u79FB\u52A8\u7AEF\u7F51\u9875"},slug:"060610",filePath:"/Volumes/File@ti/Project/Learn/zoftti.github.io/blogs/frontEnd/2022/060610.md",filePathRelative:"blogs/frontEnd/2022/060610.md",componentFilePath:"/Volumes/File@ti/Project/Learn/zoftti.github.io/.vuepress/.temp/pages/blogs/frontEnd/2022/060610.html.vue",componentFilePathRelative:"pages/blogs/frontEnd/2022/060610.html.vue",componentFileChunkName:"v-7caf0363",dataFilePath:"/Volumes/File@ti/Project/Learn/zoftti.github.io/.vuepress/.temp/pages/blogs/frontEnd/2022/060610.html.js",dataFilePathRelative:"pages/blogs/frontEnd/2022/060610.html.js",dataFileChunkName:"v-7caf0363",htmlFilePath:"/Volumes/File@ti/Project/Learn/zoftti.github.io/.vuepress/dist/blogs/frontEnd/2022/060610.html",htmlFilePathRelative:"blogs/frontEnd/2022/060610.html"}],length:1,label:"\u524D\u7AEF"},yidongduan:{pages:[{data:{key:"v-7caf0363",path:"/blogs/frontEnd/2022/060610.html",title:"\u597D\u5BA2\u79DF\u623F\u79FB\u52A8\u7AEF\u7F51\u9875",lang:"en-US",frontmatter:{title:"\u597D\u5BA2\u79DF\u623F\u79FB\u52A8\u7AEF\u7F51\u9875",date:"2022/6/6",tags:["\u524D\u7AEF","\u79FB\u52A8\u7AEF"],categories:["frontEnd"]},excerpt:"",headers:[{level:2,title:"\u9879\u76EE\u622A\u56FE",slug:"\u9879\u76EE\u622A\u56FE",children:[]}],git:{createdTime:1654486237e3,updatedTime:1654486237e3,contributors:[{name:"ZoftTi",email:"poleorder@icloud.com",commits:1}]},filePathRelative:"blogs/frontEnd/2022/060610.md"},key:"v-7caf0363",path:"/blogs/frontEnd/2022/060610.html",title:"\u597D\u5BA2\u79DF\u623F\u79FB\u52A8\u7AEF\u7F51\u9875",lang:"en-US",frontmatter:{title:"\u597D\u5BA2\u79DF\u623F\u79FB\u52A8\u7AEF\u7F51\u9875",date:"2022/6/6",tags:["\u524D\u7AEF","\u79FB\u52A8\u7AEF"],categories:["frontEnd"]},excerpt:"",headers:[{level:2,title:"\u9879\u76EE\u622A\u56FE",slug:"\u9879\u76EE\u622A\u56FE",children:[]}],content:`
\u6E90\u4EE3\u7801\u5730\u5740 [https://github.com/ZoftTi/hkzf-mobile](https://github.com/ZoftTi/hkzf-mobile)

\`\`\`
hkzf-mobile
\u251C\u2500README.md
\u251C\u2500package.json
\u251C\u2500yarn.lock
\u251C\u2500src
|  \u251C\u2500App.js
|  \u251C\u2500index.css
|  \u251C\u2500index.js
|  \u251C\u2500utils
|  \u251C\u2500pages
|  |   \u251C\u2500Profile // \u4E2A\u4EBA\u8D44\u6599
|  |   \u251C\u2500News // \u8D44\u8BAF
|  |   \u251C\u2500Map // \u5730\u56FE
|  |   \u251C\u2500Index
|  |   \u251C\u2500HouseList // \u623F\u5B50\u5217\u8868
|  |   \u251C\u2500Home // \u9996\u9875
|  |   \u251C\u2500CityList // \u57CE\u5E02\u5217\u8868
|  \u251C\u2500components // \u7EC4\u4EF6
|  |     \u251C\u2500NavHeader \u5934\u90E8\u5BFC\u822A\u7EC4\u4EF6
|  \u251C\u2500assets
|  |   \u251C\u2500images // \u56FE\u7247\u6587\u4EF6
|  |   \u251C\u2500fonts // \u5B57\u4F53\u6587\u4EF6
\u251C\u2500public
\u251C\u2500hkzf_v1_server_api // \u540E\u7AEF API 
\`\`\`

## \u9879\u76EE\u622A\u56FE
![hkzf_preview](/assets/images/hkzf.png)`,contentRendered:`<p>\u6E90\u4EE3\u7801\u5730\u5740 <a href="https://github.com/ZoftTi/hkzf-mobile" target="_blank" rel="noopener noreferrer">https://github.com/ZoftTi/hkzf-mobile<ExternalLinkIcon/></a></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>hkzf-mobile
\u251C\u2500README.md
\u251C\u2500package.json
\u251C\u2500yarn.lock
\u251C\u2500src
|  \u251C\u2500App.js
|  \u251C\u2500index.css
|  \u251C\u2500index.js
|  \u251C\u2500utils
|  \u251C\u2500pages
|  |   \u251C\u2500Profile // \u4E2A\u4EBA\u8D44\u6599
|  |   \u251C\u2500News // \u8D44\u8BAF
|  |   \u251C\u2500Map // \u5730\u56FE
|  |   \u251C\u2500Index
|  |   \u251C\u2500HouseList // \u623F\u5B50\u5217\u8868
|  |   \u251C\u2500Home // \u9996\u9875
|  |   \u251C\u2500CityList // \u57CE\u5E02\u5217\u8868
|  \u251C\u2500components // \u7EC4\u4EF6
|  |     \u251C\u2500NavHeader \u5934\u90E8\u5BFC\u822A\u7EC4\u4EF6
|  \u251C\u2500assets
|  |   \u251C\u2500images // \u56FE\u7247\u6587\u4EF6
|  |   \u251C\u2500fonts // \u5B57\u4F53\u6587\u4EF6
\u251C\u2500public
\u251C\u2500hkzf_v1_server_api // \u540E\u7AEF API 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u9879\u76EE\u622A\u56FE" tabindex="-1"><a class="header-anchor" href="#\u9879\u76EE\u622A\u56FE" aria-hidden="true">#</a> \u9879\u76EE\u622A\u56FE</h2>
<p><img src="/assets/images/hkzf.png" alt="hkzf_preview"></p>
`,date:"0000-00-00",deps:[],hoistedTags:[],links:[],pathInferred:"/blogs/frontEnd/2022/060610.html",pathLocale:"/",permalink:null,routeMeta:{title:"\u597D\u5BA2\u79DF\u623F\u79FB\u52A8\u7AEF\u7F51\u9875"},slug:"060610",filePath:"/Volumes/File@ti/Project/Learn/zoftti.github.io/blogs/frontEnd/2022/060610.md",filePathRelative:"blogs/frontEnd/2022/060610.md",componentFilePath:"/Volumes/File@ti/Project/Learn/zoftti.github.io/.vuepress/.temp/pages/blogs/frontEnd/2022/060610.html.vue",componentFilePathRelative:"pages/blogs/frontEnd/2022/060610.html.vue",componentFileChunkName:"v-7caf0363",dataFilePath:"/Volumes/File@ti/Project/Learn/zoftti.github.io/.vuepress/.temp/pages/blogs/frontEnd/2022/060610.html.js",dataFilePathRelative:"pages/blogs/frontEnd/2022/060610.html.js",dataFileChunkName:"v-7caf0363",htmlFilePath:"/Volumes/File@ti/Project/Learn/zoftti.github.io/.vuepress/dist/blogs/frontEnd/2022/060610.html",htmlFilePathRelative:"blogs/frontEnd/2022/060610.html"}],length:1,label:"\u79FB\u52A8\u7AEF"},xiaochengxu:{pages:[{data:{key:"v-953ed77e",path:"/blogs/frontEnd/2022/052901.html",title:"\u4E91\u97F3\u4E50\u5C0F\u7A0B\u5E8F",lang:"en-US",frontmatter:{title:"\u4E91\u97F3\u4E50\u5C0F\u7A0B\u5E8F",date:"2022/5/29",tags:["\u5C0F\u7A0B\u5E8F","\u97F3\u4E50\u8F6F\u4EF6"],categories:["frontEnd"]},excerpt:"",headers:[{level:3,title:"\u9879\u76EE\u622A\u56FE",slug:"\u9879\u76EE\u622A\u56FE",children:[]}],git:{createdTime:1654486096e3,updatedTime:1654587378e3,contributors:[{name:"ZoftTi",email:"poleorder@icloud.com",commits:3}]},filePathRelative:"blogs/frontEnd/2022/052901.md"},key:"v-953ed77e",path:"/blogs/frontEnd/2022/052901.html",title:"\u4E91\u97F3\u4E50\u5C0F\u7A0B\u5E8F",lang:"en-US",frontmatter:{title:"\u4E91\u97F3\u4E50\u5C0F\u7A0B\u5E8F",date:"2022/5/29",tags:["\u5C0F\u7A0B\u5E8F","\u97F3\u4E50\u8F6F\u4EF6"],categories:["frontEnd"]},excerpt:"",headers:[{level:3,title:"\u9879\u76EE\u622A\u56FE",slug:"\u9879\u76EE\u622A\u56FE",children:[]}],content:`
\u6E90\u4EE3\u7801\u5730\u5740 [https://github.com/ZoftTi/cloud_music](https://github.com/ZoftTi/cloud_music)

\`\`\`
cloud_music
\u251C\u2500 cloud_music_server_api // \u540E\u7AEF Api
\u251C\u2500 components // \u7EC4\u4EF6
|     \u251C\u2500NavHeader // \u5BFC\u822A\u5934\u90E8\u7EC4\u4EF6
\u251C\u2500 utils // \u5DE5\u5177\u51FD\u6570\u5C01\u88C5
|   \u251C\u2500 config.js // \u8BF7\u6C42\u914D\u7F6E\u6587\u4EF6
|   \u251C\u2500 request.js // \u8BF7\u6C42\u5C01\u88C5
\u251C\u2500 static // \u9759\u6001\u8D44\u6E90
\u251C\u2500 songPackage // \u6B4C\u66F2\u8BE6\u60C5\u9875\u5206\u5305
|      \u251C\u2500 pages
|      |   \u251C\u2500 static // \u8BE6\u60C5\u9875\u9759\u6001\u8D44\u6E90
|      |   \u251C\u2500 songDetail
|      |   \u251C\u2500 recommendSong
\u251C\u2500 pages // \u4E3B\u5305
|   \u251C\u2500 video // \u89C6\u9891\u9875
|   \u251C\u2500 search  // \u641C\u7D22\u9875
|   \u251C\u2500 personal // \u4E2A\u4EBA\u4E2D\u5FC3\u9875
|   \u251C\u2500 login // \u767B\u5F55\u9875
|   \u251C\u2500 index  // \u9996\u9875
\`\`\`

\u540E\u7AEF\u5E94\u7528\u57FA\u4E8E [NeteaseCloudMusicApi](https://github.com/Binaryify/NeteaseCloudMusicApi) \u642D\u5EFA

### \u9879\u76EE\u622A\u56FE

<!-- ![](/images/cloud_music/cloud_music_detail.png) -->
<img src="/assets/images/cloud_music/cloud_music_detail.png" width="300" />
<img src="/assets/images/cloud_music/cloud_music_recommend.png" width="300" />
<img src="/assets/images/cloud_music/cloud_music_index.png" width="300" />
<img src="/assets/images/cloud_music/cloud_music_personal.png" width="300" />
<img src="/assets/images/cloud_music/cloud_music_search.png" width="300" />
<img src="/assets/images/cloud_music/cloud_music_video.png" width="300" />
`,contentRendered:`<p>\u6E90\u4EE3\u7801\u5730\u5740 <a href="https://github.com/ZoftTi/cloud_music" target="_blank" rel="noopener noreferrer">https://github.com/ZoftTi/cloud_music<ExternalLinkIcon/></a></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>cloud_music
\u251C\u2500 cloud_music_server_api // \u540E\u7AEF Api
\u251C\u2500 components // \u7EC4\u4EF6
|     \u251C\u2500NavHeader // \u5BFC\u822A\u5934\u90E8\u7EC4\u4EF6
\u251C\u2500 utils // \u5DE5\u5177\u51FD\u6570\u5C01\u88C5
|   \u251C\u2500 config.js // \u8BF7\u6C42\u914D\u7F6E\u6587\u4EF6
|   \u251C\u2500 request.js // \u8BF7\u6C42\u5C01\u88C5
\u251C\u2500 static // \u9759\u6001\u8D44\u6E90
\u251C\u2500 songPackage // \u6B4C\u66F2\u8BE6\u60C5\u9875\u5206\u5305
|      \u251C\u2500 pages
|      |   \u251C\u2500 static // \u8BE6\u60C5\u9875\u9759\u6001\u8D44\u6E90
|      |   \u251C\u2500 songDetail
|      |   \u251C\u2500 recommendSong
\u251C\u2500 pages // \u4E3B\u5305
|   \u251C\u2500 video // \u89C6\u9891\u9875
|   \u251C\u2500 search  // \u641C\u7D22\u9875
|   \u251C\u2500 personal // \u4E2A\u4EBA\u4E2D\u5FC3\u9875
|   \u251C\u2500 login // \u767B\u5F55\u9875
|   \u251C\u2500 index  // \u9996\u9875
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u540E\u7AEF\u5E94\u7528\u57FA\u4E8E <a href="https://github.com/Binaryify/NeteaseCloudMusicApi" target="_blank" rel="noopener noreferrer">NeteaseCloudMusicApi<ExternalLinkIcon/></a> \u642D\u5EFA</p>
<h3 id="\u9879\u76EE\u622A\u56FE" tabindex="-1"><a class="header-anchor" href="#\u9879\u76EE\u622A\u56FE" aria-hidden="true">#</a> \u9879\u76EE\u622A\u56FE</h3>
<!-- ![](/images/cloud_music/cloud_music_detail.png) -->
<img src="/assets/images/cloud_music/cloud_music_detail.png" width="300" />
<img src="/assets/images/cloud_music/cloud_music_recommend.png" width="300" />
<img src="/assets/images/cloud_music/cloud_music_index.png" width="300" />
<img src="/assets/images/cloud_music/cloud_music_personal.png" width="300" />
<img src="/assets/images/cloud_music/cloud_music_search.png" width="300" />
<img src="/assets/images/cloud_music/cloud_music_video.png" width="300" />
`,date:"0000-00-00",deps:[],hoistedTags:[],links:[],pathInferred:"/blogs/frontEnd/2022/052901.html",pathLocale:"/",permalink:null,routeMeta:{title:"\u4E91\u97F3\u4E50\u5C0F\u7A0B\u5E8F"},slug:"052901",filePath:"/Volumes/File@ti/Project/Learn/zoftti.github.io/blogs/frontEnd/2022/052901.md",filePathRelative:"blogs/frontEnd/2022/052901.md",componentFilePath:"/Volumes/File@ti/Project/Learn/zoftti.github.io/.vuepress/.temp/pages/blogs/frontEnd/2022/052901.html.vue",componentFilePathRelative:"pages/blogs/frontEnd/2022/052901.html.vue",componentFileChunkName:"v-953ed77e",dataFilePath:"/Volumes/File@ti/Project/Learn/zoftti.github.io/.vuepress/.temp/pages/blogs/frontEnd/2022/052901.html.js",dataFilePathRelative:"pages/blogs/frontEnd/2022/052901.html.js",dataFileChunkName:"v-953ed77e",htmlFilePath:"/Volumes/File@ti/Project/Learn/zoftti.github.io/.vuepress/dist/blogs/frontEnd/2022/052901.html",htmlFilePathRelative:"blogs/frontEnd/2022/052901.html"}],length:1,label:"\u5C0F\u7A0B\u5E8F"},yinleruanjian:{pages:[{data:{key:"v-953ed77e",path:"/blogs/frontEnd/2022/052901.html",title:"\u4E91\u97F3\u4E50\u5C0F\u7A0B\u5E8F",lang:"en-US",frontmatter:{title:"\u4E91\u97F3\u4E50\u5C0F\u7A0B\u5E8F",date:"2022/5/29",tags:["\u5C0F\u7A0B\u5E8F","\u97F3\u4E50\u8F6F\u4EF6"],categories:["frontEnd"]},excerpt:"",headers:[{level:3,title:"\u9879\u76EE\u622A\u56FE",slug:"\u9879\u76EE\u622A\u56FE",children:[]}],git:{createdTime:1654486096e3,updatedTime:1654587378e3,contributors:[{name:"ZoftTi",email:"poleorder@icloud.com",commits:3}]},filePathRelative:"blogs/frontEnd/2022/052901.md"},key:"v-953ed77e",path:"/blogs/frontEnd/2022/052901.html",title:"\u4E91\u97F3\u4E50\u5C0F\u7A0B\u5E8F",lang:"en-US",frontmatter:{title:"\u4E91\u97F3\u4E50\u5C0F\u7A0B\u5E8F",date:"2022/5/29",tags:["\u5C0F\u7A0B\u5E8F","\u97F3\u4E50\u8F6F\u4EF6"],categories:["frontEnd"]},excerpt:"",headers:[{level:3,title:"\u9879\u76EE\u622A\u56FE",slug:"\u9879\u76EE\u622A\u56FE",children:[]}],content:`
\u6E90\u4EE3\u7801\u5730\u5740 [https://github.com/ZoftTi/cloud_music](https://github.com/ZoftTi/cloud_music)

\`\`\`
cloud_music
\u251C\u2500 cloud_music_server_api // \u540E\u7AEF Api
\u251C\u2500 components // \u7EC4\u4EF6
|     \u251C\u2500NavHeader // \u5BFC\u822A\u5934\u90E8\u7EC4\u4EF6
\u251C\u2500 utils // \u5DE5\u5177\u51FD\u6570\u5C01\u88C5
|   \u251C\u2500 config.js // \u8BF7\u6C42\u914D\u7F6E\u6587\u4EF6
|   \u251C\u2500 request.js // \u8BF7\u6C42\u5C01\u88C5
\u251C\u2500 static // \u9759\u6001\u8D44\u6E90
\u251C\u2500 songPackage // \u6B4C\u66F2\u8BE6\u60C5\u9875\u5206\u5305
|      \u251C\u2500 pages
|      |   \u251C\u2500 static // \u8BE6\u60C5\u9875\u9759\u6001\u8D44\u6E90
|      |   \u251C\u2500 songDetail
|      |   \u251C\u2500 recommendSong
\u251C\u2500 pages // \u4E3B\u5305
|   \u251C\u2500 video // \u89C6\u9891\u9875
|   \u251C\u2500 search  // \u641C\u7D22\u9875
|   \u251C\u2500 personal // \u4E2A\u4EBA\u4E2D\u5FC3\u9875
|   \u251C\u2500 login // \u767B\u5F55\u9875
|   \u251C\u2500 index  // \u9996\u9875
\`\`\`

\u540E\u7AEF\u5E94\u7528\u57FA\u4E8E [NeteaseCloudMusicApi](https://github.com/Binaryify/NeteaseCloudMusicApi) \u642D\u5EFA

### \u9879\u76EE\u622A\u56FE

<!-- ![](/images/cloud_music/cloud_music_detail.png) -->
<img src="/assets/images/cloud_music/cloud_music_detail.png" width="300" />
<img src="/assets/images/cloud_music/cloud_music_recommend.png" width="300" />
<img src="/assets/images/cloud_music/cloud_music_index.png" width="300" />
<img src="/assets/images/cloud_music/cloud_music_personal.png" width="300" />
<img src="/assets/images/cloud_music/cloud_music_search.png" width="300" />
<img src="/assets/images/cloud_music/cloud_music_video.png" width="300" />
`,contentRendered:`<p>\u6E90\u4EE3\u7801\u5730\u5740 <a href="https://github.com/ZoftTi/cloud_music" target="_blank" rel="noopener noreferrer">https://github.com/ZoftTi/cloud_music<ExternalLinkIcon/></a></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>cloud_music
\u251C\u2500 cloud_music_server_api // \u540E\u7AEF Api
\u251C\u2500 components // \u7EC4\u4EF6
|     \u251C\u2500NavHeader // \u5BFC\u822A\u5934\u90E8\u7EC4\u4EF6
\u251C\u2500 utils // \u5DE5\u5177\u51FD\u6570\u5C01\u88C5
|   \u251C\u2500 config.js // \u8BF7\u6C42\u914D\u7F6E\u6587\u4EF6
|   \u251C\u2500 request.js // \u8BF7\u6C42\u5C01\u88C5
\u251C\u2500 static // \u9759\u6001\u8D44\u6E90
\u251C\u2500 songPackage // \u6B4C\u66F2\u8BE6\u60C5\u9875\u5206\u5305
|      \u251C\u2500 pages
|      |   \u251C\u2500 static // \u8BE6\u60C5\u9875\u9759\u6001\u8D44\u6E90
|      |   \u251C\u2500 songDetail
|      |   \u251C\u2500 recommendSong
\u251C\u2500 pages // \u4E3B\u5305
|   \u251C\u2500 video // \u89C6\u9891\u9875
|   \u251C\u2500 search  // \u641C\u7D22\u9875
|   \u251C\u2500 personal // \u4E2A\u4EBA\u4E2D\u5FC3\u9875
|   \u251C\u2500 login // \u767B\u5F55\u9875
|   \u251C\u2500 index  // \u9996\u9875
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u540E\u7AEF\u5E94\u7528\u57FA\u4E8E <a href="https://github.com/Binaryify/NeteaseCloudMusicApi" target="_blank" rel="noopener noreferrer">NeteaseCloudMusicApi<ExternalLinkIcon/></a> \u642D\u5EFA</p>
<h3 id="\u9879\u76EE\u622A\u56FE" tabindex="-1"><a class="header-anchor" href="#\u9879\u76EE\u622A\u56FE" aria-hidden="true">#</a> \u9879\u76EE\u622A\u56FE</h3>
<!-- ![](/images/cloud_music/cloud_music_detail.png) -->
<img src="/assets/images/cloud_music/cloud_music_detail.png" width="300" />
<img src="/assets/images/cloud_music/cloud_music_recommend.png" width="300" />
<img src="/assets/images/cloud_music/cloud_music_index.png" width="300" />
<img src="/assets/images/cloud_music/cloud_music_personal.png" width="300" />
<img src="/assets/images/cloud_music/cloud_music_search.png" width="300" />
<img src="/assets/images/cloud_music/cloud_music_video.png" width="300" />
`,date:"0000-00-00",deps:[],hoistedTags:[],links:[],pathInferred:"/blogs/frontEnd/2022/052901.html",pathLocale:"/",permalink:null,routeMeta:{title:"\u4E91\u97F3\u4E50\u5C0F\u7A0B\u5E8F"},slug:"052901",filePath:"/Volumes/File@ti/Project/Learn/zoftti.github.io/blogs/frontEnd/2022/052901.md",filePathRelative:"blogs/frontEnd/2022/052901.md",componentFilePath:"/Volumes/File@ti/Project/Learn/zoftti.github.io/.vuepress/.temp/pages/blogs/frontEnd/2022/052901.html.vue",componentFilePathRelative:"pages/blogs/frontEnd/2022/052901.html.vue",componentFileChunkName:"v-953ed77e",dataFilePath:"/Volumes/File@ti/Project/Learn/zoftti.github.io/.vuepress/.temp/pages/blogs/frontEnd/2022/052901.html.js",dataFilePathRelative:"pages/blogs/frontEnd/2022/052901.html.js",dataFileChunkName:"v-953ed77e",htmlFilePath:"/Volumes/File@ti/Project/Learn/zoftti.github.io/.vuepress/dist/blogs/frontEnd/2022/052901.html",htmlFilePathRelative:"blogs/frontEnd/2022/052901.html"}],length:1,label:"\u97F3\u4E50\u8F6F\u4EF6"},reco:{pages:[{data:{key:"v-6bb1ef33",path:"/blogs/other/guide.html",title:"vuepress-theme-reco",lang:"en-US",frontmatter:{title:"vuepress-theme-reco",date:"2019/04/09",author:"reco_luan",tags:["reco"],categories:["reco"]},excerpt:"",headers:[{level:2,title:"Use",slug:"use",children:[]},{level:2,title:"Play Together",slug:"play-together",children:[{level:3,title:"0.x",slug:"_0-x",children:[]},{level:3,title:"1.x",slug:"_1-x",children:[]},{level:3,title:"CLI",slug:"cli",children:[]}]},{level:2,title:"License",slug:"license",children:[]}],git:{createdTime:1654486096e3,updatedTime:1654486096e3,contributors:[{name:"ZoftTi",email:"poleorder@icloud.com",commits:1}]},filePathRelative:"blogs/other/guide.md"},key:"v-6bb1ef33",path:"/blogs/other/guide.html",title:"vuepress-theme-reco",lang:"en-US",frontmatter:{title:"vuepress-theme-reco",date:"2019/04/09",author:"reco_luan",tags:["reco"],categories:["reco"]},excerpt:"",headers:[{level:2,title:"Use",slug:"use",children:[]},{level:2,title:"Play Together",slug:"play-together",children:[{level:3,title:"0.x",slug:"_0-x",children:[]},{level:3,title:"1.x",slug:"_1-x",children:[]},{level:3,title:"CLI",slug:"cli",children:[]}]},{level:2,title:"License",slug:"license",children:[]}],content:`
![vuepress](https://img.shields.io/badge/vuepress-0.14.8-brightgreen.svg)
![leancloud-storage](https://img.shields.io/badge/leancloud--storage-3.10.1-orange.svg)
![valine](https://img.shields.io/badge/valine-1.3.4-blue.svg)

::: tip \u4ECB\u7ECD
1. \u8FD9\u662F\u4E00\u4E2Avuepress\u4E3B\u9898\uFF0C\u65E8\u5728\u6DFB\u52A0\u535A\u5BA2\u6240\u9700\u7684\u5206\u7C7B\u3001TAB\u5899\u3001\u5206\u9875\u3001\u8BC4\u8BBA\u7B49\u80FD\uFF1B<br>
2. \u4E3B\u9898\u8FFD\u6C42\u6781\u7B80\uFF0C\u6839\u636E vuepress \u7684\u9ED8\u8BA4\u4E3B\u9898\u4FEE\u6539\u800C\u6210\uFF0C\u5B98\u65B9\u7684\u4E3B\u9898\u914D\u7F6E\u4ECD\u7136\u9002\u7528\uFF1B<br>
3. \u4F60\u53EF\u4EE5\u6253\u5F00 [\u5348\u540E\u5357\u6742](http://recoluan.gitlab.io) \u6765\u67E5\u770B\u6548\u679C\u3002
:::

## Use

**Build**

\`\`\`bash
npm run build

# or

yarn build
\`\`\`

**Server**

\`\`\`bash
npm run dev

# or

yarn dev
\`\`\`

## Play Together

### 0.x

\`vuepress-theme-reco@0.x\` \u662F\u57FA\u4E8E \`vuepress@0.x\` \u7684\u535A\u5BA2\u4E3B\u9898\u3002

\`vuepress@0.x\` \u529F\u80FD\u6BD4\u8F83\u7B80\u5355\uFF0C\u53EA\u9002\u5408\u4E66\u5199\u7B80\u5355\u7684\u6587\u6863\uFF0C\u4F46\u597D\u5728\u652F\u6301\u4E3B\u9898\u81EA\u5B9A\u4E49\uFF0C\u800C\u4E2A\u4EBA\u53C8\u5E0C\u671B\u80FD\u591F\u7528\u5B83\u6765\u4E66\u5199\u535A\u5BA2\uFF0C\u539F\u56E0\u5C31\u662F\u5B83\u8DB3\u591F\u7684\u7B80\u6D01\uFF0C\u6BEB\u65E0\u7591\u95EE\uFF0C\u8FD9\u4E5F\u7B26\u5408\u5F88\u591A\u7A0B\u5E8F\u5458\u7684\u89C2\u5FF5\uFF0C\u4E5F\u5C31\u662F\u5728\u8FD9\u79CD\u60C5\u51B5\u4E0B\uFF0C\`vuepress-theme-reco@0.x\` \u7684\u7B2C\u4E00\u4E2A\u7248\u672C\u7ECF\u8FC7\u4E00\u4E2A\u901A\u5BB5\u800C\u4EA7\u751F\u3002

\u4E3B\u9898\u5F00\u6E90\u4E0D\u4E45\uFF0C\u5F88\u591A\u670B\u53CB\u901A\u8FC7\u5404\u79CD\u8054\u7CFB\u65B9\u5F0F\uFF0C\u7ED9\u5230\u5F88\u591A\u597D\u7684\u610F\u89C1\u548C\u5EFA\u8BAE\uFF0C\u6240\u4EE5\u6211\u4E2A\u4EBA\u4E5F\u5728\u79EF\u6781\u5730\u66F4\u65B0\u3002

\u56E0\u4E3A\u6211\u662F\u4E00\u540D\u524D\u7AEF\u5F00\u53D1\u5DE5\u7A0B\u5E08\uFF0C\u5F00\u53D1\u7684\u8FC7\u7A0B\u4E2D\uFF0C\u603B\u662F\u60F3\u7740\u80FD\u4E0D\u80FD\u52A0\u5165\u4E00\u4E9B\u70AB\u9177\u7684\u6548\u679C\uFF0C\u6709\u5F88\u591A\u6B21\u90FD\u662F\u6DFB\u52A0\u4E0A\u53C8\u53BB\u6389\uFF0C\u53CD\u53CD\u590D\u590D\uFF0C\u6700\u540E\u90FD\u662F\u88AB **\u7B80\u6D01** \u7684\u8FD9\u4E2A\u539F\u5219\u963B\u6B62\u6389\uFF0C\u6BD5\u7ADF\uFF0C\u73B0\u5728\u6211\u662F\u5C06\u5B83\u5F53\u4F5C\u4E00\u4E2A\u4EA7\u54C1\u6765\u770B\u5F85\uFF0C\u5E76\u4E0D\u662F\u4E00\u4E2A\u6280\u672F\u6216\u8005\u662F\u6280\u5DE7\u7684\u5C1D\u8BD5\u9879\u76EE\u3002

### 1.x

\u968F\u7740\u4E0D\u65AD\u6709\u7528\u6237\u8FC7\u6765\u8BE2\u95EE\uFF1A\u4E3A\u4EC0\u4E48 \`vuepress-theme-reco@0.x\` \u4E0D\u80FD\u5728 \`vuepress@1.x\` \u4E0A\u4F7F\u7528\uFF1F\u672C\u6765\u53EA\u662F\u6253\u7B97\u5BF9 \`vuepress-theme-reco@0.x\` \u8FDB\u884C\u7B80\u5355\u7684bug\u4FEE\u590D\u7684\u6211\uFF0C\u7EC8\u7A76\u8FD8\u662F\u5FCD\u4E0D\u4F4F\uFF0C\u5F00\u59CB\u4E86 \`vuepress-theme-reco@1.x\` \u7684\u5F00\u53D1\u3002\u53C8\u662F\u5728\u4E00\u4E2A\u5BC2\u9759\u7684\u51CC\u6668\u4E24\u70B9\u534A\uFF08\u665A\u4E0A\u5C31\u662F\u51FA\u6D3B\u5FEB\uFF09\uFF0C\u6211\u9ED8\u9ED8\u5730\u5F00\u59CB\u4E86\u3002

\u4E3B\u9898\u5347\u7EA7\u7684\u5173\u952E\u4E5F\u5C31\u662F \`@vuepress/plugin-blog\` \u8FD9\u6B3E\u5B98\u65B9\u63D2\u4EF6\uFF0C\u5B83\u4E0D\u9700\u8981\u518D\u53BB\u9EBB\u70E6\u5730\u8FC7\u6EE4\u6570\u636E\uFF0C\u5C06\u5206\u7C7B\u548C\u6807\u7B7E\u7684\u76F8\u5173\u4FE1\u606F\u76F4\u63A5\u5B58\u5728 \`$categories\` \u548C \`$tags\` \u8FD9\u4E24\u4E2A\u5168\u5C40\u53D8\u91CF\u4E2D\u3002\u501F\u52A9\u4E8E \`@vuepress/plugin-blog\`\uFF0C\u5206\u7C7B\u548C\u6807\u7B7E\u529F\u80FD\u66F4\u5BB9\u6613\u5B9E\u73B0\uFF0C\u4F46\u4E5F\u6709\u4E86\u4E00\u4E9B\u5C40\u9650\u3002\u63A5\u4E0B\u6765\u4E24\u4E09\u5929\u7684\u65F6\u95F4\uFF0C\u90FD\u662F\u5728\u8FDB\u884C\u529F\u80FD\u7684\u8FC1\u79FB\u548C\u4E00\u4E9Bbug\u7684\u4FEE\u590D\u3002

\`vuepress-theme-reco@0.x\` \u7684\u5F00\u53D1\u4E2D\uFF0C\u66F4\u52A0\u6DF1\u523B\u5730\u660E\u767D\u4E86\u6A21\u5757\u5316\u548C\u7EC4\u4EF6\u5316\u7F16\u7A0B\u7684\u91CD\u8981\u6027\uFF0C\u5982\u679C\u5F53\u521D\u6CA1\u6709\u628A\u4E00\u4E9B\u529F\u80FD\u8FDB\u884C\u5C01\u88C5\uFF0C\u800C\u662F\u76F4\u63A5\u7B80\u5355\u7684\u590D\u5236\uFF0C\u8FD9\u6B21\u5347\u7EA7\u4E5F\u4E0D\u4F1A\u8FD9\u4E48\u987A\u5229\u3002\u6A21\u5757\u62C6\u5206\u7684\u8D8A\u7EC6\uFF0C\u4F7F\u7528\u5C31\u4F1A\u8D8A\u7075\u6D3B\u3002

### CLI

\u8FD8\u662F\u8877\u5FC3\u5730\u5E0C\u671B\u80FD\u6709\u66F4\u591A\u7684\u670B\u53CB\u53C2\u4E0E\u8FDB\u6765\uFF0C\u66F4\u5FEB\u5730\u53BB\u5B8C\u5584\u5B83\u3002\u63A5\u4E0B\u6765\u65F6\u95F4\u5141\u8BB8\u7684\u60C5\u51B5\u4E0B\uFF0C\u6211\u4F1A\u5F00\u6E90\u4E00\u6B3E\u81EA\u52A8\u751F\u6210\u535A\u5BA2\u7684\u811A\u624B\u67B6\uFF0C\u7565\u8FC7\u914D\u7F6E\u6B65\u9AA4\uFF0C\u76F4\u63A5\u4E66\u5199\u4F18\u8D28\u5185\u5BB9\uFF0C\u8FD9\u4E5F\u662F\u6211\u540E\u6765\u9010\u6E10\u5F62\u6210\u7684\u4E00\u79CD\u4FE1\u5FF5\uFF0C\u5C31\u662F\u5E0C\u671B\u80FD\u8BA9\u8FD9\u6B3E\u4E3B\u9898\uFF0C\u529F\u80FD\u8D8A\u5B8C\u5584\uFF0C\u4F7F\u7528\u8D8A\u6765\u8D8A\u7B80\u5355\u3002

## License
[MIT](https://github.com/recoluan/vuepress-theme-reco/blob/master/LICENSE)`,contentRendered:`<p><img src="https://img.shields.io/badge/vuepress-0.14.8-brightgreen.svg" alt="vuepress">
<img src="https://img.shields.io/badge/leancloud--storage-3.10.1-orange.svg" alt="leancloud-storage">
<img src="https://img.shields.io/badge/valine-1.3.4-blue.svg" alt="valine"></p>
<div class="custom-container tip"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 8h.01"></path><path d="M11 12h1v4h1"></path></g></svg><p class="custom-container-title">\u4ECB\u7ECD</p><ol>
<li>\u8FD9\u662F\u4E00\u4E2Avuepress\u4E3B\u9898\uFF0C\u65E8\u5728\u6DFB\u52A0\u535A\u5BA2\u6240\u9700\u7684\u5206\u7C7B\u3001TAB\u5899\u3001\u5206\u9875\u3001\u8BC4\u8BBA\u7B49\u80FD\uFF1B<br></li>
<li>\u4E3B\u9898\u8FFD\u6C42\u6781\u7B80\uFF0C\u6839\u636E vuepress \u7684\u9ED8\u8BA4\u4E3B\u9898\u4FEE\u6539\u800C\u6210\uFF0C\u5B98\u65B9\u7684\u4E3B\u9898\u914D\u7F6E\u4ECD\u7136\u9002\u7528\uFF1B<br></li>
<li>\u4F60\u53EF\u4EE5\u6253\u5F00 <a href="http://recoluan.gitlab.io" target="_blank" rel="noopener noreferrer">\u5348\u540E\u5357\u6742<ExternalLinkIcon/></a> \u6765\u67E5\u770B\u6548\u679C\u3002</li>
</ol>
</div><h2 id="use" tabindex="-1"><a class="header-anchor" href="#use" aria-hidden="true">#</a> Use</h2>
<p><strong>Build</strong></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> run build

<span class="token comment"># or</span>

<span class="token function">yarn</span> build
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Server</strong></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> run dev

<span class="token comment"># or</span>

<span class="token function">yarn</span> dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="play-together" tabindex="-1"><a class="header-anchor" href="#play-together" aria-hidden="true">#</a> Play Together</h2>
<h3 id="_0-x" tabindex="-1"><a class="header-anchor" href="#_0-x" aria-hidden="true">#</a> 0.x</h3>
<p><code v-pre>vuepress-theme-reco@0.x</code> \u662F\u57FA\u4E8E <code v-pre>vuepress@0.x</code> \u7684\u535A\u5BA2\u4E3B\u9898\u3002</p>
<p><code v-pre>vuepress@0.x</code> \u529F\u80FD\u6BD4\u8F83\u7B80\u5355\uFF0C\u53EA\u9002\u5408\u4E66\u5199\u7B80\u5355\u7684\u6587\u6863\uFF0C\u4F46\u597D\u5728\u652F\u6301\u4E3B\u9898\u81EA\u5B9A\u4E49\uFF0C\u800C\u4E2A\u4EBA\u53C8\u5E0C\u671B\u80FD\u591F\u7528\u5B83\u6765\u4E66\u5199\u535A\u5BA2\uFF0C\u539F\u56E0\u5C31\u662F\u5B83\u8DB3\u591F\u7684\u7B80\u6D01\uFF0C\u6BEB\u65E0\u7591\u95EE\uFF0C\u8FD9\u4E5F\u7B26\u5408\u5F88\u591A\u7A0B\u5E8F\u5458\u7684\u89C2\u5FF5\uFF0C\u4E5F\u5C31\u662F\u5728\u8FD9\u79CD\u60C5\u51B5\u4E0B\uFF0C<code v-pre>vuepress-theme-reco@0.x</code> \u7684\u7B2C\u4E00\u4E2A\u7248\u672C\u7ECF\u8FC7\u4E00\u4E2A\u901A\u5BB5\u800C\u4EA7\u751F\u3002</p>
<p>\u4E3B\u9898\u5F00\u6E90\u4E0D\u4E45\uFF0C\u5F88\u591A\u670B\u53CB\u901A\u8FC7\u5404\u79CD\u8054\u7CFB\u65B9\u5F0F\uFF0C\u7ED9\u5230\u5F88\u591A\u597D\u7684\u610F\u89C1\u548C\u5EFA\u8BAE\uFF0C\u6240\u4EE5\u6211\u4E2A\u4EBA\u4E5F\u5728\u79EF\u6781\u5730\u66F4\u65B0\u3002</p>
<p>\u56E0\u4E3A\u6211\u662F\u4E00\u540D\u524D\u7AEF\u5F00\u53D1\u5DE5\u7A0B\u5E08\uFF0C\u5F00\u53D1\u7684\u8FC7\u7A0B\u4E2D\uFF0C\u603B\u662F\u60F3\u7740\u80FD\u4E0D\u80FD\u52A0\u5165\u4E00\u4E9B\u70AB\u9177\u7684\u6548\u679C\uFF0C\u6709\u5F88\u591A\u6B21\u90FD\u662F\u6DFB\u52A0\u4E0A\u53C8\u53BB\u6389\uFF0C\u53CD\u53CD\u590D\u590D\uFF0C\u6700\u540E\u90FD\u662F\u88AB <strong>\u7B80\u6D01</strong> \u7684\u8FD9\u4E2A\u539F\u5219\u963B\u6B62\u6389\uFF0C\u6BD5\u7ADF\uFF0C\u73B0\u5728\u6211\u662F\u5C06\u5B83\u5F53\u4F5C\u4E00\u4E2A\u4EA7\u54C1\u6765\u770B\u5F85\uFF0C\u5E76\u4E0D\u662F\u4E00\u4E2A\u6280\u672F\u6216\u8005\u662F\u6280\u5DE7\u7684\u5C1D\u8BD5\u9879\u76EE\u3002</p>
<h3 id="_1-x" tabindex="-1"><a class="header-anchor" href="#_1-x" aria-hidden="true">#</a> 1.x</h3>
<p>\u968F\u7740\u4E0D\u65AD\u6709\u7528\u6237\u8FC7\u6765\u8BE2\u95EE\uFF1A\u4E3A\u4EC0\u4E48 <code v-pre>vuepress-theme-reco@0.x</code> \u4E0D\u80FD\u5728 <code v-pre>vuepress@1.x</code> \u4E0A\u4F7F\u7528\uFF1F\u672C\u6765\u53EA\u662F\u6253\u7B97\u5BF9 <code v-pre>vuepress-theme-reco@0.x</code> \u8FDB\u884C\u7B80\u5355\u7684bug\u4FEE\u590D\u7684\u6211\uFF0C\u7EC8\u7A76\u8FD8\u662F\u5FCD\u4E0D\u4F4F\uFF0C\u5F00\u59CB\u4E86 <code v-pre>vuepress-theme-reco@1.x</code> \u7684\u5F00\u53D1\u3002\u53C8\u662F\u5728\u4E00\u4E2A\u5BC2\u9759\u7684\u51CC\u6668\u4E24\u70B9\u534A\uFF08\u665A\u4E0A\u5C31\u662F\u51FA\u6D3B\u5FEB\uFF09\uFF0C\u6211\u9ED8\u9ED8\u5730\u5F00\u59CB\u4E86\u3002</p>
<p>\u4E3B\u9898\u5347\u7EA7\u7684\u5173\u952E\u4E5F\u5C31\u662F <code v-pre>@vuepress/plugin-blog</code> \u8FD9\u6B3E\u5B98\u65B9\u63D2\u4EF6\uFF0C\u5B83\u4E0D\u9700\u8981\u518D\u53BB\u9EBB\u70E6\u5730\u8FC7\u6EE4\u6570\u636E\uFF0C\u5C06\u5206\u7C7B\u548C\u6807\u7B7E\u7684\u76F8\u5173\u4FE1\u606F\u76F4\u63A5\u5B58\u5728 <code v-pre>$categories</code> \u548C <code v-pre>$tags</code> \u8FD9\u4E24\u4E2A\u5168\u5C40\u53D8\u91CF\u4E2D\u3002\u501F\u52A9\u4E8E <code v-pre>@vuepress/plugin-blog</code>\uFF0C\u5206\u7C7B\u548C\u6807\u7B7E\u529F\u80FD\u66F4\u5BB9\u6613\u5B9E\u73B0\uFF0C\u4F46\u4E5F\u6709\u4E86\u4E00\u4E9B\u5C40\u9650\u3002\u63A5\u4E0B\u6765\u4E24\u4E09\u5929\u7684\u65F6\u95F4\uFF0C\u90FD\u662F\u5728\u8FDB\u884C\u529F\u80FD\u7684\u8FC1\u79FB\u548C\u4E00\u4E9Bbug\u7684\u4FEE\u590D\u3002</p>
<p><code v-pre>vuepress-theme-reco@0.x</code> \u7684\u5F00\u53D1\u4E2D\uFF0C\u66F4\u52A0\u6DF1\u523B\u5730\u660E\u767D\u4E86\u6A21\u5757\u5316\u548C\u7EC4\u4EF6\u5316\u7F16\u7A0B\u7684\u91CD\u8981\u6027\uFF0C\u5982\u679C\u5F53\u521D\u6CA1\u6709\u628A\u4E00\u4E9B\u529F\u80FD\u8FDB\u884C\u5C01\u88C5\uFF0C\u800C\u662F\u76F4\u63A5\u7B80\u5355\u7684\u590D\u5236\uFF0C\u8FD9\u6B21\u5347\u7EA7\u4E5F\u4E0D\u4F1A\u8FD9\u4E48\u987A\u5229\u3002\u6A21\u5757\u62C6\u5206\u7684\u8D8A\u7EC6\uFF0C\u4F7F\u7528\u5C31\u4F1A\u8D8A\u7075\u6D3B\u3002</p>
<h3 id="cli" tabindex="-1"><a class="header-anchor" href="#cli" aria-hidden="true">#</a> CLI</h3>
<p>\u8FD8\u662F\u8877\u5FC3\u5730\u5E0C\u671B\u80FD\u6709\u66F4\u591A\u7684\u670B\u53CB\u53C2\u4E0E\u8FDB\u6765\uFF0C\u66F4\u5FEB\u5730\u53BB\u5B8C\u5584\u5B83\u3002\u63A5\u4E0B\u6765\u65F6\u95F4\u5141\u8BB8\u7684\u60C5\u51B5\u4E0B\uFF0C\u6211\u4F1A\u5F00\u6E90\u4E00\u6B3E\u81EA\u52A8\u751F\u6210\u535A\u5BA2\u7684\u811A\u624B\u67B6\uFF0C\u7565\u8FC7\u914D\u7F6E\u6B65\u9AA4\uFF0C\u76F4\u63A5\u4E66\u5199\u4F18\u8D28\u5185\u5BB9\uFF0C\u8FD9\u4E5F\u662F\u6211\u540E\u6765\u9010\u6E10\u5F62\u6210\u7684\u4E00\u79CD\u4FE1\u5FF5\uFF0C\u5C31\u662F\u5E0C\u671B\u80FD\u8BA9\u8FD9\u6B3E\u4E3B\u9898\uFF0C\u529F\u80FD\u8D8A\u5B8C\u5584\uFF0C\u4F7F\u7528\u8D8A\u6765\u8D8A\u7B80\u5355\u3002</p>
<h2 id="license" tabindex="-1"><a class="header-anchor" href="#license" aria-hidden="true">#</a> License</h2>
<p><a href="https://github.com/recoluan/vuepress-theme-reco/blob/master/LICENSE" target="_blank" rel="noopener noreferrer">MIT<ExternalLinkIcon/></a></p>