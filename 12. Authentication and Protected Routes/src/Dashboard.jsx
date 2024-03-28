import { useAuth } from "./Authcontext";

const Dashboard = () => {
  const { logout } = useAuth();

  const handleLogout = () => {
    // Log out logic
    logout();
  };

  return (
    <div>
      <h2>Dashboard</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;
