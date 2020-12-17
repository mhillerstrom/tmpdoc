(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{410:function(t,e,s){"use strict";s.r(e);var a=s(43),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"offline-first"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#offline-first"}},[t._v("#")]),t._v(" Offline-first")]),t._v(" "),s("p",[t._v("Right - we have a real-time application running, but how do we get our application to be offline-first? Well, it is very simple - in fact so simple it ought to be illegal!")]),t._v(" "),s("p",[t._v("First we have to import the necessary wrappers; one for the client and one for the server.")]),t._v(" "),s("tabs",{attrs:{options:{useUrlFragment:!1}}},[s("tab",{attrs:{name:"JavaScript"}},[s("p",[t._v("We need to add a couple of lines to "),s("code",[t._v("app/app.js")]),t._v(". First we show how to use the "),s("code",[t._v("own-data")]),t._v(" wrapper:")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("div",{staticClass:"highlight-lines"},[s("br"),s("div",{staticClass:"highlighted"},[t._v(" ")]),s("br"),s("br"),s("div",{staticClass:"highlighted"},[t._v(" ")]),s("br")]),s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" owndataWrapper "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@feathersjs-offline/owndata'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\napp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'messages'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("owndataWrapper")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'messages'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Wrap the service; use the own-data principle")]),t._v("\n")])])]),s("p",[t._v("Next, this is how you use the "),s("code",[t._v("own-net")]),t._v(" wrapper:")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("div",{staticClass:"highlight-lines"},[s("br"),s("div",{staticClass:"highlighted"},[t._v(" ")]),s("br"),s("br"),s("div",{staticClass:"highlighted"},[t._v(" ")]),s("br")]),s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" ownnetWrapper "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@feathersjs-offline/ownnet'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\napp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'messages'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ownnetWrapper")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'messages'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Wrap the service; use the own-net principle")]),t._v("\n")])])]),s("p",[t._v("Here is a couple of links to help you choose between "),s("a",{attrs:{href:"#come-on-it-can-t-be-that-simple"}},[t._v("own-data")]),t._v(" and "),s("a",{attrs:{href:"#come-on-it-can-t-be-that-simple"}},[t._v("own-net")]),t._v(".")])]),t._v(" "),s("tab",{attrs:{name:"TypeScript"}},[s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Sadly, the TypeScript version is not complete yet.")]),t._v("\n")])])])])],1),t._v(" "),s("p",[t._v("For the server we do this")]),t._v(" "),s("tabs",{attrs:{options:{useUrlFragment:!1}}},[s("tab",{attrs:{name:"JavaScript"}},[s("div",{staticClass:"language-js extra-class"},[s("div",{staticClass:"highlight-lines"},[s("br"),s("div",{staticClass:"highlighted"},[t._v(" ")]),s("br"),s("br"),s("br"),s("br"),s("br"),s("div",{staticClass:"highlighted"},[t._v(" ")]),s("br")]),s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" realtimeWrapper "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@feathersjs-offline/server'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// app.use('messages', Messages());")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Wrap the service; supports both own-data/own-net principles")]),t._v("\napp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'messages'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Messages")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("realtimeWrapper")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'messages'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])]),t._v(" "),s("tab",{attrs:{name:"TypeScript"}},[s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Sadly, the TypeScript version is not complete yet.")]),t._v("\n")])])])])],1),t._v(" "),s("p",[t._v("Now restart the server and refresh the client in the browser and that's it! From now on, all activity on the "),s("code",[t._v("messages")]),t._v(" service on the client will be handled in a client-first server-later (possibly very shortly after) manner. What's more, whenever the client has a valid connection to the server it will synchronize all changes made on the "),s("code",[t._v("message")]),t._v(" service while offline - regardless of the origin of the changes.")]),t._v(" "),s("p",[t._v("Synchronization is done in a "),s("code",[t._v("newest change wins")]),t._v(" manner. Changing the "),s("em",[t._v("same")]),t._v(" (same "),s("code",[t._v("uuid")]),t._v(") item on three different offline devices makes the latest change> eventually become the winner.")]),t._v(" "),s("p",[t._v("Items removed from the server cannot be revived (this is because we make a '"),s("em",[t._v("soft-delete")]),t._v("' on the server to be able to ensure synchronization can be successful at all times).")]),t._v(" "),s("blockquote",[s("p",[s("strong",[t._v("Note:")]),t._v(" For this to work you must ensure the service implements the date fields "),s("code",[t._v("updatedAt")]),t._v(", "),s("code",[t._v("onServerAt")]),t._v(", and the id field "),s("code",[t._v("uuid")]),t._v(". The wrapper will do all handling of the fields behind the scenes. (The "),s("code",[t._v("uuid")]),t._v(" do not "),s("em",[t._v("have")]),t._v(" to be the id field but it is considered good practice).")]),t._v(" "),s("p",[t._v("For MongoDB you do not have to worry, but for schema-centric DBs you have to ensure your schema include these fields.")])]),t._v(" "),s("blockquote",[s("p",[s("strong",[t._v("Note:")]),t._v(" If you want to know more about "),s("em",[t._v("how")]),t._v(" the wrappers work read "),s("RouterLink",{attrs:{to:"/guides/basics/implementation.html"}},[t._v("own-data/own-net implementation")]),t._v(".")],1)]),t._v(" "),s("h1",{attrs:{id:"come-on-it-can-t-be-that-simple"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#come-on-it-can-t-be-that-simple"}},[t._v("#")]),t._v(" Come-on, it can't be that simple!")]),t._v(" "),s("p",[t._v("Well, it almost is due to Feathers clever adapter implementation. All CRUD service adapters, that are able to pass the adapterTests, should be able work seamlessly with the realtime wrappers. But, you have to choose the wrapper to use based on your needs:")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("My need")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("own-data")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("own-net")]),t._v(" "),s("th",[t._v("Comment")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("Keep my data in sync")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("(✔️)")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("✔️")]),t._v(" "),s("td",[t._v("own-net is less chatty")])]),t._v(" "),s("tr",[s("td",[t._v("Every operation should be available to hooks")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("✔️")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("❌")]),t._v(" "),s("td",[t._v("the only choice")])]),t._v(" "),s("tr",[s("td",[t._v("Only accumulated operations needed for hooks")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("❌")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("✔️")]),t._v(" "),s("td",[t._v("own-net is less chatty")])])])]),t._v(" "),s("p",[t._v("Furthermore, you need to decide how frequent you want the automatic synchronization to be performed (default is every 24 hours).")]),t._v(" "),s("p",[t._v("Last, you might consider, if your application needs to synchronize outside the automatic synchronization and if that's the case you have to make sure you activate the method (with the right options, see "),s("RouterLink",{attrs:{to:"/api/offline-api.html"}},[t._v("FeathersJS Offline-first API")]),t._v(").")],1),t._v(" "),s("blockquote",[s("p",[s("strong",[t._v("Note:")]),t._v(" The realtime wrappers are meant to be used as wrappers for database adapters and will therefore not accept "),s("code",[t._v("app.service(<path>).update(id, ...)")]),t._v(" with "),s("code",[t._v("id === null")]),t._v(". You have to use "),s("code",[t._v("patch")]),t._v(" to alter several documents at the same time.")])]),t._v(" "),s("blockquote",[s("p",[s("strong",[t._v("Tip:")]),t._v(" You should use the "),s("code",[t._v("own-data")]),t._v(" / "),s("code",[t._v("own-net")]),t._v(" wrappers with some care, as they consume parts of the "),s("code",[t._v("localStorage")]),t._v(" which in browsers is not an unlimited resource pool...")])]),t._v(" "),s("h1",{attrs:{id:"what-s-next"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#what-s-next"}},[t._v("#")]),t._v(" What's next?")]),t._v(" "),s("p",[t._v("In the final chapter, we'll look at "),s("RouterLink",{attrs:{to:"/guides/basics/testing.html"}},[t._v("how to write automated tests for our API")]),t._v(". Alternatively, you can digress a read about how Feathers Offline-first has been "),s("RouterLink",{attrs:{to:"/guides/basics/implementation.html"}},[t._v("implemented")]),t._v(".")],1)],1)}),[],!1,null,null,null);e.default=n.exports}}]);