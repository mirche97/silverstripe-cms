!function(){"use strict";var e={964:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default={ANCHORSELECTOR_CURRENT_FIELD:"ANCHORSELECTOR_CURRENT_FIELD",ANCHORSELECTOR_UPDATED:"ANCHORSELECTOR_UPDATED",ANCHORSELECTOR_UPDATING:"ANCHORSELECTOR_UPDATING",ANCHORSELECTOR_UPDATE_FAILED:"ANCHORSELECTOR_UPDATE_FAILED"}},447:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.beginUpdating=function(e){return{type:i.default.ANCHORSELECTOR_UPDATING,payload:{pageId:e}}},t.updateFailed=function(e){return{type:i.default.ANCHORSELECTOR_UPDATE_FAILED,payload:{pageId:e}}},t.updated=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return{type:i.default.ANCHORSELECTOR_UPDATED,payload:{pageId:e,anchors:t,cacheResult:n}}},t.updatedCurrentField=function(e,t,n){return{type:i.default.ANCHORSELECTOR_CURRENT_FIELD,payload:{pageId:e,anchors:t,fieldID:n}}};var r,i=(r=n(964))&&r.__esModule?r:{default:r}},939:function(e){e.exports=ApolloClient},648:function(e){e.exports=Injector},595:function(e){e.exports=InsertLinkModal},363:function(e){e.exports=React},691:function(e){e.exports=ReactDomClient},624:function(e){e.exports=ReactRedux},265:function(e){e.exports=ShortcodeSerialiser},196:function(e){e.exports=TinyMCEActionRegistrar},754:function(e){e.exports=i18n},311:function(e){e.exports=jQuery}},t={};function n(r){var i=t[r];if(void 0!==i)return i.exports;var o=t[r]={exports:{}};return e[r](o,o.exports,n),o.exports}!function(){var e=p(n(754)),t=p(n(196)),r=p(n(363)),i=n(691),o=n(939),a=n(624),d=p(n(311)),l=p(n(265)),s=n(595),u=n(648),c=n(447);function p(e){return e&&e.__esModule?e:{default:e}}const f="sslinkanchor";t.default.addAction("sslink",{text:e.default._t("CMS.LINKLABEL_ANCHOR","Anchor on a page"),onAction:e=>e.execCommand(f),priority:60},editorIdentifier).addCommandWithUrlTest(f,/^\[sitetree_link.+]#[^#\]]+$/);const E={init(e){e.addCommand(f,(()=>{const t=(0,d.default)(`#${e.id}`).entwine("ss"),n=Number((0,d.default)("#Form_EditForm_ID").val()||0),r=(0,d.default)(e.getBody()).find("[id],[name]").toArray().map((e=>e.id||e.name));ss.store.dispatch((0,c.updatedCurrentField)(n,r,e.id)),t.openLinkAnchorDialog()}))}},A="insert-link__dialog-wrapper--anchor",C=(0,u.provideInjector)((0,s.createInsertLinkModal)("SilverStripe\\CMS\\Controllers\\CMSPageEditController","editorAnchorLink"));d.default.entwine("ss",(t=>{t("textarea.htmleditor").entwine({openLinkAnchorDialog(){let e=t(`#${A}`);e.length||(e=t(`<div id="${A}" />`),t("body").append(e)),e.addClass("insert-link__dialog-wrapper"),e.setElement(this),e.open()}}),t(`#${A}`).entwine({ReactRoot:null,renderModal(n){var d=this;const l=ss.store,s=ss.apolloClient,u=this.getOriginalAttributes(),c=this.getElement().getEditor(),p=c.getInstance().selection,f=c.getSelection(),E="A"!==p.getNode().tagName&&""===f.trim(),A=Number(t("#Form_EditForm_ID").val()||0);let _=this.getReactRoot();_||(_=(0,i.createRoot)(this[0]),this.setReactRoot(_)),_.render(r.default.createElement(o.ApolloProvider,{client:s},r.default.createElement(a.Provider,{store:l},r.default.createElement(C,{isOpen:n,onInsert:function(){return d.handleInsert(...arguments)},onClosed:()=>this.close(),title:e.default._t("CMS.LINK_ANCHOR","Link to an anchor on a page"),bodyClassName:"modal__dialog",className:"insert-link__dialog-wrapper--anchor",fileAttributes:u,identifier:"Admin.InsertLinkAnchorModal",requireLinkText:E,currentPageID:A}))))},buildAttributes(e){return{href:`${l.default.serialise({name:"sitetree_link",properties:{id:e.PageID}},!0)}${e.Anchor&&e.Anchor.length?`#${e.Anchor}`:""}`,target:e.TargetBlank?"_blank":"",title:e.Description}},getOriginalAttributes(){const e=this.getElement().getEditor(),n=t(e.getSelectedNode()),r=(n.attr("href")||"").split("#");if(!r[0])return{};const i=l.default.match("sitetree_link",!1,r[0]);return i?{PageID:i.properties.id?parseInt(i.properties.id,10):0,Anchor:r[1]||"",Description:n.attr("title"),TargetBlank:!!n.attr("target")}:{}}})})),tinymce.PluginManager.add(f,(e=>E.init(e)))}()}();