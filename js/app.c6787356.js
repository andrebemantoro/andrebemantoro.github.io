(function(e){function t(t){for(var i,s,o=t[0],c=t[1],d=t[2],m=0,v=[];m<o.length;m++)s=o[m],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&v.push(r[s][0]),r[s]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(e[i]=c[i]);l&&l(t);while(v.length)v.shift()();return n.push.apply(n,d||[]),a()}function a(){for(var e,t=0;t<n.length;t++){for(var a=n[t],i=!0,o=1;o<a.length;o++){var c=a[o];0!==r[c]&&(i=!1)}i&&(n.splice(t--,1),e=s(s.s=a[0]))}return e}var i={},r={app:0},n=[];function s(t){if(i[t])return i[t].exports;var a=i[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=e,s.c=i,s.d=function(e,t,a){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)s.d(a,i,function(t){return e[t]}.bind(null,i));return a},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var d=0;d<o.length;d++)t(o[d]);var l=c;n.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var i=a("2b0e"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",{attrs:{id:"inspire"}},[a("v-navigation-drawer",{attrs:{app:"",color:"primary"},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[a("v-list",{attrs:{dense:""}},[a("v-list-item",{attrs:{router:"",to:"/makanan"}},[a("v-list-item-action",[a("v-icon",[e._v("mdi-home")])],1),a("v-list-item-content",[a("v-list-item-title",[e._v("CRUD Makanan")])],1)],1),a("v-list-item",{attrs:{router:"",to:"/minuman"}},[a("v-list-item-action",[a("v-icon",[e._v("mdi-pencil")])],1),a("v-list-item-content",[a("v-list-item-title",[e._v("CRUD Minuman")])],1)],1)],1)],1),a("v-app-bar",{attrs:{app:""}},[a("v-app-bar-nav-icon",{on:{click:function(t){t.stopPropagation(),e.drawer=!e.drawer}}}),a("v-toolbar-title",[e._v("Application")])],1),a("v-content",[a("router-view")],1)],1)},n=[],s={data:function(){return{drawer:null}}},o=s,c=a("2877"),d=a("6544"),l=a.n(d),m=a("7496"),v=a("40dc"),u=a("5bc1"),f=a("a75b"),p=a("132d"),b=a("8860"),h=a("da13"),I=a("1800"),x=a("5d23"),g=a("f774"),k=a("2a7f"),_=Object(c["a"])(o,r,n,!1,null,null,null),w=_.exports;l()(_,{VApp:m["a"],VAppBar:v["a"],VAppBarNavIcon:u["a"],VContent:f["a"],VIcon:p["a"],VList:b["a"],VListItem:h["a"],VListItemAction:I["a"],VListItemContent:x["a"],VListItemTitle:x["b"],VNavigationDrawer:g["a"],VToolbarTitle:k["a"]});var y=a("9483");Object(y["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var V=a("0ff2"),C=a("8c4f"),T=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",[a("v-card",[a("v-container",{attrs:{"grid-list-md":"","mb-0":""}},[a("h2",{staticClass:"text-md-center"},[e._v("Data Dessert")]),a("v-layout",{staticStyle:{margin:"10px"},attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs6:""}},[a("v-btn",{staticStyle:{"text-transform":"none !important"},attrs:{depressed:"",dark:"",rounded:"",color:"green accent-3"},on:{click:function(t){e.dialog=!0}}},[a("v-icon",{staticClass:"mr-2",attrs:{size:"18"}},[e._v("mdi-pencil-plus")]),e._v(" Tambah Dessert ")],1)],1)],1),a("v-row",{attrs:{dense:""}},e._l(e.desserts,(function(t){return a("v-col",{key:t.id,attrs:{cols:4}},[a("v-card",[a("v-card-title",[e._v(e._s(t.name))]),a("v-card-text",{staticClass:"text--primary"},[a("div",[e._v("Carbs :"+e._s(t.carbs))]),a("div",[e._v(" Calories :"+e._s(t.calories))]),a("div",[e._v("Fat :"+e._s(t.fat))]),a("div",[e._v("Protein :"+e._s(t.protein))])]),a("v-card-actions",[a("v-btn",{staticClass:"mx-0",attrs:{icon:""},on:{click:function(a){return e.editItem(t)}}},[a("v-icon",{attrs:{color:"green"}},[e._v("mdi-silverware")])],1),a("v-btn",{staticClass:"mx-0",attrs:{icon:""},on:{click:function(a){return e.deleteItem(t)}}},[a("v-icon",{attrs:{color:"red"}},[e._v("mdi-delete")])],1)],1)],1)],1)})),1)],1)],1),a("v-dialog",{attrs:{"max-width":"500px"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[a("v-card",[a("v-card-title",[a("span",{staticClass:"headline"},[e._v(e._s(e.formTitle))])]),a("v-card-text",[a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("v-text-field",{attrs:{label:"Dessert name"},model:{value:e.editedItem.name,callback:function(t){e.$set(e.editedItem,"name",t)},expression:"editedItem.name"}})],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("v-text-field",{attrs:{label:"Calories"},model:{value:e.editedItem.calories,callback:function(t){e.$set(e.editedItem,"calories",t)},expression:"editedItem.calories"}})],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("v-text-field",{attrs:{label:"Fat (g)"},model:{value:e.editedItem.fat,callback:function(t){e.$set(e.editedItem,"fat",t)},expression:"editedItem.fat"}})],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("v-text-field",{attrs:{label:"Carbs (g)"},model:{value:e.editedItem.carbs,callback:function(t){e.$set(e.editedItem,"carbs",t)},expression:"editedItem.carbs"}})],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("v-text-field",{attrs:{label:"Protein (g)"},model:{value:e.editedItem.protein,callback:function(t){e.$set(e.editedItem,"protein",t)},expression:"editedItem.protein"}})],1)],1)],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.close}},[e._v("Cancel")]),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.save}},[e._v("Save")])],1)],1)],1)],1)},j=[],O=(a("b0c0"),a("59ca")),S=a.n(O),$=(a("66ce"),S.a.initializeApp({databaseURL:"https://vueandfirebase-7a58c.firebaseio.com"}).database()),A=$.ref("desserts"),D=$.ref("drinks"),P={data:function(){return{cek:-1,dialog:!1,desserts:[],editedIndex:-1,editedItem:{name:"",calories:0,fat:0,carbs:0,protein:0},defaultItem:{name:"",calories:0,fat:0,carbs:0,protein:0}}},firebase:{desserts:A},computed:{formTitle:function(){return-1===this.cek?"New Item":"Edit Item"}},watch:{dialog:function(e){e||this.close()}},methods:{close:function(){this.dialog=!1},save:function(){this.cek>-1?(A.child(this.editedIndex).set({name:this.editedItem.name,calories:this.editedItem.calories,fat:this.editedItem.fat,carbs:this.editedItem.carbs,protein:this.editedItem.protein}),this.clear()):(A.push({name:this.editedItem.name,calories:this.editedItem.calories,fat:this.editedItem.fat,carbs:this.editedItem.carbs,protein:this.editedItem.protein}),this.clear()),this.close()},clear:function(){this.editedItem={},this.editedItem.name="",this.editedItem.calories=0,this.editedItem.fat=0,this.editedItem.carbs=0,this.editedItem.protein=0,this.cek=-1},editItem:function(e){this.editedIndex=e[".key"],this.cek=0,this.editedItem=Object.assign({},e),this.dialog=!0},deleteItem:function(e){confirm("Are you sure you want to delete this item?")&&A.child(e[".key"]).remove()}}},F=P,L=a("8336"),M=a("b0af"),N=a("99d9"),E=a("62ad"),B=a("a523"),R=a("169a"),z=a("0e8f"),U=a("a722"),J=a("0fd9"),q=a("2fa4"),H=a("8654"),G=Object(c["a"])(F,T,j,!1,null,null,null),K=G.exports;l()(G,{VBtn:L["a"],VCard:M["a"],VCardActions:N["a"],VCardText:N["b"],VCardTitle:N["c"],VCol:E["a"],VContainer:B["a"],VDialog:R["a"],VFlex:z["a"],VIcon:p["a"],VLayout:U["a"],VRow:J["a"],VSpacer:q["a"],VTextField:H["a"]});var Q=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",[a("v-card",[a("v-container",{attrs:{"grid-list-md":"","mb-0":""}},[a("h2",{staticClass:"text-md-center"},[e._v("Data Drinks")]),a("v-layout",{staticStyle:{margin:"10px"},attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs6:""}},[a("v-btn",{staticStyle:{"text-transform":"none !important"},attrs:{depressed:"",dark:"",rounded:"",color:"green accent-3"},on:{click:function(t){e.dialog=!0}}},[a("v-icon",{staticClass:"mr-2",attrs:{size:"18"}},[e._v("mdi-pencil-plus")]),e._v(" Tambah Minuman ")],1)],1)],1),a("v-row",{attrs:{dense:""}},e._l(e.drinks,(function(t){return a("v-col",{key:t.id,attrs:{cols:4}},[a("v-card",[a("v-card-title",[e._v(e._s(t.name))]),a("v-card-text",{staticClass:"text--primary"},[a("div",[e._v("Carbs :"+e._s(t.carbs))]),a("div",[e._v(" Type :"+e._s(t.calories))]),a("div",[e._v("Fat :"+e._s(t.fat))]),a("div",[e._v("Protein :"+e._s(t.protein))])]),a("v-card-actions",[a("v-btn",{staticClass:"mx-0",attrs:{icon:""},on:{click:function(a){return e.editItem(t)}}},[a("v-icon",{attrs:{color:"green"}},[e._v("mdi-silverware")])],1),a("v-btn",{staticClass:"mx-0",attrs:{icon:""},on:{click:function(a){return e.deleteItem(t)}}},[a("v-icon",{attrs:{color:"red"}},[e._v("mdi-delete")])],1)],1)],1)],1)})),1)],1)],1),a("v-dialog",{attrs:{"max-width":"500px"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[a("v-card",[a("v-card-title",[a("span",{staticClass:"headline"},[e._v(e._s(e.formTitle))])]),a("v-card-text",[a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("v-text-field",{attrs:{label:"Drink name"},model:{value:e.editedItem.name,callback:function(t){e.$set(e.editedItem,"name",t)},expression:"editedItem.name"}})],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("v-select",{attrs:{items:e.jenis,label:"kategori"},model:{value:e.editedItem.calories,callback:function(t){e.$set(e.editedItem,"calories",t)},expression:"editedItem.calories"}})],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("v-text-field",{attrs:{label:"Fat (g)"},model:{value:e.editedItem.fat,callback:function(t){e.$set(e.editedItem,"fat",t)},expression:"editedItem.fat"}})],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("v-text-field",{attrs:{label:"Carbs (g)"},model:{value:e.editedItem.carbs,callback:function(t){e.$set(e.editedItem,"carbs",t)},expression:"editedItem.carbs"}})],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("v-text-field",{attrs:{label:"Protein (g)"},model:{value:e.editedItem.protein,callback:function(t){e.$set(e.editedItem,"protein",t)},expression:"editedItem.protein"}})],1)],1)],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.close}},[e._v("Cancel")]),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.save}},[e._v("Save")])],1)],1)],1)],1)},W=[],X={data:function(){return{cek:-1,dialog:!1,drinks:[],editedIndex:-1,jenis:["Ice","Hot"],editedItem:{name:"",calories:0,fat:0,carbs:0,protein:0},defaultItem:{name:"",calories:0,fat:0,carbs:0,protein:0}}},firebase:{drinks:D},computed:{formTitle:function(){return-1===this.cek?"New Item":"Edit Item"}},watch:{dialog:function(e){e||this.close()}},methods:{close:function(){this.dialog=!1},save:function(){this.cek>-1?(D.child(this.editedIndex).set({name:this.editedItem.name,calories:this.editedItem.calories,fat:this.editedItem.fat,carbs:this.editedItem.carbs,protein:this.editedItem.protein}),this.clear()):(D.push({name:this.editedItem.name,calories:this.editedItem.calories,fat:this.editedItem.fat,carbs:this.editedItem.carbs,protein:this.editedItem.protein}),this.clear()),this.close()},clear:function(){this.editedItem={},this.editedItem.name="",this.editedItem.calories=0,this.editedItem.fat=0,this.editedItem.carbs=0,this.editedItem.protein=0,this.cek=-1},editItem:function(e){this.editedIndex=e[".key"],this.cek=0,this.editedItem=Object.assign({},e),this.dialog=!0},deleteItem:function(e){confirm("Are you sure you want to delete this item?")&&D.child(e[".key"]).remove()}}},Y=X,Z=a("b974"),ee=Object(c["a"])(Y,Q,W,!1,null,null,null),te=ee.exports;l()(ee,{VBtn:L["a"],VCard:M["a"],VCardActions:N["a"],VCardText:N["b"],VCardTitle:N["c"],VCol:E["a"],VContainer:B["a"],VDialog:R["a"],VFlex:z["a"],VIcon:p["a"],VLayout:U["a"],VRow:J["a"],VSelect:Z["a"],VSpacer:q["a"],VTextField:H["a"]}),i["a"].use(C["a"]);var ae=[{path:"/makanan",name:"makanan",component:K},{path:"/minuman",name:"minuman",component:te}],ie=new C["a"]({mode:"history",base:"/",routes:ae}),re=ie,ne=a("f309");i["a"].use(ne["a"]);var se=new ne["a"]({theme:{dark:!0}});i["a"].use(V["a"]),i["a"].config.productionTip=!1,new i["a"]({router:re,vuetify:se,render:function(e){return e(w)}}).$mount("#app")}});
//# sourceMappingURL=app.c6787356.js.map