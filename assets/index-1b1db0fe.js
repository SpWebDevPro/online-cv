(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerpolicy&&(r.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?r.credentials="include":n.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(n){if(n.ep)return;n.ep=!0;const r=t(n);fetch(n.href,r)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const J=window,de=J.ShadowRoot&&(J.ShadyCSS===void 0||J.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ce=Symbol(),he=new WeakMap;let ke=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==ce)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(de&&e===void 0){const i=t!==void 0&&t.length===1;i&&(e=he.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&he.set(t,e))}return e}toString(){return this.cssText}};const Ze=s=>new ke(typeof s=="string"?s:s+"",void 0,ce),w=(s,...e)=>{const t=s.length===1?s[0]:e.reduce((i,n,r)=>i+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+s[r+1],s[0]);return new ke(t,s,ce)},Ge=(s,e)=>{de?s.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):e.forEach(t=>{const i=document.createElement("style"),n=J.litNonce;n!==void 0&&i.setAttribute("nonce",n),i.textContent=t.cssText,s.appendChild(i)})},fe=de?s=>s:s=>s instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return Ze(t)})(s):s;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var te;const W=window,ge=W.trustedTypes,Ke=ge?ge.emptyScript:"",ve=W.reactiveElementPolyfillSupport,le={toAttribute(s,e){switch(e){case Boolean:s=s?Ke:null;break;case Object:case Array:s=s==null?s:JSON.stringify(s)}return s},fromAttribute(s,e){let t=s;switch(e){case Boolean:t=s!==null;break;case Number:t=s===null?null:Number(s);break;case Object:case Array:try{t=JSON.parse(s)}catch{t=null}}return t}},Oe=(s,e)=>e!==s&&(e==e||s==s),se={attribute:!0,type:String,converter:le,reflect:!1,hasChanged:Oe};let D=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(e){var t;this.finalize(),((t=this.h)!==null&&t!==void 0?t:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((t,i)=>{const n=this._$Ep(i,t);n!==void 0&&(this._$Ev.set(n,i),e.push(n))}),e}static createProperty(e,t=se){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const i=typeof e=="symbol"?Symbol():"__"+e,n=this.getPropertyDescriptor(e,i,t);n!==void 0&&Object.defineProperty(this.prototype,e,n)}}static getPropertyDescriptor(e,t,i){return{get(){return this[t]},set(n){const r=this[e];this[t]=n,this.requestUpdate(e,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||se}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),e.h!==void 0&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const n of i)this.createProperty(n,t[n])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const n of i)t.unshift(fe(n))}else e!==void 0&&t.push(fe(e));return t}static _$Ep(e,t){const i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}u(){var e;this._$E_=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(t=>t(this))}addController(e){var t,i;((t=this._$ES)!==null&&t!==void 0?t:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((i=e.hostConnected)===null||i===void 0||i.call(e))}removeController(e){var t;(t=this._$ES)===null||t===void 0||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])})}createRenderRoot(){var e;const t=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return Ge(t,this.constructor.elementStyles),t}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(t=>{var i;return(i=t.hostConnected)===null||i===void 0?void 0:i.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(t=>{var i;return(i=t.hostDisconnected)===null||i===void 0?void 0:i.call(t)})}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$EO(e,t,i=se){var n;const r=this.constructor._$Ep(e,i);if(r!==void 0&&i.reflect===!0){const o=(((n=i.converter)===null||n===void 0?void 0:n.toAttribute)!==void 0?i.converter:le).toAttribute(t,i.type);this._$El=e,o==null?this.removeAttribute(r):this.setAttribute(r,o),this._$El=null}}_$AK(e,t){var i;const n=this.constructor,r=n._$Ev.get(e);if(r!==void 0&&this._$El!==r){const o=n.getPropertyOptions(r),c=typeof o.converter=="function"?{fromAttribute:o.converter}:((i=o.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?o.converter:le;this._$El=r,this[r]=c.fromAttribute(t,o.type),this._$El=null}}requestUpdate(e,t,i){let n=!0;e!==void 0&&(((i=i||this.constructor.getPropertyOptions(e)).hasChanged||Oe)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),i.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,i))):n=!1),!this.isUpdatePending&&n&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((n,r)=>this[r]=n),this._$Ei=void 0);let t=!1;const i=this._$AL;try{t=this.shouldUpdate(i),t?(this.willUpdate(i),(e=this._$ES)===null||e===void 0||e.forEach(n=>{var r;return(r=n.hostUpdate)===null||r===void 0?void 0:r.call(n)}),this.update(i)):this._$Ek()}catch(n){throw t=!1,this._$Ek(),n}t&&this._$AE(i)}willUpdate(e){}_$AE(e){var t;(t=this._$ES)===null||t===void 0||t.forEach(i=>{var n;return(n=i.hostUpdated)===null||n===void 0?void 0:n.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((t,i)=>this._$EO(i,this[i],t)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}};D.finalized=!0,D.elementProperties=new Map,D.elementStyles=[],D.shadowRootOptions={mode:"open"},ve==null||ve({ReactiveElement:D}),((te=W.reactiveElementVersions)!==null&&te!==void 0?te:W.reactiveElementVersions=[]).push("1.5.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ie;const q=window,j=q.trustedTypes,be=j?j.createPolicy("lit-html",{createHTML:s=>s}):void 0,A=`lit$${(Math.random()+"").slice(9)}$`,ue="?"+A,Ye=`<${ue}>`,L=document,U=(s="")=>L.createComment(s),H=s=>s===null||typeof s!="object"&&typeof s!="function",Te=Array.isArray,De=s=>Te(s)||typeof(s==null?void 0:s[Symbol.iterator])=="function",B=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ye=/-->/g,$e=/>/g,x=RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),we=/'/g,_e=/"/g,Me=/^(?:script|style|textarea|title)$/i,Qe=s=>(e,...t)=>({_$litType$:s,strings:e,values:t}),p=Qe(1),k=Symbol.for("lit-noChange"),g=Symbol.for("lit-nothing"),Ae=new WeakMap,M=L.createTreeWalker(L,129,null,!1),je=(s,e)=>{const t=s.length-1,i=[];let n,r=e===2?"<svg>":"",o=B;for(let l=0;l<t;l++){const a=s[l];let b,u,d=-1,m=0;for(;m<a.length&&(o.lastIndex=m,u=o.exec(a),u!==null);)m=o.lastIndex,o===B?u[1]==="!--"?o=ye:u[1]!==void 0?o=$e:u[2]!==void 0?(Me.test(u[2])&&(n=RegExp("</"+u[2],"g")),o=x):u[3]!==void 0&&(o=x):o===x?u[0]===">"?(o=n??B,d=-1):u[1]===void 0?d=-2:(d=o.lastIndex-u[2].length,b=u[1],o=u[3]===void 0?x:u[3]==='"'?_e:we):o===_e||o===we?o=x:o===ye||o===$e?o=B:(o=x,n=void 0);const h=o===x&&s[l+1].startsWith("/>")?" ":"";r+=o===B?a+Ye:d>=0?(i.push(b),a.slice(0,d)+"$lit$"+a.slice(d)+A+h):a+A+(d===-2?(i.push(void 0),l):h)}const c=r+(s[t]||"<?>")+(e===2?"</svg>":"");if(!Array.isArray(s)||!s.hasOwnProperty("raw"))throw Error("invalid template strings array");return[be!==void 0?be.createHTML(c):c,i]};class R{constructor({strings:e,_$litType$:t},i){let n;this.parts=[];let r=0,o=0;const c=e.length-1,l=this.parts,[a,b]=je(e,t);if(this.el=R.createElement(a,i),M.currentNode=this.el.content,t===2){const u=this.el.content,d=u.firstChild;d.remove(),u.append(...d.childNodes)}for(;(n=M.nextNode())!==null&&l.length<c;){if(n.nodeType===1){if(n.hasAttributes()){const u=[];for(const d of n.getAttributeNames())if(d.endsWith("$lit$")||d.startsWith(A)){const m=b[o++];if(u.push(d),m!==void 0){const h=n.getAttribute(m.toLowerCase()+"$lit$").split(A),f=/([.?@])?(.*)/.exec(m);l.push({type:1,index:r,name:f[2],strings:h,ctor:f[1]==="."?Ne:f[1]==="?"?Be:f[1]==="@"?Ie:F})}else l.push({type:6,index:r})}for(const d of u)n.removeAttribute(d)}if(Me.test(n.tagName)){const u=n.textContent.split(A),d=u.length-1;if(d>0){n.textContent=j?j.emptyScript:"";for(let m=0;m<d;m++)n.append(u[m],U()),M.nextNode(),l.push({type:2,index:++r});n.append(u[d],U())}}}else if(n.nodeType===8)if(n.data===ue)l.push({type:2,index:r});else{let u=-1;for(;(u=n.data.indexOf(A,u+1))!==-1;)l.push({type:7,index:r}),u+=A.length-1}r++}}static createElement(e,t){const i=L.createElement("template");return i.innerHTML=e,i}}function O(s,e,t=s,i){var n,r,o,c;if(e===k)return e;let l=i!==void 0?(n=t._$Co)===null||n===void 0?void 0:n[i]:t._$Cl;const a=H(e)?void 0:e._$litDirective$;return(l==null?void 0:l.constructor)!==a&&((r=l==null?void 0:l._$AO)===null||r===void 0||r.call(l,!1),a===void 0?l=void 0:(l=new a(s),l._$AT(s,t,i)),i!==void 0?((o=(c=t)._$Co)!==null&&o!==void 0?o:c._$Co=[])[i]=l:t._$Cl=l),l!==void 0&&(e=O(s,l._$AS(s,e.values),l,i)),e}class Le{constructor(e,t){this.u=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(e){var t;const{el:{content:i},parts:n}=this._$AD,r=((t=e==null?void 0:e.creationScope)!==null&&t!==void 0?t:L).importNode(i,!0);M.currentNode=r;let o=M.nextNode(),c=0,l=0,a=n[0];for(;a!==void 0;){if(c===a.index){let b;a.type===2?b=new N(o,o.nextSibling,this,e):a.type===1?b=new a.ctor(o,a.name,a.strings,this,e):a.type===6&&(b=new Ue(o,this,e)),this.u.push(b),a=n[++l]}c!==(a==null?void 0:a.index)&&(o=M.nextNode(),c++)}return r}p(e){let t=0;for(const i of this.u)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class N{constructor(e,t,i,n){var r;this.type=2,this._$AH=g,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=n,this._$Cm=(r=n==null?void 0:n.isConnected)===null||r===void 0||r}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cm}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&e.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=O(this,e,t),H(e)?e===g||e==null||e===""?(this._$AH!==g&&this._$AR(),this._$AH=g):e!==this._$AH&&e!==k&&this.g(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):De(e)?this.k(e):this.g(e)}O(e,t=this._$AB){return this._$AA.parentNode.insertBefore(e,t)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}g(e){this._$AH!==g&&H(this._$AH)?this._$AA.nextSibling.data=e:this.T(L.createTextNode(e)),this._$AH=e}$(e){var t;const{values:i,_$litType$:n}=e,r=typeof n=="number"?this._$AC(e):(n.el===void 0&&(n.el=R.createElement(n.h,this.options)),n);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===r)this._$AH.p(i);else{const o=new Le(r,this),c=o.v(this.options);o.p(i),this.T(c),this._$AH=o}}_$AC(e){let t=Ae.get(e.strings);return t===void 0&&Ae.set(e.strings,t=new R(e)),t}k(e){Te(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,n=0;for(const r of e)n===t.length?t.push(i=new N(this.O(U()),this.O(U()),this,this.options)):i=t[n],i._$AI(r),n++;n<t.length&&(this._$AR(i&&i._$AB.nextSibling,n),t.length=n)}_$AR(e=this._$AA.nextSibling,t){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,t);e&&e!==this._$AB;){const n=e.nextSibling;e.remove(),e=n}}setConnected(e){var t;this._$AM===void 0&&(this._$Cm=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}}class F{constructor(e,t,i,n,r){this.type=1,this._$AH=g,this._$AN=void 0,this.element=e,this.name=t,this._$AM=n,this.options=r,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=g}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,i,n){const r=this.strings;let o=!1;if(r===void 0)e=O(this,e,t,0),o=!H(e)||e!==this._$AH&&e!==k,o&&(this._$AH=e);else{const c=e;let l,a;for(e=r[0],l=0;l<r.length-1;l++)a=O(this,c[i+l],t,l),a===k&&(a=this._$AH[l]),o||(o=!H(a)||a!==this._$AH[l]),a===g?e=g:e!==g&&(e+=(a??"")+r[l+1]),this._$AH[l]=a}o&&!n&&this.j(e)}j(e){e===g?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Ne extends F{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===g?void 0:e}}const Xe=j?j.emptyScript:"";class Be extends F{constructor(){super(...arguments),this.type=4}j(e){e&&e!==g?this.element.setAttribute(this.name,Xe):this.element.removeAttribute(this.name)}}class Ie extends F{constructor(e,t,i,n,r){super(e,t,i,n,r),this.type=5}_$AI(e,t=this){var i;if((e=(i=O(this,e,t,0))!==null&&i!==void 0?i:g)===k)return;const n=this._$AH,r=e===g&&n!==g||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,o=e!==g&&(n===g||r);r&&this.element.removeEventListener(this.name,this,n),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,i;typeof this._$AH=="function"?this._$AH.call((i=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&i!==void 0?i:this.element,e):this._$AH.handleEvent(e)}}class Ue{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){O(this,e)}}const et={P:"$lit$",A,M:ue,C:1,L:je,R:Le,D:De,V:O,I:N,H:F,N:Be,U:Ie,B:Ne,F:Ue},Se=q.litHtmlPolyfillSupport;Se==null||Se(R,N),((ie=q.litHtmlVersions)!==null&&ie!==void 0?ie:q.litHtmlVersions=[]).push("2.5.0");const tt=(s,e,t)=>{var i,n;const r=(i=t==null?void 0:t.renderBefore)!==null&&i!==void 0?i:e;let o=r._$litPart$;if(o===void 0){const c=(n=t==null?void 0:t.renderBefore)!==null&&n!==void 0?n:null;r._$litPart$=o=new N(e.insertBefore(U(),c),c,void 0,t??{})}return o._$AI(s),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ne,re;let y=class extends D{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;const i=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=i.firstChild),i}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=tt(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!1)}render(){return k}};y.finalized=!0,y._$litElement$=!0,(ne=globalThis.litElementHydrateSupport)===null||ne===void 0||ne.call(globalThis,{LitElement:y});const Pe=globalThis.litElementPolyfillSupport;Pe==null||Pe({LitElement:y});((re=globalThis.litElementVersions)!==null&&re!==void 0?re:globalThis.litElementVersions=[]).push("3.2.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const P=s=>e=>typeof e=="function"?((t,i)=>(customElements.define(t,i),i))(s,e):((t,i)=>{const{kind:n,elements:r}=i;return{kind:n,elements:r,finisher(o){customElements.define(t,o)}}})(s,e);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const st=(s,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(t){t.createProperty(e.key,s)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(t){t.createProperty(e.key,s)}};function S(s){return(e,t)=>t!==void 0?((i,n,r)=>{n.constructor.createProperty(r,i)})(s,e,t):st(s,e)}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var oe;((oe=window.HTMLSlotElement)===null||oe===void 0?void 0:oe.prototype.assignedElements)!=null;const C=w`


  h1 {
    font-size: 2rem;
    line-height: 1.2;
    letter-spacing: -.04rem;
  }

  h2 {
    font-size: 1.5rem;
    line-height: 1.2;
    letter-spacing: -.04rem;
    margin:0;
    padding-top: .4rem;
  }

  h3 {
    margin: 0 0 .3rem;
    font-size: 1.125rem;
    letter-spacing: -.04rem;
    line-height: 1.2;
    font-weight:500;
  }

  h4 {
    font-size: 1.08rem;
    margin: 0 0 .6rem;
    line-height: 1.2;
    font-weight:600;
  }


  .liststylenone {
    list-style:none;
    padding-inline-start: 0rem;
    margin:0;
  }

  .liststylearrow {
    text-align:left;
    padding-inline-start: 1.25rem;
  }

  .liststylearrow li:before{
    margin-right:0.5rem;
    left:0;
  }


  .separator-before::before{
    content:"- ";
  }

  .space-before::before{
    content:"\u00a0";
  }

  .displayflex {
    display:flex;
  }
  
  .inline {
    display:inline-flex;
  }


  .bottom-space-10 {
    padding-bottom:0.625;
  }


`;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*$(s,e){if(s!==void 0){let t=0;for(const i of s)yield e(i,t++)}}const He=w`
    button {
        border-radius: 0.25rem;
        border: none;
        padding: 0.6rem 1.2rem;
        font-size: 1rem;
        font-weight: 500;
        font-family: inherit;
        background-color: var(--dark-color-soft);
        cursor: pointer;
        transition: border-color 0.25s;
        margin: 1rem 0;
    }
    button:hover {
        border-color: #646cff;
    }
    button:focus,
    button:focus-visible {
        outline: 0.25rem auto -webkit-focus-ring-color;
    }
`,T=w`
    .title-bar {
        min-width:100%;
        margin-top: 2rem;
        padding: .4rem 0;
        border-top: 0.25rem solid var(--dark-color-soft);
        border-bottom: 0.125rem solid var(--dark-color-soft);
        display:inline-flex;
        justify-content: space-between;
        align-content:center;
    }
    @media all and (max-width:765px){
        .title-bar{
            display:block;
            justify-content:center;
        }
    }
`,v=[{basics:{name:"Sandrine Pradier",email:"sandrine.pradier@gmx.fr",phone:"0660440776",photo:{url:"https://media.licdn.com/dms/image/C4D03AQFXli1ds9eBaA/profile-displayphoto-shrink_200_200/0/1516900244377?e=1678320000&v=beta&t=WBZMGfzay8OoUEhGk-oZiimmvkwzOZun0QnA-SpLdko",filters:{size:128,shape:"square",border:!1,grayscale:!1},visible:!0},objectives:"Intégrer une équipe dev Angular dans le cadre d'une mission longue durée",summary:"Reconvertie dans le développement web à 42 ans, j'ai déjà un riche parcours professionnel et entrepreneurial. Ce qui m'anime ? Concevoir, développer et améliorer un produit, en intégrant aussi bien les enjeux business que les attentes de l’utilisateur. Et si je peux le faire en équipe et apprendre en même temps, c'est mieux !",website:"spwebdev.io",headline:"Développeur web",location:{city:"",region:"",address:"Lieusaint",country:"France",postalCode:"77127"},profiles:[{network:"Twitter",username:"sandypradier",url:"twitter.com/sandypradier",id:"86709a75-0ca0-4904-bfce-67493541f3f7"},{network:"LinkedIn",username:"sandrine-pradier",url:"linkedin.com/in/sandrine-pradier",id:"76279dce-cd74-42fa-89f3-a05e6b4839ed"},{network:"GitHub",username:"SpWebDevPro",url:"github.com/SpWebDevPro",id:"6b1df516-12bd-4fb7-bc4e-a7834ac9f9ce"},{network:"Instagram",username:"spwebdev",url:"instagram.com/spwebdev",id:"e7750bff-36b3-4434-b47e-9b3477a5a341"},{network:"Facebook",username:"spwebdevi",url:"facebook.com/spwebdevi/ ",id:"c8fc89eb-6643-44b8-b45f-61016f5b92a3"}],birthdate:"1976-07-27"},sections:{work:{id:"work",name:"Expériences professionnelles",type:"work",items:[{name:"Spwebdev",sector:"",position:"Web Developer Freelance",date:{start:"2018-12-31T23:00:00.000Z",end:""},url:"https://spwebdev.io",summary:"=> Accompagnement des TPE/PME dans le développement de leur activité via le digital",achievements:`- Conception et développement de sites web vitrines, e-commerce, blog, plateforme web
- Projet RESEA : Conception de développement d'une application de prise de rendez-vous en ligne 
- Service d'hébergement et maintenance
- Conseil en visibilité web`,id:"0acc612f-89bd-4213-bba4-b40e75b6f9f9"},{name:"Simplon Sénart",sector:"Fabrique numérique solidaire (Grande Ecole Numérique)",position:"Web Developer - Stagiaire de la formation professionnelle",date:{start:"2017-08-31T22:00:00.000Z",end:"2018-06-29T22:00:00.000Z"},url:"https://simplon.co",summary:"=> Préparation du titre professionnel développeur logiciel",achievements:`- Projet MYBOOKINGAPP - Projet individuel et dossier professionnel : Développement Full Stack  
- Projet MILOLIB - Projet d’équipe pour la MDEF : Product Owner et Développeur Front End, présentation du projet lors du séminaire 'Grand Paris Sud nouveau territoire de l’économie numérique'
- Stage chez Absymédias ( 1 mois) : Participer au développement back-end d’une application de communication pour les réseaux automobiles.
- Mini projets d’apprentissage : Développement d’applications Front-End, Back-End, et Full-Stack
`,id:"36c92c2a-8be2-449b-8698-fee918a3890d"},{name:"Impérial Brands",sector:"4ème fabricant mondial de cigarettes, CA 34 000 M€",position:"User support & Product Owner",date:{start:"2015-12-31T23:00:00.000Z",end:"2017-04-30T22:00:00.000Z"},url:"https://www.imperialbrandsplc.com/",summary:"=> Participation au projet de conception de logiciel PLM, département Print Development - En mode agile (Scrum)",achievements:`- Organisation de Key user meeting 
- Rédaction de users stories, priorisation, gestion du product backlog (JIRA)
- Participation aux réunions weekly stand up meeting, sprint planning
- Test et validation, organisation des User Acceptance Test
- Support utilisateur après les releases, rédaction de guides utilisateurs, training équipes métiers
- Aide à la résolution des bugs, rédaction des findings`,id:"b3ce4bb8-cdf2-456c-854d-43ad42bd6cf9"},{name:"Impérial Brands",sector:"4ème fabricant mondial de cigarettes, CA 34 000 M€",position:"Coordinatrice Print development (EUTPD Taskforce Member)",date:{start:"2012-12-31T23:00:00.000Z",end:"2015-12-31T23:00:00.000Z"},url:"https://www.imperialbrandsplc.com/",summary:`=> Projet European Commission - The Tobacco Products Directive : Coordination des approbations des Health Warning Templates / Interface entre les marchés et l’équipe interne dédiée
`,achievements:`- Construction d’un outil de tracking
- Centralisation des demandes de création de templates, suivi des développements, et des approbations
- Participation au weekly EUTPD Taskforce meeting
- Gestion des priorités et risques OOS
`,id:"25ce9c2b-a48c-4a67-b347-1d7e2de4e9b5"},{name:"D2IS - La Belle Affranchie",sector:"Création et distribution de lingerie grande taille - dans 15 points de vente + vente en ligne",position:"Founder & Owner",date:{start:"2011-12-31T23:00:00.000Z",end:"2014-12-31T23:00:00.000Z"},url:"https://www.pinterest.fr/lingerie1172/la-belle-affranchie-lingerie-grande-taille/",achievements:`- Etude marché et branding
- Design produit, prototypage, animation ateliers essayages
- Lancement et suivi de fabrication (Thaïlande)
- Création et gestion du site internet, community management
- Prospection et gestion commerciale
- Animation vente en réunion
- Mise en place d’une stratégie de stocks centralisés, service de dropshipping
- Organisation événementielle “Real Women Happy Women” / défilés Pulp Fashion Week`,summary:"=> Gestion la marque du design à la vente",id:"fa826ebd-c992-4bb9-bc0e-83c934fc21a0"},{name:"Impérial Brands",sector:"4ème fabricant mondial de cigarettes, CA 34 000 M€",position:"Support & Coordinatrice Print Development",date:{start:"2010-12-31T23:00:00.000Z",end:"2011-12-29T23:00:00.000Z"},url:"https://www.imperialbrandsplc.com/",summary:`=> Département Product & Packaging Development
Initiation dans le système des projets de développement Print packaging, en étroite relation avec les print specialists, agences, graphistes, imprimeurs, usines, pour les marchés Western Europe, Africa & Middle East, Duty Free
`,achievements:`- Initiation de 1500 Artwork annuels sur  98 marchés
- Gestion de projets changement de prix et migration de marque
`,id:"9c26f64f-bed2-4af4-ad25-472dbbb74f98"},{name:"Sourcing & Design Ressources",sector:"Commerce inter-entreprises secteur balnéaire, lingerie et chaussant",position:"Founder & Owner",date:{start:"2007-12-31T23:00:00.000Z",end:"2011-12-29T23:00:00.000Z"},url:"",summary:"=> Création de collections et développement commercial pour le compte d’usines étrangères (Chine, Inde)",achievements:"",id:"36a99fbd-7522-4340-91ec-1ffcf4e0d552"},{name:"MIM - Groupe New Look",sector:"Prêt-à-porter, lingerie et accessoires de mode",position:"Senior Buyer / Product Manager",date:{start:"2004-12-31T23:00:00.000Z",end:"2008-12-29T23:00:00.000Z"},url:"https://www.newlook.com/fr/",summary:`=> Lancement et développement des gammes lingerie, chaussant et maillot de bain - Référencement lingerie de 60 à 240 boutiques, et multiplication du CA par 3 par magasin sur espace fixe
`,achievements:`- Analyse de marché, suivi des tendances
- Lesson learnt, plan de collection, analyse des performances
- Stylisme, dossiers techniques, prototypage, et validation des produits
- Sourcing international, négociation
- Achat, gestion budgétaire,
- Range review et buying sessions
- Visuel merchandising`,id:"bb102f61-62b3-4ae3-84fb-35968c3c72c9"},{name:"Body One, Morgan, Jennyfer",sector:"Prêt-à-porter et lingerie féminine",position:"Buyer / Product Manager",date:{start:"1997-12-31T23:00:00.000Z",end:"2004-12-29T23:00:00.000Z"},url:"",summary:"",achievements:"",id:"e045b028-8ad1-4dfe-83aa-2b1a4e678f46"}],columns:2,visible:!0},awards:{id:"awards",name:"Awards",type:"basic",items:[],columns:2,visible:!1},skills:{id:"skills",name:"Compétences",type:"basic",items:[{name:"Développement Web",level:"",levelNum:0,keywords:["Développement Front","Développement Back","Gestion des données","Tests et déploiement","Recherche de solutions techniques","Web design","Responsive design","Référencement 'on site'"],id:"d6c4db6d-c525-4c10-b914-4c5ddd3d9b74"},{name:"Technos",level:"",levelNum:0,keywords:["Javascript","Typescript","HTML","CSS","NodeJS","Angular","VueJs","Rxjs","ViteJs","LitJs","PWA","GoogleAppScript","Git","Wordpress"],id:"54874569-329c-40ae-9327-581d6fe26b83"},{name:"Gestion de projet, Business & Product management",level:"",levelNum:0,keywords:["Scrum PSPO","Formation utilisateurs","Relations clients","Recueil des besoins utilisateurs","Analyse de marché","Définition et suivi de KPI","Positionnement et stratégie produit"],id:"ecd51396-9a65-4530-98e5-2d9103afe9ad"}],columns:1,visible:!0},projects:{id:"projects",name:"Quelques projets",type:"basic",items:[{id:"558d6a88-4605-4190-80c9-6dd1644466eb",url:"https://reseademomobile.web.app/",date:{end:"2021-12-01",start:"2019-01-01"},name:"RESEA",summary:`Progressive Web App
-> Front développé en Typescript avec Angular : permet de créer un compte utilisateur, choisir les services proposés,  le prestataire, un créneau horaire parmi les plages proposées, renseigner ses infos et obtenir une confirmation de RDV. Le front est personnalisé avec logo et couleurs de l'entreprise. Les clients finaux ont la possibilité d'installer l'application sur leur mobile, grâce au format PWA.
-> Back en PHP via plugin sous Wordpress et création de endpoints REST API. Création des prestations, personnalisation des messages, des services, des disponibilités. Confirmations envoyées par mail, par sms, et synchronisation avec Google Calendar et google contacts.`,keywords:["Typescript","HTML","CSS","Angular","PWA","GoogleAppScript"],description:"Application de réservation en ligne, téléchargeable en version mobile (progressive web app)"},{id:"cdcf15a0-f545-4971-8904-0dc679612500",url:"https://github.com/alihasana/MILOLIB",date:{end:"",start:"2018-01-01"},name:"MILOLIB",summary:`Projet présenté lors du séminaire 'Grand Paris Sud nouveau territoire de l’économie numérique' en présence de Mounir Mahjoubi, alors secrétaire d’État auprès du premier ministre chargé du numérique.
Product Owner et Développeur Front sur la partie Calendrier
-> Fronts développés en Javascript avec VueJs : 
1/ Front client permet à l'utilisateur de sélectionner des disponibilités
2/ Front permet de créer ses disponibilités
`,keywords:["VueJS","NodeJS","ExpressJS","MongoDB","CSS","SCSS","Bootstrap"],description:"Projet d’équipe pour la Maison de l’emploi et de la Formation de Sénart : réalisation d’un prototype de prise de rendez-vous et gestion d’agenda en ligne pour les conseillers de la MDEF afin d'ouvrir leurs RDV aux jeunes en demande de suivi"},{id:"9b9fa5c3-a1de-4dcb-a9cb-8c371cb7aba0",url:"https://github.com/SandrinePradier/distime",date:{end:"",start:"2018-06-01"},name:"DISTIME",summary:`-> Front développé en Javascript avec VueJs : pour lancer les batchs de recueil de données
-> Back en Javascript  sous NodeJS : lancement et traitement des requetes aux différentes API et enregistrement des datas en base de donnée
-> BDD : MongoDB
Les différentes API source informations utilisées pour le projet sont :
*https://api.gouv.fr/api/api-geo.html (liste des communes Ile de France)
*https://www.data.gouv.fr/fr/datasets/arrondissements-1/ (détails  des arrondissements de Paris)
*https://www.navitia.io (temps de transports)
*https://api.mapbox.com/directions/v5/mapbox/driving (distance et temps de transports voiture)`,keywords:["NodeJS","ExpressJS","VueJS","MongoDB"],description:"Automatisation de la création d'une base de donnée : construction d' une routine qui interroge plusieurs API et récupération  des informations pour compléter la base de données de manière automatique"},{id:"686e02d5-d748-429f-b503-3617f35537b6",url:"https://drive.google.com/drive/folders/1ABpD6BcSkX6VA4QbFGattGCrwVfuXo8T?usp=share_link",date:{end:"",start:"2020-01-01"},name:"ESSENTIELLES BEAUTE",summary:`Développé sous Wordpress, avec Woocommerce et Dokan pour la partie dashboard entreprise.
Module de géolocalisation pour trouver une boutique autour de soi`,keywords:["Wordpress","PHP","HTML","CSS"],description:"Création d'une plateforme de vente en ligne pour que les commerces 'non-essentiels' du secteur de la beauté puisse vendre des bons cadeaux pendant le confinement"},{id:"f17fd9d3-6bf0-4320-8077-14cdb3930d11",url:"https://github.com/SandrinePradier/BookingAppFront",date:{end:"",start:"2018-01-01"},name:"BookingApp",summary:`-> Front utilisateur final et front entreprise développé en Javascript avec VueJs  et Vuetify
-> Backend en Javascript, sous NodeJs
-> Base de données non relationnelle MongoDB`,keywords:["NodeJS","ExpressJS","MongoDB","VueJS","Vuetify"],description:"Projet présenté dans le cadre du titre professionnel “Développeur Logiciel” niveau III est une application de prise de rendez-vous en ligne"},{id:"59581f61-d046-482e-8aae-111a452293d2",url:"https://automobile-majordome.fr/",date:{end:"",start:"2022-01-01"},name:"Automobile Majordome",summary:`Site classique Wordpress + mise en place de blog
Création de templates annonces avec champs de données spécifiques avec ACF et API rest Wordpress, et Javascript`,keywords:["Wordpress","Javascript","PHP"],description:"Création d'un site Web qui permet à l'entreprise de présenter ses services et mettre en avant des annonces de vente ou recherche de véhicules"},{id:"d66f5025-5853-429e-b69c-533a496e66e1",url:"https://kallia-immobilier.fr/",date:{end:"",start:"2021-01-01"},name:"Kallia immobilier",summary:`Site classique Wordpress + mise en place de blog
Création de templates localisation avec champs de données spécifiques ACF.`,keywords:["Wordpress","SEO"],description:"Création d'un site web vitrine + pages de locations /FAQ pour booster le SEO"}],columns:2,visible:!0},education:{id:"education",name:"Formations",type:"basic",items:[{id:"eb9e8d7a-98f6-430a-997b-1b7348726cde",url:"simplon.co",area:"Formation Développeur Logiciel Web",date:{end:"2018-06-29T22:00:00.000Z",start:"2017-08-31T22:00:00.000Z"},score:"",degree:"Titre professionnel Développeur logiciel (niveau III)",courses:[],summary:"",institution:"Simplon Sénart"},{id:"12da556e-ba2c-4788-bc21-735fdada7240",url:"modspeparis.com",area:"",date:{end:"1998-08-29T22:00:00.000Z",start:"1995-12-31T23:00:00.000Z"},score:"",degree:"Marketing et gestion commerciale des entreprises de mode (Bac+4)",courses:[],summary:"",institution:"MOD SPE Paris - Fashion Business School"},{id:"f2d3937f-05fa-4219-996f-f451776d637a",url:"",area:"Spécialisation achats",date:{end:"1996-08-29T22:00:00.000Z",start:"1995-08-31T22:00:00.000Z"},score:"",degree:"Licence Management de la fonction commerciale et achat",courses:[],summary:"",institution:"Institut Universitaire Professionnalisé Pierre Mendès France, Grenoble"},{institution:"PNDF",degree:"BAC C (mention AB)",area:"",score:"",date:{start:"1992-08-31T22:00:00.000Z",end:"1993-06-29T22:00:00.000Z"},url:"",summary:"",courses:[],id:"fab86a7c-8978-4256-a7c5-6cf1a10aab5d"}],columns:4,visible:!0},interests:{id:"interests",name:"Centres d'intérêts",type:"basic",items:[{name:"Course à pied",keywords:[],id:"1e864a8a-8f22-43be-b4f4-f3f09913aa0a"},{name:"Fit",keywords:[],id:"892231a8-7e9d-4d68-9bc8-3d4f112b7918"},{name:"Piano",keywords:[],id:"bb574e31-e964-4964-b9f0-c72010221f07"},{name:"Couture",keywords:[],id:"056227a5-0db8-4f66-af67-e1e7841d765d"}],columns:null,visible:!0},languages:{id:"languages",name:"Langues",type:"basic",items:[{id:"a071b581-5d41-48c1-b7f6-2de133102a95",name:"Anglais",level:"Courant",levelNum:0},{id:"128982e6-9db0-4207-bef8-08aa08f7d9d7",name:"Espagnol",level:"Scolaire",levelNum:0}],columns:2,visible:!0},volunteer:{id:"volunteer",name:"Bénévolat",type:"basic",items:[{organization:"nop",position:"Développeur Web",date:{start:"2020-01-01",end:"2020-12-31"},url:"",summary:"Création et mise à disposition d'une plateforme de vente en ligne 'lieusaint-fêtes' pour les commerçants restaurateurs de ma ville pendant les fêtes, en 2020 ",id:"41840b04-de48-4dfc-8f2c-f0e312e7a779"},{organization:"CitésLab",position:"Formatrice",date:{start:"2020-01-01",end:"2020-01-31"},url:"",summary:"Animation d'un atelier de formation Wordpress à l'association CitésLab, Espace pour Entreprendre à Choisy le Roi, en 2019",id:"360ea58f-7397-4b5b-8caa-09132280d08d"},{organization:"Senartech",position:"Membre actif",date:{start:"2018-01-01",end:"2019-01-01"},url:"",summary:"Soutien pour la promotion du numérique sur le territoire de Grand Paris Sud, pour l'association SenarTech, en 2018/2019",id:"92f44425-25e3-4013-9396-fb4207edb5f3"}],columns:2,visible:!1},references:{id:"references",name:"References",type:"basic",items:[],columns:2,visible:!1},publications:{id:"publications",name:"Publications",type:"basic",items:[],columns:2,visible:!1},certifications:{id:"certifications",name:"Formations courtes & Certifications ",type:"basic",items:[{id:"",url:"",date:{end:"Aujourd'hui",start:"2019-06-29T22:00:00.000Z"},name:"Formations en ligne : Angular, 100days Of Code, Typescript, Angular progessive Web Apps, Javascript, Node JS ",issuer:"Udemy.com",summary:""},{name:"Certification Google Atelier Numérique ",issuer:"Google",date:{end:"",start:"2019-12-31T23:00:00.000Z"},url:"",summary:"",id:"fba137e3-7868-45e2-b307-89ac8f9e65dd"},{id:"abd899cc-f04e-454a-9d74-c52e96f71a12",url:"",date:{end:"",start:"2016-12-31T23:00:00.000Z"},name:"Professional Scrum Product Owner training ",issuer:"Scrum.org",summary:""},{name:"Conseil en évolution professionnelle ",issuer:"APEC",date:{end:"",start:"2016-12-31T23:00:00.000Z"},url:"",summary:"",id:"747619a2-8d02-41c7-be0f-b0c9febb76de"}],columns:1,visible:!0}},metadata:{css:{value:`/* Enter custom CSS here */

header {
    margin-bottom:20px;
}
#Kakuna_work div{
    text-align: left;
}
div#0acc612f-89bd-4213-bba4-b40e75b6f9f9{
    text-align:left;
}
h3 {
margin-top:20px;
background-color: yellow;
}

