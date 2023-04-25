import { useEffect, useState } from "react";
import MovieDetail from "./MovieDetail";
import classes from "./MoviesList.module.css";
import { useQuery, gql } from "@apollo/client";

const MOVIES_DATA = gql`
  query Query {
    allFilms {
      films {
        title
        director
        releaseDate
        id
        starshipConnection {
          starships {
            id
            name
            manufacturers
            starshipClass
            passengers
            model
          }
        }
      }
    }
  }
`;

function MoviesList() {
  const { data, loading, error } = useQuery(MOVIES_DATA);
  const [moviesList, setMoviesList] = useState([]);

  useEffect(() => {
    if (data) {
      setMoviesList(data.allFilms.films);
      console.log(data);
    }
  }, [data]);

  return (
    <div className={classes.container}>
      <h1 className={classes.heading}>Star Wars Movies</h1>
      {loading && <h2>Loading...</h2>}
      {error && <h2>Failed to fetch Movies...</h2>}
      {moviesList.length > 0 &&
        moviesList.map((movie) => (
          <MovieDetail
            key={movie.id}
            id={movie.id}
            title={movie.title}
            director={movie.director}
            starships={movie.starshipConnection.starships}
            releaseDate={movie.releaseDate}
          />
        ))}
    </div>
  );
}
export default MoviesList;
