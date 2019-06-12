!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t){e.exports=lit-element},function(e,t,n){"use strict";n.r(t);var r=n(0),o=function(e,t,n,r){var o,l=arguments.length,i=l<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var c=e.length-1;c>=0;c--)(o=e[c])&&(i=(l<3?o(i):l>3?o(t,n,i):o(t,n))||i);return l>3&&i&&Object.defineProperty(t,n,i),i};let l=class extends r.LitElement{constructor(){super(...arguments),this.greeting="Hello"}static get styles(){return r.css`
        :host {
            all: initial;
            color: green;
        }
        p {
            background: var(--my-element-bg, #9E9E9E);
            font-size: var(--my-app-font-size);
        }`}render(){return r.html`
        <input value="${this.greeting}" @keyup="${e=>this.handleChange(e.target.value)}">
        <slot></slot>
        <p>${this.greeting}, World</p>
        <input type="button" value="Clear" @click="${this.handleClick}">
        <slot name="after"></slot>
        `}handleChange(e){this.greeting=e,this.dispatchEvent(new CustomEvent("model-changed",{detail:this.greeting}))}handleClick(){this.handleChange("")}};o([Object(r.property)()],l.prototype,"greeting",void 0);l=o([Object(r.customElement)("my-element")],l);var i=function(e,t,n,r){var o,l=arguments.length,i=l<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var c=e.length-1;c>=0;c--)(o=e[c])&&(i=(l<3?o(i):l>3?o(t,n,i):o(t,n))||i);return l>3&&i&&Object.defineProperty(t,n,i),i};let c=class extends r.LitElement{constructor(){super(...arguments),this.greeting="Hello"}render(){return r.html`
       <div>
       <p>Content: ${this.greeting}</p>
        <my-element .greeting=${this.greeting} 
                    @model-changed="${e=>this.greeting=e.detail}" style="--my-element-bg: white"></my-element>
      </div>
        `}connectedCallback(){super.connectedCallback(),setTimeout(()=>this.greeting="Hi",3e3)}};i([Object(r.property)()],c.prototype,"greeting",void 0),c=i([Object(r.customElement)("my-controller")],c)}]);
//# sourceMappingURL=main.js.map