import { html } from 'lit';
import LitWithoutShadowDom from './root/LitWithoutShadowDom';
import { msg, updateWhenLocaleChanges } from '@lit/localize';
 
class NavButtons extends LitWithoutShadowDom {
  constructor() {
    super();
    updateWhenLocaleChanges(this);
  }
  
  render() {
    return html`
      <div class="offcanvas-body">
        <ul class="nav row justify-content-end flex-grow-1 pe-3">
          <li class="nav-item">
            <a class="nav-link" aria-current="page" href="/">${msg(`Daftar Cerita`)}</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/new/new.html">${msg(`Buat Cerita`)}</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/about/about.html">${msg(`Tentang TUY'S`)}</a>
          </li>
        </ul>
      </div>
    `;
  }
}
 
customElements.define('nav-buttons', NavButtons);