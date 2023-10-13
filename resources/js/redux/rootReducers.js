import authenticateReducer from './Authenticate/reducer';
import {redirectTo, orderStatuses, deliveryWindows} from './Common/reducer'
import { customers, customer } from './Customer/reducer';
import { drivers, driver, driverSelect } from './Driver/reducer';
import { mealplans, mealplan, mealplanOptions } from './MealPlan/redux';
import { orderData, cart, orderSummary } from './Cart/redux'
import { orders, order } from './Order/redux'
import { deliveryZones, deliveryZone } from './DeliveryZone/reducer';
import {settings} from './Settings/redux'

// Include all the reducer to combine and provide to configure store.
export default {
    authenticateReducer,
    settings,
    redirectTo, orderStatuses, deliveryWindows,
    customers, customer,
    drivers, driver, driverSelect,
    mealplans, mealplan, mealplanOptions,
    orderData, cart, orderSummary,
    orders, order,
    deliveryZones, deliveryZone
}
