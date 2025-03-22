import Intro from '../../components/Intro';
import TravelTable from './TravelTable';

export default function Travel(props) {

  return (
    <div className="container">
      <Intro name={props.name} />
      <TravelTable pinnedOnly={false}/>
    </div>
  )
}