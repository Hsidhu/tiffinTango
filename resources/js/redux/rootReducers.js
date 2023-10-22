import authenticateReducer from './Authenticate/reducer';
import {redirectTo, cookieConsent, orderStatuses, deliveryWindows} from './Common/reducer'
import { locations, location } from './Location/reducer';
import { customers, customer } from './Customer/reducer';
import { drivers, driver, driverSelect } from './Driver/reducer';
import { mealplans, mealplan, mealplanOptions } from './MealPlan/redux';
import { orderData, cart, orderSummary, selectedMealPlan } from './Cart/redux'
import { orders, order } from './Order/redux'
import { deliveryZones, deliveryZone } from './DeliveryZone/reducer';
import { settings } from './Settings/redux'

// Include all the reducer to combine and provide to configure store.
export default {
    authenticateReducer,
    settings,
    redirectTo, orderStatuses, deliveryWindows, cookieConsent,
    locations, location,
    customers, customer,
    drivers, driver, driverSelect,
    mealplans, mealplan, mealplanOptions,
    orderData, cart, orderSummary, selectedMealPlan,
    orders, order,
    deliveryZones, deliveryZone
}
