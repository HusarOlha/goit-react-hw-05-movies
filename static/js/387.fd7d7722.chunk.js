"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[387],{9245:function(n,e,t){t.d(e,{Z:function(){return s}});var r,a=t(5243),c=t(168),u=t(8789).ZP.div(r||(r=(0,c.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),i=t(184),s=function(){return(0,i.jsx)(u,{children:(0,i.jsx)(a.g4,{height:"80",width:"80",radius:"13",color:"white",ariaLabel:"three-dots-loading",wrapperStyle:{},wrapperClassName:"",visible:!0})})}},2881:function(n,e,t){t.d(e,{Z:function(){return r.Z}});var r=t(9245)},4387:function(n,e,t){t.r(e),t.d(e,{default:function(){return Z}});var r,a,c,u=t(5861),i=t(9439),s=t(4687),o=t.n(s),p=t(2791),f=t(85),l=t(7689),d=t(168),h=t(5706),v=h.Z.div(r||(r=(0,d.Z)(["\n  max-width: 1200px;\n  margin-top: 20px;\n  padding: 10px;\n"]))),g=h.Z.h2(a||(a=(0,d.Z)(["\n  font-family: 'Montserrat', sans-serif;\n  line-height: 1.4;\n  font-size: 26px;\n  font-weight: 600px;\n  margin-bottom: 20px;\n  margin-top: 20px;\n"]))),x=h.Z.p(c||(c=(0,d.Z)(["\n  font-family: 'Montserrat', sans-serif;\n  line-height: 1.5;\n  font-size: 20px;\n  font-weight: 400px;\n"]))),m=t(2881),w=t(184),Z=function(){var n=(0,p.useState)([]),e=(0,i.Z)(n,2),t=e[0],r=e[1],a=(0,p.useState)(!1),c=(0,i.Z)(a,2),s=c[0],d=c[1],h=(0,p.useState)(null),Z=(0,i.Z)(h,2),y=Z[0],b=Z[1],k=(0,p.useState)("idle"),j=(0,i.Z)(k,2),S=j[0],_=j[1],U=(0,l.UO)().movieId;return(0,p.useEffect)((function(){var n=new AbortController,e=function(){var n=(0,u.Z)(o().mark((function n(){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return _("loading"),d(!0),n.prev=2,n.next=5,(0,f.bG)(U);case 5:e=n.sent,r(e),_("success"),n.next=14;break;case 10:n.prev=10,n.t0=n.catch(2),b(n.t0),_("error");case 14:d(!1);case 15:case"end":return n.stop()}}),n,null,[[2,10]])})));return function(){return n.apply(this,arguments)}}();return e(),function(){n.abort()}}),[U]),"idle"===S?null:"loading"===S&&s?(0,w.jsx)(m.Z,{}):"error"===S?(0,w.jsxs)("div",{children:["Error: ",y.message]}):0===t.length&&"success"===S?(0,w.jsx)(x,{children:"Sorry, we don't have any reviews for this movie."}):(0,w.jsx)(v,{children:t.map((function(n){var e=n.id,t=n.author,r=n.content;return(0,w.jsx)("div",{children:(0,w.jsx)("ul",{children:(0,w.jsxs)("li",{children:[(0,w.jsxs)(g,{children:["Author: ",t]}),(0,w.jsx)(x,{children:r})]})})},e)}))})}},85:function(n,e,t){t.d(e,{Bj:function(){return d},On:function(){return p},Xe:function(){return o},bG:function(){return l},p2:function(){return f}});var r=t(5861),a=t(4687),c=t.n(a),u=t(1243),i="https://api.themoviedb.org/",s="5aaf87e447efebf6d5c12466ddbc5de2",o=function(){var n=(0,r.Z)(c().mark((function n(){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(i,"/3/trending/movie/day?"),{params:{api_key:s,page:1,language:"en-US"}});case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(i,"/3/movie/").concat(e),{params:{api_key:s,language:"en-US"}});case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(i,"/3/movie/").concat(e,"/credits?api_key=").concat(s,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(i,"/3/movie/").concat(e,"/reviews?api_key=").concat(s,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(c().mark((function n(e,t){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(i,"/3/search/movie?api_key=").concat(s,"&query=").concat(e,"'&page=").concat(t,"&language=en-US&include_adult=false"));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=387.fd7d7722.chunk.js.map