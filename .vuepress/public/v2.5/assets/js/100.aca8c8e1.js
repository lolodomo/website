(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{577:function(t,e,r){"use strict";r.r(e);var n=r(0),i=Object(n.a)({},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"content"},[r("h1",{attrs:{id:"pushover-actions"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#pushover-actions","aria-hidden":"true"}},[t._v("#")]),t._v(" Pushover Actions "),r("Badge",{attrs:{type:"warn",text:"v1"}})],1),t._v(" "),r("AddonLogo"),t._v(" "),r("p",[t._v("The Pushover action service allows you to notify mobile devices of a message using the Pushover API web service.")]),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),r("table",[t._m(2),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("defaultTimeout")]),t._v(" "),r("td",[t._v("10000")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("No")]),t._v(" "),r("td",[t._v("-")]),t._v(" "),r("td",[t._v("Timeout in milliseconds for the connection to "),r("a",{attrs:{href:"http://pushover.net",target:"_blank",rel:"noopener noreferrer"}},[t._v("pushover.net"),r("OutboundLink")],1)])]),t._v(" "),r("tr",[r("td",[t._v("defaultToken")]),t._v(" "),r("td"),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("Yes, if using action call without calling withApiKey() method")]),t._v(" "),r("td",[t._v("withApiKey(String apiKey)")]),t._v(" "),r("td",[t._v("Pushover "),r("a",{attrs:{href:"https://pushover.net/api",target:"_blank",rel:"noopener noreferrer"}},[t._v("API token"),r("OutboundLink")],1),t._v(" to send to devices")])]),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),r("tr",[r("td",[t._v("htmlFormatting")]),t._v(" "),r("td"),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("No")]),t._v(" "),r("td",[t._v("withHtmlFormatting(boolean htmlFormatting)")]),t._v(" "),r("td",[t._v("Enable or disable "),r("a",{attrs:{href:"https://pushover.net/api#html",target:"_blank",rel:"noopener noreferrer"}},[t._v("HTML/Message Styling"),r("OutboundLink")],1),t._v(". Per default HTML styling is disabled.")])]),t._v(" "),r("tr",[r("td",[t._v("monospaceFormatting")]),t._v(" "),r("td"),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("No")]),t._v(" "),r("td",[t._v("withMonospaceFormatting(boolean monospaceFormatting)")]),t._v(" "),r("td",[t._v("Enable or disable "),r("a",{attrs:{href:"https://pushover.net/api#html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Monospace Message Styling"),r("OutboundLink")],1),t._v(". Per default monospace styling is disabled.")])]),t._v(" "),t._m(10),t._v(" "),t._m(11)])]),t._v(" "),t._m(12),t._v(" "),r("p",[t._v("The following are valid action calls that can be made when the plugin is loaded.\nFor specific information on each item, see the "),r("a",{attrs:{href:"https://pushover.net/api",target:"_blank",rel:"noopener noreferrer"}},[t._v("Pushover API"),r("OutboundLink")],1),t._v(".")]),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),t._m(15),t._v(" "),r("p",[t._v("The actions which are send using "),r("code",[t._v("withEmergencyPriority()")]),t._v(" will send a message with "),r("a",{attrs:{href:"https://pushover.net/api#priority",target:"_blank",rel:"noopener noreferrer"}},[t._v("Emergency Priority"),r("OutboundLink")],1),t._v(".\nThe actions return a receipt identifier (String).\nThe identifier has to be passed on to the "),r("code",[t._v("cancelPushoverEmergency")]),t._v(" actions to cancel the notification prior to reaching the "),r("code",[t._v("defaultExpire")]),t._v(" value of one hour.")]),t._v(" "),t._m(16),t._v(" "),t._m(17),t._v(" "),t._m(18),t._v(" "),r("p",[t._v("Different ways to send a message. You can use multiple withX() methods to suit your needs.")]),t._v(" "),t._m(19),t._v(" "),t._m(20),t._v(" "),t._m(21),r("DocPreviousVersions"),t._v(" "),r("EditPageLink")],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Configuration")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",[t._v("You may define default values for parameters to action calls in the file "),r("code",[t._v("services/pushover.cfg")]),t._v(".\nNone of the configuration parameters are required as you can specify required configuration items in the action call, but you must at least provide an "),r("em",[t._v("API Token")]),t._v(", "),r("em",[t._v("User/Group Key")]),t._v(" and a "),r("em",[t._v("Message")]),t._v(" in some manner before a message can be pushed.")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("thead",[r("tr",[r("th",[t._v("Property")]),t._v(" "),r("th",[t._v("Default")]),t._v(" "),r("th",{staticStyle:{"text-align":"center"}},[t._v("Required")]),t._v(" "),r("th",[t._v("method to set")]),t._v(" "),r("th",[t._v("Description")])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("tr",[r("td",[t._v("defaultUser")]),t._v(" "),r("td"),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("Yes, if using action call without calling withUser() method")]),t._v(" "),r("td",[t._v("withUser(String user)")]),t._v(" "),r("td",[t._v("Pushover User or Group key (not e-mail address) of your user (or you) to send to devices.")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("tr",[r("td",[t._v("defaultTitle")]),t._v(" "),r("td",[t._v("openHAB")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("No")]),t._v(" "),r("td",[t._v("withTitle(String title)")]),t._v(" "),r("td",[t._v("Application title for the message")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("tr",[r("td",[t._v("defaultPriority")]),t._v(" "),r("td",[t._v("0")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("No")]),t._v(" "),r("td",[t._v("withPriority(int priority)")]),t._v(" "),r("td",[t._v("Priority of the notification, from -2 (low priority) to 2 (high priority)")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("tr",[r("td",[t._v("defaultUrl")]),t._v(" "),r("td"),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("No")]),t._v(" "),r("td",[t._v("withUrl(String url)")]),t._v(" "),r("td",[t._v("URL to attach to the message if not specified in the command. This can be used to trigger actions on the device.")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("tr",[r("td",[t._v("defaultUrlTitle")]),t._v(" "),r("td"),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("No")]),t._v(" "),r("td",[t._v("withUrlTitle(String urlTitle)")]),t._v(" "),r("td",[t._v("URL title to attach to the message if not specified in the command. This can be used to trigger actions on the device.")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("tr",[r("td",[t._v("attachment")]),t._v(" "),r("td"),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("No")]),t._v(" "),r("td",[t._v("withAttachment(String attachment)")]),t._v(" "),r("td",[t._v("The full path of a JPEG image attachment to be pushed with the message.")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("tr",[r("td",[t._v("contentType")]),t._v(" "),r("td"),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("No")]),t._v(" "),r("td",[t._v("withContentType(String contentType)")]),t._v(" "),r("td",[t._v('Content type, ie  "image/png"')])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("tr",[r("td",[t._v("defaultRetry")]),t._v(" "),r("td",[t._v("300")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("No")]),t._v(" "),r("td",[t._v("-")]),t._v(" "),r("td",[t._v("When priority is 2 (high priority), how often (in seconds) should messages be resent")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("tr",[r("td",[t._v("defaultExpire")]),t._v(" "),r("td",[t._v("3600")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("No")]),t._v(" "),r("td",[t._v("-")]),t._v(" "),r("td",[t._v("When priority is 2 (high priority), how long (in seconds) to continue resending messages until acknowledged")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"actions"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#actions","aria-hidden":"true"}},[this._v("#")]),this._v(" Actions")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("code",[this._v("sendPushoverMessage(Pushover pushover)")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Most parameters are optional and may have a default value. In this case any default values from "),e("code",[this._v("services/pushover.cfg")]),this._v(" will be used.\nNote that you cannot use a null value for int priority.\nSee the examples section for details on how use the pushover action.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("code",[this._v("cancelPushoverEmergency(String receipt)")])]),this._v(" "),e("li",[e("code",[this._v("cancelPushoverEmergency(String apiToken, String userKey, String receipt)")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h6",{attrs:{id:"deprecated-actions"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#deprecated-actions","aria-hidden":"true"}},[this._v("#")]),this._v(" Deprecated Actions")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",[r("li",[r("s",[r("code",[t._v("pushover(String message)")])])]),t._v(" "),r("li",[r("s",[r("code",[t._v("pushover(String message, int priority)")])])]),t._v(" "),r("li",[r("s",[r("code",[t._v("pushover(String message, int priority, String url)")])])]),t._v(" "),r("li",[r("s",[r("code",[t._v("pushover(String message, int priority, String url, String urlTitle)")])])]),t._v(" "),r("li",[r("s",[r("code",[t._v("pushover(String message, int priority, String url, String urlTitle, String soundFile)")])])]),t._v(" "),r("li",[r("s",[r("code",[t._v("pushover(String message, String device)")])])]),t._v(" "),r("li",[r("s",[r("code",[t._v("pushover(String message, String device, int priority)")])])]),t._v(" "),r("li",[r("s",[r("code",[t._v("pushover(String message, String device, int priority, String url)")])])]),t._v(" "),r("li",[r("s",[r("code",[t._v("pushover(String message, String device, int priority, String url, String urlTitle)")])])]),t._v(" "),r("li",[r("s",[r("code",[t._v("pushover(String message, String device, int priority, String url, String urlTitle, String soundFile)")])])]),t._v(" "),r("li",[r("s",[r("code",[t._v("pushover(String apiToken, String userKey, String message)")])])]),t._v(" "),r("li",[r("s",[r("code",[t._v("pushover(String apiToken, String userKey, String message, int priority)")])])]),t._v(" "),r("li",[r("s",[r("code",[t._v("pushover(String apiToken, String userKey, String message, String device)")])])]),t._v(" "),r("li",[r("s",[r("code",[t._v("pushover(String apiToken, String userKey, String message, String device, int priority)")])])]),t._v(" "),r("li",[r("s",[r("code",[t._v("pushover(String apiToken, String userKey, String message, String device, String title, String url, String urlTitle, int priority, String soundFile)")])])]),t._v(" "),r("li",[r("s",[r("code",[t._v("pushover(String apiToken, String userKey, String message, String device, String title, String url, String urlTitle, int priority, String soundFile, String attachment)")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"basic-example"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#basic-example","aria-hidden":"true"}},[this._v("#")]),this._v(" Basic example")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",[r("li",[r("code",[t._v('sendPushoverMessage(pushoverBuilder("test message"))')])]),t._v(" "),r("li",[r("code",[t._v('sendPushoverMessage(pushoverBuilder("test message").withEmergencyPriority())')])]),t._v(" "),r("li",[r("code",[t._v('sendPushoverMessage(pushoverBuilder("test message").withAttachment("/path/to/file.jpeg"))')])]),t._v(" "),r("li",[r("code",[t._v('sendPushoverMessage(pushoverBuilder("test message").withAttachment("/path/to/file.png").withContentType("image/png"))')])]),t._v(" "),r("li",[r("code",[t._v('sendPushoverMessage(pushoverBuilder("test message").withApiKey("KEY").withUser("USER").withDevice("DEVICE").withTitle("TITLE").withUrl("URL").withUrlTitle("URL_TITLE").withPriority(0).withSound("SOUND").withAttachment("/path/to/file.png").withContentType("image/png"))')])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"emergency-example"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#emergency-example","aria-hidden":"true"}},[this._v("#")]),this._v(" Emergency example")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-rules"}},[r("code",[r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" receipt "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("sendPushoverMessage")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("pushoverBuilder")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Attention, front door opened!"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("withEmergencyPriority")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// wait for your cancel condition")]),t._v("\n\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" receipt "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token constant"}},[t._v("null")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("cancelPushoverEmergency")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("receipt"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    receipt "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token constant"}},[t._v("null")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])}],!1,null,null,null);e.default=i.exports}}]);