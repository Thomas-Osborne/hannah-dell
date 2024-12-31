import data from '../data/research.json';
import Article from '../components/Article';

export default function Articles(props) {
  data.sort((a, b) => new Date(b.date) - new Date(a.date));
  const newData = props.pinnedOnly ? data.filter(item => item.pinned) : data;

  return (
    <>
      {newData && newData.length > 0 && (
        <div className="body-container py-4">
          <h2>{props.heading ? props.heading : "Articles"}</h2>
          {newData.map(item => {
            return (
              <Article item={item} key={item.id} />
            )
          })}
        </div>
      )};
    </>
  )
}