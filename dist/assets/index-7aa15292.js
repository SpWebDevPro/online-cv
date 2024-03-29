(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function t(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerpolicy&&(r.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?r.credentials="include":n.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(n){if(n.ep)return;n.ep=!0;const r=t(n);fetch(n.href,r)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Q=window,de=Q.ShadowRoot&&(Q.ShadyCSS===void 0||Q.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ce=Symbol(),he=new WeakMap;let Ce=class{constructor(e,t,s){if(this._$cssResult$=!0,s!==ce)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(de&&e===void 0){const s=t!==void 0&&t.length===1;s&&(e=he.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),s&&he.set(t,e))}return e}toString(){return this.cssText}};const Ke=i=>new Ce(typeof i=="string"?i:i+"",void 0,ce),$=(i,...e)=>{const t=i.length===1?i[0]:e.reduce((s,n,r)=>s+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+i[r+1],i[0]);return new Ce(t,i,ce)},ze=(i,e)=>{de?i.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):e.forEach(t=>{const s=document.createElement("style"),n=Q.litNonce;n!==void 0&&s.setAttribute("nonce",n),s.textContent=t.cssText,i.appendChild(s)})},fe=de?i=>i:i=>i instanceof CSSStyleSheet?(e=>{let t="";for(const s of e.cssRules)t+=s.cssText;return Ke(t)})(i):i;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var te;const W=window,ge=W.trustedTypes,Ge=ge?ge.emptyScript:"",ve=W.reactiveElementPolyfillSupport,le={toAttribute(i,e){switch(e){case Boolean:i=i?Ge:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,e){let t=i;switch(e){case Boolean:t=i!==null;break;case Number:t=i===null?null:Number(i);break;case Object:case Array:try{t=JSON.parse(i)}catch{t=null}}return t}},Te=(i,e)=>e!==i&&(e==e||i==i),ie={attribute:!0,type:String,converter:le,reflect:!1,hasChanged:Te};let D=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(e){var t;this.finalize(),((t=this.h)!==null&&t!==void 0?t:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((t,s)=>{const n=this._$Ep(s,t);n!==void 0&&(this._$Ev.set(n,s),e.push(n))}),e}static createProperty(e,t=ie){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const s=typeof e=="symbol"?Symbol():"__"+e,n=this.getPropertyDescriptor(e,s,t);n!==void 0&&Object.defineProperty(this.prototype,e,n)}}static getPropertyDescriptor(e,t,s){return{get(){return this[t]},set(n){const r=this[e];this[t]=n,this.requestUpdate(e,r,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||ie}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),e.h!==void 0&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,s=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const n of s)this.createProperty(n,t[n])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const s=new Set(e.flat(1/0).reverse());for(const n of s)t.unshift(fe(n))}else e!==void 0&&t.push(fe(e));return t}static _$Ep(e,t){const s=t.attribute;return s===!1?void 0:typeof s=="string"?s:typeof e=="string"?e.toLowerCase():void 0}u(){var e;this._$E_=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(t=>t(this))}addController(e){var t,s;((t=this._$ES)!==null&&t!==void 0?t:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((s=e.hostConnected)===null||s===void 0||s.call(e))}removeController(e){var t;(t=this._$ES)===null||t===void 0||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])})}createRenderRoot(){var e;const t=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return ze(t,this.constructor.elementStyles),t}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(t=>{var s;return(s=t.hostConnected)===null||s===void 0?void 0:s.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(t=>{var s;return(s=t.hostDisconnected)===null||s===void 0?void 0:s.call(t)})}attributeChangedCallback(e,t,s){this._$AK(e,s)}_$EO(e,t,s=ie){var n;const r=this.constructor._$Ep(e,s);if(r!==void 0&&s.reflect===!0){const o=(((n=s.converter)===null||n===void 0?void 0:n.toAttribute)!==void 0?s.converter:le).toAttribute(t,s.type);this._$El=e,o==null?this.removeAttribute(r):this.setAttribute(r,o),this._$El=null}}_$AK(e,t){var s;const n=this.constructor,r=n._$Ev.get(e);if(r!==void 0&&this._$El!==r){const o=n.getPropertyOptions(r),c=typeof o.converter=="function"?{fromAttribute:o.converter}:((s=o.converter)===null||s===void 0?void 0:s.fromAttribute)!==void 0?o.converter:le;this._$El=r,this[r]=c.fromAttribute(t,o.type),this._$El=null}}requestUpdate(e,t,s){let n=!0;e!==void 0&&(((s=s||this.constructor.getPropertyOptions(e)).hasChanged||Te)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),s.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,s))):n=!1),!this.isUpdatePending&&n&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((n,r)=>this[r]=n),this._$Ei=void 0);let t=!1;const s=this._$AL;try{t=this.shouldUpdate(s),t?(this.willUpdate(s),(e=this._$ES)===null||e===void 0||e.forEach(n=>{var r;return(r=n.hostUpdate)===null||r===void 0?void 0:r.call(n)}),this.update(s)):this._$Ek()}catch(n){throw t=!1,this._$Ek(),n}t&&this._$AE(s)}willUpdate(e){}_$AE(e){var t;(t=this._$ES)===null||t===void 0||t.forEach(s=>{var n;return(n=s.hostUpdated)===null||n===void 0?void 0:n.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((t,s)=>this._$EO(s,this[s],t)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}};D.finalized=!0,D.elementProperties=new Map,D.elementStyles=[],D.shadowRootOptions={mode:"open"},ve==null||ve({ReactiveElement:D}),((te=W.reactiveElementVersions)!==null&&te!==void 0?te:W.reactiveElementVersions=[]).push("1.5.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var se;const V=window,M=V.trustedTypes,be=M?M.createPolicy("lit-html",{createHTML:i=>i}):void 0,S=`lit$${(Math.random()+"").slice(9)}$`,ue="?"+S,Ze=`<${ue}>`,U=document,R=(i="")=>U.createComment(i),H=i=>i===null||typeof i!="object"&&typeof i!="function",Oe=Array.isArray,De=i=>Oe(i)||typeof(i==null?void 0:i[Symbol.iterator])=="function",L=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ye=/-->/g,Ae=/>/g,k=RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),$e=/'/g,we=/"/g,Be=/^(?:script|style|textarea|title)$/i,Ye=i=>(e,...t)=>({_$litType$:i,strings:e,values:t}),p=Ye(1),C=Symbol.for("lit-noChange"),g=Symbol.for("lit-nothing"),Se=new WeakMap,B=U.createTreeWalker(U,129,null,!1),Me=(i,e)=>{const t=i.length-1,s=[];let n,r=e===2?"<svg>":"",o=L;for(let l=0;l<t;l++){const a=i[l];let b,u,d=-1,m=0;for(;m<a.length&&(o.lastIndex=m,u=o.exec(a),u!==null);)m=o.lastIndex,o===L?u[1]==="!--"?o=ye:u[1]!==void 0?o=Ae:u[2]!==void 0?(Be.test(u[2])&&(n=RegExp("</"+u[2],"g")),o=k):u[3]!==void 0&&(o=k):o===k?u[0]===">"?(o=n??L,d=-1):u[1]===void 0?d=-2:(d=o.lastIndex-u[2].length,b=u[1],o=u[3]===void 0?k:u[3]==='"'?we:$e):o===we||o===$e?o=k:o===ye||o===Ae?o=L:(o=k,n=void 0);const h=o===k&&i[l+1].startsWith("/>")?" ":"";r+=o===L?a+Ze:d>=0?(s.push(b),a.slice(0,d)+"$lit$"+a.slice(d)+S+h):a+S+(d===-2?(s.push(void 0),l):h)}const c=r+(i[t]||"<?>")+(e===2?"</svg>":"");if(!Array.isArray(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return[be!==void 0?be.createHTML(c):c,s]};class N{constructor({strings:e,_$litType$:t},s){let n;this.parts=[];let r=0,o=0;const c=e.length-1,l=this.parts,[a,b]=Me(e,t);if(this.el=N.createElement(a,s),B.currentNode=this.el.content,t===2){const u=this.el.content,d=u.firstChild;d.remove(),u.append(...d.childNodes)}for(;(n=B.nextNode())!==null&&l.length<c;){if(n.nodeType===1){if(n.hasAttributes()){const u=[];for(const d of n.getAttributeNames())if(d.endsWith("$lit$")||d.startsWith(S)){const m=b[o++];if(u.push(d),m!==void 0){const h=n.getAttribute(m.toLowerCase()+"$lit$").split(S),f=/([.?@])?(.*)/.exec(m);l.push({type:1,index:r,name:f[2],strings:h,ctor:f[1]==="."?je:f[1]==="?"?Le:f[1]==="@"?Fe:J})}else l.push({type:6,index:r})}for(const d of u)n.removeAttribute(d)}if(Be.test(n.tagName)){const u=n.textContent.split(S),d=u.length-1;if(d>0){n.textContent=M?M.emptyScript:"";for(let m=0;m<d;m++)n.append(u[m],R()),B.nextNode(),l.push({type:2,index:++r});n.append(u[d],R())}}}else if(n.nodeType===8)if(n.data===ue)l.push({type:2,index:r});else{let u=-1;for(;(u=n.data.indexOf(S,u+1))!==-1;)l.push({type:7,index:r}),u+=S.length-1}r++}}static createElement(e,t){const s=U.createElement("template");return s.innerHTML=e,s}}function T(i,e,t=i,s){var n,r,o,c;if(e===C)return e;let l=s!==void 0?(n=t._$Co)===null||n===void 0?void 0:n[s]:t._$Cl;const a=H(e)?void 0:e._$litDirective$;return(l==null?void 0:l.constructor)!==a&&((r=l==null?void 0:l._$AO)===null||r===void 0||r.call(l,!1),a===void 0?l=void 0:(l=new a(i),l._$AT(i,t,s)),s!==void 0?((o=(c=t)._$Co)!==null&&o!==void 0?o:c._$Co=[])[s]=l:t._$Cl=l),l!==void 0&&(e=T(i,l._$AS(i,e.values),l,s)),e}class Ue{constructor(e,t){this.u=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(e){var t;const{el:{content:s},parts:n}=this._$AD,r=((t=e==null?void 0:e.creationScope)!==null&&t!==void 0?t:U).importNode(s,!0);B.currentNode=r;let o=B.nextNode(),c=0,l=0,a=n[0];for(;a!==void 0;){if(c===a.index){let b;a.type===2?b=new j(o,o.nextSibling,this,e):a.type===1?b=new a.ctor(o,a.name,a.strings,this,e):a.type===6&&(b=new Re(o,this,e)),this.u.push(b),a=n[++l]}c!==(a==null?void 0:a.index)&&(o=B.nextNode(),c++)}return r}p(e){let t=0;for(const s of this.u)s!==void 0&&(s.strings!==void 0?(s._$AI(e,s,t),t+=s.strings.length-2):s._$AI(e[t])),t++}}class j{constructor(e,t,s,n){var r;this.type=2,this._$AH=g,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=s,this.options=n,this._$Cm=(r=n==null?void 0:n.isConnected)===null||r===void 0||r}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cm}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&e.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=T(this,e,t),H(e)?e===g||e==null||e===""?(this._$AH!==g&&this._$AR(),this._$AH=g):e!==this._$AH&&e!==C&&this.g(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):De(e)?this.k(e):this.g(e)}O(e,t=this._$AB){return this._$AA.parentNode.insertBefore(e,t)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}g(e){this._$AH!==g&&H(this._$AH)?this._$AA.nextSibling.data=e:this.T(U.createTextNode(e)),this._$AH=e}$(e){var t;const{values:s,_$litType$:n}=e,r=typeof n=="number"?this._$AC(e):(n.el===void 0&&(n.el=N.createElement(n.h,this.options)),n);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===r)this._$AH.p(s);else{const o=new Ue(r,this),c=o.v(this.options);o.p(s),this.T(c),this._$AH=o}}_$AC(e){let t=Se.get(e.strings);return t===void 0&&Se.set(e.strings,t=new N(e)),t}k(e){Oe(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let s,n=0;for(const r of e)n===t.length?t.push(s=new j(this.O(R()),this.O(R()),this,this.options)):s=t[n],s._$AI(r),n++;n<t.length&&(this._$AR(s&&s._$AB.nextSibling,n),t.length=n)}_$AR(e=this._$AA.nextSibling,t){var s;for((s=this._$AP)===null||s===void 0||s.call(this,!1,!0,t);e&&e!==this._$AB;){const n=e.nextSibling;e.remove(),e=n}}setConnected(e){var t;this._$AM===void 0&&(this._$Cm=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}}class J{constructor(e,t,s,n,r){this.type=1,this._$AH=g,this._$AN=void 0,this.element=e,this.name=t,this._$AM=n,this.options=r,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=g}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,s,n){const r=this.strings;let o=!1;if(r===void 0)e=T(this,e,t,0),o=!H(e)||e!==this._$AH&&e!==C,o&&(this._$AH=e);else{const c=e;let l,a;for(e=r[0],l=0;l<r.length-1;l++)a=T(this,c[s+l],t,l),a===C&&(a=this._$AH[l]),o||(o=!H(a)||a!==this._$AH[l]),a===g?e=g:e!==g&&(e+=(a??"")+r[l+1]),this._$AH[l]=a}o&&!n&&this.j(e)}j(e){e===g?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class je extends J{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===g?void 0:e}}const Xe=M?M.emptyScript:"";class Le extends J{constructor(){super(...arguments),this.type=4}j(e){e&&e!==g?this.element.setAttribute(this.name,Xe):this.element.removeAttribute(this.name)}}class Fe extends J{constructor(e,t,s,n,r){super(e,t,s,n,r),this.type=5}_$AI(e,t=this){var s;if((e=(s=T(this,e,t,0))!==null&&s!==void 0?s:g)===C)return;const n=this._$AH,r=e===g&&n!==g||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,o=e!==g&&(n===g||r);r&&this.element.removeEventListener(this.name,this,n),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,s;typeof this._$AH=="function"?this._$AH.call((s=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&s!==void 0?s:this.element,e):this._$AH.handleEvent(e)}}class Re{constructor(e,t,s){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(e){T(this,e)}}const et={P:"$lit$",A:S,M:ue,C:1,L:Me,R:Ue,D:De,V:T,I:j,H:J,N:Le,U:Fe,B:je,F:Re},_e=V.litHtmlPolyfillSupport;_e==null||_e(N,j),((se=V.litHtmlVersions)!==null&&se!==void 0?se:V.litHtmlVersions=[]).push("2.5.0");const tt=(i,e,t)=>{var s,n;const r=(s=t==null?void 0:t.renderBefore)!==null&&s!==void 0?s:e;let o=r._$litPart$;if(o===void 0){const c=(n=t==null?void 0:t.renderBefore)!==null&&n!==void 0?n:null;r._$litPart$=o=new j(e.insertBefore(R(),c),c,void 0,t??{})}return o._$AI(i),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ne,re;let y=class extends D{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;const s=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=s.firstChild),s}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=tt(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!1)}render(){return C}};y.finalized=!0,y._$litElement$=!0,(ne=globalThis.litElementHydrateSupport)===null||ne===void 0||ne.call(globalThis,{LitElement:y});const Ee=globalThis.litElementPolyfillSupport;Ee==null||Ee({LitElement:y});((re=globalThis.litElementVersions)!==null&&re!==void 0?re:globalThis.litElementVersions=[]).push("3.2.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const E=i=>e=>typeof e=="function"?((t,s)=>(customElements.define(t,s),s))(i,e):((t,s)=>{const{kind:n,elements:r}=s;return{kind:n,elements:r,finisher(o){customElements.define(t,o)}}})(i,e);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const it=(i,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(t){t.createProperty(e.key,i)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(t){t.createProperty(e.key,i)}};function _(i){return(e,t)=>t!==void 0?((s,n,r)=>{n.constructor.createProperty(r,s)})(i,e,t):it(i,e)}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var oe;((oe=window.HTMLSlotElement)===null||oe===void 0?void 0:oe.prototype.assignedElements)!=null;const P=$`


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
 */function*A(i,e){if(i!==void 0){let t=0;for(const s of i)yield e(s,t++)}}const He=$`
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
    .button {
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
    .button:hover {
        border-color: #646cff;
    }
    .button:focus,
    .button:focus-visible {
        outline: 0.25rem auto -webkit-focus-ring-color;
    }
`,O=$`
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
`,v=[{basics:{name:"Sandrine Pradier",email:"sandrine.pradier@gmx.fr",phone:"0660440776",photo:{url:"",filters:{size:128,shape:"square",border:!1,grayscale:!1},visible:!0},objectives:"Intégrer une équipe dev Angular dans le cadre d'une mission longue durée",summary:"Reconvertie dans le développement web, j'ai déjà un riche parcours professionnel et entrepreneurial. Ce qui m'anime ? Concevoir, développer et améliorer un produit, en intégrant aussi bien les enjeux business que les attentes de l’utilisateur. J'aspire à partager en équipe",website:"https://spwebdev.io",headline:"Développeur web",location:{city:"",region:"",address:"Lieusaint",country:"France",postalCode:"77127"},profiles:[{network:"Twitter",username:"sandypradier",url:"https://twitter.com/sandypradier",id:"86709a75-0ca0-4904-bfce-67493541f3f7"},{network:"LinkedIn",username:"sandrine-pradier",url:"https://linkedin.com/in/sandrine-pradier",id:"76279dce-cd74-42fa-89f3-a05e6b4839ed"},{network:"GitHub",username:"SpWebDevPro",url:"https://github.com/SpWebDevPro",id:"6b1df516-12bd-4fb7-bc4e-a7834ac9f9ce"},{network:"Instagram",username:"spwebdev",url:"https://instagram.com/spwebdev",id:"e7750bff-36b3-4434-b47e-9b3477a5a341"},{network:"Facebook",username:"spwebdevi",url:"http://facebook.com/spwebdevi/ ",id:"c8fc89eb-6643-44b8-b45f-61016f5b92a3"}],birthdate:"1976-07-27"},sections:{work:{id:"work",name:"Expériences professionnelles",type:"work",items:[{name:"Spwebdev",sector:"",position:"Web Developer Freelance",date:{start:"2018-12-31T23:00:00.000Z",end:""},url:"https://spwebdev.io",summary:"=> Accompagnement des TPE/PME dans le développement de leur activité via le digital",achievements:`- Conception et développement de sites web vitrines, e-commerce, blog, plateforme web
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

}`,visible:!0},date:{format:"YYYY"},page:{format:"A4"},theme:{text:"#000000",primary:"#222222",background:"#ffffff"},layout:[[["skills","work","projects","education","volunteer","references"],["interests","languages","awards","certifications","publications"]]],locale:"fr",template:"kakuna",typography:{size:{body:14,heading:28},family:{body:"Open Sans",heading:"Open Sans"}}},public:!0}],st="data:image/jpeg;base64,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",nt="/online-cv/assets/CV_Sandrine_Pradier_2.pdf",rt="/online-cv/assets/icon-facebook.svg",ot="/online-cv/assets/icon-github.svg",at="/online-cv/assets/icon-instagram.svg",lt="/online-cv/assets/icon-linkedin.svg",dt="/online-cv/assets/icon-twitter.svg",ct="/online-cv/assets/icon-website.svg",ut="/online-cv/assets/icon-phone.svg",pt="/online-cv/assets/icon-email.svg";var mt=Object.defineProperty,ht=Object.getOwnPropertyDescriptor,Ne=(i,e,t,s)=>{for(var n=s>1?void 0:s?ht(e,t):e,r=i.length-1,o;r>=0;r--)(o=i[r])&&(n=(s?o(e,t,n):o(n))||n);return s&&n&&mt(e,t,n),n};let q=class extends y{constructor(){super(...arguments),this.resume=v[0],this.contactphone=this.resume.basics.phone,this.contactemail=this.resume.basics.email,this.contactwebsite=this.resume.basics.website,this.socialprofiles=this.resume.basics.profiles,this.socialmap=[{image:rt,name:"facebook"},{image:ot,name:"github"},{image:at,name:"instagram"},{image:lt,name:"linkedin"},{image:dt,name:"twitter"}],this.imageurl=this.getImageUrl(),this.imagedisplay="block",this.width="20px"}render(){for(let i of this.socialprofiles)for(let e of this.socialmap)i.network.toLowerCase()===e.name&&(i.image=e.image);return p`
      <div>
        <img src=${this.imageurl} alt="photo ${this.resume.basics.name}" class="avatar ${this.imagedisplay}">
        <h1 class="header-name">${this.resume.basics.name}</h1>
        <div class="title-bar header-title">
          <h2>${this.resume.basics.headline}</h2>
          <div class="icon-links displayflex">
            <ul class=liststylenone>
              <li class="icon-link-item"><a href="tel:${this.contactphone}" ><img src=${ut} alt="${this.contactphone}" width="${this.width}" height="${this.width}" /></a></li>
              <li class="icon-link-item"><a href="mailto:${this.contactemail}" ><img src=${pt} alt="${this.contactemail}" width="${this.width}" height="${this.width}" /></a></li>
            </ul>
            <ul class="liststylenone listsocialicon">
              ${A(this.socialprofiles,i=>p`<li class="icon-link-item">
                    <a href="${i.url}" class="icon-link"
                      ><img
                        src=${i.image}
                        alt="${i.network} logo"
                        width="${this.width}"
                        height="${this.width}"
                    /></a>
                  </li>`)}
            </ul>
            <ul class=liststylenone>
              <li class="icon-link-item"><a href="${this.contactwebsite}" ><img src=${ct} alt="${this.contactwebsite}" width="${this.width}" height="${this.width}" /></a></li>
            </ul>
          </div>
        </div>
        <div class="header-summary">
          <strong>Objectif : 
          ${this.resume.basics.objectives}</strong>
        </div>
        <div class="header-summary">
          ${this.resume.basics.summary}
        </div>
          <a class="button" href="${nt}">Télécharger le CV</a>
        </div>
      </div>
    `}getImageUrl(){return this.resume.basics.photo.visible?this.resume.basics.photo.url?this.imageurl=this.resume.basics.photo.url:this.imageurl=st:(this.imageurl="",this.imagedisplay="none"),this.imageurl}};q.styles=[He,P,O,$`
      .header-name {
        text-align: center;
        margin: 1rem 0 0;
      }
      @media all and (max-width: 765px) {
        .header-title {
          padding: 1rem 0;
        }
      }
      .avatar {
        width: 5.9rem;
        max-width: 100%;
        overflow: hidden;
        margin: 0 auto;
        display: block;
        border-radius: 100%;
      }
      .icon-links {
        margin: 0;
        padding-top: 0.8rem;
        padding-left: 0.4rem;
      }
      @media all and (max-width: 765px) {
        .icon-links {
          display: inline-flex;
          padding-left: 0rem;
        }
      }
      .icon-link-item {
        display: inline;
        margin-left: 0.6rem;
      }
      .header-summary {
        margin: 1.5rem 0.5rem;
      }
      a.button {
        text-decoration: none;
        color: var(--dark-color);
        max-width: 10rem;
        display: block;
        margin: auto;
        margin-top: 2rem;
      }
      ul.liststylenone.listsocialicon {
        margin-top: -1px;
      }
    `];Ne([_()],q.prototype,"resume",2);q=Ne([E("my-header")],q);var ft=Object.defineProperty,gt=Object.getOwnPropertyDescriptor,Ie=(i,e,t,s)=>{for(var n=s>1?void 0:s?gt(e,t):e,r=i.length-1,o;r>=0;r--)(o=i[r])&&(n=(s?o(e,t,n):o(n))||n);return s&&n&&ft(e,t,n),n};let K=class extends y{constructor(){super(...arguments),this.experiences=v[0].sections.work.items,this.title=v[0].sections.work.name}render(){let i;for(let t of this.experiences)i=t.summary.split(`
`),t.summaryline=i;let e;for(let t of this.experiences)e=t.achievements.split(`
`),t.achievementline=e;return p`
      <div>
        <div class="title-bar">
          <h2>${this.title}</h2>
        </div>
          <ul class="liststylenone work-list">
            ${A(this.experiences,t=>p`
                <li class="resume-item">
                  ${this.checkDisplayLinkUrl(t.url)?p`
                    <h3><a href=${t.url}>${t.name}</a></h3>
                  `:p`
                    <h3>${t.name}</h3>
                  `}
                        <i>${t.sector}</i>
                        <h4>${t.position} &bull; ${this.formatDate(t.date.start)} - ${this.formatDate(t.date.end)}</h4>
                        <ul class="liststylenone summary">
                          ${A(t.summaryline,s=>p`<li >${s}</li>`)}
                        </ul>
                        <ul class="liststylenone">
                          ${A(t.achievementline,s=>p`<li >${s}</li>`)}
                        </ul>
                </li>`)}
          </ul>
        
      </div>
  
      
    `}formatDate(i){return i?new Date(i).getFullYear():"Aujourd'hui"}checkDisplayLinkUrl(i){return i!==""}};K.styles=[He,P,O,$`
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
     
      
    `];Ie([_()],K.prototype,"experiences",2);K=Ie([E("my-work")],K);var vt=Object.defineProperty,bt=Object.getOwnPropertyDescriptor,Je=(i,e,t,s)=>{for(var n=s>1?void 0:s?bt(e,t):e,r=i.length-1,o;r>=0;r--)(o=i[r])&&(n=(s?o(e,t,n):o(n))||n);return s&&n&&vt(e,t,n),n};let z=class extends y{constructor(){super(...arguments),this.title=v[0].sections.skills.name,this.subtitle1=v[0].sections.skills.items[0].name,this.subtitle2=v[0].sections.skills.items[2].name,this.skillgroupe1=v[0].sections.skills.items[0].keywords,this.skillgroupe2=v[0].sections.skills.items[2].keywords}render(){return p`
      <div>
        <div class="title-bar">
          <h2>${this.title}</h2>
        </div>
        <div class="displayflex center skill-list">
          <div class="skills-sublist">
            <h3>${this.subtitle1}</h3>
            <ul class ="liststylearrow" >
              ${this.skillgroupe1.map(i=>p`<li>${i}</li>`)}
            </ul>
          </div>
          <div class="skills-sublist">
            <h3>${this.subtitle2}</h3>
            <ul class ="liststylearrow">
              ${this.skillgroupe2.map(i=>p`<li>${i}</li>`)}
            </ul>
          </div>
          </div>
      </div>
  
      
    `}};z.styles=[P,O,$`
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
       

    `];Je([_()],z.prototype,"title",2);z=Je([E("my-skills")],z);class yt{constructor(e,t){this.name=e,this.image=t}}const At="/online-cv/assets/Angular.png",$t="/online-cv/assets/CSS.png",wt="/online-cv/assets/Git.png",St="/online-cv/assets/GoogleAppScript.png",_t="/online-cv/assets/HTML.png",Et="/online-cv/assets/Javascript.png",Pt="/online-cv/assets/LitJs.png",kt="/online-cv/assets/NodeJS.png",xt="/online-cv/assets/PWA.png",Ct="/online-cv/assets/Rxjs.png",Tt="/online-cv/assets/Typescript.png",Ot="/online-cv/assets/ViteJs.png",Dt="/online-cv/assets/VueJs.png",Bt="/online-cv/assets/Wordpress.png";var Mt=Object.defineProperty,Ut=Object.getOwnPropertyDescriptor,Qe=(i,e,t,s)=>{for(var n=s>1?void 0:s?Ut(e,t):e,r=i.length-1,o;r>=0;r--)(o=i[r])&&(n=(s?o(e,t,n):o(n))||n);return s&&n&&Mt(e,t,n),n};let G=class extends y{constructor(){super(...arguments),this.technos=v[0].sections.skills.items[1].keywords,this.technosPath=[At,$t,wt,St,_t,Et,Pt,kt,xt,Ct,Tt,Ot,Dt,Bt],this.technoMap=[],this.withLogo="35"}render(){for(let i of this.technos)for(let e of this.technosPath)if(this.checkTechnoName(e)===i){let t=new yt(i,e);this.technoMap.push(t)}return p`
      <div class="techno-list">
          <ul class="liststylenone displayflex displaywrap center">
          ${A(this.technoMap,i=>p`<li class="logo-tech"><img src=${i.image} alt="${i.name} logo" width=${this.withLogo} height=${this.withLogo} /></li>`)}
        </ul>
      </div>
    `}checkTechnoName(i){return i.split("/").pop().split(".")[0]}};G.styles=[P,O,$`
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
    `];Qe([_()],G.prototype,"technos",2);G=Qe([E("my-technos")],G);var jt=Object.defineProperty,Lt=Object.getOwnPropertyDescriptor,We=(i,e,t,s)=>{for(var n=s>1?void 0:s?Lt(e,t):e,r=i.length-1,o;r>=0;r--)(o=i[r])&&(n=(s?o(e,t,n):o(n))||n);return s&&n&&jt(e,t,n),n};let Z=class extends y{constructor(){super(...arguments),this.education=v[0].sections.education.items,this.formations=v[0].sections.certifications.items,this.title=v[0].sections.education.name}render(){return p`
      <div>
        <div class="title-bar">
          <h2>${this.title}</h2>
        </div>
        <div class="formation-container">
        <ul class="liststylenone formations-list">
            ${A(this.formations,i=>p`
                <li class="resume-item">
                        <h3 >${i.issuer}</h3>
                        <h4 >${i.name} &bull; <span class="formation-date">${this.formatDate(i.date.start)}</span><span id="tiret"> - </span><span class="formation-date">${this.formatDate(i.date.end)}</span></h4>
                </li>`)}
          </ul>
          <ul class="liststylenone formations-list">
            ${A(this.education,i=>p`
                <li class="resume-item">
                        <h3 >${i.institution}</h3>
                        <h4 >${i.degree} &bull; <span class="formation-date">${this.formatDate(i.date.start)}</span><span class="formation-date"> - ${this.formatDate(i.date.end)}</span></h4>
                </li>`)}
          </ul>
        </div>
      </div>
  
    `}formatDate(i){return i!=="Aujourd'hui"&&i!==""?new Date(i).getFullYear():i==="Aujourd'hui"?" - Aujourd'hui":""}};Z.styles=[P,O,$`
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
      
    `];We([_()],Z.prototype,"education",2);Z=We([E("my-training")],Z);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ft={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Rt=i=>(...e)=>({_$litDirective$:i,values:e});class Ht{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,s){this._$Ct=e,this._$AM=t,this._$Ci=s}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:Nt}=et,Pe=()=>document.createComment(""),F=(i,e,t)=>{var s;const n=i._$AA.parentNode,r=e===void 0?i._$AB:e._$AA;if(t===void 0){const o=n.insertBefore(Pe(),r),c=n.insertBefore(Pe(),r);t=new Nt(o,c,i,i.options)}else{const o=t._$AB.nextSibling,c=t._$AM,l=c!==i;if(l){let a;(s=t._$AQ)===null||s===void 0||s.call(t,i),t._$AM=i,t._$AP!==void 0&&(a=i._$AU)!==c._$AU&&t._$AP(a)}if(o!==r||l){let a=t._$AA;for(;a!==o;){const b=a.nextSibling;n.insertBefore(a,r),a=b}}}return t},x=(i,e,t=i)=>(i._$AI(e,t),i),It={},Jt=(i,e=It)=>i._$AH=e,Qt=i=>i._$AH,ae=i=>{var e;(e=i._$AP)===null||e===void 0||e.call(i,!1,!0);let t=i._$AA;const s=i._$AB.nextSibling;for(;t!==s;){const n=t.nextSibling;t.remove(),t=n}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ke=(i,e,t)=>{const s=new Map;for(let n=e;n<=t;n++)s.set(i[n],n);return s},Wt=Rt(class extends Ht{constructor(i){if(super(i),i.type!==Ft.CHILD)throw Error("repeat() can only be used in text expressions")}ht(i,e,t){let s;t===void 0?t=e:e!==void 0&&(s=e);const n=[],r=[];let o=0;for(const c of i)n[o]=s?s(c,o):o,r[o]=t(c,o),o++;return{values:r,keys:n}}render(i,e,t){return this.ht(i,e,t).values}update(i,[e,t,s]){var n;const r=Qt(i),{values:o,keys:c}=this.ht(e,t,s);if(!Array.isArray(r))return this.ut=c,o;const l=(n=this.ut)!==null&&n!==void 0?n:this.ut=[],a=[];let b,u,d=0,m=r.length-1,h=0,f=o.length-1;for(;d<=m&&h<=f;)if(r[d]===null)d++;else if(r[m]===null)m--;else if(l[d]===c[h])a[h]=x(r[d],o[h]),d++,h++;else if(l[m]===c[f])a[f]=x(r[m],o[f]),m--,f--;else if(l[d]===c[f])a[f]=x(r[d],o[f]),F(i,a[f+1],r[d]),d++,f--;else if(l[m]===c[h])a[h]=x(r[m],o[h]),F(i,r[d],r[m]),m--,h++;else if(b===void 0&&(b=ke(c,h,f),u=ke(l,d,m)),b.has(l[d]))if(b.has(l[m])){const w=u.get(c[h]),ee=w!==void 0?r[w]:null;if(ee===null){const me=F(i,r[d]);x(me,o[h]),a[h]=me}else a[h]=x(ee,o[h]),F(i,r[d],ee),r[w]=null;h++}else ae(r[m]),m--;else ae(r[d]),d++;for(;h<=f;){const w=F(i,a[f+1]);x(w,o[h]),a[h++]=w}for(;d<=m;){const w=r[d++];w!==null&&ae(w)}return this.ut=c,Jt(i,a),C}});var Vt=Object.defineProperty,qt=Object.getOwnPropertyDescriptor,pe=(i,e,t,s)=>{for(var n=s>1?void 0:s?qt(e,t):e,r=i.length-1,o;r>=0;r--)(o=i[r])&&(n=(s?o(e,t,n):o(n))||n);return s&&n&&Vt(e,t,n),n};let I=class extends y{constructor(){super(),this.title=v[0].sections.projects.name,this.projects=v[0].sections.projects.items,this.tiret=document.createElement("span"),this.tiret.innerText=" - "}render(){let i;for(let e of this.projects)i=e.summary.split(`
`),e.summaryline=i;return p`
      <div>
        <div class="title-bar">
          <h2>${this.title}</h2>
        </div>
          <ul class="liststylenone work-list">
            ${Wt(this.projects,e=>p`
                <li class="resume-item">
                        <h3 ><a href="${e.url}">${e.name}</a></h3>
                        <h4 >${e.description} &bull; <span class="formation-date">${this.formatDate(e.date.start)}</span><span class="formation-date"> <span id="tiret"> - </span> ${this.formatDate(e.date.end)}</span></h4>
                        <ul class="liststylenone inline bottom-space-10">
                          ${A(e.keywords,t=>p`<li class="keywords">${t}</li>`)}
                        </ul>
                          <ul class="liststylenone">
                            ${A(e.summaryline,t=>p`<li class='projet-sum'>${t}</li>`)}
                          </ul>
                </li>`)}
          </ul>
      </div>
    `}formatDate(i){return i!=="Aujourd'hui"&&i!==""?(this.tiret.innerText=" - ",new Date(i).getFullYear()):i==="Aujourd'hui"?" - Aujourd'hui":(this.tiret.innerText="","")}};I.styles=[P,O,$`
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
      
    `];pe([_()],I.prototype,"title",2);pe([_({type:HTMLElement,reflect:!0})],I.prototype,"tiret",2);I=pe([E("my-projects")],I);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function xe(i,e,t){return i?e():t==null?void 0:t()}var Kt=Object.defineProperty,zt=Object.getOwnPropertyDescriptor,Ve=(i,e,t,s)=>{for(var n=s>1?void 0:s?zt(e,t):e,r=i.length-1,o;r>=0;r--)(o=i[r])&&(n=(s?o(e,t,n):o(n))||n);return s&&n&&Kt(e,t,n),n};let Y=class extends y{constructor(){super(...arguments),this.languages=v[0].sections.languages,this.interests=v[0].sections.interests,this.volunteer=v[0].sections.volunteer}render(){return p`
      <div>
        <div class="title-bar">
            <div class="displayblock content-lang-int">
                <div class=" displayflex">
                    <h4>${this.languages.name} :</h4>
                    <ul class="liststylenone">
                        ${A(this.languages.items,i=>p`
                            <li class="lang-item">
                              ${xe(i===this.languages.items[0],()=>p`<p class="space-before"> ${i.name} (${i.level})</p>`,()=>p`<p class="separator-before">${i.name} (${i.level})</p>`)}
                            </li>`)}
                    </ul>
                </div>
                <div class="displayflex">
                    <h4>${this.interests.name} :</h4>
                    <ul class="liststylenone">
                        ${A(this.interests.items,i=>p`
                        <li class="lang-item">
                              ${xe(i===this.interests.items[0],()=>p`<p class="space-before"> ${i.name}</p>`,()=>p`<p class="separator-before">${i.name}</p>`)}
                            </li>`)}
                    </ul>
                </div>
                <div class="displayblock left">
                    <h4>${this.volunteer.name} :</h4>
                    <ul class="liststylenone">
                        ${A(this.volunteer.items,i=>p`
                        <li class="displayflex">
                            - ${i.summary}
                            </li>`)}
                    </ul>
                </div>
            </div>
        </div>
          
        
      </div>
  
      
    `}};Y.styles=[P,O,$`
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
      
      
    `];Ve([_()],Y.prototype,"languages",2);Y=Ve([E("language-interests")],Y);var Gt=Object.defineProperty,Zt=Object.getOwnPropertyDescriptor,qe=(i,e,t,s)=>{for(var n=s>1?void 0:s?Zt(e,t):e,r=i.length-1,o;r>=0;r--)(o=i[r])&&(n=(s?o(e,t,n):o(n))||n);return s&&n&&Gt(e,t,n),n};let X=class extends y{constructor(){super(...arguments),this.resume=v[0]}render(){return p`
    <my-header></my-header>
    <my-skills></my-skills>
    <my-technos></my-technos>
    <my-work></my-work>
    <my-training></my-training>
    <my-projects></my-projects>
    <language-interests></language-interests>
      <p class="bottom-info">Ce site a été dévéloppé en Javascript, HTML et CSS avec Lit et ViteJS</p>
    `}};X.styles=[P,$`
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
  `];qe([_()],X.prototype,"resume",2);X=qe([E("my-element")],X);
