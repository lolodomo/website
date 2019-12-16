(window.webpackJsonp=window.webpackJsonp||[]).push([[141],{640:function(t,a,e){"use strict";e.r(a);var s=e(0),r=Object(s.a)({},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"content"},[t._m(0),t._v(" "),e("AddonLogo"),t._v(" "),e("p",[t._v("The binding integrates Google Chromecast streaming devices.\nIt not only acts as a typical binding, but also registers each Chromecast device as an audio sink that can be used for playback.")]),t._v(" "),e("p",[t._v("When a Chromecast is used as an audio sink, the Chromecast connects to the runtime to get the audio streams.\nThe binding sends the Chromecast URLs for getting the audio streams based on the Primary Address (Network Settings configuration) and the runtime HTTP port.\nThese URL defaults can be overridden with the Callback URL configuration parameter.")]),t._v(" "),e("p",[t._v("This can be configured on the binding level:")]),t._v(" "),e("table",[t._m(1),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("callbackUrl")]),t._v(" "),e("td",[t._v("text")]),t._v(" "),e("td",[t._v("optional Callback URL - url to use for playing notification sounds, e.g. "),e("a",{attrs:{href:"http://192.168.0.2:8080",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://192.168.0.2:8080"),e("OutboundLink")],1)])])])]),t._v(" "),e("p",[t._v("Configure a Callback URL when the Chromecast cannot connect using the Primary Address or Port, e.g. when:")]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),e("p",[t._v("Chromecast devices are discovered on the network using UPnP.\nNo authentication is required for accessing the devices on the network.")]),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),e("p",[t._v("Example for audio group:")]),t._v(" "),t._m(8),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),e("p",[t._v("services.cfg:")]),t._v(" "),t._m(12),e("p",[t._v("demo.things:")]),t._v(" "),t._m(13),e("p",[t._v("demo.items:")]),t._v(" "),t._m(14),e("p",[t._v("demo.rules:")]),t._v(" "),t._m(15),e("p",[t._v("demo.sitemap:")]),t._v(" "),t._m(16),t._m(17),e("DocPreviousVersions"),t._v(" "),e("EditPageLink")],1)},[function(){var t=this.$createElement,a=this._self._c||t;return a("h1",{attrs:{id:"chromecast-binding"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#chromecast-binding","aria-hidden":"true"}},[this._v("#")]),this._v(" Chromecast Binding")])},function(){var t=this.$createElement,a=this._self._c||t;return a("thead",[a("tr",[a("th",[this._v("Configuration Parameter")]),this._v(" "),a("th",[this._v("Type")]),this._v(" "),a("th",[this._v("Description")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("ul",[a("li",[this._v("proxying HTTP (port 80/443) using Apache/NGINX to openHAB (port 8080)")]),this._v(" "),a("li",[this._v("openHAB is running inside a Docker container that has its own IP Address")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"supported-things"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#supported-things","aria-hidden":"true"}},[this._v("#")]),this._v(" Supported Things")])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("table",[e("thead",[e("tr",[e("th",[t._v("Things")]),t._v(" "),e("th",[t._v("Description")]),t._v(" "),e("th",[t._v("Thing Type")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("Chromecast")]),t._v(" "),e("td",[t._v("Classic HDMI video Chromecasts and Google Homes")]),t._v(" "),e("td",[t._v("chromecast")])]),t._v(" "),e("tr",[e("td",[t._v("Chromecast Audio")]),t._v(" "),e("td",[t._v("The Chromecast which only does audio streaming and offers a headphone jack")]),t._v(" "),e("td",[t._v("audio")])]),t._v(" "),e("tr",[e("td",[t._v("Audio Group")]),t._v(" "),e("td",[t._v("A Chromecast audio group for multi-room audio defined via the Chromecast app")]),t._v(" "),e("td",[t._v("audiogroup")])])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"discovery"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#discovery","aria-hidden":"true"}},[this._v("#")]),this._v(" Discovery")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"thing-configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#thing-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Thing Configuration")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("Chromecast devices can also be manually added.\nThe only configuration parameter is the "),a("code",[this._v("ipAddress")]),this._v(".\nFor an audio group also the port is necessary.\nThe autodiscovery process finds the port automatically.\nWith manual thing configuration the parameter "),a("code",[this._v("port")]),this._v(" must be determined manually.")])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"language-java extra-class"},[e("pre",{pre:!0,attrs:{class:"language-dsl"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Thing")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("chromecast"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("audiogroup"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("bathroom")]),t._v("  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" ipAddress"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"192.168.0.23"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" port"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("42139")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"channels"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#channels","aria-hidden":"true"}},[this._v("#")]),this._v(" Channels")])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("table",[e("thead",[e("tr",[e("th",[t._v("Channel Type ID")]),t._v(" "),e("th",[t._v("Item Type")]),t._v(" "),e("th",[t._v("Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("control")]),t._v(" "),e("td",[t._v("Player")]),t._v(" "),e("td",[t._v("Player control; currently only supports play/pause and does not correctly update, if the state changes on the device itself")])]),t._v(" "),e("tr",[e("td",[t._v("stop")]),t._v(" "),e("td",[t._v("Switch")]),t._v(" "),e("td",[t._v("Send "),e("code",[t._v("ON")]),t._v(" to this channel: Stops the Chromecast. If this channel is "),e("code",[t._v("ON")]),t._v(", the Chromecast is stopped, otherwise it is in another state (see control channel)")])]),t._v(" "),e("tr",[e("td",[t._v("volume")]),t._v(" "),e("td",[t._v("Dimmer")]),t._v(" "),e("td",[t._v("Control the volume, this is also updated if the volume is changed by another app")])]),t._v(" "),e("tr",[e("td",[t._v("mute")]),t._v(" "),e("td",[t._v("Switch")]),t._v(" "),e("td",[t._v("Mute the audio")])]),t._v(" "),e("tr",[e("td",[t._v("playuri")]),t._v(" "),e("td",[t._v("String")]),t._v(" "),e("td",[t._v("Can be used to tell the Chromecast to play media from a given url")])]),t._v(" "),e("tr",[e("td",[t._v("appName")]),t._v(" "),e("td",[t._v("String")]),t._v(" "),e("td",[t._v("Name of currently running application")])]),t._v(" "),e("tr",[e("td",[t._v("appId")]),t._v(" "),e("td",[t._v("String")]),t._v(" "),e("td",[t._v("ID of currently running application")])]),t._v(" "),e("tr",[e("td",[t._v("idling")]),t._v(" "),e("td",[t._v("Switch")]),t._v(" "),e("td",[t._v("Read-only indication on weather Chromecast is on idle screen")])]),t._v(" "),e("tr",[e("td",[t._v("statustext")]),t._v(" "),e("td",[t._v("String")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("currentTime")]),t._v(" "),e("td",[t._v("Number:Time")]),t._v(" "),e("td",[t._v("Current time of currently playing media")])]),t._v(" "),e("tr",[e("td",[t._v("duration")]),t._v(" "),e("td",[t._v("Number:Time")]),t._v(" "),e("td",[t._v("Duration of current track (null if between tracks)")])]),t._v(" "),e("tr",[e("td",[t._v("metadataType")]),t._v(" "),e("td",[t._v("String")]),t._v(" "),e("td",[t._v("Type of metadata, this indicates what metadata may be available.  One of: GenericMediaMetadata, MovieMediaMetadata, TvShowMediaMetadata, MusicTrackMediaMetadata, PhotoMediaMetadata.")])]),t._v(" "),e("tr",[e("td",[t._v("subtitle")]),t._v(" "),e("td",[t._v("String")]),t._v(" "),e("td",[t._v("(GenericMediaMetadata) Descriptive subtitle of the content")])]),t._v(" "),e("tr",[e("td",[t._v("title")]),t._v(" "),e("td",[t._v("String")]),t._v(" "),e("td",[t._v("(GenericMediaMetadata) Descriptive title of the content")])]),t._v(" "),e("tr",[e("td",[t._v("image")]),t._v(" "),e("td",[t._v("Image")]),t._v(" "),e("td",[t._v("(GenericMediaMetadata) Image for current media")])]),t._v(" "),e("tr",[e("td",[t._v("imageSrc")]),t._v(" "),e("td",[t._v("String")]),t._v(" "),e("td",[t._v("(GenericMediaMetadata) URL of image for current media")])]),t._v(" "),e("tr",[e("td",[t._v("releaseDate")]),t._v(" "),e("td",[t._v("DateTime")]),t._v(" "),e("td",[t._v("(GenericMediaMetadata) ISO 8601 date and time this content was released")])]),t._v(" "),e("tr",[e("td",[t._v("albumArtist")]),t._v(" "),e("td",[t._v("String")]),t._v(" "),e("td",[t._v("(MusicTrackMediaMetadata) Name of the artist associated with the album featuring this track")])]),t._v(" "),e("tr",[e("td",[t._v("albumName")]),t._v(" "),e("td",[t._v("String")]),t._v(" "),e("td",[t._v("(MusicTrackMediaMetadata) Album or collection from which this track is drawn")])]),t._v(" "),e("tr",[e("td",[t._v("artist")]),t._v(" "),e("td",[t._v("String")]),t._v(" "),e("td",[t._v("(MusicTrackMediaMetadata) Name of the artist associated with the media track")])]),t._v(" "),e("tr",[e("td",[t._v("composer")]),t._v(" "),e("td",[t._v("String")]),t._v(" "),e("td",[t._v("(MusicTrackMediaMetadata) Name of the composer associated with the media track")])]),t._v(" "),e("tr",[e("td",[t._v("discNumber")]),t._v(" "),e("td",[t._v("Number")]),t._v(" "),e("td",[t._v("(MusicTrackMediaMetadata) Number of the volume (for example, a disc) of the album")])]),t._v(" "),e("tr",[e("td",[t._v("trackNumber")]),t._v(" "),e("td",[t._v("Number")]),t._v(" "),e("td",[t._v("(MusicTrackMediaMetadata) Number of the track on the album")])]),t._v(" "),e("tr",[e("td",[t._v("creationDate")]),t._v(" "),e("td",[t._v("DateTime")]),t._v(" "),e("td",[t._v("(PhotoMediaMetadata) ISO 8601 date and time this photograph was taken")])]),t._v(" "),e("tr",[e("td",[t._v("locationName")]),t._v(" "),e("td",[t._v("String")]),t._v(" "),e("td",[t._v('(PhotoMediaMetadata) Verbal location where the photograph was taken; for example, "Madrid, Spain."')])]),t._v(" "),e("tr",[e("td",[t._v("location")]),t._v(" "),e("td",[t._v("Location")]),t._v(" "),e("td",[t._v("(PhotoMediaMetadata) Geographical location of where the photograph was taken")])]),t._v(" "),e("tr",[e("td",[t._v("broadcastDate")]),t._v(" "),e("td",[t._v("DateTime")]),t._v(" "),e("td",[t._v("(TvShowMediaMetadata) ISO 8601 date and time this episode was released")])]),t._v(" "),e("tr",[e("td",[t._v("episodeNumber")]),t._v(" "),e("td",[t._v("Number")]),t._v(" "),e("td",[t._v("(TvShowMediaMetadata) Episode number (in the season) of the t.v. show")])]),t._v(" "),e("tr",[e("td",[t._v("seasonNumber")]),t._v(" "),e("td",[t._v("Number")]),t._v(" "),e("td",[t._v("(TvShowMediaMetadata) Season number of the t.v. show")])]),t._v(" "),e("tr",[e("td",[t._v("seriesTitle")]),t._v(" "),e("td",[t._v("String")]),t._v(" "),e("td",[t._v("(TvShowMediaMetadata) Descriptive title of the t.v. series")])]),t._v(" "),e("tr",[e("td",[t._v("studio")]),t._v(" "),e("td",[t._v("String")]),t._v(" "),e("td",[t._v("(TvShowMediaMetadata) Studio which released the content")])])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"full-example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#full-example","aria-hidden":"true"}},[this._v("#")]),this._v(" Full Example")])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"language-java extra-class"},[e("pre",{pre:!0,attrs:{class:"language-java"}},[e("code",[t._v("binding"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("chromecast"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("callbackUrl"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("http"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v(".30")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v(".58")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("8080")]),t._v("\n")])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"language-java extra-class"},[e("pre",{pre:!0,attrs:{class:"language-dsl"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Thing")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("chromecast"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("audio"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("myCC")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Lounge Chromecast Audio"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("ipAddress"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"192.168.xxx.xxx"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" port"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("xxxx"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Thing")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("chromecast"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("chromecast"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("KitchenHomeHub")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Kitchen Home Hub"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("ipAddress"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"192.168.xxx.xxx"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" port"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("8009")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"language-java extra-class"},[e("pre",{pre:!0,attrs:{class:"language-dsl"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Dimmer")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Volume")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" channel"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"chromecast:audio:myCC:volume"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Player")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Music")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" channel"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"chromecast:audio:myCC:control"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[t._v("rule "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Turn on kitchen speakers when Chromecast starts playing music"')]),t._v("\nwhen\n    Item chromecast_chromecast_38e621581281c7675a777e7b474811ed_appId changed\nthen\n    "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("logInfo")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"RULE.AUDIO"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Chromecast id changed!"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 36061251 Pandora")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 2872939A Google Play Music")]),t._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("chromecast_chromecast_38e621581281c7675a777e7b474811ed_appId"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("state "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"36061251"')]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" chromecast_chromecast_38e621581281c7675a777e7b474811ed_appId"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("state "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2872939A"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        kitchen_audio_power"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sendCommand")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("ON")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        kitchen_audio_source"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sendCommand")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nend\n")])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"language-perl extra-class"},[e("pre",{pre:!0,attrs:{class:"language-dsl"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("sitemap")]),t._v(" demo "),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("label")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Main Menu"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Frame")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Default")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("item")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("Music\n        "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Slider")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("item")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("Volume "),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("icon")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("soundvolume\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"language-perl extra-class"},[e("pre",{pre:!0,attrs:{class:"language-dsl"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("sitemap")]),t._v(" chromecast "),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("label")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Chromecasts"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Frame")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("label")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Family Room: What\'s Playing"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Image")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("item")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("chromecast_chromecast_38e621581281c7675a777e7b474811ed_image\n        "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Text")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("item")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("chromecast_chromecast_38e621581281c7675a777e7b474811ed_artist "),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("label")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Artist [%s]"')]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Text")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("item")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("chromecast_chromecast_38e621581281c7675a777e7b474811ed_title "),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("label")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Title [%s]"')]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Text")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("item")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("chromecast_chromecast_38e621581281c7675a777e7b474811ed_albumName "),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("label")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Album [%s]"')]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])}],!1,null,null,null);a.default=r.exports}}]);