(this["webpackJsonpblip-plugin-example"]=this["webpackJsonpblip-plugin-example"]||[]).push([[42],{131:function(t,e,i){"use strict";i.r(e),i.d(e,"bds_list",(function(){return n}));var a=i(8),n=function(){function t(t){var e=this;Object(a.r)(this,t),this.bdsListCheckboxChange=Object(a.c)(this,"bdsListCheckboxChange",7),this.bdsListRadioChange=Object(a.c)(this,"bdsListRadioChange",7),this.bdsListSwitchChange=Object(a.c)(this,"bdsListSwitchChange",7),this.bdsClickActionsButtons=Object(a.c)(this,"bdsClickActionsButtons",7),this.itemListElement=null,this.chagedOptions=function(t){var i=t.detail;"radio"==i.typeList&&1==i.checked&&(e.value=i),"checkbox"==i.typeList&&e.setSelectedCheckbox(),"switch"==i.typeList&&e.setSelectedSwitch()},this.onClickActionsButtons=function(t){var i=t.detail;e.bdsClickActionsButtons.emit(i)},this.internalData=void 0,this.typeList=null,this.value=void 0,this.data=void 0}return t.prototype.componentWillLoad=function(){this.data&&this.dataChanged()},t.prototype.componentWillRender=function(){this.data&&this.updateData(),this.data||this.setitemListElement()},t.prototype.componentDidRender=function(){this.data&&this.internalDataChanged()},t.prototype.dataChanged=function(){this.updateData()},t.prototype.valueChanged=function(t){this.setSelectedRadio(t)},t.prototype.internalDataChanged=function(){this.itemListElement=this.element.shadowRoot.querySelectorAll("bds-list-item")},t.prototype.setitemListElement=function(){var t=this;this.itemListElement=this.element.getElementsByTagName("bds-list-item");for(var e=0;e<this.itemListElement.length;e++)this.itemListElement[e].typeList=this.typeList,this.itemListElement[e].addEventListener("bdsChecked",(function(e){return t.chagedOptions(e)}))},t.prototype.updateData=function(){this.data&&("string"===typeof this.data?this.internalData=JSON.parse(this.data):this.internalData=this.data)},t.prototype.setSelectedRadio=function(t){for(var e,i,a,n,o,s=Array.from(this.itemListElement).filter((function(t){return"radio"==t.typeList})),l=0;l<s.length;l++)if(s[l].value!=t.value)s[l].checked=!1;else{var r={value:s[l].value,text:null===(e=s[l])||void 0===e?void 0:e.text,secondaryText:null===(i=s[l])||void 0===i?void 0:i.secondaryText,avatarName:null===(a=s[l])||void 0===a?void 0:a.avatarName,avatarThumbnail:null===(n=s[l])||void 0===n?void 0:n.avatarThumbnail,typeList:null===(o=s[l])||void 0===o?void 0:o.typeList};this.bdsListRadioChange.emit(r)}},t.prototype.setSelectedCheckbox=function(){var t=this.itemListElement,e=Array.from(t).filter((function(t){return"checkbox"==t.typeList})).filter((function(t){return t.checked})).map((function(t){return{value:t.value,text:null===t||void 0===t?void 0:t.text,secondaryText:null===t||void 0===t?void 0:t.secondaryText,avatarName:null===t||void 0===t?void 0:t.avatarName,avatarThumbnail:null===t||void 0===t?void 0:t.avatarThumbnail,typeList:null===t||void 0===t?void 0:t.typeList}}));this.bdsListCheckboxChange.emit(e)},t.prototype.setSelectedSwitch=function(){var t=this.itemListElement,e=Array.from(t).filter((function(t){return"switch"==t.typeList})).filter((function(t){return t.checked})).map((function(t){return{value:t.value,text:null===t||void 0===t?void 0:t.text,secondaryText:null===t||void 0===t?void 0:t.secondaryText,avatarName:null===t||void 0===t?void 0:t.avatarName,avatarThumbnail:null===t||void 0===t?void 0:t.avatarThumbnail,typeList:null===t||void 0===t?void 0:t.typeList}}));this.bdsListSwitchChange.emit(e)},t.prototype.render=function(){var t=this;return Object(a.h)(a.H,null,Object(a.h)("div",{class:{list:!0}},this.internalData?this.internalData.map((function(e,i){return Object(a.h)("bds-list-item",{key:i,value:e.value,text:e.text,"type-list":t.typeList?t.typeList:e.typeList,"secondary-text":e.secondaryText,"avatar-name":e.avatarName,"avatar-thumbnail":e.avatarThumbnail,checked:e.checked,icon:e.icon,chips:e.chips,actionsButtons:e.actionsButtons,onBdsChecked:function(e){return t.chagedOptions(e)},onBdsClickActionButtom:function(e){return t.onClickActionsButtons(e)}})})):Object(a.h)("slot",null)))},Object.defineProperty(t.prototype,"element",{get:function(){return Object(a.g)(this)},enumerable:!1,configurable:!0}),Object.defineProperty(t,"watchers",{get:function(){return{data:["dataChanged"],value:["valueChanged"],internalData:["internalDataChanged"]}},enumerable:!1,configurable:!0}),t}();n.style=':host{display:block;width:100%}.list_item{display:-ms-flexbox;display:flex;gap:16px;-ms-flex-align:center;align-items:center;padding:10px 16px}.list_item .input_list{position:relative}.list_item .avatar-item{position:relative;display:block}.list_item .icon-item{position:relative;color:var(--color-content-default, #202c44)}.list_item .grow-up{position:relative;-ms-flex-positive:2;flex-grow:2}.list_item .content-item{position:relative;display:-ms-flexbox;display:flex;gap:2px;-ms-flex-direction:column;flex-direction:column}.list_item .content-item .title-item{color:var(--color-content-default, #202c44)}.list_item .content-item .subtitle-item{color:var(--color-content-default, #202c44)}.list_item .content-area{position:relative;-ms-flex-positive:2;flex-grow:2}.list_item .content-area .internal-chips,.list_item .content-area ::slotted(*){display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;gap:8px}.list_item .action-area{position:relative}.list_item .action-area .internal-actions-buttons,.list_item .action-area ::slotted(*){display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;color:var(--color-content-default, #202c44)}.clickable{position:relative;cursor:pointer}.clickable:before{content:"";position:absolute;inset:0}.clickable:hover:before{background-color:var(--color-content-default, #202c44);opacity:0.08}'}}]);