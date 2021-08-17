import { IFilm } from "../../App";
import "./Sidebar.css";

interface SidebarProps {
  films: IFilm[];
  onSelect: (uid: string) => void;
}

export function Sidebar({ films = [], onSelect }: SidebarProps) {
  return (
    <div className="sidebar">
      {films.map((film: IFilm) => {
        return (
          <div
            key={film.uid}
            className="item"
            onClick={() => onSelect(film.uid)}
          >
            {film.properties.title}
          </div>
        );
      })}
    </div>
  );
}
