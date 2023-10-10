import authenticateReducer from './Authenticate/reducer';
import {errors} from './Common/reducer'
import { customers, customer } from './Customer/reducer';
import { drivers, driver } from './Driver/reducer';
import { mealplans, mealplan, mealplanOptions } from './MealPlan/redux';
import { orderData, cart, orderSummary } from './Cart/redux'
import { orders, order } from './Order/redux'
import {settings} from './Settings/redux'

//Include all the reducer to combine and provide to configure store.
export default {
    authenticateReducer,
    settings,
    errors,
    customers, customer,
    drivers, driver,
    mealplans, mealplan, mealplanOptions,
    orderData, cart, orderSummary,
    orders, order
}
