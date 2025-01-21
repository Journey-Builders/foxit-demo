import { appearances, PDFUI } from '@foxitsoftware/foxit-pdf-sdk-for-web-library';
// @ts-ignore
import * as Addons from '@foxitsoftware/foxit-pdf-sdk-for-web-library/lib/uix-addons/allInOne.js';
import { customAppearance } from './customAppearance';
import { getProportionalSize } from './getProportionalSize';
export const libPath = '/foxit-lib/';
import { stamps as Stamps, type AnnotationIcons, type Category } from './stamps';

export class PDFViewer {
  container: HTMLElement;
  pdfui: PDFUI | null = null;

  constructor(containerId: string) {
    const container = document.getElementById(containerId);
    if (!container) {
      throw new Error(`Container element with id ${containerId} not found`);
    }
    this.container = container;
  }

  getStampIcons(): AnnotationIcons[] {
    const icons: AnnotationIcons[] = [];
    for (const category of Object.keys(Stamps)) {
      for (const icon of Stamps[category as Category]) {
        const size = getProportionalSize(icon.width, icon.height, 50);
        icons.push({
          name: icon.name,
          annotType: 'stamp',
          fileType: 'png',
          url: `${window.location.origin}/assets/stamps/${icon.filename}`,
          category,
          ...size,
        });
      }
    }
    return icons;
  }

  async initialize() {
    const template = await customAppearance();
    this.pdfui = new PDFUI({
      renderTo: this.container,
      viewerOptions: {
        libPath,
        jr: {
          licenseSN: import.meta.env.PUBLIC_FOXIT_SN,
          licenseKey: import.meta.env.PUBLIC_FOXIT_KEY,
        },
      },
      addons: Addons,
      appearance: appearances.AdaptiveAppearance.extend({
        getLayoutTemplate: () => template,
      }),
    });
    try {
      await this.pdfui.waitForInitialization();
      await this.pdfui.initAnnotationIcons(this.getStampIcons());
    } catch (error) {
      console.error('Something went wrong', error);
    }
  }
}
