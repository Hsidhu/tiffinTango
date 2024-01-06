import authenticateReducer from './Authenticate/reducer';
import {siteSettings, siteName, redirectTo, cookieConsent, orderStatuses, deliveryWindows} from './Common/reducer'
import { locations, location } from './Location/reducer';
import { customers, customer } from './Customer/reducer';
import { drivers, driver, driverSelect } from './Driver/reducer';
import { mealplans, mealplan, mealplanSelectList, mealplanOptions } from './MealPlan/redux';
import { orderType, orderData, cart, orderSummary, selectedMealPlan, stepReducer } from './Cart/redux'
import { orders, order, dailyDeliveries, deliveryStickers } from './Order/redux'
import { deliveryZones, deliveryZone, deliveryZoneList } from './DeliveryZone/reducer';
import { mediaFiles } from './Media/redux';
import { settings } from './Settings/redux'

// Include all the reducer to combine and provide to configure store.
export default {
    authenticateReducer,
    siteSettings, siteName, settings, mediaFiles,
    redirectTo, orderStatuses, deliveryWindows, cookieConsent,
    locations, location,
    customers, customer,
    drivers, driver, driverSelect,
    mealplans, mealplan, mealplanOptions, mealplanSelectList,
    orderType, orderData, cart, orderSummary, selectedMealPlan, stepReducer,
    orders, order, dailyDeliveries, deliveryStickers,
    deliveryZones, deliveryZone, deliveryZoneList
}
