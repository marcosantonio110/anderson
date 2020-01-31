import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Producs from '~/pages/Producs'

const Routes = () => (
  <>
  <Switch>
    <Route exact path="/" component={Producs} />
  </Switch>
  </>
)

export default Routes
