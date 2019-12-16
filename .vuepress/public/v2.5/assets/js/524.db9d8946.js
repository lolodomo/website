(window.webpackJsonp=window.webpackJsonp||[]).push([[524],{542:function(e,t,a){"use strict";a.r(t);var n=a(0),s=Object(n.a)({},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"content"},[e._m(0),e._v(" "),a("p",[e._v("The buildsystem is based on maven.\nA very common tool for Java development.\nMaven is a convention centric, declarative system that is extensible via addional plugins.\nThat means if you stick 100% to mavens idea of a java project, your buildsystem instruction file is not longer than 10 lines.")]),e._v(" "),a("p",[e._v("openHAB has a few extra requirements and we use about 10 additional plugins,\nranging from OSGi specific ones (bnd) to publish and testing plugins.")]),e._v(" "),a("p",[e._v("This section talks about some common buildsystem related topics and also some quirks that you will encounter.")]),e._v(" "),e._m(1),e._v(" "),a("p",[e._v("Generally all dependencies should be OSGi-bundles and available on JCenter.")]),e._v(" "),e._m(2),e._v(" "),e._m(3),e._m(4),e._v(" "),e._m(5),a("p",[e._v("If the bundle is not an OSGi-bundle, you need to wrap it and provide proper names")]),e._v(" "),e._m(6),a("p",[e._v("** Internal dependency **")]),e._v(" "),e._m(7),e._v(" "),e._m(8),e._v(" "),e._m(9),e._v(" "),a("p",[e._v("If the bundles manifest is not properly exporting all needed packages, you can import them manually by adding")]),e._v(" "),e._m(10),a("p",[e._v("to the POM.")]),e._v(" "),a("p",[e._v("If the imported packages need to be exposed to other bundles (e.g. case 2 above), this has to be done manually by adding")]),e._v(" "),e._m(11),e._m(12),e._v(" "),a("DocPreviousVersions"),e._v(" "),a("EditPageLink")],1)},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"build-system"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#build-system","aria-hidden":"true"}},[this._v("#")]),this._v(" Build System")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"adding-dependencies"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#adding-dependencies","aria-hidden":"true"}},[this._v("#")]),this._v(" Adding Dependencies")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("** External dependency **\nIn most cases they should be referenced in the project POM with scope "),t("code",[this._v("provided")]),this._v(":")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("  <dependencies>\n    <dependency>\n      <groupId>foo.bar</groupId>\n      <artifactId>baz</artifactId>\n      <version>1.0.0</version>\n      <scope>provided</scope>\n    </dependency>\n  </dependencies>\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("To ensure that they are available at runtime they also need to be added to the "),t("code",[this._v("feature.xml")]),this._v(":")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v('  <bundle dependency="true">mvn:foo.bar/baz/1.0.0</bundle>\n')])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v('  <feature prerequisite="true">wrap</feature>\n  <bundle dependency="true">wrap:mvn:foo.bar/baz/1.0.0$Bundle-Name=Foobar%20Baz%20Library&amp;Bundle-SymbolicName=foo.bar.baz&amp;Bundle-Version=1.0.0</bundle>\n')])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("In two cases libraries can be added to the "),t("code",[this._v("/lib")]),this._v(" directory:")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ol",[t("li",[this._v("The bundle is not available for download")]),this._v(" "),t("li",[this._v("The bundle is not an OSGi bundle but needs to be used for integration tests.\nUnlike Karaf, BND is not able to wrap bundles on its own.\nIn this case the binding works as wrapper.\nYou need add the library and export all needed packages manually.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("The build system automatically picks up all JAR files in "),t("code",[this._v("/lib")]),this._v(" and embeds them in the new bundle.\nIn this case they must not be added to the feature.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("  <properties>\n    <bnd.importpackage>foo.bar.*,foo.baz.*</bnd.importpackage>\n  </properties>\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v('  <properties>\n    <bnd.exportpackage>foo.bar.*;version="1.0.0"</bnd.exportpackage>\n  </properties>\n')])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("to the POM.\nIf "),t("code",[this._v('version="1.0.0"')]),this._v(" is not set, the packages are exported with the same version as the main bundle.\nOptional parameters available for importing/exporting packages (e.g. "),t("code",[this._v('foo.bar.*;resolution:="optional"')]),this._v(") are available, too.\nPackages can be excluded from import/export by prepending "),t("code",[this._v("!")]),this._v(" in front of the name (e.g. `<bnd.importpackage>!foo.bar.*</bnd.importpackage>' would prevent all packages starting with foo.bar from being imported).")])}],!1,null,null,null);t.default=s.exports}}]);