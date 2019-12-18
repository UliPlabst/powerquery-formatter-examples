(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{203:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(207),i=(n(40),n(16),n(223),n(50),n(218)),l=n.n(i),s=(n(217),n(232),n(233)),c=n(208);n(248);var u=function(e){var t,n;function a(t){var n;return(n=e.call(this,t)||this).onToggle=function(){n.setState({toggled:!n.state.toggled})},n.state={toggled:null!=n.props.toggled&&n.props.toggled},n}return n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.prototype.render=function(){return r.a.createElement("div",{className:"toggle-content-container"},r.a.createElement("a",{onClick:this.onToggle},0==this.state.toggled?r.a.createElement(c.b,null):r.a.createElement(c.c,null),this.props.head),1==this.props.toggleDisplayOnly?r.a.createElement("div",{className:"toggle-content-children "+(0==this.state.toggled?"no-display":"")},this.props.children):1==this.state.toggled?r.a.createElement("div",{className:"toggle-content-children"},this.props.children):"")},a}(r.a.Component);var m=function(e){var t,n;function a(){return e.apply(this,arguments)||this}return n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.prototype.render=function(){var e=this.props.error;return r.a.createElement("div",{className:"error-display-container"},r.a.createElement("div",{className:"error-header"},e.message),r.a.createElement("div",null,"PARSER_ERROR"==e.kind?r.a.createElement("span",{className:"error"},"Could not parse your M code. We use the ",r.a.createElement("a",{href:"https://github.com/microsoft/powerquery-parser"},"official microsoft powerquery-parser")," so chances are that the issue is within your code."):"","CSS_ERROR"==e.kind?r.a.createElement("span",{className:"error"},"Could not parse your inline CSS. We use ",r.a.createElement("a",{href:"https://github.com/csstree/validator"},"csstree-validator")," for validation so chances are that the issue is within your css."):"","INVALID_CONFIG"==e.kind?r.a.createElement("span",{className:"error"},"Invalid configuration specified. Please check if your configuration matches the schema specified below."):"","INVALID_REQUEST_BODY"==e.kind?r.a.createElement("span",{className:"error"},"Invalid request body. This should not happen. Consider writing a bug report if the issue persists."):"","UNKNOWN_ENTITY"==e.kind?r.a.createElement("span",{className:"error"},"Encountered unknown node entity '",e.meta.kind,"'. This is a bug in our code. We still formatted your code but chances are that it is not formatted 100% properly. Please consider writing a bug report."):"","UNKNOWN"==e.kind?r.a.createElement("span",{className:"error"},"Encountered unknown error."):"","FORMATTER_ERROR"==e.kind?r.a.createElement("span",{className:"error"},"Formatter Error, could not format code."):""),r.a.createElement("div",null,r.a.createElement(u,{head:r.a.createElement("span",{title:"Information about the actual error that got thrown"},"Inner Error")},r.a.createElement("code",null,JSON.stringify(e.innerError,null,3)))),r.a.createElement("div",null,r.a.createElement(u,{head:r.a.createElement("span",{title:"Meta information about the error"},"Meta Info")},r.a.createElement("code",null,JSON.stringify(e.meta,null,3)))))},a}(r.a.Component),p=(n(19),n(69),n(249));function d(e,t,n,a,r,o,i){try{var l=e[o](i),s=l.value}catch(c){return void n(c)}l.done?t(s):Promise.resolve(s).then(a,r)}function h(e){return function(){var t=this,n=arguments;return new Promise(function(a,r){var o=e.apply(t,n);function i(e){d(o,a,r,i,l,"next",e)}function l(e){d(o,a,r,i,l,"throw",e)}i(void 0)})}}var f=function(){function e(){}return e.init=function(){this.db=new p.a("mFormatterDb"),this.db.version(1).stores({std:"options"})},e.storeOptions=function(){var e=h(l.a.mark(function e(t){var n=this;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise(function(e,a){n.db.table("std").put({options:JSON.stringify(t)}).then(function(){return e()},function(e){return a(e)})}));case 1:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),e.getOptions=function(){var e=h(l.a.mark(function e(){var t=this;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise(function(e,n){t.db.table("std").get("options").then(function(t){return e(t)},function(e){return n(e)})}));case 1:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),e}();var g={indentation:"&nbsp;&nbsp;",indentationLength:2,lineEnd:"<br/>",ws:"&nbsp;",lineWidth:100,numBrackets:3,escapeHtmlText:!0,alignPairedExpressionsByEqual:!1,inlineCssToggle:!0,inlineCss:"\n.constant.keyword {\ncolor: #c586c0;\n}\n\n.constant {\ncolor: #d4d4d4;\n}\n\n.identifier {\ncolor: #9cdcfe;\n}\n\n.operator {\ncolor: #d4d4d4;\n}\n\n.bracket {\nfont-weight: bold;\n}\n\n.bracket-0 {\ncolor: Gold;\n}\n\n.bracket-1 {\ncolor: GoldenRod;\n}\n\n.bracket-2 {\ncolor: DarkGoldenRod;\n}\n\n.type {\ncolor: #4ec9b0;\n}\n\n.literal.null {\ncolor: #569cd6;\n}\n\n.literal.string {\ncolor: #ce9178;\n}\n\n.literal {\ncolor: #dcdcaa;\n}\n\nbody {\nfont-family: monospace;\nbackground-color: #1e1e1e;\n}\n"};function E(e,t,n,a,r,o,i){try{var l=e[o](i),s=l.value}catch(c){return void n(c)}l.done?t(s):Promise.resolve(s).then(a,r)}var v=function(e){var t,n;function a(t){var n;(n=e.call(this,t)||this).handleChange=function(){var e,t=(e=l.a.mark(function e(t){var a;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a={},"checkbox"==t.target.type?a[t.target.name]=t.target.checked:a[t.target.name]=t.target.value,n.setState(a),e.next=5,f.storeOptions(n.getConfig());case 5:console.log("stored");case 6:case"end":return e.stop()}},e)}),function(){var t=this,n=arguments;return new Promise(function(a,r){var o=e.apply(t,n);function i(e){E(o,a,r,i,l,"next",e)}function l(e){E(o,a,r,i,l,"throw",e)}i(void 0)})});return function(e){return t.apply(this,arguments)}}();var a=JSON.parse(JSON.stringify(g));return n.state={indentLength:a.indentationLength.toString(),lineWidth:a.lineWidth.toString(),inlineCss:a.inlineCss.toString(),alignExpressionsByEqual:a.alignPairedExpressionsByEqual,numBrackets:a.numBrackets.toString(),inlineCssToggle:!0,indentLengthErr:null,numBracketsErr:null,inlineCssErr:null,lineWidthErr:null},n.props.initializer(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(n)),n}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var o=a.prototype;return o.componentDidMount=function(){},o.getConfig=function(){function e(e){return null!=e&&0==isNaN(e)}this.setState({lineWidthErr:null,numBracketsErr:null,indentLengthErr:null,inlineCssErr:null});var t={},n=+this.state.indentLength;0==e(n)?(!1,t.indentLengthErr="Could not parse integer."):n<0&&(!1,t.indentLengthErr="Invalid value, must be >= 0");var a=+this.state.lineWidth;0==e(a)?(!1,t.lineWidthErr="Could not parse integer."):a<0&&(!1,t.lineWidthErr="Invalid value, must be >= 0");var r=+this.state.numBrackets;return 0==e(r)?(!1,t.numBracketsErr="Could not parse integer."):r<0&&(!1,t.numBracketsErr="Invalid value, must be >= 0"),Object.assign({},g,{indentationLength:n,lineWidth:a,numBrackets:r,inlineCss:1==this.state.inlineCssToggle?this.state.inlineCss:null,alignPairedExpressionsByEqual:this.state.alignExpressionsByEqual,indentation:g.ws.repeat(n)})},o.render=function(){return r.a.createElement("div",{className:"options-container"},r.a.createElement("div",{className:"option"},r.a.createElement("label",null,r.a.createElement("span",{title:"Number of whitespace characters used to indent"},"Indentation"),null!=this.state.indentLengthErr?r.a.createElement("span",{className:"error"},this.state.indentLengthErr):"",r.a.createElement("input",{className:"input",name:"indentLength",onChange:this.handleChange,value:this.state.indentLength,type:"text",placeholder:"number of whitespace to indent"}))),r.a.createElement("div",{className:"option"},r.a.createElement("label",null,r.a.createElement("span",{title:"Number of characters allowed in one line. The formatter will try to break statements to fit into the line width. Some statements cannot be broken in a good way (like a very long string literal) and therefore the line width can be exceeded in some cases."},"Line width"),null!=this.state.lineWidthErr?r.a.createElement("span",{className:"error"},this.state.lineWidthErr):"",r.a.createElement("input",{className:"input",name:"lineWidth",onChange:this.handleChange,value:this.state.lineWidth,type:"text",placeholder:"line width"}))),r.a.createElement("div",{className:"option"},r.a.createElement("label",null,r.a.createElement("span",{title:"Number of different bracket classes. Brackets are given classes bracket-{number} for you to style matching brackets specifically."},"Number of brackets"),null!=this.state.numBracketsErr?r.a.createElement("span",{className:"error"},this.state.numBracketsErr):"",r.a.createElement("input",{className:"input",name:"numBrackets",onChange:this.handleChange,value:this.state.numBrackets,type:"text",placeholder:"Number of bracket classes"}))),r.a.createElement("div",{className:"option"},r.a.createElement("label",null,r.a.createElement("input",{className:"checkbox",name:"alignExpressionsByEqual",onChange:this.handleChange,checked:this.state.alignExpressionsByEqual,type:"checkbox"}),r.a.createElement("span",{title:"Number of characters allowed in one line. The formatter will try to break statements to fit into the line width. Some statements cannot be broken in a good way (like a very long string literal) and therefore the line width can be exceeded in some cases."}," Align paired expressions by equal"))),r.a.createElement("div",{className:"option"},r.a.createElement("label",null,r.a.createElement("input",{className:"checkbox",name:"inlineCssToggle",onChange:this.handleChange,checked:this.state.inlineCssToggle,type:"checkbox"}),r.a.createElement("span",{title:"Css that is applied as inline style tags to the formatted html elements. If disabled only the css classes will be applied and no style tags. You can use your custom css here to apply custom styles. Please refer to the documentation about what classes are available to you."},"InlineCss"),r.a.createElement("textarea",{cols:100,rows:25,name:"inlineCss",onChange:this.handleChange,className:"textarea "+(0==this.state.inlineCssToggle?"no-display":""),value:this.state.inlineCss,placeholder:"inline css"}))))},a}(r.a.Component),y=n(221);function b(e,t,n,a,r,o,i){try{var l=e[o](i),s=l.value}catch(c){return void n(c)}l.done?t(s):Promise.resolve(s).then(a,r)}function k(e){return function(){var t=this,n=arguments;return new Promise(function(a,r){var o=e.apply(t,n);function i(e){b(o,a,r,i,l,"next",e)}function l(e){b(o,a,r,i,l,"throw",e)}i(void 0)})}}var w=function(e){var t,n;function a(t){var n;return(n=e.call(this,t)||this).codeRef=r.a.createRef(),n.format=k(l.a.mark(function e(){var t,a,r;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(null!=n.state.code&&""!=n.state.code){e.next=3;break}return n.setState({formatErr:"Please enter some code to format"}),e.abrupt("return");case 3:if(n.setState({formatting:!0,formatErr:null,errors:null}),e.prev=4,null==(t=n.optionComponent.getConfig())){e.next=18;break}return e.next=9,fetch(y.a.formatterApiUrl,{method:"POST",mode:"cors",headers:{"Content-Type":"application/json"},body:JSON.stringify({code:n.state.code,config:t})});case 9:return a=e.sent,e.next=12,a.json();case 12:null!=(r=e.sent).errors&&0==r.errors.length&&(r.errors=null),n.setState({result:r.result,errors:r.errors}),console.log(n.state.errors),e.next=19;break;case 18:n.setState({toggleOptions:!0});case 19:return e.prev=19,n.setState({formatting:!1}),e.finish(19);case 22:case"end":return e.stop()}},e,null,[[4,,19,22]])})),n.toggleOptions=function(){n.setState({toggleOptions:!n.state.toggleOptions})},n.handleChange=function(e){var t={};"checkbox"==e.target.type?t[e.target.name]=e.target.checked:t[e.target.name]=e.target.value,n.setState(t)},n.back=function(){n.setState({result:null})},n.state={code:null,result:null,errors:null,errorMessage:null,toggleOptions:!1,formatting:!1,formatErr:null},n}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var o=a.prototype;return o.componentDidMount=function(){var e=this;this.codeRef.current.addEventListener("keydown",function(t){if(9==t.which){var n=e.codeRef.current.selectionStart,a=e.codeRef.current.value;a=a.substring(0,n)+" ".repeat(2)+a.substring(n),e.codeRef.current.value=a,e.codeRef.current.selectionStart=n+2,e.codeRef.current.selectionEnd=n+2,t.preventDefault()}})},o.propagateState=function(){},o.render=function(){var e=this;return r.a.createElement("div",{className:"formatter-container"},r.a.createElement("div",{className:"error-container"},null!=this.state.errors?r.a.createElement("div",null,r.a.createElement("div",{className:"error"},"Es sind Fehler aufgetreten"),this.state.errors.map(function(e,t){return r.a.createElement("div",{key:t},r.a.createElement(m,{error:e}))})):""),r.a.createElement("div",{className:"formatter-input "+(null!=this.state.result?"no-display":"")},r.a.createElement("textarea",{ref:this.codeRef,className:"textarea",cols:100,rows:10,name:"code",onChange:this.handleChange,placeholder:"Place your Power Query Code here"})),r.a.createElement("div",{className:"formatter-errors"},null!=this.state.formatErr?r.a.createElement("span",{className:"error"},this.state.formatErr):""),null!=this.state.result?r.a.createElement("div",{className:"formatter-result"},r.a.createElement(s.a,{formatted:this.state.result,backCallback:this.back})):"",r.a.createElement("div",{className:"formatter-input-controls"},r.a.createElement("div",null,r.a.createElement("button",{onClick:this.toggleOptions,className:"button action-button "+(1==this.state.toggleOptions?"is-active":"")},"Options")),r.a.createElement("div",null,r.a.createElement("button",{onClick:this.format,className:"button action-button "+(1==this.state.formatting?"is-loading":""),disabled:1==this.state.formatting},"Format"))),r.a.createElement("div",{className:0==this.state.toggleOptions?"no-display":""},r.a.createElement(v,{initializer:function(t){return e.optionComponent=t}})))},a}(r.a.Component);n.d(t,"HomePage",function(){return N});var N=function(e){var t,n;function a(){return e.apply(this,arguments)||this}return n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.prototype.render=function(){return r.a.createElement(o.a,{header:{url:"/",type:"website",title:"M Formatter | Beautify your PowerQuery code",description:"Format your M (PowerQuery) code with M Formatter"}},r.a.createElement("div",null,r.a.createElement("h1",null,"Beautify your M / PowerQuery Code with M Formatter")),r.a.createElement("div",null,r.a.createElement(w,null)))},a}(r.a.Component);t.default=N},204:function(e,t,n){var a=n(0);function r(e){return a.createElement("svg",e,[a.createElement("rect",{x:"0.422",y:"0.122",width:"300",height:"78.836",style:{fill:"rgb(33, 115, 69)"},key:0}),a.createElement("text",{style:{fill:"rgb(51, 51, 51)",fontFamily:'"Roboto Condensed"',fontSize:"57px",whiteSpace:"pre"},y:"-2",key:1},[a.createElement("tspan",{x:"8.646",y:"57.799",style:{fill:"rgb(255, 255, 255)",fontSize:"57px",wordSpacing:"0px"},key:0},"Power Query"),a.createElement("tspan",{style:{fontSize:"57px",wordSpacing:"0px"},key:1})]),a.createElement("text",{style:{fill:"rgb(33, 115, 69)",fontFamily:'"Roboto Condensed"',fontSize:"57px",whiteSpace:"pre"},x:"305.462",y:"57.848",key:2},"Formatter")])}r.defaultProps={viewBox:"0 0 536 79"},e.exports=r,r.default=r},205:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAAAXNSR0IB2cksfwAAAPNQTFRFAAAAIHNEIXNFqMi2////9vn3zuDWXpp4UZFtvNXH7/Xy/v7++fv64u3nlbymLHpO9/r4k7uke6yQ0OHXRYpj+fz6o8WycqaIvdbI8PbydqiMYJt65vDq2+jhmL6ptNDA7fTwwtjMkrqjrcu6/P39r8282ujg9Pj2fa2S5O7o4+3nT5Br6/LuirWd+Pv5u9TG0+Pa6fHtXZl3jrihs8+/VpRx3+vkQodgzN/U6/PvZJ19pse0k7ul1+bexNrO8/j1ibWcOYJZm8Cr6PHsaaCB9fn3gK+Vrsy8w9nN0eLZtdDB+vz78vf0h7OboMOvocSxj7ih8E1ojAAAAFF0Uk5TAPf/////////////////////////////////////////////////////////////////////////////////////////////////////////i49OxgAAAAlwSFlzAAAOxAAADsQBlSsOGwAAARxJREFUeJzt01dbwjAUBmA8fGgkaIfWhlJ3HSgiDkBc4N7j//8a26YqxVBy54V+N+3J87ZpktPcGOkl9w9/A+YhUxifSMbZZJGjNDVtqCFgWvGwXZQln5kdgM6c67q2cFD2wrrig88v2ItL4MuDcCUuVwOI8CIQrEWTsnVsbCohq2Jrmyo1VFlc79Sxq4TUwN4+HZRwKMumj1ZbCY/QOaYT7pwmn3YWPaiA7Rb8Zt9zdI6uq4I9Ew0aDS8uy/FNFvxMIAwdyK+s9NoUU0cnc52crMZivuCo7ZHR2fA4qSMUNBz2N8XNbRaUbebdhW12b2RB8jrJhj38aNw0JPYY/gpPHM8vKTgseQfmqw6ktzoKPR1I7zVL643f+ZvwA7+cKVxYuxpNAAAAAElFTkSuQmCC"},206:function(e,t){e.exports.webConfig={domain:"https://mformatter.com",pathPrefix:"mformatter"}},207:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=(n(209),n(210)),i=n.n(o),l=n(205),s=n.n(l),c=n(206);n(39);function u(e,t){return"/"==e[e.length-1]&&(e=e.substring(0,e.length-1)),"/"==t[0]&&(t=t.substring(1)),e+"/"+t}var m=function(e){var t,n;function a(){return e.apply(this,arguments)||this}return n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.prototype.render=function(){var e=c.webConfig.domain,t=c.webConfig.pathPrefix,n=this.props.header;return null!=n.image&&(n.image.startsWith(t)&&(n.image=n.image.substr(t.length)),n.image=u(e,n.image)),null!=n.url&&(n.url.startsWith(t)&&(n.url=n.url.substr(t.length)),n.url=u(e,n.url)),r.a.createElement(i.a,{defer:!1},r.a.createElement("html",{lang:"DE"}),r.a.createElement("title",null,n.title),r.a.createElement("link",{rel:"icon",type:"image/png",sizes:"32x32",href:s.a}),r.a.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),r.a.createElement("meta",{"http-equiv":"Content-Type",content:"text/html; charset=UTF-8"}),null!=n.description?r.a.createElement("meta",{name:"description",content:n.description}):"",r.a.createElement("link",{rel:"canonical",href:n.url}),r.a.createElement("meta",{property:"og:locale",content:"de_DE"}),r.a.createElement("meta",{property:"og:type",content:n.type}),r.a.createElement("meta",{property:"og:title",content:n.title}),null!=n.description?r.a.createElement("meta",{property:"og:description",content:n.description}):"",r.a.createElement("meta",{property:"og:url",content:n.url}),r.a.createElement("meta",{property:"og:site_name",content:"M Formatter | Beautify your PowerQuery code"}),null!=n.updated_time?r.a.createElement("meta",{property:"og:updated_time",content:n.updated_time}):"",null!=n.image?r.a.createElement("meta",{property:"og:image",content:n.image}):"",null!=n.image?r.a.createElement("meta",{property:"og:image:secure_url",content:n.image}):"",r.a.createElement("meta",{property:"article:publisher",content:c.webConfig.domain}),null!=n.tags?n.tags.map(function(e,t){return r.a.createElement("meta",{key:t,property:"article:tag",content:e})}):"","article"==n.section?r.a.createElement("meta",{property:"article:section",content:n.section}):"",null!=n.updated_time?r.a.createElement("meta",{property:"article:modified_time",content:n.updated_time}):"",null!=n.publish_time?r.a.createElement("meta",{property:"article:published_time",content:n.publish_time}):"",r.a.createElement("meta",{name:"twitter:card",content:"summary"}),null!=n.description?r.a.createElement("meta",{name:"twitter:description",content:n.description}):"",r.a.createElement("meta",{name:"twitter:title",content:n.title}),r.a.createElement("meta",{name:"twitter:site",content:"@ppvinsights"}),r.a.createElement("meta",{name:"twitter:creator",content:"@ppvinsights"}),null!=n.image?r.a.createElement("meta",{name:"twitter:image",content:n.image}):"")},a}(r.a.Component),p=n(204),d=n.n(p),h=n(95),f=n(211),g=n(208);n(212);var E=function(e){var t,n;function a(t){var n;return(n=e.call(this,t)||this).toggleHamburger=function(){n.setState({active:!n.state.active},function(){n.state.active?n.setState({navBarActiveClass:"is-active"}):n.setState({navBarActiveClass:""})})},n.state={active:!1,navBarActiveClass:""},n}return n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.prototype.render=function(){var e=this;return r.a.createElement("nav",{className:"navbar is-transparent",role:"navigation","aria-label":"main-navigation"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"navbar-brand"},r.a.createElement(h.Link,{to:"/",title:"Logo"},r.a.createElement(d.a,{className:"logo"})),r.a.createElement("div",{className:"navbar-burger burger "+this.state.navBarActiveClass,"data-target":"navMenu",onClick:function(){return e.toggleHamburger()}},r.a.createElement("span",null),r.a.createElement("span",null),r.a.createElement("span",null))),r.a.createElement("div",{id:"navMenu",className:"navbar-menu "+this.state.navBarActiveClass},r.a.createElement("div",{className:"navbar-start has-text-centered"},[{text:"Home",route:"/"},{text:"Api Documentation",route:"/api"},{text:"Bug Report",route:"/bug"}].map(function(e,t){return r.a.createElement(h.Link,{key:t,className:"navbar-item",activeClassName:"navbar-active",to:e.route},r.a.createElement("span",null,e.text))})),r.a.createElement("div",{className:"navbar-end has-text-centered"},r.a.createElement(f.OutboundLink,{className:"navbar-item social","aria-label":"Twitter@ppvinsights",href:"https://twitter.com/ppvinsights",rel:"noopener nofollow",target:"_blank"},r.a.createElement(g.g,null)),r.a.createElement(f.OutboundLink,{className:"navbar-item","aria-label":"Facebook",href:"https://www.facebook.com/powerpivotinsights",rel:"noopener nofollow",target:"_blank"},r.a.createElement(g.e,null))))))},a}(r.a.Component);n(213);var v=function(e){var t,n;function a(){return e.apply(this,arguments)||this}return n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.prototype.render=function(){return r.a.createElement("div",{className:"footer-container"},r.a.createElement("div",{className:"footer-link-container"},r.a.createElement("span",null,r.a.createElement(h.Link,{to:"/imprint"},"Imprint")),r.a.createElement("span",null,r.a.createElement(h.Link,{to:"/disclaimer"},"Disclaimer")),r.a.createElement("span",null,r.a.createElement(h.Link,{to:"/privacy"},"Privacy")),r.a.createElement("span",null,r.a.createElement(h.Link,{to:"/third-party"},"Third party"))),r.a.createElement("div",{className:"footer-icon"},r.a.createElement(h.Link,{to:"/"},r.a.createElement(d.a,{className:"logo"}))))},a}(r.a.Component);n(214),n(215);var y=function(e){var t,n;function a(t){var n;return void 0===t&&(t=null),(n=e.call(this,t)||this).state={cookieWarningDismissed:!1},n}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var o=a.prototype;return o.componentDidMount=function(){var e=function(){var e={};return document.cookie&&document.cookie.split(";").map(function(e){return e.split("=")}).forEach(function(t){e[t[0].trim()]=t[1]}),e}();this.setState({cookieWarningDismissed:"true"===e.cookieWarningDismissed})},o.on_okButton_clicked=function(){document.cookie="cookieWarningDismissed=true",this.setState({cookieWarningDismissed:!0})},o.render=function(){return 1==this.state.cookieWarningDismissed?r.a.createElement(r.a.Fragment,null):r.a.createElement("div",{className:"cookie-warning-container"},r.a.createElement("div",{className:"cookie-warning"},r.a.createElement("div",{className:"cookie-text"},"Diese Website benutzt Cookies. Wenn du die Website weiter nutzt, gehen wir von deinem Einverständnis aus."),r.a.createElement("div",null,r.a.createElement("span",null,r.a.createElement("button",{onClick:this.on_okButton_clicked.bind(this),className:"button"},"OK")),r.a.createElement("span",null,r.a.createElement(h.Link,{className:"button",to:"/privacy"},"Erfahre mehr")))))},a}(r.a.Component);n.d(t,"a",function(){return b});var b=function(e){var t,n;function a(){return e.apply(this,arguments)||this}return n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.prototype.render=function(){return r.a.createElement("div",null,r.a.createElement(m,{header:this.props.header}),r.a.createElement(E,null),r.a.createElement("div",{className:"container-all"},r.a.createElement("section",{className:"section"},r.a.createElement("div",{className:"container content",id:"content-container"},r.a.createElement("div",{className:"columns"},r.a.createElement("div",{className:"column is-10 is-offset-1"},this.props.children),r.a.createElement("div",{className:"column is-3"},null!=this.props.sidebar?this.props.sidebar:"")))),r.a.createElement(v,null)),r.a.createElement(y,null))},a}(r.a.Component)},221:function(e,t,n){"use strict";n.d(t,"a",function(){return a});var a={formatterApiUrl:"https://m-formatter.azurewebsites.net/api/format/v1"}},233:function(e,t,n){"use strict";(function(e){n.d(t,"a",function(){return u});n(39),n(69),n(16);var a=n(0),r=n.n(a),o=(n(245),n(246)),i=n.n(o);function l(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}var s="undefined"!=typeof window?new DOMParser:null,c=function(e){function t(){return e.apply(this,arguments)||this}return l(t,e),t.prototype.render=function(){return r.a.createElement("div",{className:this.props.className,dangerouslySetInnerHTML:{__html:this.props.content}})},t}(r.a.Component),u=function(t){function n(){for(var e,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))||this).code="",e.on_copy_clicked=function(){console.log(e.code),i()(e.code,{format:"text/plain"})},e.on_copyhtml_clicked=function(){i()(e.formatted,{format:"text/html"})},e}return l(n,t),n.prototype.render=function(){var t=this;this.formatted=this.props.formatted;var n=null!=this.props.footerhtml?e.from(this.props.footerhtml,"base64").toString("utf8"):null,a=[];return"undefined"!=typeof window&&(this.code="",a=this.formatted.split(/<\s*br\s*\/?\s*>/g).filter(function(e){var n=s.parseFromString('<span id="mark">'+e+"</span>","text/html").getElementById("mark");return null!=n&&null!=n.textContent&&(t.code+=n.textContent+"\n"),null!=n.firstChild&&""!=n.firstChild.textContent})),r.a.createElement("div",{className:"code-block-container"},r.a.createElement("div",{className:"code-block-table-container"},r.a.createElement("table",null,r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",{className:"line-numbers"},a.map(function(e,t){return r.a.createElement("div",{className:"line-numbers code-line "+(t%2==0?"code-line-1":"code-line-2"),key:t},t+1)})),r.a.createElement("td",null,r.a.createElement("div",null,a.map(function(e,t){return r.a.createElement(c,{key:t,className:"code-line "+(t%2==0?"code-line-1":"code-line-2"),content:e})}))))))),r.a.createElement("div",{className:"code-block-footer"},null!=n?r.a.createElement(c,{content:n}):"",r.a.createElement("span",null,r.a.createElement("button",{className:"button action-button",onClick:this.on_copy_clicked},"Copy Code")),r.a.createElement("span",null,r.a.createElement("button",{className:"button action-button",onClick:this.on_copyhtml_clicked},"Copy HTML")),r.a.createElement("span",null,r.a.createElement("button",{className:"button action-button",onClick:this.props.backCallback},"Back"))))},n}(r.a.Component)}).call(this,n(234).Buffer)}}]);
//# sourceMappingURL=component---src-pagecomponents-home-tsx-3a901d3cd09e8183e876.js.map