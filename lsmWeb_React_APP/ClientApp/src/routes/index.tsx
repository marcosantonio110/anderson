import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Producs from '~/pages/Producs'
import CostCenter from '~/pages/CostCenter'
import PerformerSectorRegister from '~/pages/PerformerSectorRegister'
import CompanyRegistration from '~/pages/CompanyRegistration'
import ApplicationLocationRegistration from '~/pages/ApplicationLocationRegistration'

const Routes = () => (
  <>
  <Switch>
    <Route exact path="/" component={Producs} />
    <Route  path="/costcenter" component={CostCenter} />
    <Route  path="/performersectorregister" component={PerformerSectorRegister} />
    <Route  path="/companyregistration" component={CompanyRegistration} />
    <Route  path="/applicationlocationregistration" component={ApplicationLocationRegistration} />
  </Switch>
  </>
)

export default Routes
