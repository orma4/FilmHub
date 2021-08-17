import "./Favorites.css";
import { IFilm } from "../../App";
import { Card, makeStyles } from "@material-ui/core";

interface FavoritesProps {
  favorites: string[];
  films: IFilm[];
}

const useStyles = makeStyles({
  root: {
    maxWidth: 275,
    margin: 20,
    padding: 20,
    "@media (max-width: 600px)": {
      maxWidth: "100%",
    },
  },
});

export function Favorites({ films, favorites }: FavoritesProps) {
  const classes = useStyles();

  const selectedFilms = films.filter((film: IFilm) =>
    favorites.includes(film.uid)
  );

  if (!selectedFilms.length) {
    // is empty
  }

  return (
    <div className="favorites">
      {selectedFilms.map((film: IFilm) => {
        const { title, opening_crawl } = film.properties;

        return (
          <Card className={classes.root} key={film._id}>
            <h2 className="title">{title}</h2>
            <p className="desc">{opening_crawl}</p>
          </Card>
        );
      })}
    </div>
  );
}
