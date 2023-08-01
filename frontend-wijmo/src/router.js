
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);


import CompanyManager from "./components/ui/CompanyGrid"

import SalesOrderManager from "./components/ui/SalesOrderGrid"


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
                path: '/salesOrders',
                name: 'SalesOrderManager',
                component: SalesOrderManager
            },


    ]
})
