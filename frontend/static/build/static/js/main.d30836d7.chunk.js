(this.webpackJsonpstatic=this.webpackJsonpstatic||[]).push([[0],[,,,,,,,,,function(e,t,a){},,,function(e,t,a){e.exports=a(21)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(10),o=a.n(s),c=(a(17),a(18),a(11)),l=a(3),i=a(4),m=a(1),u=a(6),h=a(5),g=a(7),d=(a(19),function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={username:"",password:""},n.handleChange=n.handleChange.bind(Object(m.a)(n)),n}return Object(i.a)(a,[{key:"handleChange",value:function(e){this.setState(Object(g.a)({},e.target.name,e.target.value))}},{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{className:"col-12 col-md-6",onSubmit:function(t){return e.props.logIn(t,e.state)}},r.a.createElement("h5",{className:"Register"},"Log in"),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"username"},"Username"),r.a.createElement("input",{type:"text",className:"form-control",id:"username",name:"username",value:this.state.username,onChange:this.handleChange})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{type:"text",className:"form-control",id:"password",name:"password",value:this.state.password,onChange:this.handleChange})),r.a.createElement("div",{className:"create-Account-Btn"},r.a.createElement("button",{className:"btn btn-primary"},"Log in"))))}}]),a}(n.Component)),f=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={username:"",email:"",password1:"",password2:""},n.handleChange=n.handleChange.bind(Object(m.a)(n)),n}return Object(i.a)(a,[{key:"handleChange",value:function(e){this.setState(Object(g.a)({},e.target.name,e.target.value))}},{key:"render",value:function(){var e=this;return r.a.createElement("form",{className:"col-12 col-md-6",onSubmit:function(t){return e.props.registerUser(t,e.state)}},r.a.createElement("h5",{className:"Register"},"Create Account"),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"username"},"Username"),r.a.createElement("input",{type:"text",className:"form-control",id:"username",name:"username",value:this.state.username,onChange:this.handleChange})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"email"},"Email Address"),r.a.createElement("input",{type:"text",className:"form-control",id:"email",name:"email",value:this.state.email,onChange:this.handleChange}),r.a.createElement("small",{className:"form-text text-muted"},"We'll never share your email with anyone else.")),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"password1"},"Password"),r.a.createElement("input",{type:"text",className:"form-control",id:"password1",name:"password1",value:this.state.password1,onChange:this.handleChange})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"password2"},"Confirm Password"),r.a.createElement("input",{type:"text",className:"form-control",id:"password2",name:"password2",value:this.state.password2,onChange:this.handleChange})),r.a.createElement("div",{className:"create-Account-Btn"},r.a.createElement("button",{className:"btn btn-primary"},"Register")))}}]),a}(n.Component);a(20);function p(e){var t=e.chats.map((function(e){return r.a.createElement("li",{className:"list-group-item mt-3",key:e.id},e.message)}));return r.a.createElement("div",null,t)}var v=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={user:"",message:""},n.handleChange=n.handleChange.bind(Object(m.a)(n)),n}return Object(i.a)(a,[{key:"handleChange",value:function(e){this.setState(Object(g.a)({},e.target.name,e.target.value))}},{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{onClick:this.props.logOut,type:"button"},"Log out"),r.a.createElement("div",{className:"form mt-5",onSubmit:function(t){return e.props.postChat(t,e.state)}},r.a.createElement("form",{className:"col-12 col-md-6"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"message"},"Message"),r.a.createElement("input",{type:"text",className:"form-control",id:"message",name:"message",value:this.state.message,onChange:this.handleChange})),r.a.createElement("button",{className:"btn btn-primary"},"Post Message"))),r.a.createElement(p,{chats:this.props.chats}))}}]),a}(n.Component),b=a(2),E=a.n(b),y=(a(9),function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={chats:[],display:"register",isLoggedIn:!!E.a.get("Authorization")},n.registerUser=n.registerUser.bind(Object(m.a)(n)),n.logIn=n.logIn.bind(Object(m.a)(n)),n.postChat=n.postChat.bind(Object(m.a)(n)),n.logOut=n.logOut.bind(Object(m.a)(n)),n.fetchMessages=n.fetchMessages.bind(Object(m.a)(n)),n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.fetchMessages(),setInterval(this.fetchMessages,1e3)}},{key:"fetchMessages",value:function(){var e=this;!0===this.state.isLoggedIn&&fetch("/api/v1/chats/").then((function(e){return e.json()})).then((function(t){return e.setState({chats:t})})).catch((function(e){return console.log("Error:",e)}))}},{key:"postChat",value:function(e,t){var a=this;e.preventDefault();var n=E.a.get("csrftoken");fetch("/api/v1/chats/",{method:"POST",headers:{"X-CSRFToken":n,"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()})).then((function(e){var t=[].concat(Object(c.a)(a.state.chats),[e]);a.setState({chats:t})})).catch((function(e){return console.log("Error:",e)}))}},{key:"logIn",value:function(e,t){var a=this;e.preventDefault();var n=E.a.get("csrftoken");fetch("/api/v1/rest-auth/login/",{method:"POST",headers:{"X-CSRFToken":n,"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()})).then((function(e){e.key&&(E.a.set("Authorization","Token ".concat(e.key)),a.setState({isLoggedIn:!0}))})).catch((function(e){return console.log("Error:",e)}))}},{key:"registerUser",value:function(e,t){var a=this;e.preventDefault();var n=E.a.get("csrftoken");fetch("/api/v1/rest-auth/registration/",{method:"POST",headers:{"X-CSRFToken":n,"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()})).then((function(e){e.key&&(E.a.set("Authorization","Token ".concat(e.key)),a.setState({isLoggedIn:!0}))})).catch((function(e){return console.log("Error:",e)}))}},{key:"logOut",value:function(){var e=this,t=E.a.get("csrftoken");fetch("/api/v1/rest-auth/logout/",{method:"POST",headers:{"X-CSRFToken":t,"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(t){"Successfully logged out."===t.detail&&(E.a.remove("Authorization"),e.setState({isLoggedIn:!1}))})).catch((function(e){return console.log("Error:",e)}))}},{key:"render",value:function(){var e,t=this;console.log(this.state.isLoggedIn);var a,n=this.state.display;"register"===n?e=r.a.createElement("div",{className:"form"},r.a.createElement(f,{registerUser:this.registerUser})):"login"===n&&(e=r.a.createElement("div",{className:"form"},r.a.createElement(d,{logIn:this.logIn})));var s=this.state.isLoggedIn;return a=!0===s?r.a.createElement(v,{chats:this.state.chats,postChat:this.postChat,logOut:this.logOut}):"",r.a.createElement(r.a.Fragment,null,!1===s?r.a.createElement("div",{className:"mt-5"},e,r.a.createElement("div",{className:"form"},r.a.createElement("button",{onClick:function(){return t.setState({display:"login"})},type:"button",className:"btn btn-link"},"Already have an account?"),r.a.createElement("button",{onClick:function(){return t.setState({display:"register"})},type:"button",className:"btn btn-link"},"Don't have an account?"))):r.a.createElement("div",null,a))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[12,1,2]]]);
//# sourceMappingURL=main.d30836d7.chunk.js.map