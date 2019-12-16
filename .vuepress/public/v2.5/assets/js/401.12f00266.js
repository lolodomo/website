(window.webpackJsonp=window.webpackJsonp||[]).push([[401],{990:function(t,e,s){"use strict";s.r(e);var a=s(0),n=Object(a.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"tacmi-binding"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tacmi-binding","aria-hidden":"true"}},[t._v("#")]),t._v(" TACmi Binding "),s("Badge",{attrs:{type:"warn",text:"v1"}})],1),t._v(" "),s("p",[t._v("This binding makes use of the CAN over Ethernet feature of the CMI from Technische Alternative. Since I only have the new UVR16x2, it has only been tested with this controller.")]),t._v(" "),s("p",[t._v("The binding currently supports the following functions:")]),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),s("p",[t._v("You need to configure CAN outputs in your Functional data on the UVR16x2. This can be done by using the TAPPS2 application from TA. Follow the user guide on how to do this.")]),t._v(" "),t._m(3),t._v(" "),s("p",[t._v("Now follow the User Guide of the CMI on how to setup CAN over Ethernet (COE). Here you will map your outputs that you configured in the previous step. As the target device you need to put the IP of your OpenHAB server into the coe.csv. Don’t forget to reboot the CMI after you uploaded the coe.csv file.")]),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),s("p",[t._v("The refresh interval should be very small. The execute method of the binding blocks waits for new messages coming in for 10 seconds. If nothing has been received then the method is being restarted after the refresh interval has passed. If new data has been received then the first message is processed and the method is being restarted after the interval has passed. Messages are being processed one by one. Therefore, if you receive multiple message from the CMI, which is most likely the case, it always waits for the time configured in the refresh interval, before it processes the next one.")]),t._v(" "),s("p",[t._v("The CMI uses port 5441 for sending and receiving UDP packets.")]),t._v(" "),t._m(7),t._v(" "),s("p",[t._v("The binding supports all 21 measure types that exist according to the TA documentation. Unfortunately, the documentation is not consistent here, so most of the types are supported only by generic names. The known measure types are:")]),t._v(" "),t._m(8),t._v(" "),s("p",[t._v("For all other types, the generic names are")]),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._m(12),t._v(" "),s("p",[t._v("Example item:")]),t._v(" "),t._m(13),t._m(14),t._v(" "),t._m(15),t._m(16),t._v(" "),s("p",[t._v("Example item:")]),t._v(" "),t._m(17),s("p",[t._v('For the known measure types the binding also deals with the necessary scaling factors. All other measure types would be read "as is", so you might need to scale them accordingly. If you are able to figure out one of them, please update the binding or drop a note to @Wolfgang1966')]),t._v(" "),s("p",[t._v("Example item:")]),t._v(" "),t._m(18),s("p",[t._v("The total energy collected is split up into two measures (KWh and MWh) due to the limited range of analog values. To convert them, use a rule like this (UVRKwh and UVRMwh contain the received measures):")]),t._v(" "),t._m(19),t._m(20),t._v(" "),s("p",[t._v("There was a bug in the CMI that messed up the UDP messages sent for analog outputs. As a workaround do not use the outputs 4, 8, 12, 16 and 17-32 in TAPPS2. The bug might have been fixed with recent updates of the CMI. This has not been tested though.")]),t._v(" "),s("p",[t._v("When defining an item that is being used as a digital input in your TAPPS2 then the binding only supports to use Digital Input 1. This is due to the way the COE protocol works as all 16 digital ports are being send within one message.")]),t._v(" "),s("p",[t._v("For Analog Inputs it is only possible to use Analog Inputs 1, 5, 9, 13 in TAPPS2. This is also due to the way COE works as for analog messages it will send then in bundles of 4. You can however use multiple CAN nodes. According to TAPPS2 you can use CAN nodes from 1-64. So if you only have one UVR and the CMI then you should have 62 nodes available for use. I would not use the same item for sending and receiving even though that should be possible of you use one of the supported ports. Instead I would use separate items and then use rules to get the functionality that you want to achieve. That way it should be possible to have a switch item that is being updated by a CAN output and when you send a command to it, then it uses a different item with a different CAN node that maps to a CAN Input in TAPPS2. I have not tried this though yet.")]),t._v(" "),s("DocPreviousVersions"),t._v(" "),s("EditPageLink")],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("Receive data from analog outputs defined in TAPPS2")]),this._v(" "),e("li",[this._v("Receive data from digital outputs defined in TAPPS2")]),this._v(" "),e("li",[this._v("Send ON/OFF to digital inputs defined in TAPPS2")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"prerequisites"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites","aria-hidden":"true"}},[this._v("#")]),this._v(" Prerequisites")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"configure-can-outputs-in-tapps2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#configure-can-outputs-in-tapps2","aria-hidden":"true"}},[this._v("#")]),this._v(" Configure CAN outputs in TAPPS2")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"configure-your-cmi-for-coe"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#configure-your-cmi-for-coe","aria-hidden":"true"}},[this._v("#")]),this._v(" Configure your CMI for COE")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"binding-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#binding-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Binding Configuration")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("The binding can be configured in the file "),e("code",[this._v("services/tacmi.cfg")]),this._v(".")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("table",[s("thead",[s("tr",[s("th",[t._v("Property")]),t._v(" "),s("th",[t._v("Default")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("Required")]),t._v(" "),s("th",[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("refresh")]),t._v(" "),s("td",[t._v("300000")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("No")]),t._v(" "),s("td",[t._v("Refresh interval in milliseconds")])]),t._v(" "),s("tr",[s("td",[t._v("cmiAddress")]),t._v(" "),s("td"),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),s("td",[t._v("IP or hostname of the CMI device")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"item-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#item-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Item Configuration")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[t._v("Temperature")]),t._v(" "),s("li",[t._v("Seconds")]),t._v(" "),s("li",[t._v("Kilowatt")]),t._v(" "),s("li",[t._v("Kilowatthours")]),t._v(" "),s("li",[t._v("Megawatthours")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("Unknown2")]),this._v(" "),e("li",[this._v("Unknown3")]),this._v(" "),e("li",[this._v("Unknown5 to Unknown9")]),this._v(" "),e("li",[this._v("Unknown13 to Unknown21")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"analog-outputs"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#analog-outputs","aria-hidden":"true"}},[this._v("#")]),this._v(" Analog Outputs")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('{ tacmi="50#a#10#Temperature" }\n')])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("50 = Target CAN Node as configured in the coe.csv file before")]),this._v(" "),e("li",[this._v("a = analog output")]),this._v(" "),e("li",[this._v("10 = Number of the output as configured in TAPPS2")]),this._v(" "),e("li",[this._v("Temperature = Measure Type of the analog value, currently only Temperature ans Seconds are supported")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-dsl"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Number")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TOelKessel")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Kessel Temperatur [%.1f]"')]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v(" <heating>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Temperature")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Heating_Chart"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("tacmi"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"50#a#10#Temperature"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"digital-outputs"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#digital-outputs","aria-hidden":"true"}},[this._v("#")]),this._v(" Digital Outputs")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('{ tacmi="50#d#5" }\n')])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("50 = Target CAN Node as configured in coe.csv file before")]),this._v(" "),e("li",[this._v("d = digital output")]),this._v(" "),e("li",[this._v("5 = Number of the output as configured in TAPPS2")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-dsl"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Brenner")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Brenner Anforderung"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("tacmi"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"50#d#5"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-dsl"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Number")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TOelKessel")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Kessel Temperatur [%.1f]"')]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v(" <heating>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Temperature")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Heating_Chart"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("tacmi"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"50#a#10#Temperature"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-rules"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("rule")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"UVR Total"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("when")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Item")]),t._v(" UVRKwh "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("received update")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("then")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Number")]),t._v(" kwh "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-name"}},[t._v("UVRKwh")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("state "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DecimalType")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Number")]),t._v(" mwh "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-name"}},[t._v("UVRMwh")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("state "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DecimalType")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("kwh "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("999.9")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" kwh "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token function-name"}},[t._v("UVRTotal")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("postUpdate")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("kwh "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" mwh"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"limitations"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#limitations","aria-hidden":"true"}},[this._v("#")]),this._v(" Limitations")])}],!1,null,null,null);e.default=n.exports}}]);