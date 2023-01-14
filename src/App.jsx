import React from 'react';
import Header from './components/Header';
import Welcome from './components/Welcome';
import CardContent from './components/CardContent';
import Discount from './components/Discount';
import Membership from './components/Membership';
import AppsCom from './components/AppsCom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';



export default function App() {
  return(
        
        <div>
            <Navbar />
            <Header />
            <Welcome />
            <CardContent />
            <Discount />
            <Membership />
            <AppsCom/>
            <Footer/>
            
        </div>
  )
}



