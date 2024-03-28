import { useNavigate } from "react-router-dom";
import { useAuth } from "./Authcontext";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = () => {
    // Simulate successful login
    login();
    navigate("/");
  };

  return (
    <div>
      <h2>Login</h2>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
