import {combineReducers} from 'redux'
import homeReducer from './containers/HomePage/reducer.js'
import FeatureReducer from './containers/FeaturePage/reducer.js'

const appReducer = combineReducers({
	homeReducer,
	FeatureReducer
})
export default appReducer;