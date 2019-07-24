import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './App.css'
import React from 'react'
import { HashRouter } from 'react-router-dom'
//      BrowserRouter não contem #
import Routes from './Routes'

import Logo from '../components/template/Logo'
import Nav from '../components/template/Nav'
// importando o main ja vem o header, porque no main ja tem o header importado
// import Home from '../components/home/Home'
import Footer from '../components/template/Footer'


// Componente funcional, sem estado
export default props =>
    <HashRouter>
        <div className="app">
            <Logo />
            <Nav />
            {/* Main foi pro Home */}
            {/* <Home /> */}
            <Routes />
            <Footer />
        </div>

    </HashRouter>