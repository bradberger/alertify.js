var alertifyjs=function(t){"use strict";
/*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */function e(t,e,o,n){return new(o||(o=Promise))((function(i,r){function a(t){try{s(n.next(t))}catch(t){r(t)}}function l(t){try{s(n.throw(t))}catch(t){r(t)}}function s(t){var e;t.done?i(t.value):(e=t.value,e instanceof o?e:new o((function(t){t(e)}))).then(a,l)}s((n=n.apply(t,e||[])).next())}))}function o(t,e){var o,n,i,r,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return r={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function l(r){return function(l){return function(r){if(o)throw new TypeError("Generator is already executing.");for(;a;)try{if(o=1,n&&(i=2&r[0]?n.return:r[0]?n.throw||((i=n.return)&&i.call(n),0):n.next)&&!(i=i.call(n,r[1])).done)return i;switch(n=0,i&&(r=[2&r[0],i.value]),r[0]){case 0:case 1:i=r;break;case 4:return a.label++,{value:r[1],done:!1};case 5:a.label++,n=r[1],r=[0];continue;case 7:r=a.ops.pop(),a.trys.pop();continue;default:if(!(i=a.trys,(i=i.length>0&&i[i.length-1])||6!==r[0]&&2!==r[0])){a=0;continue}if(3===r[0]&&(!i||r[1]>i[0]&&r[1]<i[3])){a.label=r[1];break}if(6===r[0]&&a.label<i[1]){a.label=i[1],i=r;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(r);break}i[2]&&a.ops.pop(),a.trys.pop();continue}r=e.call(t,a)}catch(t){r=[6,t],n=0}finally{o=i=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}([r,l])}}}var n,i;(n=t.LogTypes||(t.LogTypes={})).default="default",n.success="success",n.error="error",(i=t.DialogTypes||(t.DialogTypes={})).alert="alert",i.confirm="confirm",i.prompt="prompt";var r=function(){function n(){this.parent=document.body,this.version="1.0.11",this.okLabel="Ok",this.cancelLabel="Cancel",this.maxLogItems=2,this.promptValue="",this.promptPlaceholder="",this.closeLogOnClick=!1,this.delay=5e3,this.logContainerClass="alertify-logs",this.logTemplateMethod=null,this.dialogs={buttons:{holder:"<nav>{{buttons}}</nav>",ok:"<button class='ok' tabindex='1'>{{ok}}</button>",cancel:"<button class='cancel' tabindex='2'>{{cancel}}</button>"},input:"<input type='text'>",message:"<p class='msg'>{{message}}</p>",log:"<div class='{{class}}'>{{message}}</div>"},this.injectCSS()}return n.prototype.setParent=function(t){return this.parent=t,this},n.prototype.reset=function(){return this.parent=document.body,this.okBtn(n.defaultOkLabel),this.cancelBtn(n.defaultCancelLabel),this.setMaxLogItems(n.defaultMaxLogItems),this.promptValue="",this.promptPlaceholder="",this.delay=n.defaultDelay,this.setCloseLogOnClick(n.defaultCloseLogOnClick),this.setLogPosition("bottom left"),this.logTemplateMethod=null,this},n.prototype.log=function(e,o){return this.prepareNotify(e,t.LogTypes.default,o),this},n.prototype.success=function(e,o){return this.prepareNotify(e,t.LogTypes.success,o),this},n.prototype.error=function(e,o){return this.prepareNotify(e,t.LogTypes.error,o),this},n.prototype.setDelay=function(t){return this.delay=Number(t)||n.defaultDelay,this},n.prototype.setMaxLogItems=function(t){return this.maxLogItems=Number(t)||n.defaultMaxLogItems,this},n.prototype.setCloseLogOnClick=function(t){return this.closeLogOnClick=Boolean(t),this},n.prototype.setLogPosition=function(t){return this.logContainerClass="alertify-logs "+(t||""),this},n.prototype.setLogTemplate=function(t){return this.logTemplateMethod=t,this},n.prototype.clearLogs=function(){return this.setupLogContainer().innerHTML="",this},n.prototype.close=function(t,e){var o=this;void 0===e&&(e=0),this.closeLogOnClick&&t.addEventListener("click",(function(){return o.hideElement(t)}));var n=e&&!isNaN(Number(e))?Number(e):this.delay;n<0?this.hideElement(t):n>0&&setTimeout((function(){return o.hideElement(t)}),n)},n.prototype.alert=function(n,i,r){return e(this,void 0,void 0,(function(){return o(this,(function(e){switch(e.label){case 0:return[4,this.dialog(n,t.DialogTypes.alert,i,r)];case 1:return[2,e.sent()]}}))}))},n.prototype.confirm=function(n,i,r){return e(this,void 0,void 0,(function(){return o(this,(function(e){switch(e.label){case 0:return[4,this.dialog(n,t.DialogTypes.confirm,i,r)];case 1:return[2,e.sent()]}}))}))},n.prototype.prompt=function(n,i,r){return e(this,void 0,void 0,(function(){return o(this,(function(e){switch(e.label){case 0:return[4,this.dialog(n,t.DialogTypes.prompt,i,r)];case 1:return[2,e.sent()]}}))}))},n.prototype.dialog=function(t,n,i,r){return e(this,void 0,void 0,(function(){return o(this,(function(e){switch(e.label){case 0:return[4,this.setupDialog({type:n,message:t,onOkay:i,onCancel:r})];case 1:return[2,e.sent()]}}))}))},n.prototype.cancelBtn=function(t){return this.cancelLabel=t,this},n.prototype.okBtn=function(t){return this.okLabel=t,this},n.prototype.placeholder=function(t){return this.promptPlaceholder=t,this},n.prototype.defaultValue=function(t){return this.promptValue=t,this},n.prototype.prepareNotify=function(t,e,o){var n=document.querySelectorAll(".alertify-logs > div");if(n){var i=n.length-this.maxLogItems;if(i>=0)for(var r=i+1,a=0;a<r;a+=1)this.close(n[a],-1)}this.showNotify(t,e,o)},n.prototype.showNotify=function(e,o,n){void 0===o&&(o=t.LogTypes.default);var i=this.setupLogContainer(),r=document.createElement("div");r.className=o,r.innerHTML=this.logTemplateMethod?this.logTemplateMethod(e):e,"function"==typeof n&&r.addEventListener("click",n),i.appendChild(r),setTimeout((function(){r.className+=" show"}),10),this.close(r,this.delay)},n.prototype.setupLogContainer=function(){var t=document.querySelector(".alertify-logs"),e=this.logContainerClass;return t||((t=document.createElement("div")).className=e,this.parent.appendChild(t)),t.className!==e&&(t.className=e),t},n.prototype.buildDialog=function(t){var e=this.dialogs.buttons.ok,o='<div class="dialog"><div>'+this.dialogs.message.replace("{{message}}",t.message);return"confirm"!==t.type&&"prompt"!==t.type||(e=this.dialogs.buttons.cancel+this.dialogs.buttons.ok),"prompt"===t.type&&(o+=this.dialogs.input),o=(""+o+this.dialogs.buttons.holder+"</div></div>").replace("{{buttons}}",e).replace("{{ok}}",this.okLabel).replace("{{cancel}}",this.cancelLabel)},n.prototype.setupDialog=function(t){return e(this,void 0,void 0,(function(){var e,n,i,r,a,l=this;return o(this,(function(o){switch(o.label){case 0:return(e=document.createElement("div")).className="alertify hide",e.innerHTML=this.buildDialog(t),n=e.querySelector(".ok"),i=e.querySelector("input"),r=e.querySelector("label"),i&&("string"==typeof this.promptPlaceholder&&(r?r.textContent=this.promptPlaceholder:i.placeholder=this.promptPlaceholder),"string"==typeof this.promptValue&&(i.value=this.promptValue)),a=void 0,Reflect.has(window,"Promise")?a=new Promise((function(o){return l.setupHandlers(o,e,t)})):this.setupHandlers((function(){return null}),e,t),this.parent.appendChild(e),setTimeout((function(){e.classList.remove("hide"),i&&t.type&&"prompt"===t.type?(i.select(),i.focus()):n&&n.focus()}),100),[4,a];case 1:return[2,o.sent()]}}))}))},n.prototype.injectCSS=function(){if(!document.querySelector("#alertifyCSS")){var t=document.getElementsByTagName("head")[0],e=document.createElement("style");e.id="alertifyCSS",e.innerHTML=".alertify{position:fixed;background-color:rgba(0,0,0,.3);left:0;right:0;top:0;bottom:0;width:100%;height:100%;z-index:99999}.alertify.hide{opacity:0;pointer-events:none}.alertify,.alertify.show{-webkit-transition:all .33s cubic-bezier(.25,.8,.25,1);-o-transition:all .33s cubic-bezier(.25,.8,.25,1);transition:all .33s cubic-bezier(.25,.8,.25,1)}.alertify,.alertify *,.alertify.show{-webkit-box-sizing:border-box;box-sizing:border-box}.alertify .dialog{padding:12px}.alertify .alert,.alertify .dialog{width:100%;margin:0 auto;position:relative;top:50%;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%)}.alertify .alert>*,.alertify .dialog>*{width:400px;max-width:95%;margin:0 auto;text-align:center;padding:12px;background:#fff;-webkit-box-shadow:0 2px 4px -1px rgba(0,0,0,.14),0 4px 5px 0 rgba(0,0,0,.098),0 1px 10px 0 rgba(0,0,0,.084);box-shadow:0 2px 4px -1px rgba(0,0,0,.14),0 4px 5px 0 rgba(0,0,0,.098),0 1px 10px 0 rgba(0,0,0,.084)}.alertify .alert .msg,.alertify .dialog .msg{padding:12px;margin:0 0 12px;text-align:left}.alertify .alert input:not(.form-control),.alertify .dialog input:not(.form-control){margin-bottom:15px;width:100%;font-size:100%;padding:12px}.alertify .alert input:not(.form-control):focus,.alertify .dialog input:not(.form-control):focus{outline-offset:-2px}.alertify .alert nav,.alertify .dialog nav{text-align:right}.alertify .alert nav button:not(.btn):not(.pure-button):not(.md-button):not(.mdl-button),.alertify .dialog nav button:not(.btn):not(.pure-button):not(.md-button):not(.mdl-button){background:rgba(0,0,0,0);-webkit-box-sizing:border-box;box-sizing:border-box;color:rgba(0,0,0,.87);position:relative;outline:0;display:inline-block;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:0 6px;margin:6px 8px;line-height:36px;min-height:36px;white-space:nowrap;min-width:88px;text-align:center;text-transform:uppercase;font-size:14px;text-decoration:none;cursor:pointer;border:1px solid rgba(0,0,0,0);border-radius:2px}.alertify .alert nav button:not(.btn):not(.pure-button):not(.md-button):not(.mdl-button):active,.alertify .alert nav button:not(.btn):not(.pure-button):not(.md-button):not(.mdl-button):hover,.alertify .dialog nav button:not(.btn):not(.pure-button):not(.md-button):not(.mdl-button):active,.alertify .dialog nav button:not(.btn):not(.pure-button):not(.md-button):not(.mdl-button):hover{background-color:rgba(0,0,0,.05)}.alertify .alert nav button:not(.btn):not(.pure-button):not(.md-button):not(.mdl-button):focus,.alertify .dialog nav button:not(.btn):not(.pure-button):not(.md-button):not(.mdl-button):focus{border:1px solid rgba(0,0,0,.1)}.alertify .alert nav button.btn,.alertify .dialog nav button.btn{margin:6px 4px}.alertify-logs{position:fixed;z-index:99999}.alertify-logs>*{-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-transition:all .4s cubic-bezier(.25,.8,.25,1);-o-transition:all .4s cubic-bezier(.25,.8,.25,1);transition:all .4s cubic-bezier(.25,.8,.25,1);position:relative;clear:both;-webkit-backface-visibility:hidden;backface-visibility:hidden;-webkit-perspective:1000;perspective:1000;padding:12px 24px;color:#fff;-webkit-box-shadow:0 2px 5px 0 rgba(0,0,0,.2);box-shadow:0 2px 5px 0 rgba(0,0,0,.2);border-radius:1px;display:block!important;max-height:0;margin:0;overflow:hidden;opacity:0;pointer-events:none}.alertify-logs>*,.alertify-logs>.default{background:rgba(0,0,0,.8)}.alertify-logs>.error{background:rgba(244,67,54,.8)}.alertify-logs>.success{background:rgba(76,175,80,.9)}.alertify-logs>.show{margin-top:12px;opacity:1;max-height:1000px;padding:12px;pointer-events:auto}.alertify-logs.bottom,.alertify-logs:not(.top){bottom:16px}.alertify-logs.left,.alertify-logs:not(.right){left:16px}.alertify-logs.left>*,.alertify-logs:not(.right)>*{float:left;-webkit-transform:translateZ(0);transform:translateZ(0);height:auto}.alertify-logs.left>.show,.alertify-logs:not(.right)>.show{left:0}.alertify-logs.left>*,.alertify-logs.left>.hide,.alertify-logs:not(.right)>*,.alertify-logs:not(.right)>.hide{left:-110%}.alertify-logs.right{right:16px}.alertify-logs.right>*{float:right;-webkit-transform:translateZ(0);transform:translateZ(0)}.alertify-logs.right>.show{right:0;opacity:1}.alertify-logs.right>*,.alertify-logs.right>.hide{right:-110%;opacity:0}.alertify-logs.top{top:0}",t.insertBefore(e,t.firstChild)}},n.prototype.removeCSS=function(){var t=document.querySelector("#alertifyCSS");(null==t?void 0:t.parentNode)&&t.parentNode.removeChild(t)},n.prototype.hideElement=function(t){if(t){var e=function(){(null==t?void 0:t.parentNode)&&t.parentNode.removeChild(t)};t.classList.remove("show"),t.classList.add("hide"),t.addEventListener("transitionend",e),setTimeout(e,n.transitionFallbackDuration)}},n.prototype.setupHandlers=function(t,e,o){var n=this,i=e.querySelector(".ok"),r=e.querySelector(".cancel"),a=e.querySelector("input");i&&i.addEventListener("click",(function(i){o.onOkay&&"function"==typeof o.onOkay&&(a?o.onOkay(a.value,i):o.onOkay(i)),t(a?{buttonClicked:"ok",inputValue:a.value,event:i}:{buttonClicked:"ok",event:i}),n.hideElement(e)})),r&&r.addEventListener("click",(function(i){o.onCancel&&"function"==typeof o.onCancel&&o.onCancel(i),t({buttonClicked:"cancel",event:i}),n.hideElement(e)})),a&&a.addEventListener("keyup",(function(t){i&&13===t.which&&i.click()}))},n.transitionFallbackDuration=500,n.defaultDelay=5e3,n.defaultMaxLogItems=2,n.defaultOkLabel="Ok",n.defaultCancelLabel="Cancel",n.defaultCloseLogOnClick=!1,n.defaultLogContainerClass="alertify-logs",n.defaultDialogs={buttons:{holder:"<nav>{{buttons}}</nav>",ok:"<button class='ok' tabindex='1'>{{ok}}</button>",cancel:"<button class='cancel' tabindex='2'>{{cancel}}</button>"},input:"<input type='text'>",message:"<p class='msg'>{{message}}</p>",log:"<div class='{{class}}'>{{message}}</div>"},n}(),a=new r;return t.Alertify=r,t.alertify=a,t}({});
