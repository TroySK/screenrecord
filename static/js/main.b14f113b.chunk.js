(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1:function(t,e,n){t.exports={Button:"App_Button__agX9A",RecordButton:"App_RecordButton__3r3WB App_Button__agX9A",PlayButton:"App_PlayButton__i2HSO App_Button__agX9A",StopButton:"App_StopButton__25nxA App_Button__agX9A",DownloadButton:"App_DownloadButton__DfY_X App_Button__agX9A",SettingsButton:"App_SettingsButton__6jwR8 App_Button__agX9A",Hidden:"App_Hidden__AGs9D"}},11:function(t,e,n){t.exports=n(18)},18:function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),r=n(4),i=n.n(r),c=n(2),s=n.n(c),u=n(5),d=n(6),l=n(7),p=n(9),g=n(8),v=n(10),_=n(1),m=n.n(_),h=function(t){function e(){var t,n;Object(d.a)(this,e);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(p.a)(this,(t=Object(g.a)(e)).call.apply(t,[this].concat(o)))).state={stream:null,recorder:null,recording:void 0,chunks:[],config:{}},n}return Object(v.a)(e,t),Object(l.a)(e,[{key:"getDisplayMedia",value:function(){return navigator.getDisplayMedia?navigator.getDisplayMedia({video:!0}):navigator.mediaDevices.getDisplayMedia?navigator.mediaDevices.getDisplayMedia({video:!0}):navigator.mediaDevices.getUserMedia({video:{mediaSource:"screen"}})}},{key:"startCapture",value:function(){var t=Object(u.a)(s.a.mark(function t(){var e,n,a=this;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.getDisplayMedia();case 2:(e=t.sent).addEventListener("inactive",function(t){a.stopCapture()}),n=new MediaRecorder(e,{mimeType:"video/webm"}),this.setState({stream:e,recorder:n,recording:void 0,chunks:[]}),n.addEventListener("dataavailable",function(t){t.data&&t.data.size>0&&a.state.chunks.push(t.data)}),n.start(10);case 8:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},{key:"stopCapture",value:function(){try{this.state.recorder.stop(),this.state.stream.getTracks().forEach(function(t){return t.stop()})}catch(t){}this.setState({recorder:null,stream:null,recording:window.URL.createObjectURL(new Blob(this.state.chunks,{type:"video/webm"}))})}},{key:"downloadFile",value:function(){var t=document.createElement("a");t.href=this.state.recording;var e=new Date,n=e.getFullYear()+"-"+(e.getMonth()+1)+"-"+e.getDate()+" at "+e.getHours()+"."+e.getMinutes()+"."+e.getSeconds();return t.setAttribute("download","ScreenRecording ".concat(n,".webm")),t.click(),!1}},{key:"render",value:function(){var t=this,e=this.state,n=e.recorder,a=e.recording;return o.a.createElement("div",{className:"App"},n&&o.a.createElement("button",{onClick:function(){return t.stopCapture()},className:m.a.StopButton,title:"Stop"}),!n&&o.a.createElement("button",{onClick:function(){return t.startCapture()},className:m.a.RecordButton,title:"Record"}),o.a.createElement("button",{disabled:!a,className:m.a.Hidden,title:"Play"}),o.a.createElement("button",{disabled:!a,className:m.a.DownloadButton,onClick:function(){return t.downloadFile()},title:"Download"}),o.a.createElement("button",{className:m.a.Hidden,title:"Settings"}))}}]),e}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(h,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}},[[11,1,2]]]);
//# sourceMappingURL=main.b14f113b.chunk.js.map