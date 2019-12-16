(window.webpackJsonp=window.webpackJsonp||[]).push([[96],{571:function(t,e,a){"use strict";a.r(e);var s=a(0),n=Object(s.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"openwebif-action"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#openwebif-action","aria-hidden":"true"}},[t._v("#")]),t._v(" OpenWebIf Action "),a("Badge",{attrs:{type:"warn",text:"v1"}})],1),t._v(" "),a("p",[t._v("The OpenWebIf action allows you to send a message to enigma2-based Linux satellite receivers (Dreambox, VU+, Clarke-Tech, ...) with the installed OpenWebIf plugin.")]),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._m(5),t._v(" "),a("p",[t._v("Now you can send a message to the configured receiver:")]),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._m(10),t._v(" "),a("DocPreviousVersions"),t._v(" "),a("EditPageLink")],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Configuration")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Configure your satellite receivers in "),e("code",[this._v("services/openwebif.cfg")]),this._v(".")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("table",[a("thead",[a("tr",[a("th",[t._v("Property")]),t._v(" "),a("th",[t._v("Default")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Required")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",[t._v("receiver.<name>.host")])]),t._v(" "),a("td"),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",[t._v("For example, "),a("code",[t._v("vusolo2")])])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("receiver.<name>.port")])]),t._v(" "),a("td"),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",[t._v("For example, "),a("code",[t._v("81")])])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("receiver.<name>.user")])]),t._v(" "),a("td"),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",[t._v("For example, "),a("code",[t._v("root")])])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("receiver.<name>.password")])]),t._v(" "),a("td"),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[a("code",[t._v("receiver.<name>.https")])]),t._v(" "),a("td"),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",[t._v("For example, "),a("code",[t._v("false")])])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"configuration-example"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#configuration-example","aria-hidden":"true"}},[this._v("#")]),this._v(" Configuration Example")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[t._v("receiver"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("main"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("host"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("vusolo2\nreceiver"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("main"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("port"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("81")]),t._v("\nreceiver"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("main"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("user"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("root\nreceiver"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("main"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("password"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("xxxxx\nreceiver"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("main"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("https"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"action"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#action","aria-hidden":"true"}},[this._v("#")]),this._v(" Action")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("code",[this._v("sendOpenWebIfNotification(NAME, MESSAGE, TYPE, TIMEOUT)")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("table",[a("thead",[a("tr",[a("th",[t._v("Parameter")]),t._v(" "),a("th",[t._v("Meaning")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("NAME")]),t._v(" "),a("td",[t._v("The configured name of the satellite receiver")])]),t._v(" "),a("tr",[a("td",[t._v("MESSAGE")]),t._v(" "),a("td",[t._v("The message to send to the receiver")])]),t._v(" "),a("tr",[a("td",[t._v("TYPE")]),t._v(" "),a("td",[t._v("The message type (INFO, WARNING, ERROR)")])]),t._v(" "),a("tr",[a("td",[t._v("TIMEOUT")]),t._v(" "),a("td",[t._v("How long the text will stay on the screen in seconds")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"examples"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#examples","aria-hidden":"true"}},[this._v("#")]),this._v(" Examples")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sendOpenWebIfNotification")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"main"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello World!\\n\\nThis is a message sent from openHab!"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"WARNING"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"https://farm4.staticflickr.com/3882/15284270826_8cf0e637d8_z.jpg",alt:""}})])}],!1,null,null,null);e.default=n.exports}}]);