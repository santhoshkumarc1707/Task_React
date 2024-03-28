import GrandchildComponent from './GrandchildComponent';
function ChildComponent({ userName }) {
    return <GrandchildComponent userName={userName} />;
  }
  export default ChildComponent;