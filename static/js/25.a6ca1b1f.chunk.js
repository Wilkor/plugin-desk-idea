(this["webpackJsonpblip-plugin-example"]=this["webpackJsonpblip-plugin-example"]||[]).push([[25],{109:function(t,o,e){"use strict";e.r(o),e.d(o,"bds_button",(function(){return i})),e.d(o,"bds_loading_spinner",(function(){return r}));var n=e(8),i=function(){function t(t){var o=this;Object(n.r)(this,t),this.bdsClick=Object(n.c)(this,"bdsClick",7),this.handleClick=function(t){if(!o.disabled){o.bdsClick.emit();var e=o.el.closest("form");if(e){t.preventDefault();var n=document.createElement("button");n.type=o.type,n.style.display="none",e.appendChild(n),n.click(),n.remove()}}},this.disabled=!1,this.size="standard",this.variant="primary",this.icon=null,this.arrow=!1,this.type="button",this.typeIcon="icon",this.bdsLoading=!1,this.bdsLoadingVariant="primary",this.bdsLoadingColor="light",this.dataTest=null}return t.prototype.getSizeClass=function(){return this.arrow||this.icon?"button--size-".concat(this.size,"--icon"):"button--size-".concat(this.size)},t.prototype.renderIcon=function(){return this.icon&&Object(n.h)("div",{class:{button__icon:!0,hide:this.bdsLoading&&!0}},Object(n.h)("bds-icon",{name:this.icon,type:this.typeIcon,color:"inherit"}))},t.prototype.renderText=function(){var t;return Object(n.h)("div",{class:(t={button__content:!0},t["button__content__".concat(this.variant)]=!0,t["button__content__".concat(this.variant,"--disabled")]=this.disabled,t.hide=this.bdsLoading&&!0,t)},Object(n.h)("bds-typo",{variant:"fs-14",lineHeight:"simple",bold:"bold"},Object(n.h)("slot",null)))},t.prototype.renderArrow=function(){return this.arrow&&Object(n.h)("div",{class:{button__arrow:!0,hide:this.bdsLoading&&!0}},Object(n.h)("bds-icon",{name:"arrow-right",color:"inherit"}))},t.prototype.renderLoadingSpinner=function(){return"short"===this.size?Object(n.h)("bds-loading-spinner",{size:"extra-small",color:this.bdsLoadingColor}):Object(n.h)("bds-loading-spinner",{size:"small",color:this.bdsLoadingColor})},t.prototype.render=function(){var t,o=this,e=this.getSizeClass();return Object(n.h)("button",{onClick:function(t){return o.handleClick(t)},disabled:this.disabled,type:this.type,class:(t={button:!0},t["button__".concat(this.variant)]=!0,t["button__".concat(this.variant,"--disabled")]=this.disabled,t[e]=!0,t["button--size-icon--left"]=!!this.icon,t["button--size-icon--right"]=this.arrow,t),part:"button","data-test":this.dataTest},[this.bdsLoading&&this.renderLoadingSpinner(),this.renderIcon(),this.renderText(),this.renderArrow()])},Object.defineProperty(t.prototype,"el",{get:function(){return Object(n.g)(this)},enumerable:!1,configurable:!0}),t}();i.style=".button{border:none;margin:0;padding:0;width:auto;overflow:visible;outline:none;background:transparent;color:inherit;font:inherit;line-height:normal;-webkit-font-smoothing:inherit;-moz-osx-font-smoothing:inherit;-webkit-appearance:none;cursor:pointer;display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;height:100%;border-radius:8px;padding-left:16px;padding-right:16px;position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-transition:all 0.5s;-moz-transition:all 0.5s;transition:all 0.5s}.button::-moz-focus-inner{border:0;padding:0}.button *{pointer-events:none}.button--size-tall{padding-top:14px;padding-bottom:14px;height:40px}.button--size-tall--icon{padding-top:12px;padding-bottom:12px;height:40px}.button--size-standard{padding-top:9px;padding-bottom:9px;height:40px}.button--size-standard--icon{padding-top:8px;padding-bottom:8px;height:40px}.button--size-short{padding-top:5px;padding-bottom:5px;height:32px}.button--size-short--icon{padding-top:4px;padding-bottom:4px;height:40px}.button--size-icon--left{padding-left:16px}.button--size-icon--right{padding-right:16px}.button__icon{color:inherit;background-color:inherit;height:24px;margin-right:4px}.button__arrow{color:inherit;background-color:inherit;height:24px;margin-left:2px}.button__content{height:20px;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.button__primary{background:#3f7de8;color:#ffffff}.button__primary:hover{background:#125ad5}.button__primary:active{background:#0747a6;color:#ffffff}.button__primary--disabled{background:#e8f2ff;pointer-events:none;color:#637798}.button__primary--disabled:hover,.button__primary--disabled:active{background:#e8f2ff;color:#637798}.button__secondary{background:transparent;color:#505f79}.button__secondary:hover{background:#e8f2ff;color:#3f7de8}.button__secondary:active{background:#d1e3fa;color:#3f7de8}.button__secondary--disabled{background:transparent;pointer-events:none;color:#637798}.button__secondary--disabled:hover,.button__secondary--disabled:active{background:transparent;color:#637798}.button__tertiary{background:transparent;color:#3f7de8;border:1px solid #d2dfe6}.button__tertiary:hover{border:1px solid #3f7de8;color:#3f7de8}.button__tertiary:active{background:#d1e3fa;border:1px solid #3f7de8;color:#3f7de8}.button__tertiary--disabled{background:transparent;pointer-events:none;color:#637798;border:1px solid #637798}.button__tertiary--disabled:hover,.button__tertiary--disabled:active{background:transparent;color:#637798;border:1px solid #637798}.button__secondary--white{background:transparent;color:#ffffff}.button__secondary--white:hover{background:rgba(255, 255, 255, 0.3);color:#ffffff}.button__secondary--white:active{background:rgba(255, 255, 255, 0.4);color:#ffffff}.button__secondary--white--disabled{background:#e8f2ff;pointer-events:none;color:#8ca0b3}.button__secondary--white--disabled:hover,.button__secondary--white--disabled:active{background:#e8f2ff;color:#8ca0b3}.button__ghost{background:transparent;color:#3f7de8;border:1px solid #3f7de8}.button__ghost:hover{background:#e8f2ff;color:#3f7de8;border:1px solid #3f7de8}.button__ghost:active{background:#d1e3fa;color:#3f7de8;border:1px solid #3f7de8}.button__ghost--disabled{background:transparent;pointer-events:none;color:#637798;border:1px solid #637798}.button__ghost--disabled:hover,.button__ghost--disabled:active{background:transparent;color:#637798;border:1px solid #637798}.button__delete{background:#ff4c4c;color:#ffffff}.button__delete:hover{background:#a01c2c;color:#ffffff}.button__delete:active{background:#6a2026;color:#ffffff}.button__delete--disabled{background:#fccccc;pointer-events:none;color:#ba5a5a}.button__delete--disabled:hover,.button__delete--disabled:active{background:#fccccc;color:#ba5a5a}.button__dashed{background:transparent;color:#3f7de8;border:1px dashed #3f7de8}.button__dashed:hover{background:transparent;color:#125ad5;border:1px dashed #125ad5}.button__dashed:active{background:transparent;color:#3f7de8;border:1px dashed #3f7de8}.button__dashed--disabled{background:transparent;pointer-events:none;color:#8ca0b3;border:1px dashed #8ca0b3}.button__dashed--disabled:hover,.button__dashed--disabled:active{background:transparent;color:#8ca0b3;border:1px dashed #8ca0b3}.button__facebook{background:#1877f2;color:#f8fbfb}.button__facebook:hover{background:#1771e6}.button__facebook:active{background:#3f7de8;color:#f8fbfb}.button__facebook--disabled{background:#e8f2ff;pointer-events:none;color:#8ca0b3}.button__facebook--disabled:hover,.button__facebook--disabled:active{background:#e8f2ff;color:#8ca0b3}.button bds-loading-spinner{width:auto;max-height:100%;position:absolute}.button .hide{cursor:not-allowed;opacity:0}";var r=function(){function t(t){var o=this;Object(n.r)(this,t),this.formatSvg=function(t){var o=document.createElement("div");o.innerHTML=t;var e=o.firstElementChild;return e.removeAttribute("width"),e.removeAttribute("height"),o.innerHTML},this.setSvgContent=function(){var t="extra-small"==o.size?"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGgKZD0iTTEuNiA4QzAuNzE2MzQ1IDggLTAuMDE2MDg2OSA3LjI3NjY4IDAuMTU5NDY5IDYuNDEwNjRDMC4yNjEzOTMgNS45MDc4NCAwLjQxMTY4OSA1LjQxNDc5IDAuNjA4OTY0IDQuOTM4NTNDMS4wMTEgMy45Njc5MyAxLjYwMDI4IDMuMDg2MDEgMi4zNDMxNSAyLjM0MzE1QzMuMDg2MDIgMS42MDAyOCAzLjk2NzkzIDEuMDExIDQuOTM4NTMgMC42MDg5NjNDNS40MTQ4IDAuNDExNjg5IDUuOTA3ODQgMC4yNjEzOTMgNi40MTA2NCAwLjE1OTQ2OUM3LjI3NjY4IC0wLjAxNjA4NjYgOCAwLjcxNjM0NSA4IDEuNkM4IDIuNDgzNjUgNy4yNjQ0NyAzLjE3NTA4IDYuNDI5NDYgMy40NjQyMUM2LjMzOTgxIDMuNDk1MjUgNi4yNTA5OSAzLjUyODk4IDYuMTYzMTIgMy41NjUzOEM1LjU4MDc2IDMuODA2NiA1LjA1MTYxIDQuMTYwMTcgNC42MDU4OSA0LjYwNTg5QzQuMTYwMTcgNS4wNTE2MSAzLjgwNjYgNS41ODA3NiAzLjU2NTM4IDYuMTYzMTJDMy41Mjg5OCA2LjI1MDk5IDMuNDk1MjUgNi4zMzk4MSAzLjQ2NDIxIDYuNDI5NDZDMy4xNzUwOCA3LjI2NDQ3IDIuNDgzNjYgOCAxLjYgOFoiCmZpbGwtcnVsZT0iZXZlbm9kZCIKZmlsbD0iY3VycmVudENvbG9yIgovPgo8L3N2Zz4=":"small"==o.size?"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGgKZD0iTTIgMTZDMC44OTU0MzEgMTYgLTAuMDEyODc1NCAxNS4xMDExIDAuMTI0ODM5IDE0LjAwNTJDMC4zMDI3MzYgMTIuNTg5NSAwLjY2OTU5NyAxMS4yMDA5IDEuMjE3OTMgOS44NzcwNkMyLjAyMiA3LjkzNTg1IDMuMjAwNTUgNi4xNzIwMyA0LjY4NjI5IDQuNjg2MjlDNi4xNzIwMyAzLjIwMDU1IDcuOTM1ODYgMi4wMjIgOS44NzcwNyAxLjIxNzkzQzExLjIwMDkgMC42Njk1OTYgMTIuNTg5NSAwLjMwMjczNCAxNC4wMDUyIDAuMTI0ODM4QzE1LjEwMTEgLTAuMDEyODc0NiAxNiAwLjg5NTQzIDE2IDJDMTYgMy4xMDQ1NyAxNS4wOTg1IDMuOTgzMDQgMTQuMDA5MiA0LjE2NjI4QzEzLjExODggNC4zMTYwOCAxMi4yNDYgNC41NjYyNyAxMS40MDc4IDQuOTEzNDRDOS45NTE4OSA1LjUxNjUgOC42MjkwMiA2LjQwMDQyIDcuNTE0NzIgNy41MTQ3MkM2LjQwMDQyIDguNjI5MDIgNS41MTY1IDkuOTUxODkgNC45MTM0NSAxMS40MDc4QzQuNTY2MjcgMTIuMjQ2IDQuMzE2MDggMTMuMTE4OCA0LjE2NjI4IDE0LjAwOTJDMy45ODMwNCAxNS4wOTg1IDMuMTA0NTcgMTYgMiAxNloiCmZpbGwtcnVsZT0iZXZlbm9kZCIKZmlsbD0iY3VycmVudENvbG9yIgovPgo8L3N2Zz4=":"standard"==o.size&&"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGgKZD0iTTQgMzJDMS43OTA4NiAzMiAtMC4wMjU3NTA3IDMwLjIwMjMgMC4yNDk2NzcgMjguMDEwNEMwLjYwNTQ3MiAyNS4xNzg5IDEuMzM5MTkgMjIuNDAxNyAyLjQzNTg2IDE5Ljc1NDFDNC4wNDQwMSAxNS44NzE3IDYuNDAxMTEgMTIuMzQ0MSA5LjM3MjU5IDkuMzcyNThDMTIuMzQ0MSA2LjQwMTExIDE1Ljg3MTcgNC4wNDQgMTkuNzU0MSAyLjQzNTg1QzIyLjQwMTcgMS4zMzkxOSAyNS4xNzg5IDAuNjA1NDY5IDI4LjAxMDQgMC4yNDk2NzZDMzAuMjAyMyAtMC4wMjU3NDkyIDMyIDEuNzkwODYgMzIgNEMzMiA2LjIwOTE0IDMwLjE5NyA3Ljk2NjA4IDI4LjAxODUgOC4zMzI1N0MyNi4yMzc2IDguNjMyMTcgMjQuNDkxOSA5LjEzMjUzIDIyLjgxNTYgOS44MjY4OUMxOS45MDM4IDExLjAzMyAxNy4yNTggMTIuODAwOCAxNS4wMjk0IDE1LjAyOTRDMTIuODAwOCAxNy4yNTggMTEuMDMzIDE5LjkwMzggOS44MjY4OSAyMi44MTU2QzkuMTMyNTMgMjQuNDkxOSA4LjYzMjE3IDI2LjIzNzYgOC4zMzI1NyAyOC4wMTg1QzcuOTY2MDggMzAuMTk3IDYuMjA5MTQgMzIgNCAzMloiCmZpbGwtcnVsZT0iZXZlbm9kZCIKZmlsbD0iY3VycmVudENvbG9yIgovPgo8L3N2Zz4=",e=atob(t.replace("data:image/svg+xml;base64,",""));o.svgContent=o.formatSvg(e)},this.svgContent=void 0,this.variant="primary",this.size="standard",this.color="main",this.dataTest=null}return t.prototype.componentWillLoad=function(){this.setSvgContent()},t.prototype.render=function(){var t,o,e;return Object(n.h)(n.H,null,Object(n.h)("div",{class:(t={spinner_container:!0},t["spinner_background_".concat(this.size)]=!0,t),"data-test":this.dataTest},Object(n.h)("div",{class:(o={spinner_background:!0},o["spinner_background_".concat(this.size)]=!0,o["spinner_background_".concat(this.color)]=!0,o)}),Object(n.h)("div",{class:(e={spinner_loading:!0},e["spinner_loading_".concat(this.size)]=!0,e["spinner_loading_".concat(this.color)]=!0,e),innerHTML:this.svgContent})))},t}();r.style=":host{display:block}.spinner_container{display:-ms-inline-flexbox;display:inline-flex;position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}.spinner_background{border-radius:50%;border:2px solid var(--color-surface-3, #e7edf4)}.spinner_background_extra-small{border-width:2px;width:16px;height:16px;-webkit-box-sizing:border-box;box-sizing:border-box}.spinner_background_small{border-width:4px;width:32px;height:32px;-webkit-box-sizing:border-box;box-sizing:border-box}.spinner_background_standard{border-width:8px;width:64px;height:64px;-webkit-box-sizing:border-box;box-sizing:border-box}.spinner_background_main{border-color:var(--color-surface-3, #e7edf4)}.spinner_background_light{border-color:var(--color-content-default, #202c44);mix-blend-mode:multiply;opacity:0.32}.spinner_loading{-webkit-animation:rotate 0.5s linear infinite;animation:rotate 0.5s linear infinite;position:absolute}.spinner_loading_extra-small{width:16px;height:16px}.spinner_loading_small{width:32px;height:32px}.spinner_loading_standard{width:64px;height:64px}.spinner_loading_main{color:var(--color-brand, #3f7de8)}.spinner_loading_light{color:var(--color-surface-3, #e7edf4)}@-webkit-keyframes rotate{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes rotate{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}"}}]);