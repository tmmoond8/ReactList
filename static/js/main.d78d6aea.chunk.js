(this["webpackJsonpreact-list"]=this["webpackJsonpreact-list"]||[]).push([[0],{54:function(t,e,n){t.exports=n(80)},80:function(t,e,n){"use strict";n.r(e);var r=n(0),i=n.n(r),o=n(46),c=n.n(o),a=n(3),u=n(5),s=n(2),l=n(49),p=n.n(l);function b(){var t=Object(a.a)(["\n  html,\n  body,\n  body > div {\n    height: 100%;\n  }\n  a {\n    text-decoration: none;\n    color: unset;\n  }\n  button {\n    background: none;\n    border: none;\n    outline: none;\n  }\n  * {\n    box-sizing: border-box;\n  }\n"]);return b=function(){return t},t}var f=Object(s.css)(b());function d(){return Object(s.jsx)(s.Global,{styles:[p.a,f]})}var h=n(26),j=n(4),g=n(27);function O(){var t=Object(a.a)(["\n  @media (min-width: ","px) {\n    ",";\n  }\n"]);return O=function(){return t},t}function v(){var t=Object(a.a)(["\n  @media (min-width: ","px) {\n    ",";\n  }\n"]);return v=function(){return t},t}var w=768,m=1024,x="#2b96ed",y="white",P="rgba(255, 255, 255, 0.7)",k="rgba(0, 0, 0, 0.2)",S="rgba(0, 0, 0, 0.7)";function W(){var t=Object(a.a)(["\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  border-radius: 4px;\n  object-fit: cover;\n  transform: scale(1.1);\n"]);return W=function(){return t},t}function E(){var t=Object(a.a)(["\n  position: absolute;\n  top: 16px;\n  right: 16px;\n  font-size: 24px;\n  color: white;\n  cursor: pointer;\n"]);return E=function(){return t},t}function C(){var t=Object(a.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  height: 98px;\n  padding: 16px;\n  border-bottom-left-radius: 4px;\n  border-bottom-right-radius: 4px;\n  border: 1px solid ",";\n  border-top: 0 solid red;\n\n  h3 {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    -webkit-box-orient: vertical;\n    display: -webkit-box;\n    -webkit-line-clamp: 2;\n    line-height: 22px;\n  }\n\n  p {\n    font-size: 14px;\n    color: ",";\n  }\n"]);return C=function(){return t},t}function z(){var t=Object(a.a)(["\n  width: 100%;\n  height: 200px;\n  object-fit: cover;\n  border-top-left-radius: 4px;\n  border-top-right-radius: 4px;\n"]);return z=function(){return t},t}function D(){var t=Object(a.a)(["\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  height: 300px;\n"]);return D=function(){return t},t}var A=Object(r.memo)((function(t){var e=t.title,n=t.wish,i=t.toggleWish,o=t.removeWish,c=t.thumbnail,a=t.price,u=Object(r.useState)(!1),l=Object(g.a)(u,2),p=l[0],b=l[1];return Object(s.jsx)(U,null,Object(s.jsx)(L,{src:c,onLoad:function(){return b(!0)}}),Object(s.jsx)(R,null,Object(s.jsx)("h3",null,e),Object(s.jsx)("p",null,a.toLocaleString(),"\uc6d0")),null!==n&&Object(s.jsx)(N,{onClick:i},n?"\ud83d\udc99":"\ud83e\udd0d"),null===n&&Object(s.jsx)(N,{onClick:o},"\u274c"),!p&&Object(s.jsx)(T,{src:"https://d2ur7st6jjikze.cloudfront.net/share/image_loader.gif"}))}),(function(t,e){return t.wish===e.wish})),U=u.a.li(D()),L=u.a.img(z()),R=u.a.div(C(),k,S),N=u.a.button(E()),T=u.a.img(W()),M=n(50),B=function(t){Object(r.useEffect)((function(){if(document){var e=Object(M.a)(300,(function(){var e=document.documentElement;e.scrollHeight-e.scrollTop===e.clientHeight&&t()}));document.addEventListener("scroll",e)}}),[t])},H=function(t){Object(r.useEffect)((function(){window.scrollTo(0,t)}),[t])};function J(){var t=Object(a.a)(["\n    grid-template-columns: repeat(4, 1fr);\n  "]);return J=function(){return t},t}function F(){var t=Object(a.a)(["\n    grid-template-columns: repeat(3, 1fr);\n  "]);return F=function(){return t},t}function G(){var t=Object(a.a)(["\n  display: grid;\n  grid-gap: 16px;\n  grid-template-columns: repeat(2, 1fr);\n\n  ","\n\n  ","\n"]);return G=function(){return t},t}function I(){var t=Object(a.a)(["\n  padding: 16px;\n"]);return I=function(){return t},t}var $=function(t){return Object(r.useCallback)((function(e){t&&t(e)}),[t])};function _(t){var e=t.products,n=t.wishs,r=t.toggleWish,i=t.removeWish,o=$(r),c=$(i);return Object(s.jsx)(et,null,Object(s.jsx)(nt,null,e.map((function(t){return Object(s.jsx)(A,{key:t.id,title:t.title,wish:n?t.id in n:null,toggleWish:function(){return o(t.id)},removeWish:function(){return c(t.id)},thumbnail:t.thumbnail,price:t.price})}))))}var q,K,Q,V,X,Y,Z,tt,et=u.a.div(I()),nt=u.a.ol(G(),(q=Object(s.css)(F()),Object(s.css)(v(),w,q)),function(t){return Object(s.css)(O(),m,t)}(Object(s.css)(J()))),rt=n(29),it=n(14),ot=n(28),ct=n(53),at=n(18),ut=n.n(at),st=n(23),lt=n(12),pt=n(24),bt=n(25),ft=n(7),dt=(n(35),n(1)),ht=n(51),jt=n.n(ht),gt=window.location.hostname.includes("github.io")?"/ReactList":"/",Ot=jt.a.create({baseURL:gt}),vt=function(){var t=Object(st.a)(ut.a.mark((function t(){return ut.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Ot.get("/products.json");case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();!function(t){t.Default="Default",t.PriceASC="PriceASC",t.PriceDESC="PriceDESC"}(tt||(tt={}));var wt,mt,xt,yt,Pt,kt,St,Wt,Et=(K=function(){function t(){Object(pt.a)(this,t),Object(lt.a)(this,"originProducts",Q,this),Object(lt.a)(this,"wishs",V,this),Object(lt.a)(this,"sortOption",X,this),Object(lt.a)(this,"toggleWish",Y,this),Object(lt.a)(this,"removeWish",Z,this),this.originProducts=[],this.wishs={},this.sortOption=tt.Default,this.fetch()}return Object(bt.a)(t,[{key:"fetch",value:function(){var t=Object(st.a)(ut.a.mark((function t(){var e,n;return ut.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,vt();case 3:e=t.sent,n=e.data,this.originProducts=n,t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.error(t.t0);case 11:case"end":return t.stop()}}),t,this,[[0,8]])})));return function(){return t.apply(this,arguments)}}()},{key:"wishProducts",get:function(){var t=this;return this.products.filter((function(e){return e.id in t.wishs}))}},{key:"products",get:function(){var t=this;return this.sortOption===tt.Default?this.originProducts:Object(ct.a)(this.originProducts).sort((function(e,n){return t.sortOption===tt.PriceASC?e.price-n.price:n.price-e.price}))}}]),t}(),Q=Object(ft.a)(K.prototype,"originProducts",[dt.n],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),V=Object(ft.a)(K.prototype,"wishs",[dt.n],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),X=Object(ft.a)(K.prototype,"sortOption",[dt.n],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Object(ft.a)(K.prototype,"wishProducts",[dt.g],Object.getOwnPropertyDescriptor(K.prototype,"wishProducts"),K.prototype),Y=Object(ft.a)(K.prototype,"toggleWish",[dt.f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var t=this;return function(e){if(e in t.wishs){var n=Object(ot.a)({},t.wishs);delete n[e],t.wishs=n}else t.wishs=Object(ot.a)({},t.wishs,Object(it.a)({},e,!0))}}}),Z=Object(ft.a)(K.prototype,"removeWish",[dt.f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var t=this;return function(e){var n=Object(ot.a)({},t.wishs);delete n[e],t.wishs=n}}}),Object(ft.a)(K.prototype,"products",[dt.g],Object.getOwnPropertyDescriptor(K.prototype,"products"),K.prototype),K);!function(t){t.Products="/products",t.Wishs="/wish-products"}(Wt||(Wt={}));var Ct=(wt=function(){function t(){var e,n;Object(pt.a)(this,t),Object(lt.a)(this,"page",mt,this),Object(lt.a)(this,"scroll",xt,this),Object(lt.a)(this,"productPageUp",yt,this),Object(lt.a)(this,"setScroll",Pt,this),Object(lt.a)(this,"wishProductPageUp",kt,this),Object(lt.a)(this,"clearScroll",St,this),this.page=(e={},Object(it.a)(e,Wt.Products,1),Object(it.a)(e,Wt.Wishs,1),e),this.scroll=(n={},Object(it.a)(n,Wt.Products,0),Object(it.a)(n,Wt.Wishs,0),n)}return Object(bt.a)(t,[{key:"productPage",get:function(){return this.page[Wt.Products]}},{key:"productScroll",get:function(){return this.scroll[Wt.Products]}},{key:"wishProductPage",get:function(){return this.page[Wt.Wishs]}},{key:"wishProductScroll",get:function(){return this.scroll[Wt.Wishs]}}]),t}(),mt=Object(ft.a)(wt.prototype,"page",[dt.n],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),xt=Object(ft.a)(wt.prototype,"scroll",[dt.n],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Object(ft.a)(wt.prototype,"productPage",[dt.g],Object.getOwnPropertyDescriptor(wt.prototype,"productPage"),wt.prototype),yt=Object(ft.a)(wt.prototype,"productPageUp",[dt.f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var t=this;return function(){t.page[Wt.Products]=t.page[Wt.Products]+1}}}),Object(ft.a)(wt.prototype,"productScroll",[dt.g],Object.getOwnPropertyDescriptor(wt.prototype,"productScroll"),wt.prototype),Pt=Object(ft.a)(wt.prototype,"setScroll",[dt.f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var t=this;return function(e,n){t.scroll[e]=n}}}),Object(ft.a)(wt.prototype,"wishProductPage",[dt.g],Object.getOwnPropertyDescriptor(wt.prototype,"wishProductPage"),wt.prototype),kt=Object(ft.a)(wt.prototype,"wishProductPageUp",[dt.f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var t=this;return function(){t.page[Wt.Wishs]=t.page[Wt.Wishs]+1}}}),Object(ft.a)(wt.prototype,"wishProductScroll",[dt.g],Object.getOwnPropertyDescriptor(wt.prototype,"wishProductScroll"),wt.prototype),St=Object(ft.a)(wt.prototype,"clearScroll",[dt.f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var t=this;return function(){var e;t.scroll=(e={},Object(it.a)(e,Wt.Products,0),Object(it.a)(e,Wt.Wishs,0),e)}}}),wt),zt={product:new Et,ui:new Ct},Dt=function(t){return i.a.createElement(rt.b,zt,t.children)},At=function(){return Object(r.useContext)(rt.a)},Ut=rt.c,Lt=Ut((function(){var t=At(),e=t.product,n=e.products,i=e.toggleWish,o=e.wishs,c=t.ui,a=c.productPage,u=c.productPageUp,l=c.productScroll,p=Object(r.useMemo)((function(){return n.slice(0,10*a)}),[n,a]);return B(u),H(l),Object(s.jsx)(_,{products:p,wishs:o,toggleWish:i})}));function Rt(){var t=Object(a.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex: 1;\n  height: 100%;\n"]);return Rt=function(){return t},t}var Nt=Ut((function(){var t=At(),e=t.product,n=e.wishProducts,i=e.removeWish,o=t.ui,c=o.wishProductPage,a=o.wishProductPageUp,u=o.wishProductScroll,l=Object(r.useMemo)((function(){return n.slice(0,10*c)}),[c,n]);return B(a),H(u),l.length>0?Object(s.jsx)(_,{products:l,removeWish:i}):Object(s.jsx)(Tt,null,"\uc704\uc2dc \ub9ac\uc2a4\ud2b8\uc5d0 \ub2f4\uae34 \uc0c1\ud488\uc774 \uc5c6\uc2b5\ub2c8\ub2e4")})),Tt=u.a.h2(Rt()),Mt=[{name:"products",displayName:"\uc0c1\ud488 \ub9ac\uc2a4\ud2b8",link:"/products"},{name:"wishProducts",displayName:"\uc704\uc2dc \ub9ac\uc2a4\ud2b8",link:"/wish-products"}];function Bt(){var t=Object(a.a)(["\n  color: ",";\n"]);return Bt=function(){return t},t}function Ht(){var t=Object(a.a)(["\n  ol {\n    display: flex;\n    align-items: center;\n    justify-content: flex-start;\n\n    li + li {\n      margin-left: 16px;\n    }\n  }\n"]);return Ht=function(){return t},t}function Jt(){var t=Object(j.f)(),e=Object(r.useState)(t.pathname),n=Object(g.a)(e,2),i=n[0],o=n[1],c=At().ui.setScroll,a=Object(r.useCallback)((function(e){var n,r;c(t.pathname,null!==(n=null===(r=document.scrollingElement)||void 0===r?void 0:r.scrollTop)&&void 0!==n?n:0),o(e)}),[t.pathname,c]);return Object(s.jsx)(Ft,null,Object(s.jsx)("ol",null,Mt.map((function(t){var e=t.name,n=t.displayName,r=t.link;return Object(s.jsx)(Gt,{key:e,selected:i===r,onClick:function(){return a(r)}},Object(s.jsx)(h.b,{to:r},n))}))))}var Ft=u.a.nav(Ht()),Gt=u.a.li(Bt(),(function(t){return t.selected?y:P}));function It(){var t=Object(a.a)(["\n  color: ",";\n  cursor: pointer;\n"]);return It=function(){return t},t}function $t(){var t=Object(a.a)(["\n  ol {\n    display: flex;\n    align-items: center;\n    justify-content: flex-start;\n\n    li + li {\n      margin-left: 16px;\n    }\n  }\n"]);return $t=function(){return t},t}var _t=Ut((function(){var t=At(),e=t.product,n=t.ui.clearScroll;return Object(s.jsx)(qt,null,Object(s.jsx)("ol",null,Object(s.jsx)(Kt,{onClick:function(){n(),e.sortOption=tt.PriceDESC},selected:e.sortOption===tt.PriceDESC},"\uac00\uaca9 \ub192\uc740\uc21c"),Object(s.jsx)(Kt,{onClick:function(){n(),e.sortOption=tt.PriceASC},selected:e.sortOption===tt.PriceASC},"\uac00\uaca9 \ub0ae\uc740\uc21c")))})),qt=u.a.nav($t()),Kt=u.a.li(It(),(function(t){return t.selected?y:P}));function Qt(){var t=Object(a.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 50px;\n  margin: auto;\n  padding: 0 16px;\n  background-color: ",";\n  z-index: 100;\n"]);return Qt=function(){return t},t}function Vt(){return Object(s.jsx)(Xt,null,Object(s.jsx)(Jt,null),Object(s.jsx)(_t,null))}var Xt=u.a.div(Qt(),x);function Yt(){var t=Object(a.a)(["\n  padding: 50px 0 0 0;\n  height: 100%;\n"]);return Yt=function(){return t},t}var Zt=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(d,null),i.a.createElement(h.a,null,i.a.createElement(Vt,null),i.a.createElement(te,null,i.a.createElement(j.c,null,i.a.createElement(j.a,{path:"/products"},i.a.createElement(Lt,null)),i.a.createElement(j.a,{path:"/wish-products"},i.a.createElement(Nt,null)),i.a.createElement(j.a,{path:"/"},i.a.createElement(Lt,null))))))},te=u.a.div(Yt()),ee=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ne(t,e){navigator.serviceWorker.register(t).then((function(t){t.onupdatefound=function(){var n=t.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),e&&e.onUpdate&&e.onUpdate(t)):(console.log("Content is cached for offline use."),e&&e.onSuccess&&e.onSuccess(t)))})}})).catch((function(t){console.error("Error during service worker registration:",t)}))}c.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(Dt,null,i.a.createElement(Zt,null))),document.getElementById("root")),function(t){if("serviceWorker"in navigator){if(new URL("/ReactList",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/ReactList","/service-worker.js");ee?(!function(t,e){fetch(t,{headers:{"Service-Worker":"script"}}).then((function(n){var r=n.headers.get("content-type");404===n.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(t){t.unregister().then((function(){window.location.reload()}))})):ne(t,e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e,t),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):ne(e,t)}))}}()}},[[54,1,2]]]);
//# sourceMappingURL=main.d78d6aea.chunk.js.map