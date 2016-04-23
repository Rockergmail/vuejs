require.config({
	paths: {
		text: "../../text"
	}
});

require(['text!./component/App.vue','text!./component/Home.vue','text!./component/Nav.vue','text!./component/Shoutu.vue'], function(app,home,nav,shoutu){
	
	var App = Vue.extend(app);
	var Shoutu = Vue.extend(shoutu);
	var Home = Vue.extend(home);
	var Nav = Vue.extend(nav);

Vue.use(VueRouter);

var router = new VueRouter();

Vue.component('mynav', Nav);

router.map({
	'/': {
		component: Home
	},
	// '/tixian': {
	// 	component: Tixian
	// },
	'/shoutu': {
		component: Shoutu
	},
	// '/xianshi': {
	// 	component: Xianshi
	// },
	// '/shuangbei': {
	// 	component: Shuangbei
	// },
	// '/zhuanshu': {
	// 	component: Zhuanshu
	// }
});

// router.redirect({
// 	'*': '/'
// });

router.start(App, "#app");
	
});

