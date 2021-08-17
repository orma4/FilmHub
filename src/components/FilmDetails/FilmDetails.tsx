import { IFilm } from "../../App";
import "./FilmDetails.css";
import { Button } from "@material-ui/core";

interface FilmDetailsProps {
  film: IFilm | undefined;
  toggleFavorite: (favoriteStatus: string) => void;
  favorites: string[];
}

export function FilmDetails({
  film,
  toggleFavorite,
  favorites,
}: FilmDetailsProps) {
  if (!film) return <strong>No film selected yet.</strong>;

  const isFavorite = !!favorites.find((fav: string) => fav === film.uid);

  const { title, opening_crawl } = film.properties;

  return (
    <div className="film-details">
      <h2 className="title">{title}</h2>
      <p className="desc">{opening_crawl}</p>

      <Button
        variant="contained"
        color="primary"
        onClick={() => toggleFavorite(film.uid)}
      >
        {isFavorite ? "Remove from favorite" : "Add to favorite"}
      </Button>
    </div>
  );
}
