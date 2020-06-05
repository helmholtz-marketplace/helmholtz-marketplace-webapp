import { LitElement, html, css } from 'lit-element';

import '@material/mwc-icon-button';
import '@material/mwc-top-app-bar-fixed';

class HelmholtzMarketplaceApp extends LitElement {
  constructor() {
    super();
    this.src =
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAFCA' +
      'YAAACTphZWAAAAAXNSR0IArs4c6QAAAJZlWElmTU0AKgAAAAgABQESAAMAAAABA' +
      'AEAAAEaAAUAAAABAAAASgEbAAUAAAABAAAAUgExAAIAAAARAAAAWodpAAQAAAAB' +
      'AAAAbAAAAAAAAACWAAAAAQAAAJYAAAABd3d3Lmlua3NjYXBlLm9yZwAAAAOgAQAD' +
      'AAAAAQABAACgAgAEAAAAAQAAAAugAwAEAAAAAQAAAAUAAAAAay66LwAAAAlwSFlz' +
      'AAAXEgAAFxIBZ5/SUgAAActpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADx4Onht' +
      'cG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IlhNUCBDb3JlI' +
      'DUuNC4wIj4KICAgPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy' +
      '8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICAgICAgPHJkZjpEZXNjcmlwdG' +
      'lvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6eG1wPSJodHRwOi8vbn' +
      'MuYWRvYmUuY29tL3hhcC8xLjAvIgogICAgICAgICAgICB4bWxuczp0aWZmPSJodH' +
      'RwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyI+CiAgICAgICAgIDx4bXA6Q3JlYX' +
      'RvclRvb2w+d3d3Lmlua3NjYXBlLm9yZzwveG1wOkNyZWF0b3JUb29sPgogICAgIC' +
      'AgICA8dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPgogICAgIC' +
      'A8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KGM' +
      'tVWAAAAJtJREFUCB1jYACB//8ZwTQBghGskJHxP4PCfA7f8F9imx/zMDL8/cvFwP' +
      'hXhIGV+Q3Dv7/8DL++XWFYnf2FhQGkMHS+RKbdPRemf4yfGR6quDIz/+P6y8D4lu' +
      'HvvxsM/5msGNi4ZgMtPcECstlGhO3nx0+8V/79Z37L8P3POWYuZsG/rAxPGb5z/m' +
      'Fg+3WJ4de/xzAXEuVeoMcYAVOHNwrP7xEAAAAAAElFTkSuQmCC';
  }

  static get properties() {
    return {
      src: { type: String }
    };
  }

  static get styles() {
    return css`
      :host {
        height: 100vh;
        width: 100vw;
        display: flex;
        flex-direction: column;
        min-width: 400px;
      }
      .body {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-size: calc(10px + 2vmin);
        color: #1a2b42;
        margin: 0 auto;
        text-align: center;
      }
      .high-res-img {
        max-width: 100%;
        height: auto;
        width: auto\\9; /* ie8 */
      }
      .low-res-img {
        max-width: 100vw;
        height: 300px;
        width: 100%;
      }
      .hidden {
        display: none;
      }
      .welcome {
        max-width: 90vw;
        box-sizing: border-box;
      }
      #alt {
        color: green;
      }
      .spacer {
        width: 100vw;
        height: 20vh;
      }
      .header {
        --mdc-theme-primary: #222322;
      }
      .header > mwc-button {
        --mdc-button-outline-color: white;
      }
      h1 {
        margin: 0;
        font-size: 3em;
        padding: 0;
        color: white;
        font-family: 'Luckiest Guy', arial;
        text-shadow: 0 0.1em 20px black, 0.05em -0.03em 0 black,
          0.05em 0.005em 0 black, 0em 0.08em 0 black, 0.05em 0.08em 0 black,
          0px -0.03em 0 black, -0.03em -0.03em 0 black, -0.03em 0.08em 0 black,
          -0.03em 0 0 black;
      }
      h1 span {
        -webkit-transform: scale(0.9);
        transform: scale(0.9);
        display: inline-block;
      }
      h1 span:first-child {
        -webkit-animation: bop 1s cubic-bezier(0.175, 0.885, 0.32, 1.275)
          forwards 30 alternate;
        animation: bop 1s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards 30
          alternate;
      }
      h1 span:last-child {
        -webkit-animation: bopB 1s 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275)
          forwards 30 alternate;
        animation: bopB 1s 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards
          30 alternate;
      }

      @-webkit-keyframes bop {
        0% {
          -webkit-transform: scale(0.9);
          transform: scale(0.9);
        }
        50%,
        100% {
          -webkit-transform: scale(1);
          transform: scale(1);
        }
      }

      @keyframes bop {
        0% {
          -webkit-transform: scale(0.9);
          transform: scale(0.9);
        }
        50%,
        100% {
          -webkit-transform: scale(1);
          transform: scale(1);
        }
      }
      @-webkit-keyframes bopB {
        0% {
          -webkit-transform: scale(0.9);
          transform: scale(0.9);
        }
        80%,
        100% {
          -webkit-transform: scale(1) rotateZ(-3deg);
          transform: scale(1) rotateZ(-3deg);
        }
      }
      @keyframes bopB {
        0% {
          -webkit-transform: scale(0.9);
          transform: scale(0.9);
        }
        80%,
        100% {
          -webkit-transform: scale(1) rotateZ(-3deg);
          transform: scale(1) rotateZ(-3deg);
        }
      }
    `;
  }

  render() {
    return html`
      <mwc-top-app-bar-fixed class="header">
        <mwc-icon-button icon="menu" slot="navigationIcon"></mwc-icon-button>
        <div slot="title"></div>
      </mwc-top-app-bar-fixed>
      <div class="body">
        <div class="spacer"></div>
        <div class="welcome">
          <h1><span>welcome</span>&nbsp;&nbsp;<span>TO</span></h1>
        </div>
        <img id="logo" class="show low-res-img" src="${this.src}" alt />
        <div id="alt" class="hidden"><h1>Helmholtz Marketplace</h1></div>
        <div>
          <p><code>/we are in design phase/</code></p>
          <p>coming soon - <code>version: 0.0.1</code></p>
        </div>
      </div>
    `;
  }

  firstUpdated(changedProperties) {
    if (changedProperties) {
      fetch('../images/hifis-logo.png')
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.blob();
        })
        .then(myBlob => {
          this.src = URL.createObjectURL(myBlob);
          this.shadowRoot
            .getElementById('logo')
            .classList.replace('low-res-img', 'high-res-img');
        })
        .catch(() => {
          this.shadowRoot
            .getElementById('alt')
            .classList.replace('hidden', 'show');
          this.shadowRoot
            .getElementById('logo')
            .classList.replace('show', 'hidden');
        });
    }
  }
}
customElements.define('helmholtz-marketplace-app', HelmholtzMarketplaceApp);
