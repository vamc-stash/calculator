(this.webpackJsonpcalculator=this.webpackJsonpcalculator||[]).push([[0],[,,,,,,,function(e,t,a){e.exports=a(17)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(6),r=a.n(c),o=(a(12),a(1)),i=a(2),u=a(4),s=a(3),h=(a(13),a(14),function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"Result"},this.props.value)}}]),a}(n.Component)),d=(a(15),function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(e=t.call.apply(t,[this].concat(l))).handleButtonClick=function(){e.props.clickHandler(e.props.value)},e}return Object(i.a)(a,[{key:"render",value:function(){var e=["button",this.props.orange?"Orange":"",this.props.wide?"Wide":""];return l.a.createElement("div",{className:e.join("").trim()},l.a.createElement("button",{onClick:this.handleButtonClick},this.props.value))}}]),a}(n.Component)),p=(a(16),function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(e=t.call.apply(t,[this].concat(l))).buttonHandler=function(t){e.props.pickButton(t)},e}return Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"button-panel"},l.a.createElement("div",{className:"row"},l.a.createElement(d,{value:"AC",clickHandler:this.buttonHandler,wide:!0}),l.a.createElement(d,{value:"+/-",clickHandler:this.buttonHandler}),l.a.createElement(d,{value:"/",clickHandler:this.buttonHandler,orange:!0})),l.a.createElement("div",{className:"row"},l.a.createElement(d,{value:"7",clickHandler:this.buttonHandler}),l.a.createElement(d,{value:"8",clickHandler:this.buttonHandler}),l.a.createElement(d,{value:"9",clickHandler:this.buttonHandler}),l.a.createElement(d,{value:"*",clickHandler:this.buttonHandler,orange:!0})),l.a.createElement("div",{className:"row"},l.a.createElement(d,{value:"4",clickHandler:this.buttonHandler}),l.a.createElement(d,{value:"5",clickHandler:this.buttonHandler}),l.a.createElement(d,{value:"6",clickHandler:this.buttonHandler}),l.a.createElement(d,{value:"+",clickHandler:this.buttonHandler,orange:!0})),l.a.createElement("div",{className:"row"},l.a.createElement(d,{value:"1",clickHandler:this.buttonHandler}),l.a.createElement(d,{value:"2",clickHandler:this.buttonHandler}),l.a.createElement(d,{value:"3",clickHandler:this.buttonHandler}),l.a.createElement(d,{value:"-",clickHandler:this.buttonHandler,orange:!0})),l.a.createElement("div",{className:"row"},l.a.createElement(d,{value:"0",clickHandler:this.buttonHandler}),l.a.createElement(d,{value:".",clickHandler:this.buttonHandler}),l.a.createElement(d,{value:"=",clickHandler:this.buttonHandler}),l.a.createElement(d,{value:"%",clickHandler:this.buttonHandler,orange:!0})))}}]),a}(n.Component));var m=function(e){return/[0-9]+/.test(e)};var v=function(e,t,a){switch(console.log(e,t,a),a){case"/":return"0"===t?"inf":parseFloat(e)/parseFloat(t);case"*":return parseFloat(e)*parseFloat(t);case"+":return parseFloat(e)+parseFloat(t);case"-":return parseFloat(e)-parseFloat(t);case"%":return parseFloat(e)%parseFloat(t)}};var b=function(e,t){return"AC"===t?{cache:null,operation:null,total:null}:"+/-"===t?e.cache?{cache:(-1*parseFloat(e.cache)).toString()}:e.total?{total:(-1*parseFloat(e.total)).toString()}:{}:"."===t?e.cache&&!e.cache.includes(".")?{cache:e.cache+"."}:{cache:"0."}:m(t)?"0"===t&&"0"===e.cache?{}:e.cache?{cache:e.cache+t}:{cache:t}:"/"===t||"*"===t||"+"===t||"-"===t||"%"===t?e.cache&&e.operation&&e.total?{cache:null,operation:t,total:v(e.total,e.cache,e.operation).toString()}:{cache:null,operation:t,total:e.cache}:"="===t?e.cache&&e.operation&&e.total?{cache:null,operation:null,total:v(e.total,e.cache,e.operation).toString()}:{}:void 0},H=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(e=t.call.apply(t,[this].concat(l))).state={cache:null,operation:null,total:null},e.handleClick=function(t){e.setState(b(e.state,t))},e}return Object(i.a)(a,[{key:"render",value:function(){return console.log(this.state),l.a.createElement("div",{className:"App"},l.a.createElement("div",{className:"title"},"Calculator"),l.a.createElement("div",{className:"Display"},l.a.createElement(h,{value:this.state.cache||this.state.total||"0"}),l.a.createElement(p,{pickButton:this.handleClick})))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(H,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.62fa177b.chunk.js.map