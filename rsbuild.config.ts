import { loadEnv, mergeRsbuildConfig } from '@rsbuild/core';
import path from 'node:path';
import {config} from 'dotenv'

const { publicVars } = loadEnv();
const libraryModulePath = path.resolve('node_modules/@foxitsoftware/foxit-pdf-sdk-for-web-library');
const libPath = path.resolve(libraryModulePath, 'lib');
config();

export default mergeRsbuildConfig({
  html: {
    template: './public/index.html'
  },
  source: {
    alias: {
      '@': './src',
    },
    define: publicVars,
  },
  server: {
    headers: {
      'Service-Worker-Allowed': '/'
    },
    publicDir: {
      name: 'public',
      copyOnBuild: true,
      watch: true,
    },
  },
  output: {
    assetPrefix: '/',
    copy: [
      {
        from: libPath,
        to: 'foxit-lib',
        // globOptions: {
        //   ignore: ['{PDFViewCtrl,UIExtension}*.js', 'preload-jr-worker.js'],
        // },
      },
    ],
    externals: {
      UIExtension: 'UIExtension',
      PDFViewCtrl: 'PDFViewCtrl',
    },
  },
});