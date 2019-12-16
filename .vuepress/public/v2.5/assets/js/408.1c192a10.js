(window.webpackJsonp=window.webpackJsonp||[]).push([[408],{963:function(t,e,s){"use strict";s.r(e);var n=s(0),a=Object(n.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"tivo-binding"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tivo-binding","aria-hidden":"true"}},[t._v("#")]),t._v(" TiVo Binding "),s("Badge",{attrs:{type:"warn",text:"v1"}})],1),t._v(" "),s("p",[t._v("This binding works with older TiVo units which support the v1.0 protocol.  TiVo units that implement the "),s("a",{attrs:{href:"http://www.tivo.com/assets/images/abouttivo/resources/downloads/brochures/TiVo_TCP_Network_Remote_Control_Protocol.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("newer v1.1 API"),s("OutboundLink")],1),t._v(" will encounter some incompatibility.  If you find that button commands ("),s("code",[t._v("pause, play, record")]),t._v(") work, but "),s("code",[t._v("nowshowing")]),t._v(" does not work, you likely have a Tivo that implements the v1.1 protocol.")]),t._v(" "),t._m(0),t._v(" "),s("p",[t._v("Enable "),s("a",{attrs:{href:"http://support.tivo.com/app/answers/detail/a_id/391",target:"_blank",rel:"noopener noreferrer"}},[t._v("Network Remote Control"),s("OutboundLink")],1),t._v(" on your TiVo.")]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),s("p",[t._v("The format of item binding configuration strings is")]),t._v(" "),t._m(5),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._m(10),t._v(" "),s("p",[t._v('For example, the following code in a rule simulates a press of the "tivo" button on the remote control, gives the Tivo 3 seconds to wake up, then jumps to the recording list:')]),t._v(" "),t._m(11),s("p",[t._v("The following code in a rule will put the Tivo in standby:")]),t._v(" "),t._m(12),s("DocPreviousVersions"),t._v(" "),s("EditPageLink")],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"prerequisites"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites","aria-hidden":"true"}},[this._v("#")]),this._v(" Prerequisites")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"binding-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#binding-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Binding Configuration")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("This binding can be configured with the file "),e("code",[this._v("services/tivo.cfg")]),this._v(".")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("table",[s("thead",[s("tr",[s("th",[t._v("Property")]),t._v(" "),s("th",[t._v("Default")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("Required")]),t._v(" "),s("th",[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("host")]),t._v(" "),s("td"),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),s("td",[t._v("Your Tivo's hostname or IP address")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"item-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#item-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Item Configuration")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('tivo="<command>"\n')])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("where "),e("code",[this._v("<command>")]),this._v(" is one of:")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[t._v("tivo")]),t._v(" "),s("li",[t._v("info")]),t._v(" "),s("li",[t._v("guide")]),t._v(" "),s("li",[t._v("window")]),t._v(" "),s("li",[t._v("record")]),t._v(" "),s("li",[t._v("clear")]),t._v(" "),s("li",[t._v("enter")]),t._v(" "),s("li",[t._v("play")]),t._v(" "),s("li",[t._v("reverse")]),t._v(" "),s("li",[t._v("pause")]),t._v(" "),s("li",[t._v("forward")]),t._v(" "),s("li",[t._v("replay")]),t._v(" "),s("li",[t._v("slow")]),t._v(" "),s("li",[t._v("advance")]),t._v(" "),s("li",[t._v("cc_on")]),t._v(" "),s("li",[t._v("cc_off")]),t._v(" "),s("li",[t._v("standby")]),t._v(" "),s("li",[t._v("nowshowing")]),t._v(" "),s("li",[t._v("num0")]),t._v(" "),s("li",[t._v("num1")]),t._v(" "),s("li",[t._v("num2")]),t._v(" "),s("li",[t._v("num3")]),t._v(" "),s("li",[t._v("num4")]),t._v(" "),s("li",[t._v("num5")]),t._v(" "),s("li",[t._v("num6")]),t._v(" "),s("li",[t._v("num7")]),t._v(" "),s("li",[t._v("num8")]),t._v(" "),s("li",[t._v("num9")]),t._v(" "),s("li",[t._v("live_tv")]),t._v(" "),s("li",[t._v("thumbs_up")]),t._v(" "),s("li",[t._v("thumbs_down")]),t._v(" "),s("li",[t._v("channel_up")]),t._v(" "),s("li",[t._v("channel_down")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"examples"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#examples","aria-hidden":"true"}},[this._v("#")]),this._v(" Examples")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-dsl"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Tivo_Button")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Tivo Button"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" tivo"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"tivo"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Tivo_Recordings")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Tivo Recordings"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" tivo"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"nowshowing"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Tivo_Standby")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Tivo Standby"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" tivo"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"standby"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Turn any TiVo "),e("code",[this._v("Switch")]),this._v(" ON in a rule or script to send the configured command to your TiVo.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("Tivo_Button.sendCommand(ON)\ncreateTimer(now.plusSeconds(3)) [ | Tivo_Recordings.sendCommand(ON) ]\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("Tivo_Standby.sendCommand(ON)\n")])])])}],!1,null,null,null);e.default=a.exports}}]);