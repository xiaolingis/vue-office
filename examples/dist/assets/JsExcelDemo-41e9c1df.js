var c=Object.defineProperty;var p=(o,e,t)=>e in o?c(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t;var s=(o,e,t)=>(p(o,typeof e!="symbol"?e+"":e,t),t);import{S as u,a as h,b as d,t as w,c as l,l as f,r as m,g as x}from"./hack-f15ef821.js";import{d as b}from"./url-de9b02cf.js";/* empty css              */import{r as v,o as D,a as k,c as S}from"./index-191bc898.js";import"./_commonjs-dynamic-modules-302442b1.js";const _={minColLength:20};class E{constructor(e,t={},r={}){s(this,"container",null);s(this,"wrapper",null);s(this,"wrapperMain",null);s(this,"options",{});s(this,"requestOptions",{});s(this,"mediasSource",[]);s(this,"workbookDataSource",{_worksheets:[]});s(this,"sheetIndex",1);s(this,"ctx",null);s(this,"xs",null);s(this,"offset",null);s(this,"observer",null);s(this,"fileData",null);this.container=e,this.options={..._,...t},this.requestOptions=r,this.createWrapper(),this.initSpreadsheet(),this.hack()}createWrapper(){this.wrapper=document.createElement("div"),this.wrapper.className="vue-office-excel",this.wrapperMain=document.createElement("div"),this.wrapperMain.className="vue-office-excel-main",this.wrapper.appendChild(this.wrapperMain),this.container.appendChild(this.wrapper)}initSpreadsheet(){this.xs=new u(this.wrapperMain,{mode:"read",showToolbar:!1,showContextmenu:this.options.showContextmenu||!1,view:{height:()=>this.wrapper&&this.wrapper.clientHeight||300,width:()=>this.wrapper&&this.wrapper.clientWidth||1200},row:{height:24,len:100},col:{len:26,width:80,indexWidth:60,minWidth:60},autoFocus:!1}).loadData({});let e=this,t=this.xs.bottombar.swapFunc;this.xs.bottombar.swapFunc=function(a){t.call(e.xs.bottombar,a),e.sheetIndex=a,setTimeout(()=>{e.xs.reRender(),h(e.ctx,e.mediasSource,e.workbookDataSource._worksheets[e.sheetIndex],e.offset)})};let r=this.xs.sheet.editor.clear;this.xs.sheet.editor.clear=function(...a){r.apply(e.xs.sheet.editor,a),setTimeout(()=>{h(e.ctx,e.mediasSource,e.workbookDataSource._worksheets[e.sheetIndex],e.offset)})};let i=this.xs.sheet.editor.setOffset;this.xs.sheet.editor.setOffset=function(...a){i.apply(e.xs.sheet.editor,a),e.offset=a[0],h(e.ctx,e.mediasSource,e.workbookDataSource._worksheets[e.sheetIndex],e.offset)};const n=this.wrapperMain.querySelector("canvas");this.ctx=n.getContext("2d")}renderExcel(e){return this.fileData=e,d(e).then(t=>{if(!t._worksheets||t._worksheets.length===0)throw new Error("未获取到数据，可能文件格式不正确或文件已损坏");this.options.beforeTransformData&&typeof this.options.beforeTransformData=="function"&&(t=this.options.beforeTransformData(t));let{workbookData:r,medias:i,workbookSource:n}=w(t,this.options);this.options.transformData&&typeof this.options.transformData=="function"&&(r=this.options.transformData(r)),this.mediasSource=i,this.workbookDataSource=n,this.offset=null,this.sheetIndex=0,l(),this.xs.loadData(r),h(this.ctx,this.mediasSource,this.workbookDataSource._worksheets[this.sheetIndex],this.offset)}).catch(t=>(this.mediasSource=[],this.workbookDataSource={_worksheets:[]},l(),this.xs.loadData({}),Promise.reject(t)))}hack(){const e=f.debounce(m,200).bind(this,this.wrapperMain);this.observer=new MutationObserver(e);const t={attributes:!0,childList:!0,subtree:!0};this.observer.observe(this.wrapperMain,t),e(this.wrapperMain)}setOptions(e){this.options=e}setRequestOptions(e){this.requestOptions=e}preview(e){return new Promise((t,r)=>{x(e,this.requestOptions).then(i=>{this.renderExcel(i).then(t).catch(n=>{this.xs.loadData({}),r(n)})}).catch(i=>{this.mediasSource=[],this.workbookDataSource={_worksheets:[]},this.xs.loadData({}),r(i)})})}save(e){b(e||`js-preview-excel-${new Date().getTime()}.xlsx`,this.fileData)}destroy(){this.observer.disconnect(),this.container.removeChild(this.wrapper),this.container=null,this.wrapper=null,this.wrapperMain=null,this.ctx=null,this.xs=null,this.observer=null,this.options=null,this.requestOptions=null,this.mediasSource=null,this.workbookDataSource=null}}function g(o,e,t){return new E(o,e,t)}const O={init:g},P={__name:"JsExcelDemo",setup(o){const e=v(null);return D(()=>{window.myExcelPreview=O.init(e.value,{transformData:function(t){return console.log("transformData",t),t}}),window.myExcelPreview.preview("/vue-office/examples/dist/static/test-files/test.xlsx").then(t=>{console.log("excel preview done",window.myExcelPreview)}).catch(t=>{console.log("err",t)})}),(t,r)=>(k(),S("div",{ref_key:"dom",ref:e,style:{height:"calc(100vh - 50px)"}},null,512))}};export{P as default};
