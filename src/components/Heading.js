import React from 'react';
function Heading(props) {
  return (  
    <div>
      <h1 className={`italic font-bold ${props.size}`}>{props.title}</h1>
    </div>
  );
}
Heading.defaultprop = {
  title:'Heading',
  size:'5xl',
};

export default Heading;