import style from './app.module.css';
import { Routes, Route, Link } from 'react-router-dom'
import  Contact  from './pages/contact/Contact';
import  Features  from './pages/features/Featurespage'
import  Home  from './pages/homepages/Homepages'

function App() {
  return (
    <body>
    <header>
      <div className={style.cover}>Cover</div>
      <div className={style.link_cont}>
        <div className={style.home}><Link className={style.home} to='/'>Home</Link></div>
        <div className={style.features}><Link className={style.features} to='/features'>Features</Link></div>
        <div className={style.contact}><Link className={style.contact} to='/contact'>Contact</Link></div>
      </div>
    </header>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/features' element={<Features />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>
    </body>
  );
}

export default App;
