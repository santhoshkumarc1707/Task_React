import { useState } from "react";

const Message = () => {
  const [Message, setMessage] = useState(false);
  return (
    <div>
      {Message ? <p> clicked the button conditionally </p> : <p> click the button  </p>}
      <button onClick={() => setMessage(!Message)}>Click Me !</button>
    </div>
  );
};

export default Message;
