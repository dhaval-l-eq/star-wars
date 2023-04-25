import classes from "./MovieDetail.module.css";

function MovieDetail(props) {
  return (
    <div className={classes.box}>
      <h2>{props.title}</h2>
      <div className={classes.grid}>
        <div className={classes["movie-details"]}>
          <p>Directed by: {props.director}</p>
          <p>Release Date: {props.releaseDate}</p>
        </div>
        <div className={classes["starship-details"]}>
          <h3>Starship details</h3>
          <ul>
            {props.starships.map((ship) => (
              <li key={ship.id}>
                <p>
                  Name: <span className={classes.detail}>{ship.name}</span>
                </p>
                <p>
                  Model: <span className={classes.detail}>{ship.model}</span>
                </p>
                <p>
                  Passengers:{" "}
                  <span className={classes.detail}>{ship.passengers}</span>
                </p>
                <p>
                  Class:{" "}
                  <span className={classes.detail}>{ship.starshipClass}</span>
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
export default MovieDetail;
