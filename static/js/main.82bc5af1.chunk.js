(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,a){},24:function(e,t,a){e.exports=a(53)},30:function(e,t,a){},53:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(20),i=a.n(c),o=(a(30),a(6)),s=a(7),l=a(9),m=a(8),u=a(10),d=a(56),p=a(55),h=(a(11),function(){return r.a.createElement("div",{className:"header my-4"},r.a.createElement("h3",null,"Rick and Morty"),r.a.createElement("p",{className:"pt-2 pb-4"},"Sus personajes"))}),b=a(21),g=a.n(b),f=a(54),v=function(e){var t;return t="Alive"!==e.status?"1":"0",r.a.createElement("div",{key:e.id,className:"card my-2 mx-2"},r.a.createElement("div",{className:"card-body"},r.a.createElement("img",{src:e.image,className:"card-img-top",alt:"imagen-personaje",style:{filter:"grayscale("+t+")"}}),r.a.createElement("h6",{className:"card-title pt-3"},"Nombre: ",e.name),r.a.createElement("p",{className:"card-text"},"Id: ",e.id),r.a.createElement(f.a,{to:"/character/"+e.id},r.a.createElement("button",{className:"btn btn-info"},"Ver m\xe1s"))))},E=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).state={},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("p",null,"Soy detail character "))}}]),t}(n.Component),y=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).state={items:[],isLoading:!1,error:null},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.setState({isLoading:!0}),g.a.get("https://rickandmortyapi.com/api/character/?page=1").then(function(t){return e.setState({items:t.data.results,isLoading:!1})}).catch(function(t){return e.setState({error:t,isLoading:!1})})}},{key:"render",value:function(){console.log();var e=this.state.items;return console.log(e),r.a.createElement("div",null,r.a.createElement("div",{className:"container"},e.map(function(e){return r.a.createElement(v,{key:e.id,id:e.id,name:e.name,image:e.image,status:e.status,species:e.species,tipo:e.type,gender:e.gender,origin:e.origin.name})})))}}]),t}(n.Component),j=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(d.a,{basename:"/rick-and-morty"},r.a.createElement("div",{className:"App"},r.a.createElement(h,null),r.a.createElement(p.a,{exact:!0,path:"/",component:y}),r.a.createElement(p.a,{exact:!0,path:"/character/:id",component:E})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[24,1,2]]]);
//# sourceMappingURL=main.82bc5af1.chunk.js.map