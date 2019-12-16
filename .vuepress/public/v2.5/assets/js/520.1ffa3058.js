(window.webpackJsonp=window.webpackJsonp||[]).push([[520],{557:function(t,n,s){"use strict";s.r(n);var a=s(0),e=Object(a.a)({},function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),s("p",[t._v("Every binding has to provide meta information such as binding id or name.")]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),s("table",[t._m(6),t._v(" "),s("tbody",[s("tr",[s("td",[s("a",{attrs:{href:"http://binding.id",target:"_blank",rel:"noopener noreferrer"}},[t._v("binding.id"),s("OutboundLink")],1)]),t._v(" "),s("td",[t._v("An identifier for the binding")]),t._v(" "),s("td",[t._v("mandatory")])]),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),s("tr",[s("td",[t._v("service-id")]),t._v(" "),s("td",[t._v("The ID (service.pid or "),s("a",{attrs:{href:"http://component.name",target:"_blank",rel:"noopener noreferrer"}},[t._v("component.name"),s("OutboundLink")],1),t._v(") of the main binding service, which can be configured through OSGi configuration admin service. Should only be used in combination with a config description definition")]),t._v(" "),s("td",[t._v("optional")])]),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12)])]),t._v(" "),s("p",[t._v("The full XML schema for binding definitions is specified in the "),s("a",{attrs:{href:"https://openhab.org/schemas/binding-1.0.0.xsd",target:"_blank",rel:"noopener noreferrer"}},[t._v("ESH binding XSD"),s("OutboundLink")],1),t._v(" file.")]),t._v(" "),t._m(13),t._v(" "),s("ul",[t._m(14),t._v(" "),t._m(15),t._v(" "),s("li",[t._v('Normally the service id must not be defined, because it is implicitly set to "binding.<'),s("a",{attrs:{href:"http://binding.id",target:"_blank",rel:"noopener noreferrer"}},[t._v("binding.id"),s("OutboundLink")],1),t._v('>".\nA binding can register an OSGi service which implements the ManagedService interface and define the service.pid as e.g."binding.hue" to receive the configuration.')])]),t._v(" "),t._m(16),t._v(" "),s("p",[t._v("The following code gives an example for a binding definition.")]),t._v(" "),t._m(17),s("DocPreviousVersions"),t._v(" "),s("EditPageLink")],1)},[function(){var t=this.$createElement,n=this._self._c||t;return n("h2",{attrs:{id:"binding-definitions"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#binding-definitions","aria-hidden":"true"}},[this._v("#")]),this._v(" Binding Definitions")])},function(){var t=this.$createElement,n=this._self._c||t;return n("p",[this._v("Background information: The meta information of all bindings is accessible through the "),n("code",[this._v("org.eclipse.smarthome.core.binding.BindingInfoRegistry")]),this._v(" service.")])},function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("p",[t._v("Although binding definitions are usually specified in a declarative way (as described in this section),\nthey can also be provided as "),s("code",[t._v("org.eclipse.smarthome.core.binding.BindingInfo")]),t._v(".\nAny "),s("code",[t._v("BindingInfo")]),t._v(" must be registered as service at the "),s("em",[t._v("OSGi")]),t._v(" service registry.\nThe full Java API for binding definitions can be found in the Java package "),s("code",[t._v("org.eclipse.smarthome.core.binding")]),t._v(".")])},function(){var t=this.$createElement,n=this._self._c||t;return n("p",[this._v("For the declarative way, you add your binding information in form of a "),n("code",[this._v("binding.xml")]),this._v(" file to the bundle's folder "),n("code",[this._v("/src/main/resources/ESH-INF/binding/binding.xml")]),this._v(".")])},function(){var t=this.$createElement,n=this._self._c||t;return n("h3",{attrs:{id:"xml-structure-for-binding-definitions"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#xml-structure-for-binding-definitions","aria-hidden":"true"}},[this._v("#")]),this._v(" XML Structure for Binding Definitions")])},function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{staticClass:"language-xml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token prolog"}},[t._v('<?xml version="1.0" encoding="UTF-8"?>')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("binding:")]),t._v("binding")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("bindingID"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("xmlns:")]),t._v("xsi")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("http://www.w3.org/2001/XMLSchema-instance"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("xmlns:")]),t._v("binding")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("https://openhab.org/schemas/binding/v1.0.0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("xsi:")]),t._v("schemaLocation")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("https://openhab.org/schemas/binding/v1.0.0\n        https://openhab.org/schemas/binding-1.0.0.xsd"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("String"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("description")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("String"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("description")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("author")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("String"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("author")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("config-description")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    ...\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("config-description")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  OR\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("config-description-ref")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("uri")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("{binding|thing-type|channel-type|any_other}:bindingID:..."),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("binding:")]),t._v("binding")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this.$createElement,n=this._self._c||t;return n("thead",[n("tr",[n("th",[this._v("Property")]),this._v(" "),n("th",[this._v("Description")]),this._v(" "),n("th")])])},function(){var t=this.$createElement,n=this._self._c||t;return n("tr",[n("td",[this._v("name")]),this._v(" "),n("td",[this._v("A human-readable name for the binding")]),this._v(" "),n("td",[this._v("mandatory")])])},function(){var t=this.$createElement,n=this._self._c||t;return n("tr",[n("td",[this._v("description")]),this._v(" "),n("td",[this._v("A human-readable description for the binding")]),this._v(" "),n("td",[this._v("optional")])])},function(){var t=this.$createElement,n=this._self._c||t;return n("tr",[n("td",[this._v("author")]),this._v(" "),n("td",[this._v("The author of the binding")]),this._v(" "),n("td",[this._v("optional")])])},function(){var t=this.$createElement,n=this._self._c||t;return n("tr",[n("td",[this._v("config-description")]),this._v(" "),n("td",[this._v("The configuration description for the binding within the ConfigDescriptionRegistry")]),this._v(" "),n("td",[this._v("optional")])])},function(){var t=this.$createElement,n=this._self._c||t;return n("tr",[n("td",[this._v("config-description-ref")]),this._v(" "),n("td",[this._v("The reference to a configuration description for the binding within the ConfigDescriptionRegistry")]),this._v(" "),n("td",[this._v("optional")])])},function(){var t=this.$createElement,n=this._self._c||t;return n("tr",[n("td",[this._v("config-description-ref.uri")]),this._v(" "),n("td",[this._v("The URI of the configuration description for the binding within the ConfigDescriptionRegistry")]),this._v(" "),n("td",[this._v("mandatory")])])},function(){var t=this.$createElement,n=this._self._c||t;return n("p",[n("strong",[this._v("Hints:")])])},function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("li",[t._v("The attribute "),s("code",[t._v("uri")]),t._v(" in the section "),s("code",[t._v("config-description")]),t._v(" is optional, it "),s("em",[t._v("should not")]),t._v(" be specified in binding definition files because it's an embedded configuration. If the "),s("code",[t._v("uri")]),t._v(" is "),s("em",[t._v("not")]),t._v(" specified, the configuration description is registered as "),s("code",[t._v("binding:bindingID")]),t._v(", otherwise the given "),s("code",[t._v("uri")]),t._v(" is used.")])},function(){var t=this.$createElement,n=this._self._c||t;return n("li",[this._v("If a configuration description is already specified somewhere else and the binding wants to (re-)use it, a "),n("code",[this._v("config-description-ref")]),this._v(" should be used instead.")])},function(){var t=this.$createElement,n=this._self._c||t;return n("h3",{attrs:{id:"example"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#example","aria-hidden":"true"}},[this._v("#")]),this._v(" Example")])},function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{staticClass:"language-xml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token prolog"}},[t._v('<?xml version="1.0" encoding="UTF-8"?>')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("binding:")]),t._v("binding")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("bindingID"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("xmlns:")]),t._v("xsi")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("http://www.w3.org/2001/XMLSchema-instance"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("xmlns:")]),t._v("binding")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("https://openhab.org/schemas/binding/v1.0.0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("xsi:")]),t._v("schemaLocation")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("https://openhab.org/schemas/binding/v1.0.0\n        https://openhab.org/schemas/binding-1.0.0.xsd"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("hue Binding"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("description")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("The hue Binding integrates the Philips hue system. It allows to control hue bulbs."),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("description")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("author")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("ACME"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("author")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("binding:")]),t._v("binding")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])}],!1,null,null,null);n.default=e.exports}}]);