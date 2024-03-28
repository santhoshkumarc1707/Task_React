import UserProfile from "./UserProfile";

function GrandchildComponent({ userName }) {
    return <UserProfile userName={userName} />;
  }
  
  export default GrandchildComponent;