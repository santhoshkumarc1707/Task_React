import ChildComponent from './ChildComponent';
function ParentComponent({ userName }) {
    return <ChildComponent userName={userName} />;
  }
  export default ParentComponent;