import React from 'react';
import {HashRouter,Route,Link,Switch} from 'react-router-dom'
import Home from './containers/HomePage/home.js'
import Feature from './containers/FeaturePage/Feature.js'
import NotFoundPage from './containers/NotFoundPage.js'

const App = () => (
  <HashRouter>
    <ul>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/feature'>Feature</Link></li>
      <li><Link to='/ddddd'>404</Link></li>
      </ul>

      <Switch>
      <Route exact path='/' component={Home} />
      <Route  path='/feature' component={Feature} />
      <Route  path='*' component={NotFoundPage} />
      </Switch>
  </HashRouter>
)

export default App
