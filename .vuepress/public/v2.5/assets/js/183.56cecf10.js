(window.webpackJsonp=window.webpackJsonp||[]).push([[183],{705:function(t,e,s){"use strict";s.r(e);var a=s(0),n=Object(a.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),s("p",[t._v("This binding allows you to integrate feeds in the openHAB environment.\nThe Feed binding downloads the content, tracks for changes, and displays information like feed author, feed title and description, number of entries, last update date.")]),t._v(" "),s("p",[t._v("It can be used in combination with openHAB rules to trigger events on feed change.\nIt uses the "),s("a",{attrs:{href:"https://rometools.github.io/rome/index.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("ROME library"),s("OutboundLink")],1),t._v(" for parsing\nand supports a wide range of popular feed formats - RSS 2.00, RSS 1.00, RSS 0.94, RSS 0.93, RSS 0.92, RSS 0.91 UserLand,\nRSS 0.91 Netscape, RSS 0.90, Atom 1.0, Atom 0.3.")]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),s("p",[t._v("Discovery is not necessary.")]),t._v(" "),t._m(4),t._v(" "),s("p",[t._v("No binding configuration required.")]),t._v(" "),t._m(5),t._v(" "),s("p",[t._v("Required configuration:")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("URL")]),t._v(" - the URL of the feed (e.g "),s("a",{attrs:{href:"http://example.com/path/file",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://example.com/path/file"),s("OutboundLink")],1),t._v("). The binding uses this URL to download data")])]),t._v(" "),s("p",[t._v("Optional configuration:")]),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),s("p",[t._v("The binding supports following channels")]),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),s("p",[t._v("Things:")]),t._v(" "),t._m(10),s("p",[t._v("Items:")]),t._v(" "),t._m(11),s("DocPreviousVersions"),t._v(" "),s("EditPageLink")],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"feed-binding"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#feed-binding","aria-hidden":"true"}},[this._v("#")]),this._v(" Feed Binding")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"supported-things"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#supported-things","aria-hidden":"true"}},[this._v("#")]),this._v(" Supported Things")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("This binding supports one Thing type: "),e("code",[this._v("feed")]),this._v(".")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"discovery"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#discovery","aria-hidden":"true"}},[this._v("#")]),this._v(" Discovery")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"binding-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#binding-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Binding Configuration")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"thing-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#thing-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Thing Configuration")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("strong",[this._v("refresh")]),this._v(" - a refresh interval defines after how many minutes the binding will check, if new content is available. Default value is 20 minutes")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"channels"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#channels","aria-hidden":"true"}},[this._v("#")]),this._v(" Channels")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("table",[s("thead",[s("tr",[s("th",[t._v("Channel Type ID")]),t._v(" "),s("th",[t._v("Item Type")]),t._v(" "),s("th",[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("latest-title")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v("Contains the title of the last feed entry.")])]),t._v(" "),s("tr",[s("td",[t._v("latest-description")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v("Contains the description of last feed entry.")])]),t._v(" "),s("tr",[s("td",[t._v("latest-date")]),t._v(" "),s("td",[t._v("DateTime")]),t._v(" "),s("td",[t._v("Contains the published date of the last feed entry.")])]),t._v(" "),s("tr",[s("td",[t._v("author")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v("The name of the feed author, if author is present")])]),t._v(" "),s("tr",[s("td",[t._v("title")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v("The title of the feed")])]),t._v(" "),s("tr",[s("td",[t._v("description")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v("Description of the feed")])]),t._v(" "),s("tr",[s("td",[t._v("last-update")]),t._v(" "),s("td",[t._v("DateTime")]),t._v(" "),s("td",[t._v("The last update date of the feed")])]),t._v(" "),s("tr",[s("td",[t._v("number-of-entries")]),t._v(" "),s("td",[t._v("Number")]),t._v(" "),s("td",[t._v("Number of entries in the feed")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"example"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#example","aria-hidden":"true"}},[this._v("#")]),this._v(" Example")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[t._v("feed"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("feed"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("bbc  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" URL"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://feeds.bbci.co.uk/news/video_and_audio/news_front_page/rss.xml?edition=uk"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nfeed"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("feed"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("techCrunch "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" URL"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://feeds.feedburner.com/TechCrunch/"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" refresh"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("60")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-dsl"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("String")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("latest_title")]),t._v("           "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("channel"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"feed:feed:bbc:latest-title"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("String")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("latest_description")]),t._v("     "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("channel"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"feed:feed:bbc:latest-description"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DateTime")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("latest_date")]),t._v("          "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("channel"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"feed:feed:bbc:latest-date"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Number")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("number_of_entries")]),t._v("      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("channel"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"feed:feed:bbc:number-of-entries"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("String")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("description")]),t._v("            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("channel"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"feed:feed:bbc:description"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("String")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("author")]),t._v("                 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("channel"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"feed:feed:bbc:author"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DateTime")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("published_date")]),t._v("       "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("channel"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"feed:feed:bbc:last-update"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("String")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("title")]),t._v("                  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("channel"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"feed:feed:bbc:title"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])}],!1,null,null,null);e.default=n.exports}}]);