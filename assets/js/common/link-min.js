/*! doc 2014-03-19 */
define("common/link",["bui/common"],function(t){function e(t){var e={};return $.each(t,function(t,n){var a=n.nodeName,i=r[a];i&&(e[i]=n.nodeValue)}),e}var n=t("bui/common"),r={"data-id":"id",title:"title","data-href":"href","data-close":"isClose","data-search":"search","data-type":"type"},a=function(t){a.superclass.constructor.call(this,t)};return a.ATTRS={linkCls:{value:"page-action"}},n.extend(a,n.Base),n.augment(a,{init:function(){this._initEvent()},_initEvent:function(){var t=this,n=t.get("linkCls");top.topManager&&$(document).delegate("."+n,"click",function(t){var n=t.currentTarget,r=n.attributes,a=e(r);a.type&&"open"!=a.type?"setTitle"==a.type?top.topManager.setPageTitle(a.title):(t.preventDefault(),top.topManager.operatePage(a.id,a.type)):(top.topManager.openPage(a),t.preventDefault())})}}),a});