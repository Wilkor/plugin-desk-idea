(this["webpackJsonpblip-plugin-example"]=this["webpackJsonpblip-plugin-example"]||[]).push([[23],{104:function(e,t,n){"use strict";n.r(t),n.d(t,"bds_banner",(function(){return s}));var i=n(8),o=function(e,t,n,i){function o(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,r){function s(e){try{l(i.next(e))}catch(t){r(t)}}function a(e){try{l(i.throw(e))}catch(t){r(t)}}function l(e){e.done?n(e.value):o(e.value).then(s,a)}l((i=i.apply(e,t||[])).next())}))},r=function(e,t){var n,i,o,r,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return r={next:a(0),throw:a(1),return:a(2)},"function"===typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function a(e){return function(t){return l([e,t])}}function l(a){if(n)throw new TypeError("Generator is already executing.");for(;r&&(r=0,a[0]&&(s=0)),s;)try{if(n=1,i&&(o=2&a[0]?i.return:a[0]?i.throw||((o=i.return)&&o.call(i),0):i.next)&&!(o=o.call(i,a[1])).done)return o;switch(i=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return s.label++,{value:a[1],done:!1};case 5:s.label++,i=a[1],a=[0];continue;case 7:a=s.ops.pop(),s.trys.pop();continue;default:if(!(o=(o=s.trys).length>0&&o[o.length-1])&&(6===a[0]||2===a[0])){s=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){s.label=a[1];break}if(6===a[0]&&s.label<o[1]){s.label=o[1],o=a;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(a);break}o[2]&&s.ops.pop(),s.trys.pop();continue}a=t.call(e,s)}catch(l){a=[6,l],i=0}finally{n=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}},s=function(){function e(e){var t=this;Object(i.r)(this,e),this.bdsBannerClose=Object(i.c)(this,"bdsBannerClose",7),this._buttonClickHandler=function(){t.bdsBannerClose.emit(),t.visible=!1},this.visible=!0,this.bannerAlign="center",this.buttonClose="false",this.context="outside",this.variant="system"}return e.prototype.toggle=function(){return o(this,void 0,void 0,(function(){return r(this,(function(e){return this.visible=!this.visible,[2]}))}))},e.prototype.render=function(){var e,t=this;return Object(i.h)(i.H,{class:{banner:!0,"banner--hide":!this.visible}},Object(i.h)("div",{class:(e={banner__holder:!0},e["banner__holder--align--".concat(this.bannerAlign)]=!0,e["banner__holder--".concat(this.variant)]=!0,e["banner__holder--context--".concat(this.context)]=!0,e)},Object(i.h)("div",{class:{banner__content:!0}},"warning"===this.variant&&Object(i.h)("bds-icon",{class:"icon_left",theme:"outline",size:"medium",name:"warning"}),"system"===this.variant&&Object(i.h)("bds-icon",{class:"icon_left",theme:"outline",size:"medium",name:"info"}),"info"===this.variant&&Object(i.h)("bds-icon",{class:"icon_left",theme:"outline",size:"medium",name:"message-ballon"}),"error"===this.variant&&Object(i.h)("bds-icon",{class:"icon_left",theme:"outline",size:"medium",name:"error"}),Object(i.h)("div",{class:"slot"},Object(i.h)("slot",null))),Object(i.h)("div",{class:{banner__action:!0}},"true"===this.buttonClose&&Object(i.h)("div",{class:"close",onClick:function(){return t._buttonClickHandler()}},Object(i.h)("bds-button-icon",{icon:"close",size:"short",variant:"secondary"})))))},Object.defineProperty(e.prototype,"el",{get:function(){return Object(i.g)(this)},enumerable:!1,configurable:!0}),e}();s.style=':host{-webkit-box-sizing:border-box;box-sizing:border-box;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;font-family:"Nunito Sans", "Tahoma", "Helvetica", "Arial", sans-serif;font-size:0.875rem;font-weight:700}:host .banner__holder{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:center;align-items:center;width:100%;padding:8px 16px;min-height:40px;color:var(--color-content-din, #000)}:host .banner__holder--context--inside{border-radius:8px}:host .banner__holder--align--left{-ms-flex-pack:start;justify-content:flex-start}:host .banner__holder--align--right{-ms-flex-pack:start;justify-content:flex-start}:host .banner__holder--warning{background-color:var(--color-warning, #fff6a8)}:host .banner__holder--system{background-color:var(--color-system, #b3d4ff)}:host .banner__holder--info{background-color:var(--color-info, #80e3eb)}:host .banner__holder--error{background-color:var(--color-error, #ffa5a5)}:host .banner__content{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;width:100%}:host .banner__content--left{-ms-flex-pack:start;justify-content:flex-start}:host .banner__content--center{-ms-flex-pack:start;justify-content:flex-start}:host .banner__content--right{-ms-flex-pack:start;justify-content:flex-start}:host .banner__content .slot{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;margin-left:8px;width:100%}:host .banner__action{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center}:host .banner__action .close{cursor:pointer;display:-ms-flexbox;display:flex;margin-left:8px}.space_left{display:-ms-flexbox;display:flex}:host(.banner--hide){display:none}'}}]);