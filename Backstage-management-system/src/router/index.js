import Vue from 'vue'
import Router from 'vue-router'
const _import = require('./_import_' + process.env.NODE_ENV)

Vue.use(Router)

/* Layout */
import Layout from '../views/layout/Layout'

export const constantRouterMap = [
  { path: '/login', component: _import('login/index'), hidden: true },
  { path: '/authredirect', component: _import('login/authredirect'), hidden: true },
  { path: '/404', component: _import('errorPage/404'), hidden: true },
  { path: '/401', component: _import('errorPage/401'), hidden: true },
  {
    path: '',
    component: Layout,
    redirect: 'dashboard',
    children: [{
      path: 'dashboard',
      component: _import('dashboard/index'),
      name: 'dashboard',
      meta: { title: 'dashboard', icon: 'shouye', noCache: true }
    }]
  }
]

export default new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})

export const asyncRouterMap = [
  {
    path: '/system',
    component: Layout,
    redirect: '/system/index',
    name: 'system',
    meta: {
      roles: ['admin'],
      icon: 'xitongshezhi',
      title: 'system'
    }, // you can set roles in root nav,
    children: [
      { path: 'organization', component: _import('system/organization'), name: 'organization', meta: { title: 'organization' }},
      { path: 'platformUser', component: _import('system/platformUser'), name: 'platformUser', meta: { title: 'platformUser' }},
      { path: 'competency', component: _import('system/competency'), name: 'competency', meta: { title: 'competency' }},
      { path: 'roles', component: _import('system/roles'), name: 'roles', meta: { title: 'roles' }},
      { path: 'dataBasic', component: _import('system/dataBasic'), name: 'dataBasic', meta: { title: 'dataBasic' }},
      { path: 'authentication', component: _import('system/authentication'), name: 'authentication', meta: { title: 'authentication' }},
      { path: 'organdeatils', component: _import('system/childrens/deatils'), hidden: true },
      { path: 'organedit', component: _import('system/childrens/edit'), hidden: true }
    ]
  },
  {
    path: '/customerManage',
    component: Layout,
    redirect: '/customerManage/index',
    meta: {
      roles: ['admin'],
      icon: 'qianye',
      title: 'customerManage'
    }, // you can set roles in root nav,
    children: [
      { path: 'dealerManage', component: _import('customerManage/dealerManage'), name: 'dealerManage', meta: { title: 'dealerManage' }},
      { path: 'companyManage', component: _import('customerManage/companyManage'), name: 'companyManage', meta: { title: 'companyManage' }},
      { path: 'customerList', component: _import('customerManage/customerList'), name: 'customerList', meta: { title: 'customerList' }},
      { path: 'vehicleList', component: _import('customerManage/vehicleList'), name: 'vehicleList', meta: { title: 'vehicleList' }}
    ]
  },
  // {
  //   path: '/rentBeforeManage',
  //   component: Layout,
  //   redirect: '/rentBeforeManage/index',
  //   meta: {
  //     roles: ['admin'],
  //     icon: 'zuqianliucheng',
  //     title: 'rentBeforeManage'
  //   }, // you can set roles in root nav,
  //   children: [
  //     { path: 'creditworthiness', component: _import('rentBeforeManage/creditworthiness'), name: 'creditworthiness', meta: { title: 'creditworthiness' }},
  //     { path: 'riskAssessment', component: _import('rentBeforeManage/riskAssessment'), name: 'riskAssessment', meta: { title: 'riskAssessment' }},
  //     { path: 'documentUpload', component: _import('rentBeforeManage/documentUpload'), name: 'documentUpload', meta: { title: 'documentUpload' }},
  //     { path: 'loanConfirm', component: _import('rentBeforeManage/loanConfirm'), name: 'loanConfirm', meta: { title: 'loanConfirm' }},
  //     { path: 'mortgageConfirm', component: _import('rentBeforeManage/mortgageConfirm'), name: 'mortgageConfirm', meta: { title: 'mortgageConfirm' }}
  //   ]
  // },
  // {
  //   path: '/rentOnManage',
  //   component: Layout,
  //   redirect: '/rentOnManage/index',
  //   name: 'jiaoyijilu',
  //   alwaysShow: true,
  //   meta: {
  //     roles: ['admin'],
  //     icon: 'jiaoyijilu',
  //     title: 'rentOnManage'
  //   }, // you can set roles in root nav,
  //   children: [
  //     { path: 'backVisitManage', component: _import('rentOnManage/backVisitManage'), name: 'backVisitManage', meta: { title: 'backVisitManage' }}
  //   ]
  // },
  // {
  //   path: '/repaymentManage',
  //   component: Layout,
  //   redirect: '/repaymentManage/index',
  //   meta: {
  //     roles: ['admin'],
  //     icon: 'jiaoyitongji',
  //     title: 'repaymentManage'
  //   }, // you can set roles in root nav,
  //   children: [
  //     { path: 'repaymentManage', component: _import('repaymentManage/repaymentManage'), name: 'repaymentManage', meta: { title: 'repaymentManage' }},
  //     { path: 'collectManage', component: _import('repaymentManage/collectManage'), name: 'collectManage', meta: { title: 'collectManage' }},
  //     { path: 'carCollectManage', component: _import('repaymentManage/carCollectManage'), name: 'carCollectManage', meta: { title: 'carCollectManage' }},
  //     { path: 'GPSMonitor', component: _import('repaymentManage/GPSMonitor'), name: 'GPSMonitor', meta: { title: 'GPSMonitor' }}
  //   ]
  // },
  // {
  //   path: '/statisticalAnalysis',
  //   component: Layout,
  //   redirect: '/statisticalAnalysis/index',
  //   meta: {
  //     roles: ['admin'],
  //     icon: 'fenxi',
  //     title: 'statisticalAnalysis'
  //   }, // you can set roles in root nav,
  //   children: [
  //     { path: 'customerStatistics', component: _import('statisticalAnalysis/customerStatistics'), name: 'customerStatistics', meta: { title: 'customerStatistics' }},
  //     { path: 'assetStatistics', component: _import('statisticalAnalysis/assetStatistics'), name: 'assetStatistics', meta: { title: 'assetStatistics' }}
  //   ]
  // },
  { path: '*', redirect: '/404', hidden: true }
]

