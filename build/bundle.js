!function(e){var t={};function r(a){if(t[a])return t[a].exports;var l=t[a]={i:a,l:!1,exports:{}};return e[a].call(l.exports,l,l.exports,r),l.l=!0,l.exports}r.m=e,r.c=t,r.d=function(e,t,a){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)r.d(a,l,function(t){return e[t]}.bind(null,l));return a},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=40)}([function(e,t){e.exports=require("react")},function(e,t){e.exports=require("react-hot-loader")},function(e,t){e.exports=require("prop-types")},function(e,t){e.exports=function(e){if(!e.webpackPolyfill){var t=Object.create(e);t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),Object.defineProperty(t,"exports",{enumerable:!0}),t.webpackPolyfill=1}return t}},function(e,t){e.exports=require("react-router-dom")},function(e,t){e.exports=require("@babel/runtime/helpers/slicedToArray")},function(e,t,r){"use strict";(function(e){r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return f}));var a,l=r(16),o=r.n(l),n=r(23),c=r.n(n),i=r(24),s=r.n(i),d=r(17);(a=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).enterModule)&&a(e);var u,_,p="fetch_articles",f=function(e){return function(){var t=c()(o.a.mark((function t(r){var a,l;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=e?"https://newsapi.org/v2/top-headlines?sources=".concat(e,"&apiKey=").concat(d.a.apikey):"https://newsapi.org/v2/top-headlines?country=us&apiKey=".concat(d.a.apikey),t.next=3,s.a.get(a);case 3:l=t.sent,r({type:p,payload:l.data.articles});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};(u=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).default)&&(u.register(p,"FETCH_ARTICLES","/Users/jruiz7/development/hello-world-node-blueprint/src/client/actions/index.js"),u.register(f,"fetchArticles","/Users/jruiz7/development/hello-world-node-blueprint/src/client/actions/index.js")),(_=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).leaveModule)&&_(e)}).call(this,r(3)(e))},function(e,t){e.exports=require("react-router-config")},function(e,t){e.exports=require("react-redux")},function(e,t){e.exports=require("react-helmet")},function(e,t){e.exports=require("redux")},function(e,t,r){"use strict";(function(e){var a,l=r(21),o=r.n(l),n=r(22),c=r(25),i=r(26),s=r(27);function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach((function(t){o()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}(a=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).enterModule)&&a(e);var _,p,f=[u({},s.a,{routes:[u({},n.a,{path:"/",exact:!0}),u({path:"/articles/:id"},i.a),u({},c.a)]})];t.a=f,(_=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).default)&&_.register(f,"default","/Users/jruiz7/development/hello-world-node-blueprint/src/client/Routes.js"),(p=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).leaveModule)&&p(e)}).call(this,r(3)(e))},function(e,t){e.exports=require("react-lazy-load-image-component")},function(e,t,r){"use strict";(function(e){var a,l=r(0),o=r.n(l),n=r(2),c=r.n(n);(a=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).enterModule)&&a(e);var i=function(e){var t=e.handler,r=e.data;return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{id:"modal1",className:"modal",style:{zIndex:1003,display:"block",opacity:1,top:10,width:"95vw",height:"95vh",maxHeight:"95vh"}},o.a.createElement("div",{className:"modal-footer"},o.a.createElement("button",{type:"button",onClick:t,className:"modal-close waves-effect waves-green btn red"},"Close")),o.a.createElement("div",{className:"modal-content"},o.a.createElement("h4",null,r.title),o.a.createElement("img",{className:"responsive-img",src:r.urlToImage,alt:r.title}),o.a.createElement("p",null,r.description),o.a.createElement("p",null,r.content),o.a.createElement("div",{className:"divider"}),o.a.createElement("div",{className:"section"},o.a.createElement("a",{href:r.url,className:"waves-effect waves-light btn",target:"_blank",rel:"noopener noreferrer"},"Full Article")))),o.a.createElement("div",{role:"presentation",onClick:t,className:"modal-overlay",style:{zIndex:1002,display:"block",opacity:.5}}))};i.propTypes={data:c.a.objectOf(c.a.any),handler:c.a.func},i.defaultProps={data:null,handler:null};var s,d,u=i;t.a=u,(s=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).default)&&(s.register(i,"ArticleDetailModal","/Users/jruiz7/development/hello-world-node-blueprint/src/client/components/ArticleDetailModal.js"),s.register(u,"default","/Users/jruiz7/development/hello-world-node-blueprint/src/client/components/ArticleDetailModal.js")),(d=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).leaveModule)&&d(e)}).call(this,r(3)(e))},function(e,t){e.exports=require("express")},function(e,t){e.exports=require("compression")},function(e,t){e.exports=require("@babel/runtime/regenerator")},function(e,t,r){"use strict";(function(e){var a;(a=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).enterModule)&&a(e);var l,o,n={apikey:"3ccc9971cc44496eb6774b58a486bc05"},c=n;t.a=c,(l=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).default)&&(l.register(n,"config","/Users/jruiz7/development/hello-world-node-blueprint/config/index.js"),l.register(c,"default","/Users/jruiz7/development/hello-world-node-blueprint/config/index.js")),(o=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).leaveModule)&&o(e)}).call(this,r(3)(e))},function(e,t,r){"use strict";(function(e){var a,l=r(0),o=r.n(l),n=r(19),c=r(4),i=r(8),s=r(7),d=r(20),u=r.n(d),_=r(9),p=r(11);(a=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).enterModule)&&a(e);var f,m,b=function(e,t,r){var a=Object(n.renderToString)(o.a.createElement(i.Provider,{store:t},o.a.createElement(c.StaticRouter,{location:e.path,context:r},o.a.createElement("div",null,Object(s.renderRoutes)(p.a))))),l=_.Helmet.renderStatic();return"<!DOCTYPE html>\n    <head>\n        ".concat(l.title.toString(),"\n        ").concat(l.meta.toString(),"\n        ").concat(l.link.toString(),'\n        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">\n        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>\n    </head>\n    <body>\n        <div id="root">').concat(a,"</div>\n        <script>\n            window.__PRELOADED_STATE__ = ").concat(u()(t.getState()).replace(/</g,"\\u003c"),'\n        <\/script>\n        <script src="/bundle.js"><\/script>\n        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">\n    </body>\n    </html>')};t.a=b,(f=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).default)&&f.register(b,"default","/Users/jruiz7/development/hello-world-node-blueprint/src/Helpers/renderer.js"),(m=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).leaveModule)&&m(e)}).call(this,r(3)(e))},function(e,t){e.exports=require("react-dom/server")},function(e,t){e.exports=require("serialize-javascript")},function(e,t){e.exports=require("@babel/runtime/helpers/defineProperty")},function(e,t,r){"use strict";(function(e){var a,l=r(5),o=r.n(l),n=r(0),c=r.n(n),i=r(2),s=r.n(i),d=r(8),u=r(9),_=r(12),p=r(6),f=r(13);(a=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).enterModule)&&a(e);var m=function(e){var t=Object(n.useState)(!1),r=o()(t,2),a=r[0],l=r[1],i=Object(n.useState)({}),s=o()(i,2),d=s[0],p=s[1],m=e.fetchArticles;return Object(n.useEffect)((function(){window.scrollTo(0,0),m()}),[m]),c.a.createElement("div",null,c.a.createElement(u.Helmet,{key:Math.random()},c.a.createElement("title",null,"Daily News"),c.a.createElement("meta",{property:"og:title",content:"Daily News"}),c.a.createElement("meta",{name:"description",content:"Breaking news,latest articles, popular articles from most popular news websites of the world"}),c.a.createElement("meta",{name:"robots",content:"index, follow"}),c.a.createElement("link",{rel:"canonical",href:"http://localhost:3000"})),a?c.a.createElement(f.a,{handler:function(){l(!1)},data:d}):null," ",c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"section"},c.a.createElement("h3",null,"Popular Articles")),c.a.createElement("div",{className:"divider"}),c.a.createElement("div",{className:"section"},c.a.createElement("div",{className:"row"},e.articles.map((function(e){return c.a.createElement("div",{className:"col s12 m6 l6 xl4",key:e.title},c.a.createElement("div",{className:"card large"},c.a.createElement("div",{className:"card-image"},c.a.createElement(_.LazyLoadImage,{alt:e.title,src:e.urlToImage})),c.a.createElement("div",{className:"card-content"},c.a.createElement("span",{className:"card-title"},e.title)),c.a.createElement("div",{className:"card-action"},c.a.createElement("a",{href:"javascript:void(0)",onClick:function(){return function(e){p(e),l(!0)}(e)}},"Read More"))))}))))))},b=function(e){return{articles:e.articles}},E=function(e){return e.dispatch(Object(p.b)())};m.propTypes={articles:s.a.arrayOf(s.a.any),fetchArticles:s.a.func},m.defaultProps={articles:[],fetchArticles:null};var v,h,y={component:Object(d.connect)(b,{fetchArticles:p.b})(m),loadData:E};t.a=y,(v=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).default)&&(v.register(m,"HomePage","/Users/jruiz7/development/hello-world-node-blueprint/src/client/pages/HomePage.js"),v.register(b,"mapStateToProps","/Users/jruiz7/development/hello-world-node-blueprint/src/client/pages/HomePage.js"),v.register(E,"loadData","/Users/jruiz7/development/hello-world-node-blueprint/src/client/pages/HomePage.js"),v.register(y,"default","/Users/jruiz7/development/hello-world-node-blueprint/src/client/pages/HomePage.js")),(h=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).leaveModule)&&h(e)}).call(this,r(3)(e))},function(e,t){e.exports=require("@babel/runtime/helpers/asyncToGenerator")},function(e,t){e.exports=require("axios")},function(e,t,r){"use strict";(function(e){var a,l=r(0),o=r.n(l),n=r(2),c=r.n(n);(a=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).enterModule)&&a(e);var i=function(e){var t=e.staticContext;return(void 0===t?{}:t).notFound=!0,o.a.createElement("div",{className:"ui container"},o.a.createElement("h1",null,"Page Not Found"),o.a.createElement("p",null,"Please try again"))};i.propTypes={staticContext:c.a.objectOf(c.a.any)},i.defaultProps={staticContext:{}};var s,d,u={component:i};t.a=u,(s=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).default)&&(s.register(i,"NotFoundPage","/Users/jruiz7/development/hello-world-node-blueprint/src/client/pages/NotFoundPage.js"),s.register(u,"default","/Users/jruiz7/development/hello-world-node-blueprint/src/client/pages/NotFoundPage.js")),(d=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).leaveModule)&&d(e)}).call(this,r(3)(e))},function(e,t,r){"use strict";(function(e){var a,l=r(5),o=r.n(l),n=r(0),c=r.n(n),i=r(8),s=r(9),d=r(12),u=r(2),_=r.n(u),p=r(13),f=r(6);(a=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).enterModule)&&a(e);var m=function(e){var t=Object(n.useState)(!1),r=o()(t,2),a=r[0],l=r[1],i=Object(n.useState)({}),u=o()(i,2),_=u[0],f=u[1],m=e.articles,b=e.location,E=e.match,v=e&&m[0]&&m[0].source.name,h=e.fetchArticles;return Object(n.useEffect)((function(){window.scrollTo(0,0),E.params.id?h(E.params.id):h()}),[h,E.params.id]),c.a.createElement("div",null,c.a.createElement(s.Helmet,{key:Math.random()},c.a.createElement("title",null,"".concat(v," Articles")),c.a.createElement("meta",{property:"og:title",content:"".concat(v," Articles List")}),c.a.createElement("meta",{name:"description",content:"Latest ".concat(v," articles, popular articles from most popular news websites of the world")}),c.a.createElement("meta",{name:"robots",content:"index, follow"}),c.a.createElement("link",{rel:"canonical",href:"http://localhost:3000/".concat(b.pathname)})),a?c.a.createElement(p.a,{handler:function(){l(!1)},data:_}):null,c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"section"},c.a.createElement("h3",null,v)),c.a.createElement("div",{className:"divider"}),c.a.createElement("div",{className:"section"},c.a.createElement("div",{className:"row"},e.articles.map((function(e){return c.a.createElement("div",{className:"col s12 m6 l6 xl4",key:e.title},c.a.createElement("div",{className:"card large"},c.a.createElement("div",{className:"card-image"},c.a.createElement(d.LazyLoadImage,{alt:e.title,src:e.urlToImage})),c.a.createElement("div",{className:"card-content"},c.a.createElement("span",{className:"card-title"},e.title)),c.a.createElement("div",{className:"card-action"},c.a.createElement("a",{href:"javascript:void(0)",onClick:function(){return function(e){f(e),l(!0)}(e)}},"Read More"))))}))))))},b=function(e){return{articles:e.articles}},E=function(e,t){return e.dispatch(Object(f.b)(t))};m.propTypes={articles:_.a.arrayOf(_.a.any),fetchArticles:_.a.func,location:_.a.objectOf(_.a.any),match:_.a.objectOf(_.a.any)},m.defaultProps={articles:[],fetchArticles:null,location:null,match:null};var v,h,y={component:Object(i.connect)(b,{fetchArticles:f.b})(m),loadData:E};t.a=y,(v=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).default)&&(v.register(m,"ArticleListPage","/Users/jruiz7/development/hello-world-node-blueprint/src/client/pages/ArticleListPage.js"),v.register(b,"mapStateToProps","/Users/jruiz7/development/hello-world-node-blueprint/src/client/pages/ArticleListPage.js"),v.register(E,"loadData","/Users/jruiz7/development/hello-world-node-blueprint/src/client/pages/ArticleListPage.js"),v.register(y,"default","/Users/jruiz7/development/hello-world-node-blueprint/src/client/pages/ArticleListPage.js")),(h=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).leaveModule)&&h(e)}).call(this,r(3)(e))},function(e,t,r){"use strict";(function(e){var a,l=r(0),o=r.n(l),n=r(7),c=r(2),i=r.n(c),s=r(28),d=r(34),u=r(35);(a=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).enterModule)&&a(e);var _=function(e){var t=e.route;return o.a.createElement("div",null,o.a.createElement(d.a,null),o.a.createElement("div",{className:"container"},o.a.createElement(s.a,null,Object(n.renderRoutes)(t.routes))),o.a.createElement(u.a,null))};_.propTypes={route:i.a.objectOf(i.a.any)},_.defaultProps={route:null};var p,f,m={component:_};t.a=m,(p=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).default)&&(p.register(_,"App","/Users/jruiz7/development/hello-world-node-blueprint/src/client/App.js"),p.register(m,"default","/Users/jruiz7/development/hello-world-node-blueprint/src/client/App.js")),(f=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).leaveModule)&&f(e)}).call(this,r(3)(e))},function(module,__webpack_exports__,__webpack_require__){"use strict";(function(module){var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(29),_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__),_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(30),_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__),_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(31),_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__),_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(32),_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__),_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(33),_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__),react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__),prop_types__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(2),prop_types__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__),enterModule;enterModule=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__(1)).enterModule,enterModule&&enterModule(module);var ErrorBoundary=function(_React$Component){function ErrorBoundary(e){var t;return _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this,ErrorBoundary),(t=_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(ErrorBoundary).call(this,e))).state={error:null,errorInfo:null},t}return _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(ErrorBoundary,_React$Component),_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(ErrorBoundary,[{key:"componentDidCatch",value:function(e,t){this.setState({error:e,errorInfo:t})}},{key:"render",value:function(){var e=this.state,t=this.props.children;return e.errorInfo?react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment,null,react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h2",null,"Something went wrong."),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("details",{style:{whiteSpace:"pre-wrap"}},e.error&&e.error.toString(),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br",null),e.errorInfo.componentStack)):t}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),ErrorBoundary}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);ErrorBoundary.propTypes={children:prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.node),prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.node]).isRequired};var _default=ErrorBoundary,reactHotLoader,leaveModule;__webpack_exports__.a=_default,reactHotLoader=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__(1)).default,reactHotLoader&&(reactHotLoader.register(ErrorBoundary,"ErrorBoundary","/Users/jruiz7/development/hello-world-node-blueprint/src/client/components/ErrorBoundry.js"),reactHotLoader.register(_default,"default","/Users/jruiz7/development/hello-world-node-blueprint/src/client/components/ErrorBoundry.js")),leaveModule=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__(1)).leaveModule,leaveModule&&leaveModule(module)}).call(this,__webpack_require__(3)(module))},function(e,t){e.exports=require("@babel/runtime/helpers/classCallCheck")},function(e,t){e.exports=require("@babel/runtime/helpers/createClass")},function(e,t){e.exports=require("@babel/runtime/helpers/possibleConstructorReturn")},function(e,t){e.exports=require("@babel/runtime/helpers/getPrototypeOf")},function(e,t){e.exports=require("@babel/runtime/helpers/inherits")},function(e,t,r){"use strict";(function(e){var a,l=r(5),o=r.n(l),n=r(0),c=r.n(n),i=r(4);(a=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).enterModule)&&a(e);var s,d,u=function(){var e=Object(n.useState)(!1),t=o()(e,2),r=t[0],a=t[1],l=function(){return a(!r)};return c.a.createElement("div",{className:"navbar-fixed"},c.a.createElement("nav",{className:"red"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"nav-wrapper"},c.a.createElement("a",{href:"/",className:"brand-logo"},"SSR News"),c.a.createElement("a",{href:"javascript:void(0)",onClick:l,className:"sidenav-trigger right"},c.a.createElement("i",{className:"material-icons"},"menu")),c.a.createElement("div",{className:"sidenav-overlay",style:r?{display:"block",opacity:1}:null,onClick:l}),c.a.createElement("ul",{id:"slide-out",className:"sidenav",style:r?{transform:"translateX(0px)"}:null},c.a.createElement("li",null,c.a.createElement("a",{className:"subheader"},"Menu")),c.a.createElement("li",null,c.a.createElement("div",{className:"divider"})),c.a.createElement("li",null,c.a.createElement(i.Link,{to:"/",className:"item",onClick:l},"Home")),c.a.createElement("li",null,c.a.createElement(i.Link,{to:"/articles/techradar",className:"item",onClick:l},"Tech Radar")),c.a.createElement("li",null,c.a.createElement(i.Link,{to:"/articles/mashable",className:"item",onClick:l},"Mashable")),c.a.createElement("li",null,c.a.createElement(i.Link,{to:"/articles/the-verge",className:"item",onClick:l},"The Verge")),c.a.createElement("li",null,c.a.createElement(i.Link,{to:"/articles/the-next-web",className:"item",onClick:l},"TNW")),c.a.createElement("li",null,c.a.createElement(i.Link,{to:"/articles/wired",className:"item",onClick:l},"Wired")),c.a.createElement("li",null,c.a.createElement(i.Link,{to:"/articles/recode",className:"item",onClick:l},"Recode"))),c.a.createElement("ul",{id:"nav-mobile",className:"right hide-on-med-and-down"},c.a.createElement("li",null,c.a.createElement(i.Link,{to:"/articles/techradar",className:"item"},"Tech Radar")),c.a.createElement("li",null,c.a.createElement(i.Link,{to:"/articles/mashable",className:"item"},"Mashable")),c.a.createElement("li",null,c.a.createElement(i.Link,{to:"/articles/the-verge",className:"item"},"The Verge")),c.a.createElement("li",null,c.a.createElement(i.Link,{to:"/articles/the-next-web",className:"item"},"TNW")),c.a.createElement("li",null,c.a.createElement(i.Link,{to:"/articles/wired",className:"item"},"Wired")),c.a.createElement("li",null,c.a.createElement(i.Link,{to:"/articles/recode",className:"item"},"Recode")))))))},_=u;t.a=_,(s=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).default)&&(s.register(u,"Header","/Users/jruiz7/development/hello-world-node-blueprint/src/client/components/Header.js"),s.register(_,"default","/Users/jruiz7/development/hello-world-node-blueprint/src/client/components/Header.js")),(d=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).leaveModule)&&d(e)}).call(this,r(3)(e))},function(e,t,r){"use strict";(function(e){var a,l=r(0),o=r.n(l);(a=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).enterModule)&&a(e);var n,c,i=function(){return o.a.createElement("footer",{className:"page-footer red"},o.a.createElement("div",{className:"footer-copyright"},o.a.createElement("div",{className:"container"},"© 2020. All rights reserved.",o.a.createElement("a",{className:"grey-text text-lighten-4 right",href:"#"},"Source Code"))))};t.a=i,(n=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).default)&&n.register(i,"default","/Users/jruiz7/development/hello-world-node-blueprint/src/client/components/Footer.js"),(c=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).leaveModule)&&c(e)}).call(this,r(3)(e))},function(e,t,r){"use strict";(function(e){var a,l=r(10),o=r(37),n=r.n(o),c=r(38);(a=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).enterModule)&&a(e);var i,s,d=function(){return Object(l.createStore)(c.a,{},Object(l.applyMiddleware)(n.a))};t.a=d,(i=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).default)&&i.register(d,"default","/Users/jruiz7/development/hello-world-node-blueprint/src/store/createStore.js"),(s=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).leaveModule)&&s(e)}).call(this,r(3)(e))},function(e,t){e.exports=require("redux-thunk")},function(e,t,r){"use strict";(function(e){var a,l=r(10),o=r(39);(a=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).enterModule)&&a(e);var n,c,i=Object(l.combineReducers)({articles:o.a});t.a=i,(n=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).default)&&n.register(i,"default","/Users/jruiz7/development/hello-world-node-blueprint/src/client/reducers/index.js"),(c=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).leaveModule)&&c(e)}).call(this,r(3)(e))},function(e,t,r){"use strict";(function(e){var a,l=r(6);(a=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).enterModule)&&a(e);var o,n,c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l.a:return t.payload;default:return e}};t.a=c,(o=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).default)&&o.register(c,"default","/Users/jruiz7/development/hello-world-node-blueprint/src/client/reducers/usersReducer.js"),(n=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).leaveModule)&&n(e)}).call(this,r(3)(e))},function(e,t,r){"use strict";r.r(t),function(e){r(41);var t,a=r(14),l=r.n(a),o=(r(0),r(7)),n=r(15),c=r.n(n),i=r(18),s=r(36),d=r(11);(t=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).enterModule)&&t(e);var u=l()();function _(e,t){return!e.headers["x-no-compression"]&&c.a.filter(e,t)}u.use(c()({level:2,filter:_}));var p,f,m=process.env.PORT||3e3;u.use(l.a.static("public")),u.get("*",(function(e,t){var r=e.params[0].split("/")[2],a=Object(s.a)(),l=Object(o.matchRoutes)(d.a,e.path).map((function(e){var t=e.route;return t.loadData?t.loadData(a,r):null})).map((function(e){return e?new Promise((function(t,r){e.then(t).catch(t)})):null}));Promise.all(l).then((function(){var r={},l=Object(i.a)(e,a,r);r.notFound&&t.status(404),t.send(l)}))})),u.listen(m,(function(){console.log("Server running at http://localhost:".concat(m))})),(p=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).default)&&(p.register(u,"app","/Users/jruiz7/development/hello-world-node-blueprint/src/Server/server.js"),p.register(_,"shouldCompress","/Users/jruiz7/development/hello-world-node-blueprint/src/Server/server.js"),p.register(m,"port","/Users/jruiz7/development/hello-world-node-blueprint/src/Server/server.js")),(f=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).leaveModule)&&f(e)}.call(this,r(3)(e))},function(e,t){e.exports=require("@babel/polyfill")}]);