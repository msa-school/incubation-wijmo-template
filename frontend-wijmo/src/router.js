
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);


import CompanyManager from "./grid/CompanyGrid"
import CompanyDetail from "./components/listers/CompanyDetail"

import SalesOrderManager from "./grid/SalesOrderGrid"
import SalesOrderDetail from "./components/listers/SalesOrderDetail"


export default new Router({
    // mode: 'history',
    base: process.env.BASE_URL,
    routes: [
            {
                path: '/companies',
                name: 'CompanyManager',
                component: CompanyManager
            },
            {
                path: '/companies/:id',
                name: 'CompanyDetail',
                component: CompanyDetail
            },

            {
                path: '/salesOrders',
                name: 'SalesOrderManager',
                component: SalesOrderManager
            },
            {
                path: '/salesOrders/:id',
                name: 'SalesOrderDetail',
                component: SalesOrderDetail
            },



    ]
})
