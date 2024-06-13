import{p as b,g as M,a4 as se,r as V,a5 as re,k as G,B as I,D as ie,l as P,a6 as oe,z as le,c as S,d as h,m as u,a7 as z,a8 as L,a9 as U,aa as ue,ab as ce,ac as de,P as T,t as ge,G as J,T as ve,q as fe,W as K,w as Q,s as x,ad as me,n as he,a0 as q,ae as be,N as Se,af as ye,O as Ce,$ as _e,v as ze,x as ke,ag as xe,ah as Re,ai as Ie}from"./index-6870ee55.js";const w=b({class:[String,Array,Object],style:{type:[String,Array,Object],default:null}},"component");function $(e){const a=M("useRender");a.render=e}function Le(e){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"content";const n=se(),t=V();if(re){const s=new ResizeObserver(r=>{e==null||e(r,s),r.length&&(a==="content"?t.value=r[0].contentRect:t.value=r[0].target.getBoundingClientRect())});G(()=>{s.disconnect()}),I(()=>n.el,(r,c)=>{c&&(s.unobserve(c),t.value=void 0),r&&s.observe(r)},{flush:"post"})}return{resizeRef:n,contentRect:ie(t)}}const Pe=b({tag:{type:String,default:"div"}},"tag"),Be=b({defaults:Object,disabled:Boolean,reset:[Number,String],root:[Boolean,String],scoped:Boolean},"VDefaultsProvider"),Je=P(!1)({name:"VDefaultsProvider",props:Be(),setup(e,a){let{slots:n}=a;const{defaults:t,disabled:s,reset:r,root:c,scoped:d}=oe(e);return le(t,{reset:r,root:c,scoped:d,disabled:s}),()=>{var m;return(m=n.default)==null?void 0:m.call(n)}}});const Ne=b({height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},"dimension");function Ve(e){return{dimensionStyles:S(()=>{const n={},t=h(e.height),s=h(e.maxHeight),r=h(e.maxWidth),c=h(e.minHeight),d=h(e.minWidth),m=h(e.width);return t!=null&&(n.height=t),s!=null&&(n.maxHeight=s),r!=null&&(n.maxWidth=r),c!=null&&(n.minHeight=c),d!=null&&(n.minWidth=d),m!=null&&(n.width=m),n})}}function Te(e){return{aspectStyles:S(()=>{const a=Number(e.aspectRatio);return a?{paddingBottom:String(1/a*100)+"%"}:void 0})}}const X=b({aspectRatio:[String,Number],contentClass:null,inline:Boolean,...w(),...Ne()},"VResponsive"),A=P()({name:"VResponsive",props:X(),setup(e,a){let{slots:n}=a;const{aspectStyles:t}=Te(e),{dimensionStyles:s}=Ve(e);return $(()=>{var r;return u("div",{class:["v-responsive",{"v-responsive--inline":e.inline},e.class],style:[s.value,e.style]},[u("div",{class:"v-responsive__sizer",style:t.value},null),(r=n.additional)==null?void 0:r.call(n),n.default&&u("div",{class:["v-responsive__content",e.contentClass]},[n.default()])])}),{}}});function Y(e){return L(()=>{const a=[],n={};if(e.value.background)if(U(e.value.background)){if(n.backgroundColor=e.value.background,!e.value.text&&ue(e.value.background)){const t=ce(e.value.background);if(t.a==null||t.a===1){const s=de(t);n.color=s,n.caretColor=s}}}else a.push(`bg-${e.value.background}`);return e.value.text&&(U(e.value.text)?(n.color=e.value.text,n.caretColor=e.value.text):a.push(`text-${e.value.text}`)),{colorClasses:a,colorStyles:n}})}function we(e,a){const n=S(()=>({text:z(e)?e.value:a?e[a]:null})),{colorClasses:t,colorStyles:s}=Y(n);return{textColorClasses:t,textColorStyles:s}}function $e(e,a){const n=S(()=>({background:z(e)?e.value:a?e[a]:null})),{colorClasses:t,colorStyles:s}=Y(n);return{backgroundColorClasses:t,backgroundColorStyles:s}}const Oe=b({rounded:{type:[Boolean,Number,String],default:void 0},tile:Boolean},"rounded");function We(e){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:T();return{roundedClasses:S(()=>{const t=z(e)?e.value:e.rounded,s=z(e)?e.value:e.tile,r=[];if(t===!0||t==="")r.push(`${a}--rounded`);else if(typeof t=="string"||t===0)for(const c of String(t).split(" "))r.push(`rounded-${c}`);else(s||t===!1)&&r.push("rounded-0");return r})}}const je=b({transition:{type:[Boolean,String,Object],default:"fade-transition",validator:e=>e!==!0}},"transition"),R=(e,a)=>{let{slots:n}=a;const{transition:t,disabled:s,group:r,...c}=e,{component:d=r?ve:fe,...m}=typeof t=="object"?t:{};return ge(d,J(typeof t=="string"?{name:s?"":t}:m,typeof t=="string"?{}:Object.fromEntries(Object.entries({disabled:s,group:r}).filter(l=>{let[o,g]=l;return g!==void 0})),c),n)};function De(e,a){if(!K)return;const n=a.modifiers||{},t=a.value,{handler:s,options:r}=typeof t=="object"?t:{handler:t,options:{}},c=new IntersectionObserver(function(){var g;let d=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],m=arguments.length>1?arguments[1]:void 0;const l=(g=e._observe)==null?void 0:g[a.instance.$.uid];if(!l)return;const o=d.some(y=>y.isIntersecting);s&&(!n.quiet||l.init)&&(!n.once||o||l.init)&&s(o,d,m),o&&n.once?Z(e,a):l.init=!0},r);e._observe=Object(e._observe),e._observe[a.instance.$.uid]={init:!1,observer:c},c.observe(e)}function Z(e,a){var t;const n=(t=e._observe)==null?void 0:t[a.instance.$.uid];n&&(n.observer.unobserve(e),delete e._observe[a.instance.$.uid])}const He={mounted:De,unmounted:Z},Ee=He,Fe=b({alt:String,cover:Boolean,color:String,draggable:{type:[Boolean,String],default:void 0},eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},sizes:String,src:{type:[String,Object],default:""},crossorigin:String,referrerpolicy:String,srcset:String,position:String,...X(),...w(),...Oe(),...je()},"VImg"),Ke=P()({name:"VImg",directives:{intersect:Ee},props:Fe(),emits:{loadstart:e=>!0,load:e=>!0,error:e=>!0},setup(e,a){let{emit:n,slots:t}=a;const{backgroundColorClasses:s,backgroundColorStyles:r}=$e(Q(e,"color")),{roundedClasses:c}=We(e),d=M("VImg"),m=x(""),l=V(),o=x(e.eager?"loading":"idle"),g=x(),y=x(),v=S(()=>e.src&&typeof e.src=="object"?{src:e.src.src,srcset:e.srcset||e.src.srcset,lazySrc:e.lazySrc||e.src.lazySrc,aspect:Number(e.aspectRatio||e.src.aspect||0)}:{src:e.src,srcset:e.srcset,lazySrc:e.lazySrc,aspect:Number(e.aspectRatio||0)}),C=S(()=>v.value.aspect||g.value/y.value||0);I(()=>e.src,()=>{B(o.value!=="idle")}),I(C,(i,f)=>{!i&&f&&l.value&&k(l.value)}),me(()=>B());function B(i){if(!(e.eager&&i)&&!(K&&!i&&!e.eager)){if(o.value="loading",v.value.lazySrc){const f=new Image;f.src=v.value.lazySrc,k(f,null)}v.value.src&&he(()=>{var f;n("loadstart",((f=l.value)==null?void 0:f.currentSrc)||v.value.src),setTimeout(()=>{var _;if(!d.isUnmounted)if((_=l.value)!=null&&_.complete){if(l.value.naturalWidth||W(),o.value==="error")return;C.value||k(l.value,null),o.value==="loading"&&O()}else C.value||k(l.value),j()})})}}function O(){var i;d.isUnmounted||(j(),k(l.value),o.value="loaded",n("load",((i=l.value)==null?void 0:i.currentSrc)||v.value.src))}function W(){var i;d.isUnmounted||(o.value="error",n("error",((i=l.value)==null?void 0:i.currentSrc)||v.value.src))}function j(){const i=l.value;i&&(m.value=i.currentSrc||i.src)}let N=-1;G(()=>{clearTimeout(N)});function k(i){let f=arguments.length>1&&arguments[1]!==void 0?arguments[1]:100;const _=()=>{if(clearTimeout(N),d.isUnmounted)return;const{naturalHeight:E,naturalWidth:F}=i;E||F?(g.value=F,y.value=E):!i.complete&&o.value==="loading"&&f!=null?N=window.setTimeout(_,f):(i.currentSrc.endsWith(".svg")||i.currentSrc.startsWith("data:image/svg+xml"))&&(g.value=1,y.value=1)};_()}const D=S(()=>({"v-img__img--cover":e.cover,"v-img__img--contain":!e.cover})),p=()=>{var _;if(!v.value.src||o.value==="idle")return null;const i=u("img",{class:["v-img__img",D.value],style:{objectPosition:e.position},src:v.value.src,srcset:v.value.srcset,alt:e.alt,crossorigin:e.crossorigin,referrerpolicy:e.referrerpolicy,draggable:e.draggable,sizes:e.sizes,ref:l,onLoad:O,onError:W},null),f=(_=t.sources)==null?void 0:_.call(t);return u(R,{transition:e.transition,appear:!0},{default:()=>[q(f?u("picture",{class:"v-img__picture"},[f,i]):i,[[ye,o.value==="loaded"]])]})},ee=()=>u(R,{transition:e.transition},{default:()=>[v.value.lazySrc&&o.value!=="loaded"&&u("img",{class:["v-img__img","v-img__img--preload",D.value],style:{objectPosition:e.position},src:v.value.lazySrc,alt:e.alt,crossorigin:e.crossorigin,referrerpolicy:e.referrerpolicy,draggable:e.draggable},null)]}),te=()=>t.placeholder?u(R,{transition:e.transition,appear:!0},{default:()=>[(o.value==="loading"||o.value==="error"&&!t.error)&&u("div",{class:"v-img__placeholder"},[t.placeholder()])]}):null,ne=()=>t.error?u(R,{transition:e.transition,appear:!0},{default:()=>[o.value==="error"&&u("div",{class:"v-img__error"},[t.error()])]}):null,ae=()=>e.gradient?u("div",{class:"v-img__gradient",style:{backgroundImage:`linear-gradient(${e.gradient})`}},null):null,H=x(!1);{const i=I(C,f=>{f&&(requestAnimationFrame(()=>{requestAnimationFrame(()=>{H.value=!0})}),i())})}return $(()=>{const i=A.filterProps(e);return q(u(A,J({class:["v-img",{"v-img--booting":!H.value},s.value,c.value,e.class],style:[{width:h(e.width==="auto"?g.value:e.width)},r.value,e.style]},i,{aspectRatio:C.value,"aria-label":e.alt,role:e.alt?"img":void 0}),{additional:()=>u(Se,null,[u(p,null,null),u(ee,null,null),u(ae,null,null),u(te,null,null),u(ne,null,null)]),default:t.default}),[[be("intersect"),{handler:B,options:e.options},null,{once:!0}]])}),{currentSrc:m,image:l,state:o,naturalWidth:g,naturalHeight:y}}}),Qe=b({border:[Boolean,Number,String]},"border");function Xe(e){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:T();return{borderClasses:S(()=>{const t=z(e)?e.value:e.border,s=[];if(t===!0||t==="")s.push(`${a}--border`);else if(typeof t=="string"||t===0)for(const r of String(t).split(" "))s.push(`border-${r}`);return s})}}const Ye=b({elevation:{type:[Number,String],validator(e){const a=parseInt(e);return!isNaN(a)&&a>=0&&a<=24}}},"elevation");function Ze(e){return{elevationClasses:S(()=>{const n=z(e)?e.value:e.elevation,t=[];return n==null||t.push(`elevation-${n}`),t})}}const Ue=["x-small","small","default","large","x-large"],qe=b({size:{type:[String,Number],default:"default"}},"size");function Ae(e){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:T();return L(()=>{let n,t;return Ce(Ue,e.size)?n=`${a}--size-${e.size}`:e.size&&(t={width:h(e.size),height:h(e.size)}),{sizeClasses:n,sizeStyles:t}})}const Me=b({color:String,disabled:Boolean,start:Boolean,end:Boolean,icon:_e,...w(),...qe(),...Pe({tag:"i"}),...ze()},"VIcon"),pe=P()({name:"VIcon",props:Me(),setup(e,a){let{attrs:n,slots:t}=a;const s=V(),{themeClasses:r}=ke(e),{iconData:c}=xe(S(()=>s.value||e.icon)),{sizeClasses:d}=Ae(e),{textColorClasses:m,textColorStyles:l}=we(Q(e,"color"));return $(()=>{var y,v;const o=(y=t.default)==null?void 0:y.call(t);o&&(s.value=(v=Re(o).filter(C=>C.type===Ie&&C.children&&typeof C.children=="string")[0])==null?void 0:v.children);const g=!!(n.onClick||n.onClickOnce);return u(c.value.component,{tag:e.tag,icon:c.value.icon,class:["v-icon","notranslate",r.value,d.value,m.value,{"v-icon--clickable":g,"v-icon--disabled":e.disabled,"v-icon--start":e.start,"v-icon--end":e.end},e.class],style:[d.value?void 0:{fontSize:h(e.size),height:h(e.size),width:h(e.size)},l.value,e.style],role:g?"button":void 0,"aria-hidden":!g,tabindex:g?e.disabled?-1:0:void 0},{default:()=>[o]})}),{}}});export{Ke as V,Pe as a,$ as b,Qe as c,Ye as d,Oe as e,$e as f,Xe as g,Ze as h,We as i,Je as j,pe as k,Ne as l,w as m,Ve as n,Y as o,qe as p,Ae as q,we as r,A as s,Le as u};
