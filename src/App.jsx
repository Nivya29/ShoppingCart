import { useState } from 'react';
import Nav from './components/Nav'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import './App.css'



function App() {
  const [cartCount, setCartCount] = useState(0);

  const addToCart = () => {
    setCartCount(prevCount => prevCount + 1);
  };

  const removeFromCart = () => {
    setCartCount(prevCount => Math.max(prevCount - 1, 0)); 
  };
    
  return(
    
     <div className='container-fluid'>
     <Nav cartCount={cartCount}/>
     <Header />
     <Main addToCart={addToCart} removeFromCart={removeFromCart}/>
     <Footer />
     
     
    </div>
    


  );


}

export default App
