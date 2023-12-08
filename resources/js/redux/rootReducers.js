import authenticateReducer from './Authenticate/reducer';
import {siteSettings, redirectTo, cookieConsent, orderStatuses, deliveryWindows} from './Common/reducer'
import { locations, location } from './Location/reducer';
import { customers, customer } from './Customer/reducer';
import { drivers, driver, driverSelect } from './Driver/reducer';
import { mealplans, mealplan, mealplanOptions } from './MealPlan/redux';
import { orderType, orderData, cart, orderSummary, selectedMealPlan } from './Cart/redux'
import { orders, order, dailyDeliveries, deliveryStickers } from './Order/redux'
import { deliveryZones, deliveryZone, deliveryZoneList } from './DeliveryZone/reducer';
import { mediaFiles } from './Media/redux';
import { settings } from './Settings/redux'

// Include all the reducer to combine and provide to configure store.
export default {
    authenticateReducer,
    siteSettings, settings, mediaFiles,
    redirectTo, orderStatuses, deliveryWindows, cookieConsent,
    locations, location,
    customers, customer,
    drivers, driver, driverSelect,
    mealplans, mealplan, mealplanOptions,
    orderType, orderData, cart, orderSummary, selectedMealPlan,
    orders, order, dailyDeliveries, deliveryStickers,
    deliveryZones, deliveryZone, deliveryZoneList
}
