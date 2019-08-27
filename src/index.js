import React from 'react'
import { render } from 'react-dom'
import App from './App'
import {Provider} from 'react-redux'
import appReducer from './appReducer.js'
import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
// import homeSaga from './containers/HomePage/saga.js'
import {createStore,applyMiddleware} from 'redux'

// const sagaMiddleware = createSagaMiddleware();
let store = createStore(appReducer,applyMiddleware(thunk));
// sagaMiddleware.run(homeSaga)

render(
	<Provider store={store}>
    	<App />,
    </Provider>,
    document.getElementById('App')
)
