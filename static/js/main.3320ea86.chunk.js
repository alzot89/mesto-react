(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{17:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(1),i=n.n(c),o=n(8),s=n.n(o),r=(n(17),n(11)),u=n(2),l=n.p+"static/media/header_logo.c2821b38.svg";var p=function(){return Object(a.jsx)("header",{className:"header",children:Object(a.jsx)("img",{className:"header__logo",src:l,alt:"\u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0430: \u043b\u043e\u0433\u043e\u0442\u0438\u043f"})})},d=i.a.createContext();var j=function(e){var t=e.card,n=e.onCardClick,i=e.onCardLike,o=e.onCardDelete,s=Object(c.useContext)(d),r=t.owner._id===s._id,u=t.likes.some((function(e){return e._id===s._id}));return Object(a.jsxs)("li",{className:"card",children:[Object(a.jsx)("button",{className:"button card__trash ".concat(r&&"card__trash_active"),type:"button","aria-label":"\u043a\u043e\u0440\u0437\u0438\u043d\u0430",onClick:function(){o(t)}}),Object(a.jsx)("img",{className:"card__image",src:t.link,alt:t.name,onClick:function(){n(t)}}),Object(a.jsxs)("div",{className:"card__info",children:[Object(a.jsx)("h3",{className:"card__title",children:t.name}),Object(a.jsxs)("div",{className:"card__like-container",children:[Object(a.jsx)("button",{className:"button card__like ".concat(u&&"card__like_active"),type:"button","aria-label":"\u0441\u0435\u0440\u0434\u0435\u0447\u043a\u043e",onClick:function(){i(t)}}),Object(a.jsx)("p",{className:"card__like-amount",children:!(0===t.likes.length)&&t.likes.length})]})]})]})};var b=function(e){var t=e.onEditProfile,n=e.onAddPlace,i=e.onEditAvatar,o=e.onCardClick,s=e.cards,r=e.isLoading,u=e.onCardLike,l=e.onCardDelete,p=Object(c.useContext)(d);return Object(a.jsxs)("main",{className:"content",children:[Object(a.jsxs)("section",{className:"profile",children:[Object(a.jsxs)("div",{className:"profile__image",children:[Object(a.jsx)("div",{className:"profile__overlay",children:Object(a.jsx)("button",{className:"button button_type_avatar",type:"button","aria-label":"\u043a\u043d\u043e\u043f\u043a\u0430: \u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c",onClick:i})}),Object(a.jsx)("img",{className:"profile__avatar",src:p.avatar,alt:"\u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0430: \u0430\u0432\u0430\u0442\u0430\u0440\u043a\u0430"})]}),Object(a.jsxs)("div",{className:"profile__info",children:[Object(a.jsxs)("div",{className:"profile__container",children:[Object(a.jsx)("h1",{className:"profile__title",children:p.name}),Object(a.jsx)("button",{className:"button button_type_edit",type:"button","aria-label":"\u043a\u043d\u043e\u043f\u043a\u0430: \u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c",onClick:t})]}),Object(a.jsx)("p",{className:"profile__subtitle",children:p.about})]}),Object(a.jsx)("button",{className:"button button_type_add",type:"button","aria-label":"\u043a\u043d\u043e\u043f\u043a\u0430: \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c",onClick:n})]}),Object(a.jsx)("section",{className:"elements",children:r?Object(a.jsx)("p",{style:{color:"white"},children:"loading..."}):Object(a.jsx)("ul",{className:"elements__list",children:s.map((function(e){return Object(a.jsx)(j,{card:e,onCardClick:o,onCardLike:u,onCardDelete:l},e._id)}))})})]})};var _=function(){return Object(a.jsx)("footer",{className:"footer",children:Object(a.jsx)("p",{className:"footer__copyright",children:"\xa9 2020 Mesto Russia"})})},h=n(4),O=n(3);var f=function(e){var t=e.name,n=e.title,i=e.button,o=e.isOpen,s=e.onClose,r=e.children,l=e.onSubmit,p=Object(c.useState)(!1),d=Object(u.a)(p,2),j=d[0],b=d[1],_=Object(c.useRef)();return Object(c.useEffect)((function(){b(_.current.checkValidity())})),Object(c.useEffect)((function(){if(o){var e=function(e){"Escape"===e.key&&s()};return document.addEventListener("keydown",e),function(){document.removeEventListener("keydown",e)}}}),[o]),Object(a.jsx)("div",{className:"popup popup_type_".concat(t," ").concat(o&&"popup_opened"),onMouseDown:function(e){e.target.classList.contains("popup")&&s()},children:Object(a.jsxs)("div",{className:"popup__container popup__container_type_".concat(t),children:[Object(a.jsx)("button",{className:"button popup__close popup__close_type".concat(t),type:"button","aria-label":"\u043a\u043d\u043e\u043f\u043a\u0430: \u0437\u0430\u043a\u0440\u044b\u0442\u044c",onClick:s}),Object(a.jsx)("h2",{className:"popup__title",children:n}),Object(a.jsxs)("form",{className:"popup__form popup__form_type_".concat(t),name:t,onSubmit:l,ref:_,children:[r,Object(a.jsx)("button",{className:"button popup__save popup__save_type_".concat(t," ").concat(!j&&"popup__save_invalid"),"aria-label":"\u043a\u043d\u043e\u043f\u043a\u0430: \u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",children:i})]})]})})};var m=function(e){var t=e.isOpen,n=e.onClose,i=e.onAddPlace,o=e.isLoading,s=Object(c.useRef)(),r=Object(c.useRef)(),l=Object(c.useState)({}),p=Object(u.a)(l,2),d=p[0],j=p[1],b=Object(c.useState)({}),_=Object(u.a)(b,2),m=_[0],v=_[1];function g(e){var t=e.target.name;j((function(n){return Object(O.a)(Object(O.a)({},n),{},Object(h.a)({},t,e.target.validationMessage))})),v((function(n){return Object(O.a)(Object(O.a)({},n),{},Object(h.a)({},t,e.target.validity.valid))}))}return Object(c.useEffect)((function(){t&&(s.current.value="",r.current.value="",j((function(e){return Object(O.a)(Object(O.a)({},e),{},{name:"",link:""})})),v((function(e){return Object(O.a)(Object(O.a)({},e),{},{name:!0,link:!0})})))}),[t]),Object(a.jsx)(f,{name:"add",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",button:o?"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435...":"\u0421\u043e\u0437\u0434\u0430\u0442\u044c",isOpen:t,onClose:n,onSubmit:function(e){e.preventDefault(),i({name:s.current.value,link:r.current.value})},children:Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("div",{className:"popup__input-container",children:[Object(a.jsx)("input",{id:"image-input",className:"popup__input popup__input_type_image ".concat(!m.name&&"popup__input_state_invalid"," "),type:"text",name:"name",ref:s,placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",minLength:"2",maxLength:"30",required:!0,onChange:g}),Object(a.jsx)("span",{id:"image-input-error",className:"error",children:d.name})]}),Object(a.jsxs)("div",{className:"popup__input-container",children:[Object(a.jsx)("input",{id:"link-input",className:"popup__input popup__input_type_link ".concat(!m.link&&"popup__input_state_invalid"," "),type:"url",name:"link",ref:r,placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",required:!0,onChange:g}),Object(a.jsx)("span",{id:"link-input-error",className:"error",children:d.link})]})]})})};var v=function(e){var t=e.isOpen,n=e.onClose,i=e.onUpdateUser,o=e.isLoading,s=Object(c.useContext)(d),r=Object(c.useState)({name:"",description:""}),l=Object(u.a)(r,2),p=l[0],j=l[1],b=Object(c.useState)({}),_=Object(u.a)(b,2),m=_[0],v=_[1],g=Object(c.useState)({}),x=Object(u.a)(g,2),k=x[0],C=x[1];function y(e){var t=e.target.name;j((function(n){return Object(O.a)(Object(O.a)({},n),{},Object(h.a)({},t,e.target.value))})),v((function(n){return Object(O.a)(Object(O.a)({},n),{},Object(h.a)({},t,e.target.validationMessage))})),C((function(n){return Object(O.a)(Object(O.a)({},n),{},Object(h.a)({},t,e.target.validity.valid))}))}return Object(c.useEffect)((function(){t&&(j((function(e){return Object(O.a)(Object(O.a)({},e),{},{name:s.name,description:s.about})})),v((function(e){return Object(O.a)(Object(O.a)({},e),{},{name:"",description:""})})),C((function(e){return Object(O.a)(Object(O.a)({},e),{},{name:!0,description:!0})})))}),[t]),Object(a.jsx)(f,{name:"edit",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",button:o?"\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435...":"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:t,onClose:n,onSubmit:function(e){e.preventDefault(),i({name:p.name,about:p.description})},children:Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("div",{className:"popup__input-container",children:[Object(a.jsx)("input",{id:"name-input",className:"popup__input popup__input_type_name ".concat(!k.name&&"popup__input_state_invalid"," "),type:"text",maxLength:"40",minLength:"2",name:"name",value:p.name,placeholder:"\u0418\u043c\u044f",required:!0,onChange:y}),Object(a.jsx)("span",{id:"name-input-error",className:"error",children:m.name})]}),Object(a.jsxs)("div",{className:"popup__input-container",children:[Object(a.jsx)("input",{id:"about-input",className:"popup__input popup__input_type_about ".concat(!k.description&&"popup__input_state_invalid"," "),type:"text",maxLength:"200",minLength:"2",name:"description",value:p.description,placeholder:"\u041e \u0441\u0435\u0431\u0435",required:!0,onChange:y}),Object(a.jsx)("span",{id:"about-input-error",className:"error",children:m.description})]})]})})};var g=function(e){var t=e.isOpen,n=e.onClose,i=e.onUpdateAvatar,o=e.isLoading,s=Object(c.useRef)(),r=Object(c.useState)(""),l=Object(u.a)(r,2),p=l[0],d=l[1],j=Object(c.useState)(!0),b=Object(u.a)(j,2),_=b[0],h=b[1];return Object(c.useEffect)((function(){t&&(s.current.value="",d(""),h(!0))}),[t]),Object(a.jsx)(f,{name:"avatar",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",button:o?"\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435...":"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:t,onClose:n,onSubmit:function(e){e.preventDefault(),i(s.current.value),s.current.value=""},children:Object(a.jsxs)("div",{className:"popup__input-container",children:[Object(a.jsx)("input",{id:"avatar-input",className:"popup__input popup__input_type_avatar ".concat(!_&&"popup__input_state_invalid"," "),type:"url",name:"avatar",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",ref:s,required:!0,onChange:function(e){d(s.current.validationMessage),h(e.target.validity.valid)}}),Object(a.jsx)("span",{id:"avatar-input-error",className:"error",children:p})]})})};var x=function(e){var t=e.card,n=e.isOpen,c=e.onClose;return Object(a.jsx)("div",{className:"popup popup_type_image ".concat(n&&"popup_opened"),children:Object(a.jsxs)("div",{className:"popup__container popup__container_type_image",children:[Object(a.jsx)("button",{className:"button popup__close popup__close_type_image",type:"button","aria-label":"\u043a\u043d\u043e\u043f\u043a\u0430: \u0437\u0430\u043a\u0440\u044b\u0442\u044c",onClick:c}),Object(a.jsx)("img",{className:"popup__image",src:t.link,alt:t.name}),Object(a.jsx)("h3",{className:"popup__image-title",children:t.name})]})})};var k=function(e){var t=e.isOpen,n=e.onClose,c=e.onConfirmDeletion;return Object(a.jsx)(f,{name:"confirm",title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b ?",button:"\u0414\u0430",isOpen:t,onClose:n,onSubmit:function(e){e.preventDefault(),c()}})},C=n(9),y=n(10),N=new(function(){function e(t){var n=t.address,a=t.token,c=t.groupId;Object(C.a)(this,e),this._address=n,this._token=a,this._groupId=c}return Object(y.a)(e,[{key:"getCardsData",value:function(){var e=this;return fetch("".concat(this._address,"/").concat(this._groupId,"/cards"),{headers:{authorization:this._token}}).then((function(t){return e._checkResponseStatus(t)}))}},{key:"getUserData",value:function(){var e=this;return fetch("".concat(this._address,"/").concat(this._groupId,"/users/me"),{headers:{authorization:this._token}}).then((function(t){return e._checkResponseStatus(t)}))}},{key:"changeUserData",value:function(e){var t=this;return fetch("".concat(this._address,"/").concat(this._groupId,"/users/me"),{method:"PATCH",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return t._checkResponseStatus(e)}))}},{key:"changeAvatar",value:function(e){var t=this;return fetch("".concat(this._address,"/").concat(this._groupId,"/users/me/avatar"),{method:"PATCH",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({avatar:e})}).then((function(e){return t._checkResponseStatus(e)}))}},{key:"setCardData",value:function(e){var t=this;return fetch("".concat(this._address,"/").concat(this._groupId,"/cards"),{method:"POST",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({name:e.name,link:e.link})}).then((function(e){return t._checkResponseStatus(e)}))}},{key:"deleteCard",value:function(e){var t=this;return fetch("".concat(this._address,"/").concat(this._groupId,"/cards/").concat(e),{method:"DELETE",headers:{authorization:this._token}}).then((function(e){return t._checkResponseStatus(e)}))}},{key:"changeLikeCardStatus",value:function(e,t){var n=this;return t?fetch("".concat(this._address,"/").concat(this._groupId,"/cards/likes/").concat(e),{method:"DELETE",headers:{authorization:this._token,"Content-Type":"application/json"}}).then((function(e){return n._checkResponseStatus(e)})):fetch("".concat(this._address,"/").concat(this._groupId,"/cards/likes/").concat(e),{method:"PUT",headers:{authorization:this._token,"Content-Type":"application/json"}}).then((function(e){return n._checkResponseStatus(e)}))}},{key:"_checkResponseStatus",value:function(e){return e.ok?e.json():Promise.reject(new Error("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status)))}}]),e}())({address:"https://mesto.nomoreparties.co/v1",token:"94f8771a-5db3-4407-bf14-903dd1dba9af",groupId:"cohort-19"});var S=function(){var e=Object(c.useState)(!1),t=Object(u.a)(e,2),n=t[0],i=t[1],o=Object(c.useState)(!1),s=Object(u.a)(o,2),l=s[0],j=s[1],h=Object(c.useState)(!1),O=Object(u.a)(h,2),f=O[0],C=O[1],y=Object(c.useState)(!1),S=Object(u.a)(y,2),L=S[0],D=S[1],E=Object(c.useState)({}),P=Object(u.a)(E,2),R=P[0],I=P[1],T=Object(c.useState)(!1),A=Object(u.a)(T,2),U=A[0],w=A[1],z=Object(c.useState)({name:"",about:"",avatar:""}),F=Object(u.a)(z,2),M=F[0],q=F[1],J=Object(c.useState)([]),B=Object(u.a)(J,2),H=B[0],V=B[1],G=Object(c.useState)(!1),K=Object(u.a)(G,2),Q=K[0],W=K[1];function X(){i(!1),j(!1),C(!1),I({}),w(!1),D(!1)}return Object(c.useEffect)((function(){W(!0),Promise.all([N.getUserData(),N.getCardsData()]).then((function(e){q(e[0]),V(e[1])})).catch((function(e){console.log(e)})).finally((function(){W(!1)}))}),[]),Object(a.jsx)(d.Provider,{value:M,children:Object(a.jsxs)("div",{className:"app",children:[Object(a.jsx)(p,{}),Object(a.jsx)(b,{onEditProfile:function(){i(!0)},onAddPlace:function(){j(!0)},onEditAvatar:function(){C(!0)},onCardClick:function(e){I(e),w(!0)},isLoading:Q,cards:H,onCardLike:function(e){var t=e.likes.some((function(e){return e._id===M._id}));N.changeLikeCardStatus(e._id,t).then((function(t){var n=H.map((function(n){return n._id===e._id?t:n}));V(n)})).catch((function(e){console.log(e)}))},onCardDelete:function(e){D(!0),I(e)}}),Object(a.jsx)(_,{}),Object(a.jsx)(v,{isOpen:n,onClose:X,onUpdateUser:function(e){W(!0),N.changeUserData(e).then((function(e){q(e),X()})).catch((function(e){console.log(e)})).finally((function(){W(!1)}))},isLoading:Q}),Object(a.jsx)(m,{isOpen:l,onClose:X,onAddPlace:function(e){W(!0),N.setCardData(e).then((function(e){V([e].concat(Object(r.a)(H))),X()})).catch((function(e){console.log(e)})).finally((function(){W(!1)}))},isLoading:Q}),Object(a.jsx)(g,{isOpen:f,onClose:X,onUpdateAvatar:function(e){W(!0),N.changeAvatar(e).then((function(e){q(e),X()})).catch((function(e){console.log(e)})).finally((function(){W(!1)}))},isLoading:Q}),Object(a.jsx)(k,{isOpen:L,onClose:X,onConfirmDeletion:function(){N.deleteCard(R._id).then((function(){var e=H.filter((function(e){return!(e._id===R._id)&&e}));V(e),X()})).catch((function(e){console.log(e)}))}}),Object(a.jsx)(x,{card:R,onClose:X,isOpen:U})]})})},L=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,i=t.getLCP,o=t.getTTFB;n(e),a(e),c(e),i(e),o(e)}))};s.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(S,{})}),document.getElementById("root")),L()}},[[18,1,2]]]);
//# sourceMappingURL=main.3320ea86.chunk.js.map