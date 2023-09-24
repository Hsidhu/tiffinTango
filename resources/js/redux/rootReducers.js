import authenticateReducer from './Authenticate/reducer';
import {errors} from './Common/reducer'
import { customers, customer } from './Customer/reducer';
import { mealplans, mealplan, mealplanOptions } from './MealPlan/redux';

//Include all the reducer to combine and provide to configure store.
export default {
    authenticateReducer,
    errors,
    customers, customer,
    mealplans, mealplan, mealplanOptions
}