span.opacity-75{
    font-weight: bold;
    background-color: bisque;
    width: fit-content;

}`,visible:!0},date:{format:"YYYY"},page:{format:"A4"},theme:{text:"#000000",primary:"#222222",background:"#ffffff"},layout:[[["skills","work","projects","education","volunteer","references"],["interests","languages","awards","certifications","publications"]]],locale:"fr",template:"kakuna",typography:{size:{body:14,heading:28},family:{body:"Open Sans",heading:"Open Sans"}}},public:!0}],it="/OnlineCV/assets/avatar-1954e9b2.jpg",nt="/OnlineCV/assets/icon-facebook-ce09e568.svg",rt="/OnlineCV/assets/icon-github-2fab4de3.svg",ot="/OnlineCV/assets/icon-instagram-1dc88a37.svg",at="/OnlineCV/assets/icon-linkedin-90f25a09.svg",lt="/OnlineCV/assets/icon-twitter-e39a6280.svg",dt="/OnlineCV/assets/icon-website-2e471a0a.svg",ct="/OnlineCV/assets/icon-phone-c440837f.svg",ut="/OnlineCV/assets/icon-email-d3938825.svg";var pt=Object.defineProperty,mt=Object.getOwnPropertyDescriptor,Re=(s,e,t,i)=>{for(var n=i>1?void 0:i?mt(e,t):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(n=(i?o(e,t,n):o(n))||n);return i&&n&&pt(e,t,n),n};let z=class extends y{constructor(){super(...arguments),this.resume=v[0],this.contactphone=this.resume.basics.phone,this.contactemail=this.resume.basics.email,this.contactwebsite=this.resume.basics.website,this.socialprofiles=this.resume.basics.profiles,this.socialmap=[{image:nt,name:"facebook"},{image:rt,name:"github"},{image:ot,name:"instagram"},{image:at,name:"linkedin"},{image:lt,name:"twitter"}],this.imageurl=this.getImageUrl(),this.imagedisplay="block",this.width="20px"}render(){for(let s of this.socialprofiles)for(let e of this.socialmap)s.network.toLowerCase()===e.name&&(s.image=e.image);return p`
      <div>
        <img src=${this.imageurl} alt="photo ${this.resume.basics.name}" class="avatar ${this.imagedisplay}">
        <h1 class="header-name">${this.resume.basics.name}</h1>
        <div class="title-bar header-title">
          <h2>${this.resume.basics.headline}</h2>
          <div class="icon-links displayflex">
            <ul class=liststylenone>
              <li class="icon-link-item"><a href="tel:${this.contactphone}" ><img src=${ct} alt="${this.contactphone}" width="${this.width}" height="${this.width}" /></a></li>
              <li class="icon-link-item"><a href="mailto:${this.contactemail}" ><img src=${ut} alt="${this.contactemail}" width="${this.width}" height="${this.width}" /></a></li>
            </ul>
            <ul class="liststylenone">
              ${$(this.socialprofiles,s=>p`<li class="icon-link-item"><a href="${s.url}" class="icon-link" ><img src=${s.image} alt="${s.network} logo" width="${this.width}" height="${this.width}" /></a></li>`)}
            </ul>
            <ul class=liststylenone>
              <li class="icon-link-item"><a href="${this.contactwebsite}" ><img src=${dt} alt="${this.contactwebsite}" width="${this.width}" height="${this.width}" /></a></li>
            </ul>
          </div>
        </div>
        <div class="header-summary">
          <strong>Objectif : 
          ${this.resume.basics.objectives}</strong>
        </div>
        <div class="header-summary">
          ${this.resume.basics.summary}
       <!--  </div>
        <button>Télécharger le CV</button>
        </div> -->
      </div>
    `}getImageUrl(){return this.resume.basics.photo.visible?this.resume.basics.photo.url?this.imageurl=this.resume.basics.photo.url:this.imageurl=it:(this.imageurl="",this.imagedisplay="none"),this.imageurl}};z.styles=[He,C,T,w`

      .header-name {
        text-align: center;
        margin: 1rem 0 0;
      }
      @media all and (max-width:765px){
        .header-title {
          padding:1rem 0;
        }
      }
      .avatar {
        width: 5.9rem;
        max-width: 100%;
        overflow: hidden;
        margin: 0 auto;
        display: block;
        border-radius:100%;
      }
    
      .icon-links {
        margin: 0;
        padding-top: .8rem;
        padding-left: .4rem;
      }
      @media all and (max-width:765px){
        .icon-links{
          display:inline-flex;
          padding-left: 0rem;
        }
      }
      
      .icon-link-item {
        display: inline;
        margin-left: .6rem;
      }

      .header-summary {
        margin:1.5rem 0.5rem;
      }
    
    `];Re([S()],z.prototype,"resume",2);z=Re([P("my-header")],z);var ht=Object.defineProperty,ft=Object.getOwnPropertyDescriptor,Ve=(s,e,t,i)=>{for(var n=i>1?void 0:i?ft(e,t):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(n=(i?o(e,t,n):o(n))||n);return i&&n&&ht(e,t,n),n};let Z=class extends y{constructor(){super(...arguments),this.experiences=v[0].sections.work.items,this.title=v[0].sections.work.name}render(){let s;for(let t of this.experiences)s=t.summary.split(`
