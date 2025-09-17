import Intro from '../../components/Intro';
import CoursesTable from './CoursesTable';

export default function Courses(props) {

  return (
    <div className="container">
      <Intro name={props.name} />
      <CoursesTable pinnedOnly={false} isCollapsible={false}/>
    </div>
  )
}