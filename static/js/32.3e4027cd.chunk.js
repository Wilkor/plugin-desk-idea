(this["webpackJsonpblip-plugin-example"]=this["webpackJsonpblip-plugin-example"]||[]).push([[32],{116:function(t,e,n){"use strict";n.r(e),n.d(e,"bds_counter_text",(function(){return c}));var o,r,i=n(8);(r=o||(o={})).Default="default",r.Warning="warning",r.Delete="delete";var c=function(){function t(t){Object(i.r)(this,t),this.length=void 0,this.max=void 0,this.active=!1,this.warning={max:20,min:2},this.delete={max:1,min:0}}return t.prototype.getState=function(){var t=this.getActualLength();return t>=this.warning.min&&t<=this.warning.max?o.Warning:t<=this.delete.max?o.Delete:o.Default},t.prototype.getActualLength=function(){return this.max-this.length},t.prototype.render=function(){var t,e=this.getState(),n=this.getActualLength();return Object(i.h)("div",{class:(t={"counter-text":!0,"counter-text--active":this.active},t["counter-text--".concat(e)]=!0,t)},Object(i.h)("bds-typo",{variant:"fs-10"},n))},t}();c.style=".counter-text{background:var(--color-surface-2, #f3f6fa);color:var(--color-content-disable, #505f79);-webkit-box-sizing:content-box;box-sizing:content-box;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;border-radius:11px;padding:0 8px;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-o-user-select:none;-ms-user-select:none;user-select:none}.counter-text--active{background:var(--color-system, #b3d4ff);color:var(--color-content-din, #000)}.counter-text--warning{background:var(--color-warning, #fff6a8);color:var(--color-content-din, #000)}.counter-text--delete{background:var(--color-delete, #ff4c4c);color:var(--color-content-bright, #fff)}"}}]);