`),t.summaryline=s;let e;for(let t of this.experiences)e=t.achievements.split(`
`),t.achievementline=e;return p`
      <div>
        <div class="title-bar">
          <h2>${this.title}</h2>
        </div>
          <ul class="liststylenone work-list">
            ${$(this.experiences,t=>p`
                <li class="resume-item">
                  ${this.checkDisplayLinkUrl(t.url)?p`
                    <h3><a href=${t.url}>${t.name}</a></h3>
                  `:p`
                    <h3>${t.name}</h3>
                  `}
                        <i>${t.sector}</i>
                        <h4>${t.position} &bull; ${this.formatDate(t.date.start)} - ${this.formatDate(t.date.end)}</h4>
                        <ul class="liststylenone summary">
                          ${$(t.summaryline,i=>p`<li >${i}</li>`)}
                        </ul>
                        <ul class="liststylenone">
                          ${$(t.achievementline,i=>p`<li >${i}</li>`)}
                        </ul>
                </li>`)}
          </ul>
        
      </div>
  
      
    `}formatDate(s){return s?new Date(s).getFullYear():"Aujourd'hui"}checkDisplayLinkUrl(s){return s!==""}};Z.styles=[He,C,T,w`
      .resume-item { 
          margin-bottom: 2rem; 
          list-style:none;
          text-align:left;
      }
      .work-list{
        margin:2rem 0;
      }
      .work-list h3{
        font-weight:400;
        margin-bottom:0.3rem;
      }
      i{
        padding-top:0;
      }
      h4 {
        padding-top:0.1rem;
        margin-bottom:0.3rem;
      }
      .summary {
        padding-bottom:0.3rem;
        font-weight:500;
      }
      @media all and (max-width:765px){
        .work-list{
          margin-bottom:3rem;
        }
      }
     
      
    `];Ve([S()],Z.prototype,"experiences",2);Z=Ve([P("my-work")],Z);var gt=Object.defineProperty,vt=Object.getOwnPropertyDescriptor,Fe=(s,e,t,i)=>{for(var n=i>1?void 0:i?vt(e,t):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(n=(i?o(e,t,n):o(n))||n);return i&&n&&gt(e,t,n),n};let G=class extends y{constructor(){super(...arguments),this.title=v[0].sections.skills.name,this.subtitle1=v[0].sections.skills.items[0].name,this.subtitle2=v[0].sections.skills.items[2].name,this.skillgroupe1=v[0].sections.skills.items[0].keywords,this.skillgroupe2=v[0].sections.skills.items[2].keywords}render(){return p`
      <div>
        <div class="title-bar">
          <h2>${this.title}</h2>
        </div>
        <div class="displayflex center skill-list">
          <div class="skills-sublist">
            <h3>${this.subtitle1}</h3>
            <ul class ="liststylearrow" >
              ${this.skillgroupe1.map(s=>p`<li>${s}</li>`)}
            </ul>
          </div>
          <div class="skills-sublist">
            <h3>${this.subtitle2}</h3>
            <ul class ="liststylearrow">
              ${this.skillgroupe2.map(s=>p`<li>${s}</li>`)}
            </ul>
          </div>
          </div>
      </div>
  
      
    `}};G.styles=[C,T,w`
        .displayflex {
            display:flex;
        }
        .center{
            justify-content:center;
        }
        .skill-list{
            margin:2rem ;
        }
        @media all and (max-width:980px){
          .skill-list{
            margin:2rem 0;
          }
        }
        .skills-sublist{
          width:50%;
        }
        .skills-sublist h3 {
          font-size:1.125rem;
          text-align:left;
        }
        @media all and (max-width:480px){
          .skill-list{
            display:block;
    
          }
          .skills-sublist{
            width:100%;
            padding-top:1.2rem;
          }
          .skills-sublist h3{
            text-align:center;
          }
          .skills-sublist ul{
            text-align:center;
            list-style-type:none;
            padding-inline-start:0rem;
          }

        }
       

    `];Fe([S()],G.prototype,"title",2);G=Fe([P("my-skills")],G);class bt{constructor(e,t){this.name=e,this.image=t}}const yt="/OnlineCV/assets/Angular-930aeac7.png",$t="/OnlineCV/assets/CSS-cbc7feb1.png",wt="/OnlineCV/assets/Git-b1023689.png",_t="/OnlineCV/assets/GoogleAppScript-b4e16c58.png",At="/OnlineCV/assets/HTML-e9d68f0f.png",St="/OnlineCV/assets/Javascript-aeab9472.png",Pt="/OnlineCV/assets/LitJs-540cf000.png",Ct="/OnlineCV/assets/NodeJS-8220304b.png",xt="/OnlineCV/assets/PWA-fb4ab0d5.png",Et="/OnlineCV/assets/Rxjs-4812d86c.png",kt="/OnlineCV/assets/Typescript-e504acab.png",Ot="/OnlineCV/assets/ViteJs-8672b976.png",Tt="/OnlineCV/assets/VueJs-0e2fe804.png",Dt="/OnlineCV/assets/Wordpress-8d8e9a68.png";var Mt=Object.defineProperty,jt=Object.getOwnPropertyDescriptor,Je=(s,e,t,i)=>{for(var n=i>1?void 0:i?jt(e,t):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(n=(i?o(e,t,n):o(n))||n);return i&&n&&Mt(e,t,n),n};let K=class extends y{constructor(){super(...arguments),this.technos=v[0].sections.skills.items[1].keywords,this.technosPath=[yt,$t,wt,_t,At,St,Pt,Ct,xt,Et,kt,Ot,Tt,Dt],this.technoMap=[],this.withLogo="35"}render(){for(let s of this.technos)for(let e of this.technosPath)if(this.checkTechnoName(e)===s){let t=new bt(s,e);this.technoMap.push(t)}return p`
      <div class="techno-list">
          <ul class="liststylenone displayflex displaywrap center">
          ${$(this.technoMap,s=>p`<li class="logo-tech"><img src=${s.image} alt="${s.name} logo" width=${this.withLogo} height=${this.withLogo} /></li>`)}
        </ul>
      </div>
    `}checkTechnoName(s){return s.split("/").pop().split(".")[0]}};K.styles=[C,T,w`
      .center{
        justify-content:space-around;
      }
      .logo-tech{
        margin:0.2rem;
      }
      .techno-list{
        margin: 0;
      }
      .displaywrap{
        flex-wrap:nowrap;
      }
      @media all and (max-width:1300px){
        .center{
          justify-content:center;
        }
        .displaywrap {
          flex-wrap:wrap;
        }
        
      }
      @media all and (max-width:480px){
        .techno-list{
          padding-top: 1rem;
        }
      }
    `];Je([S()],K.prototype,"technos",2);K=Je([P("my-technos")],K);var Lt=Object.defineProperty,Nt=Object.getOwnPropertyDescriptor,We=(s,e,t,i)=>{for(var n=i>1?void 0:i?Nt(e,t):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(n=(i?o(e,t,n):o(n))||n);return i&&n&&Lt(e,t,n),n};let Y=class extends y{constructor(){super(...arguments),this.education=v[0].sections.education.items,this.formations=v[0].sections.certifications.items,this.title=v[0].sections.education.name}render(){return p`
      <div>
        <div class="title-bar">
          <h2>${this.title}</h2>
        </div>
        <div class="formation-container">
        <ul class="liststylenone formations-list">
            ${$(this.formations,s=>p`
                <li class="resume-item">
                        <h3 >${s.issuer}</h3>
                        <h4 >${s.name} &bull; <span class="formation-date">${this.formatDate(s.date.start)}</span><span id="tiret"> - </span><span class="formation-date">${this.formatDate(s.date.end)}</span></h4>
                </li>`)}
          </ul>
          <ul class="liststylenone formations-list">
            ${$(this.education,s=>p`
                <li class="resume-item">
                        <h3 >${s.institution}</h3>
                        <h4 >${s.degree} &bull; <span class="formation-date">${this.formatDate(s.date.start)}</span><span class="formation-date"> - ${this.formatDate(s.date.end)}</span></h4>
                </li>`)}
          </ul>
        </div>
      </div>
  
    `}formatDate(s){return s!=="Aujourd'hui"&&s!==""?new Date(s).getFullYear():s==="Aujourd'hui"?" - Aujourd'hui":""}};Y.styles=[C,T,w`
      .formation-container {
        display:inline-grid;
        grid-template-columns: 50% 50%;
        column-gap:2rem;
      }
      .resume-item { 
          margin-bottom: 2rem; 
          list-style:none;
          text-align:left;
      }
      .formations-list{
        margin:2rem 0;
      }
      .formations-list h3{
        font-weight:400;
      }
      .formation-date {
        font-weight:400;
      }
      @media all and (max-width:765px){
        .formation-container{
          margin-top:2rem;
          grid-template-columns: 100%;
        }
        .formations-list{
          margin:0rem 0;
        }
      }
      #tiret{
        display:none;
      }
      
    `];We([S()],Y.prototype,"education",2);Y=We([P("my-training")],Y);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Bt={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},It=s=>(...e)=>({_$litDirective$:s,values:e});class Ut{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this._$Ct=e,this._$AM=t,this._$Ci=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:Ht}=et,Ce=()=>document.createComment(""),I=(s,e,t)=>{var i;const n=s._$AA.parentNode,r=e===void 0?s._$AB:e._$AA;if(t===void 0){const o=n.insertBefore(Ce(),r),c=n.insertBefore(Ce(),r);t=new Ht(o,c,s,s.options)}else{const o=t._$AB.nextSibling,c=t._$AM,l=c!==s;if(l){let a;(i=t._$AQ)===null||i===void 0||i.call(t,s),t._$AM=s,t._$AP!==void 0&&(a=s._$AU)!==c._$AU&&t._$AP(a)}if(o!==r||l){let a=t._$AA;for(;a!==o;){const b=a.nextSibling;n.insertBefore(a,r),a=b}}}return t},E=(s,e,t=s)=>(s._$AI(e,t),s),Rt={},Vt=(s,e=Rt)=>s._$AH=e,Ft=s=>s._$AH,ae=s=>{var e;(e=s._$AP)===null||e===void 0||e.call(s,!1,!0);let t=s._$AA;const i=s._$AB.nextSibling;for(;t!==i;){const n=t.nextSibling;t.remove(),t=n}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const xe=(s,e,t)=>{const i=new Map;for(let n=e;n<=t;n++)i.set(s[n],n);return i},Jt=It(class extends Ut{constructor(s){if(super(s),s.type!==Bt.CHILD)throw Error("repeat() can only be used in text expressions")}ht(s,e,t){let i;t===void 0?t=e:e!==void 0&&(i=e);const n=[],r=[];let o=0;for(const c of s)n[o]=i?i(c,o):o,r[o]=t(c,o),o++;return{values:r,keys:n}}render(s,e,t){return this.ht(s,e,t).values}update(s,[e,t,i]){var n;const r=Ft(s),{values:o,keys:c}=this.ht(e,t,i);if(!Array.isArray(r))return this.ut=c,o;const l=(n=this.ut)!==null&&n!==void 0?n:this.ut=[],a=[];let b,u,d=0,m=r.length-1,h=0,f=o.length-1;for(;d<=m&&h<=f;)if(r[d]===null)d++;else if(r[m]===null)m--;else if(l[d]===c[h])a[h]=E(r[d],o[h]),d++,h++;else if(l[m]===c[f])a[f]=E(r[m],o[f]),m--,f--;else if(l[d]===c[f])a[f]=E(r[d],o[f]),I(s,a[f+1],r[d]),d++,f--;else if(l[m]===c[h])a[h]=E(r[m],o[h]),I(s,r[d],r[m]),m--,h++;else if(b===void 0&&(b=xe(c,h,f),u=xe(l,d,m)),b.has(l[d]))if(b.has(l[m])){const _=u.get(c[h]),ee=_!==void 0?r[_]:null;if(ee===null){const me=I(s,r[d]);E(me,o[h]),a[h]=me}else a[h]=E(ee,o[h]),I(s,r[d],ee),r[_]=null;h++}else ae(r[m]),m--;else ae(r[d]),d++;for(;h<=f;){const _=I(s,a[f+1]);E(_,o[h]),a[h++]=_}for(;d<=m;){const _=r[d++];_!==null&&ae(_)}return this.ut=c,Vt(s,a),k}});var Wt=Object.defineProperty,qt=Object.getOwnPropertyDescriptor,pe=(s,e,t,i)=>{for(var n=i>1?void 0:i?qt(e,t):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(n=(i?o(e,t,n):o(n))||n);return i&&n&&Wt(e,t,n),n};let V=class extends y{constructor(){super(),this.title=v[0].sections.projects.name,this.projects=v[0].sections.projects.items,this.tiret=document.createElement("span"),this.tiret.innerText=" - "}render(){let s;for(let e of this.projects)s=e.summary.split(`
