import { lazy } from 'react';

export const publicRouteList = [
    {
        path: '',
        name:'home',
        component: lazy(() => import('../pages/home')),
        exact: true,
    },
    {
        path: 'order/mealplan',
        component: lazy(() => import('../pages/orderMealPlan')),
        exact: true,
    }
]

export const authRouteList = [
    {
        path: 'login',
        component: lazy(() => import('../pages/Auth/Login')),
        exact: true,
    },
    {
        path: 'registration',
        component: lazy(() => import('../pages/Auth/Registration')),
        exact: true,
    } 
]

export const privateRouteList = [
    {
        path: 'admin/dashboard',
        component: lazy(() => import('../pages/Admin/Dashboard')),
        exact: true,
    },
    {
        path: 'admin/orders',
        component: lazy(() => import('../pages/Admin/Order/index')),
        exact: true,
    },
    {
        path: 'admin/order/view/:id',
        component: lazy(() => import('../pages/Admin/Order/view')),
        exact: true,
    },
    {
        path: 'admin/order/sticker_view',
        component: lazy(() => import('../pages/Admin/Order/StickerView')),
        exact: true,
    },
    {
        path: 'admin/locations',
        component: lazy(() => import('../pages/Admin/Location/index')),
        exact: true,
    },
    {
        path: 'admin/location/create',
        component: lazy(() => import('../pages/Admin/Location/create')),
        exact: true,
    },
    {
        path: 'admin/location/edit/:id',
        component: lazy(() => import('../pages/Admin/Location/edit')),
        exact: true,
    },
    {
        path: 'admin/customers',
        component: lazy(() => import('../pages/Admin/Customer/index')),
        exact: true,
    },
    {
        path: 'admin/customer/create',
        component: lazy(() => import('../pages/Admin/Customer/create')),
        exact: true,
    },
    {
        path: 'admin/customer/edit/:id',
        component: lazy(() => import('../pages/Admin/Customer/edit')),
        exact: true,
    },
    {
        path: 'admin/mealplans',
        component: lazy(() => import('../pages/Admin/MealPlan/index')),
        exact: true,
    },
    {
        path: 'admin/mealplan/create',
        component: lazy(() => import('../pages/Admin/MealPlan/create')),
        exact: true,
    },
    {
        path: 'admin/mealplan/edit/:id',
        component: lazy(() => import('../pages/Admin/MealPlan/edit')),
        exact: true,
    },
    {
        path: 'admin/drivers',
        component: lazy(() => import('../pages/Admin/Driver/index')),
        exact: true,
    },
    {
        path: 'admin/driver/create',
        component: lazy(() => import('../pages/Admin/Driver/create')),
        exact: true,
    },
    {
        path: 'admin/driver/edit/:id',
        component: lazy(() => import('../pages/Admin/Driver/edit')),
        exact: true,
    },
    {
        path: 'admin/delivery_zones',
        component: lazy(() => import('../pages/Admin/DeliveryZone/index')),
        exact: true,
    },
    {
        path: 'admin/delivery_zone/create',
        component: lazy(() => import('../pages/Admin/DeliveryZone/create')),
        exact: true,
    },
    {
        path: 'admin/delivery_zone/edit/:id',
        component: lazy(() => import('../pages/Admin/DeliveryZone/edit')),
        exact: true,
    },
    {
        path: 'admin/settings',
        component: lazy(() => import('../pages/Admin/settings')),
        exact: true,
    }
]
