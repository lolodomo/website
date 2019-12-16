(window.webpackJsonp=window.webpackJsonp||[]).push([[267],{839:function(t,e,a){"use strict";a.r(e);var n=a(0),s=Object(n.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),a("p",[t._v("This is an openHAB binding for Mitsubishi MELCloud ("),a("a",{attrs:{href:"https://www.melcloud.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.melcloud.com/"),a("OutboundLink")],1),t._v(").\nInstalling this binding you can control your Mitsubishi devices from openHAB without accessing the MELCloud App and benefiting from all openHAB automations.")]),t._v(" "),t._m(1),t._v(" "),a("p",[t._v("Supported thing types")]),t._v(" "),t._m(2),t._v(" "),a("p",[t._v("A bridge is required to connect to your MELCloud account.")]),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),a("p",[t._v("Binding support also manual thing configuration by thing files.")]),t._v(" "),t._m(6),t._v(" "),a("p",[t._v("In order to manually create a thing file and not use the discovery routine you will need to know device MELCloud device ID.\nThis is a bit difficult to get. The easiest way of getting this is enable debug level logging of the binding or discovery devices by the binding (discovered device can be removed afterwards).")]),t._v(" "),a("p",[t._v("MELCloud account configuration:")]),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),a("p",[t._v("A.C. device and Heatpump device configuration:")]),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),a("p",[t._v("A.C. device channels")]),t._v(" "),t._m(11),t._v(" "),a("p",[t._v("Heatpump device channels")]),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),t._m(15),t._m(16),t._v(" "),t._m(17),a("DocPreviousVersions"),t._v(" "),a("EditPageLink")],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"melcloud-binding"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#melcloud-binding","aria-hidden":"true"}},[this._v("#")]),this._v(" MELCloud Binding")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"supported-things"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#supported-things","aria-hidden":"true"}},[this._v("#")]),this._v(" Supported Things")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("melcloudaccount (bridge)")]),this._v(" "),e("li",[this._v("acdevice")]),this._v(" "),e("li",[this._v("heatpump")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"discovery"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#discovery","aria-hidden":"true"}},[this._v("#")]),this._v(" Discovery")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Discovery is used "),e("em",[this._v("after")]),this._v(" a bridge has been created and configured with your login information.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",[e("li",[this._v("Add the binding")]),this._v(" "),e("li",[this._v("Add a new thing of type melcloudaccount and configure with username and password")]),this._v(" "),e("li",[this._v("Go to Inbox and start discovery devices using MELCloud Binding")]),this._v(" "),e("li",[this._v("Supported devices (A.C. Device, Heatpump Device) should appear in your inbox")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"thing-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#thing-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Thing Configuration")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("table",[a("thead",[a("tr",[a("th",[t._v("Config")]),t._v(" "),a("th",[t._v("Mandatory")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("username")]),t._v(" "),a("td",[t._v("x")]),t._v(" "),a("td",[t._v("Email address tied to MELCloud account.")])]),t._v(" "),a("tr",[a("td",[t._v("password")]),t._v(" "),a("td",[t._v("x")]),t._v(" "),a("td",[t._v("Password to MELCloud account.")])]),t._v(" "),a("tr",[a("td",[t._v("language")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("Language ID, see table below.")])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("table",[a("thead",[a("tr",[a("th",[t._v("LanguageId")]),t._v(" "),a("th",[t._v("Language")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("0")]),t._v(" "),a("td",[t._v("English (default)")])]),t._v(" "),a("tr",[a("td",[t._v("1")]),t._v(" "),a("td",[t._v("Bulgarian")])]),t._v(" "),a("tr",[a("td",[t._v("2")]),t._v(" "),a("td",[t._v("Czech")])]),t._v(" "),a("tr",[a("td",[t._v("3")]),t._v(" "),a("td",[t._v("Danish")])]),t._v(" "),a("tr",[a("td",[t._v("4")]),t._v(" "),a("td",[t._v("German")])]),t._v(" "),a("tr",[a("td",[t._v("5")]),t._v(" "),a("td",[t._v("Estonian")])]),t._v(" "),a("tr",[a("td",[t._v("6")]),t._v(" "),a("td",[t._v("Spanish")])]),t._v(" "),a("tr",[a("td",[t._v("7")]),t._v(" "),a("td",[t._v("French")])]),t._v(" "),a("tr",[a("td",[t._v("8")]),t._v(" "),a("td",[t._v("Armenian")])]),t._v(" "),a("tr",[a("td",[t._v("9")]),t._v(" "),a("td",[t._v("Latvian")])]),t._v(" "),a("tr",[a("td",[t._v("10")]),t._v(" "),a("td",[t._v("Lithuanian")])]),t._v(" "),a("tr",[a("td",[t._v("11")]),t._v(" "),a("td",[t._v("Hungarian")])]),t._v(" "),a("tr",[a("td",[t._v("12")]),t._v(" "),a("td",[t._v("Dutch")])]),t._v(" "),a("tr",[a("td",[t._v("13")]),t._v(" "),a("td",[t._v("Norwegian")])]),t._v(" "),a("tr",[a("td",[t._v("14")]),t._v(" "),a("td",[t._v("Polish")])]),t._v(" "),a("tr",[a("td",[t._v("15")]),t._v(" "),a("td",[t._v("Portuguese")])]),t._v(" "),a("tr",[a("td",[t._v("16")]),t._v(" "),a("td",[t._v("Russian")])]),t._v(" "),a("tr",[a("td",[t._v("17")]),t._v(" "),a("td",[t._v("Finnish")])]),t._v(" "),a("tr",[a("td",[t._v("18")]),t._v(" "),a("td",[t._v("Swedish")])]),t._v(" "),a("tr",[a("td",[t._v("19")]),t._v(" "),a("td",[t._v("Italian")])]),t._v(" "),a("tr",[a("td",[t._v("20")]),t._v(" "),a("td",[t._v("Ukrainian")])]),t._v(" "),a("tr",[a("td",[t._v("21")]),t._v(" "),a("td",[t._v("Turkish")])]),t._v(" "),a("tr",[a("td",[t._v("22")]),t._v(" "),a("td",[t._v("Greek")])]),t._v(" "),a("tr",[a("td",[t._v("23")]),t._v(" "),a("td",[t._v("Croatian")])]),t._v(" "),a("tr",[a("td",[t._v("24")]),t._v(" "),a("td",[t._v("Romanian")])]),t._v(" "),a("tr",[a("td",[t._v("25")]),t._v(" "),a("td",[t._v("Slovenian")])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("table",[a("thead",[a("tr",[a("th",[t._v("Config")]),t._v(" "),a("th",[t._v("Mandatory")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("deviceID")]),t._v(" "),a("td",[t._v("x")]),t._v(" "),a("td",[t._v("MELCloud device ID.")])]),t._v(" "),a("tr",[a("td",[t._v("buildingID")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("MELCloud building ID. If not defined, binding tries to find matching id by device ID.")])]),t._v(" "),a("tr",[a("td",[t._v("pollingInterval")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("Refresh time interval in seconds for updates from MELCloud.  Defaults to 60 seconds.")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"channels"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#channels","aria-hidden":"true"}},[this._v("#")]),this._v(" Channels")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("table",[a("thead",[a("tr",[a("th",[t._v("Channel")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Description")]),t._v(" "),a("th",[t._v("Read Only")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("power")]),t._v(" "),a("td",[t._v("Switch")]),t._v(" "),a("td",[t._v("Power Status of Device.")]),t._v(" "),a("td",[t._v("False")])]),t._v(" "),a("tr",[a("td",[t._v("operationMode")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v('Operation mode: "1" = Heat, "2" = Dry, "3" = Cool, "7" = Fan, "8" = Auto.')]),t._v(" "),a("td",[t._v("False")])]),t._v(" "),a("tr",[a("td",[t._v("setTemperature")]),t._v(" "),a("td",[t._v("Number:Temperature")]),t._v(" "),a("td",[t._v("Set Temperature: Min = 10, Max = 40.")]),t._v(" "),a("td",[t._v("False")])]),t._v(" "),a("tr",[a("td",[t._v("fanSpeed")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v('Fan speed: "0" = Auto, "1" = 1, "2" = 2, "3" = 3, "4" = 4, "5" = 5.')]),t._v(" "),a("td",[t._v("False")])]),t._v(" "),a("tr",[a("td",[t._v("vaneHorizontal")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v('Vane Horizontal: "0" = Auto, "1" = 1, "2" = 2, "3" = 3, "4" = 4, "5" = 5, "12" = Swing.')]),t._v(" "),a("td",[t._v("False")])]),t._v(" "),a("tr",[a("td",[t._v("vaneVertical")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v('Vane Vertical: "0" = Auto, "1" = 1, "2" = 2, "3" = 3, "4" = 4, "5" = 5, "7" = Swing.')]),t._v(" "),a("td",[t._v("False")])]),t._v(" "),a("tr",[a("td",[t._v("roomTemperature")]),t._v(" "),a("td",[t._v("Number:Temperature")]),t._v(" "),a("td",[t._v("Room temperature.")]),t._v(" "),a("td",[t._v("True")])]),t._v(" "),a("tr",[a("td",[t._v("lastCommunication")]),t._v(" "),a("td",[t._v("DateTime")]),t._v(" "),a("td",[t._v("Last Communication time when MELCloud communicated to the device.")]),t._v(" "),a("td",[t._v("True")])]),t._v(" "),a("tr",[a("td",[t._v("nextCommunication")]),t._v(" "),a("td",[t._v("DateTime")]),t._v(" "),a("td",[t._v("Next communication time when MELCloud will communicate to the device.")]),t._v(" "),a("td",[t._v("True")])]),t._v(" "),a("tr",[a("td",[t._v("offline")]),t._v(" "),a("td",[t._v("Switch")]),t._v(" "),a("td",[t._v("Is device in offline state.")]),t._v(" "),a("td",[t._v("True")])]),t._v(" "),a("tr",[a("td",[t._v("hasPendingCommand")]),t._v(" "),a("td",[t._v("Switch")]),t._v(" "),a("td",[t._v("Device has a pending command(s).")]),t._v(" "),a("td",[t._v("True")])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("table",[a("thead",[a("tr",[a("th",[t._v("Channel")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Description")]),t._v(" "),a("th",[t._v("Read Only")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("power")]),t._v(" "),a("td",[t._v("Switch")]),t._v(" "),a("td",[t._v("Power Status of Device.")]),t._v(" "),a("td",[t._v("False")])]),t._v(" "),a("tr",[a("td",[t._v("forcedHotWaterMode")]),t._v(" "),a("td",[t._v("Switch")]),t._v(" "),a("td",[t._v("If water mode is Heat Now (true) or Auto (false)")]),t._v(" "),a("td",[t._v("False")])]),t._v(" "),a("tr",[a("td",[t._v("setTemperatureZone1")]),t._v(" "),a("td",[t._v("Number:Temperature")]),t._v(" "),a("td",[t._v("Set Temperature Zone 1: Min = 10, Max = 30.")]),t._v(" "),a("td",[t._v("False")])]),t._v(" "),a("tr",[a("td",[t._v("roomTemperatureZone1")]),t._v(" "),a("td",[t._v("Number:Temperature")]),t._v(" "),a("td",[t._v("Room temperature Zone 1.")]),t._v(" "),a("td",[t._v("True")])]),t._v(" "),a("tr",[a("td",[t._v("tankWaterTemperature")]),t._v(" "),a("td",[t._v("Number:Temperature")]),t._v(" "),a("td",[t._v("Tank water temperature.")]),t._v(" "),a("td",[t._v("True")])]),t._v(" "),a("tr",[a("td",[t._v("lastCommunication")]),t._v(" "),a("td",[t._v("DateTime")]),t._v(" "),a("td",[t._v("Last Communication time when MELCloud communicated to the device.")]),t._v(" "),a("td",[t._v("True")])]),t._v(" "),a("tr",[a("td",[t._v("nextCommunication")]),t._v(" "),a("td",[t._v("DateTime")]),t._v(" "),a("td",[t._v("Next communication time when MELCloud will communicate to the device.")]),t._v(" "),a("td",[t._v("True")])]),t._v(" "),a("tr",[a("td",[t._v("offline")]),t._v(" "),a("td",[t._v("Switch")]),t._v(" "),a("td",[t._v("Is device in offline state.")]),t._v(" "),a("td",[t._v("True")])]),t._v(" "),a("tr",[a("td",[t._v("hasPendingCommand")]),t._v(" "),a("td",[t._v("Switch")]),t._v(" "),a("td",[t._v("Device has a pending command(s).")]),t._v(" "),a("td",[t._v("True")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"full-example-for-items-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#full-example-for-items-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Full Example for items configuration")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("melcloud.things")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dsl"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Bridge")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("melcloud"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("melcloudaccount"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("myaccount")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"My MELCloud account"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" username"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"user.name@example.com"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" password"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"xxxxxx"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" language"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Thing")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("acdevice")]),t._v(" livingroom "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Livingroom A.C. device"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" deviceID"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("123456")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" pollingInterval"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("60")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Thing")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("heatpump")]),t._v(" attic "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Attic Heatpump device"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" deviceID"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("789012")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" pollingInterval"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("60")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("melcloud.items")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dsl"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Switch")]),t._v("      "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("power")]),t._v("               "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" channel"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"melcloud:acdevice:myaccount:livingroom:power"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("String")]),t._v("      "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("operationMode")]),t._v("       "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" channel"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"melcloud:acdevice:myaccount:livingroom:operationMode"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Number")]),t._v("      "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("setTemperature")]),t._v("      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" channel"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"melcloud:acdevice:myaccount:livingroom:setTemperature"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("String")]),t._v("      "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("fanSpeed")]),t._v("            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" channel"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"melcloud:acdevice:myaccount:livingroom:fanSpeed"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("String")]),t._v("      "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("vaneHorizontal")]),t._v("      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" channel"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"melcloud:acdevice:myaccount:livingroom:vaneHorizontal"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("String")]),t._v("      "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("vaneVertical")]),t._v("        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" channel"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"melcloud:acdevice:myaccount:livingroom:vaneVertical"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Number")]),t._v("      "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("roomTemperature")]),t._v("     "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" channel"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"melcloud:acdevice:myaccount:livingroom:roomTemperature"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DateTime")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("lastCommunication")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" channel"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"melcloud:acdevice:myaccount:livingroom:lastCommunication"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DateTime")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("nextCommunication")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" channel"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"melcloud:acdevice:myaccount:livingroom:nextCommunication"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Switch")]),t._v("      "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("offline")]),t._v("             "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" channel"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"melcloud:acdevice:myaccount:livingroom:offline"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Switch")]),t._v("      "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("hasPendingCommand")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" channel"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"melcloud:acdevice:myaccount:livingroom:hasPendingCommand"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Switch")]),t._v("      "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("heatpumpPower")]),t._v("               "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" channel"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"melcloud:heatpump:myaccount:attic:power"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Switch")]),t._v("      "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("heatpumpForcedHotWaterMode")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" channel"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"melcloud:heatpump:myaccount:attic:forcedHotWaterMode"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Number")]),t._v("      "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("heatpumpSetTemperatureZone1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" channel"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"melcloud:heatpump:myaccount:attic:setTemperatureZone1"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Number")]),t._v("      "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("heatpumpRoomTemperatureZone1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" channel"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"melcloud:heatpump:myaccount:attic:roomTemperatureZone1"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Number")]),t._v("      "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("heatpumpTankWaterTemperature")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" channel"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"melcloud:heatpump:myaccount:attic:tankWaterTemperature"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DateTime")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("heatpumpLastCommunication")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" channel"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"melcloud:heatpump:myaccount:attic:lastCommunication"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DateTime")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("heatpumpNextCommunication")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" channel"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"melcloud:heatpump:myaccount:attic:nextCommunication"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Switch")]),t._v("      "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("heatpumpOffline")]),t._v("             "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" channel"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"melcloud:heatpump:myaccount:attic:offline"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Switch")]),t._v("      "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("heatpumpHasPendingCommand")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" channel"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"melcloud:heatpump:myaccount:attic:hasPendingCommand"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])}],!1,null,null,null);e.default=s.exports}}]);