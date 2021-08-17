import { IFilm } from "../../App";
import "./Sidebar.css";

interface SidebarProps {
  films: IFilm[];
  handleSelect: (uid: string) => void;
}

export function Sidebar({ films = [], handleSelect }: SidebarProps) {
  return (
    <div className="sidebar">
      {films.map((film: IFilm) => {
        return (
          <div
            key={film.uid}
            className="item"
            onClick={() => handleSelect(film.uid)}
          >
            {film.properties.title}
          </div>
        );
      })}
    </div>
  );
}
