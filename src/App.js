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
  const [query, setQuery] = useState("")

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`)

      setCharacters(result.data)
      setIsLoading(false)
      setSearchValue("")
    }

    fetchItems()
  }, [query])
  


  return (
    <div className="container">
      <Header />
      <Search searchValue={searchValue} setSearchValue={setSearchValue} query={query} setQuery={setQuery} />
      <CharacterGrid isLoading={isLoading} characters={characters}/>
    </div>
  );
}

export default App;
