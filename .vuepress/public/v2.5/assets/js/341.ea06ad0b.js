(window.webpackJsonp=window.webpackJsonp||[]).push([[341],{956:function(t,e,a){"use strict";a.r(e);var s=a(0),n=Object(s.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"plclogo-binding"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#plclogo-binding","aria-hidden":"true"}},[t._v("#")]),t._v(" PLCLogo Binding "),a("Badge",{attrs:{type:"warn",text:"v1"}})],1),t._v(" "),a("div",{staticClass:"danger custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("OBSOLETE BINDING")]),t._v(" "),a("p",[t._v("This 1.x binding is obsolete; it has been replaced by the 2.x "),a("router-link",{attrs:{to:"./../plclogo/"}},[t._v("plclogo")]),t._v(" binding which you should use instead.")],1)]),t._v(" "),a("p",[t._v("This binding provides native support of Siemens Logo! PLC devices. Communication with Logo is done via Moka7 library. Currently only two devices are supported: 0BA7 (Logo! 7) and 0BA8 (Logo! 8). Additionally multiple devices are supported. Different families of Logo! devices should work also, but was not tested now due to lack of hardware.")]),t._v(" "),a("p",[t._v("Binding works nicely at least 100ms polling rate.")]),t._v(" "),a("h1",{attrs:{id:"binding-configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#binding-configuration","aria-hidden":"true"}},[t._v("#")]),t._v(" Binding Configuration "),a("Badge",{attrs:{type:"warn",text:"v1"}})],1),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),a("p",[t._v("The configuration pattern for Contact and Switch items is:")]),t._v(" "),t._m(5),a("p",[t._v("Configuration pattern of Number items is:")]),t._v(" "),t._m(6),t._m(7),t._v(" "),t._m(8),t._m(9),t._v(" "),t._m(10),t._m(11),t._v(" "),t._m(12),t._m(13),t._v(" "),a("DocPreviousVersions"),t._v(" "),a("EditPageLink")],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("This binding can be configured in the file "),e("code",[this._v("services/plclogo.cfg")]),this._v(".")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("table",[a("thead",[a("tr",[a("th",[t._v("Property")]),t._v(" "),a("th",[t._v("Default")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Required")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",[t._v("<plcname>")]),t._v(".host")]),t._v(" "),a("td"),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),a("td",[t._v("IP address of the LOGO! PLC")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("<plcname>")]),t._v(".remoteTSAP")]),t._v(" "),a("td"),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),a("td",[a("code",[t._v("TSAP")]),t._v(" (in hex) of the "),a("strong",[t._v("remote")]),t._v(" LOGO! PLC, as configured by LogoSoft Comfort. Common used value is 0x0200.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("<plcname>")]),t._v(".localTSAP")]),t._v(" "),a("td"),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),a("td",[a("code",[t._v("TSAP")]),t._v(" (in hex) to be used by the "),a("strong",[t._v("local")]),t._v(" instance. Common used value is 0x0300.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("refresh")])]),t._v(" "),a("td",[t._v("5000")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("No")]),t._v(" "),a("td",[t._v("polling interval, in milliseconds, to be used when querying the Logo!")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"item-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#item-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Item Configuration")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[t._v("Follow blocks can be read from on both device types: "),a("code",[t._v("I")]),t._v(", "),a("code",[t._v("Q")]),t._v(", "),a("code",[t._v("M")]),t._v(", "),a("code",[t._v("AI")]),t._v(", "),a("code",[t._v("AQ")]),t._v(" and "),a("code",[t._v("AM")]),t._v(". For Logo! 8 devices "),a("code",[t._v("NI")]),t._v(", "),a("code",[t._v("NQ")]),t._v(", "),a("code",[t._v("NAI")]),t._v(" and "),a("code",[t._v("NAQ")]),t._v(" are supported additionally. "),a("code",[t._v("Contact")]),t._v(" items are used for digital inputs, "),a("code",[t._v("Switch")]),t._v(" items for digital inputs/outputs and "),a("code",[t._v("Number")]),t._v(" items for analog inputs/outputs.")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[t._v("Writing to the PLC can be done via "),a("code",[t._v("VB")]),t._v(" (byte values) and "),a("code",[t._v("VW")]),t._v(" (word values) for both device types. Use "),a("code",[t._v("Switch")]),t._v(" items for writing of digital and "),a("code",[t._v("Number")]),t._v(" of analog values.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("plclogo=”<instancename>:<memorylocation>.<maskbit>”\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("plclogo=”<instancename>:<memorylocation>”\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"examples"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#examples","aria-hidden":"true"}},[this._v("#")]),this._v(" Examples")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dsl"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ReadOutputQ13")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("plclogo"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"plc:Q13"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("read value of output block "),e("code",[this._v("Q13")]),this._v(" from Logo! device named 'plc'")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dsl"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ReadWriteBinaryValue")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("plclogo"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"plc:VB0.0"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("read/write binary input block mapped to "),e("code",[this._v("VB")]),this._v(" address 0, bit 0")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dsl"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Number")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ReadWriteAnalogValue")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("plclogo"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"plc:VW5"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("read/write analog input block mapped to "),e("code",[this._v("VW")]),this._v(" address 5")])}],!1,null,null,null);e.default=n.exports}}]);