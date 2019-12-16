(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{194:function(e,t,o){},447:function(e,t,o){"use strict";var n=o(194);o.n(n).a},525:function(e,t,o){"use strict";o.r(t);o(447);var n=o(0),i=Object(n.a)({},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"content"},[o("img",{staticClass:"intro-logo",attrs:{src:"/openhab-logo-square.png",width:"150",height:"150"}}),e._v(" "),o("h1",{staticClass:"welcome"},[e._v("Welcome!")]),e._v(" "),e._m(0),e._v(" "),o("div",{staticStyle:{clear:"both"}}),e._v(" "),o("p",[e._v("Some of openHAB's strengths are:")]),e._v(" "),e._m(1),e._v(" "),e._m(2),e._v(" "),e._m(3),e._v(" "),e._m(4),e._v(" "),e._m(5),e._v(" "),o("p",[e._v("After you have read the documentation for openHAB, you will have:")]),e._v(" "),e._m(6),e._v(" "),o("p",[e._v("Keep your focus.\nFor almost everything, there is more than one way in openHAB to achieve a goal or perform a task.\nInitially, this can be frustrating and confusing, but it also gives great flexibility and does not mandate the use of certain devices or tools.")]),e._v(" "),o("p",[e._v("You may need to learn more about computers than you currently do.\nBut this may not be a problem as you are reading the documentation of software that will enable you to do home automation yourself.")]),e._v(" "),o("p",[e._v("Lastly, be prepared to start a new hobby: home automation.")]),e._v(" "),o("p",[e._v("Basic functions can be achieved in openHAB rather quickly, e.g., switch lights on at a certain time.\nOthers will require much more efforts and thoughts, e.g., how do I determine that someone is home, including guests, but not counting pets?\nThe openHAB forum is a great place to learn and discuss.")]),e._v(" "),e._m(7),e._v(" "),o("p",[e._v("openHAB communicates electronically with smart and not-so-smart devices, performs user-defined actions and provides web-pages with user-defined information as well as user-defined tools to interact with all devices.\nTo achieve this, openHAB segments and compartmentalizes certain functions and operations.\nThe following table gives a top-level description of the most important concepts as well as a link to more information:")]),e._v(" "),o("table",[e._m(8),e._v(" "),o("tbody",[e._m(9),e._v(" "),o("tr",[o("td",[e._v("Things")]),e._v(" "),o("td",[e._v("are the first openHAB (software) generated representation of your devices")]),e._v(" "),o("td",[o("router-link",{attrs:{to:"/docs/concepts/things.html"}},[e._v("click for more info on Things")])],1)]),e._v(" "),e._m(10),e._v(" "),o("tr",[o("td",[e._v("Items")]),e._v(" "),o("td",[e._v("are the openHAB (software) generated representation of information about the devices")]),e._v(" "),o("td",[o("router-link",{attrs:{to:"/docs/concepts/items.html"}},[e._v("click for more info on Items")])],1)]),e._v(" "),o("tr",[o("td",[e._v("Rules")]),e._v(" "),o("td",[e._v('that perform automatic actions (in its simplest form: if "this" happens, openHAB will do "that")')]),e._v(" "),o("td",[o("router-link",{attrs:{to:"/docs/configuration/rules-dsl.html"}},[e._v("click for more info on Rules")])],1)]),e._v(" "),o("tr",[o("td",[e._v("Sitemap")]),e._v(" "),o("td",[e._v("is the openHAB (software) generated user interface (web site) that presents information and allows for interactions")]),e._v(" "),o("td",[o("router-link",{attrs:{to:"/docs/configuration/sitemaps.html"}},[e._v("click for more info on Sitemaps")])],1)])])]),e._v(" "),o("p",[e._v("While the table above gives an overview, please remember that it is incomplete and a simplification of openHAB for the sake of this overview.\nMore elements will be introduced in later chapters of the documentation.\nAll the above "),o("router-link",{attrs:{to:"/docs/concepts/index.html"}},[e._v("Concepts")]),e._v(" are explained in more depth on other pages that can be accessed either through the sidebar or the links in the table above.")],1),e._v(" "),e._m(11),e._v(" "),o("p",[e._v("Channels are for the logical link of a "),o("router-link",{attrs:{to:"/docs/concepts/things.html"}},[e._v("Thing")]),e._v(" to an "),o("router-link",{attrs:{to:"/docs/concepts/items.html"}},[e._v("Item")]),e._v(".\nChannels originate from "),o("router-link",{attrs:{to:"/docs/concepts/things.html"}},[e._v("Things")]),e._v(" definition and define how your "),o("router-link",{attrs:{to:"/docs/concepts/things.html"}},[e._v("Thing")]),e._v(" can communicate with "),o("router-link",{attrs:{to:"/docs/concepts/items.html"}},[e._v("Item")]),e._v(" (and vice versa).\nYou will create channels when defining your "),o("router-link",{attrs:{to:"/docs/concepts/things.html"}},[e._v("Thing")]),e._v(".")],1),e._v(" "),o("p",[e._v("During the definition of your "),o("a",{attrs:{href:"/docs/concepts/things"}},[e._v("Thing")]),e._v(" you will identify the channel to which your "),o("router-link",{attrs:{to:"/docs/concepts/items.html"}},[e._v("Item")]),e._v(" will be linked.\nThese two steps ensure that openHAB can transmit the information from the "),o("router-link",{attrs:{to:"/docs/concepts/things.html"}},[e._v("Thing")]),e._v(" to the "),o("router-link",{attrs:{to:"/docs/concepts/items.html"}},[e._v("Item")]),e._v(" (and vice versa).")],1),e._v(" "),e._m(12),e._v(" "),o("p",[e._v("Bindings are software packages that are installed by the user in openHAB.\nThe main purpose of Bindings is to establish the connection between your device and your "),o("router-link",{attrs:{to:"/docs/concepts/things.html"}},[e._v("Thing")]),e._v(".\nBindings communicate with your device and translate all commands to and from openHAB between your device and your "),o("router-link",{attrs:{to:"/docs/concepts/things.html"}},[e._v("Thing")]),e._v(".")],1),e._v(" "),o("p",[e._v("Bindings are provided at the "),o("a",{attrs:{href:"https://www.openhab.org/addons/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Add-on section"),o("OutboundLink")],1),e._v(" of this website.\nHere you will find a searchable list of several hundred bindings to support as many devices as possible.\nNew bindings are regularly added as developers integrate more devices into openHAB.")]),e._v(" "),o("p",[e._v("For each binding, detailed instructions and examples are provided that include guidance on configuration (if any) of the binding itself, the definition of "),o("router-link",{attrs:{to:"/docs/concepts/things.html"}},[e._v("Things")]),e._v(" supported by this binding and the Channels these "),o("a",{attrs:{href:"/docs/concepts/things"}},[e._v("Things")]),e._v(" provide.\nIn most cases, the description also contains a fully worked out example that includes a definition of "),o("a",{attrs:{href:"/docs/concepts/things"}},[e._v("Things")]),e._v(" and its Channels, "),o("router-link",{attrs:{to:"/docs/concepts/items.html"}},[e._v("Items")]),e._v(" linked to those Channels and the use of these "),o("router-link",{attrs:{to:"/docs/concepts/items.html"}},[e._v("Items")]),e._v(" in a sitemap.")],1),e._v(" "),e._m(13),e._v(" "),e._m(14),e._v(" "),o("p",[e._v("OpenHAB runs on most popular platforms such as Linux, Windows and MacOS and on almost any hardware ranging from Raspberry Pis to desktop computers and server PCs.\nYou can find specific installation instructions for these and other platforms in the "),o("router-link",{attrs:{to:"/docs/installation/index.html"}},[e._v("Installation Overview")]),e._v(" article.\nIf you have a strong preference towards a particular platform, then that platform is probably your best choice.")],1),e._v(" "),o("p",[e._v("You can install openHAB on your desktop computer for evaluation purposes if you already have any of these systems available for use, but we recommend using a dedicated system in the long run.\nIf you feel serious about home automation it may be better to start with a dedicated system right away.")]),e._v(" "),o("p",[e._v("For anyone undecided: many people find that the simplest way to experiment with openHAB is to get a "),o("a",{attrs:{href:"https://raspberrypi.org",target:"_blank",rel:"noopener noreferrer"}},[e._v("Raspberry Pi (Version 4 with 2 or 4 GB for the best experience, but a RPi 2 or 3 is fine, too)"),o("OutboundLink")],1),e._v(" and install "),o("router-link",{attrs:{to:"/docs/installation/openhabian.html"}},[e._v("openHABian")]),e._v("; a \"hassle-free openHAB setup\".\nWhile openHABian offers a streamlined and simplified way to get up and running quickly, it is a complete openHAB home automation system easily capable of automating your entire home.\nHowever, it is worth noting two potential limitations of Raspberry Pis:\nRPi 3 and older are limited in RAM (1 GB of memory or less) and may not perform well when additional memory hungry applications such as databases and data visualization programs are installed.\nTwo or more GB should be fine.\nRunning Raspberries off the internal SD card only may result in system instabilities as these memory cards can degrade quickly under openHAB's use conditions.\nIf you choose to deploy openHABian, there's the ZRAM feature available to mitigate.")],1),e._v(" "),o("p",[e._v("Once you have openHAB up and running, the "),o("router-link",{attrs:{to:"/docs/configuration/index.html"}},[e._v("Configuration")]),e._v(" article contains everything you need to know to get your openHAB installation talking to different devices around your home.")],1),e._v(" "),o("p",[e._v("You will quickly discover that you may want to learn more about Things, Channels, Items, and more.\nTo do so, we highly recommend that you read the next chapter titled "),o("router-link",{attrs:{to:"/docs/concepts/index.html"}},[e._v("Concepts")]),e._v(".\nIt provides a more in-depth descriptions of Things, Items, Bindings, etc. that will help you as you dive deeper into openHAB.")],1),e._v(" "),o("p",[e._v("The amount of information provided here can be overwhelming, so please come back to these sections often as you develop your home automation system.")]),e._v(" "),o("p",[e._v("Along the way, you may have some questions; the openHAB community is here to help.")]),e._v(" "),e._m(15),e._v(" "),o("p",[e._v("openHAB is not just software - it is also a "),o("strong",[e._v("community")]),e._v(" of users, contributors and maintainers, working together on an open-source, interoperable approach to home automation.\nThe center of this community is the "),o("a",{attrs:{href:"https://community.openhab.org",target:"_blank",rel:"noopener noreferrer"}},[e._v("openHAB community forum"),o("OutboundLink")],1),e._v(".\nIt is an active and responsive community of experienced users who generally respond quite quickly to forum questions.\n"),o("a",{attrs:{href:"https://community.openhab.org/t/how-to-ask-a-good-question-help-us-help-you/58396",target:"_blank",rel:"noopener noreferrer"}},[e._v("Mind the rules"),o("OutboundLink")],1),e._v(", please.")]),e._v(" "),o("p",[e._v("Remember that openHAB is an open-source development, driven exclusively by volunteers.\nPlease be kind and courteous, it will be most appreciated by those that will try to help you.")]),e._v(" "),o("p",[e._v("In many occasions, you will notice that your problem has already been raised by others; and discussed and resolved by the community before.\nYou can search previous conversations and issues to see if your question has already been answered.\nIt is best practice and generally considered to be good etiquette to check fairly thoroughly before posting your own question.")]),e._v(" "),o("p",[e._v("If it is your first time posting a question, please read "),o("a",{attrs:{href:"https://community.openhab.org/t/how-to-ask-a-good-question-help-us-help-you/58396",target:"_blank",rel:"noopener noreferrer"}},[e._v("How to help us helping you"),o("OutboundLink")],1),e._v(" for information on what information you will need to provide.")]),e._v(" "),e._m(16),e._v(" "),o("p",[e._v("Once you are getting a first overview, it is time to practice.\nHere a short list of the steps that you will need to consider to get openHAB up and running as your home automation system:")]),e._v(" "),o("ol",[o("li",[e._v("Install openHAB")]),e._v(" "),o("li",[e._v("If you already own a smart device, search the addons for the brand or technology used by that device (or simply browse the list of "),o("router-link",{attrs:{to:"/addons/"}},[e._v("add-ons")]),e._v(" for any technologies or services you may recognize)")],1),e._v(" "),o("li",[e._v("Install a binding (in openHAB)")]),e._v(" "),o("li",[e._v("Define a “thing”")]),e._v(" "),o("li",[e._v("Add a “channel” to the “thing” if not created by the binding")]),e._v(" "),o("li",[e._v("Define an “item”")]),e._v(" "),o("li",[e._v("Link the “channel” to your “item”")]),e._v(" "),o("li",[e._v("Establish a sitemap")])]),e._v(" "),o("p",[e._v("Most of the above can be done in openHAB through point-and-click processes in a graphical user interface.\nBut remember, there is always more than one way to achieve your goal in openHAB.")]),e._v(" "),e._m(17),e._v(" "),o("p",[e._v("Don’t give up, openHAB is very powerful and flexible and most likely can help you achieve your home automation goals, whichever they are.\nBut it comes with a rather steep learning curve.")]),e._v(" "),e._m(18),e._v(" "),o("p",[e._v("openHAB 2 is developed in "),o("a",{attrs:{href:"https://www.java.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Java"),o("OutboundLink")],1),e._v(" and uses "),o("a",{attrs:{href:"https://www.osgi.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("OSGi"),o("OutboundLink")],1),e._v(" for modularity.\n"),o("a",{attrs:{href:"http://karaf.apache.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Apache Karaf"),o("OutboundLink")],1),e._v(" serves as a container with "),o("a",{attrs:{href:"https://www.eclipse.org/equinox/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Eclipse Equinox"),o("OutboundLink")],1),e._v(" as the OSGi runtime environment.\n"),o("a",{attrs:{href:"https://www.eclipse.org/jetty/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Jetty"),o("OutboundLink")],1),e._v(" is included as an HTTP server.")]),e._v(" "),o("p",[e._v('openHAB is highly modular software that can be extended through "Add-ons".\nAdd-ons give openHAB a wide array of capabilities, from User Interfaces, to the ability to interact with a large and growing number of physical Things.\nAdd-ons may come from the openHAB 2 distribution, the legacy openHAB 1 distribution or from any other external source.')]),e._v(" "),o("p",[e._v("If you are new to openHAB, we suggest you continue to the "),o("router-link",{attrs:{to:"/docs/concepts/index.html"}},[e._v("Concepts")]),e._v(" chapter where we introduce many fundamental ideas that are used throughout openHAB.")],1),e._v(" "),o("EditPageLink")],1)},[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("p",[e._v("The  "),o("strong",[e._v("open H")]),e._v("ome  "),o("strong",[e._v("A")]),e._v("utomation  "),o("strong",[e._v("B")]),e._v("us (openHAB,  "),o("em",[e._v("pronounced ˈəʊpənˈhæb")]),e._v(") is an open source, technology agnostic home automation platform which runs as the center of your smart home!")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("Its ability to integrate a multitude of other devices and systems. openHAB includes other home automation systems, (smart) devices and other technologies into a single solution")]),this._v(" "),t("li",[this._v("To provide a uniform user interface and a common approach to automation rules across the entire system, regardless of the number of manufacturers and sub-systems involved")]),this._v(" "),t("li",[this._v("Giving you the most flexible tool available to make almost any home automation wish come true; if you can think it, odds are that you can implement it with openHAB.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"what-you-need-to-know-before-you-start"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#what-you-need-to-know-before-you-start","aria-hidden":"true"}},[this._v("#")]),this._v(" What You Need to Know Before You Start")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("When home automation just seems to work, it is always the result of hard work.")]),this._v("\nHome automation is fascinating and requires a considerable investment of your time.\nHere are some key considerations especially for new users. To be successful, you will need to:")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("Start slowly and one step at a time")]),this._v(" "),t("li",[this._v("Be prepared to learn")]),this._v(" "),t("li",[this._v("Remain flexible in how you want to achieve your goal")]),this._v(" "),t("li",[this._v("Celebrate all the small successes")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Remember, openHAB is just a computer program.\nThe computer will only do what "),t("em",[this._v("you")]),this._v(" tell it to do.\nopenHAB can provide many default solutions that are easy to setup.\nOn the flip side, the more you insist that everything should look and work exactly as you want it, the more work you will have to do.\nopenHAB is fully customizable, but doing so will require substantial effort on your part.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("Identified on which computer you will run openHAB")]),this._v(" "),t("li",[this._v("Learned how to install openHAB, as well as all other software that is needed to run openHAB (e.g., JAVA)")]),this._v(" "),t("li",[this._v("Learned how your smart devices communicate with openHAB; how to make openHAB give commands to your smart devices; and how you can interact with openHAB")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"a-quick-overview"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#a-quick-overview","aria-hidden":"true"}},[this._v("#")]),this._v(" A Quick Overview")])},function(){var e=this.$createElement,t=this._self._c||e;return t("thead",[t("tr",[t("th",[this._v("Concepts")]),this._v(" "),t("th",[this._v("Meaning")]),this._v(" "),t("th",[this._v("More Information")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("tr",[t("td",[this._v("Bindings")]),this._v(" "),t("td",[this._v("are the openHAB component that provides the interface to interact electronically with devices")]),this._v(" "),t("td",[t("em",[this._v("see below")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("tr",[t("td",[this._v("Channels")]),this._v(" "),t("td",[this._v("are the openHAB (software) connection between “Things” and “Items” (see below)")]),this._v(" "),t("td",[t("em",[this._v("see below")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"channels"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#channels","aria-hidden":"true"}},[this._v("#")]),this._v(" Channels")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"bindings"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#bindings","aria-hidden":"true"}},[this._v("#")]),this._v(" Bindings")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"while-you-are-getting-started"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#while-you-are-getting-started","aria-hidden":"true"}},[this._v("#")]),this._v(" While You Are Getting Started")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("To all newcomers: please read the section "),t("a",{attrs:{href:"/docs/tutorial"}},[this._v("New User Tutorial")]),this._v(".\nThat section provides you with step-by-step instructions for your first easy setup.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"the-openhab-community"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#the-openhab-community","aria-hidden":"true"}},[this._v("#")]),this._v(" The openHAB Community")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"putting-it-into-practice"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#putting-it-into-practice","aria-hidden":"true"}},[this._v("#")]),this._v(" Putting it into Practice")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("A final word for the DIY enthusiasts. openHAB is very flexible and can support many DIY devices.\nHowever, you will quickly realize that DIY often literally means that you "),t("em",[this._v('"do it yourself"')]),this._v(".\nWorking with DIY solutions often requires a deeper level of understanding, as well as more patience and perseverance than the integration of ready-to-use devices from commercial providers.\nThe choice is yours of course, but you will need to be prepared spending either money or time (and sometimes both) to make your home automation goals a reality.\nAnd quite often, the investment will be significant.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"a-deeper-dive-openhab-structure-for-advanced-users"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#a-deeper-dive-openhab-structure-for-advanced-users","aria-hidden":"true"}},[this._v("#")]),this._v(" A Deeper Dive: openHAB Structure for Advanced Users")])}],!1,null,null,null);t.default=i.exports}}]);