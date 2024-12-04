import React from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import CardList from './Components/CardList'
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Components/Footer';
import CapitalRaiseSection from './Components/CapitalRais3eSection';
import InvestorSection from './Components/Investorsection';

function App() {
  return (
    <>
      <Navbar />
      <CardList />
      <InvestorSection />
      <CapitalRaiseSection />
      <Footer />

    </>
  )
}

export default App 
