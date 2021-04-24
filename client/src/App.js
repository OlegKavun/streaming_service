import s from './App.module.scss'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import { Switch, Route } from 'react-router-dom'
import AuthComponent from './components/Auth/AuthComponent'
import Home from './components/Home/Home'

function App() {
  return (
    <div className={s.app}>
        <Header />
        <div className={s.app__content}>
          <Switch>
            <Route exact path="/home" render={() => <Home />} />
            <Route path="/login" render={() => <AuthComponent form="login" />} />
            <Route path="/register" render={() => <AuthComponent form="register" />} />
          </Switch>
        </div>
        <Footer />
    </div>
  )
}

export default App
