import { MathJaxContext } from 'better-react-mathjax';
import { useEffect } from 'react';

import data from '../data/pages.json';


export default function Intro(props) {

  const document = data.find(item => item.name === props.name);

  // Rerender MathJax on change
  useEffect(() => {
    if (document && document.content.html && window.MathJax) {
      window.MathJax.typeset();
    }
  }, [document, document.content.html]);

  const insertImageInFirstContentElement = () => {
    const image = document.content.image 
      ? `<img src="${document.content.image.path}" alt="${document.content.image.altText}" class="img-me" />` 
      : undefined;
  
    if (document.content.html && document.content.image) {
      // Insert image after the first tag (e.g. <p>) if image path exists
      return (
        document.content.image && document.content.image.path
        ? document.content.html.replace(/(<[^>]+>)/, `$1${image}`)
        : document.content.html
      );
    }
  
    return document.content.html;
  };

  return (
    document && 
      <MathJaxContext>
        <div
          className="page-content body-container"
          dangerouslySetInnerHTML={{ __html: insertImageInFirstContentElement() }} // note data must come from safe source
        />
      </MathJaxContext>
  )
}