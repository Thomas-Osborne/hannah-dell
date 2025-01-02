import { useState } from 'react';

export default function Table(props) {

  const [isOpen, setIsOpen] = useState(false);
  const minToShow = 3;


  let displayedContent;
  if (props.content) {
    if (props.content.length > minToShow && props.isCollapsible && !isOpen) {
      displayedContent = props.content.slice(0, minToShow);
    }
    else {
      displayedContent = props.content;
    }
  }

  const colGroup = props.tableProportions
  ? props.tableProportions.map((width, index) => (
      <col key={index} style={{ width: `${width}%` }} />
    ))
  : null;


  return (
    <>
    {props.content && props.content.length > 0 && (
      <div className="body-container">
        <div className="table-container">
          {props.heading && <h2 className="table-title">{props.heading}</h2>}
          <table 
            className="table" 
          >
            {colGroup && <colgroup>{colGroup}</colgroup>}
            <tbody>{displayedContent}</tbody>
          </table>
        </div>
        {props.isCollapsible && props.content.length > 3 && <div className="table-button-container">
          <button 
            className="table-button"
            onClick={() => setIsOpen(!isOpen)}
          >
            See {isOpen ? "Less" : "More"}...
          </button>
        </div>}
      </div>
    )};
    </>
  )
};