webpackJsonp([1],{"1Tcb":function(t,e){},ebbN:function(t,e,a){"use strict";var n={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"navbar"},[a("Menu",{staticClass:"navbar",attrs:{mode:"horizontal",theme:"light"},on:{"on-select":t.changeRoute}},[a("div",{staticClass:"navbar-logo"},[a("router-link",{staticClass:"site-logo",attrs:{to:"/"}},[t._v("\n          腻歪游戏\n        ")])],1),t._v(" "),a("div",{staticClass:"navbar-search"},[a("Input",{attrs:{placeholder:"搜索游戏服务",icon:"ios-search"},model:{value:t.navbarSearch,callback:function(e){t.navbarSearch=e},expression:"navbarSearch"}})],1),t._v(" "),a("div",{staticClass:"nav navbar-nav"},[0==t.$store.state.power?a("MenuItem",{attrs:{name:"/message"}},[a("Badge",{attrs:{dot:""}},[a("Icon",{attrs:{type:"chatbox"}}),t._v("\n            用户反馈\n          ")],1)],1):t._e(),t._v(" "),a("MenuItem",{attrs:{name:"/"}},[a("Avatar",{attrs:{src:"https://i.loli.net/2017/08/21/599a521472424.jpg"}}),t._v("\n          "+t._s(t.$store.state.userinfo.username)+"\n        ")],1),t._v(" "),a("MenuItem",{attrs:{name:"/login"}},[a("Icon",{attrs:{type:"log-out"}}),t._v("\n          退出\n        ")],1)],1)])],1)},staticRenderFns:[]};var s=a("VU/8")({name:"Navbar",data:function(){return{navbarSearch:""}},methods:{changeRoute:function(t){this.$router.push({path:t})}}},n,!1,function(t){a("vmnL")},"data-v-1f8023c8",null);e.a=s.exports},jIol:function(t,e){},"sRz/":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("ebbN"),s={name:"Aside",data:function(){return{games:[{name:"海盗来了",game_id:1,pic:""},{name:"海盗来了2",game_id:2,pic:""}]}},mounted:function(){var t=this;this.$nextTick(function(){console.log(t.$route.path)})},methods:{onSelectPath:function(t){this.$router.push({path:t})}}},r={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"aside"},[a("Menu",{attrs:{"active-name":t.$route.path,theme:"light"},on:{"on-select":t.onSelectPath}},[a("MenuGroup",{attrs:{title:"概括"}},[a("MenuItem",{attrs:{name:"/"}},[a("Icon",{attrs:{type:"pie-graph"}}),t._v("\n          总览\n        ")],1)],1),t._v(" "),a("MenuGroup",{attrs:{title:"游戏列表"}},t._l(t.games,function(e){return a("MenuItem",{key:e.game_id,attrs:{name:/games/+e.game_id}},[a("Icon",{attrs:{type:"ios-game-controller-a"}}),t._v("\n          "+t._s(e.name)+"\n        ")],1)})),t._v(" "),0==t.$store.state.power?a("MenuGroup",{attrs:{title:"游戏账号"}},[a("MenuItem",{attrs:{name:"/game-acounts"}},[a("Icon",{attrs:{type:"users"}}),t._v("\n          辅助账号\n        ")],1)],1):t._e()],1)],1)},staticRenderFns:[]},o=a("VU/8")(s,r,!1,null,null,null).exports,i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"viewmain"},[e("router-view")],1)},staticRenderFns:[]},l=a("VU/8")({name:"viewmain"},i,!1,null,null,null).exports,c={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"footbar"},[a("Row",{attrs:{gutter:30}},[a("Col",{attrs:{span:8}},[a("h3",{staticClass:"title"},[t._v("反馈建议")]),t._v(" "),a("Form",{attrs:{model:t.feelback,"label-width":60}},[a("FormItem",{attrs:{label:"邮箱"}},[a("Input",{attrs:{type:"email",placeholder:"example@qq.com"},model:{value:t.feelback.mail,callback:function(e){t.$set(t.feelback,"mail",e)},expression:"feelback.mail"}})],1),t._v(" "),a("FormItem",{attrs:{label:"内容"}},[a("Input",{attrs:{type:"textarea",placeholder:"请输入建议",rows:3},model:{value:t.feelback.content,callback:function(e){t.$set(t.feelback,"content",e)},expression:"feelback.content"}})],1),t._v(" "),a("FormItem",[a("Button",{attrs:{type:"primary"}},[t._v("提交")])],1)],1)],1),t._v(" "),a("Col",{staticClass:"about",attrs:{span:8}},[a("h3",{staticClass:"title"},[t._v("联系我们")]),t._v(" "),a("div",{staticClass:"content"},t._l(t.about,function(e){return a("Row",{key:e.email},[a("Col",{attrs:{span:8}},[t._v(t._s(e.name))]),t._v(" "),a("Col",{attrs:{span:16}},[t._v(t._s(e.email))])],1)}))]),t._v(" "),a("Col",{staticClass:"sponsor",attrs:{span:8}},[a("h3",{staticClass:"title"},[t._v("赞助 (使用微信扫一扫进行赞助)")]),t._v(" "),a("div",{staticClass:"content",attrs:{align:"center"}},[a("Row",{attrs:{gutter:15}},[a("Col",{attrs:{span:12}},[a("img",{attrs:{src:"https://login.weixin.qq.com/qrcode/4bj3upzHvg==",width:"70%",alt:""}}),t._v(" "),a("p",[t._v(t._s(t.about[0].name))])]),t._v(" "),a("Col",{attrs:{span:12}},[a("img",{attrs:{src:"https://login.weixin.qq.com/qrcode/4bj3upzHvg==",width:"70%",alt:""}}),t._v(" "),a("p",[t._v(t._s(t.about[1].name))])])],1)],1)])],1),t._v(" "),a("BackTop",{attrs:{height:150,bottom:50}},[a("div",{staticClass:"backtop"},[t._v("返回顶端")])])],1)},staticRenderFns:[]};var u=a("VU/8")({name:"footbar",data:function(){return{feelback:{email:"",content:""},about:[{email:"849989428@qq.com",name:"Maker·J"},{email:"485890556@qq.com",name:"Maker·K"}]}}},c,!1,function(t){a("jIol")},"data-v-1cd1259a",null).exports,v={name:"Main",components:{Navbar:n.a,Asidebar:o,Viewmain:l,FooterMain:u}},m={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main"},[a("Navbar"),t._v(" "),a("section",{staticClass:"wrapper flex"},[a("Asidebar"),t._v(" "),a("transition",{attrs:{name:"fade"}},[a("Viewmain")],1)],1),t._v(" "),a("FooterMain")],1)},staticRenderFns:[]};var p=a("VU/8")(v,m,!1,function(t){a("1Tcb")},"data-v-5d81292c",null);e.default=p.exports},vmnL:function(t,e){}});
//# sourceMappingURL=1.3d1f15839288d1c1fe12.js.map