`),e.summaryline=s;return p`
      <div>
        <div class="title-bar">
          <h2>${this.title}</h2>
        </div>
          <ul class="liststylenone work-list">
            ${Jt(this.projects,e=>p`
                <li class="resume-item">
                        <h3 ><a href="${e.url}">${e.name}</a></h3>
                        <h4 >${e.description} &bull; <span class="formation-date">${this.formatDate(e.date.start)}</span><span class="formation-date"> <span id="tiret"> - </span> ${this.formatDate(e.date.end)}</span></h4>
                        <ul class="liststylenone inline bottom-space-10">
                          ${$(e.keywords,t=>p`<li class="keywords">${t}</li>`)}
                        </ul>
                          <ul class="liststylenone">
                            ${$(e.summaryline,t=>p`<li class='projet-sum'>${t}</li>`)}
                          </ul>
                </li>`)}
          </ul>
      </div>
    `}formatDate(s){return s!=="Aujourd'hui"&&s!==""?(this.tiret.innerText=" - ",new Date(s).getFullYear()):s==="Aujourd'hui"?" - Aujourd'hui":(this.tiret.innerText="","")}};V.styles=[C,T,w`
      .resume-item { 
          margin-bottom: 2rem; 
          list-style:none;
          text-align:left;
      }
      .work-list{
        margin:2rem 0;
      }
      .work-list h3{
        font-weight:400;
      }
      .keywords {
        background-color: var(--dark-color-soft);
        color:black;
        padding:0.125rem 0.3rem;
        border-radius:0.25rem;
        margin-right:0.5rem;
      }
      @media all and (max-width:765px){
        .inline {
          display:inline-flex;
          flex-wrap:wrap;
        }
        .keywords{
          margin-bottom:0.5rem;
        }
      }
      #tiret{
        display:none;
      }
      .projet-sum{
        overflow-wrap:anywhere;
      }
      
    `];pe([S()],V.prototype,"title",2);pe([S({type:HTMLElement,reflect:!0})],V.prototype,"tiret",2);V=pe([P("my-projects")],V);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Ee(s,e,t){return s?e():t==null?void 0:t()}var zt=Object.defineProperty,Zt=Object.getOwnPropertyDescriptor,qe=(s,e,t,i)=>{for(var n=i>1?void 0:i?Zt(e,t):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(n=(i?o(e,t,n):o(n))||n);return i&&n&&zt(e,t,n),n};let Q=class extends y{constructor(){super(...arguments),this.languages=v[0].sections.languages,this.interests=v[0].sections.interests,this.volunteer=v[0].sections.volunteer}render(){return p`
      <div>
        <div class="title-bar">
            <div class="displayblock content-lang-int">
                <div class=" displayflex">
                    <h4>${this.languages.name} :</h4>
                    <ul class="liststylenone">
                        ${$(this.languages.items,s=>p`
                            <li class="lang-item">
                              ${Ee(s===this.languages.items[0],()=>p`<p class="space-before"> ${s.name} (${s.level})</p>`,()=>p`<p class="separator-before">${s.name} (${s.level})</p>`)}
                            </li>`)}
                    </ul>
                </div>
                <div class="displayflex">
                    <h4>${this.interests.name} :</h4>
                    <ul class="liststylenone">
                        ${$(this.interests.items,s=>p`
                        <li class="lang-item">
                              ${Ee(s===this.interests.items[0],()=>p`<p class="space-before"> ${s.name}</p>`,()=>p`<p class="separator-before">${s.name}</p>`)}
                            </li>`)}
                    </ul>
                </div>
                <div class="displayblock left">
                    <h4>${this.volunteer.name} :</h4>
                    <ul class="liststylenone">
                        ${$(this.volunteer.items,s=>p`
                        <li class="displayflex">
                            - ${s.summary}
                            </li>`)}
                    </ul>
                </div>
            </div>
        </div>
          
        
      </div>
  
      
    `}};Q.styles=[C,T,w`
        .displayblock {
            display:block;
        }
        .displayflex {
            display:flex;
        }
        .content-lang-int{
          padding-top:1.5rem;
          padding-bottom:1.5rem;
        }
        .lang-item { 
            padding-top:0rem;
            list-style:none;
            text-align:left;
            display: inline-flex;
        }
        .lang-item p { 
            margin-top:0rem;
        }
        .lang-content{
            margin:2rem 0;
        }
        .left{
          text-align:left;
        }
        @media all and (max-width:765px){
          .displayflex {
            display:block;
            text-align:left;
            padding-bottom:1.2rem;
        }
        }
      
      
    `];qe([S()],Q.prototype,"languages",2);Q=qe([P("language-interests")],Q);var Gt=Object.defineProperty,Kt=Object.getOwnPropertyDescriptor,ze=(s,e,t,i)=>{for(var n=i>1?void 0:i?Kt(e,t):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(n=(i?o(e,t,n):o(n))||n);return i&&n&&Gt(e,t,n),n};let X=class extends y{constructor(){super(...arguments),this.resume=v[0]}render(){return p`
    <my-header></my-header>
    <my-skills></my-skills>
    <my-technos></my-technos>
    <my-work></my-work>
    <my-training></my-training>
    <my-projects></my-projects>
    <language-interests></language-interests>
      <p class="bottom-info">Ce site a été dévéloppé en Javascript, HTML et CSS avec Lit et Vite</p>
    `}};X.styles=[C,w`
    :host {
      max-width: 55%;
      margin: 0 auto;
      padding: 2rem 0;
      text-align: center;
      overflow-wrap:anywhere;
    }

    @media all and (min-width:765px) and (max-width:1050px){
      :host {
        min-width: 75%;
      }
    }
    @media all and (min-width:480px) and (max-width:764px){
      :host {
        min-width: 80%;
      }
    }
    @media all and (max-width:479px){
      :host {
        min-width: 90%;
      }
    }
    .bottom-info {
      margin-top:3.125rem;
      font-size:0.9rem;
      margin-bottom:0;
    }
  `];ze([S()],X.prototype,"resume",2);X=ze([P("my-element")],X);
