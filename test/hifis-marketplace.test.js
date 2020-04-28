import { html, fixture, expect } from '@open-wc/testing';

import '../src/hifis-marketplace.js';

describe('HIFIS Marketplace Shell', () => {
  let element;
  beforeEach(async () => {
    element = await fixture(html`
      <hifis-marketplace></hifis-marketplace>
    `);
  });
  it('renders a header', () => {
    const header = element.shadowRoot.querySelector('mwc-top-app-bar-fixed');
    expect(header).to.exist;
    expect(header.classList.contains('header')).be.true;
  });
  it('renders a body', async () => {
    const body = element.shadowRoot.querySelector('.body');
    expect(body).to.exist;
    expect(body.classList.contains('body')).be.true;
  });
});
