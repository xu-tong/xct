
var isReady=false;var onReadyCallbacks=[];
var isServiceReady=false;var onServiceReadyCallbacks=[];
var __uniConfig = {"pages":["pages/index/index","pages/sort/sort","pages/collection/collection","pages/mine/mine","pages/readList/readList","pages/listenNoval/listenNoval","pages/listenMusic/listenMusic","pages/listenKnowledge/listenKnowledge"],"window":{"navigationBarTextStyle":"black","navigationBarBackgroundColor":"#b00407","backgroundColor":"#F8F8F8","navigationStyle":"custom"},"tabBar":{"selectedColor":"#dc4d2f","fontSize":"12px","backgroundColor":"#f4f7fc","borderStyle":"white","list":[{"pagePath":"pages/index/index","text":"首页","iconPath":"static/tabber/shengdantubiao-01.png","selectedIconPath":"static/tabber/shengdantubiao-06.png"},{"pagePath":"pages/sort/sort","text":"分类","iconPath":"static/tabber/shengdantubiao-21.png","selectedIconPath":"static/tabber/shengdantubiao-03.png"},{"pagePath":"pages/collection/collection","text":"收藏","iconPath":"static/tabber/shengdantubiao-16.png","selectedIconPath":"static/tabber/shengdantubiao-01.png"},{"pagePath":"pages/mine/mine","text":"我的","iconPath":"static/tabber/shengdantubiao-02.png","selectedIconPath":"static/tabber/shengdantubiao-21.png"}]},"nvueCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"xct","compilerVersion":"2.9.8","entryPagePath":"pages/index/index","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/index/index","meta":{"isQuit":true,"isTabBar":true},"window":{}},{"path":"/pages/sort/sort","meta":{"isQuit":true,"isTabBar":true},"window":{}},{"path":"/pages/collection/collection","meta":{"isQuit":true,"isTabBar":true},"window":{}},{"path":"/pages/mine/mine","meta":{"isQuit":true,"isTabBar":true},"window":{}},{"path":"/pages/readList/readList","meta":{},"window":{}},{"path":"/pages/listenNoval/listenNoval","meta":{},"window":{}},{"path":"/pages/listenMusic/listenMusic","meta":{},"window":{}},{"path":"/pages/listenKnowledge/listenKnowledge","meta":{},"window":{}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
__uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});
