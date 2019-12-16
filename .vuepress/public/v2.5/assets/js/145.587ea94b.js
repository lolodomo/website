(window.webpackJsonp=window.webpackJsonp||[]).push([[145],{646:function(t,s,e){"use strict";e.r(s);var a=e(0),n=Object(a.a)({},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"content"},[t._m(0),t._v(" "),e("AddonLogo"),t._v(" "),e("p",[t._v("The CoolMasterNet binding is used to control "),e("a",{attrs:{href:"https://coolautomation.com/products/coolmasternet/",target:"_blank",rel:"noopener noreferrer"}},[t._v("CoolMasterNet HVAC bridge devices"),e("OutboundLink")],1),t._v(', using the "ASCII I/F" plaintext TCP control protocol.')]),t._v(" "),t._m(1),t._v(" "),e("p",[t._v("The CoolMasterNet protocol does not support automatic discovery.")]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),e("p",[t._v("Example demo.things configuration for two HVAC devices connected to a CoolMasterNet device found at IP 192.168.0.100:")]),t._v(" "),t._m(4),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),e("DocPreviousVersions"),t._v(" "),e("EditPageLink")],1)},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"coolmasternet-binding"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#coolmasternet-binding","aria-hidden":"true"}},[this._v("#")]),this._v(" CoolMasterNet Binding")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"discovery"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#discovery","aria-hidden":"true"}},[this._v("#")]),this._v(" Discovery")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"thing-configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#thing-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Thing Configuration")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[s("code",[this._v("controller")]),this._v(' is a openHAB "bridge", and represents a single CoolMasterNet device. A single controller supports one or more HVAC units.')]),this._v(" "),s("li",[s("code",[this._v("hvac")]),this._v(" is an HVAC device connected to a controller. Each "),s("code",[this._v("hvac")]),this._v(" thing is identified by a CoolMasterNet UID (refer to CoolMasterNet controller documentation).")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-perl extra-class"},[e("pre",{pre:!0,attrs:{class:"language-dsl"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Bridge")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("coolmasternet"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("controller"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("main")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" host"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"192.168.0.100"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Thing")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("hvac")]),t._v(" a "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" uid"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"L1.100"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Thing")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("hvac")]),t._v(" b "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" uid"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"L1.101"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"channels"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#channels","aria-hidden":"true"}},[this._v("#")]),this._v(" Channels")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("table",[e("thead",[e("tr",[e("th",[t._v("Channel")]),t._v(" "),e("th",[t._v("Item Type")]),t._v(" "),e("th",[t._v("Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("on")]),t._v(" "),e("td",[t._v("Switch")]),t._v(" "),e("td",[t._v("Turn HVAC unit on and off.")])]),t._v(" "),e("tr",[e("td",[t._v("mode")]),t._v(" "),e("td",[t._v("String")]),t._v(" "),e("td",[t._v("HVAC mode (cool, heat, auto, dry, fan). Unit may not support all modes.")])]),t._v(" "),e("tr",[e("td",[t._v("fan_speed")]),t._v(" "),e("td",[t._v("String")]),t._v(" "),e("td",[t._v('Fan speed (l, m, h, t, a ) for respectively "Low", "Medium", "High", "Top" or "Auto". Unit may not support all speeds.')])]),t._v(" "),e("tr",[e("td",[t._v("set_temp")]),t._v(" "),e("td",[t._v("Number")]),t._v(" "),e("td",[t._v("Temperature target setpoint in Celsius.")])]),t._v(" "),e("tr",[e("td",[t._v("current_temp")]),t._v(" "),e("td",[t._v("Number")]),t._v(" "),e("td",[t._v("Current temperature in Celsius at HVAC unit.")])]),t._v(" "),e("tr",[e("td",[t._v("louvre")]),t._v(" "),e("td",[t._v("String")]),t._v(" "),e("td",[t._v('Louvre angle (0, a, h, 3, 4, 6, v) for respectively "No Control", "Auto Swing", "Horizontal", "30 degrees", "45 degrees", "60 degrees" or "Vertical". Unit may not support all angles.')])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"item-configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#item-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Item Configuration")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-java extra-class"},[e("pre",{pre:!0,attrs:{class:"language-dsl"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ACOn")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Lounge AC ON/OFF"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" channel"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"coolmasternet:hvac:main:a:on"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("String")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ACMode")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Lounge AC Mode"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" channel"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"coolmasternet:hvac:main:a:mode"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Number")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ACTemp")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Lounge Temp"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" channel"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"coolmasternet:hvac:main:a:current_temp"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Number")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ACSet")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Lounge AC Set"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" channel"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"coolmasternet:hvac:main:a:set_temp"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("String")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ACFan")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Lounge AC Fan"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" channel"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"coolmasternet:hvac:main:a:fan_speed"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("String")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ACLouvre")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Lounge AC Louvre"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" channel"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"coolmasternet:hvac:main:a:louvre_angle"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])}],!1,null,null,null);s.default=n.exports}}]);