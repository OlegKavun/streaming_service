import React from 'react'
import { useSelector } from 'react-redux'
import { Switch, Route, Redirect } from 'react-router-dom'
import s from './App.module.scss'

import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import AuthComponent from './components/Auth/AuthComponent'
import Home from './components/Home/Home'

function App() {
  const isAuth = useSelector(state => state.auth.isAuth)
  return (
    <div className={s.app}>
        <Header />
        <div className={s.app__content}>
          {isAuth && <h2>Navigation</h2>}
          <Switch>
            {isAuth && <Route path="/menu" render={() => <h2>Menu</h2>} />} 
            <Route exact path="/home" render={() => <Home />} />
            <Route path="/login" render={() => <AuthComponent form="login" />} />
            <Route path="/register" render={() => <AuthComponent form="register" />} />
            <Redirect to="/home" />
          </Switch>
        </div>
        <Footer />
    </div>
  )
}

export default App
