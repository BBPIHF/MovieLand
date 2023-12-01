
import { useEffect, useState } from "react"
import MovieCard from "./Components/MovieCard"

const API_URL = "http://www.omdbapi.com/?apikey=57b31838";


export default function App(){

    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    // const searchMovies = async (title) => {
    //     const response = await fetch(`${API_URL}&s=${title}`)
    //     const data = await response.json();
    //     setMovies(data.search)
    // }

const searchMovies = (title) =>{
    fetch(`${API_URL}&s=${title}`)
    .then((response)=>{
        return response.json()
    })
    .then((data)=>{
        setMovies(data.Search)
    })
}

    useEffect(()=>{
        searchMovies(searchTerm);
    }, [])







    return (
        <div className="app">
            <h1>MovieLand</h1>
            <div className="search">
                <input 
                placeholder="Search for moviews"
                value={searchTerm}
                onChange={(e)=>{setSearchTerm(e.target.value)}}
                />
                <img src="images/search_black_24dp.svg"
                alt="search"
                onClick={()=> searchMovies(searchTerm)}
                />
            </div>

            {
                movies?.length > 0
                ?(
                <div className="container">
                     {movies.map((movie)=>{
                      return  <MovieCard key={movie.imdbID} movie={movie}/>
                     })}
                </div>
                ) : 

                (
                    <div className="empty">
                        <h2>No movie found</h2>
                    </div>
                )
            }

        </div>
     
    )
}

