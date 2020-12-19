
import React from 'react';

const download = (props) =>{
  
    return (
        
        <div className="Download">
            <img  alt={props.img.description} src={props.img.urls.regular} />
            <button><a href={props.img.links.download+'?force=true'}>Download</a></button>
        </div>
    )
}

export default download;