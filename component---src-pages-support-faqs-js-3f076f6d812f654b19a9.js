(self.webpackChunkappvity_website=self.webpackChunkappvity_website||[]).push([[920],{9531:function(e,t,a){"use strict";a.d(t,{Z:function(){return C}});var n,l=a(2122),c=a(9756),o=a(5900),r=a.n(o),s=a(7294),i=a(5513),p=a(9541),u=a(9488),m=a(8120),d=a(5175),h=a(5160),y=a(1714),E=a(9758),w=a(9059),v={height:["marginTop","marginBottom"],width:["marginLeft","marginRight"]};function f(e,t){var a=t["offset"+e[0].toUpperCase()+e.slice(1)],n=v[e];return a+parseInt((0,d.Z)(t,n[0]),10)+parseInt((0,d.Z)(t,n[1]),10)}var Z=((n={})[h.Wj]="collapse",n[h.Ix]="collapsing",n[h.d0]="collapsing",n[h.cn]="collapse show",n),g={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,getDimensionValue:f},N=s.forwardRef((function(e,t){var a=e.onEnter,n=e.onEntering,o=e.onEntered,i=e.onExit,p=e.onExiting,u=e.className,m=e.children,d=e.dimension,v=void 0===d?"height":d,g=e.getDimensionValue,N=void 0===g?f:g,k=(0,c.Z)(e,["onEnter","onEntering","onEntered","onExit","onExiting","className","children","dimension","getDimensionValue"]),x="function"==typeof v?v():v,b=(0,s.useMemo)((function(){return(0,E.Z)((function(e){e.style[x]="0"}),a)}),[x,a]),_=(0,s.useMemo)((function(){return(0,E.Z)((function(e){var t="scroll"+x[0].toUpperCase()+x.slice(1);e.style[x]=e[t]+"px"}),n)}),[x,n]),q=(0,s.useMemo)((function(){return(0,E.Z)((function(e){e.style[x]=null}),o)}),[x,o]),C=(0,s.useMemo)((function(){return(0,E.Z)((function(e){e.style[x]=N(x,e)+"px",(0,w.Z)(e)}),i)}),[i,N,x]),K=(0,s.useMemo)((function(){return(0,E.Z)((function(e){e.style[x]=null}),p)}),[x,p]);return s.createElement(h.ZP,(0,l.Z)({ref:t,addEndListener:y.Z},k,{"aria-expanded":k.role?k.in:null,onEnter:b,onEntering:_,onEntered:q,onExit:C,onExiting:K}),(function(e,t){return s.cloneElement(m,(0,l.Z)({},t,{className:r()(u,m.props.className,Z[e],"width"===x&&"width")}))}))}));N.defaultProps=g;var k=N,x=a(5795),b=s.forwardRef((function(e,t){var a=e.children,n=e.eventKey,o=(0,c.Z)(e,["children","eventKey"]),r=(0,s.useContext)(x.Z);return s.createElement(m.Z.Provider,{value:null},s.createElement(k,(0,l.Z)({ref:t,in:r===n},o),s.createElement("div",null,s.Children.only(a))))}));b.displayName="AccordionCollapse";var _=b,q=s.forwardRef((function(e,t){var a=(0,i.Ch)(e,{activeKey:"onSelect"}),n=a.as,o=void 0===n?"div":n,u=a.activeKey,d=a.bsPrefix,h=a.children,y=a.className,E=a.onSelect,w=(0,c.Z)(a,["as","activeKey","bsPrefix","children","className","onSelect"]),v=r()(y,(0,p.vE)(d,"accordion"));return s.createElement(x.Z.Provider,{value:u||null},s.createElement(m.Z.Provider,{value:E||null},s.createElement(o,(0,l.Z)({ref:t},w,{className:v}),h)))}));q.displayName="Accordion",q.Toggle=u.Z,q.Collapse=_;var C=q},5795:function(e,t,a){"use strict";var n=a(7294).createContext(null);n.displayName="AccordionContext",t.Z=n},9488:function(e,t,a){"use strict";a.d(t,{n:function(){return s}});var n=a(2122),l=a(9756),c=a(7294),o=a(8120),r=a(5795);function s(e,t){var a=(0,c.useContext)(r.Z),n=(0,c.useContext)(o.Z);return function(l){n&&n(e===a?null:e,l),t&&t(l)}}var i=c.forwardRef((function(e,t){var a=e.as,o=void 0===a?"button":a,r=e.children,i=e.eventKey,p=e.onClick,u=(0,l.Z)(e,["as","children","eventKey","onClick"]),m=s(i,p);return"button"===o&&(u.type="button"),c.createElement(o,(0,n.Z)({ref:t,onClick:m},u),r)}));t.Z=i},89:function(e,t,a){"use strict";var n=a(7294),l=a(5795),c=a(9488);t.Z=function(e){var t=e.children,a=e.eventKey,o=e.callback,r=(0,n.useContext)(l.Z),s=(0,c.n)(a,(function(){return o&&o(a)})),i=r===a;return n.createElement("ul",null,n.createElement("li",{className:i?"active":""},n.createElement("button",{type:"button",className:i?"active":"",onClick:s},t)))}},3596:function(e,t,a){"use strict";a.r(t);var n=a(3552),l=a(7294),c=a(994),o=a(7408),r=a(9531),s=a(3636),i=a(6802),p=a(6187),u=a(8497),m=a(9921),d=a(2203),h=a(89),y=function(e){var t=e.localSearchFaqs,a=e.location,n=e.faqs_about_appvity,r=e.faqs_etask,s=e.faqs_ehelpdesk,i=d.parse(a.search).search,p=(0,l.useState)(i||""),u=p[0],h=p[1],y=(0,m.a)(u,t.index,t.store);return l.createElement(l.Fragment,null,l.createElement("div",{className:"app-how-can-we-help-you-detail-search"},l.createElement("input",{id:"search",className:"app-how-can-we-help-you-detail-search-input",placeholder:"Ask a question",value:u,onChange:function(e){h(e.target.value),document.querySelector(".app-how-can-we-help-you .app-how-can-we-help-you-detail .app-how-can-we-help-you-detail-search .app-how-can-we-help-you-detail-icon-close").style.display="block",0===document.querySelector(".app-how-can-we-help-you .app-how-can-we-help-you-detail .app-how-can-we-help-you-detail-search .app-how-can-we-help-you-detail-search-input").value.length?(document.querySelector(".app-how-can-we-help-you .app-how-can-we-help-you-detail .app-how-can-we-help-you-detail-search .app-how-can-we-help-you-detail-search-btn").style.display="block",document.querySelector(".app-how-can-we-help-you .app-how-can-we-help-you-detail .app-how-can-we-help-you-detail-search .app-how-can-we-help-you-detail-icon-close").style.display="none"):document.querySelector(".app-how-can-we-help-you .app-how-can-we-help-you-detail .app-how-can-we-help-you-detail-search .app-how-can-we-help-you-detail-search-btn").style.display="none"}}),l.createElement("input",{className:"app-how-can-we-help-you-detail-search-btn",type:"button",value:"Search"}),l.createElement("img",{className:"app-how-can-we-help-you-detail-icon-search",src:"/app-icon-search.svg",alt:"app icon search"}),l.createElement("input",{className:"app-how-can-we-help-you-detail-icon-close",type:"button",onClick:function(e){h(e.target.value),document.querySelector(".app-how-can-we-help-you .app-how-can-we-help-you-detail .app-how-can-we-help-you-detail-search .app-how-can-we-help-you-detail-search-input").value="",document.querySelector(".app-how-can-we-help-you .app-how-can-we-help-you-detail .app-how-can-we-help-you-detail-search .app-how-can-we-help-you-detail-search-btn").style.display="block",document.querySelector(".app-how-can-we-help-you .app-how-can-we-help-you-detail .app-how-can-we-help-you-detail-search .app-how-can-we-help-you-detail-icon-close").style.display="none"}})),l.createElement("div",{className:"app-how-can-we-help-you-search-results"},u?y.length>0?l.createElement(E,{results:y}):l.createElement(c.Z,null,l.createElement(o.Z,{xs:12,md:12,lg:2}),l.createElement(o.Z,{xs:12,md:12,lg:8},l.createElement("h6",{className:"app-no-results"},"Sorry, couldn't find any posts matching this search.")),l.createElement(o.Z,{xs:12,md:12,lg:2})):l.createElement(w,{faqs_about_appvity:n,faqs_etask:r,faqs_ehelpdesk:s})))},E=function(e){return e.results.map((function(e){var t=e.title||e.slug,a=e.id,n=e.html;return l.createElement(c.Z,null,l.createElement(o.Z,{xs:12,md:12,lg:2}),l.createElement(o.Z,{xs:12,md:12,lg:8},l.createElement(r.Z,{className:"app-how-can-we-help-you-detail-content",key:a,defaultActiveKey:a},l.createElement("div",{className:"app-how-can-we-help-you-detail-content-header"},l.createElement(h.Z,{eventKey:a},l.createElement("h6",null,t))),l.createElement(r.Z.Collapse,{eventKey:a},l.createElement("div",{className:"app-how-can-we-help-you-detail-content-body",dangerouslySetInnerHTML:{__html:n}})))),l.createElement(o.Z,{xs:12,md:12,lg:2}))}))},w=function(e){var t=e.faqs_about_appvity,a=e.faqs_etask,n=e.faqs_ehelpdesk;return l.createElement(s.Z.Container,{id:"left-tabs-example",defaultActiveKey:"about-appvity"},l.createElement(c.Z,null,l.createElement(o.Z,{xs:12,md:12,lg:2},l.createElement(i.Z,{variant:"pills",className:"flex-column"},l.createElement(i.Z.Item,null,l.createElement(i.Z.Link,{eventKey:"about-appvity"},l.createElement("h5",null,"About Appvity"))),l.createElement(i.Z.Item,null,l.createElement(i.Z.Link,{eventKey:"etask"},l.createElement("h5",null,"eTask"))),l.createElement(i.Z.Item,null,l.createElement(i.Z.Link,{eventKey:"ehelpdesk"},l.createElement("h5",null,"eHelpdesk"))))),l.createElement(o.Z,{className:"app-how-can-we-help-you-detail-col-custom",xs:12,md:12,lg:10},l.createElement(s.Z.Content,null,l.createElement(s.Z.Pane,{eventKey:"about-appvity"},t.map((function(e){return l.createElement(r.Z,{className:"app-how-can-we-help-you-detail-content",key:e.id,defaultActiveKey:1},l.createElement("div",{className:"app-how-can-we-help-you-detail-content-header"},l.createElement(h.Z,{eventKey:e.frontmatter.keyNumber},l.createElement("h6",null,e.frontmatter.title))),l.createElement(r.Z.Collapse,{eventKey:e.frontmatter.keyNumber},l.createElement("div",{className:"app-how-can-we-help-you-detail-content-body",dangerouslySetInnerHTML:{__html:e.html}})))}))),l.createElement(s.Z.Pane,{eventKey:"etask"},a.map((function(e){return l.createElement(r.Z,{className:"app-how-can-we-help-you-detail-content",key:e.id,defaultActiveKey:1},l.createElement("div",{className:"app-how-can-we-help-you-detail-content-header"},l.createElement(h.Z,{eventKey:e.frontmatter.keyNumber},l.createElement("h6",null,e.frontmatter.title))),l.createElement(r.Z.Collapse,{eventKey:e.frontmatter.keyNumber},l.createElement("div",{className:"app-how-can-we-help-you-detail-content-body",dangerouslySetInnerHTML:{__html:e.html}})))}))),l.createElement(s.Z.Pane,{eventKey:"ehelpdesk"},n.map((function(e){return l.createElement(r.Z,{className:"app-how-can-we-help-you-detail-content",key:e.id,defaultActiveKey:1},l.createElement("div",{className:"app-how-can-we-help-you-detail-content-header"},l.createElement(h.Z,{eventKey:e.frontmatter.keyNumber},l.createElement("h6",null,e.frontmatter.title))),l.createElement(r.Z.Collapse,{eventKey:e.frontmatter.keyNumber},l.createElement("div",{className:"app-how-can-we-help-you-detail-content-body",dangerouslySetInnerHTML:{__html:e.html}})))})))))))},v=function(e){function t(){return e.apply(this,arguments)||this}return(0,n.Z)(t,e),t.prototype.render=function(){var e=this.props,t=e.data,a=e.location,n=t.localSearchFaqs,r=t.allMarkdownRemark.nodes,s=t.faqs_etask.nodes,i=t.faqs_ehelpdesk.nodes,m=t.faqs_onlinedoc_have_answer.nodes,d=t.faqs_you_have_question.nodes;return l.createElement(u.Z,null,l.createElement("div",{className:"main-content-padding"},l.createElement("div",{className:"app-faqs-introduction","data-sal":"fade","data-sal-duration":"1000","data-sal-delay":"100","data-sal-easing":"ease"},l.createElement(p.Z,null,l.createElement("h1",null,"Frequently Asked Questions"))),l.createElement("div",{className:"app-general-seciton app-how-can-we-help-you","data-sal":"fade","data-sal-duration":"1000","data-sal-delay":"100","data-sal-easing":"ease"},l.createElement(p.Z,null,l.createElement(c.Z,null,l.createElement(o.Z,{xs:12,md:12,lg:2}),l.createElement(o.Z,{xs:12,md:12,lg:8},l.createElement("div",{className:"app-title"},l.createElement("h2",null,"Hi! How can we help you?"))),l.createElement(o.Z,{xs:12,md:12,lg:2})),l.createElement("div",{className:"app-how-can-we-help-you-detail"},l.createElement(y,{localSearchFaqs:n,location:a,faqs_about_appvity:r,faqs_etask:s,faqs_ehelpdesk:i})))),l.createElement("div",{className:"app-general-seciton app-online-documentation-answer","data-sal":"fade","data-sal-duration":"1000","data-sal-delay":"100","data-sal-easing":"ease"},l.createElement(p.Z,null,l.createElement(c.Z,null,l.createElement(o.Z,{xs:12,md:12,lg:2}),l.createElement(o.Z,{xs:12,md:12,lg:8},l.createElement("div",{className:"app-title"},l.createElement("h2",null,"Online documentation might have your answer"))),l.createElement(o.Z,{xs:12,md:12,lg:2})),l.createElement("div",{className:"app-online-documentation-answer-detail"},l.createElement(c.Z,null,l.createElement(o.Z,{xs:12,md:12,lg:2}),l.createElement(o.Z,{xs:12,md:12,lg:8},l.createElement(c.Z,null,m.map((function(e){return l.createElement(o.Z,{className:"app-online-documentation-answer-detail-col-custom",xs:6,md:3,lg:3,key:e.id},l.createElement("div",{className:"app-online-documentation-answer-detail-content",dangerouslySetInnerHTML:{__html:e.html}}))})))),l.createElement(o.Z,{xs:12,md:12,lg:2}))))),l.createElement("div",{className:"app-general-seciton app-you-still-have-question","data-sal":"fade","data-sal-duration":"1000","data-sal-delay":"100","data-sal-easing":"ease"},l.createElement(p.Z,null,l.createElement(c.Z,null,l.createElement(o.Z,{xs:12,md:12,lg:2}),l.createElement(o.Z,{xs:12,md:12,lg:8},d.map((function(e){return l.createElement("div",{className:"app-you-still-have-question-detail",dangerouslySetInnerHTML:{__html:e.html},key:e.id})}))),l.createElement(o.Z,{xs:12,md:12,lg:2}))))))},t}(l.Component);t.default=v}}]);
//# sourceMappingURL=component---src-pages-support-faqs-js-3f076f6d812f654b19a9.js.map