import { LitElement, html, property, customElement } from 'lit-element'

import './my-element'

@customElement('my-controller')
class ControllerElement extends LitElement {
    @property() greeting: string = 'Hello';

    render() {
       return html`
       <div>
       <p>Content: ${this.greeting}</p>
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


