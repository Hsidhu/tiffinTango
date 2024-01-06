import { lazy } from 'react';

export const publicRouteList = [
    {
        path: '',
        title:'Home page',
        component: lazy(() => import('../pages/home')),
        exact: true,
    },
    {
        path: 'order/mealplan',
        title:'MealPlan',
        component: lazy(() => import('../pages/orderMealPlan')),
        exact: true,
    },
    {
        path: 'order/catering',
        component: lazy(() => import('../pages/Catering')),
        title:'Catering',
        exact: true,
    },
    {
        path: 'order/takeout',
        component: lazy(() => import('../pages/Takeout')),
        title:'Takeout',
        exact: true,
    },
    {
        path: 'terms-and-conditions',
        component: lazy(() => import('../pages/Terms')),
        title:'Terms and Conditions',
        exact: true,
    },
    {
        path: 'policies',
        component: lazy(() => import('../pages/Policy')),
        title:'Policies',
        exact: true,
    },
    {
        path: 'about-us',
        component: lazy(() => import('../pages/About')),
        title:'About Us',
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
        path: 'admin/login',
        component: lazy(() => import('../pages/Auth/Login')),
        exact: true,
    },
    {
        path: 'customer/login',
        component: lazy(() => import('../pages/Auth/Login')),
        exact: true,
    },
    {
        path: 'registration',
        component: lazy(() => import('../pages/Auth/Registration')),
        exact: true,
    } 
]

export const adminRouteList = [
    {
        path: 'dashboard',
        component: lazy(() => import('../pages/Admin/Dashboard')),
        title:'Admin Dashboard',
        exact: true,
    },
    {
        path: 'orders',
        component: lazy(() => import('../pages/Admin/Order/index')),
        title:'Orders',
        exact: true,
    },
    {
        path: 'order/view/:id',
        component: lazy(() => import('../pages/Admin/Order/view')),
        title:'Order View',
        exact: true,
    },
    {
        path: 'order/sticker_view',
        component: lazy(() => import('../pages/Admin/Order/StickerView')),
        title:'Order Sticker View',
        exact: true,
    },
    {
        path: 'order/generateDeliveries',
        component: lazy(() => import('../pages/Admin/Order/GenerateDeliveries')),
        title:'Generate Deliveries',
        exact: true,
    },
    {
        path: 'order/MapViewOfRoute',
        component: lazy(() => import('../pages/Admin/Order/MapViewOfRoute')),
        title:'MapViewOfRoute',
        exact: true,
    },
    {
        path: 'locations',
        component: lazy(() => import('../pages/Admin/Location/index')),
        title:'Locations',
        exact: true,
    },
    {
        path: 'location/create',
        component: lazy(() => import('../pages/Admin/Location/create')),
        title:'Location Create',
        exact: true,
    },
    {
        path: 'location/edit/:id',
        component: lazy(() => import('../pages/Admin/Location/edit')),
        title:'Location Edit',
        exact: true,
    },
    {
        path: 'customers',
        component: lazy(() => import('../pages/Admin/Customer/index')),
        title:'Customers',
        exact: true,
    },
    {
        path: 'customer/create',
        component: lazy(() => import('../pages/Admin/Customer/create')),
        title:'Customer Create',
        exact: true,
    },
    {
        path: 'customer/view/:id',
        component: lazy(() => import('../pages/Admin/Customer/view')),
        title:'Customer View',
        exact: true,
    },
    {
        path: 'customer/edit/:id',
        component: lazy(() => import('../pages/Admin/Customer/edit')),
        title:'Customer Edit',
        exact: true,
    },
    {
        path: 'customer/createOrder/:id',
        component: lazy(() => import('../pages/Admin/Customer/createOrder')),
        title:'Create Customer Order',
        exact: true,
    },
    {
        path: 'mealplans',
        component: lazy(() => import('../pages/Admin/MealPlan/index')),
        title:'MealPlans',
        exact: true,
    },
    {
        path: 'mealplan/create',
        component: lazy(() => import('../pages/Admin/MealPlan/create')),
        title:'MealPlan Create',
        exact: true,
    },
    {
        path: 'mealplan/edit/:id',
        component: lazy(() => import('../pages/Admin/MealPlan/edit')),
        title:'MealPlan Edit',
        exact: true,
    },
    {
        path: 'mealplan/createOptions',
        component: lazy(() => import('../pages/Admin/MealPlan/CreateOptions')),
        title:'MealPlan Create Options',
        exact: true,
    },
    {
        path: 'drivers',
        component: lazy(() => import('../pages/Admin/Driver/index')),
        title:'Drivers',
        exact: true,
    },
    {
        path: 'driver/create',
        component: lazy(() => import('../pages/Admin/Driver/create')),
        title:'Driver Create',
        exact: true,
    },
    {
        path: 'driver/view/:id',
        component: lazy(() => import('../pages/Admin/Driver/view')),
        title:'Driver View',
        exact: true,
    },
    {
        path: 'driver/edit/:id',
        component: lazy(() => import('../pages/Admin/Driver/edit')),
        title:'Driver Edit',
        exact: true,
    },
    {
        path: 'driver/workForm/:id',
        component: lazy(() => import('../pages/Admin/Driver/workForm')),
        title:'Driver Work Setup',
        exact: true,
    },
    {
        path: 'delivery_zones',
        component: lazy(() => import('../pages/Admin/DeliveryZone/index')),
        title:'Delivery Zones',
        exact: true,
    },
    {
        path: 'delivery_zone/create',
        component: lazy(() => import('../pages/Admin/DeliveryZone/create')),
        title:'Delivery Zones Create',
        exact: true,
    },
    {
        path: 'delivery_zone/edit/:id',
        component: lazy(() => import('../pages/Admin/DeliveryZone/edit')),
        title:'Delivery Zones Edit',
        exact: true,
    },
    {
        path: 'marketing',
        component: lazy(() => import('../pages/Admin/Marketing/index')),
        title:'Marketing',
        exact: true,
    },
    {
        path: 'settings',
        component: lazy(() => import('../pages/Admin/settings')),
        title:'Settings',
        exact: true,
    },
    {
        path: 'media',
        component: lazy(() => import('../pages/Admin/Media/index')),
        title:'Media',
        exact: true,
    },
    {
        path: 'profile',
        component: lazy(() => import('../pages/Profile/view')),
        title:'Profile',
        exact: true,
    }
]

export const customerRouteList = [
    {
        path: 'dashboard',
        component: lazy(() => import('../pages/Customer/Dashboard')),
        exact: true,
    },
    {
        path: 'orders',
        component: lazy(() => import('../pages/Customer/Order/index')),
        exact: true,
    },
    {
        path: 'order/view/:id',
        component: lazy(() => import('../pages/Customer/Order/view')),
        exact: true,
    },
    {
        path: 'profile',
        component: lazy(() => import('../pages/Profile/view')),
        title:'Profile',
        exact: true,
    }
];


