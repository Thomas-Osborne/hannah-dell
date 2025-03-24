import Intro from '../../components/Intro';
import TalksTable from './TalksTable';

export default function Talks(props) {

  return (
    <div className="container">
      <Intro name={props.name} />
      <TalksTable pinnedOnly={false} isCollapsible={true}/>
    </div>
  )
}