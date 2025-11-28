import React from 'react';
import Image from 'next/image';

function ImageContent( {src , pos , toppos}) {
  return ( 
  <div className={`absolute flex flex-col  ${pos} ${toppos}`}>
    <Image src={src} alt="Image-content" width={450} height={200} quality={100} priority className="custom-3d-move"/>
  </div> );
}

export default ImageContent;

