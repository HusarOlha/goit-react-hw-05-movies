"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[42],{9245:function(n,e,t){t.d(e,{Z:function(){return s}});var r,a=t(5243),i=t(168),o=t(8789).ZP.div(r||(r=(0,i.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),c=t(184),s=function(){return(0,c.jsx)(o,{children:(0,c.jsx)(a.g4,{height:"80",width:"80",radius:"13",color:"white",ariaLabel:"three-dots-loading",wrapperStyle:{},wrapperClassName:"",visible:!0})})}},7047:function(n,e,t){t.d(e,{e:function(){return v}});var r,a,i,o,c,s,u=t(1087),l=t(168),p=t(5706),d=p.Z.div(r||(r=(0,l.Z)([""]))),f=p.Z.h2(a||(a=(0,l.Z)(["\n  color: white;\n  margin-bottom: 20px;\n  font-size: 18px;\n  font-family: 'Montserrat', sans-serif;\n"]))),h=p.Z.ul(i||(i=(0,l.Z)(["\n  text-align: center;\n\n  grid-gap: 20px;\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n"]))),g=p.Z.img(o||(o=(0,l.Z)(["\n  transition: transform 0.3s ease-in-out;\n  border-radius: 5px;\n\n  &:hover {\n    transform: scale(1.1);\n  }\n"]))),m=(p.Z.h1(c||(c=(0,l.Z)(["\n  text-align: center;\n  margin-bottom: 20px;\n  margin-top: 20px;\n  font-family: 'Montserrat', sans-serif;\n  line-height: 1.4;\n"]))),p.Z.li(s||(s=(0,l.Z)(["\n  padding: 20px;\n  border-radius: 10px;\n  border: 1px solid white;\n  &:hover {\n    border: 1px solid yellow;\n  }\n"])))),x=t(184),v=function(n){var e=n.items,t=n.location;return(0,x.jsx)(d,{children:(0,x.jsx)(h,{children:e.map((function(n){return(0,x.jsxs)(m,{children:[(0,x.jsx)(f,{children:n.title}),(0,x.jsx)(u.rU,{to:"/movies/".concat(n.id),state:{from:t},children:(0,x.jsx)(g,{src:"https://image.tmdb.org/t/p/w200".concat(n.poster_path),alt:n.title})})]},n.id)}))})})}},85:function(n,e,t){t.d(e,{Bj:function(){return f},On:function(){return l},Xe:function(){return u},bG:function(){return d},p2:function(){return p}});var r=t(5861),a=t(4687),i=t.n(a),o=t(1243),c="https://api.themoviedb.org/",s="5aaf87e447efebf6d5c12466ddbc5de2",u=function(){var n=(0,r.Z)(i().mark((function n(){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("".concat(c,"/3/trending/movie/day?"),{params:{api_key:s,page:1,language:"en-US"}});case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("".concat(c,"/3/movie/").concat(e),{params:{api_key:s,language:"en-US"}});case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("".concat(c,"/3/movie/").concat(e,"/credits?api_key=").concat(s,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("".concat(c,"/3/movie/").concat(e,"/reviews?api_key=").concat(s,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(i().mark((function n(e,t){var r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("".concat(c,"/3/search/movie?api_key=").concat(s,"&query=").concat(e,"'&page=").concat(t,"&language=en-US&include_adult=false"));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}()},1042:function(n,e,t){t.r(e),t.d(e,{default:function(){return F}});var r,a,i,o,c,s=t(5861),u=t(9439),l=t(4687),p=t.n(l),d=t(5705),f=t(9014),h=t(168),g=t(5706),m=g.Z.section(r||(r=(0,h.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 64px;\n  padding-right: 24px;\n  padding-left: 24px;\n  padding-top: 12px;\n  padding-bottom: 12px;\n  color: #fff;\n  background-color: black;\n\n  margin-bottom: 30px;\n"]))),x=(0,g.Z)(d.l0)(a||(a=(0,h.Z)(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  max-width: 600px;\n  background-color: #fff;\n  border-radius: 20px;\n  overflow: hidden;\n"]))),v=g.Z.button(i||(i=(0,h.Z)(["\n  display: inline-block;\n  width: 48px;\n  height: 48px;\n  border: 0;\n  background-image: url('https://svgsilh.com/svg/159582.svg');\n  background-size: 60%;\n  background-repeat: no-repeat;\n  background-position: center;\n  opacity: 0.6;\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n  outline: none;\n"]))),b=g.Z.span(o||(o=(0,h.Z)(["\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  clip-path: inset(50%);\n  border: 0;\n"]))),Z=(0,g.Z)(d.gN)(c||(c=(0,h.Z)(["\n  display: inline-block;\n  width: 100%;\n  font: inherit;\n  font-size: 20px;\n  border: none;\n  outline: none;\n  padding-left: 4px;\n  padding-right: 4px;\n"]))),w=t(184),y={value:""},k=function(n){var e=n.onSubmit;return(0,w.jsx)(m,{children:(0,w.jsx)(d.J9,{initialValues:y,onSubmit:function(n,t){var r=t.resetForm;n.value.trim()?(e(n.value),r()):f.Am.error("Please enter a search query")},children:function(n){var e=n.handleSubmit;return(0,w.jsxs)(x,{onSubmit:e,children:[(0,w.jsx)(v,{type:"submit",className:"button",children:(0,w.jsx)(b,{className:"SearchForm-button-label",children:"Find"})}),(0,w.jsx)(Z,{type:"text",name:"value",autoFocus:!0,placeholder:"Search movie",autoComplete:"off"})]})}})})},j=t(2791),S=t(85),_=t(7047),U=t(9245),C=t(1087),z=t(7689),F=function(){var n,e=(0,j.useState)(1),t=(0,u.Z)(e,2),r=t[0],a=t[1],i=(0,j.useState)([]),o=(0,u.Z)(i,2),c=o[0],l=o[1],d=(0,j.useState)(!1),h=(0,u.Z)(d,2),g=h[0],m=h[1],x=(0,j.useState)(null),v=(0,u.Z)(x,2),b=v[0],Z=v[1],y=(0,j.useState)("idle"),F=(0,u.Z)(y,2),N=F[0],A=F[1],q=(0,C.lr)(),B=(0,u.Z)(q,2),E=B[0],M=B[1],P=null!==(n=E.get("name"))&&void 0!==n?n:"",G=(0,z.TH)();(0,j.useEffect)((function(){m(!0),A("loading");var n=new AbortController,e=function(){var e=(0,s.Z)(p().mark((function e(){var t;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,P){e.next=5;break}return m(!1),A("idle"),e.abrupt("return");case 5:return e.next=7,(0,S.Bj)(P,r,n);case 7:t=e.sent,l(t.results),m(!1),A("succeeded"),0===t.results.length&&f.Am.error("Sorry, we cannot find any movies for your search."),e.next=19;break;case 14:e.prev=14,e.t0=e.catch(0),Z(e.t0),m(!1),A("failed");case 19:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(){return e.apply(this,arguments)}}();return e(),function(){n.abort()}}),[r,P]);return"loading"===N&&g?(0,w.jsx)(U.Z,{}):"failed"===N?(console.log(b.message),(0,w.jsxs)("div",{children:["Error: ",b.message]})):(0,w.jsxs)("div",{children:[b&&"error"!==b.message&&(0,w.jsxs)("p",{children:["Sorry we have error:",b.message," please reload page!"]}),(0,w.jsx)(k,{value:P,onSubmit:function(n){M(""!==n?{name:n}:{}),l([]),a(1)}}),(0,w.jsx)(_.e,{items:c,location:{from:G}})]})}}}]);
//# sourceMappingURL=42.44af5a09.chunk.js.map