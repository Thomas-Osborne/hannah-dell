import Intro from '../../components/Intro';
import ResearchInfo from './ResearchInfo';

export default function Research(props) {

  return (
    <div className="container">
      <Intro name={props.name} />
      <ResearchInfo />
    </div>
  )
}