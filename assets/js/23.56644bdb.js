(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{416:function(t,a,e){"use strict";e.r(a);var s=e(43),n=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"client"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#client"}},[t._v("#")]),t._v(" Client")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://www.npmjs.com/package/@feathersjs/authentication-client",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://img.shields.io/npm/v/@feathersjs/authentication-client.svg?style=flat-square",alt:"npm version"}}),e("OutboundLink")],1),t._v(" "),e("a",{attrs:{href:"https://github.com/feathersjs/feathers/blob/crow/packages/authentication-client/CHANGELOG.md",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://img.shields.io/badge/changelog-.md-blue.svg?style=flat-square",alt:"Changelog"}}),e("OutboundLink")],1)]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("npm install @feathersjs/authentication-client --save\n")])])]),e("p",[t._v("The "),e("code",[t._v("@feathersjs/authentication-client")]),t._v(" module allows you to easily authenticate against a Feathers server. It is not required, but makes it easier to implement authentication in your client by automatically storing and sending the access token and handling re-authenticating when a websocket disconnects.")]),t._v(" "),e("h2",{attrs:{id:"configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#configuration"}},[t._v("#")]),t._v(" Configuration")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("storage")]),t._v(" (default: "),e("code",[t._v("localStorage")]),t._v(" if available, "),e("code",[t._v("MemoryStorage")]),t._v(" otherwise) - The storage to store the access token. For React Native use "),e("a",{attrs:{href:"https://github.com/react-native-community/async-storage",target:"_blank",rel:"noopener noreferrer"}},[t._v("async-storage"),e("OutboundLink")],1),t._v(".")]),t._v(" "),e("li",[e("code",[t._v("path")]),t._v(" (default: '/authentication') - The path of the authentication service")]),t._v(" "),e("li",[e("code",[t._v("locationKey")]),t._v(" (default: "),e("code",[t._v("'access_token'")]),t._v(") - The name of the window hash parameter to parse for an access token from the "),e("code",[t._v("window.location")]),t._v(". Usually used by the OAuth flow.")]),t._v(" "),e("li",[e("code",[t._v("locationErrorKey")]),t._v(" (default: `'error') - The name of the window hash parameter to parse for authentication errors. Usually used by the OAuth flow.")]),t._v(" "),e("li",[e("code",[t._v("jwtStrategy")]),t._v(" (default: "),e("code",[t._v("'jwt'")]),t._v(") - The access token authentication strategy")]),t._v(" "),e("li",[e("code",[t._v("storageKey")]),t._v(" (default: "),e("code",[t._v("'feathers-jwt'")]),t._v(") - Key for storing the token in e.g. localStorage")]),t._v(" "),e("li",[e("code",[t._v("header")]),t._v(" (default: "),e("code",[t._v("'Authorization'")]),t._v(") - Name of the accessToken header")]),t._v(" "),e("li",[e("code",[t._v("scheme")]),t._v(" (default: "),e("code",[t._v("'Bearer'")]),t._v(") - The HTTP header scheme")]),t._v(" "),e("li",[t._v("Authentication (default: "),e("code",[t._v("AuthenticationClient")]),t._v(") - Allows to provide a "),e("a",{attrs:{href:"#customization"}},[t._v("customized authentication client class")])])]),t._v(" "),e("h2",{attrs:{id:"setup"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#setup"}},[t._v("#")]),t._v(" Setup")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" feathers "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@feathersjs/feathers'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" socketio "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@feathersjs/socketio-client'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" io "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'socket.io-client'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" auth "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@feathersjs/authentication-client'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" socket "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("io")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://api.feathersjs.com'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" app "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("feathers")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Setup the transport (Rest, Socket, etc.) here")]),t._v("\napp"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("configure")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("socketio")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("socket"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// Available options are listed in the "Options" section')]),t._v("\napp"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("configure")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("auth")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  storageKey"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'auth'")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("blockquote",[e("p",[e("strong",[t._v("Note:")]),t._v(" Verifying or parsing the token on the client usually isn't necessary since the server does that on JWT authentication and returns with the token information but it can still be done manually with the "),e("a",{attrs:{href:"https://www.npmjs.com/package/jwt-decode",target:"_blank",rel:"noopener noreferrer"}},[t._v("jwt-decode"),e("OutboundLink")],1),t._v(" package.")])]),t._v(" "),e("h2",{attrs:{id:"app-reauthenticate"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#app-reauthenticate"}},[t._v("#")]),t._v(" app.reAuthenticate()")]),t._v(" "),e("p",[e("code",[t._v("app.reAuthenticate() -> Promise")]),t._v(" will try to authenticate using the access token from the storage or the window location (e.g. after a successful "),e("RouterLink",{attrs:{to:"/api/authentication/oauth.html"}},[t._v("OAuth")]),t._v(" login). This is normally called to either show your application (when successful) or showing a login page or redirecting to the appropriate OAuth link.")],1),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("app"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("reAuthenticate")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// show application page")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("catch")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// show login page")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("blockquote",[e("p",[e("strong",[t._v("Important:")]),t._v(" "),e("code",[t._v("app.reAuthenticate()")]),t._v(" has to be called when you want to use the token from storage. "),e("strong",[t._v("There’s no need to call it more than once")]),t._v(", so you’d typically only do it when the application initializes. Once successful, all subsequent requests will send their authentication information automatically. In some rare cases, for example making sure the user object returned by "),e("code",[t._v("app.get('authentication')")]),t._v(" is up-to-date after it was changed on the server, you may safely call it again.")])]),t._v(" "),e("h2",{attrs:{id:"app-authenticate-data"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#app-authenticate-data"}},[t._v("#")]),t._v(" app.authenticate(data)")]),t._v(" "),e("p",[e("code",[t._v("app.authenticate(data) -> Promise")]),t._v(" will try to authenticate with a Feathers server by passing a "),e("code",[t._v("strategy")]),t._v(" and other properties as credentials.")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Authenticate with the local email/password strategy ")]),t._v("\napp"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("authenticate")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  strategy"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'local'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  email"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'my@email.com'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  password"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'my-password'")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Logged in")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("catch")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("e")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Show login page (potentially with `e.message`)")]),t._v("\n  console"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("error")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Authentication error'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" e"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("ul",[e("li",[e("code",[t._v("data {Object}")]),t._v(" - of the format "),e("code",[t._v("{strategy [, ...otherProps]}")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("strategy {String}")]),t._v(" - the name of the strategy to be used to authenticate.  Required.")]),t._v(" "),e("li",[e("code",[t._v("...otherProps {Properties}")]),t._v(" vary depending on the chosen strategy. Above is an example of using the "),e("code",[t._v("local")]),t._v(" strategy.")])])])]),t._v(" "),e("h2",{attrs:{id:"app-logout"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#app-logout"}},[t._v("#")]),t._v(" app.logout()")]),t._v(" "),e("p",[t._v("Removes the access token from storage on the client. It also calls the "),e("code",[t._v("remove")]),t._v(" method of the "),e("RouterLink",{attrs:{to:"/api/authentication/service.html"}},[t._v("authentication service")]),t._v(".")],1),t._v(" "),e("h2",{attrs:{id:"app-get-authentication"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#app-get-authentication"}},[t._v("#")]),t._v(" app.get('authentication')")]),t._v(" "),e("p",[e("code",[t._v("app.get('authentication') -> Promise")]),t._v(" is a Promise that resolves with the current authentication information. For most strategies this is the best place to get the currently authenticated user:")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Returns the authenticated user")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" user "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" app"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'authentication'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Gets the authenticated accessToken (JWT)")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" accessToken "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" app"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'authentication'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("h2",{attrs:{id:"app-authentication"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#app-authentication"}},[t._v("#")]),t._v(" app.authentication")]),t._v(" "),e("p",[t._v("Returns the instance of the "),e("a",{attrs:{href:"#authenticationclient"}},[t._v("AuthenticationClient")]),t._v(".")]),t._v(" "),e("h2",{attrs:{id:"authenticationclient"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#authenticationclient"}},[t._v("#")]),t._v(" AuthenticationClient")]),t._v(" "),e("h3",{attrs:{id:"service"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#service"}},[t._v("#")]),t._v(" service")]),t._v(" "),e("p",[e("code",[t._v("app.authentication.service")]),t._v(" returns an instance of the authentication client service, normally "),e("code",[t._v("app.service('authentication')")]),t._v(".")]),t._v(" "),e("h3",{attrs:{id:"storage"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#storage"}},[t._v("#")]),t._v(" storage")]),t._v(" "),e("p",[e("code",[t._v("app.authentication.storage")]),t._v(" returns the authentication client storage instance.")]),t._v(" "),e("h3",{attrs:{id:"handlesocket-socket"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#handlesocket-socket"}},[t._v("#")]),t._v(" handleSocket(socket)")]),t._v(" "),e("p",[e("code",[t._v("app.authentication.handleSocket(socket) -> void")]),t._v(" makes sure that a websocket real-time connection is always re-authenticated before making any other request.")]),t._v(" "),e("h3",{attrs:{id:"getfromlocation-location"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#getfromlocation-location"}},[t._v("#")]),t._v(" getFromLocation(location)")]),t._v(" "),e("p",[e("code",[t._v("app.authentication.getFromLocation(location) -> Promise")]),t._v(" tries to retrieve an access token from "),e("code",[t._v("window.location")]),t._v(". This usually means the "),e("code",[t._v("access_token")]),t._v(" in the hash set by the "),e("RouterLink",{attrs:{to:"/api/authentication/oauth.html"}},[t._v("OAuth authentication strategy")]),t._v(".")],1),t._v(" "),e("h3",{attrs:{id:"setaccesstoken-token"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#setaccesstoken-token"}},[t._v("#")]),t._v(" setAccessToken(token)")]),t._v(" "),e("p",[e("code",[t._v("app.authentication.setAccessToken(token) -> Promise")]),t._v(" sets the access token in the storage (normally "),e("code",[t._v("feathers-jwt")]),t._v(" in "),e("code",[t._v("window.localStorage")]),t._v(").")]),t._v(" "),e("h3",{attrs:{id:"getaccesstoken"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#getaccesstoken"}},[t._v("#")]),t._v(" getAccessToken()")]),t._v(" "),e("p",[e("code",[t._v("app.authentication.getAccessToken() -> Promise")]),t._v(" returns the access token from "),e("code",[t._v("storage")]),t._v(". If not found it will try to get the access token via "),e("a",{attrs:{href:""}},[t._v("getFromLocation()")]),t._v(" or return "),e("code",[t._v("null")]),t._v(" if neither was successful.")]),t._v(" "),e("h3",{attrs:{id:"removeaccesstoken"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#removeaccesstoken"}},[t._v("#")]),t._v(" removeAccessToken()")]),t._v(" "),e("p",[e("code",[t._v("app.authentication.removeAccessToken() -> Promise")]),t._v(" removes the access token from the storage.")]),t._v(" "),e("h3",{attrs:{id:"reset"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#reset"}},[t._v("#")]),t._v(" reset()")]),t._v(" "),e("p",[e("code",[t._v("app.authentication.reset()")]),t._v(" resets the authentication state without explicitly logging out. Should not be called directly.")]),t._v(" "),e("h3",{attrs:{id:"handleerror"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#handleerror"}},[t._v("#")]),t._v(" handleError()")]),t._v(" "),e("p",[e("code",[t._v("app.authentication.handleError(error, type: 'authenticate'|'logout') -> Promise")]),t._v(" handles any error happening in the "),e("code",[t._v("authenticate")]),t._v(" or "),e("code",[t._v("logout")]),t._v(" method. By default it removes the access token if the error is a "),e("code",[t._v("NotAuthenticate")]),t._v(" error. Otherwise it does nothing.")]),t._v(" "),e("h3",{attrs:{id:"reauthenticate-force"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#reauthenticate-force"}},[t._v("#")]),t._v(" reAuthenticate(force)")]),t._v(" "),e("p",[e("code",[t._v("app.authentication.reAuthenticate(force = false) -> Promise")]),t._v(" will re-authenticate with the current access token from "),e("a",{attrs:{href:""}},[t._v("app.authentication.getAccessToken()")]),t._v(". If "),e("code",[t._v("force")]),t._v(" is set to "),e("code",[t._v("true")]),t._v(" it will always re-authenticate, with the default "),e("code",[t._v("false")]),t._v(" only when not already authenticated.")]),t._v(" "),e("h3",{attrs:{id:"authenticate"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#authenticate"}},[t._v("#")]),t._v(" authenticate()")]),t._v(" "),e("p",[t._v("The internal method called when using "),e("a",{attrs:{href:"#app-authenticate-data"}},[t._v("app.authenticate()")]),t._v(".")]),t._v(" "),e("h3",{attrs:{id:"logout"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#logout"}},[t._v("#")]),t._v(" logout()")]),t._v(" "),e("p",[t._v("The internal method called when using "),e("a",{attrs:{href:"#app-logout"}},[t._v("app.logout()")]),t._v(".")]),t._v(" "),e("h2",{attrs:{id:"customization"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#customization"}},[t._v("#")]),t._v(" Customization")]),t._v(" "),e("p",[t._v("The "),e("a",{attrs:{href:""}},[t._v("AuthenticationClient")]),t._v(" can be extended to provide custom functionality and then passed during initialization:")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" feathers "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@feathersjs/feathers'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" socketio "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@feathersjs/socketio-client'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" io "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'socket.io-client'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" auth "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@feathersjs/authentication-client'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" socket "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("io")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://api.feathersjs.com'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" app "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("feathers")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyAuthenticationClient")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("auth"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("AuthenticationClient")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("getFromLocation")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("location")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Do custom location things here")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("super")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("getFromLocation")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("location"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" \n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Setup the transport (Rest, Socket, etc.) here")]),t._v("\napp"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("configure")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("socketio")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("socket"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Pass the custom authentication client class as the `Authentication` option")]),t._v("\napp"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("configure")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("auth")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  Authentication"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" MyAuthenticationClient\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("h2",{attrs:{id:"hooks"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#hooks"}},[t._v("#")]),t._v(" Hooks")]),t._v(" "),e("p",[t._v("The following hooks are added to the client side application by default.")]),t._v(" "),e("h3",{attrs:{id:"authentication"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#authentication"}},[t._v("#")]),t._v(" authentication")]),t._v(" "),e("p",[t._v("Hook that ensures for every request that authentication is completed and successful. It also makes the authentication information available in the client side "),e("code",[t._v("params")]),t._v(" (e.g. "),e("code",[t._v("params.user")]),t._v(").")]),t._v(" "),e("h3",{attrs:{id:"populateheader"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#populateheader"}},[t._v("#")]),t._v(" populateHeader")]),t._v(" "),e("p",[t._v("Adds the appropriate "),e("code",[t._v("Authorization")]),t._v(" header for any REST request.")])])}),[],!1,null,null,null);a.default=n.exports}}]);