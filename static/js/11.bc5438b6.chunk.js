(this["webpackJsonpblip-plugin-example"]=this["webpackJsonpblip-plugin-example"]||[]).push([[11],{92:function(o,e,t){"use strict";t.r(e),t.d(e,"bds_accordion_group",(function(){return c}));var n=t(8),r=function(o,e,t,n){function r(o){return o instanceof t?o:new t((function(e){e(o)}))}return new(t||(t=Promise))((function(t,i){function c(o){try{l(n.next(o))}catch(e){i(e)}}function a(o){try{l(n.throw(o))}catch(e){i(e)}}function l(o){o.done?t(o.value):r(o.value).then(c,a)}l((n=n.apply(o,e||[])).next())}))},i=function(o,e){var t,n,r,i,c={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"===typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(o){return function(e){return l([o,e])}}function l(a){if(t)throw new TypeError("Generator is already executing.");for(;i&&(i=0,a[0]&&(c=0)),c;)try{if(t=1,n&&(r=2&a[0]?n.return:a[0]?n.throw||((r=n.return)&&r.call(n),0):n.next)&&!(r=r.call(n,a[1])).done)return r;switch(n=0,r&&(a=[2&a[0],r.value]),a[0]){case 0:case 1:r=a;break;case 4:return c.label++,{value:a[1],done:!1};case 5:c.label++,n=a[1],a=[0];continue;case 7:a=c.ops.pop(),c.trys.pop();continue;default:if(!(r=(r=c.trys).length>0&&r[r.length-1])&&(6===a[0]||2===a[0])){c=0;continue}if(3===a[0]&&(!r||a[1]>r[0]&&a[1]<r[3])){c.label=a[1];break}if(6===a[0]&&c.label<r[1]){c.label=r[1],r=a;break}if(r&&c.label<r[2]){c.label=r[2],c.ops.push(a);break}r[2]&&c.ops.pop(),c.trys.pop();continue}a=e.call(o,c)}catch(l){a=[6,l],n=0}finally{t=r=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}},c=function(){function o(o){Object(n.r)(this,o),this.bdsAccordionCloseAll=Object(n.c)(this,"bdsAccordionCloseAll",7),this.accordionsElement=null,this.collapse="single"}return o.prototype.closeAll=function(o){return r(this,void 0,void 0,(function(){var e;return i(this,(function(t){for(this.bdsAccordionCloseAll.emit(),e=0;e<this.accordionsElement.length;e++)"multiple"!=this.collapse?o!=e&&this.accordionsElement[e].close():this.accordionsElement[e].close();return[2]}))}))},o.prototype.componentWillRender=function(){this.accordionsElement=this.element.getElementsByTagName("bds-accordion");for(var o=0;o<this.accordionsElement.length;o++)this.accordionsElement[o].reciveNumber(o)},o.prototype.render=function(){return Object(n.h)("div",{class:"accordion_group"},Object(n.h)("slot",null))},Object.defineProperty(o.prototype,"element",{get:function(){return Object(n.g)(this)},enumerable:!1,configurable:!0}),o}();c.style='.accordion_header{display:grid;grid-auto-flow:column;gap:24px;-ms-flex-pack:start;justify-content:start;-ms-flex-align:center;align-items:center;padding:24px;padding-right:56px;position:relative;color:var(--color-content-default, #202c44);cursor:pointer}.accordion_header::before{content:"";position:absolute;inset:0;z-index:0}.accordion_header *{position:relative;z-index:1}.accordion_header:hover::before{background-color:var(--color-content-default, #202c44);opacity:0.08}.accordion_header .accButton{position:absolute;right:24px;top:calc(50% - 16px);border-radius:8px;contain:inherit;-webkit-transition:height 0.5s, all 0.3s;-moz-transition:height 0.5s, all 0.3s;transition:height 0.5s, all 0.3s;z-index:1}.accordion_header .accButton__isopen{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.accordion_header .accButton::before{content:"";position:absolute;inset:-4px;border:2px solid transparent;border-radius:4px}.accordion_header .accButton:focus-visible{outline:none}.accordion_header .accButton:focus-visible::before{border-color:var(--color-focus, #c226fb)}.accordion_header .accButton:hover{background-color:var(--color-surface-1, #ffffff)}.accordion_header .accButton:active{background-color:var(--color-surface-1, #ffffff)}.accordion_body{height:0;overflow:hidden;border-bottom:1px solid var(--color-surface-3, #e7edf4);-webkit-transition:all 0.5s;-moz-transition:all 0.5s;transition:all 0.5s}.accordion_body .container{padding:8px 24px 48px;position:relative;color:var(--color-content-default, #202c44)}'}}]);