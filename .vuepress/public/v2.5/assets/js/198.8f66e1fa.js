(window.webpackJsonp=window.webpackJsonp||[]).push([[198],{727:function(e,t,s){"use strict";s.r(t);var a=s(0),n=Object(a.a)({},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"content"},[e._m(0),e._v(" "),s("p",[e._v("This binding can be used to receive image files from FTP clients.\nThe binding acts as a FTP server.\nImages stored on the FTP server are not saved to the file system, therefore the binding shouldn't cause any problems on flash based openHAB installations.")]),e._v(" "),e._m(1),e._v(" "),e._m(2),e._v(" "),e._m(3),e._v(" "),s("p",[e._v("Automatic discovery is not supported.")]),e._v(" "),e._m(4),e._v(" "),s("p",[e._v("The binding has the following configuration options:")]),e._v(" "),e._m(5),e._v(" "),e._m(6),e._v(" "),s("p",[e._v("This binding currently supports the following channels:")]),e._v(" "),e._m(7),e._v(" "),s("p",[e._v("When an image file is uploaded to FTP server, the binding tries to find the channel whose filename matches the uploaded image filename.\nIf no match is found, no channel is updated.\nThe filename parameter supports regular expression patterns.\nSee more details in the Things example.")]),e._v(" "),s("p",[e._v("Image channel supports following options:")]),e._v(" "),e._m(8),e._v(" "),e._m(9),e._v(" "),e._m(10),e._v(" "),s("p",[e._v("When an image file is uploaded to FTP server, the binding tries to find the trigger channel whose filename matches the upload image filename.\nIf no match is found, no channel is updated.\nThe filename parameter supports regular expression patterns.\nSee more details in the Things example.")]),e._v(" "),s("p",[e._v("Trigger channels supports following options:")]),e._v(" "),e._m(11),e._v(" "),e._m(12),e._v(" "),s("p",[e._v("Things:")]),e._v(" "),e._m(13),s("p",[e._v("Items:")]),e._v(" "),e._m(14),s("p",[e._v("Rules:")]),e._v(" "),e._m(15),s("p",[e._v("Sitemap:")]),e._v(" "),e._m(16),e._m(17),e._v(" "),s("p",[e._v("The binding can be used to receive images from network cameras that send images to a FTP server when motion or sound is detected.")]),e._v(" "),s("p",[e._v("Things:")]),e._v(" "),e._m(18),s("p",[e._v("Items:")]),e._v(" "),e._m(19),s("p",[e._v("Rules:")]),e._v(" "),e._m(20),s("p",[e._v("Sitemap:")]),e._v(" "),e._m(21),e._m(22),e._v(" "),s("p",[e._v("For problem solving, if binding logging is not enough, Apache FTP server logging can also be enabled by the following command in the karaf console:")]),e._v(" "),e._m(23),s("p",[e._v("and set back to default level:")]),e._v(" "),e._m(24),s("p",[e._v("If you meet any problems to receive images from the network cameras, you could test connection to binding with any FTP client.\nYou can send image files via FTP client and thing channels should be updated accordingly.")]),e._v(" "),s("DocPreviousVersions"),e._v(" "),s("EditPageLink")],1)},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"ftp-upload-binding"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ftp-upload-binding","aria-hidden":"true"}},[this._v("#")]),this._v(" FTP Upload Binding")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"supported-things"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#supported-things","aria-hidden":"true"}},[this._v("#")]),this._v(" Supported Things")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("This binding supports Things of type "),t("code",[this._v("ftpupload")]),this._v(".\nEvery Thing is identified by FTP user name.\nTherefore, every thing should use unique user name to login FTP server.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"discovery"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#discovery","aria-hidden":"true"}},[this._v("#")]),this._v(" Discovery")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"binding-configuration"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#binding-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Binding Configuration")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("table",[s("thead",[s("tr",[s("th",[e._v("Parameter")]),e._v(" "),s("th",[e._v("Name")]),e._v(" "),s("th",[e._v("Description")]),e._v(" "),s("th",[e._v("Required")]),e._v(" "),s("th",[e._v("Default value")])])]),e._v(" "),s("tbody",[s("tr",[s("td",[e._v("port")]),e._v(" "),s("td",[e._v("TCP Port")]),e._v(" "),s("td",[e._v("TCP port of the FTP server")]),e._v(" "),s("td",[e._v("no")]),e._v(" "),s("td",[e._v("2121")])]),e._v(" "),s("tr",[s("td",[e._v("idleTimeout")]),e._v(" "),s("td",[e._v("Idle timeout")]),e._v(" "),s("td",[e._v("The number of seconds before an inactive client is disconnected. If this value is set to 0, the idle time is disabled.")]),e._v(" "),s("td",[e._v("no")]),e._v(" "),s("td",[e._v("60")])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"channels"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#channels","aria-hidden":"true"}},[this._v("#")]),this._v(" Channels")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("table",[s("thead",[s("tr",[s("th",[e._v("Channel Type ID")]),e._v(" "),s("th",[e._v("Item Type")]),e._v(" "),s("th",[e._v("Description")])])]),e._v(" "),s("tbody",[s("tr",[s("td",[e._v("image")]),e._v(" "),s("td",[e._v("Image")]),e._v(" "),s("td",[e._v("Image file received via FTP.")])])])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("table",[s("thead",[s("tr",[s("th",[e._v("Parameter")]),e._v(" "),s("th",[e._v("Name")]),e._v(" "),s("th",[e._v("Description")]),e._v(" "),s("th",[e._v("Required")]),e._v(" "),s("th",[e._v("Default value")])])]),e._v(" "),s("tbody",[s("tr",[s("td",[e._v("filename")]),e._v(" "),s("td",[e._v("Filename")]),e._v(" "),s("td",[e._v("Filename to match received files. Supports regular expression patterns.")]),e._v(" "),s("td",[e._v("yes")]),e._v(" "),s("td",[e._v(".*")])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"trigger-channels"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#trigger-channels","aria-hidden":"true"}},[this._v("#")]),this._v(" Trigger Channels")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("table",[s("thead",[s("tr",[s("th",[e._v("Channel Type ID")]),e._v(" "),s("th",[e._v("Options")]),e._v(" "),s("th",[e._v("Description")])])]),e._v(" "),s("tbody",[s("tr",[s("td",[e._v("image-received")]),e._v(" "),s("td",[e._v("IMAGE_RECEIVED")]),e._v(" "),s("td",[e._v("Triggered when image file received from FTP client.")])])])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("table",[s("thead",[s("tr",[s("th",[e._v("Parameter")]),e._v(" "),s("th",[e._v("Name")]),e._v(" "),s("th",[e._v("Description")]),e._v(" "),s("th",[e._v("Required")]),e._v(" "),s("th",[e._v("Default value")])])]),e._v(" "),s("tbody",[s("tr",[s("td",[e._v("filename")]),e._v(" "),s("td",[e._v("Filename")]),e._v(" "),s("td",[e._v("Filename to match received files. Supports regular expression patterns.")]),e._v(" "),s("td",[e._v("yes")]),e._v(" "),s("td",[e._v(".*")])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"full-example"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#full-example","aria-hidden":"true"}},[this._v("#")]),this._v(" Full Example")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-dsl"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("Thing")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("ftpupload"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("imagereceiver"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("images1")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v(" userName"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"test1"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" password"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"12345"')]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("Thing")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("ftpupload"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("imagereceiver"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("images2")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v(" userName"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"test2"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" password"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"12345"')]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n   "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("Channels")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("Type")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("image")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("channel "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" my_image1 "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"My Image channel 1"')]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("\n            filename"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"test12[0-9]{2}.png"')]),e._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// match to filename test12xx.png, where xx can be numbers between 00-99")]),e._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("Type")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("image")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("channel "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" my_image2 "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"My Image channel 2"')]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("\n            filename"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"test.jpg"')]),e._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n        Trigger "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("String")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")])]),e._v(" my_image_trigger1 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("\n            filename"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"test12[0-9]{2}.png"')]),e._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n        Trigger "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("String")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")])]),e._v(" my_image_trigger2 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("\n            filename"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"test.jpg"')]),e._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("    \n")])])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-dsl"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("Image")]),e._v("  "),s("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("Image1")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" channel"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"ftpupload:imagereceiver:images1:image"')]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("Image")]),e._v("  "),s("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("Image2")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" channel"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"ftpupload:imagereceiver:images2:my_image1"')]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-rules"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("rule")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"example trigger rule 1"')]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("when")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("Channel")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'ftpupload:imagereceiver:images1:image-received'")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("triggered")]),e._v(" IMAGE_RECEIVED \n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("then")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("logInfo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Test"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Image received"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("end")]),e._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("rule")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"example trigger rule 2"')]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("when")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("Channel")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'ftpupload:imagereceiver:images2:my_image_trigger1'")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("triggered")]),e._v(" IMAGE_RECEIVED \n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("then")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("logInfo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Test"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Image received"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("end")]),e._v("\n\n")])])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-dsl"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("Frame")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("label")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"FTP images"')]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("Image")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("item")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("Image1\n    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("Image")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[e._v("item")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("Image2\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"use-case-example"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#use-case-example","aria-hidden":"true"}},[this._v("#")]),this._v(" Use case example")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-dsl"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("Thing")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("ftpupload"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("imagereceiver"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("garagecamera")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v(" userName"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"garage"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" password"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"12345"')]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n")])])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-dsl"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("Image")]),e._v("  "),s("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("Garage_NetworkCamera_Motion_Image")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" channel"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"ftpupload:imagereceiver:garagecamera:image"')]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-rules"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("rule")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"example trigger rule"')]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("when")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("Channel")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'ftpupload:imagereceiver:garagecamera:image-received'")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("triggered")]),e._v(" IMAGE_RECEIVED \n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("then")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("logInfo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Test"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Garage motion detected"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("end")]),e._v("\n")])])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-dsl"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("Frame")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("label")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Garage network camera"')]),e._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[e._v("icon")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"camera"')]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("Image")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("item")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("Garage_NetworkCamera_Motion_Image\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"logging-and-problem-solving"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#logging-and-problem-solving","aria-hidden":"true"}},[this._v("#")]),this._v(" Logging and Problem Solving")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("log:set DEBUG org.apache.ftpserver\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("log:set DEFAULT org.apache.ftpserver\n")])])])}],!1,null,null,null);t.default=n.exports}}]);