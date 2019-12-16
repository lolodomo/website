(window.webpackJsonp=window.webpackJsonp||[]).push([[132],{625:function(t,e,a){"use strict";a.r(e);var s=a(0),r=Object(s.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),a("p",[t._v("This extension adds support for "),a("a",{attrs:{href:"https://ruuvi.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Ruuvi Tag"),a("OutboundLink")],1),t._v(" Sensor Beacons.")]),t._v(" "),t._m(1),t._v(" "),a("p",[t._v("Only a single thing type is added by this extension:")]),t._v(" "),t._m(2),t._v(" "),a("p",[t._v("Under normal conditions the ruuvitag should submit data every 10 seconds.\nHowever, if no data has been retrieved after 1 minute the ruuvitag is set to OFFLINE and the state of channels is set to UNDEF.\nWhen new data is retrieved when OFFLINE the ruuvtag is set ONLINE again.")]),t._v(" "),t._m(3),t._v(" "),a("p",[t._v("As any other Bluetooth device, Ruuvi Tag Beacons are discovered automatically by the corresponding bridge.")]),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),a("p",[t._v("A Ruuvi Tag Smart Beacon has the following channels:")]),t._v(" "),t._m(7),t._v(" "),a("p",[t._v("Note: not all channels are always available. Available fields depends on "),a("a",{attrs:{href:"https://github.com/ruuvi/ruuvi-sensor-protocols",target:"_blank",rel:"noopener noreferrer"}},[t._v("Ruuvi Data Format"),a("OutboundLink")],1),t._v(".")]),t._v(" "),t._m(8),t._v(" "),a("p",[t._v("demo.things:")]),t._v(" "),t._m(9),a("p",[t._v("demo.items:")]),t._v(" "),t._m(10),a("DocPreviousVersions"),t._v(" "),a("EditPageLink")],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"ruuvi-tag"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ruuvi-tag","aria-hidden":"true"}},[this._v("#")]),this._v(" Ruuvi Tag")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"supported-things"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#supported-things","aria-hidden":"true"}},[this._v("#")]),this._v(" Supported Things")])},function(){var t=this.$createElement,e=this._self._c||t;return e("table",[e("thead",[e("tr",[e("th",[this._v("Thing Type ID")]),this._v(" "),e("th",[this._v("Description")])])]),this._v(" "),e("tbody",[e("tr",[e("td",[this._v("ruuvitag_beacon")]),this._v(" "),e("td",[this._v("A Ruuvi Tag Sensor Beacon")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"discovery"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#discovery","aria-hidden":"true"}},[this._v("#")]),this._v(" Discovery")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"thing-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#thing-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Thing Configuration")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("There is only a single configuration parameter "),e("code",[this._v("address")]),this._v(', which corresponds to the Bluetooth address of the device (in format "XX:XX:XX:XX:XX:XX").')])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"channels"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#channels","aria-hidden":"true"}},[this._v("#")]),this._v(" Channels")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("table",[a("thead",[a("tr",[a("th",[t._v("Channel ID")]),t._v(" "),a("th",[t._v("Item Type")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("temperature")]),t._v(" "),a("td",[t._v("Number:Temperature")]),t._v(" "),a("td",[t._v("The measured temperature")])]),t._v(" "),a("tr",[a("td",[t._v("humidity")]),t._v(" "),a("td",[t._v("Number:Dimensionless")]),t._v(" "),a("td",[t._v("The measured humidity")])]),t._v(" "),a("tr",[a("td",[t._v("pressure")]),t._v(" "),a("td",[t._v("Number:Pressure")]),t._v(" "),a("td",[t._v("The measured air pressure")])]),t._v(" "),a("tr",[a("td",[t._v("batteryVoltage")]),t._v(" "),a("td",[t._v("Number:ElectricPotential")]),t._v(" "),a("td",[t._v("The measured battery voltage")])]),t._v(" "),a("tr",[a("td",[t._v("accelerationx")]),t._v(" "),a("td",[t._v("Number:Acceleration")]),t._v(" "),a("td",[t._v("The measured acceleration of X")])]),t._v(" "),a("tr",[a("td",[t._v("accelerationy")]),t._v(" "),a("td",[t._v("Number:Acceleration")]),t._v(" "),a("td",[t._v("The measured acceleration of Y")])]),t._v(" "),a("tr",[a("td",[t._v("accelerationz")]),t._v(" "),a("td",[t._v("Number:Acceleration")]),t._v(" "),a("td",[t._v("The measured acceleration of Z")])]),t._v(" "),a("tr",[a("td",[t._v("txPower")]),t._v(" "),a("td",[t._v("Number:Power")]),t._v(" "),a("td",[t._v("TX power")])]),t._v(" "),a("tr",[a("td",[t._v("dataFormat")]),t._v(" "),a("td",[t._v("Number")]),t._v(" "),a("td",[t._v("Data format version")])]),t._v(" "),a("tr",[a("td",[t._v("measurementSequenceNumber")]),t._v(" "),a("td",[t._v("Number:Dimensionless")]),t._v(" "),a("td",[t._v("Measurement sequence number")])]),t._v(" "),a("tr",[a("td",[t._v("movementCounter")]),t._v(" "),a("td",[t._v("Number:Dimensionless")]),t._v(" "),a("td",[t._v("Movement counter")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"example"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#example","aria-hidden":"true"}},[this._v("#")]),this._v(" Example")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('bluetooth:ruuvitag:hci0:beacon  "RuuviTag Sensor Beacon" (bluetooth:bluez:hci0) [ address="12:34:56:78:9A:BC" ]\n')])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dsl"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Number")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Temperature")]),t._v("      "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("temperature")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Room Temperature [%.1f %unit%]"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" channel"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"bluetooth:ruuvitag:hci0:beacon:temperature"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Number")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Dimensionless")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("humidity")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Humidity [%.0f %unit%]"')]),t._v("         "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" channel"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"bluetooth:ruuvitag:hci0:beacon:humidity"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Number")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Pressure")]),t._v("         "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("pressure")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Air Pressure [%.0f %unit%]"')]),t._v("     "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" channel"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"bluetooth:ruuvitag:hci0:beacon:pressure"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Examples of converting units")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Number")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("Acceleration      "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("acceleration_ms")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Acceleration z [%.2f m/s²]"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" channel"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"bluetooth:ruuvitag:hci0:beacon:accelerationz"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Number")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("Acceleration      "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("acceleration_g")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Acceleration z (g-force) [%.2f gₙ]"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" channel"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"bluetooth:ruuvitag:hci0:beacon:accelerationz"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])}],!1,null,null,null);e.default=r.exports}}]);