(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"8luy":function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return l})),a.d(t,"default",(function(){return c}));a("rzGZ"),a("Dq+y"),a("8npG"),a("Ggvi"),a("E5k/"),a("q1tI");var n=a("7ljp"),b=a("Bl7J");var l={},r={_frontmatter:l},i=b.a;function c(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,b={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(b[a]=e[a]);return b}(e,["components"]);return Object(n.b)(i,Object.assign({},r,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},"This document represents a component specification template. Its purpose\nis to provide a point-in-time guide as to how a component should be\nauthored, in light of common anatomies, behaviors, and accessibility.\nThe primary audience is a developer authoring a given component.")),Object(n.b)("h1",null,"{ComponentName} Component Specification"),Object(n.b)("h2",null,"Overview ",Object(n.b)("a",{href:"#overview",id:"overview"})),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"The name of the component, along with a high-level description.")),Object(n.b)("h3",null,"Background ",Object(n.b)("a",{href:"#background",id:"background"})),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Relevant historical or background information, related existing issues, etc.")),Object(n.b)("h3",null,"Use Cases ",Object(n.b)("a",{href:"#use-cases",id:"use-cases"})),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Primary use cases for this component.")),Object(n.b)("h3",null,"Non-goals ",Object(n.b)("a",{href:"#non-goals",id:"non-goals"})),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"A list of use cases, features, or functionality which are ",Object(n.b)("strong",{parentName:"em"},"not")," goals for the component.")),Object(n.b)("h3",null,"Features ",Object(n.b)("a",{href:"#features",id:"features"})),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"A list of the key features unique to this component.")),Object(n.b)("h3",null,"Risks and Challenges ",Object(n.b)("a",{href:"#risks",id:"risks"})),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Notable risks or challenges associated with the component. Link issues related to platform blockers.")),Object(n.b)("h3",null,"Prior Art/Examples ",Object(n.b)("a",{href:"#prior-art",id:"prior-art"})),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Link to the OpenUI research page for the component. If any existing, canonical, or exemplary implementations of the component are found beyond what is documented in the research page, make a separate PR to add them there.")),Object(n.b)("hr",null),Object(n.b)("h2",null,"Design ",Object(n.b)("a",{href:"#design",id:"design"})),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Describe the design of the component, thinking through several perspectives:")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("em",{parentName:"li"},"A customer using the component on a web page.")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("em",{parentName:"li"},"A developer building an app with the component and interacting through HTML/CSS/JavaScript.")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("em",{parentName:"li"},"A designer customizing the component."))),Object(n.b)("h3",null,"API ",Object(n.b)("a",{href:"#api",id:"api"})),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Outline the key elements of the component's public API surface, taking into consideration conformance guidelines. Make sure to discuss differences and rationalizations. Consider high and low-level APIs. Attempt to design a powerful and extensible low-level API with a high-level API for developer/designer ergonomics and simplicity.")),Object(n.b)("h4",null,"Properties and Attributes ",Object(n.b)("a",{href:"#properties-attributes",id:"properties-attributes"})),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Example Table")),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object.assign({parentName:"tr"},{align:null}),"Property Name"),Object(n.b)("th",Object.assign({parentName:"tr"},{align:null}),"Attribute Name"),Object(n.b)("th",Object.assign({parentName:"tr"},{align:null}),"Type"),Object(n.b)("th",Object.assign({parentName:"tr"},{align:null}),"Default Value"),Object(n.b)("th",Object.assign({parentName:"tr"},{align:null}),"Description"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object.assign({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"value")),Object(n.b)("td",Object.assign({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"value")),Object(n.b)("td",Object.assign({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"number")),Object(n.b)("td",Object.assign({parentName:"tr"},{align:null}),"Value of ",Object(n.b)("inlineCode",{parentName:"td"},"min")),Object(n.b)("td",Object.assign({parentName:"tr"},{align:null}),"The current value of the slider.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object.assign({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"min")),Object(n.b)("td",Object.assign({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"min")),Object(n.b)("td",Object.assign({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"number")),Object(n.b)("td",Object.assign({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"0")),Object(n.b)("td",Object.assign({parentName:"tr"},{align:null}),"The minimum value of the slider.")))),Object(n.b)("h4",null,"Methods ",Object(n.b)("a",{href:"#methods",id:"methods"})),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Example Table")),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object.assign({parentName:"tr"},{align:null}),"Signature"),Object(n.b)("th",Object.assign({parentName:"tr"},{align:null}),"Description"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object.assign({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"increment(value: number = this.step): void")),Object(n.b)("td",Object.assign({parentName:"tr"},{align:null}),"Increments the ",Object(n.b)("inlineCode",{parentName:"td"},"value")," of the component by the amount specified by ",Object(n.b)("inlineCode",{parentName:"td"},"step"),", clamped within ",Object(n.b)("inlineCode",{parentName:"td"},"min"),"/",Object(n.b)("inlineCode",{parentName:"td"},"max")," values.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object.assign({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"decrement(value: number = this.step): void")),Object(n.b)("td",Object.assign({parentName:"tr"},{align:null}),"Decrements the ",Object(n.b)("inlineCode",{parentName:"td"},"value")," of the component by the amount specified by ",Object(n.b)("inlineCode",{parentName:"td"},"step"),", clamped within ",Object(n.b)("inlineCode",{parentName:"td"},"min"),"/",Object(n.b)("inlineCode",{parentName:"td"},"max")," values.")))),Object(n.b)("h4",null,"Events ",Object(n.b)("a",{href:"#events",id:"events"})),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Example Table")),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object.assign({parentName:"tr"},{align:null}),"Event Name"),Object(n.b)("th",Object.assign({parentName:"tr"},{align:null}),"Detail Type"),Object(n.b)("th",Object.assign({parentName:"tr"},{align:null}),"Bubbles"),Object(n.b)("th",Object.assign({parentName:"tr"},{align:null}),"Composed"),Object(n.b)("th",Object.assign({parentName:"tr"},{align:null}),"Cancellable"),Object(n.b)("th",Object.assign({parentName:"tr"},{align:null}),"Dispatch Behavior"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object.assign({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"change")),Object(n.b)("td",Object.assign({parentName:"tr"},{align:null}),"none"),Object(n.b)("td",Object.assign({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"true")),Object(n.b)("td",Object.assign({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"true")),Object(n.b)("td",Object.assign({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"false")),Object(n.b)("td",Object.assign({parentName:"tr"},{align:null}),"Fired when the slider's ",Object(n.b)("inlineCode",{parentName:"td"},"value")," changes.")))),Object(n.b)("h3",null,"Appearance ",Object(n.b)("a",{href:"#appearance",id:"appearance"})),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Screenshots and/or description of the basic appearance of the component.")),Object(n.b)("h3",null,"Anatomy ",Object(n.b)("a",{href:"#anatomy",id:"anatomy"})),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Outline the component's structure with a diagram of its render tree. Enumerate key areas of visual composition and customization.")),Object(n.b)("h4",null,"Diagram ",Object(n.b)("a",{href:"#diagram",id:"diagram"})),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Example")),Object(n.b)("p",null,Object(n.b)("img",Object.assign({parentName:"p"},{src:"../images/spec-diagram-example.png",alt:"Example Diagram"}))),Object(n.b)("h4",null,"DOM Structure ",Object(n.b)("a",{href:"#dom-structure",id:"dom-structure"})),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Define the recommended DOM to represent the component's anatomy, as shown above. Show how important attributes (aria attributes especially) are applied to the various parts. In cases where a component nests other components, expand the full DOM structure to understand the expectation and any shortcomings in the child components' customizability.")),Object(n.b)("h4",null,"Slots ",Object(n.b)("a",{href:"#slots",id:"slots"})),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"What parts of the component are composable or replaceable?")),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Example Table")),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object.assign({parentName:"tr"},{align:null}),"Slot Name"),Object(n.b)("th",Object.assign({parentName:"tr"},{align:null}),"Description"),Object(n.b)("th",Object.assign({parentName:"tr"},{align:null}),"Fallback Content"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object.assign({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"thumb")),Object(n.b)("td",Object.assign({parentName:"tr"},{align:null}),"Enables replacing the component's ",Object(n.b)("inlineCode",{parentName:"td"},"thumb")," part with custom markup."),Object(n.b)("td",Object.assign({parentName:"tr"},{align:null}),"A default thumb implementation is provided.")))),Object(n.b)("h4",null,"Host Classes ",Object(n.b)("a",{href:"#host-classes",id:"host-classes"})),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"What classes does the component add to the host element?")),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object.assign({parentName:"tr"},{align:null}),"Class Name"),Object(n.b)("th",Object.assign({parentName:"tr"},{align:null}),"Description"))),Object(n.b)("tbody",{parentName:"table"})),Object(n.b)("h4",null,"Slotted Content Classes ",Object(n.b)("a",{href:"#slotted-content-classes",id:"slotted-content-classes"})),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"What classes on slotted content does the component respond to?")),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object.assign({parentName:"tr"},{align:null}),"Class Name"),Object(n.b)("th",Object.assign({parentName:"tr"},{align:null}),"Description"))),Object(n.b)("tbody",{parentName:"table"})),Object(n.b)("h4",null,"CSS Parts ",Object(n.b)("a",{href:"#css-parts",id:"css-parts"})),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"What parts of the component are exposed for styling?")),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Example Table")),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object.assign({parentName:"tr"},{align:null}),"Part Name"),Object(n.b)("th",Object.assign({parentName:"tr"},{align:null}),"Description"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object.assign({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"thumb")),Object(n.b)("td",Object.assign({parentName:"tr"},{align:null}),"Enables styling the ",Object(n.b)("inlineCode",{parentName:"td"},"thumb")," part without requiring it to be completely replaced via its slot.")))),Object(n.b)("hr",null),Object(n.b)("h2",null,"Behavior ",Object(n.b)("a",{href:"#behavior",id:"behavior"})),Object(n.b)("h3",null,"States and Interactions ",Object(n.b)("a",{href:"#states-interactions",id:"states-interactions"})),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"List key component states, valid state transitions, and how interactions trigger state transitions.")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("em",{parentName:"li"},"Are states changed as a result of keyboard? mouse? touch?")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("em",{parentName:"li"},"Are there corresponding keyboard interactions for mouse/touch interactions?")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("em",{parentName:"li"},"Are some events triggered on key down vs key press?"))),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Example Table")),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object.assign({parentName:"tr"},{align:null}),"State Group"),Object(n.b)("th",Object.assign({parentName:"tr"},{align:null}),"States"),Object(n.b)("th",Object.assign({parentName:"tr"},{align:null}),"Initial State"),Object(n.b)("th",Object.assign({parentName:"tr"},{align:null}),"Description"),Object(n.b)("th",Object.assign({parentName:"tr"},{align:null}),"Interaction/Transition"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object.assign({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"disabled")),Object(n.b)("td",Object.assign({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"true"),"/",Object(n.b)("inlineCode",{parentName:"td"},"false")),Object(n.b)("td",Object.assign({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"false")),Object(n.b)("td",Object.assign({parentName:"tr"},{align:null}),"When ",Object(n.b)("inlineCode",{parentName:"td"},"true"),", disables the control, preventing user interaction and displaying the control with a disabled appearance."),Object(n.b)("td",Object.assign({parentName:"tr"},{align:null}),"No interaction. Controlled programmatically.")))),Object(n.b)("h3",null,"Accessibility ",Object(n.b)("a",{href:"#accessibility",id:"accessibility"})),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Consider the accessibility of the component.")),Object(n.b)("h4",null,"Keyboard Navigation and Focus ",Object(n.b)("a",{href:"#keyboard-navigation",id:"keyboard-navigation"})),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("em",{parentName:"li"},"Arrow vs tabbing key behavior")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("em",{parentName:"li"},"Modifier key effects (e.g. shift, ctrl, meta)")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("em",{parentName:"li"},"Does this component use focus delegation?"))),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Example Table")),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object.assign({parentName:"tr"},{align:null}),"Key"),Object(n.b)("th",Object.assign({parentName:"tr"},{align:null}),"Description"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object.assign({parentName:"tr"},{align:null}),"Up/Right"),Object(n.b)("td",Object.assign({parentName:"tr"},{align:null}),"Increments the value of the component by calling the ",Object(n.b)("inlineCode",{parentName:"td"},"increment")," method. If the ",Object(n.b)("inlineCode",{parentName:"td"},"shift")," modifier is pressed, increases by 10x the ",Object(n.b)("inlineCode",{parentName:"td"},"step")," value.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object.assign({parentName:"tr"},{align:null}),"Down/Left"),Object(n.b)("td",Object.assign({parentName:"tr"},{align:null}),"Decrements the value of the component by calling the ",Object(n.b)("inlineCode",{parentName:"td"},"decrement")," method. If the ",Object(n.b)("inlineCode",{parentName:"td"},"shift")," modifier is pressed, decreases by 10x the ",Object(n.b)("inlineCode",{parentName:"td"},"step")," value.")))),Object(n.b)("h4",null,"Form Input ",Object(n.b)("a",{href:"#form-input",id:"form-input"})),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Does this component integrate with form submission, form validation, etc.? Can integration be accomplish with standard APIs or are special work-arounds required?")),Object(n.b)("h4",null,"Use with Assistive Technology ",Object(n.b)("a",{href:"#assistive-tech",id:"assistive-tech"})),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Are there any details about shadow dom, focus delegation, or aria attributes that need special attention?")),Object(n.b)("h3",null,"Globalization ",Object(n.b)("a",{href:"#globalization",id:"globalization"})),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Consider whether the component has any special globalization needs such as:")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("em",{parentName:"li"},"Special RTL handling")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("em",{parentName:"li"},"Swapping of internal icons/visuals")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("em",{parentName:"li"},"Localization"))),Object(n.b)("h3",null,"Security ",Object(n.b)("a",{href:"#security",id:"security"})),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Are there any security implications surrounding the component?")),Object(n.b)("h3",null,"Performance ",Object(n.b)("a",{href:"#performance",id:"performance"})),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Are there any performance pitfalls or challenges with implementing the component? (examples below)")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"If the component renders a loop of items, should certain areas be considered for virtualization?"),Object(n.b)("li",{parentName:"ul"},"If the component needs to measure an area before rendering, how will jank be avoided?"),Object(n.b)("li",{parentName:"ul"},"If any measuring is needed at all, can rAF techniques help queue measures and prevent synchronous reflows?")),Object(n.b)("h2",null,"Dependencies ",Object(n.b)("a",{href:"#dependancies",id:"dependancies"})),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Will implementing the component require taking on any dependencies?")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("em",{parentName:"li"},"3rd party libraries")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("em",{parentName:"li"},"Upcoming standards we need to polyfill")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("em",{parentName:"li"},"Do any dependencies bring along an associated timeline?"))),Object(n.b)("h3",null,"Platform Requirements ",Object(n.b)("a",{href:"#platform-requirements",id:"platform-requirements"})),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Are there any core web platform features that are needed to implement this component well?")),Object(n.b)("h3",null,"Tooling ",Object(n.b)("a",{href:"#tooling",id:"tooling"})),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Are there any special considerations for DevTools? Will tooling changes need to be made? Is there a special way to light up this component in DevTools that would be compelling for developers/designers?")),Object(n.b)("hr",null),Object(n.b)("h2",null,"Resources ",Object(n.b)("a",{href:"#resources",id:"resources"})),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Any related resource links such as web standards, discussion threads, diagrams, etc.")),Object(n.b)("hr",null),Object(n.b)("h2",null,"Next Steps ",Object(n.b)("a",{href:"#next-steps",id:"next-steps"})),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"What next steps, if any, are there? Is there some functionality that would be a nice-to-have or a common feature in other implementations that could be added but is not considered part of the MVP? Link all feature additions, modifications, bugs, or editorial change issues.")))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-component-spec-template-mdx-8920b3437571bf54d8e9.js.map