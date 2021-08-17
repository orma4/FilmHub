import { ReactNode } from "react";
import "./Main.css";

interface MainProps {
  children: ReactNode;
}

export function Main({ children }: MainProps) {
  return <div className="Main">{children}</div>;
}