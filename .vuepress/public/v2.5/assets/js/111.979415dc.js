(window.webpackJsonp=window.webpackJsonp||[]).push([[111],{594:function(t,s,a){"use strict";a.r(s);var e=a(0),n=Object(e.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),a("AddonLogo"),t._v(" "),a("p",[t._v("This binding uses the "),a("a",{attrs:{href:"https://aqicn.org",target:"_blank",rel:"noopener noreferrer"}},[t._v("AQIcn.org service"),a("OutboundLink")],1),t._v(" for providing air quality information for any location worldwide.")]),t._v(" "),a("p",[t._v("The World Air Quality Index project is a social enterprise project started in 2007.\nIts mission is to promote Air Pollution awareness and provide a unified Air Quality information for the whole world.")]),t._v(" "),a("p",[t._v("The project is proving a transparent Air Quality information for more than 70 countries, covering more than 9000 stations in 600 major cities, via those two websites: "),a("a",{attrs:{href:"https://aqicn.org",target:"_blank",rel:"noopener noreferrer"}},[t._v("aqicn.org"),a("OutboundLink")],1),t._v(" and "),a("a",{attrs:{href:"https://waqi.info",target:"_blank",rel:"noopener noreferrer"}},[t._v("waqi.info"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("p",[t._v("To use this binding, you first need to "),a("a",{attrs:{href:"https://aqicn.org/data-platform/token/",target:"_blank",rel:"noopener noreferrer"}},[t._v("register and get your API token"),a("OutboundLink")],1),t._v(".")]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),a("p",[t._v("Local Air Quality can be autodiscovered based on system location.\nYou will have complete default configuration with your apiKey.")]),t._v(" "),t._m(4),t._v(" "),a("p",[t._v("The binding has no configuration options, all configuration is done at Thing level.")]),t._v(" "),t._m(5),t._v(" "),a("p",[t._v("The thing has a few configuration parameters:")]),t._v(" "),a("table",[t._m(6),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("apikey")]),t._v(" "),a("td",[t._v("Data-platform token to access the "),a("a",{attrs:{href:"http://AQIcn.org",target:"_blank",rel:"noopener noreferrer"}},[t._v("AQIcn.org"),a("OutboundLink")],1),t._v(" service. Mandatory.")])]),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9)])]),t._v(" "),a("p",[t._v("For the location parameter, the following syntax is allowed (comma separated latitude and longitude):")]),t._v(" "),t._m(10),a("p",[t._v("If you always want to receive data from specific station and you know its unique ID, you can enter it instead of the coordinates.")]),t._v(" "),a("p",[t._v("This "),a("code",[t._v("stationId")]),t._v(" can be found by using the following link:\n"),a("a",{attrs:{href:"https://api.waqi.info/search/?token=TOKEN&keyword=NAME",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://api.waqi.info/search/?token=TOKEN&keyword=NAME"),a("OutboundLink")],1),t._v(", replacing TOKEN by your apikey and NAME by the station you are looking for.")]),t._v(" "),t._m(11),t._v(" "),a("p",[t._v("The AirQuality information that is retrieved is available as these channels:")]),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),t._m(15),t._v(" "),a("p",[t._v("airquality.map:")]),t._v(" "),t._m(16),a("p",[t._v("airquality.things:")]),t._v(" "),t._m(17),a("p",[t._v("airquality.items:")]),t._v(" "),t._m(18),a("p",[t._v("airquality.sitemap:")]),t._v(" "),t._m(19),a("p",[t._v("airquality.rules:")]),t._v(" "),t._m(20),a("DocPreviousVersions"),t._v(" "),a("EditPageLink")],1)},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"air-quality-binding"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#air-quality-binding","aria-hidden":"true"}},[this._v("#")]),this._v(" Air Quality Binding")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"supported-things"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#supported-things","aria-hidden":"true"}},[this._v("#")]),this._v(" Supported Things")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("There is exactly one supported thing type, which represents the air quality information for an observation location.\nIt has the "),s("code",[this._v("aqi")]),this._v(" id.\nOf course, you can add multiple Things, e.g. for measuring AQI for different locations.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"discovery"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#discovery","aria-hidden":"true"}},[this._v("#")]),this._v(" Discovery")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"binding-configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#binding-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Binding Configuration")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"thing-configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#thing-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Thing Configuration")])},function(){var t=this.$createElement,s=this._self._c||t;return s("thead",[s("tr",[s("th",[this._v("Parameter")]),this._v(" "),s("th",[this._v("Description")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("tr",[s("td",[this._v("location")]),this._v(" "),s("td",[this._v("Geo coordinates to be considered by the service.")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("tr",[s("td",[this._v("stationId")]),this._v(" "),s("td",[this._v("Unique ID of the measuring station.")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("tr",[s("td",[this._v("refresh")]),this._v(" "),s("td",[this._v("Refresh interval in minutes. Optional, the default value is 60 minutes.")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token number"}},[t._v("37.8")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("122.4")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("37.8255")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("122.456")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"channels"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#channels","aria-hidden":"true"}},[this._v("#")]),this._v(" Channels")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("table",[a("thead",[a("tr",[a("th",[t._v("Channel ID")]),t._v(" "),a("th",[t._v("Item Type")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("aqiLevel")]),t._v(" "),a("td",[t._v("Number")]),t._v(" "),a("td",[t._v("Air Quality Index")])]),t._v(" "),a("tr",[a("td",[t._v("aqiDescription")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("AQI Description")])]),t._v(" "),a("tr",[a("td",[t._v("locationName")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("Nearest measuring station location")])]),t._v(" "),a("tr",[a("td",[t._v("stationId")]),t._v(" "),a("td",[t._v("Number")]),t._v(" "),a("td",[t._v("Measuring station ID")])]),t._v(" "),a("tr",[a("td",[t._v("stationLocation")]),t._v(" "),a("td",[t._v("Location")]),t._v(" "),a("td",[t._v("Latitude/longitude of measuring station")])]),t._v(" "),a("tr",[a("td",[t._v("pm25")]),t._v(" "),a("td",[t._v("Number")]),t._v(" "),a("td",[t._v("Fine particles pollution level (PM2.5)")])]),t._v(" "),a("tr",[a("td",[t._v("pm10")]),t._v(" "),a("td",[t._v("Number")]),t._v(" "),a("td",[t._v("Coarse dust particles pollution level (PM10)")])]),t._v(" "),a("tr",[a("td",[t._v("o3")]),t._v(" "),a("td",[t._v("Number")]),t._v(" "),a("td",[t._v("Ozone level (O3)")])]),t._v(" "),a("tr",[a("td",[t._v("no2")]),t._v(" "),a("td",[t._v("Number")]),t._v(" "),a("td",[t._v("Nitrogen Dioxide level (NO2)")])]),t._v(" "),a("tr",[a("td",[t._v("co")]),t._v(" "),a("td",[t._v("Number")]),t._v(" "),a("td",[t._v("Carbon monoxide level (CO)")])]),t._v(" "),a("tr",[a("td",[t._v("so2")]),t._v(" "),a("td",[t._v("Number")]),t._v(" "),a("td",[t._v("Sulfur dioxide level (SO2)")])]),t._v(" "),a("tr",[a("td",[t._v("observationTime")]),t._v(" "),a("td",[t._v("DateTime")]),t._v(" "),a("td",[t._v("Observation date and time")])]),t._v(" "),a("tr",[a("td",[t._v("temperature")]),t._v(" "),a("td",[t._v("Number:Temperature")]),t._v(" "),a("td",[t._v("Temperature in Celsius degrees")])]),t._v(" "),a("tr",[a("td",[t._v("pressure")]),t._v(" "),a("td",[t._v("Number:Pressure")]),t._v(" "),a("td",[t._v("Pressure level")])]),t._v(" "),a("tr",[a("td",[t._v("humidity")]),t._v(" "),a("td",[t._v("Number:Dimensionless")]),t._v(" "),a("td",[t._v("Humidity level")])]),t._v(" "),a("tr",[a("td",[t._v("dominentPol")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("Dominent Polutor")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v("AQI Description")]),this._v(" item provides a human-readable output that can be interpreted e.g. by MAP transformation.")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[a("em",[t._v("Note that channels like")]),t._v(" "),a("code",[t._v("pm25")]),t._v(", "),a("code",[t._v("pm10")]),t._v(", "),a("code",[t._v("o3")]),t._v(", "),a("code",[t._v("no2")]),t._v(", "),a("code",[t._v("co")]),t._v(", "),a("code",[t._v("so2")]),t._v(" "),a("em",[t._v("can sometimes return")]),t._v(" "),a("code",[t._v("UNDEF")]),t._v(" "),a("em",[t._v("value due to the fact that some stations don't provide measurements for them.")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"full-example"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#full-example","aria-hidden":"true"}},[this._v("#")]),this._v(" Full Example")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("-=-\nUNDEF=No data\nNULL=No data\nNO_DATA=No data\nGOOD=Good\nMODERATE=Moderate\nUNHEALTHY_FOR_SENSITIVE=Unhealthy for sensitive groups\nUNHEALTHY=Unhealthy\nVERY_UNHEALTHY=Very unhealthy\nHAZARDOUS=Hazardous\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[t._v("airquality"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("aqi"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("home "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"AirQuality"')]),t._v(" @ "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Krakow"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" apikey"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"XXXXXXXXXXXX"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" location"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"50.06465,19.94498"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" refresh"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("60")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nairquality"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("aqi"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("warsaw "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"AirQuality in Warsaw"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" apikey"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"XXXXXXXXXXXX"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" location"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"52.22,21.01"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" refresh"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("60")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nairquality"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("aqi"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("brisbane "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"AirQuality in Brisbane"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" apikey"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"XXXXXXXXXXXX"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" stationId"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5115")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dsl"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Group")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AirQuality")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v(" <flow>")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Number")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Aqi_Level")]),t._v("           "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Air Quality Index"')]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v(" <flow>")]),a("span",{pre:!0,attrs:{class:"token tag"}},[t._v(" (AirQuality)")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" channel"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"airquality:aqi:home:aqiLevel"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("String")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Aqi_Description")]),t._v("     "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"AQI Level [MAP(airquality.map):%s]"')]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v(" <flow>")]),a("span",{pre:!0,attrs:{class:"token tag"}},[t._v(" (AirQuality)")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" channel"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"airquality:aqi:home:aqiDescription"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Number")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Aqi_Pm25")]),t._v("            "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"PM\\u2082\\u2085 Level"')]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v(" <line>")]),a("span",{pre:!0,attrs:{class:"token tag"}},[t._v(" (AirQuality)")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" channel"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"airquality:aqi:home:pm25"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Number")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Aqi_Pm10")]),t._v("            "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"PM\\u2081\\u2080 Level"')]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v(" <line>")]),a("span",{pre:!0,attrs:{class:"token tag"}},[t._v(" (AirQuality)")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" channel"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"airquality:aqi:home:pm10"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Number")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Aqi_O3")]),t._v("              "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"O\\u2083 Level"')]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v(" <line>")]),a("span",{pre:!0,attrs:{class:"token tag"}},[t._v(" (AirQuality)")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" channel"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"airquality:aqi:home:o3"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Number")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Aqi_No2")]),t._v("             "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"NO\\u2082 Level"')]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v(" <line>")]),a("span",{pre:!0,attrs:{class:"token tag"}},[t._v(" (AirQuality)")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" channel"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"airquality:aqi:home:no2"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Number")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Aqi_Co")]),t._v("              "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"CO Level"')]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v(" <line>")]),a("span",{pre:!0,attrs:{class:"token tag"}},[t._v(" (AirQuality)")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" channel"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"airquality:aqi:home:co"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Number")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Aqi_So2")]),t._v("             "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"SO\\u2082 Level"')]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v(" <line>")]),a("span",{pre:!0,attrs:{class:"token tag"}},[t._v(" (AirQuality)")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" channel"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"airquality:aqi:home:so2"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("String")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Aqi_LocationName")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Measuring Location"')]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v(" <settings>")]),a("span",{pre:!0,attrs:{class:"token tag"}},[t._v(" (AirQuality)")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" channel"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"airquality:aqi:home:locationName"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Location")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Aqi_StationGeo")]),t._v("      "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Station Location"')]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v(" <office>")]),a("span",{pre:!0,attrs:{class:"token tag"}},[t._v(" (AirQuality)")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" channel"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"airquality:aqi:home:stationLocation"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Number")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Aqi_StationId")]),t._v("       "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Station ID"')]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v(" <pie>")]),a("span",{pre:!0,attrs:{class:"token tag"}},[t._v(" (AirQuality)")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" channel"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"airquality:aqi:home:stationId"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DateTime")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Aqi_ObservationTime")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Time of observation [%1$tH:%1$tM]"')]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v(" <clock>")]),a("span",{pre:!0,attrs:{class:"token tag"}},[t._v(" (AirQuality)")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" channel"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"airquality:aqi:home:observationTime"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Number")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Temperature")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Aqi_Temperature")]),t._v("     "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Temperature"')]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v(" <temperature>")]),a("span",{pre:!0,attrs:{class:"token tag"}},[t._v(" (AirQuality)")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" channel"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"airquality:aqi:home:temperature"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Number")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Pressure")]),t._v("     "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Aqi_Pressure")]),t._v("        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Pressure"')]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v(" <pressure>")]),a("span",{pre:!0,attrs:{class:"token tag"}},[t._v(" (AirQuality)")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" channel"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"airquality:aqi:home:pressure"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Number")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DimensionLess")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Aqi_Humidity")]),t._v("        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Humidity"')]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v(" <humidity>")]),a("span",{pre:!0,attrs:{class:"token tag"}},[t._v(" (AirQuality)")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" channel"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"airquality:aqi:home:humidity"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-perl extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dsl"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("sitemap")]),t._v(" airquality "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("label")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Air Quality"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Frame")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Text")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("item")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("Aqi_Level "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("valuecolor")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n                Aqi_Level"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"-"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"lightgray"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                Aqi_Level"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("300")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"#7e0023"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("201")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"#660099"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("151")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"#cc0033"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("101")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"#ff9933"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("51")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"#ffde33"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"#009966"')]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Text")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("item")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("Aqi_Description "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("valuecolor")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n                Aqi_Description"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"HAZARDOUS"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"#7e0023"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"VERY_UNHEALTHY"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"#660099"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"UNHEALTHY"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"#cc0033"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"UNHEALTHY_FOR_SENSITIVE"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"#ff9933"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"MODERATE"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"#ffde33"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"GOOD"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"#009966"')]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Frame")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Text")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("item")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("Aqi_Pm25\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Text")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("item")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("Aqi_Pm10\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Text")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("item")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("Aqi_O3\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Text")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("item")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("Aqi_No2\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Text")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("item")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("Aqi_Co\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Text")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("item")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("Aqi_So2\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Frame")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Text")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("item")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("Aqi_LocationName\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Text")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("item")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("Aqi_ObservationTime\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Text")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("item")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("Aqi_Temperature\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Text")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("item")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("Aqi_Pressure\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Text")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("item")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("Aqi_Humidity\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Frame")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("label")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Station Location"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Mapview")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("item")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("Aqi_StationGeo "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("height")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-rules"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("rule")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Change lamp color to reflect Air Quality"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("when")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Item")]),t._v(" Aqi_Description "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("changed")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("then")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" hsb\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("switch")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-name"}},[t._v("Aqi_Description")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("state "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"HAZARDOUS"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n            hsb "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"343,100,49"')]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"VERY_UNHEALTHY"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n            hsb "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"280,100,60"')]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"UNHEALTHY"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n            hsb "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"345,100,80"')]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"UNHEALTHY_FOR_SENSITIVE"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n            hsb "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"30,80,100"')]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"MODERATE"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n            hsb "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"50,80,100"')]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"GOOD"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n            hsb "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"160,100,60"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token function-name"}},[t._v("Lamp_Color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sendCommand")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("hsb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n")])])])}],!1,null,null,null);s.default=n.exports}}]);