(window.webpackJsonp=window.webpackJsonp||[]).push([[217],{757:function(t,e,v){"use strict";v.r(e);var r=v(0),_=Object(r.a)({},function(){var t=this,e=t.$createElement,v=t._self._c||e;return v("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),v("p",[t._v("This Binding will auto-discover any HP Printer on the network via Bonjour.")]),t._v(" "),t._m(5),t._v(" "),v("p",[t._v("The available settings are:")]),t._v(" "),t._m(6),t._v(" "),v("p",[t._v("An example configuration is below:")]),t._v(" "),t._m(7),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),v("DocPreviousVersions"),t._v(" "),v("EditPageLink")],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"hpprinter-binding"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#hpprinter-binding","aria-hidden":"true"}},[this._v("#")]),this._v(" HPPrinter Binding")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Get HP Printer statistics from an "),e("em",[this._v("Embedded Web Server")]),this._v(" over Network.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"supported-things"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#supported-things","aria-hidden":"true"}},[this._v("#")]),this._v(" Supported Things")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("There is only one thing named "),e("code",[this._v("printer")]),this._v(". Channels are added dynamically depending on the type of printer.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"discovery"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#discovery","aria-hidden":"true"}},[this._v("#")]),this._v(" Discovery")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"thing-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#thing-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Thing Configuration")])},function(){var t=this,e=t.$createElement,v=t._self._c||e;return v("table",[v("thead",[v("tr",[v("th",[t._v("Setting")]),t._v(" "),v("th",[t._v("Name")]),t._v(" "),v("th",[t._v("Type")]),t._v(" "),v("th",[t._v("Required")]),t._v(" "),v("th",[t._v("Default")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("IP Address")]),t._v(" "),v("td",[t._v("ipAddress")]),t._v(" "),v("td",[t._v("string")]),t._v(" "),v("td",[t._v("yes")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("Usage Refresh Interval (seconds)")]),t._v(" "),v("td",[t._v("usageInterval")]),t._v(" "),v("td",[t._v("number")]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("30")])]),t._v(" "),v("tr",[v("td",[t._v("Status Refresh Interval (seconds)")]),t._v(" "),v("td",[t._v("statusInterval")]),t._v(" "),v("td",[t._v("number")]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("4")])])])])},function(){var t=this,e=t.$createElement,v=t._self._c||e;return v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-dsl"}},[v("code",[v("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Thing")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("hpprinter"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("printer"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("djprinter")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Printer"')]),t._v(" @ "),v("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Office"')]),t._v(" "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" ipAddress"),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),v("span",{pre:!0,attrs:{class:"token string"}},[t._v('"192.168.1.1"')]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" usageInterval"),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),v("span",{pre:!0,attrs:{class:"token string"}},[t._v('"30"')]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" statusInterval"),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),v("span",{pre:!0,attrs:{class:"token string"}},[t._v('"4"')]),t._v(" "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"channels"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#channels","aria-hidden":"true"}},[this._v("#")]),this._v(" Channels")])},function(){var t=this,e=t.$createElement,v=t._self._c||e;return v("table",[v("thead",[v("tr",[v("th",[t._v("Channel")]),t._v(" "),v("th",[t._v("Name")]),t._v(" "),v("th",[t._v("Data Type")]),t._v(" "),v("th",[t._v("Dynamic")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("Printer Status")]),t._v(" "),v("td",[t._v("status")]),t._v(" "),v("td",[t._v("String")]),t._v(" "),v("td",[t._v("no")])]),t._v(" "),v("tr",[v("td",[t._v("Black Colour Level")]),t._v(" "),v("td",[t._v("blackLevel")]),t._v(" "),v("td",[t._v("Number")]),t._v(" "),v("td",[t._v("no")])]),t._v(" "),v("tr",[v("td",[t._v("Colour Level")]),t._v(" "),v("td",[t._v("colorLevel")]),t._v(" "),v("td",[t._v("Number")]),t._v(" "),v("td",[t._v("yes")])]),t._v(" "),v("tr",[v("td",[t._v("Cyan Colour Level")]),t._v(" "),v("td",[t._v("cyanLevel")]),t._v(" "),v("td",[t._v("Number")]),t._v(" "),v("td",[t._v("yes")])]),t._v(" "),v("tr",[v("td",[t._v("Magenta Colour Level")]),t._v(" "),v("td",[t._v("magentaLevel")]),t._v(" "),v("td",[t._v("Number")]),t._v(" "),v("td",[t._v("yes")])]),t._v(" "),v("tr",[v("td",[t._v("Yellow Colour Level")]),t._v(" "),v("td",[t._v("yellowLevel")]),t._v(" "),v("td",[t._v("Number")]),t._v(" "),v("td",[t._v("yes")])]),t._v(" "),v("tr",[v("td",[t._v("Black Marking Used")]),t._v(" "),v("td",[t._v("blackMarker")]),t._v(" "),v("td",[t._v("Number")]),t._v(" "),v("td",[t._v("yes")])]),t._v(" "),v("tr",[v("td",[t._v("Colour Marking Used")]),t._v(" "),v("td",[t._v("colorMarker")]),t._v(" "),v("td",[t._v("Number")]),t._v(" "),v("td",[t._v("yes")])]),t._v(" "),v("tr",[v("td",[t._v("Cyan Marking Used")]),t._v(" "),v("td",[t._v("cyanMarker")]),t._v(" "),v("td",[t._v("Number")]),t._v(" "),v("td",[t._v("yes")])]),t._v(" "),v("tr",[v("td",[t._v("Magenta Marking Used")]),t._v(" "),v("td",[t._v("magentaMarker")]),t._v(" "),v("td",[t._v("Number")]),t._v(" "),v("td",[t._v("yes")])]),t._v(" "),v("tr",[v("td",[t._v("Yellow Marking Used")]),t._v(" "),v("td",[t._v("yellowMarker")]),t._v(" "),v("td",[t._v("Number")]),t._v(" "),v("td",[t._v("yes")])]),t._v(" "),v("tr",[v("td",[t._v("Total Number of Pages Printed")]),t._v(" "),v("td",[t._v("totalCount")]),t._v(" "),v("td",[t._v("Number")]),t._v(" "),v("td",[t._v("no")])]),t._v(" "),v("tr",[v("td",[t._v("Total Number of Colour Pages Printed")]),t._v(" "),v("td",[t._v("totalColorCount")]),t._v(" "),v("td",[t._v("Number")]),t._v(" "),v("td",[t._v("yes")])]),t._v(" "),v("tr",[v("td",[t._v("Total Number of Monochrome Pages Printed")]),t._v(" "),v("td",[t._v("totalMonochromeCount")]),t._v(" "),v("td",[t._v("Number")]),t._v(" "),v("td",[t._v("yes")])]),t._v(" "),v("tr",[v("td",[t._v("Jam Events")]),t._v(" "),v("td",[t._v("jamEvents")]),t._v(" "),v("td",[t._v("Number")]),t._v(" "),v("td",[t._v("yes")])]),t._v(" "),v("tr",[v("td",[t._v("Mispick Events")]),t._v(" "),v("td",[t._v("mispickEvents")]),t._v(" "),v("td",[t._v("Number")]),t._v(" "),v("td",[t._v("yes")])]),t._v(" "),v("tr",[v("td",[t._v("Front Panel Cancel Count")]),t._v(" "),v("td",[t._v("fpCount")]),t._v(" "),v("td",[t._v("Number")]),t._v(" "),v("td",[t._v("yes")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("The "),e("code",[this._v("colorLevel")]),this._v(" is used on Printers that have only a single colour cartridge instead of separate Cyan, Magenta and Yellow cartridges.")])])}],!1,null,null,null);e.default=_.exports}}]);