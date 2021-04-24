import s from './App.module.scss'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'

function App() {
  return (
    <div className={s.app}>
        <Header />
        <div className={s.app__content}></div>
        <Footer />
    </div>
  )
}

export default App
