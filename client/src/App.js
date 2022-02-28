/* eslint-disable prettier/prettier */
import React, { Component } from 'react'
// import { HashRouter, Route, Switch } from 'react-router-dom'
import './scss/style.scss'

import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css"
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'



import { Provider } from 'react-redux';
import store from './store/store'

import Router from './router/Router';

// const loading = (
//   <div className="pt-3 text-center">
//     <div className="sk-spinner sk-spinner-pulse"></div>
//   </div>
// )

// // Containers
// const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'))

// // Pages
// const Login = React.lazy(() => import('./views/pages/login/Login'))
// const Register = React.lazy(() => import('./views/pages/register/Register'))
// const Page404 = React.lazy(() => import('./views/pages/page404/Page404'))
// const Page500 = React.lazy(() => import('./views/pages/page500/Page500'))

class App extends Component {
  render() {
    return (
      <Provider store={store}>

        <Router />

        {/* <HashRouter>
          <React.Suspense fallback={loading}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/category/:slug" component={Categorys} />
              <Route exact path="/post/:id" component={DeatilsPost} />


              <Route exact path="/login" name="Login Page" render={(props) => <Login {...props} />} />
              <Route
                exact
                path="/register"
                name="Register Page"
                render={(props) => <Register {...props} />}
              />

              <Route exact path="/404" name="Page 404" render={(props) => <Page404 {...props} />} />
              <Route exact path="/500" name="Page 500" render={(props) => <Page500 {...props} />} />
              <Route path="/dashboard" name="Home" render={(props) => <DefaultLayout {...props} />} />
              

            </Switch>
          </React.Suspense>
        </HashRouter> */}
      </Provider>
    )
  }
}

export default App
