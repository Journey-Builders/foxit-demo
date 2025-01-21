import './index.css';
// @ts-ignore
import * as Addons from '@foxitsoftware/foxit-pdf-sdk-for-web-library/lib/uix-addons/allInOne.js'
import { PDFViewer } from './pdfViewer';
export const libPath = '/foxit-lib/';

const pdfContainer = 'pdfContainer';

document.querySelector('#root')!.innerHTML = `
<div id="${pdfContainer}" style="width: 100%; height: 100%"></div>
`;

const viewer = new PDFViewer(pdfContainer);
viewer.initialize();