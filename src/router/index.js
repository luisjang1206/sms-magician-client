import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login'
import Dashboard from '../views/Dashboard'
import Bulk from '../views/Bulk'

const routes =[
	{
		path: '/',
		name: 'Login',
		component: Login,
	},
	{
		path: '/dashboard',
		name: 'Dashboard',
		component: Dashboard,
	},
	{
		path: '/bulk',
		name: 'Bulk',
		component: Bulk,
	},
]


const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
})

export default router