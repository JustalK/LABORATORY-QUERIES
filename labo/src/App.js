import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import {
  ROUTE_HOME,
  ROUTE_AXIOS,
  ROUTE_SWR,
  ROUTE_RTK
} from '@constants/routes'
import Home from '@pages/Home'
import TestAxios from '@pages/TestAxios'
import TestSwr from '@pages/TestSwr'
import Rtk from '@pages/Rtk'

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path={ROUTE_AXIOS}>
          <TestAxios />
        </Route>
        <Route path={ROUTE_SWR}>
          <Rtk />
        </Route>
        <Route path={ROUTE_RTK}>
          <TestSwr />
        </Route>
        <Route path={ROUTE_HOME}>
          <Home />
        </Route>
      </Switch>
    </Router>
  )
}
