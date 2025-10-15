import { useParams } from 'react-router-dom';
import data from '../../data/teaching.json';
import NotFound from '../../components/NotFound';

export default function TeachingInfo() {
  const { path } = useParams();
  const course = data.find(c => c.lectures && c.lectures.path === path);

  if (!course) return <NotFound />;

  return (
    <div className="container">
      <div className="page-content body-container">
        <p></p>
        <h2>{course.name}</h2>
        {course.courseUrl ? (
          <div className="course-intro-container">
            <em>
              {course.dateText}, {course.location}{" "}
            </em>
            
            <strong><a href={course.courseUrl} target="_blank" rel="noopener noreferrer">
              Official Course Page
            </a></strong>
          </div>
          ) : (
            <em>
              {course.dateText} ({course.location})
            </em>
          )
        }
        {course.description && <p>{course.description}</p>}
        {course.lectures && course.lectures.data && course.lectures.data.length > 0 && (
          <>
            <div className="table-container">
              <table className="">
                <tbody>
                  {course.lectures.data.map(lecture => (
                    <tr key={lecture.week}>
                      <td>{lecture.week}</td>
                      <td>{lecture.date}</td>
                      <td>{lecture.topic}</td>
                      <td>
                        {lecture.materials && lecture.materials.length > 0 ? (
                          <ul className="course-bullet">
                            {lecture.materials.map(material => (
                              <li key={material.id}>
                                <a href={material.url} target="_blank" rel="noopener noreferrer">
                                  {material.name}
                                </a>
                              </li>
                            ))}
                          </ul>
                        ) : (
                          ""
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
