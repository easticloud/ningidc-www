(window.webpackJsonp=window.webpackJsonp||[]).push([[2,4],{411:function(t,n,e){"use strict";var o=e(2),c=e(423);o({target:"String",proto:!0,forced:e(424)("link")},{link:function(t){return c(this,"a","href",t)}})},412:function(t){t.exports=JSON.parse('{"c":[{"name":"首页","link":"/"},{"name":"服务器租用","link":"http://www.98dns.com/server.asp"},{"name":"服务器托管","link":"http://www.98dns.com/tuoguan.asp"},{"name":"机柜大带宽","link":"http://www.98dns.com/server.asp"},{"name":"企业应用","link":"http://www.025108.com/"},{"name":"关于我们","link":"/about"}],"a":[{"title":"爆款云服务器推荐","desc":"适用中小企业官网、网上商城、综合性网站","link":"/about","img":"index/01.png"}],"d":["7*24小时服务","免费备案","无忧退订","全周期专业服务"],"b":{"contact":{"title":"联系我们","link":"/about","desc":["咨询热线：","025-84850113","邮箱：x15335159293@189.cn","商务合作：15335159293（黄经理）"]},"rental":{"title":"服务器租用","link":"http://www.98dns.com/server.asp","list":[{"title":"南京服务器租用","link":"http://www.98dns.com/server.asp"},{"title":"香港服务器租用","link":"http://www.98dns.com/server.asp"},{"title":"云服务器租用","link":"http://www.98dns.com/server.asp"},{"title":"VPS主机","link":"http://www.98dns.com/server.asp"}]},"escrow":{"title":"服务器托管","link":"http://www.98dns.com/tuoguan.asp","list":[{"title":"苜蓿园机房托管","link":"http://www.98dns.com/tuoguan.asp"},{"title":"泰山新村机房托管","link":"http://www.98dns.com/tuoguan.asp"},{"title":"烽火机房托管","link":"http://www.98dns.com/tuoguan.asp"}]},"server":{"title":"机柜带宽","link":"http://www.98dns.com/server.asp","list":[{"title":"电信机柜","link":"http://www.98dns.com/server.asp"},{"title":"移动机柜","link":"http://www.98dns.com/server.asp"},{"title":"电信带宽","link":"http://www.98dns.com/server.asp"},{"title":"移动带宽","link":"http://www.98dns.com/server.asp"}]},"ningidc":{"title":"关注四重奏","label":"更多资讯关注微信公众号","more":["随时了解最新资讯","关注三体公众号"]}}}')},413:function(t,n,e){t.exports=e.p+"img/top.84a5c0a.svg"},416:function(t,n,e){t.exports=e.p+"img/icon-01.a8778d3.svg"},417:function(t,n,e){t.exports=e.p+"img/icon-02.655ea16.svg"},418:function(t,n,e){t.exports=e.p+"img/icon-03.1c2e9ad.svg"},419:function(t,n,e){t.exports=e.p+"img/icon-04.38541ef.svg"},420:function(t,n,e){t.exports=e.p+"img/phone.1fce5db.svg"},421:function(t,n,e){t.exports=e.p+"img/code.ef21b9b.jpg"},422:function(t,n,e){},423:function(t,n,e){var o=e(4),c=e(24),r=e(13),l=/"/g,v=o("".replace);t.exports=function(t,n,e,o){var d=r(c(t)),w="<"+n;return""!==e&&(w+=" "+e+'="'+v(r(o),l,"&quot;")+'"'),w+">"+d+"</"+n+">"}},424:function(t,n,e){var o=e(3);t.exports=function(t){return o((function(){var n=""[t]('"');return n!==n.toLowerCase()||n.split('"').length>3}))}},425:function(t,n,e){"use strict";e.r(n);var o={data:function(){return{activeShow:!1}},methods:{goTop:function(){document.documentElement.scrollIntoView({behavior:"smooth"})},handleScroll:function(){var t=document.documentElement.scrollTop||document.body.scrollTop;this.activeShow=t>500}},mounted:function(){window.addEventListener("scroll",this.handleScroll,!0)}},c=(e(429),e(58)),component=Object(c.a)(o,(function(){var t=this,n=t._self._c;return t.activeShow?n("div",{ref:"goTop",staticClass:"m-common-top",on:{click:t.goTop}},[n("img",{attrs:{src:e(413)}})]):t._e()}),[],!1,null,null,null);n.default=component.exports},428:function(t,n,e){},429:function(t,n,e){"use strict";e(422)},439:function(t,n,e){var map={"./icon-01.svg":416,"./icon-02.svg":417,"./icon-03.svg":418,"./icon-04.svg":419};function o(t){var n=c(t);return e(n)}function c(t){if(!e.o(map,t)){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}return map[t]}o.keys=function(){return Object.keys(map)},o.resolve=c,t.exports=o,o.id=439},440:function(t,n,e){"use strict";e(428)},450:function(t,n,e){"use strict";e.r(n);e(411);var o=e(412),c={data:function(){return{icon:o.d,footer:o.b}},components:{CommonTop:e(425).default},computed:{contact:function(){return this.footer.contact},server:function(){return this.footer.server},escrow:function(){return this.footer.escrow},rental:function(){return this.footer.rental},ningidc:function(){return this.footer.ningidc}}},r=(e(440),e(58)),component=Object(r.a)(c,(function(){var t=this,n=t._self._c;return n("div",{staticClass:"c-footer"},[n("CommonTop"),t._v(" "),n("div",{staticClass:"icons"},[n("div",{staticClass:"wp"},t._l(t.icon,(function(o,i){return n("div",{key:i,staticClass:"item"},[n("img",{staticClass:"icon",attrs:{src:e(439)("./icon-0".concat(i+1,".svg"))}}),t._v(" "),n("span",{staticClass:"name"},[t._v(t._s(o))])])})),0)]),t._v(" "),n("div",{staticClass:"content wp"},[n("div",{staticClass:"box"},[n("div",{staticClass:"item first"},[n("a",{staticClass:"title",attrs:{href:t.contact.link}},[t._v(t._s(t.contact.title))]),t._v(" "),t._l(t.contact.desc,(function(o,i){return n("span",{key:i,class:"desc desc-".concat(i+1)},[1==i?n("img",{staticClass:"icon",attrs:{src:e(420)}}):t._e(),t._v("\n                    "+t._s(o)+"\n                ")])}))],2),t._v(" "),t._l([t.rental,t.escrow,t.server],(function(e,i){return n("div",{key:i,staticClass:"item"},[n("a",{staticClass:"title",attrs:{href:e.link}},[t._v(t._s(e.title))]),t._v(" "),n("div",{staticClass:"u-item"},t._l(e.list,(function(o,c){return n("a",{key:c,staticClass:"desc",attrs:{href:e.link}},[t._v(t._s(o.title))])})),0)])})),t._v(" "),n("div",{staticClass:"item five"},[n("a",{staticClass:"title",attrs:{href:t.ningidc.link}},[t._v(t._s(t.ningidc.title))]),t._v(" "),n("span",{staticClass:"label"},[t._v(t._s(t.ningidc.label))]),t._v(" "),n("img",{staticClass:"code",attrs:{src:e(421)}}),t._v(" "),n("div",{staticClass:"more"},t._l(t.ningidc.more,(function(e){return n("span",{key:e},[t._v(t._s(e))])})),0)])],2)]),t._v(" "),t._m(0)],1)}),[function(){var t=this,n=t._self._c;return n("div",{staticClass:"copyright"},[n("span",[t._v("© 2023 南京四重奏科贸有限公司")]),n("span",{staticClass:"line"},[t._v(" 丨 ")]),n("span",[t._v("苏ICP备15035679号")])])}],!1,null,null,null);n.default=component.exports;installComponents(component,{CommonTop:e(425).default})}}]);