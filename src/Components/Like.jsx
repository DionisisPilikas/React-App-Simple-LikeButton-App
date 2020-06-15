import React, {useState} from 'react';
import './Like.css';

function Like( props ){  //props einai property opou perexei arguments tou object me data
                         //ki epistrefei ena react element
    let [likes, setLikes] = useState(props.likes); //getter kai setter
  
    function handleLike() {        
        const updated = Number(likes) + 1;
        setLikes(updated);     
    }
  
    return (
        <button className="like" onClick={handleLike}>
            <i className="fas fa-thumbs-up like-icon"></i>
            Like: { likes } 
        </button>
    );
}
export default Like;









