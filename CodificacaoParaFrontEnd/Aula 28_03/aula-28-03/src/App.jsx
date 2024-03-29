import { Header } from './components/Header.jsx';
import { Home } from './components/Home.jsx';
import { Mission } from './components/Mission.jsx';
import { Products } from './components/Products.jsx';
import { History } from './components/History.jsx';
import { Contact } from './components/Contact.jsx';
import { Footer } from './components/Footer.jsx';
import { Routes, Route } from 'react-router-dom';
import './global.css';
import styles from './App.module.css';

export function App() {

  return (
        <div className={styles.content}>
          <Header />

          <Routes>
            <Route path='/' element={<Home pageName='HOME'/>} />
            <Route path='/mission' element={<Mission  pageName='MISSION'/>} />
            <Route path='/products' element={<Products  pageName='PRODUCTS'/>} />
            <Route path='/history' element={<History  pageName='HISTORY'/>} />
            <Route path='/contact' element={<Contact  pageName='CONTACT'/>} />
          </Routes>
          
          <Footer />
        </div>
  )
}