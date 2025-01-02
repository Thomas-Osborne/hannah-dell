import { useLocation } from "react-router-dom"

import data from "../data/pages.json";

export default function Hero(props) {

  const location = useLocation();
  const path = location.pathname.split('/')[1];

  let pageData;
  if (path == "") {
    pageData = data.find(page => page.path === props.homePath);
  } else {
    pageData = data.find(page => page.path === path);
  }
  
  return (
    pageData && <div className="hero">
      <div className="body-container">
        <h1 className="hero-heading">{pageData.name}</h1>
      </div>
    </div>
  )
}
