(window.webpackJsonp=window.webpackJsonp||[]).push([[184],{706:function(t,e,s){"use strict";s.r(e);var r=s(0),a=Object(r.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),s("p",[t._v("This binding adds support for the Feican Wi-Fi version of the smart light LED Bulb, the WiFi RGBW Bulb.")]),t._v(" "),s("p",[t._v("With this binding the light bulb can be switched on or off, set the color or set color based on color temperature.\nSet the brightness. And it contains a set of preset programs, where for some the program speed can be set.")]),t._v(" "),t._m(1),t._v(" "),s("p",[t._v("This binding supports the Feican smart smart light LED Bulb, WiFi RGBW Bulb.\nThis bulb supports color, color temperature, brightness.\nIt also has a number of preset programs, with static color, jumping color(s), gradient color(s) and flashing color(s).\nWith the program_speed the speed of some of the programs can be set.")]),t._v(" "),s("p",[t._v("Although it has not been tested, the Feican LED strips may also be supported as it seems they can be controlled using the same app.")]),t._v(" "),t._m(2),t._v(" "),s("p",[t._v("It is not possible to get the state of the bulb from the bulb itself.\nTherefore the state visible to the user only reflects what was set in openHAB and may not correspond with the actual state.")]),t._v(" "),t._m(3),t._v(" "),s("p",[t._v("Before using the Feican bulb with openHAB the devices must be connected to the Wi-Fi network.\nThis can be done using the Feican Android or iPhone DreamColor app.")]),t._v(" "),t._m(4),t._v(" "),s("p",[t._v("Devices can be auto discovered within the local network.\nIt is possible to connect to devices in a different network, but these must be added manually.")]),t._v(" "),t._m(5),t._v(" "),s("p",[t._v("The thing has a one configuration parameter:")]),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),s("p",[t._v("The following channels are available:")]),t._v(" "),t._m(8),t._v(" "),s("p",[t._v("The program channel supports the following values:")]),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._m(13),t._v(" "),t._m(14),s("DocPreviousVersions"),t._v(" "),s("EditPageLink")],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"feican-binding"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#feican-binding","aria-hidden":"true"}},[this._v("#")]),this._v(" Feican Binding")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"supported-things"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#supported-things","aria-hidden":"true"}},[this._v("#")]),this._v(" Supported Things")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"limitations"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#limitations","aria-hidden":"true"}},[this._v("#")]),this._v(" Limitations")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"prerequisites"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites","aria-hidden":"true"}},[this._v("#")]),this._v(" Prerequisites")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"discovery"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#discovery","aria-hidden":"true"}},[this._v("#")]),this._v(" Discovery")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"thing-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#thing-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Thing Configuration")])},function(){var t=this.$createElement,e=this._self._c||t;return e("table",[e("thead",[e("tr",[e("th",[this._v("Parameter")]),this._v(" "),e("th",[this._v("Description")])])]),this._v(" "),e("tbody",[e("tr",[e("td",[this._v("ipAddress")]),this._v(" "),e("td",[this._v("IP Address of the device. Mandatory.")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"channels"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#channels","aria-hidden":"true"}},[this._v("#")]),this._v(" Channels")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("table",[s("thead",[s("tr",[s("th",[t._v("Channel Type ID")]),t._v(" "),s("th",[t._v("Item Type")]),t._v(" "),s("th",[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("color")]),t._v(" "),s("td",[t._v("Color")]),t._v(" "),s("td",[t._v("This channel supports switching, brightness and adjusting the color of a light.")])]),t._v(" "),s("tr",[s("td",[t._v("color_temperature")]),t._v(" "),s("td",[t._v("Dimmer")]),t._v(" "),s("td",[t._v("This channel supports adjusting the color temperature from cold (0%) to warm (100%).")])]),t._v(" "),s("tr",[s("td",[t._v("program")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v("This channel supports setting the bulb to a static, jumping, gradient or flashing light.")])]),t._v(" "),s("tr",[s("td",[t._v("program_speed")]),t._v(" "),s("td",[t._v("Dimmer")]),t._v(" "),s("td",[t._v("This channel supports adjusting speed of jump, gradient or flash programs")])])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("table",[s("thead",[s("tr",[s("th",[t._v("Value")]),t._v(" "),s("th",[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("1")]),t._v(" "),s("td",[t._v("Static red")])]),t._v(" "),s("tr",[s("td",[t._v("2")]),t._v(" "),s("td",[t._v("Static blue")])]),t._v(" "),s("tr",[s("td",[t._v("3")]),t._v(" "),s("td",[t._v("Static green")])]),t._v(" "),s("tr",[s("td",[t._v("4")]),t._v(" "),s("td",[t._v("Static cyan")])]),t._v(" "),s("tr",[s("td",[t._v("5")]),t._v(" "),s("td",[t._v("Static yellow")])]),t._v(" "),s("tr",[s("td",[t._v("6")]),t._v(" "),s("td",[t._v("Static purple")])]),t._v(" "),s("tr",[s("td",[t._v("7")]),t._v(" "),s("td",[t._v("Static white")])]),t._v(" "),s("tr",[s("td",[t._v("8")]),t._v(" "),s("td",[t._v("Tricolor jump")])]),t._v(" "),s("tr",[s("td",[t._v("9")]),t._v(" "),s("td",[t._v("7-color jump")])]),t._v(" "),s("tr",[s("td",[t._v("10")]),t._v(" "),s("td",[t._v("Tricolor gradient")])]),t._v(" "),s("tr",[s("td",[t._v("11")]),t._v(" "),s("td",[t._v("7-color gradient")])]),t._v(" "),s("tr",[s("td",[t._v("12")]),t._v(" "),s("td",[t._v("Red gradient")])]),t._v(" "),s("tr",[s("td",[t._v("13")]),t._v(" "),s("td",[t._v("Green gradient")])]),t._v(" "),s("tr",[s("td",[t._v("14")]),t._v(" "),s("td",[t._v("Blue gradient")])]),t._v(" "),s("tr",[s("td",[t._v("15")]),t._v(" "),s("td",[t._v("Yellow gradient")])]),t._v(" "),s("tr",[s("td",[t._v("16")]),t._v(" "),s("td",[t._v("Cyan gradient")])]),t._v(" "),s("tr",[s("td",[t._v("17")]),t._v(" "),s("td",[t._v("Purple gradient")])]),t._v(" "),s("tr",[s("td",[t._v("18")]),t._v(" "),s("td",[t._v("White gradient")])]),t._v(" "),s("tr",[s("td",[t._v("19")]),t._v(" "),s("td",[t._v("Red-Green gradient")])]),t._v(" "),s("tr",[s("td",[t._v("20")]),t._v(" "),s("td",[t._v("Red-Blue gradient")])]),t._v(" "),s("tr",[s("td",[t._v("21")]),t._v(" "),s("td",[t._v("Green-Blue gradient")])]),t._v(" "),s("tr",[s("td",[t._v("22")]),t._v(" "),s("td",[t._v("7-color flash")])]),t._v(" "),s("tr",[s("td",[t._v("23")]),t._v(" "),s("td",[t._v("Red flash")])]),t._v(" "),s("tr",[s("td",[t._v("24")]),t._v(" "),s("td",[t._v("Green flash")])]),t._v(" "),s("tr",[s("td",[t._v("25")]),t._v(" "),s("td",[t._v("Blue flash")])]),t._v(" "),s("tr",[s("td",[t._v("26")]),t._v(" "),s("td",[t._v("Yellow flash")])]),t._v(" "),s("tr",[s("td",[t._v("27")]),t._v(" "),s("td",[t._v("Cyan flash")])]),t._v(" "),s("tr",[s("td",[t._v("28")]),t._v(" "),s("td",[t._v("Purple flash")])]),t._v(" "),s("tr",[s("td",[t._v("29")]),t._v(" "),s("td",[t._v("White flash")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"full-example"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#full-example","aria-hidden":"true"}},[this._v("#")]),this._v(" Full Example")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("feican.things:")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[t._v("feican"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("bulb"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("home "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Living Room"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" ipAddress"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"192.168.0.13"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("feican.items:")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-dsl"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Switch")]),t._v("   "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("FC_1_Switch")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Switch"')]),t._v("                    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" channel"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"feican:bulb:home:color"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Color")]),t._v("    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("FC_1_Color")]),t._v("   "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Color"')]),t._v("           "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v(" <slider>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" channel"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"feican:bulb:home:color"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Dimmer")]),t._v("   "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("FC_1_Dimmer")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Brightness [%d]"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v(" <slider>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" channel"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"feican:bulb:home:color"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])}],!1,null,null,null);e.default=a.exports}}]);