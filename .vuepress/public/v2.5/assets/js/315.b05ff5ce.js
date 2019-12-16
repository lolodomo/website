(window.webpackJsonp=window.webpackJsonp||[]).push([[315],{917:function(e,t,s){"use strict";s.r(t);var r=s(0),a=Object(r.a)({},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"onewire-binding"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#onewire-binding","aria-hidden":"true"}},[e._v("#")]),e._v(" OneWire Binding "),s("Badge",{attrs:{type:"warn",text:"v1"}})],1),e._v(" "),s("div",{staticClass:"danger custom-block"},[s("p",{staticClass:"custom-block-title"},[e._v("OBSOLETE BINDING")]),e._v(" "),s("p",[e._v("This 1.x binding is obsolete; it has been replaced by the 2.x "),s("router-link",{attrs:{to:"./../onewire/"}},[e._v("onewire")]),e._v(" binding which you should use instead.")],1)]),e._v(" "),s("p",[e._v("The OneWire bus system is a lightweight and inexpensive bus system mostly used for sensors (eg. temperature, humidity, counters and presence). There are also switches available. The binding is designed to work as a client of the "),s("a",{attrs:{href:"http://owfs.org/index.php?page=owserver_protocol",target:"_blank",rel:"noopener noreferrer"}},[e._v("ow-server"),s("OutboundLink")],1),e._v(" which implements the "),s("a",{attrs:{href:"http://owfs.org/index.php?page=owserver-protocol",target:"_blank",rel:"noopener noreferrer"}},[e._v("owserver-protocol"),s("OutboundLink")],1),e._v(". The OneWire devices could be connected to the machine running ow-server by a USB adapter such as ds9490r or a serial adapter. For detailed information on OneWire please refer to "),s("a",{attrs:{href:"http://en.wikipedia.org/wiki/One_wire",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://en.wikipedia.org/wiki/One_wire"),s("OutboundLink")],1),e._v(" or "),s("a",{attrs:{href:"http://owfs.org",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://owfs.org"),s("OutboundLink")],1),e._v(".")]),e._v(" "),e._m(0),e._v(" "),e._m(1),e._v(" "),e._m(2),e._v(" "),e._m(3),e._v(" "),e._m(4),e._v(" "),e._m(5),e._v(" "),e._m(6),e._v(" "),e._m(7),s("p",[e._v("where:")]),e._v(" "),s("ul",[e._m(8),e._v(" "),s("li",[s("code",[e._v("<deviceId>")]),e._v(" can be either the hex address or an "),s("a",{attrs:{href:"http://owfs.org/index.php?page=aliases",target:"_blank",rel:"noopener noreferrer"}},[e._v("alias"),s("OutboundLink")],1),e._v(" if one is configured")]),e._v(" "),e._m(9),e._v(" "),e._m(10),e._v(" "),s("li",[e._v("if "),s("code",[e._v(";ignoreReadErrors")]),e._v(" is included, it becomes possible to support "),s("a",{attrs:{href:"https://en.m.wikipedia.org/wiki/IButton",target:"_blank",rel:"noopener noreferrer"}},[e._v("iButtons"),s("OutboundLink")],1),e._v(". In the normal Modus the binding gives an error on the event Bus if an One Wire item is not reachable. With this parameter set, the binding ignores read errors if an item is not present.")]),e._v(" "),e._m(11),e._v(" "),e._m(12)]),e._v(" "),e._m(13),e._v(" "),e._m(14),e._m(15),e._v(" "),s("p",[e._v("Type modifiers can be optionally configured for the items. They will be applied in the same order as the one in the description of the item. The binding provides the following modifiers. For example: by using modifiers you can calibrate onewire temperature devices or invert the value of contacts and switches.")]),e._v(" "),e._m(16),e._v(" "),e._m(17),e._v(" "),e._m(18),e._v(" "),e._m(19),e._v(" "),e._m(20),e._v(" "),e._m(21),e._v(" "),e._m(22),e._v(" "),e._m(23),e._v(" "),e._m(24),e._m(25),e._v(" "),e._m(26),e._v(" "),e._m(27),s("p",[e._v('This example uses the add and multiply modifier ("add" then "multiply").')]),e._v(" "),e._m(28),s("p",[e._v('This example uses the add modifier and the tukey filter ("add" then "filter").')]),e._v(" "),e._m(29),e._v(" "),e._m(30),s("p",[e._v("This example uses an inverted PIO of an DS2408 as Switch, which can be turned on and off. The logic of the OneWire PIO is inverted in OpenHab (On=OFF and OFF=ON) by the InvertModifier.")]),e._v(" "),e._m(31),s("p",[e._v("Same example as before, but the logic is not inverted.")]),e._v(" "),e._m(32),e._v(" "),e._m(33),s("p",[e._v("This example uses a sensed property of an DS2406 as Contact, which is inverted by the InvertModifier.")]),e._v(" "),e._m(34),e._v(" "),e._m(35),s("p",[e._v("Switch turns on when value of device property is greater then maxWarning (30).")]),e._v(" "),e._m(36),s("p",[e._v("Switch turns on when value of device property is less then minWarning (5).")]),e._v(" "),e._m(37),s("p",[e._v("Switch turns on when value of device property is greater then maxWarning (30) or is less then minWarning (5).")]),e._v(" "),e._m(38),e._v(" "),e._m(39),e._m(40),e._v(" "),e._m(41),s("p",[e._v("The parameter r_id reads the unique r_id of the iButton.  If you use an iButton please edit your owfs.conf and add or configure the entry")]),e._v(" "),e._m(42),s("p",[e._v('String \tOneWireLcdText\t\t"LCD Text [%s]"\t{onewire="deviceId=29.44C80E000000;propertyName=LCD_H/message;refreshinterval=-1"}\nSwitch \tOneWireLcdStrobe\t"LCD Strobe [%s]"\t{onewire="deviceId=29.44C80E000000;propertyName=strobe;refreshinterval=-1"}\nNumber \tOneWireLcdByte\t\t"LCD Byte [%d]"\t\t{onewire="deviceId=29.44C80E000000;propertyName=PIO.BYTE;refreshinterval=-1"}\nSwitch \tOneWireLcdClear\t\t"LCD Clear [%s]"\t{onewire="deviceId=29.44C80E000000;propertyName=LCD_H/clear;refreshinterval=-1"}')]),e._v(" "),e._m(43),s("p",[e._v('rule "write2LCD"\nwhen\nTime cron "0/10 * * * * ?"\t\nthen\t\t\nvar String lvText4LCD = "OpenHab";')]),e._v(" "),e._m(44),e._v(" "),s("p",[e._v("end")]),e._v(" "),e._m(45),s("p",[e._v('Switch OneWireClearCache "OneWireClearCache" {onewire="control=CLEAR_CACHE"}')]),e._v(" "),e._m(46),s("p",[e._v('String OneWireClearCacheOneItem "OneWireClearCacheOneItem" {onewire="control=CLEAR_CACHE"}')]),e._v(" "),e._m(47),s("p",[e._v('rule "checkOneWireDevices"\nwhen\nTime cron "0 /5 * * * ?"\nthen\ngrpOneWireDevices2Check?.members.forEach[element1,index1|\nif (element1.state==Undefined || element1.state==Uninitialized) {\nlogError("OneWire","State of OneWireDevice: "+element1.name+" is +element1.state.toString)\nOneWireClearCacheOneItem.sendCommand('),s("a",{attrs:{href:"http://element1.name",target:"_blank",rel:"noopener noreferrer"}},[e._v("element1.name"),s("OutboundLink")],1),e._v(")\n}"),s("br"),e._v("\n]\nend")]),e._v(" "),e._m(48)])},[function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"prerequisites"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites","aria-hidden":"true"}},[this._v("#")]),this._v(" Prerequisites")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ol",[t("li",[this._v("Your 1-Wire Bus System is physically connected to your server and working properly.")]),this._v(" "),t("li",[this._v("Install and configure the ow-server and ow-shell packages on your 1-Wire server")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"binding-configuration"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#binding-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Binding Configuration")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("This binding can be configured in the file "),t("code",[this._v("services/onewire.cfg")]),this._v(".")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("table",[s("thead",[s("tr",[s("th",[e._v("Property")]),e._v(" "),s("th",[e._v("Default")]),e._v(" "),s("th",{staticStyle:{"text-align":"center"}},[e._v("Required")]),e._v(" "),s("th",[e._v("Description")])])]),e._v(" "),s("tbody",[s("tr",[s("td",[e._v("ip")]),e._v(" "),s("td"),e._v(" "),s("td",{staticStyle:{"text-align":"center"}},[e._v("Yes")]),e._v(" "),s("td",[e._v("IP address of the owserver.  Avoid using hostnames (including "),s("code",[e._v("localhost")]),e._v(") but instead prefer IP addresses (like "),s("code",[e._v("127.0.0.1")]),e._v(") to improve performance (otherwise every onewire update may result in a file system access to the /etc/hosts file)")])]),e._v(" "),s("tr",[s("td",[e._v("port")]),e._v(" "),s("td",[e._v("4304")]),e._v(" "),s("td",{staticStyle:{"text-align":"center"}},[e._v("No")]),e._v(" "),s("td",[e._v("port to connect to on the owserver")])]),e._v(" "),s("tr",[s("td",[e._v("retry")]),e._v(" "),s("td",[e._v("3")]),e._v(" "),s("td",{staticStyle:{"text-align":"center"}},[e._v("No")]),e._v(" "),s("td",[e._v("number of times a failed read will be retried")])]),e._v(" "),s("tr",[s("td",[e._v("server_retries")]),e._v(" "),s("td",[e._v("3")]),e._v(" "),s("td",{staticStyle:{"text-align":"center"}},[e._v("No")]),e._v(" "),s("td",[e._v("number of attempts that will be made to connect to the owserver after a failed connection attempt. If set to 0, no retry attempts will be made.")])]),e._v(" "),s("tr",[s("td",[e._v("server_retryInterval")]),e._v(" "),s("td",[e._v("60")]),e._v(" "),s("td",{staticStyle:{"text-align":"center"}},[e._v("No")]),e._v(" "),s("td",[e._v("amount of time, in seconds, that will elapse between reconnection attempts.  May not be set to less than 5.")])]),e._v(" "),s("tr",[s("td",[e._v("tempscale")]),e._v(" "),s("td",[e._v("CELSIUS")]),e._v(" "),s("td",{staticStyle:{"text-align":"center"}},[e._v("No")]),e._v(" "),s("td",[e._v("defines which temperature scale owserver should return temperatures in. Valid values are CELSIUS, FAHRENHEIT, KELVIN, and RANKINE")])]),e._v(" "),s("tr",[s("td",[e._v("post_only_changed_values")]),e._v(" "),s("td",[e._v("true")]),e._v(" "),s("td",{staticStyle:{"text-align":"center"}},[e._v("No")]),e._v(" "),s("td",[e._v("only changed values are posted to the event-bus.  Set to "),s("code",[e._v("false")]),e._v(" to post all updates regardless.")])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"item-configuration"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#item-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Item Configuration")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"basic-configuration-for-an-onewire-item-binding"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#basic-configuration-for-an-onewire-item-binding","aria-hidden":"true"}},[this._v("#")]),this._v(" Basic Configuration for an OneWire Item Binding")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v('onewire="deviceId=<deviceId>;propertyName=<propertyName>[;refreshinterval=<refreshSeconds>][;ignoreReadErrors][;ignore85CPowerOnResetValues][;<typeModifiers>...]"\n')])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[this._v("sections in "),t("code",[this._v("[brackets]")]),this._v(" are optional")])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("code",[this._v("<propertyName>")]),this._v(" is .")])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("code",[this._v("<refreshSeconds>")]),this._v(" to refresh interval in seconds.  If not specified, the default is 60 seconds.  If set to 0, the value is only read when the binding is started.  If set to -1, the property is not read at any time.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[this._v("if "),t("code",[this._v(";ignore85CPowerOnResetValues")]),this._v(" is included, the power-on reset value (+85°C) of DS18B20 devices is ignored.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("code",[this._v("<typeModifiers>")]),this._v(" is explained in the section below")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"examples"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#examples","aria-hidden":"true"}},[this._v("#")]),this._v(" Examples")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v('onewire="deviceId=28.67C6697351FF;propertyName=temperature;refreshinterval=10"\nonewire="deviceId=28.67C6697351FF;propertyName=temperature;refreshinterval=10;ignore85CPowerOnResetValues"\n')])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"type-modifiers"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#type-modifiers","aria-hidden":"true"}},[this._v("#")]),this._v(" Type Modifiers")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"number-items"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#number-items","aria-hidden":"true"}},[this._v("#")]),this._v(" Number Items")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v('"add=-value-" - the AddModifier adds a given value to a read-value on read. On write, the given value is subtracted of the value to write.')]),this._v(" "),t("li",[this._v('"multiply=-value-" - the MultiplyModifier multiplies a given value with the read-value on read. On write, value to write is divided by given value.')]),this._v(" "),t("li",[this._v('"tukeyfilter" -  Modifier to filter sensor data. Restricts the data point value to be between lowerbound = qbottom - alpha * r and upperbound = qtop + alpha * r where qtop = top n-tile, qbottom = bottom ntile, and the range r = qtop - qbottom. The original Tukey filter drops points if they are outside of 1.5 * range, i.e. alpha = 1.5, and takes quartiles. Another implementation wrinkle: for slow changing data such as temperature, the binding may pick up the same data point over and over again. This compresses the range artificially, and will lead to spurious filtering. For that reason a point is added to the sample set only if it is not present there.')])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"switch-items"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#switch-items","aria-hidden":"true"}},[this._v("#")]),this._v(" Switch Items")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v('"invert" - the InvertModifier inverts the given Value to the opposite')]),this._v(" "),t("li",[this._v('"pushbutton=-millis-" - this option makes it possible to use a relay like a pushbutton. It is possible to do that with a rule and timer, but then you have no control of the real time a button is pushed on slow systems.')])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"contact-items"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#contact-items","aria-hidden":"true"}},[this._v("#")]),this._v(" Contact Items")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v('"invert" - the InvertModifier inverts the given Value to the opposite')])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"alarmswitch"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#alarmswitch","aria-hidden":"true"}},[this._v("#")]),this._v(" AlarmSwitch")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("A special binding is the binding of numeric one wire device properties to openHAB switch items. With this binding you can let openHAB monitor your temperature or humidity with simple rules. A switch turns on when the read value from a device property is greater than "),t("code",[this._v("maxWarning")]),this._v(" value or less than "),t("code",[this._v("minWarning")]),this._v(" value.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v('onewire="deviceId=28.67C6697351FF;propertyName=temperature;refreshinterval=10;maxWarning=<value>;minWarning=<value>"\n')])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"examples-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#examples-2","aria-hidden":"true"}},[this._v("#")]),this._v(" Examples")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"number-item"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#number-item","aria-hidden":"true"}},[this._v("#")]),this._v(" Number Item")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-dsl"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("Number")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("OneWireTempSensor")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Temp [%.1f °C]"')]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" onewire"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"deviceId=28.67C6697351FF;propertyName=temperature;add=0.8;multiply=1.1;refreshinterval=10"')]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-dsl"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("Number")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("OneWireTempSensor")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Temp [%.1f °C]"')]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" onewire"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"deviceId=28.67C6697351FF;propertyName=temperature;add=0.8;tukeyfilter;refreshinterval=10"')]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"switch-item"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#switch-item","aria-hidden":"true"}},[this._v("#")]),this._v(" Switch Item")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-dsl"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("Switch")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("OneWireSwitch")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"OneWireSwitch 6 [%s]"')]),e._v("\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" onewire"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"deviceId=29.F2FBE3467CC2;propertyName=PIO.6;invert;refreshinterval=10"')]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-dsl"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("Switch")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("OneWireSwitch")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"OneWireSwitch 6 [%s]"')]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" onewire"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"deviceId=29.F2FBE3467CC2;propertyName=PIO.6;refreshinterval=10"')]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"contact-item"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#contact-item","aria-hidden":"true"}},[this._v("#")]),this._v(" Contact Item")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-dsl"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("Contact")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("OneWireSensorA")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Sensor A [%s]"')]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" onewire"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"deviceId=12.4AEC29CDBAAB;propertyName=sensed.A;invert;refreshinterval=15"')]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"alarm-switch"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#alarm-switch","aria-hidden":"true"}},[this._v("#")]),this._v(" Alarm Switch")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-dsl"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("Switch")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("OneWireTempWarnMax")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"TempWarnMax [%s]"')]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("onewire"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"deviceId=28.67C6697351FF;propertyName=temperature;refreshinterval=5;maxWarning=30"')]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-dsl"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("Switch")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("OneWireTempWarnMin")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"TempWarnMin [%s]"')]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" onewire"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"deviceId=28.67C6697351FF;propertyName=temperature;refreshinterval=10;minWarning=5"')]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-dsl"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("Switch")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("OneWireTempWarnMin")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"TempWarnMin [%s]"')]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" onewire"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"deviceId=28.67C6697351FF;propertyName=temperature;refreshinterval=10;maxWarning=30;minWarning=5"')]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"pushbutton"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#pushbutton","aria-hidden":"true"}},[this._v("#")]),this._v(" PushButton")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-dsl"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("Switch")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("OneWirePushButton")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" onewire"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"deviceId=29.66C30E000000;propertyName=sensed.0;refreshinterval=10"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("pushbutton"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("500")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("invert"),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('",autoupdate="')]),s("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("false")]),e._v('" '),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"ibutton-onewire-binding-openhab-version-1-8-0"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ibutton-onewire-binding-openhab-version-1-8-0","aria-hidden":"true"}},[this._v("#")]),this._v(" iButton (OneWire binding openhab Version >= 1.8.0)")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-dsl"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("String")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("OneWireKeyBlack")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Key black [%s]"')]),s("span",{pre:!0,attrs:{class:"token function"}},[e._v(" <key>")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" onewire"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"deviceId=uncached/01.234567790000;propertyName=r_id;refreshinterval=2"')]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("timeout_presence = 2\n``\n\n(seconds standard=120s). If you remove the iButton, the owserver will hold the item for the configured time in the one wire file system.\n\n### LCD - Display\n\nExample for writing messages to an HD44780 Display, controlled by a DS2408: http://owfs.org/index.php?page=lcd\n\nI use a 4 bit wiring, so i have some free PIOs for push buttons: http://owfs.org/uploads/LCD%20Driver%20v2.0%20Schematic.pdf \n\nitems/lcd.items\n\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("\nrules/lcd.rule\n\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("pre",[t("code",[this._v("//Init and clear display\nOneWireLcdStrobe.sendCommand(ON)\nOneWireLcdByte.sendCommand(255)\nOneWireLcdClear.sendCommand(ON)\n\n//Write 2 LCD\nOneWireLcdText.sendCommand(lvText4LCD)\n\n//Set PIOs to GND\nOneWireLcdByte.sendCommand(255)\n")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("\n### Possibly Obsolete Workaround\n\nBecause of unpredictable startup behavior of openHAB (1.x I assume), I sometimes see on my system, that OneWire-Binding starts to read and cache items from onewire-bus, before items become available in openhab. So these items stay Uninitialized until the onewire device state gets changed. \n\nTherefore I have built in 2 possible ways to reset the internal onewire-binding cache.\n\n### All Items\n\n")])])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-dsl"}},[s("code",[e._v("\nWhen the "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("Switch")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("receives")]),e._v(" command ON"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" then the whole cache gets cleared"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("\n\n### One "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("Item")]),e._v("\n\n")])])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-dsl"}},[s("code",[e._v("\nYou have to send the name of one "),s("span",{pre:!0,attrs:{class:"token constant"}},[e._v("item")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("to")]),e._v(" the "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("String")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("Item")]),e._v(" and the cached value for this "),s("span",{pre:!0,attrs:{class:"token constant"}},[e._v("item")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("will")]),e._v(" be removed"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("\n\nI use this with a simple rule"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v(" Every "),s("span",{pre:!0,attrs:{class:"token constant"}},[e._v("item")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("with binding to a onewire"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("device"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" which should be checked must be part of group "),s("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("grpOneWireDevices2Check"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")])]),e._v("\n\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("\n<DocPreviousVersions/>\n<EditPageLink/>\n")])])])}],!1,null,null,null);t.default=a.exports}}]);