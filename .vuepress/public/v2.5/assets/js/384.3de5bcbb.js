(window.webpackJsonp=window.webpackJsonp||[]).push([[384],{1022:function(e,t,r){"use strict";r.r(t);var a=r(0),n=Object(a.a)({},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"content"},[e._m(0),e._v(" "),r("AddonLogo"),e._v(" "),r("p",[e._v("The SolarEdge binding is used to get live data from from SolarEdge inverters via the central web api. This binding should in general be compatible with all inverter models that upload data to the solaredge portal.\nOnly read access is supported.")]),e._v(" "),e._m(1),e._v(" "),r("p",[e._v('This binding provides only one thing type: "generic" which is the inverter itself.\nAs the name suggests it is generic which means it applies to all available inverters.\nCreate one inverter thing per physical inverter installation available in your home(s).\nAdditional stuff like batteries is automatically supported.\nInverters which have a meter attached allow more detailed measuring.\nEither a SolarEdge modbus meter or a S0 meter (export or consumption meter) can be used.\nWhile on the one hand the S0 meter is the cheaper solution the solaredge meter on the other hand can be used as combined import+export meter and therefore allows even more detailed measurements.\nFor more details please see here:')]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://www.solaredge.com/products/pv-monitoring/accessories/css-wattnode-modbus-meter",target:"_blank",rel:"noopener noreferrer"}},[e._v("SolarEdge meter"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://www.solaredge.com/solutions/feed-in-limitation-and-metering-solution#",target:"_blank",rel:"noopener noreferrer"}},[e._v("Avoiding Feed-In limitations with consumption meters"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://solaredge.com/sites/default/files/feed-in_limitation_application_note.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("Detailed description of meter setup"),r("OutboundLink")],1)])]),e._v(" "),e._m(2),e._v(" "),r("p",[e._v("Auto-Discovery is not supported, as access requires authentication.")]),e._v(" "),e._m(3),e._v(" "),r("p",[e._v("The following configuration parameters are available for this thing:")]),e._v(" "),r("ul",[r("li",[r("strong",[e._v("tokenOrApiKey")]),e._v(" (required)\nEither the "),r("a",{attrs:{href:"https://www.youtube.com/watch?v=iR26nmL5bXg",target:"_blank",rel:"noopener noreferrer"}},[e._v("official API Key"),r("OutboundLink")],1),e._v(' for using the public API or when using the inofficial private API: a token which can be retrieved from browser\'s cookie store when logged into the SolarEdge website.\nIt is called "SPRING_SECURITY_REMEMBER_ME_COOKIE".\nWhen using this token, see also '),r("code",[e._v("usePrivateApi")]),e._v(" and "),r("code",[e._v("meterInstalled")]),e._v(".")])]),e._v(" "),r("p",[e._v("E.g. for Firefox, use the built-in "),r("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Tools/Storage_Inspector",target:"_blank",rel:"noopener noreferrer"}},[e._v("Storage Inspector"),r("OutboundLink")],1),e._v(" to retrieve the token.")]),e._v(" "),r("ul",[r("li",[r("p",[r("strong",[e._v("solarId")]),e._v(" (required)"),r("br"),e._v("\nId of your inverter at SolarEdge (can be found in the URL after successful login: "),r("a",{attrs:{href:"https://monitoring.solaredge.com/solaredge-web/p/site/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://monitoring.solaredge.com/solaredge-web/p/site/"),r("OutboundLink")],1),e._v(" "),r("strong",[e._v("<solarId>")]),e._v(" /#/dashboard)")])]),e._v(" "),e._m(4),e._v(" "),e._m(5),e._v(" "),e._m(6),e._v(" "),e._m(7)]),e._v(" "),e._m(8),e._v(" "),r("p",[e._v("Available channels depend on the specific setup e.g. if a meter and/or a battery is present.\nAll numeric channels use the "),r("a",{attrs:{href:"https://www.eclipse.org/smarthome/blog/2018/02/22/units-of-measurement.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("UoM feature"),r("OutboundLink")],1),e._v(".\nThis means you can easily change the desired unit e.g. MWh instead of kWh just in your item definition.\nFollowing channels are currently available:")]),e._v(" "),e._m(9),e._v(" "),e._m(10),e._v(" "),e._m(11),e._v(" "),e._m(12),e._v(" "),e._m(13),e._m(14),e._v(" "),e._m(15),e._m(16),e._v(" "),e._m(17),e._m(18),e._v(" "),e._m(19),e._m(20),e._v(" "),e._m(21),r("DocPreviousVersions"),e._v(" "),r("EditPageLink")],1)},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"solaredge-binding"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#solaredge-binding","aria-hidden":"true"}},[this._v("#")]),this._v(" SolarEdge Binding")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"supported-things"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#supported-things","aria-hidden":"true"}},[this._v("#")]),this._v(" Supported Things")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"discovery"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#discovery","aria-hidden":"true"}},[this._v("#")]),this._v(" Discovery")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"thing-configuration"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#thing-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Thing Configuration")])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("p",[t("strong",[this._v("usePrivateApi")]),this._v(" (optional)"),t("br"),this._v("\ncan be set to true to use the private API.\nPrivate API has no limit regarding query frequency but is less stable.\nPrivate API will only gather live data if a meter is available.\nThe official public API has a limit of 300 queries per day but should be much more reliable/stable.\nSet this to true when using token retrieved from browser in "),t("code",[this._v("tokenOrApiKey")]),this._v(".\nSee also "),t("code",[this._v("meterInstalled")]),this._v(". (default = false)")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("p",[t("strong",[this._v("meterInstalled")]),this._v(" (optional)"),t("br"),this._v("\ncan be set to true for setups that contain a meter which is connected to the inverter.\nA meter allows more detailed data retrieval.\nThis must be set to true when using token retrieved from browser in "),t("code",[this._v("tokenOrApiKey")]),this._v(".\nThis can be set either to true or false when using the API key. (default = false)")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("p",[t("strong",[this._v("liveDataPollingInterval")]),this._v(" (optional)"),t("br"),this._v("\ninterval (minutes) in which live data values are retrieved from Solaredge. Setting less than 10 minutes is only allowed when using private API. (default = 10).")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("p",[t("strong",[this._v('"aggregateDataPollingInterval"')]),this._v(" (optional)"),t("br"),this._v("\ninterval (minutes) in which aggregate data values are retrieved from Solaredge. Setting less than 60 is only allowed when using private API. (default = 60).")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"channels"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#channels","aria-hidden":"true"}},[this._v("#")]),this._v(" Channels")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("table",[r("thead",[r("tr",[r("th",[e._v("Channel Type ID")]),e._v(" "),r("th",[e._v("Item Type")]),e._v(" "),r("th",[e._v("Description")]),e._v(" "),r("th",[e._v("Remark")])])]),e._v(" "),r("tbody",[r("tr",[r("td",[e._v("live#production")]),e._v(" "),r("td",[e._v("Number:Power")]),e._v(" "),r("td",[e._v("Current PV production")]),e._v(" "),r("td",[e._v("general available")])]),e._v(" "),r("tr",[r("td",[e._v("live#pv_status")]),e._v(" "),r("td",[e._v("String")]),e._v(" "),r("td",[e._v("Current PV status")]),e._v(" "),r("td",[e._v("requires meter attached and 'meterInstalled' set")])]),e._v(" "),r("tr",[r("td",[e._v("live#consumption")]),e._v(" "),r("td",[e._v("Number:Power")]),e._v(" "),r("td",[e._v("Current power consumption")]),e._v(" "),r("td",[e._v("requires meter attached and 'meterInstalled' set")])]),e._v(" "),r("tr",[r("td",[e._v("live#load_status")]),e._v(" "),r("td",[e._v("String")]),e._v(" "),r("td",[e._v("Current load status")]),e._v(" "),r("td",[e._v("requires meter attached and 'meterInstalled' set")])]),e._v(" "),r("tr",[r("td",[e._v("live#battery_charge")]),e._v(" "),r("td",[e._v("Number:Power")]),e._v(" "),r("td",[e._v("Current charge flow")]),e._v(" "),r("td",[e._v("requires battery")])]),e._v(" "),r("tr",[r("td",[e._v("live#battery_discharge")]),e._v(" "),r("td",[e._v("Number:Power")]),e._v(" "),r("td",[e._v("Current discharge flow")]),e._v(" "),r("td",[e._v("requires battery")])]),e._v(" "),r("tr",[r("td",[e._v("live#battery_charge_discharge")]),e._v(" "),r("td",[e._v("Number:Power")]),e._v(" "),r("td",[e._v("Current charge/discharge flow (+/-)")]),e._v(" "),r("td",[e._v("requires battery")])]),e._v(" "),r("tr",[r("td",[e._v("live#battery_level")]),e._v(" "),r("td",[e._v("Number:Dimensionless")]),e._v(" "),r("td",[e._v("Current charge level")]),e._v(" "),r("td",[e._v("requires battery")])]),e._v(" "),r("tr",[r("td",[e._v("live#battery_status")]),e._v(" "),r("td",[e._v("String")]),e._v(" "),r("td",[e._v("Current battery status")]),e._v(" "),r("td",[e._v("requires battery")])]),e._v(" "),r("tr",[r("td",[e._v("live#battery_critical")]),e._v(" "),r("td",[e._v("String")]),e._v(" "),r("td",[e._v("true or false")]),e._v(" "),r("td",[e._v("requires battery")])]),e._v(" "),r("tr",[r("td",[e._v("live#import")]),e._v(" "),r("td",[e._v("Number:Power")]),e._v(" "),r("td",[e._v("Current import from grid")]),e._v(" "),r("td",[e._v("requires meter attached and 'meterInstalled' set")])]),e._v(" "),r("tr",[r("td",[e._v("live#export")]),e._v(" "),r("td",[e._v("Number:Power")]),e._v(" "),r("td",[e._v("Current export to grid")]),e._v(" "),r("td",[e._v("requires meter attached and 'meterInstalled' set")])]),e._v(" "),r("tr",[r("td",[e._v("live#grid_status")]),e._v(" "),r("td",[e._v("String")]),e._v(" "),r("td",[e._v("Current grid status")]),e._v(" "),r("td",[e._v("requires meter attached and 'meterInstalled' set")])]),e._v(" "),r("tr",[r("td",[e._v("aggregate_day#production")]),e._v(" "),r("td",[e._v("Number:Energy")]),e._v(" "),r("td",[e._v("Day Aggregate PV production")]),e._v(" "),r("td",[e._v("general available")])]),e._v(" "),r("tr",[r("td",[e._v("aggregate_day#consumption")]),e._v(" "),r("td",[e._v("Number:Energy")]),e._v(" "),r("td",[e._v("Day Aggregate power consumption")]),e._v(" "),r("td",[e._v("requires meter attached and 'meterInstalled' set")])]),e._v(" "),r("tr",[r("td",[e._v("aggregate_day#selfConsumptionForConsumption")]),e._v(" "),r("td",[e._v("Number:Energy")]),e._v(" "),r("td",[e._v("Day Aggregate self consumption (incl battery)")]),e._v(" "),r("td",[e._v("requires meter attached and 'meterInstalled' set")])]),e._v(" "),r("tr",[r("td",[e._v("aggregate_day#selfConsumptionCoverage")]),e._v(" "),r("td",[e._v("Number:Dimensionless")]),e._v(" "),r("td",[e._v("Day Coverage of consumption by self production")]),e._v(" "),r("td",[e._v("requires meter attached and 'meterInstalled' set")])]),e._v(" "),r("tr",[r("td",[e._v("aggregate_day#batterySelfConsumption")]),e._v(" "),r("td",[e._v("Number:Energy")]),e._v(" "),r("td",[e._v("Day Aggregate self consumption from battery")]),e._v(" "),r("td",[e._v("requires battery and private API activated")])]),e._v(" "),r("tr",[r("td",[e._v("aggregate_day#import")]),e._v(" "),r("td",[e._v("Number:Energy")]),e._v(" "),r("td",[e._v("Day Aggregate import from grid")]),e._v(" "),r("td",[e._v("requires meter attached and 'meterInstalled' set")])]),e._v(" "),r("tr",[r("td",[e._v("aggregate_day#export")]),e._v(" "),r("td",[e._v("Number:Energy")]),e._v(" "),r("td",[e._v("Day Aggregate export to grid")]),e._v(" "),r("td",[e._v("requires meter attached and 'meterInstalled' set")])]),e._v(" "),r("tr",[r("td",[e._v("aggregate_week#production")]),e._v(" "),r("td",[e._v("Number:Energy")]),e._v(" "),r("td",[e._v("Week Aggregate PV production")]),e._v(" "),r("td",[e._v("requires meter attached and 'meterInstalled' set")])]),e._v(" "),r("tr",[r("td",[e._v("aggregate_week#consumption")]),e._v(" "),r("td",[e._v("Number:Energy")]),e._v(" "),r("td",[e._v("Week Aggregate power consumption")]),e._v(" "),r("td",[e._v("requires meter attached and 'meterInstalled' set")])]),e._v(" "),r("tr",[r("td",[e._v("aggregate_week#selfConsumptionForConsumption")]),e._v(" "),r("td",[e._v("Number:Energy")]),e._v(" "),r("td",[e._v("Week Aggregate self consumption (incl battery)")]),e._v(" "),r("td",[e._v("requires meter attached and 'meterInstalled' set")])]),e._v(" "),r("tr",[r("td",[e._v("aggregate_week#selfConsumptionCoverage")]),e._v(" "),r("td",[e._v("Number:Dimensionless")]),e._v(" "),r("td",[e._v("Week Coverage of consumption by self production")]),e._v(" "),r("td",[e._v("requires meter attached and 'meterInstalled' set")])]),e._v(" "),r("tr",[r("td",[e._v("aggregate_week#batterySelfConsumption")]),e._v(" "),r("td",[e._v("Number:Energy")]),e._v(" "),r("td",[e._v("Week Aggregate self consumption from battery")]),e._v(" "),r("td",[e._v("requires battery and private API activated")])]),e._v(" "),r("tr",[r("td",[e._v("aggregate_week#import")]),e._v(" "),r("td",[e._v("Number:Energy")]),e._v(" "),r("td",[e._v("Week Aggregate import from grid")]),e._v(" "),r("td",[e._v("requires meter attached and 'meterInstalled' set")])]),e._v(" "),r("tr",[r("td",[e._v("aggregate_week#export")]),e._v(" "),r("td",[e._v("Number:Energy")]),e._v(" "),r("td",[e._v("Week Aggregate export to grid")]),e._v(" "),r("td",[e._v("requires meter attached and 'meterInstalled' set")])]),e._v(" "),r("tr",[r("td",[e._v("aggregate_month#production")]),e._v(" "),r("td",[e._v("Number:Energy")]),e._v(" "),r("td",[e._v("Month Aggregate PV production")]),e._v(" "),r("td",[e._v("general available")])]),e._v(" "),r("tr",[r("td",[e._v("aggregate_month#consumption")]),e._v(" "),r("td",[e._v("Number:Energy")]),e._v(" "),r("td",[e._v("Month Aggregate power consumption")]),e._v(" "),r("td",[e._v("requires meter attached and 'meterInstalled' set")])]),e._v(" "),r("tr",[r("td",[e._v("aggregate_month#selfConsumptionForConsumption")]),e._v(" "),r("td",[e._v("Number:Energy")]),e._v(" "),r("td",[e._v("Month Aggregate self consumption (incl battery)")]),e._v(" "),r("td",[e._v("requires meter attached and 'meterInstalled' set")])]),e._v(" "),r("tr",[r("td",[e._v("aggregate_month#selfConsumptionCoverage")]),e._v(" "),r("td",[e._v("Number:Dimensionless")]),e._v(" "),r("td",[e._v("Month Coverage of consumption by self production")]),e._v(" "),r("td",[e._v("requires meter attached and 'meterInstalled' set")])]),e._v(" "),r("tr",[r("td",[e._v("aggregate_month#batterySelfConsumption")]),e._v(" "),r("td",[e._v("Number:Energy")]),e._v(" "),r("td",[e._v("Month Aggregate self consumption from battery")]),e._v(" "),r("td",[e._v("requires battery and private API activated")])]),e._v(" "),r("tr",[r("td",[e._v("aggregate_month#import")]),e._v(" "),r("td",[e._v("Number:Energy")]),e._v(" "),r("td",[e._v("Month Aggregate import from grid")]),e._v(" "),r("td",[e._v("requires meter attached and 'meterInstalled' set")])]),e._v(" "),r("tr",[r("td",[e._v("aggregate_month#export")]),e._v(" "),r("td",[e._v("Number:Energy")]),e._v(" "),r("td",[e._v("Month Aggregate export to grid")]),e._v(" "),r("td",[e._v("requires meter attached and 'meterInstalled' set")])]),e._v(" "),r("tr",[r("td",[e._v("aggregate_year#production")]),e._v(" "),r("td",[e._v("Number:Energy")]),e._v(" "),r("td",[e._v("Year Aggregate PV production")]),e._v(" "),r("td",[e._v("general available")])]),e._v(" "),r("tr",[r("td",[e._v("aggregate_year#consumption")]),e._v(" "),r("td",[e._v("Number:Energy")]),e._v(" "),r("td",[e._v("Year Aggregate power consumption")]),e._v(" "),r("td",[e._v("requires meter attached and 'meterInstalled' set")])]),e._v(" "),r("tr",[r("td",[e._v("aggregate_year#selfConsumptionForConsumption")]),e._v(" "),r("td",[e._v("Number:Energy")]),e._v(" "),r("td",[e._v("Year Aggregate self consumption (incl battery)")]),e._v(" "),r("td",[e._v("requires meter attached and 'meterInstalled' set")])]),e._v(" "),r("tr",[r("td",[e._v("aggregate_year#selfConsumptionCoverage")]),e._v(" "),r("td",[e._v("Number:Dimensionless")]),e._v(" "),r("td",[e._v("Year Coverage of consumption by self production")]),e._v(" "),r("td",[e._v("requires meter attached and 'meterInstalled' set")])]),e._v(" "),r("tr",[r("td",[e._v("aggregate_year#batterySelfConsumption")]),e._v(" "),r("td",[e._v("Number:Energy")]),e._v(" "),r("td",[e._v("Year Aggregate self consumption from battery")]),e._v(" "),r("td",[e._v("requires battery and private API activated")])]),e._v(" "),r("tr",[r("td",[e._v("aggregate_year#import")]),e._v(" "),r("td",[e._v("Number:Energy")]),e._v(" "),r("td",[e._v("Year Aggregate import from grid")]),e._v(" "),r("td",[e._v("requires meter attached and 'meterInstalled' set")])]),e._v(" "),r("tr",[r("td",[e._v("aggregate_year#export")]),e._v(" "),r("td",[e._v("Number:Energy")]),e._v(" "),r("td",[e._v("Year Aggregate export to grid")]),e._v(" "),r("td",[e._v("requires meter attached and 'meterInstalled' set")])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"full-example"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#full-example","aria-hidden":"true"}},[this._v("#")]),this._v(" Full Example")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"thing"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#thing","aria-hidden":"true"}},[this._v("#")]),this._v(" Thing")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("minimum configuration")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v('solaredge:generic:se2200 [ tokenOrApiKey="...", solarId="..."]\n')])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("with pollingIntervals")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v('solaredge:generic:se2200[ tokenOrApiKey="...", solarId="...", liveDataPollingInterval=..., aggregateDataPollingInterval=... ]\n')])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("maximum version")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v('solaredge:generic:se2200     [ tokenOrApiKey="secret", solarId="4711", meterInstalled=true, usePrivateApi=true, liveDataPollingInterval=15, aggregateDataPollingInterval=60 ]\n')])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("multiple inverters")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v('solaredge:generic:home1 [ tokenOrApiKey="...", solarId="..."]\nsolaredge:generic:home2  [ tokenOrApiKey="...", solarId="..."]\n')])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"items"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#items","aria-hidden":"true"}},[this._v("#")]),this._v(" Items")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-dsl"}},[r("code",[r("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("Number")]),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),r("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("Power")]),e._v("            "),r("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("SE2200_Live_Production")]),e._v("   "),r("span",{pre:!0,attrs:{class:"token string"}},[e._v('"PV Produktion [%.2f %unit%]"')]),e._v("    "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("channel"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),r("span",{pre:!0,attrs:{class:"token string"}},[e._v('"solaredge:generic:se2200:live#production"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("Number")]),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),r("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("Dimensionless")]),e._v("    "),r("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("SE2200_Live_Level")]),e._v("        "),r("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Batterieladung"')]),e._v("                 "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("channel"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),r("span",{pre:!0,attrs:{class:"token string"}},[e._v('"solaredge:generic:se2200:live#battery_level"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("Number")]),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),r("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("Energy")]),e._v("           "),r("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("SE2200_Day_Production")]),e._v("    "),r("span",{pre:!0,attrs:{class:"token string"}},[e._v('"PV Produktion [%.2f kWh]"')]),e._v("       "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("channel"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),r("span",{pre:!0,attrs:{class:"token string"}},[e._v('"solaredge:generic:se2200:aggregate_day#production"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])])}],!1,null,null,null);t.default=n.exports}}]);