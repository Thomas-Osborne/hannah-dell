import data from '../../data/teaching.json';
import { splitByName } from '../../utils/dataUtils';
import Table from '../../components/Table';
import { Link } from 'react-router-dom';

export default function TeachingTable(props) {

  data.sort((a, b) => new Date(b.date) - new Date(a.date));
  
  const newData = props.pinnedOnly ? data.filter(item => item.pinned) : data;

  const generateTableRows = (data, isHeading) => data.map(item => {
    return (
      <tr key={item.id}>
        <td>
          {item.lectures?.path ? (
            <Link to={`./${item.lectures.path}`}>
              {item.name}
            </Link>
          ) : (
            item.name
          )}
          {item.courseUrl && (
            <> (<a href={item.courseUrl} target="_blank" rel="noopener noreferrer">official page</a>)</>
          )}
        </td>
        <td>
          {item.dateText}
        </td>
        {!isHeading && 
          <td>
            {item.location}
          </td>
        }
      </tr>
    )
  })

  return (
    props.pinnedOnly
      ? 
        <Table
          content={generateTableRows(newData, false)} 
          heading={props.heading}
          isCollapsible={props.isCollapsible}
          tableProportions={[60, 20, 20]}
        />
      : 
        splitByName(newData, "location").map((itemGroup, index) => 
          <Table
            key={index}
            content={generateTableRows(itemGroup, true)}
            heading={itemGroup[0].location}
            isCollapsible={props.isCollapsible}
            tableProportions={[65, 35]}
          />
        )
  )
}