(window.webpackJsonp=window.webpackJsonp||[]).push([[378],{1013:function(e,t,s){"use strict";s.r(t);var a=s(0),r=Object(a.a)({},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"content"},[e._m(0),e._v(" "),s("AddonLogo"),e._v(" "),s("p",[e._v("This binding integrates with the SleepIQ system from Select Comfort for Sleep Number beds.")]),e._v(" "),e._m(1),e._v(" "),s("p",[e._v("SleepIQ is a service provided by Select Comfort and sold as an option for Sleep Number beds.\nThe system collects data about the bed (including individual air chamber data for dual chamber beds).\nThis information includes whether or not a sleeper is in bed, the current sleep number setting, the pressure of the air chamber, and its link status.\nThis data can then be analyzed for any number of purposes, including improving sleep.")]),e._v(" "),e._m(2),e._v(" "),s("p",[e._v("The SleepIQ cloud service acts as the bridge.\nEach SleepIQ-enabled bed (regardless of the number of air chambers) is a Thing.\nCurrently, only dual-chamber beds are supported by this binding.")]),e._v(" "),e._m(3),e._v(" "),s("p",[e._v("The SleepIQ cloud thing must be added manually with the username and password used to register with the service.\nAfter that, beds are discovered automatically by querying the service.")]),e._v(" "),e._m(4),e._v(" "),s("p",[e._v("The binding requires no special configuration.")]),e._v(" "),e._m(5),e._v(" "),e._m(6),e._v(" "),s("p",[e._v("The bridge requires a username and a password.\nOptionally, you can also specify a polling interval.")]),e._v(" "),e._m(7),e._v(" "),e._m(8),e._v(" "),e._m(9),e._v(" "),s("p",[e._v("Each bed requires a bed ID as defined by the SleepIQ service.")]),e._v(" "),e._m(10),e._v(" "),e._m(11),e._v(" "),e._m(12),e._m(13),e._v(" "),e._m(14),e._v(" "),e._m(15),e._v(" "),e._m(16),e._v(" "),s("p",[e._v("All channels within this group are read-only.")]),e._v(" "),e._m(17),e._v(" "),e._m(18),e._v(" "),s("p",[e._v("Here is a sample item configuration:")]),e._v(" "),e._m(19),s("DocPreviousVersions"),e._v(" "),s("EditPageLink")],1)},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"sleepiq-binding"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sleepiq-binding","aria-hidden":"true"}},[this._v("#")]),this._v(" SleepIQ Binding")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"introduction"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#introduction","aria-hidden":"true"}},[this._v("#")]),this._v(" Introduction")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"supported-things"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#supported-things","aria-hidden":"true"}},[this._v("#")]),this._v(" Supported Things")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"discovery"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#discovery","aria-hidden":"true"}},[this._v("#")]),this._v(" Discovery")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"binding-configuration"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#binding-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Binding Configuration")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"thing-configuration"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#thing-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Thing Configuration")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"bridge-thing-id-cloud"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#bridge-thing-id-cloud","aria-hidden":"true"}},[this._v("#")]),this._v(' Bridge (Thing ID: "cloud")')])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("To enable verbose logging of HTTP requests and responses regarding the cloud service, enable DEBUG level logging on "),t("code",[this._v("SleepIQCloudHandler")]),this._v(".")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("table",[s("thead",[s("tr",[s("th",[e._v("Configuration Parameter")]),e._v(" "),s("th",[e._v("Type")]),e._v(" "),s("th",[e._v("Description")]),e._v(" "),s("th",[e._v("Default")])])]),e._v(" "),s("tbody",[s("tr",[s("td",[e._v("username")]),e._v(" "),s("td",[e._v("text")]),e._v(" "),s("td",[e._v("Username of a registered SleepIQ account owner")]),e._v(" "),s("td")]),e._v(" "),s("tr",[s("td",[e._v("password")]),e._v(" "),s("td",[e._v("text")]),e._v(" "),s("td",[e._v("Password of a registered SleepIQ account owner")]),e._v(" "),s("td")]),e._v(" "),s("tr",[s("td",[e._v("pollingInterval")]),e._v(" "),s("td",[e._v("integer")]),e._v(" "),s("td",[e._v("Seconds between fetching values from the cloud service")]),e._v(" "),s("td",[e._v("60")])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"dual-chamber-bed-thing-id-dualbed"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dual-chamber-bed-thing-id-dualbed","aria-hidden":"true"}},[this._v("#")]),this._v(' Dual-Chamber Bed (Thing ID: "dualBed")')])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("table",[s("thead",[s("tr",[s("th",[e._v("Configuration Parameter")]),e._v(" "),s("th",[e._v("Type")]),e._v(" "),s("th",[e._v("Description")]),e._v(" "),s("th",[e._v("Default")])])]),e._v(" "),s("tbody",[s("tr",[s("td",[e._v("bedId")]),e._v(" "),s("td",[e._v("text")]),e._v(" "),s("td",[e._v("The bed identifier identifies a specific bed")]),e._v(" "),s("td")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"sample-thing-configuration"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sample-thing-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Sample Thing Configuration")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-dsl"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("Bridge")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("sleepiq"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("cloud"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("1")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v(" username"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"mail@example.com"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" password"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"password"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" pollingInterval"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("60")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" logging"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("false")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("Thing")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("dualBed")]),e._v(" master "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v(" bedId"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"-9999999999999999999"')]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("Thing")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("dualBed")]),e._v(" guest "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v(" bedId"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"-8888888888888888888"')]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"channels"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#channels","aria-hidden":"true"}},[this._v("#")]),this._v(" Channels")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"dual-chamber-bed"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dual-chamber-bed","aria-hidden":"true"}},[this._v("#")]),this._v(" Dual-Chamber Bed")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("table",[s("thead",[s("tr",[s("th",[e._v("Channel Group ID")]),e._v(" "),s("th",[e._v("Group Type")]),e._v(" "),s("th",[e._v("Description")])])]),e._v(" "),s("tbody",[s("tr",[s("td",[e._v("left")]),e._v(" "),s("td",[e._v("Chamber")]),e._v(" "),s("td",[e._v("The left side air chamber")])]),e._v(" "),s("tr",[s("td",[e._v("right")]),e._v(" "),s("td",[e._v("Chamber")]),e._v(" "),s("td",[e._v("The right side air chamber")])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"chamber-channel-group"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#chamber-channel-group","aria-hidden":"true"}},[this._v("#")]),this._v(" Chamber Channel Group")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("table",[s("thead",[s("tr",[s("th",[e._v("Channel ID")]),e._v(" "),s("th",[e._v("Item Type")]),e._v(" "),s("th",[e._v("Description")])])]),e._v(" "),s("tbody",[s("tr",[s("td",[e._v("inBed")]),e._v(" "),s("td",[e._v("Switch")]),e._v(" "),s("td",[e._v("The presence of a person or object on the chamber")])]),e._v(" "),s("tr",[s("td",[e._v("sleepNumber")]),e._v(" "),s("td",[e._v("Number")]),e._v(" "),s("td",[e._v("The Sleep Number setting of the chamber")])]),e._v(" "),s("tr",[s("td",[e._v("pressure")]),e._v(" "),s("td",[e._v("Number")]),e._v(" "),s("td",[e._v("The current pressure inside the chamber")])]),e._v(" "),s("tr",[s("td",[e._v("lastLink")]),e._v(" "),s("td",[e._v("String")]),e._v(" "),s("td",[e._v("The amount of time that has passed since a connection was made from the chamber to the cloud service (D d HH:MM:SS)")])]),e._v(" "),s("tr",[s("td",[e._v("alertId")]),e._v(" "),s("td",[e._v("Number")]),e._v(" "),s("td",[e._v("Identifier for an alert condition with the chamber")])]),e._v(" "),s("tr",[s("td",[e._v("alertDetailedMessage")]),e._v(" "),s("td",[e._v("String")]),e._v(" "),s("td",[e._v("A detailed message describing an alert condition with the chamber")])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"items"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#items","aria-hidden":"true"}},[this._v("#")]),this._v(" Items")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-dsl"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("Switch")]),e._v("      "),s("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("MasterBedroom_SleepIQ_InBed_Alice")]),e._v("          "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"In Bed [%s]"')]),e._v("        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" channel"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"sleepiq:dualBed:1:master:left#inBed"')]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("Number")]),e._v("      "),s("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("MasterBedroom_SleepIQ_SleepNumber_Alice")]),e._v("    "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Sleep Number [%s]"')]),e._v("  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" channel"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"sleepiq:dualBed:1:master:left#sleepNumber"')]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("Number")]),e._v("      "),s("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("MasterBedroom_SleepIQ_Pressure_Alice")]),e._v("       "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Pressure [%s]"')]),e._v("      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" channel"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"sleepiq:dualBed:1:master:left#pressure"')]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("String")]),e._v("      "),s("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("MasterBedroom_SleepIQ_LastLink_Alice")]),e._v("       "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Last Update [%s]"')]),e._v("   "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" channel"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"sleepiq:dualBed:1:master:left#lastLink"')]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("Number")]),e._v("      "),s("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("MasterBedroom_SleepIQ_AlertId_Alice")]),e._v("        "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Alert ID [%s]"')]),e._v("      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" channel"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"sleepiq:dualBed:1:master:left#alertId"')]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("String")]),e._v("      "),s("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("MasterBedroom_SleepIQ_AlertMessage_Alice")]),e._v("   "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Alert Message [%s]"')]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" channel"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"sleepiq:dualBed:1:master:left#alertDetailedMessage"')]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("Switch")]),e._v("      "),s("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("MasterBedroom_SleepIQ_InBed_Bob")]),e._v("            "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"In Bed [%s]"')]),e._v("        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" channel"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"sleepiq:dualBed:1:master:right#inBed"')]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("Number")]),e._v("      "),s("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("MasterBedroom_SleepIQ_SleepNumber_Bob")]),e._v("      "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Sleep Number [%s]"')]),e._v("  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" channel"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"sleepiq:dualBed:1:master:right#sleepNumber"')]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("Number")]),e._v("      "),s("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("MasterBedroom_SleepIQ_Pressure_Bob")]),e._v("         "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Pressure [%s]"')]),e._v("      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" channel"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"sleepiq:dualBed:1:master:right#pressure"')]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("String")]),e._v("      "),s("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("MasterBedroom_SleepIQ_LastLink_Bob")]),e._v("         "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Last Update [%s]"')]),e._v("   "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" channel"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"sleepiq:dualBed:1:master:right#lastLink"')]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("Number")]),e._v("      "),s("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("MasterBedroom_SleepIQ_AlertId_Bob")]),e._v("          "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Alert ID [%s]"')]),e._v("      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" channel"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"sleepiq:dualBed:1:master:right#alertId"')]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("String")]),e._v("      "),s("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("MasterBedroom_SleepIQ_AlertMessage_Bob")]),e._v("     "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Alert Message [%s]"')]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" channel"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"sleepiq:dualBed:1:master:right#alertDetailedMessage"')]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])])}],!1,null,null,null);t.default=r.exports}}]);