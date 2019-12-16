(window.webpackJsonp=window.webpackJsonp||[]).push([[112],{595:function(t,s,e){"use strict";e.r(s);var a=e(0),n=Object(a.a)({},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"content"},[t._m(0),t._v(" "),e("AddonLogo"),t._v(" "),e("p",[t._v("This is an openHAB binding for the "),e("a",{attrs:{href:"https://airvisual.com/node",target:"_blank",rel:"noopener noreferrer"}},[t._v("AirVisual Node Air Quality Monitor"),e("OutboundLink")],1),t._v(" (also known as IQAir AirVisual Pro).")]),t._v(" "),t._m(1),t._v(" "),e("p",[t._v('There is one supported Thing, the "avnode".')]),t._v(" "),t._m(2),t._v(" "),e("p",[t._v("Binding will do autodiscovery for AirVisual Node by searching for a host advertised with the NetBIOS name 'AVISUAL-<SerialNumber>'.")]),t._v(" "),e("p",[t._v("All discovered devices will be added to the inbox. Please note you will need to set the Node username and password in the configuration\nof the newly discovered thing before a connection can be made.")]),t._v(" "),t._m(3),t._v(" "),e("p",[t._v("The binding has no configuration options, all configuration is done at Thing level.")]),t._v(" "),t._m(4),t._v(" "),e("p",[t._v("The thing has a few configuration parameters:")]),t._v(" "),t._m(5),t._v(" "),e("p",[t._v('Required configuration parameters can be obtained by pressing the center button on the Node for "Settings Menu" > "Network" > "Access Node data" tab.')]),t._v(" "),t._m(6),t._v(" "),e("p",[t._v("The binding supports the following channels:")]),t._v(" "),t._m(7),t._v(" "),e("p",[t._v("The Node updates measurements data every 5 minutes in active mode and every 15 minutes in power saving mode (screen off).")]),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._m(12),t._v(" "),e("p",[t._v("Here is an example of items for the AirVisual Node:")]),t._v(" "),t._m(13),t._m(14),t._v(" "),e("p",[t._v("Example rules:")]),t._v(" "),t._m(15),t._m(16),t._v(" "),e("p",[t._v("Example sitemap:")]),t._v(" "),t._m(17),e("DocPreviousVersions"),t._v(" "),e("EditPageLink")],1)},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"airvisual-node-binding"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#airvisual-node-binding","aria-hidden":"true"}},[this._v("#")]),this._v(" AirVisual Node Binding")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"supported-things"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#supported-things","aria-hidden":"true"}},[this._v("#")]),this._v(" Supported Things")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"discovery"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#discovery","aria-hidden":"true"}},[this._v("#")]),this._v(" Discovery")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"binding-configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#binding-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Binding Configuration")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"thing-configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#thing-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Thing Configuration")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("table",[e("thead",[e("tr",[e("th",[t._v("Parameter")]),t._v(" "),e("th",[t._v("Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("address")]),t._v(" "),e("td",[t._v("Hostname or IP address of the Node")])]),t._v(" "),e("tr",[e("td",[t._v("username")]),t._v(" "),e("td",[t._v("The Node Samba share username. Default is 'airvisual'")])]),t._v(" "),e("tr",[e("td",[t._v("password")]),t._v(" "),e("td",[t._v("The Node Samba share password")])]),t._v(" "),e("tr",[e("td",[t._v("share")]),t._v(" "),e("td",[t._v("(Optional) The Node SMB share name. Default is 'airvisual'")])]),t._v(" "),e("tr",[e("td",[t._v("refresh")]),t._v(" "),e("td",[t._v("(Optional) The time (in seconds) to refresh the Node data. Default is 60, min is 30")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"channels"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#channels","aria-hidden":"true"}},[this._v("#")]),this._v(" Channels")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("table",[e("thead",[e("tr",[e("th",[t._v("Channel ID")]),t._v(" "),e("th",[t._v("Item Type")]),t._v(" "),e("th",[t._v("Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("co2")]),t._v(" "),e("td",[t._v("Number:Dimensionless")]),t._v(" "),e("td",[t._v("CO2 level, ppm")])]),t._v(" "),e("tr",[e("td",[t._v("humidity")]),t._v(" "),e("td",[t._v("Number:Dimensionless")]),t._v(" "),e("td",[t._v("Relative humidity, %")])]),t._v(" "),e("tr",[e("td",[t._v("aqi")]),t._v(" "),e("td",[t._v("Number:Dimensionless")]),t._v(" "),e("td",[t._v("Air Quality Index (US)")])]),t._v(" "),e("tr",[e("td",[t._v("pm_25")]),t._v(" "),e("td",[t._v("Number:Density")]),t._v(" "),e("td",[t._v("PM2.5 level, µg/m³")])]),t._v(" "),e("tr",[e("td",[t._v("temperature")]),t._v(" "),e("td",[t._v("Number:Temperature")]),t._v(" "),e("td",[t._v("Temperature")])]),t._v(" "),e("tr",[e("td",[t._v("used_memory")]),t._v(" "),e("td",[t._v("Number")]),t._v(" "),e("td",[t._v("Used memory")])]),t._v(" "),e("tr",[e("td",[t._v("timestamp")]),t._v(" "),e("td",[t._v("DateTime")]),t._v(" "),e("td",[t._v("Timestamp")])]),t._v(" "),e("tr",[e("td",[t._v("battery-level")]),t._v(" "),e("td",[t._v("Number")]),t._v(" "),e("td",[t._v("Battery level, %")])]),t._v(" "),e("tr",[e("td",[t._v("signal-strength")]),t._v(" "),e("td",[t._v("Number")]),t._v(" "),e("td",[t._v("Wi-Fi signal strength, 0-4")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"example"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example","aria-hidden":"true"}},[this._v("#")]),this._v(" Example")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"thing"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#thing","aria-hidden":"true"}},[this._v("#")]),this._v(" Thing")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("The preferred way to add AirVisual Node to the openHAB installation is autodiscovery,\nbut the AirVisual Node also can be configured using "),s("code",[this._v(".things")]),this._v(" file:")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v('airvisualnode:avnode:1a2b3c4 [ address="192.168.1.32", username="airvisual", password="12345", share="airvisual", refresh=60 ]\n')])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"items"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#items","aria-hidden":"true"}},[this._v("#")]),this._v(" Items")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-dsl"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Number")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Temperature")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Livingroom_Temperature")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Temperature [%.1f %unit%]"')]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v(" <temperature>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("channel"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"airvisualnode:avnode:1a2b3c4:temperature"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Number")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Dimensionless")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Livingroom_Humidity")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Humidity [%d %unit%]"')]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v(" <humidity>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("channel"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"airvisualnode:avnode:1a2b3c4:humidity"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Number")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Dimensionless")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Livingroom_CO2_Level")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"CO₂"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("channel"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"airvisualnode:avnode:1a2b3c4:co2"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Number")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Dimensionless")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Livingroom_Aqi_Level")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Air Quality Index"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" channel"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"airvisualnode:avnode:1a2b3c4:aqi"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Number")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("Density "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Livingroom_Pm25_Level")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"PM2.5 Level"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" channel"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"airvisualnode:avnode:1a2b3c4:pm_25"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DateTime")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Livingroom_Aqi_Timestamp")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"AQI Timestamp [%1$tH:%1$tM]"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" channel"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"airvisualnode:avnode:1a2b3c4:timestamp"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"rules"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#rules","aria-hidden":"true"}},[this._v("#")]),this._v(" Rules")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-rules"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("rule")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"AirVisual Node Temperature Rule"')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("when")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Item")]),t._v(" Livingroom_Temperature "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("changed")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("then")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token function-name"}},[t._v("Livingroom_Temperature")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("state "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("25.0")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("°C"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("logInfo")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"avnode.rules"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Temperature is above 25°C"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("rule")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"AirVisual Node Humidity Rule"')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("when")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Item")]),t._v(" Livingroom_Humidity "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("changed")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("then")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token function-name"}},[t._v("Livingroom_Humidity")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("state "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("35.0")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("logInfo")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"avnode.rules"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Humidity is below 35%"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("rule")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"AirVisual Node CO₂ Level Rule"')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("when")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Item")]),t._v(" Livingroom_CO2_Level "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("changed")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("then")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token function-name"}},[t._v("Livingroom_CO2_Level")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("state "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000.0")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ppm"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("logInfo")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"avnode.rules"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"CO₂ level is above 1000 ppm"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("rule")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"AirVisual Node PM2.5 Level Rule"')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("when")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Item")]),t._v(" Livingroom_Pm25_Level "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("changed")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("then")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token function-name"}},[t._v("Livingroom_Pm25_Level")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("state "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("25.0")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"µg/m³"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("logInfo")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"avnode.rules"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"PM2.5 level is above 25 µg/m³"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"sitemap"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sitemap","aria-hidden":"true"}},[this._v("#")]),this._v(" Sitemap")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-dsl"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("sitemap")]),t._v(" home "),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("label")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Home"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Frame")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("label")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Living Room"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Text")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("item")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("Livingroom_Temperature\n        "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Text")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("item")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("Livingroom_Humidity\n        "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Text")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("item")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("Livingroom_CO2_Level\n        "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Text")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("item")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("Livingroom_Aqi_Level\n        "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Text")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("item")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("Livingroom_Pm25_Level\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])}],!1,null,null,null);s.default=n.exports}}]);