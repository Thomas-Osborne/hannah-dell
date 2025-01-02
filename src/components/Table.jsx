import { useState } from 'react';

export default function Table(props) {

  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <>
    {props.content && props.content.length > 0 && (
      <div className="body-container">
        <div className="table-container">
          {props.heading && <h2 className="table-title">{props.heading}</h2>}
          <table>
            <tbody>
              {props.content}
            </tbody>
          </table>
        </div>
        {props.isCollapsible && <div className="table-button-container">
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