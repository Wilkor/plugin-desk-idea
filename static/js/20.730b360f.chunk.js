(this["webpackJsonpblip-plugin-example"]=this["webpackJsonpblip-plugin-example"]||[]).push([[20],{104:function(t,a,i){"use strict";i.r(a),i.d(a,"bds_avatar",(function(){return o}));var e=i(8),o=function(){function t(t){var a=this;Object(e.r)(this,t),this.bdsClickAvatar=Object(e.c)(this,"bdsClickAvatar",7),this.typoSize="fs-20",this.iconSize="large",this.selectTypoSize=function(t){switch(t){case"micro":a.typoSize="fs-12",a.iconSize="xx-small";break;case"extra-small":a.typoSize="fs-14",a.iconSize="x-small";break;case"small":a.typoSize="fs-16",a.iconSize="x-small";break;case"standard":a.typoSize="fs-20",a.iconSize="medium";break;case"large":a.typoSize="fs-24",a.iconSize="xxx-large";break;case"extra-large":a.typoSize="fs-32",a.iconSize="xxx-large";break;default:a.typoSize="fs-20",a.iconSize="medium"}},this.name=null,this.thumbnail=null,this.size="standard",this.upload=!1,this.ellipsis=null,this.dataTest=null}return t.prototype.onUploadClick=function(t){t.preventDefault(),this.bdsClickAvatar.emit(t)},t.prototype.handleClickKey=function(t){"Enter"!==t.key&&" "!==t.key||!this.upload||(t.preventDefault(),this.bdsClickAvatar.emit())},t.prototype.render=function(){var t,a=this,i=["yellow","blue","green","brown","pink"],o=i[Math.floor(Math.random()*i.length)],n=!this.name||this.ellipsis?"neutral":o,s=this.name?this.name.split(" "):[],r=s.length?s.shift().charAt(0):"",l=s.length?s.pop().charAt(0):"";return this.selectTypoSize(this.size),Object(e.h)(e.H,null,Object(e.h)("div",{class:(t={avatar:!0},t["avatar__color--".concat(n)]=!0,t["avatar__size--".concat(this.size)]=!0,t.upload=this.upload,t),"data-test":this.dataTest},this.ellipsis?Object(e.h)("bds-typo",{margin:!1,class:"avatar__ellipsis",variant:this.typoSize,tag:"span"},"+".concat(this.ellipsis)):this.thumbnail?this.upload&&"micro"!==this.size?Object(e.h)("div",{class:"avatar__btn",onClick:function(){return a.onUploadClick}},Object(e.h)("img",{class:"avatar__btn__img",src:this.thumbnail}),Object(e.h)("div",{class:"avatar__btn__thumb"},Object(e.h)("bds-icon",{class:"avatar__btn__thumb__icon",name:"upload",theme:"outline",size:this.iconSize}))):Object(e.h)("img",{class:"avatar__img",src:this.thumbnail}):this.name?this.upload&&"micro"!==this.size?Object(e.h)("div",{class:"avatar__btn",onClick:function(){return a.onUploadClick}},Object(e.h)("bds-typo",{margin:!1,class:"avatar__btn__text",variant:this.typoSize,tag:"span"},r+l),Object(e.h)("div",{class:"avatar__btn__name"},Object(e.h)("bds-icon",{class:"avatar__btn__name__icon",name:"upload",theme:"outline",size:this.iconSize}))):Object(e.h)("bds-typo",{margin:!1,class:"avatar__text",variant:this.typoSize,tag:"span"},r+l):this.upload&&"micro"!==this.size?Object(e.h)("div",{class:"avatar__btn",onClick:function(){return a.onUploadClick}},Object(e.h)("bds-icon",{class:"avatar__btn__icon",name:"user-default",theme:"outline",size:this.iconSize}),Object(e.h)("div",{class:"avatar__btn__empty"},Object(e.h)("bds-icon",{class:"avatar__btn__empty__icon",name:"upload",theme:"outline",size:this.iconSize}))):Object(e.h)("bds-icon",{class:"avatar__icon",name:"user-default",theme:"outline",size:this.iconSize})),this.upload&&"micro"!==this.size?Object(e.h)("div",{tabindex:"0",onClick:function(){return a.handleClickKey},class:"focus"}):"")},t}();o.style=':host{position:relative;display:block}.avatar{border-radius:40px;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;overflow:hidden;-webkit-appearance:none;-moz-appearance:none;appearance:none;height:100%}.avatar__ellipsis{color:var(--color-surface-1, #ffffff)}.avatar__text{color:var(--color-content-din, #000)}.avatar__icon{color:var(--color-surface-1, #ffffff)}.avatar__img{width:100%;height:auto}.avatar__btn{position:relative;width:100%;height:100%;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}.avatar__btn__img{width:100%;height:auto}.avatar__btn__text{color:var(--color-content-din, #000);opacity:1;-webkit-transition:all 0.5s;-moz-transition:all 0.5s;transition:all 0.5s}.avatar__btn__icon{color:var(--color-content-din, #000);opacity:1;-webkit-transition:all 0.5s;-moz-transition:all 0.5s;transition:all 0.5s}.avatar__btn__thumb{position:absolute;width:100%;height:100%;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;top:0;left:0;cursor:pointer}.avatar__btn__thumb:before{content:"";position:absolute;inset:0;background-color:var(--color-content-default, #202c44);opacity:0;-webkit-transition:all 0.5s;transition:all 0.5s}.avatar__btn__thumb__icon{color:var(--color-surface-1, #ffffff);opacity:0;-webkit-transition:all 0.5s;transition:all 0.5s}.avatar__btn__name{position:absolute;width:100%;height:100%;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;top:0;left:0;cursor:pointer;opacity:0;-webkit-transition:all 0.5s;-moz-transition:all 0.5s;transition:all 0.5s}.avatar__btn__name__icon{color:var(--color-content-din, #000)}.avatar__btn__empty{position:absolute;width:100%;height:100%;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;top:0;left:0;cursor:pointer;opacity:0;-webkit-transition:all 0.5s;-moz-transition:all 0.5s;transition:all 0.5s}.avatar__btn__empty__icon{color:var(--color-content-din, #000)}.avatar__size--micro{width:24px;height:24px}.avatar__size--extra-small{width:32px;height:32px;min-width:32px;min-height:32px}.avatar__size--small{width:40px;height:40px;min-width:40px;min-height:40px}.avatar__size--standard{width:56px;height:56px;min-width:56px;min-height:56px}.avatar__size--large{width:64px;height:64px;min-width:64px;min-height:64px}.avatar__size--extra-large{width:72px;height:72px;min-width:72px;min-height:72px}.avatar__color--neutral{background-color:var(--color-system, #b3d4ff)}.avatar__color--yellow{background-color:var(--color-warning, #fff6a8)}.avatar__color--blue{background-color:var(--color-system, #b3d4ff)}.avatar__color--green{background-color:var(--color-success, #90e6bc)}.avatar__color--brown{background-color:var(--color-info, #80e3eb)}.avatar__color--pink{background-color:var(--color-error, #ffa5a5)}.avatar:hover .avatar__btn__thumb:before{opacity:0.5}.avatar:hover .avatar__btn__thumb__icon{opacity:1}.avatar:hover .avatar__btn__text{opacity:0}.avatar:hover .avatar__btn__icon{opacity:0}.avatar:hover .avatar__btn__name{opacity:1}.avatar:hover .avatar__btn__empty{opacity:1}.focus:focus-visible{display:-ms-flexbox;display:flex;position:absolute;border:2px solid var(--color-focus, #c226fb);border-radius:4px;width:100%;height:100%;top:-4px;left:-4px;padding-right:4px;padding-bottom:4px;outline:none}'}}]);