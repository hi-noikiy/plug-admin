webpackJsonp([1],{"1Tcb":function(t,a){},ebbN:function(t,a,e){"use strict";var n={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"navbar"},[e("Menu",{staticClass:"navbar",attrs:{mode:"horizontal",theme:"light"},on:{"on-select":t.changeRoute}},[e("div",{staticClass:"navbar-logo"},[e("a",{staticClass:"site-logo",attrs:{href:"#"}},[t._v("\n          腻歪游戏\n        ")])]),t._v(" "),e("div",{staticClass:"navbar-search"},[e("Input",{attrs:{placeholder:"搜索游戏服务",icon:"ios-search"},model:{value:t.navbarSearch,callback:function(a){t.navbarSearch=a},expression:"navbarSearch"}})],1),t._v(" "),e("div",{staticClass:"nav navbar-nav"},[0==t.$store.state.power?e("MenuItem",{attrs:{name:"/message"}},[e("Badge",{attrs:{dot:""}},[e("Icon",{attrs:{type:"chatbox"}}),t._v("\n            用户反馈\n          ")],1)],1):t._e(),t._v(" "),e("MenuItem",{attrs:{name:"/"}},[e("Avatar",{attrs:{src:"https://i.loli.net/2017/08/21/599a521472424.jpg"}}),t._v("\n          "+t._s(t.$store.state.userinfo.username)+"\n        ")],1),t._v(" "),e("MenuItem",{attrs:{name:"/login"}},[e("Icon",{attrs:{type:"log-out"}}),t._v("\n          退出\n        ")],1)],1)])],1)},staticRenderFns:[]};var s=e("VU/8")({name:"Navbar",data:function(){return{navbarSearch:""}},methods:{changeRoute:function(t){this.$router.push({path:t})}}},n,!1,function(t){e("sCwE")},"data-v-787a6ce3",null);a.a=s.exports},jIol:function(t,a){},sCwE:function(t,a){},"sRz/":function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=e("ebbN"),s={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"aside"},[e("Menu",{attrs:{theme:"light","active-name":t.$route.path},on:{"on-select":t.onSelectPath}},[e("MenuGroup",{attrs:{title:"概括"}},[e("MenuItem",{attrs:{name:"/"}},[e("Icon",{attrs:{type:"pie-graph"}}),t._v("\n          总览\n        ")],1)],1),t._v(" "),e("MenuGroup",{attrs:{title:"游戏列表"}},t._l(t.games,function(a){return e("MenuItem",{key:a.game_id,attrs:{name:/games/+a.game_id}},[e("Icon",{attrs:{type:"ios-game-controller-a"}}),t._v("\n          "+t._s(a.name)+"\n        ")],1)}))],1)],1)},staticRenderFns:[]},r=e("VU/8")({name:"Aside",data:function(){return{games:[{name:"海盗来了",game_id:"aosid029ke0f2129kd992kd",pic:""},{name:"海盗来了2",game_id:"afe0dae9fgea0e2fwfwf223",pic:""}]}},mounted:function(){this.$nextTick(function(){})},methods:{onSelectPath:function(t){this.$router.push({path:t})}}},s,!1,null,null,null).exports,i={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"viewmain"},[a("router-view")],1)},staticRenderFns:[]},o=e("VU/8")({name:"viewmain"},i,!1,null,null,null).exports,l={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"footbar"},[e("Row",{attrs:{gutter:30}},[e("Col",{attrs:{span:8}},[e("h3",{staticClass:"title"},[t._v("反馈建议")]),t._v(" "),e("Form",{attrs:{model:t.feelback,"label-width":60}},[e("FormItem",{attrs:{label:"邮箱"}},[e("Input",{attrs:{type:"email",placeholder:"example@qq.com"},model:{value:t.feelback.mail,callback:function(a){t.$set(t.feelback,"mail",a)},expression:"feelback.mail"}})],1),t._v(" "),e("FormItem",{attrs:{label:"内容"}},[e("Input",{attrs:{type:"textarea",placeholder:"请输入建议",rows:3},model:{value:t.feelback.content,callback:function(a){t.$set(t.feelback,"content",a)},expression:"feelback.content"}})],1),t._v(" "),e("FormItem",[e("Button",{attrs:{type:"primary"}},[t._v("提交")])],1)],1)],1),t._v(" "),e("Col",{staticClass:"about",attrs:{span:8}},[e("h3",{staticClass:"title"},[t._v("联系我们")]),t._v(" "),e("div",{staticClass:"content"},t._l(t.about,function(a){return e("Row",{key:a.email},[e("Col",{attrs:{span:8}},[t._v(t._s(a.name))]),t._v(" "),e("Col",{attrs:{span:16}},[t._v(t._s(a.email))])],1)}))]),t._v(" "),e("Col",{staticClass:"sponsor",attrs:{span:8}},[e("h3",{staticClass:"title"},[t._v("赞助 (使用微信扫一扫进行赞助)")]),t._v(" "),e("div",{staticClass:"content",attrs:{align:"center"}},[e("Row",{attrs:{gutter:15}},[e("Col",{attrs:{span:12}},[e("img",{attrs:{src:"https://login.weixin.qq.com/qrcode/4bj3upzHvg==",width:"70%",alt:""}}),t._v(" "),e("p",[t._v(t._s(t.about[0].name))])]),t._v(" "),e("Col",{attrs:{span:12}},[e("img",{attrs:{src:"https://login.weixin.qq.com/qrcode/4bj3upzHvg==",width:"70%",alt:""}}),t._v(" "),e("p",[t._v(t._s(t.about[1].name))])])],1)],1)])],1),t._v(" "),e("BackTop",{attrs:{height:150,bottom:50}},[e("div",{staticClass:"backtop"},[t._v("返回顶端")])])],1)},staticRenderFns:[]};var c=e("VU/8")({name:"footbar",data:function(){return{feelback:{email:"",content:""},about:[{email:"849989428@qq.com",name:"Maker·J"},{email:"485890556@qq.com",name:"Maker·K"}]}}},l,!1,function(t){e("jIol")},"data-v-1cd1259a",null).exports,u={name:"Main",components:{Navbar:n.a,Asidebar:r,Viewmain:o,FooterMain:c}},v={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"main"},[e("Navbar"),t._v(" "),e("section",{staticClass:"wrapper flex"},[e("Asidebar"),t._v(" "),e("transition",{attrs:{name:"fade"}},[e("Viewmain")],1)],1),t._v(" "),e("FooterMain")],1)},staticRenderFns:[]};var m=e("VU/8")(u,v,!1,function(t){e("1Tcb")},"data-v-5d81292c",null);a.default=m.exports}});
//# sourceMappingURL=1.ee131b723d68be17a272.js.map