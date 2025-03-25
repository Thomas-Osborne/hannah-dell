import { useState } from 'react';

import data from '../data/research.json';
import Article from '../components/Article';

export default function Articles(props) {
  data.sort((a, b) => new Date(b.date) - new Date(a.date));
  const newData = props.pinnedOnly ? data.filter(item => item.pinned) : data;

  const [expandedArticleId, setExpandedArticleId] = useState(null);

  const handleToggle = (id) => {
    setExpandedArticleId((prev) => (prev === id ? null : id));
  }

  return (
    <>
      {newData && newData.length > 0 && (
        <div className="body-container articles-container">
          <h2 className="article-title">{props.heading ? props.heading : "Articles"}</h2>
          {newData.map(item => {
            return (
              <Article 
                item={item}
                key={item.id}
                isCollapsible={props.isCollapsible}
                isOpen={props.isCollapsible ? item.id === expandedArticleId : true}
                handleClick={() => handleToggle(item.id)}
              />
            )
          })}
        </div>
      )}
    </>
  )
}