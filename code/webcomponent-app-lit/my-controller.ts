import { LitElement, html, css, property, customElement } from 'lit-element'

import './my-element'

@customElement('my-controller')
class ControllerElement extends LitElement {
    @property() greeting: string = 'Hello';

        // https://lit-element.polymer-project.org/guide/styles
        static get styles() {
            return css`
            :host {
                all: initial;
                color: red;
            }
            p {
                background: var(--my-element-bg, #9E9E9E);
                font-size: var(--my-app-font-size);
                color: green;
            }`;
        }
    
    
    // turns off shadow dom
    // createRenderRoot() {
    //     return this;
    // }

    render() {
       return html`
       <div>
       <p>Content: ${this.greeting}</p>
       <slot></slot>
        <my-element .greeting=${this.greeting} 
                    @model-changed="${(event: any) => this.greeting = event.detail}" style="--my-element-bg: white"></my-element>
      </div>
        `
    }

    connectedCallback() {
        super.connectedCallback()
        setTimeout(() => this.greeting = 'Hi', 3000)

    }
}


