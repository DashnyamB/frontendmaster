(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{17:function(s,e,n){"use strict";function i(s,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(s,i.key,i)}}n.r(e);var a=function(){function s(){!function(s,e){if(!(s instanceof e))throw new TypeError("Cannot call a class as a function")}(this,s),this.injectHTML(),this.modal=document.querySelector(".modal"),this.closeIcon=document.querySelector(".modal__close"),this.events()}var e,n,a;return e=s,(n=[{key:"events",value:function(){var s=this;this.closeIcon.addEventListener("click",(function(){return s.closeModal()})),document.addEventListener("keyup",(function(e){return s.keyPressHandler(e)}))}},{key:"keyPressHandler",value:function(s){27===s.keyCode&&this.closeModal()}},{key:"openModal",value:function(){this.modal.classList.add("modal--is-visible")}},{key:"closeModal",value:function(){this.modal.classList.remove("modal--is-visible")}},{key:"injectHTML",value:function(){document.body.insertAdjacentHTML("beforeend",'\n    <div class="modal">\n    <div class="modal__inner">\n      <h2 class="section-title section-title--blue section-title--less-margin"><img src="assets/images/icons/mail.svg" class="section-title__icon"> Хамт <strong>Аялах</strong></h2>\n      <div class="wrapper wrapper--narrow">\n        <p class="modal__description">Бид тун удахгүй онлайнаар захиалга өгөх системийг нээх бөгөөд, та одоогоор доорхи сошиал платформуудаар дамжиуулж бидэнтэй холбогдох боломжтой!</p>\n      </div>\n\n      <div class="social-icons">\n        <a href="#" class="social-icons__icon"><img src="assets/images/icons/facebook.svg" alt="Facebook"></a>\n        <a href="#" class="social-icons__icon"><img src="assets/images/icons/twitter.svg" alt="Twitter"></a>\n        <a href="#" class="social-icons__icon"><img src="assets/images/icons/instagram.svg" alt="Instagram"></a>\n        <a href="#" class="social-icons__icon"><img src="assets/images/icons/youtube.svg" alt="YouTube"></a>\n      </div>\n    </div>\n    <div class="modal__close">X</div>\n  </div>')}}])&&i(e.prototype,n),a&&i(e,a),s}();e.default=a}}]);