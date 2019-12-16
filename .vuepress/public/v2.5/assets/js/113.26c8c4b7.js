(window.webpackJsonp=window.webpackJsonp||[]).push([[113],{597:function(t,s,e){"use strict";e.r(s);var a=e(0),n=Object(a.a)({},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"content"},[e("h1",{attrs:{id:"akm868-binding"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#akm868-binding","aria-hidden":"true"}},[t._v("#")]),t._v(" AKM868 Binding "),e("Badge",{attrs:{type:"warn",text:"v1"}})],1),t._v(" "),e("p",[t._v('This binding is for users coming from the proprietary homeautomation-system "IP-Symcon". If you have bought some hardware from them, you can use this binding to enable your AKM868 presence detection system.')]),t._v(" "),e("p",[t._v("The following hardware was used to do presence detection with the AKM-868 controller and a OVO868-tracker for your key-ring:")]),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),e("p",[t._v("The syntax of the binding configuration strings accepted is the following:")]),t._v(" "),t._m(5),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._m(12),t._v(" "),t._m(13),t._m(14),t._v(" "),t._m(15),t._m(16),t._v(" "),t._m(17),t._v(" "),t._m(18),t._m(19),t._v(" "),e("p",[t._v("You must use a LANT-868 Adapter. The USB868-Adapter doesn't work.  However, if you own a USB adapter, there is a workaround utilizing the Serial binding (1.x).")]),t._v(" "),e("p",[t._v("Once the Serial binding is installed, following items are needed for the workaround:")]),t._v(" "),t._m(20),e("p",[t._v("This rule handles an incoming event form the keyfob:")]),t._v(" "),t._m(21),e("p",[t._v("A second rule is needed to periodically check if the there was an update from the keyfob. If there was no update in the last 100 seconds, the assumption is that the fob is out of range.")]),t._v(" "),t._m(22),e("DocPreviousVersions"),t._v(" "),e("EditPageLink")],1)},[function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:"https://raw.githubusercontent.com/openhab/openhab1-addons/master/bundles/binding/org.openhab.binding.akm868/src/main/resources/AKM868.png",alt:"AKM-Module"}}),this._v(" "),s("img",{attrs:{src:"https://raw.githubusercontent.com/openhab/openhab1-addons/master/bundles/binding/org.openhab.binding.akm868/src/main/resources/LAN-T868.png",alt:"LAN-T Module"}}),this._v(" "),s("img",{attrs:{src:"https://raw.githubusercontent.com/openhab/openhab1-addons/master/bundles/binding/org.openhab.binding.akm868/src/main/resources/Tracker-868xOVO.png",alt:"868xOVO Tracker"}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"binding-configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#binding-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Binding Configuration")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("The binding can be configured in the file "),s("code",[this._v("services/akm868.cfg")]),this._v(".")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("table",[e("thead",[e("tr",[e("th",[t._v("Property")]),t._v(" "),e("th",[t._v("Default")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("Required")]),t._v(" "),e("th",[t._v("Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("host")]),t._v(" "),e("td"),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),e("td",[t._v("IP address of the adapter LAN-T 868")])]),t._v(" "),e("tr",[e("td",[t._v("port")]),t._v(" "),e("td",[t._v("10001")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("No")]),t._v(" "),e("td",[t._v("Port of the adapter LAN-T 868")])]),t._v(" "),e("tr",[e("td",[t._v("timeout")]),t._v(" "),e("td"),t._v(" "),e("td",{staticStyle:{"text-align":"center"}}),t._v(" "),e("td",[t._v("Timeout in milliseconds. If the AKM-Controller does not send an update within that timeframe, the switch item is changing to OFF")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"item-configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#item-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Item  Configuration")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v('{ akm868="id=x,channel=y" }\n')])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("The "),s("code",[this._v("id")]),this._v(" represents the ID of your OVO-Tracker.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("The "),s("code",[this._v("channel")]),this._v(" can be one of the following values:")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("table",[e("thead",[e("tr",[e("th",[t._v("channel")]),t._v(" "),e("th",[t._v("meaning")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("0")]),t._v(" "),e("td",[t._v("notify on pings from the tracker")])]),t._v(" "),e("tr",[e("td",[t._v("1")]),t._v(" "),e("td",[t._v("when the button of the tracker was pressed")])]),t._v(" "),e("tr",[e("td",[t._v("5")]),t._v(" "),e("td",[t._v("when the button of the tracker was pressed longer")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"examples"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#examples","aria-hidden":"true"}},[this._v("#")]),this._v(" Examples")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"items"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#items","aria-hidden":"true"}},[this._v("#")]),this._v(" Items")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-dsl"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PresenceMichael")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Key Michael"')]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v(" <present>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("akm868"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"id=9999,channel=0"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("This item would turn the Switch to "),s("code",[this._v("ON")]),this._v(" as soon as openHAB receives a PING from the tracker. It will turn the Switch to "),s("code",[this._v("OFF")]),this._v(" if the tracker doesn't send another PING within the given timeframe ("),s("code",[this._v("timeout")]),this._v(" value from the configuration).")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-dsl"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("KeyPressedShortMichael")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Key Michael"')]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v(" <present>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("akm868"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"id=9999,channel=1"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("This item would turn the Switch to "),s("code",[this._v("ON")]),this._v(" every time the key was pressed.")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-dsl"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("KeyPressedLongeMichael")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Key Michael"')]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v(" <present>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("akm868"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"id=9999,channel=5"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("This item would turn the Switch to "),s("strong",[this._v("ON")]),this._v(" every time the key was pressed for a longer time.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"rules"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#rules","aria-hidden":"true"}},[this._v("#")]),this._v(" Rules")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-rules"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("rule")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Turn off WIFI if not at Home"')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("when")]),t._v(" \n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Item")]),t._v(" PresenceMichael "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("changed")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("to")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("OFF")]),t._v("\t  \n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("then")]),t._v(" \n  "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("logInfo")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Wifi"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Wifi OFF"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n  "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sendCommand")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Power_Upstairs_Wifi"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("OFF")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"limitations"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#limitations","aria-hidden":"true"}},[this._v("#")]),this._v(" Limitations")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-dsl"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("String")]),t._v("\t "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Presence_AKM_ComPort")]),t._v("\t\t"),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Last String from AKM [%s]"')]),t._v(" \t"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" serial"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/dev/ttyUSB1"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//check USB port is matching to your system configuration")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DateTime")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Presence_AKM1_LastUpdate")]),t._v("\t"),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Key 1: Last Update:  [%1$td.%1$tm.%1$tY %1$tT]"')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("String")]),t._v("   "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Presence_AKM1_Action")]),t._v(" \t\t"),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Key 1: Last Action:  [%s]"')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Switch")]),t._v("\t "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Presence_AKM")]),t._v("\t\t\t\t"),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Presence AKM"')]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("\t<contact>")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-rules"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("rule")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Presence AKM Direct"')]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("when")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Item")]),t._v(" Presence_AKM_ComPort "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("received update")]),t._v(" \n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("then")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" buffer"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function-name"}},[t._v("Presence_AKM_ComPort")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("state"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("toString")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("split")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('","')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// var String id = buffer.get(2) // this is the ID of the keyfob. rule could be enhanced to distinguish several keyfobs")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" action "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" buffer"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" packetValid "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" buffer"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\t\n\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("packetValid"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("contains")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"OK"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("postUpdate")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Presence_AKM1_LastUpdate"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DateTimeType")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token function-name"}},[t._v("Presence_AKM")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sendCommand")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ON"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("switch")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("action"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'0'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function-name"}},[t._v("Presence_AKM1_Action")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sendCommand")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Ping"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'1'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function-name"}},[t._v("Presence_AKM1_Action")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sendCommand")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"PressedShort"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'5'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function-name"}},[t._v("Presence_AKM1_Action")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sendCommand")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"PressedLong"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-rules"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("rule")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Presence AKM reset"')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("when")]),t._v(" \n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Time cron")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0 0/1 * * * ?"')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("then")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token function-name"}},[t._v("Presence_AKM")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("state "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("ON")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DateTimeType")]),t._v(" l_akm1 "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function-name"}},[t._v("Presence_AKM1_LastUpdate")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("state "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DateTimeType")]),t._v("\t\t\t\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DateTimeType")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("calendar"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("timeInMillis "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" l_akm1"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("calendar"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("timeInMillis"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("100000")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 100 sec timeout")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token function-name"}},[t._v("Presence_AKM1_Action")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sendCommand")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Away"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token function-name"}},[t._v("Presence_AKM")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sendCommand")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"OFF"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n")])])])}],!1,null,null,null);s.default=n.exports}}]);