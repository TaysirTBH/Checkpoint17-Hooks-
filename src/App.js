import React, {useState} from 'react';
import './style.css';
import MovieList from './components/MovieList';
import movies from './MovieData';
import Filter  from './components/Filter';
import AddMovie from './components/AddMovie';


function App() {
  // eslint-disable-next-line
  const [movieList, setmovieList] = useState(movies);
  const [searchInput, setSearchInput] = useState("")
  const [searchRate, setSearchRate] = useState(1)
  

  const handleSearchInput=(e) => {
      setSearchInput(e.target.value)
  }
  const handleSearchRate=(value)=>{
      setSearchRate(value);
  }
  const handleAdd = (newMovie) => {
    setmovieList([...movieList,newMovie])
  }

  return (
    <div className="App">
      <header>
        <h1>Movie Application</h1> 
      </header>
      <main className="App-movie">
        <Filter  handleSearchInput={handleSearchInput} handleSearchRate={handleSearchRate} />
        <MovieList movies={movieList.filter((movie) =>
                          movie.title.toLowerCase().includes(searchInput)&& 
                          movie.rate>=searchRate)} 
         handleSearchInput={handleSearchInput} 
         handleSearchRate={handleSearchRate}
        />
        <AddMovie handleAdd= {handleAdd} />
      </main>

    </div>
  );
}

export default App;
