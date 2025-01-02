import data from '../../data/teaching.json';
import { splitByName } from '../../utils/dataUtils';
import Table from '../../components/Table';

export default function TeachingTable(props) {

  data.sort((a, b) => new Date(b.date) - new Date(a.date));
  
  const newData = props.pinnedOnly ? data.filter(item => item.pinned) : data;

  const generateTableRows = (data, isHeading) => data.map(item => {
    return (
      <tr key={item.id}>
        <td>
          {item.courseUrl ? (
            <>
              <a href={item.courseUrl} target="_blank" rel="noopener noreferrer">{item.name}</a>
            </>
          ) : (
            item.name
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
        />
      : 
        splitByName(newData, "location").map((itemGroup, index) => 
          <Table
            key={index}
            content={generateTableRows(itemGroup, true)}
            heading={itemGroup[0].location}
            isCollapsible={props.isCollapsible}
          />
        )
  )
}