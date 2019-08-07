import NotFound from './views/404.vue'
import Login from './views/Login.vue'
import Home from './views/Home.vue'
import Main from './views/Main.vue'

let routes = [
    {
        path: '/login',
        component: Login,
        // component:  () => import('./views/Login.vue'),
        name: '',
        hidden: true
    },
    {
        path: '/404',
        component: NotFound,
        name: '',
        hidden: true
    },
    //{ path: '/main', component: Main },
    {
        path: '/',
        component: Home,
        name: '导航一',
        iconCls: 'ios-home', //图标样式class
        children: [
            { path: '/main', component: Main, name: '主页', hidden: true },
            { path: '/table', component:  () => import('./views/Page1/index.vue'), name: '表格' },
            { path: '/form', component:  () => import('./views/Page2/index.vue'), name: '表单' },
            { path: '/user', component:  () => import('./views/Page3/index.vue'), name: '列表' },
        ]
    },
    {
        path: '/',
        component: Home,
        name: '导航二',
        iconCls: 'ios-paw',
        children: [
            { path: '/page4', component:  () => import('./views/Page4/index.vue'), name: '页面4' },
            { path: '/page5', component:  () => import('./views/Page5/index.vue'), name: '页面5' },
            { path: '/page7', component:  () => import('./views/Page6/index.vue'), name: '页面7' },
            { path: '/page8', component:  () => import('./views/Page7/index.vue'), name: '页面8' }
        ]
    },
    {
        path: '/',
        component: Home,
        name: '导航三',
        iconCls: 'logo-freebsd-devil',
        // leaf: true, //只有一个节点
        children: [
            { path: '/page6', component:  () => import('./views/Page8/index.vue'), name: '页面6' },
            { path: '/map', component:  () => import('./views/Page9/index.vue'), name: '地图' },
            { path: '/layout', component:  () => import('./views/Page10/index.vue'), name: '布局' },
        ]
    },
    {
        path: '/',
        component: Home,
        name: '导航四',
        iconCls: 'md-browsers',
        children: [

        ]
    },
    {
        path: '*',
        hidden: true,
        redirect: { path: '/404' }
    }
];

export default routes;