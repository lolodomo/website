(window.webpackJsonp=window.webpackJsonp||[]).push([[248],{809:function(t,e,s){"use strict";s.r(e);var n=s(0),a=Object(n.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),s("AddonLogo"),t._v(" "),s("p",[t._v("The "),s("a",{attrs:{href:"https://www.leapmotion.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Leap Motion"),s("OutboundLink")],1),t._v(" controller is a gesture sensoring device that uses stereoscopic cameras and is connected through USB.\nAs all processing is done in software, it requires quite some powerful computer, such that it unfortunately does not work on single-board computers such as the Raspberry Pi.\nIn fact, the binding is currently only working on macOS computers with Intel x86 processors.")]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),s("p",[t._v("The controller is automatically discovered if plugged into a USB port.")]),t._v(" "),t._m(4),t._v(" "),s("p",[t._v("The controller does not have any kind of configuration parameters.")]),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),s("p",[t._v("demo.things:")]),t._v(" "),t._m(12),s("p",[t._v("demo.items:")]),t._v(" "),t._m(13),s("DocPreviousVersions"),t._v(" "),s("EditPageLink")],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"leap-motion-binding"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#leap-motion-binding","aria-hidden":"true"}},[this._v("#")]),this._v(" Leap Motion Binding")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"supported-things"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#supported-things","aria-hidden":"true"}},[this._v("#")]),this._v(" Supported Things")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("There is a single thing of type "),e("code",[this._v("controller")]),this._v(" defined and only one can be connected to the computer at a time.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"discovery"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#discovery","aria-hidden":"true"}},[this._v("#")]),this._v(" Discovery")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"thing-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#thing-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Thing Configuration")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"channels"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#channels","aria-hidden":"true"}},[this._v("#")]),this._v(" Channels")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("The controller has a single trigger channel "),e("code",[this._v("gesture")]),this._v(".\nIt generates the following events with a frequency of at most 200ms:")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("table",[s("thead",[s("tr",[s("th",[t._v("Event")]),t._v(" "),s("th",[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("nohand")]),t._v(" "),s("td",[t._v("No hand can be seen")])]),t._v(" "),s("tr",[s("td",[t._v("tap")]),t._v(" "),s("td",[t._v("A tap with a single finger")])]),t._v(" "),s("tr",[s("td",[t._v("clockwise")]),t._v(" "),s("td",[t._v("Rotating a finger clockwise")])]),t._v(" "),s("tr",[s("td",[t._v("anticlockwise")]),t._v(" "),s("td",[t._v("Rotating a finger anticlockwise")])]),t._v(" "),s("tr",[s("td",[t._v("fingersX_YYY")]),t._v(" "),s("td",[t._v("Hand showing X fingers in a height of YYY mm (where YYY can be 1-3 digits)")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"profiles"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#profiles","aria-hidden":"true"}},[this._v("#")]),this._v(" Profiles")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("This binding specifies 3 profiles for the "),e("code",[this._v("gesture")]),this._v(" channel to make it easy to link to existing items:")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("table",[s("thead",[s("tr",[s("th",[t._v("Profile")]),t._v(" "),s("th",[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("leapmotion:switch")]),t._v(" "),s("td",[t._v('Simulates a toggle switch using the "tap" gesture')])]),t._v(" "),s("tr",[s("td",[t._v("leapmotion:dimmer")]),t._v(" "),s("td",[t._v("Sends percentage values and supports two modes (configuration parameter "),s("code",[t._v("mode=fingers|height")]),t._v("): - fingers: 20% for every shown finger, i.e. 0=0%, 1=20%, 2=40%, 3=60%, 4=80%, 5=100% - height: If hand shows all 5 fingers, its height above the controller determines the value. Higher is brighter.")])]),t._v(" "),s("tr",[s("td",[t._v("leapmotion:color")]),t._v(" "),s("td",[t._v("Controls a color item by - using taps for switching on and off - height of hand (with 5 fingers shown) to dim - rotating a finger to loop through the colors")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"full-example"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#full-example","aria-hidden":"true"}},[this._v("#")]),this._v(" Full Example")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-dsl"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Thing")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("leapmotion"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("controller"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("1")]),t._v(" MyLeapMotion\n")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-dsl"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DemoSwitch")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Switch"')]),t._v("         "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" channel"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"leapmotion:controller:1:gesture"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Color")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RGBLight")]),t._v("    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"RGB Light"')]),t._v("      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" channel"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"leapmotion:controller:1:gesture"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Dimmer")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DimmedLight")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Dimmer [%d %%]"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" channel"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"leapmotion:controller:1:gesture"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("profile"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"leapmotion:dimmer"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" mode"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"fingers"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" \n")])])])}],!1,null,null,null);e.default=a.exports}}]);