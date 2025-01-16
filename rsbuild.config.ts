import { defineConfig } from '@rsbuild/core';
import path from 'path';

const libraryModulePath = path.resolve('node_modules/@foxitsoftware/foxit-pdf-sdk-for-web-library');
const libPath = path.resolve(libraryModulePath, 'lib');

export default defineConfig({
  source: {
    alias: {
      '@': './src',
    },
  },
  server: {
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
