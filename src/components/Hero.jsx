import { useLocation } from "react-router-dom"

import data from "../data/pages.json";

export default function Hero(props) {

  const location = useLocation();
  let path = location.pathname.split('/')[1];

  const invalidPageStr = "Page Not Found";

  let page;
  if (path == "") {
    page = data.find(page => page.path === props.homePath);
  } else {
    page = data.find(page => page.path === path);
  }

  const name = page ? page.name : invalidPageStr;
  
  return (
    <div className="hero">
      <div className="body-container">
        <h1 className="hero-heading">{name}</h1>
      </div>
    </div>
  )
}
