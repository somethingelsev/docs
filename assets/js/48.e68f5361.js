(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{424:function(t,e,r){"use strict";r.r(e);var a=r(5),o=Object(a.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"oracle-feeder"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#oracle-feeder"}},[t._v("#")]),t._v(" Oracle Feeder")]),t._v(" "),r("p",[t._v("With the Columbus-3 release, every active validator must participate in the Exchange Rate Oracle, voting periodically for the active Exchange Rate of Luna, and not participating in the Oracle process is now a "),r("RouterLink",{attrs:{to:"/validator/spec-oracle.html#slashing"}},[t._v("slashing condition")]),t._v(".")],1),t._v(" "),r("h2",{attrs:{id:"feeder-implementations"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#feeder-implementations"}},[t._v("#")]),t._v(" Feeder Implementations")]),t._v(" "),r("p",[t._v("The Terra team provides a reference implementation of a program that pulls the exchange rate of Luna from exchanges and periodically submits it in prevotes and votes following the "),r("RouterLink",{attrs:{to:"/validator/spec-oracle.html#voting-procedure"}},[t._v("Voting Procedure")]),t._v(". However, some generous validators have also provided their own implementations to the rest of the validator community:")],1),t._v(" "),r("table",[r("thead",[r("tr",[r("th",{staticStyle:{"text-align":"left"}},[t._v("Software")]),t._v(" "),r("th",{staticStyle:{"text-align":"left"}},[t._v("Developer")]),t._v(" "),r("th",{staticStyle:{"text-align":"left"}},[t._v("Runtime")])])]),t._v(" "),r("tbody",[r("tr",[r("td",{staticStyle:{"text-align":"left"}},[r("a",{attrs:{href:"https://github.com/terra-project/oracle-feeder/tree/columbus-3",target:"_blank",rel:"noopener noreferrer"}},[r("code",[t._v("oracle-feeder")]),r("OutboundLink")],1)]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[r("strong",[t._v("Terra")])]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[t._v("Node.js, Python")])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[r("a",{attrs:{href:"https://github.com/b-harvest/terra_oracle_voter",target:"_blank",rel:"noopener noreferrer"}},[r("code",[t._v("terra_oracle_voter")]),r("OutboundLink")],1)]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[r("a",{attrs:{href:"https://bharvest.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("B-Harvest"),r("OutboundLink")],1)]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[t._v("Python")])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[r("a",{attrs:{href:"https://github.com/stakewithus/oracle-voter",target:"_blank",rel:"noopener noreferrer"}},[r("code",[t._v("oracle-voter")]),r("OutboundLink")],1)]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[r("a",{attrs:{href:"https://stakewith.us",target:"_blank",rel:"noopener noreferrer"}},[t._v("StakeWith.Us"),r("OutboundLink")],1)]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[t._v("Python")])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[r("a",{attrs:{href:"https://github.com/node-a-team/terra-oracle",target:"_blank",rel:"noopener noreferrer"}},[r("code",[t._v("terra-oracle")]),r("OutboundLink")],1)]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[r("a",{attrs:{href:"https://nodeateam.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Node A-Team"),r("OutboundLink")],1)]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[t._v("Go")])])])]),t._v(" "),r("h2",{attrs:{id:"custom-implementation"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#custom-implementation"}},[t._v("#")]),t._v(" Custom Implementation")]),t._v(" "),r("p",[t._v("Here are some important things to remember when writing your own Luna exchange rate feeder implementation:")]),t._v(" "),r("ul",[r("li",[t._v("It may be tempting to design a new pricing model other than getting exchange data direct. Keep in mind that you will be penalized for not voting within the Reward Band of your peer validators.")])])])}),[],!1,null,null,null);e.default=o.exports}}]);