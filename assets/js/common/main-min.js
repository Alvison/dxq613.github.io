/*! doc 2013-12-17 */
define("common/main",["bui/common","bui/tree","bui/tab"],function(e){function t(e){window.topManager=e}function n(e,t){return-1!==e.indexOf("?")?e+"&"+t:e+"?"+t}function i(e){e=e||"";var t="#"+e;location.hash=t}function a(){var e=location.hash,t="",n=e.lastIndexOf("/"),i=null;return e?(t=e.replace("#",""),n>=0&&(t=e.substring(n+1)),i=r(t),i&&(t=t.replace("?"+i,"")),{pageId:t,search:i}):null}function r(e){var t=e.indexOf("?");return t>=0?e.substring(t+1):null}var o=window,l=e("bui/common"),u=e("bui/tree"),c=e("bui/tab"),s=function(e){s.superclass.constructor.call(this,e),t(this)};return s.ATTRS={header:{valueFn:function(){return $("#header")}},content:{valueFn:function(){return $("#content")}},footer:{valueFn:function(){return $("#footer")}},homePage:{},urlSuffix:{value:"html"},menus:{},tree:{},tab:{}},l.extend(s,l.Base),l.augment(s,{openPage:function(e){e.title=e.title||"新的标签页";var t=this,n=e.reload,i=t.get("tab"),a=t.get("tree"),r=a.findNode(e.id),o=i.getActivedItem();r?t._setPageSelected(e.id,n,e.search):i.addTab(e,n),e.isClose&&o.close()},closePage:function(e){this.operatePage(e,"close")},reloadPage:function(e){this.operatePage(e,"reload")},setPageTitle:function(e,t){this.operatePage(t,"setTitle",[e])},operatePage:function(e,t,n){n=n||[];var i=this,a=i.get("tab"),r=e?a.getItemById(e):a.getActivedItem();r&&r[t]&&r[t].apply(r,n)},init:function(){this._initDom(),this._initEvent()},_initDom:function(){this.autoFitHeight(),this._initTree(),this._initTab(),this._initHomePage(),this._initNavPos()},_initTree:function(){var e=this,t=e.get("menus"),n=new u.TreeMenu({render:"#J_Tree",elCls:"bui-tree-list",accordion:!0,itemTplRender:function(t){return t.leaf&&!t.href&&(t.href=e._getNodeHref(t)),t.leaf?l.substitute('<li><a href="{href}">{text}</a></li>',t):"<li>"+t.text+"</li>"},expandAnimate:!0,nodes:t});n.render(),e.set("tree",n)},_initTab:function(){var e=this,t=new c.NavTab({render:"#J_Tab"});t.render(),e.set("tab",t)},_initHomePage:function(){var e=this,t=e.get("homePage");t&&e._setPageSelected(t)},_initNavPos:function(){var e=this,t=a();t&&e._setPageSelected(t.pageId,!0,t.search)},_initEvent:function(){this._initResizeEvent(),this._initNavEvent()},_initNavEvent:function(){var e=this,t=e.get("tree"),n=e.get("tab");t.get("el").delegate("a","click",function(e){e.preventDefault()}),t.on("itemclick",function(t){var n=t.item;n.leaf&&e._openPage(n,!0)}),t.on("itemselected",function(e){var t=e.item;t&&i(t.id)}),n.on("activeChange",function(e){var n,i=e.item;i?(n=t.findNode(i.get("id")),t.expandNode(n),t.setSelected(n)):t.clearSelection()})},_initResizeEvent:function(){var e=this;$(o).on("resize",function(){e.autoFitHeight()})},autoFitHeight:function(){var e=this,t=e.get("header"),n=e.get("footer"),i=e.get("content"),a=l.viewportHeight();i.height(a-n.height()-t.height())},_getNodeHref:function(e){var t=this,n=e.path.join("/");return 0==n.indexOf("/")&&(n=n.substring(1)),n+"."+t.get("urlSuffix")},_setPageSelected:function(e,t,n){var i=this,a=i.get("tree"),r=i.get("tab"),o=a.findNode(e),l="",u=-1;if(o)a.expandNode(o),a.setSelected(o),i._openPage(o,t,n);else if(e){var c=e.replace("-","/");-1===(u=e.indexOf("."))&&(c+=i.get("urlSuffix")),l=n?c+"?"+n:c,r.addTab({id:e,title:"",href:l},!!t)}},_openPage:function(e,t,i){var a=this,r=a.get("tab"),o=a.get("tree"),l=e.href||a._getNodeHref(e);e.leaf?(l=i?n(l,i):l,r.addTab({id:e.id,title:e.text,closeable:e.closeable,href:l},!!t)):o.expandNode(e)}}),s});