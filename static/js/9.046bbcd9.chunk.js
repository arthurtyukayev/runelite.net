(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{204:function(t,e,c){},469:function(t,e,c){},484:function(t,e,c){"use strict";c.r(e);var n=c(28),r=c(29),a=c(32),i=c(30),o=c(31),s=c(0),u=c(86),l=c(41),b=c.n(l),f=c(83),O=c(23),p=c(15),j=c(46),h=c(33),d=(c(469),c(204),function(t){return"https://static.runelite.net/cache/item/icon/".concat(t,".png")}),m=function(t){function e(){return Object(n.a)(this,e),Object(a.a)(this,Object(i.a)(e).apply(this,arguments))}return Object(o.a)(e,t),Object(r.a)(e,[{key:"componentDidMount",value:function(){var t=this;this.props.fetchReleases().then(function(){return t.props.fetchItemInfo(t.props.itemIds)})}},{key:"render",value:function(t){var e=t.name,c=t.icon,n=t.itemIds,r=t.items,a=(t.version,t.csv);return Object(s.c)("div",null,Object(s.c)(f.a,{title:"".concat(e," tag tab - ").concat(b.a.title)}),Object(s.c)(u.a,{class:"tag-container"},Object(s.c)("h1",null,Object(s.c)("img",{alt:"",src:d(c)})," ",e),Object(s.c)("hr",null),Object(s.c)("div",{class:"row"},Object(s.c)("pre",{class:"pre-select"},a),n.map(function(t){var e=r.find(function(e){return e.id===t})||{},c=e.name||"",n=e.examine||"",a=c.replace(" ","_");return Object(s.c)("div",{class:"card"},Object(s.c)("div",{class:"tooltip-tag"},Object(s.c)("a",{href:"https://oldschool.runescape.wiki/w/".concat(a)},Object(s.c)("img",{class:"card-img-top",alt:c,src:d(t)})),Object(s.c)("div",{class:"tooltip-tag-text"},Object(s.c)("b",null,e.name||"Loading..."),Object(s.c)("br",null),Object(s.c)("small",null,n))))}))))}}]),e}(s.a);e.default=Object(h.b)(function(t,e){var c=e.csv.split(",");return{name:c.shift(),icon:c.shift(),itemIds:c=c.map(function(t){return Math.abs(parseInt(t,10))}).sort(function(t,e){return t-e}),items:t.item||[],version:Object(p.f)(t)}},function(t){return Object(O.b)({fetchReleases:p.c,fetchItemInfo:j.b},t)})(m)},83:function(t,e,c){"use strict";var n=c(28),r=c(29),a=c(32),i=c(30),o=c(31),s=function(t){function e(){return Object(n.a)(this,e),Object(a.a)(this,Object(i.a)(e).apply(this,arguments))}return Object(o.a)(e,t),Object(r.a)(e,[{key:"componentDidMount",value:function(){var t=this.props,e=t.title,c=t.description,n=t.author;document.querySelector("title").text=e||"",document.querySelector("meta[name=description]").setAttribute("content",c||""),document.querySelector("meta[name=author]").setAttribute("content",n||"")}},{key:"render",value:function(){return null}}]),e}(c(0).a);e.a=s},85:function(t,e,c){"use strict";function n(t,e){if(null==t)return{};var c,n,r=function(t,e){if(null==t)return{};var c,n,r={},a=Object.keys(t);for(n=0;n<a.length;n++)c=a[n],e.indexOf(c)>=0||(r[c]=t[c]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)c=a[n],e.indexOf(c)>=0||Object.prototype.propertyIsEnumerable.call(t,c)&&(r[c]=t[c])}return r}c.d(e,"a",function(){return n})},86:function(t,e,c){"use strict";var n=c(1),r=c(85),a=c(0),i=function(){return Object(a.c)("div",null,Object(a.c)("hr",null),"Developed with ",Object(a.c)("i",{class:"fas fa-heart"})," and ",Object(a.c)("i",{class:"fas fa-coffee"})," ","using ",Object(a.c)("a",{href:"https://getbootstrap.com/"},"Bootstrap"),","," ",Object(a.c)("a",{href:"https://reactjs.org/"},"React")," and"," ",Object(a.c)("a",{href:"https://fontawesome.com/"},"Font Awesome"))};e.a=function(t){var e=t.children,c=t.fullWidth,o=Object(r.a)(t,["children","fullWidth"]);return o.class=o.class?"container "+o.class:"container",o.style=Object(n.a)({},o.style||{},{maxWidth:c?"100%":""}),Object(a.c)("div",Object.assign({},o,{id:"layout"}),e,Object(a.c)(i,null))}}}]);
//# sourceMappingURL=9.046bbcd9.chunk.js.map