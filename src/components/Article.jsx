import { Fragment, useEffect } from 'react';
import { MathJaxContext } from 'better-react-mathjax';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

import data from '../data/collaborators.json';

export default function Article(props) {
    
  // Rerender MathJax on change
  useEffect(() => {
    if (props.isOpen && window.MathJax) {
      window.MathJax.typeset();
    }
  }, [props.isOpen, props.item.abstract]);

  const showCollaborators = () => {
    const collaborators = getCollaborators();

    if (!collaborators) return;

    const formattedCollaborators = formatCollaboratorsJsx(collaborators);
    
    return concatenateCollaboratorsJsx(formattedCollaborators, "Joint with");

  };

  const getCollaborators = () => {
    return props.item.collaborators
      .map(id => data.find(collaborator => collaborator.id === id))
      .filter(Boolean);
  };
  
  const formatCollaboratorsJsx = (collaborators) => {
    return collaborators.map(collaborator => 
      collaborator.url 
        ? <a key={collaborator.id} href={collaborator.url} target="_blank">{collaborator.name}</a> 
        : collaborator.name
    );
  };

  const concatenateCollaboratorsJsx = (formattedCollaborators, initialString) => {
    if (formattedCollaborators.length == 1) {
      return (
        <h4><em>
          {initialString} {formattedCollaborators[0]}
        </em></h4>
      )
    }

    if (formattedCollaborators.length == 2) {
      return (
        <h4><em>
          {initialString} {formattedCollaborators[0]} and {formattedCollaborators[1]}
        </em></h4>
      )
    }

    return (
      <h4><em>
        Joint with {formattedCollaborators.slice(0, -1).map((item, i) => <Fragment key={i}>{item}, </Fragment>)} and {formattedCollaborators[formattedCollaborators.length - 1]}
      </em></h4>
    )
  }

  return (
    <div className="article-container" key={props.item.id}>
        <div className="article-top">
          <div className="article-info">
            <div className="article-title-button">
              {props.isCollapsible && 
                <button 
                  className="article-toggle" 
                  alt="Show/Hide Abstract"
                  onClick={props.handleClick}>
                  {props.isOpen 
                    ? <FontAwesomeIcon icon={faChevronUp} size="2xs" className="icon-style" /> 
                    : <FontAwesomeIcon icon={faChevronDown} size="2xs" className="icon-style" />
                  }
                </button>
                }
              <h3 className="article-heading">{props.item.name}</h3>
            </div>
            <div className={`article-links ${props.isCollapsible ? "article-links-pinned" : "article-links-unpinned"}`}>
              {props.item.arxiv && (<a className="article-link" href={props.item.arxiv} target="_blank">(arXiv)</a>)}
              {props.item.pdf && (<a className="article-link" href={`./papers/${props.item.pdf}`} target="_blank">(PDF)</a>)}
            </div>
          </div>
          <div className="article-journal">
            {props.item.journalStatus && 
              props.item.journalUrl 
                ? <h5><em><a className="article-link" href={props.item.journalUrl} target="_blank">{props.item.journalStatus}</a></em></h5> 
                : <h5><em>{props.item.journalStatus}</em></h5>
            }
            {props.item.showYear && <span className="article-detail">({new Date(props.item.date).toLocaleString("en-GB", { year: "numeric" })})</span>}
          </div>
        </div>
        <div className="article-bottom">
          {/* <div className="article-details">
            {props.item.collaborators && <h4><em>Joint with {props.item.collaborators}</em></h4>}
          </div> */}
          <div className="article-details">
            {props.item.collaborators && showCollaborators()}
          </div>
          {props.isOpen &&
            <div className="article-abstract-container">
              <h4 className="article-description">Description</h4>
              <MathJaxContext>
                <div
                  className="article-abstract"
                  dangerouslySetInnerHTML={{ __html: props.item.abstract }} // note data must come from safe source
                />
              </MathJaxContext>
            </div>
          }
        </div>
      </div>
  );
};