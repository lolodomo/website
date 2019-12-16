(window.webpackJsonp=window.webpackJsonp||[]).push([[437],{873:function(t,e,s){"use strict";s.r(e);var a=s(0),n=Object(a.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"xpl-binding"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#xpl-binding","aria-hidden":"true"}},[t._v("#")]),t._v(" xPL Binding "),s("Badge",{attrs:{type:"warn",text:"v1"}})],1),t._v(" "),s("p",[t._v("The xPL binding grabs xPL message values in items and sends xPL commands.")]),t._v(" "),t._m(0),t._v(" "),s("p",[t._v("The xPL Bundle relies on Gerry Duprey's "),s("a",{attrs:{href:"http://www.xpl4java.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("xPL4Java"),s("OutboundLink")],1),t._v(" Library. The library is packaged in the bundle, then you won't need to install it - but in order to make it work, you'll need a working xPL Hub on the openHAB server (you will find all needed information on the "),s("a",{attrs:{href:"http://xplproject.org.uk/",target:"_blank",rel:"noopener noreferrer"}},[t._v("xPL Project"),s("OutboundLink")],1),t._v(" website.)")]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),s("p",[t._v("Item types can be:")]),t._v(" "),t._m(5),t._v(" "),s("p",[t._v("They allow to receive/send commands (#COMMAND parameter) and to grab current values in xPL messages (#CURRENT parameter).")]),t._v(" "),t._m(6),s("p",[t._v("xPL messages can be caught multiple times in multiple items (grabbing different parts of the message).")]),t._v(" "),t._m(7),s("DocPreviousVersions"),t._v(" "),s("EditPageLink")],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"prerequisites"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites","aria-hidden":"true"}},[this._v("#")]),this._v(" Prerequisites")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"binding-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#binding-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Binding Configuration")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("This binding can be configured in the file "),e("code",[this._v("services/xpl.cfg")]),this._v(".")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("table",[s("thead",[s("tr",[s("th",[t._v("Property")]),t._v(" "),s("th",[t._v("Default")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("Required")]),t._v(" "),s("th",[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("instance")]),t._v(" "),s("td"),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),s("td",[t._v("some machine name")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"item-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#item-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Item Configuration")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("Switch")]),this._v(" "),e("li",[this._v("Number")]),this._v(" "),e("li",[this._v("String")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-dsl"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("testswitch")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"testswitch"')]),t._v("  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("xpl"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"*,command,ac.basic,device=0x0a2b,unit=0,command=#COMMAND"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//Will broadcast (* address| vendor-device.instance) an xPL message in response of sendCommand(testxplswitch, [ON | OFF]) ")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Number")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("testxpltemp")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"testxpltemp"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("xpl"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"*,status,sensor.basic,device=0x0a2x,type=temp,current=#CURRENT"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('//Will get "current" value in the body for the message matching xpl-stat/sensor.basic/device=0x0a2x,type=temp')]),t._v("\n    \n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("String")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("testxplstr")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"testxplstr"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("xpl"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"*,status,sensor.basic,device=outside,type=temp,current=#CURRENT"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('//Will get "current" value in the body for the message matching xpl-stat/sensor.basic/device=0x0a2x,type=temp')]),t._v("\n")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-dsl"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("String")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("LivingRoom_Player_Kind")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Xmbc [%s]"')]),s("span",{pre:!0,attrs:{class:"token tag"}},[t._v(" (LivingRoom)")]),t._v("   "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("xpl"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"*,status,media.mptrnspt,mp=xbmc,kind=#COMMAND"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("String")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("LivingRoom_Player_Status")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Xmbc [%s]"')]),s("span",{pre:!0,attrs:{class:"token tag"}},[t._v(" (LivingRoom)")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("xpl"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"*,status,media.mptrnspt,mp=xbmc,command=#COMMAND"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])}],!1,null,null,null);e.default=n.exports}}]);