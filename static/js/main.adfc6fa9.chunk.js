(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,,,,,,,,,,function(e,t,a){e.exports=a(21)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(9),i=a.n(o),c=(a(16),a(5)),d=a(7),r=a(10),s=a(1),u=a(2),h=a(3),m=a(4),p=a(6),C=(a(17),function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).handleChange=function(e,t){n.setState(Object(c.a)({},e,t.target.value))},n.handleSubmit=function(e){e.preventDefault(),n.props.addTodo(n.state.title,n.state.todoDeadline),n.setState({title:"",todoDeadline:""})},n.state={title:"",todoDeadline:""},n.handleChange=n.handleChange.bind(Object(p.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(p.a)(n)),n}return Object(u.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"left-part"},l.a.createElement("h1",null,"Add Todo"),l.a.createElement("div",{className:"addtodo"},l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("div",{className:"todo-input"},l.a.createElement("label",{for:"todoInput"},"Your Todo: "),l.a.createElement("input",{type:"text",placeholder:"Please write",value:this.state.title,onChange:this.handleChange.bind(this,"title"),id:"todoInput"})),l.a.createElement("div",{className:"todo-input"},l.a.createElement("label",{for:"todoDeadline"},"Deadline: "),l.a.createElement("input",{type:"text",placeholder:"20xx/xx/xx",value:this.state.todoDeadline,onChange:this.handleChange.bind(this,"todoDeadline"),id:"todoDeadline"})),l.a.createElement("input",{type:"submit",value:"Add Todo",className:"btn_addtodo"}))))}}]),a}(n.Component)),b=(a(18),function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(e=t.call.apply(t,[this].concat(l))).handlechangeCompleted=function(){var t=e.props;(0,t.onChange)(t.id,"completed",!t.completed)},e.handleClickEdit=function(){var t=e.props;(0,t.onChange)(t.id,"editing",!t.editing)},e.handleClickDelete=function(){var t=e.props;(0,t.onDelete)(t.id)},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this.props,t=e.title,a=e.todoDeadline,n=e.completed;return l.a.createElement("div",{className:"todo-item"},l.a.createElement("label",null,l.a.createElement("input",{type:"checkbox",checked:n,onChange:this.handlechangeCompleted,className:"checkbox"}),l.a.createElement("div",{className:"todo"},l.a.createElement("div",{className:"title"},"Title: ",t),l.a.createElement("div",{className:"deadline"},"Deadline: ",a)),l.a.createElement("div",{className:"todo-btns"},l.a.createElement("button",{onClick:this.handleClickEdit},"Edit"),l.a.createElement("button",{onClick:this.handleClickDelete},"Delete"))))}}]),a}(n.Component));a(19);function f(e){return l.a.createElement("button",{onClick:e.onClick},"Login")}function v(e){return l.a.createElement("button",{onClick:e.onClick},"Logout")}function g(e){return l.a.createElement("h2",null,"Welcome back!")}function E(e){return l.a.createElement("h2",null,"Please sign up.")}function k(e){return e.isLoggedIn?l.a.createElement(g,null):l.a.createElement(E,null)}var O=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).handleLoginClick=n.handleLoginClick.bind(Object(p.a)(n)),n.handleLogoutClick=n.handleLogoutClick.bind(Object(p.a)(n)),n.state={isLoggedIn:!1,isModalOpen:!1},n}return Object(u.a)(a,[{key:"handleLoginClick",value:function(){this.setState({isLoggedIn:!0,isModalOpen:!0})}},{key:"handleLogoutClick",value:function(){this.setState({isLoggedIn:!1})}},{key:"handleClickModalClose",value:function(){this.setState({isModalOpen:!1})}},{key:"render",value:function(){var e,t,a=this,n=this.state.isLoggedIn;return e=n?l.a.createElement(v,{onClick:this.handleLogoutClick}):l.a.createElement(f,{onClick:this.handleLoginClick}),this.state.isModalOpen&&(t=l.a.createElement("div",{className:"loginModal"},l.a.createElement("label",{className:"address-input"},"Address:",l.a.createElement("input",{type:"address",placeholder:"aaaa@bbb",className:"input"})),l.a.createElement("label",{className:"password-input"},"Password:",l.a.createElement("input",{type:"password",placeholder:"Please Your Password",className:"input"})),l.a.createElement("button",{onClick:function(){a.handleClickModalClose()},className:"login-btn"},"Login"))),l.a.createElement("div",{className:"header"},l.a.createElement("div",{className:"header-tittle"},l.a.createElement("h1",{className:"app_tittle"},"TodoApp")),l.a.createElement("div",{className:"header-login"},l.a.createElement("div",{className:"greeding"},l.a.createElement(k,{isLoggedIn:n})),l.a.createElement("div",{className:"log-button"},e),t))}}]),a}(n.Component),j=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(e=t.call.apply(t,[this].concat(l))).handleChange=function(){var t=e.props;(0,t.onChange)(!t.allCompleted)},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this.props.allCompleted;return l.a.createElement("label",null,l.a.createElement("input",{type:"checkbox",checked:e,onChange:this.handleChange}),"\u5168\u3066",e?"\u672a\u5b8c\u4e86":"\u5b8c\u4e86","\u306b\u3059\u308b")}}]),a}(n.Component),D=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(e=t.call.apply(t,[this].concat(l))).handleChange=function(t){e.props.onChange(t.currentTarget.value)},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this.props.filter;return l.a.createElement("select",{value:e,onChange:this.handleChange},l.a.createElement("option",{value:"all"},"\u5168\u3066"),l.a.createElement("option",{value:"uncompleted"},"\u672a\u5b8c\u4e86"),l.a.createElement("option",{value:"completed"},"\u5b8c\u4e86\u6e08\u307f"))}}]),a}(n.Component),N=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).handleChange=function(e,t){n.setState(Object(c.a)({},e,t.target.value))},n.handleClickCancel=function(){var e=n.props;(0,e.onCancel)(e.id,"editing",!1)},n.handleUpdate=function(){var e=n.props,t=e.onUpdate,a=e.id;n.props.title&&n.props.todoDeadline&&t(a,n.state.title,n.state.todoDeadline)},n.state={title:e.title,todoDeadline:e.todoDeadline},n}return Object(u.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("labe",{for:"todoInput"},"Your Todo",l.a.createElement("input",{type:"text",value:this.state.title,onChange:this.handleChange.bind(this,"title"),id:"todoInput"})),l.a.createElement("labe",{for:"todoDeadline"},"Deadline",l.a.createElement("input",{type:"text",value:this.state.todoDeadline,onChange:this.handleChange.bind(this,"todoDeadline"),id:"todoDeadline"})),l.a.createElement("button",{onClick:this.handleClickCancel},"Cancel"),l.a.createElement("button",{onClick:this.handleUpdate},"Update"))}}]),a}(n.Component),y=(a(20),function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).addTodo=function(e,t){var a={id:n.state.nextId+1,title:e,todoDeadline:t,completed:!1,editing:!1},l=[].concat(Object(r.a)(n.state.todos),[a]);n.setState({todos:l,nextId:n.state.nextId+1})},n.handleChangeCompleted=function(e,t){var a=n.state.todos.map((function(a){return a.id===e?Object(d.a)({},a,{completed:t}):a}));n.setState({todos:a})},n.handleChangeAllCompleted=function(e){var t=n.state.todos.map((function(t){return Object(d.a)({},t,{completed:e})}));n.setState({todos:t})},n.handleClickDelete=function(e){var t=n.state.todos.filter((function(t){return t.id!==e}));n.setState({todos:t})},n.handleClickDeleteCompleted=function(){n.setState({todos:n.state.todos.filter((function(e){return!e.completed}))})},n.handleChangeFilter=function(e){n.setState({filter:e})},n.handleChangeTodoAttribute=function(e,t,a){var l=n.state.todos.map((function(n){return n.id===e?Object(d.a)({},n,Object(c.a)({},t,a)):n}));n.setState({todos:l})},n.handleUpdateTodoTitle=function(e,t,a){var l=n.state.todos.map((function(n){return n.id===e?Object(d.a)({},n,{title:t,todoDeadline:a,editing:!1}):n}));n.setState({todos:l})},n.state={todos:[],nextId:0,filter:"all"},n}return Object(u.a)(a,[{key:"render",value:function(){var e=this,t=this.state,a=t.todos,n=t.filter,o=a.filter((function(e){var t=e.completed;switch(n){case"all":return!0;case"uncompleted":return!t;case"completed":return t;default:return!0}}));return l.a.createElement("div",{className:"app-all"},l.a.createElement(O,{className:"header"}),l.a.createElement("div",{className:"todos"},l.a.createElement("div",{className:"left"},l.a.createElement(C,{addTodo:this.addTodo,className:"add-todo"})),l.a.createElement("div",{className:"right"},l.a.createElement("div",{className:"right-uppper"},l.a.createElement("h1",null,"List"),l.a.createElement(j,{allCompleted:a.length>0&&a.every((function(e){return e.completed})),onChange:this.handleChangeAllCompleted}),l.a.createElement("button",{onClick:this.handleClickDeleteCompleted,className:"all-delete-btn"},"Delete All Completed Todos"),l.a.createElement("br",null),l.a.createElement(D,{filter:n,onChange:this.handleChangeFilter})),l.a.createElement("div",{className:"right-under"},l.a.createElement("ul",null,o.map((function(t){var a=t.id,n=t.title,o=t.todoDeadline,i=t.completed,c=t.editing;return l.a.createElement("li",{key:a},c?l.a.createElement(N,{id:a,title:n,todoDeadline:o,onCancel:e.handleChangeTodoAttribute,onUpdate:e.handleUpdateTodoTitle}):l.a.createElement(b,{id:a,title:n,todoDeadline:o,completed:i,onChange:e.handleChangeTodoAttribute,onDelete:e.handleClickDelete}))})))))))}}]),a}(n.Component));i.a.render(l.a.createElement(y,null),document.getElementById("root"))}],[[11,1,2]]]);
//# sourceMappingURL=main.adfc6fa9.chunk.js.map