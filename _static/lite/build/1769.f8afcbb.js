"use strict";(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[1769,514],{30514:(e,t,o)=>{o.r(t),o.d(t,{default:()=>F});var n=o(20005),r=o(64145),i=o(42150),a=o(3339),s=o(93994),l=o(91223),d=o(90646),c=o(14576),g=o(2159),u=o(2260),w=o(1428),h=o(52850),b=o.n(h);class p{constructor(e){this._onSelectionChanged=()=>{var e,t,o,n,r,i;const a=Array.from(this._browser.selectedItems()),s=a.length>0,l=a.some((e=>"directory"===e.type));null===(e=this._widgets.get("placeholder"))||void 0===e||e.setHidden(s),null===(t=this._widgets.get("delete"))||void 0===t||t.setHidden(!s),null===(o=this._widgets.get("duplicate"))||void 0===o||o.setHidden(!s||l),null===(n=this._widgets.get("download"))||void 0===n||n.setHidden(!s||l),null===(r=this._widgets.get("open"))||void 0===r||r.setHidden(!s||l),null===(i=this._widgets.get("rename"))||void 0===i||i.setHidden(1!==a.length)},this._widgets=new Map,this._browser=e.browser;const{commands:t,selectionChanged:o,translator:r}=e,i=r.load("notebook"),a=n.ReactWidget.create(b().createElement("div",{key:"placeholder"},i.__("Select items to perform actions on them.")));a.id="fileAction-placeholder",this._widgets.set("placeholder",a),["open","download","rename","duplicate","delete"].forEach((e=>{const o=n.ReactWidget.create(b().createElement(n.CommandToolbarButtonComponent,{key:e,commands:t,id:`filebrowser:${e}`,args:{toolbar:!0},icon:void 0}));o.id=`fileAction-${e}`,o.addClass("jp-ToolbarButton"),o.addClass("jp-FileAction"),this._widgets.set(e,o)})),o.connect(this._onSelectionChanged,this),this._onSelectionChanged()}get widgets(){return this._widgets.values()}}const m="FileBrowser";var f;!function(e){e.activate="filebrowser:activate"}(f||(f={}));const _={id:"@jupyter-notebook/tree-extension:new",description:"Plugin to add extra commands to the file browser to create new notebooks, files, consoles and terminals.",requires:[d.ITranslator],optional:[n.IToolbarWidgetRegistry],autoStart:!0,activate:(e,t,o)=>{var n;const{commands:r,serviceManager:i}=e,a=t.load("notebook"),s={overflowMenuOptions:{isVisible:!1}},l=new u.MenuBar(s),d=new u.Menu({commands:r});d.title.label=a.__("New"),d.title.icon=c.caretDownIcon,l.addMenu(d);const g=()=>{var e,t;const o=null===(t=null===(e=i.kernelspecs)||void 0===e?void 0:e.specs)||void 0===t?void 0:t.kernelspecs;for(const e in o)d.addItem({args:{kernelName:e,isLauncher:!0},command:"notebook:create-new"});["terminal:create-new","console:create","filebrowser:create-new-file","filebrowser:create-new-directory"].forEach((e=>{d.addItem({command:e})}))};null===(n=i.kernelspecs)||void 0===n||n.specsChanged.connect((()=>{d.clearItems(),g()})),g(),o&&o.addFactory(m,"new-dropdown",(e=>{const t=new u.MenuBar(s);return t.addMenu(d),t.addClass("jp-DropdownMenu"),t}))}},v={id:"@jupyter-notebook/tree-extension:file-actions",description:"A plugin to add file browser actions to the file browser toolbar.",autoStart:!0,requires:[i.IDefaultFileBrowser,n.IToolbarWidgetRegistry,d.ITranslator],activate:(e,t,o,n)=>{const r=new g.Signal(t);["_selectItem","_handleMultiSelect","handleFileSelect"].forEach((e=>{const o=t.listing[e];t.listing[e]=(...e)=>{o.call(t.listing,...e),r.emit(void 0)}}));const{commands:i}=e,a=new p({commands:i,browser:t,selectionChanged:r,translator:n});for(const e of a.widgets)o.addFactory(m,e.id,(()=>e))}},y={id:"@jupyter-notebook/tree-extension:load-plugins",description:"Plugin to load the default plugins that are loaded on all the Notebook pages (tree, edit, view, etc.) so they are visible in the settings editor.",autoStart:!0,requires:[a.ISettingRegistry],activate(e,t){const{isDisabled:o}=r.PageConfig.Extension,n=t.connector,i=r.PageConfig.getOption("allPlugins");if(!i)return;const a=JSON.parse(i),s=new Set;Object.keys(a).forEach((e=>{const t=a[e];Object.keys(t).forEach((e=>{const o=t[e];"boolean"==typeof o&&o?s.add(e):Array.isArray(o)&&o.forEach((e=>{s.add(e)}))}))})),e.restored.then((async()=>{(await n.list("all")).ids.forEach((async e=>{const[n]=e.split(":");if((s.has(n)||s.has(e))&&!o(e)&&!(e in t.plugins))try{await t.load(e)}catch(t){console.warn(`Settings failed to load for (${e})`,t)}}))}))}},k={id:"@jupyter-notebook/tree-extension:open-file-browser",description:"A plugin to add file browser commands for the tree view.",requires:[w.INotebookTree,i.IDefaultFileBrowser],autoStart:!0,activate:(e,t,o)=>{const{commands:n}=e;n.addCommand(f.activate,{execute:()=>{t.currentWidget=o}})}},S={id:"@jupyter-notebook/tree-extension:widget",description:"A plugin to add the file browser widget to an INotebookShell.",requires:[i.IDefaultFileBrowser,d.ITranslator,a.ISettingRegistry,n.IToolbarWidgetRegistry,i.IFileBrowserFactory],optional:[s.IRunningSessionManagers,l.ISettingEditorTracker,l.IJSONSettingEditorTracker],autoStart:!0,provides:w.INotebookTree,activate:(e,t,o,r,a,l,d,g,u)=>{const h=new w.NotebookTreeWidget,b=o.load("notebook");if(t.title.label=b.__("Files"),t.node.setAttribute("role","region"),t.node.setAttribute("aria-label",b.__("File Browser Section")),t.title.icon=c.folderIcon,h.addWidget(t),h.tabBar.addTab(t.title),h.tabsMovable=!1,a.addFactory(m,"uploader",(e=>new i.Uploader({model:e.model,translator:o,label:b.__("Upload")}))),a.addFactory(m,"fileNameSearcher",(e=>{const t=(0,c.FilenameSearcher)({updateFilter:(t,o)=>{e.model.setFilter((e=>t(e.name.toLowerCase())))},useFuzzyFilter:!0,placeholder:b.__("Filter files by name"),forceRefresh:!0});return t.addClass("jp-FileBrowser-filterBox"),t})),(0,n.setToolbar)(t,(0,n.createToolbarFactory)(a,r,m,S.id,o)),d){const e=new s.RunningSessions(d,o);e.id="jp-running-sessions-tree",e.title.label=b.__("Running"),e.title.icon=c.runningIcon,h.addWidget(e),h.tabBar.addTab(e.title)}const p=r.load("@jupyterlab/filebrowser-extension:browser");Promise.all([p,e.restored]).then((([e])=>{["showFileCheckboxes","showFileSizeColumn","sortNotebooksFirst","showFullPath"].forEach((t=>{void 0===e.user[t]&&e.set(t,!0)}))})).catch((e=>{console.error(e.message)})),e.shell.add(h,"main",{rank:100}),[g,u].forEach((e=>{e&&e.widgetAdded.connect(((e,t)=>{h.addWidget(t),h.tabBar.addTab(t.title),h.currentWidget=t}))}));const{tracker:f}=l,_=()=>{f._pool.current=t};return f.widgetAdded.connect(((e,t)=>_())),_(),h}},F=[_,v,y,k,S]}}]);
//# sourceMappingURL=1769.f8afcbb.js.map