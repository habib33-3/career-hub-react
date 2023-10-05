import { useContext, useState } from "react";
import "./Login.css";
import { AuthContext } from "../hooks/AuthProvider";

const Login = () => {
  const { googleSignIn, signIn } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((res) => console.log(res.user))
      .catch((err) => console.log(err.message));
  };

  const handleLogin = () => {
    if ((email, password)) {
      return signIn(email, password)
        .then((res) => console.log(res.user))
        .catch((err) => setError(err.message));
    }
  };

  return (
    <div>
      <div>
        <div className="login-container">
          <div>
            {error}
            <input
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              type="email"
              placeholder="Type Email"
            />
            <input
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
              type="password"
              placeholder="Type Password"
            />
            <button
              onClick={handleLogin}
              className="Login-btn"
            >
              Login
            </button>
            <div className="login-btns">
              <button
                onClick={handleGoogleSignIn}
                className="google-btn "
              >
                Google Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
