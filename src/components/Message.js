import React, { useEffect } from "react"; 



const Message = ({messageText, removeMessage}) => {

   useEffect (() => {
    const messageTimeout = window.setTimeout(() => {
        removeMessage(true);
    }, 1500);

        window.setTimeout(messageTimeout);

    return () => {
        window.clearTimeout(messageTimeout);
    };
   
   });

    return (
        <div className="message">
            <p>{messageText}</p>
            <span className="close-message" onClick={removeMessage}>x</span>
        </div>

    )
}



export default Message;