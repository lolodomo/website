(window.webpackJsonp=window.webpackJsonp||[]).push([[346],{962:function(e,t,r){"use strict";r.r(t);var a=r(0),s=Object(a.a)({},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"content"},[r("h1",{attrs:{id:"powerdog-local-api-binding"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#powerdog-local-api-binding","aria-hidden":"true"}},[e._v("#")]),e._v(" PowerDog Local API Binding  "),r("Badge",{attrs:{type:"warn",text:"v1"}})],1),e._v(" "),r("p",[e._v("This is an openHAB binding for an "),r("a",{attrs:{href:"http://www.eco-data.de/produkte.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("eco-data PowerDog"),r("OutboundLink")],1),e._v(". It supports the "),r("a",{attrs:{href:"http://api.power-dog.eu/documentation/",target:"_blank",rel:"noopener noreferrer"}},[e._v("PowerAPI Local Device API"),r("OutboundLink")],1),e._v(" in the only available revision "),r("a",{attrs:{href:"http://api.power-dog.eu/documentation/DOCUMENATION/PowerAPI%20Local%20Device%20API%20Description_v0.b.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("v0.b"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("p",[e._v("The binding allows to query multiple PowerDogs if they are reachable in your network via TCP/IP. For querying, it is expected that your PowerDog is already set up.")]),e._v(" "),r("p",[e._v("The binding supports reading of all PowerDog variables available via PowerDog Local API. It also supports writing of PowerAPI sensors. The binding uses the "),r("a",{attrs:{href:"http://xmlrpc.sourceforge.net/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Redstone XML-RPC Library"),r("OutboundLink")],1),e._v(" which can be downloaded "),r("a",{attrs:{href:"http://sourceforge.net/projects/xmlrpc/",target:"_blank",rel:"noopener noreferrer"}},[e._v("here from Sourceforge"),r("OutboundLink")],1),e._v(" for accessing the PowerAPI.")]),e._v(" "),e._m(0),e._v(" "),e._m(1),e._v(" "),e._m(2),e._v(" "),e._m(3),e._v(" "),e._m(4),e._v(" "),r("p",[e._v("In order to bind an generic item to the device, you need to provide PowerDog Local API configuration settings in your items file, containing at least the value ID of the device you wish to control used on your PowerDog.")]),e._v(" "),r("p",[e._v("The syntax of the binding configuration strings accepted is the following:")]),e._v(" "),e._m(5),e._m(6),e._v(" "),e._m(7),e._v(" "),e._m(8),e._v(" "),e._m(9),e._v(" "),e._m(10),e._v(" "),e._m(11),e._v(" "),r("p",[e._v("Here are some examples for valid binding configuration strings:")]),e._v(" "),e._m(12),r("p",[e._v("These two lines have actually the same result:")]),e._v(" "),e._m(13),r("p",[e._v("This is a string result:")]),e._v(" "),e._m(14),e._m(15),e._v(" "),e._m(16),r("p",[e._v("The following item types are supported:")]),e._v(" "),e._m(17),e._v(" "),r("p",[e._v("PowerDog supports in the PowerAPI the following types for In-Bindings,  which should be  mapped to the following items:")]),e._v(" "),e._m(18),e._v(" "),r("p",[e._v("Item configuration examples are therefore:")]),e._v(" "),e._m(19),e._m(20),e._v(" "),r("p",[e._v("To reduce load on PowerDog, you are advised to limit querying of the PowerDog variables to not (much) less than every 5 minutes. Otherwise poor performance of the PowerDog (Web) interface including freezing of the box will occur.\nFor reading counters, the PowerDog Local API does not allow to read the value of a counter, but only the gradient is returned.")]),e._v(" "),e._m(21),e._v(" "),r("p",[e._v("PowerAPI counters are not yet supported due to missing documentation.")]),e._v(" "),r("DocPreviousVersions"),e._v(" "),r("EditPageLink")],1)},[function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"binding-configuration"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#binding-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Binding Configuration")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("You will normally need some basic configuration for accessing a PowerDog. The following settings can be made for one or several PowerDogs in "),t("code",[this._v("services/powerdog.cfg")]),this._v(".")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("table",[r("thead",[r("tr",[r("th",[e._v("Property")]),e._v(" "),r("th",[e._v("Default")]),e._v(" "),r("th",{staticStyle:{"text-align":"center"}},[e._v("Required")]),e._v(" "),r("th",[e._v("Description")])])]),e._v(" "),r("tbody",[r("tr",[r("td",[e._v("refresh")]),e._v(" "),r("td",[e._v("300000")]),e._v(" "),r("td",{staticStyle:{"text-align":"center"}},[e._v("No")]),e._v(" "),r("td",[e._v("the globally fastest refresh rate for all PowerDog servers configured. If you configure lower values for the single PowerDog servers or items, this value will override it. By default the value is set to 5 minutes - be aware that lower values mean more communication, which might result in too much load of your PowerDog.")])]),e._v(" "),r("tr",[r("td",[r("code",[e._v("<serverId>")]),e._v(".host")]),e._v(" "),r("td",[e._v("powerdog")]),e._v(" "),r("td",{staticStyle:{"text-align":"center"}},[e._v("No")]),e._v(" "),r("td",[e._v("PowerDog IP or host name.")])]),e._v(" "),r("tr",[r("td",[r("code",[e._v("<serverId>")]),e._v(".port")]),e._v(" "),r("td",[e._v("20000")]),e._v(" "),r("td",{staticStyle:{"text-align":"center"}},[e._v("No")]),e._v(" "),r("td",[e._v("PowerDog port for local API via XML-RPC. You might need configure this if changed or port redirection is used.")])]),e._v(" "),r("tr",[r("td",[r("code",[e._v("<serverId>")]),e._v(".password")]),e._v(" "),r("td",[e._v("empty string")]),e._v(" "),r("td",{staticStyle:{"text-align":"center"}},[e._v("usually")]),e._v(" "),r("td",[e._v("Password set for PowerDog PowerAPI. Normally you will need to set this value. On a PowerDog it is set to the unlock key by default.")])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Using different "),t("code",[this._v("<serverId>")]),this._v("s, you can configure several PowerDog servers at a time.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"item-configuration"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#item-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Item Configuration")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v('powerdoglocalapi="<<serverId>:<valueID>:<refreshInterval>[:<variableName>]"\n')])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[e._v("The "),r("code",[e._v("<")]),e._v(" in front of "),r("code",[e._v("<serverId>")]),e._v(" tells the binding to "),r("em",[e._v("read")]),e._v(" the following value, while "),r("code",[e._v(">")]),e._v(" means to write (only applicable for PowerAPI sensors).")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("The "),t("code",[this._v("serverId")]),this._v(" corresponds to the device which is introduced in openhab.cfg. 'serverId' can be any alphanumeric string as long as it is the same in the binding and configuration file. "),t("em",[this._v("NOTE")]),this._v(": The parameter is case sensitive!")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("The "),t("code",[this._v("valueID")]),this._v(" corresponds to the PowerDog configuration key or value ID of the device you want to query.\n"),t("em",[this._v("How to get the PowerDog key or value ID")]),this._v(": Please configure a (even wrong example) item and run OpenHAB in debug mode. In the generated log file you will find the complete response of your PowerDog server indicating all keys/valueIDs.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("The "),t("code",[this._v("refreshInterval")]),this._v(" is the interval in milliseconds to refresh the data. If the value is set to a value lower than the refresh rate of the corresponding PowerDog unit, it will be set to that value. "),t("em",[this._v("NOTE")]),this._v(": For values which are written (instead of being read), this is the minimum time between write operations. Values will be only written if updated, so you will need to take care to update them e.g. regularly by using a rule.")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[e._v("The 'variableName' is optional and defaults to "),r("code",[e._v("Current_Value")]),e._v(", as this is the variable where PowerDog returns the current value. You might also want to query e.g. for "),r("code",[e._v("Last_Read_Average")]),e._v(" or even values like the static "),r("code",[e._v("Unit")]),e._v(" (see the PowerDog PowerAPI Local Device API documentation) and need to add "),r("code",[e._v("variableName")]),e._v(" in that case.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("The "),t("code",[this._v("value-name")]),this._v(" corresponds to the value you want to query.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v('{ powerdoglocalapi="<serverId:arithmetic_1234567890:300000" }\n')])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v('{ powerdoglocalapi="<powerdog:pv_global_1234567890:300000" }\n{ powerdoglocalapi="<powerdog:pv_global_1234567890:300000:Current_Value" }\n')])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v('{ powerdoglocalapi="<powerdog:impulsecounter_1234567890:300000:Unit_1000000" }\n')])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("This is a configuration for writing a value to a PowerAPI sensor. Configuration of the "),t("code",[this._v("variableName")]),this._v(" is ignored in that case, because writing to PowerDog Local API only affects the "),t("code",[this._v("Current_Value")]),this._v(".")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v('{ powerdoglocalapi=">powerdog:powerapi_1234567890:300000" }\n')])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[e._v("Number")]),e._v(" "),r("li",[e._v("Switch")]),e._v(" "),r("li",[e._v("Dimmer")]),e._v(" "),r("li",[e._v("Contact")]),e._v(" "),r("li",[e._v("String")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("table",[r("thead",[r("tr",[r("th",[e._v("PowerDog unit")]),e._v(" "),r("th",[e._v("openHAB item type")]),e._v(" "),r("th",[e._v("Remark")])])]),e._v(" "),r("tbody",[r("tr",[r("td",[e._v("V, A, °C, W, l, m/s, km/h")]),e._v(" "),r("td",[e._v("Number, String")]),e._v(" "),r("td")]),e._v(" "),r("tr",[r("td",[e._v("%")]),e._v(" "),r("td",[e._v("Number, Switch, Dimmer, Contact, String")]),e._v(" "),r("td",[e._v("In case of Switch, 100% will be mapped to ON; In case of Contact, 100% is mapped to OPEN")])]),e._v(" "),r("tr",[r("td",[e._v("(String)")]),e._v(" "),r("td",[e._v("String")]),e._v(" "),r("td",[e._v("Other values than 'Current_Value' might be only mapped to String")])])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-dsl"}},[r("code",[r("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("Number")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("Power_PV")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[e._v('"PV Power [%.1f W]"')]),r("span",{pre:!0,attrs:{class:"token function"}},[e._v(" <sun>")]),r("span",{pre:!0,attrs:{class:"token tag"}},[e._v(" (PV)")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" powerdoglocalapi"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),r("span",{pre:!0,attrs:{class:"token string"}},[e._v('"<powerdog:impulsecounter_1234567890:300000"')]),e._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("Number")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("Power_Supplied")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Supplied Power [%.1f W]"')]),r("span",{pre:!0,attrs:{class:"token function"}},[e._v(" <energy>")]),r("span",{pre:!0,attrs:{class:"token tag"}},[e._v(" (PV)")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" powerdoglocalapi"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),r("span",{pre:!0,attrs:{class:"token string"}},[e._v('"<powerdog:impulsecounter_1372456576:10000"')]),e._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("String")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("Power_Supplied_Unit1M")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" powerdoglocalapi"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),r("span",{pre:!0,attrs:{class:"token string"}},[e._v('"<powerdog:impulsecounter_1372456576:300000:Unit_1000000"')]),e._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("Number")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("Temperature_Outside")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Outside temperature [%.1f °C]"')]),r("span",{pre:!0,attrs:{class:"token function"}},[e._v(" <temperature>")]),r("span",{pre:!0,attrs:{class:"token tag"}},[e._v(" (Weather)")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" powerdoglocalapi"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),r("span",{pre:!0,attrs:{class:"token string"}},[e._v('"<powerdog:onewire_1234567890:300000"')]),e._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("Number")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("Temperature_Outside")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Outside temperature [%.1f °C]"')]),r("span",{pre:!0,attrs:{class:"token function"}},[e._v(" <temperature>")]),r("span",{pre:!0,attrs:{class:"token tag"}},[e._v(" (Weather)")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" powerdoglocalapi"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),r("span",{pre:!0,attrs:{class:"token string"}},[e._v('"<powerdog:onewire_1234567890:300000"')]),e._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("Number")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("OpenHAB_Alive_2PD")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Connection OpenHAB->PowerDog alive [%.1f %%]"')]),r("span",{pre:!0,attrs:{class:"token function"}},[e._v(" <network>")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" powerdoglocalapi"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),r("span",{pre:!0,attrs:{class:"token string"}},[e._v('">pd:powerapi_1234567890:150000"')]),e._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"known-limitations"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#known-limitations","aria-hidden":"true"}},[this._v("#")]),this._v(" Known Limitations")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"roadmap-wishlist"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#roadmap-wishlist","aria-hidden":"true"}},[this._v("#")]),this._v(" Roadmap & Wishlist")])}],!1,null,null,null);t.default=s.exports}}]);