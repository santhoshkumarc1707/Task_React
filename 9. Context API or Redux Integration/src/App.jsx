import { UserProvider } from "./UseContext";
import UserProfile from "./UserProfile";

function App() {
  return (
    <UserProvider>
      <div className="App">
        <header className="App-header">
          <UserProfile />
        </header>
      </div>
    </UserProvider>
  );
}

export default App;
