(this["webpackJsonpblip-plugin-example"]=this["webpackJsonpblip-plugin-example"]||[]).push([[28],{109:function(t,i,e){"use strict";e.r(i),e.d(i,"bds_chip_clickable",(function(){return c})),e.d(i,"bds_tooltip",(function(){return n}));var o=e(8),l=function(t,i,e,o){function l(t){return t instanceof e?t:new e((function(i){i(t)}))}return new(e||(e=Promise))((function(e,r){function c(t){try{a(o.next(t))}catch(i){r(i)}}function n(t){try{a(o.throw(t))}catch(i){r(i)}}function a(t){t.done?e(t.value):l(t.value).then(c,n)}a((o=o.apply(t,i||[])).next())}))},r=function(t,i){var e,o,l,r,c={label:0,sent:function(){if(1&l[0])throw l[1];return l[1]},trys:[],ops:[]};return r={next:n(0),throw:n(1),return:n(2)},"function"===typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function n(t){return function(i){return a([t,i])}}function a(n){if(e)throw new TypeError("Generator is already executing.");for(;r&&(r=0,n[0]&&(c=0)),c;)try{if(e=1,o&&(l=2&n[0]?o.return:n[0]?o.throw||((l=o.return)&&l.call(o),0):o.next)&&!(l=l.call(o,n[1])).done)return l;switch(o=0,l&&(n=[2&n[0],l.value]),n[0]){case 0:case 1:l=n;break;case 4:return c.label++,{value:n[1],done:!1};case 5:c.label++,o=n[1],n=[0];continue;case 7:n=c.ops.pop(),c.trys.pop();continue;default:if(!(l=(l=c.trys).length>0&&l[l.length-1])&&(6===n[0]||2===n[0])){c=0;continue}if(3===n[0]&&(!l||n[1]>l[0]&&n[1]<l[3])){c.label=n[1];break}if(6===n[0]&&c.label<l[1]){c.label=l[1],l=n;break}if(l&&c.label<l[2]){c.label=l[2],c.ops.push(n);break}l[2]&&c.ops.pop(),c.trys.pop();continue}n=i.call(t,c)}catch(a){n=[6,a],o=0}finally{e=l=0}if(5&n[0])throw n[1];return{value:n[0]?n[1]:void 0,done:!0}}},c=function(){function t(t){Object(o.r)(this,t),this.chipClickableClose=Object(o.c)(this,"chipClickableClose",7),this.chipClickableClick=Object(o.c)(this,"chipClickableClick",7),this.visible=!0,this.icon=void 0,this.avatar=void 0,this.color="default",this.size="standard",this.clickable=!1,this.close=!1,this.disabled=!1,this.dataTest=null}return t.prototype.handleClickKey=function(t){"Enter"!==t.key&&" "!==t.key||this.disabled||(t.preventDefault(),this.chipClickableClick.emit())},t.prototype.handleClick=function(t){this.disabled||(t.preventDefault(),this.chipClickableClick.emit())},t.prototype.handleCloseChip=function(t){t.preventDefault(),this.chipClickableClose.emit({id:this.element.id})},t.prototype.handleCloseKey=function(t){"Enter"!==t.key&&" "!==t.key||this.disabled||(t.preventDefault(),this.chipClickableClose.emit({id:this.element.id}))},t.prototype.getSizeAvatarChip=function(){return"tall"===this.size?"extra-small":"micro"},t.prototype.getSizeIconChip=function(){return"tall"===this.size?"medium":"x-small"},t.prototype.render=function(){var t;return Object(o.h)(o.H,null,Object(o.h)("div",{class:(t={chip_clickable:!0},t["chip_clickable--".concat(this.color)]=!this.disabled,t["chip_clickable--".concat(this.size)]=!0,t["chip_clickable--hide"]=!this.visible,t["chip_clickable--click"]=this.clickable,t["chip_clickable--disabled"]=this.disabled,t),onClick:this.handleClick.bind(this),"data-test":this.dataTest},this.clickable&&!this.disabled&&Object(o.h)("div",{class:"chip_focus",onKeyDown:this.handleClickKey.bind(this),tabindex:"0"}),this.clickable&&!this.disabled&&Object(o.h)("div",{class:"chip_darker"}),this.icon&&!this.avatar&&Object(o.h)("div",{class:"chip_clickable--icon"},Object(o.h)("bds-icon",{size:this.getSizeIconChip(),name:this.icon})),this.avatar&&Object(o.h)("div",{class:"chip_clickable--avatar"},Object(o.h)("bds-avatar",{size:this.getSizeAvatarChip(),thumbnail:this.avatar})),Object(o.h)("bds-typo",{class:"chip_clickable--text",variant:"fs-12",bold:"bold"},Object(o.h)("slot",null)),this.close&&Object(o.h)("div",{class:"chip_clickable--close",onClick:this.handleCloseChip.bind(this)},!this.disabled&&Object(o.h)("div",{class:"close_focus",onKeyDown:this.handleCloseKey.bind(this),tabindex:"0"}),Object(o.h)("bds-icon",{size:"x-small",theme:"solid",name:"error"}))))},Object.defineProperty(t.prototype,"element",{get:function(){return Object(o.g)(this)},enumerable:!1,configurable:!0}),t}();c.style=':host{display:block;height:-webkit-max-content;height:-moz-max-content;height:max-content;border-radius:4px;-webkit-box-sizing:border-box;box-sizing:border-box}:host .chip_clickable{display:-ms-flexbox;display:flex;min-width:32px;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;height:32px;border-radius:16px;padding:2px 4px;-ms-flex-align:center;align-items:center;-webkit-box-sizing:border-box;box-sizing:border-box;-ms-flex-pack:center;justify-content:center;position:relative;z-index:0}:host .chip_clickable--hide{display:none;padding:0;border:none}:host .chip_clickable .chip_focus:focus{position:absolute;width:100%;height:100%;padding:2px;border-radius:4px;outline:var(--color-focus, #c226fb) solid 2px}:host .chip_clickable--click{cursor:pointer}:host .chip_clickable--click .chip_darker{opacity:0;position:absolute;width:100%;height:100%;border-radius:inherit;z-index:1;-webkit-backdrop-filter:brightness(1);backdrop-filter:brightness(1);-webkit-box-sizing:border-box;box-sizing:border-box}:host .chip_clickable--click:hover .chip_darker{opacity:1;-webkit-backdrop-filter:brightness(0.9);backdrop-filter:brightness(0.9)}:host .chip_clickable--click:active .chip_darker{opacity:1;-webkit-backdrop-filter:brightness(0.8);backdrop-filter:brightness(0.8)}:host .chip_clickable--disabled{cursor:default;background-color:var(--color-surface-3, #e7edf4)}:host .chip_clickable--disabled .chip_clickable--icon{color:var(--color-content-default, #202c44)}:host .chip_clickable--disabled .chip_clickable--text{color:var(--color-content-default, #202c44)}:host .chip_clickable--disabled .chip_clickable--close{cursor:default}:host .chip_clickable--icon{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;height:20px;padding-left:4px;z-index:2}:host .chip_clickable--close{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;height:20px;padding-right:4px;mix-blend-mode:hard-light;opacity:0.5;z-index:2;position:relative;cursor:pointer}:host .chip_clickable--close .close_focus:focus{position:absolute;width:100%;height:100%;left:-2px;border-radius:4px;outline:var(--color-focus, #c226fb) solid 2px}:host .chip_clickable--text{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;width:-webkit-max-content;width:-moz-max-content;width:max-content;height:20px;margin:0 8px;z-index:2;font-family:"Nunito Sans", "Tahoma", "Helvetica", "Arial", sans-serif}:host .chip_clickable--tall{height:40px;border-radius:24px}:host .chip_clickable--default{background-color:var(--color-system, #b3d4ff);color:var(--color-content-din, #000)}:host .chip_clickable--info{background-color:var(--color-info, #80e3eb);color:var(--color-content-din, #000)}:host .chip_clickable--success{background-color:var(--color-success, #90e6bc);color:var(--color-content-din, #000)}:host .chip_clickable--warning{background-color:var(--color-warning, #fff6a8);color:var(--color-content-din, #000)}:host .chip_clickable--danger{background-color:var(--color-error, #ffa5a5);color:var(--color-content-din, #000)}:host .chip_clickable--outline{background-color:var(--color-surface-1, #ffffff);border:1px solid var(--color-surface-3, #e7edf4);color:var(--color-content-default, #202c44)}:host .chip_clickable:focus-visible{outline:none}';var n=function(){function t(t){Object(o.r)(this,t),this.isMouseOver=!1,this.tooltipText="Tooltip",this.disabled=!1,this.position="left-center",this.dataTest=null}return t.prototype.visible=function(){return l(this,void 0,void 0,(function(){return r(this,(function(t){return this.isMouseOver=!this.isMouseOver,[2]}))}))},t.prototype.setVisibility=function(t){this.disabled?this.isMouseOver=!1:this.isMouseOver=t},t.prototype.render=function(){var t,i=this;return Object(o.h)("div",{class:"tooltip__wrapper"},Object(o.h)("div",{onMouseEnter:function(){return i.setVisibility(!0)},onMouseLeave:function(){return i.setVisibility(!1)},"data-test":this.dataTest},Object(o.h)("slot",null)),Object(o.h)("div",{class:(t={tooltip__tip:!0},t["tooltip__tip--".concat(this.position)]=!0,t["tooltip__tip--visible"]=this.isMouseOver,t)},Object(o.h)("div",{class:{tooltip__tip__text:!0}},Object(o.h)("bds-typo",{variant:"fs-12"},this.tooltipText))))},t}();n.style='.tooltip__wrapper{display:inline-block;position:relative}.tooltip__tip{position:absolute;left:50%;border-radius:8px;padding:8px;color:var(--color-surface-1, #ffffff);background:var(--color-content-default, #202c44);z-index:70000;white-space:normal;width:-webkit-max-content;width:-moz-max-content;width:max-content;min-width:32px;max-width:320px;-webkit-filter:drop-shadow(0 2px 8px rgba(96, 123, 153, 0.4));filter:drop-shadow(0 2px 8px rgba(96, 123, 153, 0.4));visibility:hidden;-webkit-transition:all 0.2s ease-in-out;transition:all 0.2s ease-in-out;-webkit-box-sizing:border-box;box-sizing:border-box;cursor:default}.tooltip__tip--visible{visibility:visible}.tooltip__tip::before{content:"";left:50%;border:solid transparent;height:0;width:0;position:absolute;pointer-events:none;margin-left:-6px;border-width:6px}.tooltip__tip--top-center,.tooltip__tip--top-left,.tooltip__tip--top-right{bottom:calc(100% + 10px)}.tooltip__tip--top-center::before,.tooltip__tip--top-left::before,.tooltip__tip--top-right::before{top:100%;border-top-color:var(--color-content-default, #202c44)}.tooltip__tip--top-left{left:0;-webkit-transform:translateX(-15%);transform:translateX(-15%)}.tooltip__tip--top-left::before{left:calc(15% + 6px)}.tooltip__tip--top-right{left:initial;right:0;-webkit-transform:translateX(15%);transform:translateX(15%)}.tooltip__tip--top-right::before{left:calc(85% - 6px)}.tooltip__tip--bottom-center,.tooltip__tip--top-center{-webkit-transform:translateX(-50%);transform:translateX(-50%)}.tooltip__tip--left-center,.tooltip__tip--right-center{-webkit-transform:translateX(0) translateY(-50%);transform:translateX(0) translateY(-50%)}.tooltip__tip--right-center,.tooltip__tip--right-top,.tooltip__tip--right-bottom{left:calc(100% + 10px);top:50%}.tooltip__tip--right-center::before,.tooltip__tip--right-top::before,.tooltip__tip--right-bottom::before{left:-6px;top:50%;-webkit-transform:translateX(0) translateY(-50%);transform:translateX(0) translateY(-50%);border-right-color:var(--color-content-default, #202c44)}.tooltip__tip--right-top{top:0}.tooltip__tip--right-top::before{top:40%}.tooltip__tip--right-bottom{top:initial;bottom:0}.tooltip__tip--right-bottom::before{top:60%}.tooltip__tip--bottom-center,.tooltip__tip--bottom-right,.tooltip__tip--bottom-left{top:calc(100% + 10px)}.tooltip__tip--bottom-center::before,.tooltip__tip--bottom-right::before,.tooltip__tip--bottom-left::before{bottom:100%;border-bottom-color:var(--color-content-default, #202c44)}.tooltip__tip--bottom-right{left:initial;right:0;-webkit-transform:translateX(15%);transform:translateX(15%)}.tooltip__tip--bottom-right::before{left:calc(85% - 6px)}.tooltip__tip--bottom-left{left:0;-webkit-transform:translateX(-15%);transform:translateX(-15%)}.tooltip__tip--bottom-left::before{left:calc(15% + 6px)}.tooltip__tip--left-center,.tooltip__tip--left-top,.tooltip__tip--left-bottom{left:auto;right:calc(100% + 10px);top:50%}.tooltip__tip--left-center::before,.tooltip__tip--left-top::before,.tooltip__tip--left-bottom::before{left:auto;right:-12px;top:50%;-webkit-transform:translateX(0) translateY(-50%);transform:translateX(0) translateY(-50%);border-left-color:var(--color-content-default, #202c44)}.tooltip__tip--left-top{top:0}.tooltip__tip--left-top::before{top:40%}.tooltip__tip--left-bottom{top:initial;bottom:0}.tooltip__tip--left-bottom::before{top:60%}.tooltip__tip__text{overflow:hidden}'}}]);