import { combineReducers, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import userReducer from './user/userSlice.js';
import adminSlice from "./admin/adminSlice.js";
import {persistReducer,persistStore} from 'redux-persist'
import storage from 'redux-persist/lib/storage'




const rootReducer = combineReducers({
  user:userReducer,
  admin:adminSlice
})
const persistConfig = {
  key:'root',
  version:1,
  storage
}
const persistedReducer = persistReducer(persistConfig,rootReducer)
console.log('presisitReducer',persistReducer);
export const store = configureStore({
  reducer:persistedReducer,
  middleware:(getDefaultMiddleware)=>getDefaultMiddleware({
    serializableCheck:false
  })

})

console.log(store);
export const persistor = persistStore(store)