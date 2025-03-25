import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="body-container">
      <div className="page-not-found">
        <div className="page-not-found-text">
        <h3>Error Code 404</h3>
        <h4>Sorry! The page you were looking for cannot be found. This could be because the page no longer exists, or you have typed the URL into your search bar incorrectly.</h4>
        </div>
        <Link to="/" className="page-not-found-btn-wrapper">
          <button className="page-not-found-btn">
            Go Home
          </button>
        </Link>
      </div>
    </div>
  )
}