import { useState, useEffect } from 'react';
import axios from 'axios'
import './App.css'
import Header from './components/ui/Header'
import CharacterGrid from './components/characters/CharacterGrid';
import Search from './components/ui/Search';

const App = () => {
  const [characters, setCharacters] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [searchValue, setSearchValue] = useState("")

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(`https://www.breakingbadapi.com/api/characters?name=${searchValue}`)

      setCharacters(result.data)
      setIsLoading(false)
    }

    fetchItems()
  }, [searchValue])


  return (
    <div className="container">
      <Header />
      <Search setSearchValue={setSearchValue} />
      <CharacterGrid isLoading={isLoading} characters={characters}/>
    </div>
  );
}

export default App;
