(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{114:function(e,t,a){},116:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),i=a(56),l=a.n(i),r=(a(62),a(16)),s=a(37),c=a(38),u=a(41),p=a(39),d=a(42),h=a(40),m=a.n(h);a(110);m.a.initializeApp({authDomain:"david-spill-backend.firebaseapp.com",databaseURL:"https://david-spill-backend.firebaseio.com",projectId:"david-spill-backend",storageBucket:"david-spill-backend.appspot.com"});var b=m.a,f=(a(114),function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"App-header"},o.a.createElement(v,null)))}}]),t}(n.Component)),v=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).state={now:Date.now(),lastSpill:Date.now()},a.resetSpillCounter=a.resetSpillCounter.bind(Object(r.a)(Object(r.a)(a))),a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;b.database().ref("logs").on("child_added",function(t){e.setState({lastSpill:t.val().time})}),setInterval(function(){return e.setState({now:Date.now()})},500)}},{key:"resetSpillCounter",value:function(){var e=b.database().ref("logs"),t={time:Date.now()};e.push(t),this.setState({lastSpill:this.state.now})}},{key:"render",value:function(){var e=this.state.now-this.state.lastSpill,t=("00"+Math.floor(e/1e3)%60).substr(-2),a=("00"+Math.floor(e/6e4)%60).substr(-2),n=("00"+Math.floor(e/36e5)%24).substr(-2),i=Math.floor(e/864e5);return o.a.createElement(o.a.Fragment,null,o.a.createElement("p",null,"Time since David has spilled something:"),o.a.createElement("span",{className:"timer"},[i,n,a,t].join(":")),o.a.createElement("p",null),o.a.createElement("button",{onClick:this.resetSpillCounter},"Oh no, David spilled something again!"))}}]),t}(o.a.Component),w=f;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},57:function(e,t,a){e.exports=a(116)},62:function(e,t,a){}},[[57,2,1]]]);
//# sourceMappingURL=main.07b3dca0.chunk.js.map