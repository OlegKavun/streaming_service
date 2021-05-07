import { createStore, combineReducers } from 'redux'
import { authReducer } from './authReducer'

const reducers = combineReducers({
  auth: authReducer
})

let store = createStore(reducers)

export default store