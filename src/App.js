import { useState, useEffect } from 'react';
import './App.css'
import Header from './components/ui/Header'

const App = () => {
  const [characters, setCharacters] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  return (
    <div className="container">
     <Header />
    </div>
  );
}

export default App;
