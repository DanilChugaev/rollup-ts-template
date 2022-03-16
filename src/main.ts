/* eslint-disable */
import { LitElement, html, css } from 'lit';
import { property, customElement } from 'lit/decorators.js';

@customElement('comp-main')
export class CompMain extends LitElement {

    static styles = css`
      .rool {
          background-color: lightgrey;
      }
    `;

    @property({ type: String }) message: string = 'Welcome to LitElement';

    render() {
        return html`
          <div class="rool">
              <h3>${this.message}</h3>
          </div>
        `;
    }
} 