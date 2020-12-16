(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{138:function(t,n,e){},147:function(t,n){},149:function(t,n){},160:function(t,n){},162:function(t,n){},189:function(t,n){},191:function(t,n){},192:function(t,n){},197:function(t,n){},199:function(t,n){},218:function(t,n){},230:function(t,n){},233:function(t,n){},237:function(t,n,e){},258:function(t,n,e){},259:function(t,n,e){},260:function(t,n,e){"use strict";e.r(n);var c,r=e(2),a=e(0),o=e(19),i=e.n(o),u=e(20),s=e(21),b=e(23),l=e(22),j=(e(138),e(8)),h=e(129),f=e.n(h),O=(e(237),e(16)),d=e(4),p=Object(d.b)("ADD_NUMBER_START"),m=Object(d.b)("ADD_NUMBER_SUCCESS"),C=Object(d.b)("ADD_NUMBER_ERROR"),v=Object(d.b)("DELETE_CONTACT_START"),x=Object(d.b)("DELETE_CONTACT_SUCCESS"),y=Object(d.b)("DELETE_CONTACT_ERROR"),E=Object(d.b)("GET_NUMBER_START"),g=Object(d.b)("GET_NUMBER_SUCCESS"),S=Object(d.b)("GET_NUMBER_ERROR"),T=e(46),N=e.n(T),k=function(t){return t.contacts},R=function(t){return t.filter},_=function(t){Object(b.a)(e,t);var n=Object(l.a)(e);function e(){var t;Object(u.a)(this,e);for(var c=arguments.length,r=new Array(c),a=0;a<c;a++)r[a]=arguments[a];return(t=n.call.apply(n,[this].concat(r))).state={name:"",number:""},t.handleChange=function(n){var e=n.target,c=e.name,r=e.value;t.setState(Object(j.a)({},c,r))},t.handlerSubmit=function(n){n.preventDefault();var e=t.props,c=e.addNumber,r=e.checkContact,a=e.contacts,o=t.newContact();!1===r(a,o)&&c(o),t.setState((function(t){return{name:"",number:""}}))},t.newContact=function(){var n=t.state;return{name:n.name,number:n.number,id:f.a.generate()}},t}return Object(s.a)(e,[{key:"render",value:function(){var t=this.state,n=t.name,e=t.number;return Object(r.jsxs)("form",{className:"form",onSubmit:this.handlerSubmit,children:[Object(r.jsx)("label",{htmlFor:"contactName",children:"Name"}),Object(r.jsx)("input",{name:"name",onChange:this.handleChange,value:n,type:"text"}),Object(r.jsx)("label",{htmlFor:"contactNumber",children:"Number"}),Object(r.jsx)("input",{name:"number",onChange:this.handleChange,value:e,type:"number"}),Object(r.jsx)("button",{type:"submit",children:"Add Contact"})]})}}]),e}(a.Component),w={addNumber:function(t){return function(n){n(p()),N.a.post("http://localhost:2000/contacts",t).then((function(e){return n(m(t))})).catch((function(t){return n(C())}))}}},A=Object(O.b)((function(t){return{contacts:k(t)}}),w)(_),D=e(262),L=e(261),U=(e(258),function(t){Object(b.a)(e,t);var n=Object(l.a)(e);function e(){return Object(u.a)(this,e),n.apply(this,arguments)}return Object(s.a)(e,[{key:"render",value:function(){var t=this.props,n=t.contacts,e=t.deleteContacts;return Object(r.jsx)(D.a,{component:"ul",children:n.map((function(t){return Object(r.jsx)(L.a,{timeout:250,classNames:"contact",children:Object(r.jsxs)("li",{children:[t.name,": ",t.number," ",Object(r.jsx)("button",{type:"button",onClick:function(){return e(t.id)},children:"Delete"})]})},t.id)}))})}}]),e}(a.Component)),F={deleteContacts:function(t){return function(n){n(v()),N.a.delete("http://localhost:2000/contacts/".concat(t)).then((function(e){return n(x(t))}))}}},B=Object(O.b)(null,F)(U),M=(e(259),Object(d.b)("FILTER_CONTACTS")),G=function(t){Object(b.a)(e,t);var n=Object(l.a)(e);function e(){var t;Object(u.a)(this,e);for(var c=arguments.length,r=new Array(c),a=0;a<c;a++)r[a]=arguments[a];return(t=n.call.apply(n,[this].concat(r))).state={value:""},t.handleFilter=function(n){var e=n.target.value;t.setState({value:e}),t.props.filterContact(e)},t}return Object(s.a)(e,[{key:"render",value:function(){this.props.filter;return Object(r.jsx)("div",{className:"input",children:Object(r.jsx)("input",{type:"text",onChange:this.handleFilter,value:this.state.value})})}}]),e}(a.Component),I={filterContact:M},J=Object(O.b)((function(t){return{filter:t.filter}}),I)(G),W=function(t){return Object(r.jsxs)("div",{children:[Object(r.jsx)("h2",{children:"This contact is already exist!"}),Object(r.jsx)("button",{onClick:t.ok,children:"OK"})]})},K=function(t){Object(b.a)(e,t);var n=Object(l.a)(e);function e(){var t;Object(u.a)(this,e);for(var c=arguments.length,r=new Array(c),a=0;a<c;a++)r[a]=arguments[a];return(t=n.call.apply(n,[this].concat(r))).state={showLogo:!1,contactExist:!1},t.findContact=function(){var n=t.props,e=n.contacts,c=n.filterWord;return e.filter((function(t){return t.name.toLowerCase().includes(c.toLowerCase())}))},t.checkContact=function(n,e){return!!n.find((function(t){return t.name===e.name}))&&(t.setState({contactExist:!0}),!0)},t.alertOk=function(){t.setState({contactExist:!1})},t}return Object(s.a)(e,[{key:"componentDidMount",value:function(){this.props.getContacts(),this.setState((function(t){return{showLogo:!t.showLogo}}))}},{key:"render",value:function(){var t=this.state,n=t.showLogo,e=t.contactExist,c=this.props.filter,a=this.findContact();return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(L.a,{in:n,unmountOnExit:!0,classNames:"logo",timeout:500,children:Object(r.jsx)("h1",{children:"Phonebook"})}),Object(r.jsx)("h2",{children:"Contacts form"}),Object(r.jsx)(A,{checkContact:this.checkContact}),Object(r.jsx)("h2",{children:"Contacts list"}),Object(r.jsx)(J,{filter:c,handleFilter:this.handleFilter}),Object(r.jsx)(B,{contacts:a}),Object(r.jsx)(L.a,{in:e,unmountOnExit:!0,classNames:"alert",timeout:250,children:Object(r.jsx)(W,{ok:this.alertOk})})]})}}]),e}(a.Component),P={getContacts:function(){return function(t){t(E()),N.a.get("http://localhost:2000/contacts").then((function(n){var e=n.data;return t(g(e))})).catch((function(n){return t(S())}))}}},q=Object(O.b)((function(t){return{contacts:k(t),filterWord:R(t)}}),P)(K),z=e(45),H=e(7),Q=Object(d.c)([],(c={},Object(j.a)(c,E.type,(function(t){return t})),Object(j.a)(c,g.type,(function(t,n){return n.payload})),Object(j.a)(c,S.type,(function(t){return t})),Object(j.a)(c,p.type,(function(t){return t})),Object(j.a)(c,m.type,(function(t,n){var e=n.payload;return[].concat(Object(z.a)(t),[e])})),Object(j.a)(c,C.type,(function(t){return t})),Object(j.a)(c,v.type,(function(t){return t})),Object(j.a)(c,x.type,(function(t,n){var e=n.payload;return t.filter((function(t){return t.id!==e}))})),Object(j.a)(c,y.type,(function(t){return t})),c)),V=Object(d.c)("",Object(j.a)({},M.type,(function(t,n){return n.payload}))),X=Object(H.c)({contacts:Q,filter:V}),Y=Object(d.a)({reducer:X,middleware:Object(z.a)(Object(d.d)())});i.a.render(Object(r.jsx)(O.a,{store:Y,children:Object(r.jsx)(q,{})}),document.getElementById("root"))}},[[260,1,2]]]);
//# sourceMappingURL=main.8db87005.chunk.js.map