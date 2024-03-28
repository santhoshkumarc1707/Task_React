import ParentComponent from "./ParentComponent";

function App() {
  const userName = "John Doe"; // Example user name

  return (
    <div>
      <h1>Welcome to Our App</h1>
      <ParentComponent userName={userName} />
    </div>
  );
}

export default App;
