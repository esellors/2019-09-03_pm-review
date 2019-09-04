import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Landing from './components/Landing'
import Contact from './components/Contact'
import About from './components/About'
import Error404 from './components/Error404'

export default ( <Switch>
  <Route exact path='/' component={Landing} />
  <Route path='/contact' component={Contact} />
  <Route path='/about' component={About} />
  {/* <Route render={() => {
    return <h1>404 NOTHING TO SEE</h1>
  }} /> */}
  <Route component={Error404} />
</Switch>
)