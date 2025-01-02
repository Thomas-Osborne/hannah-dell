import Intro from '../../components/Intro';
import TalksTable from './TalksTable';

export default function Talks(props) {

  return (
    <>
      <Intro name={props.name} />
      <TalksTable pinnedOnly={false} isCollapsible={true}/>
    </>
  )
}