(window.webpackJsonp=window.webpackJsonp||[]).push([[352],{971:function(t,e,s){"use strict";s.r(e);var a=s(0),n=Object(a.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),s("AddonLogo"),t._v(" "),s("p",[t._v("The Pushbullet binding allows you to notify iOS, Android & Windows 10 Phone & Desktop devices of a message using the Pushbullet API web service.")]),t._v(" "),t._m(1),t._v(" "),s("p",[t._v('This binding supports a generic "bot" which is a representation of the client.')]),t._v(" "),t._m(2),t._v(" "),s("p",[t._v("This binding provides no discovery.\nThe desired bots must be configured manually or via a things file.")]),t._v(" "),t._m(3),t._v(" "),s("p",[t._v("The binding has no configuration options itself, all configuration is done at 'Things' level.")]),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),s("p",[t._v("The bot thing is used to send messages to other recipients.\nIt has the following parameters:")]),t._v(" "),t._m(6),t._v(" "),t._m(7),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),s("p",[t._v("This binding includes rule actions for sending notes.\nTwo different actions available:")]),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),s("p",[t._v("Examples:")]),t._v(" "),t._m(13),t._m(14),t._v(" "),t._m(15),t._v(" "),s("p",[t._v("pushbullet.things:")]),t._v(" "),t._m(16),s("p",[t._v("pushbullet.items")]),t._v(" "),t._m(17),s("p",[t._v("pushbullet.sitemap")]),t._v(" "),t._m(18),s("p",[t._v("pushbullet.rules")]),t._v(" "),t._m(19),t._m(20),t._v(" "),s("p",[t._v("The pushbullet accounts are bound to either Google or Facebook accounts.")]),t._v(" "),s("ul",[s("li",[t._v("Create a bot account with either Facebook or Google")]),t._v(" "),s("li",[t._v('Go to "'),s("a",{attrs:{href:"https://www.pushbullet.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.pushbullet.com/"),s("OutboundLink")],1),t._v('"')]),t._v(" "),s("li",[t._v('Chose to either "Sign up with Google" or "Sign up with Facebook".')]),t._v(" "),s("li",[t._v("Complete the signup process as guided by the pushbullet web site.")]),t._v(" "),s("li",[t._v('Continue with "Obtaining an API key".')])]),t._v(" "),t._m(21),t._v(" "),s("p",[t._v("The API keys are bound to the pushbullet account.")]),t._v(" "),s("ul",[s("li",[t._v("Go to the pushbullet site.")]),t._v(" "),s("li",[t._v("Log in with either your personal account or the one you created for your bot.")]),t._v(" "),s("li",[t._v('Go to "'),s("a",{attrs:{href:"https://www.pushbullet.com/#settings/account",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.pushbullet.com/#settings/account"),s("OutboundLink")],1),t._v('"')]),t._v(" "),s("li",[t._v('Click on "Create Access Token".')]),t._v(" "),s("li",[t._v("Copy the token created on the site.")])]),t._v(" "),s("p",[t._v("You must at least provide an API token (Private or Alias Key from "),s("a",{attrs:{href:"http://Pushbullet.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("Pushbullet.com"),s("OutboundLink")],1),t._v(") and a message in some manner before a message can be pushed.\nAll other parameters are optional.\nIf you use an alias key, the parameters (device, icon, sound, vibration) are overwritten by the alias setting on pushbullet.")]),t._v(" "),t._m(22),t._v(" "),s("p",[t._v("As of 2019, free accounts have a limit of 100 pushes per month.\nThis action does not evaluate the rate limiting headers though.")]),t._v(" "),t._m(23),t._v(" "),s("p",[t._v("This project is being translated on transifex.\nIf you want to help, please join the project at the URL:")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://www.transifex.com/hakan42/openhab-binding-pushbullet/dashboard/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.transifex.com/hakan42/openhab-binding-pushbullet/dashboard/"),s("OutboundLink")],1)])]),t._v(" "),t._m(24),t._v(" "),s("p",[t._v("This action has been written without using libraries as jpushbullet or jpushbullet2.\nBoth of those libraries use various libraries themselves which makes integrating them into openHAB a challenge.")]),t._v(" "),t._m(25),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://docs.pushbullet.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://docs.pushbullet.com/"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://docs.pushbullet.com/#push-limit",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://docs.pushbullet.com/#push-limit"),s("OutboundLink")],1)])]),t._v(" "),s("DocPreviousVersions"),t._v(" "),s("EditPageLink")],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"pushbullet-binding"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#pushbullet-binding","aria-hidden":"true"}},[this._v("#")]),this._v(" Pushbullet Binding")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"supported-things"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#supported-things","aria-hidden":"true"}},[this._v("#")]),this._v(" Supported Things")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"discovery"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#discovery","aria-hidden":"true"}},[this._v("#")]),this._v(" Discovery")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"binding-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#binding-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Binding Configuration")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"thing-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#thing-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Thing Configuration")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"bot-bot"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#bot-bot","aria-hidden":"true"}},[this._v("#")]),this._v(" Bot ("),e("code",[this._v("bot")]),this._v(")")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("table",[s("thead",[s("tr",[s("th",[t._v("Config")]),t._v(" "),s("th",[t._v("Description")]),t._v(" "),s("th",[t._v("Required")]),t._v(" "),s("th",[t._v("Advanced")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("token")]),t._v(" "),s("td",[t._v("Pushbullet "),s("a",{attrs:{href:"#obtaining-an-api-key"}},[t._v("API token")]),t._v(" to send to devices")]),t._v(" "),s("td",[t._v("Yes")]),t._v(" "),s("td",[t._v("False")])]),t._v(" "),s("tr",[s("td",[t._v("name")]),t._v(" "),s("td",[t._v("Explicit Name, for later use when the bot can receive messages")]),t._v(" "),s("td",[t._v("No")]),t._v(" "),s("td",[t._v("True")])]),t._v(" "),s("tr",[s("td",[t._v("apiUrlBase")]),t._v(" "),s("td",[t._v("Address of own Pushbullet server, for testing purposes")]),t._v(" "),s("td",[t._v("No")]),t._v(" "),s("td",[t._v("True")])])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-dsl"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Thing")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("pushbullet"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("bot"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("r2d2")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"R2D2"')]),t._v(" @ "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Somewhere"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" token "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"verysecretwonttellyou"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"channels"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#channels","aria-hidden":"true"}},[this._v("#")]),this._v(" Channels")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("table",[s("thead",[s("tr",[s("th",[t._v("Channel ID")]),t._v(" "),s("th",[t._v("Channel Description")]),t._v(" "),s("th",[t._v("Supported item type")]),t._v(" "),s("th",[t._v("Advanced")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("recipient")]),t._v(" "),s("td",[t._v("for later use when the bot can receive messages")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v("False")])]),t._v(" "),s("tr",[s("td",[t._v("title")]),t._v(" "),s("td",[t._v("for later use when the bot can receive messages")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v("False")])]),t._v(" "),s("tr",[s("td",[t._v("message")]),t._v(" "),s("td",[t._v("for later use when the bot can receive messages")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v("False")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"rule-action"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#rule-action","aria-hidden":"true"}},[this._v("#")]),this._v(" Rule Action")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("code",[this._v("sendPushbulletNote(String recipient, String messsage)")])]),this._v(" "),e("li",[e("code",[this._v("sendPushbulletNote(String recipient, String title, String messsage)")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Since there is a separate rule action instance for each "),e("code",[this._v("bot")]),this._v(" thing, this needs to be retrieved through "),e("code",[this._v("getActions(scope, thingUID)")]),this._v(".\nThe first parameter always has to be "),e("code",[this._v("pushbullet")]),this._v(" and the second is the full Thing UID of the bot that should be used.\nOnce this action instance is retrieved, you can invoke the action method on it.")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-rules"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" actions "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getActions")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"pushbullet"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"pushbullet:bot:r2d2"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" result "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" actions"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sendPushbulletNote")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"someone@example.com"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"R2D2 talks here..."')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"This is the pushed note."')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"full-example"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#full-example","aria-hidden":"true"}},[this._v("#")]),this._v(" Full Example")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("em",[this._v("Provide a full usage example based on textual configuration files (*.things, *.items, *.sitemap).")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-dsl"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Thing")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("pushbullet"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("bot"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("r2d2")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"R2D2"')]),t._v(" @ "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Somewhere"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" token "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"verysecretwonttellyou"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-java extra-class"},[e("pre",{pre:!0,attrs:{class:"language-dsl"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[this._v("Switch")]),this._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[this._v("Pushbullet_R2D2_Button")]),this._v("  "),e("span",{pre:!0,attrs:{class:"token string"}},[this._v('"Pushbullet Action bot R2D2"')]),this._v("\n")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-dsl"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("sitemap")]),t._v(" pushbullet "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("label")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Pushbullet"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("item")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("Pushbullet_R2D2_Button\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-rules"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("rule")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Pushbullet R2D2 changed"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("when")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Item")]),t._v(" Pushbullet_R2D2_Button "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("changed")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("then")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("logInfo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("filename"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Button R2D2 changed - OH2..."')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token function-name"}},[t._v("Pushbullet_R2D2_Button")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("state "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("ON")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sendCommand")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Pushbullet_R2D2_Button"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("OFF")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" actions "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getActions")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"pushbullet"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"pushbullet:bot:r2d2"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("logInfo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("filename"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("\"Actions for 'R2D2' are: \"")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" actions"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("actions "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" result "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" actions"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sendPushbulletNote")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"someone@example.com"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Title R2D2 OH2"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"This has been sent by the new R2D2 bot"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("logInfo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("filename"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Result of send action is: "')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" result"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"creating-an-account-for-your-bot-s"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#creating-an-account-for-your-bot-s","aria-hidden":"true"}},[this._v("#")]),this._v(" Creating an account for your bot(s)")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"obtaining-an-api-key"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#obtaining-an-api-key","aria-hidden":"true"}},[this._v("#")]),this._v(" Obtaining an API key")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"rate-limits"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#rate-limits","aria-hidden":"true"}},[this._v("#")]),this._v(" Rate limits")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"translation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#translation","aria-hidden":"true"}},[this._v("#")]),this._v(" Translation")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"libraries"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#libraries","aria-hidden":"true"}},[this._v("#")]),this._v(" Libraries")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"pushbullet-api"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#pushbullet-api","aria-hidden":"true"}},[this._v("#")]),this._v(" pushbullet API")])}],!1,null,null,null);e.default=n.exports}}]);