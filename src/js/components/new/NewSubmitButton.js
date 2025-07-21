import { html } from 'lit';
import LitWithoutShadowDom from '../root/LitWithoutShadowDom';

class NewSubmitButton extends LitWithoutShadowDom {
  render() {
    return html`
      <button class="new-submit-button" type="submit">Submit</button>
    `;
  }
}

customElements.define('new-submit-button', NewSubmitButton);
