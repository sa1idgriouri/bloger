/* eslint-disable import/first */
/* eslint-disable prettier/prettier */
import React, { Suspense } from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import { CContainer, CSpinner } from '@coreui/react'
const AllPost = React.lazy(() => import("../components/posts/AllPost"))
// routes config
import routes from '../routes'
import Dashboard from 'src/views/dashboard/Dashboard'

import AddPost from './posts/AddPost'
import AllCagegory from './categorys/AllCagegory'
import AddCategory from './categorys/AddCategory'
import { withRouter } from 'react-router-dom'
import EditCategory from './categorys/EditCategory'
import allComments from './comments/allComments'

const AppContent = () => {
  return (

    <CContainer lg>
      <Suspense fallback={<CSpinner color="primary" />}>
        <Switch>
          {/* {routes.map((route, idx) => {
            return (
              route.component && (
                <Route
                  key={idx}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  render={(props) => (
                    <>
                      <route.component {...props} />
                    </>
                  )}
                />
              )
            )
          })}
          <Redirect from="/" to="/dashboard" /> */}
          {/* <Route path="/dashboard" component={Dashboard} exact /> */}
          <Route path="/" component={Dashboard} exact />
          <Route exact path='/dashboard/posts' component={AllPost} />
          <Route path="/dashboard/post/add" component={AddPost} exact />
          <Route path="/dashboard/categorie" component={AllCagegory} exact />
          <Route path="/dashboard/comments" component={allComments} exact />
          <Route path="/dashboard/categorie/edit/:id" component={EditCategory} exact />



          <Route path="/dashboard/categorie/add" component={AddCategory} exact />


        </Switch>

      </Suspense>
    </CContainer>




  )
}

export default withRouter(AppContent) 
