import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { ROUTE_HOME, ROUTE_AXIOS } from '@constants/routes'
import Home from '@pages/Home'
import Axios from '@pages/Axios'

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path={ROUTE_AXIOS}>
          <Axios />
        </Route>
        <Route path={ROUTE_HOME}>
          <Home />
        </Route>
      </Switch>
    </Router>
  )
}
