(this["webpackJsonpreact-intro-components"]=this["webpackJsonpreact-intro-components"]||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(9),s=n.n(r),o=(n(14),n(2)),i=n(3),l=n(5),u=n(4),j=(n(15),n(0)),p=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){var e=this.props.border;return Object(j.jsx)("div",{className:e?"card":"",children:this.props.children})}}]),n}(c.Component),d=n(6),b=n(7),O=(n(17),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){var e=this.props,t=e.classifiers,n=e.selected,c=Object(b.a)(e,["classifiers","selected"]);return n?Object(j.jsx)("button",Object(d.a)(Object(d.a)({className:t?"".concat(t):"selected-button"},c),{},{children:this.props.text})):Object(j.jsx)("button",Object(d.a)(Object(d.a)({className:null!==t&&void 0!==t?t:"default-button",onClick:this.props.onClick},c),{},{children:this.props.text}))}}]),n}(c.Component)),h=(n(18),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return Object(j.jsxs)(p,{children:[Object(j.jsx)(O,{text:"Rewind",onClick:function(){}}),Object(j.jsx)(O,{text:"Fast Forward",onClick:function(){}}),Object(j.jsx)(O,{text:"Play",onClick:function(){},color:"green",size:"large"}),Object(j.jsx)(O,{text:"Stop",onClick:function(){},color:"red",size:"large"})]})}}]),n}(c.Component)),g=(n(19),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){var e=this.props,t=e.onChange,n=Object(b.a)(e,["onChange"]);return Object(j.jsx)("div",{className:"inputContainer",children:Object(j.jsx)("input",Object(d.a)(Object(d.a)({},n),{},{onChange:t}))})}}]),n}(c.Component)),f=(n(20),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).handleClick=function(e){console.log(e.target.value)},e.handleOnChange=function(e){console.log("".concat(e.target.id,": ").concat(e.target.value))},e}return Object(i.a)(n,[{key:"render",value:function(){return Object(j.jsxs)(p,{border:!0,children:[Object(j.jsx)(g,{id:"username",placeholder:"username",onChange:this.handleOnChange}),Object(j.jsx)(g,{id:"password",type:"password",placeholder:"password",onChange:this.handleOnChange}),Object(j.jsx)(O,{value:"Login",classifiers:"primary-button",text:"Login",onClick:this.handleClick}),Object(j.jsxs)("p",{className:"instruction-text",children:["Not Registered?  ",Object(j.jsx)("a",{href:"/",className:"instruction-text",children:"Create an account"})]})]})}}]),n}(c.Component)),x=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var c;return Object(o.a)(this,n),(c=t.call(this,e)).selectPage=function(e){c.setState({currentPage:parseInt(e.target.value)}),console.log(e.target.value)},c.isFirstPage=function(){return!!c.state.currentPage&&1===c.state.currentPage},c.isLastPage=function(){return!!c.state.currentPage&&c.state.currentPage>=c.props.totalPages},c.next=function(e){c.isLastPage()||(c.setState({currentPage:parseInt(e.target.value)}),console.log(e.target.value))},c.previous=function(e){c.isFirstPage()||(c.setState({currentPage:parseInt(e.target.value)}),console.log(e.target.value))},c.state={currentPage:c.props.currentPage||1},c}return Object(i.a)(n,[{key:"render",value:function(){var e=this,t=Array.from({length:this.props.totalPages},(function(e,t){return t+1})),n=function(e){return e?"disabled-button":"primary-button"};return Object(j.jsxs)("div",{children:[Object(j.jsx)(O,{value:this.state.currentPage-1,classifiers:n(this.isFirstPage()),text:"<",onClick:this.previous}),t.map((function(t,n){return Object(j.jsx)(O,{value:t,text:t,onClick:e.selectPage,selected:e.state.currentPage===t},t)})),Object(j.jsx)(O,{value:this.state.currentPage+1,classifiers:n(this.isLastPage()),text:">",onClick:this.next})]})}}]),n}(c.Component),v=(n(21),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var c;return Object(o.a)(this,n),(c=t.call(this,e)).selectOption=function(e){c.setState({selectedOption:parseInt(e.target.value)}),console.log(e.target.attributes.text.value)},c.state={selectedOption:c.props.selectedOption||0},c}return Object(i.a)(n,[{key:"render",value:function(){var e=this,t=this.props.options;return Object(j.jsx)("div",{children:!!t&&t.map((function(t,n){return Object(j.jsx)(O,{value:n,classifiers:e.state.selectedOption===n?"selected":"radio-button",text:t,onClick:e.selectOption,selected:e.state.selectedOption===n},n)}))})}}]),n}(c.Component)),m=(n(22),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return Object(j.jsxs)("div",{children:[Object(j.jsxs)("div",{className:"App-component",children:[Object(j.jsx)("header",{className:"App-header",children:"Media Buttons Component (Example)"}),Object(j.jsx)("div",{className:"App-content",children:Object(j.jsx)(h,{})})]}),Object(j.jsxs)("div",{className:"App-component",children:[Object(j.jsx)("header",{className:"App-header",children:"Login form component"}),Object(j.jsx)("div",{className:"App-content",children:Object(j.jsx)(f,{})})]}),Object(j.jsxs)("div",{className:"App-component",children:[Object(j.jsx)("header",{className:"App-header",children:"Pager component"}),Object(j.jsx)("div",{className:"App-content",children:Object(j.jsx)(x,{totalPages:10,currentPage:1})})]}),Object(j.jsxs)("div",{className:"App-component",children:[Object(j.jsx)("header",{className:"App-header",children:"Radio Buttons component"}),Object(j.jsx)("div",{className:"App-content",children:Object(j.jsx)(v,{options:["Apple","Pear","Orange","Banana"],selectedOption:0})})]})]})}}]),n}(c.Component));s.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(m,{})}),document.getElementById("root"))}],[[23,1,2]]]);
//# sourceMappingURL=main.e7af53fe.chunk.js.map