if (self.CavalryLogger) { CavalryLogger.start_js_script(document.currentScript); }

__d("useCometWindowSize",["CometThrottle","react","useCometPassiveWindowSize"],(function(a,b,c,d,e,f,g){"use strict";b=d("react");var h=b.useEffect,i=b.useState;function a(a){a===void 0&&(a=500);var b=c("useCometPassiveWindowSize")(),d=b.getCurrent();d=i(d);var e=d[0],f=d[1];h(function(){var d=c("CometThrottle")(function(){f(b.getCurrent())},a),e=b.subscribe(d);return function(){d.cancel(),e.remove()}},[b,a]);return e}g["default"]=a}),98);
__d("CometImageCover.react",["BaseImage_DEPRECATED.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");e=d("react");var i=e.useCallback,j=e.useRef,k=e.useState;d=function(){var a=document.documentElement;return a==null?!0:Boolean("objectFit"in a.style)}();function a(a){a.alt;var b=a.loading,d=a.onError,e=a.onLoad,f=a.src,g=a.style;a=babelHelpers.objectWithoutPropertiesLoose(a,["alt","loading","onError","onLoad","src","style"]);var l=k(null),m=l[0],n=l[1],o=j();l=i(function(){var a=o.current;if(a==null||!(a instanceof HTMLImageElement)||typeof a.src!=="string")return;n(a.src);e!=null&&e()},[e]);return m!=null?h.jsx("div",{className:"k4urcfbm bixrwtb6 datstx6m q9uorilb",style:babelHelpers["extends"]({backgroundImage:"url("+m+")",backgroundPosition:"center center",backgroundSize:"cover"},g)}):h.jsx(c("BaseImage_DEPRECATED.react"),babelHelpers["extends"]({},a,{className:"ttbfdpzt do00u71z",loading:b||void 0,onError:d,onLoad:l,ref:o,src:f,style:g}))}a.displayName=a.name+" [from "+f.id+"]";function b(a){return h.jsx(c("BaseImage_DEPRECATED.react"),babelHelpers["extends"]({className:"k4urcfbm bixrwtb6 datstx6m q9uorilb"},a))}b.displayName=b.name+" [from "+f.id+"]";e=d?b:a;g["default"]=e}),98);
__d("CometEmoji.bs",["CometEmoji.react"],(function(a,b,c,d,e,f){"use strict";a=b("CometEmoji.react");f.make=a}),null);
__d("EmojiFormat.bs",[],(function(a,b,c,d,e,f){"use strict";function g(a){return a.split("_").map(function(a){return parseInt(a,16)})}function a(a){return a.map(function(a){return a.toString(16)}).join("_")}function h(a){return a.map(function(a){return String.fromCodePoint(a)}).join("")}function b(a){return h(g(a))}f.codeStringToCodeArray=g;f.codeArrayToCodeString=a;f.codeArrayToUnicode=h;f.codeStringToUnicode=b}),null);
__d("EmojiLikeConstants",["EmojiStaticConfig"],(function(a,b,c,d,e,f,g){"use strict";a=Object.freeze({XSMALL:"xsmall",SMALL:"small",MEDIUM:"medium",LARGE:"large"});b={dp16:"xsmall",dp32:"small",dp64:"medium",db64:"medium",dp128:"large"};d=Object.freeze({PICKER:"picker",HOT_LIKE:"hot_like"});e=[983040];f="hot_emoji_source";var h="hot_emoji_size",i="emoji_like",j="\ud83d\udc4d",k=[128077];g.sizeMap=c("EmojiStaticConfig").sizeMap;g.size=a;g.sizeMapTransfer=b;g.source=d;g.FB_THUMBS_UP_EMOJI=e;g.SOURCE_TAG_PREFIX=f;g.TAG_PREFIX_NEW=h;g.TAG_PREFIX_OLD=i;g.THUMBS_UP_EMOJI=j;g.THUMBS_UP_EMOJI_CODES=k}),98);
__d("XAsyncRequest",["AsyncRequest"],(function(a,b,c,d,e,f,g){a=function(){function a(a){var b=this;this.setAllowCrossPageTransition=function(a){b.$1.setAllowCrossPageTransition(a);return b};this.$1=new(c("AsyncRequest"))(a)}var b=a.prototype;b.setURI=function(a){this.$1.setURI(a);return this};b.setOption=function(a,b){this.$1.setOption(a,b);return this};b.setMethod=function(a){this.$1.setMethod(a);return this};b.setData=function(a){this.$1.setData(a);return this};b.setHandler=function(a){this.$1.setHandler(a);return this};b.setPayloadHandler=function(a){this.setHandler(function(b){return a(b.payload)});return this};b.setErrorHandler=function(a){this.$1.setErrorHandler(a);return this};b.send=function(){this.$1.send();return this};b.abort=function(){this.$1.abort()};b.setReadOnly=function(a){this.$1.setReadOnly(a);return this};b.setAllowCrossOrigin=function(a){this.$1.setAllowCrossOrigin(a);return this};b.setAllowCredentials=function(a){this.$1.setAllowCredentials(a);return this};return a}();g["default"]=a}),98);
__d("getVendorPrefixedName",["invariant","ExecutionEnvironment","UserAgent","camelize"],(function(a,b,c,d,e,f,g,h){var i={},j=["Webkit","ms","Moz","O"],k=new RegExp("^("+j.join("|")+")"),l=d("ExecutionEnvironment").canUseDOM?document.createElement("div").style:{};function m(a){for(var b=0;b<j.length;b++){var c=j[b]+a;if(c in l)return c}return null}function n(a){switch(a){case"lineClamp":return c("UserAgent").isEngine("WebKit >= 315.14.2")?"WebkitLineClamp":null;default:return null}}function a(a){var b=c("camelize")(a);if(i[b]===void 0){var e=b.charAt(0).toUpperCase()+b.slice(1);k.test(e)&&h(0,957,a);d("ExecutionEnvironment").canUseDOM?i[b]=b in l?b:m(e):i[b]=n(b)}return i[b]}g["default"]=a}),98);
__d("isFalsey",[],(function(a,b,c,d,e,f){"use strict";function a(a){return a==null||!Boolean(a)}f["default"]=a}),66);
__d("useDebounced",["debounce","react"],(function(a,b,c,d,e,f,g){"use strict";b=d("react");var h=b.useEffect,i=b.useMemo,j=b.useRef;function a(a,b,d){b===void 0&&(b=100);d===void 0&&(d=!1);var e=j(a);h(function(){e.current=a},[a]);var f=i(function(){return c("debounce")(function(){return e.current.apply(e,arguments)},b,null,!1,d)},[b,d]);h(function(){return f.reset},[f]);return f}g["default"]=a}),98);
__d("shield",[],(function(a,b,c,d,e,f){function a(a,b){for(var c=arguments.length,d=new Array(c>2?c-2:0),e=2;e<c;e++)d[e-2]=arguments[e];if(typeof a!=="function")throw new TypeError("shield expects a function as the first argument");return function(){return a.apply(b,d)}}f["default"]=a}),66);
__d("useUniqueID",["react","uniqueID"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react").useRef;function a(){var a=h(null);a.current===null&&(a.current=c("uniqueID")());return a.current}g["default"]=a}),98);
__d("BrowserSupportCore",["getVendorPrefixedName"],(function(a,b,c,d,e,f){a={hasCSSAnimations:function(){return!!b("getVendorPrefixedName")("animationName")},hasCSSTransforms:function(){return!!b("getVendorPrefixedName")("transform")},hasCSS3DTransforms:function(){return!!b("getVendorPrefixedName")("perspective")},hasCSSTransitions:function(){return!!b("getVendorPrefixedName")("transition")}};c=a;f["default"]=c}),66);
__d("useLexicalIsTextContentEmpty",["cr:1022"],(function(a,b,c,d,e,f){e.exports=b("cr:1022")}),null);
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
*
* @noflow
* @nolint
* @preventMunge
* @preserve-invariant-messages
* @generated
* @preserve-whitespace
* @fullSyntaxTransform
 */__d("useLexicalIsTextContentEmpty.prod",["Lexical","react"],(function $module_useLexicalIsTextContentEmpty_prod(global,require,requireDynamic,requireLazy,module,exports){var c_react;
var e=c_react||(c_react=require("react"));function f(a,b){if(b===void 0){b=!0;}if(a)return!1;a=require("Lexical").$getRoot().getTextContent();b&&(a=a.trim());return""===a;}function g(a,b){return function(){return f(a,b);};}var h="undefined"!==typeof window&&"undefined"!==typeof window.document&&"undefined"!==typeof window.document.createElement?e.useLayoutEffect:e.useEffect;
module.exports=function(a,b){var _e$useState=e.useState(a.getEditorState().read(g(a.isComposing(),b))),k=_e$useState[0],l=_e$useState[1];h(function(){return a.addListener("update",function(_ref){var d=_ref.editorState;var m=a.isComposing();d=d.read(g(m,b));l(d);});},[a,b]);return k;};}),null);
__d("BrowserSupport",["BrowserSupportCore","ExecutionEnvironment","UserAgent_DEPRECATED","getVendorPrefixedName","memoize"],(function(a,b,c,d,e,f,g){var h=null;function i(){if(d("ExecutionEnvironment").canUseDOM){h||(h=document.createElement("div"));return h}return null}b=function(a){return c("memoize")(function(){var b=i();return!b?!1:a(b)})};e=b(function(a){a.style.cssText="position:-moz-sticky;position:-webkit-sticky;position:-o-sticky;position:-ms-sticky;position:sticky;";return/sticky/.test(a.style.position)});f=b(function(a){return"scrollSnapType"in a.style||"webkitScrollSnapType"in a.style||"msScrollSnapType"in a.style});var j=b(function(a){return"scrollBehavior"in a.style});b=b(function(a){if(!("pointerEvents"in a.style))return!1;a.style.cssText="pointer-events:auto";return a.style.pointerEvents==="auto"});var k=c("memoize")(function(){return!(d("UserAgent_DEPRECATED").webkit()&&!d("UserAgent_DEPRECATED").chrome()&&d("UserAgent_DEPRECATED").windows())&&"FileList"in window&&"FormData"in window}),l=c("memoize")(function(){return!!a.blob}),m=c("memoize")(function(){return d("ExecutionEnvironment").canUseDOM&&document.createElementNS&&document.createElementNS("http://www.w3.org/2000/svg","foreignObject").toString().includes("SVGForeignObject")}),n=c("memoize")(function(){return!!window.MutationObserver}),o=c("memoize")(function(){var a={transition:"transitionend",WebkitTransition:"webkitTransitionEnd",MozTransition:"mozTransitionEnd",OTransition:"oTransitionEnd"},b=c("getVendorPrefixedName")("transition");return a[b]||null}),p=function(){return!!window.CanvasRenderingContext2D};g.hasCSSAnimations=c("BrowserSupportCore").hasCSSAnimations;g.hasCSSTransforms=c("BrowserSupportCore").hasCSSTransforms;g.hasCSS3DTransforms=c("BrowserSupportCore").hasCSS3DTransforms;g.hasCSSTransitions=c("BrowserSupportCore").hasCSSTransitions;g.hasPositionSticky=e;g.hasScrollSnapPoints=f;g.hasScrollBehavior=j;g.hasPointerEvents=b;g.hasFileAPI=k;g.hasBlobFactory=l;g.hasSVGForeignObject=m;g.hasMutationObserver=n;g.getTransitionEndEvent=o;g.hasCanvasRenderingContext2D=p}),98);/*FB_PKG_DELIM*/
__d("PresenceStatusActionTypes",["keyMirror"],(function(a,b,c,d,e,f,g){"use strict";a=c("keyMirror")({AVAILABILITY_CHANGED:null});g["default"]=a}),98);
__d("ChatDispatcher",["ExplicitRegistrationDispatcher"],(function(a,b,c,d,e,f,g){"use strict";a=function(a){babelHelpers.inheritsLoose(b,a);function b(){return a.apply(this,arguments)||this}return b}(c("ExplicitRegistrationDispatcher"));b=new a({strict:!1});g["default"]=b}),98);
__d("CometBlueBridgeKeyCommandListener.react",["BaseKeyCommandListener.react","CometGlobalKeyCommandWidget","CometLayerKeyCommandWrapper.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function a(a){return h.jsx(c("CometGlobalKeyCommandWidget").Wrapper,{debugName:"global",children:h.jsx(c("BaseKeyCommandListener.react"),{observersEnabled:!1,children:h.jsx(c("CometLayerKeyCommandWrapper.react"),{debugName:"Comet blue bridge layer",children:a.children})})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometOnBlueHiddenSubtreePassiveContextProvider.react",["Arbiter","HiddenSubtreeContext","HiddenSubtreePassiveContext","react","removeFromArray","useLayoutEffect_SAFE_FOR_SSR"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");b=d("react");var i=b.useContext,j=b.useEffect,k=b.useMemo,l=b.useRef,m=b.useState;function n(a,b){return a.length>0||b}function a(a){a=a.children;var b=l([]),d=l([]),e=i(c("HiddenSubtreePassiveContext")),f=l(e.getCurrentState()),g=m(n(b.current,f.current.hiddenOrBackgrounded_FIXME)),o=g[0],p=g[1],q=k(function(){return{backgrounded:o,hidden:o,hiddenOrBackgrounded:o,hiddenOrBackgrounded_FIXME:o}},[o]);c("useLayoutEffect_SAFE_FOR_SSR")(function(){var a=Array.from(d.current);a.forEach(function(a){a(q)})},[q]);j(function(){var a=c("Arbiter").subscribe("layer_shown",function(a){a=(a=a==null?void 0:a.type)!=null?a:"UNKNOWN";b.current.push(a);p(n(b.current,f.current.hiddenOrBackgrounded_FIXME))}),d=c("Arbiter").subscribe("layer_hidden",function(a){a=(a=a==null?void 0:a.type)!=null?a:"UNKNOWN";a=b.current.lastIndexOf(a);b.current=b.current.slice(0,a);p(n(b.current,f.current.hiddenOrBackgrounded_FIXME))}),g=e.subscribeToChanges(function(a){f.current=a,p(n(b.current,f.current.hiddenOrBackgrounded_FIXME))});return function(){a.unsubscribe(),d.unsubscribe(),g.remove()}},[e]);g=k(function(){return{getCurrentState:function(){var a=n(b.current,f.current.hiddenOrBackgrounded_FIXME);return{backgrounded:a,hidden:a,hiddenOrBackgrounded:a,hiddenOrBackgrounded_FIXME:a}},subscribeToChanges:function(a){var b=d.current;b.push(a);return{remove:function(){c("removeFromArray")(b,a)}}}}},[]);return h.jsx(c("HiddenSubtreeContext").Provider,{value:q,children:h.jsx(c("HiddenSubtreePassiveContext").Provider,{value:g,children:a})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometOnBlueViewPortMarginsProvider.react",["BaseViewportMarginsContext","ViewportBounds","react","shallowEqual"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");b=d("react");var i=b.useEffect,j=b.useState;function k(){return{bottom:c("ViewportBounds").getBottom(),left:c("ViewportBounds").getLeft(),right:c("ViewportBounds").getRight(),top:c("ViewportBounds").getTop()}}function a(a){a=a.children;var b=j(function(){return k()}),d=b[0],e=b[1];i(function(){var a=c("ViewportBounds").subscribe("change",function(){e(function(a){var b=k();return c("shallowEqual")(b,a)?a:b})});return function(){a.unsubscribe()}},[]);return h.jsx(c("BaseViewportMarginsContext").Provider,{value:d,children:a})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("ReactXHPContext",["react"],(function(a,b,c,d,e,f,g){"use strict";a=d("react");b=a.createContext(null);c=b;g["default"]=c}),98);
__d("SimpleCometOnBlueRouterDispatcher.react",["CometRouterDispatcherContext","goURI","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i=d("react").useContext,j={go:function(a,b){c("goURI")(a,!1,b.replace)},goBack:function(){window.navigation.back()},goTo:function(a,b){c("goURI")(a.url,!1,b.replace)},popPushView:function(){window.navigation.back()},prefetchRouteDefinition:function(){},prefetchRouteQueries:function(a,b){return{cancel:function(){},usePrefetchedEntrypointForRouting:function(){}}},preloadRouteCode:function(a,b){},withContext:function(){return j}};function a(a){a=a.children;var b=i(c("CometRouterDispatcherContext"));return h.jsx(c("CometRouterDispatcherContext").Provider,{value:(b=b)!=null?b:j,children:a})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometBlueBridge.react",["Actor","BaseToasterStateManagerProvider.react","CometBlueBridgeContext","CometBlueBridgeKeyCommandListener.react","CometContextualLayerAnchorRoot.react","CometErrorProjectContext","CometHeroInteractionWithDiv.react","CometLazyToasterView_DO_NOT_USE.react","CometOnBlueHiddenSubtreePassiveContextProvider.react","CometOnBlueViewPortMarginsProvider.react","CometTransientDialogProvider.react","CurrentUser","ReactXHPContext","ShowAllReactWarnings","SimpleCometOnBlueRouterDispatcher.react","gkx","justknobx","react","recoverableViolation"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i=d("react").useContext,j=h.Fragment;function a(a){var b,e=a.children,f=i(c("ReactXHPContext"));b=(b=a.interactionID)!=null?b:f==null?void 0:f.interactionID;a=(f=a.actorID)!=null?f:c("CurrentUser").getID();c("gkx")("708253")&&c("recoverableViolation")("CometBlueBridge should not be rendered in Comet","comet_infra");f=c("justknobx")._("172")?c("CometOnBlueHiddenSubtreePassiveContextProvider.react"):h.Fragment;return h.jsx(c("ShowAllReactWarnings"),{children:h.jsxs(j,{children:[h.jsx(c("CometLazyToasterView_DO_NOT_USE.react"),{}),h.jsx(c("SimpleCometOnBlueRouterDispatcher.react"),{children:h.jsx(c("CometErrorProjectContext").Provider,{value:"comet_infra",children:h.jsx(d("Actor").ActorProvider,{initialActorID:a,readonly:!0,children:h.jsx(c("CometBlueBridgeContext").Provider,{value:!0,children:h.jsx(c("CometOnBlueViewPortMarginsProvider.react"),{children:h.jsx(c("BaseToasterStateManagerProvider.react"),{children:h.jsx(c("CometBlueBridgeKeyCommandListener.react"),{children:h.jsx(c("CometContextualLayerAnchorRoot.react"),{children:h.jsx(c("CometTransientDialogProvider.react"),{children:h.jsx(f,{children:h.jsx(c("CometHeroInteractionWithDiv.react"),{interactionDesc:"CometBlueBridge Navigation",interactionUUID:b,children:e})})})})})})})})})})})]})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("PageTransitionsComet",["URI","recoverableViolation"],(function(a,b,c,d,e,f,g){"use strict";function h(a){c("recoverableViolation")("PageTransitions."+a+" called unexpectedly. This is not supported in Comet!","comet_infra")}function a(){h("_executeCompleteCallbacks")}function b(a,b){h("_handleTransition");return!1}function d(){h("_hasBootloadErrors");return!1}function e(a){h("_historyManagerHandler");return!1}function f(){h("_init");return!1}function i(a,b,c){h("_loadPage")}function j(a,b){h("_warnBeforeLeaving")}function k(){h("disableScrollAnimation")}function l(){h("disableTransitions")}function m(){h("getCurrentURI");return new(c("URI"))()}function n(){h("getMostRecentURI");return new(c("URI"))()}function o(){h("getNextReferredURI");return new(c("URI"))()}function p(){h("getNextURI");return new(c("URI"))()}function q(){h("getReferrerURI");return new(c("URI"))()}function r(a,b){b===void 0,h("go")}function s(a,b){b===void 0,h("goBase")}function t(){h("init")}function u(){h("isInitalized");return!1}function v(){h("isTransitioning");return!1}function w(a){h("registerCompletionCallback")}function x(a,b){h("registerHandler")}function y(a,b){h("removeHanlder")}function z(a){h("restoreScrollPosition");return!1}function A(a,b){h("rewriteCurrentURI")}function B(a){a===void 0,h("transitionComplete")}function C(){h("unifyURI")}g._executeCompletionCallbacks=a;g._handleTransition=b;g._hasBootloadErrors=d;g._historyManagerHandler=e;g._init=f;g._loadPage=i;g._warnBeforeLeaving=j;g.disableScrollAnimation=k;g.disableTransitions=l;g.getCurrentURI=m;g.getMostRecentURI=n;g.getNextReferrerURI=o;g.getNextURI=p;g.getReferrerURI=q;g.go=r;g.goBase=s;g.init=t;g.isInitialized=u;g.isTransitioning=v;g.registerCompletionCallback=w;g.registerHandler=x;g.removeHandler=y;g.restoreScrollPosition=z;g.rewriteCurrentURI=A;g.transitionComplete=B;g.unifyURI=C}),98);
__d("PageTransitions",["cr:917439"],(function(a,b,c,d,e,f,g){g["default"]=b("cr:917439")}),98);