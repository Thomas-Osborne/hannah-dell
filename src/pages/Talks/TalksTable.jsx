import data from '../../data/talks.json';
import { splitByName } from '../../utils/dataUtils';
import Table from '../../components/Table';

export default function TalksTable(props) {

  data.sort((a, b) => new Date(b.date) - new Date(a.date));
  const newData = props.pinnedOnly ? data.filter(item => item.pinned) : data;

  const generateTableRows = (data, isHeading) => data.map(item => {
    return (
      <tr key={item.id}>
        {!isHeading && 
          <td>
            {item.notes 
              ? item.name 
              : 
                <>
                  {item.name} (<a href={`/notes/${item.notes}`} target="_blank" rel="noopener noreferrer">notes</a>)
                </>
            }
          </td>
        }
        <td>
          {item.seminarUrl ? (
            <a href={item.seminarUrl} target="_blank" rel="noopener noreferrer">{item.seminarName}</a>
          ) : (
            item.seminarName
          )}
        </td>
        <td>
          {new Date(item.date).toLocaleString("en-GB", { year: "numeric", month: "long" })}
        </td>
        <td>
          {item.location}
        </td>
      </tr>
    )
  })

  return (
    props.pinnedOnly
      ? <Table 
          content={generateTableRows(newData, false)} 
          heading={props.heading}
          isCollapsible={props.isCollapsible}
          tableProportions={[30, 30, 20, 20]}
        />
      : 
        splitByName(newData, "name").map((itemGroup, index) =>
          <Table 
            key={index} 
            content={generateTableRows(itemGroup, true)} 
            heading={itemGroup[0].name}
            isCollapsible={props.isCollapsible}
            tableProportions={[50, 20, 20, 10]}
          />
        )
  );
}