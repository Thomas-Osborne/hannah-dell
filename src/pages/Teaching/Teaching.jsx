import Intro from '../../components/Intro';
import TeachingTable from './TeachingTable';

export default function Teaching(props) {

  return (
    <div className="container">
      <Intro name={props.name} />
      <TeachingTable pinnedOnly={false} isCollapsible={false}/>
    </div>
  )
}