import './index.css';
import { appearances, PDFUI } from '@foxitsoftware/foxit-pdf-sdk-for-web-library';
import { layout } from './layout';
import { licenseKey, licenseSN } from './license-key';
// @ts-ignore
import * as Addons from '@foxitsoftware/foxit-pdf-sdk-for-web-library/lib/uix-addons/allInOne.js';

export const libPath = '/foxit-lib/';

class PDFViewer {
  private container: HTMLElement;

  constructor(containerId: string) {
    const container = document.getElementById(containerId);
    if (!container) {
      throw new Error(`Container element with id ${containerId} not found`);
    }
    this.container = container;
  }
  async initialize() {
    const PDF = new PDFUI({
      viewerOptions: {
        libPath,
        jr: {
          licenseSN,
          licenseKey,
        },
      },
      renderTo: this.container,
      appearance: appearances.adaptive.extend({
        getLayoutTemplate: () => {
          return layout;
        },
      }),
      // addons: Addons,
    });
    try {
      await PDF.init(this.container);

      await fetch(`${window.location.origin}/assets/pdf/nyc.pdf`).then(res => {
        res.arrayBuffer().then(buffer => PDF.openPDFByFile(buffer));
      });
    } catch (e) {
      console.error('Something went wrong');
    }
  }
}

document.querySelector('#root')!.innerHTML = `
  <head>
      <meta charset="utf-8">
      <link rel="stylesheet" type="text/css" href="./lib/UIExtension.css">
      <style>
          .fv__ui-tab-nav li span {
              color: #636363;
          }
          .flex-row {
              display: flex;
              flex-direction: row;
          }
      </style>
      <!-- ignore other unimportant code -->
  </head>
  <div id="pdfContainer" style="width: 100%; height: 100%"></div>
`;

const pdf = new PDFViewer('pdfContainer');
pdf.initialize();
