import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import logger from 'redux-logger'
import rootReducer from './rootReducers'
import rootSaga from './rootSaga';

export default function configureAppStore(preloadedState) {

    const sagaMiddleware = createSagaMiddleware();

    const store = configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => [
            ...getDefaultMiddleware({
                serializableCheck:false
            }).concat(logger), 
            sagaMiddleware
        ],
        preloadedState,
    })
    sagaMiddleware.run(rootSaga)

    if (process.env.NODE_ENV !== 'production' && module.hot) {
        module.hot.accept('redux/rootReducers', () => store.replaceReducer(rootReducer))
    }
    return store
}
