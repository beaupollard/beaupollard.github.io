(function(g){var window=this;var O5=function(a,b){var c="ytp-miniplayer-button-bottom-right";var d=g.X?{D:"div",W:["ytp-icon","ytp-icon-expand-watch-page"]}:{D:"svg",N:{height:"18px",version:"1.1",viewBox:"0 0 22 18",width:"22px"},K:[{D:"g",N:{fill:"none","fill-rule":"evenodd",stroke:"none","stroke-width":"1"},K:[{D:"g",N:{transform:"translate(-1.000000, -3.000000)"},K:[{D:"polygon",N:{points:"0 0 24 0 24 24 0 24"}},{D:"path",N:{d:"M19,7 L5,7 L5,17 L19,17 L19,7 Z M23,19 L23,4.98 C23,3.88 22.1,3 21,3 L3,3 C1.9,3 1,3.88 1,4.98 L1,19 C1,20.1 1.9,21 3,21 L21,21 C22.1,21 23,20.1 23,19 Z M21,19.02 L3,19.02 L3,4.97 L21,4.97 L21,19.02 Z",
fill:"#fff","fill-rule":"nonzero"}}]}]}]};var e="Open video page";g.R(a.P().experiments,"kevlar_miniplayer_expand_top")&&(c="ytp-miniplayer-button-top-left",d=g.X?{D:"div",W:["ytp-icon","ytp-icon-expand-miniplayer"]}:{D:"svg",N:{height:"24px",version:"1.1",viewBox:"0 0 24 24",width:"24px"},K:[{D:"g",N:{fill:"none","fill-rule":"evenodd",stroke:"none","stroke-width":"1"},K:[{D:"g",N:{transform:"translate(12.000000, 12.000000) scale(-1, 1) translate(-12.000000, -12.000000) "},K:[{D:"path",N:{d:"M19,19 L5,19 L5,5 L12,5 L12,3 L5,3 C3.89,3 3,3.9 3,5 L3,19 C3,20.1 3.89,21 5,21 L19,21 C20.1,21 21,20.1 21,19 L21,12 L19,12 L19,19 Z M14,3 L14,5 L17.59,5 L7.76,14.83 L9.17,16.24 L19,6.41 L19,10 L21,10 L21,3 L14,3 Z",
fill:"#fff","fill-rule":"nonzero"}}]}]}]},e="Expand");g.V.call(this,{D:"button",W:["ytp-miniplayer-expand-watch-page-button","ytp-button",c],N:{title:"{{title}}","data-tooltip-target-id":"ytp-miniplayer-expand-watch-page-button"},K:[d]});this.u=a;this.ha("click",this.w,this);this.ia("title",g.SM(a,e,"i"));g.ie(this,g.cN(b.Xa(),this.element))},P5=function(a){g.V.call(this,{D:"div",
I:"ytp-miniplayer-ui"});this.player=a;this.H=!1;this.G=this.B=this.u=void 0;this.L(a,"minimized",this.kH);this.L(a,"onStateChange",this.SN)},Q5=function(a){g.AP.call(this,a);
this.o=new P5(this.player);this.o.hide();g.JL(this.player,this.o.element,4);a.app.H.o&&(this.load(),g.L(g.pL(a),"ytp-player-minimized",!0))};
g.r(O5,g.V);O5.prototype.w=function(){this.u.ma("onExpandMiniplayer")};g.r(P5,g.V);g.h=P5.prototype;
g.h.show=function(){this.u=new g.Wm(this.jH,null,this);this.u.start();if(!this.H){this.C=new g.TQ(this.player,this);g.C(this,this.C);g.JL(this.player,this.C.element,4);this.C.B=.6;this.T=new g.UP(this.player);g.C(this,this.T);this.w=new g.V({D:"div",I:"ytp-miniplayer-scrim"});g.C(this,this.w);this.w.ba(this.element);this.L(this.w.element,"click",this.Oz);var a=new g.V({D:"button",W:["ytp-miniplayer-close-button","ytp-button"],N:{"aria-label":"Close"},K:[g.lM()]});g.C(this,a);a.ba(this.w.element);
this.L(a.element,"click",this.my);a=new O5(this.player,this);g.C(this,a);a.ba(this.w.element);this.A=new g.V({D:"div",I:"ytp-miniplayer-controls"});g.C(this,this.A);this.A.ba(this.w.element);this.L(this.A.element,"click",this.Oz);var b=new g.V({D:"div",I:"ytp-miniplayer-button-container"});g.C(this,b);b.ba(this.A.element);a=new g.V({D:"div",I:"ytp-miniplayer-play-button-container"});g.C(this,a);a.ba(this.A.element);var c=new g.V({D:"div",I:"ytp-miniplayer-button-container"});g.C(this,c);c.ba(this.A.element);
this.O=new g.KN(this.player,this,!1);g.C(this,this.O);this.O.ba(b.element);b=new g.GN(this.player,this);g.C(this,b);b.ba(a.element);this.J=new g.KN(this.player,this,!0);g.C(this,this.J);this.J.ba(c.element);this.G=new g.gP(this.player,this);g.C(this,this.G);this.G.ba(this.w.element);this.B=new g.TN(this.player,this);g.C(this,this.B);g.JL(this.player,this.B.element,4);this.F=new g.V({D:"div",I:"ytp-miniplayer-buttons"});g.C(this,this.F);g.JL(this.player,this.F.element,4);a=new g.V({D:"button",W:["ytp-miniplayer-close-button",
"ytp-button"],N:{"aria-label":"Close"},K:[g.lM()]});g.C(this,a);a.ba(this.F.element);this.L(a.element,"click",this.my);a=new g.V({D:"button",W:["ytp-miniplayer-replay-button","ytp-button"],N:{"aria-label":"Close"},K:[g.AM()]});g.C(this,a);a.ba(this.F.element);this.L(a.element,"click",this.OL);this.L(this.player,"presentingplayerstatechange",this.lH);this.L(this.player,"appresize",this.Nr);this.L(this.player,"fullscreentoggled",this.Nr);this.Nr();this.H=!0}0!=this.player.getPlayerState()&&g.V.prototype.show.call(this);
this.B.show();this.player.unloadModule("annotations_module")};
g.h.hide=function(){this.u&&(this.u.dispose(),this.u=void 0);g.V.prototype.hide.call(this);this.player.app.H.o||(this.H&&this.B.hide(),this.player.loadModule("annotations_module"))};
g.h.X=function(){this.u&&(this.u.dispose(),this.u=void 0);g.V.prototype.X.call(this)};
g.h.my=function(){this.player.stopVideo();this.player.ma("onCloseMiniplayer")};
g.h.OL=function(){this.player.playVideo()};
g.h.Oz=function(a){if(a.target==this.w.element||a.target==this.A.element)g.R(this.player.P().experiments,"kevlar_miniplayer_play_pause_on_scrim")?g.GD(g.rL(this.player))?this.player.pauseVideo():this.player.playVideo():this.player.ma("onExpandMiniplayer")};
g.h.kH=function(){g.L(g.pL(this.player),"ytp-player-minimized",this.player.app.H.o)};
g.h.jH=function(){g.VN(this.B);this.G.w();this.u&&this.u.start()};
g.h.lH=function(a){g.W(a.state,32)&&this.C.hide()};
g.h.Nr=function(){var a=this.B,b=g.oL(this.player).getPlayerSize().width;a.Aa=0;a.B=b;a.F=!1;g.XN(a)};
g.h.SN=function(a){this.player.app.H.o&&(0==a?this.hide():this.show())};
g.h.Xa=function(){return this.C};
g.h.Yb=function(){return!1};
g.h.Wd=function(){return!1};
g.h.Ji=function(){return!1};
g.h.ot=function(){};
g.h.kh=function(){};
g.h.Rj=function(){};
g.h.Ik=function(){return null};
g.h.Mr=function(){return new g.nh(0,0,0,0)};
g.h.handleGlobalKeyDown=function(){return!1};
g.h.handleGlobalKeyUp=function(){return!1};
g.h.fj=function(a,b,c,d,e){var f=0,k=d=0,l=g.Kh(a);if(b){c=g.jn(b,"ytp-prev-button")||g.jn(b,"ytp-next-button");var m=g.jn(b,"ytp-play-button"),n=g.jn(b,"ytp-miniplayer-expand-watch-page-button");c?f=k=12:m?(b=g.Hh(b,this.element),k=b.x,f=b.y-12):n&&(k=g.jn(b,"ytp-miniplayer-button-top-left"),f=g.Hh(b,this.element),b=g.Kh(b),k?(k=8,f=f.y+40):(k=f.x-l.width+b.width,f=f.y-20))}else k=c-l.width/2,d=25+(e||0);b=g.oL(this.player).getPlayerSize().width;e=f+(e||0);l=g.qd(k,0,b-l.width);e?(a.style.top=e+
"px",a.style.bottom=""):(a.style.top="",a.style.bottom=d+"px");a.style.left=l+"px"};
g.h.showControls=function(){};
g.h.Or=function(){};
g.h.Hf=function(){};g.r(Q5,g.AP);Q5.prototype.create=function(){};
Q5.prototype.mf=function(){return!1};
Q5.prototype.load=function(){this.player.hideControls();this.o.show()};
Q5.prototype.unload=function(){this.player.showControls();this.o.hide()};g.PP.miniplayer=Q5;})(_yt_player);
