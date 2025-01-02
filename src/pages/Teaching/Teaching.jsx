import Intro from '../../components/Intro';
import TeachingTable from './TeachingTable';

export default function Teaching(props) {

  return (
    <>
      <Intro name={props.name} />
      <TeachingTable pinnedOnly={false} isCollapsible={false}/>
    </>
  )
}