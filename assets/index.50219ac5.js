import{S as t,i as e,s as n,C as s,c as l,a as r,m as a,t as o,b as c,d as $,e as f,f as i,g as h,h as m,j as g,k as u,l as p,n as d,o as v,p as w,q as x,r as y,u as E,v as z,w as I,x as N,y as q,z as A,A as B,B as D}from"./vendor.53156ae8.js";const P=[{fullname:"久瓴（上海）智能科技有限公司",enName:"JiuLing",where:"上海"},{fullname:"上海图聚智能科技股份有限公司",enName:"Palmap",where:"上海"}];function S(t,e,n){const s=t.slice();return s[3]=e[n],s}function V(t){let e,n;return{c(){e=p("span"),n=d(t[0]),this.h()},l(s){e=v(s,"SPAN",{class:!0});var l=w(e);n=x(l,t[0]),l.forEach(u),this.h()},h(){y(e,"class",E("header-span")+" svelte-18u0pqz")},m(t,s){g(t,e,s),z(e,n)},p(t,e){1&e&&I(n,t[0])},d(t){t&&u(e)}}}function b(t){let e,n,s=t[3]+"";return{c(){e=p("li"),n=d(s)},l(t){e=v(t,"LI",{});var l=w(e);n=x(l,s),l.forEach(u)},m(t,s){g(t,e,s),z(e,n)},p(t,e){2&e&&s!==(s=t[3]+"")&&I(n,s)},d(t){t&&u(e)}}}function j(t){let e,n=t[1],s=[];for(let l=0;l<n.length;l+=1)s[l]=b(S(t,n,l));return{c(){e=p("div");for(let t=0;t<s.length;t+=1)s[t].c();this.h()},l(t){e=v(t,"DIV",{class:!0});var n=w(e);for(let e=0;e<s.length;e+=1)s[e].l(n);n.forEach(u),this.h()},h(){y(e,"class",E("card-body-container")+" svelte-18u0pqz")},m(t,n){g(t,e,n);for(let l=0;l<s.length;l+=1)s[l].m(e,null)},p(t,l){if(2&l){let r;for(n=t[1],r=0;r<n.length;r+=1){const a=S(t,n,r);s[r]?s[r].p(a,l):(s[r]=b(a),s[r].c(),s[r].m(e,null))}for(;r<s.length;r+=1)s[r].d(1);s.length=n.length}},d(t){t&&u(e),N(s,t)}}}function L(t){let e,n,s,p;return e=new f({props:{$$slots:{default:[V]},$$scope:{ctx:t}}}),s=new i({props:{$$slots:{default:[j]},$$scope:{ctx:t}}}),{c(){l(e.$$.fragment),n=h(),l(s.$$.fragment)},l(t){r(e.$$.fragment,t),n=m(t),r(s.$$.fragment,t)},m(t,l){a(e,t,l),g(t,n,l),a(s,t,l),p=!0},p(t,n){const l={};65&n&&(l.$$scope={dirty:n,ctx:t}),e.$set(l);const r={};66&n&&(r.$$scope={dirty:n,ctx:t}),s.$set(r)},i(t){p||(o(e.$$.fragment,t),o(s.$$.fragment,t),p=!0)},o(t){c(e.$$.fragment,t),c(s.$$.fragment,t),p=!1},d(t){$(e,t),t&&u(n),$(s,t)}}}function k(t){let e,n;return e=new s({props:{style:t[2].trim(),$$slots:{default:[L]},$$scope:{ctx:t}}}),{c(){l(e.$$.fragment)},l(t){r(e.$$.fragment,t)},m(t,s){a(e,t,s),n=!0},p(t,[n]){const s={};67&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s)},i(t){n||(o(e.$$.fragment,t),n=!0)},o(t){c(e.$$.fragment,t),n=!1},d(t){$(e,t)}}}function C(t,e,n){let{title:s}=e,{contents:l}=e;return t.$$set=t=>{"title"in t&&n(0,s=t.title),"contents"in t&&n(1,l=t.contents)},[s,l,"\n    margin: 0 .5rem;\n  "]}class J extends t{constructor(t){super(),e(this,t,C,k,n,{title:0,contents:1})}}function F(t,e,n){const s=t.slice();return s[0]=e[n].fullname,s[1]=e[n].enName,s[2]=e[n].where,s}function G(t){let e,n;return e=new J({props:{title:t[0],contents:[`英文名：${t[1]}`,`所在地：${t[2]}`]}}),{c(){l(e.$$.fragment)},l(t){r(e.$$.fragment,t)},m(t,s){a(e,t,s),n=!0},p:A,i(t){n||(o(e.$$.fragment,t),n=!0)},o(t){c(e.$$.fragment,t),n=!1},d(t){$(e,t)}}}function H(t){let e,n,s,f,i,E,I,A,S;e=new q({});let V=P,b=[];for(let l=0;l<V.length;l+=1)b[l]=G(F(t,V,l));const j=t=>c(b[t],1,1,(()=>{b[t]=null}));return{c(){l(e.$$.fragment),n=h(),s=p("div"),f=p("span"),i=d("vec(1.0, 1.0, 1.0, 1.0)"),E=d(" will light up everyone."),I=h(),A=p("div");for(let t=0;t<b.length;t+=1)b[t].c();this.h()},l(t){r(e.$$.fragment,t),n=m(t),s=v(t,"DIV",{class:!0});var l=w(s);f=v(l,"SPAN",{class:!0});var a=w(f);i=x(a,"vec(1.0, 1.0, 1.0, 1.0)"),a.forEach(u),E=x(l," will light up everyone."),l.forEach(u),I=m(t),A=v(t,"DIV",{id:!0,class:!0});var o=w(A);for(let e=0;e<b.length;e+=1)b[e].l(o);o.forEach(u),this.h()},h(){y(f,"class","code svelte-otr0tz"),y(s,"class","title svelte-otr0tz"),y(A,"id","root"),y(A,"class","svelte-otr0tz")},m(t,l){a(e,t,l),g(t,n,l),g(t,s,l),z(s,f),z(f,i),z(s,E),g(t,I,l),g(t,A,l);for(let e=0;e<b.length;e+=1)b[e].m(A,null);S=!0},p(t,[e]){if(0&e){let n;for(V=P,n=0;n<V.length;n+=1){const s=F(t,V,n);b[n]?(b[n].p(s,e),o(b[n],1)):(b[n]=G(s),b[n].c(),o(b[n],1),b[n].m(A,null))}for(D(),n=V.length;n<b.length;n+=1)j(n);B()}},i(t){if(!S){o(e.$$.fragment,t);for(let t=0;t<V.length;t+=1)o(b[t]);S=!0}},o(t){c(e.$$.fragment,t),b=b.filter(Boolean);for(let e=0;e<b.length;e+=1)c(b[e]);S=!1},d(t){$(e,t),t&&u(n),t&&u(s),t&&u(I),t&&u(A),N(b,t)}}}new class extends t{constructor(t){super(),e(this,t,null,H,n,{})}}({target:document.getElementById("app")});
