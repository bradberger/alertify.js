!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).alertifyjs={})}(this,(function(t){"use strict";
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
    ***************************************************************************** */function e(t,e,o,i){return new(o||(o=Promise))((function(n,a){function l(t){try{s(i.next(t))}catch(t){a(t)}}function r(t){try{s(i.throw(t))}catch(t){a(t)}}function s(t){var e;t.done?n(t.value):(e=t.value,e instanceof o?e:new o((function(t){t(e)}))).then(l,r)}s((i=i.apply(t,e||[])).next())}))}var o,i;(o=t.LogTypes||(t.LogTypes={})).default="default",o.success="success",o.error="error",
(i=t.DialogTypes||(t.DialogTypes={})).alert="alert",i.confirm="confirm",i.prompt="prompt";class n{constructor(){this.parent=document.body,this.version="2.0.43",this.okLabel="Ok",this.cancelLabel="Cancel",this.maxLogItems=2,this.promptValue="",this.promptPlaceholder="",this.closeLogOnClick=!1,this.delay=5e3,this.logContainerClass="alertify-logs",this.logTemplateMethod=null,this.dialogs={buttons:{holder:"<nav>{{buttons}}</nav>",ok:"<button class='ok' tabindex='1'>{{ok}}</button>",
cancel:"<button class='cancel' tabindex='2'>{{cancel}}</button>"},input:"<input type='text'>",message:"<p class='msg'>{{message}}</p>",log:"<div class='{{class}}'>{{message}}</div>"},this.injectCSS()}setParent(t){return this.parent=t,this}reset(){return this.parent=document.body,this.okBtn(n.defaultOkLabel),this.cancelBtn(n.defaultCancelLabel),this.setMaxLogItems(n.defaultMaxLogItems),this.promptValue="",this.promptPlaceholder="",this.delay=n.defaultDelay,
this.setCloseLogOnClick(n.defaultCloseLogOnClick),this.setLogPosition("bottom left"),this.logTemplateMethod=null,this}log(e,o){return this.prepareNotify(e,t.LogTypes.default,o),this}success(e,o){return this.prepareNotify(e,t.LogTypes.success,o),this}error(e,o){return this.prepareNotify(e,t.LogTypes.error,o),this}setDelay(t){return this.delay=Number(t)||n.defaultDelay,this}setMaxLogItems(t){return this.maxLogItems=Number(t)||n.defaultMaxLogItems,this}setCloseLogOnClick(t){
return this.closeLogOnClick=Boolean(t),this}setLogPosition(t){return this.logContainerClass=`alertify-logs ${t||""}`,this}setLogTemplate(t){return this.logTemplateMethod=t,this}clearLogs(){return this.setupLogContainer().innerHTML="",this}close(t,e=0){this.closeLogOnClick&&t.addEventListener("click",(()=>this.hideElement(t)));const o=e&&!isNaN(Number(e))?Number(e):this.delay;o<0?this.hideElement(t):o>0&&setTimeout((()=>this.hideElement(t)),o)}alert(o,i,n){
return e(this,void 0,void 0,(function*(){return yield this.dialog(o,t.DialogTypes.alert,i,n)}))}confirm(o,i,n){return e(this,void 0,void 0,(function*(){return yield this.dialog(o,t.DialogTypes.confirm,i,n)}))}prompt(o,i,n){return e(this,void 0,void 0,(function*(){return yield this.dialog(o,t.DialogTypes.prompt,i,n)}))}dialog(t,o,i,n){return e(this,void 0,void 0,(function*(){return yield this.setupDialog({type:o,message:t,onOkay:i,onCancel:n})}))}cancelBtn(t){return this.cancelLabel=t,this}
okBtn(t){return this.okLabel=t,this}placeholder(t){return this.promptPlaceholder=t,this}defaultValue(t){return this.promptValue=t,this}prepareNotify(t,e,o){const i=document.querySelectorAll(".alertify-logs > div");if(i){const t=i.length-this.maxLogItems;if(t>=0){const e=t+1;for(let t=0;t<e;t+=1)this.close(i[t],-1)}}this.showNotify(t,e,o)}showNotify(e,o=t.LogTypes.default,i){const n=this.setupLogContainer(),a=document.createElement("div");a.className=o,
this.logTemplateMethod?a.append(this.logTemplateMethod(e)):a.append(e),"function"==typeof i&&a.addEventListener("click",i),n.appendChild(a),requestAnimationFrame((()=>a.className+=" show")),this.close(a,this.delay)}setupLogContainer(){let t=document.querySelector(".alertify-logs");const e=this.logContainerClass;return t||(t=document.createElement("div"),t.className=e,this.parent.appendChild(t)),t.className!==e&&(t.className=e),t}buildDialog(t){
let e=this.dialogs.buttons.ok,o=`<div class="dialog"><div>${this.dialogs.message.replace("{{message}}",t.message)}`;return"confirm"!==t.type&&"prompt"!==t.type||(e=this.dialogs.buttons.cancel+this.dialogs.buttons.ok),"prompt"===t.type&&(o+=this.dialogs.input),o=`${o}${this.dialogs.buttons.holder}</div></div>`.replace("{{buttons}}",e).replace("{{ok}}",this.okLabel).replace("{{cancel}}",this.cancelLabel),o}setupDialog(t){return e(this,void 0,void 0,(function*(){
const e=document.createElement("div");e.className="alertify hide",e.innerHTML=this.buildDialog(t);const o=e.querySelector(".ok"),i=e.querySelector("input"),n=e.querySelector("label");let a;return i&&("string"==typeof this.promptPlaceholder&&(n?n.textContent=this.promptPlaceholder:i.placeholder=this.promptPlaceholder),"string"==typeof this.promptValue&&(i.value=this.promptValue)),Reflect.has(window,"Promise")?a=new Promise((o=>{this.setupHandlers(o,e,t)})):this.setupHandlers((()=>null),e,t),
this.parent.appendChild(e),setTimeout((()=>{e.classList.remove("hide"),i&&t.type&&"prompt"===t.type?(i.select(),i.focus()):o&&o.focus()}),100),yield a}))}injectCSS(){if(!document.querySelector("#alertifyCSS")){const t=document.getElementsByTagName("head")[0],e=document.createElement("style");e.id="alertifyCSS",
e.innerHTML=".alertify{position:fixed;background-color:rgba(0,0,0,.3);left:0;right:0;top:0;bottom:0;width:100%;height:100%;z-index:99999}.alertify.hide{opacity:0;pointer-events:none}.alertify,.alertify.show{-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-transition:all .33s cubic-bezier(.25,.8,.25,1);-o-transition:all .33s cubic-bezier(.25,.8,.25,1);transition:all .33s cubic-bezier(.25,.8,.25,1)}.alertify,.alertify *{-webkit-box-sizing:border-box;box-sizing:border-box}.alertify .dialog{padding:.75em}.alertify .alert,.alertify .dialog{width:100%;margin:0 auto;position:relative;top:50%;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%)}.alertify .alert>*,.alertify .dialog>*{width:25em;max-width:95%;margin:0 auto;text-align:center;padding:.75em;background:#fff;-webkit-box-shadow:0 2px 4px -1px rgba(0,0,0,.14),0 4px 5px 0 rgba(0,0,0,.098),0 1px 10px 0 rgba(0,0,0,.084);box-shadow:0 2px 4px -1px rgba(0,0,0,.14),0 4px 5px 0 rgba(0,0,0,.098),0 1px 10px 0 rgba(0,0,0,.084)}.alertify .alert .msg,.alertify .dialog .msg{padding:.75em;margin:0 0 .75em;text-align:left}.alertify .alert input:not(.form-control),.alertify .dialog input:not(.form-control){margin-bottom:15px;width:100%;font-size:100%;padding:.75em}.alertify .alert input:not(.form-control):focus,.alertify .dialog input:not(.form-control):focus{outline-offset:-2px}.alertify .alert nav,.alertify .dialog nav{text-align:right}.alertify .alert nav button:not(.btn):not(.pure-button):not(.md-button):not(.mdl-button),.alertify .dialog nav button:not(.btn):not(.pure-button):not(.md-button):not(.mdl-button){background:rgba(0,0,0,0);-webkit-box-sizing:border-box;box-sizing:border-box;color:rgba(0,0,0,.87);position:relative;outline:0;display:inline-block;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:0 6px;margin:6px 8px;line-height:36px;min-height:36px;white-space:nowrap;min-width:88px;text-align:center;text-transform:uppercase;font-size:14px;text-decoration:none;cursor:pointer;border:1px solid rgba(0,0,0,0);border-radius:2px}.alertify .alert nav button:not(.btn):not(.pure-button):not(.md-button):not(.mdl-button):active,.alertify .alert nav button:not(.btn):not(.pure-button):not(.md-button):not(.mdl-button):hover,.alertify .dialog nav button:not(.btn):not(.pure-button):not(.md-button):not(.mdl-button):active,.alertify .dialog nav button:not(.btn):not(.pure-button):not(.md-button):not(.mdl-button):hover{background-color:rgba(0,0,0,.05)}.alertify .alert nav button:not(.btn):not(.pure-button):not(.md-button):not(.mdl-button):focus,.alertify .dialog nav button:not(.btn):not(.pure-button):not(.md-button):not(.mdl-button):focus{border:1px solid rgba(0,0,0,.1)}.alertify .alert nav button.btn,.alertify .dialog nav button.btn{margin:6px 4px}.alertify-logs{position:fixed;z-index:99999}.alertify-logs>*{-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-transition:all .4s cubic-bezier(.25,.8,.25,1);-o-transition:all .4s cubic-bezier(.25,.8,.25,1);transition:all .4s cubic-bezier(.25,.8,.25,1);position:relative;clear:both;-webkit-backface-visibility:hidden;backface-visibility:hidden;-webkit-perspective:1000;perspective:1000;padding:.75em 1.5em;color:#fff;-webkit-box-shadow:0 .25em .5em 0 rgba(0,0,0,.2);box-shadow:0 .25em .5em 0 rgba(0,0,0,.2);border-radius:0;display:block!important;max-height:0;margin:0;overflow:hidden;opacity:0;pointer-events:none}.alertify-logs>*,.alertify-logs>.default{background:rgba(0,0,0,.8)}.alertify-logs>.error{background:rgba(244,67,54,.8)}.alertify-logs>.success{background:rgba(76,175,80,.9)}.alertify-logs>.show{margin-top:.75em;opacity:1;max-height:1000px;padding:.75em;pointer-events:auto}.alertify-logs.bottom,.alertify-logs:not(.top){bottom:1em}.alertify-logs.left,.alertify-logs:not(.right){left:1em}.alertify-logs.left>*,.alertify-logs:not(.right)>*{float:left;-webkit-transform:translateZ(0);transform:translateZ(0);height:auto}.alertify-logs.left>.show,.alertify-logs:not(.right)>.show{left:0}.alertify-logs.left>*,.alertify-logs.left>.hide,.alertify-logs:not(.right)>*,.alertify-logs:not(.right)>.hide{left:-110%}.alertify-logs.right{right:1em}.alertify-logs.right>*{float:right;-webkit-transform:translateZ(0);transform:translateZ(0)}.alertify-logs.right>.show{right:0;opacity:1}.alertify-logs.right>*,.alertify-logs.right>.hide{right:-110%;opacity:0}.alertify-logs.top{top:0}",
t.insertBefore(e,t.firstChild)}}removeCSS(){const t=document.querySelector("#alertifyCSS");(null==t?void 0:t.parentNode)&&t.parentNode.removeChild(t)}hideElement(t){if(!t)return;const e=()=>{(null==t?void 0:t.parentNode)&&t.parentNode.removeChild(t)};t.classList.remove("show"),t.classList.add("hide"),t.addEventListener("transitionend",e),setTimeout(e,n.transitionFallbackDuration)}setupHandlers(t,e,o){const i=e.querySelector(".ok"),n=e.querySelector(".cancel"),a=e.querySelector("input")
;i&&i.addEventListener("click",(i=>{o.onOkay&&"function"==typeof o.onOkay&&(a?o.onOkay(a.value,i):o.onOkay(i)),t(a?{buttonClicked:"ok",inputValue:a.value,event:i}:{buttonClicked:"ok",event:i}),this.hideElement(e)})),n&&n.addEventListener("click",(i=>{o.onCancel&&"function"==typeof o.onCancel&&o.onCancel(i),t({buttonClicked:"cancel",event:i}),this.hideElement(e)})),a&&a.addEventListener("keyup",(t=>{i&&13===t.which&&i.click()}))}}n.transitionFallbackDuration=500,n.defaultDelay=5e3,
n.defaultMaxLogItems=2,n.defaultOkLabel="Ok",n.defaultCancelLabel="Cancel",n.defaultCloseLogOnClick=!1,n.defaultLogContainerClass="alertify-logs",n.defaultDialogs={buttons:{holder:"<nav>{{buttons}}</nav>",ok:"<button class='ok' tabindex='1'>{{ok}}</button>",cancel:"<button class='cancel' tabindex='2'>{{cancel}}</button>"},input:"<input type='text'>",message:"<p class='msg'>{{message}}</p>",log:"<div class='{{class}}'>{{message}}</div>"};const a=new n;t.Alertify=n,t.alertify=a,
Object.defineProperty(t,"__esModule",{value:!0})}));
