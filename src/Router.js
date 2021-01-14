import React, { Suspense, lazy } from "react"
import { Router, Switch, Route } from "react-router-dom"
import { history } from "./history"
import { connect } from "react-redux"
import Spinner from "./components/@vuexy/spinner/Loading-spinner"
import { ContextLayout } from "./utility/context/Layout"

// Route-based code splitting
const Home = lazy(() =>
  import("./views/pages/Home")
)

const login = lazy(() =>
  import("./views/pages/authentication/login/Login")
)

//importing school pages
const SchoolInformation = lazy(() =>
  import("./views/pages/school/SchoolInformation")
)

const SchoolList = lazy(() =>
  import("./views/pages/school/SchoolList")
)

const SchoolDetails = lazy(() =>
  import("./views/pages/school/SchoolDetails")
)

//importing student pages

const StudentAccount = lazy(() =>
  import("./views/pages/student/StudentAccount")
)


// Set Layout and Component Using App Route
const RouteConfig = ({
  component: Component,
  fullLayout,
  permission,
  user,
  ...rest
}) => (
  <Route
    {...rest}
    render={props => {
      return (
        <ContextLayout.Consumer>
          {context => {
            let LayoutTag =
              fullLayout === true
                ? context.fullLayout
                : context.state.activeLayout === "horizontal"
                ? context.horizontalLayout
                : context.VerticalLayout
              return (
                <LayoutTag {...props} permission={props.user}>
                  <Suspense fallback={<Spinner />}>
                    <Component {...props} />
                  </Suspense>
                </LayoutTag>
              )
          }}
        </ContextLayout.Consumer>
      )
    }}
  />
)
const mapStateToProps = state => {
  return {
    user: state.auth.login.userRole
  }
}

const AppRoute = connect(mapStateToProps)(RouteConfig)

class AppRouter extends React.Component {
  render() {
    return (
      // Set the directory path if you are deploying in sub-folder
      <Router history={history}>
        <Switch>
          <AppRoute
            exact
            path="/"
            component={Home}
          />

          <AppRoute 

          path="/SchoolInformation"
          component={SchoolInformation}
          
          />

          <AppRoute 

          path="/SchoolList"
          component={SchoolList}

          />

          <AppRoute 

          path="/SchoolDetails"
          component={SchoolDetails}

          />

          <AppRoute 

          path="/StudentAccount"
          component={StudentAccount}

          />
                  
          <AppRoute
            path="/pages/login"
            component={login}
            fullLayout
          />
        </Switch>
      </Router>
    )
  }
}

export default AppRouter
