import data from '../../data/courses.json';
import Table from '../../components/Table';
import { Link } from "react-router-dom";

export default function CoursesTable(props) {
  const sortedData = [...data].sort((a, b) => new Date(b.date) - new Date(a.date));

  const newData = props.pinnedOnly ? sortedData.filter(item => item.pinned) : sortedData;

  const generateTableRows = (data) => data.map(item => {
    return (
      <tr key={item.id}>
      <td>
        {item.lectures && item.lectures.path ? (
          <Link to={`./${item.lectures.path}`}>
            {item.name}
          </Link>
        ) : (
          item.name
        )}
      </td>
        <td>
          {item.courseUrl ? (
            <>
              <a href={item.courseUrl} target="_blank">Official Page</a>
            </>
          ) : (
            item.name
          )}
        </td>
        <td>
          {item.dateText}
        </td>
        <td>
          {item.location}
        </td>
      </tr>
    )
  });

  return (
    <Table
      content={generateTableRows(newData)} 
      heading={props.heading ? props.heading : ""}
      isCollapsible={props.isCollapsible}
      tableProportions={[40, 15, 15, 30]}
    />
  );
}