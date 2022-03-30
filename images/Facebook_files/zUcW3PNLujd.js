if (self.CavalryLogger) { CavalryLogger.start_js_script(document.currentScript); }

__d("CometUFIComposerEntity",[],(function(a,b,c,d,e,f){"use strict";function a(a){a=a.getData();var b=a.id,c=a.isWeak,d=a.type;a=a.uri;b={__UFI__:!0,id:b!=null?String(b):"0",isWeak:Boolean(c),type:g(d)};a!=null&&(b[a]=a);return b}function g(a){a=h(a);switch(a){case"Actor":case"Application":case"CMSObject":case"Event":case"GroupAnonAuthorProfile":case"GeneralGroupContextualProfile":case"ExternalUrl":case"InstantArticle":case"Doc":case"FundraiserPersonToCharity":case"FundraiserPersonForPerson":case"Group":case"GroupCommerceProductItem":case"GroupRule":case"MessengerCallInviteLink":case"Hashtag":case"Note":case"Menu":case"ReducedMessagingActor":case"Page":case"Photo":case"ProductItem":case"Story":case"TextDelightCampaign":case"User":case"Video":case"VideoList":case"VideoTimeIndex":case"WorkKnowledgeCollection":return a;default:return"Actor"}}function h(a){return typeof a!=="string"||a===""?null:a[0].toUpperCase()+a.substring(1)}f.draftEntityInstanceToCometUFIComposerEntity=a}),66);
__d("getEditorStateFromUFI2ComposerState",["CompositeDraftDecorator","ContentState","EditorState","FBLogger"],(function(a,b,c,d,e,f,g){"use strict";function a(a){var b=a.inputState;switch(b.__type){case"plain-text":var d=b.selectionOffsets,e=b.text;e=c("ContentState").createFromText(e.replace(/\n\n$/,"\n"));var f=c("EditorState").createWithContent(e);if(d){var g,h,i,j=e.getFirstBlock(),k=0;while(j){var l=j.getKey(),m=j.getLength(),n=k;k+=m;k>=d.start&&d.start-n>=0&&(g={key:l,offset:d.start-n});k>=d.end&&d.end-n>=0&&(h={key:l,offset:d.end-n});i==null&&(h&&!g?i=!0:g&&!h?i=!1:h&&g&&(i=g.offset>h.offset));j=e.getBlockAfter(l)}if(g&&h){m=f.getSelection().merge({anchorKey:g.key,anchorOffset:g.offset,focusKey:h.key,focusOffset:h.offset,isBackward:!!i});f=c("EditorState").forceSelection(f,m)}}return f;case"lexical-editor-state-based":throw c("FBLogger")("UFILexicalComposer").mustfixThrow("Lexical editor encountered within draftjs-only code. This should never happen.");case"editor-state-based":default:n=b.editorState.getDecorator();return n instanceof c("CompositeDraftDecorator")&&n.isCompositionOfDecorators(a.inputDecorators)?b.editorState:c("EditorState").set(b.editorState,{decorator:new(c("CompositeDraftDecorator"))(a.inputDecorators)})}}g["default"]=a}),98);
__d("CometUFIRichComposerInput.react",["CometVisualCompletionAttributes","DraftEditor.react","Keys","cr:2012305","getDefaultKeyBinding","getEditorStateFromUFI2ComposerState","isSoftNewlineEvent","react","stylex"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i={disabled:{cursor:"bnpdmtie"},root:{color:"oo9gr5id"}};a=function(a){babelHelpers.inheritsLoose(d,a);function d(){var b,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(b=d=a.call.apply(a,[this].concat(f))||this,d.$1=function(a){d.props.onComposerStateChange(function(b){return babelHelpers["extends"]({},b,{inputState:b.inputState.__type==="editor-state-based"?babelHelpers["extends"]({},b.inputState,{editorState:a}):{__type:"editor-state-based",editorState:a}})})},d.$2=function(a,b){return d.props.handleBeforeInput?d.props.handleBeforeInput(a,b):"not-handled"},d.$3=function(a,b){if(d.props.handleKeyCommand&&d.props.handleKeyCommand(a,b)==="handled")return"handled";if(a==="ufi-commit"){d.props.onCommit();return"handled"}return"not-handled"},d.$4=function(a){if(d.props.keyBindingFn){var b=d.props.keyBindingFn(a);if(b!=null)return b}return a.keyCode===c("Keys").RETURN&&!c("isSoftNewlineEvent")(a)?"ufi-commit":c("getDefaultKeyBinding")(a)},b)||babelHelpers.assertThisInitialized(d)}var e=d.prototype;e.componentWillUnmount=function(){var a=this.lastEditorRef;a&&b("cr:2012305")&&b("cr:2012305").unregisterTypingPerf(a)};e.execCommand=function(a){this.props.handleCommand&&this.props.handleCommand(a)};e.render=function(){var a=this,d=this.props.composerState.ariaInputs__DRAFTJS_ONLY;return h.jsx("div",babelHelpers["extends"]({className:c("stylex")(i.root,this.props.composerState.isLocked&&i.disabled,this.props.xstyle)},c("CometVisualCompletionAttributes").IGNORE,{onClick:this.props.onClick,children:h.jsx(c("DraftEditor.react"),{ariaActiveDescendantID:d?d["aria-activedescendant"]:void 0,ariaControls:d?d["aria-controls"]:void 0,ariaDescribedBy:this.props.ariaDescribedBy,ariaLabel:String((d=this.props.ariaLabel)!=null?d:this.props.placeholder),editorRef:function(c){var d=a.props.onInputRefUpdated;d&&d(c);if(b("cr:2012305")===null)return;d=a.lastEditorRef;if(d===c||c===null)return;c!==null&&(b("cr:2012305").trackTypingPerf(c,"UFI2RichComposerInput",a.lastEditorRef,{editor:"CometUFIDraftEditor"}),a.lastEditorRef=c)},editorState:c("getEditorStateFromUFI2ComposerState")(this.props.composerState),handleBeforeInput:this.$2,handleKeyCommand:this.$3,handlePastedFiles:this.props.handlePastedFiles,keyBindingFn:this.$4,onBlur:this.props.onBlur,onChange:this.$1,onFocus:this.props.onFocus,placeholder:String(this.props.placeholder),placeholderClassName:this.props.placeholderClassName,preventScroll:!0,readOnly:this.props.composerState.isLocked,spellCheck:!0,stripPastedStyles:!0,webDriverTestID:this.props.webDriverTestID})}))};return d}(h.PureComponent);g["default"]=a}),98);
__d("getPlainTextFromUFI2InputState",["FBLogger"],(function(a,b,c,d,e,f,g){"use strict";function a(a){switch(a.__type){case"plain-text":return a.text;case"editor-state-based":return a.editorState.getCurrentContent().getPlainText();case"lexical-editor-state-based":throw c("FBLogger")("UFILexicalComposer").mustfixThrow("Lexical editor encountered within draftjs-only code. This should never happen.");default:return a}}g["default"]=a}),98);
__d("EmojiSpan.react",["cx","FBEmojiResource","UnicodeUtils","react"],(function(a,b,c,d,e,f,g,h){var i=d("react");function a(a){var b=a.children;a.contentState;var e=a.decoratedText,f=a.dir,g=a.offsetKey;a=a.size;var h=0,j=e.length,k=[];while(h<j){var l=d("UnicodeUtils").getUTF16Length(e,h);k.push(e.substr(h,l));h+=l}l=c("FBEmojiResource").fromCodepoints(k);h=l!=null?l.getImageURL(a):null;return h!=null?i.jsx("span",{className:"_3gl1 _5zz4","data-offset-key":g,"data-testid":void 0,dir:f,style:{backgroundImage:"url("+h+")",backgroundSize:a+"px "+a+"px",height:a,width:a},children:i.jsx("span",{className:"_ncl",children:b})}):i.jsx("span",{"data-offset-key":g,children:e})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);