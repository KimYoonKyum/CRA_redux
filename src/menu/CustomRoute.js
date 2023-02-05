import React from 'react';
import { Route, useLocation} from 'react-router-dom'
import {MenuSchema} from './MenuSchema'

function CustomRoute() {
  const location = useLocation()
  const menu = MenuSchema
  const pathname = String(location.pathname)
  return (
    <Route path={pathname} component={menu[pathname].component} />
  )
}

export default CustomRoute;
