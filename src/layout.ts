export const layout = `<webpdf @aria:circular-focus>
   <toolbar name="toolbar" class="fv__ui-toolbar-scrollable toolbar-main" @aria:role="navigation"
      @aria:label="aria:labels.toolbar.nav-title">
               <group name="home-tab-group-hand" retain-count="3">
                  <hand-ribbon-button></hand-ribbon-button>
                  <ribbon-button
                     name="create-square" @tooltip tooltip-title="toolbar.tooltip.square.title"
                     icon-class="fv__icon-toolbar-square">
                  </ribbon-button>
                  <ribbon-butto
                     name="create-polygon" @tooltip tooltip-title="toolbar.tooltip.polygon.title"
                     text="" 
                     icon-class="fv__icon-toolbar-polygon">toolbar.create.polygon
                  </ribbon-butto>
                  <ribbon-button
                     name="create-line" @tooltip tooltip-title="toolbar.tooltip.line.title"
                     text="" 
                     icon-class="fv__icon-toolbar-line">toolbar.buttons.line
                  </ribbon-button>
                  <ribbon-button
                     name="create-polyline" @tooltip tooltip-title="toolbar.tooltip.polyline.title"
                     text="" 
                     icon-class="fv__icon-toolbar-polyline">toolbar.buttons.polyline
                  </ribbon-button>
                  <ribbon-button
                     @tooltip tooltip-title="toolbar.tooltip.arrow.title"
                     text="" 
                     icon-class="fv__icon-toolbar-arrow">toolbar.buttons.arrow
                  </ribbon-button>
                  <ribbon-button
                     name="freetext-typewriter"
                     text="toolbar.tooltip.typewriter.title"
                     @tooltip
                     tooltip-title="toolbar.tooltip.typewriter.title"
                     icon-class="fv__icon-toolbar-typewriter">toolbar.create.typewriter
                  </ribbon-button>
   </toolbar>
   <div class="fv__ui-body">
      <portfolio-container name="portfolio-container">
         <portfolio-sidebar @portfolio-layout="portfolio,details" @lazy-content="portfolio-layout-shown"
            name="portfolio-sidebar">
            <portfolio-sidebar-header name="portfolio-sidebar-header">
               <portfolio-path name="portfolio-path"></portfolio-path>
               <portfolio-toolbar name="portfolio-toolbar">
                  <portfolio-extract-selected-item-button
                     name="portfolio-extract-selected-item-button"></portfolio-extract-selected-item-button>
                  <portfolio-show-node-properties-button
                     name="portfolio-show-node-properties-button"></portfolio-show-node-properties-button>
               </portfolio-toolbar>
            </portfolio-sidebar-header>
            <portfolio-node-container name="portfolio-node-container">
               <div class="fv__ui-portfolio-node-tree">
                  <portfolio-details-header @portfolio-layout="details" @sync.columns="tree.columns"
                     name="portfolio-details-header"></portfolio-details-header>
                  <portfolio-node-list name="portfolio-node-list">
                     <portfolio-node
                     @foreach.cached="fileNode in tree.fileNodes track by handle"
                     @sync.display="tree.display"
                     @sync.data="fileNode"
                     @sync.columns="tree.columns"
                     @contextmenu="fv--portfolio-file-item-contextmenu"
                     name="portfolio-node"
                     ></portfolio-node>
                  </portfolio-node-list>
               </div>
            </portfolio-node-container>
         </portfolio-sidebar>
         <div name="fv--portfolio-previewer-container" class="fv__ui-portfolio-previewer-container">
            <!-- previewers -->
            <distance:ruler-container name="pdf-viewer-container-with-ruler" @portfolio-cover-sheet>
               <slot>
                  <viewer
                  @zoom-on-pinch
                  @zoom-on-doubletap
                  @zoom-on-wheel
                  @touch-to-scroll
                  @alt.main=":::css('.fv__pdf-viewer-container')"
                  ></viewer>
               </slot>
            </distance:ruler-container>
            <portfolio-previewer-group @portfolio-layout="portfolio,details"
               @lazy-content="portfolio-layout-shown">
               <portfolio-nochoose-previewer></portfolio-nochoose-previewer>
               <portfolio-unsupported-previewer></portfolio-unsupported-previewer>
               <portfolio-pdf-previewer></portfolio-pdf-previewer>
               <portfolio-video-previewer></portfolio-video-previewer>
               <portfolio-audio-previewer></portfolio-audio-previewer>
               <portfolio-image-previewer></portfolio-image-previewer>
               <portfolio-plain-text-previewer></portfolio-plain-text-previewer>
            </portfolio-previewer-group>
            <portfolio-loading-layer></portfolio-loading-layer>
         </div>
      </portfolio-container>
      <sidebar-right open min-width="300" max-width="360" name="sidebar-right" @lazy-content="shown">
         <sidebar-tabs name="sidebar-right-tabs">
            <sidebar-tab-panel name="edit-properties-panel" tab-title="editProperties.tab.format">
               <edit-properties:edit-properties name="edit-properties"></edit-properties:edit-properties>
            </sidebar-tab-panel>
            <sidebar-tab-panel name="right-search-panel" tab-title="editProperties.tab.search">
               <search:advanced-search name="advanced-search"></search:advanced-search>
            </sidebar-tab-panel>
         </sidebar-tabs>
      </sidebar-right>
   </div>
   <template name="template-container">
      <create-stamp-dialog @lazy></create-stamp-dialog>
      <page-template:page-template-dialog @lazy></page-template:page-template-dialog>
      <loupe-tool-dialog @lazy></loupe-tool-dialog>
      <distance:measurement-popup @lazy></distance:measurement-popup>
      <redaction:redaction-page-dialog @hide-on-sr @lazy></redaction:redaction-page-dialog>
      <!-- contextmenus -->
      <page-contextmenu>
         <contextmenu-item name="save-view">
            contextmenu.bookmark.add
         </contextmenu-item>
      </page-contextmenu>
      <default-annot-contextmenu @lazy></default-annot-contextmenu>
      <markup-contextmenu @lazy></markup-contextmenu>
      <markup-contextmenu @lazy name="fv--line-contextmenu"></markup-contextmenu>
      <markup-contextmenu @lazy name="fv--linearrow-contextmenu"></markup-contextmenu>
      <markup-contextmenu @lazy name="fv--linedimension-contextmenu"></markup-contextmenu>
      <markup-contextmenu @lazy name="fv--polylinedimention-contextmenu"></markup-contextmenu>
      <markup-contextmenu @lazy name="fv--polygondimension-contextmenu"></markup-contextmenu>
      <markup-contextmenu @lazy name="fv--circle-contextmenu"></markup-contextmenu>
      <markup-contextmenu @lazy name="fv--square-contextmenu"></markup-contextmenu>
      <markup-contextmenu @lazy name="fv--polyline-contextmenu"></markup-contextmenu>
      <markup-contextmenu @lazy name="fv--polygon-contextmenu"></markup-contextmenu>
      <markup-contextmenu @lazy name="fv--polygoncloud-contextmenu"></markup-contextmenu>
      <markup-contextmenu @lazy name="fv--ink-contextmenu"></markup-contextmenu>
      <markup-contextmenu @lazy name="fv--stamp-contextmenu"></markup-contextmenu>
      <markup-contextmenu @lazy name="fv--text-contextmenu"></markup-contextmenu>
      <caret-contextmenu name="fv--areahighlight-contextmenu" @lazy></caret-contextmenu>
      <caret-contextmenu name="fv--replace-contextmenu" @lazy></caret-contextmenu>
      <measurement-contextmenu @lazy></measurement-contextmenu>
      <caret-contextmenu name="fv--caret-contextmenu"></caret-contextmenu>
      <textmarkup-contextmenu @lazy name="fv--highlight-contextmenu"></textmarkup-contextmenu>
      <textmarkup-contextmenu @lazy name="fv--strikeout-contextmenu"></textmarkup-contextmenu>
      <textmarkup-contextmenu @lazy name="fv--underline-contextmenu"></textmarkup-contextmenu>
      <textmarkup-contextmenu @lazy name="fv--squiggly-contextmenu"></textmarkup-contextmenu>
      <freetext-contextmenu @lazy name="fv--typewriter-contextmenu"></freetext-contextmenu>
      <freetext-contextmenu @lazy name="fv--callout-contextmenu"></freetext-contextmenu>
      <freetext-contextmenu @lazy name="fv--textbox-contextmenu"></freetext-contextmenu>
      <action-annot-contextmenu @lazy name="fv--image-contextmenu"></action-annot-contextmenu>
      <action-annot-contextmenu @lazy name="fv--link-contextmenu"></action-annot-contextmenu>
      <comment-card-contextmenu @lazy></comment-card-contextmenu>
      <fileattachment-contextmenu @lazy></fileattachment-contextmenu>
      <media-contextmenu @lazy></media-contextmenu>
      <sound-contextmenu @lazy></sound-contextmenu>
      <redact-contextmenu @lazy></redact-contextmenu>
      <edit-graphics:image-contextmenu @lazy></edit-graphics:image-contextmenu>
      <edit-pageobjects:path-contextmenu @lazy></edit-pageobjects:path-contextmenu>
      <text-sel:text-selection-tooltip @lazy></text-sel:text-selection-tooltip>
      <annottext name="fv--annottext-tooltip" @lazy></annottext>
      <!-- Field panel contextmenu -->
      <field-contextmenu @lazy></field-contextmenu>
      <comment-list:filter-dialog name="fv--commentlist-filter-comment-dialog"></comment-list:filter-dialog>
      <selected-text-contextmenu @lazy></selected-text-contextmenu>
      <selected-image-contextmenu @lazy></selected-image-contextmenu>
      <selected-rectangle-contextmenu @lazy></selected-rectangle-contextmenu>
      <search:basic-search-options name="fv--search-basic-options"></search:basic-search-options>
      <search:choose-search-type name="fv--search-choose-search-type"></search:choose-search-type>
      <portfolio-node-properties-dialog @lazy></portfolio-node-properties-dialog>
      <portfolio-node-contextmenu name="fv--portfolio-file-item-contextmenu" @lazy>
         <portfolio-extract-node-contextmenu-item
            name="fv--portfolio-extract-node-contextmenu-item"></portfolio-extract-node-contextmenu-item>
         <portfolio-show-selected-node-information-contextmenu-item
            name="fv--portfolio-show-selected-node-information-contextmenu-item"></portfolio-show-selected-node-information-contextmenu-item>
      </portfolio-node-contextmenu>
      <bookmark-contextmenu @lazy></bookmark-contextmenu>
      <thumbnail:thumbnail-contextmenu name="fv--thumbnail-contextmenu" @lazy></thumbnail:thumbnail-contextmenu>
      <edit-graphics:graphic-object-properties-dialog name="fv--graphics-object-properties-dialog"
         @lazy></edit-graphics:graphic-object-properties-dialog>
      <custom-dynamic-stamp:create-custom-dynamic-stamp-dialog name="fv--custom-dynamic-stamp-dialog"
         @lazy></custom-dynamic-stamp:create-custom-dynamic-stamp-dialog>
   </template>
</webpdf>`;
