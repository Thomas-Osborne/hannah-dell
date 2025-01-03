import data from '../../data/travel.json';
import Table from '../../components/Table';

export default function TravelTable(props) {

  data.sort((a, b) => new Date(b.date) - new Date(a.date));

  const newData = props.pinnedOnly ? data.filter(item => item.pinned) : data;

  const tableRows = newData.map(item => {
    return (
      <tr key={item.id}>
        <td>
          {item.url ? (
            <>
              <a href={item.url} target="_blank">{item.name}</a>
            </>
          ) : (
            item.name
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
  });

  return (
    <Table 
      content={tableRows} heading={props.heading} isCollapsible={false}
      tableProportions={[60, 20, 20]}
    />
  )
}