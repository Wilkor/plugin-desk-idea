(this["webpackJsonpblip-plugin-example"]=this["webpackJsonpblip-plugin-example"]||[]).push([[62],{152:function(e,t,n){"use strict";n.r(t),n.d(t,"bds_tab_group",(function(){return r}));var i=n(8),r=function(){function e(e){var t=this;Object(i.r)(this,e),this.bdsTabChange=Object(i.c)(this,"bdsTabChange",7),this.tabItensElement=null,this.checkSlideTabs=function(){if(t.headerSlideElement.offsetWidth>t.headerElement.offsetWidth)return!0},this.setFirstActive=function(){Array.from(t.tabItensElement).filter((function(e){return e.open})).length||(t.tabItensElement[0].open=!0)},this.setnumberElement=function(){for(var e=0;e<t.tabItensElement.length;e++)t.tabItensElement[e].numberElement=e},this.setInternalItens=function(e){var n=e.map((function(e,t){return{label:e.label,open:e.open,numberElement:t}}));return t.internalItens=n},this.handleClick=function(e){var n=t.internalItens.map((function(e){return{label:e.label,open:!1,numberElement:e.numberElement}}));t.internalItens=n;for(var i=0;i<t.tabItensElement.length;i++)t.tabItensElement[i].numberElement!=e?t.tabItensElement[i].open=!1:(t.tabItensElement[i].open=!0,t.bdsTabChange.emit(t.tabItensElement[i]))},this.refHeaderElement=function(e){t.headerElement=e},this.refHeaderSlideElement=function(e){t.headerSlideElement=e},this.nextSlide=function(){var e=t.headerElement.offsetWidth-t.headerSlideElement.offsetWidth,n=t.headerSlideElement.offsetWidth/t.headerElement.offsetWidth,i=parseInt(n.toString()),r=t.positionLeft-t.headerElement.offsetWidth;t.positionLeft=r<e?e:r,t.alignTab=r<e?"right":"scrolling",t.tabRefSlide=i<=t.tabRefSlide?t.tabRefSlide+1:i},this.prevSlide=function(){var e=t.headerSlideElement.offsetWidth/t.headerElement.offsetWidth,n=parseInt(e.toString()),i=t.positionLeft+t.headerElement.offsetWidth;t.positionLeft=i>0?0:i,t.alignTab=i>0?"left":"scrolling",t.tabRefSlide=n<=t.tabRefSlide?t.tabRefSlide-1:n},this.internalItens=void 0,this.isSlideTabs=!1,this.alignTab="left",this.tabRefSlide=0,this.positionLeft=0,this.scrollable=!1}return e.prototype.componentWillRender=function(){this.tabItensElement=this.element.getElementsByTagName("bds-tab-item"),this.setnumberElement(),this.setFirstActive(),this.setInternalItens(Array.from(this.tabItensElement))},e.prototype.connectedCallback=function(){var e=this;this.isSlide=window.setInterval((function(){e.isSlideTabs=e.checkSlideTabs()}),100)},e.prototype.disconnectedCallback=function(){window.clearInterval(this.isSlide)},e.prototype.render=function(){var e=this,t={left:"".concat(this.positionLeft,"px")};return Object(i.h)(i.H,null,Object(i.h)("div",{class:{tab_group:!0}},this.isSlideTabs&&"left"!=this.alignTab&&Object(i.h)("bds-button-icon",{class:"tab_group__slide-button",icon:"arrow-left",size:"short",id:"bds-tabs-button-left",onClick:function(){return e.prevSlide()},variant:"secondary"}),Object(i.h)("div",{class:{tab_group__header:!0,tab_group__slide:this.isSlideTabs},ref:this.refHeaderElement},Object(i.h)("div",{class:{tab_group__header__itens:!0,tab_group__slide__itens:this.isSlideTabs},ref:this.refHeaderSlideElement,style:t},this.internalItens&&this.internalItens.map((function(t,n){var r=1==t.open?"bold":"regular";return Object(i.h)("div",{class:{tab_group__header__itens__item:!0,tab_group__header__itens__item__open:t.open},key:n,tabindex:"0",onClick:function(){return e.handleClick(t.numberElement)}},Object(i.h)("bds-typo",{variant:"fs-16",bold:r},t.label))})))),this.isSlideTabs&&"right"!=this.alignTab&&Object(i.h)("bds-button-icon",{class:"tab_group__slide-button",icon:"arrow-right",size:"short",id:"bds-tabs-button-right",onClick:function(){return e.nextSlide()},variant:"secondary"}),Object(i.h)("slot",null)))},Object.defineProperty(e.prototype,"element",{get:function(){return Object(i.g)(this)},enumerable:!1,configurable:!0}),e}();r.style=":host{display:block}.tab_group{width:100%;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;position:relative}.tab_group__header__itens{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-pack:center;justify-content:center;width:-webkit-max-content;width:-moz-max-content;width:max-content;gap:32px;margin:auto}.tab_group__header__itens__item{cursor:pointer;height:46px;width:auto;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;color:var(--color-content-disable, #505f79);border-bottom:2px solid transparent}.tab_group__header__itens__item__open{color:var(--color-content-default, #202c44);border-color:var(--color-primary, #3f7de8)}.tab_group__slide{position:relative;overflow:hidden;height:48px;margin-left:56px;margin-right:56px}.tab_group__slide-button{position:absolute;z-index:1;background-color:var(--color-surface-1, #ffffff)}.tab_group__slide-button[icon=arrow-left]{left:0}.tab_group__slide-button[icon=arrow-right]{right:0}.tab_group__slide__itens{position:absolute;left:56px;width:-webkit-max-content;width:-moz-max-content;width:max-content;height:48px;display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-pack:center;justify-content:center;gap:32px;-webkit-transition:left 0.5s;-moz-transition:left 0.5s;transition:left 0.5s}"}}]);