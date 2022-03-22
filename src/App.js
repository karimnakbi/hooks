import React, { useEffect, useState } from "react";
import Movie from "./Components/movie";
import Form from "./Components/Form";
import StarRatingComponent from "react-star-rating-component";



const Featured_API = `https://api.themoviedb.org/3/discover/movie/?sort_by-popularity.desc&api_key=bb9382ec6edd4e019c6678384b4a8a24&language=en-US`;

const search_api =
  "https://api.themoviedb.org/3/search/movie?&api_key=bb9382ec6edd4e019c6678384b4a8a24&query=";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTearm] = useState("");
  const [show, setShow] = useState(false);

  const [film, setFilm] = useState({
    title: "",
    poster_path: "",
    vote_average: "",
    overview: "",
    token: "",
  });

  useEffect(() => {
    fetch(Featured_API)
      .then((response, rej) => {
        // console.log(response.json());
        return response.json();
      })
      .then((data) => {
        return setMovies(data.results);
      });
  }, []);

  const handleOnSubmit = (e) => {
    e.preventDefault();

    fetch(search_api + searchTerm)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data.results)
        return setMovies(data.results);
      });
  };

  const handleOnChange = (e) => {
    setSearchTearm(e.target.value);
  };

  const showForm = () => {
    setShow(true);
  };

  const changeState = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFilm({ ...film, [name]: value });
  };

  const submitForm = (e) => {
    e.preventDefault();
    const { title, poster_path, vote_average, overview, token } = film;
    if (title && poster_path && vote_average && overview && token) {
      setMovies([...movies, film]);
      setFilm({
        title: "",
        poster_path: "",
        vote_average: "",
        overview: "",
        token: "",
      });
    } else {
      alert("please fill out all the fields");
    }
  };

  return (
    <div className="movie-container">
      <header>
        <button onClick={showForm}>Add a Movie</button>
        <div className="flexy">
          <form onSubmit={handleOnSubmit}>
            <input
              className="search"
              type="search"
              placeholder="Search..."
              value={searchTerm}
              onChange={handleOnChange}
              name=""
              id=""
            />
          </form>
          <StarRatingComponent className='stars' name="rate" value={1} starCount={5} />
        </div>
      </header>
      <main className={show ? "hide" : 'null'}>
        {movies.filter(movie=>{
        const  { title, overview, poster_path, vote_average,}= movie
          if(title && overview && poster_path && vote_average){
            return movie
          }
        }).
        
        map((movie) => {
          return (
            <Movie token={film.token} {...movie} show={show} key={movie.id} />
          );
        })}
      </main>

      {show && (
        <Form
          onClick={() => {
            setShow(false);
          }}
          {...film}
          onChange={changeState}
          onSubmit={submitForm}
        />
      )}
    </div>
  );
};

export default App;