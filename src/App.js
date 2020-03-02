import React from 'react';
import { Provider } from 'react-redux'
import store from './store'
import Header from './components/Header'
import Profile from './pages/Profile'
import Home from './pages/Home'
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";



const Layout = props => (
  <>
    <Header />
    {props.children}
  </>
)

const routes = [
  {
    path: '/',
    exact: true,
    main: () => <Layout>
      <Home />
    </Layout>
  },

  {
    path: '/profile',
    exact: true,
    main: () => <Layout>
      <Profile />
    </Layout>
  },

]


const getRoutes = () => {
  return routes.map((route, index) => {
    return <Route
      exact={route.exact}
      key={index}
      path={route.path}>
      {route.main}
    </Route>
  })
}

function App() {
  return <Provider store={store}>
    <Router>
      <Switch>
        {getRoutes()}
      </Switch>
    </Router>
  </Provider>
}

export default App;