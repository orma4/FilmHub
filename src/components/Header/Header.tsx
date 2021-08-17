import "./Header.css";
import { AppBar, Toolbar } from "@material-ui/core";

interface HeaderProps {
  setPage: (pageNumber: number) => void;
}

export function Header({ setPage }: HeaderProps) {
  return (
    <AppBar position="static">
      <Toolbar>
        <span className="nav-item" onClick={() => setPage(0)}>
          Home
        </span>
        <span className="nav-item" onClick={() => setPage(1)}>
          Favorites
        </span>
      </Toolbar>
    </AppBar>
  );
}
